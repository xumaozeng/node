/**
 * 翻转二叉树
 */

function invertTree(root) {
  // 递归终止条件
  if (!root) return null;
  //   递归左右子树替换
  const left = invertTree(root.left);
  const right = invertTree(root.right);
  root.left = right;
  root.right = left;
  return root;
}
