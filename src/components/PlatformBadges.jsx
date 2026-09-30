import { PLATFORMS } from "../data/projects.js";

export default function PlatformBadges({ platforms }) {
  return (
    <div className="badges">
      {platforms.map((x) => (
        <span className="b" key={x}>{PLATFORMS[x]}</span>
      ))}
    </div>
  );
}
