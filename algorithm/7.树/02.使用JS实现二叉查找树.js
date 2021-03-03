function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function Tree() {
  var root = null;
  // 增
  this.insertNode = function (node, newNode) {
    if (newNode.value > node.value) {
      // 比较之后判断右子树是否为空
      if (!node.right) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    } else if (newNode.value < node.value) {
      // 比较之后判断左子树是否为空
      if (!node.left) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    }
  };
  this.insert = function (value) {
    var newNode = new Node(value);
    if (!root) {
      root = newNode;
    } else {
      this.insertNode(root, newNode);
    }
  };
  // 查
  this.findNode = function (node, value) {
    if (!node) return false;
    if (value > node.value) {
      return this.findNode(node.right, value);
    } else if (value < node.value) {
      return this.findNode(node.left, value);
    } else if (value == node.value) {
      return true;
    }
  };
  this.find = function (value) {
    return this.findNode(root, value);
  };
  //删
  // 获取最小的节点
  this.findMin = function (node) {
    if (!node) return;
    while (node.left) {
      node = node.left;
    }
    return node;
  };
  this.removeNode = function (node, value) {
    if (!node) return null;
    if (value > node.value) {
      node.right = this.removeNode(node.value, value);
      return node;
    } else if (value < node.value) {
      node.left = this.removeNode(node.left, value);
      return node;
    } else if (value == node.value) {
      if (!node.left && !node.right) {
        node = null;
        return node;
      }
      if (node.right && !node.left) {
        node = node.right;
        return node;
      }
      if (!node.right && node.left) {
        node = node.left;
        return node;
      }
      if (node.left && node.right) {
        // 欲删除节点的左右子树都不为空，则需要将右子树中最小的值替换掉所删除节点的值，然后再删除该节点
        var min = this.findMin(node.right);
        node.value = min.value;
        node.right = this.removeNode(node.right, min.value);
        return node;
      }
    }
  };
  this.remove = function (value) {
    this.removeNode(root, value);
  };
  // 获取最大的节点
  this.findMax = function (node) {
    if (!node) return;
    while (node.right) {
      node = node.right;
    }
    return node;
  };
  // 遍历节点
  this.traverse = function (node) {
    if (!node) return;
    // console.log(node.value);
    this.traverse(node.left);
    // console.log(node.value);
    this.traverse(node.right);
    console.log(node.value);
  };
  // 获取根节点
  this.getRoot = function () {
    return root;
  };
}
var tree = new Tree();
tree.insert(11);
tree.insert(8);
tree.insert(12);
tree.insert(7);
tree.insert(9);
tree.insert(10);
console.log(tree.getRoot());
console.log(tree.find(2));
console.log(tree.find(8));
tree.remove(8);
console.log(tree.getRoot());
console.log("最小的节点：");
console.log(tree.findMin(tree.getRoot()));
console.log("最大的节点：");
console.log(tree.findMax(tree.getRoot()));
tree.traverse(tree.getRoot());
