# link标签和@import的区别

link属于html标签，而@import是css提供的。

link属于异步加载，而@import属于同步加载，会阻塞页面的加载。



# 说一下css盒模型

- 标准盒子模型(默认的盒子模型)：
  - 盒子的width指的是content的宽度。
  - 设置方式：box-sizing : content-box
- 怪异盒子模型（IE盒子模型）：
  - 盒子的width指的是content+padding+border的宽度。
  - 设置方式：box-sizing : border-box
- 火狐浏览器特有的盒子模型：box-sizing :  padding-box





# CSS选择器：

## 类型和权重

- 继承，通配符选择器       0

- 元素选择器  伪元素选择器(CSS3)   1 

- **类选择器**，**伪类选择器** , 属性选择器(CSS3)  , 结构伪类选择器(CSS3)   10 

-  **id选择器**    100 

-  行内样式    1000

- !important  无穷大



注意：

- 继承的权重为0，即若子元素自己设置了样式，尽管父元素设置了!important，其继承过来的样式所占的权重也为0。
- 同一元素引用了多个样式时，排在后面的样式属性的优先级高，可能覆盖前面的样式；
- 样式表的来源不同时，优先级顺序为：内联样式（行内样式）> 内部样式 > 外部样式 > 浏览器用户自定义样式 > 浏览器默认样式



## 选择器解析规则：

从右往左解析，可以加快查找速度。原理是这样可以尽快的匹配到目标元素，会过滤掉无关的样式规则。

对于：

div#box p span .red{

}

1.查找所以的.red元素，然后选择其父元素为span的元素

2.从上一步的结果中继续过滤父父元素为p元素的元素

3.过滤出父父父元素id为box的元素

4.过滤父父父父元素为div的元素



## a标签4个伪类选择器的书写顺序：

按LVHA的顺序书写，否则可能导致点击a标签后样式的覆盖。

- :link 未访问时的样式
- :visited 访问过后的样式
- :hover 鼠标经过时的样式
- :active 鼠标按下但未松开时的样式



# line-height和height的区别

line-height是指字体的行高。

height是指容器的整体高度。

<img src="C:\Users\刘小康\AppData\Roaming\Typora\typora-user-images\image-20201007162641284.png" alt="image-20201007162641284" style="zoom:50%;" />



# 设置一个元素的背景颜色，背景颜色会填充哪些区域？

background-color设置的背景颜色会填充元素的content、padding、border区域



# 元素的类型和定位方式

## display有哪些取值：

display用于表示元素的类型。

- display:block 块级元素
- display:inline 行内元素
- display:inline-block 行内块级元素
- display:none 隐藏元素
- display:table 绘制表格
- display:table-row 绘制表格的行
- display:table-cell  绘制表格的单元格
- 加分项：
  - display:flex；弹性盒子
  - 绝对定位，固定定位，浮动都会使display属性变为inline-block。（脱标的元素都会变为inline-block）

## 块元素，行元素，行内替换元素，替换元素，不可替换元素的区别

- 块级元素：
  - 独占一行
  - 默认宽度为父级宽度的100%;
  - 可以设置宽高和内外边距
  - 代表元素：div p ul ol 
- 行内元素
  - 和相邻的行内元素在同一行;
  - 宽高不可设置，宽高由内容决定，上下**内外边距**不能设置；
  - 多个行内元素‘在换行时’，彼此之间会存在间隙。----解决方法 ：将父元素的font-size设置为0，再设置本身的font-size
  - 代表元素：a span label
- 行内替换元素
  - 替换元素与行内元素的交集，即可以设置宽高，也会在一行显示。
  - 代表元素：img,input



- 替换元素：
  - 其显示内容是由元素的属性来决定的，即由其加载内容决定，但是CSS可以覆盖其样式。
  - 比如img的宽高初始是由src的加载的图片决定的，input也是由type的属性决定的。
  - 替换元素分为块级替换元素和行内替换元素，行内替换元素即为inline-block



## display：table和html的table标签有什么区别

- display：table是直接通过css来绘制表格，可以使用简洁的div来布局。
- table标签已经逐渐被淘汰了，因为table表格中某个元素触发重排时，会导致所有元素都触发重排，严重影响效率。







## position有哪些取值：

position用于表示元素的定位方式

- position:static
  - 元素默认的定位方式，元素按照标准流布局。
