/**
 * 数组中第K个大的元素
 */

function findKthLargest(nums, k) {
  return quickSort(nums, nums.length - k, 0);
}

function quickSort(arr, targetIndex, start) {
  if (arr.length <= 1) return arr[0];
  const left = [],
    right = [];
  const midIndex = arr.length >> 1;
  const midValue = arr.splice(midIndex, 1)[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > midValue) {
      right.push(arr[i]);
    } else {
      left.push(arr[i]);
    }
  }
  if (start + left.length === targetIndex) {
    return midValue;
  } else if (start + left.length > targetIndex) {
    return quickSort(left, targetIndex, start);
  } else {
    return quickSort(right, targetIndex, left.length + start + 1);
  }
}
