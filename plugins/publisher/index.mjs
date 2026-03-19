// ../obieg-zero-plugins/publisher/src/index.tsx
var plugin = (deps) => {
  const { React, ui, icons, sdk } = deps;
  const { useState, useCallback, createElement: h } = React;
  const { Field, ProgressBar } = ui;
  const { Package, Download } = icons;
  const SERVER_JS = `const http = require('http');
const fs = require('fs');
const path = require('path');
const MIME = { '.html':'text/html','.js':'application/javascript','.css':'text/css','.mjs':'application/javascript','.json':'application/json','.wasm':'application/wasm','.png':'image/png','.svg':'image/svg+xml' };
const dir = __dirname;
const port = process.env.PORT || 3000;
http.createServer((req, res) => {
  const p = path.join(dir, req.url === '/' ? 'index.html' : req.url);
  if (!p.startsWith(dir)) { res.writeHead(403); res.end(); return; }
  fs.readFile(p, (err, data) => {
    if (err) { res.writeHead(404); res.end('Not found'); return; }
    res.writeHead(200, { 'Content-Type': MIME[path.extname(p)] || 'application/octet-stream' });
    res.end(data);
  });
}).listen(port, () => console.log('http://localhost:' + port));
`;
  function crc32(buf) {
    let c = 4294967295;
    for (let i = 0; i < buf.length; i++) {
      c ^= buf[i];
      for (let j = 0; j < 8; j++) c = c >>> 1 ^ (c & 1 ? 3988292384 : 0);
    }
    return (c ^ 4294967295) >>> 0;
  }
  function buildZip(files) {
    const enc = new TextEncoder();
    const parts = [];
    const central = [];
    let offset = 0;
    for (const f of files) {
      const name = enc.encode(f.path);
      const crc = crc32(f.data);
      const sz = f.data.length;
      const lh = new Uint8Array(30 + name.length);
      const lv = new DataView(lh.buffer);
      lv.setUint32(0, 67324752, true);
      lv.setUint16(4, 20, true);
      lv.setUint16(8, 0, true);
      lv.setUint32(14, crc, true);
      lv.setUint32(18, sz, true);
      lv.setUint32(22, sz, true);
      lv.setUint16(26, name.length, true);
      lh.set(name, 30);
      const cd = new Uint8Array(46 + name.length);
      const cv = new DataView(cd.buffer);
      cv.setUint32(0, 33639248, true);
      cv.setUint16(4, 20, true);
      cv.setUint16(6, 20, true);
      cv.setUint16(10, 0, true);
      cv.setUint32(16, crc, true);
      cv.setUint32(20, sz, true);
      cv.setUint32(24, sz, true);
      cv.setUint16(28, name.length, true);
      cv.setUint32(42, offset, true);
      cd.set(name, 46);
      parts.push(lh, f.data);
      central.push(cd);
      offset += lh.length + f.data.length;
    }
    const cdOffset = offset;
    let cdSize = 0;
    for (const c of central) cdSize += c.length;
    const eocd = new Uint8Array(22);
    const ev = new DataView(eocd.buffer);
    ev.setUint32(0, 101010256, true);
    ev.setUint16(8, files.length, true);
    ev.setUint16(10, files.length, true);
    ev.setUint32(12, cdSize, true);
    ev.setUint32(16, cdOffset, true);
    return new Blob([...parts, ...central, eocd].map((b) => b.buffer), { type: "application/zip" });
  }
  async function fetchBytes(url) {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`fetch ${url}: ${res.status}`);
    return new Uint8Array(await res.arrayBuffer());
  }
  async function captureApp(title, onProgress) {
    const files = [];
    const enc = new TextEncoder();
    onProgress("Pobieram index.html...", 0, 1);
    const htmlRes = await fetch("./");
    let html = await htmlRes.text();
    html = html.replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`);
    const assetPaths = [];
    const re = /(?:src|href)="\.?\/?([^"]+\.(js|css|mjs|wasm|png|svg|ico))"/g;
    let m;
    while ((m = re.exec(html)) !== null) assetPaths.push(m[1]);
    const configBytes = await fetchBytes("./config.json");
    files.push({ path: "config.json", data: configBytes });
    onProgress("Pobieram pluginy...", 0, 1);
    const pluginsRes = await fetch("./plugins/index.json");
    const bundledIds = await pluginsRes.json();
    const allPluginIds = [...bundledIds];
    const installed = await sdk.listInstalled();
    const opfsIds = [];
    for (const manifest of installed) {
      if (bundledIds.includes(manifest.id)) continue;
      try {
        const entry = manifest.entry || "index.mjs";
        const manifestStr = await sdk.readPluginFile(manifest.id, "manifest.json");
        const mjsStr = await sdk.readPluginFile(manifest.id, entry);
        files.push({ path: `plugins/${manifest.id}/manifest.json`, data: enc.encode(manifestStr) });
        files.push({ path: `plugins/${manifest.id}/${entry}`, data: enc.encode(mjsStr) });
        opfsIds.push(manifest.id);
      } catch {
      }
    }
    allPluginIds.push(...opfsIds);
    files.push({ path: "plugins/index.json", data: enc.encode(JSON.stringify(allPluginIds)) });
    const total = assetPaths.length + bundledIds.length * 2 + 2;
    let done = 0;
    for (const pid of bundledIds) {
      try {
        const manifest = await fetchBytes(`./plugins/${pid}/manifest.json`);
        files.push({ path: `plugins/${pid}/manifest.json`, data: manifest });
        done++;
        const mjs = await fetchBytes(`./plugins/${pid}/index.mjs`);
        files.push({ path: `plugins/${pid}/index.mjs`, data: mjs });
        done++;
        onProgress(`Plugin: ${pid}`, done, total);
      } catch {
        onProgress(`Skip: ${pid}`, done, total);
      }
    }
    if (opfsIds.length) onProgress(`OPFS: ${opfsIds.join(", ")}`, done, total);
    for (const asset of assetPaths) {
      try {
        const data = await fetchBytes(`./${asset}`);
        files.push({ path: asset, data });
        done++;
        onProgress(`Asset: ${asset.split("/").pop()}`, done, total);
      } catch {
        done++;
        onProgress(`Skip: ${asset}`, done, total);
      }
    }
    files.push({ path: "index.html", data: enc.encode(html) });
    files.push({ path: "server.js", data: enc.encode(SERVER_JS) });
    const readme = `# ${title}

Built with [obieg-zero](https://obieg-zero.github.io) \u2014 browser-native document analysis workbench.

## Quick start

### Option 1: Node.js
\`\`\`bash
node server.js
\`\`\`
Open http://localhost:3000

### Option 2: Python
\`\`\`bash
python3 -m http.server 3000
\`\`\`
Open http://localhost:3000

### Option 3: Any static hosting
Upload the contents of this folder to Netlify, Vercel, GitHub Pages, or any static file host.

## Offline
Works fully offline after first launch. AI models download on first use and cache in the browser.

## What's inside
- \`index.html\` \u2014 app entry point
- \`assets/\` \u2014 compiled JS/CSS
- \`plugins/\` \u2014 bundled plugins (${allPluginIds.join(", ")})
- \`config.json\` \u2014 plugin configuration
- \`server.js\` \u2014 minimal Node.js static server (zero dependencies)
`;
    files.push({ path: "README.md", data: enc.encode(readme) });
    onProgress("Pakuj\u0119 ZIP...", total, total);
    return buildZip(files);
  }
  function Center() {
    const [title, setTitle] = useState("My App");
    const [status, setStatus] = useState("");
    const [progress, setProgress] = useState({ done: 0, total: 1 });
    const [exporting, setExporting] = useState(false);
    const doExport = useCallback(async () => {
      setExporting(true);
      setStatus("Start...");
      try {
        const blob = await captureApp(title, (msg, done, total) => {
          setStatus(msg);
          setProgress({ done, total });
        });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `${title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}.zip`;
        a.click();
        URL.revokeObjectURL(url);
        setStatus("Gotowe!");
      } catch (err) {
        setStatus(`B\u0142\u0105d: ${err.message}`);
      }
      setExporting(false);
    }, [title]);
    return h(
      "div",
      { className: "flex-1 flex items-center justify-center" },
      h(
        "div",
        { className: "w-80 space-y-4" },
        h(
          "div",
          { className: "text-center space-y-1" },
          h("div", { className: "text-2xl font-bold" }, "Publisher"),
          h(
            "p",
            { className: "text-xs text-base-content/40" },
            "Eksportuj aplikacj\u0119 jako ZIP do self-hostingu"
          )
        ),
        h(
          Field,
          { label: "Nazwa aplikacji" },
          h("input", {
            className: "input input-bordered input-sm w-full",
            value: title,
            onChange: (e) => setTitle(e.target.value)
          })
        ),
        h(
          "button",
          {
            className: "btn btn-primary btn-sm w-full",
            disabled: exporting || !title.trim(),
            onClick: doExport
          },
          exporting ? h("span", { className: "loading loading-spinner loading-xs" }) : h(Download, { size: 14 }),
          exporting ? " Eksportuj\u0119..." : " Eksportuj ZIP"
        ),
        status && h(ProgressBar, {
          label: status,
          value: progress.done,
          total: progress.total,
          color: status.startsWith("B\u0142\u0105d") ? "red" : "primary"
        })
      )
    );
  }
  return {
    id: "publisher",
    label: "Publisher",
    description: "Eksportuj app jako ZIP do self-hostingu",
    icon: Package,
    layout: { center: Center }
  };
};
var index_default = plugin;
export {
  index_default as default
};
