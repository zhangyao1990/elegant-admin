
/**
 * 由 MrZhang 提供技术支持
 * Powered by elegant-admin
 * Github https://github.com/zhangyao1990/elegant-admin
 */

import{e as o,R as d}from"./monaco-editor-1i8roCpp.js";import{m as g}from"./index-CN3V1Hei.js";import{d as h,r as v,o as V,w as _,n as T,a as b,c as y}from"./@vue-B5ZJ3lyG.js";import{_ as x}from"./vue-esign-CYl9_Ryz.js";import"./index-qeCTDZwl.js";import"./vite-plugin-fake-server-4rIte7rE.js";import"./mockjs-CyY_Wk_H.js";import"./@imengyu-CEcZjhxx.js";import"./vue-DvVlWPqX.js";import"./floating-vue-AocVffS4.js";import"./@floating-ui-DiM7Jq06.js";import"./vue-m-message-CaZYo5LC.js";import"./overlayscrollbars-DIcyBJd7.js";import"./@iconify-BcJ8VpTk.js";import"./overlayscrollbars-vue-CwvYLriB.js";import"./@headlessui-Cgia3ZxR.js";import"./mitt-DJ65BbbF.js";import"./crypto-js-0jcLrwUI.js";import"./lodash-es-Cgwu3vQX.js";import"./pinia-C6gN_FJk.js";import"./vue-demi-Dq6ymT-8.js";import"./vue-router-B53joON4.js";import"./hotkeys-js-BfWqkGRU.js";import"./element-plus-iUOJk6xm.js";import"./@vueuse-D9pgrdqz.js";import"./nprogress-CK9xi7fq.js";import"./@element-plus-DlsPF3Ud.js";import"./@sxzz-D9SI2xQl.js";import"./@ctrl-r5W6hzzQ.js";import"./dayjs-DHZ_rfNz.js";import"./async-validator-CRbnkQr6.js";import"./memoize-one-BdPwpGay.js";import"./normalize-wheel-es-B6fDCfyv.js";import"./vue-i18n-BoS7Exf_.js";import"./@intlify-CEEhciFb.js";import"./colord-CrBFWQzZ.js";import"./path-browserify-CaPOtSVJ.js";import"./axios-CRnBnh7r.js";const N=h({__name:"index",props:{language:{default:"json"},readOnly:{type:Boolean,default:!1},valueFormat:{default:"string"},modelValue:{},config:{default:()=>({selectOnLineNumbers:!0,minimap:{enabled:!1}})},lineNumbers:{default:"on"},autoToggleTheme:{type:Boolean},theme:{default:"vs-light"}},emits:["update:modelValue"],setup(m,{expose:u,emit:s}){const r=m,i=s,a=v(null);let e=null;const{isDark:n}=g();function p(){n.value?o.setTheme("vs-dark"):o.setTheme("vs-light")}function f(l){e==null||e.setValue(l||"")}function c(l){const t=e==null?void 0:e.getPosition();t&&(e==null||e.executeEdits("",[{range:new d(t.lineNumber,t.column,t.lineNumber,t.column),text:l}]),e==null||e.setPosition({...t,column:t.column+l.length}),e==null||e.focus())}return V(()=>{e=o.create(a.value,{value:l(),...r.config,language:r.language,readOnly:r.readOnly,lineNumbers:r.lineNumbers,theme:r.theme,scrollBeyondLastLine:!1,scrollbar:{verticalScrollbarSize:10,horizontalScrollbarSize:10},automaticLayout:!0}),r.autoToggleTheme&&_(()=>n.value,()=>{T(()=>p())},{immediate:!0});function l(){return r.valueFormat==="json"&&r.modelValue?JSON.stringify(r.modelValue,null,2):r.modelValue??""}e.onDidChangeModelContent(()=>{const t=e==null?void 0:e.getValue();if(r.valueFormat==="json"&&t){i("update:modelValue",JSON.parse(t));return}i("update:modelValue",t??"")})}),u({setValue:f,insertText:c}),(l,t)=>(b(),y("div",{ref_key:"editContainer",ref:a,class:"elegant-code-editor"},null,512))}}),ue=x(N,[["__scopeId","data-v-ae83df35"]]);export{ue as default};