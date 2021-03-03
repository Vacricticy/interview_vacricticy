var count = 0;
function fn(n) {
  if (n <= 1) return 1;
  // 判断当前的元素中有几个5
  if (n % 5 == 0) {
    var tmp = n;
    var num = 1;
    while (tmp > 5) {
      tmp = tmp / 5;
      if (tmp % 5 == 0) {
        num++;
      }
    }
    count += num;
  }
  return n * fn(n - 1);
}
fn(1808548329);
console.log(count);

var count = 0;
function fn(n) {
  if (n <= 1) return 1;
  while (n > 1) {
    if (n % 5 == 0) {
      var tmp = n;
      var num = 1;
      while (tmp > 5) {
        tmp = tmp / 5;
        if (tmp % 5 == 0) {
          num++;
        }
      }
      count += num;
    }
    n--;
  }
}
fn(1808548329);
console.log(count);
