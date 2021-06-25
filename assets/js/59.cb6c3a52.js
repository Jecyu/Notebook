(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{1399:function(s,t,a){"use strict";a.r(t);var r=a(44),n=Object(r.a)({},(function(){var s=this,t=s.$createElement,r=s._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[r("h1",{attrs:{id:"从零开发-web-二维地图引擎可视化项目"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#从零开发-web-二维地图引擎可视化项目"}},[s._v("#")]),s._v(" 从零开发 web 二维地图引擎可视化项目")]),s._v(" "),r("h2",{attrs:{id:"前言"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),r("p",[s._v("目标：")]),s._v(" "),r("ul",[r("li",[s._v("理解地图引擎编写原理")]),s._v(" "),r("li",[s._v("提升架构能力和工程化能力，模仿 leaflet（"),r("strong",[s._v("够轻量")]),s._v("）")]),s._v(" "),r("li",[s._v("可视化能力（比如切片与屏幕的展示计算）")]),s._v(" "),r("li",[s._v("移动端能力（适应 PC 端和移动端）")])]),s._v(" "),r("p",[s._v("目标读者：希望了解二维地图的展示原理，不需要很复杂，不在生产环境使用。")]),s._v(" "),r("p",[s._v("文章分类：")]),s._v(" "),r("ul",[r("li",[s._v("实践总结型")])]),s._v(" "),r("h3",{attrs:{id:"什么是二维地图引擎？"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#什么是二维地图引擎？"}},[s._v("#")]),s._v(" 什么是二维地图引擎？")]),s._v(" "),r("p",[s._v("可以让开发者快速制作 web 在线地图的工具。")]),s._v(" "),r("h3",{attrs:{id:"为什么需要二维地图引擎？"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#为什么需要二维地图引擎？"}},[s._v("#")]),s._v(" 为什么需要二维地图引擎？")]),s._v(" "),r("p",[s._v("提升效率。")]),s._v(" "),r("h3",{attrs:{id:"现阶段的二维地图引擎的分类"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#现阶段的二维地图引擎的分类"}},[s._v("#")]),s._v(" 现阶段的二维地图引擎的分类")]),s._v(" "),r("img",{staticStyle:{zoom:"50%"},attrs:{src:a(539)}}),s._v(" "),r("p",[s._v("详细可以看这篇文章 "),r("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/350866070",target:"_blank",rel:"noopener noreferrer"}},[s._v("二维地图前端js api对比分析"),r("OutboundLink")],1),s._v("，从多个维度对各个 API 进行对比，比如开发者活跃度与易用行、开发文档、发展潜力，通过优势、劣势、适用方向，比如 leaflet 适用 移动端简单地图项目。")]),s._v(" "),r("h2",{attrs:{id:"全局考虑"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#全局考虑"}},[s._v("#")]),s._v(" 全局考虑")]),s._v(" "),r("h3",{attrs:{id:"需求分析"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#需求分析"}},[s._v("#")]),s._v(" 需求分析")]),s._v(" "),r("p",[s._v("轻量级的二维地图可视化引擎。自顶向下。")]),s._v(" "),r("h4",{attrs:{id:"我们需要什么样的地图能力"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#我们需要什么样的地图能力"}},[s._v("#")]),s._v(" 我们需要什么样的地图能力")]),s._v(" "),r("p",[s._v("新建地图容器=>start:新建地图容器\n建立图层实例=>operation:建立图层实例\n添加到地图容器=>operation:添加到地图容器\n屏幕展示=>end:屏幕展示")]),s._v(" "),r("ol",[r("li",[s._v("需要可以根据屏幕大小、地图中心、缩放等级，新建地图容器")]),s._v(" "),r("li",[s._v("需要支持新建切片图层，添加到地图容器中，进行显示")]),s._v(" "),r("li",[s._v("需要可以对地图进行交互，比如拖拽、缩放、双击")]),s._v(" "),r("li",[s._v("需要支持 PC 端和移动端")])]),s._v(" "),r("div",{staticClass:"language-js line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-js"}},[r("code",[r("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" map "),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token constant"}},[s._v("L")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),r("span",{pre:!0,attrs:{class:"token function"}},[s._v("map")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),r("span",{pre:!0,attrs:{class:"token string"}},[s._v("'map'")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),r("span",{pre:!0,attrs:{class:"token function"}},[s._v("setView")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("51.505")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.09")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("13")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),r("span",{pre:!0,attrs:{class:"token constant"}},[s._v("L")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),r("span",{pre:!0,attrs:{class:"token function"}},[s._v("tileLayer")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),r("span",{pre:!0,attrs:{class:"token string"}},[s._v("'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    attribution"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[s._v("'&copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors'")]),s._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),r("span",{pre:!0,attrs:{class:"token function"}},[s._v("addTo")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("map"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[s._v("1")]),r("br"),r("span",{staticClass:"line-number"},[s._v("2")]),r("br"),r("span",{staticClass:"line-number"},[s._v("3")]),r("br"),r("span",{staticClass:"line-number"},[s._v("4")]),r("br"),r("span",{staticClass:"line-number"},[s._v("5")]),r("br")])]),r("p",[s._v("时序图")]),s._v(" "),r("p",[s._v("new layer -》addTo -〉map")]),s._v(" "),r("h3",{attrs:{id:"架构设计"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#架构设计"}},[s._v("#")]),s._v(" 架构设计")]),s._v(" "),r("h4",{attrs:{id:"我们应该怎么设计"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#我们应该怎么设计"}},[s._v("#")]),s._v(" 我们应该怎么设计")]),s._v(" "),r("h5",{attrs:{id:"_1-需要可以根据屏幕大小、地图中心、缩放等级，新建地图容器"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-需要可以根据屏幕大小、地图中心、缩放等级，新建地图容器"}},[s._v("#")]),s._v(" 1. 需要可以根据屏幕大小、地图中心、缩放等级，新建地图容器")]),s._v(" "),r("p",[s._v("Map 类，实例化为一个 DOM 容器中，监听屏幕大小，地图中心、缩放等级。")]),s._v(" "),r("h5",{attrs:{id:"_2-需要支持新建切片图层，添加到地图容器中，进行显示"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-需要支持新建切片图层，添加到地图容器中，进行显示"}},[s._v("#")]),s._v(" 2. 需要支持新建切片图层，添加到地图容器中，进行显示")]),s._v(" "),r("p",[s._v("Tile 类，负责保存请求地址，以及生成每个分片 DOM，添加到 Map 类的 DOM 容器中。")]),s._v(" "),r("h5",{attrs:{id:"_3-需要可以对地图进行交互，比如拖拽、缩放、双击、"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-需要可以对地图进行交互，比如拖拽、缩放、双击、"}},[s._v("#")]),s._v(" 3. 需要可以对地图进行交互，比如拖拽、缩放、双击、")]),s._v(" "),r("p",[s._v("监听 Map Container 的 DOM 事件，调用 Tile、Map 类进行地图的展示变化。")]),s._v(" "),r("h5",{attrs:{id:"_4-需要支持-pc-端和移动端"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-需要支持-pc-端和移动端"}},[s._v("#")]),s._v(" 4. 需要支持 PC 端和移动端")]),s._v(" "),r("p",[s._v("处理 DOM 的响应式适配，最简单的方案可以是等比缩放。以及分别监听 PC 端和手机端的浏览器 DOM 事件。")]),s._v(" "),r("h3",{attrs:{id:"前置基础知识准备"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#前置基础知识准备"}},[s._v("#")]),s._v(" 前置基础知识准备")]),s._v(" "),r("h4",{attrs:{id:"webgis-二维地图的一些概念"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#webgis-二维地图的一些概念"}},[s._v("#")]),s._v(" Webgis 二维地图的一些概念")]),s._v(" "),r("h5",{attrs:{id:"切片、-wmts-服务"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#切片、-wmts-服务"}},[s._v("#")]),s._v(" 切片、 WMTS 服务")]),s._v(" "),r("h5",{attrs:{id:"比例尺、缩放等级"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#比例尺、缩放等级"}},[s._v("#")]),s._v(" 比例尺、缩放等级")]),s._v(" "),r("h5",{attrs:{id:"crs"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#crs"}},[s._v("#")]),s._v(" crs")]),s._v(" "),r("p",[s._v("通过一组称为坐标的三个数字来指定地球上的每个位置。通常，CRS可以分为投影坐标参考系统（也称为笛卡尔坐标或直角坐标参考系统）和地理坐标参考系统。")]),s._v(" "),r("h6",{attrs:{id:"地理坐标"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#地理坐标"}},[s._v("#")]),s._v(" 地理坐标")]),s._v(" "),r("p",[s._v("一般是指由经度、纬度和相对高度组成的坐标系，能够标示地球上的任何一个位置。")]),s._v(" "),r("h6",{attrs:{id:"投影坐标"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#投影坐标"}},[s._v("#")]),s._v(" 投影坐标")]),s._v(" "),r("p",[s._v("投影坐标系使用基于X,Y值的坐标系统来描述地球上某个点所处的位置。这个坐标系是从地球的近似椭球体"),r("strong",[s._v("投影")]),s._v("得到的，它对应于某个地理坐标系。")]),s._v(" "),r("h5",{attrs:{id:"ogc"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ogc"}},[s._v("#")]),s._v(" ogc")]),s._v(" "),r("p",[r("a",{attrs:{href:"https://www.ogc.org/",target:"_blank",rel:"noopener noreferrer"}},[s._v("OGC"),r("OutboundLink")],1),s._v(" 开放地理空间联盟("),r("strong",[s._v("OGC")]),s._v(") "),r("strong",[s._v("是")]),s._v("一个国际自愿共识标准组织。 "),r("strong",[s._v("OGC")]),s._v(" 的使命"),r("strong",[s._v("是")]),s._v("开发、批准和维护各种标准，通过这些标准可以在web 上使用并共享您的地图和"),r("strong",[s._v("相关")]),s._v("地理数据。 使用"),r("strong",[s._v("OGC")]),s._v(" 服务并启用编码，可以对地理数据和软件功能进行开放式访问，这使得组织能够将它们的"),r("strong",[s._v("GIS")]),s._v(" 数据和服务集成到各种计算和移动设备上的任何应用程序中。")]),s._v(" "),r("h5",{attrs:{id:"切片图层"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#切片图层"}},[s._v("#")]),s._v(" 切片图层")]),s._v(" "),r("h6",{attrs:{id:"栅格切片"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#栅格切片"}},[s._v("#")]),s._v(" 栅格切片")]),s._v(" "),r("p",[s._v("栅格切片图层将底图作为图像文件（例如，JPG 或 PNG 格式）交付给客户端应用程序，这些图像文件已经预渲染并存储在服务器上，并由客户端按原样显示。 栅格切片图层最适合于为您的地图提供地理环境的底图，例如影像（比如在世界影像底图中）或基于要素的地图，例如地形、国家地理、海洋和其他底图。 栅格切片图层也可以由静态业务图层组成，例如数据的专题地图。")]),s._v(" "),r("h6",{attrs:{id:"矢量切片"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#矢量切片"}},[s._v("#")]),s._v(" 矢量切片")]),s._v(" "),r("p",[s._v("矢量切片图层引用一组 web 可用的矢量切片以及这些切片应被绘制的相应样式。 矢量切片与栅格切片类似，但是它们存储数据的矢量表示。也就是说，地理要素以客户端应用程序可理解的格式表示为点、线和面。 不同于栅格切片图层，矢量切片图层能够适应显示设备的分辨率，并且可以改变样式以用于多种用途。 矢量切片文件比栅格切片文件更小，这意味着制图更快、性能更好。 切片访问性能和矢量绘制的结合使切片能够适应任意显示分辨率（设备不同，分辨率可能不同）。")]),s._v(" "),r("h5",{attrs:{id:"geojson"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#geojson"}},[s._v("#")]),s._v(" GeoJSON")]),s._v(" "),r("p",[s._v("一种基于JSON的地理空间数据交换格式，它定义了几种类型JSON对象以及它们组合在一起的方法，以表示有关地理要素、属性和它们的空间范围的数据。"),r("a",{attrs:{href:"https://tools.ietf.org/html/rfc7946",target:"_blank",rel:"noopener noreferrer"}},[s._v("GeoJSON规格"),r("OutboundLink")],1)]),s._v(" "),r("img",{staticStyle:{zoom:"33%"},attrs:{src:a(540)}}),s._v(" "),r("img",{staticStyle:{zoom:"33%"},attrs:{src:a(541)}}),s._v(" "),r("h4",{attrs:{id:"前端基础知识"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#前端基础知识"}},[s._v("#")]),s._v(" 前端基础知识")]),s._v(" "),r("h5",{attrs:{id:"原型与类"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#原型与类"}},[s._v("#")]),s._v(" 原型与类")]),s._v(" "),r("p",[s._v("见"),r("a",{attrs:{href:"https://juejin.cn/post/6930407463124959240#heading-21",target:"_blank",rel:"noopener noreferrer"}},[s._v("前端技术考核：你怎么理解 JavaScript 原型、类与面向对象编程 ｜牛气冲天新年征文"),r("OutboundLink")],1)]),s._v(" "),r("h5",{attrs:{id:"dom事件绑定、移动端、pc-端交互事件"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#dom事件绑定、移动端、pc-端交互事件"}},[s._v("#")]),s._v(" dom事件绑定、移动端、PC 端交互事件")]),s._v(" "),r("h5",{attrs:{id:"绘制与动画、css3-z-index、transform"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#绘制与动画、css3-z-index、transform"}},[s._v("#")]),s._v(" 绘制与动画、CSS3 z-index、transform")]),s._v(" "),r("h3",{attrs:{id:"leaflet的基本实现原理"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#leaflet的基本实现原理"}},[s._v("#")]),s._v(" leaflet的基本实现原理")]),s._v(" "),r("ul",[r("li",[s._v("leaflet基本概念介绍\n"),r("ul",[r("li",[s._v("三种坐标")]),s._v(" "),r("li",[s._v("bounds")]),s._v(" "),r("li",[s._v("map容器与leaflet图层")])])]),s._v(" "),r("li",[s._v("结合 crs 再谈 map 容器")]),s._v(" "),r("li",[s._v("绘制原理 SVG 和 Canvas")]),s._v(" "),r("li",[s._v("dom 事件方法")])]),s._v(" "),r("p",[s._v("流程化实现。")]),s._v(" "),r("h2",{attrs:{id:"局部实现"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#局部实现"}},[s._v("#")]),s._v(" 局部实现")]),s._v(" "),r("h3",{attrs:{id:"开发环境设计"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#开发环境设计"}},[s._v("#")]),s._v(" 开发环境设计")]),s._v(" "),r("h4",{attrs:{id:"源码目录设计"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#源码目录设计"}},[s._v("#")]),s._v(" 源码目录设计")]),s._v(" "),r("ul",[r("li",[s._v("build ——构建配置")]),s._v(" "),r("li",[s._v("dist ——输出文件")]),s._v(" "),r("li",[s._v("docs——文档")]),s._v(" "),r("li",[s._v("tests——测试文件")]),s._v(" "),r("li",[s._v("src ——源码\n"),r("ul",[r("li",[s._v("na-map.js ——入口文件")]),s._v(" "),r("li",[s._v("dom 关于地图的dom渲染和dom事件封装。")]),s._v(" "),r("li",[s._v("map 地图的核心，地图相关逻辑（地图交互）。")]),s._v(" "),r("li",[s._v("layer 图层相关逻辑。")]),s._v(" "),r("li",[s._v("geo 地图投影和坐标适配逻辑")]),s._v(" "),r("li",[s._v("core 移动端和PC 端适配判断、事件订阅发布、工具类")])])])]),s._v(" "),r("h4",{attrs:{id:"技术架构"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#技术架构"}},[s._v("#")]),s._v(" 技术架构")]),s._v(" "),r("ul",[r("li",[s._v("采用 ES6 开发")]),s._v(" "),r("li",[s._v("rollup 打包输出")])]),s._v(" "),r("h4",{attrs:{id:"打包文件输出"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#打包文件输出"}},[s._v("#")]),s._v(" 打包文件输出")]),s._v(" "),r("ul",[r("li",[s._v("na-map.umd.js")]),s._v(" "),r("li",[s._v("na-map.css")])]),s._v(" "),r("h4",{attrs:{id:"开发环境搭建"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#开发环境搭建"}},[s._v("#")]),s._v(" 开发环境搭建")]),s._v(" "),r("h6",{attrs:{id:"运行环境"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#运行环境"}},[s._v("#")]),s._v(" 运行环境")]),s._v(" "),r("ol",[r("li",[s._v("安装 rollup 打包工具，配置入口文件。")])]),s._v(" "),r("div",{staticClass:"language-js line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-js"}},[r("code",[r("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" resolve "),r("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[s._v('"rollup-plugin-node-resolve"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" commonjs "),r("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[s._v('"rollup-plugin-commonjs"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" sourceMaps "),r("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[s._v('"rollup-plugin-sourcemaps"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" camelCase "),r("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[s._v('"lodash.camelcase"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" json "),r("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[s._v('"rollup-plugin-json"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" pkg "),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),r("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./package.json"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" libraryName "),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[s._v('"na-map"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  input"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token template-string"}},[r("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")]),r("span",{pre:!0,attrs:{class:"token string"}},[s._v("src/")]),r("span",{pre:!0,attrs:{class:"token interpolation"}},[r("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[s._v("${")]),s._v("libraryName"),r("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[s._v("}")])]),r("span",{pre:!0,attrs:{class:"token string"}},[s._v(".js")]),r("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")])]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  output"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      file"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" pkg"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("main"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      name"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[s._v("camelCase")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("libraryName"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      format"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[s._v('"umd"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      sourcemap"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" file"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" pkg"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("module"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" format"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[s._v('"es"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" sourcemap"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),r("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Indicate here external modules you don't wanna include in your bundle (i.e.: 'lodash')")]),s._v("\n  external"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  watch"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    include"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[s._v('"src/**"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  plugins"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),r("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Allow json resolution")]),s._v("\n    "),r("span",{pre:!0,attrs:{class:"token function"}},[s._v("json")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" Allow bundling cjs "),r("span",{pre:!0,attrs:{class:"token function"}},[s._v("modules")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("unlike webpack"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" rollup doesn't understand cjs"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),r("span",{pre:!0,attrs:{class:"token function"}},[s._v("commonjs")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" Allow node_modules resolution"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" so you can use "),r("span",{pre:!0,attrs:{class:"token string"}},[s._v("'external'")]),s._v(" to control\n    "),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" which external modules to include "),r("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" the bundle\n    "),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" https"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("github"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("com"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("rollup"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("rollup"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("plugin"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("node"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("resolve#usage\n    "),r("span",{pre:!0,attrs:{class:"token function"}},[s._v("resolve")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\n    "),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" Resolve source maps to the original source\n    "),r("span",{pre:!0,attrs:{class:"token function"}},[s._v("sourceMaps")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[s._v("1")]),r("br"),r("span",{staticClass:"line-number"},[s._v("2")]),r("br"),r("span",{staticClass:"line-number"},[s._v("3")]),r("br"),r("span",{staticClass:"line-number"},[s._v("4")]),r("br"),r("span",{staticClass:"line-number"},[s._v("5")]),r("br"),r("span",{staticClass:"line-number"},[s._v("6")]),r("br"),r("span",{staticClass:"line-number"},[s._v("7")]),r("br"),r("span",{staticClass:"line-number"},[s._v("8")]),r("br"),r("span",{staticClass:"line-number"},[s._v("9")]),r("br"),r("span",{staticClass:"line-number"},[s._v("10")]),r("br"),r("span",{staticClass:"line-number"},[s._v("11")]),r("br"),r("span",{staticClass:"line-number"},[s._v("12")]),r("br"),r("span",{staticClass:"line-number"},[s._v("13")]),r("br"),r("span",{staticClass:"line-number"},[s._v("14")]),r("br"),r("span",{staticClass:"line-number"},[s._v("15")]),r("br"),r("span",{staticClass:"line-number"},[s._v("16")]),r("br"),r("span",{staticClass:"line-number"},[s._v("17")]),r("br"),r("span",{staticClass:"line-number"},[s._v("18")]),r("br"),r("span",{staticClass:"line-number"},[s._v("19")]),r("br"),r("span",{staticClass:"line-number"},[s._v("20")]),r("br"),r("span",{staticClass:"line-number"},[s._v("21")]),r("br"),r("span",{staticClass:"line-number"},[s._v("22")]),r("br"),r("span",{staticClass:"line-number"},[s._v("23")]),r("br"),r("span",{staticClass:"line-number"},[s._v("24")]),r("br"),r("span",{staticClass:"line-number"},[s._v("25")]),r("br"),r("span",{staticClass:"line-number"},[s._v("26")]),r("br"),r("span",{staticClass:"line-number"},[s._v("27")]),r("br"),r("span",{staticClass:"line-number"},[s._v("28")]),r("br"),r("span",{staticClass:"line-number"},[s._v("29")]),r("br"),r("span",{staticClass:"line-number"},[s._v("30")]),r("br"),r("span",{staticClass:"line-number"},[s._v("31")]),r("br"),r("span",{staticClass:"line-number"},[s._v("32")]),r("br"),r("span",{staticClass:"line-number"},[s._v("33")]),r("br"),r("span",{staticClass:"line-number"},[s._v("34")]),r("br"),r("span",{staticClass:"line-number"},[s._v("35")]),r("br"),r("span",{staticClass:"line-number"},[s._v("36")]),r("br"),r("span",{staticClass:"line-number"},[s._v("37")]),r("br"),r("span",{staticClass:"line-number"},[s._v("38")]),r("br"),r("span",{staticClass:"line-number"},[s._v("39")]),r("br"),r("span",{staticClass:"line-number"},[s._v("40")]),r("br")])]),r("ol",{attrs:{start:"2"}},[r("li",[s._v("打包输出")]),s._v(" "),r("li",[s._v("开发调试，引入使用")])]),s._v(" "),r("p",[s._v("建立 html 文件，引用 dist 打包文件，使用通过 rollup watch 进行监听编写的文件，另外再启动 live-server 进行监听。（TODO：能否有自动的服务器，进行热更新？像开发应用一样的）")]),s._v(" "),r("div",{staticClass:"language-js line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-js"}},[r("code",[r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),r("span",{pre:!0,attrs:{class:"token constant"}},[s._v("DOCTYPE")]),s._v(" html"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("html lang"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[s._v('"en"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("head"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n  "),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("meta charset"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[s._v('"UTF-8"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n  "),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("meta http"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("equiv"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[s._v('"X-UA-Compatible"')]),s._v(" content"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[s._v('"IE=edge"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n  "),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("meta name"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[s._v('"viewport"')]),s._v(" content"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[s._v('"width=device-width, initial-scale=1.0"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n  "),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("title"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("Map"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("title"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n  "),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("link rel"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[s._v('"stylesheet"')]),s._v(" href"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[s._v('"../dist/na-map.css"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n  "),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("script src"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[s._v('"../dist/na-map.es5.js"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("script"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("head"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("body"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n  "),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("div id"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[s._v('"map"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("div"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("body"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("html"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[s._v("1")]),r("br"),r("span",{staticClass:"line-number"},[s._v("2")]),r("br"),r("span",{staticClass:"line-number"},[s._v("3")]),r("br"),r("span",{staticClass:"line-number"},[s._v("4")]),r("br"),r("span",{staticClass:"line-number"},[s._v("5")]),r("br"),r("span",{staticClass:"line-number"},[s._v("6")]),r("br"),r("span",{staticClass:"line-number"},[s._v("7")]),r("br"),r("span",{staticClass:"line-number"},[s._v("8")]),r("br"),r("span",{staticClass:"line-number"},[s._v("9")]),r("br"),r("span",{staticClass:"line-number"},[s._v("10")]),r("br"),r("span",{staticClass:"line-number"},[s._v("11")]),r("br"),r("span",{staticClass:"line-number"},[s._v("12")]),r("br"),r("span",{staticClass:"line-number"},[s._v("13")]),r("br"),r("span",{staticClass:"line-number"},[s._v("14")]),r("br")])]),r("h3",{attrs:{id:"地图类设计"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#地图类设计"}},[s._v("#")]),s._v(" 地图类设计")]),s._v(" "),r("p",[s._v("需要可以根据屏幕大小、地图中心、缩放等级，新建地图容器")]),s._v(" "),r("p",[s._v("Map 类，实例化为一个 DOM 容器中，监听屏幕大小，地图中心、缩放等级。")]),s._v(" "),r("ul",[r("li",[s._v("保留 dom 节点引用，地图中心，缩放等级")])]),s._v(" "),r("p",[s._v("需要支持新建切片图层，添加到地图容器中，进行显示")]),s._v(" "),r("p",[s._v("Tile 类，负责保存请求地址，以及生成每个分片 DOM，添加到 Map 类的 DOM 容器中。")]),s._v(" "),r("h2",{attrs:{id:"小结"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[s._v("#")]),s._v(" 小结")]),s._v(" "),r("h2",{attrs:{id:"参考资料"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[s._v("#")]),s._v(" 参考资料")]),s._v(" "),r("ul",[r("li",[s._v("leaflet")])])])}),[],!1,null,null,null);t.default=n.exports},539:function(s,t,a){s.exports=a.p+"assets/img/2021-04-14-16-07-30.58602953.png"},540:function(s,t,a){s.exports=a.p+"assets/img/2021-04-16-21-58-43.81c09805.png"},541:function(s,t,a){s.exports=a.p+"assets/img/2021-04-16-21-58-52.c6a3b716.png"}}]);