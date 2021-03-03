// 直接使用数组实现
function decimalToAnyByArray(number, base) {
  var arr = [],
    yushu,
    rs = "";
  while (number > 0) {
    yushu = number % base;
    arr.push(yushu);
    number = Math.floor(number / base);
  }
  while (arr.length > 0) {
    rs += arr.pop();
  }
  return rs;
}
console.log(decimalToAnyByArray(15, 2)); //1111
console.log(decimalToAnyByArray(15, 8)); //17
