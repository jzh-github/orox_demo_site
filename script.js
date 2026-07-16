const header = document.querySelector("[data-header]");
const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".site-nav");
const slides = [...document.querySelectorAll("[data-slide]")];
const dots = [...document.querySelectorAll("[data-dot]")];
const previousButton = document.querySelector("[data-prev]");
const nextButton = document.querySelector("[data-next]");
const hero = document.querySelector(".hero");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const updatedHeroImages = [
  "assets/orox-bike-rider-snow.jpg",
  "assets/orox-bike-road.jpg",
  "assets/orox-bike-detail-black.jpg",
];
const updatedProductImages = [
  "assets/orox-bike-studio-gray.jpg",
  "assets/orox-bike-studio-black.jpg",
  "assets/orox-bike-road.jpg",
];
const updatedDetailImages = [
  "assets/orox-bike-road.jpg",
  "assets/orox-bike-studio-gray.jpg",
  "assets/orox-bike-detail-black.jpg",
  "assets/orox-bike-studio-black.jpg",
  "assets/orox-bike-rider-snow.jpg",
];

function applyUpdatedAssets() {
  document.querySelectorAll(".hero-slide img").forEach((image, index) => {
    if (updatedHeroImages[index]) image.src = updatedHeroImages[index];
  });
  document.querySelectorAll(".product-card img").forEach((image, index) => {
    if (updatedProductImages[index]) image.src = updatedProductImages[index];
  });
  document.querySelectorAll(".detail-card img").forEach((image, index) => {
    if (updatedDetailImages[index]) image.src = updatedDetailImages[index];
  });
  const visionImage = document.querySelector(".vision > img");
  if (visionImage) visionImage.src = "assets/orox-bike-road.jpg";
}

applyUpdatedAssets();

