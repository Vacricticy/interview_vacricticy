# :boat: js语言相关

## 能来讲讲JS的语言特性吗

解释性，弱类型的脚本语言，与操作系统无关，[跨平台](https://www.baidu.com/s?wd=跨平台&tn=24004469_oem_dg&rsv_dl=gh_pl_sl_csd)的语言；



## 说说Java和JavaScript语言的区别:



java属于**编译型**语言，需要经过编译器生成字节码文件，然后通过java虚拟机运行字节码文件。

javascript属于**解释性**语言，通过解释器边解释边执行。浏览器自带解释器(js引擎)。



java属于**强类型**语言（静态类型语言），编译的时候需要给定类型，编译的时候就能够知道每个变量的类型。

javascript属于**弱类型**语言（动态类型语言），预编译的时候无需显示指定类型，运行的时候才知道每个变量的类型，且变量的类型可以通过赋值动态的改变。



java中的**数组**存储的是相同类型值的集合，而js中的数组可以存储各种类型的值，可以创建出复杂的数据结构。



java是一种真正的**面向对象**的语言，继承通过类来实现；而js是基于对象的语言，继承是通过原型对象实现的。而ES6中的class类只是一个语法糖。



##  js中的命名方式

#### **三种命名方法：**

- 驼峰命名法（CamelCase）：backColor  第一个词的首字母小写，其他词的首字母大写

- 帕斯卡命名法（PascalCase）：FirstName、LastName

- 匈牙利命名法：sMyName  变量名前面加上一个小写字母以说明该变量的类型。a表示 Array 数组，b 表示boolean(布尔类型)，c表示Char（字符/字节)，s表示String（字符串）



#### js中的命令习惯：

- **变量,函数 **采用驼峰命名
  -  `var studentName="liu";  var getName=function(){}` 

- **私有变量**以_开头：
  - `var _privateProp={};`

- **常量**：全部采用大写字母，单词之间通过_分割
  - `var PI=3.1415926535897932384626`

- **构造函数（类）**采用帕斯卡命名法：
  - `function Person(){}`



# :oncoming_police_car: ​ js数据相关

##  js数据类型:

https://blog.csdn.net/lareinalove/article/details/79895760

|                      | 基本数据类型                                                 | 引用数据类型                                                 |
| -------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 有哪些               | string、number、boolean、undefined、null、symbol             | Object、Array、Function、RegExp、Date、特殊的基本包装类型(String、Number、Boolean)以及单体内置对象(Global、Math)。 |
| 访问方式             | 按值访问的                                                   | 变量指向的是数据的地址                                       |
| **内存分配**         | 存储在栈中，栈里面直接开辟一个空间存储变量的值。             | 堆中存放数据，栈中存放这个数据的地址                         |
| 值的可变性           | 基本数据类型的值是不可变的（在字符串的不可变性上有充分体现）。不可以添加属性和方法。 | 引用数据类型可以添加属性和方法                               |
| 赋值                 | var a=3;var b=a;基本数据类型的赋值会开辟一块新的空间，然后改变变量的指针指向 | var obj={};var obj2=obj;仅改变引用的指针，指向的是同一个对象 |
| 调用函数时传递的参数 | 因为传递的是‘值’，所以在进入函数内部时，会开辟一个新的变量和空间来存储这个‘值’。此时修改值，由于是不同的内存，所以不会影响原来的实参。 | 因为传递的是‘地址，所以在进入函数内部时，会开辟一个新的变量和空间来存储这个‘地址’。由于地址相同，即指向的是堆里面同样的数据，所以修改的时候会影响之前的实参。 |



js中有三种原始类型的值：string,number,boolean。

通过包装类型，即**三个原生对象Number、String、Boolean**可以将这三种原始类型的值转换为包装对象。

这样就可以使对象这种类型覆盖js中所有的值。

当这三个原生对象作为构造函数使用时，可以将原始类型的值转为对象。

这三个原生对象作为普通函数使用时，可以将任意类型的值转换为原始类型的值。



## 关于NaN:

- 全称为not a number
- 但是！！！！typeof NaN 的值为number

- `NaN` 是一个*全局对象*的属性，NaN 属性的初始值就是 NaN。 

- NaN与一切为敌（包括自己），与之相比也是false。 

- [`isNaN()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/isNaN) 与[`Number.isNaN()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN) 的区别：

  ```js
  isNaN('hello world');        // true   会先将内部的字符串转换为number
  Number.isNaN('hello world'); // false	不存在转换，直接比较
  ```



## 深浅拷贝

### 可枚举与不可枚举：

可枚举和不可枚举，是由属性的enumerable值决定的。取值为true，表示可枚举。否则表示不可枚举。

for...in只能遍历出可枚举的属性。

Object.keys返回的也是可枚举的属性。

```js
var obj = {
    name: "xiaoming",
    age: 12,
    sex: "男",
};
Object.defineProperty(obj, "color1", {
    value: "red",
    writable: true,
    enumerable: false,
    configurable: false,
});
Object.defineProperty(obj, "color2", {
    value: "green",
    writable: true, //是否可以重写，默认值为false
    enumerable: true, //是否可以通过Object.keys()遍历，默认为false
    configurable: false //是否可以删除该属性以及修改enumerable和configurable，默认为false
});
console.log(Object.keys(obj)); //["name", "age", "sex", "color2"]
// 通过Object.keys可以获取一个对象含有的可枚举属性的个数
console.log(Object.keys(obj).length); //4
for (k in obj) {
    console.log(k); //name age sex color2
}
//   判断一个属性是否是可枚举的
console.log(obj.propertyIsEnumerable("color1")); //false
console.log(obj.propertyIsEnumerable("length")); //false
console.log(obj.propertyIsEnumerable("color2")); //true

var arr = ["apple", "banana", "orange"];
// Object.keys只返回可枚举的属性，Object.getOwnPropertyNames还会返回不可枚举的属性
console.log(Object.keys(arr).length); //3
console.log(Object.getOwnPropertyNames(arr)); //["0", "1", "2", "length"]
console.log(Object.getOwnPropertyNames(obj)); //["name", "age", "sex", "color1", "color2"]
console.log(Object.getOwnPropertyNames(arr).length); //4
```



### 赋值，浅拷贝，深拷贝：

```js
var obj1 = {
    'name' : 'zhangsan',
    'age' :  '18',
    'language' : [1,[2,3],[4,5]],
};

//赋值：相当于地址的直接引用
var obj2 = obj1;

//浅拷贝：浅拷贝只会拷贝最外面的一层，里面的子对象拷贝的是地址，即引用，修改时会连着修改
var obj3 = shallowCopy(obj1);
function shallowCopy(src) {
    var dst = {};
    for (var prop in src) {
        if (src.hasOwnProperty(prop)) {
            dst[prop] = src[prop];
        }
    }
    return dst;
}

//深拷贝：每一层的数据都会被拷贝，开辟的都是新的空间。
```



### **浅拷贝的实现（5种）：**

**1.传统方式：使用for...in遍历对象的最外层**

```js
var shallowCopy = function(obj) {
    // 只拷贝对象
    if (typeof obj !== 'object') return;
    // 根据obj的类型判断是新建一个数组还是对象
    var newObj = obj instanceof Array ? [] : {};
    // 遍历obj，并且判断是obj的属性才拷贝
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            newObj[key] = obj[key];
        }
    }
    return newObj;
}
```



**2.Object.assign()**

ES6中的Object.assign()用于将源对象的属性复制到目标对象，该方法使用的是浅拷贝的方式。

（该方法针对的是所有对象，包括了数组）

```js
//对象的浅拷贝
var obj1 = {
    name: "tim",
    msg: {
        age: 29,
    },
};
var obj4=Object.assign({}, obj1);
obj4.msg.age = 30;
obj4.name = "alice";
console.log(obj1); //tim 30

//数组的浅拷贝
let arr1 = [1, 2, { name: "liu" }];
let arr2 = Object.assign([], arr1);
console.log(arr2); //[1, 2,  {name: "liu"}]
arr2[2].name = "xiao";
console.log(arr1); ////[1, 2,  {name: "xiao"}]


//综合写法：
var source={};
var target=source instanceof Array?[]:{};
target=Obejct.assign(target,source);
```

扩展：Object.assign(obj1,obj2)//obj2的属性会覆盖掉obj1中重复的属性

**3.利用数组的silce,concat方法**

对于数组的浅拷贝，还可以通过数组的slice和concat方法返回一个新的数组的方式来实现，这些方法内部实现的是浅拷贝。

```js
let arr3 = [1, 2, { name: "liu", likes: ["music", "movie"] }];
let arr4 = arr3.slice(0);
console.log(arr4); //[1, 2, { name: "liu", likes: ["music", "movie"] }]
arr4[2].name = "xiao";
console.log(arr3); //[1, 2, { name: "xiao", likes: ["music", "movie"] }]

let arr5 = [1, 2, { name: "liu", likes: ["music", "movie"] }];
let arr6 = arr5.concat([]);
console.log(arr6);
arr6[2].likes[0] = "drink"; //[1, 2, { name: "liu", likes: ["music", "movie"] }]
console.log(arr5); //[1, 2, { name: "liu", likes: ["drink", "movie"] }]
```



4.数组的浅拷贝还可以通过...展开符来实现

```js
let arr3 = [1, 2, { name: "title" }];
let arr4 = new Array(...arr3);
arr4[0] = "aaa";
arr4[2].name = "xiao";
console.log(arr3); //[1, 2, { name: "xiao" }]
```



5.使用E6新增的Array.from

```
var arr=[1,2,{name:'liu'}];
var newArr=Array.from(arr);
```



### **深拷贝的实现（2种）：**

**1.递归实现深度拷贝：（只能实现对象和数组的克隆）**

```js
// 深拷贝：每一层的数据都会被拷贝，开辟的都是新的空间。
var obj = {
    name: "tim",
    color: ["white", "black"],
    size: {
        content: "small",
    },
};
// 以下为通过函数递归的方式实现深拷贝
function deepCopy(newObj, oldObj) {
    for (k in oldObj) {
        // 判断是不是数组
        if (oldObj[k] instanceof Array) {
            newObj[k] = [];
            deepCopy(newObj[k], oldObj[k]);
            // 判断是不是对象
            // ❤ 注意：需要先判断是不是数组，再判断是不是对象，因为数组也属于对象
        } else if (oldObj[k] instanceof Object) {
            newObj[k] = {};
            deepCopy(newObj[k], oldObj[k]);
        } else {
            newObj[k] = oldObj[k];
        }
    }
}
var obj2 = {};
deepCopy(obj2, obj);
console.log(obj2);
obj2.color[0] = "yellow"; //深拷贝，不会改变原来的值
console.log(obj.color); //["white", "black"]



//简写方式
var deepCopy = function(obj) {
    if (typeof obj !== 'object') return;
    var newObj = obj instanceof Array ? [] : {};
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            //如果属性是对象，则需要进一步递归
            newObj[key] = typeof obj[key] === 'object' ? deepCopy(obj[key]) : obj[key];
        }
    }
    return newObj;
}
```



**2.借助JSON对象的转换:**

原理：JOSN对象中的stringify可以把一个js对象序列化为一个JSON字符串，parse可以把JSON字符串反序列化为一个js对象，通过这两个方法，也可以实现对象的深拷贝。

```js
//对象的深拷贝
let obj1 = { a: 0 , b: { c: 0}}; 
let obj3 = JSON.parse(JSON.stringify(obj1)); 
obj3.b.c = 4; 
console.log(obj1);//{ a: 0 , b: { c: 0}} 未改变

//数组的深拷贝
var arr = ['old', 1, true, ['old1', 'old2'], {old: 1}]
var arr2 = JSON.parse( JSON.stringify(arr) );
arr2[3][0]='new1';
console.log(arr);// ['old', 1, true, ['old1', 'old2'], {old: 1}] 未改变
```

注意：该方法不能拷贝函数对象，还会有很多小问题。



**3.包装对象Number,String,Boolean,以及正则对象RegExp和Date对象的克隆**

其实谈不上克隆一说，包装对象直接通过=赋值，正则对象和Date对象直接在原基础上通过new创建新的对象





## 比较判断相关

### 隐式转换：

https://blog.csdn.net/itcast_cn/article/details/82887895

**字符串连接符+的隐式转换：**

当+两侧有一个是字符串时，表明这个+是字符串连接符。此时会将其他数据类型调用toString()转换为字符串再拼接。

```js
console.log(1+"true")//1true
```



**算术运算符+的隐式转换：**

当+两侧没有字符串时，表明这个+号是算术运算符。此时会把其他数据类型调用Number()转成数字后再做加法运算。

```js
console.log(1+true)//会转换为1+1=2

console.log(1+undefined)//转换为1+Number(undefined)=1+NaN =NaN

console.log(1+null)//1+0=1

```



**关系运算符> < ==的隐式转换：**

当关系运算符两边只有一边是字符串时，该字符串会通过Number()转换为数字再进行比较

```js
console.log("2">10)//false
```

当关系运算符两边都是字符串时，会按照字符串从左到右转换为unicode编码依次进行比较。

```js
console.log("2">"10")//"2".charCodeAt()>"10".charCodeAt()   50>49  true

"2".charCodeAt()//50
"10".charCodeAt()//49
```

特殊情况：（无规则）

```js
console.log(undefined==undefined);//true
console.log(undefined==null);//true
console.log(null==null);//true
console.log(NaN==NaN);//false  NaN不与任何数据相等，包括自己
```



**复杂数据类型的隐式转换：**

转换规则：对于对象和数组的隐式转换，会先通过valueOf()获取原始值，然后通过toString()转换为字符串。然后再通过Number()转换为数字。

注意：[].toString()为空字符串，{}.toString()为[object Object]

```js
console.log([1,2]=='1,2')//true
//[1,2].valueOf().toString()='1,2'

let a={};
console.log(a=="[object Object]")//true
//{}.valueOf().toString()等于[object Object]
```

应用：if(a==1&&a==2&&a==3){
	console.log(1)
}

```js
如何完善a，使其正确打印1：
let a=??;
if(a==1&&a==2&&a==3){
    console.log(1)
}


解决方法：重写a属性的valueOf()方法
a={
    i:0,
    valueOf:function(){
        return ++a.i;//每调用一次，就让a对象的i属性自增一次并返回。
    }
}
if(a==1&&a==2&&a==3){//由于引用数据的类型与其他数据类型的数据在比较的时候会进行隐式转换，当调用a属性的valueOf方法获取其原值时，可以使其每次都自增1
    console.log(1)
}
```





**带有逻辑非运算符的比较(超级大坑！！！！)：**

将其他数据类型通过Boolean()转换为布尔类型。

除了0,-0,NaN,undefined,null,空字符串，false,document.all()这八种情况外，其他都会被转换为true。

```js
//注意：只有带有!才会转换为布尔型
console.log([]==0)//true  这里是通过[].valueOf().toString()先转换为空字符串，然后空字符串转换为数字0来比较的
console.log(![]==0)//true

console.log({}==!{})//false
//这里设置两种转换，前者通过{}.valueOf().toString()转换为'[object Object]'。后者直接可以转换为false
console.log([]==![])//true
//同理，前者转换为空字符串，然后转换为数字0.后者转换为false,然后是数字0；


console.log({}=={})//false 注意：这里是引用数据类型，所以栈中的地址是不同的。
console.log([]==[])
```



### 不同数据类型的值的比较，是怎么转换的，有什么规则：

隐式转换！！



### unll与undefined:

null表示空对象，undefined表示变量定义了但没赋值。



为什么null == undefined：

ECMAScript规范中是这样定义的.....



### ==和===、以及Object.is的区别

==  比较的是值，会自动进行隐式转换。

===不存在隐式转换，会先进行类型的比较，再比较值。

Object.is()是ES6中新增的语法，与严格比较运算符（===）基本一致。但具有一些特殊案例，这些案例在更准确，更符合实际开发的场景中使用：

