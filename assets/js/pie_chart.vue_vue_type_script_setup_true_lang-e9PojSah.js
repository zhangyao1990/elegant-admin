
/**
 * 由 MrZhang 提供技术支持
 * Powered by elegant-admin
 * Github https://github.com/zhangyao1990/elegant-admin
 */

import{u as f}from"./useEcharts-l6FO42gZ.js";import{u as d}from"./index-qeCTDZwl.js";import{d as m,b as t,ai as u,a as p,S as h,U as _,f as b}from"./@vue-B5ZJ3lyG.js";const y=m({name:"PieChart",__name:"pie_chart",setup(v){const o=d(),a=t(()=>o.settings.app.colorScheme),r=t(()=>a.value==="dark"?"#ffffff":"#333333"),{domRef:s,updateOptions:n}=f(()=>({tooltip:{trigger:"item"},title:{text:"饼图 示例",textStyle:{fontSize:18,fontWeight:"bolder",color:r.value}},legend:{bottom:"1%",left:"center",itemStyle:{borderWidth:0}},series:[{color:["#5da8ff","#8e9dff","#fedc69","#26deca"],name:"作息安排",type:"pie",radius:["45%","75%"],avoidLabelOverlap:!1,itemStyle:{borderRadius:10,borderColor:"#fff",borderWidth:1},label:{show:!1,position:"center",fontSize:14,color:"inherit"},emphasis:{label:{show:!0,fontSize:"12"}},labelLine:{show:!1},data:[]}]}));async function i(){await new Promise(e=>{setTimeout(e,1e3)}),n(e=>(e.series[0].data=[{name:"学习",value:20},{name:"娱乐",value:10},{name:"工作",value:40},{name:"休息",value:30}],e))}async function l(){i()}return l(),(e,S)=>{const c=u("el-card");return p(),h(c,{class:"rounded-10px"},{default:_(()=>[b("div",{ref_key:"domRef",ref:s,class:"h-360px overflow-hidden"},null,512)]),_:1})}}});export{y as _};
