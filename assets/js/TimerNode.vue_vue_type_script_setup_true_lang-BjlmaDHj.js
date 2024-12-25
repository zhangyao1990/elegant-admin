
/**
 * 由 MrZhang 提供技术支持
 * Powered by elegant-admin
 * Github https://github.com/zhangyao1990/elegant-admin
 */

import m from"./Node-DguPqMLY.js";import{d as _,i as g,r as c,g as P,ai as h,a as T,S as v,U as d,_ as w,Y as x,Z as D,k as E,Q as N}from"./@vue-B5ZJ3lyG.js";const B=_({__name:"TimerNode",props:{node:{}},setup(l){const p=l,{nodesError:n}=g("flowDesign",{nodesError:c({})}),t=c(""),u={"PT%sS":"秒","PT%sM":"分钟","PT%sH":"小时","P%sD":"天","P%sW":"周","P%sM":"月"};return P(()=>{const e=[],{id:o,name:s,waitType:a,unit:f,duration:r,timeDate:i}=p.node;a==="date"?(t.value=`等至 ${i||"?"}`,i||e.push({id:o,name:s,message:"未设置等待时间"})):a==="duration"&&(t.value=`等待 ${r} ${u[f]}`,r<=0&&e.push({id:o,name:s,message:"未设置等待时长"})),e.length>0?n.value[o]=e:delete n.value[o]}),(e,o)=>{const s=h("el-text");return T(),v(m,N(e.$attrs,{icon:"ep:timer",color:"#E872B7",node:e.node}),{default:d(()=>[w(s,null,{default:d(()=>[x(D(E(t)),1)]),_:1})]),_:1},16,["node"])}}});export{B as _};
