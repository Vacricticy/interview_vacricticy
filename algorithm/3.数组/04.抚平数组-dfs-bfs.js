var arr = [1, 2, [3, 4, [5, 6], 7, 8], 9, [10, 11, 12], 13];
// dfs:直接递归调用
function dfs(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      dfs(arr[i]);
    } else {
      console.log(arr[i]);
    }
  }
}
// dfs(arr);

//bfs：将是数组的元素添加在外层的数组中单独处理
function bfs(arr) {
  var newArr = [];
  newArr.push(arr);
  for (var i = 0; i < newArr.length; i++) {
    var logArr = newArr[i];
    for (var j = 0; j < logArr.length; j++) {
      if (Array.isArray(logArr[j])) {
        newArr.push(logArr[j]); //如果内层的数据为数组，则不打印，而是将添加在外层的数组最后，等待一下轮的处理
      } else {
        console.log(logArr[j]);
      }
    }
  }
}
bfs(arr);

// 或者：使用一个队列来保存接下来所有需要处理的数组，不过这里队列在取出队列头的时候复杂度比较高
function bfs(arr) {
  var queue = [];
  queue.push(arr);
  while (queue.length) {
    var currentArr = queue.shift();
    for (var i = 0; i < currentArr.length; i++) {
      if (Array.isArray(currentArr[i])) {
        queue.push(currentArr[i]);
      } else {
        console.log(currentArr[i]);
      }
    }
  }
}
bfs([1, 2, [3, 4, [5, 6], 7, 8], 9, [10, 11, 12], 13]);
