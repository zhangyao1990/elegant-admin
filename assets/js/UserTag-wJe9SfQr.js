
/**
 * 由 MrZhang 提供技术支持
 * Powered by elegant-admin
 * Github https://github.com/zhangyao1990/elegant-admin
 */

import{g as u,h as _}from"./element-plus-iUOJk6xm.js";import{d as g,o as h,b as y,ai as t,a as v,S as z,U as a,f as s,_ as S,k as b,Y as x,Z as r}from"./@vue-B5ZJ3lyG.js";import{_ as C}from"./vue-esign-CYl9_Ryz.js";import"./lodash-es-Cgwu3vQX.js";import"./@vueuse-D9pgrdqz.js";import"./nprogress-CK9xi7fq.js";import"./@imengyu-CEcZjhxx.js";import"./vue-DvVlWPqX.js";import"./@element-plus-DlsPF3Ud.js";import"./@sxzz-D9SI2xQl.js";import"./@ctrl-r5W6hzzQ.js";import"./dayjs-DHZ_rfNz.js";import"./async-validator-CRbnkQr6.js";import"./memoize-one-BdPwpGay.js";import"./normalize-wheel-es-B6fDCfyv.js";import"./@floating-ui-DiM7Jq06.js";const B={class:"flex-center",style:{gap:"4px","grid-gap":"4px"}},k=g({__name:"UserTag",props:{name:{},type:{default:"info"},closable:{type:Boolean,default:!1}},emits:["close"],setup(n,{emit:p}){const e=n,i=p;h(()=>{if(!e.name)throw new Error("name is required")});const m=u(),l=y(()=>_[m.value||"default"]-12);function c(){i("close",e.name)}return(o,w)=>{const f=t("el-avatar"),d=t("el-tag");return v(),z(d,{round:"",closable:e.closable,type:o.type,effect:"light",onClose:c},{default:a(()=>[s("div",B,[S(f,{size:b(l)},{default:a(()=>[x(r(o.name.charAt(0)),1)]),_:1},8,["size"]),s("span",null,r(o.name),1)])]),_:1},8,["closable","type"])}}}),H=C(k,[["__scopeId","data-v-39e22f3f"]]);export{H as default};
