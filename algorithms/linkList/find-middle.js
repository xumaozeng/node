/**
 * 查找单链表的中间节点
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

function find_middle(head) {
  // 创建两个指针，一个走一步，另一个走两步
  var fast = head;
  var slow = head;
  while (fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }
  // 返回慢指针
  return slow.data;
}

// test
console.log(find_middle(node1));
