/**
 * 链表
 */

function LinkList() {
  var Node = function (data) {
    this.data = data;
    this.next = null;
  };

  var length = 0; // 长度
  var head = null; // 头结点
  var tail = null; // 尾结点

  // 在栈的尾部添加元素
  this.append = function (data) {
    var new_node = new Node(data);
    // 考虑边界情况
    if (!head) {
      head = new_node;
      tail = new_node;
    } else {
      tail.next = new_node;
      tail = new_node;
    }
    length++;
    return true;
  };

  // 打印节点
  this.print = function () {
    var curr_node = head;
    while (curr_node) {
      console.log(curr_node.data);
      curr_node = curr_node.next;
    }
  };
}

// test
var linklist = new LinkList();
linklist.append(1);
linklist.append(2);
linklist.append(8);

linklist.print();
