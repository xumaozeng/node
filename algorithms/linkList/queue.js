/**
 * 栈实现队列
 */
var myLinkList = require("./myLinkList");

function Queue() {
  var LinkList = new myLinkList.LinkList();
  // 入队
  this.enqueue = function (item) {
    LinkList.append(item);
  };

  // 出队
  this.dequeue = function () {
    return LinkList.remove_head();
  };

  // 返回队首
  this.head = function () {
    return LinkList.head();
  };
  // 返回队尾
  this.tail = function () {
    return LinkList.tail();
  };
  // 返回队列的大小
  this.size = function () {
    return LinkList.length();
  };

  // 清空队列
  this.clear = function () {
    LinkList.clear();
  };
  // 判断队列是否为空
  this.isEmpty = function () {
    return LinkList.isEmpty();
  };
}
