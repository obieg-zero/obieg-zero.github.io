const K = globalThis.__obieg.jsxRuntime, { jsx: n, jsxs: o, Fragment: g } = K, M = globalThis.__obieg.React, { useState: c, useEffect: q, useCallback: L, useRef: V, useMemo: A, useReducer: B, useContext: D, createContext: W, createElement: $, Fragment: H, memo: J, forwardRef: U, useLayoutEffect: Z, useId: G, Children: Q, isValidElement: X, cloneElement: Y, Suspense: ee, lazy: te, Component: ne, PureComponent: se, createRef: ae, useImperativeHandle: le, useDebugValue: ie, useSyncExternalStore: ce, useTransition: oe, useDeferredValue: re, startTransition: de } = M;
let h, b, C, k, R, a;
const ue = (d) => {
  h = d.host, { ListItem: b, Tabs: C, Field: k } = d.ui, { Package: R } = d.icons, a = d.sdk;
  function S() {
    const [x, j] = c("installed"), [i, I] = c(null), [O, T] = c([]), [_, f] = c(null), [m, p] = c(null), [w, N] = c({}), [, z] = c(0), r = a.getAllPlugins(), y = L(async () => {
      T(await a.listInstalled());
      try {
        I(await a.fetchRegistry());
      } catch {
      }
      N(await h.db.getSettings(""));
    }, []);
    q(() => {
      y();
    }, []);
    async function v(e, s) {
      f(e), p(null);
      try {
        await s(), await y(), p({ text: "OK", ok: !0 });
      } catch (t) {
        p({ text: t.message, ok: !1 });
      } finally {
        f(null);
      }
    }
    function E(e) {
      var t, u;
      const s = !a.isPluginEnabled(e);
      if (a.setPluginEnabled(e, s), s)
        for (const l of ((t = r.find((F) => F.id === e)) == null ? void 0 : t.requires) ?? []) a.isPluginEnabled(l) || a.setPluginEnabled(l, !0);
      if (!s)
        for (const l of r) (u = l.requires) != null && u.includes(e) && a.isPluginEnabled(l.id) && a.setPluginEnabled(l.id, !1);
      z((l) => l + 1);
    }
    async function P(e, s) {
      await h.db.setSetting(e, s), N((t) => ({ ...t, [e]: s }));
    }
    return /* @__PURE__ */ o("div", { className: "flex-1 min-h-0 flex flex-col p-2 space-y-2", children: [
      /* @__PURE__ */ n(
        C,
        {
          active: x,
          onSelect: (e) => j(e),
          items: [{ id: "installed", label: "Zainstalowane" }, { id: "catalog", label: "Katalog" }, { id: "settings", label: "Ustawienia" }]
        }
      ),
      x === "catalog" ? /* @__PURE__ */ o(g, { children: [
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
              aside: /* @__PURE__ */ o("div", { className: "flex items-center gap-1", children: [
                /* @__PURE__ */ n("span", { className: "badge badge-ghost badge-sm text-2xs", children: e.version }),
                _ === e.id ? /* @__PURE__ */ n("span", { className: "loading loading-spinner loading-xs" }) : s ? /* @__PURE__ */ n("span", { className: "text-2xs text-success", children: "zainstalowany" }) : /* @__PURE__ */ n("button", { className: "btn btn-primary btn-xs", onClick: () => v(e.id, () => a.install(e.repo)), children: "Instaluj" })
              ] })
            },
            e.id
          );
        })
      ] }) : x === "settings" ? /* @__PURE__ */ o(g, { children: [
        Object.entries(w).length === 0 && /* @__PURE__ */ n("p", { className: "text-xs text-base-content/30 py-2", children: "Brak ustawien." }),
        Object.entries(w).map(([e, s]) => /* @__PURE__ */ n(k, { label: e, children: e.includes("key") || e.includes("token") || e.includes("secret") ? /* @__PURE__ */ n(
          "input",
          {
            type: "password",
            value: s,
            onChange: (t) => P(e, t.target.value),
            className: "input input-bordered input-sm text-xs w-full font-mono"
          }
        ) : /* @__PURE__ */ n(
          "input",
          {
            type: "text",
            value: s,
            onChange: (t) => P(e, t.target.value),
            className: "input input-bordered input-sm text-xs w-full font-mono"
          }
        ) }, e))
      ] }) : /* @__PURE__ */ n(g, { children: (() => {
        const e = r.filter((t) => a.isPluginEnabled(t.id) && !t.alwaysOn), s = r.filter((t) => !a.isPluginEnabled(t.id));
        return /* @__PURE__ */ o(g, { children: [
          e.length > 0 && /* @__PURE__ */ n("div", { className: "text-2xs text-base-content/30 uppercase tracking-wider px-1 pt-1", children: "Aktywne" }),
          e.map((t) => /* @__PURE__ */ n(
            b,
            {
              label: t.label,
              detail: t.description,
              separator: !0,
              aside: /* @__PURE__ */ n("button", { className: "btn btn-ghost btn-xs text-2xs", onClick: () => E(t.id), children: "Wyłącz" })
            },
            t.id
          )),
          s.length > 0 && /* @__PURE__ */ n("div", { className: "text-2xs text-base-content/30 uppercase tracking-wider px-1 pt-3", children: "Nieaktywne" }),
          s.map((t) => {
            const u = O.find((l) => l.id === t.id);
            return /* @__PURE__ */ n("div", { className: "opacity-40 hover:opacity-70 transition-opacity", children: /* @__PURE__ */ n(
              b,
              {
                label: t.label,
                detail: t.description,
                separator: !0,
                aside: /* @__PURE__ */ o("div", { className: "flex items-center gap-1", children: [
                  u && /* @__PURE__ */ n(
                    "button",
                    {
                      className: "btn btn-ghost btn-xs text-2xs text-error",
                      onClick: () => v(t.id, () => a.uninstall(t.id)),
                      children: "Odinstaluj"
                    }
                  ),
                  /* @__PURE__ */ n("button", { className: "btn btn-ghost btn-xs text-2xs", onClick: () => E(t.id), children: "Włącz" })
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
    layout: { center: S }
  };
};
export {
  ue as default
};
