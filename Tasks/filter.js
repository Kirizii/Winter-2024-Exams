// Filter array by type name

"use strict"

const filter = (array, typeName) => {
  const result = [];
  for (C of array) {
    const x = array.indexOf(C);
    if (typeof array[x] !== typeName) {
      result.unshift(x);
    }
  }
  for (x of result) array.splice(x, 1);
  return array;
};

module.exports = filter;
