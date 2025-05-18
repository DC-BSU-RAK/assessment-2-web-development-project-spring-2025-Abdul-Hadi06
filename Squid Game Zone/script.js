document.addEventListener("DOMContentLoaded", () => {
  // ===Highlight current nav link===
  const links = document.querySelectorAll("nav a");
  links.forEach(link => {
    if (window.location.href.includes(link.getAttribute("href"))) {
      link.classList.add("active");
    }
  });

  // ===Fake form handler (Contact page)===
  const form = document.querySelector(".contact-form");
  if (form) {
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      alert("Thanks for your message! We'll get back to you soon.");
      form.reset();
    });
  }

  // ===Theme Toggle Button===
  const themeBtn = document.getElementById("theme-toggle");
  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark-theme");
      document.body.classList.toggle("light-theme");
    });
  }
});
