/**
 * 二叉树的中序遍历
 */

function inorderTraversal(root) {
  // 左根右
  if (!root) return [];
  const result = [];
  const stack = [];
  let cur = root;
  while (cur || stack.length) {
    while (cur) {
      stack.push(cur);
      cur = cur.left;
    }
    cur = stack.pop();
    result.push(cur.val);
    cur = cur.right;
  }
  return result;
}
