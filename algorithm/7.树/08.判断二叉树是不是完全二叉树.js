// 利用广度优先遍历判断在整个树遍历结束之前是否有遇到空元素
function isAbsoluteTree(root) {
  var queue = [];
  queue.push(root);
  var node = root;
  var flag = 0;
  while (queue.length) {
    node = queue.shift();
    //   如果没有左节点，那肯定没有右节点
    if (!node.left && node.right) return false;
    // 如果遇到一个节点没有子节点，则后面的元素也不能有子节点
    if (!node.left && !node.right) flag = 1;
    if (node.left) {
      queue.push(node.left);
      //   判断前面是不是出现过没有子节点的节点;
      if (flag == 1) return false;
    }
    if (node.right) {
      queue.push(node.right);
      if (flag == 1) return false;
    }
  }
  return true;
}
var root = {
  value: 1,

  left: {
    value: 3,
    left: {
      value: 5,
      left: null,
      right: null,
    },

    right: {
      value: 4,
      left: null,
      right: null,
    },
  },
  right: {
    value: 2,
    left: null,
    right: null,
  },
};
console.log(isAbsoluteTree(root));
