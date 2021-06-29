/**
 * 乘积最大子数组
 */

function maxProduct(nums) {
  let max = -Infinity;
  let imax = 1;
  let imin = 1;
  for (const num of nums) {
    if (num < 0) [imax, imin] = [imin, imax];
    imax = Math.max(imax * num, num);
    imin = Math.min(imin * num, num);
    max = Math.max(max, imax);
  }
  return max;
}
