// Object.is源码在严格相等的情况下，处理NaN，-0和=0

function ObjectIs(x, y) {
  if (x === y) {
    // 处理-0、+0
    return x !== 0 || 1 / x === 1 / y;
  } else {
    // 处理NaN
    return x !== x && y !== y;
  }
}

console.log(ObjectIs(-0, -0));
