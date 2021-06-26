/**
 * 多数元素
 */

function majorityElement(nums) {
  let count = 0;
  let candidate;
  for (const num of nums) {
    if (count === 0) candidate = num;
    count += num === candidate ? 1 : -1;
  }
  return candidate;
}