- position:relative
  - 相对定位
  - 原来在标准流中的位置继续占有，不会有“脱标”的现象。
  - 相对定位会压住其他标准流的盒子,浮动的盒子以及固定的盒子。

- position:absolute
  - 绝对定位
  - 相对于最近的带有定位的父级元素的定位。如果所有父级元素都没有定位，则相对于整个html定位。
  - 绝对定位是脱标的，不占有原来的位置
  - 存在一个“子绝父相”的规则，一般父元素不能设置为绝对定位，这样会导致父元素也脱离标准流。
- position:fixed
  - 固定定位
  - 相对于可视区域的定位。
  - 脱标的
- positon:sticky
  - 黏性定位
  - 相当于相对定位和固定定位的结合，占有固定的位置，然后固定在特定的位置
- postion:inherit
  - 从父元素继承position 属性的值



## 让元素脱离标准流的方式：

- 浮动
- 绝对定位
- 固定定位



## z-index的定位方法

- z-index属性用于设置元素的堆叠顺序，值越大越靠前。

- 默认值为0，取值可以为负数

- z-index只能用在带有定位的元素身上





# 元素隐藏



## 怎么样让一个元素消失

- **display:none;** 

- **visibility:hidden;** 

- **opacity: 0;** 

- 利用绝对定位移到外部；

- z-index图层遮盖等等；

- 利用文本缩进属性text-indent：-999px;



## display:none，visibility：hidden, opacity：0三者的区别

- display：none
  - display隐藏的元素将不占用原来的位置，会改变页面布局。
  - 会引起回流和重排
- visibility：hidden
  - 隐藏的元素会占用原来的位置，不会改变页面布局
  - 绑定的事件不能被触发
  - 不会引起回流，但会引发重排

- opacity：0
  - 隐藏的元素会占用原来的位置，不会改变页面布局
  - 绑定的事件仍能触发
  - 会触发CSS3硬件加速，不会引起回流和重排



## CSS3中对溢出的处理

overflow:hidden; 需要先设置溢出隐藏。

text-overflow: clip;默认值，直接修剪文本；

text-overflow: ellipsis；用省略号来替换修剪的文本；

text-overflow: string；使用给定的字符串来代表被修剪的文本。（只在火狐浏览器有效）





## 单行文字与多行元素的文本省略号:

- 单行文字溢出时省略号显示： 

```css
/* 1.先强制文本一行显示 */
white-space: nowrap;
/* 2.溢出的部分隐藏起来 */
overflow: hidden;
/* 3.用省略号代替超出的部分 */
text-overflow: ellipsis;
```

- 多行文字溢出时省略号显示 :

​    因为兼容性比较大，所以实际开发中推荐后台人员处理

```css
overflow: hidden;
text-overflow: ellipsis;
/* 弹性伸缩盒子显示 */
display: -webkit-box;
/* 限制一个块元素显示文本的行数 */
-webkit-line-clamp: 2;
/* 设置伸缩盒对象的子元素的排列方式 */
-webkit-box-orient: vertical;
```



补充：文字换行：

```css
word-break:break-all;
```



# 实现居中效果：

https://blog.csdn.net/weixin_37580235/article/details/82317240#%E5%B7%B2%E7%9F%A5%E9%AB%98%E5%BA%A6%E5%92%8C%E5%AE%BD%E5%BA%A6%E7%9A%84%E5%85%83%E7%B4%A0

- 总的来说：
  - 对于块级元素，有两种方案：1.定位 2.flex布局
  - 对于行内元素，需要单独注意。

## 水平居中：

### 行内元素:warning: ：

- 为父元素添加text-align:center。（注意：要确保父元素为块级元素）

### 块级元素：

#### 方案1：定宽与不定宽:warning: 

- 定宽元素：为其设置margin:0 auto；原理是让margin自动撑开左右两边的剩余空间。

- 不定宽元素：既然该元素没有宽度，则将其转换为行内块元素，即设置为display:inline-block；然后为父元素设置text-align:center。

#### 方案2：使用定位属性

```css
.father{
    position:relative;
}
.son{
    position:absolute;
    width:100px;
    height:100px;
    /* 方式1 */
    top:50%;
    left:50%;
    margin-left: -50px;
    /* 方式2 */
    left:0;
    right:0;
    margin:auto;
    /* 方式3----该方法对于宽度未设置时仍然有效 */
    top:50%;
    left:50%;
    transform:translateX(-50%);
}
```

#### 方案3：使用flex布局

