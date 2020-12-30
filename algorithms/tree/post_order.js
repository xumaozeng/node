/**
 * 非递归后序遍历方式
 */

var BinaryTree = require("./binaryTree");
var Stack = require("../stack/myStack");

var bt = new BinaryTree.BinaryTree();
bt.init_tree("A(B(D,E(G,)),C(,F))#");

var root = bt.get_root();

function post_order1(node) {
  var stack = new Stack.Stack();
  var curr_node = node;
  var last = null; // 表示上一个节点
  while (curr_node || !stack.isEmpty()) {
    // 先遍历左子树
    while (curr_node) {
      stack.push(curr_node);
      curr_node = curr_node.leftChild;
    }
    // 在遍历右子树
    curr_node = stack.top(); // 栈顶元素是当前节点
    if (!curr_node.rightChild || curr_node.rightChild === last) {
      // 右子树为空或者访问过出栈
      curr_node = stack.pop();
      console.log(curr_node.data);
      last = curr_node;
      curr_node = null;
    } else {
      // 右子树存在且当前节点没有被访问过
      curr_node = curr_node.rightChild;
    }
  }
}

var Tag = function (node, state) {
  this.node = node;
  this.state = state; // 0表示左边遍历结束，1表示右边遍历结束
};

function post_order2(node) {
  var stack = new Stack.Stack();
  var curr_node = node;
  while (curr_node || !stack.isEmpty()) {
    while (curr_node) {
      // 遍历左子树
      var tag = new Tag(curr_node, 0);
      stack.push(tag);
      curr_node = curr_node.leftChild;
    }
    var pop_node = stack.pop();
    if (pop_node.node.rightChild && pop_node.state === 0) {
      // 右子树存在且左子树遍历完
      pop_node.state = 1;
      stack.push(pop_node);
      curr_node = pop_node.node.rightChild;
    } else {
      console.log(pop_node.node.data);
    }
  }
}

// post_order1(root);
post_order2(root);
