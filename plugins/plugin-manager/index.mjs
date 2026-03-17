const A = globalThis.__obieg.jsxRuntime, { jsx: n, jsxs: c, Fragment: g } = A, L = globalThis.__obieg.React, { useState: r, useEffect: U, useCallback: V, useRef: B, useMemo: D, useReducer: W, useContext: $, createContext: H, createElement: J, Fragment: Z, memo: G, forwardRef: Q, useLayoutEffect: X, useId: Y, Children: ee, isValidElement: te, cloneElement: ne, Suspense: se, lazy: ae, Component: ie, PureComponent: le, createRef: ce, useImperativeHandle: oe, useDebugValue: re, useSyncExternalStore: de, useTransition: ue, useDeferredValue: ge, startTransition: be } = L;
let w, b, j, I, z, O, T, i;
const xe = (u) => {
  w = u.host, { ListItem: b, Tabs: j, Field: I } = u.ui, { Package: z, CheckCircle: O, ArrowUpCircle: T } = u.icons, i = u.sdk;
  function _() {
    const [x, F] = r("installed"), [l, K] = r(null), [v, M] = r([]), [C, y] = r(null), [m, p] = r(null), [k, E] = r({}), [, q] = r(0), d = i.getAllPlugins(), P = V(async () => {
      M(await i.listInstalled());
      try {
        K(await i.fetchRegistry());
      } catch {
      }
      E(await w.db.getSettings(""));
    }, []);
    U(() => {
      P();
    }, []);
    async function h(t, s) {
      y(t), p(null);
      try {
        await s(), await P(), p({ text: "OK", ok: !0 });
      } catch (e) {
        p({ text: e.message, ok: !1 });
      } finally {
        y(null);
      }
    }
    function R(t) {
      var e, o;
      const s = !i.isPluginEnabled(t);
      if (i.setPluginEnabled(t, s), s)
        for (const a of ((e = d.find((f) => f.id === t)) == null ? void 0 : e.requires) ?? []) i.isPluginEnabled(a) || i.setPluginEnabled(a, !0);
      if (!s)
        for (const a of d) (o = a.requires) != null && o.includes(t) && i.isPluginEnabled(a.id) && i.setPluginEnabled(a.id, !1);
      q((a) => a + 1);
    }
    async function S(t, s) {
      await w.db.setSetting(t, s), E((e) => ({ ...e, [t]: s }));
    }
    return /* @__PURE__ */ c("div", { className: "flex-1 min-h-0 flex flex-col p-2 space-y-2", children: [
      /* @__PURE__ */ n(
        j,
        {
          active: x,
          onSelect: (t) => F(t),
          items: [{ id: "installed", label: "Zainstalowane" }, { id: "catalog", label: "Katalog" }, { id: "settings", label: "Ustawienia" }]
        }
      ),
      x === "catalog" ? /* @__PURE__ */ c(g, { children: [
        !l && /* @__PURE__ */ n("p", { className: "text-xs text-base-content/40 py-2", children: "Ladowanie..." }),
        (l == null ? void 0 : l.length) === 0 && /* @__PURE__ */ n("p", { className: "text-xs text-base-content/30 py-2", children: "Katalog pusty." }),
        l == null ? void 0 : l.map((t) => {
          const s = d.some((e) => e.id === t.id);
          return /* @__PURE__ */ n(
            b,
            {
              separator: !0,
              label: t.label,
              detail: t.description,
              aside: /* @__PURE__ */ c("div", { className: "flex items-center gap-1", children: [
                /* @__PURE__ */ n("span", { className: "badge badge-ghost badge-sm text-2xs", children: t.version }),
                C === t.id ? /* @__PURE__ */ n("span", { className: "loading loading-spinner loading-xs" }) : s ? /* @__PURE__ */ n("span", { className: "text-2xs text-success", children: "zainstalowany" }) : /* @__PURE__ */ n("button", { className: "btn btn-primary btn-xs", onClick: () => h(t.id, () => i.install(t.repo)), children: "Instaluj" })
              ] })
            },
            t.id
          );
        })
      ] }) : x === "settings" ? /* @__PURE__ */ c(g, { children: [
        Object.entries(k).length === 0 && /* @__PURE__ */ n("p", { className: "text-xs text-base-content/30 py-2", children: "Brak ustawien." }),
        Object.entries(k).map(([t, s]) => /* @__PURE__ */ n(I, { label: t, children: t.includes("key") || t.includes("token") || t.includes("secret") ? /* @__PURE__ */ n(
          "input",
          {
            type: "password",
            value: s,
            onChange: (e) => S(t, e.target.value),
            className: "input input-bordered input-sm text-xs w-full font-mono"
          }
        ) : /* @__PURE__ */ n(
          "input",
          {
            type: "text",
            value: s,
            onChange: (e) => S(t, e.target.value),
            className: "input input-bordered input-sm text-xs w-full font-mono"
          }
        ) }, t))
      ] }) : /* @__PURE__ */ n(g, { children: (() => {
        const t = d.filter((e) => i.isPluginEnabled(e.id) && !e.alwaysOn), s = d.filter((e) => !i.isPluginEnabled(e.id));
        return /* @__PURE__ */ c(g, { children: [
          t.length > 0 && /* @__PURE__ */ n("div", { className: "text-2xs text-base-content/30 uppercase tracking-wider px-1 pt-1", children: "Aktywne" }),
          t.map((e) => {
            const o = v.find((N) => N.id === e.id), a = l == null ? void 0 : l.find((N) => N.id === e.id), f = o && a && a.version !== o.version;
            return /* @__PURE__ */ n(
              b,
              {
                label: /* @__PURE__ */ c("span", { className: "flex items-center gap-1.5", children: [
                  /* @__PURE__ */ n(O, { size: 12, className: "text-success shrink-0" }),
                  e.label
                ] }),
                detail: e.description,
                separator: !0,
                aside: /* @__PURE__ */ c("div", { className: "flex items-center gap-1", children: [
                  f && (C === e.id ? /* @__PURE__ */ n("span", { className: "loading loading-spinner loading-xs" }) : /* @__PURE__ */ c("button", { className: "btn btn-warning btn-xs text-2xs", onClick: () => h(e.id, () => i.install(a.repo)), children: [
                    /* @__PURE__ */ n(T, { size: 12 }),
                    a.version
                  ] })),
                  /* @__PURE__ */ n("button", { className: "btn btn-ghost btn-xs text-2xs", onClick: () => R(e.id), children: "Wyłącz" })
                ] })
              },
              e.id
            );
          }),
          s.length > 0 && /* @__PURE__ */ n("div", { className: "text-2xs text-base-content/30 uppercase tracking-wider px-1 pt-3", children: "Nieaktywne" }),
          s.map((e) => {
            const o = v.find((a) => a.id === e.id);
            return /* @__PURE__ */ n("div", { className: "opacity-40 hover:opacity-70 transition-opacity", children: /* @__PURE__ */ n(
              b,
              {
                label: e.label,
                detail: e.description,
                separator: !0,
                aside: /* @__PURE__ */ c("div", { className: "flex items-center gap-1", children: [
                  o && /* @__PURE__ */ n(
                    "button",
                    {
                      className: "btn btn-ghost btn-xs text-2xs text-error",
                      onClick: () => h(e.id, () => i.uninstall(e.id)),
                      children: "Odinstaluj"
                    }
                  ),
                  /* @__PURE__ */ n("button", { className: "btn btn-ghost btn-xs text-2xs", onClick: () => R(e.id), children: "Włącz" })
                ] })
              }
            ) }, e.id);
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
    icon: z,
    alwaysOn: !0,
    layout: { center: _ }
  };
};
export {
  xe as default
};
