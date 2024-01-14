// Delete listed keys from dictionary

"use strict"

const drop = (dictionary, ...listedKeys) => {
  const keys = Object.keys(dictionary);
  keys.forEach(
    (key) => {
      if (listedKeys.includes(key)) {
        delete dictionary[key];
      }
    });
  return dictionary;
};

module.exports = drop;
