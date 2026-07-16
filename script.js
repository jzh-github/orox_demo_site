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

showSlide(0);
startAutoplay();
