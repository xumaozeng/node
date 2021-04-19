/**
 * 数去去重
 */

const arr = [1, 2, 3, 4, 3, 2, 3, 4, 6, 7, 6];

// 1.console.log([...new Set(arr)]);

// 2 indexOf
function indexOf(arr) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    const index = newArr.indexOf(item);
    if (index === -1) {
      newArr.push(item);
    }
  }
  return newArr;
}

// 3. 双重循环
function doubleLoop(arr) {
  let result = [];
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < result.length; j++) {
      if (arr[i] === result[j]) {
        break;
      }
    }
    if (j === result.length) {
      result.push(arr[i]);
    }
  }
  return result;
}

// 4.splice
function arrSplice(arr) {
  const result = arr;
  for (let i = 0; i < result.length; i++) {
    for (let j = i + 1; j < result.length; j++) {
      if (result[i] === result[j]) {
        result.splice(j, 1);
        j--;
      }
    }
  }
  return result;
}

// 5. filter
function arrFliter(arr) {
  return arr.filter((item, index) => {
    return arr.indexOf(item) === index;
  });
}

// 6. Reduce
function arrReduce(arr) {
  return arr.reduce((acc, val) => {
    if (acc.indexOf(val) === -1) {
      acc.push(val);
    }
    return acc;
  }, []);
}

// 7. Map
function arrMap(arr) {
  const map = new Map();
  return arr.filter(item => {
    return !map.has(item) && map.set(item, 1);
  });
}

console.log(arrMap(arr));
