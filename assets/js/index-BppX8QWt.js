
/**
 * 由 MrZhang 提供技术支持
 * Powered by elegant-admin
 * Github https://github.com/zhangyao1990/elegant-admin
 */

import{d as $,bM as d,r as b,ai as m,a as u,S as c,U as p,f,q as y,V as _,_ as v,$ as V,k as r,Y as B,Z as U,W as M}from"./@vue-B5ZJ3lyG.js";import{U as S}from"./@element-plus-DlsPF3Ud.js";import N from"./StartPanel-DjOOvegT.js";import g from"./ApprovalPanel-DwytY9C_.js";import q from"./CcPanel-DmBNRnZ-.js";import{_ as z}from"./TimerPanel.vue_vue_type_script_setup_true_lang-CwZuTETV.js";import{_ as I}from"./NotifyPanel.vue_vue_type_script_setup_true_lang-BUXNDz5c.js";import{_ as O}from"./ConditionPanel.vue_vue_type_script_setup_true_lang-vj94MXHE.js";import{_ as h}from"./EndPanel.vue_vue_type_script_setup_true_lang-BZ05Ww9G.js";import{C as A}from"./element-plus-iUOJk6xm.js";import{_ as P}from"./vue-esign-CYl9_Ryz.js";import"./ExecutionListeners-DDiw2FTE.js";import"./index-qeCTDZwl.js";import"./vite-plugin-fake-server-4rIte7rE.js";import"./mockjs-CyY_Wk_H.js";import"./@imengyu-CEcZjhxx.js";import"./vue-DvVlWPqX.js";import"./floating-vue-AocVffS4.js";import"./@floating-ui-DiM7Jq06.js";import"./vue-m-message-CaZYo5LC.js";import"./overlayscrollbars-DIcyBJd7.js";import"./@iconify-BcJ8VpTk.js";import"./overlayscrollbars-vue-CwvYLriB.js";import"./@headlessui-Cgia3ZxR.js";import"./mitt-DJ65BbbF.js";import"./crypto-js-0jcLrwUI.js";import"./lodash-es-Cgwu3vQX.js";import"./pinia-C6gN_FJk.js";import"./vue-demi-Dq6ymT-8.js";import"./vue-router-B53joON4.js";import"./hotkeys-js-BfWqkGRU.js";import"./vue-i18n-BoS7Exf_.js";import"./@intlify-CEEhciFb.js";import"./colord-CrBFWQzZ.js";import"./monaco-editor-1i8roCpp.js";import"./path-browserify-CaPOtSVJ.js";import"./axios-CRnBnh7r.js";import"./@vueuse-D9pgrdqz.js";import"./nprogress-CK9xi7fq.js";import"./@sxzz-D9SI2xQl.js";import"./@ctrl-r5W6hzzQ.js";import"./dayjs-DHZ_rfNz.js";import"./async-validator-CRbnkQr6.js";import"./memoize-one-BdPwpGay.js";import"./normalize-wheel-es-B6fDCfyv.js";import"./index-DCl_rd1q.js";import"./UserTag-wJe9SfQr.js";import"./UserPicker-xx7XSXa5.js";import"./sys_user-rXWpRg4F.js";import"./AssigneePanel.vue_vue_type_script_setup_true_lang-DK6I14do.js";import"./index-bQqCd7I9.js";import"./RoleTag-BaAFCPzf.js";import"./RolePicker-CL6w3CbS.js";import"./sys_role-CiNVMn25.js";import"./TaskListeners-DUaA8Id2.js";import"./index-c4LDtQjF.js";import"./Trigger.vue_vue_type_script_setup_true_lang-C_oW-5cy.js";import"./Operator-CoXpKcBT.js";const T=["id"],W={class:"title-edit"},Y=$({__name:"index",props:{activeData:{},activeDataModifiers:{},modelValue:{type:Boolean,required:!0},modelModifiers:{}},emits:["update:activeData","update:modelValue"],setup(l){const o=d(l,"activeData"),n=d(l,"modelValue"),C={start:N,approval:g,cc:q,timer:z,notify:I,condition:O,end:h},e=b(!1);function s(){e.value&&(e.value=!1)}return(Z,t)=>{const D=m("el-input"),k=m("el-link"),x=m("el-drawer");return u(),c(x,{modelValue:n.value,"onUpdate:modelValue":t[3]||(t[3]=i=>n.value=i),size:"60%"},{header:p(({titleId:i,titleClass:w})=>[f("div",{id:i,class:y(w)},[f("div",W,[_(v(D,{modelValue:o.value.name,"onUpdate:modelValue":t[0]||(t[0]=a=>o.value.name=a),maxlength:"30",onBlur:s},null,8,["modelValue"]),[[V,r(e)],[r(A),s]]),_(v(k,{icon:r(S),onClick:t[1]||(t[1]=a=>e.value=!0)},{default:p(()=>{var a;return[B(U(((a=o.value)==null?void 0:a.name)||"节点配置"),1)]}),_:1},8,["icon"]),[[V,!r(e)]])])],10,T)]),default:p(()=>[(u(),c(M(C[o.value.type]),{"active-data":o.value,"onUpdate:activeData":t[2]||(t[2]=i=>o.value=i)},null,40,["active-data"]))]),_:1},8,["modelValue"])}}}),Ht=P(Y,[["__scopeId","data-v-bdeb2fb3"]]);export{Ht as default};