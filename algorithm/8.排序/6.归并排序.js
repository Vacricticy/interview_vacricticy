/* 
    归并排序：
        核心：分而治之，先将数组分割到单个元素，然后再将其合并为更大的数组。
        时间复杂度：总共执行的层数为logn,每一层执行的次数都是n，因为在合并两个排序的数组时，每个元素都会走一遍。
                    所以最终的时间复杂度为nlogn
*/
// 用于合并两个排序数组的方法
function combine(arr1, arr2) {
  var len1 = arr1.length - 1;
  var len2 = arr2.length - 1;
  var total = arr1.length + arr2.length - 1;
  while (len1 >= 0 && len2 >= 0) {
    if (arr1[len1] > arr2[len2]) {
      arr1[total--] = arr1[len1--];
    } else {
      arr1[total--] = arr2[len2--];
    }
  }
  while (len2 >= 0) {
    arr1[total--] = arr2[len2--];
  }
  return arr1;
}
function mergeSort(arr) {
  // 当数组的长度为1时，表示已经分割到了最低层，此时可以开始合并了
  if (arr.length == 1) {
    return arr;
  }
  var i = Math.floor(arr.length / 2);
  var mergeLeft = mergeSort(arr.slice(0, i));
  var mergeRight = mergeSort(arr.slice(i));
  return combine(mergeLeft, mergeRight);
}
var rs = mergeSort([1, 34, 25, 45, 6]);
console.log(rs);
