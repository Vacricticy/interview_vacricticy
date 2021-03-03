// 递归方法-包含根节点的情况：
var app = document.querySelector("#app");
function getElementCount(root) {
  if (!root) return 0;
  var count = 0;
  // 首先一进来就判断根节点的情况
  if (root.nodeName.toLowerCase() == "div") {
    count++;
  }
  if (root.childNodes) {
    var childs = root.childNodes;
    //   然后对子节点进行递归，返回的值为其包含子代的div元素的个数
    for (var i = 0; i < childs.length; i++) {
      count += getElementCount(childs[i]);
    }
  }
  // 最后返回当然的个数
  return count;
}
console.log(getElementCount(app));

// 递归方法-不包含根节点的情况：
var app = document.querySelector("#app");
function getElementCount(root) {
  if (!root) return 0;
  var childs = root.childNodes;
  var count = 0;
  // 直接获取子节点
  if (childs) {
    for (var i = 0; i < childs.length; i++) {
      var child = childs[i];
      // 判断子节点是否为目标元素
      if (child.nodeName.toLowerCase() == "div") {
        count++;
      }
      // 递归子节点的子节点
      if (child.childNodes) {
        count += getElementCount(child);
      }
    }
  }
  // 最终返回目标元素的个数
  return count;
}
console.log(getElementCount(app));

// 非递归的方式：利用广度优先遍历的方式，借助队列来实现
var app = document.querySelector("#app");
function getTargetCount(root, target) {
  if (!root) return 0;
  var queue = [];
  queue.push(root);
  var node = root;
  var count = 0;
  while (queue.length) {
    node = queue.shift();
    //   如果当前节点的nodeName等于目标值，则count++
    if (node.nodeName.toLowerCase() == target.toLowerCase()) {
      count++;
    }
    //   如果有子节点，继续入队，等待后续处理
    var childs = node.childNodes;
    for (var i = 0; i < childs.length; i++) {
      queue.push(childs[i]);
    }
  }
  return count;
}
console.log(getTargetCount(app, "div"));
console.log(getTargetCount(app, "input"));
