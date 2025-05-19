// === Highlight current nav link ===
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("nav a");
  links.forEach(link => {
    if (window.location.href.includes(link.getAttribute("href"))) {
      link.classList.add("active");
    }
  });

  // === Fake form handler (Reviews page) ===
const reviewForm = document.querySelector(".reviews-form");
if (reviewForm) {
  reviewForm.addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Thanks for your review! We appreciate your feedback.");
    reviewForm.reset();
  });
}

  // === Theme Toggle Button ===
  const themeBtn = document.getElementById("theme-toggle");
  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark-theme");
      document.body.classList.toggle("light-theme");
    });
  }
});
