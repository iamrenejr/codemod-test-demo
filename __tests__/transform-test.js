jest.autoMockOff();
const testUtils = require('jscodeshift/dist/testUtils');
const { defineTest } = testUtils;
defineTest(__dirname, 'transform');
