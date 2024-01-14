// Delete listed keys from dictionary

"use strict"

DroP = (D, ...X) => {
  T = Object.keys(D);
  T.forEach(
    (_) => {
      if (X.includes(_)) {
        delete D[_];
      }
    });
  return D;
};

module.exports = DroP;
