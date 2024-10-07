
/**
 * 由 MrZhang 提供技术支持
 * Powered by elegant-admin
 * Github https://github.com/zhangyao1990/elegant-admin
 */

import{t as p,l as f}from"./mdast-util-to-markdown-BorbFZew.js";const m={exit:{taskListCheckValueChecked:h,taskListCheckValueUnchecked:h,paragraph:u}},b={unsafe:[{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{listItem:d}};function h(e){const s=this.stack[this.stack.length-2];s.checked=e.type==="taskListCheckValueChecked"}function u(e){const s=this.stack[this.stack.length-2];if(s&&s.type==="listItem"&&typeof s.checked=="boolean"){const a=this.stack[this.stack.length-1],t=a.children[0];if(t&&t.type==="text"){const i=s.children;let c=-1,n;for(;++c<i.length;){const o=i[c];if(o.type==="paragraph"){n=o;break}}n===a&&(t.value=t.value.slice(1),t.value.length===0?a.children.shift():a.position&&t.position&&typeof t.position.start.offset=="number"&&(t.position.start.column++,t.position.start.offset++,a.position.start=Object.assign({},t.position.start)))}}this.exit(e)}function d(e,s,a,t){const i=e.children[0],c=typeof e.checked=="boolean"&&i&&i.type==="paragraph",n="["+(e.checked?"x":" ")+"] ",o=p(t);c&&o.move(n);let r=f(e,s,a,{...t,...o.current()});return c&&(r=r.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/,l)),r;function l(k){return k+n}}export{m as a,b as g};
