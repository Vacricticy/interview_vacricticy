/* 插入排序的原理：
    类似于玩扑克牌时摸牌后排序的行为。
    每抓一张牌，就将这张牌与已经排好序的牌从右往左比。
    如果这张牌大于相比较的牌，则将这张牌放在其后。
    如果这张牌小于相比较的牌，则继续向前比较。
    如果已经比较到了第一张牌，则将这张牌插入到最前面即可。 
  插入排序的时间复杂度：O(n^2)    
*/

// 方法一：借助一个新的数组---这里用到了splice，所以不算最原始的方法。
function insert(arr) {
  let newArr = [];
  newArr.push(arr[0]);
  console.log(newArr);
  // 外层循环控制每一次插入的元素
  for (let i = 1; i < arr.length; i++) {
    //   内层循环用于将插入的元素与新数组中的元素依次比较（从后往前比）
    for (let j = newArr.length - 1; j >= 0; j--) {
      // 如果插入的值较大，则插在元素后面
      // 注意：如果这里用了等于，则表示相同的值会插在后面；如果不用等于，则表示相同的值会插在前面。
      if (arr[i] > newArr[j]) {
        newArr.splice(j + 1, 0, arr[i]);
        break;
      }
      //   如果比较到了第一项，则插在新数组的最前面
      if (j == 0) {
        newArr.unshift(arr[i]);
      }
    }
  }
  return newArr;
}
let arr = [12, 1, 33, 4, 5, 3, 12];
let newArr = insert(arr);
console.log(newArr);

// 方法二：（最原始的方法）直接在原数组上进行移动修改
Array.prototype.insertOrder = function (callback) {
  var arr = this;
  for (var i = 1; i < arr.length; i++) {
    var tmp = arr[i]; //当前需要比较的元素
    var target = 0; // 最终找到的插入元素的位置
    for (var j = i - 1; j >= 0; j--) {
      // 如果某个元素比自己大，就将该元素右移
      if (tmp < arr[j]) {
        arr[j + 1] = arr[j];
        // 如果某个元素比自己小，则将新元素添加在这个元素后面
      } else {
        target = j + 1;
        break;
      }
    }
    arr[target] = tmp;
  }
  callback(arr);
};
[1, 2, 11, 4, 222, 5].insertOrder(function (result) {
  console.log(result);
});
