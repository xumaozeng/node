/**
 * 合并两个有序数组
 */

function merge(nums1, m, nums2, n) {
  let p1 = m - 1,
    p2 = n - 1;
  let tail = m + n - 1;
  let cur;
  while (p1 >= 0 || p2 >= 0) {
    // 从后往前遍历
    if (p1 === -1 || nums1[p1] <= nums2[p2]) {
      cur = nums2[p2--];
    } else if (p2 === -1 || nums1[p1] > nums2[p2]) {
      cur = nums1[p1--];
    }
    nums1[tail--] = cur;
  }
  return nums1;
}
