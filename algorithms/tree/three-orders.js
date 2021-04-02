/**
 * 分别按照二叉树线序、中序和后序打印所有节点
 */

var BinaryTree = require("./binaryTree");
var Queue = require("../queue/myQueue");

var bt = new BinaryTree.BinaryTree();
bt.init_tree("A(B(D,E(G,)),C(,F))#");

var root = bt.get_root();


function threeOrders(root) {
    var paths = [];
    // 先序
    var preOrder = (root, path) => {
        if (!root) return;
        path.push(root.val)
        preOrder(root.left, path)
        preOrder(root.right, path)
    }

    // 中序
    var inOrder = (root, path) => {
        if (!root) return
        inOrder(root.left, path)
        path.push(root.val)
        inOrder(root.right, path)
    }
    // 后序
    var postOrder = (root, path) => {
        if (!root) return
        postOrder(root.left, path)
        postOrder(root.right, path)
        path.push(root.val)
    }

    var prePath = [], inPath = [], postPath = []
    preOrder(root, prePath)
    inOrder(root, inPath)
    postOrder(root, postPath)
    paths.push(prePath, inPath, postPath)

    return paths
}