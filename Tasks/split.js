// Split an array into two parts
// Test split.js: Passed: 6 of 6

"use strict"
  
const splitArray = (index, array) => {
  const begin = array.slice(0, index);
  const end = array.slice(index, array.length);
  return [begin, end];
};

module.exports = splitArray;
