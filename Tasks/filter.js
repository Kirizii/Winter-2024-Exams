// Filter array by type name

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