```css
/*该方法对于宽度未设置时仍然有效*/
.father{
    display:flex;
    justify-content:center;
}
```



## 垂直居中：

### 行内元素:warning: ：

#### 单行文字的行内元素：

- 将子元素的line-height设置为父元素的高度

```css
.father{
    height:300px;
}
.son{
    line-height:300px;
}
```

#### 多行文字的行内元素：

- 将父元素设置为display:table-cell;vartical-align:middle。

- 原理是在表格的单元格中可以通过vertical-align属性设置单元格内容的对齐方式。

  ```css
  #father {
      width: 200px;
      height: 300px;
      background-color: skyblue;
      display: table-cell;
      vertical-align: middle;
  }
  #son {
      width: 100px;
      word-wrap: break-all;
  }
  注意：若多行文字并不是出现在行内元素，而是直接在父元素中，则也可通过该方式实现垂直居中。
  ```

  

### 块级元素：

#### 方案1：使用定位属性：

```css
.father{
    position:relative;
}
.son{
    position:absolute;
    width:100px;
    height:100px;
    /* 方式1 */
    top:50%;
    left:50%;
    margin-top: -50px;
    /* 方式2 */
    top:0;
    bottom:0;
    margin:auto;
    /* 方式3 该方法对于高度未设置时仍然有效*/
    top:50%;
    left:50%;
    transform:translateY(-50%);
}
```

#### 方案2：使用flex布局：

```css
/*该方法对于高度未设置时仍然有效*/
.father{
    display:flex;
    align-items:center;
}
```



## 水平垂直居中：

### 行内元素：

```css
.father{
    text-align:center;
    display:table-ceil;
    vertical-align:middle;
}
```



### 块级元素：

#### 方案1：使用定位属性

```css
.father{
    width: 500px;
    height: 300px;
    position:relative;
}
.son{
    width: 100px;
    height: 100px;
    position:absolute;
    /* 方式1 */
    top:50%;
    left:50%;
    margin-top: -50px;
    margin-left: -5opx;
    /* 方式2 */
    top:0;
    bottom:0;
    left:0;
    right:0;
    margin:auto;
    /* 方式3----该方法对于宽高未设置时仍然有效 */
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
}
```

#### 方案2：使用flex布局

```css
/*该方法对于宽高未设置时仍然有效*/
.father{
	display:flex;
	justify-contetn:center;
	align-items:center;
}
```





## 图片的水平垂直居中显示:

分析：图片属于行内块元素，因此对于行内元素和块级元素的方案都可以使用！！！！





# BFC,外边距重叠，清除浮动

## BFC：

### 什么是BFC：

- BFC（Block Formatting Context）块级格式化上下文
- 是页面中的一块渲染区域，并且有一套渲染规则，它决定了其子元素将如何定位，以及和其他元素的关系和相互作用。
- 具有 BFC 特性的元素可以看作一个独立的容器。



### BFC的特性，作用：

- 1.开启BFC的元素不会被浮动元素覆盖。

  - 该特性常用于**防止文字环绕**

  - 比如两个子元素，子元素1设置为浮动，则子元素2会被浮动的子元素1覆盖。为子元素2开启BFC后，就不会被浮动的元素覆盖。

    ![image-20201007090050459](C:\Users\刘小康\AppData\Roaming\Typora\typora-user-images\image-20201007090050459.png)

    

  - 防止文字环绕：为p标签开启BFC :  `p{overflow:hidden}`  注意：原先的p标签是被浮动的元素覆盖了的，只是文字没有被覆盖而已，文字没被覆盖的原因是浮动最初的设计目标就是用来做文字环绕效果的。

    ![image-20201007093418514](C:\Users\刘小康\AppData\Roaming\Typora\typora-user-images\image-20201007093418514.png)

    ![image-20201007093314095](C:\Users\刘小康\AppData\Roaming\Typora\typora-user-images\image-20201007093314095.png)

- 2.开启BFC的父元素可以包含浮动的子元素。也就是此时父元素的高度会被浮动的子元素撑开。

  - 该特性常用于**清除浮动**。

  - 如下图：子元素1为浮动的元素，子元素2为普通元素。为父元素开启BFC后，可以包含浮动的元素

    ![image-20201007090427595](C:\Users\刘小康\AppData\Roaming\Typora\typora-user-images\image-20201007090427595.png)

  

