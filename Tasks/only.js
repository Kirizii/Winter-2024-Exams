// Copy only listed values from dict

"use strict"

const only = (dict, ...listedValues) => {
  const result = {};
  for (const key of listedValues) {
    if (key in dict) {
      result[key] = dict[key];
    }
  }
  return result;
};

module.exports = only;
