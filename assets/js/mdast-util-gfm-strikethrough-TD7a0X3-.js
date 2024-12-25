
/**
 * 由 MrZhang 提供技术支持
 * Powered by elegant-admin
 * Github https://github.com/zhangyao1990/elegant-admin
 */

import{t as h,b as s}from"./mdast-util-to-markdown-BorbFZew.js";const u=["autolink","destinationLiteral","destinationRaw","reference","titleQuote","titleApostrophe"];o.peek=l;const d={canContainEols:["delete"],enter:{strikethrough:c},exit:{strikethrough:k}},p={unsafe:[{character:"~",inConstruct:"phrasing",notInConstruct:u}],handlers:{delete:o}};function c(t){this.enter({type:"delete",children:[]},t)}function k(t){this.exit(t)}function o(t,g,n,i){const r=h(i),a=n.enter("strikethrough");let e=r.move("~~");return e+=s(t,n,{...r.current(),before:e,after:"~"}),e+=r.move("~~"),a(),e}function l(){return"~"}export{d as a,p as g};
