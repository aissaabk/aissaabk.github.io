import { useEffect } from "react";
import { CONFIG } from "../config.js";

export default function About() {
  useEffect(() => { document.title = `من نحن | ${CONFIG.owner}`; }, []);
  return (
    <section className="hero">
      <h1>{CONFIG.owner}</h1>
      <p>شركة برمجيات تبني تطبيقات أندرويد وبرامج سطح المكتب للمدارس والأفراد والشركات الصغيرة. إن كانت لديك فكرة أو مدرسة تحتاج نظامًا، راسلنا.</p>
      <a className="btn" href={`mailto:${CONFIG.email}`}>راسلنا</a>
    </section>
  );
}
