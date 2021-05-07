/**
 * 三数之和
 */

function threeSum(nums) {
  const result = [];
  const len = nums.length;
  if (len < 3) return [];
  // 排序
  nums.sort((a, b) => a - b);
  for (let i = 0; i < len; i++) {
    // 如果当前数字大于0，则三数之和一定大于0,结束循环
    if (nums[i] > 0) break;
    // 去重
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let left = i + 1,
      right = len - 1;
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);
        // 去重
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;
        left++;
        right--;
      } else if (sum < 0) left++;
      else right--;
    }
  }
  return result;
}

// test
const nums = [-1, 0, 1, 2, -1, -4];

console.log(threeSum(nums));
