const { App } = require("octokit");
const fs = require('node:fs');
const { appId, installationID, pemfile } = require('./config.json');

async function getUserInfo(username, userID) {


  const privateKey = fs.readFileSync( pemfile + ".pem");

  const app = new App({
    appId: appId,
    privateKey: privateKey,
  });
  
  const octokit = await app.getInstallationOctokit(installationID);

  const response = await octokit.request('GET /users/{username}', {
    username: username,
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })


  const {bio} = response.data;

  return bio.includes(userID);

  

  }
  
  module.exports = { getUserInfo };