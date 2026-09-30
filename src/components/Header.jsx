import { Link, NavLink } from "react-router-dom";
import { CONFIG } from "../config.js";
import { LANGS } from "../i18n/strings.js";
import { useI18n } from "../i18n/I18nContext.jsx";

export default function Header() {
  const { lang, setLang, t } = useI18n();
  return (
    <header className="top">
      <Link className="brand" to="/">{CONFIG.owner[lang]}</Link>
      <nav>
        <NavLink to="/">{t("nav_projects")}</NavLink>
        <NavLink to="/about">{t("nav_about")}</NavLink>
        <a href={`mailto:${CONFIG.email}`}>{t("nav_contact")}</a>
        <span className="langsw" role="group" aria-label={t("lang")}>
          {Object.entries(LANGS).map(([k, v]) => (
            <button key={k} className="chip sm" lang={k} aria-pressed={k === lang} onClick={() => setLang(k)}>{v.name}</button>
          ))}
        </span>
      </nav>
    </header>
  );
}
