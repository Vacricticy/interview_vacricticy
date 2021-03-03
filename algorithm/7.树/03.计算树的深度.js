// 深度优先算法dfs
function getDeepByDFS(node) {
  if (!node) return 0;
  var leftDeep = getDeepByDFS(node.left) + 1;
  var rightDeep = getDeepByDFS(node.right) + 1;
  return Math.max(leftDeep, rightDeep);
}

// 广度优先算法bfs
function getDeepByBFS(root) {
  if (!root) return 0;
  var queue = [];
  queue.push(root);
  var node = root;
  var count = 0;
  while (queue.length) {
    for (var i = 0; i < queue.length; i++) {
      node = queue.shift();
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    count++;
  }
  return count;
}
var root = {
  value: 3,
  left: {
    value: 9,
    left: null,
    right: null,
  },
  right: {
    value: 20,
    left: {
      value: 15,
      left: null,
      right: null,
    },
    right: {
      value: 7,
      left: null,
      right: null,
    },
  },
};

var rs = getDeepByDFS(root);
console.log(rs);
var rs2 = getDeepByBFS(root);
console.log(rs2);
