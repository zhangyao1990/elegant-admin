
/**
 * 由 MrZhang 提供技术支持
 * Powered by elegant-admin
 * Github https://github.com/zhangyao1990/elegant-admin
 */

function x(){const i=[],u={run:c,use:p};return u;function c(...n){let h=-1;const t=n.pop();if(typeof t!="function")throw new TypeError("Expected function as last argument, not "+t);f(null,...n);function f(e,...o){const r=i[++h];let l=-1;if(e){t(e);return}for(;++l<n.length;)(o[l]===null||o[l]===void 0)&&(o[l]=n[l]);n=o,r?s(r,f)(...o):t(null,...o)}}function p(n){if(typeof n!="function")throw new TypeError("Expected `middelware` to be a function, not "+n);return i.push(n),u}}function s(i,u){let c;return p;function p(...t){const f=i.length>t.length;let e;f&&t.push(n);try{e=i.apply(this,t)}catch(o){const r=o;if(f&&c)throw r;return n(r)}f||(e&&e.then&&typeof e.then=="function"?e.then(h,n):e instanceof Error?n(e):h(e))}function n(t,...f){c||(c=!0,u(t,...f))}function h(t){n(null,t)}}export{x as t};
