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
        // 创建节点并插入
        var new_node = new TreeNode(data);
        node.leftChild = new_node;
        new_node.parent = node;
        return true;
      }
    } else if (data > node.data) {
      // 插入右子树
      if (node.rightChild) {
        return insert_data(node.rightChild, data);
      } else {
        // 创建节点并插入
        var new_node = new TreeNode(data);
        node.rightChild = new_node;
        new_node.parent = node;
        return true;
      }
    } else {
      // 如果相等，说明已经存在，不能再插入
      return false;
    }
  };

  // 对外暴露方法
  this.insert = function (data) {
    return insert_data(root, data);
  };

  // 搜索方法
  var search_data = function (node, data) {
    if (!node) return null;
    if (data === node.data) {
      return node;
    } else if (data < node.data) {
      return search_data(node.leftChild, data);
    } else {
      return search_data(node.rightChild, data);
    }
  };

  this.search = function (data) {
    return search_data(root, data);
  };

  // 公共方法
  var link_parent = function (parent, node, next_node) {
    // 连接父节点与子节点
    if (!parent) {
      root = next_node;
      root.parent = null;
    } else {
      if (parent.leftChild && parent.leftChild.data === node.data) {
        parent.leftChild = next_node;
      } else {
        parent.rightChild = next_node;
      }
    }
  };

  // 删除方法
  var remove_data = function (node, data) {
    if (!node) return null;

    if (data < node.data) {
      // 去左子树里删除
      return remove_data(node.leftChild, data);
    } else if (data > node.data) {
      // 去右子树里删除
      return remove_data(node.rightChild, data);
    } else {
      if (node.leftChild && node.rightChild) {
        // 左右两个子树都存在，那么在右子树中找到中序遍历下的第一个节点
        // 放到删除的位置，再在右子树中删除那个节点
        var tmp = node.rightChild;
        while (tmp.leftChild) {
          tmp = tmp.leftChild;
        }
        // 被删除节点的值等于中序遍历下的第一个节点的值
        node.data = tmp.data;
        // 去右子树里删除中序下的第一个节点
        return remove_data(node.rightChild, tmp.data);
      } else {
        var parent = node.parent; // 找到父节点
        if (!node.leftChild) {
          // 没有左孩子，有右孩子
          link_parent(parent, node, node.rightChild);
        } else {
          link_parent(parent, node, node.leftChild);
        }
        return true;
      }
    }
  };

  // 对外暴露方法
  this.remove = function (data) {
    return remove_data(root, data);
  };
}
