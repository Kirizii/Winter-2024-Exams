// Copy only listed values from dict

"use strict"

const only = (dict, ...listedValues) => {
  const keys = Object.keys(dict);
  for (const key of keys){
    if (!listedValues.includes(key)) {
      delete dict[key];
    }
  }
  return dict;
};

module.exports = only;
