/**
 * 合并两个有序数组
 */

function merge(nums1, m, nums2, n) {
  let tailIndex = m + n - 1;
  let p1 = m - 1;
  let p2 = n - 1;
  while (tailIndex >= 0) {
    if (p1 === -1 || nums1[p1] < nums2[p2]) {
      nums1[tailIndex--] = nums2[p2--];
    } else if (p2 === -1 || nums1[p1] >= nums2[p2]) {
      nums1[tailIndex--] = nums1[p1--];
    }
  }
}
