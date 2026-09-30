import { CONFIG } from "../config.js";

export default function Footer() {
  return (
    <footer>
      © {new Date().getFullYear()} {CONFIG.owner} — لكل تطبيق سياسة خصوصية برابط ثابت يمكن استخدامه في Google Play.
    </footer>
  );
}
