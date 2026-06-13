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

const faviconTags = `<link rel="icon" href="${siteBasePath}/favicon.ico" sizes="any" />
<link rel="icon" type="image/png" sizes="32x32" href="${siteBasePath}/assets/icons/favicon-32x32.png" />
<link rel="icon" type="image/png" sizes="16x16" href="${siteBasePath}/assets/icons/favicon-16x16.png" />
<link rel="apple-touch-icon" sizes="180x180" href="${siteBasePath}/apple-touch-icon.png" />
<link rel="manifest" href="${siteBasePath}/site.webmanifest" />
<meta name="theme-color" content="#0F172A" />`;

const appKeywordsEn = [
  "offline translator",
  "travel translator app",
  "offline translation app for iphone",
  "camera translator",
  "voice translator",
  "language pack translator",
  "translator without internet",
  "menu translation app"
];

const appKeywordsVi = [
  "app dịch offline",
  "app dịch du lịch",
  "dịch không cần internet",
  "dịch camera",
  "dịch giọng nói",
  "dịch thực đơn",
  "app dịch iphone",
  "gói ngôn ngữ offline"
];

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

function page({
  lang,
  title,
  description,
  keywords,
  canonicalPath,
  stylesheetPath,
  ogType = "website",
  bodyClass = "",
  ogLocale,
  ldJson,
  content,
  noIndex = false
}) {
  const canonical = `${siteUrl}${canonicalPath}`;
  const defaultOgImage = `${siteUrl}${ogType === "article" ? articleImage.src : heroImage.src}`;
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
<meta property="og:image:width" content="${ogType === "article" ? articleImage.width : heroImage.width}" />
<meta property="og:image:height" content="${ogType === "article" ? articleImage.height : heroImage.height}" />
<meta property="og:image:alt" content="${escapeHtml(title)}" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="${escapeHtml(title)}" />
<meta name="twitter:description" content="${escapeHtml(description)}" />
<meta name="twitter:image" content="${defaultOgImage}" />
<link rel="alternate" hreflang="en" href="${siteUrl}/en/" />
<link rel="alternate" hreflang="vi-VN" href="${siteUrl}/vi/" />
<link rel="alternate" hreflang="x-default" href="${siteUrl}/en/" />
<script type="application/ld+json">${JSON.stringify(ldJson)}</script>
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
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="${appName} | Offline Travel Translator" />
<meta name="twitter:description" content="${appDescriptionEn}" />
<meta name="twitter:image" content="${siteUrl}${heroImage.src}" />
<link rel="alternate" hreflang="en" href="${siteUrl}/en/" />
<link rel="alternate" hreflang="vi-VN" href="${siteUrl}/vi/" />
<link rel="alternate" hreflang="x-default" href="${siteUrl}/en/" />
<script type="application/ld+json">${JSON.stringify({
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: appName,
    url: siteUrl,
    description: appDescriptionEn,
    inLanguage: ["en", "vi-VN"]
  })}</script>
<link rel="stylesheet" href="assets/seo.css" />
<script>
  (function () {
    var params = new URLSearchParams(window.location.search);
    if (params.has("no_redirect")) return;
    var langs = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || ""];
    var tz = "";
    try { tz = Intl.DateTimeFormat().resolvedOptions().timeZone || ""; } catch (e) {}
    var isVietnam = tz === "Asia/Ho_Chi_Minh" || tz === "Asia/Saigon" || langs.some(function (lang) { return /^vi\\b/i.test(lang); });
    window.location.replace(isVietnam ? "${siteBasePath}/vi/" : "${siteBasePath}/en/");
  })();
</script>
</head>
<body>
  <div class="wrap">
    <article>
      <div class="eyebrow">${appName}</div>
      <h1>Choose your language</h1>
      <p class="intro">Nomad Translator has English and Vietnamese SEO pages. Visitors in Vietnam or Vietnamese browsers are redirected to Vietnamese automatically when JavaScript is enabled.</p>
      <div class="article-list">
        <a href="vi/">Tiếng Việt<span>Dành cho người dùng Việt Nam và người thích nội dung tiếng Việt</span></a>
        <a href="en/">English<span>For international search traffic and App Store visitors</span></a>
      </div>
    </article>
    <footer>© 2026 ${developerName}</footer>
  </div>
