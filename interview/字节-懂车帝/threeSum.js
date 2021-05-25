/**
 * 三数之和
 */

function threeSum(nums) {
  nums.sort((a, b) => a - b);
  const result = [];
  if (nums.length < 3 || nums[0] > 0) return [];
  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1,
      right = nums.length - 1;
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    while (left < right) {
      let sum = nums[left] + nums[i] + nums[right];
      if (sum === 0) {
        result.push([nums[left++], nums[i], nums[right--]]);
        while (nums[left] === nums[left - 1]) left++;
        while (nums[right] === nums[right + 1]) right--;
      } else if (sum > 0) right--;
      else left++;
    }
  }
  return result;
}

// test
const nums = [-1, 0, 1, 2, -1, -4];

console.log(threeSum(nums));
