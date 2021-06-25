(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{1502:function(t,e,a){"use strict";a.r(e);var s=a(44),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"vue-json-view-组件解决大数据-json-展示问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue-json-view-组件解决大数据-json-展示问题"}},[t._v("#")]),t._v(" vue-json-view 组件解决大数据 JSON 展示问题")]),t._v(" "),s("p",[t._v("头脑风暴")]),t._v(" "),s("ul",[s("li",[t._v("开发一个 vue 插件")]),t._v(" "),s("li",[t._v("版本编写：可以参考一些 npm 包 的 version 发布过程")]),t._v(" "),s("li",[t._v("rollup 编写")]),t._v(" "),s("li",[t._v("使用 vue-scroller")]),t._v(" "),s("li",[t._v("如何编写一个 vue 插件")]),t._v(" "),s("li",[t._v("vue-cli 的插件")])]),t._v(" "),s("p",[t._v("一个性能的场景：缩放侧边栏容器，容器的东西过大。")]),t._v(" "),s("ul",[s("li",[t._v("value 为字符串过长问题")]),t._v(" "),s("li",[t._v("虚拟化列表显示")]),t._v(" "),s("li",[t._v("其他：自定义主题了：mokai、也可以像 vuepress 传递 scss 变量")])]),t._v(" "),s("p",[t._v("跟普通的树不同的是，普通的树，只需要考虑数组类型，而 JSON 树还需要考虑 Object 的处理。")]),t._v(" "),s("p",[s("img",{attrs:{src:a(451),alt:""}})]),t._v(" "),s("p",[t._v("关于字符串过长问题：")]),t._v(" "),s("p",[t._v("如何动态切割 value 的字符串过长问题，可以考虑先固定切割长度，在展示的时候，用户对容器框进行缩放的时候也不会有影响，只需要在实现虚拟列表的时候，突破规定要每项的高度一致的问题即可。这样也不用考虑说在换行的时候还要动态去切割字符串为列表的问题。")]),t._v(" "),s("p",[t._v("目前看 demo 无法通过这个限定，得提前把高度放进去 props。")]),t._v(" "),s("p",[t._v("怎么突破高度的限制的呢，看看 react-tree 的组件是怎么实现的，如果存在文字换行的情况下。")]),t._v(" "),s("p",[t._v("例如 height: 30px，另外一个解决方案是设置当前行：")]),t._v(" "),s("div",{staticClass:"language-css line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* height: 30px; */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("overflow-x")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" auto"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("white-space")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nowrap"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("p",[t._v("但是这样的话，用户体验很不好，需要拖动水平滚动条，这样前面的图的东西会间隔。并且这样还是要考虑每行文字的长度。（因为侧边栏的宽度与当前 value 的层级不同时，能展示的宽度也不一样。）")]),t._v(" "),s("p",[t._v("react-virtualized 可以动态处理高度，https://bvaughn.github.io/react-virtualized/#/components/CellMeasurer，")]),t._v(" "),s("p",[t._v("对于树的处理如何呢？https://diogofcunha.github.io/react-virtualized-tree/#/examples/node-measure 应该可以参考这个思路，进行设置的，展开切换节点的时候，一样的换行就行。")]),t._v(" "),s("p",[t._v("现在只需要考虑如何解决字符串过大的问题了。直接切割就行了，如何参考上面的处理即可。现在只需要切割 JSON 字符串，然后尝试渲染即可。怎么切割，怎么放到原来的节点上，假如要把一个100个字，切割为 10 行，那只要添加 10 行即可。但是这样切割的话，还是那个问题，如果是一段文字的话，就不连续了。")]),t._v(" "),s("p",[t._v("目前可以这样：\n先不切割，考虑下渲染性能，以及在容器中的拖拽性能以后。\n后续再考虑就是要么固定切割长度。不连续。")]),t._v(" "),s("p",[t._v("因为字符串过长的话，后续的节点也不会渲染。这样也不怕有问题了。")]),t._v(" "),s("p",[t._v("OK。就这样处理。")]),t._v(" "),s("p",[t._v("自定义主题")]),t._v(" "),s("p",[t._v("虚拟化列表显示，可以采用第三方工具库。ListView 这样的组件进行处理。")]),t._v(" "),s("p",[t._v("就可以处理。")]),t._v(" "),s("p",[t._v("如果使用了 virtual-scroller 的话，那这样都不需要怎么处理了？只需要把 JSON 格式处理为扁平化的列表。但是需要考虑 json 的 key 展开、收缩，参考之前实现过的。")]),t._v(" "),s("p",[t._v("先想好思路，再考虑怎么打包处理。 rollup 后续的处理。")]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("p",[t._v("先使用 vue-json-viewer，使用大量数据测试，看看是否做了虚拟化处理，如果没做，再看看能否提交 pr？今个周的开源任务，其次再看看其他 npm 包了。")]),t._v(" "),s("h2",{attrs:{id:"参考资料"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://www.npmjs.com/package/vue-virtual-scroller",target:"_blank",rel:"noopener noreferrer"}},[t._v("vue-virtual-scroller"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://www.npmjs.com/package/react-virtualized",target:"_blank",rel:"noopener noreferrer"}},[t._v("react-virtualized"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://juejin.im/post/6844903473700405261",target:"_blank",rel:"noopener noreferrer"}},[t._v("[译] 同中有异的 Webpack 与 Rollup"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://webpack.js.org/comparison/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://webpack.js.org/comparison/"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/75717476",target:"_blank",rel:"noopener noreferrer"}},[t._v("第九期】Rollup：下一代ES模块打包工具"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=r.exports},451:function(t,e,a){t.exports=a.p+"assets/img/2020-08-06-18-28-04-json-view.25a3ab87.png"}}]);