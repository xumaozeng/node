/**
 * 有n个整数，范围是[0,100]
 * 设计数据结构，存储这些数据，并提供两种方法addMember和isExist
 */

function FindClass() {
  var datas = new Array(100); // 存储数据

  // 先都初始化为0
  for (var i = 0; i < datas.length; i++) {
    datas[i] = 0;
  }

  // 加入一个数
  this.addMember = function (member) {
    datas[member] = 1;
  };

  // 判断member是否存在
  this.isExist = function (member) {
    if (datas[member] === 1) {
      return true;
    }
    return false;
  };
}

// test
var fc = new FindClass();
var arr = [0, 3, 5, 6, 9, 34, 23, 78, 99];

for (var i = 0; i < arr.length; i++) {
  fc.addMember(arr[i]);
}

console.log(fc.isExist(3));
console.log(fc.isExist(7));
console.log(fc.isExist(78));
