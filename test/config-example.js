const assert = require('assert');
const fs = require('fs');
const { repos } = JSON.parse(fs.readFileSync('./config.json.example'));

assert.ok(repos);
