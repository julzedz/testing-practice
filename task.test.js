const stringLength = require('./task.js');

test('string to equal string.length', () => {
  expect(stringLength('string')).toBe(6);
});