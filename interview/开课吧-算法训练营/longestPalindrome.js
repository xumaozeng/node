/**
 * 最长回文子串
 * 采用动态规划来做，dp[i][j]二维数组表示
 * 字符串s的第i到j位的是否是回文
 * 边界条件：
 * s的长度为1必是，为2则首尾相等即可
 * dp[i][j] = s[i]===s[j] && dp[i+1][j-1]
 */

function longestPalindrome(s) {
  const size = s.length;
  if (size < 2) return s;
  let result = "";
  const dp = [];
  for (let i = size - 1; i >= 0; i--) {
    dp[i] = [];
    for (let j = i; j < size; j++) {
      dp[i][j] = s[i] === s[j] && (j - i < 2 || dp[i + 1][j - 1]);
      if (dp[i][j] && j - i + 1 > result.length) {
        result = s.slice(i, j + 1);
      }
    }
  }
  return result;
}
