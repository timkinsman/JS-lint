const core = require('@actions/core');
const { ESLint } = require('eslint');

const run = async () => {
  // 1. Create an instance with the `fix` option.
  const eslint = new ESLint();

  // 2. Lint files. This doesn't modify target files.
  const results = await eslint.lintFiles('**/*.js');
  
  // 3. Modify the files with the fixed code.
  const autofixes = core.getInput('autofixes');
  console.log('autofixes', autofixes)
  if(autofixes === 'true') {
    console.log('autofixes...');
    await ESLint.outputFixes(results);
  }

  // 4. Format the results.
  const formatter = await eslint.loadFormatter('stylish');
  const resultText = formatter.format(results);

  // 5. Output it.
  console.log(resultText);
}

run().catch(error => {
  process.exitCode = 1;
  console.error(error);
});
