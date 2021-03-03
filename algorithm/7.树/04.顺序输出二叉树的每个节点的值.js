// 即为广度优先遍历
function bfs(node) {
  if (!node) return;
  var rs = "";
  var bfs = []; //创建一个队列
  bfs.push(node);
  while (bfs.length) {
    for (var i = 0; i < bfs.length; i++) {
      if (bfs[i].left) {
        bfs.push(bfs[i].left);
      }
      if (bfs[i].right) {
        bfs.push(bfs[i].right);
      }
      rs += bfs.shift().value;
    }
  }
  return rs;
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
var rs = bfs(root);
console.log(rs); //3920157
