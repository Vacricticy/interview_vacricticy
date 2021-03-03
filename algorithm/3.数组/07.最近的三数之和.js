function threeSum(arr, target) {
  arr = arr.sort((a, b) => a - b);
  var res = arr[0] + arr[1] + arr[2];
  for (var i = 0; i < arr.length; i++) {
    var low = i + 1;
    var high = arr.length - 1;
    while (low < high) {
      var sum = arr[i] + arr[low] + arr[high];
      // 将三数之和与target进行比较，如果比target大，则右指针左移，如果比target小，左指针右移
      if (sum > target) {
        high--;
      } else {
        low++;
      }
      // 之后再判断当前的三个数之和与之前的res相比谁的差值更小
      if (Math.abs(sum - target) < Math.abs(res - target)) {
        res = sum;
      }
    }
  }
  return res;
}
