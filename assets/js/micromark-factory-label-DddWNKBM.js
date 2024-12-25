
/**
 * 由 MrZhang 提供技术支持
 * Powered by elegant-admin
 * Github https://github.com/zhangyao1990/elegant-admin
 */

import{m as g,f as p}from"./micromark-util-character-BqvJsIbw.js";function k(r,h,E,m,i,x){const S=this;let t=0,l;return b;function b(n){return r.enter(m),r.enter(i),r.consume(n),r.exit(i),r.enter(x),a}function a(n){return t>999||n===null||n===91||n===93&&!l||n===94&&!t&&"_hiddenFootnoteSupport"in S.parser.constructs?E(n):n===93?(r.exit(x),r.enter(i),r.consume(n),r.exit(i),r.exit(m),h):g(n)?(r.enter("lineEnding"),r.consume(n),r.exit("lineEnding"),a):(r.enter("chunkString",{contentType:"string"}),u(n))}function u(n){return n===null||n===91||n===93||g(n)||t++>999?(r.exit("chunkString"),a(n)):(r.consume(n),l||(l=!p(n)),n===92?o:u)}function o(n){return n===91||n===92||n===93?(r.consume(n),t++,u):u(n)}}export{k as f};
