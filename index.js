const core = require('@actions/core');
const github = require('@actions/github');
const glob = require('@actions/glob');

const run = async () => {
  const globber = await glob.create('**/*.js');
  for await (const file of globber.globGenerator()) {
    console.log(file);
  }
}

run();