```js
//最主要的特点：
console.log(NaN==NaN);//false
Object.is(NaN,NaN);//true

console.log(+0==-0);//true
Object.is(+0,-0);//false

--------------------------

console.log(0=='');//true
Object.is(0,'');//false

console.log(null==undefined);//true 
Object.is(null,undefined);//false

console.log([1]==true);//true
Object.is([1],true);//false

```



### typeof与instanceof的区别

typeof一般用于检测基本数据类型。返回的值包括string,number,boolean,undefined,function,object.

```js
function Person() {
    this.name = "liuxiaokang";
}
var a = [34, 4, 3, 54],
    a2 = {},
    a3 = null;
var a4 = new Person();
var b = 34,
    c = "adsfas",
    d = function () {
        console.log("我是函数");
    },
    e = true,
    g;

console.log(typeof a); //object
console.log(typeof a2); //object
console.log(typeof a3); //obejct
console.log(typeof a4); //object

console.log(typeof b); //number
console.log(typeof c); //string
console.log(typeof d); //function
console.log(typeof e); //boolean
console.log(typeof g); //undefined
```



instanceof用于检测引用数据类型，可以检测某个构造函数的原型对象是否有出现在某个实例对象的原型链上。

```js
function Man() {}
let man = new Man();
man.__proto__ = null;
console.log(man instanceof Man);//false

console.log([] instanceof Array); //true
console.log([] instanceof Object); //true
```

自定义instanceof：

```js
function my_instanceof(object, fnName) {
  let prototype = object.__proto__;
  while (prototype) {
    if (fnName.prototype === prototype) {
      return true;
    } else {
      prototype = prototype.__proto__;
    }
  }
  return false; 
}
console.log(my_instanceof([], Array)); //true
console.log(my_instanceof([], Object)); //true
console.log(my_instanceof({}, Array)); //false
```



### 写一个函数判断变量类型:

方法一：利用typeof和instanceof

```js
// 2.然后通过typeof判断出其他的基本数据类型,若为number还需进一步判断是否为NaN，注意：function的检测直接可以在typeof的判断中进行
// 3.对于是obejct的数据在判断的时候需要先判断是否为Obejct，再进一步判断是数组，还是日期，如果都不是，那就是对象
// 总的来说分为3段：null,"非object"和object
function getType(a) {
    let state = typeof a;
    if (state != "object") {
        switch (state) {
            case "string":
                console.log("字符串");
                break;
            case "number":
                if (isNaN(a)) {
                    console.log("NaN");
                } else {
                    console.log("数字");
                }
                break;
            case "boolean":
                console.log("布尔值");
                break;
            case "undefined":
                console.log("未赋值变量");
                break;
            case "function":
                console.log("函数");
        }
    } else {
        if (a instanceof Object) {
            if (a instanceof Array) {
                console.log("数组");
            } else if (a instanceof Date) {
                console.log("时间");
            } else {
                console.log("对象");
            }
        }else{
            console.log("空值")
        }
    }
}
getType("sss"); //字符串
getType(21312); //数字
getType(true); //布尔值
getType(null); //空值
let m;
getType(m); //未赋值变量
getType([]); //数组
getType({}); //对象
getType(new Date()); //时间
getType(function () {}); //函数
getType(NaN); //NaN

```



方法二：利用Obejct.prototype.toString()方法（参照js笔记-25.toString方法.js）

```js
function getType(value) {
    let toString = Object.prototype.toString;
    let str = toString.call(value);//[object Function]
    let type = str.substring(8, str.length - 1);
    //或
    let type = str.slice(8,-1)
    
    // 这里需要额外判断NaN,注意：不能使用isNaN,因为存在Number转换
    if (Number.isNaN(value)) {
        console.log("NaN");
        return;
    } else {
        console.log(type); 	 
    }
}
getType("sss"); //String
getType(21312); //Number
getType(true); //Boolean
getType(null); //Null
let m;
getType(m); //Undefined
getType([]); //Array
getType({}); //Object
getType(new Date()); //Date
getType(function () {}); //Function
getType(NaN); //NaN

```



## 数组：

### 数组的方法：

#### ES5：

- push unshift

- pop shift

- splice  slice 

  ```js
  arr.splice(start,count,addElement) //从start位置截取count个元素，然后添加上addElement
  
  arr.slice(start,end) //截取[start,end)的数据。end可以为负数
  //slice的重要应用：将伪数组装换为真正的数组
  //原理是slice内部实现机制是这样的: 当没有传递参数时，会创建一个新的数组，然后将每一个元素拷贝在这个新数组中（所以这也是一种浅拷贝）
  Array.prototype.slice.call({0:'a',1:'b',length:2});//['a','b']
  Array.prototype.slice.call(document.querySelectorAll("div"));
  Array.prototype.slice.call(arguments)
  ```

- reverse sort

- valueOf toString

- concat (不改变原数组)

- join

  ```js
  //其内部是先将每一个元素通过toString()转换为字符串，然后再通过指定的连接符进行连接。比如某个元素为{}，则在最终的字符串中，其结果为[object Object]
  ```

-  every some forEach filter map reduce

  ```js
  //reduce 该方法会对每一个元素进行累积处理，最终返回一个累积处理的结果
  [1,2,3,4,5].reduce((a,b)=>a+b);//15 求数组的累加和
  [1,2,3,4,5].reduce((a,b)=>a*b);//120 求数组的累乘
  ```

- indexOf lastIndexOf

- Array.isArray

  

#### **ES6：**

- find,findIndex

  ```js
  [1, 5, 10, 15].find(function(value, index, arr) {
    return value > 9;
  }) // 10
  ```

- fill

  ```js
  //填充数组
  let a = [1, 2, 3, 4, 5, 6, 7, 8];
  a.fill("a", 3, 5);
  console.log(a); //[1,2,3,'a','a',6,7,8]
  
  // 创建数组并初始化值
  let newArr = new Array(7).fill(1);
  console.log(newArr); //[1,1,1,1,1,1,1]
  ```

- entries,keys,values 

  ```js
  //可以生成一个迭代器对象，然后可以通过for...of进行遍历
  ```

- includes

  ```js
  查询是否存在某元素，也可以查询指定索引位置及其后面的元素是否存在某元素
  ```

- for...of  

  ```js
  //用于遍历数组和迭代器对象
  ```

- Array.from

  ```
  浅拷贝一个数组
  ```

- Array.of

  ```
  Array.of(1,3,4,5)//创建一个数组
  ```

- copyWithin 

  - 数组内部元素替换

  

#### 将其他数据类型的数据转换为字符串的方法：

- xxx.toString()
- String(xxx)
- 隐式转换 xxx+""





### 数组去重(7种)：

https://segmentfault.com/a/1190000016418021?utm_source=tag-newest

```js
// 方法1.indexOf方法,判断新数组中是否存在该元素
let arr = [11, 22, 33, 22, 44];
let newArr = [];
arr.forEach((item) => {
    if (newArr.indexOf(item) == -1) {  //indexOf会平添复杂度
        newArr.push(item);
    }
});
console.log(newArr); //[ 11, 22, 33, 44 ]

// 方法2：将数组的每个元素存储在对象的键中，若后面有重复，则删除数组中的该元素
let arr2=[11, 22, 33, 22, 44];
let obj = {};
for(let i=0;i<arr2.length;i++){
    var tmp=arr2[i];
    if(obj[tmp]){
        arr2.splice(i,1);  //splice的复杂度也很高的
        i--;
    }else{
        obj[tmp]=tmp;
    }
}
console.log(arr2);//[ 11, 22, 33, 44 ]


//♥ ♥ ♥ 第二种方法的优化方案：添加一个新的数组来存储没有重复的元素，不直接在原数组中修改。
var arr=[1,2,1,4,2];
var obj={};
var newArr=[];
for(var i=0;i<arr.length;i++){
	if(!obj[arr[i]]){
        obj[arr[i]]=true;
        newArr.push(arr[i])
    }
}
console.log(newArr)//[1,2,4]



// 方法3：双重for循环+splice 一个元素一个元素的比较，删除重复的值
let arr5 = [11, 22, 33, 22, 44];
for (let i = 0; i < arr5.length; i++) {
    for (let j = i + 1; j < arr5.length; j++) {
        if (arr5[i] == arr5[j]) {
            arr5.splice(j, 1);   //splice复杂度也很高
            j--;
        }
    }
}
console.log(arr5); //[ 11, 22, 33, 44 ]

// (x 还需要排序，复杂度太高) 方法4：sort排序+for循环 排序后，将后面一项与前一项进行比较
let arr6 = [11, 22, 33, 22, 44];
arr6.sort();
let newArr6 = [];
newArr6.push(arr6[0]);
for (let i = 1; i < arr6.length; i++) {
    // 如果后一项与前一项不同，则向新数组中添加元素
    if (arr6[i] != arr6[i - 1]) {
        newArr6.push(arr[i]);
    }
}
console.log(newArr6); //[ 11, 22, 22, 44 ]

// (比较有意思，不过还是用到了indexOf)方法5：利用filter 只返回第一次出现的值
let arr7 = [11, 22, 33, 22, 44];
let newArr7 = arr7.filter((item, index) => {
    // 只返回数组中第一次出现的该值
    return arr7.indexOf(item) == index;
});
console.log(newArr7); //[ 11, 22, 22, 44 ]
//该种方法跟第一种类似，是遍历每个元素，然后再原数组中判断当前元素的下标是否为第一次出现的元素的下标。
var arr = [1, 2, 1, 2, 1, 1, 3];
var newArr = [];
for (var i = 0; i < arr.length; i++) {
  if (arr.indexOf(arr[i]) == i) {
    newArr.push(arr[i]);
  }
}
console.log(newArr);


// 方法6：ES6 Set集合+Array.from()
let newArr3 = Array.from(new Set(arr)); //通过Array.from将具有iterator接口的数据结构转换为数组
console.log(newArr3); //[ 11, 22, 33, 44 ]

// 方法7：ES6 Set集合+ ...展开运算符
let newArr4 = [...new Set(arr)];
console.log(newArr4); //[ 11, 22, 33, 44 ]

```



### 如何判断一个变量是否为数组(4种)：

```js
let a=[];

//方法1：instanceof
console.log(a instanceof Array);//true

//方法2：Array.isArray
console.log(Array.isArray(a));//true

//方法3：Object.prototype.toString
let state=Object.prototype.toString.call(a).includes("Array");
//或
let state=Object.prototype.toString.call(a).slice(8,-1);
console.log(state)//true


//方法4：判断该对象的原型对象中的constructor属性指向的构造函数是否为Array
console.log([].__proto__.constructor.toString().includes("Array"))//true
console.log({}.__proto__.constructor.toString().includes("Array"))//false
```



### 数组遍历方法的比较：

1.for循环（缺点：写法麻烦）

2.forEach

数组的每个元素都会执行指定的函数，无法通过break和return跳出循环

3.for...in 

主要是为遍历对象设计的，遍历出的对象的键值，且是字符串的形式

还会遍历出原型链上的属性

```js
for (const i in [1, 2, 3, 4]) {
    console.log(i);// 0 1 2 3
    console.log(typeof i);//string
}


let o = {
  name: "liu",
  age: 21,
};
o.__proto__.sing = function () {
  console.log("sing");
};
console.log(o);
for (let key in o) {
  console.log(key);//name age sing
}

```

4.for...of  

跟for...in一样简洁；

可以与break,continue,return搭配使用；

可以遍历所有数据结构。一个数据结构只要部署了Symbol.iterator属性，就被视为具有 iterator 接口，就可以用for...of循环遍历它的成员。for...of的原理是该语法内部会自动调用该数据结构的Symbol.iterator属性，然后根据next获取其中的值。

原生具备iterator接口的数据结构：Array String Set Map arguments对象 （DOM NodeList 对象） Generator 对象；

Object不具有Iterator接口，所以不能通过for...of遍历。

```js
for (const i of [1, 2, 3, 4, 5]) {
    if (i > 4) {
        return;
    }
    console.log(i); //1 2 3 4
}
```



### 如何将一个伪数组转换为真实的数组：

常见的伪数组：arguments,NodeList(querrySelectorAll)

```js
//方法一：最原始的方法
//遍历每一个属性，添加在新数组中
for(var i=0;i<arguments.length;i++){
    arr.push(arguments[i])
}

//方法二：使用slice
//原理是slice函数的内部在不传入参数时，会将this中所有的属性都添加在一个新的数组中，最后会返回这个数组
Array.prototype.slice.call(arguments);

//方法三：使用Array.from 
//Array.from可以将类数组对象和部署了iterator接口的对象转化为数组
Array.from(arguments)

//方法四：扩展运算符,扩展运算符的原理也是调用了Iterator接口
var arr=[...arguments]
```



## String包装对象：

### String的方法：



#### ES5:

- indexOf()    lastIndexOf() 

- charAt()  相当于H5新增的str[index] 

- charCodeAt() 

- concat() 相当于+

- substring()    substr()
  
  - ```
    str.substring(start,end)  效果与str.slice(start,end)相同
    str.substr(start,count) 类似于splice
    ```
  
- split() 

- trim()

- toLowerCase()   toUpperCase()

- slice() 
  - 与数组的slice相同,str.slice(start,end)
  - ♥ 经常用来截取最后一个字符之前的字符串:str.slice(0,-1)

- replace() 

  - ```js
    'cdwedwe'.replace('c','mm')// 'mmdwedwe'
    //替换全部需要使用正则表达式
    'aabbcc'.replace(/a/g,'m')//mmbbcc
    ```

- match()

  - ```js
    'fewcwecwec'.match('wc')//[ 'wc', index: 2, input: 'fewcwecwec', groups: undefined ]
    'fewcwecwec'.match('wc3')//null
    ```

- search()

  - ```js
    'acddc'.search('cd')//1
    'acddc'.search('ddd')//-1
    ```




#### ES6新增：

- includes()
- replaceAll()



#### 字符串转数字的方法:

parseInt() parseFloat()

Number()

'12121'-0  隐式转换





#### string的startwith和indexof两种方法的区别:

indexOf是ES5中的方法，用于返回字符串中某个字符出现的位置，返回值为数字。

startwith是ES6新增的方法，用于检测某字符是否在原字符串的头部，返回值为布尔值。第二个参数表示开始搜索的位置。

```js
let s = 'Hello world!';
s.startsWith('Hello') // true
s.startsWith('world', 6) // true
```





## Boolean:

```js
//   代表空，否定的值都会被转换为false,比如："" 0 NaN null undefined
console.log(Boolean("")); //false
console.log(Boolean(0)); //false
console.log(Boolean(NaN)); //false
console.log(Boolean(null)); //false
console.log(Boolean(undefined)); //false
console.log(Boolean({})); //true
console.log(Boolean([])); //true
console.log(Boolean("''")); //true
```



## Object:

### Object的方法：

- Object.keys()
- Object.getOwnPropertyNames()
- Object.prototype.valueOf()
- Object.prototype.toString()
- Object.prototype.hasOwnProperty()

### 怎么遍历出对象上的属性:

for...in 注意：还会遍历出对象原型对象上的方法，可以通过obj.**hasOwnProperty**(key)选择属于自身的属性。

Object.keys()  会返回一个包含属性的数组。

Object.getOwnPropertyNames()   返回一个包含属性的数组。

前两种只能遍历出可枚举的属性，第三种还能遍历出不可枚举的属性。



# :tractor:  ES6相关



## 简单讲一讲ES6的一些新特性:

1. let、const变量，**块级作用域**。
   - ES5只有全局作用域和函数作用域，块级作用域的好处是不再需要立即执行的函数表达式，循环体中的闭包不再有问题。
2. 解构赋值 {data}

