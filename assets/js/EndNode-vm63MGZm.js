
/**
 * 由 MrZhang 提供技术支持
 * Powered by elegant-admin
 * Github https://github.com/zhangyao1990/elegant-admin
 */

import{d as l,i,r as _,b as p,ai as f,a as m,c as u,f as v,_ as x,U as y,Y as N,Z as O}from"./@vue-B5ZJ3lyG.js";import{_ as B}from"./vue-esign-CYl9_Ryz.js";const C={class:"node-box"},h=l({__name:"EndNode",props:{node:{},readOnly:{type:Boolean,default:!1}},emits:["activeNode"],setup(o,{emit:a}){const t=o,n=a,s=i("flowDesign",{readOnly:_(!1)}),c=p(()=>{var e;return((e=s.readOnly)==null?void 0:e.value)||t.readOnly});function d(){c.value||n("activeNode",t.node)}return(e,k)=>{const r=f("el-text");return m(),u("div",C,[v("div",{class:"end-node",onClick:d},[x(r,null,{default:y(()=>[N(O(e.node.name),1)]),_:1})])])}}}),b=B(h,[["__scopeId","data-v-88666a55"]]);export{b as default};
