/**
 * 二叉树的层次遍历
 */

function levelOrder(root) {
  if (!root) return [];

  const result = [];
  const nodeQueue = [root];

  while (nodeQueue.length) {
    // 二维数组
    result.push([]);
    const size = nodeQueue.length;
    const cur_index = result.length - 1;

    for (let i = 0; i < size; i++) {
      const node = nodeQueue.shift();
      result[cur_index].push(node.val);

      if (node.left) nodeQueue.push(node.left);
      if (node.right) nodeQueue.push(node.right);
    }
  }

  return result;
}
