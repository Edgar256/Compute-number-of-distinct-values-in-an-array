const dinstinctValues = require('./app');

test('Get desired result', () => {
    expect(dinstinctValues([2,1,2,3,1,2])).toBe(3)
})

test('Get zero when array is empty', () => {
    expect(dinstinctValues([])).toBe(0)
})

test('Getnull when array contains a Non-number', () => {
    expect(dinstinctValues([2,1,2,3,'string',2])).toBe(null)
})