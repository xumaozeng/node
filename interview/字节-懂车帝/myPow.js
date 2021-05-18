/**
 * Pow(x,y)
 * 计算x的n次幂函数
 */

function myPow(x, n) {
  if (n === 0) return 1;
  if (n < 0) return 1 / myPow(x, -n);
  if (n % 2) {
    // n是奇数
    return x * myPow(x, n - 1);
  }
  return myPow(x * x, n / 2);
}
