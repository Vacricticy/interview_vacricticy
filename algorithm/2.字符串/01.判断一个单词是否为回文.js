var str = "abcdcba";
// 方法一：创建一个新字符串，将逆序拼接原字符串中的每一个字符
// var newStr = "";
// for (var i = str.length - 1; i >= 0; i--) {
//   newStr += str[i];
// }
// console.log(newStr == str);

// 方法二：转换为数组，利用数组的reverse方法，然后再转换为字符串
console.log(str == str.split("").reverse().join(""));

// 方法三：从头部和尾部以此向中间比较
for (var i = 0; i < Math.floor(str.length / 2); i++) {
  if (str[i] == str[str.length - 1 - i]) {
    console.log(false);
  }
}
