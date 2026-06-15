import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const siteUrl = "https://nomad-translator.com";
const siteBasePath = "";
const appUrl = "https://apps.apple.com/app/id6766855589";
const lastModified = "2026-06-13";
const developerName = "Minh Kien Ngo";
const appName = "Nomad Translator";
const appTitle = "Nomad Translator - No Internet";
const appDescriptionEn = "Nomad Translator is an offline travel translator for iPhone with on-device text, voice, and camera translation plus downloadable language packs.";
const appDescriptionVi = "Nomad Translator là app dịch du lịch offline cho iPhone với dịch văn bản, giọng nói, camera trên thiết bị và tải gói ngôn ngữ để dùng không cần mạng.";
const heroImage = {
  src: "/assets/blog/nomad-translator-hero.webp",
  desktop: "/assets/blog/nomad-translator-home-1340.webp",
  mobile: "/assets/blog/nomad-translator-home-760.webp",
  width: 1672,
  height: 941,
  desktopWidth: 1340,
  desktopHeight: 754,
  mobileWidth: 760,
  mobileHeight: 427,
  alt: "Nomad Translator hero image showing offline travel translation on iPhone"
};
const articleImage = {
  src: "/assets/blog/nomad-translator-hero.webp",
  desktop: "/assets/blog/nomad-translator-blog-920.webp",
  mobile: "/assets/blog/nomad-translator-blog-640.webp",
  width: 1672,
  height: 941,
  desktopWidth: 920,
  desktopHeight: 517,
  mobileWidth: 640,
  mobileHeight: 360,
  alt: "Nomad Translator app preview for offline translation blog articles"
};
const menuCameraArticleImage = {
  src: "/assets/blog/nomad-translator-menu-camera.webp",
  desktop: "/assets/blog/nomad-translator-menu-camera-920.webp",
  mobile: "/assets/blog/nomad-translator-menu-camera-640.webp",
  width: 1536,
  height: 1024,
  desktopWidth: 920,
  desktopHeight: 613,
  mobileWidth: 640,
  mobileHeight: 426,
  alt: "Nomad Translator camera translation preview for menus and restaurant text"
};
const articleImageOverrides = new Map([
  ["best-app-to-translate-menus-while-traveling", menuCameraArticleImage],
  ["chinese-menu-translator", menuCameraArticleImage],
  ["japanese-menu-translator", menuCameraArticleImage],
  ["korean-menu-translator", menuCameraArticleImage],
  ["thai-menu-translator", menuCameraArticleImage],
  ["vietnamese-menu-translator", menuCameraArticleImage],
  ["offline-camera-translator-for-signs-and-menus", menuCameraArticleImage],
  ["offline-ocr-translator", menuCameraArticleImage],
  ["read-chinese-menus", menuCameraArticleImage],
  ["read-chinese-signs", menuCameraArticleImage],
  ["translate-chinese-images", menuCameraArticleImage],
  ["translate-chinese-screenshot", menuCameraArticleImage],
  ["chinese-food-translation-guide", menuCameraArticleImage],
  ["translate-photos-without-internet", menuCameraArticleImage]
]);
const ga4Head = `<script async src="https://www.googletagmanager.com/gtag/js?id=G-7DTZDZJPXL"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-7DTZDZJPXL');
</script>`;
const analyticsResourceHints = `<link rel="preconnect" href="https://www.googletagmanager.com" crossorigin />
<link rel="preconnect" href="https://www.google-analytics.com" crossorigin />
<link rel="dns-prefetch" href="//www.googletagmanager.com" />
<link rel="dns-prefetch" href="//www.google-analytics.com" />`;

const faviconTags = `<link rel="icon" href="${siteBasePath}/favicon.ico" sizes="any" />
<link rel="icon" type="image/png" sizes="32x32" href="${siteBasePath}/assets/icons/favicon-32x32.png" />
<link rel="icon" type="image/png" sizes="16x16" href="${siteBasePath}/assets/icons/favicon-16x16.png" />
<link rel="apple-touch-icon" sizes="180x180" href="${siteBasePath}/apple-touch-icon.png" />
<link rel="manifest" href="${siteBasePath}/site.webmanifest" />
<meta name="theme-color" content="#0F172A" />`;

const appKeywordsEn = [
  "Nomad Translator",
  "Nomad Translator app",
  "offline translator",
  "travel translator app",
  "offline translation app for iphone",
  "camera translator",
  "voice translator",
  "language pack translator",
  "translator without internet",
  "menu translation app",
  "nomad translator online",
  "nomad translator free",
  "nomad translator apk",
  "Google Translate offline alternative",
  "Microsoft Translator offline alternative",
  "iTranslate offline alternative",
  "LibreTranslate offline alternative",
  "F-Droid Offline Translator alternative",
  "Offline Language Translator alternative",
  "Translator Offline alternative",
  "Transeee offline translator alternative",
  "best offline translator apps",
  "best translator app for Japan",
  "best translator app for Korea",
  "best translator app for Thailand",
  "best translator app for Vietnam",
  "best translator app for China",
  "best translator app for Taiwan",
  "best translator app for France",
  "best translator app for Italy",
  "best translator app for Spain",
  "best translator app for Europe travel",
  "Chinese menu translator",
  "Japanese menu translator",
  "Korean menu translator",
  "Thai menu translator",
  "Vietnamese menu translator",
  "translate without internet",
  "offline translator for travel",
  "offline OCR translator",
  "translate at airport without internet",
  "airplane mode translator",
  "read Chinese menus",
  "translate Chinese images"
];

const appKeywordsVi = [
  "Nomad Translator",
  "app Nomad Translator",
  "app dịch offline",
  "app dịch du lịch",
  "dịch không cần internet",
  "dịch camera",
  "dịch giọng nói",
  "dịch thực đơn",
  "app dịch iphone",
  "gói ngôn ngữ offline",
  "nomad translator online",
  "nomad translator free",
  "nomad translator apk",
  "Google Translate offline alternative",
  "Microsoft Translator offline alternative",
  "iTranslate offline alternative",
  "LibreTranslate offline alternative",
  "F-Droid Offline Translator alternative",
  "Offline Language Translator alternative",
  "Translator Offline alternative",
  "Transeee offline translator alternative",
  "best offline translator apps",
  "best translator app for Japan",
  "best translator app for Korea",
  "best translator app for Thailand",
  "best translator app for Vietnam",
  "best translator app for China",
  "best translator app for Taiwan",
  "best translator app for France",
  "best translator app for Italy",
  "best translator app for Spain",
  "best translator app for Europe travel",
  "Chinese menu translator",
  "Japanese menu translator",
  "Korean menu translator",
  "Thai menu translator",
  "Vietnamese menu translator",
  "translate without internet",
  "offline translator for travel",
  "offline OCR translator",
  "translate at airport without internet",
  "airplane mode translator",
  "read Chinese menus",
  "translate Chinese images"
];

