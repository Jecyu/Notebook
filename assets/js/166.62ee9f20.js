(window.webpackJsonp=window.webpackJsonp||[]).push([[166],{1551:function(a,t,r){"use strict";r.r(t);var e=r(44),s=Object(e.a)({},(function(){var a=this,t=a.$createElement,r=a._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[r("h1",{attrs:{id:"图层"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#图层"}},[a._v("#")]),a._v(" 图层")]),a._v(" "),r("h2",{attrs:{id:"图层概念"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#图层概念"}},[a._v("#")]),a._v(" 图层概念")]),a._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://juejin.im/post/5d3ff32ef265da03986bcd21",target:"_blank",rel:"noopener noreferrer"}},[a._v("GIS 图层概念及应用"),r("OutboundLink")],1)])]),a._v(" "),r("h2",{attrs:{id:"管理图层"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#管理图层"}},[a._v("#")]),a._v(" 管理图层")]),a._v(" "),r("h3",{attrs:{id:"调整图层顺序"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#调整图层顺序"}},[a._v("#")]),a._v(" 调整图层顺序")]),a._v(" "),r("p",[r("code",[a._v("recoderLayer(layer, index)")]),a._v(" 需求，调整新添加的图层为底图")]),a._v(" "),r("div",{staticClass:"language-js line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-js"}},[r("code",[a._v("map"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),r("span",{pre:!0,attrs:{class:"token function"}},[a._v("addLayer")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("cityLayer"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\nmap"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),r("span",{pre:!0,attrs:{class:"token function"}},[a._v("recoderLayer")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("cityLayer"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[a._v("1")]),r("br"),r("span",{staticClass:"line-number"},[a._v("2")]),r("br")])]),r("h2",{attrs:{id:"要素服务跟动态服务的关系是什么？"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#要素服务跟动态服务的关系是什么？"}},[a._v("#")]),a._v(" 要素服务跟动态服务的关系是什么？")]),a._v(" "),r("h2",{attrs:{id:"切片服务与动态服务"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#切片服务与动态服务"}},[a._v("#")]),a._v(" 切片服务与动态服务")]),a._v(" "),r("ol",[r("li",[a._v("切片服务也可以以动态服务的方式进行加载。")]),a._v(" "),r("li",[a._v("图层的索引号会因为动态添加/删除图层改变，如果运维没及时同步服务数据，即会导致系统的专题部分不可见。")]),a._v(" "),r("li",[a._v("空间参考系 wid（投影坐标）。偏移为了数据安全。")]),a._v(" "),r("li",[a._v("初始范围（显示指定地区位置）、全图范围")]),a._v(" "),r("li",[a._v("最大返回记录数，如果要获取所有的记录数如何处理?，先获取 objectID，进行页面的分页显示，之后切割 id，填写 where 的范围。 1000 ---2000。")]),a._v(" "),r("li",[a._v("Bounding box。")]),a._v(" "),r("li",[a._v("比例尺，可以控制缩放的范围来显示对应的图层、要素。解决初始化的图形繁杂问题。")]),a._v(" "),r("li",[a._v("Dynamic Layer")])]),a._v(" "),r("ul",[r("li",[a._v("export\n"),r("ul",[r("li",[a._v("坐标系设置\n-layer\n"),r("ul",[r("li",[a._v("显示图层")]),a._v(" "),r("li",[a._v("图层过滤（Name, label），这个跟 query 的查询过滤区别在哪？图层过滤是可以直接在加载图层，出一张过滤好的图，性能比直接叠加 graphic 要素要好。")])])]),a._v(" "),r("li",[a._v("符号化渲染方式\n"),r("ul",[r("li",[a._v("通过叠加 graphic，当页面复杂时，会导致系统性能问题。")]),a._v(" "),r("li",[a._v("Dynamic Layers 传入 render s信息，出图。")])])]),a._v(" "),r("li",[a._v("POST 请求代替 GET，解决开启多个图层时，GET 参数过长。")])])]),a._v(" "),r("li",[a._v("Identify（I 查询）")]),a._v(" "),r("li",[a._v("Find （地名地址查询/综合查询），可以查多个图层。")]),a._v(" "),r("li",[a._v("Feature Server ： 勾选 feature access 才能编辑、删除要素。这个与单个图层的 type 的 feature Layer 是有区别的。？待实践理解。")]),a._v(" "),r("li",[a._v("query\n"),r("ul",[r("li",[a._v("输入与输出参考系。")]),a._v(" "),r("li",[a._v("空间关系（包含）")]),a._v(" "),r("li",[a._v("distinct values 类别显示")])])])]),a._v(" "),r("ol",{attrs:{start:"9"}},[r("li",[a._v("动态服务也可以进行 query 查询，不仅仅是要素服务。")]),a._v(" "),r("li",[a._v("切片服务\n"),r("ol",[r("li",[a._v("与其他不同的是，具有切片等级。可以查看某个缩放等级的图片是否显示。")]),a._v(" "),r("li",[a._v("切片服务是在动态服务的基础上进行的切片，具有动态服务的功能，相当于一层缓存的作用。")])])])]),a._v(" "),r("h3",{attrs:{id:"切片服务"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#切片服务"}},[a._v("#")]),a._v(" 切片服务")]),a._v(" "),r("h3",{attrs:{id:"动态服务"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#动态服务"}},[a._v("#")]),a._v(" 动态服务")]),a._v(" "),r("h2",{attrs:{id:"graphic-渲染"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#graphic-渲染"}},[a._v("#")]),a._v(" graphic 渲染")]),a._v(" "),r("ol",[r("li",[a._v("在渲染过程中一般有三种渲染方式“graphic自己叠加”，“feature Layer 服务动态设置render”，“动态服务设置渲染参数” 三种渲染都有自己的优缺点\ngraphic 自己叠加，比较随意，方便对每一个graphic进行设置不同的变化，但是需手动要查询，代码逻辑需要自己编码，比较复杂，前端渲染，性能较差\nfeature Layer 不需要写过多逻辑代码，api 自动查询有具体的参数设置，前端渲染，性能较差\n动态服务设置渲染参数，服务端渲染，代码逻辑相对简单，服务端出图，性能较好，但是有些参数设置没法达到满意的效果（透明度，等设置）")])])])}),[],!1,null,null,null);t.default=s.exports}}]);