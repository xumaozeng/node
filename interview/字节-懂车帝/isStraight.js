/**
 * 扑克牌中的顺子
 */

function isStraight(nums) {
  const set = new Set();
  let max = 0,
    min = 13;
  for (const num of nums) {
    if (num === 0) continue;
    if (set.has(num)) return false;
    set.add(num);
    min = Math.min(min, num);
    max = Math.max(max, num);
  }

  return max - min < 5;
}
