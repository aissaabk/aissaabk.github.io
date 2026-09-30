import { Link, NavLink } from "react-router-dom";
import { CONFIG } from "../config.js";

export default function Header() {
  return (
    <header className="top">
      <Link className="brand" to="/">{CONFIG.owner}</Link>
      <nav>
        <NavLink to="/">المشاريع</NavLink>
        <NavLink to="/about">من نحن</NavLink>
        <a href={`mailto:${CONFIG.email}`}>تواصل</a>
      </nav>
    </header>
  );
}
