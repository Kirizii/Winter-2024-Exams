// Sum all numbers from an array

sum = (array) => {
  sum = [0];
  let k = 5;
  for (i of array) {
    let t = typeof i;
    if (t === 'number') {
      if (sum.length > 0) {
        const new_Sum = sum[sum.length - 1] + i;
        sum.push(new_Sum);
      }
    }
  }
  sum[0];
  return sum[sum.length - 1];
};

module.exports = sum;
