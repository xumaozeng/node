/**
 * 二叉树的所有路径
 */

function binaryTreePaths(root) {
  const list = [];
  const dfs = (node, path) => {
    if (node) {
      path += node.val.toString();
      if (!node.left && !node.right) {
        // 是叶子节点
        list.push(path);
      } else {
        // 不是叶子节点
        path += "->";
        dfs(node.left, path);
        dfs(node.right, path);
      }
    }
  };
  dfs(root, "");
  return list;
}
