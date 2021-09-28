const { calculator } = require('../js/calculator.js');

const valuesObject = {
  value1: 5,
  value2: 20,
  valueZero: 0,
  valueString: '20',
  valueFloat: 12.5,
};

describe('add', () => {
  test('to sum up with numbers', () => {
    expect(
      calculator.add(valuesObject.value1, valuesObject.value2),
    ).toEqual(25);
  });

  test('to sum up with floating point numbers', () => {
    expect(
      calculator.add(valuesObject.value2, valuesObject.valueFloat),
    ).toEqual(32.5);
  });

  test('throw error is string value (s) are passed as arguments', () => {
    const response = () => {
      calculator.add(valuesObject.value1, valuesObject.valueString);
    };

    expect(
      response,
    ).toThrowError('Addition operation cannot work on strings');
  });
});

describe('subtract', () => {
  test('subtracting bigger value from a smaller value', () => {
    const response = calculator.substract(valuesObject.value1, valuesObject.value2);

    expect(
      response,
    ).toEqual(-15);
  });

  test('subtracting smaller value from a bigger value', () => {
    const response = calculator.substract(valuesObject.value2, valuesObject.value1);

    expect(
      response,
    ).toEqual(15);
  });

  test('subtracting integer from floating pointer number', () => {
    const response = calculator.substract(valuesObject.valueFloat, valuesObject.value2);

    expect(
      response,
    ).toEqual(-7.5);
  });

  test('throw error is string value (s) are passed as arguments', () => {
    const response = () => {
      calculator.substract(valuesObject.value1, valuesObject.valueString);
    };

    expect(
      response,
    ).toThrowError('Subtraction operation cannot work on strings');
  });
});

describe('divide', () => {
  test('to divide between integers', () => {
    const response = calculator.divide(valuesObject.value1, valuesObject.value2);

    expect(
      response,
    ).toEqual(0.25);
  });

  test('throw error is string value (s) are passed as arguments', () => {
    const response = () => {
      calculator.divide(valuesObject.value1, valuesObject.valueString);
    };

    expect(
      response,
    ).toThrowError('Division operation cannot work on strings');
  });

  test('throw zero divisible error', () => {
    const response = () => {
      calculator.divide(valuesObject.value1, valuesObject.valueZero);
    };

    expect(
      response,
    ).toThrowError('Zero division error');
  });
});

describe('multiply', () => {
  test('multiplying integer values', () => {
    const response = calculator.multiply(valuesObject.value1, valuesObject.value2);

    expect(
      response,
    ).toEqual(100);
  });

  test('multiplying integer by floating pointer numbers', () => {
    const response = calculator.multiply(valuesObject.valueFloat, valuesObject.value2);

    expect(
      response,
    ).toEqual(250);
  });

  test('throw error is string value (s) are passed as arguments', () => {
    const response = () => {
      calculator.multiply(valuesObject.value1, valuesObject.valueString);
    };

    expect(
      response,
    ).toThrowError('Multiplication operation cannot work on strings');
  });
});
