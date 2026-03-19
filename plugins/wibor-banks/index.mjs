// ../obieg-zero-plugins/.shims/react.mjs
var R = globalThis.__obieg.React;
var { useState, useEffect, useCallback, useRef, useMemo, useReducer, useContext, createContext, createElement, Fragment, memo, forwardRef, useLayoutEffect, useId, useSyncExternalStore, useTransition, useDebugValue, Component } = R;

// ../obieg-zero-plugins/wibor-banks/src/seed.ts
var BANKS_SEED = [
  {
    name: "mBank",
    legalName: "mBank S.A.",
    krs: "0000025237",
    nip: "5260215088",
    address: "ul. Prosta 18, 00-850 Warszawa",
    formerNames: ["BRE Bank S.A."],
    templates: [
      { name: "mPlan Hipoteczny", margin: 2, bridgeMargin: 1.5, wiborType: "3M", rateType: "variable", commission: 2, interestMethod: "360" },
      { name: "Multiplan", margin: 1.8, bridgeMargin: 1, wiborType: "3M", rateType: "variable", commission: 1.5, interestMethod: "360" }
    ],
    legal: { directive93_13: true, directive2014_17: true, esisStatus: "partial", uokikClauses: ["6068", "6069"], notes: "Abuzywnosc klauzul WIBOR w regulaminie" }
  },
  {
    name: "PKO BP",
    legalName: "Powszechna Kasa Oszczednosci Bank Polski S.A.",
    krs: "0000026438",
    nip: "5250007738",
    address: "ul. Pulawska 15, 02-515 Warszawa",
    formerNames: [],
    templates: [
      { name: "Mieszkanie dla Mlodych", margin: 1.99, bridgeMargin: 1, wiborType: "3M", rateType: "variable", commission: 1, interestMethod: "360" },
      { name: "Wlasny Kat Hipoteczny", margin: 2.19, bridgeMargin: 1.5, wiborType: "3M", rateType: "variable", commission: 2, interestMethod: "360" }
    ],
    legal: { directive93_13: true, directive2014_17: true, esisStatus: "complete", uokikClauses: [], notes: "" }
  },
  {
    name: "Santander",
    legalName: "Santander Bank Polska S.A.",
    krs: "0000008723",
    nip: "8960005765",
    address: "al. Jana Pawla II 17, 00-854 Warszawa",
    formerNames: ["Bank Zachodni WBK S.A.", "Kredyt Bank S.A."],
    templates: [
      { name: "Hipoteka Standard", margin: 2.09, bridgeMargin: 1.2, wiborType: "3M", rateType: "variable", commission: 2, interestMethod: "360" }
    ],
    legal: { directive93_13: true, directive2014_17: true, esisStatus: "partial", uokikClauses: ["6070"], notes: "Klauzule wibor w umowach z lat 2006-2015" }
  },
  {
    name: "ING Bank Slaski",
    legalName: "ING Bank Slaski S.A.",
    krs: "0000005459",
    nip: "6340135475",
    address: "ul. Sokolska 34, 40-086 Katowice",
    formerNames: [],
    templates: [
      { name: "Kredyt Hipoteczny", margin: 1.95, bridgeMargin: 1, wiborType: "3M", rateType: "variable", commission: 1.5, interestMethod: "360" }
    ],
    legal: { directive93_13: true, directive2014_17: true, esisStatus: "complete", uokikClauses: [], notes: "" }
  },
  {
    name: "Bank Millennium",
    legalName: "Bank Millennium S.A.",
    krs: "0000010186",
    nip: "5260200091",
    address: "ul. Stanislawa Zarownego 2A, 02-174 Warszawa",
    formerNames: ["BIG Bank Gdanski S.A."],
    templates: [
      { name: "Hipoteka Millennium", margin: 2.15, bridgeMargin: 1.5, wiborType: "3M", rateType: "variable", commission: 2, interestMethod: "360" }
    ],
    legal: { directive93_13: true, directive2014_17: true, esisStatus: "missing", uokikClauses: ["6071", "6072"], notes: "Liczne postepowania UOKiK" }
  },
  {
    name: "BNP Paribas",
    legalName: "BNP Paribas Bank Polska S.A.",
    krs: "0000011571",
    nip: "5260009608",
    address: "ul. Kasprzaka 2, 01-211 Warszawa",
    formerNames: ["Fortis Bank Polska S.A.", "BGZ BNP Paribas S.A."],
    templates: [
      { name: "Kredyt Mieszkaniowy", margin: 2.05, bridgeMargin: 1.3, wiborType: "3M", rateType: "variable", commission: 1.5, interestMethod: "360" }
    ],
    legal: { directive93_13: true, directive2014_17: true, esisStatus: "partial", uokikClauses: [], notes: "" }
  },
  {
    name: "Pekao SA",
    legalName: "Bank Polska Kasa Opieki S.A.",
    krs: "0000014843",
    nip: "5260009305",
    address: "ul. Grzybowska 53/57, 00-950 Warszawa",
    formerNames: [],
    templates: [
      { name: "Pekao Hipoteczny", margin: 2.1, bridgeMargin: 1.2, wiborType: "3M", rateType: "variable", commission: 1.5, interestMethod: "360" }
    ],
    legal: { directive93_13: true, directive2014_17: true, esisStatus: "complete", uokikClauses: [], notes: "" }
  },
  {
    name: "Alior Bank",
    legalName: "Alior Bank S.A.",
    krs: "0000305178",
    nip: "1070010731",
    address: "ul. Lopuszanska 38D, 02-232 Warszawa",
    formerNames: [],
    templates: [
      { name: "Megahipoteka", margin: 2.5, bridgeMargin: 1.5, wiborType: "3M", rateType: "variable", commission: 2.5, interestMethod: "360" }
    ],
    legal: { directive93_13: true, directive2014_17: true, esisStatus: "missing", uokikClauses: [], notes: "Mlody bank, umowy od 2008" }
  },
  {
    name: "Credit Agricole",
    legalName: "Credit Agricole Bank Polska S.A.",
    krs: "0000039887",
    nip: "6570082274",
    address: "pl. Orlat Lwowskich 1, 53-605 Wroclaw",
    formerNames: ["Lukas Bank S.A."],
    templates: [
      { name: "Kredyt Hipoteczny CA", margin: 2.2, bridgeMargin: 1, wiborType: "3M", rateType: "variable", commission: 2, interestMethod: "360" }
    ],
    legal: { directive93_13: true, directive2014_17: true, esisStatus: "partial", uokikClauses: [], notes: "" }
  },
  {
    name: "Bank Pocztowy",
    legalName: "Bank Pocztowy S.A.",
    krs: "0000010821",
    nip: "5540003033",
    address: "ul. Jagiellonska 17, 85-959 Bydgoszcz",
    formerNames: [],
    templates: [
      { name: "Pocztowy Hipoteczny", margin: 2.3, bridgeMargin: 1.5, wiborType: "3M", rateType: "variable", commission: 2, interestMethod: "360" }
    ],
    legal: { directive93_13: true, directive2014_17: false, esisStatus: "missing", uokikClauses: [], notes: "" }
  },
  {
    name: "BO\u015A Bank",
    legalName: "Bank Ochrony Srodowiska S.A.",
    krs: "0000015525",
    nip: "5260200071",
    address: "ul. Zelazna 32, 00-832 Warszawa",
    formerNames: [],
    templates: [
      { name: "EKOkredyt Hipoteczny", margin: 2.25, bridgeMargin: 1.2, wiborType: "3M", rateType: "variable", commission: 1.5, interestMethod: "360" }
    ],
    legal: { directive93_13: true, directive2014_17: true, esisStatus: "partial", uokikClauses: [], notes: "" }
  },
  {
    name: "Getin Noble Bank",
    legalName: "Getin Noble Bank S.A.",
    krs: "0000304735",
    nip: "1080004850",
    address: "ul. Przyokopowa 33, 01-208 Warszawa",
    formerNames: ["Getin Bank S.A.", "Noble Bank S.A."],
    templates: [
      { name: "Getin Hipoteczny", margin: 2.6, bridgeMargin: 2, wiborType: "3M", rateType: "variable", commission: 3, interestMethod: "360" }
    ],
    legal: { directive93_13: true, directive2014_17: false, esisStatus: "missing", uokikClauses: ["6073", "6074", "6075"], notes: "Bank w restrukturyzacji. Liczne pozwy frankowe i wiborowe." }
  },
  {
    name: "Citi Handlowy",
    legalName: "Bank Handlowy w Warszawie S.A.",
    krs: "0000001538",
    nip: "5260300291",
    address: "ul. Senatorska 16, 00-923 Warszawa",
    formerNames: [],
    templates: [
      { name: "CitiMortgage", margin: 1.9, bridgeMargin: 0, wiborType: "3M", rateType: "variable", commission: 1, interestMethod: "360" }
    ],
    legal: { directive93_13: true, directive2014_17: true, esisStatus: "complete", uokikClauses: [], notes: "" }
  },
  {
    name: "Deutsche Bank Polska",
    legalName: "Deutsche Bank Polska S.A.",
    krs: "0000024522",
    nip: "6760017842",
    address: "al. Armii Ludowej 26, 00-609 Warszawa",
    formerNames: [],
    templates: [
      { name: "DB Hipoteka", margin: 2, bridgeMargin: 1, wiborType: "3M", rateType: "variable", commission: 1.5, interestMethod: "360" }
    ],
    legal: { directive93_13: true, directive2014_17: true, esisStatus: "partial", uokikClauses: [], notes: "Portfel przejety czesciowo przez Santander" }
  },
  {
    name: "Raiffeisen",
    legalName: "Raiffeisen Bank International AG Oddzial w Polsce",
    krs: "0000606843",
    nip: "1060000164",
    address: "ul. Grzybowska 78, 00-844 Warszawa",
    formerNames: ["Raiffeisen Polbank"],
    templates: [
      { name: "Raiffeisen Hipoteczny", margin: 2.1, bridgeMargin: 1, wiborType: "3M", rateType: "variable", commission: 2, interestMethod: "360" }
    ],
    legal: { directive93_13: true, directive2014_17: true, esisStatus: "partial", uokikClauses: [], notes: "" }
  }
];

