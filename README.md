# Bad-Scoreboard
The best Fivem Scoreboard created [A Fivem Script]

## Jared's Developer Community [Discord]
[![Developer Discord](https://discordapp.com/api/guilds/597445834153525298/widget.png?style=banner4)](https://discord.com/invite/WjB5VFz)

## What is it?

Bad-Scoreboard (or Bad-ServerList as I like to call it) is a simple Fivem scoreboard script for your Fivem server. This makes the scoreboard a lot prettier and utilizes discord to actually show who is who. A user's discord name and avatar are displayed on the scoreboard so long as their discord ID is found successfully by the Fivem application client. The scoreboard has multiple pages and has a `PageSize` variable in the `config.lua` that can be edited to determine how many users are shown on each page. I found that 10 worked out to be the best delimiter. Pages can be cycled through by just clicking the `UP_ARROW` button again. The `UP_ARROW` displays the scoreboard and each time you click it the next page is brought up (if there are more players than the page can handle). I really like the layout of the scoreboard and figured others would too, so here it is. Enjoy. All I ask is that if you enjoy this resource, please give it a like on the forum page, on GitHub (if you have an account), and pop me a follow over on GitHub. Followers on GitHub are to me are considered more important than social media to me lol. So please help me get famous. Best Regards as always, Badger :)

## Installation (discord_perms)

### The script in this video is not installing this script, but much of what you do in this video is the same for this configuration file:

https://www.youtube.com/watch?v=sjbFzkII2T0

## Screenshots

![Scoreboard Example (1 Page)](https://i.gyazo.com/70c30e8d777daf527626672024131c4e.png)

![Multiple Scoreboard Pages](https://i.gyazo.com/21066d5a999e768b7ea2080065851a10.gif)

## Configuration

```
----------------------
--- Bad-ServerList ---
----------------------
Config = {
	GuildID = '',
	BotToken = '',
	Default_Profile = "https://www.gamesindustry.biz/img/base/default-user.png", -- Discord Avatar column picture if theirs is not found 
	Discord_Not_Found = "Not Found", -- This will display under 'Discord Name' column if their name is not found 
	ServerName = 'Noir Roleplay',
	PageSize = 10,
}
```

## Download

https://github.com/JaredScar/Bad-Scoreboard
