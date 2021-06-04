/**
 * 全排列
 * 递归+回溯
 */

function permute(nums) {
  const list = [];
  backtrack(list, [], nums);
  return list;
}

function backtrack(list, temp, nums) {
  if (temp.length === nums.length) return list.push([...temp]);
  for (let i = 0; i < nums.length; i++) {
    const ele = nums[i];
    if (temp.includes(ele)) continue;
    temp.push(ele);
    backtrack(list, temp, nums);
    temp.pop();
  }
}
