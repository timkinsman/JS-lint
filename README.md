# ESLint Action

## Prerequisites

### ESLint
You must have the ESLint running locally for the action to execute. It will use the same rules as you do locally.
More info [on the ESLint getting started guide](https://eslint.org/docs/user-guide/getting-started#installation-and-usage)

## Usage

### main.yml

Add to your existing `main.yml` file or create a new file named `.github/workflows/main.yml` and copy the examples below to your new workflow file

```yml
name: Lint

on: [push]

jobs:
  eslint:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v1
      - run: npm ci
      - uses: timkinsman/eslint-action@master
```
