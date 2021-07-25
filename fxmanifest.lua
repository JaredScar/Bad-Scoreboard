fx_version 'cerulean'
game 'gta5'

author 'JaredScar'
description 'Fivem scoreboard'
version '1.6'
url 'https://github.com/JaredScar/Bad-Scoreboard'

client_scripts {
	"config.lua",
	'client.lua'
}

server_scripts { 
	"config.lua"
	"server.lua"
}

ui_page "NUI/panel.html"
files {
	"NUI/panel.js",
	"NUI/panel.html",
	"NUI/panel.css",
}