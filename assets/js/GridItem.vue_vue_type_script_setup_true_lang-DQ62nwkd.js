
/**
 * 由 MrZhang 提供技术支持
 * Powered by elegant-admin
 * Github https://github.com/zhangyao1990/elegant-admin
 */

import{d as G,a7 as P,o as j,x as H,e as R,y as D,p as x,r as c,b as y,R as M,w,a as L,c as S,N as B,O as W,a2 as O,i as g,V as T,$ as U}from"./@vue-B5ZJ3lyG.js";const q=G({name:"Grid",__name:"index",props:{cols:{default:()=>({xs:1,sm:2,md:2,lg:3,xl:4})},collapsed:{type:Boolean,default:!1},collapsedRows:{default:1},gap:{default:0}},setup(h,{expose:i}){const a=h;P(()=>a.collapsed&&v()),j(()=>{l({target:{innerWidth:window.innerWidth}}),window.addEventListener("resize",l)}),H(()=>{l({target:{innerWidth:window.innerWidth}}),window.addEventListener("resize",l)}),R(()=>{window.removeEventListener("resize",l)}),D(()=>{window.removeEventListener("resize",l)}),x("gap",Array.isArray(a.gap)?a.gap[0]:a.gap);const s=c("xl");x("breakPoint",s);function l(o){const e=o.target.innerWidth;switch(!!e){case e<768:s.value="xs";break;case(e>=768&&e<992):s.value="sm";break;case(e>=992&&e<1200):s.value="md";break;case(e>=1200&&e<1920):s.value="lg";break;case e>=1920:s.value="xl";break}}const u=c(-1);x("shouldHiddenIndex",u);const p=y(()=>typeof a.cols=="object"?a.cols[s.value]??a.cols:a.cols);x("cols",p);const d=M().default();function v(){var $,k,_,I;const o=[];let e=null;d.forEach(r=>{var f;typeof r.type=="object"&&r.type.name==="GridItem"&&((f=r.props)==null?void 0:f.suffix)!==void 0&&(e=r),typeof r.type=="symbol"&&Array.isArray(r.children)&&o.push(...r.children)});let b=0;e&&(b=((($=e.props[s.value])==null?void 0:$.span)??((k=e.props)==null?void 0:k.span)??1)+(((_=e.props[s.value])==null?void 0:_.offset)??((I=e.props)==null?void 0:I.offset)??0));try{let r=!1;o.reduce((f=0,m,N)=>{var A,E,C,z;if(f+=(((A=m.props[s.value])==null?void 0:A.span)??((E=m.props)==null?void 0:E.span)??1)+(((C=m.props[s.value])==null?void 0:C.offset)??((z=m.props)==null?void 0:z.offset)??0),Number(f)>a.collapsedRows*p.value-b)throw u.value=N,r=!0,new Error("find it");return f},0),r||(u.value=-1)}catch{}}w(()=>s.value,()=>{a.collapsed&&v()}),w(()=>a.collapsed,o=>{if(o)return v();u.value=-1});const t=y(()=>typeof a.gap=="number"?`${a.gap}px`:Array.isArray(a.gap)?`${a.gap[1]}px ${a.gap[0]}px`:"unset"),n=y(()=>({display:"grid",gridGap:t.value,gridTemplateColumns:`repeat(${p.value}, minmax(0, 1fr))`}));return i({breakPoint:s}),(o,e)=>(L(),S("div",{style:W(n.value)},[B(o.$slots,"default")],4))}}),F=G({name:"GridItem",__name:"GridItem",props:{offset:{default:0},span:{default:1},suffix:{type:Boolean,default:!1},xs:{default:void 0},sm:{default:void 0},md:{default:void 0},lg:{default:void 0},xl:{default:void 0}},setup(h){const i=h,a=O(),s=c(!0),l=g("breakPoint",c("xl")),u=g("shouldHiddenIndex",c(-1));w(()=>[u.value,l.value],t=>{a.index&&(s.value=!(t[0]!==-1&&Number.parseInt(a.index)>=Number(t[0])))},{immediate:!0});const p=g("gap",0),d=g("cols",c(4)),v=y(()=>{var o,e;const t=((o=i[l.value])==null?void 0:o.span)??i.span,n=((e=i[l.value])==null?void 0:e.offset)??i.offset;return i.suffix?{gridColumnStart:d.value-t-n+1,gridColumnEnd:`span ${t+n}`,marginLeft:n!==0?`calc(((100% + ${p}px) / ${t+n}) * ${n})`:"unset"}:{gridColumn:`span ${t+n>d.value?d.value:t+n}/span ${t+n>d.value?d.value:t+n}`,marginLeft:n!==0?`calc(((100% + ${p}px) / ${t+n}) * ${n})`:"unset"}});return(t,n)=>T((L(),S("div",{style:W(v.value)},[B(t.$slots,"default")],4)),[[U,s.value]])}});export{F as _,q as a};
