import { Link } from "react-router-dom";
import Icon from "./Icon.jsx";
import PlatformBadges from "./PlatformBadges.jsx";

export default function ProjectCard({ project }) {
  return (
    <Link className="card" to={`/app/${project.k}`}>
      <Icon project={project} />
      <h3>{project.n}</h3>
      <p>{project.d}</p>
      <PlatformBadges platforms={project.pl} />
    </Link>
  );
}
