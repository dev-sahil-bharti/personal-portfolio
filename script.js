document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    let darkMode = localStorage.getItem("darkMode") === "true";

    function applyTheme() {
        document.body.classList.toggle("dark-mode", darkMode);
        document.body.classList.toggle("light-mode", !darkMode);
        themeToggle.textContent = darkMode ? "☀️" : "🌙";
        localStorage.setItem("darkMode", darkMode);
    }

    themeToggle.addEventListener("click", () => {
        darkMode = !darkMode;
        applyTheme();
    });

    applyTheme();
});
