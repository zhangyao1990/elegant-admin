
/**
 * 由 MrZhang 提供技术支持
 * Powered by elegant-admin
 * Github https://github.com/zhangyao1990/elegant-admin
 */

const f={};function l(t,o){const n=f,i=typeof n.includeImageAlt=="boolean"?n.includeImageAlt:!0,r=typeof n.includeHtml=="boolean"?n.includeHtml:!0;return c(t,i,r)}function c(t,o,n){if(s(t)){if("value"in t)return t.type==="html"&&!n?"":t.value;if(o&&"alt"in t&&t.alt)return t.alt;if("children"in t)return e(t.children,o,n)}return Array.isArray(t)?e(t,o,n):""}function e(t,o,n){const i=[];let r=-1;for(;++r<t.length;)i[r]=c(t[r],o,n);return i.join("")}function s(t){return!!(t&&typeof t=="object")}export{l as t};