const localeOrder = ["en", "vi", "de", "fr", "es"];
const locales = {
  en: {
    label: "English",
    flag: "🇺🇸",
    hreflang: "en",
    ogLocale: "en_US",
    appDescription: appDescriptionEn,
    keywords: appKeywordsEn,
    homeTitle: `${appName} | Offline Travel Translator for iPhone`,
    homeHiddenTitle: "Translate menus, signs, messages, and conversations without the internet.",
    homeHiddenDescription: "Nomad Translator helps travelers translate on iPhone with text, voice, and camera input after downloading a language pack once.",
    downloadApp: "Download app",
    downloadStore: "Download on the App Store",
    home: "Home",
    articles: "Articles",
    allArticles: "All articles",
    about: "About",
    support: "Support",
    guides: "Guides",
    travelGuide: "Travel guide",
    blogTitle: "Nomad Translator Blog | Offline Translation Guides",
    blogHeading: "Offline translation guides for travel",
    blogDescription: "Practical guides for offline translation, camera translation, voice input, language packs, privacy, and choosing a translator app for travel.",
    popularTopics: "Popular topics",
    topicTags: "Topic tags",
    problemHeading: "When does this problem show up?",
    workflowHeading: "How to use Nomad Translator for this workflow",
    tipsHeading: "What to prioritize",
    fitHeading: "Why Nomad Translator fits this use case",
    faqHeading: "Frequently asked questions",
    ctaHeading: "Download Nomad Translator",
    ctaText: "Get an offline translator ready before your next trip so you are not depending on signal strength or roaming charges.",
    relatedHeading: "Related articles",
    comparisonHeading: "How it compares",
    articleSection: "Articles",
    breadcrumbHome: "Home",
    breadcrumbArticles: "Articles",
    homeLinksLabel: "Nomad Translator pages",
    homeGuidesTitle: "Blog & guides",
    homeGuidesText: "Practical notes on offline translation, camera tools, and travel use cases",
    homeAboutTitle: "About Nomad Translator",
    homeAboutText: "Core features, workflow, and who it helps",
    homePrivacyTitle: "Privacy",
    homePrivacyText: "On-device processing, camera, microphone, and photo permissions"
  },
  vi: {
    label: "Tiếng Việt",
    flag: "🇻🇳",
    hreflang: "vi-VN",
    ogLocale: "vi_VN",
    appDescription: appDescriptionVi,
    keywords: appKeywordsVi,
    homeTitle: `${appName} | App dịch offline cho du lịch`,
    homeHiddenTitle: "Dịch menu, biển báo, tin nhắn và hội thoại mà không cần mạng.",
    homeHiddenDescription: "Nomad Translator dành cho khách du lịch muốn dịch ngay trên iPhone bằng văn bản, giọng nói hoặc camera, sau khi tải gói ngôn ngữ một lần.",
    downloadApp: "Tải app",
    downloadStore: "Tải trên App Store",
    home: "Trang chủ",
    articles: "Bài viết",
    allArticles: "Tất cả bài viết",
    about: "Giới thiệu",
    support: "Hỗ trợ",
    guides: "Hướng dẫn",
    travelGuide: "Hướng dẫn du lịch",
    blogTitle: "Blog Nomad Translator | Dịch offline khi du lịch",
    blogHeading: "Hướng dẫn dịch offline khi đi du lịch",
    blogDescription: "Hướng dẫn thực tế về dịch offline, dịch camera, giọng nói, gói ngôn ngữ, quyền riêng tư và cách chọn app dịch phù hợp khi đi du lịch.",
    popularTopics: "Chủ đề phổ biến",
    topicTags: "Chủ đề",
    problemHeading: "Khi nào bài toán này xuất hiện?",
    workflowHeading: "Cách dùng Nomad Translator cho workflow này",
    tipsHeading: "Điểm nên ưu tiên",
    fitHeading: "Tại sao Nomad Translator hợp với nhu cầu này",
    faqHeading: "Câu hỏi thường gặp",
    ctaHeading: "Tải Nomad Translator",
    ctaText: "Chuẩn bị sẵn bộ dịch offline trước chuyến đi tiếp theo để bạn không phải phụ thuộc vào sóng hay roaming.",
    relatedHeading: "Bài liên quan",
    comparisonHeading: "So sánh nhanh",
    articleSection: "Bài viết",
    breadcrumbHome: "Trang chủ",
    breadcrumbArticles: "Bài viết",
    homeLinksLabel: "Các trang Nomad Translator",
    homeGuidesTitle: "Blog & hướng dẫn",
    homeGuidesText: "Mẹo thực tế về dịch offline, camera và du lịch",
    homeAboutTitle: "Về Nomad Translator",
    homeAboutText: "Tính năng chính, workflow và trường hợp sử dụng",
    homePrivacyTitle: "Quyền riêng tư",
    homePrivacyText: "Xử lý trên thiết bị, camera, micro và ảnh"
  },
  de: {
    label: "Deutsch",
    flag: "🇩🇪",
    hreflang: "de",
    ogLocale: "de_DE",
    appDescription: "Nomad Translator ist eine Offline-Reiseübersetzer-App für iPhone mit Text-, Sprach- und Kameraübersetzung auf dem Gerät sowie herunterladbaren Sprachpaketen.",
    keywords: [...appKeywordsEn, "Offline Übersetzer", "Übersetzer App ohne Internet", "Reise Übersetzer App", "Kamera Übersetzer", "Menü Übersetzer", "Fotos offline übersetzen"],
    homeTitle: `${appName} | Offline Reiseübersetzer für iPhone`,
    homeHiddenTitle: "Menüs, Schilder, Nachrichten und Gespräche ohne Internet übersetzen.",
    homeHiddenDescription: "Nomad Translator hilft Reisenden auf dem iPhone mit Text-, Sprach- und Kameraübersetzung, nachdem ein Sprachpaket einmal geladen wurde.",
    downloadApp: "App laden",
    downloadStore: "Im App Store laden",
    home: "Start",
    articles: "Artikel",
    allArticles: "Alle Artikel",
    about: "Über uns",
    support: "Support",
    guides: "Ratgeber",
    travelGuide: "Reiseratgeber",
    blogTitle: "Nomad Translator Blog | Offline-Übersetzung auf Reisen",
    blogHeading: "Ratgeber für Offline-Übersetzung auf Reisen",
    blogDescription: "Praktische Ratgeber zu Offline-Übersetzung, Kameraübersetzung, Spracheingabe, Sprachpaketen, Datenschutz und der passenden Übersetzer-App für Reisen.",
    popularTopics: "Beliebte Themen",
    topicTags: "Themen",
    problemHeading: "Wann taucht dieses Problem auf?",
    workflowHeading: "So nutzt du Nomad Translator für diesen Ablauf",
    tipsHeading: "Worauf du achten solltest",
    fitHeading: "Warum Nomad Translator zu diesem Anwendungsfall passt",
    faqHeading: "Häufige Fragen",
    ctaHeading: "Nomad Translator laden",
    ctaText: "Bereite einen Offline-Übersetzer vor der nächsten Reise vor, damit du nicht von Empfang oder Roaming abhängig bist.",
    relatedHeading: "Ähnliche Artikel",
    comparisonHeading: "Kurzer Vergleich",
    articleSection: "Artikel",
    breadcrumbHome: "Start",
    breadcrumbArticles: "Artikel",
    homeLinksLabel: "Nomad Translator Seiten",
    homeGuidesTitle: "Blog & Ratgeber",
    homeGuidesText: "Praktische Hinweise zu Offline-Übersetzung, Kamera-Tools und Reise-Situationen",
    homeAboutTitle: "Über Nomad Translator",
    homeAboutText: "Kernfunktionen, Ablauf und für wen die App gedacht ist",
    homePrivacyTitle: "Datenschutz",
    homePrivacyText: "Verarbeitung auf dem Gerät, Kamera-, Mikrofon- und Foto-Berechtigungen"
  },
  fr: {
    label: "Français",
    flag: "🇫🇷",
    hreflang: "fr",
    ogLocale: "fr_FR",
    appDescription: "Nomad Translator est une application de traduction de voyage hors ligne pour iPhone avec traduction de texte, voix et appareil photo sur l'appareil, plus des packs de langues téléchargeables.",
    keywords: [...appKeywordsEn, "traducteur hors ligne", "application de traduction sans internet", "traducteur de voyage", "traduction avec appareil photo", "traduire un menu", "traduire des photos hors ligne"],
    homeTitle: `${appName} | Traducteur de voyage hors ligne pour iPhone`,
    homeHiddenTitle: "Traduire menus, panneaux, messages et conversations sans internet.",
    homeHiddenDescription: "Nomad Translator aide les voyageurs à traduire sur iPhone par texte, voix et appareil photo après avoir téléchargé un pack de langue.",
    downloadApp: "Télécharger l'app",
    downloadStore: "Télécharger sur l'App Store",
    home: "Accueil",
    articles: "Articles",
    allArticles: "Tous les articles",
    about: "À propos",
    support: "Support",
    guides: "Guides",
    travelGuide: "Guide de voyage",
    blogTitle: "Blog Nomad Translator | Traduction hors ligne en voyage",
    blogHeading: "Guides de traduction hors ligne pour voyager",
    blogDescription: "Guides pratiques sur la traduction hors ligne, la traduction par appareil photo, la voix, les packs de langues, la confidentialité et le choix d'une app de traduction pour voyager.",
    popularTopics: "Sujets populaires",
    topicTags: "Sujets",
    problemHeading: "Quand ce besoin apparaît-il ?",
    workflowHeading: "Comment utiliser Nomad Translator pour ce cas",
    tipsHeading: "À prioriser",
    fitHeading: "Pourquoi Nomad Translator convient à ce besoin",
    faqHeading: "Questions fréquentes",
    ctaHeading: "Télécharger Nomad Translator",
    ctaText: "Préparez un traducteur hors ligne avant votre prochain voyage pour ne pas dépendre du réseau ou du roaming.",
    relatedHeading: "Articles liés",
    comparisonHeading: "Comparaison rapide",
    articleSection: "Articles",
    breadcrumbHome: "Accueil",
    breadcrumbArticles: "Articles",
    homeLinksLabel: "Pages Nomad Translator",
    homeGuidesTitle: "Blog & guides",
    homeGuidesText: "Conseils pratiques sur la traduction hors ligne, l'appareil photo et les cas de voyage",
    homeAboutTitle: "À propos de Nomad Translator",
    homeAboutText: "Fonctions principales, workflow et profils concernés",
    homePrivacyTitle: "Confidentialité",
    homePrivacyText: "Traitement sur l'appareil, permissions caméra, micro et photos"
  },
  es: {
    label: "Español",
    flag: "🇪🇸",
    hreflang: "es",
    ogLocale: "es_ES",
    appDescription: "Nomad Translator es una app de traducción de viaje sin conexión para iPhone con traducción de texto, voz y cámara en el dispositivo, además de paquetes de idiomas descargables.",
    keywords: [...appKeywordsEn, "traductor sin conexión", "app traductor sin internet", "traductor para viajar", "traductor con cámara", "traducir menú", "traducir fotos sin conexión"],
    homeTitle: `${appName} | Traductor de viaje sin conexión para iPhone`,
    homeHiddenTitle: "Traduce menús, señales, mensajes y conversaciones sin internet.",
    homeHiddenDescription: "Nomad Translator ayuda a viajeros a traducir en iPhone con texto, voz y cámara después de descargar un paquete de idioma.",
    downloadApp: "Descargar app",
    downloadStore: "Descargar en App Store",
    home: "Inicio",
    articles: "Artículos",
    allArticles: "Todos los artículos",
    about: "Acerca de",
    support: "Soporte",
    guides: "Guías",
    travelGuide: "Guía de viaje",
    blogTitle: "Blog de Nomad Translator | Traducción sin conexión para viajar",
    blogHeading: "Guías de traducción sin conexión para viajar",
    blogDescription: "Guías prácticas sobre traducción sin conexión, traducción con cámara, voz, paquetes de idiomas, privacidad y cómo elegir una app de traducción para viajar.",
    popularTopics: "Temas populares",
    topicTags: "Temas",
    problemHeading: "¿Cuándo aparece esta necesidad?",
    workflowHeading: "Cómo usar Nomad Translator para este flujo",
    tipsHeading: "Qué priorizar",
    fitHeading: "Por qué Nomad Translator encaja con este caso",
    faqHeading: "Preguntas frecuentes",
    ctaHeading: "Descargar Nomad Translator",
    ctaText: "Prepara un traductor sin conexión antes de tu próximo viaje para no depender de la señal ni del roaming.",
    relatedHeading: "Artículos relacionados",
    comparisonHeading: "Comparación rápida",
    articleSection: "Artículos",
    breadcrumbHome: "Inicio",
    breadcrumbArticles: "Artículos",
    homeLinksLabel: "Páginas de Nomad Translator",
    homeGuidesTitle: "Blog y guías",
    homeGuidesText: "Consejos prácticos sobre traducción sin conexión, cámara y situaciones de viaje",
    homeAboutTitle: "Acerca de Nomad Translator",
    homeAboutText: "Funciones principales, flujo y a quién ayuda",
    homePrivacyTitle: "Privacidad",
    homePrivacyText: "Procesamiento en el dispositivo, permisos de cámara, micrófono y fotos"
  }
};

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function writeFile(filePath, content) {
  ensureDir(path.dirname(filePath));
  fs.writeFileSync(filePath, content.trimStart() + "\n");
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function alternateLinksFor(pathForLang) {
  return [
    ...localeOrder.map((lang) => ({ hreflang: locales[lang].hreflang, href: `${siteUrl}${pathForLang(lang)}` })),
    { hreflang: "x-default", href: `${siteUrl}${pathForLang("en")}` }
  ];
}

function languageSelector(currentLang, hrefForLang) {
  const current = locales[currentLang];
  const options = localeOrder
    .map((lang) => {
      const l = locales[lang];
      const currentClass = lang === currentLang ? " is-current" : "";
      return `<a class="language-option${currentClass}" href="${hrefForLang(lang)}" hreflang="${l.hreflang}" aria-label="${l.label}"><span aria-hidden="true">${l.flag}</span><span>${l.label}</span></a>`;
    })
    .join("\n");
  return `<details class="language-switcher">
    <summary aria-label="${current.label}"><span aria-hidden="true">${current.flag}</span><span class="visually-hidden">${current.label}</span></summary>
    <div class="language-menu">${options}</div>
  </details>`;
}

function languageFlagLink(currentLang) {
  return languageSelector(currentLang, (lang) => `${lang}/`);
}

function page({
  lang,
  title,
  description,
  keywords,
  canonicalPath,
  stylesheetPath,
  ogType = "website",
  ogImage = null,
  alternateLinks = null,
  bodyClass = "",
  ogLocale,
  ldJson,
  extraHead = "",
  content,
  noIndex = false
}) {
  const canonical = `${siteUrl}${canonicalPath}`;
  const selectedOgImage = ogImage || (ogType === "article" ? articleImage : heroImage);
  const defaultOgImage = `${siteUrl}${selectedOgImage.src}`;
  const hreflangLinks = alternateLinks || [
    ...localeOrder.map((item) => ({ hreflang: locales[item].hreflang, href: `${siteUrl}/${item}/` })),
    { hreflang: "x-default", href: `${siteUrl}/en/` }
  ];
  const alternateTags = hreflangLinks
    .map((link) => `<link rel="alternate" hreflang="${link.hreflang}" href="${link.href}" />`)
    .join("\n");
  const ldJsonBlocks = (Array.isArray(ldJson) ? ldJson : [ldJson])
    .map((block) => `<script type="application/ld+json">${JSON.stringify(block)}</script>`)
    .join("\n");
  return `<!DOCTYPE html>
<html lang="${lang}">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>${escapeHtml(title)}</title>
${faviconTags}
<meta name="description" content="${escapeHtml(description)}" />
<meta name="keywords" content="${escapeHtml(keywords.join(", "))}" />
<meta name="robots" content="${noIndex ? "noindex" : "index, follow, max-image-preview:large"}" />
<meta name="author" content="${escapeHtml(developerName)}" />
<link rel="canonical" href="${canonical}" />
<meta property="og:site_name" content="${appName}" />
<meta property="og:locale" content="${ogLocale}" />
<meta property="og:title" content="${escapeHtml(title)}" />
<meta property="og:description" content="${escapeHtml(description)}" />
<meta property="og:type" content="${ogType}" />
<meta property="og:url" content="${canonical}" />
<meta property="og:image" content="${defaultOgImage}" />
<meta property="og:image:width" content="${selectedOgImage.width}" />
<meta property="og:image:height" content="${selectedOgImage.height}" />
<meta property="og:image:alt" content="${escapeHtml(title)}" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="${escapeHtml(title)}" />
<meta name="twitter:description" content="${escapeHtml(description)}" />
<meta name="twitter:image" content="${defaultOgImage}" />
${alternateTags}
${analyticsResourceHints}
${extraHead}
${ga4Head}
${ldJsonBlocks}
<link rel="stylesheet" href="${stylesheetPath}" />
</head>
<body class="${bodyClass}">
${content}
</body>
</html>`;
}

function rootPage() {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>${appName} | Offline Travel Translator</title>
${faviconTags}
<meta name="description" content="${appDescriptionEn}" />
<meta name="keywords" content="${escapeHtml([...appKeywordsEn, ...appKeywordsVi].join(", "))}" />
<meta name="robots" content="index, follow, max-image-preview:large" />
<link rel="canonical" href="${siteUrl}/" />
<meta property="og:site_name" content="${appName}" />
<meta property="og:locale" content="en_US" />
<meta property="og:title" content="${appName} | Offline Travel Translator" />
<meta property="og:description" content="${appDescriptionEn}" />
<meta property="og:type" content="website" />
<meta property="og:url" content="${siteUrl}/" />
<meta property="og:image" content="${siteUrl}${heroImage.src}" />
<meta property="og:image:width" content="${heroImage.width}" />
<meta property="og:image:height" content="${heroImage.height}" />
<meta property="og:image:alt" content="${appName} | Offline Travel Translator" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="${appName} | Offline Travel Translator" />
<meta name="twitter:description" content="${appDescriptionEn}" />
<meta name="twitter:image" content="${siteUrl}${heroImage.src}" />
${alternateLinksFor((lang) => `/${lang}/`).map((link) => `<link rel="alternate" hreflang="${link.hreflang}" href="${link.href}" />`).join("\n")}
${analyticsResourceHints}
${ga4Head}
<script type="application/ld+json">${JSON.stringify({
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: appName,
    url: siteUrl,
    description: appDescriptionEn,
    inLanguage: localeOrder.map((lang) => locales[lang].hreflang)
  })}</script>
<link rel="stylesheet" href="assets/seo.css" />
<script>
  (function () {
    var params = new URLSearchParams(window.location.search);
    if (params.has("no_redirect")) return;
    var langs = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || ""];
    var tz = "";
    try { tz = Intl.DateTimeFormat().resolvedOptions().timeZone || ""; } catch (e) {}
    var first = (langs[0] || "").toLowerCase();
    var target = "en";
    if (tz === "Asia/Ho_Chi_Minh" || tz === "Asia/Saigon" || langs.some(function (lang) { return /^vi\\b/i.test(lang); })) target = "vi";
    else if (/^de\\b/.test(first)) target = "de";
    else if (/^fr\\b/.test(first)) target = "fr";
    else if (/^es\\b/.test(first)) target = "es";
    window.location.replace("${siteBasePath}/" + target + "/");
  })();
</script>
</head>
<body>
  <div class="wrap">
    <article>
      <div class="eyebrow">${appName}</div>
      <h1>Choose your language</h1>
      <p class="intro">Nomad Translator is available in English, Vietnamese, German, French, and Spanish. When JavaScript is enabled, visitors are sent to the closest language automatically.</p>
      <div class="language-grid">
        ${localeOrder.map((lang) => `<a class="language-card" href="${lang}/" aria-label="${locales[lang].label}"><span aria-hidden="true">${locales[lang].flag}</span><span class="visually-hidden">${locales[lang].label}</span></a>`).join("\n")}
      </div>
    </article>
    <footer>© 2026 ${developerName}</footer>
  </div>
</body>
</html>`;
}

function homePage(lang) {
  const l = locales[lang];
  const title = l.homeTitle;
  const description = l.appDescription;
  const keywords = l.keywords;
  const ldJson = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: appTitle,
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "iOS",
    description,
    url: `${siteUrl}/${lang}/`,
    image: `${siteUrl}${heroImage.src}`,
    downloadUrl: appUrl,
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    publisher: { "@type": "Organization", name: developerName, logo: `${siteUrl}/assets/icons/icon-512.png` }
  };
  const content = `
  <div class="wrap home-wrap">
    <nav class="nav home-nav">
      <a class="home-brand" href="./"><img src="../assets/icons/app-icon-96.png" width="96" height="96" alt="${appName} icon" /><span>${appName}</span></a>
      <div class="home-actions">
        <a class="btn" href="${appUrl}">${l.downloadApp}</a>
        ${languageSelector(lang, (targetLang) => `../${targetLang}/`)}
      </div>
    </nav>

    <section class="hero-card" aria-label="${appName}">
      <figure class="hero-media">
        <picture>
          <source media="(max-width: 760px)" srcset="../assets/blog/nomad-translator-home-760.webp" width="${heroImage.mobileWidth}" height="${heroImage.mobileHeight}" />
          <source media="(max-width: 1440px)" srcset="../assets/blog/nomad-translator-home-1340.webp" width="${heroImage.desktopWidth}" height="${heroImage.desktopHeight}" />
          <img src="../assets/blog/nomad-translator-home-1340.webp" width="${heroImage.desktopWidth}" height="${heroImage.desktopHeight}" alt="${heroImage.alt}" fetchpriority="high" decoding="async" />
        </picture>
      </figure>
    </section>

    <main>
      <h1 class="visually-hidden">${l.homeHiddenTitle}</h1>
      <p class="visually-hidden">${l.homeHiddenDescription}</p>
      <nav class="article-list home-links" aria-label="${l.homeLinksLabel}">
        <a href="articles/">${l.homeGuidesTitle}<span>${l.homeGuidesText}</span></a>
        <a href="../about.html">${l.homeAboutTitle}<span>${l.homeAboutText}</span></a>
        <a href="../privacy-policy.html">${l.homePrivacyTitle}<span>${l.homePrivacyText}</span></a>
      </nav>
    </main>

    <footer class="home-footer">© 2026 ${developerName}</footer>
  </div>`;

  return page({
    lang,
    title,
    description,
    keywords,
    canonicalPath: `/${lang}/`,
    stylesheetPath: "../assets/seo.css",
    alternateLinks: alternateLinksFor((item) => `/${item}/`),
    ogLocale: l.ogLocale,
    bodyClass: "home-page",
    ldJson,
    content
  });
}

const topics = [
  topic({
    slug: "best-offline-translator-app-for-iphone",
    enTitle: "Best Offline Translator App for iPhone",
    enDescription: "What to look for in an offline translator app for iPhone, from language packs and voice input to camera translation for travel.",
    enFocus: "offline translator app for iPhone",
    enScenario: "travel days when mobile data is unreliable, expensive, or unavailable",
    viTitle: "App dịch offline tốt cho iPhone",
    viDescription: "Những tiêu chí cần có của app dịch offline trên iPhone, từ gói ngôn ngữ và dịch giọng nói đến dịch camera khi đi du lịch.",
    viFocus: "app dịch offline cho iPhone",
    viScenario: "những ngày di chuyển khi dữ liệu mạng yếu, đắt hoặc không có"
  }),
  topic({
    slug: "travel-translator-app-without-internet",
    enTitle: "Travel Translator App Without Internet",
    enDescription: "How a no-internet travel translator helps with taxis, check-in, menus, and quick questions when you are abroad.",
    enFocus: "travel translator app without internet",
    enScenario: "airports, mountain towns, subways, or roaming situations where signal disappears",
    viTitle: "App dịch du lịch không cần internet",
    viDescription: "Cách app dịch du lịch không cần internet hỗ trợ gọi taxi, check-in, đọc menu và hỏi đáp nhanh khi ở nước ngoài.",
    viFocus: "app dịch du lịch không cần internet",
    viScenario: "sân bay, thị trấn vùng núi, tàu điện ngầm hoặc tình huống roaming chập chờn"
  }),
  topic({
    slug: "offline-voice-translator-for-travel",
    enTitle: "Offline Voice Translator for Travel",
    enDescription: "A guide to choosing an offline voice translator for short travel conversations, directions, and everyday requests.",
    enFocus: "offline voice translator",
    enScenario: "short face-to-face conversations with drivers, hosts, shop staff, or restaurant teams",
    viTitle: "Dịch giọng nói offline khi du lịch",
    viDescription: "Hướng dẫn chọn app dịch giọng nói offline cho hội thoại ngắn, hỏi đường và các yêu cầu thường ngày khi đi du lịch.",
    viFocus: "dịch giọng nói offline",
    viScenario: "những cuộc trao đổi trực tiếp ngắn với tài xế, host, nhân viên cửa hàng hoặc nhà hàng"
  }),
  topic({
    slug: "offline-camera-translator-for-signs-and-menus",
    enTitle: "Offline Camera Translator for Signs and Menus",
    enDescription: "Why camera translation matters when you need to read signs, menus, labels, or printed instructions offline.",
    enFocus: "offline camera translator",
    enScenario: "restaurant menus, train signs, ingredient lists, and printed notices in unfamiliar languages",
    viTitle: "Dịch camera offline cho biển báo và menu",
    viDescription: "Vì sao dịch camera quan trọng khi bạn cần đọc biển báo, menu, nhãn mác hoặc hướng dẫn in sẵn mà không có mạng.",
    viFocus: "dịch camera offline",
    viScenario: "menu nhà hàng, biển chỉ dẫn tàu, danh sách thành phần và thông báo in sẵn bằng ngôn ngữ lạ"
  }),
  topic({
    slug: "best-app-to-translate-menus-while-traveling",
    enTitle: "Best App to Translate Menus While Traveling",
    enDescription: "A practical approach to translating food menus while traveling, especially with camera translation and saved language packs.",
    enFocus: "app to translate menus while traveling",
    enScenario: "ordering confidently when you cannot rely on English translations or staff explanations",
    viTitle: "App dịch menu tốt khi đi du lịch",
    viDescription: "Cách chọn app dịch menu khi đi du lịch, đặc biệt khi cần camera translation và gói ngôn ngữ đã tải sẵn.",
    viFocus: "app dịch menu khi đi du lịch",
    viScenario: "gọi món tự tin khi không thể trông chờ vào bản dịch tiếng Anh hoặc giải thích từ nhân viên"
  }),
  topic({
    slug: "chinese-menu-translator",
    enTitle: "Chinese Menu Translator for Travel",
    enDescription: "How to read Chinese menus with camera translation, offline OCR, and short food words before ordering in a restaurant.",
    enFocus: "Chinese menu translator",
    enScenario: "reading Chinese restaurant menus, handwritten specials, dish names, ingredients, and prices before ordering",
    enTags: ["Chinese menu translator", "read Chinese menus", "Chinese food translation", "menu translation app", "offline camera translator", "Nomad Translator"],
    viTitle: "Dịch menu tiếng Trung khi đi du lịch",
    viDescription: "Cách đọc menu tiếng Trung bằng dịch camera, OCR offline và từ khóa món ăn ngắn trước khi gọi món trong nhà hàng.",
    viFocus: "dịch menu tiếng Trung",
    viScenario: "đọc menu nhà hàng tiếng Trung, món đặc biệt viết tay, tên món, nguyên liệu và giá trước khi gọi món",
    viTags: ["dịchmenutiếngTrung", "readChinesemenus", "Chinesefoodtranslation", "dịchmenu", "dịchcameraoffline", "NomadTranslator"]
  }),
  topic({
    slug: "japanese-menu-translator",
    enTitle: "Japanese Menu Translator for Restaurants",
    enDescription: "A travel guide to translating Japanese menus, ramen tickets, izakaya specials, allergy notes, and set-meal details offline.",
    enFocus: "Japanese menu translator",
    enScenario: "ordering ramen, sushi, izakaya dishes, set meals, convenience-store food, or allergy-safe items in Japan",
    enTags: ["Japanese menu translator", "Japan food translation", "translate Japanese menu", "offline translator", "camera translator", "Nomad Translator"],
    viTitle: "Dịch menu tiếng Nhật trong nhà hàng",
    viDescription: "Hướng dẫn dịch menu tiếng Nhật, vé ramen, món izakaya, ghi chú dị ứng và set ăn khi không có mạng ổn định.",
    viFocus: "dịch menu tiếng Nhật",
    viScenario: "gọi ramen, sushi, món izakaya, set ăn, đồ convenience store hoặc món phù hợp dị ứng ở Nhật",
    viTags: ["dịchmenutiếngNhật", "Japanfoodtranslation", "translateJapanesemenu", "appdịchoffline", "dịchcamera", "NomadTranslator"]
  }),
  topic({
    slug: "korean-menu-translator",
    enTitle: "Korean Menu Translator for Cafes and BBQ",
    enDescription: "Translate Korean menus, cafe boards, BBQ cuts, spicy labels, and restaurant instructions with a camera-first offline workflow.",
    enFocus: "Korean menu translator",
    enScenario: "reading Hangul menus, cafe boards, BBQ cuts, sauce notes, spicy levels, and self-service restaurant instructions",
    enTags: ["Korean menu translator", "Korean food translation", "translate Korean menu", "offline translator", "camera translator", "Nomad Translator"],
    viTitle: "Dịch menu tiếng Hàn cho quán ăn và cafe",
    viDescription: "Dịch menu tiếng Hàn, bảng cafe, món nướng, mức cay và hướng dẫn nhà hàng bằng workflow camera offline.",
    viFocus: "dịch menu tiếng Hàn",
    viScenario: "đọc menu Hangul, bảng cafe, thịt nướng, ghi chú nước sốt, mức cay và hướng dẫn tự phục vụ",
    viTags: ["dịchmenutiếngHàn", "Koreanfoodtranslation", "translateKoreanmenu", "appdịchoffline", "dịchcamera", "NomadTranslator"]
  }),
  topic({
    slug: "thai-menu-translator",
    enTitle: "Thai Menu Translator for Street Food",
    enDescription: "How to translate Thai menus, night-market signs, spice levels, ingredients, and food stall boards while traveling.",
    enFocus: "Thai menu translator",
    enScenario: "ordering street food, reading Thai food stall boards, checking spice levels, ingredients, seafood names, and prices",
    enTags: ["Thai menu translator", "Thai food translation", "translate Thai menu", "street food translator", "offline camera translator", "Nomad Translator"],
    viTitle: "Dịch menu tiếng Thái khi ăn street food",
    viDescription: "Cách dịch menu tiếng Thái, biển chợ đêm, mức cay, nguyên liệu và bảng quán ăn khi đi du lịch.",
    viFocus: "dịch menu tiếng Thái",
    viScenario: "gọi món đường phố, đọc bảng quán tiếng Thái, xem mức cay, nguyên liệu, tên hải sản và giá",
    viTags: ["dịchmenutiếngThái", "Thaifoodtranslation", "translateThaimenu", "streetfoodtranslator", "dịchcameraoffline", "NomadTranslator"]
  }),
  topic({
    slug: "vietnamese-menu-translator",
    enTitle: "Vietnamese Menu Translator for Local Food",
    enDescription: "Translate Vietnamese menus, street-food signs, noodle names, toppings, prices, and cafe boards with camera translation.",
    enFocus: "Vietnamese menu translator",
    enScenario: "reading Vietnamese noodle menus, cafe boards, street-food signs, toppings, prices, and local dish names",
    enTags: ["Vietnamese menu translator", "Vietnamese food translation", "translate Vietnamese menu", "travel translator app", "camera translator", "Nomad Translator"],
    viTitle: "Dịch menu tiếng Việt cho khách du lịch",
    viDescription: "Dịch menu tiếng Việt, biển món đường phố, tên bún phở, topping, giá và bảng quán cafe bằng camera translation.",
    viFocus: "dịch menu tiếng Việt",
    viScenario: "đọc menu bún phở, bảng cafe, biển món đường phố, topping, giá và tên món địa phương",
    viTags: ["dịchmenutiếngViệt", "Vietnamesefoodtranslation", "translateVietnamesemenu", "traveltranslatorapp", "dịchcamera", "NomadTranslator"]
  }),
  topic({
    slug: "translate-signs-offline-on-iphone",
    enTitle: "How to Translate Signs Offline on iPhone",
    enDescription: "Translate signs offline on iPhone with camera tools, OCR, and language packs for travel days without steady data.",
    enFocus: "translate signs offline on iPhone",
    enScenario: "finding exits, platforms, warnings, and public information quickly",
    viTitle: "Cách dịch biển báo offline trên iPhone",
    viDescription: "Dịch biển báo offline trên iPhone bằng camera, OCR và gói ngôn ngữ cho những ngày di chuyển không có mạng ổn định.",
    viFocus: "dịch biển báo offline trên iPhone",
    viScenario: "tìm lối ra, sân ga, cảnh báo và thông tin công cộng thật nhanh"
  }),
  topic({
    slug: "translate-without-internet",
    enTitle: "How to Translate Without Internet",
    enDescription: "Prepare offline language packs, camera translation, voice input, and short phrases so translation still works when data disappears.",
    enFocus: "translate without internet",
    enScenario: "losing signal abroad, entering subway stations, landing without a local SIM, or traveling through remote areas",
    enTags: ["translate without internet", "translator without internet", "offline translator", "offline translation app", "travel translator app", "Nomad Translator"],
    viTitle: "Cách dịch không cần internet khi đi du lịch",
    viDescription: "Chuẩn bị gói ngôn ngữ offline, dịch camera, nhập giọng nói và câu ngắn để vẫn dịch được khi mất mạng.",
    viFocus: "dịch không cần internet",
    viScenario: "mất sóng ở nước ngoài, xuống tàu điện ngầm, vừa hạ cánh chưa có SIM địa phương hoặc đi vùng xa",
    viTags: ["dịchkhôngcầninternet", "translatorwithoutinternet", "appdịchoffline", "offlinetranslationapp", "traveltranslatorapp", "NomadTranslator"]
  }),
  topic({
    slug: "offline-translator-for-travel",
    enTitle: "Offline Translator for Travel",
    enDescription: "What makes an offline translator useful for real trips: downloaded languages, fast camera input, short voice phrases, and privacy.",
    enFocus: "offline translator for travel",
    enScenario: "building a travel toolkit before flights, border crossings, hotel check-in, restaurants, taxis, and remote day trips",
    enTags: ["offline translator for travel", "travel translator app", "offline translator", "translator without internet", "camera translator", "Nomad Translator"],
    viTitle: "App dịch offline cho chuyến đi",
    viDescription: "Những gì làm app dịch offline hữu ích khi đi thật: gói ngôn ngữ, camera nhanh, câu giọng nói ngắn và riêng tư.",
    viFocus: "app dịch offline cho chuyến đi",
    viScenario: "chuẩn bị bộ công cụ trước chuyến bay, qua cửa khẩu, check-in khách sạn, đi nhà hàng, taxi và tour vùng xa",
    viTags: ["offlinetranslatorfortravel", "traveltranslatorapp", "appdịchoffline", "translatorwithoutinternet", "dịchcamera", "NomadTranslator"]
  }),
  topic({
    slug: "offline-ocr-translator",
    enTitle: "Offline OCR Translator for Travel Photos",
    enDescription: "Use offline OCR translation to extract text from menus, signs, labels, receipts, screenshots, and travel documents on your phone.",
    enFocus: "offline OCR translator",
    enScenario: "extracting text from photos of menus, signs, labels, receipts, screenshots, printed notices, and travel documents",
    enTags: ["offline OCR translator", "OCR translator", "translate photos offline", "camera translator", "image translator", "Nomad Translator"],
    viTitle: "Dịch OCR offline cho ảnh du lịch",
    viDescription: "Dùng OCR offline để trích chữ từ menu, biển báo, nhãn, hóa đơn, screenshot và giấy tờ du lịch trên điện thoại.",
    viFocus: "dịch OCR offline",
    viScenario: "trích chữ từ ảnh menu, biển báo, nhãn mác, hóa đơn, screenshot, thông báo in sẵn và giấy tờ du lịch",
    viTags: ["offlineOCRtranslator", "OCRtranslator", "dịchảnhoffline", "dịchcamera", "imagetranslator", "NomadTranslator"]
  }),
  topic({
    slug: "translate-at-airport-without-internet",
    enTitle: "Translate at the Airport Without Internet",
    enDescription: "How offline translation helps with airport signs, baggage notices, immigration forms, gate changes, and quick staff questions.",
    enFocus: "translate at airport without internet",
    enScenario: "landing without data, reading airport signs, baggage notices, immigration forms, gate changes, and quick staff questions",
    enTags: ["translate at airport without internet", "airport translator", "offline translator", "travel translator app", "airplane mode translator", "Nomad Translator"],
    viTitle: "Dịch ở sân bay khi không có internet",
    viDescription: "Cách dịch offline hỗ trợ đọc biển sân bay, thông báo hành lý, form nhập cảnh, đổi cổng và hỏi nhân viên thật nhanh.",
    viFocus: "dịch ở sân bay không cần internet",
    viScenario: "vừa hạ cánh chưa có data, đọc biển sân bay, thông báo hành lý, form nhập cảnh, đổi cổng và hỏi nhân viên",
    viTags: ["translateatairportwithoutinternet", "airporttranslator", "appdịchoffline", "traveltranslatorapp", "airplanemodetranslator", "NomadTranslator"]
  }),
  topic({
    slug: "travel-without-roaming-data",
    enTitle: "Travel Without Roaming Data",
    enDescription: "Plan translation, maps, tickets, and key phrases before a trip so you can move around without depending on roaming data.",
    enFocus: "travel without roaming data",
    enScenario: "avoiding roaming fees, landing with no local SIM, crossing borders, or saving battery and data during long travel days",
    enTags: ["travel without roaming data", "offline translator", "translator without internet", "offline travel apps", "travel translator app", "Nomad Translator"],
    viTitle: "Đi du lịch không cần roaming data",
    viDescription: "Chuẩn bị dịch thuật, bản đồ, vé và câu quan trọng trước chuyến đi để không phụ thuộc roaming data.",
    viFocus: "du lịch không cần roaming data",
    viScenario: "tránh phí roaming, vừa hạ cánh chưa có SIM địa phương, qua biên giới hoặc tiết kiệm pin và data",
    viTags: ["travelwithoutroamingdata", "appdịchoffline", "translatorwithoutinternet", "offlinetravelapps", "traveltranslatorapp", "NomadTranslator"]
  }),
  topic({
    slug: "airplane-mode-translator",
    enTitle: "Airplane Mode Translator",
    enDescription: "What a translator app can still do in airplane mode after language packs are downloaded, from text to camera translation.",
    enFocus: "airplane mode translator",
    enScenario: "using translation during flights, on arrival, in transit, or anywhere you keep cellular data turned off",
    enTags: ["airplane mode translator", "translation while flying", "offline translator", "translator without internet", "language packs", "Nomad Translator"],
    viTitle: "App dịch khi bật airplane mode",
    viDescription: "App dịch còn làm được gì khi bật airplane mode sau khi tải gói ngôn ngữ, từ dịch text đến dịch camera.",
    viFocus: "app dịch airplane mode",
    viScenario: "dịch khi đang bay, vừa hạ cánh, transit hoặc bất cứ lúc nào bạn tắt dữ liệu di động",
    viTags: ["airplanemodetranslator", "translationwhileflying", "appdịchoffline", "translatorwithoutinternet", "languagepacks", "NomadTranslator"]
  }),
  topic({
    slug: "translation-while-flying",
    enTitle: "Translation While Flying",
    enDescription: "Use offline translation during flights for arrival cards, saved screenshots, food menus, announcements, and phrases you want ready after landing.",
    enFocus: "translation while flying",
    enScenario: "reading arrival cards, saved screenshots, in-flight menus, airline notices, and phrases before landing",
    enTags: ["translation while flying", "airplane mode translator", "offline translator", "travel translator app", "translate without internet", "Nomad Translator"],
    viTitle: "Dịch khi đang bay",
    viDescription: "Dùng dịch offline trên chuyến bay cho phiếu nhập cảnh, screenshot đã lưu, menu, thông báo và câu cần dùng sau khi hạ cánh.",
    viFocus: "dịch khi đang bay",
    viScenario: "đọc phiếu nhập cảnh, screenshot đã lưu, menu trên máy bay, thông báo hãng bay và câu cần chuẩn bị trước khi hạ cánh",
    viTags: ["translationwhileflying", "airplanemodetranslator", "appdịchoffline", "traveltranslatorapp", "translatewithoutinternet", "NomadTranslator"]
  }),
  topic({
    slug: "emergency-travel-translation",
    enTitle: "Emergency Travel Translation Without Signal",
    enDescription: "Prepare short offline phrases for pharmacies, clinics, lost items, transport issues, hotel problems, and urgent travel help.",
    enFocus: "emergency travel translation",
    enScenario: "asking for a pharmacy, clinic, police help, lost items, transport changes, hotel issues, or urgent directions without signal",
    enTags: ["emergency travel translation", "offline translator", "travel emergency phrases", "translator without internet", "voice translator", "Nomad Translator"],
    viTitle: "Dịch tình huống khẩn cấp khi đi du lịch",
    viDescription: "Chuẩn bị câu offline ngắn cho nhà thuốc, phòng khám, mất đồ, sự cố di chuyển, khách sạn và trợ giúp khẩn cấp.",
    viFocus: "dịch khẩn cấp khi du lịch",
    viScenario: "hỏi nhà thuốc, phòng khám, cảnh sát, đồ thất lạc, đổi phương tiện, sự cố khách sạn hoặc hỏi đường gấp khi không có sóng",
    viTags: ["emergencytraveltranslation", "appdịchoffline", "travelemergencyphrases", "translatorwithoutinternet", "dịchgiọngnói", "NomadTranslator"]
  }),
  topic({
    slug: "best-japanese-translator-app-for-travel",
    enTitle: "Best Japanese Translator App for Travel",
    enDescription: "What travelers need from a Japanese translator app: offline text, camera translation, and quick phrase handling.",
    enFocus: "Japanese translator app for travel",
    enScenario: "navigating stations, convenience stores, hotel check-in, and restaurant menus in Japan",
    viTitle: "App dịch tiếng Nhật tốt khi du lịch",
    viDescription: "Những gì khách du lịch cần ở app dịch tiếng Nhật: dịch text offline, camera translation và xử lý câu ngắn thật nhanh.",
    viFocus: "app dịch tiếng Nhật khi du lịch",
    viScenario: "đi nhà ga, cửa hàng tiện lợi, check-in khách sạn và đọc menu tại Nhật"
  }),
  topic({
    slug: "best-korean-translator-app-for-travel",
    enTitle: "Best Korean Translator App for Travel",
    enDescription: "Compare what matters in a Korean travel translator app, especially offline support, voice input, and sign reading.",
    enFocus: "Korean translator app for travel",
    enScenario: "subway stations, cafes, beauty stores, and neighborhood restaurants in Korea",
    viTitle: "App dịch tiếng Hàn tốt khi du lịch",
    viDescription: "So sánh những yếu tố quan trọng của app dịch tiếng Hàn khi du lịch, nhất là hỗ trợ offline, giọng nói và đọc biển báo.",
    viFocus: "app dịch tiếng Hàn khi du lịch",
    viScenario: "ga tàu điện, quán cafe, cửa hàng mỹ phẩm và quán ăn địa phương ở Hàn Quốc"
  }),
  topic({
    slug: "best-translator-app-for-japan-travel",
    enTitle: "Best Translator App for Japan Travel",
    enDescription: "What to prepare before traveling in Japan, from offline Japanese language packs to camera translation for stations, menus, and signs.",
    enFocus: "best translator app for Japan",
    enScenario: "moving through train stations, ramen shops, convenience stores, hotels, and local neighborhoods in Japan",
    enTags: ["best translator app for Japan", "Japan travel translator", "Japanese translator app", "offline translator", "camera translator", "Nomad Translator"],
    viTitle: "App dịch tốt khi du lịch Nhật Bản",
    viDescription: "Những gì nên chuẩn bị trước khi đi Nhật, từ gói tiếng Nhật offline đến dịch camera cho nhà ga, menu và biển báo.",
    viFocus: "app dịch tốt khi du lịch Nhật Bản",
    viScenario: "di chuyển qua nhà ga, quán ramen, cửa hàng tiện lợi, khách sạn và khu dân cư địa phương ở Nhật",
    viTags: ["appdịchNhậtBản", "Japantraveltranslator", "appdịchtiếngNhật", "appdịchoffline", "dịchcamera", "NomadTranslator"]
  }),
  topic({
    slug: "best-translator-app-for-korea-travel",
    enTitle: "Best Translator App for Korea Travel",
    enDescription: "A Korea travel translation guide for offline Hangul text, camera translation, subway signs, restaurants, and quick voice phrases.",
    enFocus: "best translator app for Korea",
    enScenario: "reading Hangul menus, subway directions, beauty product labels, hotel notices, and short conversations in Korea",
    enTags: ["best translator app for Korea", "Korea travel translator", "Korean translator app", "offline translator", "voice translator", "Nomad Translator"],
    viTitle: "App dịch tốt khi du lịch Hàn Quốc",
    viDescription: "Hướng dẫn dịch khi đi Hàn với text Hangul offline, dịch camera, biển tàu điện, nhà hàng và câu giọng nói ngắn.",
    viFocus: "app dịch tốt khi du lịch Hàn Quốc",
    viScenario: "đọc menu Hangul, hướng dẫn tàu điện, nhãn mỹ phẩm, thông báo khách sạn và hội thoại ngắn ở Hàn",
    viTags: ["appdịchHànQuốc", "Koreatraveltranslator", "appdịchtiếngHàn", "appdịchoffline", "dịchgiọngnói", "NomadTranslator"]
  }),
  topic({
    slug: "best-translator-app-for-thailand-travel",
    enTitle: "Best Translator App for Thailand Travel",
    enDescription: "How to choose a translator app for Thailand, especially for Thai menus, taxi questions, market signs, hotels, and island trips.",
    enFocus: "best translator app for Thailand",
    enScenario: "ordering street food, asking taxi questions, reading Thai signs, checking hotel notices, and traveling between islands",
    enTags: ["best translator app for Thailand", "Thailand travel translator", "Thai translator app", "offline translator", "menu translation app", "Nomad Translator"],
    viTitle: "App dịch tốt khi du lịch Thái Lan",
    viDescription: "Cách chọn app dịch khi đi Thái, nhất là đọc menu tiếng Thái, hỏi taxi, biển chợ, khách sạn và chuyến đảo.",
    viFocus: "app dịch tốt khi du lịch Thái Lan",
    viScenario: "gọi món đường phố, hỏi taxi, đọc biển tiếng Thái, xem thông báo khách sạn và di chuyển giữa các đảo",
    viTags: ["appdịchTháiLan", "Thailandtraveltranslator", "appdịchtiếngThái", "appdịchoffline", "dịchmenu", "NomadTranslator"]
  }),
  topic({
    slug: "best-translator-app-for-vietnam-travel",
    enTitle: "Best Translator App for Vietnam Travel",
    enDescription: "A practical Vietnam travel translator guide for menus, rides, street signs, hotel messages, and offline Vietnamese phrases.",
    enFocus: "best translator app for Vietnam",
    enScenario: "reading Vietnamese menus, booking rides, asking local questions, checking hotel messages, and navigating street signs",
    enTags: ["best translator app for Vietnam", "Vietnam travel translator", "Vietnamese translator app", "offline translator", "travel translator app", "Nomad Translator"],
    viTitle: "App dịch tốt khi du lịch Việt Nam",
    viDescription: "Hướng dẫn chọn app dịch khi đi Việt Nam cho menu, gọi xe, biển đường, tin nhắn khách sạn và câu tiếng Việt offline.",
    viFocus: "app dịch tốt khi du lịch Việt Nam",
    viScenario: "đọc menu tiếng Việt, gọi xe, hỏi thông tin địa phương, xem tin nhắn khách sạn và đi theo biển đường",
    viTags: ["appdịchViệtNam", "Vietnamtraveltranslator", "appdịchtiếngViệt", "appdịchoffline", "traveltranslator", "NomadTranslator"]
  }),
  topic({
    slug: "best-translator-app-for-china-travel",
    enTitle: "Best Translator App for China Travel",
    enDescription: "What travelers should prepare for China, including offline Chinese translation, camera tools, restaurant menus, and printed signs.",
    enFocus: "best translator app for China",
    enScenario: "reading Chinese menus, transit signs, hotel forms, product labels, and short travel questions without reliable roaming",
    enTags: ["best translator app for China", "China travel translator", "Chinese translator app", "offline translator", "camera translator", "Nomad Translator"],
    viTitle: "App dịch tốt khi du lịch Trung Quốc",
    viDescription: "Những gì nên chuẩn bị khi đi Trung Quốc: dịch tiếng Trung offline, dịch camera, menu nhà hàng và biển báo in sẵn.",
    viFocus: "app dịch tốt khi du lịch Trung Quốc",
    viScenario: "đọc menu tiếng Trung, biển giao thông, form khách sạn, nhãn sản phẩm và câu hỏi ngắn khi roaming không ổn định",
    viTags: ["appdịchTrungQuốc", "Chinatraveltranslator", "appdịchtiếngTrung", "appdịchoffline", "dịchcamera", "NomadTranslator"]
  }),
  topic({
    slug: "read-chinese-menus",
    enTitle: "How to Read Chinese Menus While Traveling",
    enDescription: "A simple guide to reading Chinese menus with camera translation, dish categories, ingredients, prices, and offline preparation.",
    enFocus: "read Chinese menus",
    enScenario: "choosing dishes from Chinese menus, spotting meat or seafood words, checking prices, and avoiding ingredients you cannot eat",
    enTags: ["read Chinese menus", "Chinese menu translator", "Chinese food translation", "translate Chinese menu", "offline camera translator", "Nomad Translator"],
    viTitle: "Cách đọc menu tiếng Trung khi đi du lịch",
    viDescription: "Hướng dẫn đọc menu tiếng Trung bằng dịch camera, nhóm món, nguyên liệu, giá và chuẩn bị offline trước khi ăn.",
    viFocus: "đọc menu tiếng Trung",
    viScenario: "chọn món từ menu tiếng Trung, nhận ra từ về thịt hoặc hải sản, xem giá và tránh nguyên liệu không ăn được",
    viTags: ["readChinesemenus", "Chinesemenutranslator", "Chinesefoodtranslation", "translateChinesemenu", "dịchcameraoffline", "NomadTranslator"]
  }),
  topic({
    slug: "read-chinese-signs",
    enTitle: "How to Read Chinese Signs Offline",
    enDescription: "Use camera translation to understand Chinese transit signs, warnings, shop notices, hotel instructions, and printed information.",
    enFocus: "read Chinese signs",
    enScenario: "reading Chinese metro signs, warning notices, shop labels, hotel instructions, ticket machines, and public information",
    enTags: ["read Chinese signs", "Chinese sign translator", "translate Chinese signs", "offline camera translator", "travel translator app", "Nomad Translator"],
    viTitle: "Cách đọc biển báo tiếng Trung offline",
    viDescription: "Dùng dịch camera để hiểu biển tàu xe, cảnh báo, thông báo cửa hàng, hướng dẫn khách sạn và thông tin in sẵn bằng tiếng Trung.",
    viFocus: "đọc biển báo tiếng Trung",
    viScenario: "đọc biển metro tiếng Trung, cảnh báo, nhãn cửa hàng, hướng dẫn khách sạn, máy bán vé và thông tin công cộng",
    viTags: ["readChinesesigns", "Chinesesigntranslator", "translateChinesesigns", "dịchcameraoffline", "traveltranslatorapp", "NomadTranslator"]
  }),
  topic({
    slug: "translate-chinese-images",
    enTitle: "Translate Chinese Images on iPhone",
    enDescription: "Translate Chinese text from photos of menus, signs, labels, receipts, screenshots, and travel documents with an offline-first workflow.",
    enFocus: "translate Chinese images",
    enScenario: "understanding Chinese photos of menus, signs, receipts, product labels, hotel notes, ticket machines, and travel documents",
    enTags: ["translate Chinese images", "Chinese image translator", "translate Chinese photo", "offline OCR translator", "camera translator", "Nomad Translator"],
    viTitle: "Dịch ảnh tiếng Trung trên iPhone",
    viDescription: "Dịch chữ tiếng Trung từ ảnh menu, biển báo, nhãn, hóa đơn, screenshot và giấy tờ du lịch bằng workflow ưu tiên offline.",
    viFocus: "dịch ảnh tiếng Trung",
    viScenario: "hiểu ảnh tiếng Trung của menu, biển báo, hóa đơn, nhãn sản phẩm, ghi chú khách sạn, máy bán vé và giấy tờ du lịch",
    viTags: ["translateChineseimages", "Chineseimagetranslator", "translateChinesephoto", "offlineOCRtranslator", "dịchcamera", "NomadTranslator"]
  }),
  topic({
    slug: "translate-chinese-screenshot",
    enTitle: "Translate a Chinese Screenshot Offline",
    enDescription: "How to translate Chinese screenshots from apps, booking pages, maps, delivery screens, ticket machines, and saved travel notes.",
    enFocus: "translate Chinese screenshot",
    enScenario: "reading saved Chinese screenshots from booking apps, maps, delivery pages, ticket machines, chat messages, and travel notes",
    enTags: ["translate Chinese screenshot", "Chinese screenshot translator", "translate screenshots offline", "offline OCR translator", "iPhone translator", "Nomad Translator"],
    viTitle: "Dịch screenshot tiếng Trung offline",
    viDescription: "Cách dịch screenshot tiếng Trung từ app đặt chỗ, bản đồ, giao đồ ăn, máy bán vé và ghi chú du lịch đã lưu.",
    viFocus: "dịch screenshot tiếng Trung",
    viScenario: "đọc screenshot tiếng Trung từ app đặt chỗ, bản đồ, trang giao đồ ăn, máy bán vé, tin nhắn và ghi chú du lịch",
    viTags: ["translateChinesescreenshot", "Chinesescreenshottranslator", "translatescreenshotsoffline", "offlineOCRtranslator", "iPhonetranslator", "NomadTranslator"]
  }),
  topic({
    slug: "chinese-food-translation-guide",
    enTitle: "Chinese Food Translation Guide for Travelers",
    enDescription: "A practical guide to translating Chinese dish names, cooking styles, spice levels, meat words, allergens, and restaurant notes.",
    enFocus: "Chinese food translation guide",
    enScenario: "understanding Chinese dish names, cooking methods, spice levels, meat words, allergens, regional foods, and restaurant notes",
    enTags: ["Chinese food translation guide", "Chinese menu translator", "read Chinese menus", "Chinese dish names", "food translator app", "Nomad Translator"],
    viTitle: "Hướng dẫn dịch món ăn tiếng Trung",
    viDescription: "Hướng dẫn thực tế để dịch tên món Trung, cách chế biến, mức cay, từ về thịt, dị ứng và ghi chú nhà hàng.",
    viFocus: "hướng dẫn dịch món ăn tiếng Trung",
    viScenario: "hiểu tên món Trung, cách nấu, mức cay, từ về thịt, dị ứng, món vùng miền và ghi chú nhà hàng",
    viTags: ["Chinesefoodtranslationguide", "Chinesemenutranslator", "readChinesemenus", "Chinesedishnames", "foodtranslatorapp", "NomadTranslator"]
  }),
  topic({
    slug: "best-translator-app-for-taiwan-travel",
    enTitle: "Best Translator App for Taiwan Travel",
    enDescription: "A Taiwan travel translation guide for Traditional Chinese menus, night markets, transit, receipts, and offline camera translation.",
    enFocus: "best translator app for Taiwan",
    enScenario: "reading Traditional Chinese menus, night market signs, train information, receipts, and hotel notes in Taiwan",
    enTags: ["best translator app for Taiwan", "Taiwan travel translator", "Traditional Chinese translator", "offline translator", "camera translator", "Nomad Translator"],
    viTitle: "App dịch tốt khi du lịch Đài Loan",
    viDescription: "Hướng dẫn dịch khi đi Đài Loan cho menu chữ Hoa phồn thể, chợ đêm, tàu xe, hóa đơn và dịch camera offline.",
    viFocus: "app dịch tốt khi du lịch Đài Loan",
    viScenario: "đọc menu chữ Hoa phồn thể, biển chợ đêm, thông tin tàu, hóa đơn và ghi chú khách sạn ở Đài Loan",
    viTags: ["appdịchĐàiLoan", "Taiwantraveltranslator", "TraditionalChinesetranslator", "appdịchoffline", "dịchcamera", "NomadTranslator"]
  }),
  topic({
    slug: "best-translator-app-for-france-travel",
    enTitle: "Best Translator App for France Travel",
    enDescription: "How to translate French menus, train notices, pharmacy labels, hotel messages, and quick travel phrases while visiting France.",
    enFocus: "best translator app for France",
    enScenario: "ordering from French menus, reading train notices, checking pharmacy labels, and handling hotel messages in France",
    enTags: ["best translator app for France", "France travel translator", "French translator app", "offline translator", "menu translation app", "Nomad Translator"],
    viTitle: "App dịch tốt khi du lịch Pháp",
    viDescription: "Cách dịch menu tiếng Pháp, thông báo tàu, nhãn thuốc, tin nhắn khách sạn và câu du lịch ngắn khi đến Pháp.",
    viFocus: "app dịch tốt khi du lịch Pháp",
    viScenario: "gọi món từ menu tiếng Pháp, đọc thông báo tàu, xem nhãn nhà thuốc và xử lý tin nhắn khách sạn ở Pháp",
    viTags: ["appdịchPháp", "Francetraveltranslator", "appdịchtiếngPháp", "appdịchoffline", "dịchmenu", "NomadTranslator"]
  }),
  topic({
    slug: "best-translator-app-for-italy-travel",
    enTitle: "Best Translator App for Italy Travel",
    enDescription: "A guide to translating Italian menus, train tickets, museum signs, hotel notes, and everyday phrases during an Italy trip.",
    enFocus: "best translator app for Italy",
    enScenario: "reading Italian menus, train tickets, museum signs, hotel notes, and short restaurant questions in Italy",
    enTags: ["best translator app for Italy", "Italy travel translator", "Italian translator app", "offline translator", "camera translator", "Nomad Translator"],
    viTitle: "App dịch tốt khi du lịch Ý",
    viDescription: "Hướng dẫn dịch menu tiếng Ý, vé tàu, biển bảo tàng, ghi chú khách sạn và câu thường dùng khi đi Ý.",
    viFocus: "app dịch tốt khi du lịch Ý",
    viScenario: "đọc menu tiếng Ý, vé tàu, biển bảo tàng, ghi chú khách sạn và câu hỏi ngắn trong nhà hàng ở Ý",
    viTags: ["appdịchÝ", "Italytraveltranslator", "appdịchtiếngÝ", "appdịchoffline", "dịchcamera", "NomadTranslator"]
  }),
  topic({
    slug: "best-translator-app-for-spain-travel",
    enTitle: "Best Translator App for Spain Travel",
    enDescription: "What to look for in a Spain travel translator, from Spanish menus and transit signs to hotels, pharmacies, and quick voice input.",
    enFocus: "best translator app for Spain",
    enScenario: "reading Spanish menus, transit signs, hotel messages, pharmacy labels, and short local questions in Spain",
    enTags: ["best translator app for Spain", "Spain travel translator", "Spanish translator app", "offline translator", "voice translator", "Nomad Translator"],
    viTitle: "App dịch tốt khi du lịch Tây Ban Nha",
    viDescription: "Những gì cần ở app dịch khi đi Tây Ban Nha, từ menu tiếng Tây Ban Nha và biển tàu xe đến khách sạn, nhà thuốc và nhập giọng nói.",
    viFocus: "app dịch tốt khi du lịch Tây Ban Nha",
    viScenario: "đọc menu tiếng Tây Ban Nha, biển tàu xe, tin nhắn khách sạn, nhãn nhà thuốc và câu hỏi ngắn địa phương",
    viTags: ["appdịchTâyBanNha", "Spaintraveltranslator", "appdịchtiếngTâyBanNha", "appdịchoffline", "dịchgiọngnói", "NomadTranslator"]
  }),
  topic({
    slug: "best-translator-app-for-europe-travel",
    enTitle: "Best Translator App for Europe Travel",
    enDescription: "How to prepare one translator app for Europe travel across French, Italian, Spanish, German, Dutch, and other language moments.",
    enFocus: "best translator app for Europe travel",
    enScenario: "crossing borders, changing trains, reading menus, checking hotel notes, and switching between multiple European languages",
    enTags: ["best translator app for Europe travel", "Europe travel translator", "offline translator Europe", "multi language translator", "travel translator app", "Nomad Translator"],
    viTitle: "App dịch tốt khi du lịch châu Âu",
    viDescription: "Cách chuẩn bị một app dịch cho chuyến châu Âu qua tiếng Pháp, Ý, Tây Ban Nha, Đức, Hà Lan và nhiều ngôn ngữ khác.",
    viFocus: "app dịch tốt khi du lịch châu Âu",
    viScenario: "qua biên giới, đổi tàu, đọc menu, xem ghi chú khách sạn và chuyển giữa nhiều ngôn ngữ châu Âu",
    viTags: ["appdịchChâuÂu", "Europetraveltranslator", "offlinetranslatorEurope", "multilanguagetranslator", "traveltranslatorapp", "NomadTranslator"]
  }),
  topic({
    slug: "translate-photos-without-internet",
    enTitle: "Translate Photos Without Internet",
    enDescription: "Use offline OCR and translation to understand screenshots, labels, printed notes, and travel photos without internet.",
    enFocus: "translate photos without internet",
    enScenario: "saved screenshots, hotel notices, product labels, receipts, and paper instructions",
    viTitle: "Dịch ảnh không cần internet",
    viDescription: "Dùng OCR và dịch offline để hiểu screenshot, nhãn mác, giấy chú ý và ảnh du lịch mà không cần internet.",
    viFocus: "dịch ảnh không cần internet",
    viScenario: "ảnh chụp màn hình, thông báo khách sạn, nhãn sản phẩm, hóa đơn và giấy hướng dẫn"
  }),
  topic({
    slug: "download-language-pack-for-offline-translation",
    enTitle: "Download a Language Pack for Offline Translation",
    enDescription: "Why language packs matter for offline translation and how to prepare your phone before a flight or remote trip.",
    enFocus: "download a language pack for offline translation",
    enScenario: "preparing translation tools before long flights, border crossings, or countryside stays",
    viTitle: "Tải gói ngôn ngữ để dịch offline",
    viDescription: "Vì sao gói ngôn ngữ quan trọng với dịch offline và cách chuẩn bị điện thoại trước chuyến bay hoặc hành trình vùng xa.",
    viFocus: "tải gói ngôn ngữ để dịch offline",
    viScenario: "chuẩn bị công cụ dịch trước chuyến bay dài, qua cửa khẩu hoặc ở vùng xa"
  }),
  topic({
    slug: "google-translate-offline-alternative",
    enTitle: "Google Translate Offline Alternative for Travel",
    enDescription: "A comparison guide for travelers searching Google Translate offline and wanting an iPhone translator built around private, on-device travel workflows.",
    enFocus: "Google Translate offline alternative",
    enScenario: "comparing Google Translate offline language downloads with a privacy-first travel translator on iPhone",
    enTags: ["Google Translate offline", "Google Translate offline alternative", "offline translator", "iPhone translator", "travel translator app", "Nomad Translator"],
    enComparison: [
      "Google Translate is a broad general-purpose translator with offline language downloads in supported situations.",
      "Nomad Translator focuses on travel moments: menus, signs, short conversations, photos, and language packs prepared before the trip.",
      "Nomad Translator is independent and is not affiliated with Google or Google Translate."
    ],
    viTitle: "Alternative cho Google Translate offline khi du lịch",
    viDescription: "Bài so sánh cho người tìm Google Translate offline nhưng muốn một app iPhone tập trung vào dịch du lịch, riêng tư và xử lý trên thiết bị.",
    viFocus: "Google Translate offline alternative",
    viScenario: "so sánh tải ngôn ngữ offline của Google Translate với app dịch du lịch ưu tiên riêng tư trên iPhone",
    viTags: ["GoogleTranslateoffline", "GoogleTranslatealternative", "appdịchoffline", "iPhonetranslator", "appdịchdulịch", "NomadTranslator"],
    viComparison: [
      "Google Translate là trình dịch phổ thông lớn, có hỗ trợ tải ngôn ngữ offline trong các trường hợp được hỗ trợ.",
      "Nomad Translator tập trung vào bối cảnh du lịch: menu, biển báo, hội thoại ngắn, ảnh và gói ngôn ngữ chuẩn bị trước chuyến đi.",
      "Nomad Translator là app độc lập, không liên kết với Google hay Google Translate."
    ]
  }),
  topic({
    slug: "microsoft-translator-offline-alternative",
    enTitle: "Microsoft Translator Offline Alternative",
    enDescription: "What to compare when you search Microsoft Translator offline and need a lightweight iPhone app for travel translation without steady data.",
    enFocus: "Microsoft Translator offline alternative",
    enScenario: "checking whether Microsoft Translator offline language packs or a travel-first iPhone app fits the trip better",
    enTags: ["Microsoft Translator offline", "Microsoft Translator alternative", "offline translator", "translator without internet", "iPhone translator", "Nomad Translator"],
    enComparison: [
      "Microsoft Translator supports offline language packs for many common translation needs.",
      "Nomad Translator is positioned for travelers who want a simple on-device workflow for text, voice, camera, menus, signs, and photos.",
      "Nomad Translator is independent and is not affiliated with Microsoft or Microsoft Translator."
    ],
    viTitle: "Alternative cho Microsoft Translator offline",
    viDescription: "Những điểm nên so sánh khi bạn tìm Microsoft Translator offline nhưng cần app iPhone nhẹ cho dịch du lịch không phụ thuộc mạng.",
    viFocus: "Microsoft Translator offline alternative",
    viScenario: "kiểm tra gói ngôn ngữ offline của Microsoft Translator hay app iPhone tập trung du lịch phù hợp hơn",
    viTags: ["MicrosoftTranslatoroffline", "MicrosoftTranslatoralternative", "appdịchoffline", "dịchkhôngcầninternet", "iPhonetranslator", "NomadTranslator"],
    viComparison: [
      "Microsoft Translator có hỗ trợ gói ngôn ngữ offline cho nhiều nhu cầu dịch phổ biến.",
      "Nomad Translator được định vị cho khách du lịch cần workflow đơn giản trên thiết bị cho text, giọng nói, camera, menu, biển báo và ảnh.",
      "Nomad Translator là app độc lập, không liên kết với Microsoft hay Microsoft Translator."
    ]
  }),
  topic({
    slug: "itranslate-offline-alternative",
    enTitle: "iTranslate Offline Alternative for iPhone",
    enDescription: "A practical iTranslate offline alternative guide for iPhone users who care about travel speed, camera translation, and prepared language packs.",
    enFocus: "iTranslate offline alternative",
    enScenario: "comparing iTranslate offline mode with an iPhone travel translator prepared before flights, restaurants, and remote trips",
    enTags: ["iTranslate offline", "iTranslate alternative", "offline translator iOS", "iPhone translator", "camera translator", "Nomad Translator"],
    enComparison: [
      "iTranslate offers translation features including offline mode in supported plans and languages.",
      "Nomad Translator focuses on a travel kit workflow: download packs, test phrases, scan menus, read signs, and keep short conversations moving.",
      "Nomad Translator is independent and is not affiliated with iTranslate."
    ],
    viTitle: "Alternative cho iTranslate offline trên iPhone",
    viDescription: "Hướng dẫn cho người tìm iTranslate offline nhưng ưu tiên tốc độ khi đi du lịch, dịch camera và gói ngôn ngữ chuẩn bị sẵn.",
    viFocus: "iTranslate offline alternative",
    viScenario: "so sánh iTranslate offline với app dịch du lịch iPhone chuẩn bị trước chuyến bay, nhà hàng và vùng xa",
    viTags: ["iTranslateoffline", "iTranslatealternative", "offlinetranslatoriOS", "iPhonetranslator", "dịchcamera", "NomadTranslator"],
    viComparison: [
      "iTranslate cung cấp nhiều tính năng dịch, bao gồm offline mode trong các gói và ngôn ngữ được hỗ trợ.",
      "Nomad Translator tập trung vào workflow du lịch: tải gói ngôn ngữ, thử câu ngắn, scan menu, đọc biển báo và xử lý hội thoại nhanh.",
      "Nomad Translator là app độc lập, không liên kết với iTranslate."
    ]
  }),
  topic({
    slug: "libretranslate-offline-alternative",
    enTitle: "LibreTranslate Offline Alternative for Travelers",
    enDescription: "LibreTranslate is useful for self-hosted translation. This guide explains when travelers may prefer an offline iPhone app instead.",
    enFocus: "LibreTranslate offline alternative",
    enScenario: "choosing between self-hosted translation tools and a ready-to-use iPhone travel translator",
    enTags: ["LibreTranslate offline", "LibreTranslate alternative", "self hosted translation", "offline translator app", "travel translator", "Nomad Translator"],
    enComparison: [
      "LibreTranslate is known as an open-source translation API that can be self-hosted for more control.",
      "Nomad Translator is aimed at travelers who want an app they can open quickly without setting up a server or API.",
      "Nomad Translator is independent and is not affiliated with LibreTranslate."
    ],
    viTitle: "Alternative cho LibreTranslate offline khi đi du lịch",
    viDescription: "LibreTranslate hữu ích cho self-hosted translation. Bài này giải thích khi nào khách du lịch nên dùng app iPhone offline thay thế.",
    viFocus: "LibreTranslate offline alternative",
    viScenario: "chọn giữa công cụ dịch self-hosted và app dịch du lịch iPhone dùng ngay",
    viTags: ["LibreTranslateoffline", "LibreTranslatealternative", "selfhostedtranslation", "appdịchoffline", "traveltranslator", "NomadTranslator"],
    viComparison: [
      "LibreTranslate được biết đến như một API dịch open-source có thể self-host để kiểm soát tốt hơn.",
      "Nomad Translator hướng tới khách du lịch muốn mở app dùng ngay mà không cần dựng server hay API.",
      "Nomad Translator là app độc lập, không liên kết với LibreTranslate."
    ]
  }),
  topic({
    slug: "f-droid-offline-translator-iphone-alternative",
    enTitle: "F-Droid Offline Translator Alternative for iPhone",
    enDescription: "People searching F-Droid Offline Translator often want on-device translation. This page explains the iPhone travel-app alternative.",
    enFocus: "F-Droid Offline Translator alternative",
    enScenario: "searching Android open-source offline translators but needing a practical iPhone option for travel",
    enTags: ["F-Droid Offline Translator", "Offline Translator F-Droid", "offline translator GitHub", "offline translator iOS", "iPhone translator", "Nomad Translator"],
    enComparison: [
      "F-Droid Offline Translator results usually point to Android and open-source workflows.",
      "Nomad Translator is for iPhone users who want a travel-focused offline translator with text, voice, camera, and photos.",
      "Nomad Translator is independent and is not affiliated with F-Droid or any F-Droid package."
    ],
    viTitle: "Alternative iPhone cho F-Droid Offline Translator",
    viDescription: "Người tìm F-Droid Offline Translator thường muốn dịch trên thiết bị. Trang này giải thích lựa chọn iPhone cho nhu cầu du lịch.",
    viFocus: "F-Droid Offline Translator alternative",
    viScenario: "tìm app dịch offline open-source trên Android nhưng cần lựa chọn thực tế cho iPhone khi du lịch",
    viTags: ["FDroidOfflineTranslator", "OfflineTranslatorFDroid", "offlinetranslatorGitHub", "offlinetranslatoriOS", "iPhonetranslator", "NomadTranslator"],
    viComparison: [
      "Kết quả F-Droid Offline Translator thường liên quan đến Android và workflow open-source.",
      "Nomad Translator dành cho người dùng iPhone cần app dịch offline cho du lịch với text, giọng nói, camera và ảnh.",
      "Nomad Translator là app độc lập, không liên kết với F-Droid hay package nào trên F-Droid."
    ]
  }),
  topic({
    slug: "best-offline-translator-apps-compared",
    enTitle: "Best Offline Translator Apps Compared",
    enDescription: "A practical comparison of offline translator apps, including Google Translate, Microsoft Translator, iTranslate, LibreTranslate, and Nomad Translator.",
    enFocus: "best offline translator apps compared",
    enScenario: "comparing broad translator apps, open-source tools, and travel-first offline translators before installing one",
    enTags: ["best offline translator apps", "Google Translate offline", "Microsoft Translator offline", "iTranslate offline", "LibreTranslate", "Nomad Translator"],
    enComparison: [
      "Google Translate, Microsoft Translator, iTranslate, LibreTranslate, F-Droid Offline Translator, Offline Language Translator, and Transeee all appear in offline translator searches for different platforms and workflows.",
      "Nomad Translator competes on the travel use case: fast access, prepared language packs, camera translation, voice input, and privacy-focused on-device use.",
      "This comparison is informational. Nomad Translator is independent and is not affiliated with the named products."
    ],
    viTitle: "So sánh các app dịch offline tốt",
    viDescription: "Bài so sánh thực tế về các app dịch offline như Google Translate, Microsoft Translator, iTranslate, LibreTranslate và Nomad Translator.",
    viFocus: "so sánh best offline translator apps",
    viScenario: "so sánh app dịch phổ thông, công cụ open-source và app dịch offline tập trung du lịch trước khi cài",
    viTags: ["bestofflinetranslatorapps", "GoogleTranslateoffline", "MicrosoftTranslatoroffline", "iTranslateoffline", "LibreTranslate", "NomadTranslator"],
    viComparison: [
      "Google Translate, Microsoft Translator, iTranslate, LibreTranslate, F-Droid Offline Translator, Offline Language Translator và Transeee đều xuất hiện trong search offline translator với các nền tảng và workflow khác nhau.",
      "Nomad Translator cạnh tranh ở use case du lịch: mở nhanh, gói ngôn ngữ chuẩn bị sẵn, dịch camera, nhập giọng nói và xử lý riêng tư trên thiết bị.",
      "Bài so sánh này chỉ mang tính thông tin. Nomad Translator là app độc lập và không liên kết với các sản phẩm được nhắc tên."
    ]
  }),
  topic({
    slug: "nomad-translator-app",
    enTitle: "Nomad Translator App",
    enDescription: "What the Nomad Translator app does, who it helps, and why travelers use it for offline text, voice, and camera translation.",
    enFocus: "Nomad Translator app",
    enScenario: "comparing the app store listing with real travel translation needs",
    enTags: ["Nomad Translator", "Nomad Translator app", "offline translator", "travel translator app", "camera translator", "voice translator"],
    viTitle: "App Nomad Translator",
    viDescription: "Nomad Translator là app gì, phù hợp với ai và vì sao khách du lịch dùng nó cho dịch offline bằng text, giọng nói và camera.",
    viFocus: "app Nomad Translator",
    viScenario: "so sánh app trên App Store với nhu cầu dịch thật khi đi du lịch",
    viTags: ["NomadTranslator", "appNomadTranslator", "appdịchoffline", "appdịchdulịch", "dịchcamera", "dịchgiọngnói"]
  }),
  topic({
    slug: "nomad-translator-online-vs-offline",
    enTitle: "Nomad Translator Online vs Offline",
    enDescription: "If you are searching for Nomad Translator online, this guide explains when browser translation helps and when an offline app is better.",
    enFocus: "Nomad Translator online",
    enScenario: "choosing between a browser-based translator and an offline travel app before or during a trip",
    enTags: ["Nomad Translator online", "online translator", "offline translator", "travel translator app", "translator without internet", "Nomad Translator"],
    viTitle: "Nomad Translator online hay offline",
    viDescription: "Nếu bạn đang tìm Nomad Translator online, bài này giải thích khi nào dịch trên web đủ dùng và khi nào app offline tiện hơn.",
    viFocus: "Nomad Translator online",
    viScenario: "chọn giữa trình dịch trên web và app dịch offline trước hoặc trong chuyến đi",
    viTags: ["NomadTranslatoronline", "onlinetranslator", "appdịchoffline", "traveltranslator", "dịchkhôngcầninternet", "NomadTranslator"]
  }),
  topic({
    slug: "is-nomad-translator-free",
    enTitle: "Is Nomad Translator Free?",
    enDescription: "A simple guide for people searching Nomad Translator free, including what to expect from the app and why offline translation still matters.",
    enFocus: "Nomad Translator free",
    enScenario: "checking whether the app can be downloaded and used without paying before a trip",
    enTags: ["Nomad Translator free", "free translator app", "offline translator", "travel translator app", "Nomad Translator app", "no internet translator"],
    viTitle: "Nomad Translator có miễn phí không?",
    viDescription: "Hướng dẫn nhanh cho người đang tìm Nomad Translator free, gồm kỳ vọng thực tế về app và lý do dịch offline vẫn quan trọng.",
    viFocus: "Nomad Translator free",
    viScenario: "kiểm tra xem app có thể tải và dùng miễn phí trước chuyến đi hay không",
    viTags: ["NomadTranslatorfree", "freetranslatorapp", "appdịchoffline", "appdịchdulịch", "NomadTranslatorapp", "dịchkhôngcầnmạng"]
  }),
  topic({
    slug: "nomad-translator-apk-and-ios-options",
    enTitle: "Nomad Translator APK and iPhone Options",
    enDescription: "People searching Nomad Translator APK often want a quick install path. This page explains the app context and what to look for on iPhone or Android.",
    enFocus: "Nomad Translator APK",
    enScenario: "trying to find the right install route after seeing the app name in search results",
    enTags: ["Nomad Translator APK", "translator apk", "Nomad Translator app", "offline translator app", "travel translator", "Nomad Translator"],
    viTitle: "Nomad Translator APK và lựa chọn cài app",
    viDescription: "Người tìm Nomad Translator APK thường muốn cài thật nhanh. Bài này giải thích ngữ cảnh app và những gì nên kiểm tra trên iPhone hoặc Android.",
    viFocus: "Nomad Translator APK",
    viScenario: "muốn tìm đường cài app đúng sau khi thấy tên app trên kết quả tìm kiếm",
    viTags: ["NomadTranslatorAPK", "translatorapk", "NomadTranslatorapp", "appdịchoffline", "traveltranslator", "NomadTranslator"]
  })
];

const localizedTopicFocus = {
  "best-offline-translator-app-for-iphone": {
    de: "Beste Offline-Übersetzer-App für iPhone",
    fr: "meilleure application de traduction hors ligne pour iPhone",
    es: "mejor app de traducción sin conexión para iPhone"
  },
  "travel-translator-app-without-internet": {
    de: "Reiseübersetzer-App ohne Internet",
    fr: "application de traduction de voyage sans internet",
    es: "app traductor de viaje sin internet"
  },
  "offline-voice-translator-for-travel": {
    de: "Offline-Sprachübersetzer für Reisen",
    fr: "traducteur vocal hors ligne pour voyager",
    es: "traductor de voz sin conexión para viajar"
  },
  "offline-camera-translator-for-signs-and-menus": {
    de: "Offline-Kameraübersetzer für Schilder und Speisekarten",
    fr: "traducteur caméra hors ligne pour panneaux et menus",
    es: "traductor con cámara sin conexión para señales y menús"
  },
  "best-app-to-translate-menus-while-traveling": {
    de: "Beste App zum Übersetzen von Speisekarten auf Reisen",
    fr: "meilleure app pour traduire les menus en voyage",
    es: "mejor app para traducir menús al viajar"
  },
  "chinese-menu-translator": { de: "Chinesische Speisekarten übersetzen", fr: "traducteur de menu chinois", es: "traductor de menús chinos" },
  "japanese-menu-translator": { de: "Japanische Speisekarten übersetzen", fr: "traducteur de menu japonais", es: "traductor de menús japoneses" },
  "korean-menu-translator": { de: "Koreanische Speisekarten übersetzen", fr: "traducteur de menu coréen", es: "traductor de menús coreanos" },
  "thai-menu-translator": { de: "Thailändische Speisekarten übersetzen", fr: "traducteur de menu thaï", es: "traductor de menús tailandeses" },
  "vietnamese-menu-translator": { de: "Vietnamesische Speisekarten übersetzen", fr: "traducteur de menu vietnamien", es: "traductor de menús vietnamitas" },
  "translate-signs-offline-on-iphone": { de: "Schilder offline auf dem iPhone übersetzen", fr: "traduire des panneaux hors ligne sur iPhone", es: "traducir señales sin conexión en iPhone" },
  "translate-without-internet": { de: "ohne Internet übersetzen", fr: "traduire sans internet", es: "traducir sin internet" },
  "offline-translator-for-travel": { de: "Offline-Übersetzer für Reisen", fr: "traducteur hors ligne pour voyager", es: "traductor sin conexión para viajar" },
  "offline-ocr-translator": { de: "Offline-OCR-Übersetzer für Reisefotos", fr: "traducteur OCR hors ligne pour photos de voyage", es: "traductor OCR sin conexión para fotos de viaje" },
  "translate-at-airport-without-internet": { de: "am Flughafen ohne Internet übersetzen", fr: "traduire à l'aéroport sans internet", es: "traducir en el aeropuerto sin internet" },
  "travel-without-roaming-data": { de: "reisen ohne Roaming-Daten", fr: "voyager sans données en roaming", es: "viajar sin datos de roaming" },
  "airplane-mode-translator": { de: "Übersetzer im Flugmodus", fr: "traducteur en mode avion", es: "traductor en modo avión" },
  "translation-while-flying": { de: "Übersetzung während des Fluges", fr: "traduction pendant le vol", es: "traducción durante el vuelo" },
  "emergency-travel-translation": { de: "Notfall-Übersetzung auf Reisen", fr: "traduction d'urgence en voyage", es: "traducción de emergencia en viajes" },
  "best-japanese-translator-app-for-travel": { de: "Beste Japanisch-Übersetzer-App für Reisen", fr: "meilleure app de traduction japonais pour voyager", es: "mejor app de traducción japonés para viajar" },
  "best-korean-translator-app-for-travel": { de: "Beste Koreanisch-Übersetzer-App für Reisen", fr: "meilleure app de traduction coréen pour voyager", es: "mejor app de traducción coreano para viajar" },
  "best-translator-app-for-japan-travel": { de: "Beste Übersetzer-App für Japan-Reisen", fr: "meilleure app de traduction pour voyager au Japon", es: "mejor app traductor para viajar a Japón" },
  "best-translator-app-for-korea-travel": { de: "Beste Übersetzer-App für Korea-Reisen", fr: "meilleure app de traduction pour voyager en Corée", es: "mejor app traductor para viajar a Corea" },
  "best-translator-app-for-thailand-travel": { de: "Beste Übersetzer-App für Thailand-Reisen", fr: "meilleure app de traduction pour voyager en Thaïlande", es: "mejor app traductor para viajar a Tailandia" },
  "best-translator-app-for-vietnam-travel": { de: "Beste Übersetzer-App für Vietnam-Reisen", fr: "meilleure app de traduction pour voyager au Vietnam", es: "mejor app traductor para viajar a Vietnam" },
  "best-translator-app-for-china-travel": { de: "Beste Übersetzer-App für China-Reisen", fr: "meilleure app de traduction pour voyager en Chine", es: "mejor app traductor para viajar a China" },
  "read-chinese-menus": { de: "chinesische Speisekarten lesen", fr: "lire les menus chinois", es: "leer menús chinos" },
  "read-chinese-signs": { de: "chinesische Schilder offline lesen", fr: "lire les panneaux chinois hors ligne", es: "leer señales en chino sin conexión" },
  "translate-chinese-images": { de: "chinesische Bilder auf dem iPhone übersetzen", fr: "traduire des images chinoises sur iPhone", es: "traducir imágenes en chino en iPhone" },
  "translate-chinese-screenshot": { de: "chinesische Screenshots offline übersetzen", fr: "traduire une capture d'écran chinoise hors ligne", es: "traducir una captura en chino sin conexión" },
  "chinese-food-translation-guide": { de: "Chinesisches Essen übersetzen: Reiseführer", fr: "guide de traduction des plats chinois", es: "guía para traducir comida china" },
  "best-translator-app-for-taiwan-travel": { de: "Beste Übersetzer-App für Taiwan-Reisen", fr: "meilleure app de traduction pour voyager à Taïwan", es: "mejor app traductor para viajar a Taiwán" },
  "best-translator-app-for-france-travel": { de: "Beste Übersetzer-App für Frankreich-Reisen", fr: "meilleure app de traduction pour voyager en France", es: "mejor app traductor para viajar a Francia" },
  "best-translator-app-for-italy-travel": { de: "Beste Übersetzer-App für Italien-Reisen", fr: "meilleure app de traduction pour voyager en Italie", es: "mejor app traductor para viajar a Italia" },
  "best-translator-app-for-spain-travel": { de: "Beste Übersetzer-App für Spanien-Reisen", fr: "meilleure app de traduction pour voyager en Espagne", es: "mejor app traductor para viajar a España" },
  "best-translator-app-for-europe-travel": { de: "Beste Übersetzer-App für Europa-Reisen", fr: "meilleure app de traduction pour voyager en Europe", es: "mejor app traductor para viajar por Europa" },
  "translate-photos-without-internet": { de: "Fotos ohne Internet übersetzen", fr: "traduire des photos sans internet", es: "traducir fotos sin internet" },
  "download-language-pack-for-offline-translation": { de: "Sprachpaket für Offline-Übersetzung herunterladen", fr: "télécharger un pack de langue pour la traduction hors ligne", es: "descargar un paquete de idioma para traducción sin conexión" },
  "google-translate-offline-alternative": { de: "Alternative zu Google Translate Offline für Reisen", fr: "alternative à Google Translate hors ligne pour voyager", es: "alternativa a Google Translate sin conexión para viajar" },
  "microsoft-translator-offline-alternative": { de: "Alternative zu Microsoft Translator Offline", fr: "alternative à Microsoft Translator hors ligne", es: "alternativa a Microsoft Translator sin conexión" },
  "itranslate-offline-alternative": { de: "iTranslate-Offline-Alternative für iPhone", fr: "alternative à iTranslate hors ligne pour iPhone", es: "alternativa a iTranslate sin conexión para iPhone" },
  "libretranslate-offline-alternative": { de: "LibreTranslate-Offline-Alternative für Reisende", fr: "alternative à LibreTranslate hors ligne pour voyageurs", es: "alternativa a LibreTranslate sin conexión para viajeros" },
  "f-droid-offline-translator-iphone-alternative": { de: "F-Droid Offline Translator Alternative für iPhone", fr: "alternative iPhone à F-Droid Offline Translator", es: "alternativa iPhone a F-Droid Offline Translator" },
  "best-offline-translator-apps-compared": { de: "Beste Offline-Übersetzer-Apps im Vergleich", fr: "meilleures apps de traduction hors ligne comparées", es: "mejores apps de traducción sin conexión comparadas" },
  "nomad-translator-app": { de: "Nomad Translator App", fr: "application Nomad Translator", es: "app Nomad Translator" },
  "nomad-translator-online-vs-offline": { de: "Nomad Translator online oder offline", fr: "Nomad Translator en ligne ou hors ligne", es: "Nomad Translator online o sin conexión" },
  "is-nomad-translator-free": { de: "Ist Nomad Translator kostenlos?", fr: "Nomad Translator est-il gratuit ?", es: "¿Nomad Translator es gratis?" },
  "nomad-translator-apk-and-ios-options": { de: "Nomad Translator APK und iPhone-Optionen", fr: "Nomad Translator APK et options iPhone", es: "Nomad Translator APK y opciones para iPhone" }
};

const localizedTopicCopy = {
  de: {
    scenario: "Reisen mit schwachem Empfang, Restaurants, Flughäfen, Bahnhöfen, Schildern, Speisekarten, Fotos und kurzen Gesprächen",
    description: (focus) => `Praktischer Ratgeber: ${focus}. So übersetzt du Menüs, Schilder, Fotos, Screenshots und kurze Gespräche auf Reisen auch ohne zuverlässiges Internet.`,
    steps: (focus) => [
      "Lade das passende Sprachpaket vor der Reise, solange WLAN stabil ist.",
      `Teste ${focus} mit einem kurzen Satz oder einem Foto, bevor du es unterwegs brauchst.`,
      "Nutze Text für genaue Eingaben, Sprache für kurze Fragen und die Kamera für gedruckte Inhalte.",
      "Halte Sätze kurz und konkret, damit die Übersetzung im echten Gespräch leichter zu prüfen ist.",
      "Speichere Nomad Translator als Teil deines Reise-Kits neben Karten, Tickets und Hoteldaten."
    ],
    tips: [
      "Offline-Übersetzung ist besonders nützlich, wenn du schnell handeln musst und das Netz unsicher ist.",
      "Kameraübersetzung hilft bei Speisekarten, Schildern, Etiketten, Warnungen und Ticketautomaten.",
      "Eine gute Reiseübersetzer-App sollte schnell öffnen, gut lesbar sein und einhändig funktionieren."
    ],
    faq: (focus) => [
      ["Funktioniert Nomad Translator ohne Internet?", "Ja. Nachdem ein Sprachpaket geladen wurde, kann die Übersetzung auf dem Gerät laufen, ohne Text, Stimme oder Bild an einen Server zu senden."],
      ["Ist das besser als Roaming?", "Für viele Reisen ja. Offline-Übersetzung reduziert Probleme mit schwachem Empfang, Roaming-Kosten und langsamen Ladezeiten."],
      ["Warum ist dieses Thema wichtig?", `${focus} ist ein häufiger Suchbegriff, wenn Reisende vor Ort schnell verstehen müssen, was vor ihnen steht.`]
    ],
    comparison: [
      "Viele bekannte Übersetzer-Tools decken allgemeine Übersetzung ab und können je nach Sprache oder Plattform Offline-Funktionen bieten.",
      "Nomad Translator konzentriert sich auf Reise-Situationen: Menüs, Schilder, kurze Gespräche, Fotos und vorbereitete Sprachpakete.",
      "Nomad Translator ist unabhängig und nicht mit den genannten Produkten verbunden."
    ],
    fit: "Nomad Translator ist für praktische Übersetzung unterwegs gebaut: Sprachpaket einmal laden, Text und Sprache auf dem Gerät übersetzen, Kamera für gedruckte Inhalte nutzen und das Ergebnis schnell genug anzeigen, um im echten Moment zu reagieren.",
    problem: (focus, scenario) => `Dieses Thema taucht oft auf, wenn Reisende ${focus} in Situationen wie ${scenario} brauchen. Dann zählt nicht nur Übersetzungsqualität, sondern auch Tempo, Lesbarkeit und Offline-Zuverlässigkeit.`
  },
  fr: {
    scenario: "voyages avec réseau faible, restaurants, aéroports, gares, panneaux, menus, photos et conversations courtes",
    description: (focus) => `Guide pratique : ${focus}. Découvrez comment traduire menus, panneaux, photos, captures d'écran et petites conversations en voyage, même sans internet fiable.`,
    steps: (focus) => [
      "Téléchargez le pack de langue nécessaire avant le départ, quand le Wi-Fi est encore stable.",
      `Testez ${focus} avec une phrase courte ou une photo avant d'en avoir besoin sur place.`,
      "Utilisez le texte pour la précision, la voix pour les questions rapides et l'appareil photo pour les contenus imprimés.",
      "Gardez des phrases courtes et concrètes pour faciliter la vérification pendant une vraie conversation.",
      "Gardez Nomad Translator dans votre kit de voyage, avec les cartes, billets et informations d'hôtel."
    ],
    tips: [
      "La traduction hors ligne est la plus utile quand le besoin est immédiat et que le réseau n'est pas fiable.",
      "La traduction par appareil photo aide pour les menus, panneaux, étiquettes, avertissements et bornes.",
      "Une bonne app de traduction de voyage doit s'ouvrir vite, rester lisible et fonctionner d'une seule main."
    ],
    faq: (focus) => [
      ["Nomad Translator fonctionne-t-il sans internet ?", "Oui. Après le téléchargement du pack de langue, la traduction peut fonctionner sur l'appareil sans envoyer le texte, la voix ou l'image à un serveur."],
      ["Est-ce mieux que de dépendre du roaming ?", "Pour beaucoup de voyages, oui. La traduction hors ligne évite les problèmes de réseau faible, de coûts de roaming et de chargement lent."],
      ["Pourquoi ce sujet est-il important ?", `${focus} correspond à un besoin fréquent quand les voyageurs doivent comprendre rapidement ce qu'ils voient sur place.`]
    ],
    comparison: [
      "Plusieurs outils de traduction connus couvrent la traduction générale et peuvent proposer des fonctions hors ligne selon la langue ou la plateforme.",
      "Nomad Translator se concentre sur les moments de voyage : menus, panneaux, conversations courtes, photos et packs de langues préparés.",
      "Nomad Translator est indépendant et n'est pas affilié aux produits cités."
    ],
    fit: "Nomad Translator est conçu pour la traduction pratique en déplacement : télécharger un pack de langue, traduire texte et voix sur l'appareil, utiliser l'appareil photo pour les contenus imprimés et afficher un résultat clair pour agir vite.",
    problem: (focus, scenario) => `Ce besoin apparaît souvent quand des voyageurs cherchent ${focus} dans des situations comme ${scenario}. Il faut alors plus qu'une bonne traduction : il faut de la vitesse, de la lisibilité et un fonctionnement hors ligne.`
  },
  es: {
    scenario: "viajes con poca señal, restaurantes, aeropuertos, estaciones, señales, menús, fotos y conversaciones cortas",
    description: (focus) => `Guía práctica: ${focus}. Aprende a traducir menús, señales, fotos, capturas y conversaciones breves al viajar, incluso sin internet fiable.`,
    steps: (focus) => [
      "Descarga el paquete de idioma antes del viaje, mientras todavía tienes Wi-Fi estable.",
      `Prueba ${focus} con una frase corta o una foto antes de necesitarlo en la calle.`,
      "Usa texto para precisión, voz para preguntas rápidas y cámara para contenido impreso.",
      "Mantén las frases cortas y concretas para que la traducción sea fácil de confirmar en una conversación real.",
      "Guarda Nomad Translator como parte de tu kit de viaje junto a mapas, billetes y datos del hotel."
    ],
    tips: [
      "La traducción sin conexión importa más cuando la necesidad es inmediata y la señal no es fiable.",
      "La traducción con cámara ayuda con menús, señales, etiquetas, avisos y máquinas de tickets.",
      "Una buena app traductora para viajar debe abrir rápido, ser legible y funcionar con una mano."
    ],
    faq: (focus) => [
      ["¿Nomad Translator funciona sin internet?", "Sí. Después de descargar el paquete de idioma, la traducción puede ejecutarse en el dispositivo sin enviar texto, voz o imagen a un servidor."],
      ["¿Es mejor que depender del roaming?", "Para muchos viajes, sí. La traducción sin conexión reduce problemas de señal débil, costes de roaming y cargas lentas."],
      ["¿Por qué importa este tema?", `${focus} es una búsqueda habitual cuando los viajeros necesitan entender rápido lo que tienen delante.`]
    ],
    comparison: [
      "Muchas herramientas conocidas cubren traducción general y pueden ofrecer funciones sin conexión según el idioma o la plataforma.",
      "Nomad Translator se centra en momentos de viaje: menús, señales, conversaciones cortas, fotos y paquetes de idiomas preparados.",
      "Nomad Translator es independiente y no está afiliado a los productos mencionados."
    ],
    fit: "Nomad Translator está pensado para traducción práctica en movimiento: descargar un paquete de idioma, traducir texto y voz en el dispositivo, usar la cámara para contenido impreso y mostrar un resultado claro para reaccionar rápido.",
    problem: (focus, scenario) => `Esta necesidad aparece cuando viajeros buscan ${focus} en situaciones como ${scenario}. En ese momento no basta con traducir bien: también importan la velocidad, la legibilidad y el uso sin conexión.`
  }
};

