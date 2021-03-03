/* 题目：
    根据前序/后序遍历的结果以及中序遍历的结果，构造出原来的二叉树

    思路：
      比如
          1
         / \
        2   3
       / \
      4   5
      
      前序： 1 2 4 5 3 
      中序： 4 2 5 1 3

     第一次：前序的第一个元素为1，从中序的结果可以划分为出根节点的左子树【4 2 5】，右子树【3】，由此结果可以继续迭代
*/
function buildTree(preorder, inorder) {
  if (preorder.length == 0 || inorder.length == 0) return null;
  // 获取先序数组中的第一个值
  var rootValue = preorder[0];
  var node = new TreeNode(rootValue);

  // 找到中序数组中对应值的索引
  var target = 0;
  for (var i = 0; i < inorder.length; i++) {
    if (rootValue == inorder[i]) {
      target = i;
      break;
    }
  }
  // 依据该值对中序数组划分，先序数组的划分根据中序数组划分的个数来划分
  var left = buildTree(preorder.slice(1, target + 1), inorder.slice(0, target));
  var right = buildTree(preorder.slice(target + 1), inorder.slice(target + 1));
  node.left = left;
  node.right = right;
  return node;
}
