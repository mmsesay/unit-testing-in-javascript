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

const capitaliseString = (string) => {
  if (!_.isString(string)) {
    throw new Error('Capitalization only works on strings not numbers');
  }
  return string[0].toUpperCase() + string.substr(1);
};

module.exports = { stringLength, reverseString, capitaliseString };