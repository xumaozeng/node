/**
 * 队列：先进先出
 * enqueue:入队，从队列尾部添加一个元素
 * dequeue:出队，从队列头部添加一个元素
 * head:返回头部的元素
 * size:返回队列的大小
 * clear:清空队列
 * isEmpty:判断是否为空
 * tail:返回队尾的节点
 */

function Queue() {
  var items = [];
  // 入队，向队尾添加元素
  this.enqueue = function (item) {
    items.push(item);
  };
  // 出队，从队头移除元素
  this.dequeue = function () {
    return items.shift();
  };
  // 返回队列头部的元素
  this.head = function () {
    return items[0];
  };
  // 返回队列的大小
  this.size = function () {
    return items.length;
  };
  // 清空队列
  this.clear = function () {
    items = [];
  };
  // 判断队列是否为空
  this.isEmpty = function () {
    return items.length === 0;
  };
  // 返回队列的尾部节点
  this.tail = function () {
    return items[items.length - 1];
  };
}

exports.Queue = Queue;
