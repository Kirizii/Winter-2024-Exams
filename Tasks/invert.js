// Reverse an array, you can't use .reverse()
//Test invert.js: Passed: 5 of 5

"use strict";

const invert = (array) => {
  const invertedArray = [];
  for(let index = array.length-1;index >= 0;index--){
    invertedArray.push(array[index]);
  }
  return invertedArray;
};

module.exports = invert;
