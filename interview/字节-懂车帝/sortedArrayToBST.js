/**
 * 将有序数组转换为二叉搜索树
 */

function sortedArrayToBST(nums) {
  const buildBST = (nums, start, end) => {
    if (start > end) return null;
    const midIndex = (start + end) >> 1;
    const root = new TreeNode(nums[midIndex]);

    root.left = buildBST(nums, start, midIndex - 1);
    root.right = buildBST(nums, midIndex + 1, end);
    return root;
  };

  return buildBST(nums, 0, nums.length - 1);
}
