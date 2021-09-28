const _ = require('lodash');

const valuesObject = {
  value1: 5,
  value2: 20,
  valueZero: 0,
  valueString: '20',
  valueFloat: 12.5,
};

describe('add', () => {
  test('to sum up with numbers', () => {
    function testFunc(num1, num2) {
      return num1 + num2;
    }

    expect(
      testFunc(valuesObject.value1, valuesObject.value2),
    ).toEqual(25);
  });

  test('to sum up with floating point numbers', () => {
    function testFunc(num1, num2) {
      return num1 + num2;
    }

    expect(
      testFunc(valuesObject.value2, valuesObject.valueFloat),
    ).toEqual(32.5);
  });

  test('throw error is string value (s) are passed as arguments', () => {
    const testFunc = (num1, num2) => {
      if (_.isString(num1) || _.isString(num2)) {
        throw new Error('Addition operation cannot work on strings');
      } else {
        return num1 + num2;
      }
    };

    const runner = () => {
      testFunc(valuesObject.value1, valuesObject.valueString);
    };

    expect(
      runner,
    ).toThrowError('Addition operation cannot work on strings');
  });
});

describe('subtract', () => {
  test('subtracting bigger value from a smaller value', () => {
    function testFunc(num1, num2) {
      return num1 - num2;
    }

    expect(
      testFunc(valuesObject.value1, valuesObject.value2),
    ).toEqual(-15);
  });

  test('subtracting smaller value from a bigger value', () => {
    function testFunc(num1, num2) {
      return num1 - num2;
    }

    expect(
      testFunc(valuesObject.value2, valuesObject.value1),
    ).toEqual(15);
  });

  test('subtracting integer from floating pointer number', () => {
    function testFunc(num1, num2) {
      return num1 - num2;
    }

    expect(
      testFunc(valuesObject.valueFloat, valuesObject.value2),
    ).toEqual(-7.5);
  });

  test('throw error is string value (s) are passed as arguments', () => {
    const testFunc = (num1, num2) => {
      if (_.isString(num1) || _.isString(num2)) {
        throw new Error('Subtraction operation cannot work on strings');
      } else {
        return num1 - num2;
      }
    };

    const runner = () => {
      testFunc(valuesObject.value1, valuesObject.valueString);
    };

    expect(
      runner,
    ).toThrowError('Subtraction operation cannot work on strings');
  });
});

describe('divide', () => {
  test('to divide between integers', () => {
    function testFunc(num1, num2) {
      return num1 / num2;
    }

    expect(
      testFunc(valuesObject.value1, valuesObject.value2),
    ).toEqual(0.25);
  });

  test('throw error is string value (s) are passed as arguments', () => {
    const testFunc = (num1, num2) => {
      if (_.isString(num1) || _.isString(num2)) {
        throw new Error('Division operation cannot work on strings');
      } else {
        return num1 / num2;
      }
    };

    const runner = () => {
      testFunc(valuesObject.value1, valuesObject.valueString);
    };

    expect(
      runner,
    ).toThrowError('Division operation cannot work on strings');
  });

  test('throw zero divisible error', () => {
    const testFunc = (num1, num2) => {
      if (num1 === 0 || num2 === 0) {
        throw new Error('Zero division error');
      } else {
        return num1 / num2;
      }
    };

    const runner = () => {
      testFunc(valuesObject.value1, valuesObject.valueZero);
    };

    expect(
      runner,
    ).toThrowError('Zero division error');
  });
});
