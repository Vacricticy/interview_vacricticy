var app = document.querySelector("#app");
var obj = {};
function getElementCount(root) {
  if (!root) return 0;
  // 直接获取子元素
  var childs = root.childNodes;
  if (childs) {
    for (var i = 0; i < childs.length; i++) {
      var childName = childs[i].nodeName.toLowerCase();
      // 判断哈希表中该元素是否存在
      if (!obj[childName]) {
        //   由于这里实际数据已经修改在了obj中，所以不需要再通过返回值来一层一层的叠加
        obj[childName] = 1;
      } else {
        obj[childName]++;
      }
      var child = childs[i];
      // 如果有子孩子，则将自己传递进去进行递归
      if (child.childNodes) {
        getElementCount(child);
      }
    }
  }
  return obj;
}
console.log(getElementCount(app));
