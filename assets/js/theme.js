// Theme toggle functionality
<<<<<<< HEAD
;(() => {
  const themeToggle = document.getElementById("themeToggle")
  const html = document.documentElement

  // Check for saved theme preference or default to light mode
  const currentTheme = localStorage.getItem("theme") || "light"
  html.setAttribute("data-theme", currentTheme)

  themeToggle.addEventListener("click", () => {
    const currentTheme = html.getAttribute("data-theme")
    const newTheme = currentTheme === "light" ? "dark" : "light"

    html.setAttribute("data-theme", newTheme)
    localStorage.setItem("theme", newTheme)
  })
=======
(function () {
  const btn = document.getElementById("theme-toggle");
  if (!btn) return;

  const apply = (mode) => {
    if (mode === "dark") {
      document.body.classList.add("dark");
      btn.setAttribute("aria-pressed", "true");
      btn.setAttribute("aria-label", "Karanlık tema açık");
    } else {
      document.body.classList.remove("dark");
      btn.setAttribute("aria-pressed", "false");
      btn.setAttribute("aria-label", "Açık tema açık");
    }
  };

  const saved = window.localStorage.getItem("theme");
  apply(saved === "dark" ? "dark" : "light");

  btn.addEventListener("click", () => {
    const dark = document.body.classList.contains("dark");
    const next = dark ? "light" : "dark";
    window.localStorage.setItem("theme", next);
    apply(next);
  });
>>>>>>> 9a5ab87 (chore: import local changes)
})()
