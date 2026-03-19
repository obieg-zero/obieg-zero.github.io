// ../obieg-zero-plugins/.shims/react.mjs
var R = globalThis.__obieg.React;
var { useState, useEffect, useCallback, useRef, useMemo, useReducer, useContext, createContext, createElement, Fragment, memo, forwardRef, useLayoutEffect, useId, useSyncExternalStore, useTransition, useDebugValue, Component } = R;

// ../obieg-zero-plugins/wibor-evidence/src/store.ts
var EVIDENCE_TYPES = [
  ["contract", "Umowa kredytu"],
  ["annexes", "Aneksy do umowy"],
  ["certificate", "Zaswiadczenie z banku o historii splat"],
  ["esis", "Formularz ESIS (jesli otrzymany)"],
  ["demand", "Wezwanie do zaplaty (kopia)"],
  ["demandProof", "Potwierdzenie nadania wezwania"],
  ["repaymentHistory", "Historia splat rat kredytu"]
];
var _posts;
var _sdk;
var _selectedType = null;
var subs = /* @__PURE__ */ new Set();
var emit = () => subs.forEach((fn) => fn());
function setSelectedType(t) {
  _selectedType = t;
  emit();
}
function useSelectedType() {
  return useSyncExternalStore((cb) => {
    subs.add(cb);
    return () => subs.delete(cb);
  }, () => _selectedType);
}
function initStore(host, sdk) {
  _posts = host.posts;
  _sdk = sdk;
}
function useSyncCase() {
  const calcApi = _sdk.getProvider("wibor-calc");
  return calcApi?.useCalc() ?? null;
}
function useEvidence(caseId) {
  const posts = _posts.usePosts("wibor-evidence", { parentId: caseId ?? void 0 });
  return EVIDENCE_TYPES.map(([type, label]) => {
    const matching = posts.filter((p) => p.data.evidenceType === type);
    return { type, label, uploaded: matching.length > 0, count: matching.length, postIds: matching.map((p) => p.id) };
  });
}
function useEvidenceFiles(caseId, type) {
  const posts = _posts.usePosts("wibor-evidence", { parentId: caseId ?? void 0 });
  return posts.filter((p) => p.data.evidenceType === type);
}
async function uploadEvidence(caseId, type, file) {
  const postId = crypto.randomUUID();
  await _posts.add("wibor-evidence", {
    evidenceType: type,
    filename: file.name,
    size: file.size,
    mimeType: file.type,
    uploadedAt: Date.now()
  }, { id: postId, parentId: caseId });
  await _posts.writeFile(postId, file.name, file);
}
async function removeEvidence(postId) {
  await _posts.delete(postId);
}
async function getEvidenceFile(postId, filename) {
  return _posts.readFile(postId, filename);
}

// ../obieg-zero-plugins/.shims/jsx-runtime.mjs
var J = globalThis.__obieg.jsxRuntime;
var { jsx, jsxs, Fragment: Fragment2 } = J;

