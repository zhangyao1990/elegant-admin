
/**
 * 由 MrZhang 提供技术支持
 * Powered by elegant-admin
 * Github https://github.com/zhangyao1990/elegant-admin
 */

import{B as p}from"./@vueuse-D9pgrdqz.js";import{d as c,ai as s,a as o,S as n,U as d,c as _,F as f,a8 as V,k as g,E as k}from"./@vue-B5ZJ3lyG.js";const C=c({__name:"Trigger",props:{modelValue:{},options:{},filterRules:{}},emits:["update:modelValue"],setup(r,{emit:u}){const t=r,l=p(t,"modelValue",u);return(v,a)=>{const i=s("el-option"),m=s("el-select");return o(),n(m,{modelValue:g(l),"onUpdate:modelValue":a[0]||(a[0]=e=>k(l)?l.value=e:null),class:"trigger-container",filterable:"",placeholder:"选择字段"},{default:d(()=>[(o(!0),_(f,null,V(t.options,e=>(o(),n(i,{key:e.id,label:e.label,value:e.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])}}});export{C as _};
