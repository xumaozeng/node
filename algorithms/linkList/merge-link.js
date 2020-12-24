/**
 * 合并两个有序链表，要求原有的链表不要修改
 */

var Node = function (data) {
  this.data = data;
  this.next = null;
};

var node1 = new Node(1);
var node2 = new Node(4);
var node3 = new Node(9);
var node4 = new Node(2);
var node5 = new Node(5);
var node6 = new Node(6);
var node7 = new Node(10);

node1.next = node2;
node2.next = node3;

node4.next = node5;
node5.next = node6;
node6.next = node7;

function merge_link(head1, head2) {
  if (!head1) return head2;
  if (!head2) return head1;
  var merge_head = null; // 合并后的头结点
  var merge_tail = null; // 合并后的尾结点
  // 设置两个游标节点
  var cur1 = head1;
  var cur2 = head2;

  while (cur1 && cur2) {
    // 遍历两个都存在的链表
    // 找到最小值的节点
    var min_node = null;
    if (cur1.data < cur2.data) {
      min_node = cur1;
      cur1 = cur1.next;
    } else {
      min_node = cur2;
      cur2 = cur2.next;
    }
    // 将最小值的节点加入合并
    if (!merge_head) {
      merge_head = min_node;
      merge_tail = merge_head;
    } else {
      merge_tail.next = min_node;
      merge_tail = min_node;
    }
  }

  // 确定是否还有未合并完的链表
  var rest_node = null;
  if (cur1) rest_node = cur1;
  if (cur2) rest_node = cur2;
  // 把rest_link加入到合并后
  while (rest_node) {
    merge_tail.next = rest_node;
    merge_tail = rest_node;
    rest_node = rest_node.next;
  }
  return merge_head;
}

// print

print(merge_link(node1, node4));

function print(node) {
  var curr_node = node;
  while (curr_node) {
    console.log(curr_node.data);
    curr_node = curr_node.next;
  }
}
