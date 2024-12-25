
/**
 * 由 MrZhang 提供技术支持
 * Powered by elegant-admin
 * Github https://github.com/zhangyao1990/elegant-admin
 */

import{G as f,q as g,a as h}from"./element-plus-iUOJk6xm.js";import{d as v,r as F,w as a,b as E,j as o,n as x}from"./@vue-B5ZJ3lyG.js";import"./lodash-es-Cgwu3vQX.js";import"./@vueuse-D9pgrdqz.js";import"./nprogress-CK9xi7fq.js";import"./@imengyu-CEcZjhxx.js";import"./vue-DvVlWPqX.js";import"./@element-plus-DlsPF3Ud.js";import"./@sxzz-D9SI2xQl.js";import"./@ctrl-r5W6hzzQ.js";import"./dayjs-DHZ_rfNz.js";import"./async-validator-CRbnkQr6.js";import"./memoize-one-BdPwpGay.js";import"./normalize-wheel-es-B6fDCfyv.js";import"./@floating-ui-DiM7Jq06.js";const M=v({props:{modelValue:{type:Array,default:()=>[]}},emits:["update:modelValue"],setup(r,{emit:u,attrs:p}){const l=F([]);a(l,e=>{u("update:modelValue",e)}),a(()=>r.modelValue,e=>{if(e!=null&&e.length>0&&l.value!=null){if(l.value===e)return;l.value.length=0,l.value.push(...e)}},{deep:!0,immediate:!0});const n=(e,t)=>{x(()=>{l.value=t})},i=e=>{},s=(e,t,c)=>{},d=(e,t,c)=>{h.error("上传失败")},m=E(()=>({...p,"file-list":l.value,onBeforeUpload:i,onChange:n,onSuccess:s,onError:d}));return()=>o("div",null,{default:()=>[o(f,m.value,{default:()=>[o(g,{},{default:()=>[o("span",{class:"icon--elegant icon--elegant--cloud-upload-outlined text-lg",style:{"margin-right":"2px"}}),o("span",null,{default:()=>"上传文件"})]})]})]})}});export{M as default};