</body>
</html>`;
}

function homePage(lang) {
  const isVi = lang === "vi";
  const title = isVi ? `${appName} | App dịch offline cho du lịch` : `${appName} | Offline Travel Translator for iPhone`;
  const description = isVi ? appDescriptionVi : appDescriptionEn;
  const keywords = isVi ? appKeywordsVi : appKeywordsEn;
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
        <a href="../${isVi ? "en" : "vi"}/">${isVi ? "English" : "Tiếng Việt"}</a>
        <a class="btn" href="${appUrl}">${isVi ? "Tải app" : "Download app"}</a>
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
      <h1 class="visually-hidden">${isVi ? "Dịch menu, biển báo, tin nhắn và hội thoại mà không cần mạng." : "Translate menus, signs, messages, and conversations without the internet."}</h1>
      <p class="visually-hidden">${isVi ? "Nomad Translator dành cho khách du lịch muốn dịch ngay trên iPhone bằng văn bản, giọng nói hoặc camera, sau khi tải gói ngôn ngữ một lần." : "Nomad Translator helps travelers translate on iPhone with text, voice, and camera input after downloading a language pack once."}</p>
      <nav class="article-list home-links" aria-label="${isVi ? "Các trang Nomad Translator" : "Nomad Translator pages"}">
        <a href="articles/">${isVi ? "Blog & hướng dẫn" : "Blog & guides"}<span>${isVi ? "Bộ bài SEO về dịch offline, camera và du lịch" : "Search-focused articles about offline translation, camera tools, and travel use cases"}</span></a>
        <a href="../about.html">${isVi ? "Về Nomad Translator" : "About Nomad Translator"}<span>${isVi ? "Tính năng chính, workflow và trường hợp sử dụng" : "Core features, workflow, and who it helps"}</span></a>
        <a href="../privacy-policy.html">${isVi ? "Quyền riêng tư" : "Privacy"}<span>${isVi ? "Xử lý trên thiết bị, camera, micro và ảnh" : "On-device processing, camera, microphone, and photo permissions"}</span></a>
      </nav>
    </main>

    <footer class="home-footer">© 2026 ${developerName}</footer>
  </div>`;

  return page({
    lang: isVi ? "vi" : "en",
    title,
    description,
    keywords,
    canonicalPath: `/${lang}/`,
    stylesheetPath: "../assets/seo.css",
    ogLocale: isVi ? "vi_VN" : "en_US",
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
  })
];

function topic(def) {
  return {
    slug: def.slug,
    en: {
      title: def.enTitle,
      description: def.enDescription,
      focus: def.enFocus,
      scenario: def.enScenario,
      steps: [
        `Start by downloading the language pack you need before the trip so ${def.enFocus} really works without surprise network prompts.`,
        `Open Nomad Translator and test one short phrase early, because a quick check makes it easier to trust the workflow when ${def.enScenario}.`,
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
        ["Why make a separate page for this keyword?", `Travelers search for the same need in different ways, so pages around ${def.enFocus} help match those real queries.`]
      ]
    },
    vi: {
      title: def.viTitle,
      description: def.viDescription,
      focus: def.viFocus,
      scenario: def.viScenario,
      steps: [
        `Hãy tải sẵn gói ngôn ngữ trước chuyến đi để nhu cầu ${def.viFocus} hoạt động đúng lúc mà không bị chặn bởi yêu cầu kết nối mạng.`,
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
        ["Vì sao cần trang riêng cho từ khóa này?", `Người dùng diễn đạt cùng một nhu cầu theo nhiều cách khác nhau, nên các trang xoay quanh ${def.viFocus} sẽ giúp bắt đúng truy vấn thật.`]
      ]
    }
  };
}

