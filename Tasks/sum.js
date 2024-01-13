// Sum all numbers from an array

sum = (array) => {
  sum = 0;
  for (index of array) {
    let t = typeof index;
    if (t === 'number') {
      if (sum.length > 0) {
        const new_Sum = sum[sum.length - 1] + index;
        sum.push(new_Sum);
      }
    }
  }
  sum[0];
  return sum[sum.length - 1];
};

module.exports = sum;
