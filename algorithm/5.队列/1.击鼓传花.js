// 直接使用数组来解决
function play2(people, number) {
  while (people.length > 1) {
    for (var i = 0; i < number - 1; i++) {
      people.push(people.shift());
    }
    var out = people.shift();
    console.log(out + " is out");
  }
  return people[0];
}
var victory2 = play2(["a", "b", "c", "d", "e", "f"], 3);
console.log("胜利者是" + victory2);
