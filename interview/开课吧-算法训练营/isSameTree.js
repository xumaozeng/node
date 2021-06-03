/**
 * 相同的树
 */

function isSameTree(p, q) {
  // 左右子树都为空，则相等
  if (!p && !q) return true;
  //   左右有一个为空，则不相等
  if (!p || !q) return false;
  //   左右值不相等
  if (p.val !== q.val) return false;
  // p和q的值相等则需要递归遍历
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}
