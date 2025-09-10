fx_version("cerulean")
game("gta5")

author("SeuNome")
description("Ferramenta Dev NUI")

client_scripts({
	"client/client.lua",
	"client/nui.lua",
	"client/executor.lua",
})

ui_page("html/index.html")

files({
	"html/index.html",
	"html/style.css",
	"html/main.js",
	"html/editor.js",
	"html/events.js",
	"html/completions.js",
})
