import { createContext, useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { LANGS, STR } from "./strings.js";

const Ctx = createContext(null);

function getStoredLanguage() {
  try {
    const value = localStorage.getItem("lang");
    return LANGS[value] ? value : null;
  } catch {
    return null;
  }
}

export function I18nProvider({ children }) {
  const [sp, setSp] = useSearchParams();

  const queryLanguage = sp.get("lang");
  const storedLanguage = getStoredLanguage();

  const initialLanguage =
    LANGS[queryLanguage]
      ? queryLanguage
      : storedLanguage || "en";

  const [lang, setL] = useState(initialLanguage);

  useEffect(() => {
    if (LANGS[queryLanguage]) {
      setL(queryLanguage);
    }
  }, [queryLanguage]);

  useEffect(() => {
    const language = LANGS[lang] ? lang : "en";

    document.documentElement.lang = language;
    document.documentElement.dir = LANGS[language].dir;
  }, [lang]);

  const setLang = (language) => {
    if (!LANGS[language]) return;

    setL(language);

    try {
      localStorage.setItem("lang", language);
    } catch {
      // Ignore storage errors
    }

    if (queryLanguage) {
      const params = new URLSearchParams(sp);
      params.set("lang", language);
      setSp(params, { replace: true });
    }
  };

  const t = (key, vars = {}) => {
    const value =
      STR[lang]?.[key] ??
      STR.en?.[key] ??
      key;

    return value.replace(
      /\{(\w+)\}/g,
      (_, variable) => vars[variable] ?? ""
    );
  };

  return (
    <Ctx.Provider value={{ lang, setLang, t }}>
      {children}
    </Ctx.Provider>
  );
}

export const useI18n = () => useContext(Ctx);