
/**
 * 由 MrZhang 提供技术支持
 * Powered by elegant-admin
 * Github https://github.com/zhangyao1990/elegant-admin
 */

import{d as h,b as k,ai as g,a as t,S as f,U as a,c as r,F as n,a8 as l,k as _,Z as y,N as w,Q as x}from"./@vue-B5ZJ3lyG.js";const C=["disabled","onClick"],B=h({__name:"HDropdownMenu",props:{items:{}},setup(d){const i=d,p=k(()=>i.items.map(e=>e.filter(o=>!o.hide)).filter(e=>e.length));return(e,o)=>{const c=g("VMenu");return t(),f(c,x({"show-triggers":["hover"],"auto-hide":!1,"popper-triggers":["hover","click"],delay:200},e.$attrs),{popper:a(()=>[(t(!0),r(n,null,l(_(p),(u,m)=>(t(),r("div",{key:m,class:"p-1","border-b":"~ solid stone-2 dark:stone-7 last:size-0"},[(t(!0),r(n,null,l(u,(s,b)=>(t(),r("button",{key:b,disabled:s.disabled,class:"w-full flex cursor-pointer items-center gap-2 border-size-0 rounded-md bg-inherit px-2 py-1.5 text-sm text-dark disabled:cursor-not-allowed dark:text-white disabled:opacity-50 hover:not-disabled:bg-stone-1 dark:hover:not-disabled:bg-stone-9",onClick:s.handle},y(s.label),9,C))),128))]))),128))]),default:a(()=>[w(e.$slots,"default")]),_:3},16)}}});export{B as _};
