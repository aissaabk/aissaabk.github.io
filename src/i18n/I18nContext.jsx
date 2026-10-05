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
  const [searchParams, setSearchParams] = useSearchParams();

  const queryLanguage = searchParams.get("lang");
  const storedLanguage = getStoredLanguage();

  const initialLanguage =
    LANGS[queryLanguage]
      ? queryLanguage
      : storedLanguage || "en";

  const [lang, setLangState] = useState(initialLanguage);

  useEffect(() => {
    if (LANGS[queryLanguage]) {
      setLangState(queryLanguage);
    }
  }, [queryLanguage]);

  useEffect(() => {
    const safeLanguage = LANGS[lang] ? lang : "en";

    document.documentElement.lang = safeLanguage;
    document.documentElement.dir = LANGS[safeLanguage].dir;
  }, [lang]);

  function setLang(language) {
    if (!LANGS[language]) {
      return;
    }

    setLangState(language);

    try {
      localStorage.setItem("lang", language);
    } catch {
      // Ignore storage errors
    }

    if (queryLanguage) {
      const params = new URLSearchParams(searchParams);
      params.set("lang", language);

      setSearchParams(params, {
        replace: true,
      });
    }
  }

  function t(key, vars = {}) {
    const value =
      STR[lang]?.[key] ??
      STR.en?.[key] ??
      key;

    return value.replace(
      /\{(\w+)\}/g,
      (_, variable) => vars[variable] ?? ""
    );
  }

  return (
    <Ctx.Provider
      value={{
        lang,
        setLang,
        t,
      }}
    >
      {children}
    </Ctx.Provider>
  );
}

export function useI18n() {
  return useContext(Ctx);
}