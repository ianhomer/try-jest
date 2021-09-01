# try-jest

Try Jest

## tl;dr

    npm install
    npm test

## Make changes

### TDD and Gentle trunk based TCR

    npm test:watch

- Write simplest (failing) test that reads like a specification
- Write simplest code to get green
- Commit
  - if test fails then your code is reverted
  - if test passes and commit is OK, then code automatically pushed
- Refactor code
- Repeat with all tests that should fail

### TDD Katas

Read <http://www.codemanship.co.uk/tdd_jasongorman_codemanship.pdf>

### TCR

As with TDD flow above, but no peaking. If change is no good, you loose the
change, but gain wisdom.
