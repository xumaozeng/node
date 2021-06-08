/**
 * 二叉树的非递归后序遍历
 */

function postorderTraversal(root) {
  // 迭代遍历-左右根
  const result = [];
  const stack = [root];
  while (stack.length) {
    const node = stack.pop();
    if (node) {
      result.unshift(node.val);
      if (node.left) stack.push(node.left);
      if (node.right) stack.push(node.right);
    }
  }
  return result;
}
