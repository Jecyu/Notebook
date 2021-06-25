(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{1458:function(a,s,e){"use strict";e.r(s);var t=e(44),r=Object(t.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"docker"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker"}},[a._v("#")]),a._v(" docker")]),a._v(" "),t("ul",[t("li",[a._v("为什么要有 docker")]),a._v(" "),t("li",[a._v("有 docker 和没有 docker 的区别")]),a._v(" "),t("li",[a._v("可以用 docker 来做什么")])]),a._v(" "),t("p",[t("img",{attrs:{src:e(456),alt:""}})]),a._v(" "),t("p",[t("img",{attrs:{src:e(457),alt:""}})]),a._v(" "),t("p",[t("img",{attrs:{src:e(458),alt:""}})]),a._v(" "),t("p",[t("img",{attrs:{src:e(459),alt:""}})]),a._v(" "),t("p",[t("img",{attrs:{src:e(460),alt:""}})]),a._v(" "),t("h2",{attrs:{id:"基础使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基础使用"}},[a._v("#")]),a._v(" 基础使用")]),a._v(" "),t("h3",{attrs:{id:"操作容器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#操作容器"}},[a._v("#")]),a._v(" 操作容器")]),a._v(" "),t("h3",{attrs:{id:"进入容器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#进入容器"}},[a._v("#")]),a._v(" 进入容器")]),a._v(" "),t("h4",{attrs:{id:"exec-命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#exec-命令"}},[a._v("#")]),a._v(" exec 命令")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# docker exec -it mysql bash")]),a._v("\ndocker "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("exec")]),a._v(" -it "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")]),a._v("容器名"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")])]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("bash")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br")])]),t("h3",{attrs:{id:"退出容器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#退出容器"}},[a._v("#")]),a._v(" 退出容器")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("exit")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h3",{attrs:{id:"终止容器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#终止容器"}},[a._v("#")]),a._v(" 终止容器")]),a._v(" "),t("p",[a._v("可以使用 "),t("code",[a._v("docker container stop")]),a._v(" 来终止一个运行中的容器。此外，当 Docker 容器中指定的应用终结时，容器也自动终止。")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("docker container stop\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("终止状态的容器可以用 "),t("code",[a._v("docker container ls -a")]),a._v(" 命令看到。处于终止状态的容器，可以通过"),t("code",[a._v("docker container start")]),a._v("命令重新启动。")]),a._v(" "),t("p",[a._v("此外，"),t("code",[a._v("docker container restart")]),a._v(" 命令会将一个运行态的容器终止，然后再重新启动它。")]),a._v(" "),t("h2",{attrs:{id:"实战"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实战"}},[a._v("#")]),a._v(" 实战")]),a._v(" "),t("p",[a._v("运行容器的时候指定本地的一个文件目录和容器中的一个文件目录的映射，通过这个可以做文件数据同步，两方无论哪一方有修改，另一方都会同步内容")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("docker run -d -v "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("pwd")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v(":/usr/share/nginx/html -p "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("80")]),a._v(":80 --name nginx nginx\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("这个时候"),t("code",[a._v("-v:")]),a._v("前面的参数是本机文件路径， "),t("code",[a._v(":")]),a._v("后面是docker容器文件目录， "),t("code",[a._v("$(pwd)")]),a._v("当前命令执行的路径（也就是本地机器的文件目录）")]),a._v(" "),t("p",[a._v("值得注意的是，使用bind Mounting方式做数据卷的映射时，首次docker run -v 运行，如果本机的文件夹是没有内容的，docker容器中的文件夹是有内容的，则本机的会覆盖dokcer容器中的，也就是容器中原本有内容的也会没有内容。")]),a._v(" "),t("h3",{attrs:{id:"数据持久化之-bind-mounting"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据持久化之-bind-mounting"}},[a._v("#")]),a._v(" 数据持久化之 bind Mounting")]),a._v(" "),t("h3",{attrs:{id:"docker文件夹映射的两种方式-主机卷映射和共享文件夹映射"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker文件夹映射的两种方式-主机卷映射和共享文件夹映射"}},[a._v("#")]),a._v(" docker文件夹映射的两种方式---主机卷映射和共享文件夹映射")]),a._v(" "),t("ul",[t("li",[a._v("docker容器不保持任何数据")]),a._v(" "),t("li",[a._v("重要数据请使用外部卷存储（数据持久化）")]),a._v(" "),t("li",[a._v("容器可以挂载真实机目录或共享存储为卷")])]),a._v(" "),t("p",[a._v("https://blog.csdn.net/zhydream77/article/details/81909706")]),a._v(" "),t("p",[t("img",{attrs:{src:e(461),alt:""}})]),a._v(" "),t("h2",{attrs:{id:"参考资料"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[a._v("#")]),a._v(" 参考资料")]),a._v(" "),t("ul",[t("li",[a._v("《Docker——从入门到实践》")]),a._v(" "),t("li",[t("a",{attrs:{href:"https://juejin.im/post/5b6d4439f265da0f800e0d5a#heading-2",target:"_blank",rel:"noopener noreferrer"}},[a._v("Docker的持久化存储和数据共享（四）"),t("OutboundLink")],1)]),a._v(" "),t("li",[t("a",{attrs:{href:"https://juejin.im/post/5b8ddb70e51d45389153f288#heading-7",target:"_blank",rel:"noopener noreferrer"}},[a._v("从零搭建docker+jenkins+node.js自动化部署环境"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=r.exports},456:function(a,s,e){a.exports=e.p+"assets/img/2020-07-29-15-21-48-compose.e22a2d2c.png"},457:function(a,s,e){a.exports=e.p+"assets/img/2020-07-29-15-25-17-contianer.8635dfe0.png"},458:function(a,s,e){a.exports=e.p+"assets/img/2020-07-29-15-31-03-docker.d27581d6.png"},459:function(a,s,e){a.exports=e.p+"assets/img/2020-07-29-15-34-48-docker.2e98295f.png"},460:function(a,s,e){a.exports=e.p+"assets/img/2020-07-29-15-37-26-docker.db62e0d2.png"},461:function(a,s,e){a.exports=e.p+"assets/img/2020-07-29-16-05-38-docker.a2cb7d58.png"}}]);