/**
 * 实现双向链表
 * data,pre,next
 * 实现append,insert,remove三个方法
 */

function DoubleLinkList() {
  // 定义节点
  var Node = function (data) {
    this.data = data; // 数据
    this.pre = null; // 前驱指针
    this.next = null; // 后继指针
  };

  var length = 0; // 长度
  var head = null; // 头结点
  var tail = null; // 尾节点

  // 实现append方法
  this.append = function (data) {
    var new_node = new Node(data);
    if (!head) {
      // 头节点为空
      head = new_node;
      tail = new_node;
    } else {
      tail.next = new_node;
      new_node.pre = tail;
      tail = new_node;
    }
    length++;
    return true;
  };

  // 获得指定节点的位置
  var get_node = function (index) {
    // 不合法情况
    if (index < 0 || index >= length) return null;
    // 遍历链表，找到index位置处的节点
    var curr_node = head;
    var node_index = index;
    while (node_index-- > 0) {
      curr_node = curr_node.next;
    }
    return curr_node;
  };

  // 实现insert方法
  this.insert = function (index, data) {
    // 不合法情况
    if (index < 0 || index > length) {
      return false;
    } else if (index === length) {
      // 在尾结点插入，相当于append(data)
      this.append(data);
    } else {
      var new_node = new Node(data);
      if (index === 0) {
        // 在头结点插入
        new_node.next = head;
        head.pre = new_node;
        head = new_node;
      } else {
        // 1<=index<length
        // 先找到index-1位置节点
        var pre_node = get_node(index - 1);
        var next_node = pre_node.next;

        pre_node.next = new_node;
        new_node.pre = pre_node;
        new_node.next = next_node;
        next_node.pre = new_node;
      }
      length++;
      return true;
    }
  };

  // 实现remove方法
  this.remove = function (index) {
    // 不合法情况
    if (index < 0 || index >= length) {
      return null;
    } else {
      var del_node = null; // 要删除的节点
      if (index === 0) {
        // 头结点删除
        del_node = head;
        head = head.next;
        if (!head) {
          // head为null，则只有一个节点
          tail = head;
        } else {
          head.pre = null;
        }
      } else {
        // 1<=index<length
        var pre_node = get_node(index - 1); // 找到删除结点前一个节点
        del_node = pre_node.next; // 要删除的节点
        var next_node = del_node.next; // 下一个节点
        if (!next_node) {
          // 判断要删除的是否是尾结点
          pre_node.next = null;
          tail = pre_node;
        } else {
          pre_node.next = next_node;
          next_node.pre = pre_node;
        }
      }
      del_node.next = null;
      del_node.pre = null;
      length--;
      return del_node.data;
    }
  };

  // 实现print方法
  this.print = function () {
    // 遍历链表
    var curr_node = head;
    var str_link = "";
    while (curr_node) {
      str_link += curr_node.data.toString() + "->";
      curr_node = curr_node.next;
    }
    str_link += "null";
    console.log(str_link);
    console.log("长度为", length.toString());
  };
}

// test
var double_linklist = new DoubleLinkList();
double_linklist.append(1);
double_linklist.append(2);

double_linklist.print();
double_linklist.insert(0, 9);
double_linklist.insert(3, 10);

double_linklist.print();
double_linklist.remove(0);

double_linklist.print();
