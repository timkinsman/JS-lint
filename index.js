const core = require('@actions/core');
const github = require('@actions/github');
const glob = require('@actions/glob');
const { ESLint } = require("eslint");

(async function main() {
  // 1. Create an instance.
  const eslint = new ESLint();

  // 2. Lint files.
  const results = await eslint.lintFiles(["**/*.js"]);

  // 3. Format the results.
  const formatter = await eslint.loadFormatter("stylish");
  const resultText = formatter.format(results);

  // 4. Output it.
  console.log(resultText);
})().catch((error) => {
  process.exitCode = 1;
  console.error(error);
});


const run = async () => {
  const globber = await glob.create('**/*.js');
  for await (const file of globber.globGenerator()) {
    console.log(file);
  }
}

//run();