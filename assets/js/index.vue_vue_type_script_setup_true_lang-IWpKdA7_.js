
/**
 * 由 MrZhang 提供技术支持
 * Powered by elegant-admin
 * Github https://github.com/zhangyao1990/elegant-admin
 */

import{_ as u}from"./index-qeCTDZwl.js";import{d as f,R as g,r as m,a,c as t,N as s,Y as b,Z as h,X as r,f as k,k as n,_ as v,q as _,O as x}from"./@vue-B5ZJ3lyG.js";const y={key:0,class:"title-container border-b-1 border-b-[var(--g-bg)] border-b-solid px-5 py-4 transition-border-color-300"},C={class:"main-container"},V=f({name:"PageMain",__name:"index",props:{title:{default:""},collaspe:{type:Boolean,default:!1},height:{default:""},background:{default:""},padding:{default:"10px"}},setup(l){const i=l,d=!!g().title,o=m(i.collaspe);function c(){o.value=!1}return(e,S)=>{const p=u;return a(),t("div",{class:_(["page-main relative mx-8px mt-8px flex flex-1 flex-col rounded-8px transition-background-color-300",{"of-hidden":n(o)}]),style:x({height:n(o)?e.height:"",backgroundColor:e.background?e.background:"var(--g-container-bg)",padding:e.padding})},[d||e.title?(a(),t("div",y,[s(e.$slots,"title",{},()=>[b(h(e.title),1)])])):r("",!0),k("div",C,[s(e.$slots,"default")]),n(o)?(a(),t("div",{key:1,class:"collaspe absolute bottom-0 w-full cursor-pointer from-transparent to-[var(--g-container-bg)] bg-gradient-to-b pb-2 pt-10 text-center",onClick:c},[v(p,{name:"ep:arrow-down",class:"text-xl op-30 transition-opacity hover:op-100"})])):r("",!0)],6)}}});export{V as _};
