/* 
输入:
A = [1,2,3,0,0,0], m = 3
B = [2,5,6],       n = 3

输出: [1,2,2,3,5,6]


推广：[1,2,4,5] [3,4,5] ==> [1,2,4,5,0,0,0] [3,4,5] ==> [1,2,3,4,5,5]
如果用两层循环：O(n^2)
如果用最高值比较再插入法：O(2n)


*/
// 方法一：直接在原数组上改
var merge = function (A, m, B, n) {
  let lenM = m - 1;
  let lenN = n - 1;
  let totalLen = m + n - 1;
  // 从两个数组的末尾开始比较，将大的值添加在第一个数组的最后
  while (lenM >= 0 && lenN >= 0) {
    A[totalLen--] = A[lenM] > B[lenN] ? A[lenM--] : B[lenN--];
  }
  // 第二个数组如果还有剩余，则需单独添加在第一个数组中
  while (lenN >= 0) {
    A[totalLen--] = B[lenN--];
  }
};
// 方法二：新增一个数组
function combine(arr1, arr2) {
  var arr3 = [];
  var i = 0,
    j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      arr3.push(arr1[i++]);
    } else {
      arr3.push(arr2[j++]);
    }
  }
  while (i < arr1.length) {
    arr3.push(arr1[i++]);
  }
  while (j < arr2.length) {
    arr3.push(arr2[j++]);
  }
  console.log(arr3);
}
combine([1, 3, 4, 66], [2, 3, 6, 7, 8]);