- 3.BFC是一个独立的容器，开启了BFC的父元素与子元素是互不影响的。

  - 该特性常用于解决**嵌套元素的外边距重叠**的问题。

    ```css
    .father{
    	overflow:hidden;
    }
    ```

![image-20201007092155704](C:\Users\刘小康\AppData\Roaming\Typora\typora-user-images\image-20201007092155704.png)



### 产生BFC的条件：

- 开启BFC即为产生一个独立的容器。

- :star: overflow设置为除visible以外的值（hidden,auto,scroll）**最常见的就是设置overflow为hidden，因为其他方式都会影响布局。**
- postion设置为absolute,fixed，float设置为除none以外的值（left,right）---->设置display:inline-block
- display设置为表格相关的属性（table,table-cell,table-caption）





## 外边距重叠问题：

- 外边距重叠是指：处于普通流中的相邻块元素或嵌套块元素，其垂直方向的外边距会发生重叠。

- 具体就是：

  - 对于相邻元素，最终的外边距会取最大的值
  - 对于嵌套元素，子元素的外边距看不到效果，父元素的外边距由最大的值决定

- 解决外边距重叠的方法：

  - 1.为父元素添加overflow属性，开启BFC，利用BFC的独立容器的特性。
    - `overflow:hidden`

  - 2.为父元素设置边框
    - `border:1px solid transparent`
  - 3.为父元素设置内边距
    - `padding:1px`



## 清除浮动：

### 为什么要清除浮动？

浮动的元素脱离了标准流，无法撑开父元素的高度，为了让子元素包含在父元素内部，需要清除浮动。

### 清除浮动的方法：

两大原则：

- 1.为父元素开启BFC，利用的是开启BFC的元素可以包含浮动元素的特性。
- 2.为浮动元素后面的元素添加clear属性。
  - [原理](https://www.w3.org/html/ig/zh/wiki/CSS2/visuren#flow-control)是添加clear属性可以清除该元素之前所有浮动元素对后面元素产生的影响
  - clear:left  表示 该元素会紧贴在左浮动元素的下方
  - clear:right   表示 该元素会紧贴在右浮动元素的下方
  - clear: both 表示 该元素会紧贴在所有浮动元素的下方

具体实现方案：

- BFC方案：

  - 1.为父元素添加overflow属性，取值为除visible之外的值（hidden,auto,scroll）
  - 2.为父元素也添加浮动，不过这样回影响布局，不推荐使用。

- clear: both 方案

  - 3.额外标签法：在浮动元素的后面添加一个空元素。`<div style="clear:both"></div>`

  - 4.after伪元素：这是额外标签法的升级版，优点在于不用在html文档中添加新的标签。

    ```css
    .clearfix::after{
        content:'';
        display:block;
        clear:both;
    }
    ```

  - 5.为浮动元素后面本身有的元素添加clear:both属性



# 实现相关

知识储备：

**位移**：transform:translateZ()

**缩放**：transform:scale()

**2D旋转**: transform:roatete()

**3D旋转：** transfrom:rotateX()  rotateY()   translateZ() ;   perspective:500px;     transfrom-style:preserve-3D;

**过渡**：transition 

**动画**：annimation





## 如何画一个三角形

三角形原理：边框的均分原理（边框本来是围绕content来布局的，所以当宽高设置为0的时候，通过设置相应边框的粗细和是否透明就可以实现想要的三角形）

```css
div {
    width:0px;
    height:0px;
    border-top:10px solid red;
    border-right:10px solid transparent;
    border-bottom:10px solid transparent;
    border-left:10px solid transparent;
}
```



## 画一条0.5px的线

可以直接画。。。。。

**方法一：对于移动端，采用meta viewport的方式**

```html
<meta name="viewport" content="width=device-width, initial-scale=0.5, minimum-scale=0.5, maximum-scale=0.5"/>
```

这样子就能缩放到原来的0.5倍，如果是1px那么就会变成0.5px

要记得viewport只针对于移动端，只在移动端上才能看到效果



**方法二：使用linear-gradient的方式**

```css
width: 200px;
height: 1px;
background: linear-gradient(to bottom, transparent 50%, red 50%);
```



**方法三：采用transform: scale()的方式：**

```css
transform: scale(0.5,0.5)或scaleY(0.5);
transform-origin: 50% 100%; // 要指定origin值, 要不然会模糊？？？？跟渲染有关？？
```





## 如何画一个正方体：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      .box {
        width: 200px;
        position: relative;
        font-size: 100px;
        text-align: center;
        line-height: 200px;
        color: white;
        margin: 100px auto;
        /* 要点3：父盒子做旋转 */
        transform-style: preserve-3d;
        transform: rotateY(-22deg) rotateX(-28deg);
      }
      .box > div {
        /* 要点1：每个面都设置为绝对布局 */
        position: absolute;
        width: 200px;
        height: 200px;
        background-color: rgb(80, 136, 219, 0.5);
        border: 1px solid black;
      }
      /* 要点2：每个面各自旋转和位移特定的角度 */
      .front {
        transform: translateZ(100px);
      }
      .back {
        transform: rotateY(180deg) translateZ(100px);
      }
      .left {
        transform: rotateY(-90deg) translateZ(100px);
      }
      .right {
        transform: rotateY(90deg) translateZ(100px);
      }
      .top {
        transform: rotateX(90deg) translateZ(100px);
      }
      .bottom {
        transform: rotateX(-90deg) translateZ(100px);
      }
    </style>
  </head>
  <body>
    <div class="box">
      <div class="front">1</div>
      <div class="back">6</div>
      <div class="left">3</div>
      <div class="right">4</div>
      <div class="top">5</div>
      <div class="bottom">2</div>
    </div>
  </body>
