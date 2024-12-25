
/**
 * 由 MrZhang 提供技术支持
 * Powered by elegant-admin
 * Github https://github.com/zhangyao1990/elegant-admin
 */

import{s as u}from"./unist-util-stringify-position-Ch_qCilz.js";class s extends Error{constructor(i,t,o){const n=[null,null];let e={start:{line:null,column:null},end:{line:null,column:null}};if(super(),typeof t=="string"&&(o=t,t=void 0),typeof o=="string"){const l=o.indexOf(":");l===-1?n[1]=o:(n[0]=o.slice(0,l),n[1]=o.slice(l+1))}t&&("type"in t||"position"in t?t.position&&(e=t.position):"start"in t||"end"in t?e=t:("line"in t||"column"in t)&&(e.start=t)),this.name=u(t)||"1:1",this.message=typeof i=="object"?i.message:i,this.stack="",typeof i=="object"&&i.stack&&(this.stack=i.stack),this.reason=this.message,this.fatal,this.line=e.start.line,this.column=e.start.column,this.position=e,this.source=n[0],this.ruleId=n[1],this.file,this.actual,this.expected,this.url,this.note}}s.prototype.file="";s.prototype.name="";s.prototype.reason="";s.prototype.message="";s.prototype.stack="";s.prototype.fatal=null;s.prototype.column=null;s.prototype.line=null;s.prototype.source=null;s.prototype.ruleId=null;s.prototype.position=null;export{s as V};
