/**
 * 手写reduce(callbackFn, initialValue)
 * callbackFn(pre,cur,index,array)
 */

Array.prototype.myReduce = function (callbackFn, initialValue) {
  if (typeof callbackFn !== "function") {
    throw TypeError(callbackFn + "is not function");
  }
  if (initialValue === undefined && this.length === 0) {
    throw TypeError("没有提供初始值且数组为空");
  }
  if (initialValue !== undefined && this.length === 0) {
    return initialValue;
  }
  if (initialValue === undefined && this.length === 1) {
    return this[0];
  }

  if (initialValue === undefined) {
    // 没有提供初始值
    let result = this[0],
      temp;
    for (let i = 1; i < this.length; i++) {
      if (this[i] === undefined) continue;
      temp = callbackFn(result, this[i], i, this);
      result = temp;
    }
    return result;
  } else {
    // 提供初始值
    let result = initialValue,
      temp;
    for (let i = 0; i < this.length; i++) {
      if (this[i] === undefined) continue;
      temp = callbackFn(result, this[i], i, this);
      result = temp;
    }
    return result;
  }
};

// test
const array = [1, , 3];
console.log(array.myReduce((pre, cur) => pre + cur));
