
/**
 * 由 MrZhang 提供技术支持
 * Powered by elegant-admin
 * Github https://github.com/zhangyao1990/elegant-admin
 */

import{d as t}from"./decode-named-character-reference-C3-224fz.js";import{d as o}from"./micromark-util-decode-numeric-character-reference-DRnCnno4.js";const n=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function u(r){return r.replace(n,f)}function f(r,c,e){if(c)return c;if(e.charCodeAt(0)===35){const d=e.charCodeAt(1),a=d===120||d===88;return o(e.slice(a?2:1),a?16:10)}return t(e)||r}export{u as d};
