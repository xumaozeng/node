/**
 * 二叉树的层次遍历
 */

function levelOrder(root) {
  if (!root) return [];

  const result = [];
  let levelList = [];
  const queue = [root];
  queue.push(0);

  while (queue.length) {
    const node = queue.shift();
    if (node === 0) {
      result.push(levelList);
      levelList = [];
      if (!queue.length) {
        break;
      } else {
        queue.push(0);
        continue;
      }
    }

    levelList.push(node.val);

    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }

  return result;
}
