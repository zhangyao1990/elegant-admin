
/**
 * 由 MrZhang 提供技术支持
 * Powered by elegant-admin
 * Github https://github.com/zhangyao1990/elegant-admin
 */

import{d as w}from"./micromark-util-decode-string-DJl8Y_PO.js";function L(n){return n.label||!n.identifier?n.label||"":w(n.identifier)}function $(n,e,o){const t=e.indexStack,l=n.children||[],r=e.createTracker(o),i=[];let c=-1;for(t.push(-1);++c<l.length;){const u=l[c];t[t.length-1]=c,i.push(r.move(e.handle(u,n,e,{before:`
`,after:`
`,...r.current()}))),u.type!=="list"&&(e.bulletLastUsed=void 0),c<l.length-1&&i.push(r.move(k(u,l[c+1],n,e)))}return t.pop(),i.join("")}function k(n,e,o,t){let l=t.join.length;for(;l--;){const r=t.join[l](n,e,o,t);if(r===!0||r===1)break;if(typeof r=="number")return`
`.repeat(1+r);if(r===!1)return`

<!---->

`}return`

`}const I=/\r?\n|\r/g;function E(n,e){const o=[];let t=0,l=0,r;for(;r=I.exec(n);)i(n.slice(t,r.index)),o.push(r[0]),t=r.index+r[0].length,l++;return i(n.slice(t)),o.join("");function i(c){o.push(e(c,l,!c))}}function g(n){if(!n._compiled){const e=(n.atBreak?"[\\r\\n][\\t ]*":"")+(n.before?"(?:"+n.before+")":"");n._compiled=new RegExp((e?"("+e+")":"")+(/[|\\{}()[\]^$+*?.-]/.test(n.character)?"\\":"")+n.character+(n.after?"(?:"+n.after+")":""),"g")}return n._compiled}function C(n,e){return x(n,e.inConstruct,!0)&&!x(n,e.notInConstruct,!1)}function x(n,e,o){if(typeof e=="string"&&(e=[e]),!e||e.length===0)return o;let t=-1;for(;++t<e.length;)if(n.includes(e[t]))return!0;return!1}function T(n,e,o){const t=(o.before||"")+(e||"")+(o.after||""),l=[],r=[],i={};let c=-1;for(;++c<n.unsafe.length;){const s=n.unsafe[c];if(!C(n.stack,s))continue;const h=g(s);let a;for(;a=h.exec(t);){const p="before"in s||!!s.atBreak,m="after"in s,d=a.index+(p?a[1].length:0);l.includes(d)?(i[d].before&&!p&&(i[d].before=!1),i[d].after&&!m&&(i[d].after=!1)):(l.push(d),i[d]={before:p,after:m})}}l.sort(S);let u=o.before?o.before.length:0;const f=t.length-(o.after?o.after.length:0);for(c=-1;++c<l.length;){const s=l[c];s<u||s>=f||s+1<f&&l[c+1]===s+1&&i[s].after&&!i[s+1].before&&!i[s+1].after||l[c-1]===s-1&&i[s].before&&!i[s-1].before&&!i[s-1].after||(u!==s&&r.push(b(t.slice(u,s),"\\")),u=s,/[!-/:-@[-`{-~]/.test(t.charAt(s))&&(!o.encode||!o.encode.includes(t.charAt(s)))?r.push("\\"):(r.push("&#x"+t.charCodeAt(s).toString(16).toUpperCase()+";"),u++))}return r.push(b(t.slice(u,f),o.after)),r.join("")}function S(n,e){return n-e}function b(n,e){const o=/\\(?=[!-/:-@[-`{-~])/g,t=[],l=[],r=n+e;let i=-1,c=0,u;for(;u=o.exec(r);)t.push(u.index);for(;++i<t.length;)c!==t[i]&&l.push(n.slice(c,t[i])),l.push("\\"),c=t[i];return l.push(n.slice(c)),l.join("")}function _(n){const e=n||{},o=e.now||{};let t=e.lineShift||0,l=o.line||1,r=o.column||1;return{move:u,current:i,shift:c};function i(){return{now:{line:l,column:r},lineShift:t}}function c(f){t+=f}function u(f){const s=f||"",h=s.split(/\r?\n|\r/g),a=h[h.length-1];return l+=h.length-1,r=h.length===1?r+a.length:1+a.length+t,s}}function z(n,e,o){const t=e.indexStack,l=n.children||[],r=[];let i=-1,c=o.before;t.push(-1);let u=e.createTracker(o);for(;++i<l.length;){const f=l[i];let s;if(t[t.length-1]=i,i+1<l.length){let h=e.handle.handlers[l[i+1].type];h&&h.peek&&(h=h.peek),s=h?h(l[i+1],n,e,{before:"",after:"",...u.current()}).charAt(0):""}else s=o.after;r.length>0&&(c==="\r"||c===`
`)&&f.type==="html"&&(r[r.length-1]=r[r.length-1].replace(/(\r?\n|\r)$/," "),c=" ",u=e.createTracker(o),u.move(r.join(""))),r.push(u.move(e.handle(f,n,e,{...u.current(),before:c,after:s}))),c=r[r.length-1].slice(-1)}return t.pop(),r.join("")}y.peek=j;function y(n,e,o){let t=n.value||"",l="`",r=-1;for(;new RegExp("(^|[^`])"+l+"([^`]|$)").test(t);)l+="`";for(/[^ \r\n]/.test(t)&&(/^[ \r\n]/.test(t)&&/[ \r\n]$/.test(t)||/^`|`$/.test(t))&&(t=" "+t+" ");++r<o.unsafe.length;){const i=o.unsafe[r],c=g(i);let u;if(i.atBreak)for(;u=c.exec(t);){let f=u.index;t.charCodeAt(f)===10&&t.charCodeAt(f-1)===13&&f--,t=t.slice(0,f)+" "+t.slice(u.index+1)}}return l+t+l}function j(){return"`"}function v(n){const e=n.options.bullet||"*";if(e!=="*"&&e!=="+"&&e!=="-")throw new Error("Cannot serialize items with `"+e+"` for `options.bullet`, expected `*`, `+`, or `-`");return e}function A(n){const e=n.options.listItemIndent||"tab";if(e===1||e==="1")return"one";if(e!=="tab"&&e!=="one"&&e!=="mixed")throw new Error("Cannot serialize items with `"+e+"` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");return e}function F(n,e,o,t){const l=A(o);let r=o.bulletCurrent||v(o);e&&e.type==="list"&&e.ordered&&(r=(typeof e.start=="number"&&e.start>-1?e.start:1)+(o.options.incrementListMarker===!1?0:e.children.indexOf(n))+r);let i=r.length+1;(l==="tab"||l==="mixed"&&(e&&e.type==="list"&&e.spread||n.spread))&&(i=Math.ceil(i/4)*4);const c=o.createTracker(t);c.move(r+" ".repeat(i-r.length)),c.shift(i);const u=o.enter("listItem"),f=o.indentLines(o.containerFlow(n,c.current()),s);return u(),f;function s(h,a,p){return a?(p?"":" ".repeat(i))+h:(p?r:r+" ".repeat(i-r.length))+h}}export{L as a,z as b,$ as c,y as d,E as i,F as l,T as s,_ as t};
