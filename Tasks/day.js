// Get day number
"use strict"

const days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

const parseDay = (day) => {
  let i;
  for (i = 0; i < days.length; i++) {
    if (day.startsWith(days[i])) {
      return i + 1;
    }
  }
  return -1;
};

module.exports = parseDay;
