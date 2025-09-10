-- Script principal

RegisterKeyMapping("toggledevtool", "Abrir Ferramenta Dev", "keyboard", "NUMPAD3")

RegisterCommand("toggledevtool", function()
	ToggleDevTool()
end, false)

RegisterCommand("devtool", function()
	ShowDevTool()
end, false)
