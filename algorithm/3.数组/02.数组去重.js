var arr = [1, 2, 3, 4, 2, 3, 5];
//原则：利用对象的键来存储和检查元素

// 方法一：找到元素后将其删除，复杂度有点高哦！！
// var obj = {};
// for (var i = 0; i < arr.length; i++) {
//   if (!obj[arr[i]]) {
//     obj[arr[i]] = true;
//   } else {
//     arr.splice(i, 1);
//     i--;
//   }
// }
// console.log(arr);

// 将方法一的splice方法实现出来:
function reduceMuti(arr) {
  var obj = {};
  for (var i = 0; i < arr.length; i++) {
    if (!obj[arr[i]]) {
      obj[arr[i]] = true;
    } else {
      for (var j = i + 1; j < arr.length; j++) {
        arr[j - 1] = arr[j];
      }
      arr.length--;
      i--;
    }
  }
  return arr;
}

// 方法二：直接新增一个数组，将没有重复的元素添加进去。增加了内存开销，但是节省了效率。
var obj = {};
var newArr = [];
for (var i = 0; i < arr.length; i++) {
  if (!obj[arr[i]]) {
    obj[arr[i]] = true;
    newArr.push(arr[i]);
  }
}
console.log(newArr);
