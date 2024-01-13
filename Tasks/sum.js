// Sum all numbers from an array

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
