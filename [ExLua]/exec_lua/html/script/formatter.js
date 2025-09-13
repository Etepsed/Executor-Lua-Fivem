// formatter.js
import { formatText } from "https://cdn.skypack.dev/lua-fmt";

export function registerFormatter(monaco) {
  monaco.languages.registerDocumentFormattingEditProvider("lua", {
    provideDocumentFormattingEdits: function (model) {
      const code = model.getValue();
      const formattedCode = formatText(code);
      return [
        {
          range: model.getFullModelRange(),
          text: formattedCode,
        },
      ];
    },
  });
}
