import { CONFIG } from "../config.js";

const D = {
  ar: {
    title: "سياسة الخصوصية", upd: "آخر تحديث", dev: "المطوّر",
    H: ["البيانات التي نتعامل معها", "كيف نستخدمها", "المشاركة مع أطراف ثالثة", "الإعلانات", "الاحتفاظ بالبيانات وحذفها", "الأطفال", "التغييرات على السياسة", "التواصل"],
    net: "الاتصال بالإنترنت أو الشبكة لتحميل المحتوى والتواصل مع الخادم.",
    acct: "بيانات الحساب (الاسم والبريد أو رقم الهاتف وبيانات الدخول) لتسجيل الدخول وتقديم الخدمة.",
    files: "الوصول إلى الملفات على جهازك عند اختيارك لها أو حفظها فقط.",
    media: "تشغيل الوسائط وتخزين مؤقت للمحتوى لتحسين الأداء.",
    none: "لا يجمع هذا التطبيق أي بيانات شخصية.",
    use: "نستخدم البيانات المذكورة أعلاه فقط لتشغيل وظائف التطبيق وتحسين أدائه، ولا نستخدمها لأي غرض آخر.",
    share: "لا نبيع بياناتك ولا نشاركها مع أطراف ثالثة، إلا عند وجود التزام قانوني.",
    adsY: "قد يعرض التطبيق روابط تسويقية بالعمولة؛ عند فتحها تنطبق سياسة الموقع الوجهة.",
    adsN: "لا يعرض التطبيق إعلانات.",
    ret: (e) => `تُحفظ البيانات طالما كان حسابك أو استخدامك قائمًا. لطلب حذف بياناتك راسلنا على ${e} وسنحذفها خلال 30 يومًا.`,
    kids: "التطبيق غير موجه للأطفال دون 13 عامًا، ولا نجمع بياناتهم عن علم.",
    chg: "سننشر أي تعديل في هذه الصفحة مع تحديث التاريخ أعلاه.",
  },
  en: {
    title: "Privacy Policy", upd: "Last updated", dev: "Developer",
    H: ["Data we handle", "How we use it", "Sharing with third parties", "Advertising", "Retention and deletion", "Children", "Changes to this policy", "Contact"],
    net: "Internet or network access to load content and talk to the server.",
    acct: "Account data (name, email or phone, credentials) to sign you in and provide the service.",
    files: "Access to files on your device only when you select or save them.",
    media: "Media playback and temporary caching to improve performance.",
    none: "This app does not collect any personal data.",
    use: "We use the data above only to operate the app's features and improve its performance, and for no other purpose.",
    share: "We do not sell your data or share it with third parties, except where required by law.",
    adsY: "The app may show affiliate links; once opened, the destination site's own policy applies.",
    adsN: "The app does not show ads.",
    ret: (e) => `Data is kept while your account or use is active. To request deletion, email ${e} and we will delete it within 30 days.`,
    kids: "The app is not directed to children under 13 and we do not knowingly collect their data.",
    chg: "Any changes will be posted on this page with an updated date above.",
  },
  zh: {
    title: "隐私政策", upd: "最后更新", dev: "开发者",
    H: ["我们处理的数据", "数据用途", "与第三方共享", "广告", "数据保留与删除", "儿童", "政策变更", "联系我们"],
    net: "访问互联网或网络，以加载内容并与服务器通信。",
    acct: "账户数据（姓名、邮箱或电话、登录凭据），用于登录并提供服务。",
    files: "仅在您选择或保存文件时访问设备上的文件。",
    media: "播放媒体并临时缓存内容以提升性能。",
    none: "本应用不收集任何个人数据。",
    use: "我们仅将上述数据用于运行应用功能和提升性能，不用于任何其他目的。",
    share: "我们不会出售您的数据，也不会与第三方共享，法律要求的情况除外。",
    adsY: "本应用可能显示联盟推广链接；打开后适用目标网站自己的政策。",
    adsN: "本应用不显示广告。",
    ret: (e) => `只要您的账户或使用仍在持续，数据就会被保留。如需删除数据，请发送邮件至 ${e}，我们将在 30 天内删除。`,
    kids: "本应用不面向 13 岁以下儿童，我们不会有意收集其数据。",
    chg: "任何变更都会发布在本页面，并更新上方的日期。",
  },
};

/** يولّد سياسة الخصوصية لمشروع بحسب حقل data (net | acct | files | media | ads). */
export function buildPolicy(p, lang = "ar") {
  const T = D[lang] || D.ar;
  const d = p.data || {};
  const items = ["net", "acct", "files", "media"].filter((k) => d[k]).map((k) => T[k]);
  const sep = lang === "zh" ? "：" : ": ";
  return {
    title: `${T.title} — ${p.n}`,
    meta: `${T.upd}${sep}${CONFIG.policyDate}. ${T.dev}${sep}${CONFIG.owner[lang] || CONFIG.owner.en}.`,
    sections: [
      items.length ? { h: T.H[0], items } : { h: T.H[0], text: T.none },
      { h: T.H[1], text: T.use },
      { h: T.H[2], text: T.share },
      { h: T.H[3], text: d.ads ? T.adsY : T.adsN },
      { h: T.H[4], text: T.ret(CONFIG.email) },
      { h: T.H[5], text: T.kids },
      { h: T.H[6], text: T.chg },
      { h: T.H[7], text: "", mail: true },
    ],
  };
}