function articlePage(lang, topic, index) {
  const isVi = lang === "vi";
  const data = topic[lang];
  const title = data.title;
  const description = data.description;
  const keywords = isVi ? appKeywordsVi : appKeywordsEn;
  const canonicalPath = `/${lang}/articles/${topic.slug}.html`;
  const listLinks = topics
    .filter((item) => item.slug !== topic.slug)
    .slice(0, 4)
    .map((item) => `<a href="${item.slug}.html">${escapeHtml(item[lang].title)}</a>`)
    .join("\n");

  const ldJson = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    image: [`${siteUrl}${articleImage.src}`],
    author: { "@type": "Organization", name: developerName, url: siteUrl },
    publisher: { "@type": "Organization", name: developerName, logo: { "@type": "ImageObject", url: `${siteUrl}/assets/icons/icon-512.png` } },
    mainEntityOfPage: `${siteUrl}${canonicalPath}`,
    inLanguage: isVi ? "vi-VN" : "en",
    keywords,
    datePublished: lastModified,
    dateModified: lastModified
  };

  const content = `
  <div class="wrap">
    <div class="top">
      <img src="../../assets/icons/app-icon-96.png" width="96" height="96" alt="${appName} icon" />
      <b>${appName}</b>
    </div>
    <nav class="nav">
      <a href="../">${isVi ? "Trang chủ" : "Home"}</a>
      <a href="./">${isVi ? "Tất cả bài viết" : "All articles"}</a>
      <a href="../../about.html">${isVi ? "Giới thiệu" : "About"}</a>
      <a href="../../support.html">${isVi ? "Hỗ trợ" : "Support"}</a>
      <a href="${appUrl}">${isVi ? "Tải app" : "Download app"}</a>
    </nav>
    <article>
      <div class="eyebrow">${isVi ? "Nomad Translator Guide" : "Nomad Translator Guide"}</div>
      <h1>${escapeHtml(title)}</h1>
      <p class="intro">${escapeHtml(description)}</p>

      <figure class="blog-figure blog-figure-top">
        <picture>
          <source media="(max-width: 760px)" srcset="../../assets/blog/nomad-translator-blog-640.webp" width="${articleImage.mobileWidth}" height="${articleImage.mobileHeight}" />
          <source media="(max-width: 1440px)" srcset="../../assets/blog/nomad-translator-blog-920.webp" width="${articleImage.desktopWidth}" height="${articleImage.desktopHeight}" />
          <img src="../../assets/blog/nomad-translator-blog-920.webp" width="${articleImage.desktopWidth}" height="${articleImage.desktopHeight}" alt="${isVi ? `${data.title} - Nomad Translator` : `${data.title} - Nomad Translator`}" loading="${index < 2 ? "eager" : "lazy"}" decoding="async" />
        </picture>
      </figure>

      <h2>${isVi ? "Khi nào bài toán này xuất hiện?" : "When does this problem show up?"}</h2>
      <p>${isVi ? `Đây là kiểu tìm kiếm thường xuất hiện khi người dùng cần ${data.focus} trong bối cảnh ${data.scenario}. Khi đó, điều quan trọng không chỉ là dịch đúng, mà còn là mở app đủ nhanh, nhìn đủ rõ và hoạt động được ngay cả khi không có mạng ổn định.` : `This search usually appears when travelers need ${data.focus} in situations like ${data.scenario}. In those moments, the tool needs more than raw translation quality. It needs to open fast, stay readable, and still work when the network is weak or missing.`}</p>

      <h2>${isVi ? "Cách dùng Nomad Translator cho workflow này" : "How to use Nomad Translator for this workflow"}</h2>
      <ol>
        ${data.steps.map((step) => `<li>${escapeHtml(step)}</li>`).join("\n")}
      </ol>

      <h2>${isVi ? "Điểm nên ưu tiên" : "What to prioritize"}</h2>
      <ul>
        ${data.tips.map((tip) => `<li>${escapeHtml(tip)}</li>`).join("\n")}
      </ul>

      <h2>${isVi ? "Tại sao Nomad Translator hợp với nhu cầu này" : "Why Nomad Translator fits this use case"}</h2>
      <p>${isVi ? "Nomad Translator được xây quanh nhu cầu dịch thực dụng khi đi đường: tải gói ngôn ngữ một lần, dịch văn bản và giọng nói trên thiết bị, dùng camera để trích văn bản, rồi hiển thị kết quả gọn gàng để bạn phản ứng nhanh hơn trong bối cảnh thật." : "Nomad Translator is built around practical travel translation: download a language pack once, translate text and voice on-device, use the camera for printed text, and keep the result clean enough to act on quickly in the real world."}</p>

      <h2>${isVi ? "Câu hỏi thường gặp" : "Frequently asked questions"}</h2>
      ${data.faq.map(([question, answer]) => `<h3>${escapeHtml(question)}</h3><p>${escapeHtml(answer)}</p>`).join("\n")}

      <div class="cta">
        <h2>${isVi ? "Tải Nomad Translator" : "Download Nomad Translator"}</h2>
        <p>${isVi ? "Chuẩn bị sẵn bộ dịch offline trước chuyến đi tiếp theo để bạn không phải phụ thuộc vào sóng hay roaming." : "Get an offline translator ready before your next trip so you are not depending on signal strength or roaming charges."}</p>
        <a class="btn" href="${appUrl}">${isVi ? "Tải trên App Store" : "Download on the App Store"}</a>
      </div>

      <h2>${isVi ? "Bài liên quan" : "Related articles"}</h2>
      <div class="related">
        ${listLinks}
      </div>
    </article>
    <footer>© 2026 ${developerName}</footer>
  </div>`;

  return page({
    lang: isVi ? "vi" : "en",
    title,
    description,
    keywords,
    canonicalPath,
    stylesheetPath: "../../assets/seo.css",
    ogType: "article",
    ogLocale: isVi ? "vi_VN" : "en_US",
    ldJson,
    content
  });
}

