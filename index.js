const core = require('@actions/core');
const github = require('@actions/github');
const glob = require('@actions/glob');

(async function() {
  const globber = await glob.create('**')

  for await (const file of globber.globGenerator()) {
    console.log(file)
  }
})()
