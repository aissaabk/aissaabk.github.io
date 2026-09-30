import { createContext, useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { LANGS, STR } from "./strings.js";

const Ctx = createContext(null);
const stored = () => { try { return localStorage.getItem("lang"); } catch { return null; } };

export function I18nProvider({ children }) {
  const [sp, setSp] = useSearchParams();
  const q = sp.get("lang"); // مثال: /#/privacy/app?lang=zh
  const [lang, setL] = useState(LANGS[q] ? q : LANGS[stored()] ? stored() : "ar");

  useEffect(() => { if (LANGS[q]) setL(q); }, [q]);
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = LANGS[lang].dir;
  }, [lang]);

  const setLang = (l) => {
    setL(l);
    try { localStorage.setItem("lang", l); } catch { /* ignore */ }
    if (q) { const n = new URLSearchParams(sp); n.set("lang", l); setSp(n, { replace: true }); }
  };
  const t = (k, vars = {}) => (STR[lang][k] ?? k).replace(/\{(\w+)\}/g, (_, v) => vars[v] ?? "");
  return <Ctx.Provider value={{ lang, setLang, t }}>{children}</Ctx.Provider>;
}

export const useI18n = () => useContext(Ctx);
