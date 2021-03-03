/* 
    快速排序的原理：
    https://blog.csdn.net/adusts/article/details/80882649
        首先选取一个基准数，然后设置左右哨兵i,j，左哨兵右移找比基准数大的元素，右哨兵找比基准数小的元素，然后进行交换，然后一直循环到左右哨兵相遇，此时将左哨兵右边的元素就为基准数本身应该处于的位置。
        然后此时该基准数左边的元素都比自己小，右边的元素都比自己大，最后再通过递归对两边的数据进行同样的处理。
        冒泡排序中是相邻的元素进行交换，让最大的元素移动到正确的位置。而快速排序中是跳跃式的交换元素，所以效率比冒泡排序高。
*/
function quickSort(arr, start, end) {
  if (start >= end) {
    return;
  }
  var i = start;
  var j = end;
  // 当所处理的数组片段只有一个元素时，直接return----这就是递归的终止条件

  // 将所有满足条件的i和j进行交换
  while (i < j) {
    //找到可以交换的i和j,这里必须同时判断i<j，一旦相遇就应该立即停止。相遇的节点即为需要与基准数交换的地方，因为此时根据j可以知道他是小于基准数的，而且i已经走过来了，说明前面的也已经处理完毕了，只剩下这个元素了。
    while (arr[j] > arr[start] && i < j) {
      j--;
    }
    while (arr[i] <= arr[start] && i < j) {
      i++;
    }
    if (i < j) {
      var tmp = arr[i];
      arr[i] = arr[j];
      arr[j] = tmp;
    }
  }
  // 交换完毕后，将基准值交换到正确的位置
  var tmp2 = arr[start];
  arr[start] = arr[i];
  arr[i] = tmp2;
  // 当前i所处的元素时已经处理好的元素，所有下一次应该从start到i-1,以及i+1到end
  quickSort(arr, start, i - 1);
  quickSort(arr, i + 1, end);
  return arr;
}
var rs = quickSort([2, 13, 2, 2, 42, 5, 43, 5], 0, 7);
console.log(rs);
