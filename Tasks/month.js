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
  const normalizedMonth = month.toLowerCase();
  for (let index = 0; index < MONTHS.length; index++) {
    if (normalizedMonth.startsWith(MONTHS[index])) return index + 1;
  }
  return -1;
};

module.exports = monthNumber;
