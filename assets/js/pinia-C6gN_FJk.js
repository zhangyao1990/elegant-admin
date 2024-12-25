
/**
 * 由 MrZhang 提供技术支持
 * Powered by elegant-admin
 * Github https://github.com/zhangyao1990/elegant-admin
 */

import{i as G}from"./vue-demi-Dq6ymT-8.js";import{D as A,r as D,ap as H,i as $,w as T,l as tt,E as x,aB as M,af as et,aC as st,B as nt,C as ot,n as ct,t as rt,b as ut}from"./@vue-B5ZJ3lyG.js";/*!
 * pinia v2.2.4
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */let J;const R=t=>J=t,K=Symbol();function L(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var E;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(E||(E={}));function vt(){const t=A(!0),c=t.run(()=>D({}));let s=[],e=[];const r=H({install(u){R(r),r._a=u,u.provide(K,r),u.config.globalProperties.$pinia=r,e.forEach(f=>s.push(f)),e=[]},use(u){return!this._a&&!G?e.push(u):s.push(u),this},_p:s,_a:null,_e:t,_s:new Map,state:c});return r}const q=()=>{};function F(t,c,s,e=q){t.push(c);const r=()=>{const u=t.indexOf(c);u>-1&&(t.splice(u,1),e())};return!s&&nt()&&ot(r),r}function C(t,...c){t.slice().forEach(s=>{s(...c)})}const at=t=>t(),V=Symbol(),k=Symbol();function O(t,c){t instanceof Map&&c instanceof Map?c.forEach((s,e)=>t.set(e,s)):t instanceof Set&&c instanceof Set&&c.forEach(t.add,t);for(const s in c){if(!c.hasOwnProperty(s))continue;const e=c[s],r=t[s];L(r)&&L(e)&&t.hasOwnProperty(s)&&!x(e)&&!M(e)?t[s]=O(r,e):t[s]=e}return t}const ft=Symbol();function it(t){return!L(t)||!t.hasOwnProperty(ft)}const{assign:y}=Object;function lt(t){return!!(x(t)&&t.effect)}function ht(t,c,s,e){const{state:r,actions:u,getters:f}=c,a=s.state.value[t];let P;function b(){a||(s.state.value[t]=r?r():{});const S=rt(s.state.value[t]);return y(S,u,Object.keys(f||{}).reduce((v,m)=>(v[m]=H(ut(()=>{R(s);const _=s._s.get(t);return f[m].call(_,_)})),v),{}))}return P=z(t,b,c,s,e,!0),P}function z(t,c,s={},e,r,u){let f;const a=y({actions:{}},s),P={deep:!0};let b,S,v=[],m=[],_;const d=e.state.value[t];!u&&!d&&(e.state.value[t]={}),D({});let W;function N(o){let n;b=S=!1,typeof o=="function"?(o(e.state.value[t]),n={type:E.patchFunction,storeId:t,events:_}):(O(e.state.value[t],o),n={type:E.patchObject,payload:o,storeId:t,events:_});const i=W=Symbol();ct().then(()=>{W===i&&(b=!0)}),S=!0,C(v,n,e.state.value[t])}const Q=u?function(){const{state:n}=s,i=n?n():{};this.$patch(j=>{y(j,i)})}:q;function U(){f.stop(),v=[],m=[],e._s.delete(t)}const B=(o,n="")=>{if(V in o)return o[k]=n,o;const i=function(){R(e);const j=Array.from(arguments),p=[],I=[];function Y(l){p.push(l)}function Z(l){I.push(l)}C(m,{args:j,name:i[k],store:h,after:Y,onError:Z});let w;try{w=o.apply(this&&this.$id===t?this:h,j)}catch(l){throw C(I,l),l}return w instanceof Promise?w.then(l=>(C(p,l),l)).catch(l=>(C(I,l),Promise.reject(l))):(C(p,w),w)};return i[V]=!0,i[k]=n,i},X={_p:e,$id:t,$onAction:F.bind(null,m),$patch:N,$reset:Q,$subscribe(o,n={}){const i=F(v,o,n.detached,()=>j()),j=f.run(()=>T(()=>e.state.value[t],p=>{(n.flush==="sync"?S:b)&&o({storeId:t,type:E.direct,events:_},p)},y({},P,n)));return i},$dispose:U},h=tt(X);e._s.set(t,h);const g=(e._a&&e._a.runWithContext||at)(()=>e._e.run(()=>(f=A()).run(()=>c({action:B}))));for(const o in g){const n=g[o];if(x(n)&&!lt(n)||M(n))u||(d&&it(n)&&(x(n)?n.value=d[o]:O(n,d[o])),e.state.value[t][o]=n);else if(typeof n=="function"){const i=B(n,o);g[o]=i,a.actions[o]=n}}return y(h,g),y(et(h),g),Object.defineProperty(h,"$state",{get:()=>e.state.value[t],set:o=>{N(n=>{y(n,o)})}}),e._p.forEach(o=>{y(h,f.run(()=>o({store:h,app:e._a,pinia:e,options:a})))}),d&&u&&s.hydrate&&s.hydrate(h.$state,d),b=!0,S=!0,h}function mt(t,c,s){let e,r;const u=typeof c=="function";typeof t=="string"?(e=t,r=u?s:c):(r=t,e=t.id);function f(a,P){const b=st();return a=a||(b?$(K,null):null),a&&R(a),a=J,a._s.has(e)||(u?z(e,c,r,a):ht(e,r,a)),a._s.get(e)}return f.$id=e,f}export{vt as c,mt as d};