function localizedTopicData(def, lang) {
  const focus = localizedTopicFocus[def.slug]?.[lang] || def.enFocus;
  const copy = localizedTopicCopy[lang];
  const title = focus.replace(/^([a-zà-ÿ])/u, (match) => match.toUpperCase());
  return {
    title,
    description: copy.description(focus),
    focus,
    scenario: copy.scenario,
    comparison: def.enComparison?.length ? copy.comparison : [],
    tags: [
      focus,
      locales[lang].keywords.at(-6),
      locales[lang].keywords.at(-5),
      locales[lang].keywords.at(-4),
      "Nomad Translator"
    ].filter(Boolean),
    steps: copy.steps(focus),
    tips: copy.tips,
    faq: copy.faq(focus)
  };
}

function topic(def) {
  const entry = {
    slug: def.slug,
    _def: def,
    en: {
      title: def.enTitle,
      description: def.enDescription,
      focus: def.enFocus,
      scenario: def.enScenario,
      comparison: def.enComparison || [],
      tags: def.enTags || [
        "Nomad Translator",
        def.enFocus,
        "offline translator",
        "travel translator app",
        "camera translator",
        "voice translator"
      ],
      steps: [
        "Start by downloading the language pack you need before the trip, while Wi-Fi is stable and you still have time to test the setup.",
        `Open Nomad Translator and test one short phrase early, because a quick check makes the workflow easier to trust when ${def.enScenario}.`,
        "Choose the right input mode for the moment: text for accuracy, voice for quick exchanges, and camera for printed content.",
        "Keep translations short and concrete when you are speaking with another person. Simple sentences are easier to confirm on both sides.",
        "Save the app as part of your travel kit, alongside maps, tickets, and hotel details, instead of waiting until you lose signal."
      ],
      tips: [
        "Offline translation matters most when the pressure is low but the need is immediate: ordering food, checking signs, or asking one practical question.",
        "Camera translation is especially useful for labels, menus, safety notices, and transport information where typing would be slow.",
        "A good travel translator should feel fast to open, clear to read, and usable with one hand in a real-world setting."
      ],
      faq: [
        ["Does Nomad Translator work without internet?", "Yes. After you download the language pack, translation can run on-device without sending your text, voice, or image to a server."],
        ["Is this better than relying on roaming data?", "For many trips, yes. Offline translation removes the friction of unstable signal, roaming costs, and slow loading just when you need an answer quickly."],
        ["Why does this topic matter?", `Travelers often describe this need in different ways. Understanding ${def.enFocus} helps you choose the right translation workflow before you need it under pressure.`]
      ]
    },
    vi: {
      title: def.viTitle,
      description: def.viDescription,
      focus: def.viFocus,
      scenario: def.viScenario,
      comparison: def.viComparison || [],
      tags: def.viTags || [
        "NomadTranslator",
        def.viFocus.replace(/\s+/g, ""),
        "appdịchoffline",
        "appdịchdulịch",
        "dịchcamera",
        "dịchgiọngnói"
      ],
      steps: [
        "Hãy tải sẵn gói ngôn ngữ trước chuyến đi, khi Wi-Fi còn ổn định và bạn vẫn có thời gian kiểm tra setup.",
        `Mở Nomad Translator và thử một câu ngắn từ sớm, vì kiểm tra nhanh sẽ giúp bạn yên tâm hơn khi ${def.viScenario}.`,
        "Chọn đúng kiểu nhập cho từng tình huống: gõ text khi cần chính xác, nói giọng nói khi cần nhanh, và dùng camera cho nội dung in sẵn.",
        "Giữ câu dịch ngắn và cụ thể khi giao tiếp trực tiếp. Câu đơn giản sẽ dễ kiểm tra và xác nhận hơn cho cả hai bên.",
        "Hãy xem app như một phần của bộ công cụ du lịch, bên cạnh bản đồ, vé và thông tin khách sạn, thay vì chờ đến khi mất sóng mới mở."
      ],
      tips: [
        "Dịch offline quan trọng nhất ở những lúc tưởng chừng nhỏ nhưng cần ngay: gọi món, đọc biển báo hoặc hỏi một thông tin thực tế.",
        "Dịch camera đặc biệt hữu ích cho nhãn mác, menu, cảnh báo an toàn và thông tin giao thông, nơi việc gõ tay sẽ rất chậm.",
        "Một app dịch du lịch tốt nên mở nhanh, dễ nhìn và dùng được bằng một tay trong bối cảnh thật."
      ],
      faq: [
        ["Nomad Translator có dùng không cần internet không?", "Có. Sau khi tải gói ngôn ngữ, việc dịch có thể chạy ngay trên thiết bị mà không gửi text, giọng nói hay ảnh của bạn lên server."],
        ["Có nên dùng hơn là phụ thuộc roaming không?", "Trong nhiều chuyến đi, có. Dịch offline giúp giảm rủi ro sóng yếu, phí roaming và thời gian chờ đúng lúc bạn cần câu trả lời nhanh."],
        ["Vì sao chủ đề này quan trọng?", `Người dùng thường mô tả cùng một nhu cầu theo nhiều cách khác nhau. Hiểu rõ ${def.viFocus} giúp bạn chọn đúng workflow dịch trước khi thật sự cần đến nó.`]
      ]
    }
  };
  return entry;
}

