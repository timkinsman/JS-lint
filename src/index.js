const { ESLint } = require("eslint");

const run = async () => {
  const eslint = new ESLint();
  const results = await eslint.lintFiles("**/*.js");
  const formatter = await eslint.loadFormatter("stylish");
  const resultText = formatter.format(results);
  console.log(resultText);
  var tim;
}

run().catch(error => {
  process.exitCode = 1;
  console.error(error);
});
