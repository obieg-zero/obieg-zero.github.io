// ../obieg-zero-plugins/.shims/react.mjs
var R = globalThis.__obieg.React;
var { useState, useEffect, useCallback, useRef, useMemo, useReducer, useContext, createContext, createElement, Fragment, memo, forwardRef, useLayoutEffect, useId, useSyncExternalStore, useTransition, useDebugValue, Component } = R;

// ../obieg-zero-plugins/.shims/jsx-runtime.mjs
var J = globalThis.__obieg.jsxRuntime;
var { jsx, jsxs, Fragment: Fragment2 } = J;

// ../obieg-zero-plugins/projects/src/index.tsx
var _host;
var ListItem;
var Field;
var Plus;
var X;
var sdk;
var projectsPlugin = (deps) => {
  _host = deps.host;
  ({ ListItem, Field } = deps.ui);
  ({ Plus, X } = deps.icons);
  sdk = deps.sdk;
  let state = { projects: [], current: null };
  const subs = /* @__PURE__ */ new Set();
  const emit = () => subs.forEach((fn) => fn());
  function set(patch) {
    state = { ...state, ...patch };
    emit();
  }
  _host.opfs.listProjects().then((p) => set({ projects: p.filter((n) => !n.startsWith("__")) }));
  async function create(name) {
    const n = name.trim();
    if (!n) return;
    await _host.opfs.createProject(n);
    await _host.db.addProject({ id: n, name: n, createdAt: Date.now() }).catch(() => {
    });
    set({ projects: [...state.projects, n], current: n });
  }
  async function remove(name) {
    await _host.opfs.removeProject(name).catch(() => {
    });
    await _host.db.clearProject(name).catch(() => {
    });
    try {
      localStorage.removeItem(`pipeline:${name}`);
    } catch {
    }
    set({ projects: state.projects.filter((n) => n !== name), current: state.current === name ? null : state.current });
  }
  function select(name) {
    set({ current: name });
    sdk.doAction("shell:close-left");
  }
  function useProjects() {
    const snap = useSyncExternalStore((cb) => {
      subs.add(cb);
      return () => subs.delete(cb);
    }, () => state);
    return { ...snap, select, create, remove };
  }
  function ProjectList() {
    const { projects, current, select: select2, create: create2, remove: remove2 } = useProjects();
    const [name, setName] = useState("");
    return /* @__PURE__ */ jsxs(Fragment2, { children: [
      projects.map((p) => /* @__PURE__ */ jsx(ListItem, { label: p, active: current === p, onClick: () => select2(p), action: { icon: X, onClick: () => remove2(p) } }, p)),
      /* @__PURE__ */ jsx(Field, { label: "", children: /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsx(
          "input",
          {
            value: name,
            onChange: (e) => setName(e.target.value),
            onKeyDown: (e) => {
              if (e.key === "Enter" && name.trim()) {
                create2(name.trim());
                setName("");
              }
            },
            placeholder: "nowy projekt...",
            className: "input input-bordered input-sm text-xs flex-1"
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => {
              if (name.trim()) {
                create2(name.trim());
                setName("");
              }
            },
            className: "btn btn-sm btn-primary text-xs",
            children: /* @__PURE__ */ jsx(Plus, { size: 14 })
          }
        )
      ] }) })
    ] });
  }
  sdk.registerProvider("projects", { useProjects, ProjectList });
  return {
    id: "projects",
    label: "Projekty",
    description: "Lista projekt\xF3w OPFS"
  };
};
var index_default = projectsPlugin;
export {
  index_default as default
};
