# 面试

Unity 初级客户端面试题

## C#

<!-- 掌握：实现的算法、数据结构、工具类 -->

### 值类型与引用类型

#### 值类型

##### 整型类型

- 有符号
  - sbyte
  - short
  - int 
  - long
- 无符号
  - byte
  - ushort
  - uint
  - ulong

```cs
// 整型数值类型
private sbyte _Jsbyte = -128; // -128 -> 127 => 8 位带符号整数
private byte _Jbyte = 255; // 0 -> 255 无符号的 => 8 位整数
private short _Jshort = -32768; // -32768 -> 32767 => 有符号的 16 位整数
private ushort _Jushort = 65535; // 0 -> 65535 => 无符号的 16 位整数
private int _Jint = -2147483648; // -2147483648 -> 2147483647 : 带符号的 32 位整数
private uint _Juint = 4294967295; // 0 -> 4,294,967,295 => 无符号的 32 位整数
private long _Jlong = -9223372036854775808; /* -9223372036854775808 - 9,223,372,036,854,775,807 => 64 位带符号整数 */
private ulong _Julong = 18446744073709551615; /* 0 到 18,446,744,073,709,551,615 => 无符号 64 位整数*/
```

整数文本可以是：

- 十进制
- 十六进制：使用 `0x` 或 `0X` 前缀
- 二进制：使用 `0b` 或 `0B` 前缀（在 C# 7.0 和更高版本可用）

##### 浮点型

- IEEE 二进制浮点数
  - float
  - double
- 高精度十进制浮点数
  - decimal

```cs
// 浮点型数值类型
private float _Jfloat = 0.2f; // 大致范围：+1.5 x 10⁻⁴⁵ 至 ± 3.4 x 10⁻³⁸，精度大约 6-9 位数字，4个字节
private double _Jdobule = 0.55; // ±5.0 × 10⁻³²⁴ 到 ±1.7 × 10³⁰⁸，精度大约 15-17 位，8个 字节
private decimal _Jdecimal = 2.1m; // ±1.0 x 10⁻²⁸ 至 ±7.9228 x 10²⁸，精度 28-29 位，16 个字节
```
与 decimal 和 float 相比，double 类型具有更高的精度和更小的范围，因此它适合于财务和货币计算。

##### 其他

- Unicode 字符：char
- 布尔：bool
- 结构类型：
  - 格式为 `struct S {...}`
- 枚举类型：enum
- 可以为 null 的值类型
- 元组值类型
  - 格式为 (T1, T2, ...) 的用户定义类型

###### 结构类型

#### 引用类型

- 类类型
  - 其他所有类型的基类：object
  - class：class C{...} 的用户定义类型
  - Unicode 字符串： string
- 接口类型
  - 格式为 interface I {...}
- 数组类型
  - 一维和多维，格式为 int[] 和 int[,]
- 委托类型
  - delegate int D(...)

用户可以定义以下物种类型：类类型、结构类型、接口类型、枚举类型和委托类型。

### 类型转换

- 隐式转换
- 显式转换（强制转换）

- 可以将任何`整型数值`类型转换为其他`整数数值类型`。 如果目标类型可以存储源类型的所有值，则转换是隐式的。 否则，需要使用强制转换表达式来执行显式转换。

#### 装箱与拆箱

- 装箱：把值类型转换成引用类型
- 拆箱：把引用类型转换成值类型

装箱和拆箱主要用在 ArrayList 这种强制 Object 类型的 list 上，它会自动装箱（简单类型转为引用类型），这个时候读取时，可以拆箱转为值类型。而 List 类型的元素都是同一种类型，List 只不过把数组的扩容也封装起来了。

#### 请简述 ArrayList 和 List 的主要区别？

#### 数组和排序

关于数组的排序，如果对象的对象类型的，可以实现 ICompare 接口，相当于传递了元素的比较函数。

对于对象类型，可以集成 ICompare 接口。

### GC（Garbage Collection）

### CLR（Common Language Runtime）

### 静态构造函数

### 文件 I/O

### 序列化与反序列化

序列化是<u>指把一个 C# 对象变成二进制内容，</u>本质上就是一个 `byte[]` 数组。

为什么要把 C# 对象序列化呢？因为序列化后可以把 `byte[]` 保存到文件中，或者把 `byte[]` 通过网络传输到远程，这样，就相当于把 Java 对象存储到文件或者通过网络传输出去了。

有序列化，就有反序列化，即把一个二进制内容（也就是 `byte[]` 数组）变回 Java 对象。有了反序列化，保存到文件中的 `byte[]` 数组又可以“变回” Java 对象，或者从网络上读取 `byte[]` “变回” Java 对象。

### （协程）

### 线程同步

### 抽象类 abstract class 与接口 interface 的异同

### 类 class 和结构体 struct 的异同

- 结构体 struct 和 类Class 区别 

### using 关键字的使用场景 https://blog.csdn.net/Iqingshuifurong/article/details/53129536

### 委托与事件

- 飞行射击
- HUD 与场景通信

