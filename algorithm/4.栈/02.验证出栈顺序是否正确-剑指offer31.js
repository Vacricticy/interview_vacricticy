/* 
题目描述：
输入两个整数序列，第一个序列表示栈的压入顺序，请判断第二个序列是否为该栈的弹出顺序。
*/

// 整个过程相当于模拟了入栈又出栈的过程
function validStack(inArr, outArr) {
  var stack = []; //辅助栈,利用这个栈来模拟入栈和出栈的操作
  var index = 0; //当前指向outArr的索引
  for (var i = 0; i < inArr.length; i++) {
    //   以此将每个元素入栈
    stack.push(inArr[i]);
    // 每次添加元素后，都需要判断当前入栈的元素是否与输出栈的index元素一致，一致的话说明刚好符合出栈的情况
    while (stack.length != 0 && stack[stack.length - 1] == outArr[index]) {
      stack.pop();
      index++; //弹出后，将index加1，指向下一个需要弹出的元素
    }
  }
  return !stack.length;
}
console.log(validStack([1, 2, 3, 4, 5], [2, 3, 1, 4, 5]));
console.log(validStack([1, 2, 3, 4, 5], [3, 5, 1, 2, 4]));
