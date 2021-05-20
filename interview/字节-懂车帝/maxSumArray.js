/**
 * 最大子序和
 */

function maxSumArray(nums) {
  let sum = 0;
  let max = nums[0];
  nums.forEach(x => {
    sum = Math.max(sum + x, x);
    max = Math.max(max, sum);
  });
  return max;
}
