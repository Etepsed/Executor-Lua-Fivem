RegisterServerEvent("sup_exec:reiniciar")
AddEventHandler("sup_exec:reiniciar", function()
	ExecuteCommand("ensure exec_lua")
end)
