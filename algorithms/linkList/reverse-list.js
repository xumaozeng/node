/**
 * 翻转链表
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

function print(node) {
  var curr_node = node;
  while (curr_node) {
    console.log(curr_node.data);
    curr_node = curr_node.next;
  }
}

// 迭代翻转
function reverse_iter(head) {
  if (!head) return null;
  var pre_node = null;
  var curr_node = head;
  while (curr_node) {
    var next_node = curr_node.next; // 下一个节点
    curr_node.next = pre_node; // 当前节点翻转
    pre_node = curr_node; // pre后移
    curr_node = next_node; // curr后移
  }
  return pre_node;
}

// 递归翻转-让别人去做自己做不到的事情
function reverse_digui(head) {
  if (!head) return null;
  // 遇到尾结点，直接返回
  if (!head.next) return head;
  // 从下一个节点开始进行翻转
  var new_node = reverse_digui(head.next);
  head.next.next = head; // 把当前接待你连接到新链表上
  head.next = null;
  return new_node;
}

// print(reverse_iter(node1));
print(reverse_digui(node1));
