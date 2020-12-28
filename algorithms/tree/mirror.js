/**
 * 求一颗树的镜像，如果每个节点的左右子树互换位置，
 * 那么就变成了这颗树的镜像
 */

var BinaryTree = require("./binaryTree");

var bt = new BinaryTree.BinaryTree();
bt.init_tree("A(B(D,E(G,)),C(,F))#");
var root = bt.get_root();

function mirror_1(node) {
  if (!node) return null;

  // 翻转
  var temp = node.leftChild;
  node.leftChild = node.rightChild;
  node.rightChild = temp;

  mirror_1(node.leftChild);
  mirror_1(node.rightChild);
}

function mirror_2(node) {
  if (!node) return null;

  // 甩锅
  var left_node = mirror_2(node.leftChild);
  var right_node = mirror_2(node.rightChild);
  // 根节点的左右孩子交换
  node.leftChild = right_node;
  node.rightChild = left_node;

  return node;
}

//test
mirror_2(root);
bt.in_Order(root);
