
/**
 * 由 MrZhang 提供技术支持
 * Powered by elegant-admin
 * Github https://github.com/zhangyao1990/elegant-admin
 */

import{b as z}from"./bail-FqpXQuLt.js";import{i as Y}from"./is-buffer-ZvB_ecHq.js";import{e as C}from"./extend-BwVkoufK.js";import{i as x}from"./is-plain-obj-C1gvLhAf.js";import{V as _}from"./vfile-C5fkxXpN.js";import{t as q}from"./trough-B_b8ryxu.js";const Z=j().freeze(),T={}.hasOwnProperty;function j(){const t=q(),s=[];let l={},m,g=-1;return n.data=I,n.Parser=void 0,n.Compiler=void 0,n.freeze=V,n.attachers=s,n.use=O,n.parse=F,n.stringify=N,n.run=L,n.runSync=B,n.process=U,n.processSync=D,n;function n(){const e=j();let r=-1;for(;++r<s.length;)e.use(...s[r]);return e.data(C(!0,{},l)),e}function I(e,r){return typeof e=="string"?arguments.length===2?(E("data",m),l[e]=r,n):T.call(l,e)&&l[e]||null:e?(E("data",m),l=e,n):l}function V(){if(m)return n;for(;++g<s.length;){const[e,...r]=s[g];if(r[0]===!1)continue;r[0]===!0&&(r[0]=void 0);const o=e.call(n,...r);typeof o=="function"&&t.use(o)}return m=!0,g=Number.POSITIVE_INFINITY,n}function O(e,...r){let o;if(E("use",m),e!=null)if(typeof e=="function")y(e,...r);else if(typeof e=="object")Array.isArray(e)?d(e):p(e);else throw new TypeError("Expected usable value, not `"+e+"`");return o&&(l.settings=Object.assign(l.settings||{},o)),n;function c(i){if(typeof i=="function")y(i);else if(typeof i=="object")if(Array.isArray(i)){const[f,...u]=i;y(f,...u)}else p(i);else throw new TypeError("Expected usable value, not `"+i+"`")}function p(i){d(i.plugins),i.settings&&(o=Object.assign(o||{},i.settings))}function d(i){let f=-1;if(i!=null)if(Array.isArray(i))for(;++f<i.length;){const u=i[f];c(u)}else throw new TypeError("Expected a list of plugins, not `"+i+"`")}function y(i,f){let u=-1,a;for(;++u<s.length;)if(s[u][0]===i){a=s[u];break}a?(x(a[1])&&x(f)&&(f=C(!0,a[1],f)),a[1]=f):s.push([...arguments])}}function F(e){n.freeze();const r=w(e),o=n.Parser;return h("parse",o),S(o,"parse")?new o(String(r),r).parse():o(String(r),r)}function N(e,r){n.freeze();const o=w(r),c=n.Compiler;return P("stringify",c),b(e),S(c,"compile")?new c(e,o).compile():c(e,o)}function L(e,r,o){if(b(e),n.freeze(),!o&&typeof r=="function"&&(o=r,r=void 0),!o)return new Promise(c);c(null,o);function c(p,d){t.run(e,w(r),y);function y(i,f,u){f=f||e,i?d(i):p?p(f):o(null,f,u)}}}function B(e,r){let o,c;return n.run(e,r,p),A("runSync","run",c),o;function p(d,y){z(d),o=y,c=!0}}function U(e,r){if(n.freeze(),h("process",n.Parser),P("process",n.Compiler),!r)return new Promise(o);o(null,r);function o(c,p){const d=w(e);n.run(n.parse(d),d,(i,f,u)=>{if(i||!f||!u)y(i);else{const a=n.stringify(f,u);a==null||(J(a)?u.value=a:u.result=a),y(i,u)}});function y(i,f){i||!f?p(i):c?c(f):r(null,f)}}}function D(e){let r;n.freeze(),h("processSync",n.Parser),P("processSync",n.Compiler);const o=w(e);return n.process(o,c),A("processSync","process",r),o;function c(p){r=!0,z(p)}}}function S(t,s){return typeof t=="function"&&t.prototype&&(G(t.prototype)||s in t.prototype)}function G(t){let s;for(s in t)if(T.call(t,s))return!0;return!1}function h(t,s){if(typeof s!="function")throw new TypeError("Cannot `"+t+"` without `Parser`")}function P(t,s){if(typeof s!="function")throw new TypeError("Cannot `"+t+"` without `Compiler`")}function E(t,s){if(s)throw new Error("Cannot call `"+t+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function b(t){if(!x(t)||typeof t.type!="string")throw new TypeError("Expected node, got `"+t+"`")}function A(t,s,l){if(!l)throw new Error("`"+t+"` finished async. Use `"+s+"` instead")}function w(t){return H(t)?t:new _(t)}function H(t){return!!(t&&typeof t=="object"&&"message"in t&&"messages"in t)}function J(t){return typeof t=="string"||Y(t)}export{Z as u};