// ../obieg-zero-plugins/wibor-evidence/src/ui.tsx
function createUI(ui, icons) {
  const { Box, Cell, ListItem, Section } = ui;
  const { Check, Circle, Upload, X, Eye, Folder } = icons;
  function Left() {
    const calc = useSyncCase();
    const caseId = calc?.caseId ?? null;
    const evidence = useEvidence(caseId);
    const selectedType = useSelectedType();
    if (!caseId) return /* @__PURE__ */ jsx(Box, { header: /* @__PURE__ */ jsx(Cell, { label: true, children: "Dowody" }), body: /* @__PURE__ */ jsx("div", { className: "text-xs text-base-content/40 text-center py-4", children: "Najpierw utw\xF3rz sprawe w Kalkulatorze" }) });
    const uploaded = evidence.filter((e) => e.uploaded).length;
    return /* @__PURE__ */ jsx(Box, { header: /* @__PURE__ */ jsxs(Cell, { label: true, children: [
      "Dowody (",
      uploaded,
      "/",
      evidence.length,
      ")"
    ] }), body: /* @__PURE__ */ jsx(Fragment2, { children: evidence.map((e) => /* @__PURE__ */ jsx(
      ListItem,
      {
        label: e.label,
        detail: e.uploaded ? `${e.count} plik(ow)` : void 0,
        active: selectedType === e.type,
        onClick: () => setSelectedType(e.type),
        aside: e.uploaded ? /* @__PURE__ */ jsx(Check, { size: 14, className: "text-success" }) : /* @__PURE__ */ jsx(Circle, { size: 12, className: "text-base-content/20" })
      },
      e.type
    )) }) });
  }
  function Center() {
    const calc = useSyncCase();
    const caseId = calc?.caseId ?? null;
    const selectedType = useSelectedType();
    const files = useEvidenceFiles(caseId, selectedType ?? "");
    const evidence = useEvidence(caseId);
    const fileRef = useRef(null);
    if (!caseId) return /* @__PURE__ */ jsx("div", { className: "flex-1 flex items-center justify-center", children: /* @__PURE__ */ jsxs("div", { className: "text-center space-y-3", children: [
      /* @__PURE__ */ jsx(Folder, { size: 48, className: "mx-auto text-base-content/20" }),
      /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold", children: "Dowody WIBOR" }),
      /* @__PURE__ */ jsx("p", { className: "text-xs text-base-content/40", children: "Utw\xF3rz sprawe w Kalkulatorze, aby zarzadzac dowodami" })
    ] }) });
    if (!selectedType) {
      const uploaded = evidence.filter((e) => e.uploaded).length;
      return /* @__PURE__ */ jsx("div", { className: "flex-1 flex items-center justify-center", children: /* @__PURE__ */ jsxs("div", { className: "text-center space-y-3", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-2xl font-bold", children: [
          "Sprawa: ",
          calc?.caseName
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "text-xs text-base-content/40", children: [
          "Wybierz typ dowodu po lewej \xB7 ",
          uploaded,
          "/",
          evidence.length,
          " dodanych"
        ] })
      ] }) });
    }
    const typeLabel = evidence.find((e) => e.type === selectedType)?.label ?? selectedType;
    const handleUpload = async (e) => {
      const file = e.target.files?.[0];
      if (!file || !caseId) return;
      await uploadEvidence(caseId, selectedType, file);
      e.target.value = "";
    };
    const handlePreview = async (postId, filename) => {
      try {
        const file = await getEvidenceFile(postId, filename);
        const url = URL.createObjectURL(file);
        window.open(url, "_blank");
      } catch {
        alert("Nie mozna otworzyc pliku");
      }
    };
    return /* @__PURE__ */ jsxs("div", { className: "flex-1 min-h-0 flex flex-col p-6 space-y-6", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "text-lg font-bold", children: typeLabel }),
        /* @__PURE__ */ jsxs("div", { className: "text-xs text-base-content/40", children: [
          files.length,
          " plik(ow)"
        ] })
      ] }),
      /* @__PURE__ */ jsx("input", { ref: fileRef, type: "file", accept: ".pdf,.jpg,.jpeg,.png,.doc,.docx", onChange: handleUpload, className: "hidden" }),
      /* @__PURE__ */ jsxs("button", { onClick: () => fileRef.current?.click(), className: "btn btn-outline btn-sm gap-2 w-fit", children: [
        /* @__PURE__ */ jsx(Upload, { size: 14 }),
        "Dodaj plik"
      ] }),
      files.length === 0 && /* @__PURE__ */ jsx("div", { className: "text-sm text-base-content/40", children: 'Brak plikow \u2014 kliknij "Dodaj plik" aby przeslac dokument' }),
      /* @__PURE__ */ jsx("div", { className: "flex-1 min-h-0 overflow-y-auto space-y-2", children: files.map((f) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 p-3 rounded-lg border border-base-300", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsx("div", { className: "text-sm font-medium truncate", children: f.data.filename }),
          /* @__PURE__ */ jsxs("div", { className: "text-xs text-base-content/40", children: [
            (f.data.size / 1024).toFixed(0),
            " KB \xB7 ",
            new Date(f.data.uploadedAt).toLocaleDateString("pl-PL")
          ] })
        ] }),
        /* @__PURE__ */ jsx("button", { onClick: () => handlePreview(f.id, f.data.filename), className: "btn btn-ghost btn-sm btn-square", children: /* @__PURE__ */ jsx(Eye, { size: 14 }) }),
        /* @__PURE__ */ jsx("button", { onClick: () => removeEvidence(f.id), className: "btn btn-ghost btn-sm btn-square text-error", children: /* @__PURE__ */ jsx(X, { size: 14 }) })
      ] }, f.id)) })
    ] });
  }
  function Footer() {
    const calc = useSyncCase();
    const evidence = useEvidence(calc?.caseId ?? null);
    const uploaded = evidence.filter((e) => e.uploaded).length;
    if (!calc?.caseId) return null;
    return /* @__PURE__ */ jsxs("div", { className: "flex items-center px-4 text-xs text-base-content/30", children: [
      "Dowody \xB7 ",
      uploaded,
      "/",
      evidence.length,
      " typow dodanych"
    ] });
  }
  return { Left, Center, Footer };
}

// ../obieg-zero-plugins/wibor-evidence/src/index.tsx
var plugin = (deps) => {
  const { Folder } = deps.icons;
  const sdk = deps.sdk;
  initStore(deps.host, sdk);
  sdk.registerProvider("wibor-evidence", { useEvidence, getEvidenceFile });
  const { Left, Center, Footer } = createUI(deps.ui, deps.icons);
  return {
    id: "wibor-evidence",
    label: "Dowody WIBOR",
    description: "Upload, podglad, status dokumentow per sprawa",
    icon: Folder,
    requires: ["wibor-calc"],
    defaultEnabled: false,
    layout: { left: Left, center: Center, footer: Footer }
  };
};
var index_default = plugin;
export {
  index_default as default
};
