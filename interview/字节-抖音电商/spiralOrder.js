/**
 * 螺旋矩阵
 */

function spiralOrder(matrix) {
  const result = [];
  let left = 0,
    right = matrix[0].length - 1;
  let top = 0,
    down = matrix.length - 1;

  while (true) {
    for (let i = left; i <= right; i++) {
      result.push(matrix[top][i]);
    }
    top++;
    if (top > down) break;
    for (let i = top; i <= down; i++) {
      result.push(matrix[i][right]);
    }
    right--;
    if (left > right) break;
    for (let i = right; i >= left; i--) {
      result.push(matrix[down][i]);
    }
    down--;
    if (top > down) break;
    for (let i = down; i >= top; i--) {
      result.push(matrix[i][left]);
    }
    left++;
    if (left > right) break;
  }
  return result;
}
