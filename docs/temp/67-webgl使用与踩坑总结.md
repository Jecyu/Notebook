# WebGL 从入门到实战总结

## 前言

**主要解决：**

- 地图导出图片问题
- 图层置灰问题（可以 review 4.13 源码 swipe 是如何与图层关联操作的。）
- 三维地图与二维地图的渲染区别（坐标系、定位、绘制等）

入门教程

- 开始 WebGL
- 给 WebGL 的上下文环境添加 2D 内容
- 在 WebGL 中使用着色器（shader）去赋予颜色
- 用 WebGL 让对象动起来
- 使用 WebGL 创建 3D 物体
- 在 WebGL 中使用纹理贴图（texture）
- WebGL 中的灯光
- WebGL 中的动画纹理贴图

《十步学习法》

- 了解全局
- 确定范围
- 定义目标
- 寻找资源
- 创建学习计划
  - 基本的绘制 3d 图形，导出图形，
  - 创建一个迷型的 3d 库原理学习
- 筛选资源
- 开始学习，浅尝辄止
- 动手操作，边玩边学
- 全面掌握，学以致用
- 乐为人师，融汇贯通

以下使用 WebGL 1.0 版本

## 入门（小白）

![](../.vuepress/public/images/2021-01-20-18-38-14.png)

### 什么是 WebGL

WebGL 程序的工作流程可以总结如下：

1. 使用 JavaScript 代码初始化 WebGL 程序，并使用它在 HTML5 Canvas 的 WebGL 上下文上绘制 2D 或 3D 场景。

2. 首先使用第一个被称为顶点着色器（vertex shader）的 GLSL 脚本对场景中的所有顶点进行绘制。它计算场景的抽象数学模型，并将其交给第二个 GLSL 脚本。

3. 第二个 GLSL 脚本称为片段着色器（fragment shader），它针对画布中的每个可见片段（像素）进行着色。它通过称为栅格化的过程来计算每个片段的颜色。

4. 这些片段（fragments） 构成了在颜色缓冲区的位图图像，该图像最终显示在画布上。

![](../.vuepress/public/images/2020-12-19-23-48-29.png)

### GLSL 语言

着色器源代码可以放在 JavaScript 字符串中，也可以从单独的文件中加载。

以下是其语法的主要功能：

