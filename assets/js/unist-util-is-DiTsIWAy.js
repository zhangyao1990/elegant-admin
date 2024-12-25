
/**
 * 由 MrZhang 提供技术支持
 * Powered by elegant-admin
 * Github https://github.com/zhangyao1990/elegant-admin
 */

const c=function(n){if(n==null)return y;if(typeof n=="string")return l(n);if(typeof n=="object")return Array.isArray(n)?f(n):a(n);if(typeof n=="function")return o(n);throw new Error("Expected function, string, or object as test")};function f(n){const t=[];let r=-1;for(;++r<n.length;)t[r]=c(n[r]);return o(e);function e(...i){let u=-1;for(;++u<t.length;)if(t[u].call(this,...i))return!0;return!1}}function a(n){return o(t);function t(r){let e;for(e in n)if(r[e]!==n[e])return!1;return!0}}function l(n){return o(t);function t(r){return r&&r.type===n}}function o(n){return t;function t(r,...e){return!!(r&&typeof r=="object"&&"type"in r&&n.call(this,r,...e))}}function y(){return!0}export{c};
