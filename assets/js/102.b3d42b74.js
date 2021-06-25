(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{1558:function(s,t,a){"use strict";a.r(t);var n=a(44),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"骨架屏"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#骨架屏"}},[s._v("#")]),s._v(" 骨架屏")]),s._v(" "),n("h2",{attrs:{id:"前言"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),n("ul",[n("li",[s._v("以组件方式引入")]),s._v(" "),n("li",[s._v("通过 webpack plugin，puppeteer 读取，引入依赖较多。且只支持 history。需要大改。")])]),s._v(" "),n("p",[s._v("以组件方式引入替代 loading，可以把常用的骨架如标题、头像、段落功能实现。\n优点：")]),s._v(" "),n("ul",[n("li",[s._v("可以像 loading 随时替换，且定制化高")]),s._v(" "),n("li",[s._v("不需要 skeleton 时，可以随时用 loading 替代。")])]),s._v(" "),n("p",[s._v("缺点：")]),s._v(" "),n("ul",[n("li",[s._v("依赖引入骨架屏代码")]),s._v(" "),n("li",[s._v("暂时只能实现常见的布局、比如列表。")])]),s._v(" "),n("p",[s._v("综上所述，使用组件方式半手动像 loading 编写最合适引入，也可以初步进行测试。")]),s._v(" "),n("p",[s._v("小步引入前进。")]),s._v(" "),n("p",[s._v("下一步：")]),s._v(" "),n("p",[s._v("如果使用组件的话，是否需要硬编码到项目中的全局组件呢？还是说通过 npm 安装插件进来，理由是：")]),s._v(" "),n("ul",[n("li",[s._v("可以用在多个项目，而不需要 copy")]),s._v(" "),n("li",[s._v("因为样式基本都是灰色的占位图，不需要依赖项目的样式。或者提供配置定制化。")])]),s._v(" "),n("p",[s._v("对于通用的组件，能否自动识别 iview 组件并生成对应的骨架屏呢？类似这个插件：https://github.com/kangyonggan/vue-elementui-skeleton")]),s._v(" "),n("ul",[n("li",[s._v("比如：表格，表头可以很快出现")])]),s._v(" "),n("p",[n("img",{attrs:{src:a(423),alt:""}})]),s._v(" "),n("h2",{attrs:{id:"实战"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#实战"}},[s._v("#")]),s._v(" 实战")]),s._v(" "),n("h3",{attrs:{id:"按需引入"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#按需引入"}},[s._v("#")]),s._v(" 按需引入")]),s._v(" "),n("p",[s._v("由于项目上已经使用了 antd-design-vue，因此先使用该方案实现需求：")]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 导入 antd-vue  table组件")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" Table"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" Pagination"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" LocaleProvider"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" Tree "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ant-design-vue"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("缺点：需要升级到 1.7.x，并且要准确测试已经使用的组件是否正常")]),s._v(" "),n("p",[s._v("https://www.antdv.com/docs/vue/use-with-vue-cli/")]),s._v(" "),n("p",[s._v("vuecli3")]),s._v(" "),n("p",[s._v("Modify babel.config.js")]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[s._v(" module"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  presets"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"@vue/app"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" plugins"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("      "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"import"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" libraryName"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ant-design-vue"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" libraryDirectory"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"es"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" style"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("p",[s._v("Remove the import 'ant-design-vue/dist/antd.css'; statement added before because babel-plugin-import will import styles and import components like below:")]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[s._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// src/main.js")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" Vue "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'vue'")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" Button "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'ant-design-vue/lib/button'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" Button "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'ant-design-vue'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'ant-design-vue/dist/antd.css'")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" App "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./App'")]),s._v("\n\n  Vue"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("component")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Button"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" Button"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n  Vue"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("config"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("productionTip "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Vue")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("render")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("h")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("h")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("App"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("$mount")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'#app'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br")])]),n("p",[s._v("缺点：")]),s._v(" "),n("ul",[n("li",[s._v("当前不能设置颜色，占位图颜色")])]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("isLoading "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("topicTreeData "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("await")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("getData")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("isLoading "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("a"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("skeleton\n  active\n  loading"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("isLoading"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  title"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  paragraph"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" rows"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// paragraph={{ rows: this.topicTreeData.length }}")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("renderSubMenu")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"-1"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("topicTreeData"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("a"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("skeleton"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])]),n("p",[n("strong",[s._v("这里有个坑要注意的是")]),s._v("：如果设置 paragraph 的 row 为 this.topicTreeData.length 是问题的，如果这个数据是异步加载的，那么在它获得值前为 0，那么骨架屏也不会出现。等到有值时，数据已经加载完毕了。")]),s._v(" "),n("p",[s._v("但是如果不设置为 data 的长度的话，那么骨架屏跟实际展示出来的条数就有区别。不符合常理，可以提个 issue，看能否进行解决。")]),s._v(" "),n("p",[s._v("预先写死 4 行是很不好的，特别是对于一些增删改比较频繁的目录。")]),s._v(" "),n("p",[s._v("antd-design-vue 和 antd-react 版本都有这个问题。很难有确定的处理。")]),s._v(" "),n("p",[s._v("是否可以容忍大概的错误。大体结构一致即可。")]),s._v(" "),n("h3",{attrs:{id:"新建立库进行个性化处理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#新建立库进行个性化处理"}},[s._v("#")]),s._v(" 新建立库进行个性化处理")]),s._v(" "),n("p",[s._v("也需要引入样式和 js 文件。只不过可以新建这里。这块可以晚上面试知识准备进行处理。先满足工作需要。")]),s._v(" "),n("p",[s._v("先按需引入 antd-design-vue 进行处，后续再考虑如何引入自己的包，可以让外部调用者：可以自己编写适配器，识别 element-ui、iview-ui、antd-ui vue 等。也就是把这些组件里面的 loading api 效果可以替换为 skeleton。")]),s._v(" "),n("ul",[n("li",[s._v("打包的使用")])]),s._v(" "),n("p",[s._v("先实现效果")]),s._v(" "),n("p",[s._v("然后引入实践")]),s._v(" "),n("p",[s._v("生产发布")]),s._v(" "),n("h2",{attrs:{id:"参考资料"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[s._v("#")]),s._v(" 参考资料")]),s._v(" "),n("ul",[n("li",[s._v("antd\n"),n("ul",[n("li",[s._v("https://www.antdv.com/components/skeleton/#API")]),s._v(" "),n("li",[s._v("https://ant.design/components/skeleton-cn/#components-skeleton-demo-children")])])]),s._v(" "),n("li",[s._v("https://github.com/kangyonggan/vue-elementui-skeleton")]),s._v(" "),n("li",[s._v("https://github.com/trumangift/vue-simple-skeleton")])])])}),[],!1,null,null,null);t.default=e.exports},423:function(s,t,a){s.exports=a.p+"assets/img/skeleto-table.32779674.gif"}}]);