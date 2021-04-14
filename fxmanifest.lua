fx_version 'cerulean'
game 'gta5'

author 'Badger'
description 'A simple Fivem scoreboard'
version '1.5'
url 'https://github.com/JaredScar/Bad-Scoreboard'

client_script "config.lua"
server_script "config.lua"
client_script 'client.lua'
server_script "server.lua"

ui_page "NUI/panel.html"

files {
	"NUI/panel.js",
	"NUI/panel.html",
	"NUI/panel.css",
}
