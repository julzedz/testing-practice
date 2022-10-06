const capitalize = require('./capitalize')

test('capitalise string', () => {
  expect(capitalize('jules')).toBe('Jules');
})