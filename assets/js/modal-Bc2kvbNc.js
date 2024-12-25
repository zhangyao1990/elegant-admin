
/**
 * 由 MrZhang 提供技术支持
 * Powered by elegant-admin
 * Github https://github.com/zhangyao1990/elegant-admin
 */

import{q as c,I as f}from"./element-plus-iUOJk6xm.js";import{d as h,j as o,N as a}from"./@vue-B5ZJ3lyG.js";import"./lodash-es-Cgwu3vQX.js";import"./@vueuse-D9pgrdqz.js";import"./nprogress-CK9xi7fq.js";import"./@imengyu-CEcZjhxx.js";import"./vue-DvVlWPqX.js";import"./@element-plus-DlsPF3Ud.js";import"./@sxzz-D9SI2xQl.js";import"./@ctrl-r5W6hzzQ.js";import"./dayjs-DHZ_rfNz.js";import"./async-validator-CRbnkQr6.js";import"./memoize-one-BdPwpGay.js";import"./normalize-wheel-es-B6fDCfyv.js";import"./@floating-ui-DiM7Jq06.js";const D=h({props:{componentSchema:{type:Object,default:()=>({})}},emits:["ok","close","update:modelValue"],setup(m,{attrs:u,slots:t,emit:l}){return()=>{var i;const e={...m.componentSchema,...u,title:((i=m.componentSchema)==null?void 0:i.label)??"",class:"elegant-modal-el elegant-modal-main","destroy-on-close":!0,"onUpdate:modelValue":d},r=e.children??[];delete e.children;let n=null;r.length?n=()=>r.map(p=>a(t,"node",{componentSchema:p})):n=()=>[a(t,"default")];function s(){l("ok")}function d(p){l("update:modelValue",!1),l("close")}return o(f,e,{default:()=>[a(t,"edit-node",{},n),o("div",{class:"elegant-modal-footer"},[o(c,{onClick:d},{default:()=>"关闭"}),o(c,{type:"primary",onClick:s},{default:()=>e.okText??"确定"})])]})}}});export{D as default};
