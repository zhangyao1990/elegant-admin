
/**
 * 由 MrZhang 提供技术支持
 * Powered by elegant-admin
 * Github https://github.com/zhangyao1990/elegant-admin
 */

import{s as g}from"./micromark-util-chunked-DrRIdSP-.js";import{c as k}from"./micromark-util-classify-character-DVNw0Re0.js";import{r as d}from"./micromark-util-resolve-all-PQCKh0dx.js";function j(y){let h=(y||{}).singleTilde;const f={tokenize:S,resolveAll:m};return h==null&&(h=!0),{text:{126:f},insideSpan:{null:[f]},attentionMarkers:{null:[126]}};function m(r,i){let t=-1;for(;++t<r.length;)if(r[t][0]==="enter"&&r[t][1].type==="strikethroughSequenceTemporary"&&r[t][1]._close){let e=t;for(;e--;)if(r[e][0]==="exit"&&r[e][1].type==="strikethroughSequenceTemporary"&&r[e][1]._open&&r[t][1].end.offset-r[t][1].start.offset===r[e][1].end.offset-r[e][1].start.offset){r[t][1].type="strikethroughSequence",r[e][1].type="strikethroughSequence";const u={type:"strikethrough",start:Object.assign({},r[e][1].start),end:Object.assign({},r[t][1].end)},s={type:"strikethroughText",start:Object.assign({},r[e][1].end),end:Object.assign({},r[t][1].start)},o=[["enter",u,i],["enter",r[e][1],i],["exit",r[e][1],i],["enter",s,i]],l=i.parser.constructs.insideSpan.null;l&&g(o,o.length,0,d(l,r.slice(e+1,t),i)),g(o,o.length,0,[["exit",s,i],["enter",r[t][1],i],["exit",r[t][1],i],["exit",u,i]]),g(r,e-1,t-e+3,o),t=e+o.length-2;break}}for(t=-1;++t<r.length;)r[t][1].type==="strikethroughSequenceTemporary"&&(r[t][1].type="data");return r}function S(r,i,t){const e=this.previous,u=this.events;let s=0;return o;function o(n){return e===126&&u[u.length-1][1].type!=="characterEscape"?t(n):(r.enter("strikethroughSequenceTemporary"),l(n))}function l(n){const a=k(e);if(n===126)return s>1?t(n):(r.consume(n),s++,l);if(s<2&&!h)return t(n);const c=r.exit("strikethroughSequenceTemporary"),p=k(n);return c._open=!p||p===2&&!!a,c._close=!a||a===2&&!!p,i(n)}}}export{j as g};
