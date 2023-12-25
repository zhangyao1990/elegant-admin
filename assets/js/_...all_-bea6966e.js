
	/**
 * 	由 智慧网络医院 提供技术支持
 */
	
import{_ as l}from"./index-acb0470a.js";import{d as u,r as i,o as d,a as p,b as v,c as m,e as n,Z as t,w as f,f as h,t as w,u as I,a4 as x,a5 as y}from"./element-plus-vue-vendor-73eca4b6.js";import{a as B,o as g,_ as k}from"./index-5246f43c.js";import"./lodash-es-vendor-21d271af.js";import"./tinymce-vendor-835bc827.js";const s=o=>(x("data-v-18181776"),o=o(),y(),o),C={class:"notfound"},S={class:"content"},b=s(()=>t("h1",null,"404",-1)),N=s(()=>t("div",{class:"desc"},"抱歉，你访问的页面不存在",-1)),V=u({__name:"[...all]",setup(o){const _=B(),e=i({inter:null,countdown:5});g(()=>{e.value.inter&&clearInterval(e.value.inter)}),d(()=>{e.value.inter=setInterval(()=>{e.value.countdown--,e.value.countdown===0&&(e.value.inter&&clearInterval(e.value.inter),a())},1e3)});function a(){_.push("/")}return(R,D)=>{const c=l,r=p("el-button");return v(),m("div",C,[n(c,{name:"local-404",class:"icon"}),t("div",S,[b,N,n(r,{type:"primary",onClick:a},{default:f(()=>[h(w(I(e).countdown)+" 秒后，返回首页 ",1)]),_:1})])])}}});const $=k(V,[["__scopeId","data-v-18181776"]]);export{$ as default};
