// Yash's Learning Log
// Theme switching and preference persistence

const themeToggle = document.querySelector("#theme-toggle");
const themeIcon = document.querySelector("#theme-icon");
const root = document.documentElement;

const THEME_KEY = "learning-log-theme";

// Read the saved theme, if one exists.
function getSavedTheme() {
  try {
    const savedTheme = localStorage.getItem(THEME_KEY);

    if (savedTheme === "light" || savedTheme === "dark") {
      return savedTheme;
    }
  } catch (error) {
    // The website can still work if storage is unavailable.
  }

  // No saved choice yet: follow the visitor's system setting.
  try {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
  } catch (error) {
    // Fall through to light.
  }

  return "light";
}

// Apply the selected theme to the document.
function applyTheme(theme) {
  if (theme === "dark") {
    root.dataset.theme = "dark";
  } else {
    delete root.dataset.theme;
  }

  const isDark = theme === "dark";

  themeIcon.textContent = isDark ? "☀" : "☾";

  themeToggle.setAttribute(
    "aria-label",
    isDark ? "Switch to light mode" : "Switch to dark mode"
  );

  themeToggle.setAttribute("aria-pressed", String(isDark));

  // Update the browser's theme color where supported.
  const themeColor = document.querySelector(
    'meta[name="theme-color"]'
  );

  if (themeColor) {
    themeColor.setAttribute(
      "content",
      isDark ? "#151B27" : "#F7F9FD"
    );
  }
}

// Save the user's preference.
function saveTheme(theme) {
  try {
    localStorage.setItem(THEME_KEY, theme);
  } catch (error) {
    // Theme switching still works for this page session.
  }
}

// Initialize the page.
applyTheme(getSavedTheme());

// Toggle between light and dark modes.
themeToggle.addEventListener("click", () => {
  const currentTheme = root.dataset.theme === "dark"
    ? "dark"
    : "light";

  const nextTheme = currentTheme === "dark"
    ? "light"
    : "dark";

  applyTheme(nextTheme);
  saveTheme(nextTheme);
});