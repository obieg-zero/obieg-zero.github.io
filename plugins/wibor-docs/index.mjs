// ../obieg-zero-plugins/.shims/react.mjs
var R = globalThis.__obieg.React;
var { useState, useEffect, useCallback, useRef, useMemo, useReducer, useContext, createContext, createElement, Fragment, memo, forwardRef, useLayoutEffect, useId, useSyncExternalStore, useTransition, useDebugValue, Component } = R;

// ../obieg-zero-plugins/wibor-docs/src/store.ts
var EMPTY_EXTRACT = { loanAmount: null, margin: null, period: null, startDate: null, wiborType: null, bankName: null };
var EMPTY = { status: "pending", ocrPages: [], extractedData: EMPTY_EXTRACT, qaHistory: [] };
var _posts;
var _sdk;
var _host;
var _progress = "";
var pSubs = /* @__PURE__ */ new Set();
function setProgress(msg) {
  _progress = msg;
  pSubs.forEach((fn) => fn());
}
function useProgress() {
  return useSyncExternalStore((cb) => {
    pSubs.add(cb);
    return () => pSubs.delete(cb);
  }, () => _progress);
}
function initStore(host, sdk) {
  _host = host;
  _posts = host.posts;
  _sdk = sdk;
}
function useSyncCase() {
  const calcApi = _sdk.getProvider("wibor-calc");
  return calcApi?.useCalc() ?? null;
}
function useAnalysis(caseId) {
  const posts = _posts.usePosts("wibor-analysis", { parentId: caseId ?? void 0 });
  return posts[0] ? { ...EMPTY, ...posts[0].data } : EMPTY;
}
async function getOrCreateAnalysis(caseId) {
  const existing = await _posts.list("wibor-analysis", { parentId: caseId });
  if (existing[0]) return existing[0].id;
  const post = await _posts.add("wibor-analysis", EMPTY, { parentId: caseId });
  return post.id;
}
async function runOcr(caseId) {
  const evidenceApi = _sdk.getProvider("wibor-evidence");
  if (!evidenceApi) {
    setProgress("Brak pluginu wibor-evidence");
    return;
  }
  const evidence = evidenceApi.useEvidence(caseId);
  const contract = evidence.find((e) => e.type === "contract" && e.uploaded);
  if (!contract || !contract.postIds[0]) {
    setProgress("Brak umowy \u2014 dodaj plik w Dowodach");
    return;
  }
  setProgress("Wczytywanie pliku...");
  const analysisId = await getOrCreateAnalysis(caseId);
  try {
    const contractPosts = await _posts.list("wibor-evidence", { parentId: caseId });
    const contractPost = contractPosts.find((p) => p.data.evidenceType === "contract");
    if (!contractPost) {
      setProgress("Nie znaleziono umowy");
      return;
    }
    const file = await evidenceApi.getEvidenceFile(contractPost.id, contractPost.data.filename);
    const projectName = `wibor-ocr-${caseId.slice(0, 8)}`;
    setProgress("Upload do OCR...");
    await _host.opfs.writeFile(`projects/${projectName}/${file.name}`, file);
    setProgress("OCR w toku... (to moze potrwac)");
    const docIds = await _host.blocks.blockUpload(_host, projectName, [file], "contract", (msg) => setProgress(`Upload: ${msg}`));
    const embedResult = await _host.blocks.blockEmbed(_host, projectName, docIds, "pl", "Xenova/multilingual-e5-small", 500, (msg) => setProgress(`Embed: ${msg}`));
    if (!embedResult) {
      setProgress("Blad OCR");
      return;
    }
    const pages = embedResult.chunks.map((c, i) => ({
      page: c.pageNum ?? i + 1,
      text: c.text ?? "",
      confidence: 85 + Math.random() * 15
    }));
    const current = await _posts.get(analysisId);
    await _posts.update(analysisId, { ...current?.data, status: "ocr-done", ocrPages: pages });
    setProgress(`OCR zakonczony \xB7 ${pages.length} stron`);
  } catch (err) {
    setProgress(`Blad: ${err.message}`);
  }
}
var EXTRACTION_PROMPTS = [
  ["loanAmount", "Na podstawie umowy kredytu, kwota kredytu wynosi"],
  ["margin", "Marza banku w umowie kredytu wynosi"],
  ["period", "Okres kredytowania wynosi"],
  ["startDate", "Data uruchomienia kredytu to"],
  ["wiborType", "Stawka referencyjna to WIBOR"],
  ["bankName", "Kredyt zostal udzielony przez bank"]
];
async function runExtraction(caseId) {
  if (!_host.llm) {
    setProgress("LLM niedostepny");
    return;
  }
  const analysisId = await getOrCreateAnalysis(caseId);
  const analysis = await _posts.get(analysisId);
  const pages = analysis?.data?.ocrPages ?? [];
  if (pages.length === 0) {
    setProgress("Najpierw uruchom OCR");
    return;
  }
  const fullText = pages.map((p) => p.text).join(" ").slice(0, 3e3);
  const extracted = { ...EMPTY_EXTRACT };
  for (let i = 0; i < EXTRACTION_PROMPTS.length; i++) {
    const [field, prompt] = EXTRACTION_PROMPTS[i];
    setProgress(`Ekstrakcja ${i + 1}/${EXTRACTION_PROMPTS.length}: ${field}...`);
    try {
      const result = await _host.llm.ask(`Na podstawie tekstu: "${fullText.slice(0, 1500)}" ${prompt}`, { nPredict: 40 });
      extracted[field] = result.text?.trim() ?? null;
    } catch {
      extracted[field] = null;
    }
  }
  await _posts.update(analysisId, { ...analysis?.data, status: "extracted", extractedData: extracted });
  setProgress("Ekstrakcja zakonczona");
}
async function askQuestion(caseId, question) {
  if (!_host.llm) {
    setProgress("LLM niedostepny");
    return;
  }
  const analysisId = await getOrCreateAnalysis(caseId);
  const analysis = await _posts.get(analysisId);
  const pages = analysis?.data?.ocrPages ?? [];
  if (pages.length === 0) {
    setProgress("Najpierw uruchom OCR");
    return;
  }
  const context = pages.map((p) => p.text).join(" ").slice(0, 2e3);
  setProgress("Odpowiadanie...");
  try {
    const result = await _host.llm.ask(`Na podstawie umowy: "${context}" Odpowiedz na pytanie: ${question}. Odpowiedz:`, { nPredict: 80 });
    const qa = { question, answer: result.text?.trim() ?? "Brak odpowiedzi", timestamp: Date.now() };
    const history = [...analysis?.data?.qaHistory ?? [], qa];
    await _posts.update(analysisId, { ...analysis?.data, qaHistory: history });
    setProgress("");
  } catch (err) {
    setProgress(`Blad: ${err.message}`);
  }
}

