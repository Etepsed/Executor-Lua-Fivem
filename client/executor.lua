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
			print("[DevTool] Erro no código: " .. tostring(err))
		end
	end)

	cb({})
end)

RegisterNUICallback("stopCode", function(_, cb)
	if currentThread then
		TerminateThread(currentThread)
		currentThread = nil
		print("[DevTool] Código parado pelo usuário.")
	end
	cb({})
end)
