fx_version("cerulean")
game("gta5")

author("SeuNome")
description("Ferramenta Dev NUI")

client_scripts({
	"client/client.lua",
	"client/nui.lua",
	"client/executor.lua",
})
server_scripts({
	"server/server.lua",
})

ui_page("html/index.html")

files({
	"html/index.html",
	"html/style.css",

	--js
	"html/script/main.js",
	"html/script/editor.js",
	"html/script/events.js",
	"html/script/completions.js",
	"html/script/theme.js",
	"html/script/formatter.js",
})
