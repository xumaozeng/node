/**
 * 无重复字符的最长子串
 */

function lengthOfLongestSubstring(str) {
  const len = str.length;
  if (len < 2) return len;

  let left = 0,
    right = 1;
  let max = 0;
  while (left < right && right < len) {
    const index = str.slice(left, right).indexOf(str[right]);
    if (index !== -1) {
      left = index + left + 1;
    }
    right++;
    max = Math.max(max, right - left);
  }

  return max;
}

// test

const str = "abcabcbb";
const str1 = "pwwkew";

console.log(lengthOfLongestSubstring(str));
console.log(lengthOfLongestSubstring(str1));
