
/**
 * 由 MrZhang 提供技术支持
 * Powered by elegant-admin
 * Github https://github.com/zhangyao1990/elegant-admin
 */

import{_ as d}from"./index.vue_vue_type_script_setup_true_lang-D6S2Ky_O.js";import{b}from"./monitor-CAtu6L2M.js";import{d as f,r,l as o,_ as i,ai as h,a as _,c as g,f as v,k as a}from"./@vue-B5ZJ3lyG.js";import"./@element-plus-DlsPF3Ud.js";import"./sortablejs-BWWsmqBL.js";import"./@imengyu-CEcZjhxx.js";import"./vue-DvVlWPqX.js";import"./vue-esign-CYl9_Ryz.js";import"./index-qeCTDZwl.js";import"./vite-plugin-fake-server-4rIte7rE.js";import"./mockjs-CyY_Wk_H.js";import"./floating-vue-AocVffS4.js";import"./@floating-ui-DiM7Jq06.js";import"./vue-m-message-CaZYo5LC.js";import"./overlayscrollbars-DIcyBJd7.js";import"./@iconify-BcJ8VpTk.js";import"./overlayscrollbars-vue-CwvYLriB.js";import"./@headlessui-Cgia3ZxR.js";import"./mitt-DJ65BbbF.js";import"./crypto-js-0jcLrwUI.js";import"./lodash-es-Cgwu3vQX.js";import"./pinia-C6gN_FJk.js";import"./vue-demi-Dq6ymT-8.js";import"./vue-router-B53joON4.js";import"./hotkeys-js-BfWqkGRU.js";import"./element-plus-iUOJk6xm.js";import"./@vueuse-D9pgrdqz.js";import"./nprogress-CK9xi7fq.js";import"./@sxzz-D9SI2xQl.js";import"./@ctrl-r5W6hzzQ.js";import"./dayjs-DHZ_rfNz.js";import"./async-validator-CRbnkQr6.js";import"./memoize-one-BdPwpGay.js";import"./normalize-wheel-es-B6fDCfyv.js";import"./vue-i18n-BoS7Exf_.js";import"./@intlify-CEEhciFb.js";import"./colord-CrBFWQzZ.js";import"./monaco-editor-1i8roCpp.js";import"./path-browserify-CaPOtSVJ.js";import"./axios-CRnBnh7r.js";import"./GridItem.vue_vue_type_script_setup_true_lang-DQ62nwkd.js";const C={class:"table-container"},S={class:"table-box"},nt=f({name:"OperationLogs",__name:"index",setup(W){const p=r(),m=o({});function l(t){return{list:t&&t.records||[],total:t&&t.total||0}}const s=r({});function n(t){s.value=t;let e={...t};return b(e)}const c=o([{type:"index",label:"排序",width:80},{prop:"name",label:"操作人员",minWidth:100,search:{el:"input"}},{prop:"module",label:"所属模块",minWidth:100},{prop:"summary",label:"操作概要",minWidth:100},{prop:"ip",label:"操作IP",minWidth:100},{prop:"address",label:"操作地点",minWidth:100},{prop:"system",label:"操作系统",minWidth:100},{prop:"browser",label:"流览器类型",minWidth:100},{prop:"status",label:"操作状态",enum:[{label:"成功",value:"SUCCESS"},{label:"失败",value:"FAIL"}],fieldNames:{label:"label",value:"value"},minWidth:100,search:{el:"tree-select",props:{filterable:!0}},render:t=>i(h("el-tag"),{type:t.row.status==="SUCCESS"?"success":"danger"},{default:()=>[t.row.status==="SUCCESS"?"成功":"失败"]})},{prop:"operatingTime",label:"操作时间",minWidth:100,search:{el:"date-picker",span:1,props:{type:"datetimerange",valueFormat:"YYYY-MM-DD HH:mm:ss"}}}]);return(t,e)=>{const u=d;return _(),g("div",C,[v("div",S,[i(u,{ref_key:"proTableRef",ref:p,border:!1,title:"操作日志","request-api":n,columns:a(c),"data-callback":l,"init-param":a(m),"highlight-current-row":""},null,8,["columns","init-param"])])])}}});export{nt as default};