const bilingualEntries = [
  { selector: '#site-nav a[href="#products"]', en: "Products" },
  { selector: '#site-nav a[href="#technology"]', en: "Technology" },
  { selector: '#site-nav a[href="#details"]', en: "Details" },
  { selector: '#site-nav a[href="#vision"]', en: "Vision" },
  { selector: ".header-cta", en: "Explore OROX" },
  { selector: ".hero-slide:nth-child(1) .eyebrow", en: "OROX ADVENTURE SERIES" },
  { selector: ".hero-slide:nth-child(1) h1", en: "Beyond boundaries" },
  { selector: ".hero-slide:nth-child(1) p:not(.eyebrow)", en: "From city streets to wild trails. Light, powerful, ready for every terrain." },
  { selector: ".hero-slide:nth-child(1) .button", en: "Explore OROX X1" },
  { selector: ".hero-slide:nth-child(2) .eyebrow", en: "POWERED BY POSSIBILITY" },
  { selector: ".hero-slide:nth-child(2) h2", en: "Make the mountains<br />everyday" },
  { selector: ".hero-slide:nth-child(2) p:not(.eyebrow)", en: "Natural assistance and precise control, taking you beyond the map." },
  { selector: ".hero-slide:nth-child(2) .button", en: "Explore the technology" },
  { selector: ".hero-slide:nth-child(3) .eyebrow", en: "BUILT FOR EVERY TERRAIN" },
  { selector: ".hero-slide:nth-child(3) h2", en: "Explore<br />without limits" },
  { selector: ".hero-slide:nth-child(3) p:not(.eyebrow)", en: "Modular carrying and long-range systems make every journey possible." },
  { selector: ".hero-slide:nth-child(3) .button", en: "See the details" },
  { selector: ".intro .section-index", en: "01 — OROX" },
  { selector: ".intro h2", en: "Born beyond the road" },
  { selector: ".intro-copy > p", en: "OROX redefines all-terrain riding with intelligent technology. We bring powerful drive, lightweight structure, and natural control together so commuting, trail riding, and long-distance travel no longer need to be separate." },
  { selector: ".intro-copy .text-link", en: "Discover our philosophy <span>↗</span>" },
  { selector: ".products .section-index", en: "02 — PRODUCTS" },
  { selector: ".products h2", en: "Choose your OROX" },
  { selector: ".products .section-heading > p", en: "Three configurations. One instinct to explore." },
  { selector: ".product-card:nth-child(1) .product-tag", en: "All-terrain flagship" },
  { selector: ".product-card:nth-child(1) .product-info > p", en: "Carbon frame · smart all-wheel drive · flagship power" },
  { selector: ".product-card:nth-child(2) .product-tag", en: "Long range" },
  { selector: ".product-card:nth-child(2) .product-info > p", en: "High-capacity battery · adaptive suspension · multi-scenario carry" },
  { selector: ".product-card:nth-child(3) .product-tag", en: "Urban explorer" },
  { selector: ".product-card:nth-child(3) .product-info > p", en: "Lightweight agility · quiet assistance · intelligent connectivity" },
  { selector: ".technology .section-index", en: "03 — PERFORMANCE" },
  { selector: ".tech-intro h2", en: "Power, precisely tuned" },
  { selector: ".tech-intro > p", en: "Every output is computed in real time. Faster response, more natural assistance, and a rhythm that understands you." },
  { selector: ".metric:nth-child(1) p", en: "Peak torque" },
  { selector: ".metric:nth-child(2) p", en: "Lightweight build" },
  { selector: ".metric:nth-child(3) p", en: "Maximum system weight" },
  { selector: ".metric:nth-child(4) p", en: "Combined range up to" },
  { selector: ".details .section-index", en: "04 — DETAILS" },
  { selector: ".details h2", en: "Every detail<br />has an answer" },
  { selector: ".details .section-heading > p", en: "From frame geometry to intelligent controls, every decision serves the real ride." },
  { selector: ".detail-card:nth-child(1) h3", en: "One bike, many lives" },
  { selector: ".detail-card:nth-child(1) p", en: "Trail riding, touring, weekend escapes — switch freely." },
  { selector: ".detail-card:nth-child(2) h3", en: "Lightweight carbon structure" },
  { selector: ".detail-card:nth-child(2) p", en: "Strength and agility without compromise." },
  { selector: ".detail-card:nth-child(3) h3", en: "Intelligent cockpit" },
  { selector: ".detail-card:nth-child(3) p", en: "Navigation, data, and bike status at a glance." },
  { selector: ".detail-card:nth-child(4) h3", en: "Fluid assistance unit" },
  { selector: ".detail-card:nth-child(4) p", en: "Millisecond response that follows your rhythm." },
  { selector: ".detail-card:nth-child(5) h3", en: "Modular carrying" },
  { selector: ".detail-card:nth-child(5) p", en: "Bring more possibilities steadily along the road." },
  { selector: ".vision .section-index", en: "05 — OUR VISION" },
  { selector: ".vision h2", en: "Expand the boundaries of movement<br />and the radius of life" },
  { selector: ".vision-copy > p:last-child", en: "We believe technology should bring people closer to the world. OROX creates a more natural, more reliable riding experience so everyone can rediscover the distance ahead and the everyday around them." },
  { selector: ".contact .section-index", en: "06 — CONTACT" },
  { selector: ".contact h2", en: "Move forward<br />with OROX" },
  { selector: ".contact-info > p:first-child", en: "Product inquiries & brand partnerships" },
  { selector: ".contact-info > p:last-child", en: "China · Shenzhen" },
  { selector: ".footer-links > div:nth-child(1) > p", en: "Products" },
  { selector: ".footer-links > div:nth-child(2) > p", en: "Explore" },
  { selector: '.footer-links > div:nth-child(2) a[href="#technology"]', en: "Technology" },
  { selector: '.footer-links > div:nth-child(2) a[href="#details"]', en: "Product details" },
  { selector: '.footer-links > div:nth-child(2) a[href="#vision"]', en: "Brand vision" },
  { selector: ".footer-links > div:nth-child(3) > p", en: "Contact" },
  { selector: '.footer-links > div:nth-child(3) a[href="#contact"]', en: "Partnerships" },
];

