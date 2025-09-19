document.addEventListener("scroll", () => {
  const header = document.querySelector("nav");

  if (window.scrollY > 0) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

const spans = document.querySelectorAll(".progress-bar span");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const span = entry.target;
        span.style.width = span.dataset.width;
        span.innerHTML = span.dataset.width;
        observer.unobserve(span);
      }
    });
  },
  { threshold: 0.5 }
);

spans.forEach((span) => {
  observer.observe(span);
});

// Update width display
// function updateWidthDisplay() {
//   document.getElementById("width-display").textContent = window.innerWidth;
// }

// // Initial call
// updateWidthDisplay();

// // Update on resize
// window.addEventListener("resize", updateWidthDisplay);

// Toggle mobile menu
const hamburger = document.getElementById("hamburger");
const navbar = document.getElementById("navbar");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navbar.classList.toggle("active");
});

// Close menu when clicking on a link
const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (window.innerWidth <= 500) {
      hamburger.classList.remove("active");
      navbar.classList.remove("active");
    }
  });
});

// Update width display
function updateWidthDisplay() {
  document.getElementById("width-display").textContent = window.innerWidth;
}

// Initial call
updateWidthDisplay();

// Update on resize
window.addEventListener("resize", updateWidthDisplay);
