const questions = document.querySelectorAll(".faq-question");

questions.forEach((e) => {
  e.addEventListener("click", () => {
    e.classList.toggle("active");
  });
});

// MAKE MOBILE NAVIGATION WORK

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", () => {
  headerEl.classList.toggle("nav-open");
});

//////////////////////////////////
/// Smooth scrolling animation ///

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const secEl = document.querySelector(href);
      secEl.scrollIntoView({ behavior: "smooth" });
    }

    // close mobile navigation
    if (link.classList.contains("main-nav-link")) {
      headerEl.classList.toggle("nav-open");
    }
  });
});

const sr = ScrollReveal({
  distance: "100px",
  duration: 1000,
  // reset: true,
});

sr.reveal(`.hero-text-box, .about-icon-wrap`, {
  origin: "left",
  interval: 300,
  opacity: 0,
  easing: "ease",
});

sr.reveal(`.model-img`, {
  origin: "right",
  interval: 300,
  opacity: 0,
  easing: "ease",
});

sr.reveal(
  `.main-nav-link, .heading-secondary , .faq-heading, .vision-description , .model-item, .model-description, .roadmap-list-item, .faq-question`,
  {
    origin: "bottom",
    interval: 300,
    opacity: 0,
    easing: "ease",
  }
);

sr.reveal(`.btn, .hero-img-box, .about-description`, {
  origin: "bottom",
  interval: 300,
  opacity: 0,
  easing: "ease",
});
