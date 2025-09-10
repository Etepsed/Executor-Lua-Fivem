import { editor } from "./editor.js";

export function bindEvents() {
  document.getElementById("runBtn").addEventListener("click", () => {
    const code = editor.getValue();
    fetch(`https://${GetParentResourceName()}/runCode`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code }),
    });
  });

  document.getElementById("stopBtn").addEventListener("click", () => {
    fetch(`https://${GetParentResourceName()}/stopCode`, {
      method: "POST",
    });
  });

  document.getElementById("closeBtn").addEventListener("click", () => {
    fetch(`https://${GetParentResourceName()}/closeTool`, {
      method: "POST",
    });
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      fetch(`https://${GetParentResourceName()}/closeTool`, {
        method: "POST",
      });
    }
  });

  window.addEventListener("message", (event) => {
    if (event.data.action === "show") {
      document.body.style.display = "flex";
    } else if (event.data.action === "hide") {
      document.body.style.display = "none";
    }
  });
}
