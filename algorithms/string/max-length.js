/**
 * 最长的无重复子串
 */

function maxLength(str) {
  const len = str.length;
  if (len <= 0) return 0;
  if (len === 1) return 1;

  let max = 0,
    left = 0,
    right = 1;
  while (left < right && right < len) {
    const index = str.slice(left, right).indexOf(str[right]);
    if (index !== -1) {
      left = left + index + 1;
    }
    right++;
    max = Math.max(max, right - left);
  }
  return max;
}

// test
const str = "aabcb";
console.log(maxLength(str));
