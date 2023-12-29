const { App } = require("octokit");
const fs = require('node:fs');
const { appId, installationID, pemfile } = require('./config.json');

async function isCollaborator(owner, repo, username) {


  const privateKey = fs.readFileSync( pemfile + ".pem");

  const app = new App({
    appId: appId,
    privateKey: privateKey,
  });
  
  const octokit = await app.getInstallationOctokit(installationID);


    try {
      const response = await octokit.request('GET /repos/{owner}/{repo}/collaborators/{username}', {
        owner,
        repo,
        username,
        headers: {
          'X-GitHub-Api-Version': '2022-11-28',
        },
      });
  
      return response.status === 204; // 204 No Content indicates that the user is a collaborator
    } catch (error) {
      console.error('Error checking collaborator:', error.message);
      return false;
    }
  }
  
  module.exports = { isCollaborator };