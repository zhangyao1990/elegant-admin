
/**
 * 由 MrZhang 提供技术支持
 * Powered by elegant-admin
 * Github https://github.com/zhangyao1990/elegant-admin
 */

import c from"./ExecutionListeners-DDiw2FTE.js";import{d as p,bM as m,ai as a,a as _,S as d,U as o,_ as n}from"./@vue-B5ZJ3lyG.js";const x=p({__name:"EndPanel",props:{activeData:{},activeDataModifiers:{}},emits:["update:activeData"],setup(i){const e=m(i,"activeData");return(u,t)=>{const s=a("el-form-item"),l=a("el-form");return _(),d(l,{"label-position":"top","label-width":"90px"},{default:o(()=>[n(s,{prop:"executionListeners",label:"执行监听器"},{default:o(()=>[n(c,{"active-data":e.value,"onUpdate:activeData":t[0]||(t[0]=r=>e.value=r)},null,8,["active-data"])]),_:1})]),_:1})}}});export{x as _};
