/**
 * 链表实现栈
 */
var myLinkList = require("./myLinkList");

function Stack() {
  var LinkList = new myLinkList.LinkList();
  // 入栈
  this.push = function (item) {
    LinkList.append(item);
  };

  // 出栈
  this.pop = function () {
    return LinkList.remove_tail();
  };

  // top
  this.top = function () {
    return LinkList.tail();
  };

  // 栈的大小
  this.size = function () {
    return LinkList.length();
  };

  // 判断栈是否为空
  this.isEmpty = function () {
    return LinkList.isEmpty();
  };

  // 清空栈
  this.clear = function () {
    LinkList.clear();
  };

  // 打印
  this.print = function () {
    LinkList.print();
  };
}

// test
var stack = new Stack();
stack.push(1);
stack.push(3);
stack.push(4);

stack.pop();

stack.print();
