/**
 * 链表
 */

function LinkList() {
  // 定义节点
  var Node = function (data) {
    this.data = data;
    this.next = null;
  };

  var length = 0; // 长度
  var head = null; // 头结点
  var tail = null; // 尾结点

  // 在栈的尾部添加元素
  this.append = function (data) {
    // 创建节点
    var new_node = new Node(data);
    if (!head) {
      // 链表为空，头尾都指向这个节点
      head = new_node;
      tail = new_node;
    } else {
      // 链表不为空，从尾部添加节点
      tail.next = new_node;
      tail = new_node;
    }
    length++;
    return true;
  };

  // 输出链表
  this.print = function () {
    var curr_node = head; // 指向头结点
    var str_link = ""; // 输出字符串连接
    while (curr_node) {
      // 遍历链表
      str_link += curr_node.data.toString() + "->";
      curr_node = curr_node.next;
    }
    str_link += "null"; // 边界条件curr_node=null
    console.log(str_link);
    console.log("链表长度为", length.toString());
  };

  // 获取指定位置的节点，找到索引为index-1
  var get_node = function (index) {
    // 不合法情况
    if (index < 0 || index >= length) return null;
    var node_index = index;
    var curr_node = head;
    while (node_index-- > 0) {
      // 遍历index次，找到其位置的节点
      curr_node = curr_node.next;
    }
    return curr_node;
  };

  // 在指定位置插入新的元素
  this.insert = function (index, data) {
    // 不合法情况
    if (index < 0 || index > length) {
      return false;
    } else if (index === length) {
      // index指向尾部，直接插入
      return this.append(data);
    } else {
      var new_node = new Node(data);
      if (index === 0) {
        // 在头结点插入
        new_node.next = head;
        head = new_node;
      } else {
        // 1<=index<length合法范围内
        // 要插入的位置是index-1，则要找到前一个位置的节点
        var pre_node = get_node(index - 1);
        new_node.next = pre_node.next;
        pre_node.next = new_node;
      }
      length++;
      return true;
    }
  };

  // 删除指定位置节点
  this.remove = function (index) {
    // 不合法情况
    if (index < 0 || index >= length) {
      return null;
    } else {
      var del_node = null; // 删除节点
      if (index === 0) {
        // 删除头结点
        del_node = head;
        head = head.next;
        // 如果head=null说明之前链表只有一个节点
        if (!head) {
          tail = null;
        }
      } else {
        // 1<=index<length
        // 要删除index-1节点，则找到前一个节点的位置
        var pre_node = get_node(index - 1);
        del_node = pre_node.next;
        pre_node.next = pre_node.next.next;
        if (!del_node.next) {
          // 如果删除的是尾结点，则tail指定pre_node
          tail = pre_node;
        }
      }
      length--;
      del_node.next = null;
      return del_node.data;
    }
  };

  // 返回指定节点的值
  this.get = function (index) {
    if (index < 0 || index >= length) {
      return null;
    }
    var node = get_node(index);
    if (node) return node.data;
    return null;
  };

  // 返回指定元素的索引，没有则返回-1
  this.indexOf = function (data) {
    var index = -1;
    var curr_node = head;
    while (curr_node) {
      index++;
      if (curr_node.data === data) {
        return index;
      }
      curr_node = curr_node.next;
    }
    return -1;
  };

  // 返回链表的大小
  this.length = function () {
    return length;
  };

  // 删除尾结点
  this.remove_tail = function () {
    return this.remove(length - 1);
  };

  // 删除头结点
  this.remove_head = function () {
    return this.remove(0);
  };

  // 返回链表头结点的值
  this.head = function () {
    return this.get(0);
  };

  // 返回链表尾结点的值
  this.tail = function () {
    return this.get(length - 1);
  };

  // 判断链表是否为空
  this.isEmpty = function () {
    return length === 0;
  };

  // 清空链表
  this.clear = function () {
    head = null;
    tail = null;
    length = 0;
  };
}

// test
var linklist = new LinkList();
linklist.append(1);
linklist.append(3);
linklist.append(2);
linklist.append(1);
linklist.insert(2, 5);
linklist.remove(3);

linklist.print();
console.log(linklist.get(3));

exports.LinkList = LinkList;
