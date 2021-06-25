(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{1419:function(a,t,s){"use strict";s.r(t);var r=s(44),e=Object(r.a)({},(function(){var a=this,t=a.$createElement,r=a._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[r("h1",{attrs:{id:"【译】程序员日常：你知道什么是-oauth-吗？"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#【译】程序员日常：你知道什么是-oauth-吗？"}},[a._v("#")]),a._v(" 【译】程序员日常：你知道什么是 OAuth 吗？")]),a._v(" "),r("blockquote",[r("ul",[r("li",[a._v("原文链接："),r("a",{attrs:{href:"https://medium.com/@wdevon99/what-the-hell-is-oauth-6ba19f236612",target:"_blank",rel:"noopener noreferrer"}},[a._v("What the hell is OAuth?"),r("OutboundLink")],1)]),a._v(" "),r("li",[a._v("原文作者："),r("a",{attrs:{href:""}},[a._v("Devon Wijesinghe")])]),a._v(" "),r("li",[a._v("译者："),r("a",{attrs:{href:"https://juejin.im/user/1486195450470023/posts",target:"_blank",rel:"noopener noreferrer"}},[a._v("Jecyu 森煜"),r("OutboundLink")],1)]),a._v(" "),r("li",[a._v("校对："),r("a",{attrs:{href:"https://juejin.im/user/8451824561854/posts",target:"_blank",rel:"noopener noreferrer"}},[a._v("Yolanda"),r("OutboundLink")],1)])])]),a._v(" "),r("p",[r("img",{attrs:{src:s(506),alt:""}})]),a._v(" "),r("p",[a._v("大家好！"),r("strong",[a._v("OAuth")]),a._v(" 成为一个时髦的词很长一段时间了，但是对于初学者来说还是很难领悟，并不是因为 OAuth 本身很难，而是因为在网上搜到有关 OAuth 的资料看完让人困惑。因此我写了这篇文章来解释 为什么以及如何以非常简单的方式使用 OAuth！")]),a._v(" "),r("h2",{attrs:{id:"简单的登录"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#简单的登录"}},[a._v("#")]),a._v(" 简单的登录")]),a._v(" "),r("p",[a._v("在进一步讲解前，让我们回顾过去用户是怎样登录系统的。最基本和最简单的登录是，用户凭证存储在一个托管的数据库中（密码通常是以哈希值的方式存储）。当用户登录时，将发送用户凭证到后台，如果成功匹配，则会话（session）将会被存储到浏览器中以便后续使用。")]),a._v(" "),r("p",[r("img",{attrs:{src:"https://miro.medium.com/max/700/1*ODbaUuSDV-6vuOIXxylNIA.png",alt:""}})]),a._v(" "),r("h3",{attrs:{id:"弊端"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#弊端"}},[a._v("#")]),a._v(" 弊端")]),a._v(" "),r("ul",[r("li",[r("strong",[a._v("安全问题")]),a._v("：你必须确保用户数据以一种安全的方式存储，并且该数据符合 GDPR（"),r("a",{attrs:{href:"https://eugdpr.org/",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://eugdpr.org/"),r("OutboundLink")],1),a._v("）。假若不遵循最佳实践，系统是容易受到攻击。")]),a._v(" "),r("li",[r("strong",[a._v("维护成本")]),a._v("：应该确保系统正常运行（应该做好服务器管理）\n")])]),a._v(" "),r("p",[a._v("虽然上面提到的简单登录跟 OAuth 的工作方式无关，但是我提到它是为了你们对于可以用来跟 OAuth 比较的东西有一个比较清楚的认识。")]),a._v(" "),r("h3",{attrs:{id:"委托授权问题？"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#委托授权问题？"}},[a._v("#")]),a._v(" 委托授权问题？")]),a._v(" "),r("p",[a._v("委托授权是给予当前应用有权限去访问第三方应用的数据。在没有获取用户凭证（credentials）的情况下去实现这个操作是个问题，被称为委托授权问题。")]),a._v(" "),r("p",[a._v("举个例子：如果让我们想想当前比较火的吃鸡游戏（"),r("strong",[a._v("PUBG")]),a._v("），它想要访问你 Facebook 的朋友列表和个人资料。如果以下面的方式请求你的凭证是正确的吗？")]),a._v(" "),r("p",[r("img",{attrs:{src:"https://miro.medium.com/max/700/1*2-E02l_qsRCAeTVDVE63Hw.png",alt:"输入用户名和密码"}})]),a._v(" "),r("p",[a._v("答案当然是不！你会信任该应用并把你的凭证告诉它，让它有能力去做更多的事情而不仅仅是获取你的朋友列表和个人信息吗？想想就知道了。")]),a._v(" "),r("p",[a._v("无论如何，OAuth 的出现就是为了接手这个局面并解决现在的问题。")]),a._v(" "),r("p",[r("img",{attrs:{src:"https://miro.medium.com/max/700/1*aiskm3OoPeTqUT8EUdg3wQ.png",alt:"OAuth"}})]),a._v(" "),r("h2",{attrs:{id:"oauth-是什么"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#oauth-是什么"}},[a._v("#")]),a._v(" OAuth 是什么?")]),a._v(" "),r("p",[a._v("OAuth（开放授权）是互联网上基于令牌（token） 认证和授权的开放标准。"),r("strong",[a._v("OAuth")]),a._v(" 允许终端用户信息在不需要提供用户密码的情况被第三方服务使用，比如 Facebook。")]),a._v(" "),r("p",[r("img",{attrs:{src:"https://miro.medium.com/max/471/1*3249FyOJ785-dr5pyM6G9Q.png",alt:""}})]),a._v(" "),r("p",[a._v("如果你仍然 get 不到，无需担心，接下来我会一步步解读它的工作原理！")]),a._v(" "),r("p",[r("img",{attrs:{src:"https://miro.medium.com/max/700/1*Guf4916TAxgtG3BT9p-1Rw.png",alt:""}})]),a._v(" "),r("p",[a._v("如果你在网上搜索 OAuth，你看到的都是 OAuth 2.0。这是因为 1.0 版本已经废弃，也没什么人用了。所以从现在起，我将讨论 OAuth 2.0 版本。")]),a._v(" "),r("h2",{attrs:{id:"认证（authentication）vs-授权（authorization）"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#认证（authentication）vs-授权（authorization）"}},[a._v("#")]),a._v(" 认证（Authentication）vs 授权（Authorization）")]),a._v(" "),r("p",[a._v("OAuth 2.0 主要是用来授权而不是认证的，因此很重要的是要清楚地明白这两者之间的区别。")]),a._v(" "),r("p",[a._v("你可以去 Google 搜索下这些术语的定义，但是你阅读后还是可能不太清楚它们的区别。所以我会使用这个例子来阐述它的意思：")]),a._v(" "),r("p",[a._v("试想一下，你将与女友飞往巴黎度过一个浪漫的假期！当你经过机场时，机场安检人员/移民官员会检查你的护照和机票以确保你是本人（检查你的身份）。这就是"),r("strong",[a._v("认证（authentication）")]),a._v("！")]),a._v(" "),r("p",[a._v("然后，当你们登机的时候，如果登机牌上写着你是头等舱乘客，那么你获得的特权会比经济舱多。这就是"),r("strong",[a._v("授权")]),a._v("。")]),a._v(" "),r("p",[r("img",{attrs:{src:"https://miro.medium.com/max/700/1*E-79p00ZzTiFNvm-nueW9Q.png",alt:""}})]),a._v(" "),r("p",[a._v("类似的，如果我们考虑使用真实的 Web 应用程序，通过应用跟踪用户的身份的方式是认证。而用户拥有的特权是通过授权实现的（例如：只是查看或者查看和编辑）。")]),a._v(" "),r("h2",{attrs:{id:"oauth-2-0-术语"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#oauth-2-0-术语"}},[a._v("#")]),a._v(" OAuth 2.0 术语")]),a._v(" "),r("p",[a._v("好吧！现在我们一步步来探索 OAuth 2.0！为了让你更好的理解文章剩下的部分，对 OAuth 2.0 使用的术语有些印象是很重要的。由于这些术语大多数都是以现存的术语命名的，因此理解起来不费劲。")]),a._v(" "),r("ul",[r("li",[r("strong",[a._v("资源所有者（Resource owner）")]),a._v("：目标应用的用户，拥有其他应用想获取的数据。")]),a._v(" "),r("li",[r("strong",[a._v("客户端（Client）")]),a._v("：应用程序。")]),a._v(" "),r("li",[r("strong",[a._v("授权服务器（Authorization server）")]),a._v("：可以用来提示和授权的系统。")]),a._v(" "),r("li",[r("strong",[a._v("资源服务器（Resource server）")]),a._v("：保存数据的系统。")]),a._v(" "),r("li",[r("strong",[a._v("授权授予（Authorization grant")]),a._v("：证明用户已授予应用访问数据权限的事物。")]),a._v(" "),r("li",[r("strong",[a._v("重定向 URL（Redirect Uri）")]),a._v("：当授权后用户重定向的位置。")]),a._v(" "),r("li",[r("strong",[a._v("访问 token（Access Token）")]),a._v("：用于从资源服务器获取数据的密钥。")]),a._v(" "),r("li",[r("strong",[a._v("作用域（Scope）")]),a._v("：用于定义应用程序操作用户数据的权限级别。")])]),a._v(" "),r("h2",{attrs:{id:"oauth-工作流"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#oauth-工作流"}},[a._v("#")]),a._v(" OAuth 工作流")]),a._v(" "),r("p",[a._v("如果你完成过下面展示的步骤顺序操作（任何移动或者 Web 应用），并在其中授权访问你的数据，那么你已经使用过 "),r("strong",[a._v("OAuth 2.0")]),a._v("！")]),a._v(" "),r("p",[r("img",{attrs:{src:"https://miro.medium.com/max/700/1*SLd_kpMU8PwczIIGKTG0Qg.png",alt:""}})]),a._v(" "),r("p",[a._v("现在让我们拆开看看幕后这些流程能够走通并访问你的数据的过程，到底发生了什么。")]),a._v(" "),r("p",[r("img",{attrs:{src:"https://miro.medium.com/max/700/1*R06hbSc0yNm9E_qRyWFb8Q.png",alt:""}})]),a._v(" "),r("p",[a._v("注意：这些步骤用黄色标记，所以当你阅读下面的步骤的时候可以参考。")]),a._v(" "),r("h3",{attrs:{id:"步骤-1-流程开始"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#步骤-1-流程开始"}},[a._v("#")]),a._v(" 步骤 1: 流程开始")]),a._v(" "),r("p",[a._v("当你在 Facebook 或者任何其他的 "),r("a",{attrs:{href:"https://en.wikipedia.org/wiki/List_of_OAuth_providers",target:"_blank",rel:"noopener noreferrer"}},[a._v("OAuth 2.0 提供者"),r("OutboundLink")],1),a._v(" 注册你的应用程序时，你会获得一个客户端 id（"),r("strong",[a._v("client id")]),a._v("） 和一个客户端密钥（"),r("strong",[a._v("client secret")]),a._v("）（客户端密钥应该安全地存储好且不要暴露出来。）")]),a._v(" "),r("p",[a._v("当 PUBG 用户在应用中单击 "),r("code",[a._v("Login with Facebook")]),a._v(" 按钮时，将会跳转到 OAuth 2.0 提供者（在这个例子中是 Facebook 登录页）。通过携带 "),r("strong",[a._v("client id")]),a._v("和一些其他属性作为参数发送 HTTPS 请求到授权服务端来实现申请特权操作。类似下面这样：")]),a._v(" "),r("div",{staticClass:"language-bash line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[a._v("https://www.facebook.com/v2.7/dialog/oauth?\n"),r("span",{pre:!0,attrs:{class:"token variable"}},[r("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")]),r("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("client_id")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("C_1"),r("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")])]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&")]),a._v("\n"),r("span",{pre:!0,attrs:{class:"token variable"}},[r("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")]),a._v("redirect_uri"),r("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")])]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("com.app.pubg://callback"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&")]),a._v("\n"),r("span",{pre:!0,attrs:{class:"token variable"}},[r("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")]),a._v("scope"),r("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")])]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("profile user_friends"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&")]),a._v("\n"),r("span",{pre:!0,attrs:{class:"token variable"}},[r("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")]),a._v("response_type"),r("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")])]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("code\n")])]),a._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[a._v("1")]),r("br"),r("span",{staticClass:"line-number"},[a._v("2")]),r("br"),r("span",{staticClass:"line-number"},[a._v("3")]),r("br"),r("span",{staticClass:"line-number"},[a._v("4")]),r("br"),r("span",{staticClass:"line-number"},[a._v("5")]),r("br")])]),r("p",[a._v("正如前面所述，"),r("code",[a._v("redirect_uir")]),a._v(" 是用户授权后跳转的位置，"),r("code",[a._v("client_id")]),a._v(" 则是你从 OAuth 2.0 提供者获得的内容。")]),a._v(" "),r("p",[r("code",[a._v("scope")]),a._v(" 定义了权限的等级，这些作用域（scopes）可以从 OAuth 2.0 提供者的文档查看。")]),a._v(" "),r("p",[a._v("比如，可以看看 Facebook 的作用域说明（图中圈红的地方就是上面的请求所用的）")]),a._v(" "),r("p",[r("img",{attrs:{src:"https://miro.medium.com/max/700/1*o_BFJgBkkACtO-erWXd52A.png",alt:""}})]),a._v(" "),r("h3",{attrs:{id:"步骤-2-进行授权"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#步骤-2-进行授权"}},[a._v("#")]),a._v(" 步骤 2: 进行授权")]),a._v(" "),r("p",[a._v("用户成功登录后，系统将会提示用户准予 PUBG 访问他的数据！（朋友列表和个人资料）。")]),a._v(" "),r("h3",{attrs:{id:"步骤-3-回调"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#步骤-3-回调"}},[a._v("#")]),a._v(" 步骤 3: 回调")]),a._v(" "),r("p",[a._v("如果"),r("strong",[a._v("用户拒绝授权访问")]),a._v("他/她的数据，回调看起来像下面这样：")]),a._v(" "),r("p",[a._v("用户将会跳转到请求的应用，跳转到它的登录界面后流程结束！在这种情况下 PUBG 不被授权访问用户的数据。")]),a._v(" "),r("div",{staticClass:"language-bash line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[a._v("com.app.pubg://callback?\n"),r("span",{pre:!0,attrs:{class:"token variable"}},[r("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")]),a._v("error"),r("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")])]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("access_denied"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&")]),a._v("\n"),r("span",{pre:!0,attrs:{class:"token variable"}},[r("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")]),a._v("error_description"),r("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")])]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("The user did not consent\n")])]),a._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[a._v("1")]),r("br"),r("span",{staticClass:"line-number"},[a._v("2")]),r("br"),r("span",{staticClass:"line-number"},[a._v("3")]),r("br")])]),r("p",[a._v("相反，如果用户准许访问，回调看起来像下面这样：")]),a._v(" "),r("p",[a._v("回调将携带了授权码（"),r("strong",[a._v("authorization code")]),a._v("）以便用于下一步。")]),a._v(" "),r("div",{staticClass:"language-bash line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[a._v("com.app.pubg://callback?"),r("span",{pre:!0,attrs:{class:"token variable"}},[r("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")]),a._v("code"),r("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")])]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("oMsCeLvIaQm6bTrgtp7\n")])]),a._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[a._v("1")]),r("br")])]),r("h3",{attrs:{id:"步骤-4-用-code-交换-access-token"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#步骤-4-用-code-交换-access-token"}},[a._v("#")]),a._v(" 步骤 4: 用 code 交换 access token")]),a._v(" "),r("p",[a._v("一旦你从上一步获得授权码（"),r("strong",[a._v("Authorization Code")]),a._v("），你可以把它发到授权服务器（authorization server）交换访问 token（"),r("strong",[a._v("Access Token")]),a._v("）。")]),a._v(" "),r("div",{staticClass:"language-bash line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[r("span",{pre:!0,attrs:{class:"token variable"}},[r("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")]),a._v("POST"),r("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")])]),a._v("\nwww.facebookapi.com/oauth2/v4/token\n"),r("span",{pre:!0,attrs:{class:"token variable"}},[r("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")]),a._v("Content-Type"),r("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")])]),r("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" application/x-www-form-urlencoded\n\n"),r("span",{pre:!0,attrs:{class:"token variable"}},[r("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")]),a._v("code"),r("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")])]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("oMsCeLvIaQm6bTrgtp7"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&")]),a._v("\n"),r("span",{pre:!0,attrs:{class:"token variable"}},[r("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")]),a._v("client_id"),r("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")])]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("C_1"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&")]),a._v("\n"),r("span",{pre:!0,attrs:{class:"token variable"}},[r("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")]),a._v("client_secret"),r("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")])]),a._v("secret123"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&")]),a._v("\n"),r("span",{pre:!0,attrs:{class:"token variable"}},[r("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")]),a._v("grant_type"),r("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")])]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("authorization_code\n")])]),a._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[a._v("1")]),r("br"),r("span",{staticClass:"line-number"},[a._v("2")]),r("br"),r("span",{staticClass:"line-number"},[a._v("3")]),r("br"),r("span",{staticClass:"line-number"},[a._v("4")]),r("br"),r("span",{staticClass:"line-number"},[a._v("5")]),r("br"),r("span",{staticClass:"line-number"},[a._v("6")]),r("br"),r("span",{staticClass:"line-number"},[a._v("7")]),r("br"),r("span",{staticClass:"line-number"},[a._v("8")]),r("br")])]),r("h3",{attrs:{id:"步骤-5-进行访问数据"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#步骤-5-进行访问数据"}},[a._v("#")]),a._v(" 步骤 5: 进行访问数据")]),a._v(" "),r("p",[a._v("接收到访问 token（access token）后就可以用来获取应用所需的信息了，在 PUBG 的例子中，用来访问朋友列表和用户基本信息。")]),a._v(" "),r("h2",{attrs:{id:"更多的-oauth-2-0-术语"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#更多的-oauth-2-0-术语"}},[a._v("#")]),a._v(" 更多的 OAuth 2.0 术语")]),a._v(" "),r("p",[a._v("你们可以会想，为什么需要通过两个步骤取获取访问 token（access token）（首先获得 code，然后用 code 交换 access token）。将这个分解为两个步骤有原因的。为了弄明白它，你需要理解下面的术语：")]),a._v(" "),r("ul",[r("li",[r("strong",[a._v("后端（Back channel）")]),a._v("：服务端之间的通信安全性更高。")]),a._v(" "),r("li",[r("strong",[a._v("前端（Front channel）")]),a._v("：浏览器端和移动端相对服务器端安全性较低。")])]),a._v(" "),r("p",[a._v("鉴于后端的安全性更好，更加适合用于交换 access token。")]),a._v(" "),r("p",[r("img",{attrs:{src:"https://miro.medium.com/max/700/1*7nfbeGQHY9iCXPWZat6WZg.png",alt:""}})]),a._v(" "),r("p",[r("strong",[a._v("注意")]),a._v("：上面描述的流程只是 OAuth（授权码流程"),r("strong",[a._v("Authorization Code Flow")]),a._v("）几种流程中的一种，更多信息可以看："),r("a",{attrs:{href:"https://www.drupal.org/node/1958718",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://www.drupal.org/node/1958718"),r("OutboundLink")],1)]),a._v(" "),r("p",[a._v("另外，记住我拿 PUBG 说明只是举个例子，实际上它实现 Auth 的方式可能不是这样的。")]),a._v(" "),r("h2",{attrs:{id:"小结"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[a._v("#")]),a._v(" 小结")]),a._v(" "),r("p",[a._v("希望你对 OAuth 是怎么工作的以及为什么我们需要它有了更好的理解。现在是时候让你探索并找出更多 OAuth 流程类型。祝好！")]),a._v(" "),r("p",[a._v("感谢阅读本文，希望你有所收获。如果你需要帮助，可以联系我："),r("a",{attrs:{href:"%20wdevon99@gmail.com"}},[a._v("%20wdevon99@gmail.com")])]),a._v(" "),r("h3",{attrs:{id:"参考资料"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[a._v("#")]),a._v(" 参考资料")]),a._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://oauth.net/2/",target:"_blank",rel:"noopener noreferrer"}},[a._v("OAuth 2.0 - OAuth"),r("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=e.exports},506:function(a,t,s){a.exports=s.p+"assets/img/2020-09-09-14-17-37-OAUTH.50c44d9b.png"}}]);