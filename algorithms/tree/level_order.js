/**
 * 分层打印二叉树
 */

var BinaryTree = require("./binaryTree");
var Queue = require("../queue/myQueue");

var bt = new BinaryTree.BinaryTree();
bt.init_tree("A(B(D,E(G,)),C(,F))#");

var root = bt.get_root();

// 层次遍历
function level_order(node) {
  var queue = new Queue.Queue();
  var str_link = "";
  // 把当前节点放入队列中
  queue.enqueue(node);
  queue.enqueue(0); // 以0元素为每层的标记
  while (!queue.isEmpty()) {
    var item = queue.dequeue(); // 队列先出的元素
    if (item === 0) {
      // 为0代表这一层结束
      console.log(str_link);
      str_link = ""; // 打印每层清空
      if (queue.isEmpty()) {
        break; // 队列空时结束
      } else {
        queue.enqueue(0); // 继续以0为标记每层
        continue;
      }
    }

    str_link += item.data + "";

    // 把左子树放入队列
    if (item.leftChild) {
      queue.enqueue(item.leftChild);
    }
    // 把右子树放入队列
    if (item.rightChild) {
      queue.enqueue(item.rightChild);
    }
  }
}

level_order(root);
