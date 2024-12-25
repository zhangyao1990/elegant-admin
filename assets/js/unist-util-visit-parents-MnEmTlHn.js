
/**
 * 由 MrZhang 提供技术支持
 * Powered by elegant-admin
 * Github https://github.com/zhangyao1990/elegant-admin
 */

import{c as b}from"./unist-util-is-DiTsIWAy.js";const N=!0,m=!1,I="skip",A=function(e,f,u,l){typeof f=="function"&&typeof u!="function"&&(l=u,u=f,f=null);const g=b(f),s=l?-1:1;y(e,void 0,[])();function y(t,h,o){const i=t&&typeof t=="object"?t:{};if(typeof i.type=="string"){const n=typeof i.tagName=="string"?i.tagName:typeof i.name=="string"?i.name:void 0;Object.defineProperty(a,"name",{value:"node ("+(t.type+(n?"<"+n+">":""))+")"})}return a;function a(){let n=[],c,r,p;if((!f||g(t,h,o[o.length-1]||null))&&(n=P(u(t,o)),n[0]===m))return n;if(t.children&&n[0]!==I)for(r=(l?t.children.length:-1)+s,p=o.concat(t);r>-1&&r<t.children.length;){if(c=y(t.children[r],r,p)(),c[0]===m)return c;r=typeof c[1]=="number"?c[1]:r+s}return n}}};function P(e){return Array.isArray(e)?e:typeof e=="number"?[N,e]:[e]}export{A as v};
