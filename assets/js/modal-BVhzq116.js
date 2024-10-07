
/**
 * 由 MrZhang 提供技术支持
 * Powered by elegant-admin
 * Github https://github.com/zhangyao1990/elegant-admin
 */

import{m as c,B as f}from"./element-plus-BcpS9Xph.js";import{d as h,j as o,S as a}from"./@vue-BQ0xNElQ.js";import"./lodash-es-l8Yk8yFo.js";import"./@vueuse-Z_Tu67E4.js";import"./nprogress-CKQGnqKE.js";import"./@imengyu-BJzol3z-.js";import"./vue-CfajzGni.js";import"./@element-plus-C2zjs0uE.js";import"./@sxzz-D9SI2xQl.js";import"./@ctrl-r5W6hzzQ.js";import"./dayjs-hU0aavi8.js";import"./async-validator-CRbnkQr6.js";import"./memoize-one-BdPwpGay.js";import"./normalize-wheel-es-B6fDCfyv.js";import"./@floating-ui-DiM7Jq06.js";const T=h({props:{componentSchema:{type:Object,default:()=>({})}},emits:["ok","close","update:modelValue"],setup(m,{attrs:u,slots:t,emit:l}){return()=>{var i;const e={...m.componentSchema,...u,title:((i=m.componentSchema)==null?void 0:i.label)??"",class:"elegant-modal-el elegant-modal-main","destroy-on-close":!0,"onUpdate:modelValue":d},r=e.children??[];delete e.children;let n=null;r.length?n=()=>r.map(p=>a(t,"node",{componentSchema:p})):n=()=>[a(t,"default")];function s(){l("ok")}function d(p){l("update:modelValue",!1),l("close")}return o(f,e,{default:()=>[a(t,"edit-node",{},n),o("div",{class:"elegant-modal-footer"},[o(c,{onClick:d},{default:()=>"关闭"}),o(c,{type:"primary",onClick:s},{default:()=>e.okText??"确定"})])]})}}});export{T as default};
