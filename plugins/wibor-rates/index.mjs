// ../obieg-zero-plugins/.shims/react.mjs
var R = globalThis.__obieg.React;
var { useState, useEffect, useCallback, useRef, useMemo, useReducer, useContext, createContext, createElement, Fragment, memo, forwardRef, useLayoutEffect, useId, useSyncExternalStore, useTransition, useDebugValue, Component } = R;

// ../obieg-zero-plugins/wibor-rates/src/store.ts
var _posts;
var _selectedId = null;
var subs = /* @__PURE__ */ new Set();
var emit = () => subs.forEach((fn) => fn());
function setSelected(id) {
  _selectedId = id;
  emit();
}
var WIBOR_3M = {
  "2015-01": 1.65,
  "2015-02": 1.65,
  "2015-03": 1.67,
  "2015-04": 1.67,
  "2015-05": 1.66,
  "2015-06": 1.67,
  "2015-07": 1.69,
  "2015-08": 1.7,
  "2015-09": 1.72,
  "2015-10": 1.73,
  "2015-11": 1.73,
  "2015-12": 1.73,
  "2016-01": 1.72,
  "2016-02": 1.7,
  "2016-03": 1.67,
  "2016-04": 1.67,
  "2016-05": 1.69,
  "2016-06": 1.71,
  "2016-07": 1.71,
  "2016-08": 1.73,
  "2016-09": 1.73,
  "2016-10": 1.73,
  "2016-11": 1.73,
  "2016-12": 1.73,
  "2017-01": 1.73,
  "2017-02": 1.73,
  "2017-03": 1.73,
  "2017-04": 1.73,
  "2017-05": 1.73,
  "2017-06": 1.73,
  "2017-07": 1.73,
  "2017-08": 1.73,
  "2017-09": 1.73,
  "2017-10": 1.73,
  "2017-11": 1.72,
  "2017-12": 1.72,
  "2018-01": 1.72,
  "2018-02": 1.72,
  "2018-03": 1.7,
  "2018-04": 1.7,
  "2018-05": 1.7,
  "2018-06": 1.71,
  "2018-07": 1.72,
  "2018-08": 1.72,
  "2018-09": 1.72,
  "2018-10": 1.72,
  "2018-11": 1.72,
  "2018-12": 1.72,
  "2019-01": 1.72,
  "2019-02": 1.72,
  "2019-03": 1.72,
  "2019-04": 1.72,
  "2019-05": 1.72,
  "2019-06": 1.72,
  "2019-07": 1.72,
  "2019-08": 1.72,
  "2019-09": 1.72,
  "2019-10": 1.72,
  "2019-11": 1.71,
  "2019-12": 1.71,
  "2020-01": 1.71,
  "2020-02": 1.69,
  "2020-03": 1.17,
  "2020-04": 0.7,
  "2020-05": 0.29,
  "2020-06": 0.27,
  "2020-07": 0.26,
  "2020-08": 0.25,
  "2020-09": 0.22,
  "2020-10": 0.22,
  "2020-11": 0.21,
  "2020-12": 0.21,
  "2021-01": 0.21,
  "2021-02": 0.21,
  "2021-03": 0.21,
  "2021-04": 0.21,
  "2021-05": 0.21,
  "2021-06": 0.21,
  "2021-07": 0.21,
  "2021-08": 0.22,
  "2021-09": 0.24,
  "2021-10": 0.64,
  "2021-11": 1.49,
  "2021-12": 2.35,
  "2022-01": 3.13,
  "2022-02": 3.57,
  "2022-03": 4.46,
  "2022-04": 5.65,
  "2022-05": 6.4,
  "2022-06": 6.82,
  "2022-07": 7.02,
  "2022-08": 7.08,
  "2022-09": 7.14,
  "2022-10": 7.19,
  "2022-11": 7.16,
  "2022-12": 7.06,
  "2023-01": 6.93,
  "2023-02": 6.9,
  "2023-03": 6.92,
  "2023-04": 6.93,
  "2023-05": 6.94,
  "2023-06": 6.93,
  "2023-07": 6.9,
  "2023-08": 6.85,
  "2023-09": 6.39,
  "2023-10": 5.85,
  "2023-11": 5.84,
  "2023-12": 5.86,
  "2024-01": 5.86,
  "2024-02": 5.86,
  "2024-03": 5.85,
  "2024-04": 5.86,
  "2024-05": 5.86,
  "2024-06": 5.86,
  "2024-07": 5.86,
  "2024-08": 5.86,
  "2024-09": 5.86,
  "2024-10": 5.85,
  "2024-11": 5.85,
  "2024-12": 5.79,
  "2025-01": 5.77,
  "2025-02": 5.59,
  "2025-03": 5.4,
  "2025-04": 5.2,
  "2025-05": 5.02,
  "2025-06": 4.83,
  "2025-07": 4.63,
  "2025-08": 4.5,
  "2025-09": 4.4,
  "2025-10": 4.3,
  "2025-11": 4.15,
  "2025-12": 4,
  "2026-01": 3.93,
  "2026-02": 3.86
};
function defaultEntries() {
  return Object.entries(WIBOR_3M).map(([k, rate]) => ({ date: `${k}-01`, rate })).sort((a, b) => a.date.localeCompare(b.date));
}
function initStore(host) {
  _posts = host.posts;
  host.posts.list("wibor-rate-set").then((sets) => {
    if (sets.length === 0) {
      const entries = defaultEntries();
      _posts.add("wibor-rate-set", { name: "WIBOR 3M (domyslne)", source: "default", entries, isActive: true, validation: validateRates(entries) });
    }
  });
}
function validateRates(entries) {
  const gaps = [], warnings = [];
  const sorted = [...entries].sort((a, b) => a.date.localeCompare(b.date));
  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i].rate < 0) warnings.push(`Ujemna stawka: ${sorted[i].date} = ${sorted[i].rate}%`);
    if (sorted[i].rate > 15) warnings.push(`Stawka > 15%: ${sorted[i].date} = ${sorted[i].rate}%`);
    if (i > 0) {
      const prev = new Date(sorted[i - 1].date), curr = new Date(sorted[i].date);
      const months = (curr.getFullYear() - prev.getFullYear()) * 12 + curr.getMonth() - prev.getMonth();
      if (months > 2) gaps.push(`Luka: ${sorted[i - 1].date} \u2192 ${sorted[i].date} (${months} mies.)`);
    }
  }
  return { gaps, warnings, valid: gaps.length === 0 && !entries.some((e) => e.rate < 0) };
}
function parseStooqCSV(text) {
  const lines = text.trim().split("\n");
  const entries = [];
  for (const line of lines) {
    const parts = line.split(",");
    if (parts.length < 5 || !/^\d{4}-\d{2}-\d{2}$/.test(parts[0])) continue;
    const rate = parseFloat(parts[4]);
    if (!isNaN(rate)) entries.push({ date: parts[0], rate });
  }
  return entries.sort((a, b) => a.date.localeCompare(b.date));
}
function parseJSON(text) {
  const data = JSON.parse(text);
  if (!Array.isArray(data)) throw new Error("Oczekiwano tablicy");
  return data.filter((e) => e.date && typeof e.rate === "number").sort((a, b) => a.date.localeCompare(b.date));
}
function exportJSON(entries) {
  return JSON.stringify(entries, null, 2);
}
function useRateSets() {
  const posts = _posts.usePosts("wibor-rate-set");
  return posts.map((p) => ({ id: p.id, ...p.data }));
}
function useSelectedId() {
  return useSyncExternalStore((cb) => {
    subs.add(cb);
    return () => subs.delete(cb);
  }, () => _selectedId);
}
function useActiveRates() {
  const sets = useRateSets();
  const active = sets.find((s) => s.isActive);
  return active?.entries ?? defaultEntries();
}
function getActiveRates() {
  return defaultEntries();
}
async function addRateSet(name, source, entries) {
  const validation = validateRates(entries);
  const id = crypto.randomUUID();
  await _posts.add("wibor-rate-set", { name, source, entries, isActive: false, validation }, { id });
  setSelected(id);
}
async function activateSet(id) {
  const all = await _posts.list("wibor-rate-set");
  for (const p of all) {
    if (p.data.isActive && p.id !== id) await _posts.update(p.id, { ...p.data, isActive: false });
  }
  const target = all.find((p) => p.id === id);
  if (target) await _posts.update(id, { ...target.data, isActive: true });
}
async function removeRateSet(id) {
  await _posts.delete(id);
  if (_selectedId === id) setSelected(null);
}

