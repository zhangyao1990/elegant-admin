
/**
 * 由 MrZhang 提供技术支持
 * Powered by elegant-admin
 * Github https://github.com/zhangyao1990/elegant-admin
 */

import{d as i,l as p,o as d,ai as f,a as m,S as _,U as u,f as o,Z as g,k as y}from"./@vue-B5ZJ3lyG.js";import{_ as v}from"./vue-esign-CYl9_Ryz.js";const x={class:"flex-center",style:{gap:"4px","grid-gap":"4px"}},h=i({__name:"RoleTag",props:{id:{},type:{default:"info"},closable:{type:Boolean,default:!1}},emits:["close"],setup(a,{emit:t}){const e=a,s=t;let n=p({id:void 0,name:void 0});d(()=>{if(!e.name)throw new Error("username is required")});function l(){s("close",e.name)}return(r,b)=>{const c=f("el-tag");return m(),_(c,{round:"",closable:e.closable,type:r.type,effect:"light",onClose:l},{default:u(()=>[o("div",x,[o("span",null,g(y(n).name),1)])]),_:1},8,["closable","type"])}}}),k=v(h,[["__scopeId","data-v-3387e157"]]);export{k as default};
