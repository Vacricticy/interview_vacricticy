/* 
 选择排序：
    每一轮循环都需将剩下元素中最小的值依次放在前面
    时间复杂度：O(n^2)
 选择排序与冒泡排序的区别：
    冒泡排序在每次进行比较后都需要进行元素的交换
    而选择排序是记录最小的值，然后在循环的最后进行交换，交换次数为n-1
    所以选择排序在执行效率上比冒泡排序好。
*/
Array.prototype.selectSort = function () {
  var arr = this;
  for (var i = 0; i < arr.length; i++) {
    var min = i; //开始时表示的是循环开始的元素下标，之后表示的是剩下的元素中最小的值
    for (var j = i; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    // 将最小的值交换在原来i指定的位置
    var tmp = arr[i];
    arr[i] = arr[min];
    arr[min] = tmp;
  }
  return arr;
};
var rs = [4, 7, 23, 13, 43].selectSort();
console.log(rs);
