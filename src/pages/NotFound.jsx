import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="hero">
      <h1>الصفحة غير موجودة</h1>
      <p>الرابط الذي فتحته غير صحيح أو حُذف المشروع.</p>
      <Link className="btn" to="/">العودة إلى المشاريع</Link>
    </section>
  );
}
