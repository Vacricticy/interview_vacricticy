// 题目描述：https://leetcode-cn.com/problems/assign-cookies/
// 每个孩子的胃口 = [1,2,3], 饼干 = [1,1]
// 双指针法：
function fn(child, cookie) {
  // 先两个数组进行排序
  child = child.sort((a, b) => a - b);
  cookie = cookie.sort((a, b) => a - b);
  // 设置两个指针，指向正在处理的孩子和饼干
  var a = 0;
  var b = 0;
  var count = 0;
  while (a < child.length && b < cookie.length) {
    //   如果有饼干满足，则处理下一个孩子和饼干
    if (cookie[b] >= child[a]) {
      a++;
      b++;
      count++;
    } else {
      // 否则直接去看下一个饼干是否符合条件
      b++;
    }
  }
  return count;
}
console.log(fn([2, 8, 9, 2, 1], [44, 3, 1]));
