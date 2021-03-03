/* 
  给定二叉树：[3,9,20,null,null,15,7]，
  返回：
  [ 
    [3], 
    [9,20], 
    [15,7] 
  ] 
*/

/* 
广度优先算法：内部添加一个循环来控制下一层元素的添加，这样可以得到下一层元素的个数
 */
function traverse(root) {
  if (!root) return;
  var queue = [];
  queue.push(root);
  var node = root;
  var rs = [];
  //为了让每一层打印时分开，在通过while循环执行的时候就不能单单的通过while来实现了，可以在一轮添加完后，判断其队列的长度，然后将这个长度作为while内部的循环来处理，也就是将while的工作一部分交给for循环来处理。
  //也就是现在while处理外层的循环，for处理每一层内部的遍历
  while (queue.length) {
    rs.push([]); //每一层进来的时候都需要添加一个空的数组元素，便于后续添加该层的每一个元素
    var leng = queue.length;
    for (var i = 0; i < leng; i++) {
      node = queue.shift();
      rs[rs.length - 1].push(node.value); //将该层的数据添加在数组的最后一个元素中
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
  }
  console.log(rs);
}

/* 
  深度优先遍历：在每一次递归调用的时候，都传入自己所在的层数
*/
function traverse(root) {
  if (!root) return;
  var rs = [];

  function dfs(node, floor) {
    if (!node) return;
    // 如果当前层不存在数据，则为其创建一个空数组
    if (!rs[floor]) {
      rs[floor] = [];
    }
    rs[floor].push(node.value);
    //每次递归都将自己的层数传递进去
    dfs(node.left, floor + 1);
    dfs(node.right, floor + 1);
  }
  dfs(root, 0);
  console.log(rs);
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
var rs = traverse(root);
