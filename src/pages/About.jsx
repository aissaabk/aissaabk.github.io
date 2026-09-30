import { useEffect } from "react";
import { CONFIG } from "../config.js";
import { useI18n } from "../i18n/I18nContext.jsx";

export default function About() {
  const { lang, t } = useI18n();
  useEffect(() => { document.title = t("t_about", { o: CONFIG.owner[lang] }); }, [lang]);
  return (
    <section className="hero">
      <h1>{CONFIG.owner[lang]}</h1>
      <p>{t("about_p")}</p>
      <a className="btn" href={`mailto:${CONFIG.email}`}>{t("about_btn")}</a>
    </section>
  );
}
