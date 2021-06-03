/**
 * 前序遍历：跟->左->右
 * 两种方式：1 递归遍历 2 迭代遍历
 */

function preorderTraversal1(root, arr = []) {
  // 1. 递归遍历
  if (root) {
    arr.push(root.val);
    preorderTraversal1(root.left, arr);
    preorderTraversal1(root.right, arr);
  }
  return arr;
}

function preorderTraversal2(root) {
  // 2. 迭代遍历
  const result = [];
  const stack = [root];
  while (stack.length > 0) {
    const node = stack.pop();
    if (node) {
      result.push(node.val);
      if (node.right) stack.push(node.right);
      if (node.left) stack.push(node.left);
    }
  }
  return result;
}
