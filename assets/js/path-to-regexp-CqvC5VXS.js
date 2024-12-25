
/**
 * 由 MrZhang 提供技术支持
 * Powered by elegant-admin
 * Github https://github.com/zhangyao1990/elegant-admin
 */

function D(r){for(var a=[],n=0;n<r.length;){var u=r[n];if(u==="*"||u==="+"||u==="?"){a.push({type:"MODIFIER",index:n,value:r[n++]});continue}if(u==="\\"){a.push({type:"ESCAPED_CHAR",index:n++,value:r[n++]});continue}if(u==="{"){a.push({type:"OPEN",index:n,value:r[n++]});continue}if(u==="}"){a.push({type:"CLOSE",index:n,value:r[n++]});continue}if(u===":"){for(var w="",t=n+1;t<r.length;){var o=r.charCodeAt(t);if(o>=48&&o<=57||o>=65&&o<=90||o>=97&&o<=122||o===95){w+=r[t++];continue}break}if(!w)throw new TypeError("Missing parameter name at ".concat(n));a.push({type:"NAME",index:n,value:w}),n=t;continue}if(u==="("){var i=1,f="",t=n+1;if(r[t]==="?")throw new TypeError('Pattern cannot start with "?" at '.concat(t));for(;t<r.length;){if(r[t]==="\\"){f+=r[t++]+r[t++];continue}if(r[t]===")"){if(i--,i===0){t++;break}}else if(r[t]==="("&&(i++,r[t+1]!=="?"))throw new TypeError("Capturing groups are not allowed at ".concat(t));f+=r[t++]}if(i)throw new TypeError("Unbalanced pattern at ".concat(n));if(!f)throw new TypeError("Missing pattern at ".concat(n));a.push({type:"PATTERN",index:n,value:f}),n=t;continue}a.push({type:"CHAR",index:n,value:r[n++]})}return a.push({type:"END",index:n,value:""}),a}function S(r,a){a===void 0&&(a={});for(var n=D(r),u=a.prefixes,w=u===void 0?"./":u,t=a.delimiter,o=t===void 0?"/#?":t,i=[],f=0,h=0,v="",e=function(p){if(h<n.length&&n[h].type===p)return n[h++].value},E=function(p){var c=e(p);if(c!==void 0)return c;var l=n[h],A=l.type,O=l.index;throw new TypeError("Unexpected ".concat(A," at ").concat(O,", expected ").concat(p))},g=function(){for(var p="",c;c=e("CHAR")||e("ESCAPED_CHAR");)p+=c;return p},m=function(p){for(var c=0,l=o;c<l.length;c++){var A=l[c];if(p.indexOf(A)>-1)return!0}return!1},y=function(p){var c=i[i.length-1],l=p||(c&&typeof c=="string"?c:"");if(c&&!l)throw new TypeError('Must have text between two parameters, missing text after "'.concat(c.name,'"'));return!l||m(l)?"[^".concat(C(o),"]+?"):"(?:(?!".concat(C(l),")[^").concat(C(o),"])+?")};h<n.length;){var d=e("CHAR"),s=e("NAME"),b=e("PATTERN");if(s||b){var x=d||"";w.indexOf(x)===-1&&(v+=x,x=""),v&&(i.push(v),v=""),i.push({name:s||f++,prefix:x,suffix:"",pattern:b||y(x),modifier:e("MODIFIER")||""});continue}var R=d||e("ESCAPED_CHAR");if(R){v+=R;continue}v&&(i.push(v),v="");var P=e("OPEN");if(P){var x=g(),N=e("NAME")||"",T=e("PATTERN")||"",M=g();E("CLOSE"),i.push({name:N||(T?f++:""),pattern:N&&!T?y(x):T,prefix:x,suffix:M,modifier:e("MODIFIER")||""});continue}E("END")}return i}function F(r,a){return H(S(r,a),a)}function H(r,a){a===void 0&&(a={});var n=I(a),u=a.encode,w=u===void 0?function(f){return f}:u,t=a.validate,o=t===void 0?!0:t,i=r.map(function(f){if(typeof f=="object")return new RegExp("^(?:".concat(f.pattern,")$"),n)});return function(f){for(var h="",v=0;v<r.length;v++){var e=r[v];if(typeof e=="string"){h+=e;continue}var E=f?f[e.name]:void 0,g=e.modifier==="?"||e.modifier==="*",m=e.modifier==="*"||e.modifier==="+";if(Array.isArray(E)){if(!m)throw new TypeError('Expected "'.concat(e.name,'" to not repeat, but got an array'));if(E.length===0){if(g)continue;throw new TypeError('Expected "'.concat(e.name,'" to not be empty'))}for(var y=0;y<E.length;y++){var d=w(E[y],e);if(o&&!i[v].test(d))throw new TypeError('Expected all "'.concat(e.name,'" to match "').concat(e.pattern,'", but got "').concat(d,'"'));h+=e.prefix+d+e.suffix}continue}if(typeof E=="string"||typeof E=="number"){var d=w(String(E),e);if(o&&!i[v].test(d))throw new TypeError('Expected "'.concat(e.name,'" to match "').concat(e.pattern,'", but got "').concat(d,'"'));h+=e.prefix+d+e.suffix;continue}if(!g){var s=m?"an array":"a string";throw new TypeError('Expected "'.concat(e.name,'" to be ').concat(s))}}return h}}function C(r){return r.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function I(r){return r&&r.sensitive?"":"i"}export{F as c};
