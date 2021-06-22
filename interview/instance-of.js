/**
 * intanceof运算符源码实现
 * 实例 intanceof 构造函数
 */

function instanceOf1(L, R) {
  if (L === null) return false;
  // 判断B.prototype是否在A的原型链上
  let left = Object.getPrototypeOf(L);
  if (left) {
    const right = R.prototype;
    if (left === right) {
      return true;
    }
    return instanceOf1(left, R);
  } else {
    return false;
  }
}

function instanceOf2(L, R) {
  if (L === null) return false;
  let left = Object.getPrototypeOf(L);
  const right = R.prototype;
  while (true) {
    if (left === null) return false;
    if (left === right) return true;
    left = Object.getPrototypeOf(left);
  }
  return false;
}

//test
const obj1 = Object.create(null);

console.log(instanceOf1(obj1, Object));
