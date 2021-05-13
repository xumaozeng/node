/**
 * 对称的二叉树-判断是否
 */

function isSymmetric(root) {
  if (!root) return true;
  // 递归检查左右子树
  const check = (L, R) => {
    // 1、左右子树同时为空，则为镜像
    if (!L && !R) return true;
    // 2、左右子树有一个为空，则不为镜像
    if (!L || !R) return false;
    // 3、左右子树同时存在，但值不同，也不为镜像
    if (L.val !== R.val) return false;

    return check(L.left, R.right) && check(L.right, R.left);
  };

  return check(root.left, root.right);
}
