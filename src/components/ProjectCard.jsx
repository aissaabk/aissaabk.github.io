import { Link } from "react-router-dom";
import Icon from "./Icon.jsx";
import PlatformBadges from "./PlatformBadges.jsx";
import { localize } from "../i18n/projectText.js";
import { useI18n } from "../i18n/I18nContext.jsx";

export default function ProjectCard({ project }) {
  const { lang } = useI18n();
  const p = localize(project, lang);
  return (
    <Link className="card" to={`/app/${p.k}`}>
      <Icon project={p} />
      <h3>{p.n}</h3>
      <p>{p.d}</p>
      <PlatformBadges platforms={p.pl} />
    </Link>
  );
}
