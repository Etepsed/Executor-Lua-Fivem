export let editor;

export function loadEditor(monaco) {
  editor = monaco.editor.create(document.getElementById("editor"), {
    value: "",
    language: "lua",
    theme: "vs-dark",
    fontSize: 15,
    minimap: { enabled: false },
    automaticLayout: true,
  });
}