// ../obieg-zero-plugins/wibor-banks/src/store.ts
var _posts;
var _selectedBankId = null;
var subs = /* @__PURE__ */ new Set();
var emit = () => subs.forEach((fn) => fn());
function setSelectedBank(id) {
  _selectedBankId = id;
  emit();
}
function useSelectedBankId() {
  return useSyncExternalStore((cb) => {
    subs.add(cb);
    return () => subs.delete(cb);
  }, () => _selectedBankId);
}
function initStore(host) {
  _posts = host.posts;
  host.posts.list("wibor-bank").then(async (banks) => {
    if (banks.length > 0) return;
    for (const b of BANKS_SEED) {
      const bankId = crypto.randomUUID();
      await _posts.add("wibor-bank", {
        name: b.name,
        legalName: b.legalName,
        krs: b.krs,
        nip: b.nip,
        address: b.address,
        formerNames: b.formerNames
      }, { id: bankId });
      for (const t of b.templates) {
        await _posts.add("wibor-bank-template", { ...t, bankId }, { parentId: bankId });
      }
      await _posts.add("wibor-bank-legal", { ...b.legal, bankId }, { parentId: bankId });
    }
  });
}
function useBanks() {
  const posts = _posts.usePosts("wibor-bank");
  return posts.map((p) => ({ id: p.id, ...p.data }));
}
function useBankTemplates(bankId) {
  const posts = _posts.usePosts("wibor-bank-template", { parentId: bankId ?? void 0 });
  return posts.map((p) => ({ id: p.id, ...p.data }));
}
function useBankLegal(bankId) {
  const posts = _posts.usePosts("wibor-bank-legal", { parentId: bankId ?? void 0 });
  return posts[0] ? { id: posts[0].id, ...posts[0].data } : null;
}

