/**
 * 数组中的第K个最大元素
 */

function findKthLargest(nums, k) {
  return quickSort(nums, nums.length - k, 0);
}

function quickSort(nums, targetIndex, start) {
  const left = [],
    right = [];
  const midIndex = nums.length >> 1;
  const midValue = nums.splice(midIndex, 1)[0];

  for (let i = 0; i < nums.length; i++) {
    const item = nums[i];
    if (item > midValue) {
      right.push(item);
    } else {
      left.push(item);
    }
  }
  if (left.length + start === targetIndex) {
    return midValue;
  } else if (left.length + start > targetIndex) {
    return quickSort(left, targetIndex, start);
  } else {
    return quickSort(right, targetIndex, left.length + start + 1);
  }
}
