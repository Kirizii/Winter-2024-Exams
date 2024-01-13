// Get day number
//Test day.js: Passed: 5 of 5

"use strict"

const DAYS = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

const parseDay = (day) => {
  for (let index = 0; index < DAYS.length; index++) {
    if (day.startsWith(DAYS[index])) {
      return index + 1;
    }
  }
  return -1;
};

module.exports = parseDay;
