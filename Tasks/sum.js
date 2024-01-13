// Sum all numbers from an array
// Test sum.js: Passed: 7 of 7

"use strict"

const sum = (array) => {
  let result = 0;
  for (let value of array) {
    if (typeof value === 'number') {
      result+=value;
    }
  }
  return result;
};

module.exports = sum;
