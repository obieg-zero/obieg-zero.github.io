const E = globalThis.__obieg.jsxRuntime, { jsx: o, jsxs: p, Fragment: R } = E, S = globalThis.__obieg.React, { useState: _, useEffect: D, useCallback: I, useRef: L, useMemo: N, useReducer: T, useContext: V, createContext: z, createElement: A, Fragment: $, memo: H, forwardRef: J, useLayoutEffect: K, useId: M, Children: O, isValidElement: W, cloneElement: X, Suspense: q, lazy: B, Component: G, PureComponent: Q, createRef: U, useImperativeHandle: Y, useDebugValue: Z, useSyncExternalStore: F, useTransition: ee, useDeferredValue: te, startTransition: re } = S;
let s, j, h, b, g, m;
const ne = (a) => {
  s = a.host, { ListItem: j, Field: h } = a.ui, { Plus: b, X: g } = a.icons, m = a.sdk;
  let n = { projects: [], current: null };
  const l = /* @__PURE__ */ new Set(), x = () => l.forEach((e) => e());
  function i(e) {
    n = { ...n, ...e }, x();
  }
  s.opfs.listProjects().then((e) => i({ projects: e.filter((t) => !t.startsWith("__")) }));
  async function P(e) {
    const t = e.trim();
    t && (await s.opfs.createProject(t), await s.db.addProject({ id: t, name: t, createdAt: Date.now() }).catch(() => {
    }), i({ projects: [...n.projects, t], current: t }));
  }
  async function v(e) {
    await s.opfs.removeProject(e).catch(() => {
    }), await s.db.clearProject(e).catch(() => {
    });
    try {
      localStorage.removeItem(`pipeline:${e}`);
    } catch {
    }
    i({ projects: n.projects.filter((t) => t !== e), current: n.current === e ? null : n.current });
  }
  function y(e) {
    i({ current: e }), m.doAction("shell:close-left");
  }
  function d() {
    return { ...F((t) => (l.add(t), () => l.delete(t)), () => n), select: y, create: P, remove: v };
  }
  function k() {
    const { projects: e, current: t, select: w, create: f, remove: C } = d(), [c, u] = _("");
    return /* @__PURE__ */ p(R, { children: [
      e.map((r) => /* @__PURE__ */ o(j, { label: r, active: t === r, onClick: () => w(r), action: { icon: g, onClick: () => C(r) } }, r)),
      /* @__PURE__ */ o(h, { label: "", children: /* @__PURE__ */ p("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ o(
          "input",
          {
            value: c,
            onChange: (r) => u(r.target.value),
            onKeyDown: (r) => {
              r.key === "Enter" && c.trim() && (f(c.trim()), u(""));
            },
            placeholder: "nowy projekt...",
            className: "input input-bordered input-sm text-xs flex-1"
          }
        ),
        /* @__PURE__ */ o(
          "button",
          {
            onClick: () => {
              c.trim() && (f(c.trim()), u(""));
            },
            className: "btn btn-sm btn-primary text-xs",
            children: /* @__PURE__ */ o(b, { size: 14 })
          }
        )
      ] }) })
    ] });
  }
  return m.registerProvider("projects", { useProjects: d, ProjectList: k }), {
    id: "projects",
    label: "Projekty",
    description: "Lista projektów OPFS"
  };
};
export {
  ne as default
};
