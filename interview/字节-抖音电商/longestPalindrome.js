/**
 * 最长回文子串
 */

function longestPalindrome(s) {
  if (s.length < 2) return s;
  let result = "";
  const dp = [];
  for (let i = s.length - 1; i >= 0; i--) {
    dp[i] = [];
    for (let j = i; j < s.length; j++) {
      dp[i][j] = s[i] === s[j] && (j - i < 2 || dp[i + 1][j - 1]);
      if (dp[i][j] && j - i + 1 > result.length) {
        result = s.slice(i, j + 1);
      }
    }
  }
  return result;
}
