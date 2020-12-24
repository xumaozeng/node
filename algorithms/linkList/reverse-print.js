/**
 * 从到到尾打印节点，不许翻转链表
 */

// 上下文环境
var Node = function (data) {
  this.data = data;
  this.next = null;
};

var node1 = new Node(1);
var node2 = new Node(2);
var node3 = new Node(3);
var node4 = new Node(4);
var node5 = new Node(5);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

// 利用递归进行甩锅
function reverse_print(head) {
  // 递归的终止条件
  if (!head) {
    return;
  } else {
    // 交给下一个节点去处理
    reverse_print(head.next); // 甩锅
    console.log(head.data); // 后面的都打印了，该自己了
  }
}

// test
reverse_print(node1);
