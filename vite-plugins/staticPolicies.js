import { CONFIG } from "../src/config.js";
import { projects } from "../src/data/projects.js";
import { buildPolicy } from "../src/utils/privacy.js";
import { LEGACY_POLICY_PATHS } from "../src/data/legacyLinks.js";

const NAMES = { ar: "العربية", en: "English", zh: "中文" };
const DIR = { ar: "rtl", en: "ltr", zh: "ltr" };
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

function block(p, lang) {
  const doc = buildPolicy(p, lang);
  const body = doc.sections.map((s) =>
    `<h2>${esc(s.h)}</h2>` +
    (s.items ? `<ul>${s.items.map((i) => `<li>${esc(i)}</li>`).join("")}</ul>` : s.text ? `<p>${esc(s.text)}</p>` : "") +
    (s.mail ? `<p><a href="mailto:${esc(CONFIG.email)}">${esc(CONFIG.email)}</a></p>` : "")
  ).join("");
  return `<article id="${lang}" lang="${lang}" dir="${DIR[lang]}"><h1>${esc(doc.title)}</h1><p>${esc(doc.meta)}</p>${body}</article>`;
}

// صفحة HTML ثابتة (بلا JavaScript) بثلاث لغات — مناسبة لروابط المنصات وزواحف Google.
function page(p) {
  const nav = Object.keys(NAMES).map((l) => `<a href="#${l}" lang="${l}">${NAMES[l]}</a>`).join(" · ");
  return `<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(p.n)} — Privacy Policy</title>
<style>body{font:16px/1.7 system-ui,"Noto Sans SC","Segoe UI",Tahoma,sans-serif;max-width:760px;margin:0 auto;padding:20px;color:#15211f}nav{padding:10px 0;border-bottom:1px solid #ddd}article{padding:16px 0 32px;border-bottom:1px solid #ddd}h1{font-size:26px}h2{font-size:18px;margin-top:22px}a{color:#0a6b5f}</style>
</head><body><nav>${nav}</nav>${Object.keys(NAMES).map((l) => block(p, l)).join("")}</body></html>`;
}

const norm = (f) => {
  const s = f.replace(/^\/+/, "");
  return /\.[a-z0-9]+$/i.test(s) ? s : s.replace(/\/+$/, "") + "/index.html";
};

export default function staticPolicies() {
  return {
    name: "static-policies",
    generateBundle() {
      for (const p of projects) {
        const html = page(p);
        const files = new Set([`policy/${p.k}.html`, ...(LEGACY_POLICY_PATHS[p.k] || []).map(norm)]);
        for (const fileName of files) this.emitFile({ type: "asset", fileName, source: html });
      }
    },
  };
}
