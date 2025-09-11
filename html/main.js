import { loadEditor } from "./editor.js";
import { registerLuaCompletions } from "./completions.js";
import { bindEvents } from "./events.js";
import { setupThemeSelector } from "./theme.js";

require.config({
  paths: {
    vs: "https://cdn.jsdelivr.net/npm/monaco-editor@0.44.0/min/vs",
  },
});

require(["vs/editor/editor.main"], function () {
  loadEditor(monaco);
  registerLuaCompletions(monaco);
  bindEvents();
  setupThemeSelector(monaco);
});
