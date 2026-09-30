import { CONFIG } from "../config.js";

/** يولّد نص سياسة الخصوصية لمشروع بحسب حقل data (net | acct | files | media | ads). */
export function buildPolicy(p, lang = "ar") {
  const ar = lang === "ar";
  const L = (a, e) => (ar ? a : e);
  const d = p.data || {};

  const items = [
    d.net && L("الاتصال بالإنترنت أو الشبكة لتحميل المحتوى والتواصل مع الخادم.", "Internet or network access to load content and talk to the server."),
    d.acct && L("بيانات الحساب (الاسم والبريد أو رقم الهاتف وبيانات الدخول) لتسجيل الدخول وتقديم الخدمة.", "Account data (name, email or phone, credentials) to sign you in and provide the service."),
    d.files && L("الوصول إلى الملفات على جهازك عند اختيارك لها أو حفظها فقط.", "Access to files on your device only when you select or save them."),
    d.media && L("تشغيل الوسائط وتخزين مؤقت للمحتوى لتحسين الأداء.", "Media playback and temporary caching to improve performance."),
  ].filter(Boolean);

  const H = ar
    ? ["البيانات التي نتعامل معها", "كيف نستخدمها", "المشاركة مع أطراف ثالثة", "الإعلانات", "الاحتفاظ بالبيانات وحذفها", "الأطفال", "التغييرات على السياسة", "التواصل"]
    : ["Data we handle", "How we use it", "Sharing with third parties", "Advertising", "Retention and deletion", "Children", "Changes to this policy", "Contact"];

  return {
    title: `${L("سياسة الخصوصية", "Privacy Policy")} — ${p.n}`,
    meta: `${L("آخر تحديث", "Last updated")}: ${CONFIG.policyDate}. ${L("المطوّر", "Developer")}: ${CONFIG.owner}.`,
    sections: [
      items.length ? { h: H[0], items } : { h: H[0], text: L("لا يجمع هذا التطبيق أي بيانات شخصية.", "This app does not collect any personal data.") },
      { h: H[1], text: L("نستخدم البيانات المذكورة أعلاه فقط لتشغيل وظائف التطبيق وتحسين أدائه، ولا نستخدمها لأي غرض آخر.", "We use the data above only to operate the app's features and improve its performance, and for no other purpose.") },
      { h: H[2], text: L("لا نبيع بياناتك ولا نشاركها مع أطراف ثالثة، إلا عند وجود التزام قانوني.", "We do not sell your data or share it with third parties, except where required by law.") },
      { h: H[3], text: d.ads
          ? L("قد يعرض التطبيق روابط تسويقية بالعمولة؛ عند فتحها تنطبق سياسة الموقع الوجهة.", "The app may show affiliate links; once opened, the destination site's own policy applies.")
          : L("لا يعرض التطبيق إعلانات.", "The app does not show ads.") },
      { h: H[4], text: L(`تُحفظ البيانات طالما كان حسابك أو استخدامك قائمًا. لطلب حذف بياناتك راسلنا على ${CONFIG.email} وسنحذفها خلال 30 يومًا.`, `Data is kept while your account or use is active. To request deletion, email ${CONFIG.email} and we will delete it within 30 days.`) },
      { h: H[5], text: L("التطبيق غير موجه للأطفال دون 13 عامًا، ولا نجمع بياناتهم عن علم.", "The app is not directed to children under 13 and we do not knowingly collect their data.") },
      { h: H[6], text: L("سننشر أي تعديل في هذه الصفحة مع تحديث التاريخ أعلاه.", "Any changes will be posted on this page with an updated date above.") },
      { h: H[7], text: "", mail: true },
    ],
  };
}
