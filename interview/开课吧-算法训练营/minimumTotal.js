/**
 * 三角形最小路径和
 */

function minimumTotal(triangle) {
  // 动态规划，从下往上
  const size = triangle.length - 1;
  const tmp = triangle[size];
  for (let i = size - 1; i >= 0; i--) {
    for (let j = 0; j < triangle[i].length; j++) {
      tmp[j] = triangle[i][j] + Math.min(tmp[j], tmp[j + 1]);
    }
  }
  return tmp[0];
}
