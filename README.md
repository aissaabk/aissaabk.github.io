# المنهل للبرمجيات — موقع المشاريع

موقع React (Vite) يعرض تطبيقاتنا مع صفحة تفاصيل وسياسة خصوصية لكل تطبيق.

## الهيكل

```
├─ .github/workflows/deploy.yml   نشر تلقائي على GitHub Pages
├─ public/                        ملفات ثابتة (favicon)
├─ src/
│  ├─ config.js                   الاسم والبريد ومسار ملفات APK
│  ├─ data/projects.js            قائمة المشاريع (هنا تضيف مشروعًا جديدًا)
│  ├─ components/                 Header, Footer, ProjectCard, Icon, PlatformBadges
│  ├─ pages/                      Home, ProjectDetail, Privacy, About, NotFound
│  ├─ utils/privacy.js            مولّد سياسة الخصوصية (عربي/إنجليزي)
│  ├─ styles/index.css
│  ├─ App.jsx                     المسارات
│  └─ main.jsx
├─ index.html · vite.config.js · package.json
```

## التشغيل محليًا

```bash
npm install
npm run dev      # تطوير
npm run build    # بناء في مجلد dist
```

## النشر

1. ارفع المشروع إلى مستودع `aissaabk.github.io` على الفرع `main`.
2. من Settings ← Pages اختر Source: **GitHub Actions**.
3. كل `git push` ينشر الموقع تلقائيًا.

## إضافة مشروع

أضف كائنًا في `src/data/projects.js` (الحقول موثقة أعلى الملف). تُنشأ صفحة التفاصيل وسياسة الخصوصية تلقائيًا:

- التفاصيل: `/#/app/<k>`
- الخصوصية: `/#/privacy/<k>` ← هذا الرابط تضعه في Google Play.
