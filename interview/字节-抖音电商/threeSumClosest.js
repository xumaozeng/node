/**
 * 最接近的三数之和
 * 即差值最小绝对值
 */

function threeSumClosest(nums, target) {
  let result;
  let min = Number.MAX_VALUE;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let left = i + 1,
      right = nums.length - 1;
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      const res = sum - target;
      if (Math.abs(res) < min) {
        min = Math.abs(res);
        result = sum;
      }
      if (res >= 0) {
        right--;
      } else {
        left++;
      }
    }
  }
  return result;
}
