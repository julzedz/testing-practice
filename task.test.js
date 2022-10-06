const stringLength = require('./task');

describe('stringLength', () => {
  test('equal to string length', () => {
    expect(stringLength('string')).toBe(6);
  });
  test('error, empty string', () => {
    expect(stringLength('')).toBe('Error: Empty String');
  });
  test('error, string too long', () => {
    expect(stringLength('turkmenistan')).toBe('Error: String Too Long');
  });
});