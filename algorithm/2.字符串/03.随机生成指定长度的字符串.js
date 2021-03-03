// 比如给定 长度 8  输出 4ldkfg9j
function outPutStr(num) {
  var str = "";
  var total = "qwertyuioplkjhgfdsazxcvbnm1234567890";
  for (var i = 0; i < num; i++) {
    // 核心：随机数*字符串仓库的长度，范围就变为了[0,36)，然后向下取整
    str += total[Math.floor(Math.random() * total.length)];
  }
  return str;
}
var rs = outPutStr(8);
console.log(rs);
