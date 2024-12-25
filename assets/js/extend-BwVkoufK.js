
/**
 * 由 MrZhang 提供技术支持
 * Powered by elegant-admin
 * Github https://github.com/zhangyao1990/elegant-admin
 */

import{a as m}from"./@imengyu-CEcZjhxx.js";var u=Object.prototype.hasOwnProperty,P=Object.prototype.toString,s=Object.defineProperty,y=Object.getOwnPropertyDescriptor,p=function(r){return typeof Array.isArray=="function"?Array.isArray(r):P.call(r)==="[object Array]"},v=function(r){if(!r||P.call(r)!=="[object Object]")return!1;var e=u.call(r,"constructor"),a=r.constructor&&r.constructor.prototype&&u.call(r.constructor.prototype,"isPrototypeOf");if(r.constructor&&!e&&!a)return!1;var t;for(t in r);return typeof t>"u"||u.call(r,t)},O=function(r,e){s&&e.name==="__proto__"?s(r,e.name,{enumerable:!0,configurable:!0,value:e.newValue,writable:!0}):r[e.name]=e.newValue},g=function(r,e){if(e==="__proto__")if(u.call(r,e)){if(y)return y(r,e).value}else return;return r[e]},w=function o(){var r,e,a,t,c,i,n=arguments[0],f=1,d=arguments.length,l=!1;for(typeof n=="boolean"&&(l=n,n=arguments[1]||{},f=2),(n==null||typeof n!="object"&&typeof n!="function")&&(n={});f<d;++f)if(r=arguments[f],r!=null)for(e in r)a=g(n,e),t=g(r,e),n!==t&&(l&&t&&(v(t)||(c=p(t)))?(c?(c=!1,i=a&&p(a)?a:[]):i=a&&v(a)?a:{},O(n,{name:e,newValue:o(l,i,t)})):typeof t<"u"&&O(n,{name:e,newValue:t}));return n};const _=m(w);export{_ as e};
