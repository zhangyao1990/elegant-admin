
/**
 * 由 MrZhang 提供技术支持
 * Powered by elegant-admin
 * Github https://github.com/zhangyao1990/elegant-admin
 */

var s=Number.isNaN||function(r){return typeof r=="number"&&r!==r};function f(e,r){return!!(e===r||s(e)&&s(r))}function i(e,r){if(e.length!==r.length)return!1;for(var t=0;t<e.length;t++)if(!f(e[t],r[t]))return!1;return!0}function o(e,r){r===void 0&&(r=i);var t=null;function u(){for(var n=[],a=0;a<arguments.length;a++)n[a]=arguments[a];if(t&&t.lastThis===this&&r(n,t.lastArgs))return t.lastResult;var l=e.apply(this,n);return t={lastResult:l,lastArgs:n,lastThis:this},l}return u.clear=function(){t=null},u}export{o as m};
