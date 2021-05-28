/**
 * 滑动窗口最大值
 */

function maxSlidingWindow(nums, k) {
  const win = [];
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    if (i - win[0] > k - 1) win.shift();

    let j = win.length - 1;
    while (j >= 0 && nums[win[j]] <= nums[i]) {
      j--;
      win.pop();
    }
    win.push(i);
    if (i >= k - 1) result.push(nums[win[0]]);
  }
  return result;
}

// test
const nums = [1, 3, -1, -3, 5, 3, 6, 7];
console.log(maxSlidingWindow(nums, 3));
