import { useEffect, useState } from "react";
import { visibleProjects } from "../data/projects.js";
import { CONFIG } from "../config.js";
import { CAT_KEY } from "../i18n/strings.js";
import { useI18n } from "../i18n/I18nContext.jsx";
import ProjectCard from "../components/ProjectCard.jsx";

export default function Home() {
  const { lang, t } = useI18n();
  const [cat, setCat] = useState("all");
  useEffect(() => { document.title = t("t_home", { o: CONFIG.owner[lang] }); }, [lang]);

  const cats = ["all", ...new Set(visibleProjects.map((p) => p.cat))];
  const shown = visibleProjects.filter((p) => cat === "all" || p.cat === cat);
  const android = visibleProjects.filter((p) => p.pl.includes("android")).length;
  const desktop = visibleProjects.filter((p) => p.pl.some((x) => x !== "android")).length;

  return (
    <>
      <section className="hero">
        <h1>{t("hero_t")}</h1>
        <p>{t("hero_p")}</p>
        <div className="stats">
          <span><b>{visibleProjects.length}</b> {t("st_proj")}</span>
          <span><b>{android}</b> {t("st_and")}</span>
          <span><b>{desktop}</b> {t("st_desk")}</span>
        </div>
      </section>
      <div className="filters" role="group" aria-label={t("cats")}>
        {cats.map((c) => (
          <button key={c} className="chip" aria-pressed={c === cat} onClick={() => setCat(c)}>
            {c === "all" ? t("all") : t(CAT_KEY[c] || c)}
          </button>
        ))}
      </div>
      <div className="grid">{shown.map((p) => <ProjectCard key={p.k} project={p} />)}</div>
    </>
  );
}
