Liverifier is a Discord bot for any Discord server to give contributor roles to valid contributors on configured GitHub org


# Commands

- `/ping` replies with pong
- `/verify` [github username] verify a GitHub user
- `/help` get helpful information about how verification works


# Notes:
The bot takes care of non-dev contributors and dev contributors old/new everyone!

# Setting up

install octokit.js and discord.js

```npm i```

create config.json file and configure settings

```cp config.json.example config.json```

if you want to change how the bot acts in the verification process edit `verify.js` then run

```node deploy-commands.js```

once Discord lists application slash commands, you can start the application

```node index.js```

# Authors
@jalpp @ddugovic

