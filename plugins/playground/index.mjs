(function(){if(!document.querySelector('#obieg-playground-css')){var s=document.createElement('style');s.id='obieg-playground-css';s.textContent=".react-flow{direction:ltr;--xy-edge-stroke-default: #b1b1b7;--xy-edge-stroke-width-default: 1;--xy-edge-stroke-selected-default: #555;--xy-connectionline-stroke-default: #b1b1b7;--xy-connectionline-stroke-width-default: 1;--xy-attribution-background-color-default: rgba(255, 255, 255, .5);--xy-minimap-background-color-default: #fff;--xy-minimap-mask-background-color-default: rgba(240, 240, 240, .6);--xy-minimap-mask-stroke-color-default: transparent;--xy-minimap-mask-stroke-width-default: 1;--xy-minimap-node-background-color-default: #e2e2e2;--xy-minimap-node-stroke-color-default: transparent;--xy-minimap-node-stroke-width-default: 2;--xy-background-color-default: transparent;--xy-background-pattern-dots-color-default: #91919a;--xy-background-pattern-lines-color-default: #eee;--xy-background-pattern-cross-color-default: #e2e2e2;background-color:var(--xy-background-color, var(--xy-background-color-default));--xy-node-color-default: inherit;--xy-node-border-default: 1px solid #1a192b;--xy-node-background-color-default: #fff;--xy-node-group-background-color-default: rgba(240, 240, 240, .25);--xy-node-boxshadow-hover-default: 0 1px 4px 1px rgba(0, 0, 0, .08);--xy-node-boxshadow-selected-default: 0 0 0 .5px #1a192b;--xy-node-border-radius-default: 3px;--xy-handle-background-color-default: #1a192b;--xy-handle-border-color-default: #fff;--xy-selection-background-color-default: rgba(0, 89, 220, .08);--xy-selection-border-default: 1px dotted rgba(0, 89, 220, .8);--xy-controls-button-background-color-default: #fefefe;--xy-controls-button-background-color-hover-default: #f4f4f4;--xy-controls-button-color-default: inherit;--xy-controls-button-color-hover-default: inherit;--xy-controls-button-border-color-default: #eee;--xy-controls-box-shadow-default: 0 0 2px 1px rgba(0, 0, 0, .08);--xy-edge-label-background-color-default: #ffffff;--xy-edge-label-color-default: inherit;--xy-resize-background-color-default: #3367d9}.react-flow.dark{--xy-edge-stroke-default: #3e3e3e;--xy-edge-stroke-width-default: 1;--xy-edge-stroke-selected-default: #727272;--xy-connectionline-stroke-default: #b1b1b7;--xy-connectionline-stroke-width-default: 1;--xy-attribution-background-color-default: rgba(150, 150, 150, .25);--xy-minimap-background-color-default: #141414;--xy-minimap-mask-background-color-default: rgba(60, 60, 60, .6);--xy-minimap-mask-stroke-color-default: transparent;--xy-minimap-mask-stroke-width-default: 1;--xy-minimap-node-background-color-default: #2b2b2b;--xy-minimap-node-stroke-color-default: transparent;--xy-minimap-node-stroke-width-default: 2;--xy-background-color-default: #141414;--xy-background-pattern-dots-color-default: #777;--xy-background-pattern-lines-color-default: #777;--xy-background-pattern-cross-color-default: #777;--xy-node-color-default: #f8f8f8;--xy-node-border-default: 1px solid #3c3c3c;--xy-node-background-color-default: #1e1e1e;--xy-node-group-background-color-default: rgba(240, 240, 240, .25);--xy-node-boxshadow-hover-default: 0 1px 4px 1px rgba(255, 255, 255, .08);--xy-node-boxshadow-selected-default: 0 0 0 .5px #999;--xy-handle-background-color-default: #bebebe;--xy-handle-border-color-default: #1e1e1e;--xy-selection-background-color-default: rgba(200, 200, 220, .08);--xy-selection-border-default: 1px dotted rgba(200, 200, 220, .8);--xy-controls-button-background-color-default: #2b2b2b;--xy-controls-button-background-color-hover-default: #3e3e3e;--xy-controls-button-color-default: #f8f8f8;--xy-controls-button-color-hover-default: #fff;--xy-controls-button-border-color-default: #5b5b5b;--xy-controls-box-shadow-default: 0 0 2px 1px rgba(0, 0, 0, .08);--xy-edge-label-background-color-default: #141414;--xy-edge-label-color-default: #f8f8f8}.react-flow__background{background-color:var(--xy-background-color-props, var(--xy-background-color, var(--xy-background-color-default)));pointer-events:none;z-index:-1}.react-flow__container{position:absolute;width:100%;height:100%;top:0;left:0}.react-flow__pane{z-index:1}.react-flow__pane.draggable{cursor:grab}.react-flow__pane.dragging{cursor:grabbing}.react-flow__pane.selection{cursor:pointer}.react-flow__viewport{transform-origin:0 0;z-index:2;pointer-events:none}.react-flow__renderer{z-index:4}.react-flow__selection{z-index:6}.react-flow__nodesselection-rect:focus,.react-flow__nodesselection-rect:focus-visible{outline:none}.react-flow__edge-path{stroke:var(--xy-edge-stroke, var(--xy-edge-stroke-default));stroke-width:var(--xy-edge-stroke-width, var(--xy-edge-stroke-width-default));fill:none}.react-flow__connection-path{stroke:var(--xy-connectionline-stroke, var(--xy-connectionline-stroke-default));stroke-width:var(--xy-connectionline-stroke-width, var(--xy-connectionline-stroke-width-default));fill:none}.react-flow .react-flow__edges{position:absolute}.react-flow .react-flow__edges svg{overflow:visible;position:absolute;pointer-events:none}.react-flow__edge{pointer-events:visibleStroke}.react-flow__edge.selectable{cursor:pointer}.react-flow__edge.animated path{stroke-dasharray:5;animation:dashdraw .5s linear infinite}.react-flow__edge.animated path.react-flow__edge-interaction{stroke-dasharray:none;animation:none}.react-flow__edge.inactive{pointer-events:none}.react-flow__edge.selected,.react-flow__edge:focus,.react-flow__edge:focus-visible{outline:none}.react-flow__edge.selected .react-flow__edge-path,.react-flow__edge.selectable:focus .react-flow__edge-path,.react-flow__edge.selectable:focus-visible .react-flow__edge-path{stroke:var(--xy-edge-stroke-selected, var(--xy-edge-stroke-selected-default))}.react-flow__edge-textwrapper{pointer-events:all}.react-flow__edge .react-flow__edge-text{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}.react-flow__arrowhead polyline{stroke:var(--xy-edge-stroke, var(--xy-edge-stroke-default))}.react-flow__arrowhead polyline.arrowclosed{fill:var(--xy-edge-stroke, var(--xy-edge-stroke-default))}.react-flow__connection{pointer-events:none}.react-flow__connection .animated{stroke-dasharray:5;animation:dashdraw .5s linear infinite}svg.react-flow__connectionline{z-index:1001;overflow:visible;position:absolute}.react-flow__nodes{pointer-events:none;transform-origin:0 0}.react-flow__node{position:absolute;-webkit-user-select:none;-moz-user-select:none;user-select:none;pointer-events:all;transform-origin:0 0;box-sizing:border-box;cursor:default}.react-flow__node.selectable{cursor:pointer}.react-flow__node.draggable{cursor:grab;pointer-events:all}.react-flow__node.draggable.dragging{cursor:grabbing}.react-flow__nodesselection{z-index:3;transform-origin:left top;pointer-events:none}.react-flow__nodesselection-rect{position:absolute;pointer-events:all;cursor:grab}.react-flow__handle{position:absolute;pointer-events:none;min-width:5px;min-height:5px;width:6px;height:6px;background-color:var(--xy-handle-background-color, var(--xy-handle-background-color-default));border:1px solid var(--xy-handle-border-color, var(--xy-handle-border-color-default));border-radius:100%}.react-flow__handle.connectingfrom{pointer-events:all}.react-flow__handle.connectionindicator{pointer-events:all;cursor:crosshair}.react-flow__handle-bottom{top:auto;left:50%;bottom:0;transform:translate(-50%,50%)}.react-flow__handle-top{top:0;left:50%;transform:translate(-50%,-50%)}.react-flow__handle-left{top:50%;left:0;transform:translate(-50%,-50%)}.react-flow__handle-right{top:50%;right:0;transform:translate(50%,-50%)}.react-flow__edgeupdater{cursor:move;pointer-events:all}.react-flow__pane.selection .react-flow__panel{pointer-events:none}.react-flow__panel{position:absolute;z-index:5;margin:15px}.react-flow__panel.top{top:0}.react-flow__panel.bottom{bottom:0}.react-flow__panel.top.center,.react-flow__panel.bottom.center{left:50%;transform:translate(-15px) translate(-50%)}.react-flow__panel.left{left:0}.react-flow__panel.right{right:0}.react-flow__panel.left.center,.react-flow__panel.right.center{top:50%;transform:translateY(-15px) translateY(-50%)}.react-flow__attribution{font-size:10px;background:var(--xy-attribution-background-color, var(--xy-attribution-background-color-default));padding:2px 3px;margin:0}.react-flow__attribution a{text-decoration:none;color:#999}@keyframes dashdraw{0%{stroke-dashoffset:10}}.react-flow__edgelabel-renderer{position:absolute;width:100%;height:100%;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;left:0;top:0}.react-flow__viewport-portal{position:absolute;width:100%;height:100%;left:0;top:0;-webkit-user-select:none;-moz-user-select:none;user-select:none}.react-flow__minimap{background:var( --xy-minimap-background-color-props, var(--xy-minimap-background-color, var(--xy-minimap-background-color-default)) )}.react-flow__minimap-svg{display:block}.react-flow__minimap-mask{fill:var( --xy-minimap-mask-background-color-props, var(--xy-minimap-mask-background-color, var(--xy-minimap-mask-background-color-default)) );stroke:var( --xy-minimap-mask-stroke-color-props, var(--xy-minimap-mask-stroke-color, var(--xy-minimap-mask-stroke-color-default)) );stroke-width:var( --xy-minimap-mask-stroke-width-props, var(--xy-minimap-mask-stroke-width, var(--xy-minimap-mask-stroke-width-default)) )}.react-flow__minimap-node{fill:var( --xy-minimap-node-background-color-props, var(--xy-minimap-node-background-color, var(--xy-minimap-node-background-color-default)) );stroke:var( --xy-minimap-node-stroke-color-props, var(--xy-minimap-node-stroke-color, var(--xy-minimap-node-stroke-color-default)) );stroke-width:var( --xy-minimap-node-stroke-width-props, var(--xy-minimap-node-stroke-width, var(--xy-minimap-node-stroke-width-default)) )}.react-flow__background-pattern.dots{fill:var( --xy-background-pattern-color-props, var(--xy-background-pattern-color, var(--xy-background-pattern-dots-color-default)) )}.react-flow__background-pattern.lines{stroke:var( --xy-background-pattern-color-props, var(--xy-background-pattern-color, var(--xy-background-pattern-lines-color-default)) )}.react-flow__background-pattern.cross{stroke:var( --xy-background-pattern-color-props, var(--xy-background-pattern-color, var(--xy-background-pattern-cross-color-default)) )}.react-flow__controls{display:flex;flex-direction:column;box-shadow:var(--xy-controls-box-shadow, var(--xy-controls-box-shadow-default))}.react-flow__controls.horizontal{flex-direction:row}.react-flow__controls-button{display:flex;justify-content:center;align-items:center;height:26px;width:26px;padding:4px;border:none;background:var(--xy-controls-button-background-color, var(--xy-controls-button-background-color-default));border-bottom:1px solid var( --xy-controls-button-border-color-props, var(--xy-controls-button-border-color, var(--xy-controls-button-border-color-default)) );color:var( --xy-controls-button-color-props, var(--xy-controls-button-color, var(--xy-controls-button-color-default)) );cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none}.react-flow__controls-button svg{width:100%;max-width:12px;max-height:12px;fill:currentColor}.react-flow__edge.updating .react-flow__edge-path{stroke:#777}.react-flow__edge-text{font-size:10px}.react-flow__node.selectable:focus,.react-flow__node.selectable:focus-visible{outline:none}.react-flow__node-input,.react-flow__node-default,.react-flow__node-output,.react-flow__node-group{padding:10px;border-radius:var(--xy-node-border-radius, var(--xy-node-border-radius-default));width:150px;font-size:12px;color:var(--xy-node-color, var(--xy-node-color-default));text-align:center;border:var(--xy-node-border, var(--xy-node-border-default));background-color:var(--xy-node-background-color, var(--xy-node-background-color-default))}.react-flow__node-input.selectable:hover,.react-flow__node-default.selectable:hover,.react-flow__node-output.selectable:hover,.react-flow__node-group.selectable:hover{box-shadow:var(--xy-node-boxshadow-hover, var(--xy-node-boxshadow-hover-default))}.react-flow__node-input.selectable.selected,.react-flow__node-input.selectable:focus,.react-flow__node-input.selectable:focus-visible,.react-flow__node-default.selectable.selected,.react-flow__node-default.selectable:focus,.react-flow__node-default.selectable:focus-visible,.react-flow__node-output.selectable.selected,.react-flow__node-output.selectable:focus,.react-flow__node-output.selectable:focus-visible,.react-flow__node-group.selectable.selected,.react-flow__node-group.selectable:focus,.react-flow__node-group.selectable:focus-visible{box-shadow:var(--xy-node-boxshadow-selected, var(--xy-node-boxshadow-selected-default))}.react-flow__node-group{background-color:var(--xy-node-group-background-color, var(--xy-node-group-background-color-default))}.react-flow__nodesselection-rect,.react-flow__selection{background:var(--xy-selection-background-color, var(--xy-selection-background-color-default));border:var(--xy-selection-border, var(--xy-selection-border-default))}.react-flow__nodesselection-rect:focus,.react-flow__nodesselection-rect:focus-visible,.react-flow__selection:focus,.react-flow__selection:focus-visible{outline:none}.react-flow__controls-button:hover{background:var( --xy-controls-button-background-color-hover-props, var(--xy-controls-button-background-color-hover, var(--xy-controls-button-background-color-hover-default)) );color:var( --xy-controls-button-color-hover-props, var(--xy-controls-button-color-hover, var(--xy-controls-button-color-hover-default)) )}.react-flow__controls-button:disabled{pointer-events:none}.react-flow__controls-button:disabled svg{fill-opacity:.4}.react-flow__controls-button:last-child{border-bottom:none}.react-flow__controls.horizontal .react-flow__controls-button{border-bottom:none;border-right:1px solid var( --xy-controls-button-border-color-props, var(--xy-controls-button-border-color, var(--xy-controls-button-border-color-default)) )}.react-flow__controls.horizontal .react-flow__controls-button:last-child{border-right:none}.react-flow__resize-control{position:absolute}.react-flow__resize-control.left,.react-flow__resize-control.right{cursor:ew-resize}.react-flow__resize-control.top,.react-flow__resize-control.bottom{cursor:ns-resize}.react-flow__resize-control.top.left,.react-flow__resize-control.bottom.right{cursor:nwse-resize}.react-flow__resize-control.bottom.left,.react-flow__resize-control.top.right{cursor:nesw-resize}.react-flow__resize-control.handle{width:5px;height:5px;border:1px solid #fff;border-radius:1px;background-color:var(--xy-resize-background-color, var(--xy-resize-background-color-default));translate:-50% -50%}.react-flow__resize-control.handle.left{left:0;top:50%}.react-flow__resize-control.handle.right{left:100%;top:50%}.react-flow__resize-control.handle.top{left:50%;top:0}.react-flow__resize-control.handle.bottom{left:50%;top:100%}.react-flow__resize-control.handle.top.left,.react-flow__resize-control.handle.bottom.left{left:0}.react-flow__resize-control.handle.top.right,.react-flow__resize-control.handle.bottom.right{left:100%}.react-flow__resize-control.line{border-color:var(--xy-resize-background-color, var(--xy-resize-background-color-default));border-width:0;border-style:solid}.react-flow__resize-control.line.left,.react-flow__resize-control.line.right{width:1px;transform:translate(-50%);top:0;height:100%}.react-flow__resize-control.line.left{left:0;border-left-width:1px}.react-flow__resize-control.line.right{left:100%;border-right-width:1px}.react-flow__resize-control.line.top,.react-flow__resize-control.line.bottom{height:1px;transform:translateY(-50%);left:0;width:100%}.react-flow__resize-control.line.top{top:0;border-top-width:1px}.react-flow__resize-control.line.bottom{border-bottom-width:1px;top:100%}.react-flow__edge-textbg{fill:var(--xy-edge-label-background-color, var(--xy-edge-label-background-color-default))}.react-flow__edge-text{fill:var(--xy-edge-label-color, var(--xy-edge-label-color-default))}\n";document.head.appendChild(s)}})();
const Ec = globalThis.__obieg.jsxRuntime, { jsx: N, jsxs: J, Fragment: he } = Ec, F = globalThis.__obieg.React, { useState: ue, useEffect: oe, useCallback: me, useRef: re, useMemo: ve, useReducer: Nc, useContext: Ze, createContext: Ot, createElement: Sc, Fragment: kc, memo: le, forwardRef: de, useLayoutEffect: _i, useId: Cc, Children: $c, isValidElement: Mc, cloneElement: Pc, Suspense: zc, lazy: Oc, Component: Ic, PureComponent: Tc, createRef: Ac, useImperativeHandle: Lc, useDebugValue: Dc, useSyncExternalStore: Hc, useTransition: Rc, useDeferredValue: jc, startTransition: Bc } = F, Vc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Children: $c,
  Component: Ic,
  Fragment: kc,
  PureComponent: Tc,
  Suspense: zc,
  cloneElement: Pc,
  createContext: Ot,
  createElement: Sc,
  createRef: Ac,
  default: F,
  forwardRef: de,
  isValidElement: Mc,
  lazy: Oc,
  memo: le,
  startTransition: Bc,
  useCallback: me,
  useContext: Ze,
  useDebugValue: Dc,
  useDeferredValue: jc,
  useEffect: oe,
  useId: Cc,
  useImperativeHandle: Lc,
  useLayoutEffect: _i,
  useMemo: ve,
  useReducer: Nc,
  useRef: re,
  useState: ue,
  useSyncExternalStore: Hc,
  useTransition: Rc
}, Symbol.toStringTag, { value: "Module" }));
function fe(e) {
  if (typeof e == "string" || typeof e == "number") return "" + e;
  let t = "";
  if (Array.isArray(e))
    for (let n = 0, r; n < e.length; n++)
      (r = fe(e[n])) !== "" && (t += (t && " ") + r);
  else
    for (let n in e)
      e[n] && (t += (t && " ") + n);
  return t;
}
var Wc = { value: () => {
} };
function xn() {
  for (var e = 0, t = arguments.length, n = {}, r; e < t; ++e) {
    if (!(r = arguments[e] + "") || r in n || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new Qt(n);
}
function Qt(e) {
  this._ = e;
}
function Fc(e, t) {
  return e.trim().split(/^|\s+/).map(function(n) {
    var r = "", o = n.indexOf(".");
    if (o >= 0 && (r = n.slice(o + 1), n = n.slice(0, o)), n && !t.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
Qt.prototype = xn.prototype = {
  constructor: Qt,
  on: function(e, t) {
    var n = this._, r = Fc(e + "", n), o, i = -1, s = r.length;
    if (arguments.length < 2) {
      for (; ++i < s; ) if ((o = (e = r[i]).type) && (o = Xc(n[o], e.name))) return o;
      return;
    }
    if (t != null && typeof t != "function") throw new Error("invalid callback: " + t);
    for (; ++i < s; )
      if (o = (e = r[i]).type) n[o] = ho(n[o], e.name, t);
      else if (t == null) for (o in n) n[o] = ho(n[o], e.name, null);
    return this;
  },
  copy: function() {
    var e = {}, t = this._;
    for (var n in t) e[n] = t[n].slice();
    return new Qt(e);
  },
  call: function(e, t) {
    if ((o = arguments.length - 2) > 0) for (var n = new Array(o), r = 0, o, i; r < o; ++r) n[r] = arguments[r + 2];
    if (!this._.hasOwnProperty(e)) throw new Error("unknown type: " + e);
    for (i = this._[e], r = 0, o = i.length; r < o; ++r) i[r].value.apply(t, n);
  },
  apply: function(e, t, n) {
    if (!this._.hasOwnProperty(e)) throw new Error("unknown type: " + e);
    for (var r = this._[e], o = 0, i = r.length; o < i; ++o) r[o].value.apply(t, n);
  }
};
function Xc(e, t) {
  for (var n = 0, r = e.length, o; n < r; ++n)
    if ((o = e[n]).name === t)
      return o.value;
}
function ho(e, t, n) {
  for (var r = 0, o = e.length; r < o; ++r)
    if (e[r].name === t) {
      e[r] = Wc, e = e.slice(0, r).concat(e.slice(r + 1));
      break;
    }
  return n != null && e.push({ name: t, value: n }), e;
}
var rr = "http://www.w3.org/1999/xhtml";
const po = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: rr,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function wn(e) {
  var t = e += "", n = t.indexOf(":");
  return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), po.hasOwnProperty(t) ? { space: po[t], local: e } : e;
}
function Yc(e) {
  return function() {
    var t = this.ownerDocument, n = this.namespaceURI;
    return n === rr && t.documentElement.namespaceURI === rr ? t.createElement(e) : t.createElementNS(n, e);
  };
}
function qc(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function Ei(e) {
  var t = wn(e);
  return (t.local ? qc : Yc)(t);
}
function Gc() {
}
function Ir(e) {
  return e == null ? Gc : function() {
    return this.querySelector(e);
  };
}
function Uc(e) {
  typeof e != "function" && (e = Ir(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = new Array(s), c, l, d = 0; d < s; ++d)
      (c = i[d]) && (l = e.call(c, c.__data__, d, i)) && ("__data__" in c && (l.__data__ = c.__data__), a[d] = l);
  return new we(r, this._parents);
}
function Kc(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function Zc() {
  return [];
}
function Ni(e) {
  return e == null ? Zc : function() {
    return this.querySelectorAll(e);
  };
}
function Qc(e) {
  return function() {
    return Kc(e.apply(this, arguments));
  };
}
function Jc(e) {
  typeof e == "function" ? e = Qc(e) : e = Ni(e);
  for (var t = this._groups, n = t.length, r = [], o = [], i = 0; i < n; ++i)
    for (var s = t[i], a = s.length, c, l = 0; l < a; ++l)
      (c = s[l]) && (r.push(e.call(c, c.__data__, l, s)), o.push(c));
  return new we(r, o);
}
function Si(e) {
  return function() {
    return this.matches(e);
  };
}
function ki(e) {
  return function(t) {
    return t.matches(e);
  };
}
var el = Array.prototype.find;
function tl(e) {
  return function() {
    return el.call(this.children, e);
  };
}
function nl() {
  return this.firstElementChild;
}
function rl(e) {
  return this.select(e == null ? nl : tl(typeof e == "function" ? e : ki(e)));
}
var ol = Array.prototype.filter;
function il() {
  return Array.from(this.children);
}
function sl(e) {
  return function() {
    return ol.call(this.children, e);
  };
}
function al(e) {
  return this.selectAll(e == null ? il : sl(typeof e == "function" ? e : ki(e)));
}
function cl(e) {
  typeof e != "function" && (e = Si(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = [], c, l = 0; l < s; ++l)
      (c = i[l]) && e.call(c, c.__data__, l, i) && a.push(c);
  return new we(r, this._parents);
}
function Ci(e) {
  return new Array(e.length);
}
function ll() {
  return new we(this._enter || this._groups.map(Ci), this._parents);
}
function rn(e, t) {
  this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t;
}
rn.prototype = {
  constructor: rn,
  appendChild: function(e) {
    return this._parent.insertBefore(e, this._next);
  },
  insertBefore: function(e, t) {
    return this._parent.insertBefore(e, t);
  },
  querySelector: function(e) {
    return this._parent.querySelector(e);
  },
  querySelectorAll: function(e) {
    return this._parent.querySelectorAll(e);
  }
};
function ul(e) {
  return function() {
    return e;
  };
}
function fl(e, t, n, r, o, i) {
  for (var s = 0, a, c = t.length, l = i.length; s < l; ++s)
    (a = t[s]) ? (a.__data__ = i[s], r[s] = a) : n[s] = new rn(e, i[s]);
  for (; s < c; ++s)
    (a = t[s]) && (o[s] = a);
}
function dl(e, t, n, r, o, i, s) {
  var a, c, l = /* @__PURE__ */ new Map(), d = t.length, u = i.length, f = new Array(d), p;
  for (a = 0; a < d; ++a)
    (c = t[a]) && (f[a] = p = s.call(c, c.__data__, a, t) + "", l.has(p) ? o[a] = c : l.set(p, c));
  for (a = 0; a < u; ++a)
    p = s.call(e, i[a], a, i) + "", (c = l.get(p)) ? (r[a] = c, c.__data__ = i[a], l.delete(p)) : n[a] = new rn(e, i[a]);
  for (a = 0; a < d; ++a)
    (c = t[a]) && l.get(f[a]) === c && (o[a] = c);
}
function hl(e) {
  return e.__data__;
}
function pl(e, t) {
  if (!arguments.length) return Array.from(this, hl);
  var n = t ? dl : fl, r = this._parents, o = this._groups;
  typeof e != "function" && (e = ul(e));
  for (var i = o.length, s = new Array(i), a = new Array(i), c = new Array(i), l = 0; l < i; ++l) {
    var d = r[l], u = o[l], f = u.length, p = gl(e.call(d, d && d.__data__, l, r)), g = p.length, y = a[l] = new Array(g), x = s[l] = new Array(g), m = c[l] = new Array(f);
    n(d, u, y, x, m, p, t);
    for (var v = 0, h = 0, w, $; v < g; ++v)
      if (w = y[v]) {
        for (v >= h && (h = v + 1); !($ = x[h]) && ++h < g; ) ;
        w._next = $ || null;
      }
  }
  return s = new we(s, r), s._enter = a, s._exit = c, s;
}
function gl(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function ml() {
  return new we(this._exit || this._groups.map(Ci), this._parents);
}
function yl(e, t, n) {
  var r = this.enter(), o = this, i = this.exit();
  return typeof e == "function" ? (r = e(r), r && (r = r.selection())) : r = r.append(e + ""), t != null && (o = t(o), o && (o = o.selection())), n == null ? i.remove() : n(i), r && o ? r.merge(o).order() : o;
}
function xl(e) {
  for (var t = e.selection ? e.selection() : e, n = this._groups, r = t._groups, o = n.length, i = r.length, s = Math.min(o, i), a = new Array(o), c = 0; c < s; ++c)
    for (var l = n[c], d = r[c], u = l.length, f = a[c] = new Array(u), p, g = 0; g < u; ++g)
      (p = l[g] || d[g]) && (f[g] = p);
  for (; c < o; ++c)
    a[c] = n[c];
  return new we(a, this._parents);
}
function wl() {
  for (var e = this._groups, t = -1, n = e.length; ++t < n; )
    for (var r = e[t], o = r.length - 1, i = r[o], s; --o >= 0; )
      (s = r[o]) && (i && s.compareDocumentPosition(i) ^ 4 && i.parentNode.insertBefore(s, i), i = s);
  return this;
}
function vl(e) {
  e || (e = bl);
  function t(u, f) {
    return u && f ? e(u.__data__, f.__data__) : !u - !f;
  }
  for (var n = this._groups, r = n.length, o = new Array(r), i = 0; i < r; ++i) {
    for (var s = n[i], a = s.length, c = o[i] = new Array(a), l, d = 0; d < a; ++d)
      (l = s[d]) && (c[d] = l);
    c.sort(t);
  }
  return new we(o, this._parents).order();
}
function bl(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function _l() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function El() {
  return Array.from(this);
}
function Nl() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length; o < i; ++o) {
      var s = r[o];
      if (s) return s;
    }
  return null;
}
function Sl() {
  let e = 0;
  for (const t of this) ++e;
  return e;
}
function kl() {
  return !this.node();
}
function Cl(e) {
  for (var t = this._groups, n = 0, r = t.length; n < r; ++n)
    for (var o = t[n], i = 0, s = o.length, a; i < s; ++i)
      (a = o[i]) && e.call(a, a.__data__, i, o);
  return this;
}
function $l(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function Ml(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function Pl(e, t) {
  return function() {
    this.setAttribute(e, t);
  };
}
function zl(e, t) {
  return function() {
    this.setAttributeNS(e.space, e.local, t);
  };
}
function Ol(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
  };
}
function Il(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
  };
}
function Tl(e, t) {
  var n = wn(e);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((t == null ? n.local ? Ml : $l : typeof t == "function" ? n.local ? Il : Ol : n.local ? zl : Pl)(n, t));
}
function $i(e) {
  return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function Al(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function Ll(e, t, n) {
  return function() {
    this.style.setProperty(e, t, n);
  };
}
function Dl(e, t, n) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? this.style.removeProperty(e) : this.style.setProperty(e, r, n);
  };
}
function Hl(e, t, n) {
  return arguments.length > 1 ? this.each((t == null ? Al : typeof t == "function" ? Dl : Ll)(e, t, n ?? "")) : ot(this.node(), e);
}
function ot(e, t) {
  return e.style.getPropertyValue(t) || $i(e).getComputedStyle(e, null).getPropertyValue(t);
}
function Rl(e) {
  return function() {
    delete this[e];
  };
}
function jl(e, t) {
  return function() {
    this[e] = t;
  };
}
function Bl(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? delete this[e] : this[e] = n;
  };
}
function Vl(e, t) {
  return arguments.length > 1 ? this.each((t == null ? Rl : typeof t == "function" ? Bl : jl)(e, t)) : this.node()[e];
}
function Mi(e) {
  return e.trim().split(/^|\s+/);
}
function Tr(e) {
  return e.classList || new Pi(e);
}
function Pi(e) {
  this._node = e, this._names = Mi(e.getAttribute("class") || "");
}
Pi.prototype = {
  add: function(e) {
    var t = this._names.indexOf(e);
    t < 0 && (this._names.push(e), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(e) {
    var t = this._names.indexOf(e);
    t >= 0 && (this._names.splice(t, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(e) {
    return this._names.indexOf(e) >= 0;
  }
};
function zi(e, t) {
  for (var n = Tr(e), r = -1, o = t.length; ++r < o; ) n.add(t[r]);
}
function Oi(e, t) {
  for (var n = Tr(e), r = -1, o = t.length; ++r < o; ) n.remove(t[r]);
}
function Wl(e) {
  return function() {
    zi(this, e);
  };
}
function Fl(e) {
  return function() {
    Oi(this, e);
  };
}
function Xl(e, t) {
  return function() {
    (t.apply(this, arguments) ? zi : Oi)(this, e);
  };
}
function Yl(e, t) {
  var n = Mi(e + "");
  if (arguments.length < 2) {
    for (var r = Tr(this.node()), o = -1, i = n.length; ++o < i; ) if (!r.contains(n[o])) return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? Xl : t ? Wl : Fl)(n, t));
}
function ql() {
  this.textContent = "";
}
function Gl(e) {
  return function() {
    this.textContent = e;
  };
}
function Ul(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.textContent = t ?? "";
  };
}
function Kl(e) {
  return arguments.length ? this.each(e == null ? ql : (typeof e == "function" ? Ul : Gl)(e)) : this.node().textContent;
}
function Zl() {
  this.innerHTML = "";
}
function Ql(e) {
  return function() {
    this.innerHTML = e;
  };
}
function Jl(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.innerHTML = t ?? "";
  };
}
function eu(e) {
  return arguments.length ? this.each(e == null ? Zl : (typeof e == "function" ? Jl : Ql)(e)) : this.node().innerHTML;
}
function tu() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function nu() {
  return this.each(tu);
}
function ru() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function ou() {
  return this.each(ru);
}
function iu(e) {
  var t = typeof e == "function" ? e : Ei(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function su() {
  return null;
}
function au(e, t) {
  var n = typeof e == "function" ? e : Ei(e), r = t == null ? su : typeof t == "function" ? t : Ir(t);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function cu() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function lu() {
  return this.each(cu);
}
function uu() {
  var e = this.cloneNode(!1), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function fu() {
  var e = this.cloneNode(!0), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function du(e) {
  return this.select(e ? fu : uu);
}
function hu(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function pu(e) {
  return function(t) {
    e.call(this, t, this.__data__);
  };
}
function gu(e) {
  return e.trim().split(/^|\s+/).map(function(t) {
    var n = "", r = t.indexOf(".");
    return r >= 0 && (n = t.slice(r + 1), t = t.slice(0, r)), { type: t, name: n };
  });
}
function mu(e) {
  return function() {
    var t = this.__on;
    if (t) {
      for (var n = 0, r = -1, o = t.length, i; n < o; ++n)
        i = t[n], (!e.type || i.type === e.type) && i.name === e.name ? this.removeEventListener(i.type, i.listener, i.options) : t[++r] = i;
      ++r ? t.length = r : delete this.__on;
    }
  };
}
function yu(e, t, n) {
  return function() {
    var r = this.__on, o, i = pu(t);
    if (r) {
      for (var s = 0, a = r.length; s < a; ++s)
        if ((o = r[s]).type === e.type && o.name === e.name) {
          this.removeEventListener(o.type, o.listener, o.options), this.addEventListener(o.type, o.listener = i, o.options = n), o.value = t;
          return;
        }
    }
    this.addEventListener(e.type, i, n), o = { type: e.type, name: e.name, value: t, listener: i, options: n }, r ? r.push(o) : this.__on = [o];
  };
}
function xu(e, t, n) {
  var r = gu(e + ""), o, i = r.length, s;
  if (arguments.length < 2) {
    var a = this.node().__on;
    if (a) {
      for (var c = 0, l = a.length, d; c < l; ++c)
        for (o = 0, d = a[c]; o < i; ++o)
          if ((s = r[o]).type === d.type && s.name === d.name)
            return d.value;
    }
    return;
  }
  for (a = t ? yu : mu, o = 0; o < i; ++o) this.each(a(r[o], t, n));
  return this;
}
function Ii(e, t, n) {
  var r = $i(e), o = r.CustomEvent;
  typeof o == "function" ? o = new o(t, n) : (o = r.document.createEvent("Event"), n ? (o.initEvent(t, n.bubbles, n.cancelable), o.detail = n.detail) : o.initEvent(t, !1, !1)), e.dispatchEvent(o);
}
function wu(e, t) {
  return function() {
    return Ii(this, e, t);
  };
}
function vu(e, t) {
  return function() {
    return Ii(this, e, t.apply(this, arguments));
  };
}
function bu(e, t) {
  return this.each((typeof t == "function" ? vu : wu)(e, t));
}
function* _u() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length, s; o < i; ++o)
      (s = r[o]) && (yield s);
}
var Ti = [null];
function we(e, t) {
  this._groups = e, this._parents = t;
}
function It() {
  return new we([[document.documentElement]], Ti);
}
function Eu() {
  return this;
}
we.prototype = It.prototype = {
  constructor: we,
  select: Uc,
  selectAll: Jc,
  selectChild: rl,
  selectChildren: al,
  filter: cl,
  data: pl,
  enter: ll,
  exit: ml,
  join: yl,
  merge: xl,
  selection: Eu,
  order: wl,
  sort: vl,
  call: _l,
  nodes: El,
  node: Nl,
  size: Sl,
  empty: kl,
  each: Cl,
  attr: Tl,
  style: Hl,
  property: Vl,
  classed: Yl,
  text: Kl,
  html: eu,
  raise: nu,
  lower: ou,
  append: iu,
  insert: au,
  remove: lu,
  clone: du,
  datum: hu,
  on: xu,
  dispatch: bu,
  [Symbol.iterator]: _u
};
function xe(e) {
  return typeof e == "string" ? new we([[document.querySelector(e)]], [document.documentElement]) : new we([[e]], Ti);
}
function Nu(e) {
  let t;
  for (; t = e.sourceEvent; ) e = t;
  return e;
}
function be(e, t) {
  if (e = Nu(e), t === void 0 && (t = e.currentTarget), t) {
    var n = t.ownerSVGElement || t;
    if (n.createSVGPoint) {
      var r = n.createSVGPoint();
      return r.x = e.clientX, r.y = e.clientY, r = r.matrixTransform(t.getScreenCTM().inverse()), [r.x, r.y];
    }
    if (t.getBoundingClientRect) {
      var o = t.getBoundingClientRect();
      return [e.clientX - o.left - t.clientLeft, e.clientY - o.top - t.clientTop];
    }
  }
  return [e.pageX, e.pageY];
}
const Su = { passive: !1 }, _t = { capture: !0, passive: !1 };
function Bn(e) {
  e.stopImmediatePropagation();
}
function nt(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function Ai(e) {
  var t = e.document.documentElement, n = xe(e).on("dragstart.drag", nt, _t);
  "onselectstart" in t ? n.on("selectstart.drag", nt, _t) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function Li(e, t) {
  var n = e.document.documentElement, r = xe(e).on("dragstart.drag", null);
  t && (r.on("click.drag", nt, _t), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
const Wt = (e) => () => e;
function or(e, {
  sourceEvent: t,
  subject: n,
  target: r,
  identifier: o,
  active: i,
  x: s,
  y: a,
  dx: c,
  dy: l,
  dispatch: d
}) {
  Object.defineProperties(this, {
    type: { value: e, enumerable: !0, configurable: !0 },
    sourceEvent: { value: t, enumerable: !0, configurable: !0 },
    subject: { value: n, enumerable: !0, configurable: !0 },
    target: { value: r, enumerable: !0, configurable: !0 },
    identifier: { value: o, enumerable: !0, configurable: !0 },
    active: { value: i, enumerable: !0, configurable: !0 },
    x: { value: s, enumerable: !0, configurable: !0 },
    y: { value: a, enumerable: !0, configurable: !0 },
    dx: { value: c, enumerable: !0, configurable: !0 },
    dy: { value: l, enumerable: !0, configurable: !0 },
    _: { value: d }
  });
}
or.prototype.on = function() {
  var e = this._.on.apply(this._, arguments);
  return e === this._ ? this : e;
};
function ku(e) {
  return !e.ctrlKey && !e.button;
}
function Cu() {
  return this.parentNode;
}
function $u(e, t) {
  return t ?? { x: e.x, y: e.y };
}
function Mu() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Di() {
  var e = ku, t = Cu, n = $u, r = Mu, o = {}, i = xn("start", "drag", "end"), s = 0, a, c, l, d, u = 0;
  function f(w) {
    w.on("mousedown.drag", p).filter(r).on("touchstart.drag", x).on("touchmove.drag", m, Su).on("touchend.drag touchcancel.drag", v).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function p(w, $) {
    if (!(d || !e.call(this, w, $))) {
      var C = h(this, t.call(this, w, $), w, $, "mouse");
      C && (xe(w.view).on("mousemove.drag", g, _t).on("mouseup.drag", y, _t), Ai(w.view), Bn(w), l = !1, a = w.clientX, c = w.clientY, C("start", w));
    }
  }
  function g(w) {
    if (nt(w), !l) {
      var $ = w.clientX - a, C = w.clientY - c;
      l = $ * $ + C * C > u;
    }
    o.mouse("drag", w);
  }
  function y(w) {
    xe(w.view).on("mousemove.drag mouseup.drag", null), Li(w.view, l), nt(w), o.mouse("end", w);
  }
  function x(w, $) {
    if (e.call(this, w, $)) {
      var C = w.changedTouches, M = t.call(this, w, $), T = C.length, A, R;
      for (A = 0; A < T; ++A)
        (R = h(this, M, w, $, C[A].identifier, C[A])) && (Bn(w), R("start", w, C[A]));
    }
  }
  function m(w) {
    var $ = w.changedTouches, C = $.length, M, T;
    for (M = 0; M < C; ++M)
      (T = o[$[M].identifier]) && (nt(w), T("drag", w, $[M]));
  }
  function v(w) {
    var $ = w.changedTouches, C = $.length, M, T;
    for (d && clearTimeout(d), d = setTimeout(function() {
      d = null;
    }, 500), M = 0; M < C; ++M)
      (T = o[$[M].identifier]) && (Bn(w), T("end", w, $[M]));
  }
  function h(w, $, C, M, T, A) {
    var R = i.copy(), z = be(A || C, $), I, H, b;
    if ((b = n.call(w, new or("beforestart", {
      sourceEvent: C,
      target: f,
      identifier: T,
      active: s,
      x: z[0],
      y: z[1],
      dx: 0,
      dy: 0,
      dispatch: R
    }), M)) != null)
      return I = b.x - z[0] || 0, H = b.y - z[1] || 0, function O(_, k, E) {
        var S = z, P;
        switch (_) {
          case "start":
            o[T] = O, P = s++;
            break;
          case "end":
            delete o[T], --s;
          // falls through
          case "drag":
            z = be(E || k, $), P = s;
            break;
        }
        R.call(
          _,
          w,
          new or(_, {
            sourceEvent: k,
            subject: b,
            target: f,
            identifier: T,
            active: P,
            x: z[0] + I,
            y: z[1] + H,
            dx: z[0] - S[0],
            dy: z[1] - S[1],
            dispatch: R
          }),
          M
        );
      };
  }
  return f.filter = function(w) {
    return arguments.length ? (e = typeof w == "function" ? w : Wt(!!w), f) : e;
  }, f.container = function(w) {
    return arguments.length ? (t = typeof w == "function" ? w : Wt(w), f) : t;
  }, f.subject = function(w) {
    return arguments.length ? (n = typeof w == "function" ? w : Wt(w), f) : n;
  }, f.touchable = function(w) {
    return arguments.length ? (r = typeof w == "function" ? w : Wt(!!w), f) : r;
  }, f.on = function() {
    var w = i.on.apply(i, arguments);
    return w === i ? f : w;
  }, f.clickDistance = function(w) {
    return arguments.length ? (u = (w = +w) * w, f) : Math.sqrt(u);
  }, f;
}
function Ar(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function Hi(e, t) {
  var n = Object.create(e.prototype);
  for (var r in t) n[r] = t[r];
  return n;
}
function Tt() {
}
var Et = 0.7, on = 1 / Et, rt = "\\s*([+-]?\\d+)\\s*", Nt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Ce = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Pu = /^#([0-9a-f]{3,8})$/, zu = new RegExp(`^rgb\\(${rt},${rt},${rt}\\)$`), Ou = new RegExp(`^rgb\\(${Ce},${Ce},${Ce}\\)$`), Iu = new RegExp(`^rgba\\(${rt},${rt},${rt},${Nt}\\)$`), Tu = new RegExp(`^rgba\\(${Ce},${Ce},${Ce},${Nt}\\)$`), Au = new RegExp(`^hsl\\(${Nt},${Ce},${Ce}\\)$`), Lu = new RegExp(`^hsla\\(${Nt},${Ce},${Ce},${Nt}\\)$`), go = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
Ar(Tt, Ye, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: mo,
  // Deprecated! Use color.formatHex.
  formatHex: mo,
  formatHex8: Du,
  formatHsl: Hu,
  formatRgb: yo,
  toString: yo
});
function mo() {
  return this.rgb().formatHex();
}
function Du() {
  return this.rgb().formatHex8();
}
function Hu() {
  return Ri(this).formatHsl();
}
function yo() {
  return this.rgb().formatRgb();
}
function Ye(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = Pu.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? xo(t) : n === 3 ? new ye(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? Ft(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? Ft(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = zu.exec(e)) ? new ye(t[1], t[2], t[3], 1) : (t = Ou.exec(e)) ? new ye(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = Iu.exec(e)) ? Ft(t[1], t[2], t[3], t[4]) : (t = Tu.exec(e)) ? Ft(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = Au.exec(e)) ? bo(t[1], t[2] / 100, t[3] / 100, 1) : (t = Lu.exec(e)) ? bo(t[1], t[2] / 100, t[3] / 100, t[4]) : go.hasOwnProperty(e) ? xo(go[e]) : e === "transparent" ? new ye(NaN, NaN, NaN, 0) : null;
}
function xo(e) {
  return new ye(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function Ft(e, t, n, r) {
  return r <= 0 && (e = t = n = NaN), new ye(e, t, n, r);
}
function Ru(e) {
  return e instanceof Tt || (e = Ye(e)), e ? (e = e.rgb(), new ye(e.r, e.g, e.b, e.opacity)) : new ye();
}
function ir(e, t, n, r) {
  return arguments.length === 1 ? Ru(e) : new ye(e, t, n, r ?? 1);
}
function ye(e, t, n, r) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
Ar(ye, ir, Hi(Tt, {
  brighter(e) {
    return e = e == null ? on : Math.pow(on, e), new ye(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Et : Math.pow(Et, e), new ye(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new ye(Fe(this.r), Fe(this.g), Fe(this.b), sn(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: wo,
  // Deprecated! Use color.formatHex.
  formatHex: wo,
  formatHex8: ju,
  formatRgb: vo,
  toString: vo
}));
function wo() {
  return `#${We(this.r)}${We(this.g)}${We(this.b)}`;
}
function ju() {
  return `#${We(this.r)}${We(this.g)}${We(this.b)}${We((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function vo() {
  const e = sn(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${Fe(this.r)}, ${Fe(this.g)}, ${Fe(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function sn(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function Fe(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function We(e) {
  return e = Fe(e), (e < 16 ? "0" : "") + e.toString(16);
}
function bo(e, t, n, r) {
  return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new _e(e, t, n, r);
}
function Ri(e) {
  if (e instanceof _e) return new _e(e.h, e.s, e.l, e.opacity);
  if (e instanceof Tt || (e = Ye(e)), !e) return new _e();
  if (e instanceof _e) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, r = e.b / 255, o = Math.min(t, n, r), i = Math.max(t, n, r), s = NaN, a = i - o, c = (i + o) / 2;
  return a ? (t === i ? s = (n - r) / a + (n < r) * 6 : n === i ? s = (r - t) / a + 2 : s = (t - n) / a + 4, a /= c < 0.5 ? i + o : 2 - i - o, s *= 60) : a = c > 0 && c < 1 ? 0 : s, new _e(s, a, c, e.opacity);
}
function Bu(e, t, n, r) {
  return arguments.length === 1 ? Ri(e) : new _e(e, t, n, r ?? 1);
}
function _e(e, t, n, r) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
Ar(_e, Bu, Hi(Tt, {
  brighter(e) {
    return e = e == null ? on : Math.pow(on, e), new _e(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Et : Math.pow(Et, e), new _e(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * t, o = 2 * n - r;
    return new ye(
      Vn(e >= 240 ? e - 240 : e + 120, o, r),
      Vn(e, o, r),
      Vn(e < 120 ? e + 240 : e - 120, o, r),
      this.opacity
    );
  },
  clamp() {
    return new _e(_o(this.h), Xt(this.s), Xt(this.l), sn(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = sn(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${_o(this.h)}, ${Xt(this.s) * 100}%, ${Xt(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function _o(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function Xt(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function Vn(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const Lr = (e) => () => e;
function Vu(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function Wu(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(r) {
    return Math.pow(e + r * t, n);
  };
}
function Fu(e) {
  return (e = +e) == 1 ? ji : function(t, n) {
    return n - t ? Wu(t, n, e) : Lr(isNaN(t) ? n : t);
  };
}
function ji(e, t) {
  var n = t - e;
  return n ? Vu(e, n) : Lr(isNaN(e) ? t : e);
}
const an = (function e(t) {
  var n = Fu(t);
  function r(o, i) {
    var s = n((o = ir(o)).r, (i = ir(i)).r), a = n(o.g, i.g), c = n(o.b, i.b), l = ji(o.opacity, i.opacity);
    return function(d) {
      return o.r = s(d), o.g = a(d), o.b = c(d), o.opacity = l(d), o + "";
    };
  }
  return r.gamma = e, r;
})(1);
function Xu(e, t) {
  t || (t = []);
  var n = e ? Math.min(t.length, e.length) : 0, r = t.slice(), o;
  return function(i) {
    for (o = 0; o < n; ++o) r[o] = e[o] * (1 - i) + t[o] * i;
    return r;
  };
}
function Yu(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function qu(e, t) {
  var n = t ? t.length : 0, r = e ? Math.min(n, e.length) : 0, o = new Array(r), i = new Array(n), s;
  for (s = 0; s < r; ++s) o[s] = vt(e[s], t[s]);
  for (; s < n; ++s) i[s] = t[s];
  return function(a) {
    for (s = 0; s < r; ++s) i[s] = o[s](a);
    return i;
  };
}
function Gu(e, t) {
  var n = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(r) {
    return n.setTime(e * (1 - r) + t * r), n;
  };
}
function ke(e, t) {
  return e = +e, t = +t, function(n) {
    return e * (1 - n) + t * n;
  };
}
function Uu(e, t) {
  var n = {}, r = {}, o;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (o in t)
    o in e ? n[o] = vt(e[o], t[o]) : r[o] = t[o];
  return function(i) {
    for (o in n) r[o] = n[o](i);
    return r;
  };
}
var sr = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Wn = new RegExp(sr.source, "g");
function Ku(e) {
  return function() {
    return e;
  };
}
function Zu(e) {
  return function(t) {
    return e(t) + "";
  };
}
function Bi(e, t) {
  var n = sr.lastIndex = Wn.lastIndex = 0, r, o, i, s = -1, a = [], c = [];
  for (e = e + "", t = t + ""; (r = sr.exec(e)) && (o = Wn.exec(t)); )
    (i = o.index) > n && (i = t.slice(n, i), a[s] ? a[s] += i : a[++s] = i), (r = r[0]) === (o = o[0]) ? a[s] ? a[s] += o : a[++s] = o : (a[++s] = null, c.push({ i: s, x: ke(r, o) })), n = Wn.lastIndex;
  return n < t.length && (i = t.slice(n), a[s] ? a[s] += i : a[++s] = i), a.length < 2 ? c[0] ? Zu(c[0].x) : Ku(t) : (t = c.length, function(l) {
    for (var d = 0, u; d < t; ++d) a[(u = c[d]).i] = u.x(l);
    return a.join("");
  });
}
function vt(e, t) {
  var n = typeof t, r;
  return t == null || n === "boolean" ? Lr(t) : (n === "number" ? ke : n === "string" ? (r = Ye(t)) ? (t = r, an) : Bi : t instanceof Ye ? an : t instanceof Date ? Gu : Yu(t) ? Xu : Array.isArray(t) ? qu : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? Uu : ke)(e, t);
}
var Eo = 180 / Math.PI, ar = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function Vi(e, t, n, r, o, i) {
  var s, a, c;
  return (s = Math.sqrt(e * e + t * t)) && (e /= s, t /= s), (c = e * n + t * r) && (n -= e * c, r -= t * c), (a = Math.sqrt(n * n + r * r)) && (n /= a, r /= a, c /= a), e * r < t * n && (e = -e, t = -t, c = -c, s = -s), {
    translateX: o,
    translateY: i,
    rotate: Math.atan2(t, e) * Eo,
    skewX: Math.atan(c) * Eo,
    scaleX: s,
    scaleY: a
  };
}
var Yt;
function Qu(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? ar : Vi(t.a, t.b, t.c, t.d, t.e, t.f);
}
function Ju(e) {
  return e == null || (Yt || (Yt = document.createElementNS("http://www.w3.org/2000/svg", "g")), Yt.setAttribute("transform", e), !(e = Yt.transform.baseVal.consolidate())) ? ar : (e = e.matrix, Vi(e.a, e.b, e.c, e.d, e.e, e.f));
}
function Wi(e, t, n, r) {
  function o(l) {
    return l.length ? l.pop() + " " : "";
  }
  function i(l, d, u, f, p, g) {
    if (l !== u || d !== f) {
      var y = p.push("translate(", null, t, null, n);
      g.push({ i: y - 4, x: ke(l, u) }, { i: y - 2, x: ke(d, f) });
    } else (u || f) && p.push("translate(" + u + t + f + n);
  }
  function s(l, d, u, f) {
    l !== d ? (l - d > 180 ? d += 360 : d - l > 180 && (l += 360), f.push({ i: u.push(o(u) + "rotate(", null, r) - 2, x: ke(l, d) })) : d && u.push(o(u) + "rotate(" + d + r);
  }
  function a(l, d, u, f) {
    l !== d ? f.push({ i: u.push(o(u) + "skewX(", null, r) - 2, x: ke(l, d) }) : d && u.push(o(u) + "skewX(" + d + r);
  }
  function c(l, d, u, f, p, g) {
    if (l !== u || d !== f) {
      var y = p.push(o(p) + "scale(", null, ",", null, ")");
      g.push({ i: y - 4, x: ke(l, u) }, { i: y - 2, x: ke(d, f) });
    } else (u !== 1 || f !== 1) && p.push(o(p) + "scale(" + u + "," + f + ")");
  }
  return function(l, d) {
    var u = [], f = [];
    return l = e(l), d = e(d), i(l.translateX, l.translateY, d.translateX, d.translateY, u, f), s(l.rotate, d.rotate, u, f), a(l.skewX, d.skewX, u, f), c(l.scaleX, l.scaleY, d.scaleX, d.scaleY, u, f), l = d = null, function(p) {
      for (var g = -1, y = f.length, x; ++g < y; ) u[(x = f[g]).i] = x.x(p);
      return u.join("");
    };
  };
}
var ef = Wi(Qu, "px, ", "px)", "deg)"), tf = Wi(Ju, ", ", ")", ")"), nf = 1e-12;
function No(e) {
  return ((e = Math.exp(e)) + 1 / e) / 2;
}
function rf(e) {
  return ((e = Math.exp(e)) - 1 / e) / 2;
}
function of(e) {
  return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
const Jt = (function e(t, n, r) {
  function o(i, s) {
    var a = i[0], c = i[1], l = i[2], d = s[0], u = s[1], f = s[2], p = d - a, g = u - c, y = p * p + g * g, x, m;
    if (y < nf)
      m = Math.log(f / l) / t, x = function(M) {
        return [
          a + M * p,
          c + M * g,
          l * Math.exp(t * M * m)
        ];
      };
    else {
      var v = Math.sqrt(y), h = (f * f - l * l + r * y) / (2 * l * n * v), w = (f * f - l * l - r * y) / (2 * f * n * v), $ = Math.log(Math.sqrt(h * h + 1) - h), C = Math.log(Math.sqrt(w * w + 1) - w);
      m = (C - $) / t, x = function(M) {
        var T = M * m, A = No($), R = l / (n * v) * (A * of(t * T + $) - rf($));
        return [
          a + R * p,
          c + R * g,
          l * A / No(t * T + $)
        ];
      };
    }
    return x.duration = m * 1e3 * t / Math.SQRT2, x;
  }
  return o.rho = function(i) {
    var s = Math.max(1e-3, +i), a = s * s, c = a * a;
    return e(s, a, c);
  }, o;
})(Math.SQRT2, 2, 4);
var it = 0, xt = 0, mt = 0, Fi = 1e3, cn, wt, ln = 0, qe = 0, vn = 0, St = typeof performance == "object" && performance.now ? performance : Date, Xi = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function Dr() {
  return qe || (Xi(sf), qe = St.now() + vn);
}
function sf() {
  qe = 0;
}
function un() {
  this._call = this._time = this._next = null;
}
un.prototype = Yi.prototype = {
  constructor: un,
  restart: function(e, t, n) {
    if (typeof e != "function") throw new TypeError("callback is not a function");
    n = (n == null ? Dr() : +n) + (t == null ? 0 : +t), !this._next && wt !== this && (wt ? wt._next = this : cn = this, wt = this), this._call = e, this._time = n, cr();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, cr());
  }
};
function Yi(e, t, n) {
  var r = new un();
  return r.restart(e, t, n), r;
}
function af() {
  Dr(), ++it;
  for (var e = cn, t; e; )
    (t = qe - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --it;
}
function So() {
  qe = (ln = St.now()) + vn, it = xt = 0;
  try {
    af();
  } finally {
    it = 0, lf(), qe = 0;
  }
}
function cf() {
  var e = St.now(), t = e - ln;
  t > Fi && (vn -= t, ln = e);
}
function lf() {
  for (var e, t = cn, n, r = 1 / 0; t; )
    t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : cn = n);
  wt = e, cr(r);
}
function cr(e) {
  if (!it) {
    xt && (xt = clearTimeout(xt));
    var t = e - qe;
    t > 24 ? (e < 1 / 0 && (xt = setTimeout(So, e - St.now() - vn)), mt && (mt = clearInterval(mt))) : (mt || (ln = St.now(), mt = setInterval(cf, Fi)), it = 1, Xi(So));
  }
}
function ko(e, t, n) {
  var r = new un();
  return t = t == null ? 0 : +t, r.restart((o) => {
    r.stop(), e(o + t);
  }, t, n), r;
}
var uf = xn("start", "end", "cancel", "interrupt"), ff = [], qi = 0, Co = 1, lr = 2, en = 3, $o = 4, ur = 5, tn = 6;
function bn(e, t, n, r, o, i) {
  var s = e.__transition;
  if (!s) e.__transition = {};
  else if (n in s) return;
  df(e, n, {
    name: t,
    index: r,
    // For context during callback.
    group: o,
    // For context during callback.
    on: uf,
    tween: ff,
    time: i.time,
    delay: i.delay,
    duration: i.duration,
    ease: i.ease,
    timer: null,
    state: qi
  });
}
function Hr(e, t) {
  var n = Se(e, t);
  if (n.state > qi) throw new Error("too late; already scheduled");
  return n;
}
function Me(e, t) {
  var n = Se(e, t);
  if (n.state > en) throw new Error("too late; already running");
  return n;
}
function Se(e, t) {
  var n = e.__transition;
  if (!n || !(n = n[t])) throw new Error("transition not found");
  return n;
}
function df(e, t, n) {
  var r = e.__transition, o;
  r[t] = n, n.timer = Yi(i, 0, n.time);
  function i(l) {
    n.state = Co, n.timer.restart(s, n.delay, n.time), n.delay <= l && s(l - n.delay);
  }
  function s(l) {
    var d, u, f, p;
    if (n.state !== Co) return c();
    for (d in r)
      if (p = r[d], p.name === n.name) {
        if (p.state === en) return ko(s);
        p.state === $o ? (p.state = tn, p.timer.stop(), p.on.call("interrupt", e, e.__data__, p.index, p.group), delete r[d]) : +d < t && (p.state = tn, p.timer.stop(), p.on.call("cancel", e, e.__data__, p.index, p.group), delete r[d]);
      }
    if (ko(function() {
      n.state === en && (n.state = $o, n.timer.restart(a, n.delay, n.time), a(l));
    }), n.state = lr, n.on.call("start", e, e.__data__, n.index, n.group), n.state === lr) {
      for (n.state = en, o = new Array(f = n.tween.length), d = 0, u = -1; d < f; ++d)
        (p = n.tween[d].value.call(e, e.__data__, n.index, n.group)) && (o[++u] = p);
      o.length = u + 1;
    }
  }
  function a(l) {
    for (var d = l < n.duration ? n.ease.call(null, l / n.duration) : (n.timer.restart(c), n.state = ur, 1), u = -1, f = o.length; ++u < f; )
      o[u].call(e, d);
    n.state === ur && (n.on.call("end", e, e.__data__, n.index, n.group), c());
  }
  function c() {
    n.state = tn, n.timer.stop(), delete r[t];
    for (var l in r) return;
    delete e.__transition;
  }
}
function nn(e, t) {
  var n = e.__transition, r, o, i = !0, s;
  if (n) {
    t = t == null ? null : t + "";
    for (s in n) {
      if ((r = n[s]).name !== t) {
        i = !1;
        continue;
      }
      o = r.state > lr && r.state < ur, r.state = tn, r.timer.stop(), r.on.call(o ? "interrupt" : "cancel", e, e.__data__, r.index, r.group), delete n[s];
    }
    i && delete e.__transition;
  }
}
function hf(e) {
  return this.each(function() {
    nn(this, e);
  });
}
function pf(e, t) {
  var n, r;
  return function() {
    var o = Me(this, e), i = o.tween;
    if (i !== n) {
      r = n = i;
      for (var s = 0, a = r.length; s < a; ++s)
        if (r[s].name === t) {
          r = r.slice(), r.splice(s, 1);
          break;
        }
    }
    o.tween = r;
  };
}
function gf(e, t, n) {
  var r, o;
  if (typeof n != "function") throw new Error();
  return function() {
    var i = Me(this, e), s = i.tween;
    if (s !== r) {
      o = (r = s).slice();
      for (var a = { name: t, value: n }, c = 0, l = o.length; c < l; ++c)
        if (o[c].name === t) {
          o[c] = a;
          break;
        }
      c === l && o.push(a);
    }
    i.tween = o;
  };
}
function mf(e, t) {
  var n = this._id;
  if (e += "", arguments.length < 2) {
    for (var r = Se(this.node(), n).tween, o = 0, i = r.length, s; o < i; ++o)
      if ((s = r[o]).name === e)
        return s.value;
    return null;
  }
  return this.each((t == null ? pf : gf)(n, e, t));
}
function Rr(e, t, n) {
  var r = e._id;
  return e.each(function() {
    var o = Me(this, r);
    (o.value || (o.value = {}))[t] = n.apply(this, arguments);
  }), function(o) {
    return Se(o, r).value[t];
  };
}
function Gi(e, t) {
  var n;
  return (typeof t == "number" ? ke : t instanceof Ye ? an : (n = Ye(t)) ? (t = n, an) : Bi)(e, t);
}
function yf(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function xf(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function wf(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = this.getAttribute(e);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function vf(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = this.getAttributeNS(e.space, e.local);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function bf(e, t, n) {
  var r, o, i;
  return function() {
    var s, a = n(this), c;
    return a == null ? void this.removeAttribute(e) : (s = this.getAttribute(e), c = a + "", s === c ? null : s === r && c === o ? i : (o = c, i = t(r = s, a)));
  };
}
function _f(e, t, n) {
  var r, o, i;
  return function() {
    var s, a = n(this), c;
    return a == null ? void this.removeAttributeNS(e.space, e.local) : (s = this.getAttributeNS(e.space, e.local), c = a + "", s === c ? null : s === r && c === o ? i : (o = c, i = t(r = s, a)));
  };
}
function Ef(e, t) {
  var n = wn(e), r = n === "transform" ? tf : Gi;
  return this.attrTween(e, typeof t == "function" ? (n.local ? _f : bf)(n, r, Rr(this, "attr." + e, t)) : t == null ? (n.local ? xf : yf)(n) : (n.local ? vf : wf)(n, r, t));
}
function Nf(e, t) {
  return function(n) {
    this.setAttribute(e, t.call(this, n));
  };
}
function Sf(e, t) {
  return function(n) {
    this.setAttributeNS(e.space, e.local, t.call(this, n));
  };
}
function kf(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && Sf(e, i)), n;
  }
  return o._value = t, o;
}
function Cf(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && Nf(e, i)), n;
  }
  return o._value = t, o;
}
function $f(e, t) {
  var n = "attr." + e;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  var r = wn(e);
  return this.tween(n, (r.local ? kf : Cf)(r, t));
}
function Mf(e, t) {
  return function() {
    Hr(this, e).delay = +t.apply(this, arguments);
  };
}
function Pf(e, t) {
  return t = +t, function() {
    Hr(this, e).delay = t;
  };
}
function zf(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? Mf : Pf)(t, e)) : Se(this.node(), t).delay;
}
function Of(e, t) {
  return function() {
    Me(this, e).duration = +t.apply(this, arguments);
  };
}
function If(e, t) {
  return t = +t, function() {
    Me(this, e).duration = t;
  };
}
function Tf(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? Of : If)(t, e)) : Se(this.node(), t).duration;
}
function Af(e, t) {
  if (typeof t != "function") throw new Error();
  return function() {
    Me(this, e).ease = t;
  };
}
function Lf(e) {
  var t = this._id;
  return arguments.length ? this.each(Af(t, e)) : Se(this.node(), t).ease;
}
function Df(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    Me(this, e).ease = n;
  };
}
function Hf(e) {
  if (typeof e != "function") throw new Error();
  return this.each(Df(this._id, e));
}
function Rf(e) {
  typeof e != "function" && (e = Si(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = [], c, l = 0; l < s; ++l)
      (c = i[l]) && e.call(c, c.__data__, l, i) && a.push(c);
  return new Ie(r, this._parents, this._name, this._id);
}
function jf(e) {
  if (e._id !== this._id) throw new Error();
  for (var t = this._groups, n = e._groups, r = t.length, o = n.length, i = Math.min(r, o), s = new Array(r), a = 0; a < i; ++a)
    for (var c = t[a], l = n[a], d = c.length, u = s[a] = new Array(d), f, p = 0; p < d; ++p)
      (f = c[p] || l[p]) && (u[p] = f);
  for (; a < r; ++a)
    s[a] = t[a];
  return new Ie(s, this._parents, this._name, this._id);
}
function Bf(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var n = t.indexOf(".");
    return n >= 0 && (t = t.slice(0, n)), !t || t === "start";
  });
}
function Vf(e, t, n) {
  var r, o, i = Bf(t) ? Hr : Me;
  return function() {
    var s = i(this, e), a = s.on;
    a !== r && (o = (r = a).copy()).on(t, n), s.on = o;
  };
}
function Wf(e, t) {
  var n = this._id;
  return arguments.length < 2 ? Se(this.node(), n).on.on(e) : this.each(Vf(n, e, t));
}
function Ff(e) {
  return function() {
    var t = this.parentNode;
    for (var n in this.__transition) if (+n !== e) return;
    t && t.removeChild(this);
  };
}
function Xf() {
  return this.on("end.remove", Ff(this._id));
}
function Yf(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = Ir(e));
  for (var r = this._groups, o = r.length, i = new Array(o), s = 0; s < o; ++s)
    for (var a = r[s], c = a.length, l = i[s] = new Array(c), d, u, f = 0; f < c; ++f)
      (d = a[f]) && (u = e.call(d, d.__data__, f, a)) && ("__data__" in d && (u.__data__ = d.__data__), l[f] = u, bn(l[f], t, n, f, l, Se(d, n)));
  return new Ie(i, this._parents, t, n);
}
function qf(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = Ni(e));
  for (var r = this._groups, o = r.length, i = [], s = [], a = 0; a < o; ++a)
    for (var c = r[a], l = c.length, d, u = 0; u < l; ++u)
      if (d = c[u]) {
        for (var f = e.call(d, d.__data__, u, c), p, g = Se(d, n), y = 0, x = f.length; y < x; ++y)
          (p = f[y]) && bn(p, t, n, y, f, g);
        i.push(f), s.push(d);
      }
  return new Ie(i, s, t, n);
}
var Gf = It.prototype.constructor;
function Uf() {
  return new Gf(this._groups, this._parents);
}
function Kf(e, t) {
  var n, r, o;
  return function() {
    var i = ot(this, e), s = (this.style.removeProperty(e), ot(this, e));
    return i === s ? null : i === n && s === r ? o : o = t(n = i, r = s);
  };
}
function Ui(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function Zf(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = ot(this, e);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function Qf(e, t, n) {
  var r, o, i;
  return function() {
    var s = ot(this, e), a = n(this), c = a + "";
    return a == null && (c = a = (this.style.removeProperty(e), ot(this, e))), s === c ? null : s === r && c === o ? i : (o = c, i = t(r = s, a));
  };
}
function Jf(e, t) {
  var n, r, o, i = "style." + t, s = "end." + i, a;
  return function() {
    var c = Me(this, e), l = c.on, d = c.value[i] == null ? a || (a = Ui(t)) : void 0;
    (l !== n || o !== d) && (r = (n = l).copy()).on(s, o = d), c.on = r;
  };
}
function ed(e, t, n) {
  var r = (e += "") == "transform" ? ef : Gi;
  return t == null ? this.styleTween(e, Kf(e, r)).on("end.style." + e, Ui(e)) : typeof t == "function" ? this.styleTween(e, Qf(e, r, Rr(this, "style." + e, t))).each(Jf(this._id, e)) : this.styleTween(e, Zf(e, r, t), n).on("end.style." + e, null);
}
function td(e, t, n) {
  return function(r) {
    this.style.setProperty(e, t.call(this, r), n);
  };
}
function nd(e, t, n) {
  var r, o;
  function i() {
    var s = t.apply(this, arguments);
    return s !== o && (r = (o = s) && td(e, s, n)), r;
  }
  return i._value = t, i;
}
function rd(e, t, n) {
  var r = "style." + (e += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (t == null) return this.tween(r, null);
  if (typeof t != "function") throw new Error();
  return this.tween(r, nd(e, t, n ?? ""));
}
function od(e) {
  return function() {
    this.textContent = e;
  };
}
function id(e) {
  return function() {
    var t = e(this);
    this.textContent = t ?? "";
  };
}
function sd(e) {
  return this.tween("text", typeof e == "function" ? id(Rr(this, "text", e)) : od(e == null ? "" : e + ""));
}
function ad(e) {
  return function(t) {
    this.textContent = e.call(this, t);
  };
}
function cd(e) {
  var t, n;
  function r() {
    var o = e.apply(this, arguments);
    return o !== n && (t = (n = o) && ad(o)), t;
  }
  return r._value = e, r;
}
function ld(e) {
  var t = "text";
  if (arguments.length < 1) return (t = this.tween(t)) && t._value;
  if (e == null) return this.tween(t, null);
  if (typeof e != "function") throw new Error();
  return this.tween(t, cd(e));
}
function ud() {
  for (var e = this._name, t = this._id, n = Ki(), r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], a = s.length, c, l = 0; l < a; ++l)
      if (c = s[l]) {
        var d = Se(c, t);
        bn(c, e, n, l, s, {
          time: d.time + d.delay + d.duration,
          delay: 0,
          duration: d.duration,
          ease: d.ease
        });
      }
  return new Ie(r, this._parents, e, n);
}
function fd() {
  var e, t, n = this, r = n._id, o = n.size();
  return new Promise(function(i, s) {
    var a = { value: s }, c = { value: function() {
      --o === 0 && i();
    } };
    n.each(function() {
      var l = Me(this, r), d = l.on;
      d !== e && (t = (e = d).copy(), t._.cancel.push(a), t._.interrupt.push(a), t._.end.push(c)), l.on = t;
    }), o === 0 && i();
  });
}
var dd = 0;
function Ie(e, t, n, r) {
  this._groups = e, this._parents = t, this._name = n, this._id = r;
}
function Ki() {
  return ++dd;
}
var ze = It.prototype;
Ie.prototype = {
  constructor: Ie,
  select: Yf,
  selectAll: qf,
  selectChild: ze.selectChild,
  selectChildren: ze.selectChildren,
  filter: Rf,
  merge: jf,
  selection: Uf,
  transition: ud,
  call: ze.call,
  nodes: ze.nodes,
  node: ze.node,
  size: ze.size,
  empty: ze.empty,
  each: ze.each,
  on: Wf,
  attr: Ef,
  attrTween: $f,
  style: ed,
  styleTween: rd,
  text: sd,
  textTween: ld,
  remove: Xf,
  tween: mf,
  delay: zf,
  duration: Tf,
  ease: Lf,
  easeVarying: Hf,
  end: fd,
  [Symbol.iterator]: ze[Symbol.iterator]
};
function hd(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var pd = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: hd
};
function gd(e, t) {
  for (var n; !(n = e.__transition) || !(n = n[t]); )
    if (!(e = e.parentNode))
      throw new Error(`transition ${t} not found`);
  return n;
}
function md(e) {
  var t, n;
  e instanceof Ie ? (t = e._id, e = e._name) : (t = Ki(), (n = pd).time = Dr(), e = e == null ? null : e + "");
  for (var r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], a = s.length, c, l = 0; l < a; ++l)
      (c = s[l]) && bn(c, e, t, l, s, n || gd(c, t));
  return new Ie(r, this._parents, e, t);
}
It.prototype.interrupt = hf;
It.prototype.transition = md;
const qt = (e) => () => e;
function yd(e, {
  sourceEvent: t,
  target: n,
  transform: r,
  dispatch: o
}) {
  Object.defineProperties(this, {
    type: { value: e, enumerable: !0, configurable: !0 },
    sourceEvent: { value: t, enumerable: !0, configurable: !0 },
    target: { value: n, enumerable: !0, configurable: !0 },
    transform: { value: r, enumerable: !0, configurable: !0 },
    _: { value: o }
  });
}
function Oe(e, t, n) {
  this.k = e, this.x = t, this.y = n;
}
Oe.prototype = {
  constructor: Oe,
  scale: function(e) {
    return e === 1 ? this : new Oe(this.k * e, this.x, this.y);
  },
  translate: function(e, t) {
    return e === 0 & t === 0 ? this : new Oe(this.k, this.x + this.k * e, this.y + this.k * t);
  },
  apply: function(e) {
    return [e[0] * this.k + this.x, e[1] * this.k + this.y];
  },
  applyX: function(e) {
    return e * this.k + this.x;
  },
  applyY: function(e) {
    return e * this.k + this.y;
  },
  invert: function(e) {
    return [(e[0] - this.x) / this.k, (e[1] - this.y) / this.k];
  },
  invertX: function(e) {
    return (e - this.x) / this.k;
  },
  invertY: function(e) {
    return (e - this.y) / this.k;
  },
  rescaleX: function(e) {
    return e.copy().domain(e.range().map(this.invertX, this).map(e.invert, e));
  },
  rescaleY: function(e) {
    return e.copy().domain(e.range().map(this.invertY, this).map(e.invert, e));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
var _n = new Oe(1, 0, 0);
Zi.prototype = Oe.prototype;
function Zi(e) {
  for (; !e.__zoom; ) if (!(e = e.parentNode)) return _n;
  return e.__zoom;
}
function Fn(e) {
  e.stopImmediatePropagation();
}
function yt(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function xd(e) {
  return (!e.ctrlKey || e.type === "wheel") && !e.button;
}
function wd() {
  var e = this;
  return e instanceof SVGElement ? (e = e.ownerSVGElement || e, e.hasAttribute("viewBox") ? (e = e.viewBox.baseVal, [[e.x, e.y], [e.x + e.width, e.y + e.height]]) : [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]]) : [[0, 0], [e.clientWidth, e.clientHeight]];
}
function Mo() {
  return this.__zoom || _n;
}
function vd(e) {
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * (e.ctrlKey ? 10 : 1);
}
function bd() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function _d(e, t, n) {
  var r = e.invertX(t[0][0]) - n[0][0], o = e.invertX(t[1][0]) - n[1][0], i = e.invertY(t[0][1]) - n[0][1], s = e.invertY(t[1][1]) - n[1][1];
  return e.translate(
    o > r ? (r + o) / 2 : Math.min(0, r) || Math.max(0, o),
    s > i ? (i + s) / 2 : Math.min(0, i) || Math.max(0, s)
  );
}
function Qi() {
  var e = xd, t = wd, n = _d, r = vd, o = bd, i = [0, 1 / 0], s = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], a = 250, c = Jt, l = xn("start", "zoom", "end"), d, u, f, p = 500, g = 150, y = 0, x = 10;
  function m(b) {
    b.property("__zoom", Mo).on("wheel.zoom", T, { passive: !1 }).on("mousedown.zoom", A).on("dblclick.zoom", R).filter(o).on("touchstart.zoom", z).on("touchmove.zoom", I).on("touchend.zoom touchcancel.zoom", H).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  m.transform = function(b, O, _, k) {
    var E = b.selection ? b.selection() : b;
    E.property("__zoom", Mo), b !== E ? $(b, O, _, k) : E.interrupt().each(function() {
      C(this, arguments).event(k).start().zoom(null, typeof O == "function" ? O.apply(this, arguments) : O).end();
    });
  }, m.scaleBy = function(b, O, _, k) {
    m.scaleTo(b, function() {
      var E = this.__zoom.k, S = typeof O == "function" ? O.apply(this, arguments) : O;
      return E * S;
    }, _, k);
  }, m.scaleTo = function(b, O, _, k) {
    m.transform(b, function() {
      var E = t.apply(this, arguments), S = this.__zoom, P = _ == null ? w(E) : typeof _ == "function" ? _.apply(this, arguments) : _, L = S.invert(P), D = typeof O == "function" ? O.apply(this, arguments) : O;
      return n(h(v(S, D), P, L), E, s);
    }, _, k);
  }, m.translateBy = function(b, O, _, k) {
    m.transform(b, function() {
      return n(this.__zoom.translate(
        typeof O == "function" ? O.apply(this, arguments) : O,
        typeof _ == "function" ? _.apply(this, arguments) : _
      ), t.apply(this, arguments), s);
    }, null, k);
  }, m.translateTo = function(b, O, _, k, E) {
    m.transform(b, function() {
      var S = t.apply(this, arguments), P = this.__zoom, L = k == null ? w(S) : typeof k == "function" ? k.apply(this, arguments) : k;
      return n(_n.translate(L[0], L[1]).scale(P.k).translate(
        typeof O == "function" ? -O.apply(this, arguments) : -O,
        typeof _ == "function" ? -_.apply(this, arguments) : -_
      ), S, s);
    }, k, E);
  };
  function v(b, O) {
    return O = Math.max(i[0], Math.min(i[1], O)), O === b.k ? b : new Oe(O, b.x, b.y);
  }
  function h(b, O, _) {
    var k = O[0] - _[0] * b.k, E = O[1] - _[1] * b.k;
    return k === b.x && E === b.y ? b : new Oe(b.k, k, E);
  }
  function w(b) {
    return [(+b[0][0] + +b[1][0]) / 2, (+b[0][1] + +b[1][1]) / 2];
  }
  function $(b, O, _, k) {
    b.on("start.zoom", function() {
      C(this, arguments).event(k).start();
    }).on("interrupt.zoom end.zoom", function() {
      C(this, arguments).event(k).end();
    }).tween("zoom", function() {
      var E = this, S = arguments, P = C(E, S).event(k), L = t.apply(E, S), D = _ == null ? w(L) : typeof _ == "function" ? _.apply(E, S) : _, j = Math.max(L[1][0] - L[0][0], L[1][1] - L[0][1]), B = E.__zoom, W = typeof O == "function" ? O.apply(E, S) : O, Y = c(B.invert(D).concat(j / B.k), W.invert(D).concat(j / W.k));
      return function(G) {
        if (G === 1) G = W;
        else {
          var V = Y(G), U = j / V[2];
          G = new Oe(U, D[0] - V[0] * U, D[1] - V[1] * U);
        }
        P.zoom(null, G);
      };
    });
  }
  function C(b, O, _) {
    return !_ && b.__zooming || new M(b, O);
  }
  function M(b, O) {
    this.that = b, this.args = O, this.active = 0, this.sourceEvent = null, this.extent = t.apply(b, O), this.taps = 0;
  }
  M.prototype = {
    event: function(b) {
      return b && (this.sourceEvent = b), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function(b, O) {
      return this.mouse && b !== "mouse" && (this.mouse[1] = O.invert(this.mouse[0])), this.touch0 && b !== "touch" && (this.touch0[1] = O.invert(this.touch0[0])), this.touch1 && b !== "touch" && (this.touch1[1] = O.invert(this.touch1[0])), this.that.__zoom = O, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function(b) {
      var O = xe(this.that).datum();
      l.call(
        b,
        this.that,
        new yd(b, {
          sourceEvent: this.sourceEvent,
          target: m,
          transform: this.that.__zoom,
          dispatch: l
        }),
        O
      );
    }
  };
  function T(b, ...O) {
    if (!e.apply(this, arguments)) return;
    var _ = C(this, O).event(b), k = this.__zoom, E = Math.max(i[0], Math.min(i[1], k.k * Math.pow(2, r.apply(this, arguments)))), S = be(b);
    if (_.wheel)
      (_.mouse[0][0] !== S[0] || _.mouse[0][1] !== S[1]) && (_.mouse[1] = k.invert(_.mouse[0] = S)), clearTimeout(_.wheel);
    else {
      if (k.k === E) return;
      _.mouse = [S, k.invert(S)], nn(this), _.start();
    }
    yt(b), _.wheel = setTimeout(P, g), _.zoom("mouse", n(h(v(k, E), _.mouse[0], _.mouse[1]), _.extent, s));
    function P() {
      _.wheel = null, _.end();
    }
  }
  function A(b, ...O) {
    if (f || !e.apply(this, arguments)) return;
    var _ = b.currentTarget, k = C(this, O, !0).event(b), E = xe(b.view).on("mousemove.zoom", D, !0).on("mouseup.zoom", j, !0), S = be(b, _), P = b.clientX, L = b.clientY;
    Ai(b.view), Fn(b), k.mouse = [S, this.__zoom.invert(S)], nn(this), k.start();
    function D(B) {
      if (yt(B), !k.moved) {
        var W = B.clientX - P, Y = B.clientY - L;
        k.moved = W * W + Y * Y > y;
      }
      k.event(B).zoom("mouse", n(h(k.that.__zoom, k.mouse[0] = be(B, _), k.mouse[1]), k.extent, s));
    }
    function j(B) {
      E.on("mousemove.zoom mouseup.zoom", null), Li(B.view, k.moved), yt(B), k.event(B).end();
    }
  }
  function R(b, ...O) {
    if (e.apply(this, arguments)) {
      var _ = this.__zoom, k = be(b.changedTouches ? b.changedTouches[0] : b, this), E = _.invert(k), S = _.k * (b.shiftKey ? 0.5 : 2), P = n(h(v(_, S), k, E), t.apply(this, O), s);
      yt(b), a > 0 ? xe(this).transition().duration(a).call($, P, k, b) : xe(this).call(m.transform, P, k, b);
    }
  }
  function z(b, ...O) {
    if (e.apply(this, arguments)) {
      var _ = b.touches, k = _.length, E = C(this, O, b.changedTouches.length === k).event(b), S, P, L, D;
      for (Fn(b), P = 0; P < k; ++P)
        L = _[P], D = be(L, this), D = [D, this.__zoom.invert(D), L.identifier], E.touch0 ? !E.touch1 && E.touch0[2] !== D[2] && (E.touch1 = D, E.taps = 0) : (E.touch0 = D, S = !0, E.taps = 1 + !!d);
      d && (d = clearTimeout(d)), S && (E.taps < 2 && (u = D[0], d = setTimeout(function() {
        d = null;
      }, p)), nn(this), E.start());
    }
  }
  function I(b, ...O) {
    if (this.__zooming) {
      var _ = C(this, O).event(b), k = b.changedTouches, E = k.length, S, P, L, D;
      for (yt(b), S = 0; S < E; ++S)
        P = k[S], L = be(P, this), _.touch0 && _.touch0[2] === P.identifier ? _.touch0[0] = L : _.touch1 && _.touch1[2] === P.identifier && (_.touch1[0] = L);
      if (P = _.that.__zoom, _.touch1) {
        var j = _.touch0[0], B = _.touch0[1], W = _.touch1[0], Y = _.touch1[1], G = (G = W[0] - j[0]) * G + (G = W[1] - j[1]) * G, V = (V = Y[0] - B[0]) * V + (V = Y[1] - B[1]) * V;
        P = v(P, Math.sqrt(G / V)), L = [(j[0] + W[0]) / 2, (j[1] + W[1]) / 2], D = [(B[0] + Y[0]) / 2, (B[1] + Y[1]) / 2];
      } else if (_.touch0) L = _.touch0[0], D = _.touch0[1];
      else return;
      _.zoom("touch", n(h(P, L, D), _.extent, s));
    }
  }
  function H(b, ...O) {
    if (this.__zooming) {
      var _ = C(this, O).event(b), k = b.changedTouches, E = k.length, S, P;
      for (Fn(b), f && clearTimeout(f), f = setTimeout(function() {
        f = null;
      }, p), S = 0; S < E; ++S)
        P = k[S], _.touch0 && _.touch0[2] === P.identifier ? delete _.touch0 : _.touch1 && _.touch1[2] === P.identifier && delete _.touch1;
      if (_.touch1 && !_.touch0 && (_.touch0 = _.touch1, delete _.touch1), _.touch0) _.touch0[1] = this.__zoom.invert(_.touch0[0]);
      else if (_.end(), _.taps === 2 && (P = be(P, this), Math.hypot(u[0] - P[0], u[1] - P[1]) < x)) {
        var L = xe(this).on("dblclick.zoom");
        L && L.apply(this, arguments);
      }
    }
  }
  return m.wheelDelta = function(b) {
    return arguments.length ? (r = typeof b == "function" ? b : qt(+b), m) : r;
  }, m.filter = function(b) {
    return arguments.length ? (e = typeof b == "function" ? b : qt(!!b), m) : e;
  }, m.touchable = function(b) {
    return arguments.length ? (o = typeof b == "function" ? b : qt(!!b), m) : o;
  }, m.extent = function(b) {
    return arguments.length ? (t = typeof b == "function" ? b : qt([[+b[0][0], +b[0][1]], [+b[1][0], +b[1][1]]]), m) : t;
  }, m.scaleExtent = function(b) {
    return arguments.length ? (i[0] = +b[0], i[1] = +b[1], m) : [i[0], i[1]];
  }, m.translateExtent = function(b) {
    return arguments.length ? (s[0][0] = +b[0][0], s[1][0] = +b[1][0], s[0][1] = +b[0][1], s[1][1] = +b[1][1], m) : [[s[0][0], s[0][1]], [s[1][0], s[1][1]]];
  }, m.constrain = function(b) {
    return arguments.length ? (n = b, m) : n;
  }, m.duration = function(b) {
    return arguments.length ? (a = +b, m) : a;
  }, m.interpolate = function(b) {
    return arguments.length ? (c = b, m) : c;
  }, m.on = function() {
    var b = l.on.apply(l, arguments);
    return b === l ? m : b;
  }, m.clickDistance = function(b) {
    return arguments.length ? (y = (b = +b) * b, m) : Math.sqrt(y);
  }, m.tapDistance = function(b) {
    return arguments.length ? (x = +b, m) : x;
  }, m;
}
const $e = {
  error001: () => "[React Flow]: Seems like you have not used zustand provider as an ancestor. Help: https://reactflow.dev/error#001",
  error002: () => "It looks like you've created a new nodeTypes or edgeTypes object. If this wasn't on purpose please define the nodeTypes/edgeTypes outside of the component or memoize them.",
  error003: (e) => `Node type "${e}" not found. Using fallback type "default".`,
  error004: () => "The React Flow parent container needs a width and a height to render the graph.",
  error005: () => "Only child nodes can use a parent extent.",
  error006: () => "Can't create edge. An edge needs a source and a target.",
  error007: (e) => `The old edge with id=${e} does not exist.`,
  error009: (e) => `Marker type "${e}" doesn't exist.`,
  error008: (e, { id: t, sourceHandle: n, targetHandle: r }) => `Couldn't create edge for ${e} handle id: "${e === "source" ? n : r}", edge id: ${t}.`,
  error010: () => "Handle: No node id found. Make sure to only use a Handle inside a custom Node.",
  error011: (e) => `Edge type "${e}" not found. Using fallback type "default".`,
  error012: (e) => `Node with id "${e}" does not exist, it may have been removed. This can happen when a node is deleted before the "onNodeClick" handler is called.`,
  error013: (e = "react") => `It seems that you haven't loaded the styles. Please import '@xyflow/${e}/dist/style.css' or base.css to make sure everything is working properly.`,
  error014: () => "useNodeConnections: No node ID found. Call useNodeConnections inside a custom Node or provide a node ID.",
  error015: () => "It seems that you are trying to drag a node that is not initialized. Please use onNodesChange as explained in the docs."
}, kt = [
  [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
  [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]
], Ji = ["Enter", " ", "Escape"], es = {
  "node.a11yDescription.default": "Press enter or space to select a node. Press delete to remove it and escape to cancel.",
  "node.a11yDescription.keyboardDisabled": "Press enter or space to select a node. You can then use the arrow keys to move the node around. Press delete to remove it and escape to cancel.",
  "node.a11yDescription.ariaLiveMessage": ({ direction: e, x: t, y: n }) => `Moved selected node ${e}. New position, x: ${t}, y: ${n}`,
  "edge.a11yDescription.default": "Press enter or space to select an edge. You can then press delete to remove it or escape to cancel.",
  // Control elements
  "controls.ariaLabel": "Control Panel",
  "controls.zoomIn.ariaLabel": "Zoom In",
  "controls.zoomOut.ariaLabel": "Zoom Out",
  "controls.fitView.ariaLabel": "Fit View",
  "controls.interactive.ariaLabel": "Toggle Interactivity",
  // Mini map
  "minimap.ariaLabel": "Mini Map",
  // Handle
  "handle.ariaLabel": "Handle"
};
var st;
(function(e) {
  e.Strict = "strict", e.Loose = "loose";
})(st || (st = {}));
var Xe;
(function(e) {
  e.Free = "free", e.Vertical = "vertical", e.Horizontal = "horizontal";
})(Xe || (Xe = {}));
var Ct;
(function(e) {
  e.Partial = "partial", e.Full = "full";
})(Ct || (Ct = {}));
const ts = {
  inProgress: !1,
  isValid: null,
  from: null,
  fromHandle: null,
  fromPosition: null,
  fromNode: null,
  to: null,
  toHandle: null,
  toPosition: null,
  toNode: null,
  pointer: null
};
var He;
(function(e) {
  e.Bezier = "default", e.Straight = "straight", e.Step = "step", e.SmoothStep = "smoothstep", e.SimpleBezier = "simplebezier";
})(He || (He = {}));
var fn;
(function(e) {
  e.Arrow = "arrow", e.ArrowClosed = "arrowclosed";
})(fn || (fn = {}));
var X;
(function(e) {
  e.Left = "left", e.Top = "top", e.Right = "right", e.Bottom = "bottom";
})(X || (X = {}));
const Po = {
  [X.Left]: X.Right,
  [X.Right]: X.Left,
  [X.Top]: X.Bottom,
  [X.Bottom]: X.Top
};
function ns(e) {
  return e === null ? null : e ? "valid" : "invalid";
}
const rs = (e) => "id" in e && "source" in e && "target" in e, Ed = (e) => "id" in e && "position" in e && !("source" in e) && !("target" in e), jr = (e) => "id" in e && "internals" in e && !("source" in e) && !("target" in e), At = (e, t = [0, 0]) => {
  const { width: n, height: r } = Te(e), o = e.origin ?? t, i = n * o[0], s = r * o[1];
  return {
    x: e.position.x - i,
    y: e.position.y - s
  };
}, Nd = (e, t = { nodeOrigin: [0, 0] }) => {
  if (e.length === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  const n = e.reduce((r, o) => {
    const i = typeof o == "string";
    let s = !t.nodeLookup && !i ? o : void 0;
    t.nodeLookup && (s = i ? t.nodeLookup.get(o) : jr(o) ? o : t.nodeLookup.get(o.id));
    const a = s ? dn(s, t.nodeOrigin) : { x: 0, y: 0, x2: 0, y2: 0 };
    return En(r, a);
  }, { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 });
  return Nn(n);
}, Lt = (e, t = {}) => {
  let n = { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 }, r = !1;
  return e.forEach((o) => {
    (t.filter === void 0 || t.filter(o)) && (n = En(n, dn(o)), r = !0);
  }), r ? Nn(n) : { x: 0, y: 0, width: 0, height: 0 };
}, Br = (e, t, [n, r, o] = [0, 0, 1], i = !1, s = !1) => {
  const a = {
    ...Ht(t, [n, r, o]),
    width: t.width / o,
    height: t.height / o
  }, c = [];
  for (const l of e.values()) {
    const { measured: d, selectable: u = !0, hidden: f = !1 } = l;
    if (s && !u || f)
      continue;
    const p = d.width ?? l.width ?? l.initialWidth ?? null, g = d.height ?? l.height ?? l.initialHeight ?? null, y = $t(a, ct(l)), x = (p ?? 0) * (g ?? 0), m = i && y > 0;
    (!l.internals.handleBounds || m || y >= x || l.dragging) && c.push(l);
  }
  return c;
}, Sd = (e, t) => {
  const n = /* @__PURE__ */ new Set();
  return e.forEach((r) => {
    n.add(r.id);
  }), t.filter((r) => n.has(r.source) || n.has(r.target));
};
function kd(e, t) {
  const n = /* @__PURE__ */ new Map(), r = t != null && t.nodes ? new Set(t.nodes.map((o) => o.id)) : null;
  return e.forEach((o) => {
    o.measured.width && o.measured.height && ((t == null ? void 0 : t.includeHiddenNodes) || !o.hidden) && (!r || r.has(o.id)) && n.set(o.id, o);
  }), n;
}
async function Cd({ nodes: e, width: t, height: n, panZoom: r, minZoom: o, maxZoom: i }, s) {
  if (e.size === 0)
    return Promise.resolve(!0);
  const a = kd(e, s), c = Lt(a), l = Vr(c, t, n, (s == null ? void 0 : s.minZoom) ?? o, (s == null ? void 0 : s.maxZoom) ?? i, (s == null ? void 0 : s.padding) ?? 0.1);
  return await r.setViewport(l, {
    duration: s == null ? void 0 : s.duration,
    ease: s == null ? void 0 : s.ease,
    interpolate: s == null ? void 0 : s.interpolate
  }), Promise.resolve(!0);
}
function os({ nodeId: e, nextPosition: t, nodeLookup: n, nodeOrigin: r = [0, 0], nodeExtent: o, onError: i }) {
  const s = n.get(e), a = s.parentId ? n.get(s.parentId) : void 0, { x: c, y: l } = a ? a.internals.positionAbsolute : { x: 0, y: 0 }, d = s.origin ?? r;
  let u = s.extent || o;
  if (s.extent === "parent" && !s.expandParent)
    if (!a)
      i == null || i("005", $e.error005());
    else {
      const p = a.measured.width, g = a.measured.height;
      p && g && (u = [
        [c, l],
        [c + p, l + g]
      ]);
    }
  else a && lt(s.extent) && (u = [
    [s.extent[0][0] + c, s.extent[0][1] + l],
    [s.extent[1][0] + c, s.extent[1][1] + l]
  ]);
  const f = lt(u) ? Ge(t, u, s.measured) : t;
  return (s.measured.width === void 0 || s.measured.height === void 0) && (i == null || i("015", $e.error015())), {
    position: {
      x: f.x - c + (s.measured.width ?? 0) * d[0],
      y: f.y - l + (s.measured.height ?? 0) * d[1]
    },
    positionAbsolute: f
  };
}
async function $d({ nodesToRemove: e = [], edgesToRemove: t = [], nodes: n, edges: r, onBeforeDelete: o }) {
  const i = new Set(e.map((f) => f.id)), s = [];
  for (const f of n) {
    if (f.deletable === !1)
      continue;
    const p = i.has(f.id), g = !p && f.parentId && s.find((y) => y.id === f.parentId);
    (p || g) && s.push(f);
  }
  const a = new Set(t.map((f) => f.id)), c = r.filter((f) => f.deletable !== !1), d = Sd(s, c);
  for (const f of c)
    a.has(f.id) && !d.find((g) => g.id === f.id) && d.push(f);
  if (!o)
    return {
      edges: d,
      nodes: s
    };
  const u = await o({
    nodes: s,
    edges: d
  });
  return typeof u == "boolean" ? u ? { edges: d, nodes: s } : { edges: [], nodes: [] } : u;
}
const at = (e, t = 0, n = 1) => Math.min(Math.max(e, t), n), Ge = (e = { x: 0, y: 0 }, t, n) => ({
  x: at(e.x, t[0][0], t[1][0] - ((n == null ? void 0 : n.width) ?? 0)),
  y: at(e.y, t[0][1], t[1][1] - ((n == null ? void 0 : n.height) ?? 0))
});
function is(e, t, n) {
  const { width: r, height: o } = Te(n), { x: i, y: s } = n.internals.positionAbsolute;
  return Ge(e, [
    [i, s],
    [i + r, s + o]
  ], t);
}
const zo = (e, t, n) => e < t ? at(Math.abs(e - t), 1, t) / t : e > n ? -at(Math.abs(e - n), 1, t) / t : 0, ss = (e, t, n = 15, r = 40) => {
  const o = zo(e.x, r, t.width - r) * n, i = zo(e.y, r, t.height - r) * n;
  return [o, i];
}, En = (e, t) => ({
  x: Math.min(e.x, t.x),
  y: Math.min(e.y, t.y),
  x2: Math.max(e.x2, t.x2),
  y2: Math.max(e.y2, t.y2)
}), fr = ({ x: e, y: t, width: n, height: r }) => ({
  x: e,
  y: t,
  x2: e + n,
  y2: t + r
}), Nn = ({ x: e, y: t, x2: n, y2: r }) => ({
  x: e,
  y: t,
  width: n - e,
  height: r - t
}), ct = (e, t = [0, 0]) => {
  var o, i;
  const { x: n, y: r } = jr(e) ? e.internals.positionAbsolute : At(e, t);
  return {
    x: n,
    y: r,
    width: ((o = e.measured) == null ? void 0 : o.width) ?? e.width ?? e.initialWidth ?? 0,
    height: ((i = e.measured) == null ? void 0 : i.height) ?? e.height ?? e.initialHeight ?? 0
  };
}, dn = (e, t = [0, 0]) => {
  var o, i;
  const { x: n, y: r } = jr(e) ? e.internals.positionAbsolute : At(e, t);
  return {
    x: n,
    y: r,
    x2: n + (((o = e.measured) == null ? void 0 : o.width) ?? e.width ?? e.initialWidth ?? 0),
    y2: r + (((i = e.measured) == null ? void 0 : i.height) ?? e.height ?? e.initialHeight ?? 0)
  };
}, as = (e, t) => Nn(En(fr(e), fr(t))), $t = (e, t) => {
  const n = Math.max(0, Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x)), r = Math.max(0, Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y));
  return Math.ceil(n * r);
}, Oo = (e) => Ee(e.width) && Ee(e.height) && Ee(e.x) && Ee(e.y), Ee = (e) => !isNaN(e) && isFinite(e), Md = (e, t) => {
}, Dt = (e, t = [1, 1]) => ({
  x: t[0] * Math.round(e.x / t[0]),
  y: t[1] * Math.round(e.y / t[1])
}), Ht = ({ x: e, y: t }, [n, r, o], i = !1, s = [1, 1]) => {
  const a = {
    x: (e - n) / o,
    y: (t - r) / o
  };
  return i ? Dt(a, s) : a;
}, hn = ({ x: e, y: t }, [n, r, o]) => ({
  x: e * o + n,
  y: t * o + r
});
function Je(e, t) {
  if (typeof e == "number")
    return Math.floor((t - t / (1 + e)) * 0.5);
  if (typeof e == "string" && e.endsWith("px")) {
    const n = parseFloat(e);
    if (!Number.isNaN(n))
      return Math.floor(n);
  }
  if (typeof e == "string" && e.endsWith("%")) {
    const n = parseFloat(e);
    if (!Number.isNaN(n))
      return Math.floor(t * n * 0.01);
  }
  return console.error(`[React Flow] The padding value "${e}" is invalid. Please provide a number or a string with a valid unit (px or %).`), 0;
}
function Pd(e, t, n) {
  if (typeof e == "string" || typeof e == "number") {
    const r = Je(e, n), o = Je(e, t);
    return {
      top: r,
      right: o,
      bottom: r,
      left: o,
      x: o * 2,
      y: r * 2
    };
  }
  if (typeof e == "object") {
    const r = Je(e.top ?? e.y ?? 0, n), o = Je(e.bottom ?? e.y ?? 0, n), i = Je(e.left ?? e.x ?? 0, t), s = Je(e.right ?? e.x ?? 0, t);
    return { top: r, right: s, bottom: o, left: i, x: i + s, y: r + o };
  }
  return { top: 0, right: 0, bottom: 0, left: 0, x: 0, y: 0 };
}
function zd(e, t, n, r, o, i) {
  const { x: s, y: a } = hn(e, [t, n, r]), { x: c, y: l } = hn({ x: e.x + e.width, y: e.y + e.height }, [t, n, r]), d = o - c, u = i - l;
  return {
    left: Math.floor(s),
    top: Math.floor(a),
    right: Math.floor(d),
    bottom: Math.floor(u)
  };
}
const Vr = (e, t, n, r, o, i) => {
  const s = Pd(i, t, n), a = (t - s.x) / e.width, c = (n - s.y) / e.height, l = Math.min(a, c), d = at(l, r, o), u = e.x + e.width / 2, f = e.y + e.height / 2, p = t / 2 - u * d, g = n / 2 - f * d, y = zd(e, p, g, d, t, n), x = {
    left: Math.min(y.left - s.left, 0),
    top: Math.min(y.top - s.top, 0),
    right: Math.min(y.right - s.right, 0),
    bottom: Math.min(y.bottom - s.bottom, 0)
  };
  return {
    x: p - x.left + x.right,
    y: g - x.top + x.bottom,
    zoom: d
  };
}, Mt = () => {
  var e;
  return typeof navigator < "u" && ((e = navigator == null ? void 0 : navigator.userAgent) == null ? void 0 : e.indexOf("Mac")) >= 0;
};
function lt(e) {
  return e != null && e !== "parent";
}
function Te(e) {
  var t, n;
  return {
    width: ((t = e.measured) == null ? void 0 : t.width) ?? e.width ?? e.initialWidth ?? 0,
    height: ((n = e.measured) == null ? void 0 : n.height) ?? e.height ?? e.initialHeight ?? 0
  };
}
function cs(e) {
  var t, n;
  return (((t = e.measured) == null ? void 0 : t.width) ?? e.width ?? e.initialWidth) !== void 0 && (((n = e.measured) == null ? void 0 : n.height) ?? e.height ?? e.initialHeight) !== void 0;
}
function ls(e, t = { width: 0, height: 0 }, n, r, o) {
  const i = { ...e }, s = r.get(n);
  if (s) {
    const a = s.origin || o;
    i.x += s.internals.positionAbsolute.x - (t.width ?? 0) * a[0], i.y += s.internals.positionAbsolute.y - (t.height ?? 0) * a[1];
  }
  return i;
}
function Io(e, t) {
  if (e.size !== t.size)
    return !1;
  for (const n of e)
    if (!t.has(n))
      return !1;
  return !0;
}
function Od() {
  let e, t;
  return { promise: new Promise((r, o) => {
    e = r, t = o;
  }), resolve: e, reject: t };
}
function Id(e) {
  return { ...es, ...e || {} };
}
function bt(e, { snapGrid: t = [0, 0], snapToGrid: n = !1, transform: r, containerBounds: o }) {
  const { x: i, y: s } = Ne(e), a = Ht({ x: i - ((o == null ? void 0 : o.left) ?? 0), y: s - ((o == null ? void 0 : o.top) ?? 0) }, r), { x: c, y: l } = n ? Dt(a, t) : a;
  return {
    xSnapped: c,
    ySnapped: l,
    ...a
  };
}
const Wr = (e) => ({
  width: e.offsetWidth,
  height: e.offsetHeight
}), us = (e) => {
  var t;
  return ((t = e == null ? void 0 : e.getRootNode) == null ? void 0 : t.call(e)) || (window == null ? void 0 : window.document);
}, Td = ["INPUT", "SELECT", "TEXTAREA"];
function fs(e) {
  var r, o;
  const t = ((o = (r = e.composedPath) == null ? void 0 : r.call(e)) == null ? void 0 : o[0]) || e.target;
  return (t == null ? void 0 : t.nodeType) !== 1 ? !1 : Td.includes(t.nodeName) || t.hasAttribute("contenteditable") || !!t.closest(".nokey");
}
const ds = (e) => "clientX" in e, Ne = (e, t) => {
  var i, s;
  const n = ds(e), r = n ? e.clientX : (i = e.touches) == null ? void 0 : i[0].clientX, o = n ? e.clientY : (s = e.touches) == null ? void 0 : s[0].clientY;
  return {
    x: r - ((t == null ? void 0 : t.left) ?? 0),
    y: o - ((t == null ? void 0 : t.top) ?? 0)
  };
}, To = (e, t, n, r, o) => {
  const i = t.querySelectorAll(`.${e}`);
  return !i || !i.length ? null : Array.from(i).map((s) => {
    const a = s.getBoundingClientRect();
    return {
      id: s.getAttribute("data-handleid"),
      type: e,
      nodeId: o,
      position: s.getAttribute("data-handlepos"),
      x: (a.left - n.left) / r,
      y: (a.top - n.top) / r,
      ...Wr(s)
    };
  });
};
function hs({ sourceX: e, sourceY: t, targetX: n, targetY: r, sourceControlX: o, sourceControlY: i, targetControlX: s, targetControlY: a }) {
  const c = e * 0.125 + o * 0.375 + s * 0.375 + n * 0.125, l = t * 0.125 + i * 0.375 + a * 0.375 + r * 0.125, d = Math.abs(c - e), u = Math.abs(l - t);
  return [c, l, d, u];
}
function Gt(e, t) {
  return e >= 0 ? 0.5 * e : t * 25 * Math.sqrt(-e);
}
function Ao({ pos: e, x1: t, y1: n, x2: r, y2: o, c: i }) {
  switch (e) {
    case X.Left:
      return [t - Gt(t - r, i), n];
    case X.Right:
      return [t + Gt(r - t, i), n];
    case X.Top:
      return [t, n - Gt(n - o, i)];
    case X.Bottom:
      return [t, n + Gt(o - n, i)];
  }
}
function ps({ sourceX: e, sourceY: t, sourcePosition: n = X.Bottom, targetX: r, targetY: o, targetPosition: i = X.Top, curvature: s = 0.25 }) {
  const [a, c] = Ao({
    pos: n,
    x1: e,
    y1: t,
    x2: r,
    y2: o,
    c: s
  }), [l, d] = Ao({
    pos: i,
    x1: r,
    y1: o,
    x2: e,
    y2: t,
    c: s
  }), [u, f, p, g] = hs({
    sourceX: e,
    sourceY: t,
    targetX: r,
    targetY: o,
    sourceControlX: a,
    sourceControlY: c,
    targetControlX: l,
    targetControlY: d
  });
  return [
    `M${e},${t} C${a},${c} ${l},${d} ${r},${o}`,
    u,
    f,
    p,
    g
  ];
}
function gs({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const o = Math.abs(n - e) / 2, i = n < e ? n + o : n - o, s = Math.abs(r - t) / 2, a = r < t ? r + s : r - s;
  return [i, a, o, s];
}
function Ad({ sourceNode: e, targetNode: t, selected: n = !1, zIndex: r = 0, elevateOnSelect: o = !1, zIndexMode: i = "basic" }) {
  if (i === "manual")
    return r;
  const s = o && n ? r + 1e3 : r, a = Math.max(e.parentId || o && e.selected ? e.internals.z : 0, t.parentId || o && t.selected ? t.internals.z : 0);
  return s + a;
}
function Ld({ sourceNode: e, targetNode: t, width: n, height: r, transform: o }) {
  const i = En(dn(e), dn(t));
  i.x === i.x2 && (i.x2 += 1), i.y === i.y2 && (i.y2 += 1);
  const s = {
    x: -o[0] / o[2],
    y: -o[1] / o[2],
    width: n / o[2],
    height: r / o[2]
  };
  return $t(s, Nn(i)) > 0;
}
const Dd = ({ source: e, sourceHandle: t, target: n, targetHandle: r }) => `xy-edge__${e}${t || ""}-${n}${r || ""}`, Hd = (e, t) => t.some((n) => n.source === e.source && n.target === e.target && (n.sourceHandle === e.sourceHandle || !n.sourceHandle && !e.sourceHandle) && (n.targetHandle === e.targetHandle || !n.targetHandle && !e.targetHandle)), ms = (e, t, n = {}) => {
  if (!e.source || !e.target)
    return t;
  const r = n.getEdgeId || Dd;
  let o;
  return rs(e) ? o = { ...e } : o = {
    ...e,
    id: r(e)
  }, Hd(o, t) ? t : (o.sourceHandle === null && delete o.sourceHandle, o.targetHandle === null && delete o.targetHandle, t.concat(o));
};
function ys({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const [o, i, s, a] = gs({
    sourceX: e,
    sourceY: t,
    targetX: n,
    targetY: r
  });
  return [`M ${e},${t}L ${n},${r}`, o, i, s, a];
}
const Lo = {
  [X.Left]: { x: -1, y: 0 },
  [X.Right]: { x: 1, y: 0 },
  [X.Top]: { x: 0, y: -1 },
  [X.Bottom]: { x: 0, y: 1 }
}, Rd = ({ source: e, sourcePosition: t = X.Bottom, target: n }) => t === X.Left || t === X.Right ? e.x < n.x ? { x: 1, y: 0 } : { x: -1, y: 0 } : e.y < n.y ? { x: 0, y: 1 } : { x: 0, y: -1 }, Do = (e, t) => Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
function jd({ source: e, sourcePosition: t = X.Bottom, target: n, targetPosition: r = X.Top, center: o, offset: i, stepPosition: s }) {
  const a = Lo[t], c = Lo[r], l = { x: e.x + a.x * i, y: e.y + a.y * i }, d = { x: n.x + c.x * i, y: n.y + c.y * i }, u = Rd({
    source: l,
    sourcePosition: t,
    target: d
  }), f = u.x !== 0 ? "x" : "y", p = u[f];
  let g = [], y, x;
  const m = { x: 0, y: 0 }, v = { x: 0, y: 0 }, [, , h, w] = gs({
    sourceX: e.x,
    sourceY: e.y,
    targetX: n.x,
    targetY: n.y
  });
  if (a[f] * c[f] === -1) {
    f === "x" ? (y = o.x ?? l.x + (d.x - l.x) * s, x = o.y ?? (l.y + d.y) / 2) : (y = o.x ?? (l.x + d.x) / 2, x = o.y ?? l.y + (d.y - l.y) * s);
    const C = [
      { x: y, y: l.y },
      { x: y, y: d.y }
    ], M = [
      { x: l.x, y: x },
      { x: d.x, y: x }
    ];
    a[f] === p ? g = f === "x" ? C : M : g = f === "x" ? M : C;
  } else {
    const C = [{ x: l.x, y: d.y }], M = [{ x: d.x, y: l.y }];
    if (f === "x" ? g = a.x === p ? M : C : g = a.y === p ? C : M, t === r) {
      const I = Math.abs(e[f] - n[f]);
      if (I <= i) {
        const H = Math.min(i - 1, i - I);
        a[f] === p ? m[f] = (l[f] > e[f] ? -1 : 1) * H : v[f] = (d[f] > n[f] ? -1 : 1) * H;
      }
    }
    if (t !== r) {
      const I = f === "x" ? "y" : "x", H = a[f] === c[I], b = l[I] > d[I], O = l[I] < d[I];
      (a[f] === 1 && (!H && b || H && O) || a[f] !== 1 && (!H && O || H && b)) && (g = f === "x" ? C : M);
    }
    const T = { x: l.x + m.x, y: l.y + m.y }, A = { x: d.x + v.x, y: d.y + v.y }, R = Math.max(Math.abs(T.x - g[0].x), Math.abs(A.x - g[0].x)), z = Math.max(Math.abs(T.y - g[0].y), Math.abs(A.y - g[0].y));
    R >= z ? (y = (T.x + A.x) / 2, x = g[0].y) : (y = g[0].x, x = (T.y + A.y) / 2);
  }
  return [[
    e,
    { x: l.x + m.x, y: l.y + m.y },
    ...g,
    { x: d.x + v.x, y: d.y + v.y },
    n
  ], y, x, h, w];
}
function Bd(e, t, n, r) {
  const o = Math.min(Do(e, t) / 2, Do(t, n) / 2, r), { x: i, y: s } = t;
  if (e.x === i && i === n.x || e.y === s && s === n.y)
    return `L${i} ${s}`;
  if (e.y === s) {
    const l = e.x < n.x ? -1 : 1, d = e.y < n.y ? 1 : -1;
    return `L ${i + o * l},${s}Q ${i},${s} ${i},${s + o * d}`;
  }
  const a = e.x < n.x ? 1 : -1, c = e.y < n.y ? -1 : 1;
  return `L ${i},${s + o * c}Q ${i},${s} ${i + o * a},${s}`;
}
function dr({ sourceX: e, sourceY: t, sourcePosition: n = X.Bottom, targetX: r, targetY: o, targetPosition: i = X.Top, borderRadius: s = 5, centerX: a, centerY: c, offset: l = 20, stepPosition: d = 0.5 }) {
  const [u, f, p, g, y] = jd({
    source: { x: e, y: t },
    sourcePosition: n,
    target: { x: r, y: o },
    targetPosition: i,
    center: { x: a, y: c },
    offset: l,
    stepPosition: d
  });
  return [u.reduce((m, v, h) => {
    let w = "";
    return h > 0 && h < u.length - 1 ? w = Bd(u[h - 1], v, u[h + 1], s) : w = `${h === 0 ? "M" : "L"}${v.x} ${v.y}`, m += w, m;
  }, ""), f, p, g, y];
}
function Ho(e) {
  var t;
  return e && !!(e.internals.handleBounds || (t = e.handles) != null && t.length) && !!(e.measured.width || e.width || e.initialWidth);
}
function Vd(e) {
  var u;
  const { sourceNode: t, targetNode: n } = e;
  if (!Ho(t) || !Ho(n))
    return null;
  const r = t.internals.handleBounds || Ro(t.handles), o = n.internals.handleBounds || Ro(n.handles), i = jo((r == null ? void 0 : r.source) ?? [], e.sourceHandle), s = jo(
    // when connection type is loose we can define all handles as sources and connect source -> source
    e.connectionMode === st.Strict ? (o == null ? void 0 : o.target) ?? [] : ((o == null ? void 0 : o.target) ?? []).concat((o == null ? void 0 : o.source) ?? []),
    e.targetHandle
  );
  if (!i || !s)
    return (u = e.onError) == null || u.call(e, "008", $e.error008(i ? "target" : "source", {
      id: e.id,
      sourceHandle: e.sourceHandle,
      targetHandle: e.targetHandle
    })), null;
  const a = (i == null ? void 0 : i.position) || X.Bottom, c = (s == null ? void 0 : s.position) || X.Top, l = Ue(t, i, a), d = Ue(n, s, c);
  return {
    sourceX: l.x,
    sourceY: l.y,
    targetX: d.x,
    targetY: d.y,
    sourcePosition: a,
    targetPosition: c
  };
}
function Ro(e) {
  if (!e)
    return null;
  const t = [], n = [];
  for (const r of e)
    r.width = r.width ?? 1, r.height = r.height ?? 1, r.type === "source" ? t.push(r) : r.type === "target" && n.push(r);
  return {
    source: t,
    target: n
  };
}
function Ue(e, t, n = X.Left, r = !1) {
  const o = ((t == null ? void 0 : t.x) ?? 0) + e.internals.positionAbsolute.x, i = ((t == null ? void 0 : t.y) ?? 0) + e.internals.positionAbsolute.y, { width: s, height: a } = t ?? Te(e);
  if (r)
    return { x: o + s / 2, y: i + a / 2 };
  switch ((t == null ? void 0 : t.position) ?? n) {
    case X.Top:
      return { x: o + s / 2, y: i };
    case X.Right:
      return { x: o + s, y: i + a / 2 };
    case X.Bottom:
      return { x: o + s / 2, y: i + a };
    case X.Left:
      return { x: o, y: i + a / 2 };
  }
}
function jo(e, t) {
  return e && (t ? e.find((n) => n.id === t) : e[0]) || null;
}
function hr(e, t) {
  return e ? typeof e == "string" ? e : `${t ? `${t}__` : ""}${Object.keys(e).sort().map((r) => `${r}=${e[r]}`).join("&")}` : "";
}
function Wd(e, { id: t, defaultColor: n, defaultMarkerStart: r, defaultMarkerEnd: o }) {
  const i = /* @__PURE__ */ new Set();
  return e.reduce((s, a) => ([a.markerStart || r, a.markerEnd || o].forEach((c) => {
    if (c && typeof c == "object") {
      const l = hr(c, t);
      i.has(l) || (s.push({ id: l, color: c.color || n, ...c }), i.add(l));
    }
  }), s), []).sort((s, a) => s.id.localeCompare(a.id));
}
const xs = 1e3, Fd = 10, Fr = {
  nodeOrigin: [0, 0],
  nodeExtent: kt,
  elevateNodesOnSelect: !0,
  zIndexMode: "basic",
  defaults: {}
}, Xd = {
  ...Fr,
  checkEquality: !0
};
function Xr(e, t) {
  const n = { ...e };
  for (const r in t)
    t[r] !== void 0 && (n[r] = t[r]);
  return n;
}
function Yd(e, t, n) {
  const r = Xr(Fr, n);
  for (const o of e.values())
    if (o.parentId)
      qr(o, e, t, r);
    else {
      const i = At(o, r.nodeOrigin), s = lt(o.extent) ? o.extent : r.nodeExtent, a = Ge(i, s, Te(o));
      o.internals.positionAbsolute = a;
    }
}
function qd(e, t) {
  if (!e.handles)
    return e.measured ? t == null ? void 0 : t.internals.handleBounds : void 0;
  const n = [], r = [];
  for (const o of e.handles) {
    const i = {
      id: o.id,
      width: o.width ?? 1,
      height: o.height ?? 1,
      nodeId: e.id,
      x: o.x,
      y: o.y,
      position: o.position,
      type: o.type
    };
    o.type === "source" ? n.push(i) : o.type === "target" && r.push(i);
  }
  return {
    source: n,
    target: r
  };
}
function Yr(e) {
  return e === "manual";
}
function pr(e, t, n, r = {}) {
  var l, d;
  const o = Xr(Xd, r), i = { i: 0 }, s = new Map(t), a = o != null && o.elevateNodesOnSelect && !Yr(o.zIndexMode) ? xs : 0;
  let c = e.length > 0;
  t.clear(), n.clear();
  for (const u of e) {
    let f = s.get(u.id);
    if (o.checkEquality && u === (f == null ? void 0 : f.internals.userNode))
      t.set(u.id, f);
    else {
      const p = At(u, o.nodeOrigin), g = lt(u.extent) ? u.extent : o.nodeExtent, y = Ge(p, g, Te(u));
      f = {
        ...o.defaults,
        ...u,
        measured: {
          width: (l = u.measured) == null ? void 0 : l.width,
          height: (d = u.measured) == null ? void 0 : d.height
        },
        internals: {
          positionAbsolute: y,
          // if user re-initializes the node or removes `measured` for whatever reason, we reset the handleBounds so that the node gets re-measured
          handleBounds: qd(u, f),
          z: ws(u, a, o.zIndexMode),
          userNode: u
        }
      }, t.set(u.id, f);
    }
    (f.measured === void 0 || f.measured.width === void 0 || f.measured.height === void 0) && !f.hidden && (c = !1), u.parentId && qr(f, t, n, r, i);
  }
  return c;
}
function Gd(e, t) {
  if (!e.parentId)
    return;
  const n = t.get(e.parentId);
  n ? n.set(e.id, e) : t.set(e.parentId, /* @__PURE__ */ new Map([[e.id, e]]));
}
function qr(e, t, n, r, o) {
  const { elevateNodesOnSelect: i, nodeOrigin: s, nodeExtent: a, zIndexMode: c } = Xr(Fr, r), l = e.parentId, d = t.get(l);
  if (!d) {
    console.warn(`Parent node ${l} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);
    return;
  }
  Gd(e, n), o && !d.parentId && d.internals.rootParentIndex === void 0 && c === "auto" && (d.internals.rootParentIndex = ++o.i, d.internals.z = d.internals.z + o.i * Fd), o && d.internals.rootParentIndex !== void 0 && (o.i = d.internals.rootParentIndex);
  const u = i && !Yr(c) ? xs : 0, { x: f, y: p, z: g } = Ud(e, d, s, a, u, c), { positionAbsolute: y } = e.internals, x = f !== y.x || p !== y.y;
  (x || g !== e.internals.z) && t.set(e.id, {
    ...e,
    internals: {
      ...e.internals,
      positionAbsolute: x ? { x: f, y: p } : y,
      z: g
    }
  });
}
function ws(e, t, n) {
  const r = Ee(e.zIndex) ? e.zIndex : 0;
  return Yr(n) ? r : r + (e.selected ? t : 0);
}
function Ud(e, t, n, r, o, i) {
  const { x: s, y: a } = t.internals.positionAbsolute, c = Te(e), l = At(e, n), d = lt(e.extent) ? Ge(l, e.extent, c) : l;
  let u = Ge({ x: s + d.x, y: a + d.y }, r, c);
  e.extent === "parent" && (u = is(u, c, t));
  const f = ws(e, o, i), p = t.internals.z ?? 0;
  return {
    x: u.x,
    y: u.y,
    z: p >= f ? p + 1 : f
  };
}
function Gr(e, t, n, r = [0, 0]) {
  var s;
  const o = [], i = /* @__PURE__ */ new Map();
  for (const a of e) {
    const c = t.get(a.parentId);
    if (!c)
      continue;
    const l = ((s = i.get(a.parentId)) == null ? void 0 : s.expandedRect) ?? ct(c), d = as(l, a.rect);
    i.set(a.parentId, { expandedRect: d, parent: c });
  }
  return i.size > 0 && i.forEach(({ expandedRect: a, parent: c }, l) => {
    var h;
    const d = c.internals.positionAbsolute, u = Te(c), f = c.origin ?? r, p = a.x < d.x ? Math.round(Math.abs(d.x - a.x)) : 0, g = a.y < d.y ? Math.round(Math.abs(d.y - a.y)) : 0, y = Math.max(u.width, Math.round(a.width)), x = Math.max(u.height, Math.round(a.height)), m = (y - u.width) * f[0], v = (x - u.height) * f[1];
    (p > 0 || g > 0 || m || v) && (o.push({
      id: l,
      type: "position",
      position: {
        x: c.position.x - p + m,
        y: c.position.y - g + v
      }
    }), (h = n.get(l)) == null || h.forEach((w) => {
      e.some(($) => $.id === w.id) || o.push({
        id: w.id,
        type: "position",
        position: {
          x: w.position.x + p,
          y: w.position.y + g
        }
      });
    })), (u.width < a.width || u.height < a.height || p || g) && o.push({
      id: l,
      type: "dimensions",
      setAttributes: !0,
      dimensions: {
        width: y + (p ? f[0] * p - m : 0),
        height: x + (g ? f[1] * g - v : 0)
      }
    });
  }), o;
}
function Kd(e, t, n, r, o, i, s) {
  const a = r == null ? void 0 : r.querySelector(".xyflow__viewport");
  let c = !1;
  if (!a)
    return { changes: [], updatedInternals: c };
  const l = [], d = window.getComputedStyle(a), { m22: u } = new window.DOMMatrixReadOnly(d.transform), f = [];
  for (const p of e.values()) {
    const g = t.get(p.id);
    if (!g)
      continue;
    if (g.hidden) {
      t.set(g.id, {
        ...g,
        internals: {
          ...g.internals,
          handleBounds: void 0
        }
      }), c = !0;
      continue;
    }
    const y = Wr(p.nodeElement), x = g.measured.width !== y.width || g.measured.height !== y.height;
    if (!!(y.width && y.height && (x || !g.internals.handleBounds || p.force))) {
      const v = p.nodeElement.getBoundingClientRect(), h = lt(g.extent) ? g.extent : i;
      let { positionAbsolute: w } = g.internals;
      g.parentId && g.extent === "parent" ? w = is(w, y, t.get(g.parentId)) : h && (w = Ge(w, h, y));
      const $ = {
        ...g,
        measured: y,
        internals: {
          ...g.internals,
          positionAbsolute: w,
          handleBounds: {
            source: To("source", p.nodeElement, v, u, g.id),
            target: To("target", p.nodeElement, v, u, g.id)
          }
        }
      };
      t.set(g.id, $), g.parentId && qr($, t, n, { nodeOrigin: o, zIndexMode: s }), c = !0, x && (l.push({
        id: g.id,
        type: "dimensions",
        dimensions: y
      }), g.expandParent && g.parentId && f.push({
        id: g.id,
        parentId: g.parentId,
        rect: ct($, o)
      }));
    }
  }
  if (f.length > 0) {
    const p = Gr(f, t, n, o);
    l.push(...p);
  }
  return { changes: l, updatedInternals: c };
}
async function Zd({ delta: e, panZoom: t, transform: n, translateExtent: r, width: o, height: i }) {
  if (!t || !e.x && !e.y)
    return Promise.resolve(!1);
  const s = await t.setViewportConstrained({
    x: n[0] + e.x,
    y: n[1] + e.y,
    zoom: n[2]
  }, [
    [0, 0],
    [o, i]
  ], r), a = !!s && (s.x !== n[0] || s.y !== n[1] || s.k !== n[2]);
  return Promise.resolve(a);
}
function Bo(e, t, n, r, o, i) {
  let s = o;
  const a = r.get(s) || /* @__PURE__ */ new Map();
  r.set(s, a.set(n, t)), s = `${o}-${e}`;
  const c = r.get(s) || /* @__PURE__ */ new Map();
  if (r.set(s, c.set(n, t)), i) {
    s = `${o}-${e}-${i}`;
    const l = r.get(s) || /* @__PURE__ */ new Map();
    r.set(s, l.set(n, t));
  }
}
function vs(e, t, n) {
  e.clear(), t.clear();
  for (const r of n) {
    const { source: o, target: i, sourceHandle: s = null, targetHandle: a = null } = r, c = { edgeId: r.id, source: o, target: i, sourceHandle: s, targetHandle: a }, l = `${o}-${s}--${i}-${a}`, d = `${i}-${a}--${o}-${s}`;
    Bo("source", c, d, e, o, s), Bo("target", c, l, e, i, a), t.set(r.id, r);
  }
}
function bs(e, t) {
  if (!e.parentId)
    return !1;
  const n = t.get(e.parentId);
  return n ? n.selected ? !0 : bs(n, t) : !1;
}
function Vo(e, t, n) {
  var o;
  let r = e;
  do {
    if ((o = r == null ? void 0 : r.matches) != null && o.call(r, t))
      return !0;
    if (r === n)
      return !1;
    r = r == null ? void 0 : r.parentElement;
  } while (r);
  return !1;
}
function Qd(e, t, n, r) {
  const o = /* @__PURE__ */ new Map();
  for (const [i, s] of e)
    if ((s.selected || s.id === r) && (!s.parentId || !bs(s, e)) && (s.draggable || t && typeof s.draggable > "u")) {
      const a = e.get(i);
      a && o.set(i, {
        id: i,
        position: a.position || { x: 0, y: 0 },
        distance: {
          x: n.x - a.internals.positionAbsolute.x,
          y: n.y - a.internals.positionAbsolute.y
        },
        extent: a.extent,
        parentId: a.parentId,
        origin: a.origin,
        expandParent: a.expandParent,
        internals: {
          positionAbsolute: a.internals.positionAbsolute || { x: 0, y: 0 }
        },
        measured: {
          width: a.measured.width ?? 0,
          height: a.measured.height ?? 0
        }
      });
    }
  return o;
}
function Xn({ nodeId: e, dragItems: t, nodeLookup: n, dragging: r = !0 }) {
  var s, a, c;
  const o = [];
  for (const [l, d] of t) {
    const u = (s = n.get(l)) == null ? void 0 : s.internals.userNode;
    u && o.push({
      ...u,
      position: d.position,
      dragging: r
    });
  }
  if (!e)
    return [o[0], o];
  const i = (a = n.get(e)) == null ? void 0 : a.internals.userNode;
  return [
    i ? {
      ...i,
      position: ((c = t.get(e)) == null ? void 0 : c.position) || i.position,
      dragging: r
    } : o[0],
    o
  ];
}
function Jd({ dragItems: e, snapGrid: t, x: n, y: r }) {
  const o = e.values().next().value;
  if (!o)
    return null;
  const i = {
    x: n - o.distance.x,
    y: r - o.distance.y
  }, s = Dt(i, t);
  return {
    x: s.x - i.x,
    y: s.y - i.y
  };
}
function eh({ onNodeMouseDown: e, getStoreItems: t, onDragStart: n, onDrag: r, onDragStop: o }) {
  let i = { x: null, y: null }, s = 0, a = /* @__PURE__ */ new Map(), c = !1, l = { x: 0, y: 0 }, d = null, u = !1, f = null, p = !1, g = !1, y = null;
  function x({ noDragClassName: v, handleSelector: h, domNode: w, isSelectable: $, nodeId: C, nodeClickDistance: M = 0 }) {
    f = xe(w);
    function T({ x: I, y: H }) {
      const { nodeLookup: b, nodeExtent: O, snapGrid: _, snapToGrid: k, nodeOrigin: E, onNodeDrag: S, onSelectionDrag: P, onError: L, updateNodePositions: D } = t();
      i = { x: I, y: H };
      let j = !1;
      const B = a.size > 1, W = B && O ? fr(Lt(a)) : null, Y = B && k ? Jd({
        dragItems: a,
        snapGrid: _,
        x: I,
        y: H
      }) : null;
      for (const [G, V] of a) {
        if (!b.has(G))
          continue;
        let U = { x: I - V.distance.x, y: H - V.distance.y };
        k && (U = Y ? {
          x: Math.round(U.x + Y.x),
          y: Math.round(U.y + Y.y)
        } : Dt(U, _));
        let ee = null;
        if (B && O && !V.extent && W) {
          const { positionAbsolute: K } = V.internals, ie = K.x - W.x + O[0][0], se = K.x + V.measured.width - W.x2 + O[1][0], ne = K.y - W.y + O[0][1], ge = K.y + V.measured.height - W.y2 + O[1][1];
          ee = [
            [ie, ne],
            [se, ge]
          ];
        }
        const { position: Q, positionAbsolute: Z } = os({
          nodeId: G,
          nextPosition: U,
          nodeLookup: b,
          nodeExtent: ee || O,
          nodeOrigin: E,
          onError: L
        });
        j = j || V.position.x !== Q.x || V.position.y !== Q.y, V.position = Q, V.internals.positionAbsolute = Z;
      }
      if (g = g || j, !!j && (D(a, !0), y && (r || S || !C && P))) {
        const [G, V] = Xn({
          nodeId: C,
          dragItems: a,
          nodeLookup: b
        });
        r == null || r(y, a, G, V), S == null || S(y, G, V), C || P == null || P(y, V);
      }
    }
    async function A() {
      if (!d)
        return;
      const { transform: I, panBy: H, autoPanSpeed: b, autoPanOnNodeDrag: O } = t();
      if (!O) {
        c = !1, cancelAnimationFrame(s);
        return;
      }
      const [_, k] = ss(l, d, b);
      (_ !== 0 || k !== 0) && (i.x = (i.x ?? 0) - _ / I[2], i.y = (i.y ?? 0) - k / I[2], await H({ x: _, y: k }) && T(i)), s = requestAnimationFrame(A);
    }
    function R(I) {
      var B;
      const { nodeLookup: H, multiSelectionActive: b, nodesDraggable: O, transform: _, snapGrid: k, snapToGrid: E, selectNodesOnDrag: S, onNodeDragStart: P, onSelectionDragStart: L, unselectNodesAndEdges: D } = t();
      u = !0, (!S || !$) && !b && C && ((B = H.get(C)) != null && B.selected || D()), $ && S && C && (e == null || e(C));
      const j = bt(I.sourceEvent, { transform: _, snapGrid: k, snapToGrid: E, containerBounds: d });
      if (i = j, a = Qd(H, O, j, C), a.size > 0 && (n || P || !C && L)) {
        const [W, Y] = Xn({
          nodeId: C,
          dragItems: a,
          nodeLookup: H
        });
        n == null || n(I.sourceEvent, a, W, Y), P == null || P(I.sourceEvent, W, Y), C || L == null || L(I.sourceEvent, Y);
      }
    }
    const z = Di().clickDistance(M).on("start", (I) => {
      const { domNode: H, nodeDragThreshold: b, transform: O, snapGrid: _, snapToGrid: k } = t();
      d = (H == null ? void 0 : H.getBoundingClientRect()) || null, p = !1, g = !1, y = I.sourceEvent, b === 0 && R(I), i = bt(I.sourceEvent, { transform: O, snapGrid: _, snapToGrid: k, containerBounds: d }), l = Ne(I.sourceEvent, d);
    }).on("drag", (I) => {
      const { autoPanOnNodeDrag: H, transform: b, snapGrid: O, snapToGrid: _, nodeDragThreshold: k, nodeLookup: E } = t(), S = bt(I.sourceEvent, { transform: b, snapGrid: O, snapToGrid: _, containerBounds: d });
      if (y = I.sourceEvent, (I.sourceEvent.type === "touchmove" && I.sourceEvent.touches.length > 1 || // if user deletes a node while dragging, we need to abort the drag to prevent errors
      C && !E.has(C)) && (p = !0), !p) {
        if (!c && H && u && (c = !0, A()), !u) {
          const P = Ne(I.sourceEvent, d), L = P.x - l.x, D = P.y - l.y;
          Math.sqrt(L * L + D * D) > k && R(I);
        }
        (i.x !== S.xSnapped || i.y !== S.ySnapped) && a && u && (l = Ne(I.sourceEvent, d), T(S));
      }
    }).on("end", (I) => {
      if (!(!u || p) && (c = !1, u = !1, cancelAnimationFrame(s), a.size > 0)) {
        const { nodeLookup: H, updateNodePositions: b, onNodeDragStop: O, onSelectionDragStop: _ } = t();
        if (g && (b(a, !1), g = !1), o || O || !C && _) {
          const [k, E] = Xn({
            nodeId: C,
            dragItems: a,
            nodeLookup: H,
            dragging: !1
          });
          o == null || o(I.sourceEvent, a, k, E), O == null || O(I.sourceEvent, k, E), C || _ == null || _(I.sourceEvent, E);
        }
      }
    }).filter((I) => {
      const H = I.target;
      return !I.button && (!v || !Vo(H, `.${v}`, w)) && (!h || Vo(H, h, w));
    });
    f.call(z);
  }
  function m() {
    f == null || f.on(".drag", null);
  }
  return {
    update: x,
    destroy: m
  };
}
function th(e, t, n) {
  const r = [], o = {
    x: e.x - n,
    y: e.y - n,
    width: n * 2,
    height: n * 2
  };
  for (const i of t.values())
    $t(o, ct(i)) > 0 && r.push(i);
  return r;
}
const nh = 250;
function rh(e, t, n, r) {
  var a, c;
  let o = [], i = 1 / 0;
  const s = th(e, n, t + nh);
  for (const l of s) {
    const d = [...((a = l.internals.handleBounds) == null ? void 0 : a.source) ?? [], ...((c = l.internals.handleBounds) == null ? void 0 : c.target) ?? []];
    for (const u of d) {
      if (r.nodeId === u.nodeId && r.type === u.type && r.id === u.id)
        continue;
      const { x: f, y: p } = Ue(l, u, u.position, !0), g = Math.sqrt(Math.pow(f - e.x, 2) + Math.pow(p - e.y, 2));
      g > t || (g < i ? (o = [{ ...u, x: f, y: p }], i = g) : g === i && o.push({ ...u, x: f, y: p }));
    }
  }
  if (!o.length)
    return null;
  if (o.length > 1) {
    const l = r.type === "source" ? "target" : "source";
    return o.find((d) => d.type === l) ?? o[0];
  }
  return o[0];
}
function _s(e, t, n, r, o, i = !1) {
  var l, d, u;
  const s = r.get(e);
  if (!s)
    return null;
  const a = o === "strict" ? (l = s.internals.handleBounds) == null ? void 0 : l[t] : [...((d = s.internals.handleBounds) == null ? void 0 : d.source) ?? [], ...((u = s.internals.handleBounds) == null ? void 0 : u.target) ?? []], c = (n ? a == null ? void 0 : a.find((f) => f.id === n) : a == null ? void 0 : a[0]) ?? null;
  return c && i ? { ...c, ...Ue(s, c, c.position, !0) } : c;
}
function Es(e, t) {
  return e || (t != null && t.classList.contains("target") ? "target" : t != null && t.classList.contains("source") ? "source" : null);
}
function oh(e, t) {
  let n = null;
  return t ? n = !0 : e && !t && (n = !1), n;
}
const Ns = () => !0;
function ih(e, { connectionMode: t, connectionRadius: n, handleId: r, nodeId: o, edgeUpdaterType: i, isTarget: s, domNode: a, nodeLookup: c, lib: l, autoPanOnConnect: d, flowId: u, panBy: f, cancelConnection: p, onConnectStart: g, onConnect: y, onConnectEnd: x, isValidConnection: m = Ns, onReconnectEnd: v, updateConnection: h, getTransform: w, getFromHandle: $, autoPanSpeed: C, dragThreshold: M = 1, handleDomNode: T }) {
  const A = us(e.target);
  let R = 0, z;
  const { x: I, y: H } = Ne(e), b = Es(i, T), O = a == null ? void 0 : a.getBoundingClientRect();
  let _ = !1;
  if (!O || !b)
    return;
  const k = _s(o, b, r, c, t);
  if (!k)
    return;
  let E = Ne(e, O), S = !1, P = null, L = !1, D = null;
  function j() {
    if (!d || !O)
      return;
    const [Q, Z] = ss(E, O, C);
    f({ x: Q, y: Z }), R = requestAnimationFrame(j);
  }
  const B = {
    ...k,
    nodeId: o,
    type: b,
    position: k.position
  }, W = c.get(o);
  let G = {
    inProgress: !0,
    isValid: null,
    from: Ue(W, B, X.Left, !0),
    fromHandle: B,
    fromPosition: B.position,
    fromNode: W,
    to: E,
    toHandle: null,
    toPosition: Po[B.position],
    toNode: null,
    pointer: E
  };
  function V() {
    _ = !0, h(G), g == null || g(e, { nodeId: o, handleId: r, handleType: b });
  }
  M === 0 && V();
  function U(Q) {
    if (!_) {
      const { x: ge, y: Ae } = Ne(Q), Pe = ge - I, je = Ae - H;
      if (!(Pe * Pe + je * je > M * M))
        return;
      V();
    }
    if (!$() || !B) {
      ee(Q);
      return;
    }
    const Z = w();
    E = Ne(Q, O), z = rh(Ht(E, Z, !1, [1, 1]), n, c, B), S || (j(), S = !0);
    const K = Ss(Q, {
      handle: z,
      connectionMode: t,
      fromNodeId: o,
      fromHandleId: r,
      fromType: s ? "target" : "source",
      isValidConnection: m,
      doc: A,
      lib: l,
      flowId: u,
      nodeLookup: c
    });
    D = K.handleDomNode, P = K.connection, L = oh(!!z, K.isValid);
    const ie = c.get(o), se = ie ? Ue(ie, B, X.Left, !0) : G.from, ne = {
      ...G,
      from: se,
      isValid: L,
      to: K.toHandle && L ? hn({ x: K.toHandle.x, y: K.toHandle.y }, Z) : E,
      toHandle: K.toHandle,
      toPosition: L && K.toHandle ? K.toHandle.position : Po[B.position],
      toNode: K.toHandle ? c.get(K.toHandle.nodeId) : null,
      pointer: E
    };
    h(ne), G = ne;
  }
  function ee(Q) {
    if (!("touches" in Q && Q.touches.length > 0)) {
      if (_) {
        (z || D) && P && L && (y == null || y(P));
        const { inProgress: Z, ...K } = G, ie = {
          ...K,
          toPosition: G.toHandle ? G.toPosition : null
        };
        x == null || x(Q, ie), i && (v == null || v(Q, ie));
      }
      p(), cancelAnimationFrame(R), S = !1, L = !1, P = null, D = null, A.removeEventListener("mousemove", U), A.removeEventListener("mouseup", ee), A.removeEventListener("touchmove", U), A.removeEventListener("touchend", ee);
    }
  }
  A.addEventListener("mousemove", U), A.addEventListener("mouseup", ee), A.addEventListener("touchmove", U), A.addEventListener("touchend", ee);
}
function Ss(e, { handle: t, connectionMode: n, fromNodeId: r, fromHandleId: o, fromType: i, doc: s, lib: a, flowId: c, isValidConnection: l = Ns, nodeLookup: d }) {
  const u = i === "target", f = t ? s.querySelector(`.${a}-flow__handle[data-id="${c}-${t == null ? void 0 : t.nodeId}-${t == null ? void 0 : t.id}-${t == null ? void 0 : t.type}"]`) : null, { x: p, y: g } = Ne(e), y = s.elementFromPoint(p, g), x = y != null && y.classList.contains(`${a}-flow__handle`) ? y : f, m = {
    handleDomNode: x,
    isValid: !1,
    connection: null,
    toHandle: null
  };
  if (x) {
    const v = Es(void 0, x), h = x.getAttribute("data-nodeid"), w = x.getAttribute("data-handleid"), $ = x.classList.contains("connectable"), C = x.classList.contains("connectableend");
    if (!h || !v)
      return m;
    const M = {
      source: u ? h : r,
      sourceHandle: u ? w : o,
      target: u ? r : h,
      targetHandle: u ? o : w
    };
    m.connection = M;
    const A = $ && C && (n === st.Strict ? u && v === "source" || !u && v === "target" : h !== r || w !== o);
    m.isValid = A && l(M), m.toHandle = _s(h, v, w, d, n, !0);
  }
  return m;
}
const gr = {
  onPointerDown: ih,
  isValid: Ss
};
function sh({ domNode: e, panZoom: t, getTransform: n, getViewScale: r }) {
  const o = xe(e);
  function i({ translateExtent: a, width: c, height: l, zoomStep: d = 1, pannable: u = !0, zoomable: f = !0, inversePan: p = !1 }) {
    const g = (h) => {
      if (h.sourceEvent.type !== "wheel" || !t)
        return;
      const w = n(), $ = h.sourceEvent.ctrlKey && Mt() ? 10 : 1, C = -h.sourceEvent.deltaY * (h.sourceEvent.deltaMode === 1 ? 0.05 : h.sourceEvent.deltaMode ? 1 : 2e-3) * d, M = w[2] * Math.pow(2, C * $);
      t.scaleTo(M);
    };
    let y = [0, 0];
    const x = (h) => {
      (h.sourceEvent.type === "mousedown" || h.sourceEvent.type === "touchstart") && (y = [
        h.sourceEvent.clientX ?? h.sourceEvent.touches[0].clientX,
        h.sourceEvent.clientY ?? h.sourceEvent.touches[0].clientY
      ]);
    }, m = (h) => {
      const w = n();
      if (h.sourceEvent.type !== "mousemove" && h.sourceEvent.type !== "touchmove" || !t)
        return;
      const $ = [
        h.sourceEvent.clientX ?? h.sourceEvent.touches[0].clientX,
        h.sourceEvent.clientY ?? h.sourceEvent.touches[0].clientY
      ], C = [$[0] - y[0], $[1] - y[1]];
      y = $;
      const M = r() * Math.max(w[2], Math.log(w[2])) * (p ? -1 : 1), T = {
        x: w[0] - C[0] * M,
        y: w[1] - C[1] * M
      }, A = [
        [0, 0],
        [c, l]
      ];
      t.setViewportConstrained({
        x: T.x,
        y: T.y,
        zoom: w[2]
      }, A, a);
    }, v = Qi().on("start", x).on("zoom", u ? m : null).on("zoom.wheel", f ? g : null);
    o.call(v, {});
  }
  function s() {
    o.on("zoom", null);
  }
  return {
    update: i,
    destroy: s,
    pointer: be
  };
}
const Sn = (e) => ({
  x: e.x,
  y: e.y,
  zoom: e.k
}), Yn = ({ x: e, y: t, zoom: n }) => _n.translate(e, t).scale(n), et = (e, t) => e.target.closest(`.${t}`), ks = (e, t) => t === 2 && Array.isArray(e) && e.includes(2), ah = (e) => ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2, qn = (e, t = 0, n = ah, r = () => {
}) => {
  const o = typeof t == "number" && t > 0;
  return o || r(), o ? e.transition().duration(t).ease(n).on("end", r) : e;
}, Cs = (e) => {
  const t = e.ctrlKey && Mt() ? 10 : 1;
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * t;
};
function ch({ zoomPanValues: e, noWheelClassName: t, d3Selection: n, d3Zoom: r, panOnScrollMode: o, panOnScrollSpeed: i, zoomOnPinch: s, onPanZoomStart: a, onPanZoom: c, onPanZoomEnd: l }) {
  return (d) => {
    if (et(d, t))
      return d.ctrlKey && d.preventDefault(), !1;
    d.preventDefault(), d.stopImmediatePropagation();
    const u = n.property("__zoom").k || 1;
    if (d.ctrlKey && s) {
      const x = be(d), m = Cs(d), v = u * Math.pow(2, m);
      r.scaleTo(n, v, x, d);
      return;
    }
    const f = d.deltaMode === 1 ? 20 : 1;
    let p = o === Xe.Vertical ? 0 : d.deltaX * f, g = o === Xe.Horizontal ? 0 : d.deltaY * f;
    !Mt() && d.shiftKey && o !== Xe.Vertical && (p = d.deltaY * f, g = 0), r.translateBy(
      n,
      -(p / u) * i,
      -(g / u) * i,
      // @ts-ignore
      { internal: !0 }
    );
    const y = Sn(n.property("__zoom"));
    clearTimeout(e.panScrollTimeout), e.isPanScrolling ? (c == null || c(d, y), e.panScrollTimeout = setTimeout(() => {
      l == null || l(d, y), e.isPanScrolling = !1;
    }, 150)) : (e.isPanScrolling = !0, a == null || a(d, y));
  };
}
function lh({ noWheelClassName: e, preventScrolling: t, d3ZoomHandler: n }) {
  return function(r, o) {
    const i = r.type === "wheel", s = !t && i && !r.ctrlKey, a = et(r, e);
    if (r.ctrlKey && i && a && r.preventDefault(), s || a)
      return null;
    r.preventDefault(), n.call(this, r, o);
  };
}
function uh({ zoomPanValues: e, onDraggingChange: t, onPanZoomStart: n }) {
  return (r) => {
    var i, s, a;
    if ((i = r.sourceEvent) != null && i.internal)
      return;
    const o = Sn(r.transform);
    e.mouseButton = ((s = r.sourceEvent) == null ? void 0 : s.button) || 0, e.isZoomingOrPanning = !0, e.prevViewport = o, ((a = r.sourceEvent) == null ? void 0 : a.type) === "mousedown" && t(!0), n && (n == null || n(r.sourceEvent, o));
  };
}
function fh({ zoomPanValues: e, panOnDrag: t, onPaneContextMenu: n, onTransformChange: r, onPanZoom: o }) {
  return (i) => {
    var s, a;
    e.usedRightMouseButton = !!(n && ks(t, e.mouseButton ?? 0)), (s = i.sourceEvent) != null && s.sync || r([i.transform.x, i.transform.y, i.transform.k]), o && !((a = i.sourceEvent) != null && a.internal) && (o == null || o(i.sourceEvent, Sn(i.transform)));
  };
}
function dh({ zoomPanValues: e, panOnDrag: t, panOnScroll: n, onDraggingChange: r, onPanZoomEnd: o, onPaneContextMenu: i }) {
  return (s) => {
    var a;
    if (!((a = s.sourceEvent) != null && a.internal) && (e.isZoomingOrPanning = !1, i && ks(t, e.mouseButton ?? 0) && !e.usedRightMouseButton && s.sourceEvent && i(s.sourceEvent), e.usedRightMouseButton = !1, r(!1), o)) {
      const c = Sn(s.transform);
      e.prevViewport = c, clearTimeout(e.timerId), e.timerId = setTimeout(
        () => {
          o == null || o(s.sourceEvent, c);
        },
        // we need a setTimeout for panOnScroll to supress multiple end events fired during scroll
        n ? 150 : 0
      );
    }
  };
}
function hh({ zoomActivationKeyPressed: e, zoomOnScroll: t, zoomOnPinch: n, panOnDrag: r, panOnScroll: o, zoomOnDoubleClick: i, userSelectionActive: s, noWheelClassName: a, noPanClassName: c, lib: l, connectionInProgress: d }) {
  return (u) => {
    var x;
    const f = e || t, p = n && u.ctrlKey, g = u.type === "wheel";
    if (u.button === 1 && u.type === "mousedown" && (et(u, `${l}-flow__node`) || et(u, `${l}-flow__edge`)))
      return !0;
    if (!r && !f && !o && !i && !n || s || d && !g || et(u, a) && g || et(u, c) && (!g || o && g && !e) || !n && u.ctrlKey && g)
      return !1;
    if (!n && u.type === "touchstart" && ((x = u.touches) == null ? void 0 : x.length) > 1)
      return u.preventDefault(), !1;
    if (!f && !o && !p && g || !r && (u.type === "mousedown" || u.type === "touchstart") || Array.isArray(r) && !r.includes(u.button) && u.type === "mousedown")
      return !1;
    const y = Array.isArray(r) && r.includes(u.button) || !u.button || u.button <= 1;
    return (!u.ctrlKey || g) && y;
  };
}
function ph({ domNode: e, minZoom: t, maxZoom: n, translateExtent: r, viewport: o, onPanZoom: i, onPanZoomStart: s, onPanZoomEnd: a, onDraggingChange: c }) {
  const l = {
    isZoomingOrPanning: !1,
    usedRightMouseButton: !1,
    prevViewport: {},
    mouseButton: 0,
    timerId: void 0,
    panScrollTimeout: void 0,
    isPanScrolling: !1
  }, d = e.getBoundingClientRect(), u = Qi().scaleExtent([t, n]).translateExtent(r), f = xe(e).call(u);
  v({
    x: o.x,
    y: o.y,
    zoom: at(o.zoom, t, n)
  }, [
    [0, 0],
    [d.width, d.height]
  ], r);
  const p = f.on("wheel.zoom"), g = f.on("dblclick.zoom");
  u.wheelDelta(Cs);
  function y(z, I) {
    return f ? new Promise((H) => {
      u == null || u.interpolate((I == null ? void 0 : I.interpolate) === "linear" ? vt : Jt).transform(qn(f, I == null ? void 0 : I.duration, I == null ? void 0 : I.ease, () => H(!0)), z);
    }) : Promise.resolve(!1);
  }
  function x({ noWheelClassName: z, noPanClassName: I, onPaneContextMenu: H, userSelectionActive: b, panOnScroll: O, panOnDrag: _, panOnScrollMode: k, panOnScrollSpeed: E, preventScrolling: S, zoomOnPinch: P, zoomOnScroll: L, zoomOnDoubleClick: D, zoomActivationKeyPressed: j, lib: B, onTransformChange: W, connectionInProgress: Y, paneClickDistance: G, selectionOnDrag: V }) {
    b && !l.isZoomingOrPanning && m();
    const U = O && !j && !b;
    u.clickDistance(V ? 1 / 0 : !Ee(G) || G < 0 ? 0 : G);
    const ee = U ? ch({
      zoomPanValues: l,
      noWheelClassName: z,
      d3Selection: f,
      d3Zoom: u,
      panOnScrollMode: k,
      panOnScrollSpeed: E,
      zoomOnPinch: P,
      onPanZoomStart: s,
      onPanZoom: i,
      onPanZoomEnd: a
    }) : lh({
      noWheelClassName: z,
      preventScrolling: S,
      d3ZoomHandler: p
    });
    if (f.on("wheel.zoom", ee, { passive: !1 }), !b) {
      const Z = uh({
        zoomPanValues: l,
        onDraggingChange: c,
        onPanZoomStart: s
      });
      u.on("start", Z);
      const K = fh({
        zoomPanValues: l,
        panOnDrag: _,
        onPaneContextMenu: !!H,
        onPanZoom: i,
        onTransformChange: W
      });
      u.on("zoom", K);
      const ie = dh({
        zoomPanValues: l,
        panOnDrag: _,
        panOnScroll: O,
        onPaneContextMenu: H,
        onPanZoomEnd: a,
        onDraggingChange: c
      });
      u.on("end", ie);
    }
    const Q = hh({
      zoomActivationKeyPressed: j,
      panOnDrag: _,
      zoomOnScroll: L,
      panOnScroll: O,
      zoomOnDoubleClick: D,
      zoomOnPinch: P,
      userSelectionActive: b,
      noPanClassName: I,
      noWheelClassName: z,
      lib: B,
      connectionInProgress: Y
    });
    u.filter(Q), D ? f.on("dblclick.zoom", g) : f.on("dblclick.zoom", null);
  }
  function m() {
    u.on("zoom", null);
  }
  async function v(z, I, H) {
    const b = Yn(z), O = u == null ? void 0 : u.constrain()(b, I, H);
    return O && await y(O), new Promise((_) => _(O));
  }
  async function h(z, I) {
    const H = Yn(z);
    return await y(H, I), new Promise((b) => b(H));
  }
  function w(z) {
    if (f) {
      const I = Yn(z), H = f.property("__zoom");
      (H.k !== z.zoom || H.x !== z.x || H.y !== z.y) && (u == null || u.transform(f, I, null, { sync: !0 }));
    }
  }
  function $() {
    const z = f ? Zi(f.node()) : { x: 0, y: 0, k: 1 };
    return { x: z.x, y: z.y, zoom: z.k };
  }
  function C(z, I) {
    return f ? new Promise((H) => {
      u == null || u.interpolate((I == null ? void 0 : I.interpolate) === "linear" ? vt : Jt).scaleTo(qn(f, I == null ? void 0 : I.duration, I == null ? void 0 : I.ease, () => H(!0)), z);
    }) : Promise.resolve(!1);
  }
  function M(z, I) {
    return f ? new Promise((H) => {
      u == null || u.interpolate((I == null ? void 0 : I.interpolate) === "linear" ? vt : Jt).scaleBy(qn(f, I == null ? void 0 : I.duration, I == null ? void 0 : I.ease, () => H(!0)), z);
    }) : Promise.resolve(!1);
  }
  function T(z) {
    u == null || u.scaleExtent(z);
  }
  function A(z) {
    u == null || u.translateExtent(z);
  }
  function R(z) {
    const I = !Ee(z) || z < 0 ? 0 : z;
    u == null || u.clickDistance(I);
  }
  return {
    update: x,
    destroy: m,
    setViewport: h,
    setViewportConstrained: v,
    getViewport: $,
    scaleTo: C,
    scaleBy: M,
    setScaleExtent: T,
    setTranslateExtent: A,
    syncViewport: w,
    setClickDistance: R
  };
}
var ut;
(function(e) {
  e.Line = "line", e.Handle = "handle";
})(ut || (ut = {}));
function gh({ width: e, prevWidth: t, height: n, prevHeight: r, affectsX: o, affectsY: i }) {
  const s = e - t, a = n - r, c = [s > 0 ? 1 : s < 0 ? -1 : 0, a > 0 ? 1 : a < 0 ? -1 : 0];
  return s && o && (c[0] = c[0] * -1), a && i && (c[1] = c[1] * -1), c;
}
function Wo(e) {
  const t = e.includes("right") || e.includes("left"), n = e.includes("bottom") || e.includes("top"), r = e.includes("left"), o = e.includes("top");
  return {
    isHorizontal: t,
    isVertical: n,
    affectsX: r,
    affectsY: o
  };
}
function Le(e, t) {
  return Math.max(0, t - e);
}
function De(e, t) {
  return Math.max(0, e - t);
}
function Ut(e, t, n) {
  return Math.max(0, t - e, e - n);
}
function Fo(e, t) {
  return e ? !t : t;
}
function mh(e, t, n, r, o, i, s, a) {
  let { affectsX: c, affectsY: l } = t;
  const { isHorizontal: d, isVertical: u } = t, f = d && u, { xSnapped: p, ySnapped: g } = n, { minWidth: y, maxWidth: x, minHeight: m, maxHeight: v } = r, { x: h, y: w, width: $, height: C, aspectRatio: M } = e;
  let T = Math.floor(d ? p - e.pointerX : 0), A = Math.floor(u ? g - e.pointerY : 0);
  const R = $ + (c ? -T : T), z = C + (l ? -A : A), I = -i[0] * $, H = -i[1] * C;
  let b = Ut(R, y, x), O = Ut(z, m, v);
  if (s) {
    let E = 0, S = 0;
    c && T < 0 ? E = Le(h + T + I, s[0][0]) : !c && T > 0 && (E = De(h + R + I, s[1][0])), l && A < 0 ? S = Le(w + A + H, s[0][1]) : !l && A > 0 && (S = De(w + z + H, s[1][1])), b = Math.max(b, E), O = Math.max(O, S);
  }
  if (a) {
    let E = 0, S = 0;
    c && T > 0 ? E = De(h + T, a[0][0]) : !c && T < 0 && (E = Le(h + R, a[1][0])), l && A > 0 ? S = De(w + A, a[0][1]) : !l && A < 0 && (S = Le(w + z, a[1][1])), b = Math.max(b, E), O = Math.max(O, S);
  }
  if (o) {
    if (d) {
      const E = Ut(R / M, m, v) * M;
      if (b = Math.max(b, E), s) {
        let S = 0;
        !c && !l || c && !l && f ? S = De(w + H + R / M, s[1][1]) * M : S = Le(w + H + (c ? T : -T) / M, s[0][1]) * M, b = Math.max(b, S);
      }
      if (a) {
        let S = 0;
        !c && !l || c && !l && f ? S = Le(w + R / M, a[1][1]) * M : S = De(w + (c ? T : -T) / M, a[0][1]) * M, b = Math.max(b, S);
      }
    }
    if (u) {
      const E = Ut(z * M, y, x) / M;
      if (O = Math.max(O, E), s) {
        let S = 0;
        !c && !l || l && !c && f ? S = De(h + z * M + I, s[1][0]) / M : S = Le(h + (l ? A : -A) * M + I, s[0][0]) / M, O = Math.max(O, S);
      }
      if (a) {
        let S = 0;
        !c && !l || l && !c && f ? S = Le(h + z * M, a[1][0]) / M : S = De(h + (l ? A : -A) * M, a[0][0]) / M, O = Math.max(O, S);
      }
    }
  }
  A = A + (A < 0 ? O : -O), T = T + (T < 0 ? b : -b), o && (f ? R > z * M ? A = (Fo(c, l) ? -T : T) / M : T = (Fo(c, l) ? -A : A) * M : d ? (A = T / M, l = c) : (T = A * M, c = l));
  const _ = c ? h + T : h, k = l ? w + A : w;
  return {
    width: $ + (c ? -T : T),
    height: C + (l ? -A : A),
    x: i[0] * T * (c ? -1 : 1) + _,
    y: i[1] * A * (l ? -1 : 1) + k
  };
}
const $s = { width: 0, height: 0, x: 0, y: 0 }, yh = {
  ...$s,
  pointerX: 0,
  pointerY: 0,
  aspectRatio: 1
};
function xh(e) {
  return [
    [0, 0],
    [e.measured.width, e.measured.height]
  ];
}
function wh(e, t, n) {
  const r = t.position.x + e.position.x, o = t.position.y + e.position.y, i = e.measured.width ?? 0, s = e.measured.height ?? 0, a = n[0] * i, c = n[1] * s;
  return [
    [r - a, o - c],
    [r + i - a, o + s - c]
  ];
}
function vh({ domNode: e, nodeId: t, getStoreItems: n, onChange: r, onEnd: o }) {
  const i = xe(e);
  let s = {
    controlDirection: Wo("bottom-right"),
    boundaries: {
      minWidth: 0,
      minHeight: 0,
      maxWidth: Number.MAX_VALUE,
      maxHeight: Number.MAX_VALUE
    },
    resizeDirection: void 0,
    keepAspectRatio: !1
  };
  function a({ controlPosition: l, boundaries: d, keepAspectRatio: u, resizeDirection: f, onResizeStart: p, onResize: g, onResizeEnd: y, shouldResize: x }) {
    let m = { ...$s }, v = { ...yh };
    s = {
      boundaries: d,
      resizeDirection: f,
      keepAspectRatio: u,
      controlDirection: Wo(l)
    };
    let h, w = null, $ = [], C, M, T, A = !1;
    const R = Di().on("start", (z) => {
      const { nodeLookup: I, transform: H, snapGrid: b, snapToGrid: O, nodeOrigin: _, paneDomNode: k } = n();
      if (h = I.get(t), !h)
        return;
      w = (k == null ? void 0 : k.getBoundingClientRect()) ?? null;
      const { xSnapped: E, ySnapped: S } = bt(z.sourceEvent, {
        transform: H,
        snapGrid: b,
        snapToGrid: O,
        containerBounds: w
      });
      m = {
        width: h.measured.width ?? 0,
        height: h.measured.height ?? 0,
        x: h.position.x ?? 0,
        y: h.position.y ?? 0
      }, v = {
        ...m,
        pointerX: E,
        pointerY: S,
        aspectRatio: m.width / m.height
      }, C = void 0, h.parentId && (h.extent === "parent" || h.expandParent) && (C = I.get(h.parentId), M = C && h.extent === "parent" ? xh(C) : void 0), $ = [], T = void 0;
      for (const [P, L] of I)
        if (L.parentId === t && ($.push({
          id: P,
          position: { ...L.position },
          extent: L.extent
        }), L.extent === "parent" || L.expandParent)) {
          const D = wh(L, h, L.origin ?? _);
          T ? T = [
            [Math.min(D[0][0], T[0][0]), Math.min(D[0][1], T[0][1])],
            [Math.max(D[1][0], T[1][0]), Math.max(D[1][1], T[1][1])]
          ] : T = D;
        }
      p == null || p(z, { ...m });
    }).on("drag", (z) => {
      const { transform: I, snapGrid: H, snapToGrid: b, nodeOrigin: O } = n(), _ = bt(z.sourceEvent, {
        transform: I,
        snapGrid: H,
        snapToGrid: b,
        containerBounds: w
      }), k = [];
      if (!h)
        return;
      const { x: E, y: S, width: P, height: L } = m, D = {}, j = h.origin ?? O, { width: B, height: W, x: Y, y: G } = mh(v, s.controlDirection, _, s.boundaries, s.keepAspectRatio, j, M, T), V = B !== P, U = W !== L, ee = Y !== E && V, Q = G !== S && U;
      if (!ee && !Q && !V && !U)
        return;
      if ((ee || Q || j[0] === 1 || j[1] === 1) && (D.x = ee ? Y : m.x, D.y = Q ? G : m.y, m.x = D.x, m.y = D.y, $.length > 0)) {
        const se = Y - E, ne = G - S;
        for (const ge of $)
          ge.position = {
            x: ge.position.x - se + j[0] * (B - P),
            y: ge.position.y - ne + j[1] * (W - L)
          }, k.push(ge);
      }
      if ((V || U) && (D.width = V && (!s.resizeDirection || s.resizeDirection === "horizontal") ? B : m.width, D.height = U && (!s.resizeDirection || s.resizeDirection === "vertical") ? W : m.height, m.width = D.width, m.height = D.height), C && h.expandParent) {
        const se = j[0] * (D.width ?? 0);
        D.x && D.x < se && (m.x = se, v.x = v.x - (D.x - se));
        const ne = j[1] * (D.height ?? 0);
        D.y && D.y < ne && (m.y = ne, v.y = v.y - (D.y - ne));
      }
      const Z = gh({
        width: m.width,
        prevWidth: P,
        height: m.height,
        prevHeight: L,
        affectsX: s.controlDirection.affectsX,
        affectsY: s.controlDirection.affectsY
      }), K = { ...m, direction: Z };
      (x == null ? void 0 : x(z, K)) !== !1 && (A = !0, g == null || g(z, K), r(D, k));
    }).on("end", (z) => {
      A && (y == null || y(z, { ...m }), o == null || o({ ...m }), A = !1);
    });
    i.call(R);
  }
  function c() {
    i.on(".drag", null);
  }
  return {
    update: a,
    destroy: c
  };
}
function Ms(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function bh(e) {
  if (Object.prototype.hasOwnProperty.call(e, "__esModule")) return e;
  var t = e.default;
  if (typeof t == "function") {
    var n = function r() {
      return this instanceof r ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else n = {};
  return Object.defineProperty(n, "__esModule", { value: !0 }), Object.keys(e).forEach(function(r) {
    var o = Object.getOwnPropertyDescriptor(e, r);
    Object.defineProperty(n, r, o.get ? o : {
      enumerable: !0,
      get: function() {
        return e[r];
      }
    });
  }), n;
}
var Gn = { exports: {} }, Un = {};
const Ps = /* @__PURE__ */ bh(Vc);
var Kn = { exports: {} }, Zn = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xo;
function _h() {
  if (Xo) return Zn;
  Xo = 1;
  var e = Ps;
  function t(u, f) {
    return u === f && (u !== 0 || 1 / u === 1 / f) || u !== u && f !== f;
  }
  var n = typeof Object.is == "function" ? Object.is : t, r = e.useState, o = e.useEffect, i = e.useLayoutEffect, s = e.useDebugValue;
  function a(u, f) {
    var p = f(), g = r({ inst: { value: p, getSnapshot: f } }), y = g[0].inst, x = g[1];
    return i(
      function() {
        y.value = p, y.getSnapshot = f, c(y) && x({ inst: y });
      },
      [u, p, f]
    ), o(
      function() {
        return c(y) && x({ inst: y }), u(function() {
          c(y) && x({ inst: y });
        });
      },
      [u]
    ), s(p), p;
  }
  function c(u) {
    var f = u.getSnapshot;
    u = u.value;
    try {
      var p = f();
      return !n(u, p);
    } catch {
      return !0;
    }
  }
  function l(u, f) {
    return f();
  }
  var d = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? l : a;
  return Zn.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : d, Zn;
}
var Yo;
function Eh() {
  return Yo || (Yo = 1, Kn.exports = _h()), Kn.exports;
}
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qo;
function Nh() {
  if (qo) return Un;
  qo = 1;
  var e = Ps, t = Eh();
  function n(l, d) {
    return l === d && (l !== 0 || 1 / l === 1 / d) || l !== l && d !== d;
  }
  var r = typeof Object.is == "function" ? Object.is : n, o = t.useSyncExternalStore, i = e.useRef, s = e.useEffect, a = e.useMemo, c = e.useDebugValue;
  return Un.useSyncExternalStoreWithSelector = function(l, d, u, f, p) {
    var g = i(null);
    if (g.current === null) {
      var y = { hasValue: !1, value: null };
      g.current = y;
    } else y = g.current;
    g = a(
      function() {
        function m(C) {
          if (!v) {
            if (v = !0, h = C, C = f(C), p !== void 0 && y.hasValue) {
              var M = y.value;
              if (p(M, C))
                return w = M;
            }
            return w = C;
          }
          if (M = w, r(h, C)) return M;
          var T = f(C);
          return p !== void 0 && p(M, T) ? (h = C, M) : (h = C, w = T);
        }
        var v = !1, h, w, $ = u === void 0 ? null : u;
        return [
          function() {
            return m(d());
          },
          $ === null ? void 0 : function() {
            return m($());
          }
        ];
      },
      [d, u, f, p]
    );
    var x = o(l, g[0], g[1]);
    return s(
      function() {
        y.hasValue = !0, y.value = x;
      },
      [x]
    ), c(x), x;
  }, Un;
}
var Go;
function Sh() {
  return Go || (Go = 1, Gn.exports = Nh()), Gn.exports;
}
var kh = Sh();
const Ch = /* @__PURE__ */ Ms(kh), $h = {}, Uo = (e) => {
  let t;
  const n = /* @__PURE__ */ new Set(), r = (d, u) => {
    const f = typeof d == "function" ? d(t) : d;
    if (!Object.is(f, t)) {
      const p = t;
      t = u ?? (typeof f != "object" || f === null) ? f : Object.assign({}, t, f), n.forEach((g) => g(t, p));
    }
  }, o = () => t, c = { setState: r, getState: o, getInitialState: () => l, subscribe: (d) => (n.add(d), () => n.delete(d)), destroy: () => {
    ($h ? "production" : void 0) !== "production" && console.warn(
      "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."
    ), n.clear();
  } }, l = t = e(r, o, c);
  return c;
}, Mh = (e) => e ? Uo(e) : Uo, { useDebugValue: Ph } = F, { useSyncExternalStoreWithSelector: zh } = Ch, Oh = (e) => e;
function zs(e, t = Oh, n) {
  const r = zh(
    e.subscribe,
    e.getState,
    e.getServerState || e.getInitialState,
    t,
    n
  );
  return Ph(r), r;
}
const Ko = (e, t) => {
  const n = Mh(e), r = (o, i = t) => zs(n, o, i);
  return Object.assign(r, n), r;
}, Ih = (e, t) => e ? Ko(e, t) : Ko;
function ae(e, t) {
  if (Object.is(e, t))
    return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  if (e instanceof Map && t instanceof Map) {
    if (e.size !== t.size) return !1;
    for (const [r, o] of e)
      if (!Object.is(o, t.get(r)))
        return !1;
    return !0;
  }
  if (e instanceof Set && t instanceof Set) {
    if (e.size !== t.size) return !1;
    for (const r of e)
      if (!t.has(r))
        return !1;
    return !0;
  }
  const n = Object.keys(e);
  if (n.length !== Object.keys(t).length)
    return !1;
  for (const r of n)
    if (!Object.prototype.hasOwnProperty.call(t, r) || !Object.is(e[r], t[r]))
      return !1;
  return !0;
}
const Th = globalThis.__obieg.ReactDOM, { createRoot: V0, flushSync: W0, createPortal: F0 } = Th, kn = Ot(null), Ah = kn.Provider, Os = $e.error001();
function te(e, t) {
  const n = Ze(kn);
  if (n === null)
    throw new Error(Os);
  return zs(n, e, t);
}
function ce() {
  const e = Ze(kn);
  if (e === null)
    throw new Error(Os);
  return ve(() => ({
    getState: e.getState,
    setState: e.setState,
    subscribe: e.subscribe
  }), [e]);
}
const Zo = { display: "none" }, Lh = {
  position: "absolute",
  width: 1,
  height: 1,
  margin: -1,
  border: 0,
  padding: 0,
  overflow: "hidden",
  clip: "rect(0px, 0px, 0px, 0px)",
  clipPath: "inset(100%)"
}, Is = "react-flow__node-desc", Ts = "react-flow__edge-desc", Dh = "react-flow__aria-live", Hh = (e) => e.ariaLiveMessage, Rh = (e) => e.ariaLabelConfig;
function jh({ rfId: e }) {
  const t = te(Hh);
  return N("div", { id: `${Dh}-${e}`, "aria-live": "assertive", "aria-atomic": "true", style: Lh, children: t });
}
function Bh({ rfId: e, disableKeyboardA11y: t }) {
  const n = te(Rh);
  return J(he, { children: [N("div", { id: `${Is}-${e}`, style: Zo, children: t ? n["node.a11yDescription.default"] : n["node.a11yDescription.keyboardDisabled"] }), N("div", { id: `${Ts}-${e}`, style: Zo, children: n["edge.a11yDescription.default"] }), !t && N(jh, { rfId: e })] });
}
const Cn = de(({ position: e = "top-left", children: t, className: n, style: r, ...o }, i) => {
  const s = `${e}`.split("-");
  return N("div", { className: fe(["react-flow__panel", n, ...s]), style: r, ref: i, ...o, children: t });
});
Cn.displayName = "Panel";
function Vh({ proOptions: e, position: t = "bottom-right" }) {
  return e != null && e.hideAttribution ? null : N(Cn, { position: t, className: "react-flow__attribution", "data-message": "Please only hide this attribution when you are subscribed to React Flow Pro: https://pro.reactflow.dev", children: N("a", { href: "https://reactflow.dev", target: "_blank", rel: "noopener noreferrer", "aria-label": "React Flow attribution", children: "React Flow" }) });
}
const Wh = (e) => {
  const t = [], n = [];
  for (const [, r] of e.nodeLookup)
    r.selected && t.push(r.internals.userNode);
  for (const [, r] of e.edgeLookup)
    r.selected && n.push(r);
  return { selectedNodes: t, selectedEdges: n };
}, Kt = (e) => e.id;
function Fh(e, t) {
  return ae(e.selectedNodes.map(Kt), t.selectedNodes.map(Kt)) && ae(e.selectedEdges.map(Kt), t.selectedEdges.map(Kt));
}
function Xh({ onSelectionChange: e }) {
  const t = ce(), { selectedNodes: n, selectedEdges: r } = te(Wh, Fh);
  return oe(() => {
    const o = { nodes: n, edges: r };
    e == null || e(o), t.getState().onSelectionChangeHandlers.forEach((i) => i(o));
  }, [n, r, e]), null;
}
const Yh = (e) => !!e.onSelectionChangeHandlers;
function qh({ onSelectionChange: e }) {
  const t = te(Yh);
  return e || t ? N(Xh, { onSelectionChange: e }) : null;
}
const As = [0, 0], Gh = { x: 0, y: 0, zoom: 1 }, Uh = [
  "nodes",
  "edges",
  "defaultNodes",
  "defaultEdges",
  "onConnect",
  "onConnectStart",
  "onConnectEnd",
  "onClickConnectStart",
  "onClickConnectEnd",
  "nodesDraggable",
  "autoPanOnNodeFocus",
  "nodesConnectable",
  "nodesFocusable",
  "edgesFocusable",
  "edgesReconnectable",
  "elevateNodesOnSelect",
  "elevateEdgesOnSelect",
  "minZoom",
  "maxZoom",
  "nodeExtent",
  "onNodesChange",
  "onEdgesChange",
  "elementsSelectable",
  "connectionMode",
  "snapGrid",
  "snapToGrid",
  "translateExtent",
  "connectOnClick",
  "defaultEdgeOptions",
  "fitView",
  "fitViewOptions",
  "onNodesDelete",
  "onEdgesDelete",
  "onDelete",
  "onNodeDrag",
  "onNodeDragStart",
  "onNodeDragStop",
  "onSelectionDrag",
  "onSelectionDragStart",
  "onSelectionDragStop",
  "onMoveStart",
  "onMove",
  "onMoveEnd",
  "noPanClassName",
  "nodeOrigin",
  "autoPanOnConnect",
  "autoPanOnNodeDrag",
  "onError",
  "connectionRadius",
  "isValidConnection",
  "selectNodesOnDrag",
  "nodeDragThreshold",
  "connectionDragThreshold",
  "onBeforeDelete",
  "debug",
  "autoPanSpeed",
  "ariaLabelConfig",
  "zIndexMode"
], Qo = [...Uh, "rfId"], Kh = (e) => ({
  setNodes: e.setNodes,
  setEdges: e.setEdges,
  setMinZoom: e.setMinZoom,
  setMaxZoom: e.setMaxZoom,
  setTranslateExtent: e.setTranslateExtent,
  setNodeExtent: e.setNodeExtent,
  reset: e.reset,
  setDefaultNodesAndEdges: e.setDefaultNodesAndEdges
}), Jo = {
  /*
   * these are values that are also passed directly to other components
   * than the StoreUpdater. We can reduce the number of setStore calls
   * by setting the same values here as prev fields.
   */
  translateExtent: kt,
  nodeOrigin: As,
  minZoom: 0.5,
  maxZoom: 2,
  elementsSelectable: !0,
  noPanClassName: "nopan",
  rfId: "1"
};
function Zh(e) {
  const { setNodes: t, setEdges: n, setMinZoom: r, setMaxZoom: o, setTranslateExtent: i, setNodeExtent: s, reset: a, setDefaultNodesAndEdges: c } = te(Kh, ae), l = ce();
  oe(() => (c(e.defaultNodes, e.defaultEdges), () => {
    d.current = Jo, a();
  }), []);
  const d = re(Jo);
  return oe(
    () => {
      for (const u of Qo) {
        const f = e[u], p = d.current[u];
        f !== p && (typeof e[u] > "u" || (u === "nodes" ? t(f) : u === "edges" ? n(f) : u === "minZoom" ? r(f) : u === "maxZoom" ? o(f) : u === "translateExtent" ? i(f) : u === "nodeExtent" ? s(f) : u === "ariaLabelConfig" ? l.setState({ ariaLabelConfig: Id(f) }) : u === "fitView" ? l.setState({ fitViewQueued: f }) : u === "fitViewOptions" ? l.setState({ fitViewOptions: f }) : l.setState({ [u]: f })));
      }
      d.current = e;
    },
    // Only re-run the effect if one of the fields we track changes
    Qo.map((u) => e[u])
  ), null;
}
function ei() {
  return typeof window > "u" || !window.matchMedia ? null : window.matchMedia("(prefers-color-scheme: dark)");
}
function Qh(e) {
  var r;
  const [t, n] = ue(e === "system" ? null : e);
  return oe(() => {
    if (e !== "system") {
      n(e);
      return;
    }
    const o = ei(), i = () => n(o != null && o.matches ? "dark" : "light");
    return i(), o == null || o.addEventListener("change", i), () => {
      o == null || o.removeEventListener("change", i);
    };
  }, [e]), t !== null ? t : (r = ei()) != null && r.matches ? "dark" : "light";
}
const ti = typeof document < "u" ? document : null;
function Pt(e = null, t = { target: ti, actInsideInputWithModifier: !0 }) {
  const [n, r] = ue(!1), o = re(!1), i = re(/* @__PURE__ */ new Set([])), [s, a] = ve(() => {
    if (e !== null) {
      const l = (Array.isArray(e) ? e : [e]).filter((u) => typeof u == "string").map((u) => u.replace("+", `
`).replace(`

`, `
+`).split(`
`)), d = l.reduce((u, f) => u.concat(...f), []);
      return [l, d];
    }
    return [[], []];
  }, [e]);
  return oe(() => {
    const c = (t == null ? void 0 : t.target) ?? ti, l = (t == null ? void 0 : t.actInsideInputWithModifier) ?? !0;
    if (e !== null) {
      const d = (p) => {
        var x, m;
        if (o.current = p.ctrlKey || p.metaKey || p.shiftKey || p.altKey, (!o.current || o.current && !l) && fs(p))
          return !1;
        const y = ri(p.code, a);
        if (i.current.add(p[y]), ni(s, i.current, !1)) {
          const v = ((m = (x = p.composedPath) == null ? void 0 : x.call(p)) == null ? void 0 : m[0]) || p.target, h = (v == null ? void 0 : v.nodeName) === "BUTTON" || (v == null ? void 0 : v.nodeName) === "A";
          t.preventDefault !== !1 && (o.current || !h) && p.preventDefault(), r(!0);
        }
      }, u = (p) => {
        const g = ri(p.code, a);
        ni(s, i.current, !0) ? (r(!1), i.current.clear()) : i.current.delete(p[g]), p.key === "Meta" && i.current.clear(), o.current = !1;
      }, f = () => {
        i.current.clear(), r(!1);
      };
      return c == null || c.addEventListener("keydown", d), c == null || c.addEventListener("keyup", u), window.addEventListener("blur", f), window.addEventListener("contextmenu", f), () => {
        c == null || c.removeEventListener("keydown", d), c == null || c.removeEventListener("keyup", u), window.removeEventListener("blur", f), window.removeEventListener("contextmenu", f);
      };
    }
  }, [e, r]), n;
}
function ni(e, t, n) {
  return e.filter((r) => n || r.length === t.size).some((r) => r.every((o) => t.has(o)));
}
function ri(e, t) {
  return t.includes(e) ? "code" : "key";
}
const Jh = () => {
  const e = ce();
  return ve(() => ({
    zoomIn: (t) => {
      const { panZoom: n } = e.getState();
      return n ? n.scaleBy(1.2, { duration: t == null ? void 0 : t.duration }) : Promise.resolve(!1);
    },
    zoomOut: (t) => {
      const { panZoom: n } = e.getState();
      return n ? n.scaleBy(1 / 1.2, { duration: t == null ? void 0 : t.duration }) : Promise.resolve(!1);
    },
    zoomTo: (t, n) => {
      const { panZoom: r } = e.getState();
      return r ? r.scaleTo(t, { duration: n == null ? void 0 : n.duration }) : Promise.resolve(!1);
    },
    getZoom: () => e.getState().transform[2],
    setViewport: async (t, n) => {
      const { transform: [r, o, i], panZoom: s } = e.getState();
      return s ? (await s.setViewport({
        x: t.x ?? r,
        y: t.y ?? o,
        zoom: t.zoom ?? i
      }, n), Promise.resolve(!0)) : Promise.resolve(!1);
    },
    getViewport: () => {
      const [t, n, r] = e.getState().transform;
      return { x: t, y: n, zoom: r };
    },
    setCenter: async (t, n, r) => e.getState().setCenter(t, n, r),
    fitBounds: async (t, n) => {
      const { width: r, height: o, minZoom: i, maxZoom: s, panZoom: a } = e.getState(), c = Vr(t, r, o, i, s, (n == null ? void 0 : n.padding) ?? 0.1);
      return a ? (await a.setViewport(c, {
        duration: n == null ? void 0 : n.duration,
        ease: n == null ? void 0 : n.ease,
        interpolate: n == null ? void 0 : n.interpolate
      }), Promise.resolve(!0)) : Promise.resolve(!1);
    },
    screenToFlowPosition: (t, n = {}) => {
      const { transform: r, snapGrid: o, snapToGrid: i, domNode: s } = e.getState();
      if (!s)
        return t;
      const { x: a, y: c } = s.getBoundingClientRect(), l = {
        x: t.x - a,
        y: t.y - c
      }, d = n.snapGrid ?? o, u = n.snapToGrid ?? i;
      return Ht(l, r, u, d);
    },
    flowToScreenPosition: (t) => {
      const { transform: n, domNode: r } = e.getState();
      if (!r)
        return t;
      const { x: o, y: i } = r.getBoundingClientRect(), s = hn(t, n);
      return {
        x: s.x + o,
        y: s.y + i
      };
    }
  }), []);
};
function Ls(e, t) {
  const n = [], r = /* @__PURE__ */ new Map(), o = [];
  for (const i of e)
    if (i.type === "add") {
      o.push(i);
      continue;
    } else if (i.type === "remove" || i.type === "replace")
      r.set(i.id, [i]);
    else {
      const s = r.get(i.id);
      s ? s.push(i) : r.set(i.id, [i]);
    }
  for (const i of t) {
    const s = r.get(i.id);
    if (!s) {
      n.push(i);
      continue;
    }
    if (s[0].type === "remove")
      continue;
    if (s[0].type === "replace") {
      n.push({ ...s[0].item });
      continue;
    }
    const a = { ...i };
    for (const c of s)
      ep(c, a);
    n.push(a);
  }
  return o.length && o.forEach((i) => {
    i.index !== void 0 ? n.splice(i.index, 0, { ...i.item }) : n.push({ ...i.item });
  }), n;
}
function ep(e, t) {
  switch (e.type) {
    case "select": {
      t.selected = e.selected;
      break;
    }
    case "position": {
      typeof e.position < "u" && (t.position = e.position), typeof e.dragging < "u" && (t.dragging = e.dragging);
      break;
    }
    case "dimensions": {
      typeof e.dimensions < "u" && (t.measured = {
        ...e.dimensions
      }, e.setAttributes && ((e.setAttributes === !0 || e.setAttributes === "width") && (t.width = e.dimensions.width), (e.setAttributes === !0 || e.setAttributes === "height") && (t.height = e.dimensions.height))), typeof e.resizing == "boolean" && (t.resizing = e.resizing);
      break;
    }
  }
}
function Ds(e, t) {
  return Ls(e, t);
}
function Hs(e, t) {
  return Ls(e, t);
}
function Ve(e, t) {
  return {
    id: e,
    type: "select",
    selected: t
  };
}
function tt(e, t = /* @__PURE__ */ new Set(), n = !1) {
  const r = [];
  for (const [o, i] of e) {
    const s = t.has(o);
    !(i.selected === void 0 && !s) && i.selected !== s && (n && (i.selected = s), r.push(Ve(i.id, s)));
  }
  return r;
}
function oi({ items: e = [], lookup: t }) {
  var o;
  const n = [], r = new Map(e.map((i) => [i.id, i]));
  for (const [i, s] of e.entries()) {
    const a = t.get(s.id), c = ((o = a == null ? void 0 : a.internals) == null ? void 0 : o.userNode) ?? a;
    c !== void 0 && c !== s && n.push({ id: s.id, item: s, type: "replace" }), c === void 0 && n.push({ item: s, type: "add", index: i });
  }
  for (const [i] of t)
    r.get(i) === void 0 && n.push({ id: i, type: "remove" });
  return n;
}
function ii(e) {
  return {
    id: e.id,
    type: "remove"
  };
}
const si = (e) => Ed(e), tp = (e) => rs(e);
function Rs(e) {
  return de(e);
}
const np = typeof window < "u" ? _i : oe;
function ai(e) {
  const [t, n] = ue(BigInt(0)), [r] = ue(() => rp(() => n((o) => o + BigInt(1))));
  return np(() => {
    const o = r.get();
    o.length && (e(o), r.reset());
  }, [t]), r;
}
function rp(e) {
  let t = [];
  return {
    get: () => t,
    reset: () => {
      t = [];
    },
    push: (n) => {
      t.push(n), e();
    }
  };
}
const js = Ot(null);
function op({ children: e }) {
  const t = ce(), n = me((a) => {
    const { nodes: c = [], setNodes: l, hasDefaultNodes: d, onNodesChange: u, nodeLookup: f, fitViewQueued: p, onNodesChangeMiddlewareMap: g } = t.getState();
    let y = c;
    for (const m of a)
      y = typeof m == "function" ? m(y) : m;
    let x = oi({
      items: y,
      lookup: f
    });
    for (const m of g.values())
      x = m(x);
    d && l(y), x.length > 0 ? u == null || u(x) : p && window.requestAnimationFrame(() => {
      const { fitViewQueued: m, nodes: v, setNodes: h } = t.getState();
      m && h(v);
    });
  }, []), r = ai(n), o = me((a) => {
    const { edges: c = [], setEdges: l, hasDefaultEdges: d, onEdgesChange: u, edgeLookup: f } = t.getState();
    let p = c;
    for (const g of a)
      p = typeof g == "function" ? g(p) : g;
    d ? l(p) : u && u(oi({
      items: p,
      lookup: f
    }));
  }, []), i = ai(o), s = ve(() => ({ nodeQueue: r, edgeQueue: i }), []);
  return N(js.Provider, { value: s, children: e });
}
function ip() {
  const e = Ze(js);
  if (!e)
    throw new Error("useBatchContext must be used within a BatchProvider");
  return e;
}
const sp = (e) => !!e.panZoom;
function $n() {
  const e = Jh(), t = ce(), n = ip(), r = te(sp), o = ve(() => {
    const i = (u) => t.getState().nodeLookup.get(u), s = (u) => {
      n.nodeQueue.push(u);
    }, a = (u) => {
      n.edgeQueue.push(u);
    }, c = (u) => {
      var m, v;
      const { nodeLookup: f, nodeOrigin: p } = t.getState(), g = si(u) ? u : f.get(u.id), y = g.parentId ? ls(g.position, g.measured, g.parentId, f, p) : g.position, x = {
        ...g,
        position: y,
        width: ((m = g.measured) == null ? void 0 : m.width) ?? g.width,
        height: ((v = g.measured) == null ? void 0 : v.height) ?? g.height
      };
      return ct(x);
    }, l = (u, f, p = { replace: !1 }) => {
      s((g) => g.map((y) => {
        if (y.id === u) {
          const x = typeof f == "function" ? f(y) : f;
          return p.replace && si(x) ? x : { ...y, ...x };
        }
        return y;
      }));
    }, d = (u, f, p = { replace: !1 }) => {
      a((g) => g.map((y) => {
        if (y.id === u) {
          const x = typeof f == "function" ? f(y) : f;
          return p.replace && tp(x) ? x : { ...y, ...x };
        }
        return y;
      }));
    };
    return {
      getNodes: () => t.getState().nodes.map((u) => ({ ...u })),
      getNode: (u) => {
        var f;
        return (f = i(u)) == null ? void 0 : f.internals.userNode;
      },
      getInternalNode: i,
      getEdges: () => {
        const { edges: u = [] } = t.getState();
        return u.map((f) => ({ ...f }));
      },
      getEdge: (u) => t.getState().edgeLookup.get(u),
      setNodes: s,
      setEdges: a,
      addNodes: (u) => {
        const f = Array.isArray(u) ? u : [u];
        n.nodeQueue.push((p) => [...p, ...f]);
      },
      addEdges: (u) => {
        const f = Array.isArray(u) ? u : [u];
        n.edgeQueue.push((p) => [...p, ...f]);
      },
      toObject: () => {
        const { nodes: u = [], edges: f = [], transform: p } = t.getState(), [g, y, x] = p;
        return {
          nodes: u.map((m) => ({ ...m })),
          edges: f.map((m) => ({ ...m })),
          viewport: {
            x: g,
            y,
            zoom: x
          }
        };
      },
      deleteElements: async ({ nodes: u = [], edges: f = [] }) => {
        const { nodes: p, edges: g, onNodesDelete: y, onEdgesDelete: x, triggerNodeChanges: m, triggerEdgeChanges: v, onDelete: h, onBeforeDelete: w } = t.getState(), { nodes: $, edges: C } = await $d({
          nodesToRemove: u,
          edgesToRemove: f,
          nodes: p,
          edges: g,
          onBeforeDelete: w
        }), M = C.length > 0, T = $.length > 0;
        if (M) {
          const A = C.map(ii);
          x == null || x(C), v(A);
        }
        if (T) {
          const A = $.map(ii);
          y == null || y($), m(A);
        }
        return (T || M) && (h == null || h({ nodes: $, edges: C })), { deletedNodes: $, deletedEdges: C };
      },
      /**
       * Partial is defined as "the 2 nodes/areas are intersecting partially".
       * If a is contained in b or b is contained in a, they are both
       * considered fully intersecting.
       */
      getIntersectingNodes: (u, f = !0, p) => {
        const g = Oo(u), y = g ? u : c(u), x = p !== void 0;
        return y ? (p || t.getState().nodes).filter((m) => {
          const v = t.getState().nodeLookup.get(m.id);
          if (v && !g && (m.id === u.id || !v.internals.positionAbsolute))
            return !1;
          const h = ct(x ? m : v), w = $t(h, y);
          return f && w > 0 || w >= h.width * h.height || w >= y.width * y.height;
        }) : [];
      },
      isNodeIntersecting: (u, f, p = !0) => {
        const y = Oo(u) ? u : c(u);
        if (!y)
          return !1;
        const x = $t(y, f);
        return p && x > 0 || x >= f.width * f.height || x >= y.width * y.height;
      },
      updateNode: l,
      updateNodeData: (u, f, p = { replace: !1 }) => {
        l(u, (g) => {
          const y = typeof f == "function" ? f(g) : f;
          return p.replace ? { ...g, data: y } : { ...g, data: { ...g.data, ...y } };
        }, p);
      },
      updateEdge: d,
      updateEdgeData: (u, f, p = { replace: !1 }) => {
        d(u, (g) => {
          const y = typeof f == "function" ? f(g) : f;
          return p.replace ? { ...g, data: y } : { ...g, data: { ...g.data, ...y } };
        }, p);
      },
      getNodesBounds: (u) => {
        const { nodeLookup: f, nodeOrigin: p } = t.getState();
        return Nd(u, { nodeLookup: f, nodeOrigin: p });
      },
      getHandleConnections: ({ type: u, id: f, nodeId: p }) => {
        var g;
        return Array.from(((g = t.getState().connectionLookup.get(`${p}-${u}${f ? `-${f}` : ""}`)) == null ? void 0 : g.values()) ?? []);
      },
      getNodeConnections: ({ type: u, handleId: f, nodeId: p }) => {
        var g;
        return Array.from(((g = t.getState().connectionLookup.get(`${p}${u ? f ? `-${u}-${f}` : `-${u}` : ""}`)) == null ? void 0 : g.values()) ?? []);
      },
      fitView: async (u) => {
        const f = t.getState().fitViewResolver ?? Od();
        return t.setState({ fitViewQueued: !0, fitViewOptions: u, fitViewResolver: f }), n.nodeQueue.push((p) => [...p]), f.promise;
      }
    };
  }, []);
  return ve(() => ({
    ...o,
    ...e,
    viewportInitialized: r
  }), [r]);
}
const ci = (e) => e.selected, ap = typeof window < "u" ? window : void 0;
function cp({ deleteKeyCode: e, multiSelectionKeyCode: t }) {
  const n = ce(), { deleteElements: r } = $n(), o = Pt(e, { actInsideInputWithModifier: !1 }), i = Pt(t, { target: ap });
  oe(() => {
    if (o) {
      const { edges: s, nodes: a } = n.getState();
      r({ nodes: a.filter(ci), edges: s.filter(ci) }), n.setState({ nodesSelectionActive: !1 });
    }
  }, [o]), oe(() => {
    n.setState({ multiSelectionActive: i });
  }, [i]);
}
function lp(e) {
  const t = ce();
  oe(() => {
    const n = () => {
      var o, i, s, a;
      if (!e.current || !(((i = (o = e.current).checkVisibility) == null ? void 0 : i.call(o)) ?? !0))
        return !1;
      const r = Wr(e.current);
      (r.height === 0 || r.width === 0) && ((a = (s = t.getState()).onError) == null || a.call(s, "004", $e.error004())), t.setState({ width: r.width || 500, height: r.height || 500 });
    };
    if (e.current) {
      n(), window.addEventListener("resize", n);
      const r = new ResizeObserver(() => n());
      return r.observe(e.current), () => {
        window.removeEventListener("resize", n), r && e.current && r.unobserve(e.current);
      };
    }
  }, []);
}
const Mn = {
  position: "absolute",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0
}, up = (e) => ({
  userSelectionActive: e.userSelectionActive,
  lib: e.lib,
  connectionInProgress: e.connection.inProgress
});
function fp({ onPaneContextMenu: e, zoomOnScroll: t = !0, zoomOnPinch: n = !0, panOnScroll: r = !1, panOnScrollSpeed: o = 0.5, panOnScrollMode: i = Xe.Free, zoomOnDoubleClick: s = !0, panOnDrag: a = !0, defaultViewport: c, translateExtent: l, minZoom: d, maxZoom: u, zoomActivationKeyCode: f, preventScrolling: p = !0, children: g, noWheelClassName: y, noPanClassName: x, onViewportChange: m, isControlledViewport: v, paneClickDistance: h, selectionOnDrag: w }) {
  const $ = ce(), C = re(null), { userSelectionActive: M, lib: T, connectionInProgress: A } = te(up, ae), R = Pt(f), z = re();
  lp(C);
  const I = me((H) => {
    m == null || m({ x: H[0], y: H[1], zoom: H[2] }), v || $.setState({ transform: H });
  }, [m, v]);
  return oe(() => {
    if (C.current) {
      z.current = ph({
        domNode: C.current,
        minZoom: d,
        maxZoom: u,
        translateExtent: l,
        viewport: c,
        onDraggingChange: (_) => $.setState((k) => k.paneDragging === _ ? k : { paneDragging: _ }),
        onPanZoomStart: (_, k) => {
          const { onViewportChangeStart: E, onMoveStart: S } = $.getState();
          S == null || S(_, k), E == null || E(k);
        },
        onPanZoom: (_, k) => {
          const { onViewportChange: E, onMove: S } = $.getState();
          S == null || S(_, k), E == null || E(k);
        },
        onPanZoomEnd: (_, k) => {
          const { onViewportChangeEnd: E, onMoveEnd: S } = $.getState();
          S == null || S(_, k), E == null || E(k);
        }
      });
      const { x: H, y: b, zoom: O } = z.current.getViewport();
      return $.setState({
        panZoom: z.current,
        transform: [H, b, O],
        domNode: C.current.closest(".react-flow")
      }), () => {
        var _;
        (_ = z.current) == null || _.destroy();
      };
    }
  }, []), oe(() => {
    var H;
    (H = z.current) == null || H.update({
      onPaneContextMenu: e,
      zoomOnScroll: t,
      zoomOnPinch: n,
      panOnScroll: r,
      panOnScrollSpeed: o,
      panOnScrollMode: i,
      zoomOnDoubleClick: s,
      panOnDrag: a,
      zoomActivationKeyPressed: R,
      preventScrolling: p,
      noPanClassName: x,
      userSelectionActive: M,
      noWheelClassName: y,
      lib: T,
      onTransformChange: I,
      connectionInProgress: A,
      selectionOnDrag: w,
      paneClickDistance: h
    });
  }, [
    e,
    t,
    n,
    r,
    o,
    i,
    s,
    a,
    R,
    p,
    x,
    M,
    y,
    T,
    I,
    A,
    w,
    h
  ]), N("div", { className: "react-flow__renderer", ref: C, style: Mn, children: g });
}
const dp = (e) => ({
  userSelectionActive: e.userSelectionActive,
  userSelectionRect: e.userSelectionRect
});
function hp() {
  const { userSelectionActive: e, userSelectionRect: t } = te(dp, ae);
  return e && t ? N("div", { className: "react-flow__selection react-flow__container", style: {
    width: t.width,
    height: t.height,
    transform: `translate(${t.x}px, ${t.y}px)`
  } }) : null;
}
const Qn = (e, t) => (n) => {
  n.target === t.current && (e == null || e(n));
}, pp = (e) => ({
  userSelectionActive: e.userSelectionActive,
  elementsSelectable: e.elementsSelectable,
  connectionInProgress: e.connection.inProgress,
  dragging: e.paneDragging
});
function gp({ isSelecting: e, selectionKeyPressed: t, selectionMode: n = Ct.Full, panOnDrag: r, paneClickDistance: o, selectionOnDrag: i, onSelectionStart: s, onSelectionEnd: a, onPaneClick: c, onPaneContextMenu: l, onPaneScroll: d, onPaneMouseEnter: u, onPaneMouseMove: f, onPaneMouseLeave: p, children: g }) {
  const y = ce(), { userSelectionActive: x, elementsSelectable: m, dragging: v, connectionInProgress: h } = te(pp, ae), w = m && (e || x), $ = re(null), C = re(), M = re(/* @__PURE__ */ new Set()), T = re(/* @__PURE__ */ new Set()), A = re(!1), R = (E) => {
    if (A.current || h) {
      A.current = !1;
      return;
    }
    c == null || c(E), y.getState().resetSelectedElements(), y.setState({ nodesSelectionActive: !1 });
  }, z = (E) => {
    if (Array.isArray(r) && (r != null && r.includes(2))) {
      E.preventDefault();
      return;
    }
    l == null || l(E);
  }, I = d ? (E) => d(E) : void 0, H = (E) => {
    A.current && (E.stopPropagation(), A.current = !1);
  }, b = (E) => {
    var W, Y;
    const { domNode: S } = y.getState();
    if (C.current = S == null ? void 0 : S.getBoundingClientRect(), !C.current)
      return;
    const P = E.target === $.current;
    if (!P && !!E.target.closest(".nokey") || !e || !(i && P || t) || E.button !== 0 || !E.isPrimary)
      return;
    (Y = (W = E.target) == null ? void 0 : W.setPointerCapture) == null || Y.call(W, E.pointerId), A.current = !1;
    const { x: j, y: B } = Ne(E.nativeEvent, C.current);
    y.setState({
      userSelectionRect: {
        width: 0,
        height: 0,
        startX: j,
        startY: B,
        x: j,
        y: B
      }
    }), P || (E.stopPropagation(), E.preventDefault());
  }, O = (E) => {
    const { userSelectionRect: S, transform: P, nodeLookup: L, edgeLookup: D, connectionLookup: j, triggerNodeChanges: B, triggerEdgeChanges: W, defaultEdgeOptions: Y, resetSelectedElements: G } = y.getState();
    if (!C.current || !S)
      return;
    const { x: V, y: U } = Ne(E.nativeEvent, C.current), { startX: ee, startY: Q } = S;
    if (!A.current) {
      const ne = t ? 0 : o;
      if (Math.hypot(V - ee, U - Q) <= ne)
        return;
      G(), s == null || s(E);
    }
    A.current = !0;
    const Z = {
      startX: ee,
      startY: Q,
      x: V < ee ? V : ee,
      y: U < Q ? U : Q,
      width: Math.abs(V - ee),
      height: Math.abs(U - Q)
    }, K = M.current, ie = T.current;
    M.current = new Set(Br(L, Z, P, n === Ct.Partial, !0).map((ne) => ne.id)), T.current = /* @__PURE__ */ new Set();
    const se = (Y == null ? void 0 : Y.selectable) ?? !0;
    for (const ne of M.current) {
      const ge = j.get(ne);
      if (ge)
        for (const { edgeId: Ae } of ge.values()) {
          const Pe = D.get(Ae);
          Pe && (Pe.selectable ?? se) && T.current.add(Ae);
        }
    }
    if (!Io(K, M.current)) {
      const ne = tt(L, M.current, !0);
      B(ne);
    }
    if (!Io(ie, T.current)) {
      const ne = tt(D, T.current);
      W(ne);
    }
    y.setState({
      userSelectionRect: Z,
      userSelectionActive: !0,
      nodesSelectionActive: !1
    });
  }, _ = (E) => {
    var S, P;
    E.button === 0 && ((P = (S = E.target) == null ? void 0 : S.releasePointerCapture) == null || P.call(S, E.pointerId), !x && E.target === $.current && y.getState().userSelectionRect && (R == null || R(E)), y.setState({
      userSelectionActive: !1,
      userSelectionRect: null
    }), A.current && (a == null || a(E), y.setState({
      nodesSelectionActive: M.current.size > 0
    })));
  }, k = r === !0 || Array.isArray(r) && r.includes(0);
  return J("div", { className: fe(["react-flow__pane", { draggable: k, dragging: v, selection: e }]), onClick: w ? void 0 : Qn(R, $), onContextMenu: Qn(z, $), onWheel: Qn(I, $), onPointerEnter: w ? void 0 : u, onPointerMove: w ? O : f, onPointerUp: w ? _ : void 0, onPointerDownCapture: w ? b : void 0, onClickCapture: w ? H : void 0, onPointerLeave: p, ref: $, style: Mn, children: [g, N(hp, {})] });
}
function mr({ id: e, store: t, unselect: n = !1, nodeRef: r }) {
  const { addSelectedNodes: o, unselectNodesAndEdges: i, multiSelectionActive: s, nodeLookup: a, onError: c } = t.getState(), l = a.get(e);
  if (!l) {
    c == null || c("012", $e.error012(e));
    return;
  }
  t.setState({ nodesSelectionActive: !1 }), l.selected ? (n || l.selected && s) && (i({ nodes: [l], edges: [] }), requestAnimationFrame(() => {
    var d;
    return (d = r == null ? void 0 : r.current) == null ? void 0 : d.blur();
  })) : o([e]);
}
function Bs({ nodeRef: e, disabled: t = !1, noDragClassName: n, handleSelector: r, nodeId: o, isSelectable: i, nodeClickDistance: s }) {
  const a = ce(), [c, l] = ue(!1), d = re();
  return oe(() => {
    d.current = eh({
      getStoreItems: () => a.getState(),
      onNodeMouseDown: (u) => {
        mr({
          id: u,
          store: a,
          nodeRef: e
        });
      },
      onDragStart: () => {
        l(!0);
      },
      onDragStop: () => {
        l(!1);
      }
    });
  }, []), oe(() => {
    if (!(t || !e.current || !d.current))
      return d.current.update({
        noDragClassName: n,
        handleSelector: r,
        domNode: e.current,
        isSelectable: i,
        nodeId: o,
        nodeClickDistance: s
      }), () => {
        var u;
        (u = d.current) == null || u.destroy();
      };
  }, [n, r, t, i, e, o, s]), c;
}
const mp = (e) => (t) => t.selected && (t.draggable || e && typeof t.draggable > "u");
function Vs() {
  const e = ce();
  return me((n) => {
    const { nodeExtent: r, snapToGrid: o, snapGrid: i, nodesDraggable: s, onError: a, updateNodePositions: c, nodeLookup: l, nodeOrigin: d } = e.getState(), u = /* @__PURE__ */ new Map(), f = mp(s), p = o ? i[0] : 5, g = o ? i[1] : 5, y = n.direction.x * p * n.factor, x = n.direction.y * g * n.factor;
    for (const [, m] of l) {
      if (!f(m))
        continue;
      let v = {
        x: m.internals.positionAbsolute.x + y,
        y: m.internals.positionAbsolute.y + x
      };
      o && (v = Dt(v, i));
      const { position: h, positionAbsolute: w } = os({
        nodeId: m.id,
        nextPosition: v,
        nodeLookup: l,
        nodeExtent: r,
        nodeOrigin: d,
        onError: a
      });
      m.position = h, m.internals.positionAbsolute = w, u.set(m.id, m);
    }
    c(u);
  }, []);
}
const Ur = Ot(null), yp = Ur.Provider;
Ur.Consumer;
const Ws = () => Ze(Ur), xp = (e) => ({
  connectOnClick: e.connectOnClick,
  noPanClassName: e.noPanClassName,
  rfId: e.rfId
}), wp = (e, t, n) => (r) => {
  const { connectionClickStartHandle: o, connectionMode: i, connection: s } = r, { fromHandle: a, toHandle: c, isValid: l } = s, d = (c == null ? void 0 : c.nodeId) === e && (c == null ? void 0 : c.id) === t && (c == null ? void 0 : c.type) === n;
  return {
    connectingFrom: (a == null ? void 0 : a.nodeId) === e && (a == null ? void 0 : a.id) === t && (a == null ? void 0 : a.type) === n,
    connectingTo: d,
    clickConnecting: (o == null ? void 0 : o.nodeId) === e && (o == null ? void 0 : o.id) === t && (o == null ? void 0 : o.type) === n,
    isPossibleEndHandle: i === st.Strict ? (a == null ? void 0 : a.type) !== n : e !== (a == null ? void 0 : a.nodeId) || t !== (a == null ? void 0 : a.id),
    connectionInProcess: !!a,
    clickConnectionInProcess: !!o,
    valid: d && l
  };
};
function vp({ type: e = "source", position: t = X.Top, isValidConnection: n, isConnectable: r = !0, isConnectableStart: o = !0, isConnectableEnd: i = !0, id: s, onConnect: a, children: c, className: l, onMouseDown: d, onTouchStart: u, ...f }, p) {
  var O, _;
  const g = s || null, y = e === "target", x = ce(), m = Ws(), { connectOnClick: v, noPanClassName: h, rfId: w } = te(xp, ae), { connectingFrom: $, connectingTo: C, clickConnecting: M, isPossibleEndHandle: T, connectionInProcess: A, clickConnectionInProcess: R, valid: z } = te(wp(m, g, e), ae);
  m || (_ = (O = x.getState()).onError) == null || _.call(O, "010", $e.error010());
  const I = (k) => {
    const { defaultEdgeOptions: E, onConnect: S, hasDefaultEdges: P } = x.getState(), L = {
      ...E,
      ...k
    };
    if (P) {
      const { edges: D, setEdges: j } = x.getState();
      j(ms(L, D));
    }
    S == null || S(L), a == null || a(L);
  }, H = (k) => {
    if (!m)
      return;
    const E = ds(k.nativeEvent);
    if (o && (E && k.button === 0 || !E)) {
      const S = x.getState();
      gr.onPointerDown(k.nativeEvent, {
        handleDomNode: k.currentTarget,
        autoPanOnConnect: S.autoPanOnConnect,
        connectionMode: S.connectionMode,
        connectionRadius: S.connectionRadius,
        domNode: S.domNode,
        nodeLookup: S.nodeLookup,
        lib: S.lib,
        isTarget: y,
        handleId: g,
        nodeId: m,
        flowId: S.rfId,
        panBy: S.panBy,
        cancelConnection: S.cancelConnection,
        onConnectStart: S.onConnectStart,
        onConnectEnd: (...P) => {
          var L, D;
          return (D = (L = x.getState()).onConnectEnd) == null ? void 0 : D.call(L, ...P);
        },
        updateConnection: S.updateConnection,
        onConnect: I,
        isValidConnection: n || ((...P) => {
          var L, D;
          return ((D = (L = x.getState()).isValidConnection) == null ? void 0 : D.call(L, ...P)) ?? !0;
        }),
        getTransform: () => x.getState().transform,
        getFromHandle: () => x.getState().connection.fromHandle,
        autoPanSpeed: S.autoPanSpeed,
        dragThreshold: S.connectionDragThreshold
      });
    }
    E ? d == null || d(k) : u == null || u(k);
  }, b = (k) => {
    const { onClickConnectStart: E, onClickConnectEnd: S, connectionClickStartHandle: P, connectionMode: L, isValidConnection: D, lib: j, rfId: B, nodeLookup: W, connection: Y } = x.getState();
    if (!m || !P && !o)
      return;
    if (!P) {
      E == null || E(k.nativeEvent, { nodeId: m, handleId: g, handleType: e }), x.setState({ connectionClickStartHandle: { nodeId: m, type: e, id: g } });
      return;
    }
    const G = us(k.target), V = n || D, { connection: U, isValid: ee } = gr.isValid(k.nativeEvent, {
      handle: {
        nodeId: m,
        id: g,
        type: e
      },
      connectionMode: L,
      fromNodeId: P.nodeId,
      fromHandleId: P.id || null,
      fromType: P.type,
      isValidConnection: V,
      flowId: B,
      doc: G,
      lib: j,
      nodeLookup: W
    });
    ee && U && I(U);
    const Q = structuredClone(Y);
    delete Q.inProgress, Q.toPosition = Q.toHandle ? Q.toHandle.position : null, S == null || S(k, Q), x.setState({ connectionClickStartHandle: null });
  };
  return N("div", { "data-handleid": g, "data-nodeid": m, "data-handlepos": t, "data-id": `${w}-${m}-${g}-${e}`, className: fe([
    "react-flow__handle",
    `react-flow__handle-${t}`,
    "nodrag",
    h,
    l,
    {
      source: !y,
      target: y,
      connectable: r,
      connectablestart: o,
      connectableend: i,
      clickconnecting: M,
      connectingfrom: $,
      connectingto: C,
      valid: z,
      /*
       * shows where you can start a connection from
       * and where you can end it while connecting
       */
      connectionindicator: r && (!A || T) && (A || R ? i : o)
    }
  ]), onMouseDown: H, onTouchStart: H, onClick: v ? b : void 0, ref: p, ...f, children: c });
}
const pe = le(Rs(vp));
function bp({ data: e, isConnectable: t, sourcePosition: n = X.Bottom }) {
  return J(he, { children: [e == null ? void 0 : e.label, N(pe, { type: "source", position: n, isConnectable: t })] });
}
function _p({ data: e, isConnectable: t, targetPosition: n = X.Top, sourcePosition: r = X.Bottom }) {
  return J(he, { children: [N(pe, { type: "target", position: n, isConnectable: t }), e == null ? void 0 : e.label, N(pe, { type: "source", position: r, isConnectable: t })] });
}
function Ep() {
  return null;
}
function Np({ data: e, isConnectable: t, targetPosition: n = X.Top }) {
  return J(he, { children: [N(pe, { type: "target", position: n, isConnectable: t }), e == null ? void 0 : e.label] });
}
const pn = {
  ArrowUp: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 }
}, li = {
  input: bp,
  default: _p,
  output: Np,
  group: Ep
};
function Sp(e) {
  var t, n, r, o;
  return e.internals.handleBounds === void 0 ? {
    width: e.width ?? e.initialWidth ?? ((t = e.style) == null ? void 0 : t.width),
    height: e.height ?? e.initialHeight ?? ((n = e.style) == null ? void 0 : n.height)
  } : {
    width: e.width ?? ((r = e.style) == null ? void 0 : r.width),
    height: e.height ?? ((o = e.style) == null ? void 0 : o.height)
  };
}
const kp = (e) => {
  const { width: t, height: n, x: r, y: o } = Lt(e.nodeLookup, {
    filter: (i) => !!i.selected
  });
  return {
    width: Ee(t) ? t : null,
    height: Ee(n) ? n : null,
    userSelectionActive: e.userSelectionActive,
    transformString: `translate(${e.transform[0]}px,${e.transform[1]}px) scale(${e.transform[2]}) translate(${r}px,${o}px)`
  };
};
function Cp({ onSelectionContextMenu: e, noPanClassName: t, disableKeyboardA11y: n }) {
  const r = ce(), { width: o, height: i, transformString: s, userSelectionActive: a } = te(kp, ae), c = Vs(), l = re(null);
  oe(() => {
    var p;
    n || (p = l.current) == null || p.focus({
      preventScroll: !0
    });
  }, [n]);
  const d = !a && o !== null && i !== null;
  if (Bs({
    nodeRef: l,
    disabled: !d
  }), !d)
    return null;
  const u = e ? (p) => {
    const g = r.getState().nodes.filter((y) => y.selected);
    e(p, g);
  } : void 0, f = (p) => {
    Object.prototype.hasOwnProperty.call(pn, p.key) && (p.preventDefault(), c({
      direction: pn[p.key],
      factor: p.shiftKey ? 4 : 1
    }));
  };
  return N("div", { className: fe(["react-flow__nodesselection", "react-flow__container", t]), style: {
    transform: s
  }, children: N("div", { ref: l, className: "react-flow__nodesselection-rect", onContextMenu: u, tabIndex: n ? void 0 : -1, onKeyDown: n ? void 0 : f, style: {
    width: o,
    height: i
  } }) });
}
const ui = typeof window < "u" ? window : void 0, $p = (e) => ({ nodesSelectionActive: e.nodesSelectionActive, userSelectionActive: e.userSelectionActive });
function Fs({ children: e, onPaneClick: t, onPaneMouseEnter: n, onPaneMouseMove: r, onPaneMouseLeave: o, onPaneContextMenu: i, onPaneScroll: s, paneClickDistance: a, deleteKeyCode: c, selectionKeyCode: l, selectionOnDrag: d, selectionMode: u, onSelectionStart: f, onSelectionEnd: p, multiSelectionKeyCode: g, panActivationKeyCode: y, zoomActivationKeyCode: x, elementsSelectable: m, zoomOnScroll: v, zoomOnPinch: h, panOnScroll: w, panOnScrollSpeed: $, panOnScrollMode: C, zoomOnDoubleClick: M, panOnDrag: T, defaultViewport: A, translateExtent: R, minZoom: z, maxZoom: I, preventScrolling: H, onSelectionContextMenu: b, noWheelClassName: O, noPanClassName: _, disableKeyboardA11y: k, onViewportChange: E, isControlledViewport: S }) {
  const { nodesSelectionActive: P, userSelectionActive: L } = te($p, ae), D = Pt(l, { target: ui }), j = Pt(y, { target: ui }), B = j || T, W = j || w, Y = d && B !== !0, G = D || L || Y;
  return cp({ deleteKeyCode: c, multiSelectionKeyCode: g }), N(fp, { onPaneContextMenu: i, elementsSelectable: m, zoomOnScroll: v, zoomOnPinch: h, panOnScroll: W, panOnScrollSpeed: $, panOnScrollMode: C, zoomOnDoubleClick: M, panOnDrag: !D && B, defaultViewport: A, translateExtent: R, minZoom: z, maxZoom: I, zoomActivationKeyCode: x, preventScrolling: H, noWheelClassName: O, noPanClassName: _, onViewportChange: E, isControlledViewport: S, paneClickDistance: a, selectionOnDrag: Y, children: J(gp, { onSelectionStart: f, onSelectionEnd: p, onPaneClick: t, onPaneMouseEnter: n, onPaneMouseMove: r, onPaneMouseLeave: o, onPaneContextMenu: i, onPaneScroll: s, panOnDrag: B, isSelecting: !!G, selectionMode: u, selectionKeyPressed: D, paneClickDistance: a, selectionOnDrag: Y, children: [e, P && N(Cp, { onSelectionContextMenu: b, noPanClassName: _, disableKeyboardA11y: k })] }) });
}
Fs.displayName = "FlowRenderer";
const Mp = le(Fs), Pp = (e) => (t) => e ? Br(t.nodeLookup, { x: 0, y: 0, width: t.width, height: t.height }, t.transform, !0).map((n) => n.id) : Array.from(t.nodeLookup.keys());
function zp(e) {
  return te(me(Pp(e), [e]), ae);
}
const Op = (e) => e.updateNodeInternals;
function Ip() {
  const e = te(Op), [t] = ue(() => typeof ResizeObserver > "u" ? null : new ResizeObserver((n) => {
    const r = /* @__PURE__ */ new Map();
    n.forEach((o) => {
      const i = o.target.getAttribute("data-id");
      r.set(i, {
        id: i,
        nodeElement: o.target,
        force: !0
      });
    }), e(r);
  }));
  return oe(() => () => {
    t == null || t.disconnect();
  }, [t]), t;
}
function Tp({ node: e, nodeType: t, hasDimensions: n, resizeObserver: r }) {
  const o = ce(), i = re(null), s = re(null), a = re(e.sourcePosition), c = re(e.targetPosition), l = re(t), d = n && !!e.internals.handleBounds;
  return oe(() => {
    i.current && !e.hidden && (!d || s.current !== i.current) && (s.current && (r == null || r.unobserve(s.current)), r == null || r.observe(i.current), s.current = i.current);
  }, [d, e.hidden]), oe(() => () => {
    s.current && (r == null || r.unobserve(s.current), s.current = null);
  }, []), oe(() => {
    if (i.current) {
      const u = l.current !== t, f = a.current !== e.sourcePosition, p = c.current !== e.targetPosition;
      (u || f || p) && (l.current = t, a.current = e.sourcePosition, c.current = e.targetPosition, o.getState().updateNodeInternals(/* @__PURE__ */ new Map([[e.id, { id: e.id, nodeElement: i.current, force: !0 }]])));
    }
  }, [e.id, t, e.sourcePosition, e.targetPosition]), i;
}
function Ap({ id: e, onClick: t, onMouseEnter: n, onMouseMove: r, onMouseLeave: o, onContextMenu: i, onDoubleClick: s, nodesDraggable: a, elementsSelectable: c, nodesConnectable: l, nodesFocusable: d, resizeObserver: u, noDragClassName: f, noPanClassName: p, disableKeyboardA11y: g, rfId: y, nodeTypes: x, nodeClickDistance: m, onError: v }) {
  const { node: h, internals: w, isParent: $ } = te((V) => {
    const U = V.nodeLookup.get(e), ee = V.parentLookup.has(e);
    return {
      node: U,
      internals: U.internals,
      isParent: ee
    };
  }, ae);
  let C = h.type || "default", M = (x == null ? void 0 : x[C]) || li[C];
  M === void 0 && (v == null || v("003", $e.error003(C)), C = "default", M = (x == null ? void 0 : x.default) || li.default);
  const T = !!(h.draggable || a && typeof h.draggable > "u"), A = !!(h.selectable || c && typeof h.selectable > "u"), R = !!(h.connectable || l && typeof h.connectable > "u"), z = !!(h.focusable || d && typeof h.focusable > "u"), I = ce(), H = cs(h), b = Tp({ node: h, nodeType: C, hasDimensions: H, resizeObserver: u }), O = Bs({
    nodeRef: b,
    disabled: h.hidden || !T,
    noDragClassName: f,
    handleSelector: h.dragHandle,
    nodeId: e,
    isSelectable: A,
    nodeClickDistance: m
  }), _ = Vs();
  if (h.hidden)
    return null;
  const k = Te(h), E = Sp(h), S = A || T || t || n || r || o, P = n ? (V) => n(V, { ...w.userNode }) : void 0, L = r ? (V) => r(V, { ...w.userNode }) : void 0, D = o ? (V) => o(V, { ...w.userNode }) : void 0, j = i ? (V) => i(V, { ...w.userNode }) : void 0, B = s ? (V) => s(V, { ...w.userNode }) : void 0, W = (V) => {
    const { selectNodesOnDrag: U, nodeDragThreshold: ee } = I.getState();
    A && (!U || !T || ee > 0) && mr({
      id: e,
      store: I,
      nodeRef: b
    }), t && t(V, { ...w.userNode });
  }, Y = (V) => {
    if (!(fs(V.nativeEvent) || g)) {
      if (Ji.includes(V.key) && A) {
        const U = V.key === "Escape";
        mr({
          id: e,
          store: I,
          unselect: U,
          nodeRef: b
        });
      } else if (T && h.selected && Object.prototype.hasOwnProperty.call(pn, V.key)) {
        V.preventDefault();
        const { ariaLabelConfig: U } = I.getState();
        I.setState({
          ariaLiveMessage: U["node.a11yDescription.ariaLiveMessage"]({
            direction: V.key.replace("Arrow", "").toLowerCase(),
            x: ~~w.positionAbsolute.x,
            y: ~~w.positionAbsolute.y
          })
        }), _({
          direction: pn[V.key],
          factor: V.shiftKey ? 4 : 1
        });
      }
    }
  }, G = () => {
    var ie;
    if (g || !((ie = b.current) != null && ie.matches(":focus-visible")))
      return;
    const { transform: V, width: U, height: ee, autoPanOnNodeFocus: Q, setCenter: Z } = I.getState();
    if (!Q)
      return;
    Br(/* @__PURE__ */ new Map([[e, h]]), { x: 0, y: 0, width: U, height: ee }, V, !0).length > 0 || Z(h.position.x + k.width / 2, h.position.y + k.height / 2, {
      zoom: V[2]
    });
  };
  return N("div", { className: fe([
    "react-flow__node",
    `react-flow__node-${C}`,
    {
      // this is overwritable by passing `nopan` as a class name
      [p]: T
    },
    h.className,
    {
      selected: h.selected,
      selectable: A,
      parent: $,
      draggable: T,
      dragging: O
    }
  ]), ref: b, style: {
    zIndex: w.z,
    transform: `translate(${w.positionAbsolute.x}px,${w.positionAbsolute.y}px)`,
    pointerEvents: S ? "all" : "none",
    visibility: H ? "visible" : "hidden",
    ...h.style,
    ...E
  }, "data-id": e, "data-testid": `rf__node-${e}`, onMouseEnter: P, onMouseMove: L, onMouseLeave: D, onContextMenu: j, onClick: W, onDoubleClick: B, onKeyDown: z ? Y : void 0, tabIndex: z ? 0 : void 0, onFocus: z ? G : void 0, role: h.ariaRole ?? (z ? "group" : void 0), "aria-roledescription": "node", "aria-describedby": g ? void 0 : `${Is}-${y}`, "aria-label": h.ariaLabel, ...h.domAttributes, children: N(yp, { value: e, children: N(M, { id: e, data: h.data, type: C, positionAbsoluteX: w.positionAbsolute.x, positionAbsoluteY: w.positionAbsolute.y, selected: h.selected ?? !1, selectable: A, draggable: T, deletable: h.deletable ?? !0, isConnectable: R, sourcePosition: h.sourcePosition, targetPosition: h.targetPosition, dragging: O, dragHandle: h.dragHandle, zIndex: w.z, parentId: h.parentId, ...k }) }) });
}
var Lp = le(Ap);
const Dp = (e) => ({
  nodesDraggable: e.nodesDraggable,
  nodesConnectable: e.nodesConnectable,
  nodesFocusable: e.nodesFocusable,
  elementsSelectable: e.elementsSelectable,
  onError: e.onError
});
function Xs(e) {
  const { nodesDraggable: t, nodesConnectable: n, nodesFocusable: r, elementsSelectable: o, onError: i } = te(Dp, ae), s = zp(e.onlyRenderVisibleElements), a = Ip();
  return N("div", { className: "react-flow__nodes", style: Mn, children: s.map((c) => (
    /*
     * The split of responsibilities between NodeRenderer and
     * NodeComponentWrapper may appear weird. However, it’s designed to
     * minimize the cost of updates when individual nodes change.
     *
     * For example, when you’re dragging a single node, that node gets
     * updated multiple times per second. If `NodeRenderer` were to update
     * every time, it would have to re-run the `nodes.map()` loop every
     * time. This gets pricey with hundreds of nodes, especially if every
     * loop cycle does more than just rendering a JSX element!
     *
     * As a result of this choice, we took the following implementation
     * decisions:
     * - NodeRenderer subscribes *only* to node IDs – and therefore
     *   rerender *only* when visible nodes are added or removed.
     * - NodeRenderer performs all operations the result of which can be
     *   shared between nodes (such as creating the `ResizeObserver`
     *   instance, or subscribing to `selector`). This means extra prop
     *   drilling into `NodeComponentWrapper`, but it means we need to run
     *   these operations only once – instead of once per node.
     * - Any operations that you’d normally write inside `nodes.map` are
     *   moved into `NodeComponentWrapper`. This ensures they are
     *   memorized – so if `NodeRenderer` *has* to rerender, it only
     *   needs to regenerate the list of nodes, nothing else.
     */
    N(Lp, { id: c, nodeTypes: e.nodeTypes, nodeExtent: e.nodeExtent, onClick: e.onNodeClick, onMouseEnter: e.onNodeMouseEnter, onMouseMove: e.onNodeMouseMove, onMouseLeave: e.onNodeMouseLeave, onContextMenu: e.onNodeContextMenu, onDoubleClick: e.onNodeDoubleClick, noDragClassName: e.noDragClassName, noPanClassName: e.noPanClassName, rfId: e.rfId, disableKeyboardA11y: e.disableKeyboardA11y, resizeObserver: a, nodesDraggable: t, nodesConnectable: n, nodesFocusable: r, elementsSelectable: o, nodeClickDistance: e.nodeClickDistance, onError: i }, c)
  )) });
}
Xs.displayName = "NodeRenderer";
const Hp = le(Xs);
function Rp(e) {
  return te(me((n) => {
    if (!e)
      return n.edges.map((o) => o.id);
    const r = [];
    if (n.width && n.height)
      for (const o of n.edges) {
        const i = n.nodeLookup.get(o.source), s = n.nodeLookup.get(o.target);
        i && s && Ld({
          sourceNode: i,
          targetNode: s,
          width: n.width,
          height: n.height,
          transform: n.transform
        }) && r.push(o.id);
      }
    return r;
  }, [e]), ae);
}
const jp = ({ color: e = "none", strokeWidth: t = 1 }) => {
  const n = {
    strokeWidth: t,
    ...e && { stroke: e }
  };
  return N("polyline", { className: "arrow", style: n, strokeLinecap: "round", fill: "none", strokeLinejoin: "round", points: "-5,-4 0,0 -5,4" });
}, Bp = ({ color: e = "none", strokeWidth: t = 1 }) => {
  const n = {
    strokeWidth: t,
    ...e && { stroke: e, fill: e }
  };
  return N("polyline", { className: "arrowclosed", style: n, strokeLinecap: "round", strokeLinejoin: "round", points: "-5,-4 0,0 -5,4 -5,-4" });
}, fi = {
  [fn.Arrow]: jp,
  [fn.ArrowClosed]: Bp
};
function Vp(e) {
  const t = ce();
  return ve(() => {
    var o, i;
    return Object.prototype.hasOwnProperty.call(fi, e) ? fi[e] : ((i = (o = t.getState()).onError) == null || i.call(o, "009", $e.error009(e)), null);
  }, [e]);
}
const Wp = ({ id: e, type: t, color: n, width: r = 12.5, height: o = 12.5, markerUnits: i = "strokeWidth", strokeWidth: s, orient: a = "auto-start-reverse" }) => {
  const c = Vp(t);
  return c ? N("marker", { className: "react-flow__arrowhead", id: e, markerWidth: `${r}`, markerHeight: `${o}`, viewBox: "-10 -10 20 20", markerUnits: i, orient: a, refX: "0", refY: "0", children: N(c, { color: n, strokeWidth: s }) }) : null;
}, Ys = ({ defaultColor: e, rfId: t }) => {
  const n = te((i) => i.edges), r = te((i) => i.defaultEdgeOptions), o = ve(() => Wd(n, {
    id: t,
    defaultColor: e,
    defaultMarkerStart: r == null ? void 0 : r.markerStart,
    defaultMarkerEnd: r == null ? void 0 : r.markerEnd
  }), [n, r, t, e]);
  return o.length ? N("svg", { className: "react-flow__marker", "aria-hidden": "true", children: N("defs", { children: o.map((i) => N(Wp, { id: i.id, type: i.type, color: i.color, width: i.width, height: i.height, markerUnits: i.markerUnits, strokeWidth: i.strokeWidth, orient: i.orient }, i.id)) }) }) : null;
};
Ys.displayName = "MarkerDefinitions";
var Fp = le(Ys);
function qs({ x: e, y: t, label: n, labelStyle: r, labelShowBg: o = !0, labelBgStyle: i, labelBgPadding: s = [2, 4], labelBgBorderRadius: a = 2, children: c, className: l, ...d }) {
  const [u, f] = ue({ x: 1, y: 0, width: 0, height: 0 }), p = fe(["react-flow__edge-textwrapper", l]), g = re(null);
  return oe(() => {
    if (g.current) {
      const y = g.current.getBBox();
      f({
        x: y.x,
        y: y.y,
        width: y.width,
        height: y.height
      });
    }
  }, [n]), n ? J("g", { transform: `translate(${e - u.width / 2} ${t - u.height / 2})`, className: p, visibility: u.width ? "visible" : "hidden", ...d, children: [o && N("rect", { width: u.width + 2 * s[0], x: -s[0], y: -s[1], height: u.height + 2 * s[1], className: "react-flow__edge-textbg", style: i, rx: a, ry: a }), N("text", { className: "react-flow__edge-text", y: u.height / 2, dy: "0.3em", ref: g, style: r, children: n }), c] }) : null;
}
qs.displayName = "EdgeText";
const Xp = le(qs);
function Pn({ path: e, labelX: t, labelY: n, label: r, labelStyle: o, labelShowBg: i, labelBgStyle: s, labelBgPadding: a, labelBgBorderRadius: c, interactionWidth: l = 20, ...d }) {
  return J(he, { children: [N("path", { ...d, d: e, fill: "none", className: fe(["react-flow__edge-path", d.className]) }), l ? N("path", { d: e, fill: "none", strokeOpacity: 0, strokeWidth: l, className: "react-flow__edge-interaction" }) : null, r && Ee(t) && Ee(n) ? N(Xp, { x: t, y: n, label: r, labelStyle: o, labelShowBg: i, labelBgStyle: s, labelBgPadding: a, labelBgBorderRadius: c }) : null] });
}
function di({ pos: e, x1: t, y1: n, x2: r, y2: o }) {
  return e === X.Left || e === X.Right ? [0.5 * (t + r), n] : [t, 0.5 * (n + o)];
}
function Gs({ sourceX: e, sourceY: t, sourcePosition: n = X.Bottom, targetX: r, targetY: o, targetPosition: i = X.Top }) {
  const [s, a] = di({
    pos: n,
    x1: e,
    y1: t,
    x2: r,
    y2: o
  }), [c, l] = di({
    pos: i,
    x1: r,
    y1: o,
    x2: e,
    y2: t
  }), [d, u, f, p] = hs({
    sourceX: e,
    sourceY: t,
    targetX: r,
    targetY: o,
    sourceControlX: s,
    sourceControlY: a,
    targetControlX: c,
    targetControlY: l
  });
  return [
    `M${e},${t} C${s},${a} ${c},${l} ${r},${o}`,
    d,
    u,
    f,
    p
  ];
}
function Us(e) {
  return le(({ id: t, sourceX: n, sourceY: r, targetX: o, targetY: i, sourcePosition: s, targetPosition: a, label: c, labelStyle: l, labelShowBg: d, labelBgStyle: u, labelBgPadding: f, labelBgBorderRadius: p, style: g, markerEnd: y, markerStart: x, interactionWidth: m }) => {
    const [v, h, w] = Gs({
      sourceX: n,
      sourceY: r,
      sourcePosition: s,
      targetX: o,
      targetY: i,
      targetPosition: a
    }), $ = e.isInternal ? void 0 : t;
    return N(Pn, { id: $, path: v, labelX: h, labelY: w, label: c, labelStyle: l, labelShowBg: d, labelBgStyle: u, labelBgPadding: f, labelBgBorderRadius: p, style: g, markerEnd: y, markerStart: x, interactionWidth: m });
  });
}
const Yp = Us({ isInternal: !1 }), Ks = Us({ isInternal: !0 });
Yp.displayName = "SimpleBezierEdge";
Ks.displayName = "SimpleBezierEdgeInternal";
function Zs(e) {
  return le(({ id: t, sourceX: n, sourceY: r, targetX: o, targetY: i, label: s, labelStyle: a, labelShowBg: c, labelBgStyle: l, labelBgPadding: d, labelBgBorderRadius: u, style: f, sourcePosition: p = X.Bottom, targetPosition: g = X.Top, markerEnd: y, markerStart: x, pathOptions: m, interactionWidth: v }) => {
    const [h, w, $] = dr({
      sourceX: n,
      sourceY: r,
      sourcePosition: p,
      targetX: o,
      targetY: i,
      targetPosition: g,
      borderRadius: m == null ? void 0 : m.borderRadius,
      offset: m == null ? void 0 : m.offset,
      stepPosition: m == null ? void 0 : m.stepPosition
    }), C = e.isInternal ? void 0 : t;
    return N(Pn, { id: C, path: h, labelX: w, labelY: $, label: s, labelStyle: a, labelShowBg: c, labelBgStyle: l, labelBgPadding: d, labelBgBorderRadius: u, style: f, markerEnd: y, markerStart: x, interactionWidth: v });
  });
}
const Qs = Zs({ isInternal: !1 }), Js = Zs({ isInternal: !0 });
Qs.displayName = "SmoothStepEdge";
Js.displayName = "SmoothStepEdgeInternal";
function ea(e) {
  return le(({ id: t, ...n }) => {
    var o;
    const r = e.isInternal ? void 0 : t;
    return N(Qs, { ...n, id: r, pathOptions: ve(() => {
      var i;
      return { borderRadius: 0, offset: (i = n.pathOptions) == null ? void 0 : i.offset };
    }, [(o = n.pathOptions) == null ? void 0 : o.offset]) });
  });
}
const qp = ea({ isInternal: !1 }), ta = ea({ isInternal: !0 });
qp.displayName = "StepEdge";
ta.displayName = "StepEdgeInternal";
function na(e) {
  return le(({ id: t, sourceX: n, sourceY: r, targetX: o, targetY: i, label: s, labelStyle: a, labelShowBg: c, labelBgStyle: l, labelBgPadding: d, labelBgBorderRadius: u, style: f, markerEnd: p, markerStart: g, interactionWidth: y }) => {
    const [x, m, v] = ys({ sourceX: n, sourceY: r, targetX: o, targetY: i }), h = e.isInternal ? void 0 : t;
    return N(Pn, { id: h, path: x, labelX: m, labelY: v, label: s, labelStyle: a, labelShowBg: c, labelBgStyle: l, labelBgPadding: d, labelBgBorderRadius: u, style: f, markerEnd: p, markerStart: g, interactionWidth: y });
  });
}
const Gp = na({ isInternal: !1 }), ra = na({ isInternal: !0 });
Gp.displayName = "StraightEdge";
ra.displayName = "StraightEdgeInternal";
function oa(e) {
  return le(({ id: t, sourceX: n, sourceY: r, targetX: o, targetY: i, sourcePosition: s = X.Bottom, targetPosition: a = X.Top, label: c, labelStyle: l, labelShowBg: d, labelBgStyle: u, labelBgPadding: f, labelBgBorderRadius: p, style: g, markerEnd: y, markerStart: x, pathOptions: m, interactionWidth: v }) => {
    const [h, w, $] = ps({
      sourceX: n,
      sourceY: r,
      sourcePosition: s,
      targetX: o,
      targetY: i,
      targetPosition: a,
      curvature: m == null ? void 0 : m.curvature
    }), C = e.isInternal ? void 0 : t;
    return N(Pn, { id: C, path: h, labelX: w, labelY: $, label: c, labelStyle: l, labelShowBg: d, labelBgStyle: u, labelBgPadding: f, labelBgBorderRadius: p, style: g, markerEnd: y, markerStart: x, interactionWidth: v });
  });
}
const Up = oa({ isInternal: !1 }), ia = oa({ isInternal: !0 });
Up.displayName = "BezierEdge";
ia.displayName = "BezierEdgeInternal";
const hi = {
  default: ia,
  straight: ra,
  step: ta,
  smoothstep: Js,
  simplebezier: Ks
}, pi = {
  sourceX: null,
  sourceY: null,
  targetX: null,
  targetY: null,
  sourcePosition: null,
  targetPosition: null
}, Kp = (e, t, n) => n === X.Left ? e - t : n === X.Right ? e + t : e, Zp = (e, t, n) => n === X.Top ? e - t : n === X.Bottom ? e + t : e, gi = "react-flow__edgeupdater";
function mi({ position: e, centerX: t, centerY: n, radius: r = 10, onMouseDown: o, onMouseEnter: i, onMouseOut: s, type: a }) {
  return N("circle", { onMouseDown: o, onMouseEnter: i, onMouseOut: s, className: fe([gi, `${gi}-${a}`]), cx: Kp(t, r, e), cy: Zp(n, r, e), r, stroke: "transparent", fill: "transparent" });
}
function Qp({ isReconnectable: e, reconnectRadius: t, edge: n, sourceX: r, sourceY: o, targetX: i, targetY: s, sourcePosition: a, targetPosition: c, onReconnect: l, onReconnectStart: d, onReconnectEnd: u, setReconnecting: f, setUpdateHover: p }) {
  const g = ce(), y = (w, $) => {
    if (w.button !== 0)
      return;
    const { autoPanOnConnect: C, domNode: M, connectionMode: T, connectionRadius: A, lib: R, onConnectStart: z, cancelConnection: I, nodeLookup: H, rfId: b, panBy: O, updateConnection: _ } = g.getState(), k = $.type === "target", E = (L, D) => {
      f(!1), u == null || u(L, n, $.type, D);
    }, S = (L) => l == null ? void 0 : l(n, L), P = (L, D) => {
      f(!0), d == null || d(w, n, $.type), z == null || z(L, D);
    };
    gr.onPointerDown(w.nativeEvent, {
      autoPanOnConnect: C,
      connectionMode: T,
      connectionRadius: A,
      domNode: M,
      handleId: $.id,
      nodeId: $.nodeId,
      nodeLookup: H,
      isTarget: k,
      edgeUpdaterType: $.type,
      lib: R,
      flowId: b,
      cancelConnection: I,
      panBy: O,
      isValidConnection: (...L) => {
        var D, j;
        return ((j = (D = g.getState()).isValidConnection) == null ? void 0 : j.call(D, ...L)) ?? !0;
      },
      onConnect: S,
      onConnectStart: P,
      onConnectEnd: (...L) => {
        var D, j;
        return (j = (D = g.getState()).onConnectEnd) == null ? void 0 : j.call(D, ...L);
      },
      onReconnectEnd: E,
      updateConnection: _,
      getTransform: () => g.getState().transform,
      getFromHandle: () => g.getState().connection.fromHandle,
      dragThreshold: g.getState().connectionDragThreshold,
      handleDomNode: w.currentTarget
    });
  }, x = (w) => y(w, { nodeId: n.target, id: n.targetHandle ?? null, type: "target" }), m = (w) => y(w, { nodeId: n.source, id: n.sourceHandle ?? null, type: "source" }), v = () => p(!0), h = () => p(!1);
  return J(he, { children: [(e === !0 || e === "source") && N(mi, { position: a, centerX: r, centerY: o, radius: t, onMouseDown: x, onMouseEnter: v, onMouseOut: h, type: "source" }), (e === !0 || e === "target") && N(mi, { position: c, centerX: i, centerY: s, radius: t, onMouseDown: m, onMouseEnter: v, onMouseOut: h, type: "target" })] });
}
function Jp({ id: e, edgesFocusable: t, edgesReconnectable: n, elementsSelectable: r, onClick: o, onDoubleClick: i, onContextMenu: s, onMouseEnter: a, onMouseMove: c, onMouseLeave: l, reconnectRadius: d, onReconnect: u, onReconnectStart: f, onReconnectEnd: p, rfId: g, edgeTypes: y, noPanClassName: x, onError: m, disableKeyboardA11y: v }) {
  let h = te((Z) => Z.edgeLookup.get(e));
  const w = te((Z) => Z.defaultEdgeOptions);
  h = w ? { ...w, ...h } : h;
  let $ = h.type || "default", C = (y == null ? void 0 : y[$]) || hi[$];
  C === void 0 && (m == null || m("011", $e.error011($)), $ = "default", C = (y == null ? void 0 : y.default) || hi.default);
  const M = !!(h.focusable || t && typeof h.focusable > "u"), T = typeof u < "u" && (h.reconnectable || n && typeof h.reconnectable > "u"), A = !!(h.selectable || r && typeof h.selectable > "u"), R = re(null), [z, I] = ue(!1), [H, b] = ue(!1), O = ce(), { zIndex: _, sourceX: k, sourceY: E, targetX: S, targetY: P, sourcePosition: L, targetPosition: D } = te(me((Z) => {
    const K = Z.nodeLookup.get(h.source), ie = Z.nodeLookup.get(h.target);
    if (!K || !ie)
      return {
        zIndex: h.zIndex,
        ...pi
      };
    const se = Vd({
      id: e,
      sourceNode: K,
      targetNode: ie,
      sourceHandle: h.sourceHandle || null,
      targetHandle: h.targetHandle || null,
      connectionMode: Z.connectionMode,
      onError: m
    });
    return {
      zIndex: Ad({
        selected: h.selected,
        zIndex: h.zIndex,
        sourceNode: K,
        targetNode: ie,
        elevateOnSelect: Z.elevateEdgesOnSelect,
        zIndexMode: Z.zIndexMode
      }),
      ...se || pi
    };
  }, [h.source, h.target, h.sourceHandle, h.targetHandle, h.selected, h.zIndex]), ae), j = ve(() => h.markerStart ? `url('#${hr(h.markerStart, g)}')` : void 0, [h.markerStart, g]), B = ve(() => h.markerEnd ? `url('#${hr(h.markerEnd, g)}')` : void 0, [h.markerEnd, g]);
  if (h.hidden || k === null || E === null || S === null || P === null)
    return null;
  const W = (Z) => {
    var ne;
    const { addSelectedEdges: K, unselectNodesAndEdges: ie, multiSelectionActive: se } = O.getState();
    A && (O.setState({ nodesSelectionActive: !1 }), h.selected && se ? (ie({ nodes: [], edges: [h] }), (ne = R.current) == null || ne.blur()) : K([e])), o && o(Z, h);
  }, Y = i ? (Z) => {
    i(Z, { ...h });
  } : void 0, G = s ? (Z) => {
    s(Z, { ...h });
  } : void 0, V = a ? (Z) => {
    a(Z, { ...h });
  } : void 0, U = c ? (Z) => {
    c(Z, { ...h });
  } : void 0, ee = l ? (Z) => {
    l(Z, { ...h });
  } : void 0, Q = (Z) => {
    var K;
    if (!v && Ji.includes(Z.key) && A) {
      const { unselectNodesAndEdges: ie, addSelectedEdges: se } = O.getState();
      Z.key === "Escape" ? ((K = R.current) == null || K.blur(), ie({ edges: [h] })) : se([e]);
    }
  };
  return N("svg", { style: { zIndex: _ }, children: J("g", { className: fe([
    "react-flow__edge",
    `react-flow__edge-${$}`,
    h.className,
    x,
    {
      selected: h.selected,
      animated: h.animated,
      inactive: !A && !o,
      updating: z,
      selectable: A
    }
  ]), onClick: W, onDoubleClick: Y, onContextMenu: G, onMouseEnter: V, onMouseMove: U, onMouseLeave: ee, onKeyDown: M ? Q : void 0, tabIndex: M ? 0 : void 0, role: h.ariaRole ?? (M ? "group" : "img"), "aria-roledescription": "edge", "data-id": e, "data-testid": `rf__edge-${e}`, "aria-label": h.ariaLabel === null ? void 0 : h.ariaLabel || `Edge from ${h.source} to ${h.target}`, "aria-describedby": M ? `${Ts}-${g}` : void 0, ref: R, ...h.domAttributes, children: [!H && N(C, { id: e, source: h.source, target: h.target, type: h.type, selected: h.selected, animated: h.animated, selectable: A, deletable: h.deletable ?? !0, label: h.label, labelStyle: h.labelStyle, labelShowBg: h.labelShowBg, labelBgStyle: h.labelBgStyle, labelBgPadding: h.labelBgPadding, labelBgBorderRadius: h.labelBgBorderRadius, sourceX: k, sourceY: E, targetX: S, targetY: P, sourcePosition: L, targetPosition: D, data: h.data, style: h.style, sourceHandleId: h.sourceHandle, targetHandleId: h.targetHandle, markerStart: j, markerEnd: B, pathOptions: "pathOptions" in h ? h.pathOptions : void 0, interactionWidth: h.interactionWidth }), T && N(Qp, { edge: h, isReconnectable: T, reconnectRadius: d, onReconnect: u, onReconnectStart: f, onReconnectEnd: p, sourceX: k, sourceY: E, targetX: S, targetY: P, sourcePosition: L, targetPosition: D, setUpdateHover: I, setReconnecting: b })] }) });
}
var eg = le(Jp);
const tg = (e) => ({
  edgesFocusable: e.edgesFocusable,
  edgesReconnectable: e.edgesReconnectable,
  elementsSelectable: e.elementsSelectable,
  connectionMode: e.connectionMode,
  onError: e.onError
});
function sa({ defaultMarkerColor: e, onlyRenderVisibleElements: t, rfId: n, edgeTypes: r, noPanClassName: o, onReconnect: i, onEdgeContextMenu: s, onEdgeMouseEnter: a, onEdgeMouseMove: c, onEdgeMouseLeave: l, onEdgeClick: d, reconnectRadius: u, onEdgeDoubleClick: f, onReconnectStart: p, onReconnectEnd: g, disableKeyboardA11y: y }) {
  const { edgesFocusable: x, edgesReconnectable: m, elementsSelectable: v, onError: h } = te(tg, ae), w = Rp(t);
  return J("div", { className: "react-flow__edges", children: [N(Fp, { defaultColor: e, rfId: n }), w.map(($) => N(eg, { id: $, edgesFocusable: x, edgesReconnectable: m, elementsSelectable: v, noPanClassName: o, onReconnect: i, onContextMenu: s, onMouseEnter: a, onMouseMove: c, onMouseLeave: l, onClick: d, reconnectRadius: u, onDoubleClick: f, onReconnectStart: p, onReconnectEnd: g, rfId: n, onError: h, edgeTypes: r, disableKeyboardA11y: y }, $))] });
}
sa.displayName = "EdgeRenderer";
const ng = le(sa), rg = (e) => `translate(${e.transform[0]}px,${e.transform[1]}px) scale(${e.transform[2]})`;
function og({ children: e }) {
  const t = te(rg);
  return N("div", { className: "react-flow__viewport xyflow__viewport react-flow__container", style: { transform: t }, children: e });
}
function ig(e) {
  const t = $n(), n = re(!1);
  oe(() => {
    !n.current && t.viewportInitialized && e && (setTimeout(() => e(t), 1), n.current = !0);
  }, [e, t.viewportInitialized]);
}
const sg = (e) => {
  var t;
  return (t = e.panZoom) == null ? void 0 : t.syncViewport;
};
function ag(e) {
  const t = te(sg), n = ce();
  return oe(() => {
    e && (t == null || t(e), n.setState({ transform: [e.x, e.y, e.zoom] }));
  }, [e, t]), null;
}
function cg(e) {
  return e.connection.inProgress ? { ...e.connection, to: Ht(e.connection.to, e.transform) } : { ...e.connection };
}
function lg(e) {
  return cg;
}
function ug(e) {
  const t = lg();
  return te(t, ae);
}
const fg = (e) => ({
  nodesConnectable: e.nodesConnectable,
  isValid: e.connection.isValid,
  inProgress: e.connection.inProgress,
  width: e.width,
  height: e.height
});
function dg({ containerStyle: e, style: t, type: n, component: r }) {
  const { nodesConnectable: o, width: i, height: s, isValid: a, inProgress: c } = te(fg, ae);
  return !(i && o && c) ? null : N("svg", { style: e, width: i, height: s, className: "react-flow__connectionline react-flow__container", children: N("g", { className: fe(["react-flow__connection", ns(a)]), children: N(aa, { style: t, type: n, CustomComponent: r, isValid: a }) }) });
}
const aa = ({ style: e, type: t = He.Bezier, CustomComponent: n, isValid: r }) => {
  const { inProgress: o, from: i, fromNode: s, fromHandle: a, fromPosition: c, to: l, toNode: d, toHandle: u, toPosition: f, pointer: p } = ug();
  if (!o)
    return;
  if (n)
    return N(n, { connectionLineType: t, connectionLineStyle: e, fromNode: s, fromHandle: a, fromX: i.x, fromY: i.y, toX: l.x, toY: l.y, fromPosition: c, toPosition: f, connectionStatus: ns(r), toNode: d, toHandle: u, pointer: p });
  let g = "";
  const y = {
    sourceX: i.x,
    sourceY: i.y,
    sourcePosition: c,
    targetX: l.x,
    targetY: l.y,
    targetPosition: f
  };
  switch (t) {
    case He.Bezier:
      [g] = ps(y);
      break;
    case He.SimpleBezier:
      [g] = Gs(y);
      break;
    case He.Step:
      [g] = dr({
        ...y,
        borderRadius: 0
      });
      break;
    case He.SmoothStep:
      [g] = dr(y);
      break;
    default:
      [g] = ys(y);
  }
  return N("path", { d: g, fill: "none", className: "react-flow__connection-path", style: e });
};
aa.displayName = "ConnectionLine";
const hg = {};
function yi(e = hg) {
  re(e), ce(), oe(() => {
  }, [e]);
}
function pg() {
  ce(), re(!1), oe(() => {
  }, []);
}
function ca({ nodeTypes: e, edgeTypes: t, onInit: n, onNodeClick: r, onEdgeClick: o, onNodeDoubleClick: i, onEdgeDoubleClick: s, onNodeMouseEnter: a, onNodeMouseMove: c, onNodeMouseLeave: l, onNodeContextMenu: d, onSelectionContextMenu: u, onSelectionStart: f, onSelectionEnd: p, connectionLineType: g, connectionLineStyle: y, connectionLineComponent: x, connectionLineContainerStyle: m, selectionKeyCode: v, selectionOnDrag: h, selectionMode: w, multiSelectionKeyCode: $, panActivationKeyCode: C, zoomActivationKeyCode: M, deleteKeyCode: T, onlyRenderVisibleElements: A, elementsSelectable: R, defaultViewport: z, translateExtent: I, minZoom: H, maxZoom: b, preventScrolling: O, defaultMarkerColor: _, zoomOnScroll: k, zoomOnPinch: E, panOnScroll: S, panOnScrollSpeed: P, panOnScrollMode: L, zoomOnDoubleClick: D, panOnDrag: j, onPaneClick: B, onPaneMouseEnter: W, onPaneMouseMove: Y, onPaneMouseLeave: G, onPaneScroll: V, onPaneContextMenu: U, paneClickDistance: ee, nodeClickDistance: Q, onEdgeContextMenu: Z, onEdgeMouseEnter: K, onEdgeMouseMove: ie, onEdgeMouseLeave: se, reconnectRadius: ne, onReconnect: ge, onReconnectStart: Ae, onReconnectEnd: Pe, noDragClassName: je, noWheelClassName: dt, noPanClassName: ht, disableKeyboardA11y: pt, nodeExtent: Hn, rfId: Bt, viewport: Qe, onViewportChange: gt }) {
  return yi(e), yi(t), pg(), ig(n), ag(Qe), N(Mp, { onPaneClick: B, onPaneMouseEnter: W, onPaneMouseMove: Y, onPaneMouseLeave: G, onPaneContextMenu: U, onPaneScroll: V, paneClickDistance: ee, deleteKeyCode: T, selectionKeyCode: v, selectionOnDrag: h, selectionMode: w, onSelectionStart: f, onSelectionEnd: p, multiSelectionKeyCode: $, panActivationKeyCode: C, zoomActivationKeyCode: M, elementsSelectable: R, zoomOnScroll: k, zoomOnPinch: E, zoomOnDoubleClick: D, panOnScroll: S, panOnScrollSpeed: P, panOnScrollMode: L, panOnDrag: j, defaultViewport: z, translateExtent: I, minZoom: H, maxZoom: b, onSelectionContextMenu: u, preventScrolling: O, noDragClassName: je, noWheelClassName: dt, noPanClassName: ht, disableKeyboardA11y: pt, onViewportChange: gt, isControlledViewport: !!Qe, children: J(og, { children: [N(ng, { edgeTypes: t, onEdgeClick: o, onEdgeDoubleClick: s, onReconnect: ge, onReconnectStart: Ae, onReconnectEnd: Pe, onlyRenderVisibleElements: A, onEdgeContextMenu: Z, onEdgeMouseEnter: K, onEdgeMouseMove: ie, onEdgeMouseLeave: se, reconnectRadius: ne, defaultMarkerColor: _, noPanClassName: ht, disableKeyboardA11y: pt, rfId: Bt }), N(dg, { style: y, type: g, component: x, containerStyle: m }), N("div", { className: "react-flow__edgelabel-renderer" }), N(Hp, { nodeTypes: e, onNodeClick: r, onNodeDoubleClick: i, onNodeMouseEnter: a, onNodeMouseMove: c, onNodeMouseLeave: l, onNodeContextMenu: d, nodeClickDistance: Q, onlyRenderVisibleElements: A, noPanClassName: ht, noDragClassName: je, disableKeyboardA11y: pt, nodeExtent: Hn, rfId: Bt }), N("div", { className: "react-flow__viewport-portal" })] }) });
}
ca.displayName = "GraphView";
const gg = le(ca), xi = ({ nodes: e, edges: t, defaultNodes: n, defaultEdges: r, width: o, height: i, fitView: s, fitViewOptions: a, minZoom: c = 0.5, maxZoom: l = 2, nodeOrigin: d, nodeExtent: u, zIndexMode: f = "basic" } = {}) => {
  const p = /* @__PURE__ */ new Map(), g = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map(), x = /* @__PURE__ */ new Map(), m = r ?? t ?? [], v = n ?? e ?? [], h = d ?? [0, 0], w = u ?? kt;
  vs(y, x, m);
  const $ = pr(v, p, g, {
    nodeOrigin: h,
    nodeExtent: w,
    zIndexMode: f
  });
  let C = [0, 0, 1];
  if (s && o && i) {
    const M = Lt(p, {
      filter: (z) => !!((z.width || z.initialWidth) && (z.height || z.initialHeight))
    }), { x: T, y: A, zoom: R } = Vr(M, o, i, c, l, (a == null ? void 0 : a.padding) ?? 0.1);
    C = [T, A, R];
  }
  return {
    rfId: "1",
    width: o ?? 0,
    height: i ?? 0,
    transform: C,
    nodes: v,
    nodesInitialized: $,
    nodeLookup: p,
    parentLookup: g,
    edges: m,
    edgeLookup: x,
    connectionLookup: y,
    onNodesChange: null,
    onEdgesChange: null,
    hasDefaultNodes: n !== void 0,
    hasDefaultEdges: r !== void 0,
    panZoom: null,
    minZoom: c,
    maxZoom: l,
    translateExtent: kt,
    nodeExtent: w,
    nodesSelectionActive: !1,
    userSelectionActive: !1,
    userSelectionRect: null,
    connectionMode: st.Strict,
    domNode: null,
    paneDragging: !1,
    noPanClassName: "nopan",
    nodeOrigin: h,
    nodeDragThreshold: 1,
    connectionDragThreshold: 1,
    snapGrid: [15, 15],
    snapToGrid: !1,
    nodesDraggable: !0,
    nodesConnectable: !0,
    nodesFocusable: !0,
    edgesFocusable: !0,
    edgesReconnectable: !0,
    elementsSelectable: !0,
    elevateNodesOnSelect: !0,
    elevateEdgesOnSelect: !0,
    selectNodesOnDrag: !0,
    multiSelectionActive: !1,
    fitViewQueued: s ?? !1,
    fitViewOptions: a,
    fitViewResolver: null,
    connection: { ...ts },
    connectionClickStartHandle: null,
    connectOnClick: !0,
    ariaLiveMessage: "",
    autoPanOnConnect: !0,
    autoPanOnNodeDrag: !0,
    autoPanOnNodeFocus: !0,
    autoPanSpeed: 15,
    connectionRadius: 20,
    onError: Md,
    isValidConnection: void 0,
    onSelectionChangeHandlers: [],
    lib: "react",
    debug: !1,
    ariaLabelConfig: es,
    zIndexMode: f,
    onNodesChangeMiddlewareMap: /* @__PURE__ */ new Map(),
    onEdgesChangeMiddlewareMap: /* @__PURE__ */ new Map()
  };
}, mg = ({ nodes: e, edges: t, defaultNodes: n, defaultEdges: r, width: o, height: i, fitView: s, fitViewOptions: a, minZoom: c, maxZoom: l, nodeOrigin: d, nodeExtent: u, zIndexMode: f }) => Ih((p, g) => {
  async function y() {
    const { nodeLookup: x, panZoom: m, fitViewOptions: v, fitViewResolver: h, width: w, height: $, minZoom: C, maxZoom: M } = g();
    m && (await Cd({
      nodes: x,
      width: w,
      height: $,
      panZoom: m,
      minZoom: C,
      maxZoom: M
    }, v), h == null || h.resolve(!0), p({ fitViewResolver: null }));
  }
  return {
    ...xi({
      nodes: e,
      edges: t,
      width: o,
      height: i,
      fitView: s,
      fitViewOptions: a,
      minZoom: c,
      maxZoom: l,
      nodeOrigin: d,
      nodeExtent: u,
      defaultNodes: n,
      defaultEdges: r,
      zIndexMode: f
    }),
    setNodes: (x) => {
      const { nodeLookup: m, parentLookup: v, nodeOrigin: h, elevateNodesOnSelect: w, fitViewQueued: $, zIndexMode: C } = g(), M = pr(x, m, v, {
        nodeOrigin: h,
        nodeExtent: u,
        elevateNodesOnSelect: w,
        checkEquality: !0,
        zIndexMode: C
      });
      $ && M ? (y(), p({ nodes: x, nodesInitialized: M, fitViewQueued: !1, fitViewOptions: void 0 })) : p({ nodes: x, nodesInitialized: M });
    },
    setEdges: (x) => {
      const { connectionLookup: m, edgeLookup: v } = g();
      vs(m, v, x), p({ edges: x });
    },
    setDefaultNodesAndEdges: (x, m) => {
      if (x) {
        const { setNodes: v } = g();
        v(x), p({ hasDefaultNodes: !0 });
      }
      if (m) {
        const { setEdges: v } = g();
        v(m), p({ hasDefaultEdges: !0 });
      }
    },
    /*
     * Every node gets registerd at a ResizeObserver. Whenever a node
     * changes its dimensions, this function is called to measure the
     * new dimensions and update the nodes.
     */
    updateNodeInternals: (x) => {
      const { triggerNodeChanges: m, nodeLookup: v, parentLookup: h, domNode: w, nodeOrigin: $, nodeExtent: C, debug: M, fitViewQueued: T, zIndexMode: A } = g(), { changes: R, updatedInternals: z } = Kd(x, v, h, w, $, C, A);
      z && (Yd(v, h, { nodeOrigin: $, nodeExtent: C, zIndexMode: A }), T ? (y(), p({ fitViewQueued: !1, fitViewOptions: void 0 })) : p({}), (R == null ? void 0 : R.length) > 0 && (M && console.log("React Flow: trigger node changes", R), m == null || m(R)));
    },
    updateNodePositions: (x, m = !1) => {
      const v = [];
      let h = [];
      const { nodeLookup: w, triggerNodeChanges: $, connection: C, updateConnection: M, onNodesChangeMiddlewareMap: T } = g();
      for (const [A, R] of x) {
        const z = w.get(A), I = !!(z != null && z.expandParent && (z != null && z.parentId) && (R != null && R.position)), H = {
          id: A,
          type: "position",
          position: I ? {
            x: Math.max(0, R.position.x),
            y: Math.max(0, R.position.y)
          } : R.position,
          dragging: m
        };
        if (z && C.inProgress && C.fromNode.id === z.id) {
          const b = Ue(z, C.fromHandle, X.Left, !0);
          M({ ...C, from: b });
        }
        I && z.parentId && v.push({
          id: A,
          parentId: z.parentId,
          rect: {
            ...R.internals.positionAbsolute,
            width: R.measured.width ?? 0,
            height: R.measured.height ?? 0
          }
        }), h.push(H);
      }
      if (v.length > 0) {
        const { parentLookup: A, nodeOrigin: R } = g(), z = Gr(v, w, A, R);
        h.push(...z);
      }
      for (const A of T.values())
        h = A(h);
      $(h);
    },
    triggerNodeChanges: (x) => {
      const { onNodesChange: m, setNodes: v, nodes: h, hasDefaultNodes: w, debug: $ } = g();
      if (x != null && x.length) {
        if (w) {
          const C = Ds(x, h);
          v(C);
        }
        $ && console.log("React Flow: trigger node changes", x), m == null || m(x);
      }
    },
    triggerEdgeChanges: (x) => {
      const { onEdgesChange: m, setEdges: v, edges: h, hasDefaultEdges: w, debug: $ } = g();
      if (x != null && x.length) {
        if (w) {
          const C = Hs(x, h);
          v(C);
        }
        $ && console.log("React Flow: trigger edge changes", x), m == null || m(x);
      }
    },
    addSelectedNodes: (x) => {
      const { multiSelectionActive: m, edgeLookup: v, nodeLookup: h, triggerNodeChanges: w, triggerEdgeChanges: $ } = g();
      if (m) {
        const C = x.map((M) => Ve(M, !0));
        w(C);
        return;
      }
      w(tt(h, /* @__PURE__ */ new Set([...x]), !0)), $(tt(v));
    },
    addSelectedEdges: (x) => {
      const { multiSelectionActive: m, edgeLookup: v, nodeLookup: h, triggerNodeChanges: w, triggerEdgeChanges: $ } = g();
      if (m) {
        const C = x.map((M) => Ve(M, !0));
        $(C);
        return;
      }
      $(tt(v, /* @__PURE__ */ new Set([...x]))), w(tt(h, /* @__PURE__ */ new Set(), !0));
    },
    unselectNodesAndEdges: ({ nodes: x, edges: m } = {}) => {
      const { edges: v, nodes: h, nodeLookup: w, triggerNodeChanges: $, triggerEdgeChanges: C } = g(), M = x || h, T = m || v, A = [];
      for (const z of M) {
        if (!z.selected)
          continue;
        const I = w.get(z.id);
        I && (I.selected = !1), A.push(Ve(z.id, !1));
      }
      const R = [];
      for (const z of T)
        z.selected && R.push(Ve(z.id, !1));
      $(A), C(R);
    },
    setMinZoom: (x) => {
      const { panZoom: m, maxZoom: v } = g();
      m == null || m.setScaleExtent([x, v]), p({ minZoom: x });
    },
    setMaxZoom: (x) => {
      const { panZoom: m, minZoom: v } = g();
      m == null || m.setScaleExtent([v, x]), p({ maxZoom: x });
    },
    setTranslateExtent: (x) => {
      var m;
      (m = g().panZoom) == null || m.setTranslateExtent(x), p({ translateExtent: x });
    },
    resetSelectedElements: () => {
      const { edges: x, nodes: m, triggerNodeChanges: v, triggerEdgeChanges: h, elementsSelectable: w } = g();
      if (!w)
        return;
      const $ = m.reduce((M, T) => T.selected ? [...M, Ve(T.id, !1)] : M, []), C = x.reduce((M, T) => T.selected ? [...M, Ve(T.id, !1)] : M, []);
      v($), h(C);
    },
    setNodeExtent: (x) => {
      const { nodes: m, nodeLookup: v, parentLookup: h, nodeOrigin: w, elevateNodesOnSelect: $, nodeExtent: C, zIndexMode: M } = g();
      x[0][0] === C[0][0] && x[0][1] === C[0][1] && x[1][0] === C[1][0] && x[1][1] === C[1][1] || (pr(m, v, h, {
        nodeOrigin: w,
        nodeExtent: x,
        elevateNodesOnSelect: $,
        checkEquality: !1,
        zIndexMode: M
      }), p({ nodeExtent: x }));
    },
    panBy: (x) => {
      const { transform: m, width: v, height: h, panZoom: w, translateExtent: $ } = g();
      return Zd({ delta: x, panZoom: w, transform: m, translateExtent: $, width: v, height: h });
    },
    setCenter: async (x, m, v) => {
      const { width: h, height: w, maxZoom: $, panZoom: C } = g();
      if (!C)
        return Promise.resolve(!1);
      const M = typeof (v == null ? void 0 : v.zoom) < "u" ? v.zoom : $;
      return await C.setViewport({
        x: h / 2 - x * M,
        y: w / 2 - m * M,
        zoom: M
      }, { duration: v == null ? void 0 : v.duration, ease: v == null ? void 0 : v.ease, interpolate: v == null ? void 0 : v.interpolate }), Promise.resolve(!0);
    },
    cancelConnection: () => {
      p({
        connection: { ...ts }
      });
    },
    updateConnection: (x) => {
      p({ connection: x });
    },
    reset: () => p({ ...xi() })
  };
}, Object.is);
function yg({ initialNodes: e, initialEdges: t, defaultNodes: n, defaultEdges: r, initialWidth: o, initialHeight: i, initialMinZoom: s, initialMaxZoom: a, initialFitViewOptions: c, fitView: l, nodeOrigin: d, nodeExtent: u, zIndexMode: f, children: p }) {
  const [g] = ue(() => mg({
    nodes: e,
    edges: t,
    defaultNodes: n,
    defaultEdges: r,
    width: o,
    height: i,
    fitView: l,
    minZoom: s,
    maxZoom: a,
    fitViewOptions: c,
    nodeOrigin: d,
    nodeExtent: u,
    zIndexMode: f
  }));
  return N(Ah, { value: g, children: N(op, { children: p }) });
}
function xg({ children: e, nodes: t, edges: n, defaultNodes: r, defaultEdges: o, width: i, height: s, fitView: a, fitViewOptions: c, minZoom: l, maxZoom: d, nodeOrigin: u, nodeExtent: f, zIndexMode: p }) {
  return Ze(kn) ? N(he, { children: e }) : N(yg, { initialNodes: t, initialEdges: n, defaultNodes: r, defaultEdges: o, initialWidth: i, initialHeight: s, fitView: a, initialFitViewOptions: c, initialMinZoom: l, initialMaxZoom: d, nodeOrigin: u, nodeExtent: f, zIndexMode: p, children: e });
}
const wg = {
  width: "100%",
  height: "100%",
  overflow: "hidden",
  position: "relative",
  zIndex: 0
};
function vg({ nodes: e, edges: t, defaultNodes: n, defaultEdges: r, className: o, nodeTypes: i, edgeTypes: s, onNodeClick: a, onEdgeClick: c, onInit: l, onMove: d, onMoveStart: u, onMoveEnd: f, onConnect: p, onConnectStart: g, onConnectEnd: y, onClickConnectStart: x, onClickConnectEnd: m, onNodeMouseEnter: v, onNodeMouseMove: h, onNodeMouseLeave: w, onNodeContextMenu: $, onNodeDoubleClick: C, onNodeDragStart: M, onNodeDrag: T, onNodeDragStop: A, onNodesDelete: R, onEdgesDelete: z, onDelete: I, onSelectionChange: H, onSelectionDragStart: b, onSelectionDrag: O, onSelectionDragStop: _, onSelectionContextMenu: k, onSelectionStart: E, onSelectionEnd: S, onBeforeDelete: P, connectionMode: L, connectionLineType: D = He.Bezier, connectionLineStyle: j, connectionLineComponent: B, connectionLineContainerStyle: W, deleteKeyCode: Y = "Backspace", selectionKeyCode: G = "Shift", selectionOnDrag: V = !1, selectionMode: U = Ct.Full, panActivationKeyCode: ee = "Space", multiSelectionKeyCode: Q = Mt() ? "Meta" : "Control", zoomActivationKeyCode: Z = Mt() ? "Meta" : "Control", snapToGrid: K, snapGrid: ie, onlyRenderVisibleElements: se = !1, selectNodesOnDrag: ne, nodesDraggable: ge, autoPanOnNodeFocus: Ae, nodesConnectable: Pe, nodesFocusable: je, nodeOrigin: dt = As, edgesFocusable: ht, edgesReconnectable: pt, elementsSelectable: Hn = !0, defaultViewport: Bt = Gh, minZoom: Qe = 0.5, maxZoom: gt = 2, translateExtent: oo = kt, preventScrolling: va = !0, nodeExtent: Rn, defaultMarkerColor: ba = "#b1b1b7", zoomOnScroll: _a = !0, zoomOnPinch: Ea = !0, panOnScroll: Na = !1, panOnScrollSpeed: Sa = 0.5, panOnScrollMode: ka = Xe.Free, zoomOnDoubleClick: Ca = !0, panOnDrag: $a = !0, onPaneClick: Ma, onPaneMouseEnter: Pa, onPaneMouseMove: za, onPaneMouseLeave: Oa, onPaneScroll: Ia, onPaneContextMenu: Ta, paneClickDistance: Aa = 1, nodeClickDistance: La = 0, children: Da, onReconnect: Ha, onReconnectStart: Ra, onReconnectEnd: ja, onEdgeContextMenu: Ba, onEdgeDoubleClick: Va, onEdgeMouseEnter: Wa, onEdgeMouseMove: Fa, onEdgeMouseLeave: Xa, reconnectRadius: Ya = 10, onNodesChange: qa, onEdgesChange: Ga, noDragClassName: Ua = "nodrag", noWheelClassName: Ka = "nowheel", noPanClassName: io = "nopan", fitView: so, fitViewOptions: ao, connectOnClick: Za, attributionPosition: Qa, proOptions: Ja, defaultEdgeOptions: ec, elevateNodesOnSelect: tc = !0, elevateEdgesOnSelect: nc = !1, disableKeyboardA11y: co = !1, autoPanOnConnect: rc, autoPanOnNodeDrag: oc, autoPanSpeed: ic, connectionRadius: sc, isValidConnection: ac, onError: cc, style: lc, id: lo, nodeDragThreshold: uc, connectionDragThreshold: fc, viewport: dc, onViewportChange: hc, width: pc, height: gc, colorMode: mc = "light", debug: yc, onScroll: Vt, ariaLabelConfig: xc, zIndexMode: uo = "basic", ...wc }, vc) {
  const jn = lo || "1", bc = Qh(mc), _c = me((fo) => {
    fo.currentTarget.scrollTo({ top: 0, left: 0, behavior: "instant" }), Vt == null || Vt(fo);
  }, [Vt]);
  return N("div", { "data-testid": "rf__wrapper", ...wc, onScroll: _c, style: { ...lc, ...wg }, ref: vc, className: fe(["react-flow", o, bc]), id: lo, role: "application", children: J(xg, { nodes: e, edges: t, width: pc, height: gc, fitView: so, fitViewOptions: ao, minZoom: Qe, maxZoom: gt, nodeOrigin: dt, nodeExtent: Rn, zIndexMode: uo, children: [N(gg, { onInit: l, onNodeClick: a, onEdgeClick: c, onNodeMouseEnter: v, onNodeMouseMove: h, onNodeMouseLeave: w, onNodeContextMenu: $, onNodeDoubleClick: C, nodeTypes: i, edgeTypes: s, connectionLineType: D, connectionLineStyle: j, connectionLineComponent: B, connectionLineContainerStyle: W, selectionKeyCode: G, selectionOnDrag: V, selectionMode: U, deleteKeyCode: Y, multiSelectionKeyCode: Q, panActivationKeyCode: ee, zoomActivationKeyCode: Z, onlyRenderVisibleElements: se, defaultViewport: Bt, translateExtent: oo, minZoom: Qe, maxZoom: gt, preventScrolling: va, zoomOnScroll: _a, zoomOnPinch: Ea, zoomOnDoubleClick: Ca, panOnScroll: Na, panOnScrollSpeed: Sa, panOnScrollMode: ka, panOnDrag: $a, onPaneClick: Ma, onPaneMouseEnter: Pa, onPaneMouseMove: za, onPaneMouseLeave: Oa, onPaneScroll: Ia, onPaneContextMenu: Ta, paneClickDistance: Aa, nodeClickDistance: La, onSelectionContextMenu: k, onSelectionStart: E, onSelectionEnd: S, onReconnect: Ha, onReconnectStart: Ra, onReconnectEnd: ja, onEdgeContextMenu: Ba, onEdgeDoubleClick: Va, onEdgeMouseEnter: Wa, onEdgeMouseMove: Fa, onEdgeMouseLeave: Xa, reconnectRadius: Ya, defaultMarkerColor: ba, noDragClassName: Ua, noWheelClassName: Ka, noPanClassName: io, rfId: jn, disableKeyboardA11y: co, nodeExtent: Rn, viewport: dc, onViewportChange: hc }), N(Zh, { nodes: e, edges: t, defaultNodes: n, defaultEdges: r, onConnect: p, onConnectStart: g, onConnectEnd: y, onClickConnectStart: x, onClickConnectEnd: m, nodesDraggable: ge, autoPanOnNodeFocus: Ae, nodesConnectable: Pe, nodesFocusable: je, edgesFocusable: ht, edgesReconnectable: pt, elementsSelectable: Hn, elevateNodesOnSelect: tc, elevateEdgesOnSelect: nc, minZoom: Qe, maxZoom: gt, nodeExtent: Rn, onNodesChange: qa, onEdgesChange: Ga, snapToGrid: K, snapGrid: ie, connectionMode: L, translateExtent: oo, connectOnClick: Za, defaultEdgeOptions: ec, fitView: so, fitViewOptions: ao, onNodesDelete: R, onEdgesDelete: z, onDelete: I, onNodeDragStart: M, onNodeDrag: T, onNodeDragStop: A, onSelectionDrag: O, onSelectionDragStart: b, onSelectionDragStop: _, onMove: d, onMoveStart: u, onMoveEnd: f, noPanClassName: io, nodeOrigin: dt, rfId: jn, autoPanOnConnect: rc, autoPanOnNodeDrag: oc, autoPanSpeed: ic, onError: cc, connectionRadius: sc, isValidConnection: ac, selectNodesOnDrag: ne, nodeDragThreshold: uc, connectionDragThreshold: fc, onBeforeDelete: P, debug: yc, ariaLabelConfig: xc, zIndexMode: uo }), N(qh, { onSelectionChange: H }), Da, N(Vh, { proOptions: Ja, position: Qa }), N(Bh, { rfId: jn, disableKeyboardA11y: co })] }) });
}
var bg = Rs(vg);
function _g({ dimensions: e, lineWidth: t, variant: n, className: r }) {
  return N("path", { strokeWidth: t, d: `M${e[0] / 2} 0 V${e[1]} M0 ${e[1] / 2} H${e[0]}`, className: fe(["react-flow__background-pattern", n, r]) });
}
function Eg({ radius: e, className: t }) {
  return N("circle", { cx: e, cy: e, r: e, className: fe(["react-flow__background-pattern", "dots", t]) });
}
var Re;
(function(e) {
  e.Lines = "lines", e.Dots = "dots", e.Cross = "cross";
})(Re || (Re = {}));
const Ng = {
  [Re.Dots]: 1,
  [Re.Lines]: 1,
  [Re.Cross]: 6
}, Sg = (e) => ({ transform: e.transform, patternId: `pattern-${e.rfId}` });
function la({
  id: e,
  variant: t = Re.Dots,
  // only used for dots and cross
  gap: n = 20,
  // only used for lines and cross
  size: r,
  lineWidth: o = 1,
  offset: i = 0,
  color: s,
  bgColor: a,
  style: c,
  className: l,
  patternClassName: d
}) {
  const u = re(null), { transform: f, patternId: p } = te(Sg, ae), g = r || Ng[t], y = t === Re.Dots, x = t === Re.Cross, m = Array.isArray(n) ? n : [n, n], v = [m[0] * f[2] || 1, m[1] * f[2] || 1], h = g * f[2], w = Array.isArray(i) ? i : [i, i], $ = x ? [h, h] : v, C = [
    w[0] * f[2] || 1 + $[0] / 2,
    w[1] * f[2] || 1 + $[1] / 2
  ], M = `${p}${e || ""}`;
  return J("svg", { className: fe(["react-flow__background", l]), style: {
    ...c,
    ...Mn,
    "--xy-background-color-props": a,
    "--xy-background-pattern-color-props": s
  }, ref: u, "data-testid": "rf__background", children: [N("pattern", { id: M, x: f[0] % v[0], y: f[1] % v[1], width: v[0], height: v[1], patternUnits: "userSpaceOnUse", patternTransform: `translate(-${C[0]},-${C[1]})`, children: y ? N(Eg, { radius: h / 2, className: d }) : N(_g, { dimensions: $, lineWidth: o, variant: t, className: d }) }), N("rect", { x: "0", y: "0", width: "100%", height: "100%", fill: `url(#${M})` })] });
}
la.displayName = "Background";
le(la);
function kg() {
  return N("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 32", children: N("path", { d: "M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z" }) });
}
function Cg() {
  return N("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 5", children: N("path", { d: "M0 0h32v4.2H0z" }) });
}
function $g() {
  return N("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 30", children: N("path", { d: "M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z" }) });
}
function Mg() {
  return N("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 25 32", children: N("path", { d: "M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z" }) });
}
function Pg() {
  return N("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 25 32", children: N("path", { d: "M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z" }) });
}
function Zt({ children: e, className: t, ...n }) {
  return N("button", { type: "button", className: fe(["react-flow__controls-button", t]), ...n, children: e });
}
const zg = (e) => ({
  isInteractive: e.nodesDraggable || e.nodesConnectable || e.elementsSelectable,
  minZoomReached: e.transform[2] <= e.minZoom,
  maxZoomReached: e.transform[2] >= e.maxZoom,
  ariaLabelConfig: e.ariaLabelConfig
});
function ua({ style: e, showZoom: t = !0, showFitView: n = !0, showInteractive: r = !0, fitViewOptions: o, onZoomIn: i, onZoomOut: s, onFitView: a, onInteractiveChange: c, className: l, children: d, position: u = "bottom-left", orientation: f = "vertical", "aria-label": p }) {
  const g = ce(), { isInteractive: y, minZoomReached: x, maxZoomReached: m, ariaLabelConfig: v } = te(zg, ae), { zoomIn: h, zoomOut: w, fitView: $ } = $n(), C = () => {
    h(), i == null || i();
  }, M = () => {
    w(), s == null || s();
  }, T = () => {
    $(o), a == null || a();
  }, A = () => {
    g.setState({
      nodesDraggable: !y,
      nodesConnectable: !y,
      elementsSelectable: !y
    }), c == null || c(!y);
  };
  return J(Cn, { className: fe(["react-flow__controls", f === "horizontal" ? "horizontal" : "vertical", l]), position: u, style: e, "data-testid": "rf__controls", "aria-label": p ?? v["controls.ariaLabel"], children: [t && J(he, { children: [N(Zt, { onClick: C, className: "react-flow__controls-zoomin", title: v["controls.zoomIn.ariaLabel"], "aria-label": v["controls.zoomIn.ariaLabel"], disabled: m, children: N(kg, {}) }), N(Zt, { onClick: M, className: "react-flow__controls-zoomout", title: v["controls.zoomOut.ariaLabel"], "aria-label": v["controls.zoomOut.ariaLabel"], disabled: x, children: N(Cg, {}) })] }), n && N(Zt, { className: "react-flow__controls-fitview", onClick: T, title: v["controls.fitView.ariaLabel"], "aria-label": v["controls.fitView.ariaLabel"], children: N($g, {}) }), r && N(Zt, { className: "react-flow__controls-interactive", onClick: A, title: v["controls.interactive.ariaLabel"], "aria-label": v["controls.interactive.ariaLabel"], children: y ? N(Pg, {}) : N(Mg, {}) }), d] });
}
ua.displayName = "Controls";
le(ua);
function Og({ id: e, x: t, y: n, width: r, height: o, style: i, color: s, strokeColor: a, strokeWidth: c, className: l, borderRadius: d, shapeRendering: u, selected: f, onClick: p }) {
  const { background: g, backgroundColor: y } = i || {}, x = s || g || y;
  return N("rect", { className: fe(["react-flow__minimap-node", { selected: f }, l]), x: t, y: n, rx: d, ry: d, width: r, height: o, style: {
    fill: x,
    stroke: a,
    strokeWidth: c
  }, shapeRendering: u, onClick: p ? (m) => p(m, e) : void 0 });
}
const Ig = le(Og), Tg = (e) => e.nodes.map((t) => t.id), Jn = (e) => e instanceof Function ? e : () => e;
function Ag({
  nodeStrokeColor: e,
  nodeColor: t,
  nodeClassName: n = "",
  nodeBorderRadius: r = 5,
  nodeStrokeWidth: o,
  /*
   * We need to rename the prop to be `CapitalCase` so that JSX will render it as
   * a component properly.
   */
  nodeComponent: i = Ig,
  onClick: s
}) {
  const a = te(Tg, ae), c = Jn(t), l = Jn(e), d = Jn(n), u = typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision";
  return N(he, { children: a.map((f) => (
    /*
     * The split of responsibilities between MiniMapNodes and
     * NodeComponentWrapper may appear weird. However, it’s designed to
     * minimize the cost of updates when individual nodes change.
     *
     * For more details, see a similar commit in `NodeRenderer/index.tsx`.
     */
    N(Dg, { id: f, nodeColorFunc: c, nodeStrokeColorFunc: l, nodeClassNameFunc: d, nodeBorderRadius: r, nodeStrokeWidth: o, NodeComponent: i, onClick: s, shapeRendering: u }, f)
  )) });
}
function Lg({ id: e, nodeColorFunc: t, nodeStrokeColorFunc: n, nodeClassNameFunc: r, nodeBorderRadius: o, nodeStrokeWidth: i, shapeRendering: s, NodeComponent: a, onClick: c }) {
  const { node: l, x: d, y: u, width: f, height: p } = te((g) => {
    const y = g.nodeLookup.get(e);
    if (!y)
      return { node: void 0, x: 0, y: 0, width: 0, height: 0 };
    const x = y.internals.userNode, { x: m, y: v } = y.internals.positionAbsolute, { width: h, height: w } = Te(x);
    return {
      node: x,
      x: m,
      y: v,
      width: h,
      height: w
    };
  }, ae);
  return !l || l.hidden || !cs(l) ? null : N(a, { x: d, y: u, width: f, height: p, style: l.style, selected: !!l.selected, className: r(l), color: t(l), borderRadius: o, strokeColor: n(l), strokeWidth: i, shapeRendering: s, onClick: c, id: l.id });
}
const Dg = le(Lg);
var Hg = le(Ag);
const Rg = 200, jg = 150, Bg = (e) => !e.hidden, Vg = (e) => {
  const t = {
    x: -e.transform[0] / e.transform[2],
    y: -e.transform[1] / e.transform[2],
    width: e.width / e.transform[2],
    height: e.height / e.transform[2]
  };
  return {
    viewBB: t,
    boundingRect: e.nodeLookup.size > 0 ? as(Lt(e.nodeLookup, { filter: Bg }), t) : t,
    rfId: e.rfId,
    panZoom: e.panZoom,
    translateExtent: e.translateExtent,
    flowWidth: e.width,
    flowHeight: e.height,
    ariaLabelConfig: e.ariaLabelConfig
  };
}, Wg = "react-flow__minimap-desc";
function fa({
  style: e,
  className: t,
  nodeStrokeColor: n,
  nodeColor: r,
  nodeClassName: o = "",
  nodeBorderRadius: i = 5,
  nodeStrokeWidth: s,
  /*
   * We need to rename the prop to be `CapitalCase` so that JSX will render it as
   * a component properly.
   */
  nodeComponent: a,
  bgColor: c,
  maskColor: l,
  maskStrokeColor: d,
  maskStrokeWidth: u,
  position: f = "bottom-right",
  onClick: p,
  onNodeClick: g,
  pannable: y = !1,
  zoomable: x = !1,
  ariaLabel: m,
  inversePan: v,
  zoomStep: h = 1,
  offsetScale: w = 5
}) {
  const $ = ce(), C = re(null), { boundingRect: M, viewBB: T, rfId: A, panZoom: R, translateExtent: z, flowWidth: I, flowHeight: H, ariaLabelConfig: b } = te(Vg, ae), O = (e == null ? void 0 : e.width) ?? Rg, _ = (e == null ? void 0 : e.height) ?? jg, k = M.width / O, E = M.height / _, S = Math.max(k, E), P = S * O, L = S * _, D = w * S, j = M.x - (P - M.width) / 2 - D, B = M.y - (L - M.height) / 2 - D, W = P + D * 2, Y = L + D * 2, G = `${Wg}-${A}`, V = re(0), U = re();
  V.current = S, oe(() => {
    if (C.current && R)
      return U.current = sh({
        domNode: C.current,
        panZoom: R,
        getTransform: () => $.getState().transform,
        getViewScale: () => V.current
      }), () => {
        var K;
        (K = U.current) == null || K.destroy();
      };
  }, [R]), oe(() => {
    var K;
    (K = U.current) == null || K.update({
      translateExtent: z,
      width: I,
      height: H,
      inversePan: v,
      pannable: y,
      zoomStep: h,
      zoomable: x
    });
  }, [y, x, v, h, z, I, H]);
  const ee = p ? (K) => {
    var ne;
    const [ie, se] = ((ne = U.current) == null ? void 0 : ne.pointer(K)) || [0, 0];
    p(K, { x: ie, y: se });
  } : void 0, Q = g ? me((K, ie) => {
    const se = $.getState().nodeLookup.get(ie).internals.userNode;
    g(K, se);
  }, []) : void 0, Z = m ?? b["minimap.ariaLabel"];
  return N(Cn, { position: f, style: {
    ...e,
    "--xy-minimap-background-color-props": typeof c == "string" ? c : void 0,
    "--xy-minimap-mask-background-color-props": typeof l == "string" ? l : void 0,
    "--xy-minimap-mask-stroke-color-props": typeof d == "string" ? d : void 0,
    "--xy-minimap-mask-stroke-width-props": typeof u == "number" ? u * S : void 0,
    "--xy-minimap-node-background-color-props": typeof r == "string" ? r : void 0,
    "--xy-minimap-node-stroke-color-props": typeof n == "string" ? n : void 0,
    "--xy-minimap-node-stroke-width-props": typeof s == "number" ? s : void 0
  }, className: fe(["react-flow__minimap", t]), "data-testid": "rf__minimap", children: J("svg", { width: O, height: _, viewBox: `${j} ${B} ${W} ${Y}`, className: "react-flow__minimap-svg", role: "img", "aria-labelledby": G, ref: C, onClick: ee, children: [Z && N("title", { id: G, children: Z }), N(Hg, { onClick: Q, nodeColor: r, nodeStrokeColor: n, nodeBorderRadius: i, nodeClassName: o, nodeStrokeWidth: s, nodeComponent: a }), N("path", { className: "react-flow__minimap-mask", d: `M${j - D},${B - D}h${W + D * 2}v${Y + D * 2}h${-W - D * 2}z
        M${T.x},${T.y}h${T.width}v${T.height}h${-T.width}z`, fillRule: "evenodd", pointerEvents: "none" })] }) });
}
fa.displayName = "MiniMap";
le(fa);
const Fg = (e) => (t) => e ? `${Math.max(1 / t.transform[2], 1)}` : void 0, Xg = {
  [ut.Line]: "right",
  [ut.Handle]: "bottom-right"
};
function Yg({ nodeId: e, position: t, variant: n = ut.Handle, className: r, style: o = void 0, children: i, color: s, minWidth: a = 10, minHeight: c = 10, maxWidth: l = Number.MAX_VALUE, maxHeight: d = Number.MAX_VALUE, keepAspectRatio: u = !1, resizeDirection: f, autoScale: p = !0, shouldResize: g, onResizeStart: y, onResize: x, onResizeEnd: m }) {
  const v = Ws(), h = typeof e == "string" ? e : v, w = ce(), $ = re(null), C = n === ut.Handle, M = te(me(Fg(C && p), [C, p]), ae), T = re(null), A = t ?? Xg[n];
  oe(() => {
    if (!(!$.current || !h))
      return T.current || (T.current = vh({
        domNode: $.current,
        nodeId: h,
        getStoreItems: () => {
          const { nodeLookup: z, transform: I, snapGrid: H, snapToGrid: b, nodeOrigin: O, domNode: _ } = w.getState();
          return {
            nodeLookup: z,
            transform: I,
            snapGrid: H,
            snapToGrid: b,
            nodeOrigin: O,
            paneDomNode: _
          };
        },
        onChange: (z, I) => {
          const { triggerNodeChanges: H, nodeLookup: b, parentLookup: O, nodeOrigin: _ } = w.getState(), k = [], E = { x: z.x, y: z.y }, S = b.get(h);
          if (S && S.expandParent && S.parentId) {
            const P = S.origin ?? _, L = z.width ?? S.measured.width ?? 0, D = z.height ?? S.measured.height ?? 0, j = {
              id: S.id,
              parentId: S.parentId,
              rect: {
                width: L,
                height: D,
                ...ls({
                  x: z.x ?? S.position.x,
                  y: z.y ?? S.position.y
                }, { width: L, height: D }, S.parentId, b, P)
              }
            }, B = Gr([j], b, O, _);
            k.push(...B), E.x = z.x ? Math.max(P[0] * L, z.x) : void 0, E.y = z.y ? Math.max(P[1] * D, z.y) : void 0;
          }
          if (E.x !== void 0 && E.y !== void 0) {
            const P = {
              id: h,
              type: "position",
              position: { ...E }
            };
            k.push(P);
          }
          if (z.width !== void 0 && z.height !== void 0) {
            const L = {
              id: h,
              type: "dimensions",
              resizing: !0,
              setAttributes: f ? f === "horizontal" ? "width" : "height" : !0,
              dimensions: {
                width: z.width,
                height: z.height
              }
            };
            k.push(L);
          }
          for (const P of I) {
            const L = {
              ...P,
              type: "position"
            };
            k.push(L);
          }
          H(k);
        },
        onEnd: ({ width: z, height: I }) => {
          const H = {
            id: h,
            type: "dimensions",
            resizing: !1,
            dimensions: {
              width: z,
              height: I
            }
          };
          w.getState().triggerNodeChanges([H]);
        }
      })), T.current.update({
        controlPosition: A,
        boundaries: {
          minWidth: a,
          minHeight: c,
          maxWidth: l,
          maxHeight: d
        },
        keepAspectRatio: u,
        resizeDirection: f,
        onResizeStart: y,
        onResize: x,
        onResizeEnd: m,
        shouldResize: g
      }), () => {
        var z;
        (z = T.current) == null || z.destroy();
      };
  }, [
    A,
    a,
    c,
    l,
    d,
    u,
    y,
    x,
    m,
    g
  ]);
  const R = A.split("-");
  return N("div", { className: fe(["react-flow__resize-control", "nodrag", ...R, n, r]), ref: $, style: {
    ...o,
    scale: M,
    ...s && { [C ? "backgroundColor" : "borderColor"]: s }
  }, children: i });
}
le(Yg);
var er = { exports: {} }, tr, wi;
function qg() {
  if (wi) return tr;
  wi = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return tr = e, tr;
}
var nr, vi;
function Gg() {
  if (vi) return nr;
  vi = 1;
  var e = /* @__PURE__ */ qg();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, nr = function() {
    function r(s, a, c, l, d, u) {
      if (u !== e) {
        var f = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw f.name = "Invariant Violation", f;
      }
    }
    r.isRequired = r;
    function o() {
      return r;
    }
    var i = {
      array: r,
      bigint: r,
      bool: r,
      func: r,
      number: r,
      object: r,
      string: r,
      symbol: r,
      any: r,
      arrayOf: o,
      element: r,
      elementType: r,
      instanceOf: o,
      node: r,
      objectOf: o,
      oneOf: o,
      oneOfType: o,
      shape: o,
      exact: o,
      checkPropTypes: n,
      resetWarningCache: t
    };
    return i.PropTypes = i, i;
  }, nr;
}
var bi;
function Ug() {
  return bi || (bi = 1, er.exports = /* @__PURE__ */ Gg()()), er.exports;
}
var Kg = /* @__PURE__ */ Ug();
const q = /* @__PURE__ */ Ms(Kg);
function yr() {
  return yr = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, yr.apply(this, arguments);
}
function Zg(e, t) {
  if (e == null) return {};
  var n = Qg(e, t), r, o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      r = i[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function Qg(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var Kr = de(function(e, t) {
  var n = e.color, r = n === void 0 ? "currentColor" : n, o = e.size, i = o === void 0 ? 24 : o, s = Zg(e, ["color", "size"]);
  return /* @__PURE__ */ F.createElement("svg", yr({
    ref: t,
    xmlns: "http://www.w3.org/2000/svg",
    width: i,
    height: i,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: r,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, s), /* @__PURE__ */ F.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /* @__PURE__ */ F.createElement("line", {
    x1: "12",
    y1: "8",
    x2: "12",
    y2: "12"
  }), /* @__PURE__ */ F.createElement("line", {
    x1: "12",
    y1: "16",
    x2: "12.01",
    y2: "16"
  }));
});
Kr.propTypes = {
  color: q.string,
  size: q.oneOfType([q.string, q.number])
};
Kr.displayName = "AlertCircle";
function xr() {
  return xr = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, xr.apply(this, arguments);
}
function Jg(e, t) {
  if (e == null) return {};
  var n = e0(e, t), r, o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      r = i[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function e0(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var Zr = de(function(e, t) {
  var n = e.color, r = n === void 0 ? "currentColor" : n, o = e.size, i = o === void 0 ? 24 : o, s = Jg(e, ["color", "size"]);
  return /* @__PURE__ */ F.createElement("svg", xr({
    ref: t,
    xmlns: "http://www.w3.org/2000/svg",
    width: i,
    height: i,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: r,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, s), /* @__PURE__ */ F.createElement("polyline", {
    points: "20 6 9 17 4 12"
  }));
});
Zr.propTypes = {
  color: q.string,
  size: q.oneOfType([q.string, q.number])
};
Zr.displayName = "Check";
function wr() {
  return wr = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, wr.apply(this, arguments);
}
function t0(e, t) {
  if (e == null) return {};
  var n = n0(e, t), r, o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      r = i[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function n0(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var zn = de(function(e, t) {
  var n = e.color, r = n === void 0 ? "currentColor" : n, o = e.size, i = o === void 0 ? 24 : o, s = t0(e, ["color", "size"]);
  return /* @__PURE__ */ F.createElement("svg", wr({
    ref: t,
    xmlns: "http://www.w3.org/2000/svg",
    width: i,
    height: i,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: r,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, s), /* @__PURE__ */ F.createElement("rect", {
    x: "4",
    y: "4",
    width: "16",
    height: "16",
    rx: "2",
    ry: "2"
  }), /* @__PURE__ */ F.createElement("rect", {
    x: "9",
    y: "9",
    width: "6",
    height: "6"
  }), /* @__PURE__ */ F.createElement("line", {
    x1: "9",
    y1: "1",
    x2: "9",
    y2: "4"
  }), /* @__PURE__ */ F.createElement("line", {
    x1: "15",
    y1: "1",
    x2: "15",
    y2: "4"
  }), /* @__PURE__ */ F.createElement("line", {
    x1: "9",
    y1: "20",
    x2: "9",
    y2: "23"
  }), /* @__PURE__ */ F.createElement("line", {
    x1: "15",
    y1: "20",
    x2: "15",
    y2: "23"
  }), /* @__PURE__ */ F.createElement("line", {
    x1: "20",
    y1: "9",
    x2: "23",
    y2: "9"
  }), /* @__PURE__ */ F.createElement("line", {
    x1: "20",
    y1: "14",
    x2: "23",
    y2: "14"
  }), /* @__PURE__ */ F.createElement("line", {
    x1: "1",
    y1: "9",
    x2: "4",
    y2: "9"
  }), /* @__PURE__ */ F.createElement("line", {
    x1: "1",
    y1: "14",
    x2: "4",
    y2: "14"
  }));
});
zn.propTypes = {
  color: q.string,
  size: q.oneOfType([q.string, q.number])
};
zn.displayName = "Cpu";
function vr() {
  return vr = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, vr.apply(this, arguments);
}
function r0(e, t) {
  if (e == null) return {};
  var n = o0(e, t), r, o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      r = i[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function o0(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var Qr = de(function(e, t) {
  var n = e.color, r = n === void 0 ? "currentColor" : n, o = e.size, i = o === void 0 ? 24 : o, s = r0(e, ["color", "size"]);
  return /* @__PURE__ */ F.createElement("svg", vr({
    ref: t,
    xmlns: "http://www.w3.org/2000/svg",
    width: i,
    height: i,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: r,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, s), /* @__PURE__ */ F.createElement("path", {
    d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
  }), /* @__PURE__ */ F.createElement("polyline", {
    points: "7 10 12 15 17 10"
  }), /* @__PURE__ */ F.createElement("line", {
    x1: "12",
    y1: "15",
    x2: "12",
    y2: "3"
  }));
});
Qr.propTypes = {
  color: q.string,
  size: q.oneOfType([q.string, q.number])
};
Qr.displayName = "Download";
function br() {
  return br = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, br.apply(this, arguments);
}
function i0(e, t) {
  if (e == null) return {};
  var n = s0(e, t), r, o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      r = i[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function s0(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var ft = de(function(e, t) {
  var n = e.color, r = n === void 0 ? "currentColor" : n, o = e.size, i = o === void 0 ? 24 : o, s = i0(e, ["color", "size"]);
  return /* @__PURE__ */ F.createElement("svg", br({
    ref: t,
    xmlns: "http://www.w3.org/2000/svg",
    width: i,
    height: i,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: r,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, s), /* @__PURE__ */ F.createElement("path", {
    d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
  }), /* @__PURE__ */ F.createElement("polyline", {
    points: "14 2 14 8 20 8"
  }), /* @__PURE__ */ F.createElement("line", {
    x1: "16",
    y1: "13",
    x2: "8",
    y2: "13"
  }), /* @__PURE__ */ F.createElement("line", {
    x1: "16",
    y1: "17",
    x2: "8",
    y2: "17"
  }), /* @__PURE__ */ F.createElement("polyline", {
    points: "10 9 9 9 8 9"
  }));
});
ft.propTypes = {
  color: q.string,
  size: q.oneOfType([q.string, q.number])
};
ft.displayName = "FileText";
function _r() {
  return _r = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, _r.apply(this, arguments);
}
function a0(e, t) {
  if (e == null) return {};
  var n = c0(e, t), r, o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      r = i[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function c0(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var On = de(function(e, t) {
  var n = e.color, r = n === void 0 ? "currentColor" : n, o = e.size, i = o === void 0 ? 24 : o, s = a0(e, ["color", "size"]);
  return /* @__PURE__ */ F.createElement("svg", _r({
    ref: t,
    xmlns: "http://www.w3.org/2000/svg",
    width: i,
    height: i,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: r,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, s), /* @__PURE__ */ F.createElement("polygon", {
    points: "22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"
  }));
});
On.propTypes = {
  color: q.string,
  size: q.oneOfType([q.string, q.number])
};
On.displayName = "Filter";
function Er() {
  return Er = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Er.apply(this, arguments);
}
function l0(e, t) {
  if (e == null) return {};
  var n = u0(e, t), r, o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      r = i[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function u0(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var Rt = de(function(e, t) {
  var n = e.color, r = n === void 0 ? "currentColor" : n, o = e.size, i = o === void 0 ? 24 : o, s = l0(e, ["color", "size"]);
  return /* @__PURE__ */ F.createElement("svg", Er({
    ref: t,
    xmlns: "http://www.w3.org/2000/svg",
    width: i,
    height: i,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: r,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, s), /* @__PURE__ */ F.createElement("line", {
    x1: "6",
    y1: "3",
    x2: "6",
    y2: "15"
  }), /* @__PURE__ */ F.createElement("circle", {
    cx: "18",
    cy: "6",
    r: "3"
  }), /* @__PURE__ */ F.createElement("circle", {
    cx: "6",
    cy: "18",
    r: "3"
  }), /* @__PURE__ */ F.createElement("path", {
    d: "M18 9a9 9 0 0 1-9 9"
  }));
});
Rt.propTypes = {
  color: q.string,
  size: q.oneOfType([q.string, q.number])
};
Rt.displayName = "GitBranch";
function Nr() {
  return Nr = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Nr.apply(this, arguments);
}
function f0(e, t) {
  if (e == null) return {};
  var n = d0(e, t), r, o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      r = i[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function d0(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var In = de(function(e, t) {
  var n = e.color, r = n === void 0 ? "currentColor" : n, o = e.size, i = o === void 0 ? 24 : o, s = f0(e, ["color", "size"]);
  return /* @__PURE__ */ F.createElement("svg", Nr({
    ref: t,
    xmlns: "http://www.w3.org/2000/svg",
    width: i,
    height: i,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: r,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, s), /* @__PURE__ */ F.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /* @__PURE__ */ F.createElement("line", {
    x1: "2",
    y1: "12",
    x2: "22",
    y2: "12"
  }), /* @__PURE__ */ F.createElement("path", {
    d: "M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
  }));
});
In.propTypes = {
  color: q.string,
  size: q.oneOfType([q.string, q.number])
};
In.displayName = "Globe";
function Sr() {
  return Sr = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Sr.apply(this, arguments);
}
function h0(e, t) {
  if (e == null) return {};
  var n = p0(e, t), r, o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      r = i[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function p0(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var Tn = de(function(e, t) {
  var n = e.color, r = n === void 0 ? "currentColor" : n, o = e.size, i = o === void 0 ? 24 : o, s = h0(e, ["color", "size"]);
  return /* @__PURE__ */ F.createElement("svg", Sr({
    ref: t,
    xmlns: "http://www.w3.org/2000/svg",
    width: i,
    height: i,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: r,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, s), /* @__PURE__ */ F.createElement("polygon", {
    points: "12 2 2 7 12 12 22 7 12 2"
  }), /* @__PURE__ */ F.createElement("polyline", {
    points: "2 17 12 22 22 17"
  }), /* @__PURE__ */ F.createElement("polyline", {
    points: "2 12 12 17 22 12"
  }));
});
Tn.propTypes = {
  color: q.string,
  size: q.oneOfType([q.string, q.number])
};
Tn.displayName = "Layers";
function kr() {
  return kr = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, kr.apply(this, arguments);
}
function g0(e, t) {
  if (e == null) return {};
  var n = m0(e, t), r, o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      r = i[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function m0(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var Jr = de(function(e, t) {
  var n = e.color, r = n === void 0 ? "currentColor" : n, o = e.size, i = o === void 0 ? 24 : o, s = g0(e, ["color", "size"]);
  return /* @__PURE__ */ F.createElement("svg", kr({
    ref: t,
    xmlns: "http://www.w3.org/2000/svg",
    width: i,
    height: i,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: r,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, s), /* @__PURE__ */ F.createElement("polygon", {
    points: "5 3 19 12 5 21 5 3"
  }));
});
Jr.propTypes = {
  color: q.string,
  size: q.oneOfType([q.string, q.number])
};
Jr.displayName = "Play";
function Cr() {
  return Cr = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Cr.apply(this, arguments);
}
function y0(e, t) {
  if (e == null) return {};
  var n = x0(e, t), r, o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      r = i[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function x0(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var An = de(function(e, t) {
  var n = e.color, r = n === void 0 ? "currentColor" : n, o = e.size, i = o === void 0 ? 24 : o, s = y0(e, ["color", "size"]);
  return /* @__PURE__ */ F.createElement("svg", Cr({
    ref: t,
    xmlns: "http://www.w3.org/2000/svg",
    width: i,
    height: i,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: r,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, s), /* @__PURE__ */ F.createElement("path", {
    d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
  }));
});
An.propTypes = {
  color: q.string,
  size: q.oneOfType([q.string, q.number])
};
An.displayName = "Shield";
function $r() {
  return $r = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, $r.apply(this, arguments);
}
function w0(e, t) {
  if (e == null) return {};
  var n = v0(e, t), r, o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      r = i[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function v0(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var Ln = de(function(e, t) {
  var n = e.color, r = n === void 0 ? "currentColor" : n, o = e.size, i = o === void 0 ? 24 : o, s = w0(e, ["color", "size"]);
  return /* @__PURE__ */ F.createElement("svg", $r({
    ref: t,
    xmlns: "http://www.w3.org/2000/svg",
    width: i,
    height: i,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: r,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, s), /* @__PURE__ */ F.createElement("path", {
    d: "M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"
  }), /* @__PURE__ */ F.createElement("line", {
    x1: "7",
    y1: "7",
    x2: "7.01",
    y2: "7"
  }));
});
Ln.propTypes = {
  color: q.string,
  size: q.oneOfType([q.string, q.number])
};
Ln.displayName = "Tag";
function Mr() {
  return Mr = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Mr.apply(this, arguments);
}
function b0(e, t) {
  if (e == null) return {};
  var n = _0(e, t), r, o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      r = i[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function _0(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var eo = de(function(e, t) {
  var n = e.color, r = n === void 0 ? "currentColor" : n, o = e.size, i = o === void 0 ? 24 : o, s = b0(e, ["color", "size"]);
  return /* @__PURE__ */ F.createElement("svg", Mr({
    ref: t,
    xmlns: "http://www.w3.org/2000/svg",
    width: i,
    height: i,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: r,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, s), /* @__PURE__ */ F.createElement("polyline", {
    points: "4 17 10 11 4 5"
  }), /* @__PURE__ */ F.createElement("line", {
    x1: "12",
    y1: "19",
    x2: "20",
    y2: "19"
  }));
});
eo.propTypes = {
  color: q.string,
  size: q.oneOfType([q.string, q.number])
};
eo.displayName = "Terminal";
function Pr() {
  return Pr = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Pr.apply(this, arguments);
}
function E0(e, t) {
  if (e == null) return {};
  var n = N0(e, t), r, o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      r = i[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function N0(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var to = de(function(e, t) {
  var n = e.color, r = n === void 0 ? "currentColor" : n, o = e.size, i = o === void 0 ? 24 : o, s = E0(e, ["color", "size"]);
  return /* @__PURE__ */ F.createElement("svg", Pr({
    ref: t,
    xmlns: "http://www.w3.org/2000/svg",
    width: i,
    height: i,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: r,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, s), /* @__PURE__ */ F.createElement("polyline", {
    points: "3 6 5 6 21 6"
  }), /* @__PURE__ */ F.createElement("path", {
    d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
  }), /* @__PURE__ */ F.createElement("line", {
    x1: "10",
    y1: "11",
    x2: "10",
    y2: "17"
  }), /* @__PURE__ */ F.createElement("line", {
    x1: "14",
    y1: "11",
    x2: "14",
    y2: "17"
  }));
});
to.propTypes = {
  color: q.string,
  size: q.oneOfType([q.string, q.number])
};
to.displayName = "Trash2";
function zr() {
  return zr = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, zr.apply(this, arguments);
}
function S0(e, t) {
  if (e == null) return {};
  var n = k0(e, t), r, o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      r = i[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function k0(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var jt = de(function(e, t) {
  var n = e.color, r = n === void 0 ? "currentColor" : n, o = e.size, i = o === void 0 ? 24 : o, s = S0(e, ["color", "size"]);
  return /* @__PURE__ */ F.createElement("svg", zr({
    ref: t,
    xmlns: "http://www.w3.org/2000/svg",
    width: i,
    height: i,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: r,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, s), /* @__PURE__ */ F.createElement("path", {
    d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
  }), /* @__PURE__ */ F.createElement("polyline", {
    points: "17 8 12 3 7 8"
  }), /* @__PURE__ */ F.createElement("line", {
    x1: "12",
    y1: "3",
    x2: "12",
    y2: "15"
  }));
});
jt.propTypes = {
  color: q.string,
  size: q.oneOfType([q.string, q.number])
};
jt.displayName = "Upload";
function Or() {
  return Or = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Or.apply(this, arguments);
}
function C0(e, t) {
  if (e == null) return {};
  var n = $0(e, t), r, o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      r = i[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function $0(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var no = de(function(e, t) {
  var n = e.color, r = n === void 0 ? "currentColor" : n, o = e.size, i = o === void 0 ? 24 : o, s = C0(e, ["color", "size"]);
  return /* @__PURE__ */ F.createElement("svg", Or({
    ref: t,
    xmlns: "http://www.w3.org/2000/svg",
    width: i,
    height: i,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: r,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, s), /* @__PURE__ */ F.createElement("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
  }), /* @__PURE__ */ F.createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
  }));
});
no.propTypes = {
  color: q.string,
  size: q.oneOfType([q.string, q.number])
};
no.displayName = "X";
const da = { upload: jt, embed: Tn, extract: zn, "extract-api": In, graph: Rt, filter: On, validate: An, classify: Ln };
function ha({ status: e }) {
  return e === "running" ? /* @__PURE__ */ N("span", { className: "loading loading-spinner loading-xs" }) : e === "done" ? /* @__PURE__ */ N(Zr, { size: 12, className: "text-success shrink-0" }) : e === "error" ? /* @__PURE__ */ N(Kr, { size: 12, className: "text-error shrink-0" }) : null;
}
function M0({ data: e }) {
  var s;
  const t = e._blockType, n = da[t] || ft, r = e.status === "error", o = e.status === "done", i = ((s = e.config) == null ? void 0 : s.docGroup) || e.result;
  return /* @__PURE__ */ J("div", { className: "bg-base-200 rounded-lg px-4 py-3 min-w-40", children: [
    /* @__PURE__ */ N(pe, { type: "target", position: X.Top }),
    /* @__PURE__ */ J("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ N(n, { size: 14, className: o ? "text-success" : r ? "text-error" : "text-base-content/50" }),
      /* @__PURE__ */ N("span", { className: "font-medium text-xs", children: e.label }),
      /* @__PURE__ */ N(ha, { status: e.status })
    ] }),
    /* @__PURE__ */ N("div", { className: "text-2xs mt-0.5 text-base-content/30", children: t }),
    i && /* @__PURE__ */ N("div", { className: `text-2xs mt-0.5 truncate max-w-48 ${r ? "text-error" : "text-base-content/40"}`, children: i }),
    /* @__PURE__ */ N(pe, { type: "source", position: X.Bottom, id: "next" }),
    /* @__PURE__ */ N(pe, { type: "source", position: X.Right, id: "data", style: { background: "color-mix(in oklch, var(--color-base-content) 30%, transparent)" } }),
    /* @__PURE__ */ N(pe, { type: "source", position: X.Left, id: "data-left", style: { background: "color-mix(in oklch, var(--color-base-content) 30%, transparent)" } })
  ] });
}
function P0({ id: e, data: t }) {
  var a;
  const { updateNodeData: n } = $n(), r = da.upload, o = t.status === "error", i = t.status === "done", s = (a = t.config) == null ? void 0 : a.docGroup;
  return /* @__PURE__ */ J("div", { className: "bg-base-200 rounded-lg px-4 py-3 min-w-40", children: [
    /* @__PURE__ */ N(pe, { type: "target", position: X.Top }),
    /* @__PURE__ */ J("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ N(r, { size: 14, className: i ? "text-success" : o ? "text-error" : "text-base-content/50" }),
      /* @__PURE__ */ N("span", { className: "font-medium text-xs", children: s || t.label }),
      /* @__PURE__ */ N(ha, { status: t.status })
    ] }),
    "result" in t && t.result ? /* @__PURE__ */ N("div", { className: `text-2xs mt-1 ${o ? "text-error" : "text-base-content/40"}`, children: String(t.result) }) : null,
    /* @__PURE__ */ J("label", { className: `flex items-center justify-center gap-2 rounded-md px-3 py-2 mt-2 cursor-pointer transition-colors
        ${t._fileNames ? "bg-base-300" : "bg-base-300/50 border border-dashed border-base-300 hover:bg-base-300"}`, children: [
      t._fileNames ? /* @__PURE__ */ J(he, { children: [
        /* @__PURE__ */ N(ft, { size: 12, className: "shrink-0 text-base-content/40" }),
        /* @__PURE__ */ N("span", { className: "text-xs text-base-content/50 truncate max-w-40", children: t._fileNames })
      ] }) : /* @__PURE__ */ J(he, { children: [
        /* @__PURE__ */ N(jt, { size: 12, className: "text-base-content/30" }),
        /* @__PURE__ */ N("span", { className: "text-2xs text-base-content/30", children: "wybierz pliki" })
      ] }),
      /* @__PURE__ */ N("input", { type: "file", accept: ".pdf,.csv,.tsv,.txt,.json", multiple: !0, hidden: !0, onChange: (c) => {
        const l = Array.from(c.target.files || []);
        l.length && n(e, { _files: l, _fileNames: l.map((d) => d.name).join(", ") });
      } })
    ] }),
    /* @__PURE__ */ N(pe, { type: "source", position: X.Bottom, id: "next" }),
    /* @__PURE__ */ N(pe, { type: "source", position: X.Right, id: "data", style: { background: "color-mix(in oklch, var(--color-base-content) 30%, transparent)" } }),
    /* @__PURE__ */ N(pe, { type: "source", position: X.Left, id: "data-left", style: { background: "color-mix(in oklch, var(--color-base-content) 30%, transparent)" } })
  ] });
}
function z0({ data: e }) {
  return /* @__PURE__ */ J("div", { className: "flex items-center gap-2 bg-base-300 rounded-md px-3 py-2 w-48 overflow-hidden", children: [
    /* @__PURE__ */ N(pe, { type: "target", position: X.Left, id: "left" }),
    /* @__PURE__ */ N(pe, { type: "target", position: X.Right, id: "right" }),
    /* @__PURE__ */ N(ft, { size: 12, className: "shrink-0 text-base-content/40" }),
    /* @__PURE__ */ N("span", { className: "text-xs truncate flex-1 min-w-0", children: e.label }),
    "detail" in e && e.detail ? /* @__PURE__ */ N("span", { className: "text-2xs text-base-content/30 truncate max-w-20", children: String(e.detail) }) : null
  ] });
}
function O0({ data: e }) {
  const t = e.shared;
  return /* @__PURE__ */ J("div", { className: `flex items-center gap-2 rounded-md px-3 py-2 w-56 overflow-hidden ${t ? "bg-primary/15 ring-1 ring-primary/30" : "bg-base-300"}`, children: [
    /* @__PURE__ */ N(pe, { type: "target", position: X.Left, id: "left" }),
    /* @__PURE__ */ N(pe, { type: "target", position: X.Right, id: "right" }),
    /* @__PURE__ */ N("span", { className: `w-2 h-2 rounded-full shrink-0 ${t ? "bg-primary" : "bg-base-content/20"}` }),
    /* @__PURE__ */ N("span", { className: "text-xs truncate flex-1 min-w-0", children: e.label }),
    /* @__PURE__ */ N("span", { className: "text-2xs text-base-content/30 truncate max-w-24", children: e.detail })
  ] });
}
function I0({ data: e }) {
  return /* @__PURE__ */ J("div", { className: "flex items-center gap-2 bg-base-200 ring-1 ring-base-300 rounded-md px-3 py-2 w-48 overflow-hidden", children: [
    /* @__PURE__ */ N(pe, { type: "source", position: X.Right, id: "right" }),
    /* @__PURE__ */ N(ft, { size: 12, className: "shrink-0 text-base-content/40" }),
    /* @__PURE__ */ N("span", { className: "text-xs font-medium truncate flex-1 min-w-0", children: e.label })
  ] });
}
const Be = (e) => (t) => /* @__PURE__ */ N(M0, { ...t, data: { ...t.data, _blockType: e } }), T0 = {
  upload: P0,
  embed: Be("embed"),
  extract: Be("extract"),
  "extract-api": Be("extract-api"),
  graph: Be("graph"),
  filter: Be("filter"),
  classify: Be("classify"),
  validate: Be("validate"),
  data: z0,
  entity: O0,
  doc: I0
};
let gn, mn, Ke, pa, ga, yn, ma, zt, ro, ya;
const A0 = "https://huggingface.co/obieg-zero/Bielik-1.5B-v3.0-Instruct-GGUF/resolve/main/Bielik-1.5B-v3.0-Instruct.Q4_K_M.gguf", xa = [
  { type: "upload", label: "Upload", icon: jt, config: { docGroup: "" } },
  { type: "classify", label: "Classify", icon: Ln, config: { labels: "", minScore: "0.3", model: "Xenova/multilingual-e5-small", language: "pol" } },
  { type: "embed", label: "Embed", icon: Tn, config: { model: "Xenova/multilingual-e5-small", chunkSize: "200", language: "pol", docGroup: "" } },
  { type: "filter", label: "Filter", icon: On, config: { contains: "", pages: "" } },
  { type: "extract", label: "Extract", icon: zn, config: { questions: "", topK: "2", modelUrl: A0 } },
  { type: "extract-api", label: "ExtractAPI", icon: In, config: { questions: "", topK: "2", apiUrl: "https://api.openai.com/v1/chat/completions", apiKey: "", apiModel: "gpt-4o-mini" } },
  { type: "validate", label: "Validate", icon: An, config: { minConfidence: "0.8", onFail: "mark" } },
  { type: "graph", label: "Graph", icon: Rt, config: {} }
], wa = Ot(null), Dn = () => Ze(wa);
function L0({ label: e, settingKey: t }) {
  const [n, r] = ue(""), [o, i] = ue(!1);
  if (oe(() => {
    gn.db.getSetting(t).then((c) => {
      r(c || ""), i(!0);
    });
  }, [t]), !o) return null;
  const s = (c) => {
    r(c), gn.db.setSetting(t, c);
  }, a = e.toLowerCase().includes("key") || e.toLowerCase().includes("secret");
  return /* @__PURE__ */ N(yn, { label: /* @__PURE__ */ J(he, { children: [
    /* @__PURE__ */ N("span", { className: "badge badge-xs badge-info mr-1", children: "setting" }),
    e
  ] }), children: /* @__PURE__ */ N(
    "input",
    {
      type: a ? "password" : "text",
      value: n,
      placeholder: a ? "sk-..." : t,
      onChange: (c) => s(c.target.value),
      className: "input input-bordered input-sm w-full text-xs font-mono"
    }
  ) });
}
function D0() {
  const { s: e, a: t } = Dn(), n = ro("projects"), { current: r } = n.useProjects();
  return /* @__PURE__ */ J(he, { children: [
    /* @__PURE__ */ N(mn, { header: /* @__PURE__ */ N(Ke, { label: !0, children: "Projekty" }), body: /* @__PURE__ */ N(n.ProjectList, {}) }),
    r && /* @__PURE__ */ N(mn, { grow: !0, header: /* @__PURE__ */ N(Ke, { label: !0, children: "Schemat" }), body: /* @__PURE__ */ J(he, { children: [
      /* @__PURE__ */ N(
        ma,
        {
          active: e.leftTab,
          onSelect: (o) => t.setLeftTab(o),
          items: [{ id: "templates", label: "Szablony" }, { id: "blocks", label: "Bloki" }]
        }
      ),
      e.leftTab === "templates" ? /* @__PURE__ */ N(he, { children: e.templates.map((o) => /* @__PURE__ */ N(
        ga,
        {
          label: o.name,
          separator: !0,
          detail: o.nodes.filter((i) => i.type === "upload").map((i) => {
            var s, a, c;
            return ((a = (s = i.data) == null ? void 0 : s.config) == null ? void 0 : a.docGroup) || ((c = i.data) == null ? void 0 : c.label);
          }).join(" + "),
          onClick: () => {
            t.loadTemplate(o.id), zt("shell:close-left");
          }
        },
        o.id
      )) }) : /* @__PURE__ */ N("div", { className: "grid grid-cols-3 gap-1 w-full", children: xa.map((o) => {
        const i = o.icon;
        return /* @__PURE__ */ J(
          "div",
          {
            draggable: !0,
            onDragStart: (s) => {
              s.dataTransfer.setData("application/reactflow", o.type), s.dataTransfer.effectAllowed = "move";
            },
            className: "flex flex-col items-center justify-center h-16 rounded-md hover:bg-base-200 cursor-grab transition-colors",
            children: [
              /* @__PURE__ */ N(i, { size: 14, className: "text-base-content/50 mb-1" }),
              /* @__PURE__ */ N("span", { className: "text-2xs text-base-content/40", children: o.label })
            ]
          },
          o.type
        );
      }) })
    ] }) })
  ] });
}
function H0() {
  const { s: e, a: t } = Dn(), n = e.nodes.find((a) => a.id === e.selectedId);
  if (!n || !n.data.config || !Object.keys(n.data.config).length) return null;
  const r = Object.entries(n.data.config), o = Object.entries(n.data.settings || {}), i = (a, c) => {
    t.setNodes((l) => l.map((d) => d.id === n.id ? { ...d, data: { ...d.data, config: { ...d.data.config, [a]: c } } } : d));
  }, s = (a) => {
    t.setNodes((c) => c.map((l) => l.id === n.id ? { ...l, data: { ...l.data, label: a } } : l));
  };
  return /* @__PURE__ */ N(mn, { header: /* @__PURE__ */ J(he, { children: [
    /* @__PURE__ */ J(Ke, { label: !0, children: [
      /* @__PURE__ */ N("span", { className: "badge badge-xs badge-ghost mr-2", children: n.type }),
      n.data.label
    ] }),
    /* @__PURE__ */ N(Ke, { onClick: () => t.setSelectedId(null), children: /* @__PURE__ */ N(no, { size: 12 }) })
  ] }), body: /* @__PURE__ */ J(he, { children: [
    /* @__PURE__ */ N(yn, { label: "label", children: /* @__PURE__ */ N(
      "input",
      {
        type: "text",
        value: n.data.label,
        onChange: (a) => s(a.target.value),
        className: "input input-bordered input-sm w-full text-xs"
      }
    ) }),
    r.map(([a, c]) => /* @__PURE__ */ N(yn, { label: a, children: String(c).includes(`
`) || a === "questions" ? /* @__PURE__ */ N(
      "textarea",
      {
        value: String(c),
        rows: a === "questions" ? 8 : 3,
        onChange: (l) => i(a, l.target.value),
        className: "textarea textarea-bordered textarea-sm font-mono w-full"
      }
    ) : /* @__PURE__ */ N(
      "input",
      {
        type: a === "apiKey" ? "password" : "text",
        value: String(c),
        placeholder: a === "apiKey" ? "sk-..." : "",
        onChange: (l) => i(a, l.target.value),
        className: "input input-bordered input-sm w-full text-xs font-mono"
      }
    ) }, a)),
    o.length > 0 && o.map(([a, c]) => /* @__PURE__ */ N(L0, { label: a, settingKey: c }, `s:${a}`))
  ] }) });
}
function R0() {
  var r;
  const { s: e, a: t } = Dn(), n = re(null);
  return oe(() => {
    var o;
    (o = n.current) == null || o.scrollTo(0, n.current.scrollHeight);
  }, [e.log]), e.project ? /* @__PURE__ */ N("div", { children: e.running || ((r = e.log) == null ? void 0 : r.length) > 0 ? /* @__PURE__ */ J("div", { className: "flex flex-col", style: { maxHeight: "33vh" }, children: [
    /* @__PURE__ */ J(pa, { children: [
      e.running && /* @__PURE__ */ N("span", { className: "loading loading-spinner loading-xs text-warning mr-2" }),
      /* @__PURE__ */ J(Ke, { label: !0, children: [
        /* @__PURE__ */ N(eo, { size: 12, className: "mr-2" }),
        "Dziennik"
      ] }),
      !e.running && /* @__PURE__ */ N(Ke, { onClick: () => t.setLog([]), children: /* @__PURE__ */ N(to, { size: 12 }) })
    ] }),
    /* @__PURE__ */ N("pre", { ref: n, className: "flex-1 overflow-y-auto px-3 pb-4 font-mono text-2xs whitespace-pre-wrap break-all text-base-content/40 leading-relaxed", children: (e.log || []).join(`
`) })
  ] }) : /* @__PURE__ */ J("div", { className: "p-3 flex gap-2", children: [
    /* @__PURE__ */ J("button", { onClick: () => {
      t.runPipeline(), zt("shell:close-left");
    }, disabled: e.running, className: "btn btn-primary btn-sm flex-1 gap-2", children: [
      /* @__PURE__ */ N(Jr, { size: 14 }),
      "Analizuj"
    ] }),
    /* @__PURE__ */ N("button", { onClick: t.exportPipeline, className: "btn btn-ghost btn-sm btn-square", title: "Eksportuj pipeline JSON", children: /* @__PURE__ */ N(Qr, { size: 14 }) })
  ] }) }) : null;
}
function j0({ children: e }) {
  const [t, n] = ue([]), [r, o] = ue([]), [i, s] = ue([]), [a, c] = ue(!1), [l, d] = ue("templates"), [u, f] = ue(null), [p, g] = ue([]), y = re(null), x = re(0), m = gn, v = ro("projects").useProjects().current, h = me((_) => {
    s((k) => [...k, `${(/* @__PURE__ */ new Date()).toLocaleTimeString()} ${_}`]);
  }, []);
  oe(() => {
    m.db.listTemplates().then(g);
  }, []), oe(() => {
    if (!v) {
      n([]), o([]);
      return;
    }
    m.db.getPipelineByProject(v).then((_) => {
      _ ? (n(_.nodes), o(_.edges)) : (n([]), o([])), setTimeout(() => {
        var k;
        return (k = y.current) == null ? void 0 : k.fitView({ padding: 0.2 });
      }, 50);
    }), s([]), f(null);
  }, [v]), oe(() => {
    if (!v) return;
    const _ = t.filter((E) => E.type !== "data" && E.type !== "entity" && E.type !== "doc"), k = new Set(_.map((E) => E.id));
    m.db.savePipeline({ id: `pipeline:${v}`, projectId: v, name: v, nodes: _, edges: r.filter((E) => k.has(E.source) && k.has(E.target)) });
  }, [v, t, r]);
  const w = me((_) => n((k) => Ds(_, k)), []), $ = me((_) => o((k) => Hs(_, k)), []), C = me((_) => o((k) => ms(_, k)), []);
  function M(_) {
    const k = p.find((E) => E.id === _);
    !k || !v || (n(k.nodes.map((E) => ({ ...E, data: { ...E.data, config: { ...E.data.config || {} }, settings: E.data.settings ? { ...E.data.settings } : void 0 } }))), o([...k.edges]), f(null), setTimeout(() => {
      var E;
      return (E = y.current) == null ? void 0 : E.fitView({ padding: 0.2 });
    }, 50));
  }
  function T(_) {
    _.preventDefault();
    const k = _.dataTransfer.getData("application/reactflow");
    if (!k || !y.current) return;
    const E = xa.find((P) => P.type === k);
    if (!E) return;
    const S = `${k}-${Date.now()}`;
    n((P) => [...P, { id: S, type: k, position: y.current.screenToFlowPosition({ x: _.clientX, y: _.clientY }), data: { label: E.label, config: { ...E.config } } }]), f(S);
  }
  function A(_, k, E) {
    n((S) => S.map((P) => P.id === _ ? { ...P, data: { ...P.data, status: k, result: E || P.data.result } } : P));
  }
  function R(_, k, E) {
    const S = x.current++ % 2 === 0, P = E ? E.x + (S ? 280 : -240) : 500, L = E ? E.y - (k.length - 1) * 14 : 0;
    n((D) => [...D, ...k.map((j, B) => ({ id: j.id, type: "data", position: { x: P, y: L + B * 28 }, data: { label: j.label, detail: j.detail } }))]), o((D) => [...D, ...k.map((j) => ({ id: `viz:${_}→${j.id}`, source: _, sourceHandle: S ? "data" : "data-left", target: j.id, targetHandle: S ? "left" : "right", style: { strokeDasharray: "4 2", strokeWidth: 1, stroke: "currentColor", opacity: 0.2 } }))]);
  }
  function z(_, k, E) {
    const S = E ? E.x : 500, P = E ? E.y : 0, L = k.nodes.filter((B) => B.type === "document"), D = k.nodes.filter((B) => B.type !== "document"), j = /* @__PURE__ */ new Set();
    for (const B of D)
      new Set(k.edges.filter((Y) => Y.to === B.id).map((Y) => Y.from)).size > 1 && j.add(B.id);
    n((B) => [
      ...B,
      ...L.map((W, Y) => ({ id: `viz:${W.id}`, type: "doc", position: { x: S - 200, y: P + 80 + Y * 40 }, data: { label: W.label } })),
      ...D.map((W, Y) => ({ id: `viz:${W.id}`, type: "entity", position: { x: S + 280, y: P + 80 + Y * 36 }, data: { label: W.label, detail: W.type, shared: j.has(W.id) } }))
    ]), o((B) => [...B, ...k.edges.map((W) => ({
      id: `viz:${W.id}`,
      source: `viz:${W.from}`,
      sourceHandle: "right",
      target: `viz:${W.to}`,
      targetHandle: "left",
      label: W.label,
      style: { strokeWidth: 1, stroke: j.has(W.to) ? "var(--color-primary)" : "rgba(255,255,255,0.2)" },
      labelStyle: { fontSize: 9, fill: "color-mix(in oklch, var(--color-base-content) 30%, transparent)" }
    }))]);
  }
  async function I() {
    if (!v) return h("Wybierz projekt");
    const _ = new Map(t.map((P) => [P.id, P.position])), k = t.filter((P) => P.type !== "data" && P.type !== "entity" && P.type !== "doc"), E = new Set(k.map((P) => P.id)), S = r.filter((P) => E.has(P.source) && E.has(P.target));
    x.current = 0, c(!0), zt("shell:progress", !0), s([]), f(null), h(`=== ${v} ===`), n((P) => P.filter((L) => L.type !== "data" && L.type !== "entity" && L.type !== "doc")), o((P) => P.filter((L) => !L.id.startsWith("viz:"))), await ya(m, v, k, S, [], h, (P, L, D, j) => {
      var W;
      if (A(P, L, D), L !== "done" || !j) return;
      const B = _.get(P);
      j.files && R(P, j.files.map((Y) => ({ id: `viz:${P}:${Y.name}`, label: Y.name })), B), j.classified && R(P, [
        ...Object.entries(j.classified).filter(([, Y]) => Y.length).map(([Y, G]) => ({ id: `viz:${P}:${Y}`, label: `${Y} (${G.length})` })),
        ...(W = j.rejected) != null && W.length ? [{ id: `viz:${P}:rejected`, label: `odrzucone (${j.rejected.length})` }] : []
      ], B), j.chunks && R(P, j.chunks.slice(0, 6).map((Y, G) => ({ id: `viz:${P}:c${G}`, label: `chunk ${G}`, detail: Y.text.slice(0, 40) + "..." })), B), j.graph && z(P, j.graph, B);
    }), h("--- done ---"), c(!1), zt("shell:progress", !1);
  }
  function H() {
    if (!v) return;
    const _ = t.filter((L) => L.type !== "data" && L.type !== "entity" && L.type !== "doc"), k = new Set(_.map((L) => L.id)), E = { name: v, nodes: _, edges: r.filter((L) => k.has(L.source) && k.has(L.target)) }, S = new Blob([JSON.stringify(E, null, 2)], { type: "application/json" }), P = document.createElement("a");
    P.href = URL.createObjectURL(S), P.download = `${v}.pipeline.json`, P.click(), URL.revokeObjectURL(P.href);
  }
  const b = { nodes: t, edges: r, project: v, log: i, running: a, leftTab: l, selectedId: u, templates: p }, O = {
    setNodes: n,
    setEdges: o,
    setLog: s,
    setLeftTab: d,
    setSelectedId: f,
    addLog: h,
    loadTemplate: M,
    runPipeline: I,
    exportPipeline: H,
    onNodesChange: w,
    onEdgesChange: $,
    onConnect: C,
    onDrop: T,
    rfInstance: y
  };
  return /* @__PURE__ */ N(wa.Provider, { value: { s: b, a: O }, children: e });
}
function B0() {
  const { s: { nodes: e, edges: t, project: n }, a: r } = Dn();
  return /* @__PURE__ */ N(he, { children: n ? /* @__PURE__ */ N("div", { className: "flex-1 min-h-0", children: /* @__PURE__ */ N(
    bg,
    {
      nodes: e,
      edges: t,
      onNodesChange: r.onNodesChange,
      onEdgesChange: r.onEdgesChange,
      onConnect: r.onConnect,
      onInit: (o) => {
        r.rfInstance.current = o;
      },
      onDrop: r.onDrop,
      onDragOver: (o) => {
        o.preventDefault(), o.dataTransfer.dropEffect = "move";
      },
      onNodeClick: (o, i) => {
        i.data.config && r.setSelectedId(i.id);
      },
      onPaneClick: () => r.setSelectedId(null),
      nodeTypes: T0,
      fitView: !0,
      proOptions: { hideAttribution: !0 }
    }
  ) }) : /* @__PURE__ */ N("div", { className: "hero flex-1", children: /* @__PURE__ */ N("div", { className: "hero-content text-center", children: /* @__PURE__ */ J("div", { className: "max-w-lg space-y-5", children: [
    /* @__PURE__ */ J("div", { children: [
      /* @__PURE__ */ N("h1", { className: "text-2xl font-black text-primary tracking-tight", children: "OBIEG-ZERO" }),
      /* @__PURE__ */ N("p", { className: "text-xs text-base-content/50 mt-2", children: "50 umów, 8 pytań do każdej — wyniki w tabelce, nie w chacie." }),
      /* @__PURE__ */ N("p", { className: "text-xs text-base-content/50", children: "Otwarty model, Twoja przeglądarka. Dane nie zasilają BigTech." })
    ] }),
    /* @__PURE__ */ J("div", { className: "inline-flex items-center gap-2 bg-success/10 text-success rounded-full px-4 py-1.5", children: [
      /* @__PURE__ */ N("span", { className: "w-2 h-2 rounded-full bg-success animate-pulse" }),
      /* @__PURE__ */ N("span", { className: "text-xs font-medium", children: "100% prywatnie — dane nie opuszczają tego urządzenia" })
    ] }),
    /* @__PURE__ */ J("div", { className: "space-y-1", children: [
      /* @__PURE__ */ N("p", { className: "text-2xs text-base-content/30", children: "Jak zacząć:" }),
      /* @__PURE__ */ N("p", { className: "text-2xs text-base-content/20", children: "1. Utwórz projekt w sidebarze  2. Wybierz szablon (np. Umowy kredytowe, Faktura za gaz)  3. Wrzuć pliki i kliknij Analizuj" })
    ] })
  ] }) }) }) });
}
const X0 = (e) => (gn = e.host, { Box: mn, Cell: Ke, Bar: pa, ListItem: ga, Field: yn, Tabs: ma } = e.ui, { doAction: zt, getProvider: ro } = e.sdk, ya = e.blocks.runPipeline, {
  id: "playground",
  label: "Playground",
  description: "Blokowy RAG builder (React Flow)",
  icon: Rt,
  requires: ["projects"],
  layout: { wrapper: j0, left: D0, center: B0, right: H0, footer: R0 }
});
export {
  X0 as default
};
