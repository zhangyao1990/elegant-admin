
/**
 * 由 MrZhang 提供技术支持
 * Powered by elegant-admin
 * Github https://github.com/zhangyao1990/elegant-admin
 */

import r from"./index-c4LDtQjF.js";import{d,bM as c,i as f,r as t,a as u,S as m,k as i}from"./@vue-B5ZJ3lyG.js";const _=d({__name:"ConditionPanel",props:{activeData:{},activeDataModifiers:{}},emits:["update:activeData"],setup(l){const e=c(l,"activeData"),{fields:o}=f("flowDesign",{fields:t([])}),s=t([{id:"initiator",name:"UserSelector",type:"formItem",label:"发起人",value:null,readonly:!1,required:!0,hidden:!1,props:{key:void 0,multiple:!1,placeholder:"请选择发起人",class:[],style:{width:"100%"}}}]);return(p,a)=>(u(),m(r,{modelValue:e.value.conditions,"onUpdate:modelValue":a[0]||(a[0]=n=>e.value.conditions=n),"filter-fields":[...i(s),...i(o)]},null,8,["modelValue","filter-fields"]))}});export{_};