3. 各种数据类型扩展的方法：

   - 数组：**扩展运算符...**   
     - 展开一个数组或对象
     - 可以用于数组的合并以及对象的合并
   - 字符串：
     - **模板字符串**
   - 函数：
     - 默认参数
     - **rest参数：用在形参的位置,...xxx，用于接收多余的参数，可以代替arguments对象**
     - 箭头函数
   - 对象：
     - 提供了一些简写的方式，比如对象键名和值名相同时，可以省略为一个；对象中的方法可以省略掉function关键字

4. 引入了新的基本数据类型Symbol

5. 引入了新的数据结构Set和Map

6. 引入了**promise**，generator，async/await，更强大的异步解决方案

7. 引入了Class类的概念，通过Class可以更好的实现面向对象编程
8. 引入了**ES6模块**的概念，便于模块化编程。其模块功能主要有两个命令构成，export和import，export命令用于规定模块的对外接口，import命令用于输入其他模块提供的功能



## let const var的区别 :

| 比较类型                                             | var                  | let , const                        |
| ---------------------------------------------------- | -------------------- | ---------------------------------- |
| 作用范围                                             | 没有块级作用域的概念 | 声明let和const的变量存在块级作用域 |
| 变量提升                                             | 存在                 | 不存在                             |
| 是否允许重新赋值                                     | 可以                 | let可以，const不可以               |
| 在全局执行环境下声明的变量是否会被挂载到window对象上 | 会                   | 不会                               |
| 是否允许重新定义                                     | 可以                 | 不可以                             |
| 特性                                                 |                      | 声明的const变量必须赋初值          |



## rest参数与arguments的区别：

```js
function fn(...params) {
    console.log(params);//[ 1, 2, 3, 4 ]
    console.log(arguments);//[Arguments] { '0': 1, '1': 2, '2': 3, '3': 4 }
}
fn(1,2,3,4)
```

rest参数返回的是一个真实的数组，ES5中的arguments返回的是伪数组，其实是一个对象。

arguments可以通过ES6中的Array.from转换为真正的数组。



## 箭头函数：

### **箭头函数与普通函数的区别：（箭头函数的特性）**

- 省略function关键字，**写法简单**，尤其是方便了回调函数的书写，比如forEach中的回调函数

- 箭头函数中没有自己的**this**，其内部的this其实就是引用的外部的执行环境，即this指向的始终是声明该箭头函数时所在的执行环境

- 没有**arguments**对象，但可以使用...rest参数来代替

  - ```
    var fn = (...args) => {
        console.log(args);
        console.log(arguments);//无法获取
    };
    fn(1, 2, 4);
    ```



### 不适合在箭头函数中使用this的场景：

```js
//1.定义对象的方法时
const cat = {
  lives: 9,
  jumps: () => {
    this.lives--;
  }
}
//因为对象不构成单独的作用域，导致jumps箭头函数定义时的作用域就是全局作用域。


//2.需要动态this的时候，也不应使用箭头函数
var button = document.getElementById('press');
button.addEventListener('click', () => {
  this.classList.toggle('on');//这里的this指向的是全局对象
});
```











## 简单介绍一下symbol:

Symbol是es6引入的一种新的基本数据类型。

特性之一就是可以用于创建**唯一的标识**，可以避免为对象添加属性时的命名冲突。

特性之二是通过Symbol添加的属性具有一定的**隐秘性**，无法通过for...in和Obejct.keys访问。但是可以被Obejct.getOwnPropertySymbols(obj)访问到,该方法返回的是一个数组



## 对于js临时死区的理解：

ES6 明确规定，在块级作用域中声明的let,const变量，会形成封闭的作用域。凡是在声明之前就使用这些变量，就会报错。这种语法被称为暂时性死区（temporal dead zone ，简称 TDZ）。简单来说就是临时死区禁止在声明变量之前访问它。

```js
var temp = 123;
if(true){
    console.log(temp);//ReferenceError: Cannot access 'temp' before initialization
    let temp;
}

//“暂时性死区”也意味着typeof不再是一个百分之百安全的操作。
typeof x; // ReferenceError: x is not defined
let x;

```

ES6规定暂时性死区和let,const不出现变量提升的目的是为了减少运行时的错误。



# :minibus: ​ DOM

## DOM是什么：

DOM（Document Object Model）文档对象模型，是**处理可扩展标志语言**的标准编程接口，用于将页面与编程语言联系起来。

DOM 是 **W3C** 的标准； [所有浏览器公共遵守的标准]



## DOM0级和DOM2级有什么区别：

DOM0级中为某个dom元素绑定多个事件时，只有最后一个事件有效。onclick

DOM2级中可以为单个元素绑定多个事件，每个事件都可以被触发。addEventListener



## textContent、innerText、innnerHTML、value的区别：

- textContent用来获取和设置文本内容，与innerText的差别是:textContent获取到的内容包括了元素中的style标签和script标签的内容。
- innerText只能获取和设置文本内容，不能获取和设置html代码
- innerHTML可以获取和设置html代码
- value获取的是表单元素的值



## attribute与property的区别：

- atrribute是指html标签上的特殊属性以及自定义的属性，比如class,id,title,alt

- property是指dom节点对象身上的属性包括特殊属性，比如className,children,childNodes,attributes，但不包括自定义属性。

- property里的attributes属性包括了attribute属性和自定义的attribute



##  关于dom的api有什么：

https://www.cnblogs.com/betgar/articles/5084855.html

节点创建型api：

- document.createElement()
- document,createTextNode()
- parent.cloneNode(true)
- document.createDocumentFragment() 创建文档片段,解决大量添加节点造成的回流问题

页面修改型API：

- parent.appendChild(child)
- parent.insertBefore(newNode,referenceNode) 将新元素添加到父元素中指定的子元素前面
- parent.removeChild(child)
- parent.replcaeChild(newChild,oldChild)

节点查询型API：

- document.getElementById()
- document.getElementsByTagName() 返回的是一个即时的HTMLCollection类型
- document.getElementsByName() 根据指定的name属性获取元素,返回的是一个即时的NodeList
- document.getElementsByClassName()  返回的是一个即时的HTMLCollection
- document.querySelector() 获取匹配到的第一个元素，采用的是深度优先搜索。
- docuemnt.querySelectorAll()
  - 返回的是一个非即时的NodeList，也就是说结果不会随着文档树的变化而变化

节点关系型api：

- 父关系型：
  - node.parentNode()
- 兄弟关系型
  - node.previouSibling() 返回节点的前一个节点（包括元素节点，文本节点，注释节点）
  - node.previousElementSibling() 返回前一个元素节点
  - node.nextSibling() 返回下一个节点
  - node.nextElementSibling() 返回下一个元素节点
- 子关系型
  - parent.childNodes() 返回一个即时的NodeList，包括了文本节点和注释节点
  - parent.children() 一个即时的HTMLCollection，子节点都是Element
  - parent.firsrtNode()
  - parent.lastNode()
  - hasChildNodes()

元素属性型api：

- element.setAttribute("name","value") 为元素添加属性
- element.getAtrribute("name") 获取元素的属性

元素样式型api：

- window.getComputedStyle(element)  返回一个CSSStyleDeclaration,可以从中访问元素的任意样式属性。
- element.getBoundingClientRect() 返回一个DOMRect对象，里面**:star: 包括了元素相对于可视区的位置top,left**,以及元素的大小,单位为纯数字。可用于判断某元素是否出现在了可视区域。



## DOM节点的属性：

- 元素节点
  - nodeType=1
  - nodeName
    - 与tagName一样，都是指属性名，默认大写  eg:DIV
  - nodeValue 
    - null
- 文本节点（换行属于文本节点）
  - nodeType=2
  - **nodeName #text**
  - **nodeValue 文本内容**
- 属性节点
  - nodeType=3
  - **nodeName 属性名**
  - **nodeValue 属性值**
- 注释节点
  - nodeType=8
  - **nodeName #comment**
  - **nodeValue 注释的内容**



- children 返回所有的元素节点
- childNodes 返回所有的子节点
- attributes 返回元素的所有属性节点





## 什么是事件监听:

addEventListener()方法，用于向指定元素添加事件句柄，它可以更简单的控制事件，语法为

element.addEventListener(event, function, useCapture);

第一个参数是事件的类型(如 "click" 或 "mousedown").

第二个参数是事件触发后调用的函数。

第三个参数是个布尔值用于描述事件是冒泡还是捕获。该参数是可选的。

事件传递有两种方式，冒泡和捕获

事件传递定义了元素事件触发的顺序，如果你将P元素插入到div元素中，用户点击P元素，

在冒泡中，内部元素先被触发，然后再触发外部元素，

捕获中，外部元素先被触发，在触发内部元素，

## 说说前端中的事件流

什么叫Dom事件流？

事件发生时会在元素节点之间按照特定的顺序传播，整个过程分为捕获阶段，目标阶段和冒泡阶段，这个传播过程叫做Dom事件流。



事件冒泡：从事件源逐级向上传播到DOM最顶层节点的过程。

事件捕获：从DOM最顶层节点逐级向下传播到事件源的过程。



addEventListener用于指定事件处理程序，共接收三个参数。分别是触发事件，事件处理程序函数以及一个布尔值。第三个参数默认为false，表示在该事件的处理函数会在冒泡阶段被调用。若改为true，则表示事件处理函数会在捕获阶段被调用。



IE只支持事件冒泡。





## 如何让事件先冒泡后捕获

原本的事件流中，是先捕获再冒泡。

对于目标元素来说，如果DOM节点通过addEventListener同时绑定了两个事件监听函数，一个用于捕获，一个用于冒泡，那么两个事件的执行顺序是按照代码添加的顺序执行的。所以，先绑定冒泡的函数，再绑定捕获的函数，即可实现。

对于非目标元素来说，可以给捕获事件的处理程序添加一个定时器，将处理程序推入下一个宏任务执行。	



## 说一下事件代理：

事件委托是指  不在子节点单独设置事件监听器，而将事件监听器设置在父节点上，再利用**冒泡原理**使每一个子节点都能触发该事件。

事件委托的优点：只操作一次Dom，提高了程序的性能。

常用于

​	ul和li标签的事件监听，一般采用事件委托机制将事件监听器绑定在ul上。

​	还适合动态元素的绑定，新添加的子元素不需单独添加事件处理程序。

### 了解事件代理吗，这样做有什么好处

事件代理/事件委托：利用了事件冒泡，只指定一个事件处理程序，就可以管理某一类型的事件，

简而言之：事件代理就是说我们将事件添加到本来要添加的事件的父节点，将事件委托给父节点来触发处理函数，这通常会使用在大量的同级元素需要添加同一类事件的时候，比如一个动态的非常多的列表，需要为每个列表项都添加点击事件，这时就可以使用事件代理，通过判断e.target.nodeName来判断发生的具体元素，这样做的好处是减少事件绑定，同时动态的DOM结构仍然可以监听，事件代理发生在冒泡阶段



### 事件委托以及冒泡原理:

事件委托是利用冒泡阶段的运行机制来实现的，就是把一个元素响应事件的函数委托到另一个元素，一般是把一组元素的事件委托到他的父元素上。

委托的优点是减少内存消耗，提高了效率

动态绑定事件

事件冒泡，就是元素自身的事件被触发后，如果父元素有相同的事件，如onclick事件，那么元素本身的触发状态就会传递，也就是冒到父元素，父元素的相同事件也会一级一级根据嵌套关系向外触发，直到document/window，冒泡过程结束。

###  事件代理在捕获阶段的实际应用：

可以在父元素层面阻止事件向子元素传播，也可代替子元素执行某些操作。



## 事件类型相关：



#### mouseover和mouseenter的区别



**mouseover**：当鼠标移入元素或其子元素都会触发事件，所以有一个重复触发，冒泡的过程。对应的移出事件是**mouseout**。

**mouseenter**：鼠标移入子元素时不会再次触发mouseenter事件，对应的移出事件是**mouseleave**。





#### 三种键盘事件的区别：

keyup: 松开键盘触发



keydown:按下键盘触发



keypress:不能识别功能键，比如ctrl,alt,shift,左右箭头。可以区分大小写。





在输入框中按下一个键的全过程：触发keydown/keypress事件->文字键入输入框中->触发keyup事件

按下按键后自动对焦输入框，应该使用keyup，不应该使用keydown/keypress,因为后者会使按键落入输入框中,对于回车键的话还不能使用keypress，因为keypress不能识别功能键。



## 静态绑定事件与动态绑定事件的区别：

静态绑定事件是指直接在Html标签上通过onclick="hide()"来绑定事件。

缺点：

- html和js文件存在耦合，不符合结构和行为分离的原则。
- 可能存在错误，如果js代码还没加载就触发该事件则会抛出错误



动态绑定事件是指通过js动态绑定事件，element.onclick()  element.addEventListener()。



## 元素的位置和大小------三大系列

### 1.offset系列：

**:star: offsetTop（获取元素位置）:	相对于带有‘定位’的父元素的偏移量**

offsetHeight: content+padding+border 

offsetParent:  返回带有定位的父元素



### 2.cilent系列：

clientTop:	上边框border-top的宽度 

**:star: clientHeight(获取元素宽高):	content+padding,不包含border。**



### 3.scroll系列：

**:star: scrollTop（获取滚动的距离）:	向下滚动后，上面被卷去的距离，即隐藏的高度。**

scrollHeight:	content+padding ,其中的content包含了因为滚动被隐藏的部分。



### 4.document.clientWidth与document.style.width的区别：

区别1：前者可以获取任意样式表中的width样式值，包括行内样式的，内嵌样式的，外部样式的；后者只能获取行内的样式。

**区别2：clientWidth获取的是数字型的，style获取的带有px后缀**

区别3：clientWidth包含了padding,而style.width只包含content。

**区别4：clientWidth是只读属性，所以一般用于获取元素的大小；而style.width是可读可写的，可用于获取，也可用于修改。**



### 5.特殊：

**获取html元素：**document.documentElement

**获取body元素：**document.body

获取可视区域的宽高：

- **window.innerWeight**  获取的宽度包括纵向滚动条的宽度。
- **:star: document.documentElement.clientWidth**  获取的是正宗的可视区域的宽度
- **document.body.clientWidth ** 获取的是body的宽度，即content+padding。

获取window向下滚动时被卷去的高度： window.pageYOffset (注意：不能使用window.scrollTop)



### 6.判断一个元素是否已经出现在了可视区域：(此问题可应用在懒加载中)

方法一：计算比较麻烦

需满足条件： xxx.offsetTop（需要递归叠加获取）<= window.pageYOffset+document.documentElement.clientHeight

即该元素距页面顶端的距离 <= window向下滚动隐藏的距离+window的可视区域的高度。



方法二：使用element.getBoundingClientRect().top获取在可视区的位置。

```js
var viewportHeight = document.documentElement.clientHeight;
window.addEventListener("scroll", function () {
    let offset = box2.getBoundingClientRect().top;
    // console.log(offset);
    if (offset < viewportHeight) {  //当距离可视区的top小于可视区的高度时，表示已经进入了可视区域
        if (offset > -box2.clientHeight) {
            console.log("来了");
        } else {
            console.log("走了");
        }
    } else {
        console.log("走了");
    }
```



## 鼠标坐标

clientX,clientY:	鼠标在可视区的坐标,可视区即展示在用户面前的页面区域

**pageX,pageY:**	鼠标在整个html页面的坐标。一般实际应用使用pageX和pageY

screenX,screenY:	鼠标在电脑屏幕的坐标，即整个电脑屏幕，15寸这个s



##  js拖动及拖拽功能的实现

### 拖动功能的实现：

**前置条件：**

1.拖动事件的三个过程：鼠标按下mousedown,鼠标移动mousemove,鼠标松开mouseup

鼠标按下后执行mousemove事件。

2.盒子采用绝对定位，通过left和top属性来修改位置。



**方法一：**（直接根据鼠标移动的距离确定元素移动的距离）

鼠标的坐标通过clientX,clientY获取：

