import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getProject, PLATFORMS } from "../data/projects.js";
import { CONFIG } from "../config.js";
import { CAT_KEY } from "../i18n/strings.js";
import { localize, label } from "../i18n/projectText.js";
import { useI18n } from "../i18n/I18nContext.jsx";
import Icon from "../components/Icon.jsx";
import PlatformBadges from "../components/PlatformBadges.jsx";
import NotFound from "./NotFound.jsx";

const mb = (b) => (b / 1048576).toFixed(1) + " MB";

export default function ProjectDetail() {
  const { id } = useParams();
  const { lang, t } = useI18n();
  const raw = getProject(id);
  useEffect(() => { if (raw) document.title = `${raw.n} | ${CONFIG.owner[lang]}`; }, [raw, lang]);
  if (!raw) return <NotFound />;

  const p = localize(raw, lang);
  const a = p.apks?.[0];
  return (
    <>
      <div className="crumb"><Link to="/">{t("nav_projects")}</Link> / {p.n}</div>
      <div className="detail">
        <article>
          <Icon project={p} />
          <h1>{p.n}</h1>
          <PlatformBadges platforms={p.pl} />
          <p style={{ fontSize: 18 }}>{p.d}</p>
          {p.f && (<><h2>{t("features")}</h2><ul>{p.f.map((x) => <li key={x}>{x}</li>)}</ul></>)}
          {p.credit && <div className="note">{p.credit}</div>}
          {p.repo && <p><a href={p.repo} rel="noopener">{t("repo")}</a></p>}
          <h2>{t("privacy")}</h2>
          <p>{t("pol_a")} <Link to={`/privacy/${p.k}`}>{t("pol_b", { n: p.n })}</Link> {t("pol_c")}</p>
        </article>

        <aside className="panel">
          <h2>{t("dl_h")}</h2>
          <div className="dl">
            {p.apks?.map((x) => (
              <a key={x.p} className="btn" href={CONFIG.apkBase + x.p} download>{t("dl_apk", { l: label(x.l, lang), s: mb(x.s) })}</a>
            ))}
            {p.dl?.map((x) => x.u === "#"
              ? <span key={x.l} className="btn alt">{t("dl_soon", { l: label(x.l, lang) })}</span>
              : <a key={x.l} className="btn" href={x.u}>{t("dl_get", { l: label(x.l, lang) })}</a>)}
          </div>
          <h2>{t("det")}</h2>
          <dl>
            <dt>{t("plats")}</dt><dd>{p.pl.map((x) => PLATFORMS[x]).join(", ")}</dd>
            <dt>{t("cat")}</dt><dd>{t(CAT_KEY[p.cat] || p.cat)}</dd>
            {a && (<>
              <dt>{t("ver")}</dt><dd>{a.v}</dd>
              <dt>{t("minand")}</dt><dd>API {a.sdk}</dd>
              <dt>Package</dt><dd>{a.p.split("/")[1]}</dd>
              <dt>SHA-256</dt><dd className="sha">{a.h}</dd>
            </>)}
          </dl>
          <p style={{ margin: "14px 0 0" }}><Link to={`/privacy/${p.k}`}>{t("pol_short")}</Link></p>
        </aside>
      </div>
    </>
  );
}
