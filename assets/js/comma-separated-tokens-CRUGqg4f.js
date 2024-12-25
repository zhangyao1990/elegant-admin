
/**
 * 由 MrZhang 提供技术支持
 * Powered by elegant-admin
 * Github https://github.com/zhangyao1990/elegant-admin
 */

function f(n){const e=[],t=String(n||"");let i=t.indexOf(","),s=0,r=!1;for(;!r;){i===-1&&(i=t.length,r=!0);const o=t.slice(s,i).trim();(o||!r)&&e.push(o),s=i+1,i=t.indexOf(",",s)}return e}function p(n,e){const t=e||{};return(n[n.length-1]===""?[...n,""]:n).join((t.padRight?" ":"")+","+(t.padLeft===!1?"":" ")).trim()}export{f as p,p as s};
