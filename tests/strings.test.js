const { stringLength, reverseString, capitaliseString } = require('../js/strings.js');

describe('strings testing', () => {
  test('returns the count of characters in a string', () => {
    const string = 'microverse';

    expect(
      stringLength(string),
    ).toEqual(10);
  });

  test('throws error for strings longer than 10 characters', () => {
    const longerStringFunction = () => {
      stringLength('microverseprogram');
    };

    expect(
      longerStringFunction,
    ).toThrowError('The string should be between 1 and 10 characters long');
  });

  test('checking for reverse string', () => {
    const capitaliseString = 'Microverse';
    const lowerCaseString = 'microverse';

    expect(reverseString(capitaliseString)).toEqual('esrevorcim');
    expect(reverseString(lowerCaseString)).toEqual('esrevorcim');
  });

  test('string capitalization', () => {
    expect(
      capitaliseString('microverse'),
    ).toEqual('Microverse');
  });

  test('number passed as argument for string capitalization', () => {
    const response = () => {
      capitaliseString(12);
    };

    expect(response).toThrowError('Capitalization only works on strings not numbers');
  });
});
