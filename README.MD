Liverifier is a Discord bot for any Discord server to give contributor roles to valid contributors on configured GitHub org

# Commands

- `/ping` replies with pong
- `/verify` [github username] verify a GitHub user
- `/help` get helpful information about how verification works

# Notes
The bot takes care of non-dev contributors and dev contributors old/new everyone!

# Setting up

Install octokit.js and discord.js

```npm i```

Create a [Discord bot](https://discord.com/developers/applications)

Invite the bot to your server with `permissions=2415938560&scope=bot+applications.commands`

Create config.json file and configure discord token, client, and server (guild)

```cp config.json.example config.json```

Deploy slash commands

```node deploy-commands.js```

Start the bot so you can test the `/ping` slash command

```node index.js```

Do GitHub setup somehow and update `config.json`

# Authors
@jalpp @ddugovic

