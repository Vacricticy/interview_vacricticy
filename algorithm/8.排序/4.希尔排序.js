/* 
    希尔排序：选择合适的增量进行排序
        比如5，3，1
        间隔为5的先进行排序，然后间隔为3的再进行排序，最后间隔为1的再进行排序。
        前期相当于在做局部有序的工作，这样可以避免在最后进行间隔为1的排序时移动太多的元素。
    希尔排序是插入排序的优化：
        原理是通过while循环进行多次的插入排序，前期采用较大的gap实现局部排序，后续间隔为1的排序所移动的元素就会少很多。
    希尔排序的时间复杂度:小于O(n^2)
*/
Array.prototype.shellSort = function () {
  var arr = this;
  // 获取初始的增量
  var gap = Math.floor(arr.length / 2);
  while (gap >= 1) {
    // 每一轮的排序
    for (var i = gap; i < arr.length; i = i + gap) {
      var tmp = arr[i]; //保存当前比较的元素
      var target = 0; //初始位置
      // 查找对应的插入位置
      for (var j = i - gap; j >= 0; j = j - gap) {
        if (tmp < arr[j]) {
          arr[j + gap] = arr[j];
        } else {
          target = j + gap;
          break;
        }
      }
      // while (j >= 0) {
      //   if (tmp < arr[j]) {
      //     arr[j + gap] = arr[j];
      //   } else {
      //     target = j + gap;
      //     break;
      //   }
      //   j -= gap;
      // }
      arr[target] = tmp;
    }
    gap = Math.floor(gap / 2);
  }
  return arr;
};
console.log([12, 32, 4, 55].shellSort());
