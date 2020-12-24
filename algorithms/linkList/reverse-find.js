/**
 * 查找单链表中的倒数第K个节点(K>0)
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

function reverse_find(head, k) {
  // 快慢两个游标
  var fast = head;
  var slow = head;
  var step = k;

  // 先让快游标先走k步
  while (step > 0 && fast) {
    fast = fast.next;
    step--;
  }
  // 当循环结束时，step不等于0代表链表长度小于k
  if (step !== 0) {
    return null;
  } else {
    // 快慢指针一起走
    while (fast) {
      fast = fast.next;
      slow = slow.next;
    }
  }
  // 返回慢指针代表倒数第k个节点
  return slow.data;
}

// test
console.log(reverse_find(node1, 2));
