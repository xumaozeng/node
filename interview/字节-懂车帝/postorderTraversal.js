/**
 * 二叉树的非递归后序遍历
 */

function postorderTraversal(root) {
  const result = [];
  const stack = [];
  if (root) stack.push(root);

  while (stack.length > 0) {
    const node = stack.pop();
    result.unshift(node.val);
    if (node.left) stack.push(node.left);
    if (node.right) stack.push(node.right);
  }

  return result;
}
