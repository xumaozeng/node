/**
 * 两数之和
 */

function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const item = nums[i];
    if (map.has(target - item)) {
      return [i, map.get(target - item)];
    }
    map.set(item, i);
  }
}
