
/**
 * 由 MrZhang 提供技术支持
 * Powered by elegant-admin
 * Github https://github.com/zhangyao1990/elegant-admin
 */

import{_ as u}from"./index-CE0IHhcT.js";import{d as f,V as g,r as m,a,c as t,R as s,_ as r,f as b,u as n,a1 as h,m as v,S as k,$ as _,a0 as y}from"./@vue-DJ53MWs5.js";const x={key:0,class:"title-container border-b-1 border-b-[var(--g-bg)] border-b-solid px-5 py-4 transition-border-color-300"},C={class:"main-container"},N=f({name:"PageMain",__name:"index",props:{title:{default:""},collaspe:{type:Boolean,default:!1},height:{default:""},background:{default:""},padding:{default:"10px"}},setup(l){const i=l,d=!!g().title,o=m(i.collaspe);function c(){o.value=!1}return(e,S)=>{const p=u;return a(),t("div",{class:v(["page-main relative mx-8px flex flex-1 flex-col rounded-8px transition-background-color-300",{"of-hidden":n(o)}]),style:k({height:n(o)?e.height:"",backgroundColor:e.background?e.background:"var(--g-container-bg)",padding:e.padding})},[d||e.title?(a(),t("div",x,[s(e.$slots,"title",{},()=>[_(y(e.title),1)])])):r("",!0),b("div",C,[s(e.$slots,"default")]),n(o)?(a(),t("div",{key:1,class:"collaspe absolute bottom-0 w-full cursor-pointer from-transparent to-[var(--g-container-bg)] bg-gradient-to-b pb-2 pt-10 text-center",onClick:c},[h(p,{name:"ep:arrow-down",class:"text-xl op-30 transition-opacity hover:op-100"})])):r("",!0)],6)}}});export{N as _};
