// Delete listed keys from dictionary

"use strict"

const drop = (dictionary, ...listedKeys) => {
  const keys = Object.keys(dictionary);
  for (const key of keys){
      if (listedKeys.includes(key)) {
        delete dictionary[key];
      }
    }
  return dictionary;
};

module.exports = drop;
