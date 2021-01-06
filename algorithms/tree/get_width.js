/**
 * 输出指定层的节点个数
 */

var BinaryTree = require("./binaryTree");
var Queue = require("../queue/myQueue");

var bt = new BinaryTree.BinaryTree();
bt.init_tree("A(B(D,E(G,)),C(,F))#");

var root = bt.get_root();

// 获得宽度
function get_width(node, n) {
  var queue = new Queue.Queue(); // 队列先进先出
  queue.enqueue(node);
  queue.enqueue(0);
  var width = 1; // 每层的结点数
  var level = 0; // 每层

  while (!queue.isEmpty()) {
    var item = queue.dequeue(); // 出对列A-0
    if (item === 0) {
      // 表示当前层已出完队列
      level++;
      if (level === n) return width;
      width = queue.size();
      if (queue.isEmpty()) {
        break;
      } else {
        queue.enqueue(0); // 继续以0作为层标记
      }
    }

    // 把左子树放入队列
    if (item.leftChild) queue.enqueue(item.leftChild);
    if (item.rightChild) queue.enqueue(item.rightChild);
  }
}

// test
console.log(get_width(root, 1));
console.log(get_width(root, 2));
console.log(get_width(root, 3));
console.log(get_width(root, 4));