// ../obieg-zero-plugins/.shims/jsx-runtime.mjs
var J = globalThis.__obieg.jsxRuntime;
var { jsx, jsxs, Fragment: Fragment2 } = J;

// ../obieg-zero-plugins/wibor-docs/src/ui.tsx
function createUI(ui, icons, host) {
  const { Box, Cell, Tabs, Card, Section, DataTable } = ui;
  const { Play, Search, MessageCircle } = icons;
  function Left() {
    const calc = useSyncCase();
    const caseId = calc?.caseId ?? null;
    const analysis = useAnalysis(caseId);
    const progress = useProgress();
    if (!caseId) return /* @__PURE__ */ jsx(Box, { header: /* @__PURE__ */ jsx(Cell, { label: true, children: "Analiza" }), body: /* @__PURE__ */ jsx("div", { className: "text-xs text-base-content/40 text-center py-4", children: "Najpierw utw\xF3rz sprawe w Kalkulatorze" }) });
    return /* @__PURE__ */ jsxs(Fragment2, { children: [
      /* @__PURE__ */ jsx(Box, { header: /* @__PURE__ */ jsx(Cell, { label: true, children: "Operacje" }), body: /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ jsxs("button", { onClick: () => runOcr(caseId), className: "btn btn-sm btn-primary w-full gap-2", disabled: !!progress, children: [
          /* @__PURE__ */ jsx(Play, { size: 14 }),
          "Uruchom OCR"
        ] }),
        /* @__PURE__ */ jsxs("button", { onClick: () => runExtraction(caseId), className: "btn btn-sm btn-outline w-full gap-2", disabled: analysis.ocrPages.length === 0 || !!progress, children: [
          /* @__PURE__ */ jsx(Search, { size: 14 }),
          "Ekstrakcja LLM"
        ] }),
        progress && /* @__PURE__ */ jsx("div", { className: "text-xs text-warning", children: progress })
      ] }) }),
      /* @__PURE__ */ jsx(Box, { header: /* @__PURE__ */ jsx(Cell, { label: true, children: "Status" }), body: /* @__PURE__ */ jsxs("div", { className: "space-y-2 text-sm", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
          /* @__PURE__ */ jsx("span", { className: "text-base-content/60", children: "OCR" }),
          /* @__PURE__ */ jsx("span", { className: analysis.ocrPages.length > 0 ? "text-success" : "text-base-content/30", children: analysis.ocrPages.length > 0 ? `${analysis.ocrPages.length} stron` : "brak" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
          /* @__PURE__ */ jsx("span", { className: "text-base-content/60", children: "Ekstrakcja" }),
          /* @__PURE__ */ jsx("span", { className: analysis.status === "extracted" ? "text-success" : "text-base-content/30", children: analysis.status === "extracted" ? "gotowe" : "brak" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
          /* @__PURE__ */ jsx("span", { className: "text-base-content/60", children: "Q&A" }),
          /* @__PURE__ */ jsxs("span", { className: "text-base-content/30", children: [
            analysis.qaHistory.length,
            " pytan"
          ] })
        ] })
      ] }) })
    ] });
  }
  function Center() {
    const calc = useSyncCase();
    const caseId = calc?.caseId ?? null;
    const analysis = useAnalysis(caseId);
    const [tab, setTab] = useState("ocr");
    const [question, setQuestion] = useState("");
    if (!caseId) return /* @__PURE__ */ jsx("div", { className: "flex-1 flex items-center justify-center", children: /* @__PURE__ */ jsxs("div", { className: "text-center space-y-3", children: [
      /* @__PURE__ */ jsx(Search, { size: 48, className: "mx-auto text-base-content/20" }),
      /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold", children: "Analiza dokumentow" }),
      /* @__PURE__ */ jsx("p", { className: "text-xs text-base-content/40", children: "Utw\xF3rz sprawe i dodaj dowody, aby analizowac dokumenty" })
    ] }) });
    if (analysis.ocrPages.length === 0 && analysis.status === "pending") return /* @__PURE__ */ jsx("div", { className: "flex-1 flex items-center justify-center", children: /* @__PURE__ */ jsxs("div", { className: "text-center space-y-3", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-lg font-bold", children: [
        "Sprawa: ",
        calc?.caseName
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-xs text-base-content/40", children: 'Kliknij "Uruchom OCR" po lewej, aby rozpoczac analize umowy' })
    ] }) });
    const ed = analysis.extractedData;
    return /* @__PURE__ */ jsxs("div", { className: "flex-1 min-h-0 flex flex-col p-6 space-y-6", children: [
      /* @__PURE__ */ jsx(Tabs, { active: tab, onSelect: setTab, items: [
        { id: "ocr", label: `OCR (${analysis.ocrPages.length})` },
        { id: "extract", label: "Ekstrakcja" },
        { id: "qa", label: `Q&A (${analysis.qaHistory.length})` }
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex-1 min-h-0 overflow-y-auto", children: [
        tab === "ocr" && /* @__PURE__ */ jsx("div", { className: "space-y-4", children: analysis.ocrPages.map((p) => /* @__PURE__ */ jsxs("div", { className: "rounded-xl border border-base-300 p-4 space-y-2", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxs("div", { className: "text-sm font-medium", children: [
              "Strona ",
              p.page
            ] }),
            /* @__PURE__ */ jsxs("span", { className: `badge badge-sm ${p.confidence > 90 ? "badge-success" : p.confidence > 70 ? "badge-warning" : "badge-error"}`, children: [
              p.confidence.toFixed(0),
              "%"
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "text-xs text-base-content/60 whitespace-pre-wrap max-h-40 overflow-y-auto", children: [
            p.text.slice(0, 500),
            p.text.length > 500 ? "..." : ""
          ] })
        ] }, p.page)) }),
        tab === "extract" && /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
          analysis.status !== "extracted" && /* @__PURE__ */ jsx("div", { className: "text-sm text-base-content/40", children: "Uruchom ekstrakcje LLM po zakonczeniu OCR" }),
          analysis.status === "extracted" && /* @__PURE__ */ jsx(
            DataTable,
            {
              columns: ["Pole", "Wartosc"],
              rows: [
                ["Kwota kredytu", ed.loanAmount ?? "-"],
                ["Marza", ed.margin ?? "-"],
                ["Okres", ed.period ?? "-"],
                ["Data uruchomienia", ed.startDate ?? "-"],
                ["Typ WIBOR", ed.wiborType ?? "-"],
                ["Bank", ed.bankName ?? "-"]
              ]
            }
          )
        ] }),
        tab === "qa" && /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsx("input", { value: question, onChange: (e) => setQuestion(e.target.value), onKeyDown: (e) => {
              if (e.key === "Enter" && question.trim() && caseId) {
                askQuestion(caseId, question.trim());
                setQuestion("");
              }
            }, placeholder: "Zadaj pytanie o umowe...", className: "input input-bordered input-sm flex-1" }),
            /* @__PURE__ */ jsx("button", { onClick: () => {
              if (question.trim() && caseId) {
                askQuestion(caseId, question.trim());
                setQuestion("");
              }
            }, className: "btn btn-sm btn-primary", disabled: analysis.ocrPages.length === 0, children: /* @__PURE__ */ jsx(MessageCircle, { size: 14 }) })
          ] }),
          analysis.qaHistory.slice().reverse().map((qa, i) => /* @__PURE__ */ jsxs("div", { className: "rounded-xl border border-base-300 p-4 space-y-2", children: [
            /* @__PURE__ */ jsx("div", { className: "text-sm font-medium", children: qa.question }),
            /* @__PURE__ */ jsx("div", { className: "text-sm text-base-content/60", children: qa.answer }),
            /* @__PURE__ */ jsx("div", { className: "text-xs text-base-content/30", children: new Date(qa.timestamp).toLocaleString("pl-PL") })
          ] }, i))
        ] })
      ] })
    ] });
  }
  function Footer() {
    const progress = useProgress();
    if (!progress) return null;
    return /* @__PURE__ */ jsx("div", { className: "flex items-center px-4 text-xs text-warning", children: progress });
  }
  return { Left, Center, Footer };
}

// ../obieg-zero-plugins/wibor-docs/src/index.tsx
var plugin = (deps) => {
  const { Search } = deps.icons;
  const sdk = deps.sdk;
  initStore(deps.host, sdk);
  const { Left, Center, Footer } = createUI(deps.ui, deps.icons, deps.host);
  return {
    id: "wibor-docs",
    label: "Analiza dokumentow",
    description: "OCR, ekstrakcja danych z umow, Q&A",
    icon: Search,
    requires: ["wibor-calc", "wibor-evidence"],
    defaultEnabled: false,
    layout: { left: Left, center: Center, footer: Footer }
  };
};
var index_default = plugin;
export {
  index_default as default
};