盒子的定位信息：鼠标移动时候的坐标-鼠标按下去时候的坐标+元素初始情况下的offetLeft.



**方法二：**

鼠标的坐标通过pageX,pageY获取：

先计算鼠标在盒子中的坐标，这是不变的。然后在mousemove的时候通过pageX和pageY减去在盒子中的坐标计算出盒子边缘应该修改为的偏移量。



### 拖拽功能的实现：

使用html5提供的拖拽API（Drag 和 drop）



拖拽功能涉及的基本事件：

**dragstart**:在开始拖放元素时触发。（事件源：被拖拽的元素）

- 这一步需要做的是获取被拖拽元素的id。拖拽事件对象中的dataTransfer属性是专门用来存储拖动过程中的数据的。`ev.dataTransfer.setData("key",value)`

**dragover**：在被拖放在某元素内移动时触发。（事件源：目标元素）

- 这里需要阻止dragover的默认事件（不允许被拖拽）

**drop**：目标元素完全接受被拖放元素时触发。（事件源：目标元素）

- 这里需要阻止drop的默认事件（以链接的形式打开），然后获取之前保存的元素的id  `ev.dataTransfer.getData("key")`，然后将该元素添加到目标元素中。



# :shopping_cart: (BOM)浏览器对象模型：



## 实用的BOM属性对象方法：

