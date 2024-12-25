
/**
 * 由 MrZhang 提供技术支持
 * Powered by elegant-admin
 * Github https://github.com/zhangyao1990/elegant-admin
 */

import{f as h}from"./micromark-factory-space-CzQmd71p.js";import{j as m,m as C,f as c}from"./micromark-util-character-BqvJsIbw.js";const L={tokenize:l},g={text:{91:L}};function l(n,e,r){const a=this;return i;function i(t){return a.previous!==null||!a._gfmTasklistFirstContentOfListItem?r(t):(n.enter("taskListCheck"),n.enter("taskListCheckMarker"),n.consume(t),n.exit("taskListCheckMarker"),s)}function s(t){return m(t)?(n.enter("taskListCheckValueUnchecked"),n.consume(t),n.exit("taskListCheckValueUnchecked"),k):t===88||t===120?(n.enter("taskListCheckValueChecked"),n.consume(t),n.exit("taskListCheckValueChecked"),k):r(t)}function k(t){return t===93?(n.enter("taskListCheckMarker"),n.consume(t),n.exit("taskListCheckMarker"),n.exit("taskListCheck"),u):r(t)}function u(t){return C(t)?e(t):c(t)?n.check({tokenize:o},e,r)(t):r(t)}}function o(n,e,r){return h(n,a,"whitespace");function a(i){return i===null?r(i):e(i)}}export{g};
