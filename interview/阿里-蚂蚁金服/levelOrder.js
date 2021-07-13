/**
 * 二叉树的层次遍历
 */

function levelOrder(root) {
  if (!root) return [];
  const result = [];
  const queue = [root];
  while (queue.length) {
    result.push([]);
    const size = queue.length;
    const curIndex = result.length - 1;
    for (let i = 0; i < size; i++) {
      const node = queue.shift();
      result[curIndex].push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }
  return result;
}
