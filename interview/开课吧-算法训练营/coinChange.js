/**
 * 零钱兑换
 */

function coinChange(coins, amount) {
  // 动态规划
  if (amount === 0) return 0;
  const dp = Array(amount + 1).fill(Infinity);
  dp[0] = 0;
  for (let i = 0; i < dp.length; i++) {
    for (const coin of coins) {
      if (i - coin >= 0) dp[i] = Math.min(dp[i], dp[i - coin] + 1);
    }
  }
  return dp[dp.length - 1] === Infinity ? -1 : dp[dp.length - 1];
}
