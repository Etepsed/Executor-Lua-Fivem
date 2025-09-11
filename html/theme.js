export function setupThemeSelector() {
  document.addEventListener("DOMContentLoaded", () => {
    const selector = document.getElementById("themeSelector");
    const htmlElement = document.documentElement;

    if (!selector) return;

    selector.addEventListener("change", function () {
      htmlElement.classList.remove(
        "theme-dark-blue",
        "theme-light",
        "theme-copper"
      );

      if (this.value !== "default") {
        htmlElement.classList.add(this.value);
      }
    });
  });
}
