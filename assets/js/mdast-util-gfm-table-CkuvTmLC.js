
/**
 * 由 MrZhang 提供技术支持
 * Powered by elegant-admin
 * Github https://github.com/zhangyao1990/elegant-admin
 */

import{b as D,d as k}from"./mdast-util-to-markdown-BorbFZew.js";import{m as R}from"./markdown-table-De3aUdCo.js";const L={enter:{table:v,tableData:g,tableHeader:g,tableRow:y},exit:{codeText:A,table:_,tableData:u,tableHeader:u,tableRow:u}};function v(e){const l=e._align;this.enter({type:"table",align:l.map(c=>c==="none"?null:c),children:[]},e),this.setData("inTable",!0)}function _(e){this.exit(e),this.setData("inTable")}function y(e){this.enter({type:"tableRow",children:[]},e)}function u(e){this.exit(e)}function g(e){this.enter({type:"tableCell",children:[]},e)}function A(e){let l=this.resume();this.getData("inTable")&&(l=l.replace(/\\([\\|])/g,B));const c=this.stack[this.stack.length-1];c.value=l,this.exit(e)}function B(e,l){return l==="|"?l:e}function M(e){const l=e||{},c=l.tableCellPadding,C=l.tablePipeAlign,T=l.stringLength,b=c?" ":"|";return{unsafe:[{character:"\r",inConstruct:"tableCell"},{character:`
`,inConstruct:"tableCell"},{atBreak:!0,character:"|",after:"[	 :-]"},{character:"|",inConstruct:"tableCell"},{atBreak:!0,character:":",after:"-"},{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{table:w,tableRow:p,tableCell:h,inlineCode:x}};function w(t,r,a,n){return d(m(t,a,n),t.align)}function p(t,r,a,n){const i=f(t,a,n),s=d([i]);return s.slice(0,s.indexOf(`
`))}function h(t,r,a,n){const i=a.enter("tableCell"),s=a.enter("phrasing"),o=D(t,a,{...n,before:b,after:b});return s(),i(),o}function d(t,r){return R(t,{align:r,alignDelimiters:C,padding:c,stringLength:T})}function m(t,r,a){const n=t.children;let i=-1;const s=[],o=r.enter("table");for(;++i<n.length;)s[i]=f(n[i],r,a);return o(),s}function f(t,r,a){const n=t.children;let i=-1;const s=[],o=r.enter("tableRow");for(;++i<n.length;)s[i]=h(n[i],t,r,a);return o(),s}function x(t,r,a){let n=k(t,r,a);return a.stack.includes("tableCell")&&(n=n.replace(/\|/g,"\\$&")),n}}export{L as a,M as g};