- **int** 整数: 0, 1, 2, -10,...。
- **float** 浮点数： 0.0, 0.1, 1.0, -10.5,...。
- **bool** 布尔值：取值为 true 或者 false。
- **vec4** 是 4 个浮点组成的数组，代表顶点坐标或 3D 向量（x, y, z, w） 或颜色 (r, g, b, alpha)。同理也存在 vec2(x, y) 和 vec3(x, y, z/r, g, b) 类型。
- **mat4** 是 4 x 4 浮点数的矩阵（网格），可用于转换 3D 中的顶点坐标和向量。 也存在类型 mat2（2x2）和 mat3（3x3）
- **sampler2D** 是对纹理图像的参考； **samplerCube**是对“ 3D 纹理”（映射到多维数据集的 6 个纹理的集合）的引用。
- A **variable** is declared with its type, for example: int i = -1, float f = 2.0 or vec4 v = vec4(1.0, 2.0, 3.0, 4.0).
- A **constant** is a variable with a fixed value: const int c = 100;.
- 可以提取向量的 xyzw/rgba 分量，并在另一个向量中重新组合（重组），例如：float f = v.x，vec3 rgb = v.rgb，vec4 w = v.zxxy。
- 每个指令必须以 `;` 结尾。
- **Math functions**: cos, sin, tan, pow, exp, log, log2, sqrt, abs, sign, floor, ceil, round, trunc, fract, mod, min, max, clamp, mix, step, length, distance, dot, cross, reflect, normalize...
- **Math operators** (=, +, -, _, /, &&, ||, ==, !=, >, >=, <, <=, ++, --, ^^, +=, -=, _=, /=) only work between variables of the same type or same length (ex: int + int, float / float, mat4 \_ vec4 ...).
- **Type casting** （类型转换） allows to convert a type into another, when it's possible. Ex: `bool b = true; int i = int(b); /_ i = 1 _/ float f = float(i); /_ f = 1.0 \*/`.
- **Tests and loops**（测试和循环） are also available (if, else, switch, for, while), but loops must have a constant limit. (you can't do `for(int i = 0; i < j; i++){...} if j is variable)`.
- 每个着色器（shader）（程序执行开始的地方）的入口点是一个 `void main(){...}` 函数。
- 自定义函数也可以由 main（）或彼此创建和调用，但是不允许递归。
- - 可以在每个着色器中使用指令设置 int、float 和 Samplers2Ds 的精度（lowp/mediump/highp），例如 precision highp int；
- 这些指令必须位于着色器代码的开头，但是片段缓冲区中仅浮点精度是强制性的，默认情况下所有其他值均具有值。
- 顶点着色器必须设置一个包含当前顶点坐标的全局变量 `gl_Position`（在渲染单个点时还必须设置 `gl_PointSize`）。
- 片段着色器（fragment shader）必须设置一个包含当前片段颜色的全局变量 `gl_FragColor`。
  它可以访问 3 个全局变量：`gl_FragCoord`（窗口坐标），`gl_PointCoord`（点内坐标）和 `gl_FrontFacing`（当前三角形方向）。

### JavaScript 和 WebGL 通信

![](../.vuepress/public/images/2020-12-20-10-30-35.png)

主要有四种机制，用来在不同脚本（scripts）之间发送数据：

- **Attributes** 是 JavaScript 传递给顶点着色器（vertex shader）的全局变量。它们的值可以针对每个顶点而变化（例如：顶点坐标）。
- **Uniforms** 是 JavaScript 传递给顶点着色器（vertex shader）和片段着色器（fragment shader）（例如，一种颜色）的全局变量。它们的值在整个帧中保持不变。
- **Varyings** 不能被 JavaScript 访问。 它们只能被 vertex shader 写入和 被 fragment shader 读取。
- **Data buffers** are big arrays of numbers passed by JS to the vertex shader in chunks of 1 to 4 values.
  For example, if a long list of vertex coordinates (X,Y,Z, X,Y,Z, ...) is sent to the vertex buffer 3 by 3, the shader will receive each chunk in the form of an attribute vec3.

Each attribute, uniform and varying must be declared before main() in the shaders that uses them.

### 刚刚够的数学知识

#### 几何基础

- 2D 点具有两个空间坐标系（水平 X，垂直 Y）
- 3D 点具有深度的第三个 Z 坐标
- 原点是所有坐标均等于 0 的点

![](../.vuepress/public/images/2020-12-17-22-05-38.png)

#### 三角学基础

- 角度范围 0 到 360 度，等效于：0 到 2 \* PI 弧度（PI 弧度是半圆）。
- 通过将角度乘以 π/ 180，可以将度数转换为弧度。
- 弧度角可以通过将其乘以 180 /π 来转换为度。
- 三角圆是半径为 1 的圆，以 2D 平面的原点为中心。 该圆的每个点都对应一个逆时针测量的角度。
- 最右边的点代表角度 0（或`2 * Pi rad），最上面的点代表Pi / 2 rad，最左边的点代表`Pi rad`，最下面的点代表 3 \* Pi / 2 rad。
- 大于 2 _ Pi 或小于 0 的角度类似于相同的角度模 2 _ Pi（例如：5 _ Pi rad = Pi rad; -Pi / 2 rad = 3 _ Pi / 2 rad）。
- 角度“α”的余弦是三角圆上相应点的 X 坐标，并且在-1 和 1 之间振荡。
- 正弦是同一点的 Y 坐标，也在-1 和 1 之间振荡。
- 切线是在此点和 X 轴垂直于半径的线段的长度。 它的值介于-∞ 和+∞ 之间，等于 sin（α）/ cos（α）。

![](../.vuepress/public/images/trigo.gif)

#### 向量

- 向量是数字数组，它可以表示空间中的点（顶点），也可以表示方向（偏移）。
- 当它代表一个点时，它是一个坐标列表。
  - 例如，[2, 4] 可以表示 2D 点的 X 和 Y 坐标，[3, 5, 2] 可以表示 3D 的 X，Y 和 Z 坐标。
- 当是方向时（从空间中的位置到另一个位置），它表示在每个坐标中如何应用偏移量。你可以想象它像箭一样。
  - 例如，[1, 2, 3] 表示 X 偏移为 1 个单位，Y 偏移 2 个单位，Z 偏移 3 个单位。
- 与顶点相反，方向向量没有位置。它们仅代表一个偏移量，并且该偏移量可以从任何位置开始。
  - 你可以像这样构建向量 AB（从 A 点到 B 点）：AB = [xB - xA, yB - yA, zB - zA]。

![](../.vuepress/public/images/2020-12-17-23-13-23.png)

#### 操作向量

- 将两个向量相加，就是将它们的项一一相加：`V + W = [xV + xW，yV + yW，zV + zW]。`
- 缩放向量包括将所有项乘以给定的量：`V * n = [xV * n, yV * n, zV * n]。`
- 测量向量的长度（或大小）类似于使用毕达哥拉斯测量两点之间的距离：`|| V || = sqrt（xV²+yV²+zV²）`
- 对向量进行归一化包括将其长度调整为 1 个单位，而不改变其方向。等效于按 `1 / || V ||` 进行缩放。
- 可以使用**点积**计算两个归一化向量 V 和 W 之间的相对角度（方向差）：`V.W = xV * xW + yV * yW + zV * zW。`
  - 点积等于向量之间角度的余弦值。 例如，如果它们相等，则为 1；如果垂直，则为 0；如果相反，则为-1。

![](./../.vuepress/public/images/dot.gif)

- 两个向量 V 和 W 的叉积是一个垂直于两个向量的向量。 可以这样计算：`V×W = [yV * zW-zV * yW，zV * xW-xV * zW，xV * yW-yV * xW]`。

![](../.vuepress/public/images/cross.gif)

- 三角形 ABC 的法线是垂直于其表面的向量，更准确地说，垂直于三角形内部的任何向量。
  - 如果点 A，B 和 C 逆时针排列，则可以将其计算为向量 AB 和 BC 的叉积。 （如果为顺时针方向，法线将指向相反的方向）。
  - 顾名思义，三角形的法线必须归一化，因为它经常涉及点积。

![](../.vuepress/public/images/2020-12-18-13-55-32.png)

> 归一化（normalize）：１）把数据变成(０，１)或者（1,1）之间的小数。主要是为了数据处理方便提出来的，把数据映射到 0 ～ 1 范围之内处理，更加便捷快速。２）把有量纲表达式变成无量纲表达式，便于不同单位或量级的指标能够进行比较和加权。归一化是一种简化计算的方式，即将有量纲的表达式，经过变换，化为无量纲的表达式，成为纯量。
> 作者：brucep3
> 链接：https://www.jianshu.com/p/95a8f035c86c
> 来源：简书
> 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

#### 矩阵

> 在 3D 图形引擎中，计算可以在多个不同的笛卡儿坐标空间中执行，从一个坐标空间到另一个坐标空间需要使用变换矩阵。

参考资料
- 视频：这个系列视频讲得比较全了，都是动画演示，非常直观。自己按需观看吧：
  视频地址：【双语字幕】「线性代数的本质」合集。如何直观理解矩阵和线性代数？ 张孟杨的回答 - 知乎
  https://www.zhihu.com/question/21082351/answer/126177114
- 辅助理解：如何直观理解矩阵和线性代数？ - JHack的回答 - 知乎
https://www.zhihu.com/question/21082351/answer/734162947

矩阵是数字的网格（n 行 m 列数字组成的数组）。 它表示一个线性方程组，可以通过乘法应用于任何向量。将矩阵与向量相乘在于计算向量与矩阵的每一行的点积。

![](../.vuepress/public/images/2020-12-18-14-04-10.png)

例如，在 3D 中，下面的“身份”矩阵将向量转换成自身（这是中立的操作。

![](../.vuepress/public/images/2021-01-21-19-07-04.png)

如果在对角线上使用不同于 1 的值，则向量将被缩放：

![](../.vuepress/public/images/2021-01-21-19-12-14.png)

如果在其他字段中使用适当的值，则可以执行旋转：

- 沿 X 轴（弧度的角度 φ）

![](../.vuepress/public/images/2021-01-21-19-14-57.png)

- 沿 Y 轴（弧度角 θ）：

![](../.vuepress/public/images/2021-01-21-19-17-45.png)

- 沿 Z 轴（弧度 ψ）：

![](../.vuepress/public/images/2021-01-21-19-18-08.png)

弧度：2𝜋

![](../.vuepress/public/images/2021-01-21-19-29-19.png)

角度：θ

#### 矩阵的运算

- 可以通过反转矩阵的水平和垂直轴（对角线保持不变）来转置矩阵
  - ![](../.vuepress/public/images/2021-01-21-19-37-08.png)
  - 可以将两个或两个以上大小相等的矩阵相乘，以合并（累加）它们的变换。
  - 结果是一个矩阵，其中包含第一矩阵的每一行与第二矩阵的每一列的点积。
  - 组合顺序很重要，从右到左。 例如，执行平移 T，然后旋转 R，然后比例 S 的矩阵等于 S * R *T。

最后，矩阵可以求逆，它带有一个复杂的方程式，它取消了原始矩阵所做的转换。

`A * A-1 = identity`

`A * A-1 * V = V`

齐次坐标

- 在屏幕上渲染顶点时，只有 x、y 和 z 坐标重要，先前用于计算平移和投影的 W 坐标会被丢弃。

### 2D 图形

#### Hello, point

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Hello，point</title>
  </head>
  <body>
    <canvas id="canvas" width="400" height="400"></canvas>
    <script>
      // Get the WebGL rendering context
      const canvas = document.querySelector("canvas");
      const gl = canvas.getContext("webgl");

      // Vertex shader
      const vshader = `
      void main() {
        // Set vertex position: vec4(x, y, z, 1.0)
        gl_Position = vec4(0.0, 0.0, 0.0, 1.0);

        // Point size in pixels: float
        gl_PointSize = 10.0;
      }`;

      // Fragment shader
      const fshader = `
      precision mediump float;
      void main() {
        // Set fragment color: vec4(r, g, b, alpha)
        gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
      }`;

      // Compile the vertex shader
      const vs = gl.createShader(gl.VERTEX_SHADER);
      gl.shaderSource(vs, vshader);
      gl.compileShader(vs);

      // Compile the fragment shader
      const fs = gl.createShader(gl.FRAGMENT_SHADER);
      gl.shaderSource(fs, fshader);
      gl.compileShader(fs);

      // Create the WebGL program and use it
      const program = gl.createProgram();
      gl.attachShader(program, vs);
      gl.attachShader(program, fs);
      gl.linkProgram(program);
      gl.useProgram(program);

      // Log compilation errors, if any
      console.log("vertex shader:", gl.getShaderInfoLog(vs) || "OK");
      console.log("fragment shader:", gl.getShaderInfoLog(fs) || "OK");
      console.log("program:", gl.getProgramInfoLog(program) || "OK");

      // Set the clear color (black)
      gl.clearColor(0.0, 0.0, 0.0, 1.0);

      // Clear the canvas
      gl.clear(gl.COLOR_BUFFER_BIT);

      // Draw points
      gl.drawArrays(gl.POINTS, 0, 1); // mode, starting pint, number of points to draw
    </script>
  </body>
</html>
```

### 3D 图形

## 进阶

Arcgis 二维与三维地图的实现。

## 解决问题

### 地图导出图片问题

#### 使用传统的方案 toDataURL

```js
$("canvas").toDataURL();
```

原因

#### 方案一

#### 分析

### 图层置灰问题

着色器？review 卷帘工具的原理

## 参考资料

- 英文入门教程：WebGL guide (part 1/2)
  May 2020 https://xem.github.io/articles/webgl-guide.html
- MDN 入门教程：[MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/WebGL_API)
- 进阶：小册《WebGL 入门与实践》
- 系统：《WebGL 编程指南》
- 深入
  - 《3D 游戏与计算机图形学中的数学方法》
- mapboxGL 如何绘制、Arcgis 又是如何处理，为什么会导出不了图片
- [https://mp.weixin.qq.com/s/0G8rGoWNZ0XkBA9FQQPXLg](https://mp.weixin.qq.com/s/0G8rGoWNZ0XkBA9FQQPXLg)
