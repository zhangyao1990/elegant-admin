
/**
 * 由 MrZhang 提供技术支持
 * Powered by elegant-admin
 * Github https://github.com/zhangyao1990/elegant-admin
 */

import{_ as x}from"./index.vue_vue_type_script_setup_true_lang-IWpKdA7_.js";import{_ as y}from"./index.vue_vue_type_script_setup_true_lang-BkLPq0py.js";import{_ as v}from"./index-qeCTDZwl.js";import{p as f}from"./print-js-DnqJKmpt.js";import w from"./alert-SKLpZpFb.js";import{d as B,r as E,ai as n,a as k,c as C,_ as o,U as e,f as N,Y as r,k as S}from"./@vue-B5ZJ3lyG.js";import"./vite-plugin-fake-server-4rIte7rE.js";import"./mockjs-CyY_Wk_H.js";import"./@imengyu-CEcZjhxx.js";import"./vue-DvVlWPqX.js";import"./floating-vue-AocVffS4.js";import"./@floating-ui-DiM7Jq06.js";import"./vue-m-message-CaZYo5LC.js";import"./overlayscrollbars-DIcyBJd7.js";import"./@iconify-BcJ8VpTk.js";import"./overlayscrollbars-vue-CwvYLriB.js";import"./@headlessui-Cgia3ZxR.js";import"./mitt-DJ65BbbF.js";import"./crypto-js-0jcLrwUI.js";import"./lodash-es-Cgwu3vQX.js";import"./pinia-C6gN_FJk.js";import"./vue-demi-Dq6ymT-8.js";import"./vue-router-B53joON4.js";import"./hotkeys-js-BfWqkGRU.js";import"./element-plus-iUOJk6xm.js";import"./@vueuse-D9pgrdqz.js";import"./nprogress-CK9xi7fq.js";import"./@element-plus-DlsPF3Ud.js";import"./@sxzz-D9SI2xQl.js";import"./@ctrl-r5W6hzzQ.js";import"./dayjs-DHZ_rfNz.js";import"./async-validator-CRbnkQr6.js";import"./memoize-one-BdPwpGay.js";import"./normalize-wheel-es-B6fDCfyv.js";import"./vue-i18n-BoS7Exf_.js";import"./@intlify-CEEhciFb.js";import"./colord-CrBFWQzZ.js";import"./monaco-editor-1i8roCpp.js";import"./path-browserify-CaPOtSVJ.js";import"./axios-CRnBnh7r.js";import"./vue-esign-CYl9_Ryz.js";const T=""+new URL("../png/login-banner-BXBHY6Bw.png",import.meta.url).href,j={style:{"margin-bottom":"0"}},xt=B({__name:"index",setup($){const a=E([{date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-04",name:"王小虎",address:"上海市普陀区金沙江路 1517 弄"},{date:"2016-05-01",name:"王小虎",address:"上海市普陀区金沙江路 1519 弄"},{date:"2016-05-03",name:"王小虎",address:"上海市普陀区金沙江路 1516 弄"}]);function l(i){i==="json"?f({printable:a.value,header:`<div style="display: flex;flex-direction: column;text-align: center">
                        <h3>测试打印JSON</h3>
                    </div>`,properties:[{field:"date",displayName:"日期",columnSize:"25%"},{field:"name",displayName:"姓名"},{field:"address",displayName:"地址"}],type:"json",gridHeaderStyle:"color: #333333; border: 1px solid #3971A5;",gridStyle:"border: 1px solid #3971A5;"}):i==="image"&&f({printable:[T],type:"image",imageStyle:"width: 100%; margin-bottom: 20px;"})}function _(i){window.open(i,"_blank")}return(i,t)=>{const u=n("ElTag"),b=v,m=n("ElButton"),g=y,p=n("ElTableColumn"),c=n("ElTable"),s=x;return k(),C("div",null,[o(w),o(g,{title:"打印"},{content:e(()=>[N("p",j,[t[4]||(t[4]=r(" 安装命令：")),o(u,null,{default:e(()=>t[3]||(t[3]=[r("pnpm add print-js")])),_:1})])]),default:e(()=>[o(m,{onClick:t[0]||(t[0]=d=>_("https://github.com/crabbly/print.js"))},{icon:e(()=>[o(b,{name:"i-ep:link"})]),default:e(()=>[t[5]||(t[5]=r(" 访问 print.js "))]),_:1})]),_:1}),o(s,{title:"打印JSON",class:"mb-10px"},{default:e(()=>[o(c,{data:S(a),stripe:"",style:{width:"100%",marginBottom:"10px"}},{default:e(()=>[o(p,{prop:"date",label:"日期",width:"180"}),o(p,{prop:"name",label:"姓名",width:"180"}),o(p,{prop:"address",label:"地址"})]),_:1},8,["data"]),o(m,{onClick:t[1]||(t[1]=d=>l("json"))},{default:e(()=>t[6]||(t[6]=[r(" 打印 ")])),_:1})]),_:1}),o(s,{title:"打印图片"},{default:e(()=>[o(m,{class:"mt-10px",onClick:t[2]||(t[2]=d=>l("image"))},{default:e(()=>t[7]||(t[7]=[r(" 打印 ")])),_:1})]),_:1})])}}});export{xt as default};
