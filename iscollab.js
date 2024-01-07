const {isCollaborator} = require("./githubChecker")
const {repos} = require("./config.json")

async function isCollabAcrossRepos(owner, username) {

    var iscollabconditionholder = [];

    let r = 0;

    while(r < repos.length){
        const check = await isCollaborator(owner, repos[r], username);
        iscollabconditionholder.push(check);
        r++;
    }


    return iscollabconditionholder.includes(true);

  
}
  
  module.exports = { isCollabAcrossRepos };
