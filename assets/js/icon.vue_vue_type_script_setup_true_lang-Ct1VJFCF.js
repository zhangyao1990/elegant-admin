
/**
 * 由 MrZhang 提供技术支持
 * Powered by elegant-admin
 * Github https://github.com/zhangyao1990/elegant-admin
 */

import{d as o,b as c,a as r,c as p,q as l}from"./@vue-B5ZJ3lyG.js";const m=o({name:"EIcon",__name:"icon",props:{name:{},prefix:{default:""}},setup(a){const e=a,t=c(()=>{let n=e.name;if(e.name.startsWith("icon--")){const s=e.name.split("--");s.length>1&&(n+=` icon--${s[1]}`)}return`${e.prefix}${n}`});return(n,s)=>(r(),p("span",{class:l(["iconfont",t.value])},null,2))}});export{m as _};
