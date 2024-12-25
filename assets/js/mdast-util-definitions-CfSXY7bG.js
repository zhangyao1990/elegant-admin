
/**
 * 由 MrZhang 提供技术支持
 * Powered by elegant-admin
 * Github https://github.com/zhangyao1990/elegant-admin
 */

import{v as s}from"./unist-util-visit-SwKB2sUE.js";const o={}.hasOwnProperty;function d(t){const i=Object.create(null);if(!t||!t.type)throw new Error("mdast-util-definitions expected node");return s(t,"definition",e=>{const n=r(e.identifier);n&&!o.call(i,n)&&(i[n]=e)}),c;function c(e){const n=r(e);return n&&o.call(i,n)?i[n]:null}}function r(t){return String(t||"").toUpperCase()}export{d};
