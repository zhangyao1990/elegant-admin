
/**
 * 由 MrZhang 提供技术支持
 * Powered by elegant-admin
 * Github https://github.com/zhangyao1990/elegant-admin
 */

function r(c){const i=String(c),s=/\r?\n|\r/g;let t=s.exec(i),e=0;const n=[];for(;t;)n.push(o(i.slice(e,t.index),e>0,!0),t[0]),e=t.index+t[0].length,t=s.exec(i);return n.push(o(i.slice(e),e>0,!1)),n.join("")}function o(c,i,s){let t=0,e=c.length;if(i){let n=c.codePointAt(t);for(;n===9||n===32;)t++,n=c.codePointAt(t)}if(s){let n=c.codePointAt(e-1);for(;n===9||n===32;)e--,n=c.codePointAt(e-1)}return e>t?c.slice(t,e):""}export{r as t};