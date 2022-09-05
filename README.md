# try-jest

Try Jest

## Getting started

    pnpm install
    pnpm test

## Make changes

### TDD

    pnpm test:watch

- Write simplest (failing) test that reads like a specification
- Write simplest code to get green
- Commit
  - if test fails then **your code is reverted**
  - if your code was not covered by tests then **your code is reverted**
  - if test passes and commit is OK, then code automatically pushed to origin
  - if you haven't been correcting lint errors in your editor then push will be
    rejected
- Refactor code to make it beautiful (and commit)
- Repeat and create all tests that you can think that should fail for your
  specification

![TDD](images/tdd.png)

### TDD katas

Read <http://www.codemanship.co.uk/tdd_jasongorman_codemanship.pdf>

### TCR

As with TDD flow above, but no peaking. When you commit, if change is no good,
you loose the change, but gain wisdom. If all good then straight to remote trunk
to share the goodness.

For TCR experience in `package.json` change the following.

    "pre-commit": "lint-staged --quiet && npm test || (git reset --hard HEAD && exit 1)"
