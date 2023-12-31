const {isCollaborator} = require("./githubChecker")
const {repostest} = require("./config.json")

async function isCollabAcrossRepos(owner, username) {

    var iscollabconditionholder = [];

    let r = 0;

    while(r < repostest.length){
        const check = await isCollaborator(owner, repostest[r], username);
        iscollabconditionholder.push(check);
        r++;
    }


    return iscollabconditionholder.includes(true);

  
}
  
  module.exports = { isCollabAcrossRepos };