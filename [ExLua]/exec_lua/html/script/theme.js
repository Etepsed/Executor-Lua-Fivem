export function SetThema(monaco) {
  const selector = document.getElementById("themeSelector");
  const body = document.body;

  selector.addEventListener("change", () => {
    // Remove classes de tema antigas
    body.classList.remove("theme-dark-blue", "theme-light", "theme-copper");

    // Aplica nova classe se não for o padrão
    const selectedTheme = selector.value;
    if (selectedTheme) {
      body.classList.add(selectedTheme);

      // Mapear os temas do seu seletor para os temas do Monaco
      let monacoTheme;
      switch (selectedTheme) {
        case "theme-dark-blue":
          monacoTheme = "vs-dark"; // tema escuro padrão do Monaco
          break;
        case "theme-light":
          monacoTheme = "vs-light"; // tema claro padrão do Monaco
          break;
        case "theme-copper":
          monacoTheme = "hc-black"; // exemplo de tema escuro de alto contraste, pode personalizar também
          break;
        default:
          monacoTheme = "vs-dark"; // fallback
      }

      monaco.editor.setTheme(monacoTheme);
    }
  });
}
