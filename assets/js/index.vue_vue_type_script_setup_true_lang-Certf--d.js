
/**
 * 由 MrZhang 提供技术支持
 * Powered by elegant-admin
 * Github https://github.com/zhangyao1990/elegant-admin
 */

import{_ as u}from"./index-BDQQgAAl.js";import{d as f,W as g,r as m,a as o,c as t,S as s,a0 as b,a1 as h,$ as r,f as k,k as n,a2 as v,q as x,U as y}from"./@vue-BQ0xNElQ.js";const _={key:0,class:"title-container border-b-1 border-b-[var(--g-bg)] border-b-solid px-5 py-4 transition-border-color-300"},C={class:"main-container"},V=f({name:"PageMain",__name:"index",props:{title:{default:""},collaspe:{type:Boolean,default:!1},height:{default:""},background:{default:""},padding:{default:"10px"}},setup(l){const i=l,d=!!g().title,a=m(i.collaspe);function c(){a.value=!1}return(e,S)=>{const p=u;return o(),t("div",{class:x(["page-main relative mx-8px mt-8px flex flex-1 flex-col rounded-8px transition-background-color-300",{"of-hidden":n(a)}]),style:y({height:n(a)?e.height:"",backgroundColor:e.background?e.background:"var(--g-container-bg)",padding:e.padding})},[d||e.title?(o(),t("div",_,[s(e.$slots,"title",{},()=>[b(h(e.title),1)])])):r("",!0),k("div",C,[s(e.$slots,"default")]),n(a)?(o(),t("div",{key:1,class:"collaspe absolute bottom-0 w-full cursor-pointer from-transparent to-[var(--g-container-bg)] bg-gradient-to-b pb-2 pt-10 text-center",onClick:c},[v(p,{name:"ep:arrow-down",class:"text-xl op-30 transition-opacity hover:op-100"})])):r("",!0)],6)}}});export{V as _};
