/**
 * 两个数组交集
 */

function intersection(nums1, nums2) {
  const set = new Set();
  for (const num of nums1) {
    if (nums2.includes(num) && !set.has(num)) {
      set.add(num);
    }
  }
  return Array.from(set);
}
