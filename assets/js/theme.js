(function () {
  const btn = document.getElementById("theme-toggle");
  if (!btn) return;

  const saved = window.localStorage.getItem("theme");
  if (saved === "dark") document.body.classList.add("dark");

  btn.addEventListener("click", () => {
    const isDark = document.body.classList.contains("dark");
    if (isDark) {
      document.body.classList.remove("dark");
      window.localStorage.setItem("theme", "light");
    } else {
      document.body.classList.add("dark");
      window.localStorage.setItem("theme", "dark");
    }
  });
})();
