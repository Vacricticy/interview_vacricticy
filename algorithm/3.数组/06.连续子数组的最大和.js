// 方法一：暴力解 用两层循环可以枚举出所有子序列的首尾位置，然后再通过一个for循环求出序列的和
function getMax(arr) {
  var max = 0;
  var currentArrs = [];
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length; j++) {
      var sum = 0;
      tmp = [];
      for (var k = i; k <= j; k++) {
        sum += arr[k];
        tmp.push(arr[k]);
      }
      if (sum > max) {
        max = sum;
        currentArrs = tmp;
      }
    }
  }
  console.log(currentArrs);
  return max;
}
console.log(getMax([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

