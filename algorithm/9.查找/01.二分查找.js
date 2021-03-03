/* 二分查找之所以高效的原因：
    因为数组是一个有序的数组，这样通过中间值在进行比较的时候，就可以将比较的范围划分得更小。 
   时间复杂度：logn    
*/
// 方法一：递归
function binarySearch(arr, low, high, target) {
  if (low > high) {
    return -1;
  }
  var i = Math.floor((low + high) / 2);
  if (target > arr[i]) {
    return binarySearch(arr, i + 1, high, target);
  } else if (target < arr[i]) {
    return binarySearch(arr, low, i - 1, target);
  } else {
    return i; //尾递归，一直往上返回这个找到的索引
  }
}
console.log(binarySearch([-1, 0, 3, 5, 9, 12], 0, 5, 9));

// 方法二：循环
function binarySearch(arr, target) {
  var low = 0,
    high = arr.length - 1;
  var mid = Math.floor((low + high) / 2);
  while (low <= high) {
    if (target > arr[mid]) {
      low = mid + 1;
    } else if (target < arr[mid]) {
      high = mid - 1;
    } else {
      return mid;
    }
    mid = Math.floor((low + high) / 2);
  }
  return -1;
}
console.log(find2([1, 2, 4, 5, 6, 7], 9));
