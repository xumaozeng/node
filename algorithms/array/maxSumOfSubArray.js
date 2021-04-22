/**
 * 给定一个数组arr，返回子数组的最大累加和
 */

function maxSumOfSubArray(arr) {
  let sum = arr[0];
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    sum = Math.max(sum + arr[i], arr[i]);
    max = Math.max(sum, max);
  }

  return max;
}

// test
const arr = [1, -2, 3, 5, -2, 6, -1];
console.log(maxSumOfSubArray(arr));
