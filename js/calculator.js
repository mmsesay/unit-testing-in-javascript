const _ = require('lodash');

class Calculator {
  add = (value1, value2) => {
    if (_.isString(value1) || _.isString(value2)) {
      throw new Error('Addition operation cannot work on strings');
    }
    return value1 + value2;
  }

  substract = (value1, value2) => {
    if (_.isString(value1) || _.isString(value2)) {
      throw new Error('Subtraction operation cannot work on strings');
    }
    return value1 - value2;
  }

  divide = (value1, value2) => {
    if (_.isString(value1) || _.isString(value2)) {
      throw new Error('Division operation cannot work on strings');
    } else if (value1 === 0 || value2 === 0) {
      throw new Error('Zero division error');
    }
    return value1 / value2;
  }

  multiply = (value1, value2) => {
    if (_.isString(value1) || _.isString(value2)) {
      throw new Error('Multiplication operation cannot work on strings');
    }
    return value1 * value2;
  }
}

const calculator = new Calculator();
module.exports = { calculator };
