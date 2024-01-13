// Sum all numbers from an array

"use strict"

const sum = (array) => {
  let sum = 0;
  for (let value of array) {
    if (typeof value === 'number') {
      sum+=value;
    }
  }
  return sum;
};

module.exports = sum;
