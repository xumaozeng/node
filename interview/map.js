/**
 * 实现对象的 Map 函数类似 Array.prototype.map
 * map创建一个新数组，其结果是该数组中的每个元素是调用一次
 * 提供的函数后的返回值
 * 参数：(callback(element, index, array), thisArg)
 * 返回值：由原来数组每个元素执行回调函数之后的结果组成的新数组
 */

Array.prototype.myMap = function (callback, thisArg) {
  if (Array.isArray(this)) {
    if (typeof callback !== "function")
      throw new TypeError(callback + "is not function");
    const result = [];
    for (let i = 0; i < this.length; i++) {
      result[i] = callback.call(thisArg, this[i], i, this);
    }
    return result;
  }
};

// 对象的map, fn形如(key, value)=>void
Object.prototype.map = function (fn) {
  if (typeof fn !== "function") throw new TypeError(fn + " is not function");
  const obj = this;
  const result = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      result[key] = fn(key, obj[key]);
    }
  }
  return result;
};

// test
const obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};

console.log(obj.map((key, value) => value * 2));
