
/**
 * 由 MrZhang 提供技术支持
 * Powered by elegant-admin
 * Github https://github.com/zhangyao1990/elegant-admin
 */

const i=/[#.]/g;function p(n,o){const a=n||"",s={};let t=0,r,c;for(;t<a.length;){i.lastIndex=t;const l=i.exec(a),e=a.slice(t,l?l.index:a.length);e&&(r?r==="#"?s.id=e:Array.isArray(s.className)?s.className.push(e):s.className=[e]:c=e,t+=e.length),l&&(r=l[0],t++)}return{type:"element",tagName:c||o||"div",properties:s,children:[]}}export{p};
