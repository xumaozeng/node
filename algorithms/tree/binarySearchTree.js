var TreeNode = function (data) {
  this.data = data;
  this.leftChild = null;
  this.rightChild = null;
  this.parent = null;
};

function BinarySearchTree() {
  var root = null;

  // 插入方法
  var insert_data = function (node, data) {
    if (!node) {
      node = new TreeNode(data);
      return true;
    }

    if (data < node.data) {
      // 插入左子树
      if (node.leftChild) {
        return insert_data(node.leftChild, data);
      } else {
        // 不存在则标记node的左孩子为new_node
        var new_node = new TreeNode(data);
        node.leftChild = new_node;
        new_node.parent = node;
      }
    } else if (data > node.data) {
      // 插入右子树
      if (node.rightChild) {
        return insert_data(node.rightChild, data);
      } else {
        var new_node = new TreeNode(data);
        node.rightChild = new_node;
        new_node.parent = node;
      }
    } else {
      return false;
    }
  };

  // 对外暴露方法
  this.insert = function (data) {
    return insert_data(root, data);
  };
}
