/**
 * 二叉树中和为n的路径
 */

function pathSum(root, target) {
  if (!root) return [];
  const result = [];

  const dfs = (node, sum, temp) => {
    if (node.val === sum && !node.left && !node.right) {
      result.push(temp);
    }
    temp.push(node.val);
    if (node.left) dfs(node.left, sum - node.val, temp.slice());
    if (node.right) dfs(node.right, sum - node.val, temp.slice());
  };

  dfs(root, target, []);
  return result;
}
