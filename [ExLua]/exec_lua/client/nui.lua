local devMenuVisible = false

function ShowDevTool()
	SetNuiFocus(true, true)
	SendNUIMessage({ action = "show" })
	devMenuVisible = true
end

function HideDevTool()
	SetNuiFocus(false, false)
	SendNUIMessage({ action = "hide" })
	devMenuVisible = false
end

function ToggleDevTool()
	devMenuVisible = not devMenuVisible
	SetNuiFocus(devMenuVisible, devMenuVisible)
	SendNUIMessage({ action = devMenuVisible and "show" or "hide" })
end

RegisterNUICallback("closeTool", function(_, cb)
	HideDevTool()
	cb({})
end)

RegisterKeyMapping("toggledevtool", "Abrir Ferramenta Dev", "keyboard", "NUMPAD3")

RegisterCommand("toggledevtool", function()
	ToggleDevTool()
end, false)

RegisterCommand("devtool", function()
	ShowDevTool()
end, false)
