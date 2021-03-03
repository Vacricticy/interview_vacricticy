var arr = [2, 43, 435, 34, 5, 23, 12, 13];
// 核心：最大的差值即为最大值与最小值的差
var min = arr[0],
  max = arr[0];
for (var i = 1; i < arr.length; i++) {
  if (arr[i] < min) {
    min = arr[i];
  }
  if (arr[i] > max) {
    max = arr[i];
  }
}
console.log(min, max);
console.log(max - min);
