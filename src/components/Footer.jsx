import { CONFIG } from "../config.js";
import { useI18n } from "../i18n/I18nContext.jsx";

export default function Footer() {
  const { lang, t } = useI18n();
  return <footer>© {new Date().getFullYear()} {CONFIG.owner[lang]} — {t("foot")}</footer>;
}