- location对象
  - location.**href**-- 返回或设置当前文档的URL
  - location.**search** -- 返回URL中的查询字符串部分。例如 http://www.dreamdu.com/dreamdu.php?id=5&name=dreamdu 返回包括(?)后面的内容?id=5&name=dreamdu
  - location.**hash** -- 返回URL#后面的内容，如果没有#，返回空   #1
  - location.**host**-- 返回URL中的域名部分，例如[www.dreamdu.com](http://www.dreamdu.com/)
  - location.**hostname** -- 返回URL中的主域名部分，例如dreamdu.com
  - location.**pathname** -- 返回URL的域名后的部分。例如 http://www.dreamdu.com/xhtml/ 返回/xhtml/
  - location.**port** -- 返回URL中的端口部分。例如 http://www.dreamdu.com:8080/xhtml/ 返回8080
  - location.**protocol** -- 返回URL中的协议部分。例如 http://www.dreamdu.com:8080/xhtml/ 返回(//)前面的内容http:
  - location.**assign**() -- 重定向页面，与location.href一样，会记录历史，能后退页面
  - location.**replace**() -- 设置当前文档的URL，不记录历史，不能后退页面
  - location.**reload**() -- 重载当前页面,相当于F5。添加参数true则表示强制刷新，直接从服务器获取数据，不从浏览器缓存中取数据，相当于Ctrl+F5

- history对象
  - history.go(n) -- 前进或后退指定的页面数;
  - history.back() -- 后退一页
  - history.forward() -- 前进一页
- navigator对象
  - navigator包含了用户浏览器的信息
  - navigator.userAgent -- 返回用户代理头的字符串表示(就是包括浏览器版本信息等的字符串)
  - navigator.cookieEnabled -- 返回浏览器是否支持(启用)cookie

## :star: setTimeout(fn,100);100毫秒是如何权衡的：

100ms指的是将回调函数加入到任务队列所花的时间。至于具体什么时候执行，需要看主线程的执行栈中是否还有任务在执行。



## 定时器实现动画的最佳时间：16.6ms

大多数电脑显示器的刷新频率是60HZ，大概相当于每秒钟重绘60次。因此，最平滑的动画效果最佳循环间隔是1000ms/60，约等于16.6ms



## setInterval存在的问题：

setInterval是定时的往队列里加入任务，所以如果前面有任务耽搁了太多的时间，队列里就会有大量的任务阻塞着，最终可能会堆叠在一起执行，可以使用setTimeout来解决这个问题：

```js
setTimeout(function fn(){
    ...
	setTimeout(fn,delay)
},delay)
```



## requestAnimationFrame:

**js动画的要求：**

一方面，要求循环间隔必须足够短，这样才能让不同的动画效果显得平滑流畅；另一方面，循环间隔还要足够长，这样才能确保浏览器有能力渲染产生的变化。

**用定时器实现js动画存在的问题：**

定时器回调函数执行的时机**不精确**。定时器中的延时指的是将回调函数加入到任务队列所需花的时间，如果主线程中还有任务在执行，就不能确保回调函数在放入队列后马上执行，这就造成了执行时机的不精确。

**requestAnimationFrame:**

特点：requestAnimationFrame采用系统时间间隔，保证了最佳的绘制效率。

使用方法：requestAnimationFrame接收一个回调函数，这个回调函数会在下一次浏览器重绘之前调用。





## 分别用setInterval,setTimeout,requestAnimationFrame制作有个简单的进度条效果：

setInterval:

```html
<div
     style="width: 0; height: 20px; background-color: orange"
     id="div"
     ></div>
<script>
    let timer = setInterval(() => {
        if (parseInt(div.style.width) >= 500) {
            return clearInterval(timer);
        }
        console.log(div.style.width);
        div.style.width = parseInt(div.style.width) + 5 + "px";
        div.innerHTML = parseInt(div.style.width) / 5 + "%";
    }, 16);
</script>
```

setTimeout:

```html
<div
     style="width: 0; height: 20px; background-color: orange"
     id="div"
     ></div>
<script>
    let timer = setTimeout(function fn() {
        if (parseInt(div.style.width) < 500) {
            div.style.width = parseInt(div.style.width) + 5 + "px";
            div.innerHTML = parseInt(div.style.width) / 5 + "%";
            timer = setTimeout(fn, 16);
        } else {
            clearTimeout(timer);
        }
    }, 16);
</script>
```

requestAnimationFrame:类似于setTimeout,需要一次次的调用

```html
<div
     style="width: 0; height: 20px; background-color: orange"
     id="div"
     ></div>
<script>
    let timer = requestAnimationFrame(function fn() {
        if (parseInt(div.style.width) < 500) {
            div.style.width = parseInt(div.style.width) + 5 + "px";
            div.innerHTML = parseInt(div.style.width) / 5 + "%";
            requestAnimationFrame(fn);
        } else {
            cancelAnimationFrame(timer);
        }
    });
</script>
```



## js中的轮播实现原理？假如一个页面上有两个轮播，你会怎么实现？

1.让图片存在一个数组中，然后将最后一张图片重复添加在数组的头部，将第一张图片重复添加在数组的最后。

2.然后准备一个只能显示一张图片的盒子，对盒子做溢出隐藏处理。

3.通过定时器增减索引，显示对应的图片，实现轮播功能。



如果有两个轮播，可封装一个轮播组件，将需要轮播的图片作为参数传递。



#  :car:  作用域相关



### js的编译时与运行时

https://www.cnblogs.com/pianruijie/p/11454598.html

https://segmentfault.com/a/1190000018001871

https://segmentfault.com/a/1190000000533094

https://www.cnblogs.com/lulin1/p/9712311.html

http://www.frontopen.com/1702.html

js的执行总共有三个过程：语法分析 --> 预编译（词法分析） --> 解释执行



1.语法分析：

- 这个阶段会检测js代码是否存在语法错误。
- 还会构造出一颗抽象语法树（AST）

2.预编译阶段：（在进入执行环境时即进入到了预编译阶段）

- 预编译分为两种：
  - 进入全局执行环境时的预编译：
    - 创建一个全局对象
    - 查找全局变量声明（包括隐式全局变量声明），变量名作全局对象的属性，值为undefined。
    - 查找函数声明，函数名作为全局对象的属性，值为函数引用。
  - 进入函数执行环境时的预编译：
    - 创建一个活动对象
    - 首先会为该活动对象初始化一个arguments属性，里面包含了实参的值。
    - 查找形参和变量声明，如果有对应的实参，则将实参的值赋给他，否则取值为undefined
    - 查找函数声明，函数名作为活动对象的属性，值为函数引用
    - 然后会创建该执行环境中的作用域链，该作用域链是一个链表的结构，作用域链的前端，始终都是当前执行环境的变量对象。如果这个环境是函数，则将其**活动对象**（activation object）作为变量对象。作用域链中的下一个变量对象来自父级的执行环境，而再下一个变量对象则来自再下一个执行环境，一直延续到全局执行环境的变量对象；
  - 预编译阶段大部分会发生在函数执行前

3.解释执行阶段



### 执行环境（词法作用域）与作用域链

**01.执行环境：**

作用域模型有两种：**词法作用域（静态作用域）**和**动态作用域**。

**词法作用域**是指在词法阶段（预编译）定义的作用域，说它是静态的是因为代码在执行时，其词法作用域就已经确定了，词法分析器处理代码时其词法作用域是不变的。

**词法作用域**也称为**执行环境**，其定义了变量或函数有权访问的其他数据，决定了它们各自的行为。每个执行环境都有一个与之关联的**变量对象**。环境中定义的所有变量和函数都保存在这个对象上。



**02.全局执行环境：**

全局执行环境是最外围的一个执行环境。根据 ECMAScript 实现所在的宿主环境不同，表示执行环
境的对象也不一样。**在 Web 浏览器中，全局执行环境被认为是 window 对象**。因此所有全局变量和函数都是作为window对象的属性和方法创建的。





**03.作用域的分类：**
**ES5：**只存在全局作用域和局部作用域（函数作用域）。局限：在if和for循环中声明的变量会变成全局变量；

ES5中通过立即执行函数可以模拟一个块级作用域，封装一些临时变量。



**ES6：**新增了块级作用域的概念，凡是{}包起来的都具有块级作用域，在块级作用域中声明的let,const变量只能在该块级作用域中使用。

有了块级作用域，就可以不用立即执行函数了。



**04.作用域毁销毁**：

某个执行环境中的所有代码执行完毕后，该环境被销毁，保存在其中的所有变量和函数定义也随之销毁（全局执行环境直到应用程序退
出——例如关闭网页或浏览器——时才会被销毁）。



**05.执行流机制：**

每个函数都有自己的执行环境（也就是有与之相关的变量对象）。**当执行流进入一个函数时，会立马创建该函数的执行环境，该执行环境会被推入一个环境栈中。**
**而在函数执行之后，栈将其环境弹出，把控制权返回给之前的执行环境。**ECMAScript 程序中的执行流
正是由这个方便的机制控制着。



**06.作用域链：**

当代码在一个环境中执行时，会创建变量对象的一个**作用域链**（scope chain）。

作用域链的用途，是**保证对执行环境有权访问的所有变量和函数的有序访问**。

作用域链的前端，始终都是当前执行的代码所在环境的变量对象。如果这个环境是函数，则将其**活动对象**（activation object）作为变量对象。活动对象在最开始时只包含一个变量，即 **arguments 对象**（这个对象在全局环境中是不存在的）。作用域链中的下一个变量对象来自包含（外部）环境，而再下一个变量对象则来自下一个包含环境。这样，一直延续到全局执行环境；

**全局执行环境的变量对象始终都是作用域链中的最后一个对象**。



**07.变量的查找规则：**

沿着作用域链一级一级向上查找。



**08.作用域链与原型链的区别：**

作用域链是针对变量的查找规则，原型链是针对对象的属性和方法的查找规则。





### 函数声明，函数表达式，匿名函数，立即执行函数：

https://www.cnblogs.com/lichunyan/p/7894867.html

```js
//函数声明，存在函数提升
fn();
function fn(){
    console.log(111)
};
function (){
}()  //这是错误的语法，因为函数声明时必须带有函数名

//函数表达式
//函数表达式是作为表达式语句的一部分存在；当它没有函数名称的时侯，则称为匿名函数；
let fn2=function(){
    console.log(111)
}
fn2();

let fn3=function fn(){
    consploe.log(222)
}
fn3()

//只有函数表达式才能被执行符号()执行
+function test(){
    console.log(222)
}()


//里面的funciton会被解析为一个函数表达式，所以立即执行函数也被称为立即执行的函数表达式
(function(){})()

```





### 什么是闭包

```js
function makeFunc() {
    var name = "Mozilla";
    function displayName() {
        alert(name);
    }
    return displayName;
}

var myFunc = makeFunc();
myFunc();
```

**闭包：**

闭包是一种现象，由于存在作用域链的缘故，内部执行环境可以通过作用域链访问到外部执行环境的变量，由于大多数浏览器的垃圾回收机制是标记清除法，所以对于被引用的变量，垃圾回收器不会将其标记为离开环境，所以垃圾回收器不会对该变量进行回收。内部执行环境可以永久的访问和修改这个变量。





### 立即执行函数IIFE

立即执行函数其实相当于立即执行的函数表达式。因为立即执行函数是由两个括号组合起来的，js引擎遇到第一个括号时会将其解析为函数表达式，然后遇到第二个括号时就会立即执行。

有什么用：
立即执行函数会开辟一个新的作用域，围绕这个作用域可以做很多事情，比如通过闭包缓存一个变量，获取封装第三方的js库，避免污染外部的环境。

应用：

1.循环绑定事件时，为每一次循环绑定自己对应的索引值。（立即执行函数与闭包的结合，让立即执行函数内部的函数引用其变量）

```js
for (var i = 0; i < btns.length; i++) {
    ((i) => {
        btns[i].onclick = function () {
            console.log(i);
        };
    })(i);
}
```

2.定时器，为每一个定时器函数绑定自己对应的索引值。（立即执行函数与闭包的结合）

```js
for (var i = 0; i < 10; i++) {
    ((i) => {
        setTimeout(() => {
            console.log(i);
        }, 1000);
    })(i);
}
```

原理都是通过立即执行函数开辟新的作用域，让内部的函数引用立即函数的变量，形成闭包，从而可以保证每一个定时器函数引用的变量值都是不同的。



3.封装js库（开辟一个新的作用域，防止污染全局变量）



应用1,2属于立即执行函数与闭包的结合应用，应用3应用的是立即执行函数会开辟一个新的作用域的特性。





### 闭包有什么作用

- 利用闭包可以让一个变量常驻在内存中，利用这个特性，可以实现：

  - 函数的**防抖和节流**，
  - 还可以实现一个只能执行一次的**once函数**，
  - 还可以将闭包中的这个变量当做**私有属性**，然后设置专门的get方法获取这个私有属性。

  

### 闭包在实际中的应用：

#### 1.定时器

#### 2.事件监听器

#### 3.单例模式

####  4.js的节流和防抖

https://www.cnblogs.com/momo798/p/9177767.html

在进行窗口的resize、scroll，输入框内容校验等操作时，如果事件处理函数调用的频率无限制，会加重浏览器的负担，导致用户体验非常糟糕。此时我们可以采用debounce（防抖）和throttle（节流）的方式来**减少调用频率**，同时又不影响实际效果。 



函数的防抖和节流是闭包的充分应用。



**函数防抖（debounce）**:

当持续触发事件时，一定时间段内没有再触发事件，事件处理函数才会执行一次，如果设定的时间到来之前，又一次触发了事件，就重新开始延时。

```js
// 防抖
function debounce(fn, wait) {
    let timeout = null;
    return function () {
        if (timeout) clearTimeout(timeout);
        timeout = setTimeout(fn, wait);
    };
}
//   处理函数
function handle() {
    console.log(Math.random());
}
//   滚动事件
window.addEventListener("scroll", debounce(handle, 1000));
```



**函数节流（throttle）：**

当持续触发事件时，保证一定时间段内只调用一次事件处理函数。

方法一：时间戳（存在的问题：当在指定的时间内只触发了一次时，并不会触发这个事件处理函数）

```js
function throttle(fn, delay) {
    let prev = Date.now();
    console.log(prev);
    return function () {
        let now = Date.now();
        if (now - prev > delay) {
            fn();
            prev = Date.now();
        }
    };
}
function handle() {
    console.log(Math.random());
}
window.addEventListener("scroll", throttle(handle, 1000));
```

方法二：定时器

```js
function throttle(fn, delay) {
    let timer = null;
    return function () {
        if (!timer) {
            timer = setTimeout(function () {
                fn();
                timer = null;
            }, delay);
        }
    };
}
function handle() {
    console.log(Math.random());
}
window.addEventListener("scroll", throttle(handle, 1000));
```

方法三：setTimeout+requestAnimationFrame（看看就好）

```js
//requestAnimationFrame可以保证每次重绘最多调用一次回调函数。因此可以用来实现节流。
let enabled = true;
function fn() {
    console.log(Math.random());
}
window.addEventListener("scroll", () => {
    //设置标记变量，可以过滤掉多余requestAnimationFrame的调用
    if (enabled) {
        enabled = false;
        window.requestAnimationFrame(fn);
        //手动限制操作执行的频率
        window.setTimeout(() => {
            enabled = true;
        }, 1000);
    }
});
```



节流与防抖的区别：

函数节流不管事件触发有多频繁，都会保证在规定时间内一定会执行一次真正的事件处理函数，而函数防抖只是在最后一次事件后才触发一次函数。

比如在页面的无限加载场景下，我们需要用户在滚动页面时，每隔一段时间发一次 Ajax 请求，而不是在用户停下滚动页面操作时才去请求数据。这样的场景，就适合用节流技术来实现。



#### 5.如何实现一个私有变量，用getName方法可以访问，不能直接访问

**利用闭包来实现：**将私有变量利用闭包缓存在内存中，而不是放在对象中。

```js
function createPerson(name) {
    var name = name;
    function Person() {}
    Person.prototype.getName = function () {
        return name;
    };
    Person.prototype.setName = function (value) {
        name = value;
    };
    return Person;
}
let Person = createPerson("liu");
let person = new Person();
console.log(person.name); //undefined
console.log(person.getName()); //liu
person.setName("haha");
console.log(person.getName()); //haha

let Person2 = createPerson("liu1");
let person2 = new Person2();
console.log(person2.getName()); //liu1
```



#### 实现一个once函数(传入函数参数)，使其只能执行一次

利用闭包来解决，在函数的开始设置一个标记值，当执行完传入的函数后，更改这个标记值。

```js
function sing(arg1, arg2) {
    console.log(`i like the singer ${arg1} and ${arg2}`);
}
function once(func) {
    let b = true;
    return function () {
        if (b) {
            func.apply(this, arguments);
            b = false;
        } else {
            console.log(undefined);
        }
    };
}
// sing("adele", "wangfei");
let fn = once(sing);
fn("adele", "wangfei"); //i like the singer adele and wangfei
fn("adele", "wangfei"); //undefined
fn("adele", "wangfei"); //undefined
```

该函数与防抖和节流原理相同，都是利用闭包来实现。





#  :railway_car: ​ JS中的垃圾回收机制

js内存的分配以及无用内存的回收都实现了自动管理。垃圾回收机制的原理是找出不再继续使用的变量，然后释放其占用的内存。垃圾收集器会按照固定的时间间隔周期性地执行这一操作。



垃圾回收方式有两种：

**标记清除：**

这是最常见的垃圾回收方式，当变量进入环境时，就标记这个变量为”进入环境“,从逻辑上讲，永远不能释放进入环境的变量所占的内存，只要执行流程进入相应的环境，就可能会用到他们。当离开环境时，就标记为离开环境。

垃圾回收器在‘运行的时候’会给存储在内存中的所有变量都加上标记，然后去掉环境变量中的变量，以及被环境变量中的变量所引用的变量（条件性去除标记），然后再删除所有被标记的变量，最后垃圾回收器，完成了内存的清除工作，并回收他们所占用的内存。



**引用计数法：**

另一种不太常见的方法就是引用计数法，引用计数法的含义就是跟踪记录每个值被引用的次数。

当声明了一个变量，并用一个引用类型的值赋值给该变量，则这个值的引用次数为1。如果一个值的引用次数是0，就表示这个值不再用到了，因此可以将这块内存释放。

```js
var arr=[1,2,3,4];
arr=null;//解除arr对[1,2,3,4]引用，这块内存就可以被垃圾回收机制释放了。
```

引用计数法存在一个问题：循环引用。

```js
function problem() {
    var objA = new Object();
    var objB = new Object();
    objA.someOtherObject = objB;
    objB.anotherObject = objA;
}
```

循环引用导致的问题就是当函数执行完毕后，这两个对象的计数均不为0，如果大量存在这种相互引用，就会导致**内存泄漏**。



# :racing_car: 原型链相关



## 讲一讲js原型链，原型链的顶端是什么？Object的原型是什么？Object的原型的原型是什么？



**原型对象，对象原型，实例对象的区别：**

构造函数默认带有一个prototype属性，这个的属性值是一个对象，即**原型对象**。

原型对象上有一个**constructor**属性，指向了这个构造函数。

由构造函数创建的**实例对象**身上有一个\_\_proto\_\_属性，这个属性指向了构造函数的原型对象，这个属性也被称为**对象原型**。



**原型链**：

实例对象的\_\_proto\_\_指向了构造函数的原型对象；

构造函数的原型对象的\_\_proto\_\_指向了Object的原型对象；

Object的原型对象的\_\_proto\_\_指向为null；



所以，原型链顶端是Object构造函数的原型对象。



**对象身上属性和方法的查找规则**：

依据原型链逐层向上查找。



**利用原型链实现继承：**

ES6之前JS没有类和继承的概念，但可以通过原型来实现继承。

让子构造函数的原型对象指向父构造函数的实例对象，这样当子实例对象上找不到某个方法时，就会去原型对象上找，也即父实例对象，然后再找不到则会去父构造函数的原型对象上找。

注意1：之所以这里子构造函数的原型对象不直接指向父构造函数的原型对象，是因为如果改变该原型对象，会直接影响该父构造函数的原型对象。

注意2：将原型对象指向父构造函数的实例对象后，原来原型对象上的constructor属性就被覆盖了，因此需要单独为其添加constructor属性，让其指向子构造函数。



## 在数组原型链上实现删除数组重复数据的方法：

直接在**原数组构造函数的原型对象**上添加去重函数即可：

```js
//方法一：删除原数组中的重复元素
Array.prototype.cut=function(){
    let obj={}
    for(let i=0;i<this.length;i++){
        let tmp=this[i];
        if(obj[tmp]){
            this.splice(i,1);
            i--;//注意：删除后一定要将i减一位
        }else{
            obj[tmp]=tmp;
        }
    }
    obj=null;
    return this;
}
//方法二：在新数组中添加没有重复的元素
Array.prototype.cut = function () {
  var arr = this;
  var obj = {};
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (!obj[arr[i]]) {
      obj[arr[i]] = true;
      newArr.push(arr[i]);
    }
  }
  return newArr;
};
//方法三：使用ES6中的Set数据结构
Array.prototype.cut=function(){
    return [...new Set(this)];
}


let arr=[1,2,3,4,3,4,5,6,1];
let newArr=arr.cut();
console.log(newArr)//[1, 2, 3, 4, 5, 6]
```



## js的new操作符做了哪些事情:

https://blog.csdn.net/lxcao/article/details/52792466

共四步：

1、创建一个空对象  obj

2、设置原型链   obj.__proto\_\_=Func.prototype

3、调用 Func.apply(obj,arguments)，让Func中的this指向创建的这个对象，并执行Func的函数体。 

4、判断Func的返回值类型。（默认是返回前面创建的对象obj）

如果是引用类型，就返回这个引用类型的对象。否则返回obj对象。



## 实现一个new :

```js
//这里体现了工厂模式的设计思想，ObjectFactory相当于一个工厂，设计了一个统一的接口，会根据参数生成对应的实例对象。
function Person(name, age) {
    this.name = name;
    this.age = age;
}
function ObjectFactory() {
    // 创建一个空对象  obj
    var obj = {};

    var constructor = Array.prototype.shift.call(arguments);
    // 设置原型链   obj.__proto__=Func.prototype
    obj.__proto__ = constructor.prototype;//或者Object.setPrototypeOf(obj,constructor.prototype)
    //   调用 Func.apply(obj,arguments)，让Func中的this指向创建的这个对象，并执行Func的函数体。
    var result = constructor.apply(obj, arguments);
    // 判断Func的返回值类型。如果是值类型，返回原obj。如果是引用类型，就返回这个引用类型的对象。
    return typeof result === "object" ? result : obj;
}
var person = ObjectFactory(Person, "liu", 21);
console.log(person); //Person { name: 'liu', age: 21 }
```



## this的指向问题：

this的7种绑定：

1.普通函数  window

2.对象的方法  对象

3.构造函数  实例对象

4.事件处理函数  事件源

5.定时器函数  window 

6.立即执行函数  window

7.箭头函数（神仙棒，搅屎棍，可能会改变以上所以情况中的this指向，所以在使用箭头函数的时候，需要擦亮双眼看清this指向的到底是谁）

箭头函数中的this是静态的，也就是作用域是不会被改变的，始终指向的是**该箭头函数声明时所在的真正的执行环境**

```js
let o = {
  name: "xiao",
  fn: function () {
    var name = "liu";
    setTimeout(() => {
      console.log(this.name);
    });
  },
};
o.fn(); //xiao

//实例2：
function fn2() {
    setTimeout(() => {
        console.log(this);
    });
}
fn2();//window

//实例3：
window.name = "liu1";
let func5 = () => {
    console.log(this.name);
};
// 箭头函数中this始终指向的是定义该箭头函数时所在的执行环境，其内部是没有this的，所以通过call是不能改变的。
func5.call(obj); //liu1



//实例4：
var a = 0;
function foo(){
    console.log(this.a);
};
var obj = {
    a : 2,
    foo:foo
}
setTimeout(obj.foo,100);//0

//实例4等价于：
var a = 0;
setTimeout(function foo(){
    console.log(this.a);
},100);//0
```



## 改变函数内部this指向的方法：

|                    | call               | apply                                                 | bind                                                         |
| ------------------ | ------------------ | ----------------------------------------------------- | ------------------------------------------------------------ |
| 是否会立即执行函数 | 会                 | 会                                                    | 不会，但会返回一个新的函数                                   |
| 传递的第二个参数   | arg1,arg2的形式    | 数组的形式                                            | arg1,arg2的形式                                              |
| 实际应用场景       | 将伪数组转换为数组 | 调用回调函数时改变内部的this指向；模拟实现new操作符。 | 应用1：定时器函数中默认的this为window，可以通过bind指定其中的this,好处是不会立即调用该函数<br/>应用2：适用于任何想要改变this指向，但不想立即执行的情况，比如绑定事件处理函数时，可以通过bind改变this的指向。 |



## 实现一个call函数：

```js
//前沿：当调用call函数不传递参数时，函数内部的this指向默认为window对象
var name = "liu";
var o = {
    name: "kang",
    fn: function () {
        console.log(this.name);
    },
};

var obj = {
    name: "xiao",
};
o.fn.call(null);//liu
o.fn.call();//liu


//原理：原函数中this的指向是由调用函数的上下文环境决定的，如果将上下文环境改为目标对象，则最终函数内部this指向的就是该目标对象
//简单原理:
function fn1() {
    console.log(this.name);
}
var name = "liu";
var obj = {
    name: "liu2",
};
obj.fn = fn1;
obj.fn(); //liu2
//具体实现：
function fn1() {
    console.log(this.name);
    console.log("参数为", ...arguments);
}
var name = "liu";
var obj = {
    name: "liu2",
};
Function.prototype.my_call = function (obj) {
    //细节点1，若没有传递参数或传递的参数为null，则默认会将内部的this指向window
    obj = obj || window;
    //核心：将原函数挂载在目标对象的一个属性上，通过对象.属性的方式调用该函数时函数内部的指向的就是该目标对象。
    obj.fn = this;
    //var rs = obj.fn1(...[...arguments].slice(1));
    var str = "obj.fn(";
    if(arguments.length>1){
        for (var i = 1; i < arguments.length; i++) {
            str += arguments[i] + ","; //这里也说明了+的优先级比+=大
        }
        str = str.slice(0,-1);
    }
    str += ")";
    var rs = eval(str);
    //细节点2：删除添加在原对象上的函数属性，不留痕迹，彻彻底底。
    delete obj.fn;
    return rs;
};
fn1.my_call(obj, 1, 2, 3); //liu2 参数为 1, 2, 3
fn1.my_call(); //liu 参数为
```



## 实现一个apply函数：

```js
//原理与实现call函数类似，都是通过改变原函数的调用环境来实现。
function fn() {
    console.log(this.name);
    console.log("传入的参数为", ...arguments);
}
var name = "liu";
var obj = {
    name: "xiao",
};
// fn.apply(obj, [1, 2, 3]);//xiao
Function.prototype.my_apply = function (obj, args) {
    obj = obj || window;
    //核心与call方法的实现一致
    obj.fn = this;
    var str = "obj.fn(";
    //设置参数
    if (args && args.length>0) {        
        for (var i = 0; i < args.length; i++) {
            str += args[i] + ",";
        }
        str = str.slice(0,-1);
    }
    str += ")";
    var rs = eval(str);
    delete obj.fn;
    return rs;
};
fn.my_apply(obj, [1, 2, 3]);
fn.my_apply(obj);

```



## 实现一个bind函数：

```js
function fn() {
    console.log(this.name);
    console.log("传入的参数为", ...arguments);
}
var name = "liu";
var obj = {
    name: "liu2",
};
// var newFn = fn.bind(obj, 1, 2, 3, 4);
// newFn(); //liu2
Function.prototype.my_bind = function (obj) {
    obj = obj || window;
    //核心1：将原函数绑定在目标对象的属性上
    obj.fn = this;
    const args = arguments;
    var str = "obj.fn(";
    if(arguments.length>1){
        for (var i = 1; i < args.length; i++) {
            str += args[i] + ",";
        }
        str = str.slice(0,-1);   
    }
    str += ")";
    //核心2；利用闭包返回一个函数
    return function () {
        return eval(str);
    };
};
var newFn = fn.my_bind(obj, 1, 2, 3, 4);
newFn(); //liu2 传入的参数为 1 2 3 4

```



## Function.\_\__proto\_\__是什么？

注意：Function构造函数的对象原型与Function构造函数的原型对象相同。

即Function.\_\_proto\_\_==Function.prototype。记住就行。



Object.getPrototypeOf：用于获取对象的原型对象，可以用来代替\_\_proto\_\_；因为\_\_proto\_\_中的下划线可能存在语义性的问题，该属性可能还存在兼容性的问题。

```js
let object = {};
console.log(Object.getPrototypeOf(object) === object.__proto__); //true
```



## js实现继承的几种方式：

继承的本质：就是在new操作符执行的过程中插了一脚。

```js
function Animal(name, size, likes) {
    this.name = name || "Animal";
    this.size = size || "small";
    this.sleep = function () {
        console.log(this.name + " is sleeping");
    };
    this.likes = likes || [];
}
Animal.prototype.eat=function(food){
    console.log(this.name+'is eating '+food);
}
```

### 1.原型链继承

原型对象的指定上插了一脚

```js
//核心： 将父类的实例作为子类的原型
//优点：简单，容易实现
//缺点：无法实现多继承，无法向父类构造函数传参；所有对象从父实例对象继承过来的属性都是相同的一份，指向的内存空间是相同的。
function Cat() {}
Cat.prototype = new Animal();  //核心代码
Cat.prototype.name = "tom";
var cat = new Cat();
console.log(cat.name);
cat.sleep();
console.log(cat instanceof Cat); //true 
console.log(cat instanceof Animal); //true    即是子类的实例，也是父类的实例

var cat2 = new Cat();
cat.likes.push("play");
console.log(cat2.likes); //[ 'play' ]
```



### 2.构造继承

构造函数在执行时插了一脚

```js
//优点：可以向父类传递参数，可以实现多继承（call多个父类实例）

//缺点：
//实例并不是父类的实例，只是子类的实例
//只能继承父类的实例属性和方法，不能继承原型属性/方法
function Cat() {
    Animal.apply(this,arguments); //核心代码
}
var cat = new Cat("tom");
console.log(cat.name); //tom
cat.sleep(); //tom is sleeping
```



### 3.实例继承

在返回实例对象时插了一脚

```js
// 核心：在子构造函数中创建一个父类实例，可以在上面添加子类的新特性，然后返回这个对象
// 特点：可以通过new调用，也可直接调用
// 缺点：实例是父类的实例，不是子类的实例; 不支持多继承; 而且在子构造函数的原型对象上添加方法是无效的，根据new关键字的执行过程可知。
function Cat(name) {
  var instance = new Animal();      //核心代码
  instance.name = name || "Tom";
  return instance;
}
Cat.prototype.sing = function () {
  console.log("sing a song");
};
var cat = new Cat("jim");
console.log(cat.name); //jim
cat.sleep(); //jim is sleeping
cat.sing(); // cat.sing is not a function
```



### 4.拷贝继承：

在原型对象上插了一脚 （其实就是原型继承，多此一举。。。。。。）

```js
// 利用for..in可以遍历对象的原型对象上的属性的特性
// 特点：可以多继承
// 缺点：因为存在拷贝，内存占用高；无法获取父类不可枚举的属性和方法（for in 只能获取枚举的属性）
function Cat(name) {
    this.name=name||'Tom';
    var animal = new Animal();
    for (key in animal) {
        Cat.prototype[key] = animal[key];    //核心代码
    }
}
var cat = new Cat("jim");
console.log(cat.name);
cat.sleep();
console.log(cat instanceof Animal); //false
console.log(cat instanceof Cat); //true*
```



### 5.组合继承：

插了两脚

```js
// 原型链继承+构造继承:利用构造继承解决参数传递的问题，利用原型继承可以继承原型对象上的属性和方法，两者结合可以互相弥补对方的缺陷。
// 优点：
// 弥补了原型链继承的局限性，可以传参；不存在引用属性共享的问题，因为代码1将实例属性绑定在了实例对象上，不需要再去原型对象上找属性了。
// 弥补了构造继承的局限性，可以继承原型上的属性和方法，既是子类的实例，也是父类的实例。
// 缺点：初始化了两次实例方法/属性，多消耗了一些内存
function Cat() {
    Animal.apply(this,arguments);     //核心代码1
}
Cat.prototype = new Animal();     //核心代码2
var cat = new Cat("alice", "big");
console.log(cat.name); //alice
console.log(cat.size); //big
cat.sleep(); //alice is sleeping
```



### 6.寄生组合继承(:star: )：

插了两脚，优化了一脚

```js
// 解决组合继承中的冗余问题，将 实例属性/方法的继承 与 原型对象上属性/方法的继承 分开
function Cat(name, size) {
    Animal.call(this, name, size); //核心代码1：继承实例属性和方法
}
var Super = function () {};
Super.prototype = Animal.prototype; //核心代码2：通过寄生方式，砍掉父类的实例方法/属性，这样就不会初始化两次实例方法/属性，弥补了组合继承的缺点（利用一个中间的构造函数来过滤掉父构造函数中的实例属性和方法）
Cat.prototype = new Super();
var cat = new Cat("alice", "big");
console.log(cat.name); //alice
console.log(cat.size); //big
cat.sleep(); //alice is sleeping
```



### 7.ES6中的class：

```js
class Animal {
    constructor(name, size) {
        this.name = name;
        this.size = size;
    }
    sing() {
        console.log("sing a song");
    }
}
class Cat extends Animal {
    constructor(name, size) {
        super(name, size);
    }
    eat() {
        console.log("i like eating mouse");
    }
}
var cat = new Cat("tom", "small");
console.log(cat); //Cat { name: 'tom', size: 'small' }
cat.sing(); //sing a song
cat.eat();

```



# :bike: 浏览器机制:

https://segmentfault.com/a/1190000012925872

## **进程与线程：**

进程是CPU资源（内存）分配的最小单位。

线程是CPU最小的调度单位。是建立在进程的基础上的一次程序运行单位，一个进程中可以有多个线程。



## **浏览器的多进程：**

1.浏览器主进程（Browser进程）：（负责协调、主控）

- 负责浏览器界面显示，与用户交互。如前进，后退等
- 负责各个页面的管理，创建和销毁其他进程
- 将渲染进程得到的内存中的Bitmap，绘制到用户界面上
- 网络资源的管理，下载等

2.**浏览器渲染进程（也称Render进程，浏览器内核，比如blink）**：内部是多线程的；每个Tab页面都有一个渲染进程。

- 页面渲染
- js脚本执行
- 事件处理

3.GPU进程:用于3D绘制等

4.第三方插件进程:每种类型的插件对应一个进程，仅当使用该插件时才创建。



## 浏览器渲染进程中的线程：

牢记：浏览器内核即浏览器渲染进程；js引擎即js引擎线程。

### 1. GUI渲染线程，也称UI线程

- 负责渲染浏览器界面，解析HTML，CSS，构建DOM树和RenderObject树，布局和绘制等。
- 当界面需要重绘（Repaint）或由于某种操作引发回流(reflow)时，该线程就会执行
- **GUI渲染线程与JS引擎线程是互斥的**，**当JS引擎执行时GUI线程会被挂起**。

### 2. js引擎线程

- 浏览器渲染进程中的线程大哥

- 也称为js引擎，js内核，比如V8引擎
- js引擎线程负责处理Javascript脚本程序，执行代码。
- JS引擎一直等待着**任务队列**​(:star:)​ 中任务的到来，然后加以处理。
- 每个tab页面都有一个渲染进程，每个渲染进程只有一个js引擎线程，也就是经常说的js引擎是单线程的。**为什么js引擎线程要设计成单线程呢？**因为js设计的主要目的是与用户进行交互，进行简单的dom操作，如果设计为多线程，则还需要处理同步等问题，就变得复杂了。
- GUI渲染线程与JS引擎线程是互斥的，所以如果JS执行的时间过长，这样就会造成页面的渲染不连贯，导致页面渲染加载阻塞。

### 3. 事件触发线程

- 用于处理事件，事件触发时(click,load)会将事件的处理函数推进**事件队列**

### 4. 定时器触发线程

- 浏览器定时计数器并不是由JavaScript引擎计数的。
- 浏览器通过单独线程来计时并触发定时，计时完毕后，添加到**事件队列**中，等待JS引擎空闲后执行。

### 5.http异步请求线程

- 在通过XMLHttpRequest创建连接后，浏览器会新开一个线程来发送http请求。
- 将检测到状态变更时，如果设置有回调函数，**http异步请求线程**就会产生**状态变更事件**，将这个回调放入**事件队列**中，交由js引擎处理。



由于GUI渲染线程与js线程是互斥的，所以js可能会阻塞页面的加载。



### 6.WebWorker线程：

webwork是HTML5新增的用于**在后台线程运行js脚本**的方法。

- 创建Worker时，JS引擎向浏览器申请在当前渲染进程中开一个子线程（子线程是浏览器开的，完全受主进程控制，而且不能操作DOM）
- **JS引擎线程与worker线程间通过特定的方式通信**（**postMessage API**，需要通过序列化对象来与线程交互特定的数据）

对于耗时的操作，可以开一个worker线程来处理，这样就不会影响js线程的执行。

并不能说webwork使得js引擎变成了多线程，js引擎还是单线程，只是现在为它开了一个新的线程来处理Js代码。



## 异步任务的由来：

js是单线程，一次只能完成一件任务，如果有多个任务，就必须排队。如果一个任务耗时很长，会拖延整个程序的执行，影响用户体验。为了解决这个问题，Javascript语言将任务的执行模式分成两种：同步（Synchronous）和异步（Asynchronous）。



## js执行机制：

https://www.cnblogs.com/wangziye/p/9566454.html



**js的执行机制就是  渲染进程中多个线程之间的配合  和   事件循环机制  ：**

1.同步任务会直接进行主线程的执行栈中，然后js先执行 执行栈中的同步任务 

2.在执行的过程中，若遇到异步任务，则提交给对应的异步线程处理

3.在这些异步线程中，若监听到某异步任务已经被触发了，即发送了点击，或者定时器时间已到，则将其放入任务队列（task queue）中

4.执行栈中的同步任务执行完后，主线程会不断的轮询查找任务队列中的任务，并执行任务。



<img src="C:\Users\刘小康\AppData\Roaming\Typora\typora-user-images\image-20200925075620369.png" alt="image-20200925075620369" style="zoom:50%;" />





## 从任务列表中取出并执行异步任务的原则：

### 异步任务的分类：

**宏任务（macrotask）：**

script (整体代码)，dom事件，ajax，setTimeout，setInterval，setImmediate，requestAnimationFrame，I/O，UI rendering

注意：setTimeout的优先级比setImmediate高

**微任务（microtask）：**

promise.then，mutation回调，process.nextTick

注意：process.nextTick的优先级比promise.then高





### 具体原则：

主线程中的执行栈在执行完同步任务之后，主线程会对事件队列（event queque）进行轮询，

会先去执行微任务队列中的所有任务，

执行完毕后再去执行宏任务队列中的一个任务，

每个宏任务执行结束后，在另一个宏任务执行前，需要检查微任务队列是否还存在任务，若存在，则需执行完才能执行下一个宏任务。



## js执行机制分析题：

### :star:第一题：超级大综合

```js
console.log('1');
setTimeout(function() {
    console.log('2');
    process.nextTick(function() {
        console.log('3');
    })
    new Promise(function(resolve) {
        console.log('4');
        resolve();
    }).then(function() {
        console.log('5')
    })
})
process.nextTick(function() {
    console.log('6');
})
new Promise(function(resolve) {
    console.log('7');
    resolve();
}).then(function() {
    console.log('8')
})
setTimeout(function() {
    console.log('9');
    process.nextTick(function() {
        console.log('10');
    })
    new Promise(function(resolve) {
        console.log('11');
        resolve();
    }).then(function() {
        console.log('12')
    })
})










//输出：1，7，6，8，2，4，3，5，9，11，10，12
```



### 第二题

```js
setTimeout(function() {
    console.log(1)
}, 0);
new Promise(function(resolve, reject) {
    console.log(2)
    for (var i = 0; i < 10000; i++) {
        if(i === 10) {console.log(10)}
        i == 9999 && resolve();
    }
    console.log(3)
}).then(function() {
    console.log(4)
})
console.log(5);












//最终执行结果：2 10 3 5 4 1
```



### :star: 第三题：考察setImmediate,process.next的优先级

```js
setImmediate(function () {
  console.log(1);
}, 0);
setTimeout(function () {
  console.log(2);
}, 0);
new Promise(function (resolve) {
  console.log(3);
  resolve();
  console.log(4);
}).then(function () {
  console.log(5);
});
console.log(6);
process.nextTick(function () {
  console.log(7);
});
console.log(8);











//输出结果是3 4 6 8 7 5 2 1
```



### 第四题：考察process.next的优先级

```js
setTimeout(function () {
  console.log(1);
}, 0);
new Promise(function (resolve, reject) {
  console.log(2);
  resolve();
})
  .then(function () {   //这个回调函数在执行的时候不单单是执行这个函数这么简单，此时还会根据这个函数的结果去调用当前.then所返回的promise对象中resolve方法，即会去执行指定的回调函数，即下面.then方法中的回调函数，当然因为是异步任务，所以还是会放在微任务队列中。----------所以最终的效果是，当这个函数执行完后，下面.then方法中的回调函数会被放入任务队列中。
    console.log(3);
  })
  .then(function () {
    console.log(4);
  });
process.nextTick(function () {
  console.log(5);
});
console.log(6);












// 输出为 2 6 5 3 4 1
```



### 第五题：

```js
//给出以下代码的执行结果，并说明原因
for (var i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log(i);
    }, 1000);
}
console.log(i);
















//输出：先输出一个5，然后输出5个5
//原因：setTimeout属于异步任务，主线程中的同步代码执行完毕后才会去执行任务队列中的任务。
```



# :police_car:Promise

## 解决异步编程的方案：

**（1）回调函数：**

使用回调函数接受异步任务的执行结果。

缺点：存在回调地狱的问题，必须在启动异步任务之前指定回调函数。

**（2）promise：**

Promise是异步编程的一种解决方案。Promise对象可以用来封装异步操作，然后保存异步操作的结果。

它不是新的语法功能，只是回调函数的改进，允许将回调函数的嵌套，改成链式调用。

缺点：代码冗余，一大堆的then，原来的语义变得很不清楚。

**（3）Generator函数：**

通过`yield`命令将多个异步任务分开，每调用一次next方法，就执行一个异步任务，并返回异步任务的执行结果。

缺点：需要手动调用next方法

**（4）async,await ：**

Generator的封装，相当于一种语法糖，可以自动调用next方法



## async和await的本质：

- async 和 await 是内置了执行器的 generator 函数 

```js
//generator函数可以生成一个迭代器对象
//通过这个对象的next方法以此执行一个yield语句，然后会返回一个对象{value:xxx,done:false|true}
//在调用next方法并传参时，该参数会作为generator函数中上一个yield语句的返回值。
function* g() {
  let users = yield getUsers();
  console.log(users);
  let orders = yield getOrders();
  console.log(orders);
  let goods = yield getGoods();
  console.log(goods);
}

aysnc function g() {
  let users = await getUsers();
  console.log(users);
  let orders = await getOrders();
  console.log(orders);
  let goods = await getGoods();
  console.log(goods);
}
```

- 原本的generator需要手动的调用next()才能继续向下执行，
- **但async这个语法糖在执行的时候，内部会执行一个执行器，在这个执行器中，会去调用next方法，每次调用了next方法后，都会对返回结果中的done属性进行判断，如果done为false，则表示后面还有field语句，所以会继续递归的调用next方法，直至所有的field语句都执行完。** 





## Promise基础

### promise的三种状态：

pendding,resolved,rejected

promise的状态只能从pendding状态变为resolved，rejected状态，不能逆向转变，且只能改变一次。



### promise的then方法：

用于指定成功的回调函数和失败的回调函数，用于接收异步任务执行的结果，可以为promise对象指定多个成功和失败的回调函数。



### then方法返回的Promise对象的状态和值由什么决定：

then方法会返回一个promise对象，该对象的状态由指定的回调函数的返回值决定：

若没有返回值，则返回的Promise的状态为resolved,值为undefined;

若返回的是一个非promise对象的值，则返回的promise的状态为resolved,值为原返回值；

若抛出的是一个异常，则返回的Promise对象的状态为rejected，值为原错误对象。

若返回的是一个promise对象，则then方法返回的promise状态和值与该promise对象保持一致。



## 回调地狱相关

### 什么是回调地狱问题：

回调地狱是指同时存在多个异步操作，且后面的异步操作依赖于前面操作的结果，形成了回调函数多层嵌套的情况。

回调函数的缺点：不便于阅读，代码维护较困难。



### Promise解决回调地狱的问题：

通过链式调用的方法解决回调地狱的问题

```js
new Promise((res,rej)=>{
    setTimeout(()=>{
		res(1111)
    })
}).then(value=>{
    setTimeout(()=>{
        res(222)
    })
}).then(value=>{
    setTimeout(()=>{
        res(333)
    })
})
```



### Generator函数解决回调地狱的问题：

利用Generator函数的暂停执行的效果，可以把异步操作写在yield语句里面，等到调用next方法时再往后执行。

这样做的好处是不需要通过回调函数来拿到异步操作的执行结果。简化了代码。

缺点：需要手动调用next方法

```js
function* func(){
    yeild 异步任务1;
    yeild (function(rs1){return xxx})(rs1) 异步任务2；
}
let fn=func();
let rs1=fn.next();//返回的是异步任务1的结果
fn.next(rs1);//将异步任务1的结果作为参数传递
```



### async/await解决回调地狱的问题：

async/await是generator的封装，async可以自动执行next方法;

async会返回一个promise对象。该对象的状态由async函数的返回值决定。

```js
async function fn(){
    const rs=await fn1();
    const rs=await fn2();
}
```





## Promise代码相关：

### 用es6中的类简单的实现一个promise：

```js
class Promise {
    constructor(executor) {
        this.state = "pendding";
        this.data = undefined;
        this.callBack = [];
        executor(this.resolve.bind(this), this.reject.bind(this));
    }
    resolve(data) {
        if (this.state != "pendding") {
            return;
        }
        this.state = "resolved";
        this.data = data;
        const that = this;
        if (this.callBack.length > 0) {
            setTimeout(() => {
                that.callBack.forEach((item) => {
                    item.onResolved(that.data);
                });
            });
        }
    }
    reject(reason) {
        if (this.state != "pendding") {
            return;
        }
        this.state = "rejected";
        this.data = reason;
        const that = this;
        if (that.callBack.length > 0) {
            setTimeout(() => {
                that.callBack.forEach((item) => {
                    item.onRejected(that.data);
                });
            });
        }
    }
    then(onResolved, onRejected) {
        if (this.state == "resolved") {
            onResolved(this.data);
        } else if (this.state == "rejected") {
            onRejected(this.data);
        } else {
            this.callBack.push({
                onResolved,
                onRejected,
            });
        }
    }
}
new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve(222);
        reject(333);
    }, 1000);
}).then(
    (value) => {
        console.log(value);
    },
    (reason) => {
        console.log(reason);
    }
);

```



### promise封装Ajax请求：

```js
function myAjax(url){
    return new Promise((resolve,reject)=>{
        const xhr=new XMLHttpRequest();
        xhr.open('get',url);
        xhr.send();
        xhr.onreadystatechange=function(){
            if(xhr.readyState==4){
                if(xhr.status>=200&&xhr.status<300){
                    resolve(xhr.response);
                }else{
                    reject(xhr.status)
                }
            }
        }
    })
}
const p = myAjax('http://....');
p.then(value=>{
    console.log(value);
})
```



### 如果已经有三个promise，A、B和C，想串行执行，该怎么写？:

```js
//1.直接利用promise的链式调用
A.then(value=>{
    return B;
}).then(value=>{
    return C;
})

//2.使用async/await
(async function fn(){
    const rs1=await A;
    const rs2=await B;
    const rs3=await C;
})()
```



### Promise例题：

#### 示例1：

```js
setTimeout(() => {
    console.log(1);
})
new Promise((resolve, reject) => {
    console.log(2);
    resolve()
}).then(value => {
    console.log(3);
}).then(value => {
    console.log(4);
})
console.log(5);







//输出：2 5 3 4 1
```



#### 示例2：

```js
const first = () => (new Promise((resolve, reject) => {
    console.log(1);
    let p = new Promise((resolve, reject) => {
        console.log(2);
        setTimeout(() => {
            console.log(3);
            resolve(4)
        })
        resolve(5)
    })
    resolve(6)
    p.then(value => {
        console.log(value);
    })
}))

first().then(value => {
    console.log(value);
})
console.log(7);







//输出：1 2 7 5 6 3
```



#### :star: 示例3：

```js
setTimeout(() => {
    console.log(1);
}, 0);
new Promise((resolve, reject) => {
    console.log(2);
    resolve()
}).then(value => {
    console.log(3);
    new Promise((resolve, reject) => {
        console.log(4);
        resolve()
    }).then(value => {
        console.log(5);
    }).then(value => {
        console.log(6);
    })
}).then(value => {
    console.log(7);
})

new Promise((resolve, reject) => {
    console.log(8);
    resolve()
}).then(value => {
    console.log(9);
})







//输出：2 8 3 4 9 5 7 6 1
```



#  :ship: 前端模块化

## 如何理解前端模块化

1.前端模块化就是将复杂的文件变成一个个独立的模块，比如单个js文件等等。

2.分成独立的模块有利于重用（复用性）和维护（版本迭代）。

3.但这样会引来模块之间相互依赖的问题，所以有了CommonJS，AMD，CMD规范等等，以及用于js打包（编译等处理）的工具webpack



## 说一下Commonjs、AMD和CMD

[参考链接](https://blog.csdn.net/Miss_GL/article/details/81902871?utm_medium=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-1.channel_param&depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-1.channel_param)

|              | Commonjs规范                                                 | AMD规范 (Asynchronous Module Definition 异步模块定义)        | CMD规范 (Common Module Definition 通用模块定义)              |
| ------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 实现         | NodeJS的模块系统                                             | RequireJS框架   <br>AMD 是 requireJS框架 在推广过程中对模块定义的规范化产出，所以AMD是一种标准。 | SeaJS框架(淘宝) <br>CMD 是 seaJS框架在推广过程中对模块定义的规范化产出，CMD也是属于一种标准。 |
| 应用场景     | 服务器端                                                     | 浏览器                                                       | 浏览器                                                       |
| 模块加载方式 | 同步加载。服务器端加载的模块文件一般都已经存在本地硬盘，所以加载起来比较快，不需太考虑异步加载。 | 异步加载，如果采用同步加载的方式，可能会阻止页面的加载。     | 异步加载                                                     |
| 使用         | 模块输出：modual.exports,exports                             | **AMD推崇依赖前置，在定义模块的时候就要声明其依赖的模块**<br>    AMD在**某个模块加载（下载）完后会立即执行该模块**，所有模块都加载执行完后会进入require的回调函数，执行主逻辑，这样的效果就是依赖模块的执行顺序和书写顺序不一定一致，看网络速度，哪个先下载下来，哪个先执行，但是主逻辑一定在所有依赖加载完成后才执行-------**用户体验好，因为没有延迟** | **CMD推崇就近依赖，只有在用到某个模块的时候再去require** 。<br>    CMD**加载完某个依赖模块后并不执行，只是下载而已**，在所有依赖模块加载完成后进入主逻辑，**遇到require语句的时候才执行对应的模块**，这样模块的执行顺序和书写顺序是完全一致的-------**性能好，因为只有用户需要的时候才执行** |
| 优缺点       |                                                              | 优点：解决了脚本并行加载的问题<br>缺点：代码太过臃肿         |                                                              |

requireJS的例子：

通过define定义模块：

```js
define(['dependency'], function(){
    var name = 'Byron';
    function printName(){
    	console.log(name);
    }
    return {
    	printName: printName
    };
});
```

通过require加载模块：

```js
require(['myModule'], function (my){
	my.printName();
}
```



## ES6与Commonjs的区别：

**1.commonjs**

commonjs属于**运行时加载**，即只有在运行时才能加载第三方模块的对象，且加载的是整个对象，然后再从该对象读取对应的属性。

模块导入：

```js
// CommonJS模块
let { stat, exists, readfile } = require('fs');

// 等同于
let _fs = require('fs');
let stat = _fs.stat;
let exists = _fs.exists;
let readfile = _fs.readfile;
```

模块导出：

```js
module.exports={};
exports.xxx={}
```



**2.ES6**

自带模块化，属于**编译时加载**（或称静态加载），即在编译阶段就会完成模块加载，而且加载的只是该模块对应的属性和方法。这样的话效率比commonjs的高。缺点就是没法引用 ES6 模块本身，因为它不是对象

模块导入：

```js
// ES6模块
import { stat, exists, readFile } from 'fs';
```

模块导出：

```js
export { .... };
```

 

# :passenger_ship: 前端性能优化

## 性能优化的方式：

- 加速资源的获取

  - 缓存，DNS预解析，CDN
  - script标签放在body标签后面，尽量采用异步加载的方式
  - css资源使用link标签引入，不使用@import，因为后者采用的是同步加载的方式
  - 雪碧图，字体图标
  - 对资源进行打包压缩

  - 对于耗时比较久的操作，可以单独开辟一个web worker线程来处理

- js代码
  - 减少闭包的使用
  - 较少DOM的回流和重绘
  - 避免死循环
- 技巧
  - 懒加载+骨架屏



## 懒加载：

https://zhuanlan.zhihu.com/p/55311726

页面开始加载时不去发送http请求，而是放置一张占位图。
当页面加载完时，并且图片在可视区域再去请求加载图片信息。



### 图片的懒加载和预加载的区别	

预加载：提前加载图片，当用户需要查看时可直接从本地缓存中渲染。

懒加载：懒加载的主要目的是用作性能优化，减少请求次数。



两种技术的本质：两者的行为是相反的，一个是**提前加载**，一个是**延迟加载**。

懒加载对服务器端有一定的缓解压力作用，预加载则会增加服务器端压力。



## 什么是按需加载:

即根据需要去加载对应的资源。

当用户触发了某个动作时，才去加载需要的html,css,js或图片。

懒加载就属于一种图片的按需加载，即当图片进行可视区域的时候才加载。



## 异步加载js的方法

注意不要把异步加载js和js执行异步任务搞混了，当加载完js后，在执行代码的过程中才会遇到异步任务的问题。



**前沿：为什么需要异步加载js**

同步加载是指浏览器在加载js文件时，会阻塞后续内容的加载。

​	通常可以将script标签放在底部来解决阻塞的问题，但这样也存在一个问题，就是dom加载完毕后有一段时间页面虽然能看到，但是和用户的交互却很差，因此需要让一些脚本与页面异步加载。

异步加载就是指，在加载js文件，不会阻塞后续内容加载。



**异步加载js文件有四种方式：**

**方法一：defer延时加载：**

```html
<script type="text/javascript" defer="defer"> 
alert(document.getElementById("p1").firstChild.nodeValue); 
</script> 
```

defer 属性规定是否对脚本执行进行延迟，直到**页面加载完毕**为止。

如果您的脚本不会改变文档的内容，可将 defer 属性加入到<script>标签中，以便加快处理文档的速度。

注意：兼容所有浏览器。这种方法可以确保所有设置defer属性的脚本按顺序执行。



**方法二：async：**

```html
<script type="text/javascript" src="xxxxxxx.js" async="async"></script> 
```

是HTML5的属性，async 属性规定一旦脚本可用，就会异步执行。

仅适用于外部脚本，注意：如果在IE中，同时存在defer和async，那么defer的优先级比较高，脚本将在页面完成时执行。

注意：HTML5中新增的属性，支持IE9以上。这种方法不能保证脚本按顺序执行。



**方法三：动态创建script标签，插入到DOM中**

动态创建的srcipt标签在加载js代码的时候是异步的，加载完后会触发onload事件。

为了确保多个js文件按顺序加载，需要通过回调函数的形式进行处理

```html
<!DOCTYPE html>
<html>
    <head>
        <script type="text/javascript">
            function loadScript(file, callbackFn) {
                var script = document.createElement('script');
                script.src= file;
                script.type='text/javascript';
                // 监听onload时间，当前js文件加载完成后，再加载下一个
                script.onload = callbackFn;
                document.getElementsByTagName('head')[0].appendChild(script)
            }

            loadScript('calc1.js', function () {
                loadScript('calc2.js');
            } );
        </script>
    </head>
    <body>
    </body>
</html>
```



**方法四：AJAX** + eval（使用AJAX得到脚本内容，然后通过`eval(xhr.responseText)`来运行脚本，或者还是通过添加script标签`script.src=xhr.responseText`来运行js脚本）



### eval()是做什么的

https://blog.csdn.net/lxcao/article/details/52782771

**作用1**：把字符串参数解析成JS代码并运行，并返回执行的结果。

```js
eval("2+3");//先解析为加法表达式，然后执行加法操作，并返回运算值。
eval("var age=10");//先解析为赋值表达式，然后执行，即初始化了一个age变量
```

注意：应该避免使用eval，不安全，**非常耗性能**（2次，一次解析成js语句，一次执行）。



**作用2**：处理Ajax返回的json字符串的第二种方式

```js
//eval()来解析JSON格式字符串的时候会将大括号{}直接解析为代码块，而不是表达式，而在代码块中不可能有name:xxx的写法的，所以会报错。所以必须使用()包起来，这样解析出来的就是表达式了。
var json="{name:'Mr.CAO',age:30}";
var jsonObj=eval("("+json+")");//将json字符串包装为一个可以执行的表达式
console.log(jsonObj);
```



## 游戏卡顿的原因以及解决方法：

有一个游戏叫做Flappy Bird，就是一只小鸟在飞，前面是无尽的沙漠，上下不断有钢管生成，你要躲避钢管。然后小明在玩这个游戏时候老是卡顿甚至崩溃，说出原因（3-5个）以及解决办法（3-5个）：



**原因可能是：**

1.内存溢出问题。

2.资源过大问题。

3.资源加载问题。

4.canvas绘制频率问题

**解决办法：**

1.针对内存溢出问题，我们应该在钢管离开可视区域后，销毁钢管，让垃圾收集器回收钢管，因为不断生成的钢管不及时清理容易导致内存溢出游戏崩溃。

2.针对资源过大问题，我们应该选择图片文件大小更小的图片格式，比如使用webp、png格式的图片，因为绘制图片需要较大计算量。

3.针对资源加载问题，我们应该在可视区域之前就预加载好资源，如果在可视区域生成钢管的话，用户的体验就认为钢管是卡顿后才生成的，不流畅。

4.针对canvas绘制频率问题，我们应该需要知道大部分显示器刷新频率为60次/s,因此游戏的每一帧绘制间隔时间需要小于1000/60=16.7ms，才能让用户觉得不卡顿。

（注意因为这是单机游戏，所以回答与网络无关）



## click在ios上有300ms延迟，原因及如何解决？

**原因：**

- 移动端双击屏幕时会有 300ms 的判断时间，若第二次点击的时间距第一次小于了 300ms，则判断为双击事件，此时会缩放屏幕，而不是触发两次点击事件。



解决方法：

- **方法一**：粗暴型，禁止浏览器的双击事件，禁用缩放：

<meta name="viewport" content="user-scalable=no">

- **方法二**：写一个封住函数，若触摸和松开的时间小于 300ms，则立即调用回调函数

- **方法三**：使用 fastclick 插件，原理是检测到 touchend 事件后，立刻触发模拟 click 事件，并且把浏览器 300 毫秒之后真正触发的事件给阻断掉





#  :speedboat: js设计模式

## **单例模式**：

概念：确保一个类仅有一个实例，并提供了一个访问它的全局访问点。

实现思路：创建该实例之前，检查该实例是否存在。若不存在，则创建，否则直接返回该实例。

原理：闭包

实际应用：创建一个遮罩框

```js
//要求：将Person构造函数变为一个单例模式
function Person(name,age){
    this.name=name;
    this.age=age;
}

//规范的单例模式:
var SinglePerson = (function () {
  var instance = null;
  function Person(name, age) {
    if (instance) return instance;
    this.name = name;
    this.age = age;
    instance = this;
    return instance;
  }
  return Person;
})();
const p1 = new SinglePerson("liu", 21);
const p2 = new SinglePerson("xiao", 29);
console.log(p1); //Person { name: 'liu', age: 21 }
console.log(p2); //Person { name: 'liu', age: 21 }
console.log(p1 === p2); //true


// 实现了一个通用的singleton包装器
function Person(name, age) {
  this.name = name;
  this.age = age;
}
function Son(name, age) {
  this.name = name;
  this.age = age;
}
//将需要进行包装的构造函数作为参数传递
var singleton = function (construtor) {
  var instance = null;
  return function () {
    if (instance) return instance;
    instance = new construtor(...arguments);
    return instance;
  };
};
var SinglePerson = singleton(Person);
const p1 = SinglePerson("liu1", 21);
const p2 = SinglePerson("xiao", 22);
console.log(p1); //Person { name: 'liu1', age: 21 }
console.log(p2); //Person { name: 'liu1', age: 21 }
console.log(p1 == p2); //true

var SingleSon = singleton(Son);
const p3 = SingleSon("liu111", 21);
const p4 = SingleSon("xiao1111", 22);
console.log(p3); //Son { name: 'liu111', age: 21 }
console.log(p4); //Son { name: 'liu111', age: 21 }
console.log(p3 == p4); //true

```



## 工厂模式：

设计一个统一的接口（工厂），然后根据对应的参数生成对应的实例对象（产品）。

实际应用：前文中new的实现体现的就是一种工厂模式；在一些封装的ajax库中使用的就是工厂模式，根据参数来决定发送get请求还是post请求。

```
代码见new的模拟实现部分
```



## 观察者模式(发布者-订阅者模式)：

概念：当一个对象（发布者）被修改时，则会自动通知依赖它的对象（订阅者）。相当于建立了一套触发机制。观察者模式可以很好的实现模块之间的解耦。

实际应用：JS中的事件监听和事件触发就是经典的观察者模式

```js
let observer = {
    // 订阅集合
    subscribes: {},
    // 订阅
    subscribe: function (type, fn) {
        //   判断订阅集合中是否存在订阅的对象
        if (!this.subscribes[type]) {
            this.subscribes[type] = [];
        }
        this.subscribes[type].push(fn);
    },	
    //   发布消息
    publish: function (type, info) {
        let fns = this.subscribes[type];
        //   判断发布的消息类型是否存在
        if (!fns) {
            return;
        }
        //   挨个处理对应的订阅回调函数
        for (var i = 0; i < fns.length; i++) {
            fns[i].call(this, info);
        }
    },
    //   删除订阅
    remove: function (type, fn) {
        //   若未提供移除的订阅类型，则删除所有的订阅信息
        if (!type) {
            this.subscribes = {};
            return;
        }
        var fns = this.subscribes[type];
        // 如果没有提供对应的订阅回调，则删除该类型下的所有订阅回调
        if (!fn) {
            fns=[];
            return;
        }
        //   如果指定了具体的订阅回调，则删除该类型下具体的回调
        for (var i = 0; i < fns.length; i++) {
            if (fns[i] === fn) {
                fns.splice(i, 1);
                i--;
            }
        }
    },
};
// 订阅adele的消息
observer.subscribe("adele", function (value) {
    console.log("接收到的adele的新消息是：", value);
});
function fn(value) {
    console.log("接收到的王菲的新消息是：", value);
}
// 订阅王菲的消息
observer.subscribe("wangfei", fn);
// 发布adele和王菲的消息
observer.publish("adele", "这是adele的最新消息");
observer.publish("wangfei", "这是王菲的最新消息");
// 输出：
// 接收到的adele的新消息是： 这是adele的最新消息
// 接收到的王菲的新消息是： 这是王菲的最新消息
console.log("-------------------");
observer.remove("wangfei", fn);
observer.publish("wangfei", "这是王菲的最新消息");
// 输出：
// 空
```



## 装饰者模式：

概念：在不影响原来对象方法的基础上，为其添加一些额外的职责

```js
function Person() {}
Person.prototype.skill = function () {
    console.log("数学");
};
// 创建装饰类（装饰器）
function MusicDecorator(person) {
    this.person = person;
}
// 装饰了音乐这个技能
MusicDecorator.prototype.skill = function () {
    this.person.skill();
    console.log("音乐");
};
// 创建装饰类（装饰器）
function RunDecorator(person) {
    this.person = person;
}
// 装饰了跑步这个技能
RunDecorator.prototype.skill = function () {
    this.person.skill();
    console.log("跑步");
};
let person = new Person();
let musicMan = new MusicDecorator(person);
let runMan = new RunDecorator(musicMan);
runMan.skill(); //数学 音乐 跑步
```



## 编程思想：

### 函数柯里化：

概念：一个函数原本有多个参数, 现在每次只传入一个参数, 生成一个新函数, 由新函数接收剩下的参数来运行得到结果

目的：利用闭包缓存一些内容，减少参数的传递，减少冗余代码的解析

应用：

正则表达式匹配时，将正则表达式复用：

```js
// 正常正则验证字符串 reg.test(txt)

// 函数封装后
function check(reg, txt) {
    return reg.test(txt)
}

check(/\d+/g, 'test')       //false
check(/[a-z]+/g, 'test')    //true

// Currying后
function curryingCheck(reg) {
    return function(txt) {
        return reg.test(txt)
    }
}

var hasNumber = curryingCheck(/\d+/g)
var hasLetter = curryingCheck(/[a-z]+/g)

hasNumber('test1')      // true
hasNumber('testtest')   // false
hasLetter('21212')      // false
```



检验某个标签是否是内置的标签时：将内置标签复用

```js
let tags = "div,p,a,img,ul,li".split(",");
function makeMap(keys) {
    var set = {};
    tags.forEach((key) => {
        set[key] = true;
    });
    return function (tagName) {
        return !!set[tagName]; //这里!!的作用时可以将undefined转换为false
    };
}
let isHTMLTag = makeMap(tags);
console.log(isHTMLTag("user")); //false
console.log(isHTMLTag("img")); //true
```





```js
// 实现一个add方法，使计算结果能够满足如下预期：
add(1)(2)(3) = 6;
add(1, 2, 3)(4) = 10;
add(1)(2)(3)(4)(5) = 15;

function add() {
  //首先将第一个传递的所有参数保存起来
  var args = Array.prototype.slice.call(arguments);
  //每次调用都会返回一个函数，该函数在调用的时候需要将内部的参数添加到闭包中的参数中
  var fn = function () {
    args.push(...arguments);
    return fn;
  };
  //在最后打印函数的时候，会调用函数对象的toString方法，此时可以将闭包中存储的参数累加之后返回
  fn.toString = function () {
    return args.reduce((a, b) => a + b);
  };
  return fn;
}
add(1, 2, 3)(4, 5)(6);



//变种：
sum(1,2)(2)() // 5

sum(3)(3)() // 6

function add(){
    var args=Array.prototype.slice.call(arguments);
    var fn=function(){
        if(arguements.length==0){
            return args.reduce((a,b)=>a+b);
        }else{
            args.push(...arguments);
        	return fn   
        }
    }
    return fn
}
```

# :rowboat: 利用js实现的功能



## js监听对象属性的改变

这个问题也可以理解为如何实现`MVVM`库/框架的数据绑定。

常见的数据绑定的实现有 1.基于`ES5`的`getter`和`setter`； 2.`ES6`中添加的`Proxy`；3.脏值检测



**方法一：ES5中的getter和setter:**

利用Object.defineProperty为对象的属性添加访问器getter/setter

```js
var obj5 = {};
Object.defineProperty(obj5, "a", {
    get() {
        return a;
    },
    set(value) {
        a = value;
        // 需要触发的渲染函数写在这里，这样在属性改变的时候就不需要手动调用渲染函数了
    },
});
obj5.a = "liu";
console.log(obj5.a); //liu

```



**方法二：在ES6中可以通过Proxy来实现：**

原理是利用proxy代理对象拦截对对象属性的赋值操作。

```js
// 利用proxy实现监听js对象属性变化的功能
// 下面的例子是在监听object对象中message属性的变化
let objct = {
  message: "liu",
};
let proxy2 = new Proxy(objct, {
  set(target, prop, value) {
    if (prop == "message") {
      console.log("这里可以执行渲染相关的函数");
    }
  },
});
proxy2.message = "liu2"; //这里可以执行渲染相关的函数
proxy2.message = "liu2"; //这里可以执行渲染相关的函数
```



**方法三：脏值检测**







##  js怎么控制一次加载一张图片，加载完后再加载下一张

通过Image构造函数创建img标签，动态加载图片，加载成功后会触发onload回调函数，在该函数中可以加载下一次图片。

```html
<body>
    <script>
        let images = ["./avatar1.jpg", "./avatar2.jpg", "./avatar3.jpg"];
        function loadImage() {
            if (images.length != 0) {
                let imageSrc = images.shift();
                let image = new Image();
                image.style.width = "200px";
                image.style.height = "200px";
                image.src = imageSrc;
                image.onload = function () {
                    document.body.appendChild(image);
                    setTimeout(() => {
                        loadImage();
                    }, 1000);
                };
            }
        }
        loadImage();
    </script>
</body>
```



##  如何实现sleep的效果（es5、es6）

题目解释：让当前的代码休眠一段时间再执行后面的代码。

不能使用setTimeout,因为setTimeout属于异步任务，后面的同步代码会立即执行。



方法一：（ES5）while循环的方式

```js
function sleep(sleepTime) {
  var start = Date.now();
  var end = start + sleepTime;
  while (Date.now() < end) {}
}
console.log("这里是前面的代码");
sleep(2000);
console.log("这里是后续的代码");
```



方式二：（ES6）promise

将后续的同步代码放在then方法指定的回调函数中

```js
function sleep(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, time);
    });
}
console.log("这里是sleep前的同步代码");
sleep(2000).then(function () {
    console.log("这里是后续的同步代码");
});
```



方式三：（ES6） generator生成器

利用yield表达式+next来实现,原理同直接使用promise是一样的，核心就是返回一个promise，且这个Promise在指定的时间后才会调用指定的回调函数。

```js
function* sleep(time) {
    yield new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, time);
    });
}
console.log("这里是前面的同步代码");
sleep(2000)
    .next()
    .value.then(function () {
    console.log("这里是后续的同步代码");
});

```



方法四：（ES6） async语法

其实跟generator是一样的，只是这样便于阅读一些

```js
//写法1:
async function sleep(time) {
  let rs = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
  console.log("这里是后续的代码");
}
console.log("这里是前面的代码");
sleep(2000);


//写法2：
async function sleep(time) {
    return await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, time);
    });
}
console.log("这里是前面的代码");
sleep(2000).then(function () {
    console.log("这里是后续的代码");
});
```



方法一的缺点：容易造成死循环

后面三种方法的缺点：后续的同步代码必须写在回调函数中。要是按照这种做法的话还不如直接写在setTimeout中，反正都是将想要后续的同步代码放在了异步任务中执行。。。



## 如何实现点击下载图片

- 在a标签中添加download属性

```html
<a href="1.png" download="重命名.png">下载图片</a>
```

- 使用js实现点击下载图片的功能

```js
function downloadImage(url){
    var a=document.createElement('a');
    a.download="默认图片名称.png"
    a.href=url;
    a.click();
}
```



# :rocket: 职业修养

## 作为前端开发，如果遇到资源无法加载，会是什么问题，如何解决:

首先会打开开发者工具看报错情况，根据**http状态码**来确认是服务器还是客户端的错误，然后再具体问题来分析。



# :airplane: 编程题

## 1.关于游戏中打怪，回复血量，积蓄能量（sleep一会儿）

题目描述：

（1）Hero("37er");执行结果为 Hi! This is 37er 

（2）Hero("37er").kill(1).recover(30);执行结果为 Hi! This is 37er Kill 1 bug Recover 30 bloods 

（3）Hero("37er").sleep(10).kill(2)执行结果为 Hi! This is 37er //等待10s后 Kill 2 bugs //注意为bugs （双斜线后的为提示信息，不需要打印）

```js
function Hero(name) {
    var obj = new Object();
    obj.name = name; //角色名字
    console.log(`Hi! This is ${name}`);
    obj.time = 0; //延时发起进攻的的时间
    obj.bloods = 100; //自身的血量
    obj.kill = function (bugs) {
        if (bugs > 1) {
            setTimeout(() => {
                console.log(`Kill ${bugs} bugs`);
            }, this.time * 1000);
        } else {
            console.log(`Kill ${bugs} bug`);
        }
        return this;
    };
    obj.recover = function (bloods) {
        console.log(`Recover ${bloods} bloods `);
        this.bloods += bloods;
        return this;
    };
    obj.sleep = function (time) {
        this.time = time;
        return this;
    };
    return obj;
}
Hero("37er"); //Hi! This is 37er
Hero("37er").kill(1).recover(30); //Hi! This is 37er   Kill 1 bug   Recover 30 bloods
Hero("37er").sleep(10).kill(2); //Hi! This is 37er  Kill 2 bugs
```



## 2.写一个函数，第一秒打印1，第二秒打印2:

方法一：ES6中使用let+块级作用域

```js
function print(num) {
  for (let i = 0; i < num; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
}
print(5);
```

方法二：ES5中使用立即执行函数形成闭包模拟块级作用域，开辟独立的作用域

```js
function print(num) {
  for (var i = 0; i < num; i++) {
    (function (i) {
      setTimeout(() => {
        console.log(i);
      }, i * 1000);
    })(i);
  }
}
print(5);
```



## 3.正则表达式相关



### 匹配01-12的字符:

```js
let regExp = /^0[1-9]|1[0-2]$/;
//注意：这里需要将数字转换为字符串再传入
console.log(regExp.test("06")); //true
console.log(regExp.test("12")); //true
console.log(regExp.test("13")); //false
console.log(regExp.test("6")); //true
```



### 匹配长度为6-13位的数字(qq号码)：

```js
//注意：精确匹配
var regExp = /^[1-9]\d{5,12}$/;
console.log(regExp.test("123456")); //true
console.log(regExp.test("12345")); //false
console.log(regExp.test("023456")); //false
console.log(regExp.test("12345678901111")); //false
```



### 匹配这种形式的座机号：  010-12345678  0530-1234567

```js
//注意：精确匹配
var regExp = /^(\d{3}-\d{8})|(\d{4}-\d{7})$/;
console.log(regExp.test("010-12345678")); //true
console.log(regExp.test("0101-12345678")); //false
console.log(regExp.test("0101-1234567")); //true
console.log(regExp.test("0101-123456781")); //false
```



### 去掉字符串中的数字:

```js
//注意：全局匹配
var str = "adadas321413sas";
console.log(str.replace(/\d/g, "")); //adadassas
```



### 去除字符串首尾空格：

```js
console.log("  asbsbas   ".trim())


//trim()的实现原理：正则表达式
String.prototype.trim = function () {
    return this.replace(/^\s+|\s+$/g, '');
};

var str = "     #id div.class  ";
console.log(str.replace(/^\s+|\s+$/, "")); //#id div.class
//错误示例：
console.log(str.replace(/^\s|\s+$/, "")); //    #id div.class
```



### 将border-left-top转换成驼峰形式：

```js
//方法一：正则表达式替换
let str = "border-left-top";
console.log(
  str.replace(/-\w/g, function (match) {
    return match.slice(1).toUpperCase();
  })
); //borderLeftTop

//方法二：转换为数组切割后再拼接
function toCamel(str) {
  let arr = str.split("-");
  let rs = arr[0];
  for (let i = 1; i < arr.length; i++) {
    rs += arr[i].substring(0, 1).toUpperCase() + arr[i].substring(1);
  }
  return rs;
}
console.log(toCamel("border-left-top")); //borderLeftTop
```



### :star: 模板字符串的替换：

```html
<body>
    <div id="app">
        <h1>{{name}}</h1>
        <h2>{{age}}</h2>
    </div>
</body>
<script>
    let obj = {
        name: "liu",
        age: 21,
    };
    let text = app.innerHTML;
    console.log(typeof text);
    let newText = text.replace(/\{\{(.*?)\}\}/g, function (match, $1) {
        return obj[$1];
    });
    console.log(newText);
    app.innerHTML = newText;
</script>
```



## 4.计算一年中有多少周？

```js
// 判断是否为闰年，能被4整除且不能被100整除，或者能被400整除的年份是润年
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;
    }
    return false;
}
const total = isLeapYear(2020) ? 366 : 365;
// 获取这一年前面几天未参与到一个完整的周的天数
const front = 7 - new Date("2020-1-1").getDay() + 1;
// 获取这一年后面几天未参与到一个完整的周的天数
const end = new Date("2020-12-31").getDay();
console.log(front, end);
const weeks = (total - front - end) / 7;
console.log(weeks);
```


