const Calcultor = require('./calc');

describe('Calculator', () => {
  const calculate = new Calcultor(3,2);
  test('adds both sums', () => {
    expect(calculate.add()).toBe(5)
  })
  test('subtract sum', () => {
    expect(calculate.subtract()).toBe(1)
  })
  test('multiply both sum', () => {
    expect(calculate.multiply()).toBe(6)
  })
  test('divide sum', () => {
    expect(calculate.divide()).toBe(1.5)
  })
})