/**
 * 寻找两个节点的公共祖先
 */

var BinaryTree = require("./binaryTree");
var bt = new BinaryTree.BinaryTree();
bt.init_tree("A(B(D,E(G,)),C(,F))#");

var root = bt.get_root();

var node1 = bt.find(root, "D");
var node2 = bt.find(root, "G");

/* console.log(node1.data);
console.log(node2.data); */

// 寻找最近公共祖先
function lowest_common_ancestor(root, node1, node2) {
  if (!root || root === node1 || root === node2) {
    return root;
  }
  var left = lowest_common_ancestor(root.leftChild, node1, node2);
  var right = lowest_common_ancestor(root.rightChild, node1, node2);
  if (left && right) {
    return root;
  }
  if (left) {
    return left;
  }
  return right;
}

var ancestor = lowest_common_ancestor(root, node1, node2);
console.log(ancestor.data);
