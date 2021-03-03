// 将二叉树序列化为"[1,2,3,null,null,4,5]"的形式，然后再将其反序列化为二叉树

function serialize(root) {
  // 总体思路还是按层序遍历来实现
  if (!root) return [];
  var queue = [];
  queue.push(root);
  var node = root;
  var res = [];
  while (queue.length) {
    node = queue.shift();
    // 此时不需要判断是否存在左右子节点，只要该节点不为空，就需要将左右子节点入队，不管它是不是null
    if (node) {
      res.push(node.value);
      queue.push(node.left);
      queue.push(node.right);
    } else {
      // 如果该节点为null，直接添加在结果中，后续就不再为队列添加节点了，下一步直接处理队列的下一个节点
      res.push(null);
    }
  }
  return "[" + res.join(",") + "]";
}
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function deserialize(data) {
  var arr = data.slice(1, -1).split(",");
  // 依然是借助列队来实现，直接在数组中模拟层序遍历的操作，相比于原来在二叉树中是一样的
  var queue = [];
  //创建根节点
  var root = new Node(arr[0]);
  queue.push(root);
  var node = root;
  var i = 0;
  while (queue.length) {
    node = queue.shift();
    var left = null;
    var right = null;
    // i+1和i+2的位置就是该元素的左右子节点
    // 如果子节点的值不为空，则新创建一个节点，并将该节点入队，用于下一次遍历该节点的子节点
    if (arr[i + 1]) {
      left = new Node(arr[i + 1]);
      queue.push(left);
    }
    if (arr[i + 2]) {
      right = new Node(arr[i + 2]);
      queue.push(right);
    }
    // 最后的时候再确定为该节点添加子节点
    node.left = left;
    node.right = right;
    // 最后将指针向后移动两位
    i = i + 2;
  }
  return root;
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
console.log(serialize(root));
var str = serialize(root);
deserialize(str);
console.log(deserialize(str));
