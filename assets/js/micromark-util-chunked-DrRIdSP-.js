
/**
 * 由 MrZhang 提供技术支持
 * Powered by elegant-admin
 * Github https://github.com/zhangyao1990/elegant-admin
 */

function u(h,n,c,f){const l=h.length;let p=0,e;if(n<0?n=-n>l?0:l+n:n=n>l?l:n,c=c>0?c:0,f.length<1e4)e=Array.from(f),e.unshift(n,c),h.splice(...e);else for(c&&h.splice(n,c);p<f.length;)e=f.slice(p,p+1e4),e.unshift(n,0),h.splice(...e),p+=1e4,n+=1e4}function g(h,n){return h.length>0?(u(h,h.length,0,n),h):n}export{g as p,u as s};
