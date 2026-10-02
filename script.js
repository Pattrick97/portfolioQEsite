document.getElementById("year").textContent = new Date().getFullYear();

const observer = new IntersectionObserver(
  entries => entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("is-visible");
  }),
  { threshold: 0.08 }
);

document.querySelectorAll(".approach-card, .stack-card, .coverage-grid > div, .code-card").forEach(el => {
  el.classList.add("reveal");
  observer.observe(el);
});
