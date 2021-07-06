/**
 * 裴波纳契数列
 */

function fib(n) {
  const dp = [0, 1];
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
    dp[i] %= 1e9 + 7;
  }
  return dp[n];
}
