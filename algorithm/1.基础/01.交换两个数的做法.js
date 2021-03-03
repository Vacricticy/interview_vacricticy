// https://www.cnblogs.com/smile6542/p/11855966.html

// 1.普通方法：
// let a = 1;
// let b = 2;
// let tmp = a;
// a = b;
// b = tmp;
// console.log(a, b); //2 1

// 2.算术运算----不借助临时变量，进行两个整数的交换
// 存在的问题：由于存在加法运算，所以可能存在溢出的问题
// let a = 1;
// let b = 2;
// a = a + b;
// b = a - b;
// a = a - b;
// console.log(a, b); //2 1

// 3.利用数组特性进行交换
let a = 1;
let b = 2;
a = [a, b];
b = a[0];
a = a[1];
console.log(a, b); //2 1

// 4.ES6中的解构赋值
// let a = 1;
// let b = 2;
// [a, b] = [b, a];
// console.log(a, b); //2 1

// 5.异或运算
