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

// 使用reduce实现数组的map
if (!Array.prototype.mapUsingReduce) {
  Array.prototype.mapUsingReduce = function (callback, thisArg) {
    return this.reduce(function (mappedArray, currentValue, index, array) {
      mappedArray[index] = callback.call(thisArg, currentValue, index, array);
      return mappedArray;
    }, []);
  };
}

// 使用reduce实现数组的filter
if (!Array.prototype.filterUsingReduce) {
  Array.prototype.filterUsingReduce = function (callback, thisArg) {
    return this.reduce(function (filteredArray, element, index, array) {
      const result = callback.call(thisArg, element, index, array);
      if (result) filteredArray.push(element);
      return filteredArray;
    }, []);
  };
}

// test
const res = [1, 2, , 3].filterUsingReduce(x => x & 1);
console.log(res);
