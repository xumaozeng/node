/**
 * 爬楼梯
 */

function climbStairs(n) {
  // 动态规划dp[n] = dp[n-1]+dp[n-2]
  let p = 0,
    q = 0,
    r = 1;
  for (let i = 1; i <= n; i++) {
    p = q;
    q = r;
    r = p + q;
  }
  return r;
}