function articleHub(lang) {
  const isVi = lang === "vi";
  const title = isVi ? "Blog Nomad Translator | Dịch offline khi du lịch" : "Nomad Translator Blog | Offline Translation Guides";
  const description = isVi ? "Các bài SEO và hướng dẫn về dịch offline, camera translation, giọng nói và du lịch với Nomad Translator." : "Search-friendly guides about offline translation, camera translation, voice translation, and travel workflows with Nomad Translator.";
  const list = topics.map((item) => `<a href="${item.slug}.html">${escapeHtml(item[lang].title)}<span>${escapeHtml(item[lang].description)}</span></a>`).join("\n");
  const ldJson = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: title,
    description,
    url: `${siteUrl}/${lang}/articles/`,
    inLanguage: isVi ? "vi-VN" : "en",
    publisher: { "@type": "Organization", name: developerName, url: siteUrl, logo: `${siteUrl}/assets/icons/icon-512.png` }
  };
  const content = `
  <div class="wrap">
    <div class="top">
      <img src="../../assets/icons/app-icon-96.png" width="96" height="96" alt="${appName} icon" />
      <b>${appName}</b>
    </div>
    <nav class="nav">
      <a href="../">${isVi ? "Trang chủ" : "Home"}</a>
      <a href="../../about.html">${isVi ? "Giới thiệu" : "About"}</a>
      <a href="../../support.html">${isVi ? "Hỗ trợ" : "Support"}</a>
      <a href="${appUrl}">${isVi ? "Tải app" : "Download app"}</a>
    </nav>
    <article>
      <div class="eyebrow">${isVi ? "SEO Hub" : "SEO Hub"}</div>
      <h1>${isVi ? "Bài viết SEO cho Nomad Translator" : "SEO articles for Nomad Translator"}</h1>
      <p class="intro">${escapeHtml(description)}</p>
      <div class="article-list">
        ${list}
      </div>
    </article>
    <footer>© 2026 ${developerName}</footer>
  </div>`;
  return page({
    lang: isVi ? "vi" : "en",
    title,
    description,
    keywords: isVi ? appKeywordsVi : appKeywordsEn,
    canonicalPath: `/${lang}/articles/`,
    stylesheetPath: "../../assets/seo.css",
    ogLocale: isVi ? "vi_VN" : "en_US",
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
      <a href="en/">English Home</a>
      <a href="vi/">Tiếng Việt</a>
      <a href="en/articles/">Guides</a>
      <a href="support.html">Support</a>
      <a href="${appUrl}">Download app</a>
    </nav>
    <article>
      <div class="eyebrow">About ${appName}</div>
      <h1>An offline translator built for practical travel moments</h1>
      <p class="intro">Nomad Translator helps you translate text, voice, and photos on iPhone with downloadable language packs and on-device processing.</p>
      <figure class="blog-figure">
        <div class="placeholder">
          <div>
            <strong>About page image placeholder</strong>
            <span>Add one polished composite later: text translation, voice translation, camera OCR, and the language pack screen.</span>
          </div>
        </div>
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
    return page({
      lang: "en",
      title: `Support | ${appName}`,
      description: "Support, FAQs, and contact information for Nomad Translator.",
      keywords: [...appKeywordsEn, "Nomad Translator support"],
      canonicalPath: "/support.html",
      stylesheetPath: "assets/seo.css",
      ogLocale: "en_US",
      ldJson: { "@context": "https://schema.org", "@type": "ContactPage", name: `Support | ${appName}`, url: `${siteUrl}/support.html` },
      content: `
  <div class="wrap">
    <div class="top">
      <img src="./assets/icons/app-icon-96.png" width="96" height="96" alt="${appName} icon" />
      <b>${appName}</b>
    </div>
    <nav class="nav">
      <a href="en/">English Home</a>
      <a href="vi/">Tiếng Việt</a>
      <a href="en/articles/">Guides</a>
      <a href="privacy-policy.html">Privacy</a>
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
      <a href="en/">English Home</a>
      <a href="support.html">Support</a>
      <a href="about.html">About</a>
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
      <p>If you have privacy questions, email <a href="mailto:kelvinngo@theluxenomad.com">kelvinngo@theluxenomad.com</a>.</p>
    </article>
    <footer>© 2026 ${developerName}</footer>
  </div>`
  });
}

const css = `
:root {
  --accent: #0f766e;
  --ink: #0f172a;
  --muted: #5b6474;
  --line: #dde5ee;
  --bg: #f6f8fb;
  --panel: #ffffff;
  --soft: #eefaf7;
}

* { box-sizing: border-box; }

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  color: var(--ink);
  background:
    radial-gradient(circle at top left, rgba(15, 118, 110, 0.12), transparent 28%),
    linear-gradient(180deg, #fbfefe 0%, var(--bg) 100%);
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
  gap: 14px;
  flex-wrap: wrap;
  margin: 8px 0 32px;
  font-size: 14px;
  font-weight: 700;
}

.nav a { text-decoration: none; }

article, .hero-card {
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 18px;
  padding: 34px;
  box-shadow: 0 24px 64px rgba(15, 23, 42, 0.06);
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
  color: #334155;
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

p, li, span { color: #334155; }

ol, ul { padding-left: 22px; }

li { margin: 8px 0; }

.placeholder {
  min-height: 260px;
  border: 2px dashed #b8c6d4;
  border-radius: 16px;
  background:
    linear-gradient(135deg, rgba(15, 118, 110, .08), rgba(14, 165, 233, .08)),
    #fff;
  display: grid;
  place-items: center;
  text-align: center;
  padding: 24px;
  margin: 28px 0;
  color: var(--muted);
}

.placeholder strong {
  display: block;
  color: var(--ink);
  font-size: 18px;
  margin-bottom: 6px;
}

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
  border: 1px solid rgba(15, 118, 110, .18);
  border-radius: 999px;
  background: var(--soft);
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
  border: 1px solid #c6ede6;
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
  background: var(--accent);
  color: #fff;
  text-decoration: none;
  font-weight: 800;
}

.related, .article-list {
  display: grid;
  gap: 12px;
}

.related a, .article-list a {
  display: block;
  padding: 14px 16px;
  background: #fff;
  border: 1px solid var(--line);
  border-radius: 14px;
  text-decoration: none;
  color: var(--ink);
  font-weight: 700;
}

.related a:hover, .article-list a:hover { border-color: var(--accent); }

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
  color: var(--ink);
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
  .placeholder { min-height: 210px; }
}
`;

function generate() {
  writeFile(path.join(root, "assets/seo.css"), css);
  writeFile(path.join(root, "index.html"), rootPage());
  writeFile(path.join(root, "en/index.html"), homePage("en"));
  writeFile(path.join(root, "vi/index.html"), homePage("vi"));
  writeFile(path.join(root, "en/articles/index.html"), articleHub("en"));
  writeFile(path.join(root, "vi/articles/index.html"), articleHub("vi"));
  writeFile(path.join(root, "articles/index.html"), redirectPage("/en/articles/"));
  writeFile(path.join(root, "about.html"), staticPage("about"));
  writeFile(path.join(root, "support.html"), staticPage("support"));
  writeFile(path.join(root, "privacy-policy.html"), staticPage("privacy"));
  writeFile(path.join(root, "privacy.html"), redirectPage("/privacy-policy.html"));

  topics.forEach((entry, index) => {
    writeFile(path.join(root, "en/articles", `${entry.slug}.html`), articlePage("en", entry, index));
    writeFile(path.join(root, "vi/articles", `${entry.slug}.html`), articlePage("vi", entry, index));
    writeFile(path.join(root, "articles", `${entry.slug}.html`), redirectPage(`/en/articles/${entry.slug}.html`));
  });

  writeFile(path.join(root, "robots.txt"), `User-agent: *\nAllow: /\nSitemap: ${siteUrl}/sitemap.xml`);

  const sitemapUrls = [
    "/",
    "/en/",
    "/vi/",
    "/about.html",
    "/support.html",
    "/privacy-policy.html",
    "/en/articles/",
    "/vi/articles/",
    ...topics.flatMap((entry) => [`/en/articles/${entry.slug}.html`, `/vi/articles/${entry.slug}.html`])
  ];
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapUrls.map((url) => `  <url><loc>${siteUrl}${url}</loc><lastmod>${lastModified}</lastmod><changefreq>${url.includes("/articles/") ? "monthly" : "weekly"}</changefreq><priority>${url === "/" ? "1.0" : url === "/en/" || url === "/vi/" ? "0.9" : url.includes("/articles/") ? "0.7" : "0.6"}</priority></url>`).join("\n")}\n</urlset>`;
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

  writeFile(path.join(root, "llms.txt"), `# ${appName}\n\n- Home: ${siteUrl}/en/\n- Vietnamese home: ${siteUrl}/vi/\n- App Store: ${appUrl}\n- Support: ${siteUrl}/support.html\n- Privacy policy: ${siteUrl}/privacy-policy.html\n- SEO articles hub: ${siteUrl}/en/articles/\n\nNomad Translator is an iPhone app focused on offline travel translation. It supports downloadable language packs, text translation, voice input translation, and camera/photo translation for signs, menus, labels, and quick travel conversations.`);

  writeFile(path.join(root, "README.md"), `# nomad-translator-pages\n\nStatic SEO and support site for Nomad Translator.\n\n## Structure\n\n- \`/\` language chooser with auto-redirect\n- \`/en/\` English landing page\n- \`/vi/\` Vietnamese landing page\n- \`/en/articles/\` English SEO hub\n- \`/vi/articles/\` Vietnamese SEO hub\n- \`/about.html\` app overview\n- \`/support.html\` support page\n- \`/privacy-policy.html\` privacy page\n\n## Rebuild pages\n\nRun:\n\n\`\`\`bash\nnode scripts/build-seo-pages.mjs\n\`\`\`\n\nThe generator rewrites the landing pages, article pages, aliases, sitemap, robots, and supporting metadata files.\n\n## Publishing\n\nThis repo is configured for the custom domain:\n\n\`${siteUrl}\`\n\nIf you move the site later, update \`siteUrl\` in [scripts/build-seo-pages.mjs](/Users/kelvin/Downloads/nomad-translator-pages/scripts/build-seo-pages.mjs).`);
}

generate();
