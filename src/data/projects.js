/**
 * قائمة المشاريع — هذا هو الملف الوحيد الذي تعدّله لإضافة مشروع جديد.
 *
 * k: المعرّف في الرابط | n: الاسم | c: لون الأيقونة | cat: التصنيف
 * pl: المنصات (android | windows | linux | mac | web)
 * d: الوصف | f: المزايا | credit/repo: إشارة لمشروع مفتوح المصدر
 * apks: [{l: عنوان, p: apk_path, s: bytes, v: الإصدار, sdk: min_sdk, h: SHA-256}]
 * dl: [{l: عنوان, u: رابط}] — استخدم "#" لعرض "قريبًا"
 * data: ما يجمعه التطبيق ويولّد سياسة الخصوصية: net | acct | files | media | ads
 * hidden: true لإخفاء المشروع من الموقع
 */
export const projects = [
{k:"quran-school",n:"إدارة المدارس القرآنية",c:"#0a6b5f",cat:"تعليم",pl:["windows","android"],
 d:"نظام متكامل لمدارس تحفيظ القرآن: برنامج ويندوز للمسيّرين لإدارة الطلاب والحلقات والحضور، وتطبيق هاتف للآباء لمتابعة تقدم أبنائهم.",
 f:["برنامج ويندوز للمسيّرين","تطبيق أندرويد لأولياء الأمور","متابعة الحضور والحفظ والمراجعة"],
 apks:[{l:"تطبيق الآباء",p:"apps/com.quranicschool.parents/app-release.apk",s:15678656,v:"1.0.0",sdk:24,h:"7740b6dcf5d12af7af616c61d979b5ed476999d52879f98a7513d6b261fc4b7d"},
       {l:"تطبيق الإدارة (أندرويد)",p:"apps/com.quranicschool.admin/app-release.apk",s:15662192,v:"1.0.0",sdk:24,h:"36e8e7fda1978a994116bac03b32b909f5b3d78b5f6af85f73512f3a8fd012bb"}],
 dl:[{l:"نسخة ويندوز للمسيّرين",u:"#"}],data:{net:1,acct:1}},
{k:"school-manager",n:"إدارة المدارس التعليمية",c:"#2f5fa8",cat:"تعليم",pl:["windows","android"],
 d:"برنامج لإدارة مدارس اللغات ودروس الدعم والمدارس الخاصة: التسجيل، الأفواج، الجداول، الدفعات والتقارير.",
 f:["الأفواج والجداول","الدفعات والفواتير","تقارير الحضور والنتائج"],dl:[{l:"نسخة ويندوز",u:"#"}],data:{net:1,acct:1}},
{k:"downloader",n:"برنامج التحميل متعدد الأنظمة",c:"#7a3fa0",cat:"أدوات",pl:["windows","linux","mac","android"],
 d:"مدير تحميل سريع يعمل على ويندوز ولينكس وماك وأندرويد، مع استئناف التحميل وتعدد الاتصالات.",
 f:["استئناف التحميل","تحميل متعدد المسارات","واجهة موحدة على كل الأنظمة"],
 dl:[{l:"Windows",u:"#"},{l:"Linux",u:"#"},{l:"macOS",u:"#"}],data:{net:1,files:1}},
{k:"vrka",n:"محمّل الفيديو (VRKA)",c:"#c0392b",cat:"أدوات",pl:["android"],
 d:"تطبيق أندرويد لتحميل الفيديوهات من المصادر المدعومة، مبني على المشروع مفتوح المصدر VRKA-Android.",
 f:["تحميل بجودات مختلفة","حفظ في مجلد التنزيلات"],repo:"https://github.com/MaverickRox/VRKA-Android",
 credit:"مبني على مشروع مفتوح المصدر لـ MaverickRox. راجع رخصة المشروع الأصلي وأبقِ الإشارة لصاحبه.",dl:[{l:"APK",u:"#"}],data:{net:1,files:1}},
{k:"code-studio",n:"Mobile Code Studio",c:"#1f2937",cat:"أدوات",pl:["android"],
 d:"محرر أكواد للهاتف بتجربة قريبة من VS Code: تلوين الصيغ، إدارة الملفات، ومحرر بعدة تبويبات.",
 f:["تلوين الصيغة","إدارة المشاريع والملفات"],
 apks:[{l:"الإصدار التجريبي",p:"apps/com.mobilecodestudio.app/app-release.apk",s:11008923,v:"0.1.0-stage1",sdk:26,h:"35c5e2db4c578fb825c9efda04c859cf2a5dbeec42884d213562debab60001dc"}],data:{files:1}},
{k:"windows-ide",n:"بيئة تطوير لويندوز",c:"#0e6ba8",cat:"أدوات",pl:["windows"],
 d:"محرر أكواد (IDE) لنظام ويندوز يحاكي واجهة VS Code: مستكشف ملفات، تبويبات، محرر طرفية وإضافات.",
 f:["واجهة مألوفة لمستخدمي VS Code","محرر وطرفية مدمجة"],dl:[{l:"نسخة ويندوز",u:"#"}],data:{files:1}},
{k:"universalprint",n:"UniversalPrint",c:"#455a64",cat:"أدوات",pl:["windows","android"],
 d:"نظام طباعة من الهاتف إلى أي طابعة: ثبّت خادم UniversalPrint على حاسوب ويندوز المتصل بالطابعة، ثم أرسل المستندات والصور من تطبيق أندرويد عبر الشبكة.",
 f:["خادم ويندوز يدير الطابعات المتصلة بالحاسوب","تطبيق أندرويد لإرسال الملفات للطباعة","يعمل عبر الشبكة المحلية"],
 dl:[{l:"خادم UniversalPrint لويندوز",u:"#"}],
 apks:[{l:"تطبيق الطباعة (أندرويد)",p:"apps/com.devbelmel.universalprinter/app-release.apk",s:12282108,v:"1.0",sdk:26,h:"ce009ffeb13e36dcb6ae4df00be085487de4d146c1b396aef6c8940af320755f"}],data:{net:1,files:1}},
{k:"aliaffiliate",n:"AliAffiliate",c:"#e2531f",cat:"تجارة",pl:["android"],
 d:"تطبيق للتسويق بالعمولة يعرض منتجات AliExpress مع روابط الشراء.",
 apks:[{l:"AliAffiliate",p:"apps/com.aliaffiliate.app/app-release.apk",s:6962473,v:"1.0",sdk:24,h:"53547d220d25144018afffc02552b08c8d62cc40632a9e5dffeb3a35d8cba34f"}],data:{net:1,ads:1}},
{k:"offers",n:"Offers",c:"#b8860b",cat:"تجارة",pl:["android"],
 d:"تجميع العروض والتخفيضات في مكان واحد.",
 apks:[{l:"Offers",p:"apps/com.devbelmel.offers_app/app-release.apk",s:15102698,v:"1.0",sdk:24,h:"fede9115f8ccc4ab16dfd14bcbc7d75beb6e6a756d4b65574a2e7eeb5ec05093"}],data:{net:1}},
{k:"appstore",n:"AppStore",c:"#1b7f5a",cat:"أدوات",pl:["android"],
 d:"متجر تطبيقات مستقل لتنزيل تطبيقاتي وتحديثها مع التحقق من البصمة (SHA-256).",
 apks:[{l:"AppStore",p:"apps/com.devbelmel.appstore_app/app-release.apk",s:4608362,v:"0.1.0",sdk:26,h:"64954553a3b36d4a87762f064a1bf74a33afefa6d8044aa1777568f6e7fee7f3"}],data:{net:1,files:1}},
{k:"manhal",n:"Manhal",c:"#6b4e2e",cat:"تعليم",pl:["android"],
 d:"تطبيق تعليمي.",apks:[{l:"Manhal",p:"apps/com.devbelmel.manhal_app/app-release.apk",s:10776006,v:"1.0",sdk:24,h:"0ceab02ff67222347128bdd2c021e6f3285cf0c26536dba0b60ccdccf2d81011"}],data:{net:1}},
{k:"hikmah",n:"Hikmah",c:"#8a5a9a",cat:"تعليم",pl:["android"],
 d:"تطبيق حِكَم وفوائد يومية.",apks:[{l:"Hikmah",p:"apps/com.hikmah.app/app-release.apk",s:18905589,v:"1.0",sdk:24,h:"3782fcbf45791c05de7cb86305e29b35b9c48ed5129c02e83b167edb3b80ac8a"}],data:{net:1}},
{k:"mediahub",n:"MediaHub",c:"#d6336c",cat:"وسائط",pl:["android"],
 d:"مركز للوسائط: تصفح ومشاهدة المحتوى، مع تطبيق إدارة مخصص للمشرف.",
 apks:[{l:"MediaHub",p:"apps/com.mediahub.app/app-release.apk",s:5770215,v:"1.0",sdk:24,h:"de06e6225f5dccb0ef2fa59228f388d12998c2b2445569c7faac91c509b107ef"},
       {l:"MediaHub Admin",p:"apps/com.mediahub.admin/app-release.apk",s:2983718,v:"1.0",sdk:24,h:"c0cd8319b50478a01990ebfab7dc3f90a7194a4a738479acd3c864a52d7167ab"}],data:{net:1,acct:1,media:1}},
{k:"partscompat",n:"PartsCompat",c:"#37474f",cat:"أدوات",pl:["android"],
 d:"التحقق من توافق قطع الغيار مع الموديلات.",
 apks:[{l:"PartsCompat",p:"apps/com.devbelmel.partscompat_app/app-release.apk",s:10260132,v:"1.0",sdk:24,h:"073f70a99907c45bb45924e775339f5868a582f759eb47057902a05e6c4fb95c"}],data:{net:1}},
{k:"shwiya",n:"Shwiya",c:"#c2410c",cat:"وسائط",pl:["android"],
 d:"تطبيق ترفيهي خفيف.",apks:[{l:"Shwiya",p:"apps/com.devbelmel.shwiya_app/app-release.apk",s:14001482,v:"0.1.0",sdk:26,h:"92ab0373863b976c286c1f9083558c9f2fcc72a870f14ad84141aa681b877078"}],data:{net:1,media:1}},
{k:"tikclone",n:"TikClone",c:"#111827",cat:"وسائط",hidden:true,pl:["android"],
 d:"تجربة فيديوهات قصيرة.",apks:[{l:"TikClone",p:"apps/com.devbelmel.tikclone_app/app-release.apk",s:13950989,v:"0.1.0",sdk:26,h:"856ff9e6ba5a622177844e61399ebde862ee16b3f7254c25d93fd300d8e5e139"}],data:{net:1,media:1,acct:1}}
];

export const PLATFORMS = { android: "Android", windows: "Windows", linux: "Linux", mac: "macOS", web: "Web" };

export const visibleProjects = projects.filter((p) => !p.hidden);
export const getProject = (id) => projects.find((p) => p.k === id);
