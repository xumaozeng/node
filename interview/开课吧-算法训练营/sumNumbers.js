/**
 * 求从根节点到叶子节点的和
 */

function sumNumbers(root) {
  return dfs(root, 0);
}

function dfs(node, preSum) {
  if (!node) return 0;
  const sum = preSum * 10 + node.val;
  if (!node.left && !node.right) {
    return sum;
  } else {
    return dfs(node.left, sum) + dfs(node.right, sum);
  }
}
