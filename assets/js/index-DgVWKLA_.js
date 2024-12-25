
/**
 * 由 MrZhang 提供技术支持
 * Powered by elegant-admin
 * Github https://github.com/zhangyao1990/elegant-admin
 */

import{u as f}from"./vue-router-B53joON4.js";import{d as p}from"./dayjs-DHZ_rfNz.js";import u from"./AgeRatioChart-BQ-bykOT.js";import _ from"./AnnualUseChart-tfMGVzhv.js";import A from"./ChinaMapChart-IfHQEnWO.js";import g from"./HotPlateChart-Dt1SwY7P.js";import C from"./MaleFemaleRatioChart-budR8802.js";import x from"./OverNext30Chart-Dl9BwN4_.js";import w from"./PlatformSourceChart-D-9a0Ejq.js";import R from"./RealTimeAccessChart-BaLKrc9E.js";import{d as Y,r as v,o as D,v as E,a as I,c as M,f as t,k as h,Z as k,_ as e}from"./@vue-B5ZJ3lyG.js";import{_ as Z}from"./vue-esign-CYl9_Ryz.js";import"./@imengyu-CEcZjhxx.js";import"./vue-DvVlWPqX.js";import"./useEcharts-l6FO42gZ.js";import"./echarts-C8GbbMgb.js";import"./zrender-1eEQZOJv.js";import"./tslib-BDyQ-Jie.js";import"./echarts-liquidfill-D8sdabG-.js";import"./@vueuse-D9pgrdqz.js";import"./nprogress-CK9xi7fq.js";import"./index-qeCTDZwl.js";import"./vite-plugin-fake-server-4rIte7rE.js";import"./mockjs-CyY_Wk_H.js";import"./floating-vue-AocVffS4.js";import"./@floating-ui-DiM7Jq06.js";import"./vue-m-message-CaZYo5LC.js";import"./overlayscrollbars-DIcyBJd7.js";import"./@iconify-BcJ8VpTk.js";import"./overlayscrollbars-vue-CwvYLriB.js";import"./@headlessui-Cgia3ZxR.js";import"./mitt-DJ65BbbF.js";import"./crypto-js-0jcLrwUI.js";import"./lodash-es-Cgwu3vQX.js";import"./pinia-C6gN_FJk.js";import"./vue-demi-Dq6ymT-8.js";import"./hotkeys-js-BfWqkGRU.js";import"./element-plus-iUOJk6xm.js";import"./@element-plus-DlsPF3Ud.js";import"./@sxzz-D9SI2xQl.js";import"./@ctrl-r5W6hzzQ.js";import"./async-validator-CRbnkQr6.js";import"./memoize-one-BdPwpGay.js";import"./normalize-wheel-es-B6fDCfyv.js";import"./vue-i18n-BoS7Exf_.js";import"./@intlify-CEEhciFb.js";import"./colord-CrBFWQzZ.js";import"./monaco-editor-1i8roCpp.js";import"./path-browserify-CaPOtSVJ.js";import"./axios-CRnBnh7r.js";const r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAAAHCAYAAACx3+twAAAAAXNSR0IArs4c6QAAAZ9JREFUSEvNlb9LHFEQxz/fE4MXsJEUVhaCndcKqSxVUspZHeS0zIGChYIEXcXGxuLQgzSiohD8Ucr5BwRBWxvRzkJSCXqFsuqOuIrE7O5bDQfxtW/m+2bmzWdGVqWIUUFkSTrGKRny6uXgbxPboIFrZhHjgBwaBxh5feX0Txubp4VG1hB9ib6PF8v4fNMoV5EYZshhrAM5x/s+YoxJyhKWZBcmYDvkEOsoRTDDGD3xgrZGH0GYWIsjqHMyFFSg+qIohlhgAjENNDj8Dwno1wgnkaLMk+Uy/NhiSmGrGAV5nMfZPf+o7ZHlggqkCBrVMKneqKCt0IZYRXQ7gjKMOZqY0gD+i8JU6CbgJ9Dq8K8hhlViOc7GPIoozMPd8ZCXF+34SIv/d4QWaSVgqQ4IbQMdb0UolvknhLZRiuB7RmiOZq4ovxWhxCFov2imRrkOCG0iul6B0HcNcPePCA2pxFY9EEreCk/qtksXxkfnoAo40xeOYwPa4APXfEaODfTgeMuRBvkdGZY/+IRPZ8qghBv24zZQuDQ82oG2FA1fHnv3y0m/CFsHcS4AAAAASUVORK5CYII=",B={class:"dataScreen-container"},H={class:"dataScreen-header"},b={class:"header-lf"},G={class:"header-ri"},q={class:"header-time"},F={class:"dataScreen-main"},U={class:"dataScreen-lf"},V={class:"dataScreen-top"},y={class:"dataScreen-main-chart"},O={class:"dataScreen-center"},P={class:"dataScreen-main-chart"},N={class:"dataScreen-bottom"},Q={class:"dataScreen-main-chart"},X={class:"dataScreen-ct"},z={class:"dataScreen-map"},K={class:"dataScreen-cb"},W={class:"dataScreen-main-chart"},j={class:"dataScreen-rg"},J={class:"dataScreen-top"},L={class:"dataScreen-main-chart"},T={class:"dataScreen-center"},$={class:"dataScreen-main-chart"},tt={class:"dataScreen-bottom"},at={class:"dataScreen-main-chart"},et=Y({name:"DataScreen",__name:"index",setup(st){const S=f(),s=v(null);D(()=>{s.value&&(s.value.style.transform=`scale(${n()}) translate(-50%, -50%)`,s.value.style.width="1920px",s.value.style.height="1080px"),window.addEventListener("resize",o)});function o(){s.value&&(s.value.style.transform=`scale(${n()}) translate(-50%, -50%)`)}function n(m=1920,a=1080){let i=window.innerWidth/m,c=window.innerHeight/a;return i<c?i:c}let d=null,l=v(p().format("YYYY年MM月DD HH:mm:ss"));return d=setInterval(()=>{l.value=p().format("YYYY年MM月DD HH:mm:ss")},1e3),E(()=>{window.removeEventListener("resize",o),clearInterval(d)}),(m,a)=>(I(),M("div",B,[t("div",{ref_key:"dataScreenRef",ref:s,class:"dataScreen-content"},[t("div",H,[t("div",b,[t("span",{class:"header-screening",onClick:a[0]||(a[0]=i=>h(S).push({path:"/dashboard"}))},"首页")]),a[2]||(a[2]=t("div",{class:"header-ct"},[t("div",{class:"header-ct-title"},[t("span",null,"智慧旅游可视化大数据展示平台"),t("div",{class:"header-ct-warning"}," 平台高峰预警信息（2条） ")])],-1)),t("div",G,[a[1]||(a[1]=t("span",{class:"header-download"},"统计报告",-1)),t("span",q,"当前时间："+k(h(l)),1)])]),t("div",F,[t("div",U,[t("div",V,[a[3]||(a[3]=t("div",{class:"dataScreen-main-title"},[t("span",null,"实时游客统计"),t("img",{src:r,alt:""})],-1)),t("div",y,[e(R)])]),t("div",O,[a[4]||(a[4]=t("div",{class:"dataScreen-main-title"},[t("span",null,"男女比例"),t("img",{src:r,alt:""})],-1)),t("div",P,[e(C)])]),t("div",N,[a[5]||(a[5]=t("div",{class:"dataScreen-main-title"},[t("span",null,"年龄比例"),t("img",{src:r,alt:""})],-1)),t("div",Q,[e(u)])])]),t("div",X,[t("div",z,[a[6]||(a[6]=t("div",{class:"dataScreen-map-title"}," 景区实时客流量 ",-1)),e(A)]),t("div",K,[a[7]||(a[7]=t("div",{class:"dataScreen-main-title"},[t("span",null,"未来30天游客量趋势图"),t("img",{src:r,alt:""})],-1)),t("div",W,[e(x)])])]),t("div",j,[t("div",J,[a[8]||(a[8]=t("div",{class:"dataScreen-main-title"},[t("span",null,"热门景区排行"),t("img",{src:r,alt:""})],-1)),t("div",L,[e(g)])]),t("div",T,[a[9]||(a[9]=t("div",{class:"dataScreen-main-title"},[t("span",null,"年度游客量对比"),t("img",{src:r,alt:""})],-1)),t("div",$,[e(_)])]),t("div",tt,[a[10]||(a[10]=t("div",{class:"dataScreen-main-title"},[t("span",null,"预约渠道数据统计"),t("img",{src:r,alt:""})],-1)),t("div",at,[e(w)])])])])],512)]))}}),ta=Z(et,[["__scopeId","data-v-0fd84168"]]);export{ta as default};
