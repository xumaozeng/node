/**
 * apply函数的实现
 * 和call差不多，不过参数不一样是数组
 */

Function.prototype.myApply = function (context) {
  // 1.判断调用对象是否为函数
  if (typeof this !== "function") {
    throw new TypeError("Error");
  }

  // 2.判断context是否存在，不存在则传入为window
  context = context || globalThis;

  // 3.将函数设置为context的方法
  const fn = Symbol();
  context[fn] = this;

  // 4.调用方法
  let result = null;
  const args = arguments[1]; // 类数组或数组
  if (args.length > 0) {
    result = context[fn](...args);
  } else {
    result = context[fn]();
  }

  // 5.删除属性，返回结果
  delete context[fn];

  return result;
};

//test
const array = ["a", "b"];

const elements = [0, 1, 2];

array.push.myApply(array, elements);

console.log(array);