topics.forEach((entry) => {
  entry.de = localizedTopicData(entry._def, "de");
  entry.fr = localizedTopicData(entry._def, "fr");
  entry.es = localizedTopicData(entry._def, "es");
  delete entry._def;
});

function articlePage(lang, topic, index) {
  const isVi = lang === "vi";
  const l = locales[lang];
  const data = topic[lang];
  const title = data.title;
  const description = data.description;
  const pageImage = articleImageOverrides.get(topic.slug) || articleImage;
  const keywords = [...new Set([...l.keywords, ...data.tags])];
  const canonicalPath = `/${lang}/articles/${topic.slug}.html`;
  const listLinks = topics
    .filter((item) => item.slug !== topic.slug)
    .slice(0, 4)
    .map((item) => `<a href="${item.slug}.html">${escapeHtml(item[lang].title)}</a>`)
    .join("\n");
  const articleMeta = [
    ...data.tags.map((tag) => `<meta property="article:tag" content="${escapeHtml(tag)}" />`),
    `<meta property="article:published_time" content="${lastModified}T00:00:00+07:00" />`,
    `<meta property="article:modified_time" content="${lastModified}T00:00:00+07:00" />`,
    `<meta property="article:section" content="${l.articleSection}" />`
  ].join("\n");
  const tagLinks = data.tags
    .slice(0, 8)
    .map((tag) => `<a href="./">#${escapeHtml(tag.replace(/\s+/g, ""))}</a>`)
    .join("\n");
  const comparisonBlock = data.comparison.length
    ? `
      <h2>${l.comparisonHeading}</h2>
      <ul>
        ${data.comparison.map((note) => `<li>${escapeHtml(note)}</li>`).join("\n")}
      </ul>`
    : "";
  const breadcrumbJson = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: l.breadcrumbHome, item: `${siteUrl}/${lang}/` },
      { "@type": "ListItem", position: 2, name: l.breadcrumbArticles, item: `${siteUrl}/${lang}/articles/` },
      { "@type": "ListItem", position: 3, name: title, item: `${siteUrl}${canonicalPath}` }
    ]
  };

  const ldJson = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: title,
      description,
      image: [`${siteUrl}${pageImage.src}`],
      author: { "@type": "Organization", name: developerName, url: siteUrl },
      publisher: { "@type": "Organization", name: developerName, logo: { "@type": "ImageObject", url: `${siteUrl}/assets/icons/icon-512.png` } },
      mainEntityOfPage: `${siteUrl}${canonicalPath}`,
      inLanguage: l.hreflang,
      keywords,
      datePublished: lastModified,
      dateModified: lastModified
    },
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      name: `${l.workflowHeading}: ${data.focus}`,
      description,
      image: [`${siteUrl}${pageImage.src}`],
      totalTime: "PT5M",
      step: data.steps.map((step, stepIndex) => ({
        "@type": "HowToStep",
        position: stepIndex + 1,
        name: step,
        text: step
      }))
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: data.faq.map(([question, answer]) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: {
          "@type": "Answer",
          text: answer
        }
      }))
    },
    breadcrumbJson
  ];

  const content = `
  <div class="wrap">
    <div class="top">
      <img src="../../assets/icons/app-icon-96.png" width="96" height="96" alt="${appName} icon" />
      <b>${appName}</b>
    </div>
    <nav class="nav">
      <a href="../">${l.home}</a>
      <a href="./">${l.allArticles}</a>
      <a href="../../about.html">${l.about}</a>
      <a href="../../support.html">${l.support}</a>
      <a href="${appUrl}">${l.downloadApp}</a>
      ${languageSelector(lang, (targetLang) => `../../${targetLang}/articles/${topic.slug}.html`)}
    </nav>
    <article>
      <div class="eyebrow">${l.travelGuide}</div>
      <h1>${escapeHtml(title)}</h1>
      <p class="intro">${escapeHtml(description)}</p>

      <figure class="blog-figure blog-figure-top">
        <picture>
          <source media="(max-width: 760px)" srcset="../..${pageImage.mobile}" width="${pageImage.mobileWidth}" height="${pageImage.mobileHeight}" />
          <source media="(max-width: 1440px)" srcset="../..${pageImage.desktop}" width="${pageImage.desktopWidth}" height="${pageImage.desktopHeight}" />
          <img src="../..${pageImage.desktop}" width="${pageImage.desktopWidth}" height="${pageImage.desktopHeight}" alt="${data.title} - Nomad Translator" loading="${index < 2 ? "eager" : "lazy"}" decoding="async" />
        </picture>
      </figure>
      <div class="tag-row" aria-label="${l.topicTags}">
        ${tagLinks}
      </div>

      <h2>${l.problemHeading}</h2>
      <p>${localizedTopicCopy[lang]?.problem ? localizedTopicCopy[lang].problem(data.focus, data.scenario) : isVi ? `Tình huống này thường xuất hiện khi người dùng cần ${data.focus} trong bối cảnh ${data.scenario}. Khi đó, điều quan trọng không chỉ là dịch đúng, mà còn là mở app đủ nhanh, nhìn đủ rõ và hoạt động được ngay cả khi không có mạng ổn định.` : `This usually comes up when travelers need ${data.focus} in situations like ${data.scenario}. In those moments, the tool needs more than raw translation quality. It needs to open fast, stay readable, and still work when the network is weak or missing.`}</p>

      <h2>${l.workflowHeading}</h2>
      <ol>
        ${data.steps.map((step) => `<li>${escapeHtml(step)}</li>`).join("\n")}
      </ol>

      <h2>${l.tipsHeading}</h2>
      <ul>
        ${data.tips.map((tip) => `<li>${escapeHtml(tip)}</li>`).join("\n")}
      </ul>
      ${comparisonBlock}

      <h2>${l.fitHeading}</h2>
      <p>${localizedTopicCopy[lang]?.fit || (isVi ? "Nomad Translator được xây quanh nhu cầu dịch thực dụng khi đi đường: tải gói ngôn ngữ một lần, dịch văn bản và giọng nói trên thiết bị, dùng camera để trích văn bản, rồi hiển thị kết quả gọn gàng để bạn phản ứng nhanh hơn trong bối cảnh thật." : "Nomad Translator is built around practical travel translation: download a language pack once, translate text and voice on-device, use the camera for printed text, and keep the result clean enough to act on quickly in the real world.")}</p>

      <h2>${l.faqHeading}</h2>
      ${data.faq.map(([question, answer]) => `<h3>${escapeHtml(question)}</h3><p>${escapeHtml(answer)}</p>`).join("\n")}

      <div class="cta">
        <h2>${l.ctaHeading}</h2>
        <p>${l.ctaText}</p>
        <a class="btn" href="${appUrl}">${l.downloadStore}</a>
      </div>

      <h2>${l.relatedHeading}</h2>
      <div class="related">
        ${listLinks}
      </div>
    </article>
    <footer>© 2026 ${developerName}</footer>
  </div>`;

  return page({
    lang,
    title,
    description,
    keywords,
    canonicalPath,
    stylesheetPath: "../../assets/seo.css",
    ogType: "article",
    ogImage: pageImage,
    alternateLinks: alternateLinksFor((item) => `/${item}/articles/${topic.slug}.html`),
    ogLocale: l.ogLocale,
    extraHead: articleMeta,
    ldJson,
    content
  });
}

