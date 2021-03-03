var str = "cabcdefgabcdefgc";
var index = str.indexOf("c");
var num = 0;
while (index != -1) {
  console.log(index);
  num++;
  index = str.indexOf("c", index + 1);
}
console.log("总共有" + num + "次");
