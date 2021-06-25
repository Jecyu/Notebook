(window.webpackJsonp=window.webpackJsonp||[]).push([[244],{1559:function(s,t,e){"use strict";e.r(t);var v=e(44),r=Object(v.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"postcss-loader-踩坑总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#postcss-loader-踩坑总结"}},[s._v("#")]),s._v(" postcss-loader 踩坑总结")]),s._v(" "),e("p",[s._v("头脑风暴")]),s._v(" "),e("ul",[e("li",[s._v("提出场景问题\n"),e("ul",[e("li",[s._v("项目使用的布局响应式方案 flex + rem")])])]),s._v(" "),e("li",[s._v("回顾使用\n"),e("ul",[e("li",[s._v("postcss-loader 解决了什么问题")]),s._v(" "),e("li",[s._v("是否有必要对 iview 等第三方组件进行转换")]),s._v(" "),e("li",[s._v("当你决定进行转换的时候")])])]),s._v(" "),e("li",[s._v("解决方案")])]),s._v(" "),e("p",[s._v("在项目中使用  postcss-pxtorem，转换 px 为 rem，但不是代表就可以全局使用 px。如果设计稿的尺寸跟第三方库如 iview 的根字体大小不一致的时候，")]),s._v(" "),e("p",[s._v("在解释的时候， css 这里只要含有 ivu 的整个 css 文件都会被转换为 ivu 14.4 的值，这是不正确的。")]),s._v(" "),e("p",[s._v("这是 postcss 提供的 Input 类，https://api.postcss.org/Input.html，目前没有发现可以处理到同一个某个 css 选择器下层级的筛选。因此，针对系统编写的组件还是要用 rem 单位，让 postcss-pxtorem 只处理第三方库的 px。")]),s._v(" "),e("p",[s._v("postcss-pxtorem，")]),s._v(" "),e("p",[s._v("分别实现一个 webpack loader 和 plugin，这样对于 postcss-loader 和 postcss-pxtorem 才能更好地区分开来。")]),s._v(" "),e("p",[s._v("vite + vben 项目")]),s._v(" "),e("h2",{attrs:{id:"使用-postcss"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用-postcss"}},[s._v("#")]),s._v(" 使用 PostCSS")]),s._v(" "),e("ul",[e("li",[s._v("postcss 是什么")]),s._v(" "),e("li",[s._v("传统的样式的问题，")]),s._v(" "),e("li",[s._v("vuecli 如何引入")]),s._v(" "),e("li",[s._v("自适应如何转变（第三方库）")]),s._v(" "),e("li",[s._v("原因为什么要转 px 为 rem，css 像素不能随着屏幕自适应。")])]),s._v(" "),e("blockquote",[e("p",[s._v("PostCSS is a tool for transforming CSS with JS Plugins. These plugins can support variables and mixins, transpile future CSS syntax, inline images, and more")])]),s._v(" "),e("p",[s._v("PostCSS 是一套利用 JS 插件实现的的用来改变 CSS 的工具，这些插件支持变量和混合语法，转换成未来的 CSS 语法，内链图片等等。")]),s._v(" "),e("p",[s._v("我们通过 "),e("code",[s._v("Less")]),s._v("、"),e("code",[s._v("SASS")]),s._v(" 等工具对 CSS 做预处理操作，按照它们约定的语法")]),s._v(" "),e("p",[s._v("VueCLI 内部使用了 PostCSS 并默认开启了 "),e("code",[s._v("autoprefixer")]),s._v("。")]),s._v(" "),e("p",[s._v("项目采用 sass 预处理器编译后，再加上 "),e("code",[s._v("autoprefixer")]),s._v(" 自动补齐浏览器前缀适应目标浏览器。目前配置目标浏览器，是通过使用 "),e("code",[s._v("browserlistrc")]),s._v(" 进行配置的，"),e("a",{attrs:{href:"https://www.npmjs.com/package/browserslist",target:"_blank",rel:"noopener noreferrer"}},[s._v("browserslist"),e("OutboundLink")],1),s._v(" 可以被多种工具识别使用，如 Autoprefixer，Babel 等。")]),s._v(" "),e("p",[s._v("后期看项目需要，是否添加 postcssrc 配置支持 css-next 的写法。")]),s._v(" "),e("h2",{attrs:{id:"postcss-使用-px2rem-插件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#postcss-使用-px2rem-插件"}},[s._v("#")]),s._v(" PostCSS 使用 px2rem 插件")]),s._v(" "),e("p",[s._v("解决两个问题：")]),s._v(" "),e("ul",[e("li",[s._v("不再需要设置设计稿为 rem")]),s._v(" "),e("li",[s._v("使用第三方库，如 ViewUI 时，像表格列的宽度，可以直接传入 px，不需要进行转换")]),s._v(" "),e("li",[s._v("不再需要重写 ViewUI 的组件，仅仅是为了转换 px 单位为 rem 单位。")])]),s._v(" "),e("p",[s._v("这样就保证项目中不会再出现 px、rem 混乱的问题。")]),s._v(" "),e("p",[s._v("css 像素与物理像素")]),s._v(" "),e("p",[s._v('{\ntype: "selection",\nwidth: 50,\nalign: "center"\n},\n{\ntitle: "字段名称",\nalign: "center",\nkey: "name",\nslot: "name"\n},\n{\ntitle: "类型",\nalign: "center",\nwidth: this.typeWidth,\nkey: "type",\nslot: "valueType"\n},\n{')]),s._v(" "),e("p",[s._v("iview 这里设置的 px，是否会被转为 rem。这里需要处理的。针对这种单单使用 rem2px 是不行的。这个 rem 必须动态获取 html 的 font-size 进行处理。")]),s._v(" "),e("p",[s._v("对于iview 动态设置 column 的宽度，传入进去 style 里面的，webpack 的 postcss2rem 做不到这个点的，因为 js 动态设置宽度是运行时，而 webpack 这套是编译时。还没有到浏览器上执行呢。")]),s._v(" "),e("h2",{attrs:{id:"参考资料"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[s._v("#")]),s._v(" 参考资料")]),s._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://aotu.io/notes/2015/10/13/start-postcss/index.htmls",target:"_blank",rel:"noopener noreferrer"}},[s._v("PostCSS 快速入门使用"),e("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=r.exports}}]);