function applyLanguage(language) {
  bilingualEntries.forEach((entry) => {
    const element = document.querySelector(entry.selector);
    if (element) element.innerHTML = language === "en" ? entry.en : entry.zh;
  });
  document.documentElement.lang = language === "en" ? "en" : "zh-CN";
}

function initializeLanguageToggle() {
  bilingualEntries.forEach((entry) => {
    const element = document.querySelector(entry.selector);
    if (element) entry.zh = element.innerHTML;
  });

  const languageToggle = document.createElement("button");
  languageToggle.className = "language-toggle";
  languageToggle.type = "button";
  languageToggle.setAttribute("aria-label", "切换到英文");
  document.querySelector("[data-header]")?.append(languageToggle);

  let language = "en";
  try { language = window.localStorage.getItem("orox-language") || "en"; } catch {}
  const updateToggle = () => {
    languageToggle.textContent = language === "en" ? "中" : "EN";
    languageToggle.setAttribute("aria-label", language === "en" ? "Switch to Chinese" : "切换到英文");
  };
  languageToggle.addEventListener("click", () => {
    language = language === "en" ? "zh" : "en";
    applyLanguage(language);
    updateToggle();
    try { window.localStorage.setItem("orox-language", language); } catch {}
  });
  applyLanguage(language);
  updateToggle();
}

let activeSlide = 0;
let autoplayTimer;
let touchStartX = 0;

function updateHeader() {
  header?.classList.toggle("is-scrolled", window.scrollY > 24);
}

function closeMenu() {
  menuToggle?.setAttribute("aria-expanded", "false");
  navigation?.classList.remove("is-open");
  document.body.classList.remove("menu-open");
}

function showSlide(index) {
  activeSlide = (index + slides.length) % slides.length;

  slides.forEach((slide, slideIndex) => {
    const isActive = slideIndex === activeSlide;
    slide.classList.toggle("is-active", isActive);
    slide.setAttribute("aria-hidden", String(!isActive));
  });

  dots.forEach((dot, dotIndex) => {
    const isActive = dotIndex === activeSlide;
    dot.classList.toggle("is-active", isActive);
    dot.setAttribute("aria-selected", String(isActive));
  });
}

function stopAutoplay() {
  window.clearInterval(autoplayTimer);
}

function startAutoplay() {
  stopAutoplay();
  if (!reduceMotion) autoplayTimer = window.setInterval(() => showSlide(activeSlide + 1), 6000);
}

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

menuToggle?.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  navigation?.classList.toggle("is-open", !isOpen);
  document.body.classList.toggle("menu-open", !isOpen);
});

navigation?.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));

previousButton?.addEventListener("click", () => {
  showSlide(activeSlide - 1);
  startAutoplay();
});

nextButton?.addEventListener("click", () => {
  showSlide(activeSlide + 1);
  startAutoplay();
});

dots.forEach((dot) => {
  dot.addEventListener("click", () => {
    showSlide(Number(dot.dataset.dot));
    startAutoplay();
  });
});

hero?.addEventListener("mouseenter", stopAutoplay);
hero?.addEventListener("mouseleave", startAutoplay);
hero?.addEventListener("touchstart", (event) => { touchStartX = event.changedTouches[0].clientX; }, { passive: true });
hero?.addEventListener("touchend", (event) => {
  const distance = event.changedTouches[0].clientX - touchStartX;
  if (Math.abs(distance) > 45) showSlide(activeSlide + (distance < 0 ? 1 : -1));
  startAutoplay();
}, { passive: true });

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  },
  { threshold: 0.12, rootMargin: "0px 0px -7%" }
);

document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

initializeLanguageToggle();
showSlide(0);
startAutoplay();
