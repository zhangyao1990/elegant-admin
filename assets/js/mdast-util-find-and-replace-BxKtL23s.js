
/**
 * 由 MrZhang 提供技术支持
 * Powered by elegant-admin
 * Github https://github.com/zhangyao1990/elegant-admin
 */

import{e as k}from"./escape-string-regexp-BaJN9MlJ.js";import{c as m}from"./unist-util-is-DiTsIWAy.js";import{v as P}from"./unist-util-visit-parents-MnEmTlHn.js";const I={}.hasOwnProperty,z=function(e,l,t,A){let c,g;typeof l=="string"||l instanceof RegExp?(g=[[l,t]],c=A):(g=l,c=t),c||(c={});const E=m(c.ignore||[]),h=F(g);let x=-1;for(;++x<h.length;)P(e,"text",O);return e;function O(n,o){let u=-1,i;for(;++u<o.length;){const a=o[u];if(E(a,i?i.children.indexOf(a):void 0,i))return;i=a}if(i)return R(n,o)}function R(n,o){const u=o[o.length-1],i=h[x][0],a=h[x][1];let p=0;const d=u.children.indexOf(n);let v=!1,s=[];i.lastIndex=0;let f=i.exec(n.value);for(;f;){const y=f.index,j={index:f.index,input:f.input,stack:[...o,n]};let r=a(...f,j);if(typeof r=="string"&&(r=r.length>0?{type:"text",value:r}:void 0),r!==!1&&(p!==y&&s.push({type:"text",value:n.value.slice(p,y)}),Array.isArray(r)?s.push(...r):r&&s.push(r),p=y+f[0].length,v=!0),!i.global)break;f=i.exec(n.value)}return v?(p<n.value.length&&s.push({type:"text",value:n.value.slice(p)}),u.children.splice(d,1,...s)):s=[n],d+s.length}};function F(e){const l=[];if(typeof e!="object")throw new TypeError("Expected array or object as schema");if(Array.isArray(e)){let t=-1;for(;++t<e.length;)l.push([w(e[t][0]),b(e[t][1])])}else{let t;for(t in e)I.call(e,t)&&l.push([w(t),b(e[t])])}return l}function w(e){return typeof e=="string"?new RegExp(k(e),"g"):e}function b(e){return typeof e=="function"?e:()=>e}export{z as f};
