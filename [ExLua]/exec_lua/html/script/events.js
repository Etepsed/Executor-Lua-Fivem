import { editor } from "./editor.js";

export function bindEvents() {
  const runBtn = document.getElementById("runBtn");
  const stopBtn = document.getElementById("stopBtn");
  const closeBtn = document.getElementById("closeBtn");
  const formatBtn = document.getElementById("formatBtn");
  const clearBtn = document.getElementById("clearBtn");
  const loadFileBtn = document.getElementById("loadFileBtn");
  const fileInput = document.getElementById("fileInput");

  runBtn.addEventListener("click", () => {
    const code = editor.getValue();
    fetch(`https://${GetParentResourceName()}/runCode`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code }),
    });
  });

  stopBtn.addEventListener("click", () => {
    fetch(`https://${GetParentResourceName()}/stopCode`, {
      method: "POST",
    });
  });

  closeBtn.addEventListener("click", () => {
    fetch(`https://${GetParentResourceName()}/closeTool`, {
      method: "POST",
    });
  });

  formatBtn.addEventListener("click", () => {
    editor.getAction("editor.action.formatDocument").run();
  });

  clearBtn.addEventListener("click", () => {
    editor.setValue("");
  });

  loadFileBtn.addEventListener("click", () => {
    fileInput.click(); // Abre o seletor de arquivos
  });

  fileInput.addEventListener("change", (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const contents = e.target.result;
      editor.setValue(contents); // Carrega o conteúdo no Monaco Editor
    };
    reader.readAsText(file);
  });
  window.addEventListener("message", (event) => {
    const action = event.data.action;

    if (action === "show") {
      document.body.style.display = "flex";
    } else if (action === "hide") {
      document.body.style.display = "none";
    }
  });
}

//btn close nui
window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "Escape":
    case "3":
      fetch(`https://${GetParentResourceName()}/closeTool`, {
        method: "POST",
      });
      break;
  }
});
