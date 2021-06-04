/**
 * 二叉搜索树的最近公共祖先
 * 1. 递归
 * 2. 迭代
 */

function lowestCommonAncestor1(root, p, q) {
  // 递归
  if (p.val < root.val && q.val < root.val) {
    return lowestCommonAncestor(root.left, p, q);
  } else if (p.val > root.val && q.val > root.val) {
    return lowestCommonAncestor(root.right, p, q);
  } else {
    // p和q一个在左子树，一个在右子树，其公共祖先就是root
    return root;
  }
}

function lowestCommonAncestor2(root, p, q) {
  // 迭代
  if (!root) return null;
  while (root) {
    if (p.val < root.val && q.val < root.val) {
      root = root.left;
    } else if (p.val > root.val && q.val > root.val) {
      root = root.right;
    } else {
      return root;
    }
  }
}

// 变种：二叉树的最近公共祖先
function lowestCommonAncestor(root, p, q) {
  // 递归遍历
  if (!root || root === p || root === q) return root;
  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);
  if (left && right) return root;
  if (left) return left;
  return right;
}
