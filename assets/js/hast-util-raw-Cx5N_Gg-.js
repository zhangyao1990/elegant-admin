
/**
 * 由 MrZhang 提供技术支持
 * Powered by elegant-admin
 * Github https://github.com/zhangyao1990/elegant-admin
 */

import{P}from"./parse5-B4612BwT.js";import{h as S}from"./html-void-elements-xKVpUWYB.js";import{w as _}from"./web-namespaces-bsVAaBS1.js";import{z as b}from"./zwitch-C2o2j-tx.js";import{f as L}from"./hast-util-from-parse5-C8WpWA7d.js";import{v as M}from"./unist-util-visit-SwKB2sUE.js";import{p as N,a as v}from"./unist-util-position-KiAvrw8y.js";import{t as D}from"./hast-util-to-parse5-Cy1A4wX8.js";const F="IN_TEMPLATE_MODE",K="DATA_STATE",j="CHARACTER_TOKEN",B="START_TAG_TOKEN",H="END_TAG_TOKEN",G="COMMENT_TOKEN",U="DOCTYPE_TOKEN",Q={sourceCodeLocationInfo:!0,scriptingEnabled:!1},W=function(n,o,i){let T=-1;const r=new P(Q),d=b("type",{handlers:{root:A,element:y,text:O,comment:g,doctype:R,raw:I},unknown:J});let E,t,c,a,l;if(Z(o)&&(i=o,o=void 0),i&&i.passThrough)for(;++T<i.passThrough.length;)d.handlers[i.passThrough[T]]=x;const m=L(X(n)?C():w(),o);if(E&&M(m,"comment",(e,s,u)=>{const h=e;if(h.value.stitch&&u!==null&&s!==null)return u.children[s]=h.value.stitch,s}),n.type!=="root"&&m.type==="root"&&m.children.length===1)return m.children[0];return m;function w(){const e={nodeName:"template",tagName:"template",attrs:[],namespaceURI:_.html,childNodes:[]},s={nodeName:"documentmock",tagName:"documentmock",attrs:[],namespaceURI:_.html,childNodes:[]},u={nodeName:"#document-fragment",childNodes:[]};if(r._bootstrap(s,e),r._pushTmplInsertionMode(F),r._initTokenizerForFragmentParsing(),r._insertFakeRootElement(),r._resetInsertionMode(),r._findFormInFragmentContext(),t=r.tokenizer,!t)throw new Error("Expected `tokenizer`");return c=t.preprocessor,l=t.__mixins[0],a=l.posTracker,d(n),p(),r._adoptNodes(s.childNodes[0],u),u}function C(){const e=r.treeAdapter.createDocument();if(r._bootstrap(e,void 0),t=r.tokenizer,!t)throw new Error("Expected `tokenizer`");return c=t.preprocessor,l=t.__mixins[0],a=l.posTracker,d(n),p(),e}function k(e){let s=-1;if(e)for(;++s<e.length;)d(e[s])}function A(e){k(e.children)}function y(e){p(),r._processInputToken(V(e)),k(e.children),S.includes(e.tagName)||(p(),r._processInputToken(q(e)))}function O(e){p(),r._processInputToken({type:j,chars:e.value,location:f(e)})}function R(e){p(),r._processInputToken({type:U,name:"html",forceQuirks:!1,publicId:"",systemId:"",location:f(e)})}function g(e){p(),r._processInputToken({type:G,data:e.value,location:f(e)})}function I(e){const s=N(e),u=s.line||1,h=s.column||1,z=s.offset||0;if(!c)throw new Error("Expected `preprocessor`");if(!t)throw new Error("Expected `tokenizer`");if(!a)throw new Error("Expected `posTracker`");if(!l)throw new Error("Expected `locationTracker`");c.html=void 0,c.pos=-1,c.lastGapPos=-1,c.lastCharPos=-1,c.gapStack=[],c.skipNextNewLine=!1,c.lastChunkWritten=!1,c.endOfChunkHit=!1,a.isEol=!1,a.lineStartPos=-h+1,a.droppedBufferSize=z,a.offset=0,a.col=1,a.line=u,l.currentAttrLocation=void 0,l.ctLoc=f(e),t.write(e.value),r._runParsingLoop(null),(t.state==="NAMED_CHARACTER_REFERENCE_STATE"||t.state==="NUMERIC_CHARACTER_REFERENCE_END_STATE")&&(c.lastChunkWritten=!0,t[t.state](t._consume()))}function x(e){E=!0;let s;"children"in e?s={...e,children:W({type:"root",children:e.children},o,i).children}:s={...e},g({type:"comment",value:{stitch:s}})}function p(){if(!t)throw new Error("Expected `tokenizer`");if(!a)throw new Error("Expected `posTracker`");const e=t.currentCharacterToken;e&&(e.location.endLine=a.line,e.location.endCol=a.col+1,e.location.endOffset=a.offset+1,r._processInputToken(e)),t.tokenQueue=[],t.state=K,t.returnState="",t.charRefCode=-1,t.tempBuff=[],t.lastStartTagName="",t.consumedAfterSnapshot=-1,t.active=!1,t.currentCharacterToken=void 0,t.currentToken=void 0,t.currentAttr=void 0}};function V(n){const o=Object.assign(f(n));return o.startTag=Object.assign({},o),{type:B,tagName:n.tagName,selfClosing:!1,attrs:Y(n),location:o}}function Y(n){return D({tagName:n.tagName,type:"element",properties:n.properties,children:[]}).attrs}function q(n){const o=Object.assign(f(n));return o.startTag=Object.assign({},o),{type:H,tagName:n.tagName,attrs:[],location:o}}function J(n){throw new Error("Cannot compile `"+n.type+"` node")}function X(n){const o=n.type==="root"?n.children[0]:n;return!!(o&&(o.type==="doctype"||o.type==="element"&&o.tagName==="html"))}function f(n){const o=N(n),i=v(n);return{startLine:o.line,startCol:o.column,startOffset:o.offset,endLine:i.line,endCol:i.column,endOffset:i.offset}}function Z(n){return!!(n&&!("message"in n&&"messages"in n))}export{W as r};
