
/**
 * 由 MrZhang 提供技术支持
 * Powered by elegant-admin
 * Github https://github.com/zhangyao1990/elegant-admin
 */

import{_ as w}from"./index.vue_vue_type_script_setup_true_lang-D6S2Ky_O.js";import{d as _,r as a,l as r,_ as l,ai as f,a as h,S as x,U as s,f as e,k as i}from"./@vue-B5ZJ3lyG.js";const P={class:"h-500px"},g={class:"table-box"},W=_({name:"ProjectNews",__name:"table_statistics",setup(k){function u(){let t=[{id:1,visitCount:5188,turnover:5188,downloadCount:5188,dealCount:5188},{id:2,visitCount:5188,turnover:5188,downloadCount:5188,dealCount:5188},{id:3,visitCount:5188,turnover:5188,downloadCount:5188,dealCount:5188},{id:4,visitCount:5188,turnover:5188,downloadCount:5188,dealCount:5188},{id:5,visitCount:5188,turnover:5188,downloadCount:5188,dealCount:5188},{id:6,visitCount:5188,turnover:5188,downloadCount:5188,dealCount:5188},{id:7,visitCount:5188,turnover:5188,downloadCount:5188,dealCount:5188},{id:8,visitCount:5188,turnover:5188,downloadCount:5188,dealCount:5188},{id:9,visitCount:5188,turnover:5188,downloadCount:5188,dealCount:5188},{id:10,visitCount:5188,turnover:5188,downloadCount:5188,dealCount:5188}];return new Promise(o=>{setTimeout(()=>{o({data:{records:t||[],total:100}})},1e3)})}const d=a(),c=r({});function C(t){return{list:t&&t.records||[],total:t&&t.total||0}}const n=a({});function p(t){n.value=t;let o={...t};return u()}const v=r([{prop:"index",label:"排序",width:80,render:t=>l("span",null,[t.$index+(n.value.pageNum-1)*n.value.pageSize+1])},{prop:"visitCount",label:"访问量",minWidth:100,sortable:!0,search:{el:"input"}},{prop:"turnover",label:"成交额",sortable:!0,minWidth:100},{prop:"downloadCount",label:"下载量",sortable:!0,minWidth:100},{prop:"dealCount",label:"成交量",sortable:!0,minWidth:100}]);return(t,o)=>{const m=w,b=f("ElCard");return h(),x(b,{title:"数据统计",shadow:"hover",class:"rounded-10px"},{header:s(()=>o[0]||(o[0]=[e("div",{class:"flex items-center justify-between"},[e("div",{class:"text-32rpx"}," 数据统计 ")],-1)])),default:s(()=>[e("div",P,[e("div",g,[l(m,{ref_key:"proTableRef",ref:d,"tool-button":!1,"is-show-search":!1,border:!1,title:"资源管理","request-api":p,columns:i(v),"data-callback":C,"init-param":i(c),"highlight-current-row":""},null,8,["columns","init-param"])])])]),_:1})}}});export{W as _};