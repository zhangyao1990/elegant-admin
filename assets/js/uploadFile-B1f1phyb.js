
/**
 * 由 MrZhang 提供技术支持
 * Powered by elegant-admin
 * Github https://github.com/zhangyao1990/elegant-admin
 */

import{y as f,m as g,a as h}from"./element-plus-BcpS9Xph.js";import{d as v,r as F,w as a,b as E,j as o,n as x}from"./@vue-BQ0xNElQ.js";import"./lodash-es-l8Yk8yFo.js";import"./@vueuse-Z_Tu67E4.js";import"./nprogress-CKQGnqKE.js";import"./@imengyu-BJzol3z-.js";import"./vue-CfajzGni.js";import"./@element-plus-C2zjs0uE.js";import"./@sxzz-D9SI2xQl.js";import"./@ctrl-r5W6hzzQ.js";import"./dayjs-hU0aavi8.js";import"./async-validator-CRbnkQr6.js";import"./memoize-one-BdPwpGay.js";import"./normalize-wheel-es-B6fDCfyv.js";import"./@floating-ui-DiM7Jq06.js";const T=v({props:{modelValue:{type:Array,default:()=>[]}},emits:["update:modelValue"],setup(r,{emit:u,attrs:p}){const l=F([]);a(l,e=>{u("update:modelValue",e)}),a(()=>r.modelValue,e=>{if(e!=null&&e.length>0&&l.value!=null){if(l.value===e)return;l.value.length=0,l.value.push(...e)}},{deep:!0,immediate:!0});const n=(e,t)=>{x(()=>{l.value=t})},i=e=>{},s=(e,t,c)=>{},d=(e,t,c)=>{h.error("上传失败")},m=E(()=>({...p,"file-list":l.value,onBeforeUpload:i,onChange:n,onSuccess:s,onError:d}));return()=>o("div",null,{default:()=>[o(f,m.value,{default:()=>[o(g,{},{default:()=>[o("span",{class:"icon--elegant icon--elegant--cloud-upload-outlined text-lg",style:{"margin-right":"2px"}}),o("span",null,{default:()=>"上传文件"})]})]})]})}});export{T as default};
