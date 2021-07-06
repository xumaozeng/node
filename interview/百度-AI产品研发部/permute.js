/**
 * 全排列
 */

function permute(nums) {
  const list = [];
  backTrack(list, [], nums);
  return list;
}

function backTrack(list, temp, nums) {
  if (temp.length === nums.length) return list.push([...temp]);
  for (const num of nums) {
    if (temp.includes(num)) continue;
    temp.push(num);
    backTrack(list, temp, nums);
    temp.pop();
  }
}
