const core = require('@actions/core')
const { ESLint } = require('eslint')

const run = async () => {
  const autofixes = core.getInput('autofixes')

  const eslint = new ESLint({
    baseConfig: {
      env: {
        browser: true,
        es2020: true,
        node: true
      },
      extends: [
        'plugin:react/recommended',
        'standard'
      ],
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        },
        ecmaVersion: 12,
        sourceType: 'module'
      },
      plugins: [
        'react'
      ],
      rules: {
      }
    },
    fix: autofixes === 'true'
  })

  const results = await eslint.lintFiles('**/*.js')

  if (autofixes === 'true') {
    await ESLint.outputFixes(results)
  }

  console.log(await (await eslint.loadFormatter('stylish')).format(results))
}

run().catch(error => {
  process.exitCode = 1
  console.error(error)
})