function articleHub(lang) {
  const isVi = lang === "vi";
  const l = locales[lang];
  const title = l.blogTitle;
  const description = l.blogDescription;
  const list = topics.map((item) => `<a href="${item.slug}.html">${escapeHtml(item[lang].title)}<span>${escapeHtml(item[lang].description)}</span></a>`).join("\n");
  const hubTags = [
    { href: "nomad-translator-app.html", label: isVi ? "#appNomadTranslator" : "#NomadTranslatorApp" },
    { href: "nomad-translator-online-vs-offline.html", label: isVi ? "#NomadTranslatorOnline" : "#NomadTranslatorOnline" },
    { href: "is-nomad-translator-free.html", label: isVi ? "#NomadTranslatorFree" : "#NomadTranslatorFree" },
    { href: "nomad-translator-apk-and-ios-options.html", label: isVi ? "#NomadTranslatorAPK" : "#NomadTranslatorAPK" },
    { href: "best-offline-translator-app-for-iphone.html", label: isVi ? "#appDichOffline" : "#OfflineTranslator" },
    { href: "offline-camera-translator-for-signs-and-menus.html", label: isVi ? "#dichCamera" : "#CameraTranslator" },
    { href: "offline-voice-translator-for-travel.html", label: isVi ? "#dichGiongNoi" : "#VoiceTranslator" },
    { href: "best-translator-app-for-japan-travel.html", label: isVi ? "#duLichNhatBan" : "#JapanTravel" },
    { href: "best-translator-app-for-korea-travel.html", label: isVi ? "#duLichHanQuoc" : "#KoreaTravel" },
    { href: "best-translator-app-for-thailand-travel.html", label: isVi ? "#duLichThaiLan" : "#ThailandTravel" },
    { href: "best-translator-app-for-europe-travel.html", label: isVi ? "#duLichChauAu" : "#EuropeTravel" },
    { href: "google-translate-offline-alternative.html", label: "#GoogleTranslateOffline" },
    { href: "microsoft-translator-offline-alternative.html", label: "#MicrosoftTranslatorOffline" },
    { href: "itranslate-offline-alternative.html", label: "#iTranslateOffline" },
    { href: "best-offline-translator-apps-compared.html", label: "#BestOfflineTranslatorApps" }
  ];
  const ldJson = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: title,
      description,
      url: `${siteUrl}/${lang}/articles/`,
      inLanguage: l.hreflang,
      publisher: { "@type": "Organization", name: developerName, url: siteUrl, logo: `${siteUrl}/assets/icons/icon-512.png` }
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: `${appName} ${l.articles}`,
      itemListElement: topics.map((item, itemIndex) => ({
        "@type": "ListItem",
        position: itemIndex + 1,
        name: item[lang].title,
        url: `${siteUrl}/${lang}/articles/${item.slug}.html`
      }))
    }
  ];
  const content = `
  <div class="wrap">
    <div class="top">
      <img src="../../assets/icons/app-icon-96.png" width="96" height="96" alt="${appName} icon" />
      <b>${appName}</b>
    </div>
    <nav class="nav">
      <a href="../">${l.home}</a>
      <a href="../../about.html">${l.about}</a>
      <a href="../../support.html">${l.support}</a>
      <a href="${appUrl}">${l.downloadApp}</a>
      ${languageSelector(lang, (targetLang) => `../../${targetLang}/articles/`)}
    </nav>
    <article>
      <div class="eyebrow">${l.guides}</div>
      <h1>${l.blogHeading}</h1>
      <p class="intro">${escapeHtml(description)}</p>
      <div class="tag-row" aria-label="${l.popularTopics}">
        ${hubTags.map((tag) => `<a href="${tag.href}">${tag.label}</a>`).join("\n")}
      </div>
      <div class="article-list">
        ${list}
      </div>
    </article>
    <footer>© 2026 ${developerName}</footer>
  </div>`;
  return page({
    lang,
    title,
    description,
    keywords: l.keywords,
    canonicalPath: `/${lang}/articles/`,
    stylesheetPath: "../../assets/seo.css",
    alternateLinks: alternateLinksFor((item) => `/${item}/articles/`),
    ogLocale: l.ogLocale,
    ldJson,
    content
  });
}

