/* Panthera Insight legal site — theme switching.
 *
 * Theme resolution has two layers:
 *   - A stored explicit choice ("light" | "dark") in localStorage,
 *     written when the visitor clicks the header toggle.
 *   - Otherwise the OS preference (prefers-color-scheme).
 *
 * The resolved value is written to <html data-theme="…">, which drives
 * both the colour tokens and the toggle's label in style.css.
 *
 * Two entry points:
 *   applyStoredTheme()  runs inline in <head> before paint to avoid a
 *                       flash of the wrong theme.
 *   initThemeToggle()   wires the button after the DOM is parsed.
 */
(function () {
  var STORAGE_KEY = "panthera-theme";

  function storedChoice() {
    try {
      var v = localStorage.getItem(STORAGE_KEY);
      return v === "light" || v === "dark" ? v : null;
    } catch (e) {
      // Private mode / disabled storage: fall back to OS preference.
      return null;
    }
  }

  function systemTheme() {
    return window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  function resolvedTheme() {
    return storedChoice() || systemTheme();
  }

  function apply(theme) {
    document.documentElement.setAttribute("data-theme", theme);
  }

  // Exposed so the inline head snippet can call it pre-paint.
  window.applyStoredTheme = function () {
    apply(resolvedTheme());
  };

  function initThemeToggle() {
    var btn = document.querySelector(".theme-toggle");
    if (!btn) return;

    apply(resolvedTheme());

    btn.addEventListener("click", function () {
      var next =
        document.documentElement.getAttribute("data-theme") === "dark"
          ? "light"
          : "dark";
      apply(next);
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch (e) {
        /* storage unavailable — choice persists for this page only */
      }
    });

    // When no explicit choice is stored, keep following the OS as it
    // changes (e.g. the device's automatic day/night switch).
    if (window.matchMedia) {
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .addEventListener("change", function (e) {
          if (!storedChoice()) apply(e.matches ? "dark" : "light");
        });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initThemeToggle);
  } else {
    initThemeToggle();
  }
})();
