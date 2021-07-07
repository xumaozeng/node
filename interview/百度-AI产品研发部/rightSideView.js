/**
 * 二叉树的右视图
 */

function rightSideView(root) {
  // 把每层的节点最后一位存储即可
  if (!root) return [];
  const result = [];
  const nodeQueue = [root];
  while (nodeQueue.length) {
    let size = nodeQueue.length;
    while (size--) {
      const node = nodeQueue.shift();
      if (size === 0) result.push(node.val);
      if (node.left) nodeQueue.push(node.left);
      if (node.right) nodeQueue.push(node.right);
    }
  }
  return result;
}
