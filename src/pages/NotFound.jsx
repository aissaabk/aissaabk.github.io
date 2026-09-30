import { Link } from "react-router-dom";
import { useI18n } from "../i18n/I18nContext.jsx";

export default function NotFound() {
  const { t } = useI18n();
  return (
    <section className="hero">
      <h1>{t("nf_t")}</h1>
      <p>{t("nf_p")}</p>
      <Link className="btn" to="/">{t("nf_b")}</Link>
    </section>
  );
}