</html>

```





## 用css实现一个硬币旋转的效果

```html
 <body>
    <div class="coin">
      <div class="front">正面</div>
      <div class="back">背面</div>
    </div>
  </body>
```



```css
body {
    /* 要点5：为父元素添加透视属性，3D效果的实现必须结合透视才有效果 */
    perspective: 500px;
}
.coin {
    position: relative;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: rgba(187, 179, 179, 0.877);
    margin: 100px auto;
    cursor: pointer;
    line-height: 200px;
    /* 要点4：由于子元素有添加旋转效果，所以需要通过transform-style开启子元素的3D空间 */
    transform-style: preserve-3d;
}
.coin:hover {
    /* 要点3：为父元素添加旋转的动画 */
    animation: rotate 2s infinite;
}
@keyframes rotate {
    from {
    }
    to {
        transform: rotateY(360deg);
    }
}
/* 要点1：前后两个面分别设置为绝对布局 */
.front {
    position: absolute;
    width: 100%;
    height: 100%;
    text-align: center;
}
.back {
    position: absolute;
    width: 100%;
    height: 100%;
    text-align: center;
    /* 要点2：背面需要绕y轴旋转180度 */
    transform: rotateY(180deg);
}
```



## 三栏布局的实现方式

https://www.nowcoder.com/tutorial/96/1678a0fd35cd4db486af18589e34e4d4



**css共有六种布局方式：圣杯布局、双飞翼布局、Flex布局、绝对定位布局、表格布局、网格布局**

**注意：为了优先渲染center，需要将center放在最前面。**



### 圣杯布局

圣杯布局是指布局从上到下分为header、container、footer，然后container部分定为三栏布局。

​	

```html
<div class="container">
      <div class="center"></div>
      <div class="left"></div>
      <div class="right"></div>
</div>
```



```css
.container {
    /* 步骤一：使外部的container成为一个BFC,用于容纳浮动元素 */
    overflow: hidden;
    /* 步骤四：通过设置padding留出左右的200px的空间 */
    padding: 0 200px;
}
.container > div {
    /* 步骤五：将left和right设置为绝对布局，left向左移动200px，right向右移动200px */
    position: relative;
    float: left;
    height: 100px;
}
.center {
    /* 步骤二：将center设置为100%,left和right分别设置为200px。这一步的结果会使left和right在center的下一行显示 */
    width: 100%;
    background-color: red;
}
.left {
    width: 200px;
    background-color: green;
    /* 步骤三：通过margin-left将left向左移动父元素的100%，将right向左移动right的宽度。此时left和right是覆盖在center上的 */
    margin-left: -100%;
    left: -200px;
}
.right {
    width: 200px;
    background-color: blue;
    margin-left: -200px;
    right: -200px;
}
```



优点：不需要添加dom节点

缺点：当center的宽度小于left时会发生布局混乱。



### 双飞翼布局

方式与圣杯布局差不多，区别在于需要给center中的内容包裹一个main，然后通过margin把页面撑开。



```html
<div class="container">
    <div class="center">
        <div class="main"></div>
    </div>
    <div class="left"></div>
    <div class="right"></div>
