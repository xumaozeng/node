/**
 * 非递归方式遍历二叉树，使用while循环加栈数据结构
 */

var BinaryTree = require("./binaryTree");
var Stack = require("../stack/myStack");

var bt = new BinaryTree.BinaryTree();
bt.init_tree("1(2(4,5),3(6,7))#");

var root = bt.get_root();

function pre_order(node) {
  var stack = new Stack.Stack(); // 使用栈数据结构
  var curr_node = node;
  while (curr_node) {
    console.log(curr_node.data); // 打印当前节点的值
    if (curr_node.rightChild) {
      stack.push(curr_node.rightChild); // 右孩子存在，先放入栈中
    }
    if (curr_node.leftChild) {
      curr_node = curr_node.leftChild; // 如果左孩子存在，当前节点指向左孩子
    } else {
      curr_node = stack.pop(); // 不存在则从栈中弹出元素遍历右孩子
    }
  }
  /* while (curr_node || !stack.isEmpty()) {
    // 先处理当前节点，然后左子树
    while (curr_node) {
      console.log(curr_node.data);
      stack.push(curr_node);
      curr_node = curr_node.leftChild;
    }
    var pop_node = stack.pop();
    curr_node = pop_node.rightChild;
  } */
}

// test
pre_order(root);
