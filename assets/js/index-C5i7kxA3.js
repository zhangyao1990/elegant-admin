
/**
 * 由 MrZhang 提供技术支持
 * Powered by elegant-admin
 * Github https://github.com/zhangyao1990/elegant-admin
 */

import{_ as C}from"./index.vue_vue_type_script_setup_true_lang-D6S2Ky_O.js";import{_ as T}from"./index.vue_vue_type_script_setup_true_lang-RB9jAAaE.js";import{T as y,U as P,P as R}from"./@element-plus-DlsPF3Ud.js";import{g as L,a as N,e as $,d as A}from"./sys_resource-gOgi4MrX.js";import{_ as S}from"./resourceDrawer.vue_vue_type_script_setup_true_lang-B1kutZ9_.js";import{u as E}from"./useHandleData-D0EdDaZD.js";import{d as O,r as f,l as _,_ as o,ai as b,a as V,c as W,f as m,U as r,k as l,Y as d}from"./@vue-B5ZJ3lyG.js";import"./sortablejs-BWWsmqBL.js";import"./@imengyu-CEcZjhxx.js";import"./vue-DvVlWPqX.js";import"./vue-esign-CYl9_Ryz.js";import"./index-qeCTDZwl.js";import"./vite-plugin-fake-server-4rIte7rE.js";import"./mockjs-CyY_Wk_H.js";import"./floating-vue-AocVffS4.js";import"./@floating-ui-DiM7Jq06.js";import"./vue-m-message-CaZYo5LC.js";import"./overlayscrollbars-DIcyBJd7.js";import"./@iconify-BcJ8VpTk.js";import"./overlayscrollbars-vue-CwvYLriB.js";import"./@headlessui-Cgia3ZxR.js";import"./mitt-DJ65BbbF.js";import"./crypto-js-0jcLrwUI.js";import"./lodash-es-Cgwu3vQX.js";import"./pinia-C6gN_FJk.js";import"./vue-demi-Dq6ymT-8.js";import"./vue-router-B53joON4.js";import"./hotkeys-js-BfWqkGRU.js";import"./element-plus-iUOJk6xm.js";import"./@vueuse-D9pgrdqz.js";import"./nprogress-CK9xi7fq.js";import"./@sxzz-D9SI2xQl.js";import"./@ctrl-r5W6hzzQ.js";import"./dayjs-DHZ_rfNz.js";import"./async-validator-CRbnkQr6.js";import"./memoize-one-BdPwpGay.js";import"./normalize-wheel-es-B6fDCfyv.js";import"./vue-i18n-BoS7Exf_.js";import"./@intlify-CEEhciFb.js";import"./colord-CrBFWQzZ.js";import"./monaco-editor-1i8roCpp.js";import"./path-browserify-CaPOtSVJ.js";import"./axios-CRnBnh7r.js";import"./GridItem.vue_vue_type_script_setup_true_lang-DQ62nwkd.js";const B={class:"table-container"},D={class:"table-box"},H={class:"flex"},U={class:"flex flex-wrap justify-center"},Se=O({name:"ResourceList",__name:"index",setup(j){const s=f(),v=_({});function w(e){return{list:e&&e.records||[],total:e&&e.total||0}}function h(e){let t={...e};return L(t)}const k=_([{type:"index",label:"排序",width:80},{prop:"name",label:"资源名称",minWidth:100,search:{el:"input"}},{prop:"method",label:"API方法类型",minWidth:100},{prop:"openStatus",label:"用户状态",enum:[{label:"启用",value:"OPEN"},{label:"停用",value:"CLOSE"}],fieldNames:{label:"label",value:"value"},minWidth:100,search:{el:"tree-select",props:{filterable:!0}},render:e=>o(b("el-tag"),{type:e.row.openStatus==="OPEN"?"success":"danger"},{default:()=>[e.row.openStatus==="OPEN"?"启用":"停用"]})},{prop:"sort",label:"排序值",minWidth:120},{prop:"operation",label:"操作",fixed:"right",width:200}]),c=f();function u(e,t){var a,n;const i={title:e==="add"?"新增资源":e==="edit"?"编辑资源":"查看资源",isView:e==="show",row:{...t},api:e==="add"?N:e==="edit"?$:void 0,getTableList:(a=s.value)==null?void 0:a.getTableList};(n=c.value)==null||n.acceptParams(i)}async function g(e){var t;await E(A,{id:e.id},`删除【${e.name}】`),(t=s.value)==null||t.getTableList()}return(e,t)=>{const i=b("el-button"),a=T,n=C;return V(),W("div",B,[m("div",D,[o(n,{ref_key:"proTableRef",ref:s,border:!1,title:"资源管理","request-api":h,columns:l(k),"data-callback":w,"init-param":l(v),"highlight-current-row":""},{tableHeader:r(()=>[m("div",H,[o(a,{value:["add:resource:btn"]},{default:r(()=>[o(i,{type:"primary",icon:l(y),onClick:t[0]||(t[0]=p=>u("add"))},{default:r(()=>t[1]||(t[1]=[d(" 新增资源 ")])),_:1},8,["icon"])]),_:1})])]),operation:r(p=>[m("div",U,[o(a,{class:"mr-5px",value:["edit:resource:btn"]},{default:r(()=>[o(i,{type:"primary",link:"",icon:l(P),onClick:x=>u("edit",p.row)},{default:r(()=>t[2]||(t[2]=[d(" 编辑 ")])),_:2},1032,["icon","onClick"])]),_:2},1024),o(a,{class:"mr-5px",value:["del:resource:btn"]},{default:r(()=>[o(i,{type:"danger",link:"",icon:l(R),onClick:x=>g(p.row)},{default:r(()=>t[3]||(t[3]=[d(" 删除 ")])),_:2},1032,["icon","onClick"])]),_:2},1024)])]),_:1},8,["columns","init-param"]),o(S,{ref_key:"drawerRef",ref:c},null,512)])])}}});export{Se as default};