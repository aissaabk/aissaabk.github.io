import { useEffect, useState } from "react";
import { visibleProjects } from "../data/projects.js";
import { CONFIG } from "../config.js";
import ProjectCard from "../components/ProjectCard.jsx";

export default function Home() {
  const [cat, setCat] = useState("الكل");
  useEffect(() => { document.title = `${CONFIG.owner} | تطبيقات أندرويد وسطح المكتب`; }, []);

  const cats = ["الكل", ...new Set(visibleProjects.map((p) => p.cat))];
  const shown = visibleProjects.filter((p) => cat === "الكل" || p.cat === cat);
  const android = visibleProjects.filter((p) => p.pl.includes("android")).length;
  const desktop = visibleProjects.filter((p) => p.pl.some((x) => x !== "android")).length;

  return (
    <>
      <section className="hero">
        <h1>تطبيقات تعمل على هاتفك وحاسوبك</h1>
        <p>نطوّر تطبيقات أندرويد وبرامج ويندوز ولينكس، وكل تطبيق له صفحة تعريف ورابط تنزيل مباشر وسياسة خصوصية واضحة.</p>
        <div className="stats">
          <span><b>{visibleProjects.length}</b> مشروعًا</span>
          <span><b>{android}</b> على أندرويد</span>
          <span><b>{desktop}</b> لسطح المكتب</span>
        </div>
      </section>
      <div className="filters" role="group" aria-label="التصنيف">
        {cats.map((c) => (
          <button key={c} className="chip" aria-pressed={c === cat} onClick={() => setCat(c)}>{c}</button>
        ))}
      </div>
      <div className="grid">
        {shown.map((p) => <ProjectCard key={p.k} project={p} />)}
      </div>
    </>
  );
}
