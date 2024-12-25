
/**
 * 由 MrZhang 提供技术支持
 * Powered by elegant-admin
 * Github https://github.com/zhangyao1990/elegant-admin
 */

import{s as w,f as A,h as O}from"./property-information-CayEAvHG.js";import{h as q}from"./html-void-elements-xKVpUWYB.js";import{z as S}from"./zwitch-C2o2j-tx.js";import{s as m}from"./stringify-entities-CnbJBXhi.js";import{c as d}from"./ccount-c2V3InAJ.js";import{s as D}from"./comma-separated-tokens-CRUGqg4f.js";import{s as j}from"./space-separated-tokens-D7QSIrTI.js";import{w as p}from"./hast-util-whitespace-D1ONPEmv.js";function v(n,s,e,t){return t.settings.bogusComments?"<?"+m(n.value,Object.assign({},t.settings.characterReferences,{subset:[">"]}))+">":"<!--"+n.value.replace(/^>|^->|<!--|-->|--!>|<!-$/g,a)+"-->";function a(i){return m(i,Object.assign({},t.settings.characterReferences,{subset:["<",">"]}))}}function R(n,s,e,t){return"<!"+(t.settings.upperDoctype?"DOCTYPE":"doctype")+(t.settings.tightDoctype?"":" ")+"html>"}const o=_(1),x=_(-1);function _(n){return s;function s(e,t,a){const i=e?e.children:[];let l=(t||0)+n,r=i&&i[l];if(!a)for(;r&&p(r);)l+=n,r=i[l];return r}}const $={}.hasOwnProperty;function C(n){return s;function s(e,t,a){return $.call(n,e.tagName)&&n[e.tagName](e,t,a)}}const h=C({html:k,head:f,body:L,p:P,li:z,dt:B,dd:H,rt:y,rp:y,optgroup:T,option:U,menuitem:I,colgroup:f,caption:f,thead:V,tbody:Y,tfoot:F,tr:G,td:b,th:b});function f(n,s,e){const t=o(e,s,!0);return!t||t.type!=="comment"&&!(t.type==="text"&&p(t.value.charAt(0)))}function k(n,s,e){const t=o(e,s);return!t||t.type!=="comment"}function L(n,s,e){const t=o(e,s);return!t||t.type!=="comment"}function P(n,s,e){const t=o(e,s);return t?t.type==="element"&&(t.tagName==="address"||t.tagName==="article"||t.tagName==="aside"||t.tagName==="blockquote"||t.tagName==="details"||t.tagName==="div"||t.tagName==="dl"||t.tagName==="fieldset"||t.tagName==="figcaption"||t.tagName==="figure"||t.tagName==="footer"||t.tagName==="form"||t.tagName==="h1"||t.tagName==="h2"||t.tagName==="h3"||t.tagName==="h4"||t.tagName==="h5"||t.tagName==="h6"||t.tagName==="header"||t.tagName==="hgroup"||t.tagName==="hr"||t.tagName==="main"||t.tagName==="menu"||t.tagName==="nav"||t.tagName==="ol"||t.tagName==="p"||t.tagName==="pre"||t.tagName==="section"||t.tagName==="table"||t.tagName==="ul"):!e||!(e.type==="element"&&(e.tagName==="a"||e.tagName==="audio"||e.tagName==="del"||e.tagName==="ins"||e.tagName==="map"||e.tagName==="noscript"||e.tagName==="video"))}function z(n,s,e){const t=o(e,s);return!t||t.type==="element"&&t.tagName==="li"}function B(n,s,e){const t=o(e,s);return t&&t.type==="element"&&(t.tagName==="dt"||t.tagName==="dd")}function H(n,s,e){const t=o(e,s);return!t||t.type==="element"&&(t.tagName==="dt"||t.tagName==="dd")}function y(n,s,e){const t=o(e,s);return!t||t.type==="element"&&(t.tagName==="rp"||t.tagName==="rt")}function T(n,s,e){const t=o(e,s);return!t||t.type==="element"&&t.tagName==="optgroup"}function U(n,s,e){const t=o(e,s);return!t||t.type==="element"&&(t.tagName==="option"||t.tagName==="optgroup")}function I(n,s,e){const t=o(e,s);return!t||t.type==="element"&&(t.tagName==="menuitem"||t.tagName==="hr"||t.tagName==="menu")}function V(n,s,e){const t=o(e,s);return t&&t.type==="element"&&(t.tagName==="tbody"||t.tagName==="tfoot")}function Y(n,s,e){const t=o(e,s);return!t||t.type==="element"&&(t.tagName==="tbody"||t.tagName==="tfoot")}function F(n,s,e){return!o(e,s)}function G(n,s,e){const t=o(e,s);return!t||t.type==="element"&&t.tagName==="tr"}function b(n,s,e){const t=o(e,s);return!t||t.type==="element"&&(t.tagName==="td"||t.tagName==="th")}const J=C({html:K,head:M,body:Q,colgroup:W,tbody:X});function K(n){const s=o(n,-1);return!s||s.type!=="comment"}function M(n){const s=n.children,e=[];let t=-1;for(;++t<s.length;){const a=s[t];if(a.type==="element"&&(a.tagName==="title"||a.tagName==="base")){if(e.includes(a.tagName))return!1;e.push(a.tagName)}}return s.length>0}function Q(n){const s=o(n,-1,!0);return!s||s.type!=="comment"&&!(s.type==="text"&&p(s.value.charAt(0)))&&!(s.type==="element"&&(s.tagName==="meta"||s.tagName==="link"||s.tagName==="script"||s.tagName==="style"||s.tagName==="template"))}function W(n,s,e){const t=x(e,s),a=o(n,-1,!0);return e&&t&&t.type==="element"&&t.tagName==="colgroup"&&h(t,e.children.indexOf(t),e)?!1:a&&a.type==="element"&&a.tagName==="col"}function X(n,s,e){const t=x(e,s),a=o(n,-1);return e&&t&&t.type==="element"&&(t.tagName==="thead"||t.tagName==="tbody")&&h(t,e.children.indexOf(t),e)?!1:a&&a.type==="element"&&a.tagName==="tr"}const u={name:[[`	
\f\r &/=>`.split(""),`	
\f\r "&'/=>\``.split("")],[`\0	
\f\r "&'/<=>`.split(""),`\0	
\f\r "&'/<=>\``.split("")]],unquoted:[[`	
\f\r &>`.split(""),`\0	
\f\r "&'<=>\``.split("")],[`\0	
\f\r "&'<=>\``.split(""),`\0	
\f\r "&'<=>\``.split("")]],single:[["&'".split(""),"\"&'`".split("")],["\0&'".split(""),"\0\"&'`".split("")]],double:[['"&'.split(""),"\"&'`".split("")],['\0"&'.split(""),"\0\"&'`".split("")]]};function Z(n,s,e,t){const a=t.schema,i=a.space==="svg"?!1:t.settings.omitOptionalTags;let l=a.space==="svg"?t.settings.closeEmptyElements:t.settings.voids.includes(n.tagName.toLowerCase());const r=[];let c;a.space==="html"&&n.tagName==="svg"&&(t.schema=w);const g=tt(t,n.properties),N=t.all(a.space==="html"&&n.tagName==="template"?n.content:n);return t.schema=a,N&&(l=!1),(g||!i||!J(n,s,e))&&(r.push("<",n.tagName,g?" "+g:""),l&&(a.space==="svg"||t.settings.closeSelfClosing)&&(c=g.charAt(g.length-1),(!t.settings.tightSelfClosing||c==="/"||c&&c!=='"'&&c!=="'")&&r.push(" "),r.push("/")),r.push(">")),r.push(N),!l&&(!i||!h(n,s,e))&&r.push("</"+n.tagName+">"),r.join("")}function tt(n,s){const e=[];let t=-1,a;if(s){for(a in s)if(s[a]!==void 0&&s[a]!==null){const i=et(n,a,s[a]);i&&e.push(i)}}for(;++t<e.length;){const i=n.settings.tightAttributes?e[t].charAt(e[t].length-1):null;t!==e.length-1&&i!=='"'&&i!=="'"&&(e[t]+=" ")}return e.join("")}function et(n,s,e){const t=A(n.schema,s),a=n.settings.allowParseErrors&&n.schema.space==="html"?0:1,i=n.settings.allowDangerousCharacters?0:1;let l=n.quote,r;if(t.overloadedBoolean&&(e===t.attribute||e==="")?e=!0:(t.boolean||t.overloadedBoolean&&typeof e!="string")&&(e=!!e),e==null||e===!1||typeof e=="number"&&Number.isNaN(e))return"";const c=m(t.attribute,Object.assign({},n.settings.characterReferences,{subset:u.name[a][i]}));return e===!0||(e=Array.isArray(e)?(t.commaSeparated?D:j)(e,{padLeft:!n.settings.tightCommaSeparatedLists}):String(e),n.settings.collapseEmptyAttributes&&!e)?c:(n.settings.preferUnquoted&&(r=m(e,Object.assign({},n.settings.characterReferences,{subset:u.unquoted[a][i],attribute:!0}))),r!==e&&(n.settings.quoteSmart&&d(e,l)>d(e,n.alternative)&&(l=n.alternative),r=l+m(e,Object.assign({},n.settings.characterReferences,{subset:(l==="'"?u.single:u.double)[a][i],attribute:!0}))+l),c+(r&&"="+r))}function E(n,s,e,t){return e&&e.type==="element"&&(e.tagName==="script"||e.tagName==="style")?n.value:m(n.value,Object.assign({},t.settings.characterReferences,{subset:["<","&"]}))}function nt(n,s,e,t){return t.settings.allowDangerousHtml?n.value:E(n,s,e,t)}function st(n,s,e,t){return t.all(n)}const at=S("type",{invalid:ot,unknown:it,handlers:{comment:v,doctype:R,element:Z,raw:nt,root:st,text:E}});function ot(n){throw new Error("Expected node, not `"+n+"`")}function it(n){throw new Error("Cannot compile unknown node `"+n.type+"`")}function dt(n,s){const e=s||{},t=e.quote||'"',a=t==='"'?"'":'"';if(t!=='"'&&t!=="'")throw new Error("Invalid quote `"+t+"`, expected `'` or `\"`");return{one:rt,all:lt,settings:{omitOptionalTags:e.omitOptionalTags||!1,allowParseErrors:e.allowParseErrors||!1,allowDangerousCharacters:e.allowDangerousCharacters||!1,quoteSmart:e.quoteSmart||!1,preferUnquoted:e.preferUnquoted||!1,tightAttributes:e.tightAttributes||!1,upperDoctype:e.upperDoctype||!1,tightDoctype:e.tightDoctype||!1,bogusComments:e.bogusComments||!1,tightCommaSeparatedLists:e.tightCommaSeparatedLists||!1,tightSelfClosing:e.tightSelfClosing||!1,collapseEmptyAttributes:e.collapseEmptyAttributes||!1,allowDangerousHtml:e.allowDangerousHtml||!1,voids:e.voids||q,characterReferences:e.characterReferences||e.entities||{},closeSelfClosing:e.closeSelfClosing||!1,closeEmptyElements:e.closeEmptyElements||!1},schema:e.space==="svg"?w:O,quote:t,alternative:a}.one(Array.isArray(n)?{type:"root",children:n}:n,void 0,void 0)}function rt(n,s,e){return at(n,s,e,this)}function lt(n){const s=[],e=n&&n.children||[];let t=-1;for(;++t<e.length;)s[t]=this.one(e[t],t,n);return s.join("")}export{dt as t};