function redirectPage(target) {
  const canonicalTarget = siteBasePath && target.startsWith(siteBasePath)
    ? target.slice(siteBasePath.length) || "/"
    : target;
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Redirecting</title>
${faviconTags}
<meta name="robots" content="noindex" />
<link rel="canonical" href="${siteUrl}${canonicalTarget}" />
<meta http-equiv="refresh" content="0; url=${target}" />
</head>
<body>
  <p><a href="${target}">Continue</a></p>
</body>
</html>`;
}

function staticPage(kind) {
  if (kind === "about") {
    return page({
      lang: "en",
      title: `About ${appName} | Offline Translation App`,
      description: "Learn what Nomad Translator does, how the offline workflow works, and why it helps with real travel communication.",
      keywords: [...appKeywordsEn, "offline translation app"],
      canonicalPath: "/about.html",
      stylesheetPath: "assets/seo.css",
      ogLocale: "en_US",
      ldJson: {
        "@context": "https://schema.org",
        "@graph": [
          { "@type": "Organization", "@id": `${siteUrl}/#organization`, name: developerName, url: siteUrl, logo: `${siteUrl}/assets/icons/icon-512.png` },
          { "@type": "SoftwareApplication", "@id": `${siteUrl}/#app`, name: appTitle, applicationCategory: "UtilitiesApplication", operatingSystem: "iOS", description: appDescriptionEn, url: `${siteUrl}/about.html`, image: `${siteUrl}${heroImage.src}`, downloadUrl: appUrl, publisher: { "@id": `${siteUrl}/#organization` }, offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } }
        ]
      },
      content: `
  <div class="wrap">
    <div class="top">
      <img src="./assets/icons/app-icon-96.png" width="96" height="96" alt="${appName} icon" />
      <b>${appName}</b>
    </div>
    <nav class="nav">
      <a href="en/">Home</a>
      <a href="en/articles/">Guides</a>
      <a href="support.html">Support</a>
      <a href="${appUrl}">Download app</a>
      ${languageFlagLink("en", "vi/")}
    </nav>
    <article>
      <div class="eyebrow">About ${appName}</div>
      <h1>An offline translator built for practical travel moments</h1>
      <p class="intro">Nomad Translator helps you translate text, voice, and photos on iPhone with downloadable language packs and on-device processing.</p>
      <figure class="blog-figure">
        <picture>
          <source media="(max-width: 760px)" srcset="./assets/blog/nomad-translator-blog-640.webp" width="${articleImage.mobileWidth}" height="${articleImage.mobileHeight}" />
          <source media="(max-width: 1440px)" srcset="./assets/blog/nomad-translator-blog-920.webp" width="${articleImage.desktopWidth}" height="${articleImage.desktopHeight}" />
          <img src="./assets/blog/nomad-translator-blog-920.webp" width="${articleImage.desktopWidth}" height="${articleImage.desktopHeight}" alt="Nomad Translator offline translation app preview" loading="lazy" decoding="async" />
        </picture>
      </figure>
      <h2>What the app focuses on</h2>
      <p>Nomad Translator is designed for travelers who need a translation tool that still works when data is weak, slow, or unavailable. Instead of assuming a stable connection, it centers the experience around language pack downloads, fast access, and clear translated output.</p>
      <h2>Core features</h2>
      <ul>
        <li><strong>Offline translation:</strong> translate after downloading the language pack once.</li>
        <li><strong>Voice input:</strong> speak short phrases for day-to-day travel communication.</li>
        <li><strong>Camera and photos:</strong> extract text from signs, menus, labels, and screenshots.</li>
        <li><strong>On-device workflow:</strong> keep travel text, images, and voice input on your phone.</li>
        <li><strong>Travel-friendly speed:</strong> open quickly and use simple UI patterns when you need an answer now.</li>
      </ul>
      <div class="cta">
        <h2>Download Nomad Translator</h2>
        <p>Set up your language pack before the next trip and keep an offline translator ready in your pocket.</p>
        <a class="btn" href="${appUrl}">Download on the App Store</a>
      </div>
    </article>
    <footer>© 2026 ${developerName}</footer>
  </div>`
    });
  }

  if (kind === "support") {
    const supportFaq = [
      ["Does the app work without internet?", "Yes. Once the language pack is downloaded, translation runs offline on your device."],
      ["How do I prepare before a trip?", "Open the app while on stable Wi-Fi, download the language pack you need, and test text, voice, and camera translation once before departure."],
      ["Can I translate photos and screenshots?", "Yes. You can use the camera or choose an image from your photo library for text extraction and translation."],
      ["Why does translation speed vary?", "Because the work happens on-device, translation time can vary by phone model, input length, and language pair."],
      ["Which permissions does the app request?", "Camera, microphone, and photo library access are only used to support camera translation, voice input, and importing images for OCR."]
    ];
    return page({
      lang: "en",
      title: `Support | ${appName}`,
      description: "Support, FAQs, and contact information for Nomad Translator.",
      keywords: [...appKeywordsEn, "Nomad Translator support"],
      canonicalPath: "/support.html",
      stylesheetPath: "assets/seo.css",
      ogLocale: "en_US",
      ldJson: [
        { "@context": "https://schema.org", "@type": "ContactPage", name: `Support | ${appName}`, url: `${siteUrl}/support.html`, email: "kiengo.uit@gmail.com" },
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: supportFaq.map(([question, answer]) => ({
            "@type": "Question",
            name: question,
            acceptedAnswer: { "@type": "Answer", text: answer }
          }))
        }
      ],
      content: `
  <div class="wrap">
    <div class="top">
      <img src="./assets/icons/app-icon-96.png" width="96" height="96" alt="${appName} icon" />
      <b>${appName}</b>
    </div>
    <nav class="nav">
      <a href="en/">Home</a>
      <a href="en/articles/">Guides</a>
      <a href="privacy-policy.html">Privacy</a>
      ${languageFlagLink("en", "vi/")}
    </nav>
    <article>
      <div class="eyebrow">Support</div>
      <h1>Help for Nomad Translator</h1>
      <p class="intro">Questions, bugs, and App Store support requests can be sent by email. The notes below cover the offline workflow most users ask about first.</p>
      <h2>Contact</h2>
      <p>Email: <a href="mailto:kiengo.uit@gmail.com">kiengo.uit@gmail.com</a></p>
      <h2>Frequently asked questions</h2>
      <h3>Does the app work without internet?</h3>
      <p>Yes. Once the language pack is downloaded, translation runs offline on your device.</p>
      <h3>How do I prepare before a trip?</h3>
      <p>Open the app while on stable Wi-Fi, download the language pack you need, and test text, voice, and camera translation once before departure.</p>
      <h3>Can I translate photos and screenshots?</h3>
      <p>Yes. You can use the camera or choose an image from your photo library for text extraction and translation.</p>
      <h3>Why does translation speed vary?</h3>
      <p>Because the work happens on-device, translation time can vary by phone model, input length, and language pair.</p>
      <h3>Which permissions does the app request?</h3>
      <p>Camera, microphone, and photo library access are only used to support camera translation, voice input, and importing images for OCR.</p>
    </article>
    <footer>© 2026 ${developerName}</footer>
  </div>`
    });
  }

  return page({
    lang: "en",
    title: `Privacy Policy | ${appName}`,
    description: "Privacy policy for Nomad Translator, including on-device translation, permissions, and data handling.",
    keywords: [...appKeywordsEn, "Nomad Translator privacy policy"],
    canonicalPath: "/privacy-policy.html",
    stylesheetPath: "assets/seo.css",
    ogLocale: "en_US",
    ldJson: { "@context": "https://schema.org", "@type": "WebPage", name: `Privacy Policy | ${appName}`, url: `${siteUrl}/privacy-policy.html` },
    content: `
  <div class="wrap">
    <div class="top">
      <img src="./assets/icons/app-icon-96.png" width="96" height="96" alt="${appName} icon" />
      <b>${appName}</b>
    </div>
    <nav class="nav">
      <a href="en/">Home</a>
      <a href="support.html">Support</a>
      <a href="about.html">About</a>
      ${languageFlagLink("en", "vi/")}
    </nav>
    <article>
      <div class="eyebrow">Privacy Policy</div>
      <h1>Privacy policy for Nomad Translator</h1>
      <p class="intro"><strong>App:</strong> ${appTitle}<br /><strong>Developer:</strong> ${developerName}<br /><strong>Last updated:</strong> June 13, 2026</p>
      <h2>1. On-device translation</h2>
      <p>Nomad Translator is designed to process translation on-device after the required language pack has been downloaded. Text, photos, and voice input used for translation are not sent to our server as part of the core offline workflow.</p>
      <h2>2. Camera and microphone permissions</h2>
      <p>The app may request access to your camera and microphone so you can translate printed text from photos and speak phrases for translation. These permissions are used only for the requested feature.</p>
      <h2>3. Photo library access</h2>
      <p>The app may request access to your photo library so you can import saved images or screenshots for text extraction and translation.</p>
      <h2>4. No advertising profile</h2>
      <p>We do not use the app to build advertising profiles from your translation content.</p>
      <h2>5. Changes</h2>
      <p>This page may be updated from time to time to reflect product or policy changes. The latest version is always published here.</p>
      <h2>6. Contact</h2>
      <p>If you have privacy questions, email <a href="mailto:kiengo.uit@gmail.com">kiengo.uit@gmail.com</a>.</p>
    </article>
    <footer>© 2026 ${developerName}</footer>
  </div>`
  });
}

