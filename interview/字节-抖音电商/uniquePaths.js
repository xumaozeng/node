/**
 * 不同路径
 * 动态规划：f(i,j)表示从左上角走到(i,j)的路径数量
 * [0,m)
 * [0.n)
 * f(i,j) = f(i-1, j)+f(i, j-1)，其中f(0,0) = 1
 */

function uniquePaths(m, n) {
  const dp = new Array(m).fill(0).map(() => new Array(n).fill(0));
  for (let i = 0; i < m; i++) dp[i][0] = 1;
  for (let j = 0; j < n; j++) dp[0][j] = 1;
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }
  return dp[m - 1][n - 1];
}
