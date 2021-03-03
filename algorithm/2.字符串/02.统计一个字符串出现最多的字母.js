var str = "aaabbbbbbcccddddddggg";
// 借助对象来存储计算每种字符串的个数

// 一：只能获取一种个数最大的字符串
// var obj = {};
// for (var i = 0; i < str.length; i++) {
//   if (!obj[str[i]]) {
//     obj[str[i]] = 1;
//   } else {
//     obj[str[i]]++;
//   }
// }
// var key = 0;
// var max = 0;
// for (var i in obj) {
//   if (obj[i] > max) {
//     key = i;
//     max = obj[i];
//   }
// }
// console.log(key, max);

// 二：包含最大个数重复的情况
var obj = {};
for (var i = 0; i < str.length; i++) {
  if (!obj[str[i]]) {
    obj[str[i]] = 1;
  } else {
    obj[str[i]]++;
  }
}
var key = [];
var max = 0;
for (var i in obj) {
  if (obj[i] > max) {
    max = obj[i];
    key = [];
    key.push(i);
  } else if (obj[i] == max) {
    key.push(i);
  }
}
console.log("出现次数最多的字符为：" + key);
console.log("个数为：" + max);
