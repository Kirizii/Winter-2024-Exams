// Split string into array by the first occurrence of separator

"use strict"

const sectionString = (inputString, separator) => {
  const index = inputString.indexOf(separator);
  if (index < 0 || separator == '') {
    return [inputString, ''];
  } else {
    return [inputString.slice(0, index), inputString.slice(index + separator.length)];
  }
};

module.exports = sectionString;
