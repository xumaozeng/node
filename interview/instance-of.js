/**
 * intanceof运算符源码实现
 * 实例 intanceof 构造函数
 */

function instanceOf(L, R) {
  if (L === null) return false;
  // 判断B.prototype是否在A的原型链上
  let left = Object.getPrototypeOf(L);
  if (left) {
    const right = R.prototype;
    if (left === right) {
      return true;
    }
    return instanceOf(left, R);
  } else {
    return false;
  }
}

console.log(instanceOf({}, Object));

console.log({}.constructor);
