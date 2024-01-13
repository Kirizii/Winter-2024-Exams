// Get month number

"use strict"

const MONTHS = [
  'jan',
  'feb',
  'mar',
  'apr',
  'may',
  'jun',
  'jul',
  'aug',
  'sep',
  'oct',
  'nov',
  'dec',
];

const monthNumber = (month) => {
  for (let index = 0; index < MONTHS.length; index++) {
    if (month.toLowerCase().startsWith(MONTHS[index])) return index + 1;
  }
  return -1;
};

module.exports = monthNumber;