const css = `
:root {
  --accent: #16d9ff;
  --accent-strong: #08bfe6;
  --ink: #edf6ff;
  --muted: #93a9c3;
  --line: rgba(44, 86, 126, 0.72);
  --bg: #06101d;
  --panel: #0a1627;
  --soft: rgba(12, 28, 48, 0.92);
}

* { box-sizing: border-box; }

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  color: var(--ink);
  background:
    radial-gradient(circle at top left, rgba(22, 217, 255, 0.15), transparent 24%),
    radial-gradient(circle at top right, rgba(16, 72, 145, 0.18), transparent 30%),
    linear-gradient(180deg, #050c18 0%, var(--bg) 100%);
  line-height: 1.68;
}

a { color: var(--accent); }

.wrap {
  max-width: 860px;
  margin: 0 auto;
  padding: 34px 22px 72px;
}

.home-wrap { max-width: 1180px; }

.top {
  display: flex;
  align-items: center;
  gap: 13px;
  margin-bottom: 18px;
}

.top img, .home-brand img {
  width: 48px;
  height: 48px;
  border-radius: 14px;
  box-shadow: 0 10px 28px rgba(15, 118, 110, .18);
}

.top b { font-size: 18px; }

.nav {
  display: flex;
  align-items: center;
  gap: 14px;
  flex-wrap: wrap;
  margin: 8px 0 32px;
  font-size: 14px;
  font-weight: 700;
}

.nav a { text-decoration: none; }

.language-switcher {
  position: relative;
  width: 42px;
  height: 42px;
  margin-left: auto;
}

.language-switcher summary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border: 1px solid rgba(22, 217, 255, .28);
  border-radius: 999px;
  background: rgba(9, 29, 49, .92);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, .06), 0 12px 28px rgba(0, 0, 0, .22);
  font-size: 23px;
  line-height: 1;
  cursor: pointer;
  list-style: none;
}

.language-switcher summary::-webkit-details-marker { display: none; }

.language-switcher summary:hover {
  border-color: rgba(22, 217, 255, .62);
  transform: translateY(-1px);
}

.language-menu {
  position: absolute;
  top: calc(100% + 10px);
  right: 0;
  z-index: 20;
  min-width: 190px;
  padding: 8px;
  border: 1px solid rgba(22, 217, 255, .24);
  border-radius: 16px;
  background: rgba(5, 12, 24, .98);
  box-shadow: 0 20px 48px rgba(0, 0, 0, .36);
}

.language-option {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 9px 10px;
  border-radius: 12px;
  color: #edf6ff;
  text-decoration: none;
  white-space: nowrap;
}

.language-option:hover,
.language-option.is-current {
  background: rgba(22, 217, 255, .12);
  color: var(--accent);
}

.language-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(96px, 1fr));
  gap: 14px;
}

.language-card {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 96px;
  border: 1px solid rgba(22, 217, 255, .24);
  border-radius: 18px;
  background: rgba(9, 29, 49, .94);
  box-shadow: 0 16px 34px rgba(0, 0, 0, .24);
  font-size: 38px;
  text-decoration: none;
}

.language-card:hover {
  border-color: rgba(22, 217, 255, .62);
  transform: translateY(-1px);
}

article, .hero-card {
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 18px;
  padding: 34px;
  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.28);
}

.eyebrow {
  color: var(--accent);
  font-size: 13px;
  font-weight: 800;
  text-transform: uppercase;
}

h1 {
  font-size: clamp(34px, 5vw, 54px);
  line-height: 1.05;
  margin: 10px 0 16px;
}

.intro {
  color: #c8dbef;
  font-size: 18px;
  margin-bottom: 26px;
}

h2 {
  font-size: 25px;
  line-height: 1.2;
  margin: 34px 0 10px;
}

h3 {
  font-size: 18px;
  margin: 24px 0 6px;
}

p, li, span { color: #c8dbef; }

ol, ul { padding-left: 22px; }

li { margin: 8px 0; }

.tag-row {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 20px 0 26px;
}

.tag-row a {
  display: inline-flex;
  align-items: center;
  min-height: 30px;
  padding: 5px 10px;
  border: 1px solid rgba(22, 217, 255, .24);
  border-radius: 999px;
  background: rgba(9, 29, 49, 0.94);
  color: var(--accent);
  font-size: 13px;
  font-weight: 800;
  text-decoration: none;
}

.cta {
  margin: 36px 0 8px;
  padding: 24px;
  border-radius: 18px;
  background: var(--soft);
  border: 1px solid rgba(22, 217, 255, 0.18);
}

.cta h2 { margin-top: 0; }

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 46px;
  margin-top: 8px;
  padding: 12px 18px;
  border-radius: 12px;
  background: linear-gradient(135deg, var(--accent) 0%, var(--accent-strong) 100%);
  color: #03111f;
  text-decoration: none;
  font-weight: 800;
  box-shadow: 0 10px 28px rgba(22, 217, 255, 0.24);
}

.related, .article-list {
  display: grid;
  gap: 12px;
}

.related a, .article-list a {
  display: block;
  padding: 14px 16px;
  background: rgba(10, 22, 39, 0.98);
  border: 1px solid var(--line);
  border-radius: 14px;
  text-decoration: none;
  color: #f2f8ff;
  font-weight: 700;
}

.related a:hover, .article-list a:hover {
  border-color: rgba(22, 217, 255, 0.46);
  box-shadow: 0 14px 32px rgba(0, 0, 0, 0.22);
}

.article-list span {
  display: block;
  color: var(--muted);
  font-size: 14px;
  font-weight: 500;
  margin-top: 3px;
}

.home-nav {
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
}

.home-brand {
  display: flex;
  align-items: center;
  gap: 12px;
  color: #f2f8ff;
  text-decoration: none;
  font-weight: 900;
}

.home-actions {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}

.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.hero-card {
  padding: 0;
  overflow: hidden;
}

.hero-media {
  margin: 0;
  border-radius: 18px;
}

.hero-media picture,
.hero-media img,
.blog-figure picture,
.blog-figure img {
  display: block;
  width: 100%;
  height: auto;
}

.blog-figure {
  margin: 28px 0;
}

.blog-figure img {
  border-radius: 16px;
  border: 1px solid var(--line);
  background: #06111f;
}

.home-links {
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin: 16px 0 24px;
}

.home-footer, footer {
  color: var(--muted);
  font-size: 13px;
  margin-top: 34px;
  text-align: center;
}

@media (max-width: 820px) {
  .home-links {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 620px) {
  .wrap { padding: 24px 16px 56px; }
  article { padding: 24px 18px; }
  .hero-card { padding: 0; }
}
`;

