/**
 * 三数之和
 */

function threeSum(nums) {
  // 双指针+遍历
  nums.sort((a, b) => a - b);
  if (nums.length < 3 || nums[0] > 0) return [];
  const result = [];
  for (let i = 0; i < nums.length - 2; i++) {
    // 重复的过滤掉
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let left = i + 1,
      right = nums.length - 1;
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum === 0) {
        result.push([nums[i], nums[left++], nums[right--]]);
        //  继续遍历
        while (nums[left] === nums[left - 1]) left++;
        while (nums[right] === nums[right + 1]) right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }
  return result;
}
