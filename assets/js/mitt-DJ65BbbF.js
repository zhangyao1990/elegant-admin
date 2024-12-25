
/**
 * 由 MrZhang 提供技术支持
 * Powered by elegant-admin
 * Github https://github.com/zhangyao1990/elegant-admin
 */

function n(t){return{all:t=t||new Map,on:function(e,c){var i=t.get(e);i?i.push(c):t.set(e,[c])},off:function(e,c){var i=t.get(e);i&&(c?i.splice(i.indexOf(c)>>>0,1):t.set(e,[]))},emit:function(e,c){var i=t.get(e);i&&i.slice().map(function(f){f(c)}),(i=t.get("*"))&&i.slice().map(function(f){f(e,c)})}}}export{n as m};
