// Filter array by type name
// Test filter.js: Passed: 5 of 5

"use strict"

const filter = (array, typeName) => {
  const result = [];
  for (let value of array) {
    if (typeof value === typeName) {
      result.push(value);
    }
  }
  return result;
};

module.exports = filter;
