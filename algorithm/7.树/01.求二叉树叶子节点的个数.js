var Tree = require("../../basis/es5_datastructure/14.----------基于js对象实现实现树数据结构");
var count = 0;
function getLeafCount(node) {
  if (!node) return;
  if (!node.left && !node.right) {
    count++;
  }
  getLeafCount(node.left);
  getLeafCount(node.right);
}

var tree = new Tree();
tree.insert(3);
tree.insert(5);
tree.insert(9);
tree.insert(2);
tree.insert(4);
tree.insert(10);
console.log(tree.getRoot());
var rs = getLeafCount(tree.getRoot());
console.log(count);
