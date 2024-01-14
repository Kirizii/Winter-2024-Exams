// Copy only listed values from dict

"use strict"

const only = (dict, ...listedValues) => {
  const keys = Object.keys(dict);
  keys.forEach((key) => {
    if (!listedValues.includes(key)) {
      delete dict[key];
    }
  });
  return dict;
};

module.exports = only;
