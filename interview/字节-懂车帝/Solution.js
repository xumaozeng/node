/**
 * 随机数索引
 */

const Solution = function (nums) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    map.has(nums[i]) ? map.get(nums[i]).push(i) : map.set(nums[i], [i]);
  }
  this.cache = map;
};

Solution.prototype.pick = function (target) {
  const index_arr = this.cache.get(target);
  return index_arr[Math.floor(Math.random() * index_arr.length)];
};
