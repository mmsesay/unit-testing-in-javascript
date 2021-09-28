const _ = require('lodash');

const stringLength = (string) => {
  let result;
  if (_.inRange(string.length, 1, 11)) {
    result = string.length;
  } else {
    throw new Error('The string should be between 1 and 10 characters long');
  }
  return result;
};

const reverseString = (string) => [...string].reverse().join('').toLowerCase();

module.exports = { stringLength, reverseString };