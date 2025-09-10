export function registerLuaCompletions(monaco) {
  monaco.languages.registerCompletionItemProvider("lua", {
    provideCompletionItems: () => {
      return {
        suggestions: [
          {
            label: "SetEntityCoords",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText:
              "SetEntityCoords(PlayerPedId(), x, y, z, false, false, false, true)",
            detail: "FiveM Native",
          },
          {
            label: "GetPlayerPed",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "GetPlayerPed(PlayerId())",
            detail: "FiveM Native",
          },
        ],
      };
    },
  });
}
