import{g as n,f as e,j as l,l as s}from"./common-daabc399.js";import{_ as a,a as t}from"./common-1e77c661.js";const r='{"title":"项目概述","frontmatter":{"page":true,"date":"2021-01-03","title":"项目概述","describe":"项目概述"},"headers":[{"level":2,"title":"🚀 基于「VitePress」搭建的极简博客","slug":"🚀-基于「vitepress」搭建的极简博客"},{"level":2,"title":"效果预览","slug":"效果预览"},{"level":2,"title":"安装","slug":"安装"},{"level":2,"title":"下载依赖&启动","slug":"下载依赖-启动"},{"level":2,"title":"打包静态","slug":"打包静态"},{"level":2,"title":"联系我","slug":"联系我"},{"level":2,"title":"鸣谢","slug":"鸣谢"}],"relativePath":"README.md","lastUpdated":1610793861528.7068}';var i={};const o=l("h2",{id:"🚀-基于「vitepress」搭建的极简博客"},[l("a",{class:"header-anchor",href:"#🚀-基于「vitepress」搭建的极简博客","aria-hidden":"true"},"#"),s(" 🚀 基于「VitePress」搭建的极简博客")],-1),p=l("p",null,"现已完成:",-1),c=l("p",null,"✅ 渲染文章列表",-1),u=l("p",null,"✅ 使用Vue 3",-1),d=l("p",null,"✅ 文章目录",-1),h=l("p",null,"✅ 文章按时间轴归档",-1),g=l("p",null,"✅ 文章分类",-1),k=l("hr",null,null,-1),f=l("p",null,"2021-12-31",-1),m=l("p",null,"✅ Gitalk 评论",-1),b=l("hr",null,null,-1),v=l("p",null,"2020-01-05 更新",-1),y=l("p",null,"✅ 文章列表分页",-1),x=l("hr",null,null,-1),j=l("p",null,"2021-01-16 更新",-1),z=l("p",null,"✅ 文章图片放大",-1),M=l("p",null,"✅ 切换黑暗模式",-1),_=l("p",null,"✅ 局部打印",-1),P=l("hr",null,null,-1),V=l("p",null,"准备开发~",-1),w=l("p",null,"⬜ 文章上下页",-1),C=l("h2",{id:"效果预览"},[l("a",{class:"header-anchor",href:"#效果预览","aria-hidden":"true"},"#"),s(" 效果预览")],-1),E=l("p",null,[s("在线地址:"),l("a",{href:"https://crazymryan.github.io/blog",target:"_blank",rel:"noopener noreferrer"},"https://crazymryan.github.io/blog")],-1),A=l("p",null,[s("国内访问:"),l("a",{href:"http://crazy.lovemysoul.vip/blog",target:"_blank",rel:"noopener noreferrer"},"http://crazy.lovemysoul.vip/blog")],-1),B=l("p",null,"注意：（因为自己的服务器域名马上要过期了，我就懒得再去配置一个 gitalk 了，所以国内访问不携带评论功能。等有时间了在不上来）",-1),D=l("h2",{id:"安装"},[l("a",{class:"header-anchor",href:"#安装","aria-hidden":"true"},"#"),s(" 安装")],-1),G=l("div",{class:"language-bash"},[l("pre",null,[l("code",null,[l("span",{class:"token function"},"git"),s(" clone git@github.com:CrazyMrYan/blog.git\n"),l("span",{class:"token operator"},"&"),s("\n"),l("span",{class:"token builtin class-name"},"cd"),s(" blog\n")])])],-1),R=l("h2",{id:"下载依赖-启动"},[l("a",{class:"header-anchor",href:"#下载依赖-启动","aria-hidden":"true"},"#"),s(" 下载依赖&启动")],-1),U=l("div",{class:"language-shell"},[l("pre",null,[l("code",null,[l("span",{class:"token comment"},"# npm"),s("\n"),l("span",{class:"token function"},"npm"),s(),l("span",{class:"token function"},"install"),s("\n"),l("span",{class:"token operator"},"&"),s("\n"),l("span",{class:"token function"},"npm"),s(" run dev\n\n"),l("span",{class:"token comment"},"# yarn"),s("\n"),l("span",{class:"token function"},"yarn"),s(),l("span",{class:"token function"},"install"),s("\n"),l("span",{class:"token operator"},"&"),s("\n"),l("span",{class:"token function"},"yarn"),s(" dev\n")])])],-1),Y=l("h2",{id:"打包静态"},[l("a",{class:"header-anchor",href:"#打包静态","aria-hidden":"true"},"#"),s(" 打包静态")],-1),q=l("p",null,[s("在打包之前你需要配置 "),l("code",null,".vitepress"),s(" > "),l("code",null,"config.js"),s(" 中加上 base:'你的存放文件名'")],-1),F=l("div",{class:"language-diff"},[l("pre",null,[l("code",null,[s("let config = {\n"),l("span",{class:"token unchanged"},[l("span",{class:"token prefix unchanged"}," "),l("span",{class:"token line"},"   head:[...],\n"),l("span",{class:"token prefix unchanged"}," "),l("span",{class:"token line"},"   title:'悲伤日记',\n"),l("span",{class:"token prefix unchanged"}," "),l("span",{class:"token line"},"   themeConfig:{...},\n"),l("span",{class:"token prefix unchanged"}," "),l("span",{class:"token line"},"   dest: 'public',\n")]),l("span",{class:"token inserted-sign inserted"},[l("span",{class:"token prefix inserted"},"+"),l("span",{class:"token line"},"   base:'你的存放文件名'\n")]),s("}\n")])])],-1),H=l("p",null,[s("还需要在 "),l("code",null,".vitepress"),s(" > "),l("code",null,"build"),s(" > "),l("code",null,"index.js"),s(" 修改 type 为 "),l("code",null,"build")],-1),I=l("div",{class:"language-diff"},[l("pre",null,[l("code",null,[l("span",{class:"token deleted-sign deleted"},[l("span",{class:"token prefix deleted"},"-"),l("span",{class:"token line"}," const type = 'dev'\n")]),l("span",{class:"token inserted-sign inserted"},[l("span",{class:"token prefix inserted"},"+"),l("span",{class:"token line"}," const type = 'build'\n")]),s("export function Build(){\n"),l("span",{class:"token deleted-sign deleted"},[l("span",{class:"token prefix deleted"},"-"),l("span",{class:"token line"},"    return type === 'build' ? '' : ''\n")]),l("span",{class:"token inserted-sign inserted"},[l("span",{class:"token prefix inserted"},"+"),l("span",{class:"token line"},"    return type === 'build' ? '你的存放文件名' : ''\n")]),s("}\n")])])],-1),J=l("div",{class:"language-shell"},[l("pre",null,[l("code",null,[l("span",{class:"token comment"},"# npm"),s("\n"),l("span",{class:"token function"},"npm"),s(" run build\n\n"),l("span",{class:"token comment"},"# yarn"),s("\n"),l("span",{class:"token function"},"yarn"),s(" build\n\n")])])],-1),K=l("h2",{id:"联系我"},[l("a",{class:"header-anchor",href:"#联系我","aria-hidden":"true"},"#"),s(" 联系我")],-1),L=l("p",null,[l("span",null,[l("img",{src:a,style:{width:"50%"}}),l("img",{src:t,style:{width:"50%"}})])],-1),N=l("h2",{id:"鸣谢"},[l("a",{class:"header-anchor",href:"#鸣谢","aria-hidden":"true"},"#"),s(" 鸣谢")],-1),O=l("p",null,[s("本项目采用 "),l("a",{href:"https://github.com/Moking1997",target:"_blank",rel:"noopener noreferrer"},"@Moking1997"),s(" 搭建的 "),l("a",{href:"https://github.com/Moking1997/vitepress-blog",target:"_blank",rel:"noopener noreferrer"},"vitepress-blog"),s(",来进行的修改")],-1);i.render=function(l,s,a,t,r,i){return e(),n("div",null,[o,p,c,u,d,h,g,k,f,m,b,v,y,x,j,z,M,_,P,V,w,C,E,A,B,D,G,R,U,Y,q,F,H,I,J,K,L,N,O])};export default i;export{r as __pageData};
