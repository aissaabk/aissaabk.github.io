import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getProject } from "../data/projects.js";
import { buildPolicy } from "../utils/privacy.js";
import { CONFIG } from "../config.js";
import NotFound from "./NotFound.jsx";

export default function Privacy() {
  const { id } = useParams();
  const p = getProject(id);
  const [lang, setLang] = useState("ar");
  useEffect(() => { if (p) document.title = `سياسة الخصوصية - ${p.n}`; }, [p]);
  if (!p) return <NotFound />;

  const doc = buildPolicy(p, lang);
  return (
    <>
      <div className="crumb"><Link to={`/app/${p.k}`}>← {p.n}</Link></div>
      <div className="langs">
        <button className="chip" aria-pressed={lang === "ar"} onClick={() => setLang("ar")}>العربية</button>
        <button className="chip" aria-pressed={lang === "en"} onClick={() => setLang("en")}>English</button>
      </div>
      <article className="policy" dir={lang === "ar" ? "rtl" : "ltr"} lang={lang}>
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
