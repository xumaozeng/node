/**
 * CommonJS模块化的使用
 * exports和module.exports是一样的，不过：
 * exports不能直接赋值，直接复制改变了这个变量
 * module.exports可以.方法，也可以直接赋值
 */

function add(a, b) {
  return a + b;
}

function mul(a, b) {
  return a * b;
}

module.exports = { add, mul };