function generate() {
  writeFile(path.join(root, "assets/seo.css"), css);
  writeFile(path.join(root, "index.html"), rootPage());
  localeOrder.forEach((lang) => {
    writeFile(path.join(root, lang, "index.html"), homePage(lang));
    writeFile(path.join(root, lang, "articles/index.html"), articleHub(lang));
  });
  writeFile(path.join(root, "articles/index.html"), redirectPage("/en/articles/"));
  writeFile(path.join(root, "about.html"), staticPage("about"));
  writeFile(path.join(root, "support.html"), staticPage("support"));
  writeFile(path.join(root, "privacy-policy.html"), staticPage("privacy"));
  writeFile(path.join(root, "privacy.html"), redirectPage("/privacy-policy.html"));

  topics.forEach((entry, index) => {
    localeOrder.forEach((lang) => {
      writeFile(path.join(root, lang, "articles", `${entry.slug}.html`), articlePage(lang, entry, index));
    });
    writeFile(path.join(root, "articles", `${entry.slug}.html`), redirectPage(`/en/articles/${entry.slug}.html`));
  });

  writeFile(path.join(root, "robots.txt"), `User-agent: *\nAllow: /\nSitemap: ${siteUrl}/sitemap.xml`);

  const sitemapUrls = [
    "/",
    ...localeOrder.map((lang) => `/${lang}/`),
    "/about.html",
    "/support.html",
    "/privacy-policy.html",
    ...localeOrder.map((lang) => `/${lang}/articles/`),
    ...topics.flatMap((entry) => localeOrder.map((lang) => `/${lang}/articles/${entry.slug}.html`))
  ];
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapUrls.map((url) => `  <url><loc>${siteUrl}${url}</loc><lastmod>${lastModified}</lastmod><changefreq>${url.includes("/articles/") ? "monthly" : "weekly"}</changefreq><priority>${url === "/" ? "1.0" : localeOrder.some((lang) => url === `/${lang}/`) ? "0.9" : url.includes("/articles/") ? "0.7" : "0.6"}</priority></url>`).join("\n")}\n</urlset>`;
  writeFile(path.join(root, "sitemap.xml"), sitemap);

  writeFile(path.join(root, "site.webmanifest"), JSON.stringify({
    name: appName,
    short_name: appName,
    icons: [
      { src: `${siteBasePath}/assets/icons/icon-192.png`, sizes: "192x192", type: "image/png" },
      { src: `${siteBasePath}/assets/icons/icon-512.png`, sizes: "512x512", type: "image/png" }
    ],
    theme_color: "#0F172A",
    background_color: "#F6F8FB",
    display: "standalone"
  }, null, 2));

  writeFile(path.join(root, "llms.txt"), `# ${appName}\n\n- English home: ${siteUrl}/en/\n- Vietnamese home: ${siteUrl}/vi/\n- German home: ${siteUrl}/de/\n- French home: ${siteUrl}/fr/\n- Spanish home: ${siteUrl}/es/\n- App Store: ${appUrl}\n- Support: ${siteUrl}/support.html\n- Privacy policy: ${siteUrl}/privacy-policy.html\n- Travel translation guides: ${siteUrl}/en/articles/\n\nNomad Translator is an iPhone app focused on offline travel translation. It supports downloadable language packs, text translation, voice input translation, and camera/photo translation for signs, menus, labels, and quick travel conversations.`);

  writeFile(path.join(root, "README.md"), `# nomad-translator-pages\n\nStatic SEO and support site for Nomad Translator.\n\n## Structure\n\n- \`/\` language chooser with auto-redirect\n- \`/en/\` English landing page\n- \`/vi/\` Vietnamese landing page\n- \`/de/\` German landing page\n- \`/fr/\` French landing page\n- \`/es/\` Spanish landing page\n- \`/en/articles/\` English guide hub\n- \`/vi/articles/\` Vietnamese guide hub\n- \`/de/articles/\` German guide hub\n- \`/fr/articles/\` French guide hub\n- \`/es/articles/\` Spanish guide hub\n- \`/about.html\` app overview\n- \`/support.html\` support page\n- \`/privacy-policy.html\` privacy page\n\n## Rebuild pages\n\nRun:\n\n\`\`\`bash\nnode scripts/build-seo-pages.mjs\n\`\`\`\n\nThe generator rewrites the landing pages, article pages, aliases, sitemap, robots, and supporting metadata files.\n\n## Publishing\n\nThis repo is configured for the custom domain:\n\n\`${siteUrl}\`\n\nIf you move the site later, update \`siteUrl\` in [scripts/build-seo-pages.mjs](/Users/kelvin/Downloads/nomad-translator-pages/scripts/build-seo-pages.mjs).`);
}

generate();