// ../obieg-zero-plugins/.shims/jsx-runtime.mjs
var J = globalThis.__obieg.jsxRuntime;
var { jsx, jsxs, Fragment: Fragment2 } = J;

// ../obieg-zero-plugins/wibor-banks/src/ui.tsx
function createUI(ui, icons) {
  const { Box, Cell, ListItem, Tabs, Card, DataTable, Section } = ui;
  const { Search, Check, X, AlertTriangle } = icons;
  function Left() {
    const banks = useBanks();
    const selectedId = useSelectedBankId();
    const [query, setQuery] = useState("");
    const filtered = query ? banks.filter((b) => b.name.toLowerCase().includes(query.toLowerCase()) || b.formerNames.some((n) => n.toLowerCase().includes(query.toLowerCase()))) : banks;
    return /* @__PURE__ */ jsx(Box, { header: /* @__PURE__ */ jsxs(Cell, { label: true, children: [
      "Banki (",
      banks.length,
      ")"
    ] }), body: /* @__PURE__ */ jsxs(Fragment2, { children: [
      /* @__PURE__ */ jsx("div", { className: "px-1 pb-2", children: /* @__PURE__ */ jsx("input", { value: query, onChange: (e) => setQuery(e.target.value), placeholder: "Szukaj banku...", className: "input input-bordered input-sm w-full" }) }),
      filtered.map((b) => /* @__PURE__ */ jsx(
        ListItem,
        {
          label: b.name,
          detail: b.formerNames.length > 0 ? `d. ${b.formerNames[0]}` : void 0,
          active: selectedId === b.id,
          onClick: () => setSelectedBank(b.id)
        },
        b.id
      ))
    ] }) });
  }
  function Center() {
    const banks = useBanks();
    const selectedId = useSelectedBankId();
    const bank = banks.find((b) => b.id === selectedId);
    const templates = useBankTemplates(selectedId);
    const legal = useBankLegal(selectedId);
    const [tab, setTab] = useState("info");
    if (!bank) return /* @__PURE__ */ jsx("div", { className: "flex-1 flex items-center justify-center", children: /* @__PURE__ */ jsxs("div", { className: "text-center space-y-3", children: [
      /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold", children: "Baza bankow" }),
      /* @__PURE__ */ jsx("p", { className: "text-xs text-base-content/40", children: "Wybierz bank z listy po lewej" })
    ] }) });
    return /* @__PURE__ */ jsxs("div", { className: "flex-1 min-h-0 flex flex-col p-6 space-y-6", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "text-lg font-bold", children: bank.name }),
        /* @__PURE__ */ jsx("div", { className: "text-xs text-base-content/40", children: bank.legalName })
      ] }),
      /* @__PURE__ */ jsx(Tabs, { active: tab, onSelect: setTab, items: [
        { id: "info", label: "Dane rejestrowe" },
        { id: "templates", label: `Szablony (${templates.length})` },
        { id: "legal", label: "Podstawy prawne" }
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex-1 min-h-0 overflow-y-auto", children: [
        tab === "info" && /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-6", children: [
            /* @__PURE__ */ jsx(Card, { label: "KRS", value: bank.krs }),
            /* @__PURE__ */ jsx(Card, { label: "NIP", value: bank.nip })
          ] }),
          /* @__PURE__ */ jsx(Section, { title: "Adres", children: /* @__PURE__ */ jsx("div", { className: "text-sm", children: bank.address }) }),
          bank.formerNames.length > 0 && /* @__PURE__ */ jsx(Section, { title: "Dawne nazwy", children: /* @__PURE__ */ jsx("div", { className: "space-y-1", children: bank.formerNames.map((n, i) => /* @__PURE__ */ jsx("div", { className: "text-sm text-base-content/60", children: n }, i)) }) })
        ] }),
        tab === "templates" && /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          templates.length === 0 && /* @__PURE__ */ jsx("div", { className: "text-sm text-base-content/40", children: "Brak szablonow" }),
          templates.map((t) => /* @__PURE__ */ jsxs("div", { className: "rounded-xl border border-base-300 p-4 space-y-3", children: [
            /* @__PURE__ */ jsx("div", { className: "text-sm font-semibold", children: t.name }),
            /* @__PURE__ */ jsx(
              DataTable,
              {
                columns: ["Parametr", "Wartosc"],
                rows: [
                  ["Marza", `${t.margin}%`],
                  ["Marza pomostowa", `${t.bridgeMargin}%`],
                  ["Typ WIBOR", t.wiborType],
                  ["Prowizja", `${t.commission}%`],
                  ["Metoda odsetek", t.interestMethod === "360" ? "30/360" : "365/360"]
                ]
              }
            )
          ] }, t.id))
        ] }),
        tab === "legal" && legal && /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-6", children: [
            /* @__PURE__ */ jsxs("div", { className: "rounded-xl border border-base-300 p-4 flex items-center gap-3", children: [
              legal.directive93_13 ? /* @__PURE__ */ jsx(Check, { size: 16, className: "text-success" }) : /* @__PURE__ */ jsx(X, { size: 16, className: "text-error" }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("div", { className: "text-sm font-medium", children: "Dyrektywa 93/13/EWG" }),
                /* @__PURE__ */ jsx("div", { className: "text-xs text-base-content/40", children: "Nieuczciwe warunki w umowach" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "rounded-xl border border-base-300 p-4 flex items-center gap-3", children: [
              legal.directive2014_17 ? /* @__PURE__ */ jsx(Check, { size: 16, className: "text-success" }) : /* @__PURE__ */ jsx(X, { size: 16, className: "text-error" }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("div", { className: "text-sm font-medium", children: "Dyrektywa 2014/17/UE" }),
                /* @__PURE__ */ jsx("div", { className: "text-xs text-base-content/40", children: "Umowy o kredyt hipoteczny" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsx(Section, { title: "Status ESIS", children: /* @__PURE__ */ jsx("span", { className: `badge ${legal.esisStatus === "complete" ? "badge-success" : legal.esisStatus === "partial" ? "badge-warning" : "badge-error"}`, children: legal.esisStatus === "complete" ? "Kompletny" : legal.esisStatus === "partial" ? "Czesciowy" : "Brak" }) }),
          legal.uokikClauses.length > 0 && /* @__PURE__ */ jsx(Section, { title: "Klauzule UOKiK", children: /* @__PURE__ */ jsx("div", { className: "flex gap-2 flex-wrap", children: legal.uokikClauses.map((c) => /* @__PURE__ */ jsxs("span", { className: "badge badge-outline", children: [
            "Nr ",
            c
          ] }, c)) }) }),
          legal.notes && /* @__PURE__ */ jsx(Section, { title: "Uwagi", children: /* @__PURE__ */ jsx("div", { className: "text-sm text-base-content/60", children: legal.notes }) })
        ] }),
        tab === "legal" && !legal && /* @__PURE__ */ jsx("div", { className: "text-sm text-base-content/40", children: "Brak danych prawnych" })
      ] })
    ] });
  }
  function Footer() {
    const banks = useBanks();
    return /* @__PURE__ */ jsxs("div", { className: "flex items-center px-4 text-xs text-base-content/30", children: [
      "Baza bankow \xB7 ",
      banks.length,
      " bankow"
    ] });
  }
  return { Left, Center, Footer };
}

// ../obieg-zero-plugins/wibor-banks/src/index.tsx
var plugin = (deps) => {
  const { Briefcase } = deps.icons;
  const sdk = deps.sdk;
  initStore(deps.host);
  sdk.registerProvider("wibor-banks", { useBanks, useBankTemplates, useBankLegal });
  const { Left, Center, Footer } = createUI(deps.ui, deps.icons);
  return {
    id: "wibor-banks",
    label: "Baza bankow",
    description: "Dane rejestrowe, szablony kredytow, podstawy prawne",
    icon: Briefcase,
    defaultEnabled: false,
    layout: { left: Left, center: Center, footer: Footer }
  };
};
var index_default = plugin;
export {
  index_default as default
};
