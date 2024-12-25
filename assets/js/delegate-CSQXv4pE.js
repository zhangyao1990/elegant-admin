
/**
 * 由 MrZhang 提供技术支持
 * Powered by elegant-admin
 * Github https://github.com/zhangyao1990/elegant-admin
 */

import{a as i}from"./@imengyu-CEcZjhxx.js";var s=9;if(typeof Element<"u"&&!Element.prototype.matches){var a=Element.prototype;a.matches=a.matchesSelector||a.mozMatchesSelector||a.msMatchesSelector||a.oMatchesSelector||a.webkitMatchesSelector}function u(t,r){for(;t&&t.nodeType!==s;){if(typeof t.matches=="function"&&t.matches(r))return t;t=t.parentNode}}var f=u,d=f;function l(t,r,n,c,e){var o=g.apply(this,arguments);return t.addEventListener(n,o,e),{destroy:function(){t.removeEventListener(n,o,e)}}}function p(t,r,n,c,e){return typeof t.addEventListener=="function"?l.apply(null,arguments):typeof n=="function"?l.bind(null,document).apply(null,arguments):(typeof t=="string"&&(t=document.querySelectorAll(t)),Array.prototype.map.call(t,function(o){return l(o,r,n,c,e)}))}function g(t,r,n,c){return function(e){e.delegateTarget=d(e.target,r),e.delegateTarget&&c.call(t,e)}}var y=p;const v=i(y);export{v as _};
