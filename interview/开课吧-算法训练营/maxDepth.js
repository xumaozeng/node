/**
 * 二叉树的最大深度
 * 1. 递归遍历
 * 2. 迭代
 */

function maxDepth1(root) {
  // 递归遍历：终止条件是root为null，高度为0
  if (!root) return 0;
  const leftDepth = maxDepth(root.left);
  const rightDepth = maxDepth(root.right);
  return Math.max(leftDepth, rightDepth) + 1;
}

function maxDepth2(root) {
  // 迭代遍历BFS
  if (!root) return 0;
  const nodeQueue = [root];
  let depth = 1;
  while (nodeQueue.length) {
    const size = nodeQueue.length;
    for (let i = 0; i < size; i++) {
      const node = nodeQueue.shift();
      if (node.left) nodeQueue.push(node.left);
      if (node.right) nodeQueue.push(node.right);
    }
    if (nodeQueue.length) depth++;
  }
  return depth;
}
