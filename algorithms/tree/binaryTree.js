/**
 * 二叉树
 */

var Stack = require("../stack/myStack");

function BinTreeNode(data) {
  this.data = data; // 数据
  this.leftChild = null; // 左孩子
  this.rightChild = null; // 右孩子
  this.parentNode = null; // 父节点
}

function BinaryTree() {
  var root = null; // 根节点
  // 采用广义表表示法建立二叉树方法
  this.init_tree = function (string) {
    var stack = new Stack.Stack(); // 定一个栈存放节点
    var k = 0; // k=1表示遇到左节点，k=2表示遇到右节点
    var new_node = null; // 当前节点
    // 遍历字符串
    for (var i = 0; i < string.length; i++) {
      var item = string[i];
      if (item === "#") {
        break; // break在循环体内结束整个循环过程
      }
      if (item === "(") {
        k = 1; // 遍历左孩子
        stack.push(new_node); // 当前父节点入栈
      } else if (item === ",") {
        k = 2; // 遍历右孩子
      } else if (item === ")") {
        stack.pop(); // 表示一个子树形成，根节点出栈
      } else {
        // 遇到数据
        new_node = new BinTreeNode(item); // 实例化节点
        if (!root) {
          // 根为空
          root = new_node;
        } else if (k === 1) {
          // 说明是左孩子
          var top_node = stack.top();
          top_node.leftChild = new_node;
          new_node.parentNode = top_node;
        } else if (k === 2) {
          // 说明右孩子
          var top_node = stack.top();
          top_node.rightChild = new_node;
          new_node.parentNode = top_node;
        }
      }
    }
  };

  // 获得根节点
  this.get_root = function () {
    return root;
  };

  // 中序遍历-左根右
  this.in_Order = function (node) {
    if (!node) return;
    this.in_Order(node.leftChild);
    console.log(node.data);
    this.in_Order(node.rightChild);
  };

  // 先序遍历-根左右
  this.pre_Order = function (node) {
    if (!node) return;
    console.log(node.data);
    this.pre_Order(node.leftChild);
    this.pre_Order(node.rightChild);
  };

  // 后续遍历-左右根
  this.post_Order = function (node) {
    if (!node) return;
    this.post_Order(node.leftChild);
    this.post_Order(node.rightChild);
    console.log(node.data);
  };

  // 返回节点的数目
  this.size = function (node) {
    // 左子树和右子树加1
    // 递归终止条件
    if (!node) return 0;
    var left_node_count = this.size(node.leftChild);
    var right_node_count = this.size(node.rightChild);
    return left_node_count + right_node_count + 1;
  };

  // 返回树的高度
  this.height = function (node) {
    // 左右子树的最大高度加1
    if (!node) return 0;
    var left_height = this.height(node.leftChild);
    var right_height = this.height(node.rightChild);
    if (left_height > right_height) {
      return left_height + 1;
    } else {
      return right_height + 1;
    }
  };

  // 查找节点
  this.find = function (node, data) {
    if (!node) return null;

    // 递归终止条件
    if (node.data === data) {
      return node;
    }
    var left_node = this.find(node.leftChild, data);
    if (left_node) {
      // 判断左子树中有查找的节点
      return left_node;
    }
    return this.find(node.rightChild, data);
  };
}

exports.BinaryTree = BinaryTree;

/* // test
var string = "A(B(D,E(G,)),C(,F))#";
var binaryTree = new BinaryTree();
binaryTree.init_tree(string);
var root = binaryTree.get_root();
// binaryTree.post_Order(root);
console.log(binaryTree.find(root, "C")); */