</div>
```



```css
.container {
    /* 步骤1：使外部的container成为一个BFC,用于容纳浮动元素 */
    overflow: hidden;
}
.container > div {
    height: 100px;
    float: left;
}
.center {
    /* 步骤二：将center设置为100%,left和right分别设置为200px。这一步的结果会使left和right在center的下一行显示 */
    width: 100%;
    background-color: red;
}
.main {
    /* 步骤四：为main设置左右mrgin撑开内部的内容 */
    margin: 0 200px;
}
.left {
    width: 200px;
    background-color: orange;
    /* 步骤三：通过margin-left将left向左移动父元素的100%，将right向左移动right的宽度。此时left和right是覆盖在center上的 */
    margin-left: -100%;
}
.right {
    width: 200px;
    background-color: green;
    margin-left: -200px;
}
```





### Flex布局

由于center需要优先渲染，所以必须放在首位。通过order可以将left,center,right进行排序

```css
<div class="container">
    <!-- 优先渲染 -->
    <div class="center"></div>
    <div class="left"></div>
    <div class="right"></div>
</div>


.container {
    display: flex;
}
.container > div {
    height: 100px;
}
.center {
    order: 2;
    flex: 1;
    background-color: green;
}
.left {
    order: 1;
    width: 200px;
    background-color: red;
}
.right {
    order: 3;
    width: 200px;
    background-color: blue;
}
```



### 绝对定位布局

center设置为绝对布局，不设置宽度，通过left和right设置相同的值来撑开内容。

left和right分别设置为左右浮动



```css
<div class="container">
    <div class="center"></div>
    <div class="left"></div>
    <div class="right"></div>
</div>

.container {
    position: relative;
}
.center {
    /* center设置为绝对布局，不设置宽度，通过left和right设置相同的值来撑开内容。 */
    position: absolute;
    left: 200px;
    right: 200px;
    height: 500px;
    background-color: red;
}
.left {
    width: 200px;
    height: 100px;
    background-color: orange;
    /* left和right分别设置为左右浮动 */
    float: left;
}
.right {
    width: 200px;
    height: 100px;
    background-color: green;
    float: right;
}
```



### table-cell布局

给三栏都设置为表格单元 `display: table-cell`

left 和 right `width: 200px`，center `width: 100%`

这时 left 和 right 被挤到两边去了，因此要分别设置`min-width: 200px`确保不会被挤压。

```css
<div class="container">
    <div class="left"></div>
    <div class="center"></div>
    <div class="right"></div>
</div>

.container > div {
    height: 100px;
    display: table-cell;
}
.left {
    width: 200px;
    min-width: 200px;
    background-color: orange;
}
.center {
    width: 100%;
    background-color: orangered;
}
.right {
    width: 200px;
    min-width: 200px;
    background-color: green;
}
```

这种布局方式能使得三栏的高度是统一的，但不能使center放在最前面得到最先渲染。



### 网格布局

网格布局可能是最强大的布局方式,使用起来极其方便。（兼容性并不好）



给 container 设置为`display: grid`

设置三栏的高度：`grid-template-rows: 100px`

设置三栏的宽度，中间自适应，两边固定：`grid-template-columns: 200px auto 200px;`

```css
<div class="container">
    <div class="left"></div>
    <div class="center"></div>
    <div class="right"></div>
</div>

