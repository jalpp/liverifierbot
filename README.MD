Liverifier is a Discord bot for any Discord server to give contributor roles to valid contributors on configured GitHub org

# Commands

- `/ping` replies with pong
- `/verify` [github username] verify a GitHub user
- `/help` get helpful information about how verification works

# Notes
The bot takes care of non-dev contributors and dev contributors old/new everyone!

# Setting up

Install dependencies including [Octokit.js SDK](https://docs.github.com/en/apps/creating-github-apps/authenticating-with-a-github-app/authenticating-as-a-github-app#using-the-octokitjs-sdk-to-authenticate-as-a-github-app)

```npm i```

Create a [Discord bot](https://discord.com/developers/applications)

Invite the bot to your server with `permissions=2415938560&scope=bot+applications.commands`

Create config.json file and configure discord token, client, and server (guild)

```cp config.json.example config.json```

Deploy slash commands

```node deploy-commands.js```

Start the bot so you can test the `/ping` slash command

```node index.js```

Create a [GitHub Application](https://docs.github.com/en/apps/creating-github-apps/registering-a-github-app) and update `config.json`

Create a [GitHub JSON Web Token](https://docs.github.com/en/apps/creating-github-apps/authenticating-with-a-github-app/generating-a-json-web-token-jwt-for-a-github-app#generating-a-json-web-token-jwt) and update `config.json`

# Authors
@jalpp @ddugovic

