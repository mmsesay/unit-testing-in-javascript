const stringLength = require('../js/script');

test('returns the count of characters in a string', () => {
  const string = 'microverse';
  expect(
    stringLength(string),
  ).toEqual(10);
});