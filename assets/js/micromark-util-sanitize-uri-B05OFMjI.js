
/**
 * 由 MrZhang 提供技术支持
 * Powered by elegant-admin
 * Github https://github.com/zhangyao1990/elegant-admin
 */

import{c as f}from"./micromark-util-character-BqvJsIbw.js";function h(t){const c=[];let r=-1,n=0,i=0;for(;++r<t.length;){const e=t.charCodeAt(r);let o="";if(e===37&&f(t.charCodeAt(r+1))&&f(t.charCodeAt(r+2)))i=2;else if(e<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(e))||(o=String.fromCharCode(e));else if(e>55295&&e<57344){const s=t.charCodeAt(r+1);e<56320&&s>56319&&s<57344?(o=String.fromCharCode(e,s),i=1):o="�"}else o=String.fromCharCode(e);o&&(c.push(t.slice(n,r),encodeURIComponent(o)),n=r+i+1,o=""),i&&(r+=i,i=0)}return c.join("")+t.slice(n)}export{h as n};
