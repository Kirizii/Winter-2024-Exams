// Split string into array by the first occurrence of separator

"use strict"

const sectionString = (inputString, separator) => {
  const index = inputString.indexOf(separator);
  if (index < 0 || separator == '') {
    return [inputString, ''];
  } else {
    const begin = inputString.slice(0, index);
    const end = inputString.slice(index + separator.length);
    return [begin, end];
  }
};

module.exports = sectionString;
