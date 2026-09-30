// ترجمات وصف المشاريع ومزاياها. العربية تُقرأ من data/projects.js مباشرة.
const TR = {
  "quran-school": {
    en: { d: "A complete system for Quran memorization schools: a Windows program for administrators to manage students, circles and attendance, and a phone app for parents to follow their children's progress.", f: ["Windows program for administrators", "Android app for parents", "Track attendance, memorization and revision"] },
    zh: { d: "面向古兰经学校的完整系统：管理员使用的 Windows 程序，用于管理学生、学习小组和出勤；家长使用的手机应用，用于跟踪孩子的学习进度。", f: ["管理员 Windows 程序", "家长 Android 应用", "跟踪出勤、背诵和复习"] },
  },
  "school-manager": {
    en: { d: "Software for language schools, tutoring centers and private schools: enrollment, groups, timetables, payments and reports.", f: ["Groups and timetables", "Payments and invoices", "Attendance and results reports"] },
    zh: { d: "适用于语言学校、辅导中心和私立学校的管理软件：报名、班级、课表、缴费和报表。", f: ["班级与课表", "缴费与发票", "出勤与成绩报表"] },
  },
  downloader: {
    en: { d: "A fast download manager for Windows, Linux, macOS and Android, with resume support and multiple connections.", f: ["Resume downloads", "Multi-connection downloading", "One interface on every system"] },
    zh: { d: "支持 Windows、Linux、macOS 和 Android 的快速下载管理器，支持断点续传和多线程下载。", f: ["断点续传", "多线程下载", "所有系统界面一致"] },
  },
  vrka: {
    en: { d: "An Android app for downloading videos from supported sources, built on the open-source VRKA-Android project.", f: ["Multiple quality options", "Saves to the Downloads folder"], credit: "Based on an open-source project by MaverickRox. Check the original license and keep the attribution." },
    zh: { d: "用于从受支持来源下载视频的 Android 应用，基于开源项目 VRKA-Android 开发。", f: ["多种清晰度可选", "保存到下载文件夹"], credit: "基于 MaverickRox 的开源项目。请查看原项目许可证并保留署名。" },
  },
  "code-studio": {
    en: { d: "A mobile code editor with a VS Code-like experience: syntax highlighting, file management and multi-tab editing.", f: ["Syntax highlighting", "Project and file management"] },
    zh: { d: "体验接近 VS Code 的手机代码编辑器：语法高亮、文件管理和多标签编辑。", f: ["语法高亮", "项目与文件管理"] },
  },
  "windows-ide": {
    en: { d: "A code editor (IDE) for Windows that mimics the VS Code interface: file explorer, tabs, integrated terminal and extensions.", f: ["Familiar for VS Code users", "Built-in editor and terminal"] },
    zh: { d: "适用于 Windows 的代码编辑器（IDE），界面类似 VS Code：文件浏览器、标签页、内置终端和扩展。", f: ["VS Code 用户上手即用", "内置编辑器和终端"] },
  },
  universalprint: {
    en: { d: "Print from your phone to any printer: install the UniversalPrint server on the Windows PC connected to the printer, then send documents and photos from the Android app over the network.", f: ["Windows server manages the connected printers", "Android app sends files to print", "Works over the local network"] },
    zh: { d: "从手机打印到任意打印机：在连接打印机的 Windows 电脑上安装 UniversalPrint 服务端，然后通过 Android 应用经网络发送文档和图片。", f: ["Windows 服务端管理已连接的打印机", "Android 应用发送文件打印", "通过局域网工作"] },
  },
  aliaffiliate: { en: { d: "An affiliate marketing app showing AliExpress products with purchase links." }, zh: { d: "联盟营销应用，展示 AliExpress 商品并提供购买链接。" } },
  offers: { en: { d: "All offers and discounts in one place." }, zh: { d: "把所有优惠和折扣集中在一个地方。" } },
  appstore: { en: { d: "An independent app store to download and update our apps, with SHA-256 verification." }, zh: { d: "独立应用商店，用于下载和更新我们的应用，并进行 SHA-256 校验。" } },
  manhal: { en: { d: "An educational app." }, zh: { d: "教育类应用。" } },
  hikmah: { en: { d: "An app with daily wisdom and benefits." }, zh: { d: "每日箴言与知识分享应用。" } },
  mediahub: { en: { d: "A media hub to browse and watch content, with a dedicated admin app for the moderator." }, zh: { d: "媒体中心，可浏览和观看内容，并配有管理员专用的管理应用。" } },
  partscompat: { en: { d: "Check whether spare parts are compatible with a given model." }, zh: { d: "检查备件与指定型号是否兼容。" } },
  shwiya: { en: { d: "A lightweight entertainment app." }, zh: { d: "轻量级娱乐应用。" } },
};

const LABELS = {
  "تطبيق الآباء": { en: "Parents app", zh: "家长端应用" },
  "تطبيق الإدارة (أندرويد)": { en: "Admin app (Android)", zh: "管理端应用（Android）" },
  "نسخة ويندوز للمسيّرين": { en: "Windows version for administrators", zh: "管理员 Windows 版" },
  "نسخة ويندوز": { en: "Windows version", zh: "Windows 版" },
  "الإصدار التجريبي": { en: "Preview build", zh: "预览版" },
  "تطبيق الطباعة (أندرويد)": { en: "Print app (Android)", zh: "打印应用（Android）" },
  "خادم UniversalPrint لويندوز": { en: "UniversalPrint server for Windows", zh: "UniversalPrint Windows 服务端" },
};

export const localize = (p, lang) => (lang === "ar" ? p : { ...p, ...(TR[p.k]?.[lang] || {}) });
export const label = (l, lang) => (lang === "ar" ? l : LABELS[l]?.[lang] || l);
