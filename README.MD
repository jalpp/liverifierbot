Liverifier is Discord bot for any Discord server to give contributor role to valid contributors on configured github org


# Commands

- /ping replies with pong
- /verify [github username] verify a github user
- /help get helpful information about how verification works


# Notes:
Bot take care of non dev contributors and dev contrubutors old/new everyone!

# Setting up

install octokit.js and discord.js

``` npm i octokit ```
``` npm i discord ```

edit config.json file

set the following tokens

```{

    "token": "discord-token-from-app",
    "clientId": "client-id-from-discord-portal",
    "guildId": "server-id-in-this-case-lichess-server",
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

}```

if you want to change how bot acts in verification process edit verify.js and run

``` node deploy-commands.js ```

once your happy start the applicaiton

``` node index.js ```

# Authors
@jalpp



