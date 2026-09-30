import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getProject } from "../data/projects.js";
import { buildPolicy } from "../utils/privacy.js";
import { CONFIG } from "../config.js";
import { LANGS } from "../i18n/strings.js";
import { useI18n } from "../i18n/I18nContext.jsx";
import NotFound from "./NotFound.jsx";

export default function Privacy() {
  const { id } = useParams();
  const { lang, t } = useI18n();
  const p = getProject(id);
  useEffect(() => { if (p) document.title = t("t_pol", { n: p.n }); }, [p, lang]);
  if (!p) return <NotFound />;

  const doc = buildPolicy(p, lang);
  return (
    <>
      <div className="crumb"><Link to={`/app/${p.k}`}>{LANGS[lang].dir === "rtl" ? "←" : "→"} {p.n}</Link></div>
      <article className="policy" dir={LANGS[lang].dir} lang={lang}>
        <h1>{doc.title}</h1>
        <p>{doc.meta}</p>
        {doc.sections.map((s) => (
          <section key={s.h}>
            <h2>{s.h}</h2>
            {s.items ? <ul>{s.items.map((i) => <li key={i}>{i}</li>)}</ul> : s.text && <p>{s.text}</p>}
            {s.mail && <p><a href={`mailto:${CONFIG.email}`}>{CONFIG.email}</a></p>}
          </section>
        ))}
      </article>
    </>
  );
}
