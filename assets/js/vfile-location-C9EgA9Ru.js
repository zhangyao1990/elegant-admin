
/**
 * 由 MrZhang 提供技术支持
 * Powered by elegant-admin
 * Github https://github.com/zhangyao1990/elegant-admin
 */

function d(c){const r=String(c),n=[],l=/\r?\n|\r/g;for(;l.test(r);)n.push(l.lastIndex);return n.push(r.length+1),{toPoint:o,toOffset:s};function o(e){let t=-1;if(typeof e=="number"&&e>-1&&e<n[n.length-1]){for(;++t<n.length;)if(n[t]>e)return{line:t+1,column:e-(t>0?n[t-1]:0)+1,offset:e}}return{line:void 0,column:void 0,offset:void 0}}function s(e){const t=e&&e.line,u=e&&e.column;if(typeof t=="number"&&typeof u=="number"&&!Number.isNaN(t)&&!Number.isNaN(u)&&t-1 in n){const i=(n[t-2]||0)+u-1||0;if(i>-1&&i<n[n.length-1])return i}return-1}}export{d as l};
