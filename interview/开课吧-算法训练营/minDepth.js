/**
 * 二叉树的最小深度
 */

function minDepth(root) {
  if (!root) return 0;
  if (!root.left && !root.right) return 1;
  let min = Number.MAX_VALUE;
  if (root.left) min = Math.min(minDepth(root.left), min);
  if (root.right) min = Math.min(minDepth(root.right), min);
  return min + 1;
}
