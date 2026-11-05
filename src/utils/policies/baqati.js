import { CONFIG } from "../../config.js";

const TEXT = {
  ar: {
    title: "سياسة الخصوصية — باقاتي",
    meta: (date, owner) => `آخر تحديث: ${date}. المطوّر: ${owner}.`,
    notice:
      "«باقاتي» تطبيق مستقل غير تابع ولا معتمد من جيزي (Djezzy) أو موبيليس (Mobilis) أو أوريدو (Ooredoo) أو اتصالات الجزائر (Algérie Télécom). أسماء المتعاملين وعلاماتهم ملك لأصحابها، وتُذكر فقط لبيان التوافق.",
    intro:
      "«باقاتي» تطبيق مستقل يجمع خدمات الهاتف المحمول في الجزائر في مكان واحد: تفعيل العروض، متابعة الرصيد، إلغاء الخدمات المدفوعة، وتعبئة إنترنت Idoom 4G من الصفحات الرسمية.",
    sections: [
      {
        h: "1. المعلومات التي يعالجها التطبيق على جهازك",
        p: [
          "يعالج التطبيق على جهازك فقط: متعامل شريحتك ومعرّف الاشتراك (لتحديد الشريحة الصحيحة، وكل شريحة في الأجهزة ثنائية الشريحة)، وردود المتعامل على أكواد USSD التي تطلبها أنت (مثل الرصيد).",
          "تُعالَج هذه المعلومات على جهازك فقط ولا تُرسل إلى خوادمنا.",
        ],
      },
      {
        h: "2. سجل العمليات",
        p: [
          "يُحفظ سجل عملياتك محليًا على جهازك فقط، ويمكنك مسحه من داخل التطبيق في أي وقت أو بحذف التطبيق.",
        ],
      },
      {
        h: "3. الصلاحيات",
        p: [
          "يطلب التطبيق إذن الاتصال (Phone) لإرسال أكواد USSD التي تطلبها أنت فقط، وإذن حالة الهاتف (Phone state) لمعرفة متعامل كل شريحة. لا نستعمل هذه الصلاحيات لأي غرض آخر، ولا تُرسل نتائجها إلى أي خادم.",
        ],
      },
      {
        h: "4. الإعلانات",
        p: [
          "يستعمل التطبيق Google AdMob لعرض الإعلانات. قد تجمع Google معرّف الإعلان وعنوان IP وبيانات الجهاز واستخدام التطبيق لعرض الإعلانات وقياسها وفق سياساتها:",
        ],
        links: [
          {
            t: "https://policies.google.com/technologies/ads",
            u: "https://policies.google.com/technologies/ads",
          },
        ],
      },
      {
        h: "5. صفحات التعبئة",
        p: [
          "تُفتح صفحات تعبئة Idoom 4G داخل التطبيق وهي تابعة لاتصالات الجزائر وتخضع لسياستها. لا يجمع تطبيقنا بيانات الدفع ولا أرقام التعبئة ولا يخزّنها.",
        ],
      },
      {
        h: "6. الإعدادات عن بُعد",
        p: [
          "يجلب التطبيق قوائم العروض والأكواد من خادمنا دون إرسال أي بيانات شخصية.",
        ],
      },
      {
        h: "7. الأطفال",
        p: [
          "التطبيق غير موجّه للأطفال دون 13 عامًا، ولا نجمع بياناتهم عن قصد.",
        ],
      },
      {
        h: "8. حقوقك وحذف البيانات",
        p: [
          "لا نحتفظ ببياناتك الشخصية على خوادمنا. لحذف بيانات التطبيق امسح السجل من داخل التطبيق أو احذف التطبيق من جهازك.",
        ],
      },
      {
        h: "9. التعديلات على هذه السياسة",
        p: [
          "قد تُحدَّث هذه السياسة من وقت لآخر، ويُنشر أي تغيير في هذه الصفحة مع تاريخ «آخر تحديث» جديد.",
        ],
      },
      { h: "10. التواصل", mail: true },
    ],
  },
  en: {
    title: "Privacy Policy — Baqati",
    meta: (date, owner) => `Last updated: ${date}. Developer: ${owner}.`,
    notice:
      "Baqati is an independent app. It is not affiliated with, endorsed by, or sponsored by Djezzy, Mobilis, Ooredoo or Algérie Télécom. Operator names and trademarks belong to their owners and are used only to describe compatibility.",
    intro:
      "Baqati is an independent application that brings your Algerian mobile services together in one place: activating offers, checking your balance, cancelling paid services, and topping up Idoom 4G from the official pages.",
    sections: [
      {
        h: "1. Information processed on your device",
        p: [
          "The App processes on your device only: your SIM operator and subscription identifier (to identify the correct SIM, including each SIM on dual-SIM phones), and the operator's replies to the USSD codes you request (such as your balance).",
          "This information is processed on your device only and is not sent to our servers.",
        ],
      },
      {
        h: "2. Operation history",
        p: [
          "Your operation history is stored locally on your device only, and you can clear it from inside the App at any time or by deleting the App.",
        ],
      },
      {
        h: "3. Permissions",
        p: [
          "The App requests the Phone permission to send the USSD codes you request only, and the Phone state permission to identify each SIM's operator. We do not use these permissions for any other purpose, and their results are not sent to any server.",
        ],
      },
      {
        h: "4. Advertising",
        p: [
          "The App uses Google AdMob to display ads. Google may collect the advertising ID, IP address, device data, and app usage to display and measure ads in accordance with its policies:",
        ],
        links: [
          {
            t: "https://policies.google.com/technologies/ads",
            u: "https://policies.google.com/technologies/ads",
          },
        ],
      },
      {
        h: "5. Top-up pages",
        p: [
          "Idoom 4G top-up pages open inside the App and belong to Algérie Télécom and are subject to its policy. Our App does not collect or store payment data or top-up numbers.",
        ],
      },
      {
        h: "6. Remote configuration",
        p: [
          "The App fetches offer lists and codes from our server without sending any personal data.",
        ],
      },
      {
        h: "7. Children's privacy",
        p: [
          "The App is not directed at children under 13, and we do not knowingly collect their information.",
        ],
      },
      {
        h: "8. Your rights and data deletion",
        p: [
          "We do not retain your personal data on our servers. To delete App data, clear the history from inside the App or delete the App from your device.",
        ],
      },
      {
        h: "9. Changes to this policy",
        p: [
          "This Privacy Policy may be updated from time to time. Any changes will be published on this page with a new 'Last updated' date.",
        ],
      },
      { h: "10. Contact us", mail: true },
    ],
  },
};

/**
 * يبني كائن السياسة بنفس بنية buildPolicy العامة
 * (title, meta, notice, intro, sections) حتى تعمل
 * صفحة Privacy.jsx ومولّد staticPolicies دون تعديل.
 */
export function buildBaqatiPolicy(p, lang = "ar") {
  const T = TEXT[lang] || TEXT.ar;
  const owner =
    CONFIG.owner?.[lang] || CONFIG.owner?.en || "Al-Manhal Software";
  return {
    title: T.title,
    meta: T.meta(CONFIG.policyDate, owner),
    notice: T.notice,
    intro: T.intro,
    sections: T.sections.map((s) => ({
      h: s.h,
      items: s.items,
      text: s.p ? s.p.join(" ") : undefined,
      paragraphs: s.p,
      links: s.links,
      mail: s.mail,
    })),
  };
}