// ../obieg-zero-plugins/.shims/jsx-runtime.mjs
var J = globalThis.__obieg.jsxRuntime;
var { jsx, jsxs, Fragment: Fragment2 } = J;

// ../obieg-zero-plugins/wibor-rates/src/ui.tsx
function createUI(ui, icons) {
  const { Box, Cell, ListItem, Field, Card, DataTable } = ui;
  const { X, Check, Upload, Download, AlertTriangle } = icons;
  function Left() {
    const sets = useRateSets();
    const selectedId = useSelectedId();
    const fileRef = useRef(null);
    const [importMode, setImportMode] = useState("csv");
    const handleFile = async (e) => {
      const file = e.target.files?.[0];
      if (!file) return;
      const text = await file.text();
      try {
        const entries = importMode === "csv" ? parseStooqCSV(text) : parseJSON(text);
        if (entries.length === 0) {
          alert("Brak danych do importu");
          return;
        }
        const name = `${importMode.toUpperCase()} \xB7 ${file.name} (${entries.length} stawek)`;
        await addRateSet(name, importMode === "csv" ? "stooq-csv" : "json-import", entries);
      } catch (err) {
        alert(`Blad importu: ${err.message}`);
      }
      e.target.value = "";
    };
    return /* @__PURE__ */ jsxs(Fragment2, { children: [
      /* @__PURE__ */ jsx(Box, { header: /* @__PURE__ */ jsx(Cell, { label: true, children: "Zestawy stawek" }), body: /* @__PURE__ */ jsx(Fragment2, { children: sets.map((s) => /* @__PURE__ */ jsx(
        ListItem,
        {
          label: s.name,
          detail: `${s.entries.length} stawek${s.isActive ? " \xB7 aktywny" : ""}`,
          active: selectedId === s.id,
          onClick: () => setSelected(s.id),
          action: { icon: X, onClick: () => removeRateSet(s.id) }
        },
        s.id
      )) }) }),
      /* @__PURE__ */ jsx(Box, { header: /* @__PURE__ */ jsx(Cell, { label: true, children: "Import" }), body: /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsx("button", { onClick: () => setImportMode("csv"), className: `btn btn-sm flex-1 ${importMode === "csv" ? "btn-primary" : "btn-ghost"}`, children: "CSV (stooq)" }),
          /* @__PURE__ */ jsx("button", { onClick: () => setImportMode("json"), className: `btn btn-sm flex-1 ${importMode === "json" ? "btn-primary" : "btn-ghost"}`, children: "JSON" })
        ] }),
        /* @__PURE__ */ jsx("input", { ref: fileRef, type: "file", accept: importMode === "csv" ? ".csv,.txt" : ".json", onChange: handleFile, className: "hidden" }),
        /* @__PURE__ */ jsxs("button", { onClick: () => fileRef.current?.click(), className: "btn btn-sm btn-outline w-full gap-2", children: [
          /* @__PURE__ */ jsx(Upload, { size: 14 }),
          "Importuj plik"
        ] })
      ] }) })
    ] });
  }
  function Center() {
    const sets = useRateSets();
    const selectedId = useSelectedId();
    const selected = sets.find((s) => s.id === selectedId);
    if (!selected) return /* @__PURE__ */ jsx("div", { className: "flex-1 flex items-center justify-center", children: /* @__PURE__ */ jsxs("div", { className: "text-center space-y-3", children: [
      /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold", children: "Stawki WIBOR 3M" }),
      /* @__PURE__ */ jsx("p", { className: "text-xs text-base-content/40", children: "Wybierz zestaw po lewej lub zaimportuj nowy" })
    ] }) });
    const v = selected.validation;
    const handleExport = () => {
      const blob = new Blob([exportJSON(selected.entries)], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `wibor-${selected.id.slice(0, 8)}.json`;
      a.click();
      URL.revokeObjectURL(url);
    };
    return /* @__PURE__ */ jsxs("div", { className: "flex-1 min-h-0 flex flex-col p-6 space-y-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsx("div", { className: "text-lg font-bold", children: selected.name }),
          /* @__PURE__ */ jsxs("div", { className: "text-xs text-base-content/40", children: [
            selected.entries.length,
            " stawek \xB7 ",
            selected.source
          ] })
        ] }),
        !selected.isActive && /* @__PURE__ */ jsxs("button", { onClick: () => activateSet(selected.id), className: "btn btn-sm btn-success gap-1", children: [
          /* @__PURE__ */ jsx(Check, { size: 14 }),
          "Ustaw aktywny"
        ] }),
        selected.isActive && /* @__PURE__ */ jsx("span", { className: "badge badge-success", children: "Aktywny" }),
        /* @__PURE__ */ jsxs("button", { onClick: handleExport, className: "btn btn-sm btn-ghost gap-1", children: [
          /* @__PURE__ */ jsx(Download, { size: 14 }),
          "Export"
        ] })
      ] }),
      (v.warnings.length > 0 || v.gaps.length > 0) && /* @__PURE__ */ jsxs("div", { className: "rounded-xl border border-warning/30 bg-warning/5 p-4 space-y-2", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-warning text-sm font-medium", children: [
          /* @__PURE__ */ jsx(AlertTriangle, { size: 14 }),
          "Walidacja"
        ] }),
        v.gaps.map((g, i) => /* @__PURE__ */ jsx("div", { className: "text-xs text-warning/80", children: g }, i)),
        v.warnings.map((w, i) => /* @__PURE__ */ jsx("div", { className: "text-xs text-warning/80", children: w }, i))
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex-1 min-h-0 overflow-y-auto", children: /* @__PURE__ */ jsx(
        DataTable,
        {
          columns: ["Data", "Stawka (%)"],
          rows: selected.entries.map((e) => [e.date, e.rate.toFixed(2)])
        }
      ) })
    ] });
  }
  function Footer() {
    const sets = useRateSets();
    const active = sets.find((s) => s.isActive);
    if (!active) return null;
    return /* @__PURE__ */ jsxs("div", { className: "flex items-center px-4 text-xs text-base-content/30", children: [
      "Aktywny zestaw: ",
      active.name,
      " \xB7 ",
      active.entries.length,
      " stawek"
    ] });
  }
  return { Left, Center, Footer };
}

// ../obieg-zero-plugins/wibor-rates/src/index.tsx
var plugin = (deps) => {
  const { Database } = deps.icons;
  const sdk = deps.sdk;
  initStore(deps.host);
  sdk.registerProvider("wibor-rates", { useRates: useActiveRates, getActiveRates });
  const { Left, Center, Footer } = createUI(deps.ui, deps.icons);
  return {
    id: "wibor-rates",
    label: "Stawki WIBOR",
    description: "Import/export stawek WIBOR 3M \u2014 CSV, JSON, walidacja",
    icon: Database,
    defaultEnabled: false,
    layout: { left: Left, center: Center, footer: Footer }
  };
};
var index_default = plugin;
export {
  index_default as default
};