.container {
    display: grid;
    grid-template-rows: 100px;
    grid-template-columns: 200px auto 200px;
}
.left {
    background-color: red;
}
.center {
    background-color: orange;
}
.right {
    background-color: green;
}
```



# CSS3

## CSS3的新特性，新属性：

- 边框方面：border-radius，box-shadow
- 背景方面：background-size，background-origin
- 渐变：linear-gradient
- 文本效果：text-shaow 文字阴影
- 动画方面：transform2D/3D转换     transition过渡     animation动画
- 颜色方面：新增了rgba可以设置颜色透明度
- 布局方面：弹性布局flex；栅格布局 grid
- 定义盒子模型：box-sizing

- 媒体查询：响应式开发



## calc属性

- 用于动态计算长度值，任何长度值都可以使用calc()函数计算
- 需要注意的是，运算符前后都需要保留一个空格
- 例如：width: calc(100% - 10px)；（百分比相对的是父元素）



## CSS3弹性盒子：

传统布局的解决方案是display+position+float 使用起来非常不方面。

弹性盒子是 CSS3 的一种新的布局模式，由弹性容器(Flex container)和弹性子元素(Flex item)组成。



容器的属性：

flex-direction 

flex-wrap  

flex-flow  

justify-content 

align-items



项目的属性：

order

flex-grow

flex-shrink

flex-basis

flex

align-self



## transition和animation的区别

- 两者大部分属性是相同的，他们都是随时间改变元素的属性值

- animation中的@keyframes 可以**一次定义，多次使用**。而transition所过渡的效果需要单独设置
- animation 可以通过的动画序列实现**多节点变化**
- aniumation可以**自动播放**，且在页面一加载就使用。tansition只能手动触发。
- animation比transition丰富，可以实现**无限播放以及暂停播放**的功能。



动画的实现：

- 1.transition+一定的触发条件，比如hover
- 2.animation+@keyframes



- tansform 转换
  - translate 转移
    - transform: translate(50%,50%)
    - 不会影响页面的布局，类似于相对定位，会占用原来的位置
  - rotate 旋转
    - transform: rotate(450deg)
    - transform-origin: left top; 设置旋转中心
  - scale 缩放
    - transform: scale(2)
    - 缩放时不会影响其他元素的布局，比直接设置width和height好
    - scale(2) 放大两倍
    - scale(0.5) 缩小为1/2
    - scale(-2) 缩小后放大两倍
    - scale(1,-1) 水平不变，做垂直翻转
    - scale(-1,1)垂直方向不变，做水平翻转
    - transform-origin:left top 设置缩放的中心点

- transition 过渡

  - tansition:  all (欲过渡的属性)  3s(持续时间)   ease|linear(运动曲线)    2s(延迟时间)

- animation 动画

  - @keyframes 定义动画

    - ```
      @keyframes move{
      	form{
      		
      	}
      	to{
      		tansform:tanslate(100px,0)
      	}
      }
      ```

  - animation 调用动画

    - animation: move(动画名称) 2s(持续时间) ease|step(5)(运动曲线) 2s(延迟时间)  infinite (播放次数)



## js动画和css3动画的差异性

- 渲染线程分为主线程和合成器线程。

- js动画会在main thread执行，然后触发compositor thread进行下一步操作。
- 如果css动画只改变transform和opacity，这时整个CSS动画都会在合成器线程完成。

- 特别注意：如果改变transform和opacity是不会触发重排layout或者重绘repaint的。



区别：

- js动画比较灵活，css3动画比较笨重。

- js动画兼容性好，css3有兼容性问题。
- js动画不如css动画流畅，因为css动画在合成器线程中进行动画处理，所以节省了昂贵的主线程资源

- js动画的功能涵盖面比css3大。

- js动画在主线程中运行，容易丢帧。而对帧速表现不好的低版本浏览器，css3可以做到自然降级。

- 实现/重构难度不一，CSS3比js更加简单，性能调优方向固定





# css预处理器有什么

less，sass等



# 移动web开发：

## Native App，Web App，Hybrid App，PWA的区别：

- Native App（原生App）:   功能齐全，用户体验好，但是开发成本高。

- Web App:   基于B/S的架构，基于浏览器运行。开发成本低，但功能有限，网络要求高。

- Hybrid App（混合app）:    兼容多平台，用户体验不如原生App
- PWA:    渐进式web应用，可以通过service workers实现离线功能，利用manifests可以实现安装。



## 移动端touch事件：

```js
// 手指点击事件
div.addEventListener('touchstart', function() {
    console.log(111);
});
// 手指滑动事件
div.addEventListener('touchmove', function() {
    console.log(222);
});
// 手指松开事件
div.addEventListener('touchend', function() {
    console.log(333);
})
```



## 视口viewport：

视口分为布局视口，视觉视口和理想视口。

- 布局视口layout viewport：
  - 安卓苹果默认将视口分辨率设置为了980px，元素看上去很小，需要手动缩放页面。
  - 布局视口可以通过document.documentElement.clientWidth来获取。
- 视觉视口visual vieport:
  - 用于正在看到的网站的区域。可以通过缩放操作视觉视口，但不会影响布局视口原来的宽度。
  - 视觉视口可以通过window.innerWidth来获取。
- 理想视口ideal viewport:
  - 添加meta视口标签，手机屏幕有多宽，布局视口就有多宽，用户不需要手动缩放网站。
  - 理想视口可以通过window.screen.width来获取。



## 移动端布局：

- 流式布局
- flex伸缩布局
- rem适配布局
- 响应式布局



