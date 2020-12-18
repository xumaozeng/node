/**
 * 约瑟夫环：
 * 有一个0-100的数组，每隔两个数删除一个元素，直到数组只剩下最后一个元素
 */
var Queue = require("./myQueue");

function del_ring(arr_list) {
  // 定义队列，放入所有元素到里面
  var queue = new Queue.Queue();
  for (var i = 0; i < arr_list.length; i++) {
    queue.enqueue(arr_list[i]);
  }
  // 每个两个数删除一个元素，判断除3是否为0，是出队，否则就重新入队
  var index = 0;
  while (queue.size() !== 1) {
    var item = queue.dequeue();
    index++;
    if (index % 3 !== 0) {
      queue.enqueue(item);
    }
  }
  return queue.head();
}

// 准备数据测试
const arr_list = [];
for (let i = 0; i < 5; i++) {
  arr_list.push(i);
}
console.log(del_ring(arr_list));
