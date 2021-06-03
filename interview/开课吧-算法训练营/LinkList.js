/**
 * 链表结构
 * 增删改查
 */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  append(val) {
    // 两种情况： 1.head为空 2.head不为空
    let node = new Node(val);
    let cur_node;
    if (this.head === null) {
      this.head = node;
    } else {
      cur_node = this.head;
      while (cur_node.next) {
        // 遍历直到next结点为空
        cur_node = cur_node.next;
      }
      cur_node.next = node;
    }
  }

  removeAt(index) {
    let prev_node;
    let cur_node = this.head;
    let i = 0;
    if (index === 0) {
      // 删除头节点
      this.head = cur_node.next;
    } else {
      // 遍历找到第index个节点
      while (i < index) {
        prev_node = cur_node;
        cur_node = cur_node.next;
        i++;
      }
      prev_node.next = cur_node.next;
      cur_node.next = null;
    }
    return cur_node;
  }

  print() {
    let cur_node = this.head;
    const result = [];
    while (cur_node) {
      result.push(cur_node.val);
      cur_node = cur_node.next;
    }
    console.log(result.join("=>"));
    return result;
  }
}

// test
const linkList = new LinkList();
linkList.append("1");
linkList.append("4");
linkList.append("2");
linkList.append("5");
linkList.print();
linkList.removeAt(1);
linkList.print();
