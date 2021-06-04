/**
 * Pow(x, n)-x的n次幂
 */

function myPow(x, n) {
  // 二分法
  if (n === 0) return 1;
  if (n < 0) return 1 / myPow(x, -n);
  if (n % 2 === 1) {
    // 奇数
    return x * myPow(x, n - 1);
  }
  return myPow(x * x, n / 2);
}
