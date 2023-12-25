
	/**
 * 	由 智慧网络医院 提供技术支持
 */
	
var p=Object.defineProperty,i=Object.defineProperties;var m=Object.getOwnPropertyDescriptors;var n=Object.getOwnPropertySymbols;var _=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable;var a=(o,e,t)=>e in o?p(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,r=(o,e)=>{for(var t in e||(e={}))_.call(e,t)&&a(o,t,e[t]);if(n)for(var t of n(e))d.call(e,t)&&a(o,t,e[t]);return o},c=(o,e)=>i(o,m(e));import{d as l,b as f,c as h,ab as u}from"./element-plus-vue-vendor-73eca4b6.js";import{B as k}from"./index-5246f43c.js";const v={class:"inline mr-3"},B=l({name:"Auth"}),C=l(c(r({},B),{props:{value:{}},setup(o){const e=o;function t(){return k().auth(e.value)}return(s,b)=>(f(),h("div",v,[t()?u(s.$slots,"default",{key:0}):u(s.$slots,"no-auth",{key:1})]))}}));export{C as _};
