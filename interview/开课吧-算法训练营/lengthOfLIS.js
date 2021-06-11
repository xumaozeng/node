/**
 * 最长递增子序列
 */

function lengthOfLIS(nums) {
  const dp = [1];
  for (let i = 1; i < nums.length; i++) {
    dp[i] = 1;
    for (let j = 0; j < i; j++) {
      nums[i] > nums[j] && (dp[i] = Math.max(dp[i], dp[j] + 1));
    }
  }
  return Math.max(...dp);
}
