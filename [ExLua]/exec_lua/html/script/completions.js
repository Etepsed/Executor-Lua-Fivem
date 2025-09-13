export function registerLuaCompletions(monaco) {
  monaco.languages.registerCompletionItemProvider("lua", {
    provideCompletionItems: () => {
      return {
        suggestions: [
          // Palavras-chave e Snippets de Fluxo de Controle
          {
            label: "function",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "function ${1:name}(${2:params})\n\t$0\nend",
            insertTextRules:
              monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: "Cria uma nova função.",
          },
          {
            label: "if",
            kind: monaco.languages.CompletionItemKind.Keyword,
            insertText: "if ${1:condition} then\n\t$0\nend",
            insertTextRules:
              monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: "Cria uma declaração condicional `if`.",
          },
          {
            label: "if-else",
            kind: monaco.languages.CompletionItemKind.Keyword,
            insertText:
              "if ${1:condition} then\n\t${2:-- code}\nelse\n\t$0\nend",
            insertTextRules:
              monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: "Cria uma declaração condicional `if-else`.",
          },
          {
            label: "for",
            kind: monaco.languages.CompletionItemKind.Keyword,
            insertText: "for ${1:i}=${2:1}, ${3:10} do\n\t$0\nend",
            insertTextRules:
              monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: "Cria um loop `for` numérico.",
          },
          {
            label: "while-loop",
            kind: monaco.languages.CompletionItemKind.Keyword,
            insertText: "while ${1:condition} do\n\t$0\nend",
            insertTextRules:
              monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: "Cria um loop `while`.",
          },
          {
            label: "repeat-until-loop",
            kind: monaco.languages.CompletionItemKind.Keyword,
            insertText: "repeat\n\t$0\nuntil ${1:condition}",
            insertTextRules:
              monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: "Cria um loop `repeat-until`.",
          },

          // Funções Globais Comuns
          {
            label: "print",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "print(${1:message})",
            insertTextRules:
              monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: "Imprime uma mensagem no console.",
          },

          {
            label: "tonumber",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "tonumber(${1:value})",
            insertTextRules:
              monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: "Converte um valor para um número.",
          },

          {
            label: "pcall",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "pcall(${1:func}, ${2:arg1})",
            insertTextRules:
              monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: "Chama uma função em modo protegido.",
          },
          {
            label: "error",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "error(${1:message})",
            insertTextRules:
              monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: "Causa um erro de tempo de execução.",
          },

          // Funções da biblioteca `math`

          {
            label: "math.random",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "math.random(${1:m}, ${2:n})",
            insertTextRules:
              monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: "Gera um número pseudo-aleatório.",
          },

          // Funções da biblioteca `string`
          {
            label: "string.len",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "string.len(${1:s})",
            insertTextRules:
              monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: "Retorna o comprimento de uma string.",
          },
          {
            label: "string.sub",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "string.sub(${1:s}, ${2:i}, ${3:j})",
            insertTextRules:
              monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: "Retorna uma substring de s.",
          },

          // Funções da biblioteca `table`
          {
            label: "table.insert",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "table.insert(${1:table}, ${2:value})",
            insertTextRules:
              monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: "Insere um elemento em uma tabela.",
          },

          {
            label: "table.sort",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "table.sort(${1:table})",
            insertTextRules:
              monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: "Ordena os elementos de uma tabela.",
          },

          // --- Palavras-chave ---
          {
            label: "and",
            kind: monaco.languages.CompletionItemKind.Keyword,
            insertText: "and",
            documentation: 'Operador lógico "e".',
          },
          {
            label: "break",
            kind: monaco.languages.CompletionItemKind.Keyword,
            insertText: "break",
            documentation: "Sai de um loop.",
          },
          {
            label: "do",
            kind: monaco.languages.CompletionItemKind.Keyword,
            insertText: "do",
            documentation: "Inicia um bloco de código.",
          },
          {
            label: "else",
            kind: monaco.languages.CompletionItemKind.Keyword,
            insertText: "else",
            documentation: "Condição alternativa.",
          },
          {
            label: "elseif",
            kind: monaco.languages.CompletionItemKind.Keyword,
            insertText: "elseif",
            documentation: "Condição intermediária.",
          },
          {
            label: "end",
            kind: monaco.languages.CompletionItemKind.Keyword,
            insertText: "end",
            documentation: "Finaliza um bloco de código.",
          },
          {
            label: "false",
            kind: monaco.languages.CompletionItemKind.Value,
            insertText: "false",
            documentation: "Valor booleano falso.",
          },

          {
            label: "in",
            kind: monaco.languages.CompletionItemKind.Keyword,
            insertText: "in",
            documentation: "Usado em loops `for in`.",
          },
          {
            label: "local",
            kind: monaco.languages.CompletionItemKind.Keyword,
            insertText: "local",
            documentation: "Define uma variável local.",
          },
          {
            label: "nil",
            kind: monaco.languages.CompletionItemKind.Value,
            insertText: "nil",
            documentation: "Representa a ausência de um valor.",
          },
          {
            label: "not",
            kind: monaco.languages.CompletionItemKind.Keyword,
            insertText: "not",
            documentation: 'Operador lógico "não".',
          },
          {
            label: "or",
            kind: monaco.languages.CompletionItemKind.Keyword,
            insertText: "or",
            documentation: 'Operador lógico "ou".',
          },

          {
            label: "return",
            kind: monaco.languages.CompletionItemKind.Keyword,
            insertText: "return",
            documentation: "Retorna um valor de uma função.",
          },
          {
            label: "then",
            kind: monaco.languages.CompletionItemKind.Keyword,
            insertText: "then",
            documentation: "Usado em declarações `if`.",
          },
          {
            label: "true",
            kind: monaco.languages.CompletionItemKind.Value,
            insertText: "true",
            documentation: "Valor booleano verdadeiro.",
          },
          {
            label: "until",
            kind: monaco.languages.CompletionItemKind.Keyword,
            insertText: "until",
            documentation: "Condição de parada para um loop `repeat`.",
          },

          // --- Snippets para Estruturas de Controle ---

          {
            label: "for-pairs",
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText:
              "for ${1:key}, ${2:value} in pairs(${3:table}) do\n\t$0\nend",
            insertTextRules:
              monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: "Loop `for` para iterar sobre pares de uma tabela.",
          },
          {
            label: "for-ipairs",
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText:
              "for ${1:index}, ${2:value} in ipairs(${3:array}) do\n\t$0\nend",
            insertTextRules:
              monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation:
              "Loop `for` para iterar sobre sequências de uma tabela.",
          },
          {
            label: "function-local",
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText: "local function ${1:name}(${2:params})\n\t$0\nend",
            insertTextRules:
              monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: "Define uma função local.",
          },

          // --- Funções Globais ---
          {
            label: "assert",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "assert(${1:condition}, ${2:message})",
            insertTextRules:
              monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation:
              "Verifica se a condição é verdadeira, caso contrário, causa um erro.",
          },

          {
            label: "ipairs",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "ipairs(${1:table})",
            insertTextRules:
              monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation:
              "Retorna um iterador para elementos de array de uma tabela.",
          },
          {
            label: "pairs",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "pairs(${1:table})",
            insertTextRules:
              monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation:
              "Retorna um iterador para todos os elementos de uma tabela.",
          },

          {
            label: "require",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "require(${1:module_name})",
            insertTextRules:
              monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: "Carrega um módulo.",
          },

          {
            label: "tostring",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "tostring(${1:value})",
            insertTextRules:
              monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: "Converte um valor para uma string.",
          },
          {
            label: "type",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "type(${1:value})",
            insertTextRules:
              monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: "Retorna o tipo de um valor.",
          },

          // --- Biblioteca `string` ---
          {
            label: "string.byte",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "string.byte(${1:s}, ${2:i}, ${3:j})",
            insertTextRules:
              monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation:
              "Retorna o código numérico de um ou mais caracteres.",
          },
          {
            label: "string.char",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "string.char(${1:n1}, ${2:n2}, ...)",
            insertTextRules:
              monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation:
              "Retorna uma string feita a partir de códigos numéricos.",
          },

          {
            label: "string.lower",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "string.lower(${1:s})",
            insertTextRules:
              monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: "Converte uma string para minúsculas.",
          },
          {
            label: "string.upper",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "string.upper(${1:s})",
            insertTextRules:
              monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: "Converte uma string para maiúsculas.",
          },
          {
            label: "string.rep",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "string.rep(${1:s}, ${2:n})",
            insertTextRules:
              monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: "Retorna uma string repetida n vezes.",
          },
          {
            label: "string.find",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "string.find(${1:s}, ${2:pattern})",
            insertTextRules:
              monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: "Procura por um padrão em uma string.",
          },

          {
            label: "string.gsub",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "string.gsub(${1:s}, ${2:pattern}, ${3:repl})",
            insertTextRules:
              monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation:
              "Substitui todas as ocorrências de um padrão em uma string.",
          },

          // --- Biblioteca `table` ---

          {
            label: "table.remove",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "table.remove(${1:table}, ${2:pos})",
            insertTextRules:
              monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: "Remove um elemento de uma tabela.",
          },

          {
            label: "table.concat",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "table.concat(${1:table}, ${2:sep})",
            insertTextRules:
              monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: "Concatena os elementos de uma tabela.",
          },

          // --- Biblioteca `math` ---
          {
            label: "math.abs",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "math.abs(${1:x})",
            insertTextRules:
              monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: "Retorna o valor absoluto de x.",
          },
          {
            label: "math.ceil",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "math.ceil(${1:x})",
            insertTextRules:
              monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: "Arredonda para o inteiro mais próximo (para cima).",
          },
          {
            label: "math.floor",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "math.floor(${1:x})",
            insertTextRules:
              monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation:
              "Arredonda para o inteiro mais próximo (para baixo).",
          },
          {
            label: "math.max",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "math.max(${1:x}, ${2:y})",
            insertTextRules:
              monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: "Retorna o maior valor entre os argumentos.",
          },
          {
            label: "math.min",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "math.min(${1:x}, ${2:y})",
            insertTextRules:
              monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: "Retorna o menor valor entre os argumentos.",
          },

          {
            label: "math.sqrt",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "math.sqrt(${1:x})",
            insertTextRules:
              monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: "Retorna a raiz quadrada de x.",
          },
          {
            label: "math.pi",
            kind: monaco.languages.CompletionItemKind.Variable,
            insertText: "math.pi",
            documentation: "Constante matemática pi.",
          },

          // --- Biblioteca `io` ---
          {
            label: "io.read",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "io.read(${1:format})",
            insertTextRules:
              monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: "Lê uma linha do arquivo de entrada padrão.",
          },
          {
            label: "io.write",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "io.write(${1:message})",
            insertTextRules:
              monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: "Escreve uma string no arquivo de saída padrão.",
          },
          {
            label: "io.input",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "io.input(${1:file})",
            insertTextRules:
              monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: "Muda o arquivo de entrada padrão.",
          },
          {
            label: "io.output",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "io.output(${1:file})",
            insertTextRules:
              monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: "Muda o arquivo de saída padrão.",
          },

          // --- Biblioteca `os` ---
          {
            label: "os.date",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "os.date(${1:format}, ${2:time})",
            insertTextRules:
              monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: "Formata data e hora.",
          },
          {
            label: "os.time",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "os.time(${1:table})",
            insertTextRules:
              monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: "Retorna o tempo atual em segundos.",
          },
          {
            label: "os.difftime",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "os.difftime(${1:t2}, ${2:t1})",
            insertTextRules:
              monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: "Retorna a diferença entre dois horários.",
          },
          {
            label: "os.execute",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "os.execute(${1:command})",
            insertTextRules:
              monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: "Executa um comando do sistema.",
          },
          {
            label: "os.exit",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "os.exit(${1:code})",
            insertTextRules:
              monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: "Termina a execução do programa.",
          },
          {
            label: "thread-loop",
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText:
              "Citizen.CreateThread(function()\n\twhile true do\n\t\tCitizen.Wait(${1:1000})\n\t\t$0\n\tend\nend)",
            insertTextRules:
              monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: "Cria uma thread com loop infinito e espera segura.",
          },

          {
            label: "Citizen.Wait",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "Citizen.Wait(${1:1000})",
            insertTextRules:
              monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: "Pausa a execução da thread por X milissegundos.",
          },
          {
            label: "Wait",
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText: "Wait(${1:1000})",
            insertTextRules:
              monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: "Pausa a execução  por X milissegundos.",
          },
          {
            label: "CreateThread",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "Citizen.CreateThread(function()\n\t$0\nend)",
            insertTextRules:
              monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: "Cria uma nova thread (execução paralela).",
          },
          {
            label: "TriggerEvent",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: 'TriggerEvent("${1:eventName}", ${2:args})',
            insertTextRules:
              monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: "Dispara um evento local (client-side).",
          },
          {
            label: "TriggerServerEvent",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: 'TriggerServerEvent("${1:eventName}", ${2:args})',
            insertTextRules:
              monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: "Dispara um evento para o lado do servidor.",
          },
          {
            label: "RegisterNetEvent",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: 'RegisterNetEvent("${1:eventName}")',
            insertTextRules:
              monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: "Registra um evento de rede (NetEvent).",
          },
          {
            label: "AddEventHandler",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText:
              'AddEventHandler("${1:eventName}", function(${2:args})\n\t$0\nend)',
            insertTextRules:
              monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: "Associa uma função ao evento registrado.",
          },
          {
            label: "RegisterCommand",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText:
              'RegisterCommand("${1:command}", function(source, args, rawCommand)\n\t$0\nend, false)',
            insertTextRules:
              monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: "Cria um comando que pode ser chamado pelo jogador.",
          },
          {
            label: "SetTimeout",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "SetTimeout(${1:ms}, function()\n\t$0\nend)",
            insertTextRules:
              monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation:
              "Executa uma função depois de um tempo (em milissegundos).",
          },

          {
            label: "command",
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText:
              'RegisterCommand("${1:comando}", function(source, args, rawCommand)\n\t$0\nend, false)',
            insertTextRules:
              monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation:
              "Registra um comando que pode ser executado no console.",
          },
          {
            label: "event-handler",
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText:
              'RegisterNetEvent("${1:evento}")\nAddEventHandler("${1:evento}", function(${2:data})\n\t$0\nend)',
            insertTextRules:
              monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: "Cria um listener para eventos personalizados.",
          },
          {
            label: "trigger-server",
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText: 'TriggerServerEvent("${1:evento}", ${2:args})',
            insertTextRules:
              monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: "Dispara um evento do client para o servidor.",
          },
          {
            label: "draw-text-3d",
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText:
              'function DrawText3D(x, y, z, text)\n\tlocal onScreen, _x, _y = World3dToScreen2d(x, y, z)\n\tlocal px, py, pz = table.unpack(GetGameplayCamCoords())\n\n\tif onScreen then\n\t\tSetTextScale(0.35, 0.35)\n\t\tSetTextFont(4)\n\t\tSetTextProportional(1)\n\t\tSetTextColour(255, 255, 255, 215)\n\t\tSetTextEntry("STRING")\n\t\tSetTextCentre(1)\n\t\tAddTextComponentString(text)\n\t\tDrawText(_x, _y)\n\tend\nend',
            insertTextRules:
              monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: "Função para desenhar texto 3D no mundo.",
          },
          {
            label: "key-control",
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText:
              "Citizen.CreateThread(function()\n\twhile true do\n\t\tCitizen.Wait(0)\n\t\tif IsControlJustPressed(0, ${1:38}) then -- E\n\t\t\t$0\n\t\tend\n\tend\nend)",
            insertTextRules:
              monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: "Detecta tecla pressionada em um loop.",
          },
        ],
      };
    },
  });
}
