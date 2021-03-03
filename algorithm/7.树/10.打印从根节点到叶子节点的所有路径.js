// 方法一：dfs递归
function dfs(root, paths, path) {
  if (!root) return;
  var newPath = JSON.parse(JSON.stringify(path));
  newPath.push(root.value);
  if (!root.left && !root.right) {
    paths.push(newPath);
  }
  // 将paths递归进去，满足条件的path就添加进去
  dfs(root.left, paths, newPath);
  dfs(root.right, paths, newPath);
}
function getAllRootRoute(root) {
  var paths = [];
  var path = [];
  dfs(root, paths, path);
  return paths;
}

// 方法二：dfs非递归实现
function dfs2(root) {
  var paths = [];
  var path = [root.value];
  var stack = [];
  // stack中需要存储数组形式的数据，用于将每一个节点当前所处的路径存储起来
  stack.push([root, path]);
  while (stack.length) {
    var [node, path2] = stack.pop();
    if (!node.left && !node.right) {
      paths.push(path2);
    }
    if (node.right) {
      // 在向stack中插入该元素之前，先要将该元素添加在原来的路径中，最终将新的路径一起添加在stack中
      var newPath = JSON.parse(JSON.stringify(path2));
      newPath.push(node.right.value);
      stack.push([node.right, newPath]);
    }
    if (node.left) {
      var newPath2 = JSON.parse(JSON.stringify(path2));
      newPath2.push(node.left.value);
      stack.push([node.left, newPath2]);
    }
  }
  return paths;
}

var root = {
  value: 5,
  left: {
    value: 4,
    left: {
      value: 11,
      left: {
        value: 7,
        left: null,
        right: null,
      },
      right: {
        value: 2,
        left: null,
        right: null,
      },
    },
  },
  right: {
    value: 8,
    left: {
      value: 13,
      left: null,
      right: null,
    },
    right: {
      value: 4,
      left: {
        value: 5,
        left: null,
        right: null,
      },
      right: {
        value: 1,
        left: null,
        right: null,
      },
    },
  },
};
console.log(getAllRootRoute(root));
