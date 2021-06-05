/**
 * 删除数组中的重复项
 */

function removeDuplicates(nums) {
  // 双指针
  const size = nums.length;
  let slow = 0;
  for (let fast = 0; fast < size; fast++) {
    if (nums[fast] !== nums[slow]) {
      slow++;
      nums[slow] = nums[fast];
    }
  }
  nums.splice(slow + 1);
  console.log(nums);
  return slow + 1;
}

// test
const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(removeDuplicates(nums));
