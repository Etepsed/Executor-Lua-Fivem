export let editor;

export function loadEditor(monaco) {
  editor = monaco.editor.create(document.getElementById("editor"), {
    value: "-- Digite seu código Lua aqui...\n",
    language: "lua",
    theme: "vs-dark",
    fontSize: 14,
    minimap: { enabled: false },
    automaticLayout: true,
  });
}