### 重载（reload）与重写（override）的区别

方法的重写(Overriding)和重载(Overloading)是 c#多态性的不同表现，重写是父类与子类之间多态性的一种表现，重载可以理解成多态的具体表现形式。

(1)方法重载是一个类中定义了多个方法名相同,而他们的参数的数量不同或数量相同而类型和次序不同,则称为方法的重载(Overloading)。
(2)方法重写是在子类存在方法与父类的方法的名字相同,而且参数的个数与类型一样,返回值也一样的方法,就称为重写(Overriding)。
(3)方法重载是一个类的多态性表现,而方法重写是子类与父类的一种多态性表现。

- https://www.runoob.com/java/java-override-overload.html

### return 执行顺序

### switch（expression）

### 反射 Reflection

### property 与 attribute 的区别

### 请简述 sealed 关键字用在类声明时与函数声明时的作用

### 访问修饰符，请简述 private，public，protected，internal 的区别

Unity 3D、2D 手机游戏《面向对象编程部分》

### static 关键字的应用

### 文件编码格式

### 值传递与引用传递

### 参数传递 ref 与 out 的区别

ref 和 out 只要是为了解决 return 多个值的问题，并且对于值类型也可以通过方法进行修改。

### 浅拷贝与深拷贝

### 容器

### 迭代器

### 数据库

#### 数据库操作的相关类

#### 事务

#### 索引

#### 视图

#### 存储过程

## Unity

### 使用 Unity3d 实现 2d 游戏，有几种方式？

### 在物体发生碰撞的整个过程中，有几个阶段，分别列出对应的函数

### 如何安全的在不同工程间安全地迁移 asset 数据？三种方法

### 什么叫做链条关节？

### OnEnable、Awake、Start 运行时的发生顺序？哪些可能在同一个对象周期中反复的发生

### MeshRender 中 material 和 sharedmaterial 的区别？

### Unity 提供了几种光源，分别是什么

### 简述一下对象池，你觉得在 FPS 里哪些东西适合使用对象池

### 简述 prefab 的用处

### CharacterController 和 Rigidbody 的区别

### 渲染流程

1. 你觉得为什么 UI 摄像机和场景摄像机能协同工作，而且工作的这么尽如人意呢？
   答案：UI 摄像机和场景摄像机分别属于两个渲染层（Layer），所以它们之间的渲染互不干扰。它们工作得尽如人意（没有发生先后错乱，UI 永远位于场景之上层）的原因就是因为摄像机深度（depth）控制的好。

### UGUI（优先）

#### 你觉得怎么防止 UI 控件被点穿（如何过滤掉点击事件）

例如，卡背与卡面两个图形对象

#### 你对 UI 功能模块之间相互通信有什么好看法。（或者问成 Broadcast 和 sendMessage 的看法）

#### 关于 UIGrid 问题

#### 众里寻他千百度，你怎么样能迅速找到某一个 UI 控件

通过 GameObject.Find("/xxx/xxx") 路径。

#### 你对遮挡关系有什么好的策略

在同一个镜头中，Cavans 中所有的物体在进行渲染时，会按照先后顺序，即后渲染的会遮住先渲染的。因此在设定一些比如按钮的遮挡关系的时候，可以将想要在最上层的 UI 放到最后去渲染，修改 Hierarchy 层级面板从上往下的顺序。

而对于在游戏中动态产生的物体，可以使用代码来调整子物体的顺序。


```cs
rectTran.SetAsLastSibling();
```


#### 你对屏幕适配有什么好主意

