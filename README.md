# ESLint Action

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
      - uses: timkinsman/eslint-action@master
```
