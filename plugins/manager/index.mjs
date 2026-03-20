// ../obieg-zero-plugins/.shims/react.mjs
var R = globalThis.__obieg.React;
var { useState, useEffect, useCallback, useRef, useMemo, useReducer, useContext, createContext, createElement, Fragment, memo, forwardRef, useLayoutEffect, useId, useSyncExternalStore, useTransition, useDebugValue, Component } = R;

// ../obieg-zero-plugins/.shims/jsx-runtime.mjs
var J = globalThis.__obieg.jsxRuntime;
var { jsx, jsxs, Fragment: Fragment2 } = J;

// ../obieg-zero-plugins/manager/src/index.tsx
var _host;
var ListItem;
var Tabs;
var Field;
var Package;
var ArrowUpCircle;
var sdk;
var pluginManagerPlugin = (deps) => {
  _host = deps.host;
  ({ ListItem, Tabs, Field } = deps.ui);
  ({ Package, ArrowUpCircle } = deps.icons);
  sdk = deps.sdk;
  function ManagerCenter() {
    const [tab, setTab] = useState("installed");
    const [registry, setRegistry] = useState(null);
    const [installed, setInstalled] = useState([]);
    const [busy, setBusy] = useState(null);
    const [settings, setSettings] = useState({});
    const plugins = sdk.getAllPlugins();
    const refresh = useCallback(async () => {
      setInstalled(await sdk.listInstalled());
      try {
        setRegistry(await sdk.fetchRegistry());
      } catch {
      }
      setSettings(await _host.db.getSettings(""));
    }, []);
    useEffect(() => {
      refresh();
    }, []);
    async function run(id, fn) {
      setBusy(id);
      try {
        await fn();
        await refresh();
        sdk.log(`${id}: OK`, "ok");
      } catch (e) {
        sdk.log(`${id}: ${e.message}`, "error");
      } finally {
        setBusy(null);
      }
    }
    async function saveSetting(key, value) {
      await _host.db.setSetting(key, value);
      setSettings((s) => ({ ...s, [key]: value }));
    }
    return /* @__PURE__ */ jsxs("div", { className: "flex-1 min-h-0 flex flex-col p-2 space-y-2", children: [
      /* @__PURE__ */ jsx(
        Tabs,
        {
          active: tab,
          onSelect: (id) => setTab(id),
          items: [{ id: "installed", label: "Zainstalowane" }, { id: "catalog", label: "Katalog" }, { id: "settings", label: "Ustawienia" }]
        }
      ),
      tab === "catalog" ? /* @__PURE__ */ jsxs(Fragment2, { children: [
        !registry && /* @__PURE__ */ jsx("p", { className: "text-xs text-base-content/40 py-2", children: "Ladowanie..." }),
        registry?.length === 0 && /* @__PURE__ */ jsx("p", { className: "text-xs text-base-content/30 py-2", children: "Katalog pusty." }),
        registry?.map((entry) => {
          const isPresent = plugins.some((p) => p.id === entry.id);
          return /* @__PURE__ */ jsx(
            ListItem,
            {
              separator: true,
              label: entry.label,
              detail: entry.description,
              aside: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
                busy === entry.id ? /* @__PURE__ */ jsx("span", { className: "loading loading-spinner loading-xs" }) : isPresent ? /* @__PURE__ */ jsx("span", { className: "text-2xs text-success", children: "zainstalowany" }) : /* @__PURE__ */ jsx("button", { className: "btn btn-primary btn-xs", onClick: () => run(entry.id, () => sdk.install(entry.repo)), children: "Instaluj" }),
                /* @__PURE__ */ jsx("span", { className: "badge badge-ghost badge-sm text-2xs", children: entry.version })
              ] })
            },
            entry.id
          );
        })
      ] }) : tab === "settings" ? /* @__PURE__ */ jsxs(Fragment2, { children: [
        Object.entries(settings).length === 0 && /* @__PURE__ */ jsx("p", { className: "text-xs text-base-content/30 py-2", children: "Brak ustawien." }),
        Object.entries(settings).map(([key, value]) => /* @__PURE__ */ jsx(Field, { label: key, children: key.includes("key") || key.includes("token") || key.includes("secret") ? /* @__PURE__ */ jsx(
          "input",
          {
            type: "password",
            value,
            onChange: (e) => saveSetting(key, e.target.value),
            className: "input input-bordered input-sm text-xs w-full font-mono"
          }
        ) : /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            value,
            onChange: (e) => saveSetting(key, e.target.value),
            className: "input input-bordered input-sm text-xs w-full font-mono"
          }
        ) }, key))
      ] }) : /* @__PURE__ */ jsx(Fragment2, { children: plugins.map((p) => {
        const isOpfs = installed.some((i) => i.id === p.id);
        const remote = registry?.find((r) => r.id === p.id);
        const hasUpdate = isOpfs && remote && remote.version !== p.version;
        return /* @__PURE__ */ jsx(
          ListItem,
          {
            separator: true,
            label: p.label,
            detail: p.description,
            aside: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
              hasUpdate && (busy === p.id ? /* @__PURE__ */ jsx("span", { className: "loading loading-spinner loading-xs" }) : /* @__PURE__ */ jsxs("button", { className: "btn btn-warning btn-xs text-2xs", onClick: () => run(p.id, () => sdk.install(remote.repo)), children: [
                /* @__PURE__ */ jsx(ArrowUpCircle, { size: 12 }),
                remote.version
              ] })),
              isOpfs && /* @__PURE__ */ jsx(
                "button",
                {
                  className: "btn btn-ghost btn-xs text-2xs text-error",
                  onClick: () => run(p.id, () => sdk.uninstall(p.id)),
                  children: "Odinstaluj"
                }
              ),
              /* @__PURE__ */ jsx("span", { className: "badge badge-ghost badge-sm text-2xs", children: p.version ?? "" })
            ] })
          },
          p.id
        );
      }) })
    ] });
  }
  return {
    id: "manager",
    label: "Pluginy",
    description: "Katalog i instalacja pluginow",
    icon: Package,
    layout: { center: ManagerCenter }
  };
};
var index_default = pluginManagerPlugin;
export {
  index_default as default
};
