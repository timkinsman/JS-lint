const { ESLint } = require("eslint");

const run = async () => {
  // 1. Create an instance.
  const eslint = new ESLint();

  // 2. Lint files.
  const results = await eslint.lintFiles("**/*.js");

  // 3. Format the results.
  const formatter = await eslint.loadFormatter("stylish");
  const resultText = formatter.format(results);

  // 4. Output it.
  console.log(resultText);
}

run().catch(error => {
  process.exitCode = 1;
  console.error(error);
});
