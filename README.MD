Liverifier is a Discord bot for any Discord server to give contributor roles to valid contributors on configured GitHub org


# Commands

- /ping replies with pong
- /verify [github username] verify a GitHub user
- /help get helpful information about how verification works


# Notes:
The bot takes care of non-dev contributors and dev contributors old/new everyone!

# Setting up

install octokit.js and discord.js

``` npm i octokit ```
``` npm i discord ```

edit config.json file

set the following tokens

```{

    "token": "discord-token-from-app",
    "clientId": "client-id-from-discord-portal",
    "guildId": "server-id-in-this-case-your-server",
    "appId": "github-app-id",
    "privateKey": "doesnt matter see code for private key gen from pem file",
    "installationID": org installtion id,
    "pemfile": "your-pem-file-name",
    "owner": "org name",
    "repo": "test data ",
    "roleId": "collab-role-id",
    "repostest": ["test repos"],
    "repos": [
        "add repos for contributor checker"
    ],
    "collabUsersIds": [
        "add your pre contributor users to by pass auth"

    ]

}
```

if you want to change how the bot acts in the verification process edit verify.js and run

``` node deploy-commands.js ```

once you are happy you can start the application

```node index.js```

# Authors
@jalpp


