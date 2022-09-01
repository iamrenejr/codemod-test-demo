# JSCodeShift Codemod Demo

This repo shows a sample test scenario for a codemod using `jscodeshift`.

The file structure follows the guidelines outlined in the [jscodeshift repo](https://github.com/facebook/jscodeshift). For this demo, it is:

```
./transform.js
./__tests__/transform-test.js
./__testfixtures__/transform.input.js
./__testfixtures__/transform.output.js
```

### Running the test

In the command line, do the following steps:

1. Run: `npm i`
2. Run: `npx jest`
