// Split string into array by the first occurrence of separator
// Test section.js: Passed: 5 of 5

"use strict"

const sectionString = (inputString, separator) => {
  const separatorIndex = inputString.indexOf(separator);
  if (separatorIndex < 0 || separator === '') {
    return [inputString, ''];
  }
  else {
    const begin = inputString.slice(0, separatorIndex);
    const end = inputString.slice(separatorIndex + separator.length);
    return [begin, end];
  }
};

module.exports = sectionString;
