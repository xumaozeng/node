/**
 * 二分查找
 */

function search(nums, target) {
  let start = 0,
    end = nums.length - 1;
  while (start <= end) {
    const midIndex = (start + end) >> 1;
    const midValue = nums[midIndex];
    if (midValue === target) {
      return midIndex;
    } else if (midValue < target) {
      start = midIndex + 1;
    } else {
      end = midIndex - 1;
    }
  }
  return -1;
}
