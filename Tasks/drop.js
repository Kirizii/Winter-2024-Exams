// Delete listed keys from dictionary

"use strict"

const drop = (dictionary, ...listedKeys) => {
  const keys = Object.keys(dictionary);
  const result = {};
  for (const key of keys){
      if (!listedKeys.includes(key)) {
        result[key] = dictionary[key];
      }
    }
  return result;
};

module.exports = drop;
