// 冒泡排序的核心思想：让数组的当前项与后一项进行比较，如果当前项比后一项大，则两项交换位置（让大的靠后）。
// 每一轮都会将剩余元素的最大值放到数组的末尾

// 所以总共需要arr.length-1轮比较
// 第一轮循环中比较的次数为arr.length-1，第二轮由于最大的值已经移动到了最后，所以需要比较的次数为arr.length-1-1

let arr = [12, 43, 11, 6, 75, 5, 54];

function bubble(arr) {
  let tmp = null;
  // 外层循环控制比较的轮数，总共有length-1轮
  for (let i = 0; i < arr.length - 1; i++) {
    // 内层循环控制每一轮比较的次数,第一轮比较的次数为length-1,后面的轮数依次减1
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
  }
  return arr;
}
let newArr = bubble(arr);
console.log(newArr); //[5,  6, 11, 12,43, 54, 75]
