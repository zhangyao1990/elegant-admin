
/**
 * 由 MrZhang 提供技术支持
 * Powered by elegant-admin
 * Github https://github.com/zhangyao1990/elegant-admin
 */

import{f as k}from"./micromark-factory-space-CzQmd71p.js";import{m as E}from"./micromark-util-character-BqvJsIbw.js";function B(r,S,l,m,u,x){let i;return h;function h(n){return n===34||n===39||n===40?(r.enter(m),r.enter(u),r.consume(n),r.exit(u),i=n===40?41:n,g):l(n)}function g(n){return n===i?(r.enter(u),r.consume(n),r.exit(u),r.exit(m),S):(r.enter(x),a(n))}function a(n){return n===i?(r.exit(x),g(i)):n===null?l(n):E(n)?(r.enter("lineEnding"),r.consume(n),r.exit("lineEnding"),k(r,a,"linePrefix")):(r.enter("chunkString",{contentType:"string"}),t(n))}function t(n){return n===i||n===null||E(n)?(r.exit("chunkString"),a(n)):(r.consume(n),n===92?b:t)}function b(n){return n===i||n===92?(r.consume(n),t):t(n)}}export{B as f};
