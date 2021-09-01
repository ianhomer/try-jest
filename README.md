# try-jest

Try Jest

## tl;dr

    npm install
    npm test

## Experiment with change flows

### TCR

Make chanage and commit, if test fails change is reverted, lost, gone.

### Gentle TCR

    npm test:watch

Make change, see changes asserted. Commit when ready. If test does fail, you
were warned, change is reverted. 

