/**
 * 非递归方式实现中序遍历
 */

var BinaryTree = require("./binaryTree");
var Stack = require("../stack/myStack");

var bt = new BinaryTree.BinaryTree();
bt.init_tree("A(B(D,E(G,)),C(,F))#");

var root = bt.get_root();
function in_order(node) {
  var stack = new Stack.Stack();
  curr_node = node;
  while (curr_node || !stack.isEmpty()) {
    // 先处理左子树，当前节点怎么办-入栈，等左子树处理完了在出栈
    while (curr_node) {
      stack.push(curr_node);
      curr_node = curr_node.leftChild;
    }
    // 打印当前节点
    var pop_node = stack.pop();
    console.log(pop_node.data);
    curr_node = pop_node.rightChild; // 处理右子树
  }
}

// test
in_order(root);
