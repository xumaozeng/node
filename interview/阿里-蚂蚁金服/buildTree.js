/**
 * 从前序和中序遍历序列构造二叉树
 */

function buildTree(preorder, inorder) {
  // 前序遍历的第一个节点是根节点
  if (!preorder.length) return null;
  const root = new TreeNode(preorder[0]);
  const midIndex = inorder.indexOf(preorder[0]);
  root.left = buildTree(
    preorder.slice(1, midIndex + 1),
    inorder.slice(0, midIndex)
  );
  root.right = buildTree(
    preorder.slice(midIndex + 1),
    inorder.slice(midIndex + 1)
  );
  return root;
}
