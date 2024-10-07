
/**
 * 由 MrZhang 提供技术支持
 * Powered by elegant-admin
 * Github https://github.com/zhangyao1990/elegant-admin
 */

function I(n,e={}){const o=(e.align||[]).concat(),S=e.stringLength||C,d=[],u=[],w=[],a=[];let g=0,s=-1;for(;++s<n.length;){const f=[],c=[];let t=-1;for(n[s].length>g&&(g=n[s].length);++t<n[s].length;){const i=y(n[s][t]);if(e.alignDelimiters!==!1){const r=S(i);c[t]=r,(a[t]===void 0||r>a[t])&&(a[t]=r)}f.push(i)}u[s]=f,w[s]=c}let l=-1;if(typeof o=="object"&&"length"in o)for(;++l<g;)d[l]=j(o[l]);else{const f=j(o);for(;++l<g;)d[l]=f}l=-1;const p=[],z=[];for(;++l<g;){const f=d[l];let c="",t="";f===99?(c=":",t=":"):f===108?c=":":f===114&&(t=":");let i=e.alignDelimiters===!1?1:Math.max(1,a[l]-c.length-t.length);const r=c+"-".repeat(i)+t;e.alignDelimiters!==!1&&(i=c.length+i+t.length,i>a[l]&&(a[l]=i),z[l]=i),p[l]=r}u.splice(1,0,p),w.splice(1,0,z),s=-1;const x=[];for(;++s<u.length;){const f=u[s],c=w[s];l=-1;const t=[];for(;++l<g;){const i=f[l]||"";let r="",m="";if(e.alignDelimiters!==!1){const h=a[l]-(c[l]||0),D=d[l];D===114?r=" ".repeat(h):D===99?h%2?(r=" ".repeat(h/2+.5),m=" ".repeat(h/2-.5)):(r=" ".repeat(h/2),m=r):m=" ".repeat(h)}e.delimiterStart!==!1&&!l&&t.push("|"),e.padding!==!1&&!(e.alignDelimiters===!1&&i==="")&&(e.delimiterStart!==!1||l)&&t.push(" "),e.alignDelimiters!==!1&&t.push(r),t.push(i),e.alignDelimiters!==!1&&t.push(m),e.padding!==!1&&t.push(" "),(e.delimiterEnd!==!1||l!==g-1)&&t.push("|")}x.push(e.delimiterEnd===!1?t.join("").replace(/ +$/,""):t.join(""))}return x.join(`
`)}function y(n){return n==null?"":String(n)}function C(n){return n.length}function j(n){const e=typeof n=="string"?n.codePointAt(0):0;return e===67||e===99?99:e===76||e===108?108:e===82||e===114?114:0}export{I as m};
