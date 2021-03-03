function clockwise(arr) {
  if (arr.length == 0) return [];
  var top = 0;
  var bottom = arr.length - 1;
  var left = 0;
  var right = arr[0].length - 1;
  var rs = [];
  while (left < right && top < bottom) {
    for (var i = left; i < right; i++) {
      rs.push(arr[top][i]);
    }
    for (var i = top; i < bottom; i++) {
      rs.push(arr[i][right]);
    }
    for (var i = right; i > left; i--) {
      rs.push(arr[bottom][i]);
    }
    for (var i = bottom; i > top; i--) {
      rs.push(arr[i][left]);
    }
    left++;
    right--;
    top++;
    bottom--;
  }
  if (top == bottom) {
    for (var i = left; i <= right; i++) {
      rs.push(arr[top][i]);
    }
  } else if (left == right) {
    for (var i = top; i <= bottom; i++) {
      rs.push(arr[i][left]);
    }
  }
  return rs;
}
// console.log(
//   clockwise([[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]])
// );
console.log(
  clockwise([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
  ])
);
