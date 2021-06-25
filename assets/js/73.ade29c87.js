(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{1395:function(t,r,e){"use strict";e.r(r);var _=e(44),v=Object(_.a)({},(function(){var t=this,r=t.$createElement,_=t._self._c||r;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"一键自动同步发布和更新文章到各大平台上（在线工具）chrome-扩展"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#一键自动同步发布和更新文章到各大平台上（在线工具）chrome-扩展"}},[t._v("#")]),t._v(" 一键自动同步发布和更新文章到各大平台上（在线工具）Chrome 扩展")]),t._v(" "),_("p",[t._v("主体方案有三种：")]),t._v(" "),_("ul",[_("li",[t._v("puppteer 爬虫")]),t._v(" "),_("li",[t._v("chrome 扩展")]),t._v(" "),_("li",[t._v("客户端（更强大，可以考虑使用跨端能力编写）")])]),t._v(" "),_("p",[t._v("仓库：blog-sync-robot")]),t._v(" "),_("p",[t._v("在线的简单小工具，输入 markdown 文件，选择发布平台：（掘金/微信公众号/简书），把文章的图片外链转换为发布平台的服务器上。")]),t._v(" "),_("p",[t._v("使用 puppeteer 模拟登录，编写草稿，复制图片。")]),t._v(" "),_("p",[t._v("需求：")]),t._v(" "),_("ul",[_("li",[t._v("自动上传图片到目标平台")]),t._v(" "),_("li",[t._v("同步样式（这个就需要采取直接爬取的方式了。）")])]),t._v(" "),_("p",[t._v("一次排版发布，多平台同步发布。解放自媒体人生产力，专注于写作本身！")]),t._v(" "),_("p",[t._v("同步平台")]),t._v(" "),_("ul",[_("li",[t._v("微信公众号")]),t._v(" "),_("li",[t._v("简书")]),t._v(" "),_("li",[t._v("掘金")]),t._v(" "),_("li",[t._v("公司内部知识仓库（内网/外网）自定义扩展平台")])]),t._v(" "),_("p",[t._v("读取 markdown 的外链图片，模拟鼠标粘贴动作，粘贴到掘金上去。")]),t._v(" "),_("p",[t._v("思路：可以分别建立一个草稿，用于")]),t._v(" "),_("p",[t._v("除了导入 markdown 外，还可以通过 github 的推送自动更新、同步，这样最好。")]),t._v(" "),_("p",[t._v("这里导入标准的 markdown 文件，图片链接都是本地的，需要抓取已发布平台的图片，比如源服务器是 GitHub，那就要抓取 github 的图片。")]),t._v(" "),_("p",[_("strong",[t._v("先满足自己，最小原型，再考虑扩展。")])]),t._v(" "),_("ol",[_("li",[t._v("导入标准的 markdown 文件 -> 检测文件 -> 选择平台：简书")]),t._v(" "),_("li",[t._v("输入平台登录信息（或授权信息）")]),t._v(" "),_("li",[t._v("代码层面读取 markdown 里的图片链接，并进行访问抓取，存储在 indexedDB 本地里。\n"),_("ul",[_("li",[t._v("根据 markdown 里的")])])]),t._v(" "),_("li",[t._v("然后新建一个预览页面，读取 indexedDB 的图片进行并全部展示出来。")]),t._v(" "),_("li",[t._v("根据登录信息进行登录，并在发布平台（简书）新建一个文章草稿，依次复制预览页面的每张照片，进行粘贴上传。")]),t._v(" "),_("li",[t._v("最终获得了简书的所有图片外链。")]),t._v(" "),_("li",[t._v("把新的图片链接写入到原来的 markdown 文件中。")])]),t._v(" "),_("p",[t._v("UML。")]),t._v(" "),_("p",[t._v("依赖 github，版本 1.0.0")]),t._v(" "),_("h2",{attrs:{id:"chrome-扩展"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#chrome-扩展"}},[t._v("#")]),t._v(" Chrome 扩展")]),t._v(" "),_("p",[_("img",{attrs:{src:e(559),alt:""}})]),t._v(" "),_("h3",{attrs:{id:"background-scripts"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#background-scripts"}},[t._v("#")]),t._v(" background scripts")]),t._v(" "),_("p",[t._v("浏览器事件监听")]),t._v(" "),_("p",[t._v("background 可以使扩展常驻后台，比较常用的是指定子属性 scripts，表示在扩展启动时自动创建一个包含所有指定脚本的页面。")]),t._v(" "),_("p",[t._v("在 background 中请求网站时可以自动携带已有的 cookie，绕过跨域 cookie 携带问题，黑客获取不了。")]),t._v(" "),_("p",[t._v("因此涉及同步的操作，都放到这里来。需要跟前台页面进行通信。")]),t._v(" "),_("p",[t._v("这个跟跨域不一样，这个是登录 cookie 的问题，跨域的操作则可以在前台声明。")]),t._v(" "),_("h3",{attrs:{id:"content-scripts"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#content-scripts"}},[t._v("#")]),t._v(" content scripts")]),t._v(" "),_("h3",{attrs:{id:"option-page"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#option-page"}},[t._v("#")]),t._v(" option page")]),t._v(" "),_("h3",{attrs:{id:"ui-elements"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#ui-elements"}},[t._v("#")]),t._v(" UI elements")]),t._v(" "),_("h3",{attrs:{id:"最终步骤："}},[_("a",{staticClass:"header-anchor",attrs:{href:"#最终步骤："}},[t._v("#")]),t._v(" 最终步骤：")]),t._v(" "),_("p",[_("strong",[t._v("第一部分")]),t._v("：")]),t._v(" "),_("ol",[_("li",[t._v("请求 github 的 markdown 文件，读取里面图片的名称集合")]),t._v(" "),_("li",[t._v("根据图片名称集合组合 github 实际的图片存储前缀，获得真正的链接地址。（如果这个链接做了防盗链接，那么就要把图片下载到 indexedDB 本地里，然后输出 dataurl 链接 ）")]),t._v(" "),_("li",[t._v("然后新建一个预览页面，输入第 2 步获得的图片链接，进行并全部展示出来。")])]),t._v(" "),_("ul",[_("li",[t._v("chrome 实现，取消图片展示复制。")])]),t._v(" "),_("p",[t._v("或者这样获取，匹配名称。")]),t._v(" "),_("ul",[_("li",[t._v("源图片服务器：可以直接读取仓库里对应的 markdown 文件里的图片\nhttps://github.com/Jecyu/Notebook/blob/master/docs/.vuepress/public/images/git-command.jpg")])]),t._v(" "),_("p",[t._v("先不用导入 markdown 了，直接请求 markdown 文件")]),t._v(" "),_("ul",[_("li",[t._v("预览 markdown：https://github.com/Jecyu/Notebook/blob/master/docs/blogs/%E4%BD%A0%E7%9F%A5%E9%81%93%E4%BB%80%E4%B9%88%E6%98%AF-Oauth-%E5%90%97.md")])]),t._v(" "),_("ol",[_("li",[t._v("获取 Markdown API：https://raw.githubusercontent.com/Jecyu/Notebook/master/docs/blogs/%E4%BD%A0%E7%9F%A5%E9%81%93%E4%BB%80%E4%B9%88%E6%98%AF-Oauth-%E5%90%97.md")]),t._v(" "),_("li",[t._v("获取图片列表：先获取列表，再一次获取详细的内容信息。进行下载。a")])]),t._v(" "),_("ul",[_("li",[t._v("https://api.github.com/repos/Jecyu/Notebook/contents/docs/.vuepress/public/images（获取其中的 download_url ）进行下载")])]),t._v(" "),_("p",[_("strong",[t._v("后续：自动选择 github 的仓库的 blogs 进行加载，选择那个 markdown 就同步哪一个。图片源也同理。可以选择不需要手动填写。")])]),t._v(" "),_("p",[t._v("先跑通整个小 demo 流程，然后架构优化。")]),t._v(" "),_("p",[_("strong",[t._v("第二部分")]),t._v("：（参考 wechatsync）\n（通过 扩展工具，都不需要用 cookie 登录了，也避免跨站的问题，ok，perfect）")]),t._v(" "),_("ol",[_("li",[t._v("根据登录信息进行登录，并在发布平台（简书）新建一个文章草稿，利用无头浏览器依次复制"),_("strong",[t._v("预览页面")]),t._v("的每张照片，依次进行粘贴上传。（能否实现批量复制，批量粘贴图片呢？可以找到上传接口请求上传，通过 token ）")]),t._v(" "),_("li",[t._v("获取文章草稿里的新链接，根据图片名称重新输入到原始的 markdown 文件的图片地址里，获得新的 markdown 文件。")]),t._v(" "),_("li",[t._v("新建一个文章草稿，把新 markdown 文件里的全部内容复制进去。对于已经发布的文章，这里则需要考虑通过（文章名称完全匹配或 id 进行匹配），进行更新即可。或者每次都放到草稿里去，再手动更新？")])]),t._v(" "),_("ul",[_("li",[t._v("对于新的博客，新建 Post，根据 Post_id 上传相关图片，然后获得新的图片地址，上传新的 markdown 文件内容。")]),t._v(" "),_("li",[t._v("对于旧的博客，没有唯一的标识用于同步（前期可以考虑这样，获取平台的文章列表，手动选择要更新的文章，从而获得 post_id，再根据前面的一样即可。）")])]),t._v(" "),_("p",[t._v("可以先拿简书来测试 或 segementfault 进行测试。")]),t._v(" "),_("p",[t._v("一键同步后，这样后续才更有利于公众号的推广。")]),t._v(" "),_("p",[t._v("WeChatSync，如何在开发层面进行调试")]),t._v(" "),_("h2",{attrs:{id:"如何优雅地调试"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#如何优雅地调试"}},[t._v("#")]),t._v(" 如何优雅地调试")]),t._v(" "),_("p",[t._v("右键 Chrome 工具栏的小图标会弹出一个窗口，选择审查弹出内容即可调试。\n但是这种方法极度低效，直接 chrome://extensions/找到你插件的 ID：")]),t._v(" "),_("p",[t._v("然后输入："),_("code",[t._v("chrome-extension://mhmmbebaccifinklepnhbckmmkpmnolk/index.html")])]),t._v(" "),_("h2",{attrs:{id:"markdown-图片与正文替换方案"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#markdown-图片与正文替换方案"}},[t._v("#")]),t._v(" Markdown 图片与正文替换方案")]),t._v(" "),_("p",[t._v("方案一：")]),t._v(" "),_("ol",[_("li",[t._v("利用 "),_("code",[t._v("![]()")]),t._v(" 作为分隔符，把正文分为 n 份，获得 imgArr 和 contentArr")]),t._v(" "),_("li",[t._v("然后把 imgArr 的图片上传到要同步的平台，获得新的 newImgArr")]),t._v(" "),_("li",[t._v("按照顺序，重新评价 newImgArr 和 contentArr 获得 newMarkdown 即可上传。")])]),t._v(" "),_("p",[t._v("方案二：")]),t._v(" "),_("ol",[_("li",[t._v("读取 markdown，获得图片 imgArr，每个 img 都给予一个唯一的标识 id。")]),t._v(" "),_("li",[t._v("然后把 imgArr 的图片上传到要同步的平台，获得新的 newImgArr，包含了唯一的 id")]),t._v(" "),_("li",[t._v("读取 markdown，根据 newImgArr 的每个 img 的id 找到对应的图片进行替换，从而获得新的 newMarkdown。")])]),t._v(" "),_("p",[t._v("方案：可以使用 chrome 扩展或者使用 puppeteer 爬虫处理。")]),t._v(" "),_("h2",{attrs:{id:"cookie-登录问题"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#cookie-登录问题"}},[t._v("#")]),t._v(" Cookie 登录问题")]),t._v(" "),_("p",[t._v("将包含已登陆信息的 cookie 设置到 HTTP 请求当中，直接通过 HTTP request 进行交互。")]),t._v(" "),_("p",[t._v("都需要人工设置 cookie 的。")]),t._v(" "),_("p",[t._v("还要把 Chrome.cookies 读取出来，放到远程服务器？？？")]),t._v(" "),_("p",[t._v("这里同步平台的扩展不就有安全问题了吗？")]),t._v(" "),_("h2",{attrs:{id:"目前的同步"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#目前的同步"}},[t._v("#")]),t._v(" 目前的同步")]),t._v(" "),_("p",[t._v("统一在 github 管理博客，然后手动同步掘金，其他平台，可以采用 Wechatsync 右键菜单提取 github 本地的文章进行同步即可。")]),t._v(" "),_("p",[t._v("如果不是初次同步，而是修改后的同步，只需要把新草稿的文章复制到原文章即可。")]),t._v(" "),_("p",[t._v("使用写作助手客户端进行快速查看各个平台。")]),t._v(" "),_("h2",{attrs:{id:"参考资料"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),_("ul",[_("li",[_("a",{attrs:{href:"https://openwrite.cn/",target:"_blank",rel:"noopener noreferrer"}},[t._v("openwrite"),_("OutboundLink")],1)]),t._v(" "),_("li",[_("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/83462205",target:"_blank",rel:"noopener noreferrer"}},[t._v("开源一文多发平台ArtiPub，让文章随处可阅"),_("OutboundLink")],1)]),t._v(" "),_("li",[_("a",{attrs:{href:"https://mp.weixin.qq.com/s/waUg3hx5HsRkyiitJdHudg",target:"_blank",rel:"noopener noreferrer"}},[t._v("干货】Chrome插件(扩展)开发全攻略"),_("OutboundLink")],1)]),t._v(" "),_("li",[t._v("《Chrome 扩展及应用开发》")]),t._v(" "),_("li",[_("a",{attrs:{href:"https://developer.chrome.com/extensions/getstarted",target:"_blank",rel:"noopener noreferrer"}},[t._v("Getting Started Tutorial"),_("OutboundLink")],1)]),t._v(" "),_("li",[_("a",{attrs:{href:"https://www.zhihu.com/question/20179805",target:"_blank",rel:"noopener noreferrer"}},[t._v("如何从零开始写一个 Chrome 扩展？"),_("OutboundLink")],1)]),t._v(" "),_("li",[_("a",{attrs:{href:"https://juejin.cn/post/6844903740646899720#heading-47",target:"_blank",rel:"noopener noreferrer"}},[t._v("一篇文章教你顺利入门和开发 chrome 扩展程序（插件）"),_("OutboundLink")],1)]),t._v(" "),_("li",[t._v("可以参考这个工具，微信文章同步助手，可以参考，它是只能读取微信文章。可以参考它是如何同步到简书里去的，都不需要登录认证的，这是因为 Chrome 扩展工具的权限？图片是上传的。")])]),t._v(" "),_("p",[t._v("总之就是要有一个默认同步源。一种最简单的就是爬取页面的东西，进行传递。比如微信文章同步助手。或者是 markdown 文件。")]),t._v(" "),_("p",[_("img",{attrs:{src:e(560),alt:""}})]),t._v(" "),_("ul",[_("li",[_("p",[t._v("https://mp.weixin.qq.com/s/bKriNlZjv0VtnV-QjOUueA")])]),t._v(" "),_("li",[_("p",[t._v("https://chrome.google.com/webstore/detail/%E5%BE%AE%E4%BF%A1%E5%90%8C%E6%AD%A5%E5%8A%A9%E6%89%8B/hchobocdmclopcbnibdnoafilagadion?hl=zh-CN")])]),t._v(" "),_("li",[_("p",[t._v("https://www.wechatsync.com/")]),t._v(" "),_("ul",[_("li",[t._v("多平台互同步")]),t._v(" "),_("li",[t._v("从公众号同步")]),t._v(" "),_("li",[t._v("同步到公众号")]),t._v(" "),_("li",[t._v("Markdown 同步")])])]),t._v(" "),_("li",[_("p",[_("a",{attrs:{href:"https://segmentfault.com/a/1190000015144126",target:"_blank",rel:"noopener noreferrer"}},[t._v("一篇文章搞定 Github API 调用 (v3）"),_("OutboundLink")],1)])])])])}),[],!1,null,null,null);r.default=v.exports},559:function(t,r,e){t.exports=e.p+"assets/img/2020-11-22-23-14-26.7b647b47.png"},560:function(t,r,e){t.exports=e.p+"assets/img/2020-11-18-23-14-12.36508633.png"}}]);