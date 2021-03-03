// 方法一：递归实现
function findRoute(root, target) {
  var paths = [];
  var path = [];
  dfs(root, paths, path, target);
  return paths;
}
function dfs(root, paths, path, target) {
  if (!root) return;
  // 由于path是一个引用数据类型，而对于每一个分支都应该有一个独立的path，为了不影响其他分支，需要深拷贝一份path
  path = JSON.parse(JSON.stringify(path));
  path.push(root.value);
  if (!root.left && !root.right && root.value == target) {
    paths.push(path);
    return;
  }
  dfs(root.left, paths, path, target - root.value);
  dfs(root.right, paths, path, target - root.value);
}

// 方法二：使用非递归的形式：原理是一样的，就是将原本的先序遍历换为了使用栈来实现的非递归遍历
// 核心思想就是在原来的栈中不单单存储节点，还需存储每一个节点的路径
function findRoute2(root, target) {
  var paths = [];
  // var allRootPaths = []; //扩展：获取所有到叶节点的路径
  var path = [root.value];
  var stack = [];
  stack.push([root, path, target]);
  while (stack.length) {
    var [node, path2, target2] = stack.pop();
    // console.log(`---${node.value}-----${path2}----${target2}--`);
    if (!node.left && !node.right && node.value == target2) {
      paths.push(path2);
    }
    //扩展：获取所有到叶节点的路径
    // if (!node.left && !node.right) {
    //   allRootPaths.push(path2);
    // }
    if (node.right) {
      var newPath2 = JSON.parse(JSON.stringify(path2));
      newPath2.push(node.right.value);
      stack.push([node.right, newPath2, target2 - node.value]);
    }
    if (node.left) {
      var newPath = JSON.parse(JSON.stringify(path2));
      newPath.push(node.left.value);
      stack.push([node.left, newPath, target2 - node.value]);
    }
  }
  // console.log("扩展：所有到叶节点的路径：", allRootPaths);
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

// console.log(findRoute(root, 26));
console.log(findRoute2(root, 26));
