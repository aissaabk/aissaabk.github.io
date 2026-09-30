import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getProject, PLATFORMS } from "../data/projects.js";
import { CONFIG } from "../config.js";
import Icon from "../components/Icon.jsx";
import PlatformBadges from "../components/PlatformBadges.jsx";
import NotFound from "./NotFound.jsx";

const mb = (b) => (b / 1048576).toFixed(1) + " MB";

export default function ProjectDetail() {
  const { id } = useParams();
  const p = getProject(id);
  useEffect(() => { if (p) document.title = `${p.n} | ${CONFIG.owner}`; }, [p]);
  if (!p) return <NotFound />;

  const a = p.apks?.[0];
  return (
    <>
      <div className="crumb"><Link to="/">المشاريع</Link> / {p.n}</div>
      <div className="detail">
        <article>
          <Icon project={p} />
          <h1>{p.n}</h1>
          <PlatformBadges platforms={p.pl} />
          <p style={{ fontSize: 18 }}>{p.d}</p>
          {p.f && (<><h2>المزايا</h2><ul>{p.f.map((x) => <li key={x}>{x}</li>)}</ul></>)}
          {p.credit && <div className="note">{p.credit}</div>}
          {p.repo && <p><a href={p.repo} rel="noopener">المشروع الأصلي على GitHub</a></p>}
          <h2>الخصوصية</h2>
          <p>اقرأ <Link to={`/privacy/${p.k}`}>سياسة الخصوصية الخاصة بـ {p.n}</Link> لمعرفة ما يُجمع من بيانات وكيف يُستخدم.</p>
        </article>

        <aside className="panel">
          <h2>التنزيل</h2>
          <div className="dl">
            {p.apks?.map((x) => (
              <a key={x.p} className="btn" href={CONFIG.apkBase + x.p} download>تنزيل {x.l} (APK · {mb(x.s)})</a>
            ))}
            {p.dl?.map((x) => x.u === "#"
              ? <span key={x.l} className="btn alt">قريبًا: {x.l}</span>
              : <a key={x.l} className="btn" href={x.u}>تنزيل {x.l}</a>)}
          </div>
          <h2>التفاصيل</h2>
          <dl>
            <dt>المنصات</dt><dd>{p.pl.map((x) => PLATFORMS[x]).join(", ")}</dd>
            <dt>التصنيف</dt><dd>{p.cat}</dd>
            {a && (<>
              <dt>الإصدار</dt><dd>{a.v}</dd>
              <dt>أدنى أندرويد</dt><dd>API {a.sdk}</dd>
              <dt>Package</dt><dd>{a.p.split("/")[1]}</dd>
              <dt>SHA-256</dt><dd className="sha">{a.h}</dd>
            </>)}
          </dl>
          <p style={{ margin: "14px 0 0" }}><Link to={`/privacy/${p.k}`}>سياسة الخصوصية</Link></p>
        </aside>
      </div>
    </>
  );
}
