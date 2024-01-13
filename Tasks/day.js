// Get day number
"use strict"

const days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

const parseDay = (day) => {
  for (let index = 0; index < days.length; index++) {
    if (day.startsWith(days[index])) {
      return index + 1;
    }
  }
  return -1;
};

module.exports = parseDay;
