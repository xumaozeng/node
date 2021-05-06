/**
 * 二叉树的锯齿形层次遍历
 */

function zigzagLevelOrder(root) {
  if (!root) return [];

  const result = [];
  const nodeQueue = [root];

  let isOrderLeft = true;

  while (nodeQueue.length) {
    let levelList = [];
    const size = nodeQueue.length;

    for (let i = 0; i < size; i++) {
      const node = nodeQueue.shift();
      if (isOrderLeft) {
        levelList.push(node.val);
      } else {
        levelList.unshift(node.val);
      }
      if (node.left) nodeQueue.push(node.left);

      if (node.right) nodeQueue.push(node.right);
    }
    result.push(levelList);
    isOrderLeft = !isOrderLeft;
  }

  return result;
}
