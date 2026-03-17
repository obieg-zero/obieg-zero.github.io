const M = globalThis.__obieg.jsxRuntime, { jsx: n, jsxs: c, Fragment: g } = M, q = globalThis.__obieg.React, { useState: o, useEffect: L, useCallback: V, useRef: A, useMemo: B, useReducer: D, useContext: W, createContext: $, createElement: H, Fragment: J, memo: U, forwardRef: Z, useLayoutEffect: G, useId: Q, Children: X, isValidElement: Y, cloneElement: ee, Suspense: te, lazy: ne, Component: se, PureComponent: ae, createRef: le, useImperativeHandle: ie, useDebugValue: ce, useSyncExternalStore: oe, useTransition: re, useDeferredValue: de, startTransition: ue } = q;
let h, b, P, k, R, S, a;
const ge = (d) => {
  h = d.host, { ListItem: b, Tabs: P, Field: k } = d.ui, { Package: R, CheckCircle: S } = d.icons, a = d.sdk;
  function j() {
    const [x, I] = o("installed"), [i, O] = o(null), [T, z] = o([]), [_, f] = o(null), [m, p] = o(null), [N, w] = o({}), [, F] = o(0), r = a.getAllPlugins(), y = V(async () => {
      z(await a.listInstalled());
      try {
        O(await a.fetchRegistry());
      } catch {
      }
      w(await h.db.getSettings(""));
    }, []);
    L(() => {
      y();
    }, []);
    async function C(e, s) {
      f(e), p(null);
      try {
        await s(), await y(), p({ text: "OK", ok: !0 });
      } catch (t) {
        p({ text: t.message, ok: !1 });
      } finally {
        f(null);
      }
    }
    function v(e) {
      var t, u;
      const s = !a.isPluginEnabled(e);
      if (a.setPluginEnabled(e, s), s)
        for (const l of ((t = r.find((K) => K.id === e)) == null ? void 0 : t.requires) ?? []) a.isPluginEnabled(l) || a.setPluginEnabled(l, !0);
      if (!s)
        for (const l of r) (u = l.requires) != null && u.includes(e) && a.isPluginEnabled(l.id) && a.setPluginEnabled(l.id, !1);
      F((l) => l + 1);
    }
    async function E(e, s) {
      await h.db.setSetting(e, s), w((t) => ({ ...t, [e]: s }));
    }
    return /* @__PURE__ */ c("div", { className: "flex-1 min-h-0 flex flex-col p-2 space-y-2", children: [
      /* @__PURE__ */ n(
        P,
        {
          active: x,
          onSelect: (e) => I(e),
          items: [{ id: "installed", label: "Zainstalowane" }, { id: "catalog", label: "Katalog" }, { id: "settings", label: "Ustawienia" }]
        }
      ),
      x === "catalog" ? /* @__PURE__ */ c(g, { children: [
        !i && /* @__PURE__ */ n("p", { className: "text-xs text-base-content/40 py-2", children: "Ladowanie..." }),
        (i == null ? void 0 : i.length) === 0 && /* @__PURE__ */ n("p", { className: "text-xs text-base-content/30 py-2", children: "Katalog pusty." }),
        i == null ? void 0 : i.map((e) => {
          const s = r.some((t) => t.id === e.id);
          return /* @__PURE__ */ n(
            b,
            {
              separator: !0,
              label: e.label,
              detail: e.description,
              aside: /* @__PURE__ */ c("div", { className: "flex items-center gap-1", children: [
                /* @__PURE__ */ n("span", { className: "badge badge-ghost badge-sm text-2xs", children: e.version }),
                _ === e.id ? /* @__PURE__ */ n("span", { className: "loading loading-spinner loading-xs" }) : s ? /* @__PURE__ */ n("span", { className: "text-2xs text-success", children: "zainstalowany" }) : /* @__PURE__ */ n("button", { className: "btn btn-primary btn-xs", onClick: () => C(e.id, () => a.install(e.repo)), children: "Instaluj" })
              ] })
            },
            e.id
          );
        })
      ] }) : x === "settings" ? /* @__PURE__ */ c(g, { children: [
        Object.entries(N).length === 0 && /* @__PURE__ */ n("p", { className: "text-xs text-base-content/30 py-2", children: "Brak ustawien." }),
        Object.entries(N).map(([e, s]) => /* @__PURE__ */ n(k, { label: e, children: e.includes("key") || e.includes("token") || e.includes("secret") ? /* @__PURE__ */ n(
          "input",
          {
            type: "password",
            value: s,
            onChange: (t) => E(e, t.target.value),
            className: "input input-bordered input-sm text-xs w-full font-mono"
          }
        ) : /* @__PURE__ */ n(
          "input",
          {
            type: "text",
            value: s,
            onChange: (t) => E(e, t.target.value),
            className: "input input-bordered input-sm text-xs w-full font-mono"
          }
        ) }, e))
      ] }) : /* @__PURE__ */ n(g, { children: (() => {
        const e = r.filter((t) => a.isPluginEnabled(t.id) && !t.alwaysOn), s = r.filter((t) => !a.isPluginEnabled(t.id));
        return /* @__PURE__ */ c(g, { children: [
          e.length > 0 && /* @__PURE__ */ n("div", { className: "text-2xs text-base-content/30 uppercase tracking-wider px-1 pt-1", children: "Aktywne" }),
          e.map((t) => /* @__PURE__ */ n(
            b,
            {
              label: /* @__PURE__ */ c("span", { className: "flex items-center gap-1.5", children: [
                /* @__PURE__ */ n(S, { size: 12, className: "text-success shrink-0" }),
                t.label
              ] }),
              detail: t.description,
              separator: !0,
              aside: /* @__PURE__ */ n("button", { className: "btn btn-ghost btn-xs text-2xs", onClick: () => v(t.id), children: "Wyłącz" })
            },
            t.id
          )),
          s.length > 0 && /* @__PURE__ */ n("div", { className: "text-2xs text-base-content/30 uppercase tracking-wider px-1 pt-3", children: "Nieaktywne" }),
          s.map((t) => {
            const u = T.find((l) => l.id === t.id);
            return /* @__PURE__ */ n("div", { className: "opacity-40 hover:opacity-70 transition-opacity", children: /* @__PURE__ */ n(
              b,
              {
                label: t.label,
                detail: t.description,
                separator: !0,
                aside: /* @__PURE__ */ c("div", { className: "flex items-center gap-1", children: [
                  u && /* @__PURE__ */ n(
                    "button",
                    {
                      className: "btn btn-ghost btn-xs text-2xs text-error",
                      onClick: () => C(t.id, () => a.uninstall(t.id)),
                      children: "Odinstaluj"
                    }
                  ),
                  /* @__PURE__ */ n("button", { className: "btn btn-ghost btn-xs text-2xs", onClick: () => v(t.id), children: "Włącz" })
                ] })
              }
            ) }, t.id);
          })
        ] });
      })() }),
      m && /* @__PURE__ */ n("div", { className: "border-t border-base-300 px-2 py-2", children: /* @__PURE__ */ n("span", { className: `text-2xs ${m.ok ? "text-success" : "text-error"}`, children: m.text }) })
    ] });
  }
  return {
    id: "plugin-manager",
    label: "Pluginy",
    description: "Katalog i instalacja pluginow",
    icon: R,
    alwaysOn: !0,
    layout: { center: j }
  };
};
export {
  ge as default
};
