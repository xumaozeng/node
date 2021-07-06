/**
 * 二叉树的最大深度
 */
function maxDepth1(root) {
  // 递归遍历
  if (!root) return 0;
  const leftHigh = maxDepth1(root.left);
  const rightHigh = maxDepth1(root.right);

  return Math.max(leftHigh, rightHigh) + 1;
}

function maxDepth2(root) {
  // 迭代遍历
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
