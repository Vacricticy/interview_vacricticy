function lowestCommonAncestor(root, p, q) {
  // 走到底或者遇到了p和q就立即返回
  if (!root || root == p || root == q) {
    return root;
  }
  var leftNode = lowestCommonAncestor(root.left, p, q);
  var rightNode = lowestCommonAncestor(root.right, p, q);
  // 通过后续遍历将左右子树的信息带回到上一级，即遇到节点p或q就将其从底至顶回溯
  // 左边没有，那肯定在右边，将右边的结果返回到上一级
  if (!leftNode) {
    return rightNode;
  }
  // 右边没有，肯定在左边，将左边的结果返回到上一级
  if (!rightNode) {
    return leftNode;
  }
  // 都有，肯定就是该节点，将该节点返回到上一级
  return root;
}
