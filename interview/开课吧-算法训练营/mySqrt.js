/**
 * x的平方根
 */

function mySqrt(x) {
  // 二分查找
  if (x < 2) return x;
  let start = 0,
    end = x,
    res;
  while (start <= end) {
    // 位运算右移一位相当于/2
    const mid = (start + end) >> 1;
    if (mid * mid === x) {
      return mid;
    } else if (mid * mid < x) {
      res = mid;
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return res;
}
