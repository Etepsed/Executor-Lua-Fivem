local currentThread = nil

RegisterNUICallback("runCode", function(data, cb)
	local code = data.code

	if currentThread then
		TerminateThread(currentThread)
	end

	currentThread = Citizen.CreateThread(function()
		local func, err = load(code)
		if func then
			pcall(func)
		else
			--print("[DevTool] Erro no código: " .. tostring(err))
		end
	end)

	cb({})
end)

RegisterNUICallback("stopCode", function(_, cb)
	TriggerServerEvent("sup_exec:reiniciar")
end)