- ![屏幕适配实用技巧](https://zhuanlan.zhihu.com/p/42779882)

## Lua

<!-- 掌握使用：实现的算法、数据结构、工具类、游戏脚本 -->

- 元表
- 面向对象
- 协同程序

## 算法和数据结构

数据逻辑层

1. 请简述一下你对数据结构的选取有什么看法
2. 请把这份配置文件解析成你想要的数据结构，给我看看
3. 请简述一下 C# 中，结构体和 class 的用法
4. 接受到网络发来的数据，你会怎么办

游戏控制流程：

<!-- 1. 你对资源加载有什么看法。 -->

2. 请给我设计一个状态机，完成一个简单的 xxxx 情景。
   <!-- 3. 角色换装，技能释放你会怎么做。 -->
3. 动态更新有什么看法。

### 数组

### 链表

### 散列表

### 栈

通过栈可以把绝大数的递归，改成非递归写法。

### 队列

### 堆

### 树

### 冒泡排序

### 选择排序

### 快速排序

### 计数排序

## 设计模式

### 单例模式

### 工厂模式

## 架构

### Unity 的状态管理

对于各个脚本的状态管理问题，比如，对于 A 脚本改变 B 脚本组件的状态时，B 都应用提供一个方法来设置。而不是直接改变状态值，这样也是为了更有效的状态跟踪。

跟 web 前端的状态区别。

### Unity 中模块化、组件化、自动化、规范化是如何实现的？

#### 模块化

### MVC

依赖注入到组件和事件广播组件。

参考资料：

- [前端架构 101： MVC 初探](https://mp.weixin.qq.com/s/8ILlKiZIGCqqVoKhH4VDtA)
- [Unity with MVC: How to Level Up Your Game Development](https://www.toptal.com/unity-unity3d/unity-with-mvc-how-to-level-up-your-game-development)
- [MVC in Unity](https://www.gamasutra.com/blogs/TabeaIseli/20160926/282062/MVC_in_Unity.php)
- [Model View Controller (MVC) Design Pattern](https://riptutorial.com/unity3d/example/32513/model-view-controller--mvc--design-pattern)

## 其他

### 游戏与其他软件的区别

- 视频游戏比大多数网站与编写其他类型的软件本质上没有什么区别（都是跟用户交互），但是会有更多的交互，而且会包含很多不同类型的代码，但制作所用的技术和方法很相似。

拿网站来说，游戏中的场景相当于不同的页面 URL，而游戏对象则像页面中一个个模块，游戏对象的组件也像是页面中的组件。对于交互来说，一样是各种输入设备（鼠标、键盘）等，只不过游戏比网站多了游戏世界观，更多地与用户互动，让用户一步步解密，得到快乐。而网站则是辅助用户完成工作、生活中的事情。

游戏跟真实的世界很像，如著名电影《楚门的世界》，只不过它可以通过人为模拟出来。

游戏开发中的开发者指的是为游戏开发工作的任何人，除了编程人员，还有艺术家和设计师。

### 研发、发行和渠道

游戏行业公司大体可以分为四类：`研发商`、`发行商`、`游戏平台`或渠道、其他`辅助相关公司`。

一般一款游戏在`研发`出来（也可能在 demo 阶段）时，`发行商`获得发行授权（发行商需要付出版权金加流水分成），然后发行商将游戏在各家`渠道`发布，并通过广告和市场活动来推广该产品，最终收益按照一定的比例三方分成，在其中会有一些其他辅助公司从中牟利。

- 研发商做游戏
- 发行商经销游戏
  - 市场工作
  - 运营
  - 客服
- 游戏平台/渠道：苹果商店
- 辅助公司：游戏直播公司

如果是纯研发公司，自己不做发行，一般能拿到流水的 20%-30%（如果研发拥有 IP，那么比例会更高），如果发行很强势，那研发可能只能拿到 10%-15%。

### 软件开发流程

### .NET Core 与 .NET Framework 的区别

.NET Core 是.NET Framework 的新一代版本，是微軟開發的第一個跨平台 (Windows、Mac OSX、Linux) 的應用程式開發框架（Application Framework），未來也將會支援 FreeBSD 與 Alpine 平台。.Net Core 也是微軟在一開始發展時就開源的軟體平台[1]，它經常也會拿來和現有的開源 .NET 平台 Mono 比較。

.NET Core 是现代的

- 与一些较旧的框架不同，.NET Core 旨在解决当今的现代需求，包括移动友好、构建一次在任何地方运行、可伸缩和高性能。.NET Core 旨在构建针对各种设备的应用程序，包括物联网和游戏机。

.NET 在 C# 8 的帮助下支持现代语言结构，如面向对象和模块化编程、泛型、集合、lambdas、语言集成查询(LINQ)和异步编程，这使开发人员更加高效。

在这里了解更多关于 C#7 和 C#8 特性的信息，

C#7.1、7.2 和 7.3 新特性

C#8 特性

## 参考资料

- [十分钟，看懂研发、发行和渠道的那些事儿](https://zhuanlan.zhihu.com/p/34964309)
- [UGUI 系列导航帖](https://blog.csdn.net/zcaixzy5211314/article/details/86515168)
- [C# 面试题归纳](https://zhuanlan.zhihu.com/p/56522099)
- [.NET Core](https://zh.wikipedia.org/zh/.NET_Core)
- [通俗易懂，什么是.NET Core 以及.NET Core 能做什么](https://www.cnblogs.com/yilezhu/p/10880884.html#:~:text=%E4%B8%8E%E5%85%B6%E4%BB%96%E8%BD%AF%E4%BB%B6%E6%A1%86%E6%9E%B6%E4%B8%8D%E5%90%8C,%E4%B8%8E%E5%85%B6%E4%BB%96%E6%A1%86%E6%9E%B6%E4%B8%8D%E5%90%8C%EF%BC%8C.&text=NET%20Core%E6%8F%90%E4%BE%9B%E4%BA%86%E6%9C%80,%E5%A4%9A%E8%AF%AD%E8%A8%80%E6%94%AF%E6%8C%81%E5%92%8C%E5%B7%A5%E5%85%B7%E3%80%82)
- [类型和变量](https://docs.microsoft.com/zh-cn/dotnet/csharp/tour-of-csharp/types-and-variables)
- [Unity面试题（包含答案）](https://zhuanlan.zhihu.com/p/61925255?utm_source=wechat_session&utm_medium=social&utm_oi=710800537397764096&utm_content=sec)
- [lua 面试题](https://www.jianshu.com/p/d4c535791b5e)