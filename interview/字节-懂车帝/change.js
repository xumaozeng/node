/**
 * 零钱兑换II
 */

function change(amount, coins) {
  const dp = new Array(amount + 1);
  dp.fill(0);
  dp[0] = 1;
  for (let i = 0; i < coins.length; i++) {
    for (let j = coins[i]; j < amount + 1; j++) {
      dp[j] += dp[j - coins[i]];
    }
  }

  return dp[amount];
}
