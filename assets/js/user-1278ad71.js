
	/**
 * 	由 智慧网络医院 提供技术支持
 */
	
import{A as e,P as r}from"./index-5246f43c.js";const o=s=>e.post(r+"/sysUser/page",s),p=s=>e.post(r+"/sysUser/save",s),n=s=>e.post(r+"/user/import",s),a=s=>e.put(r+"/sysUser/update",s),d=s=>e.get(r+`/sysUser/${s.id}`,s),i=s=>e.delete(r+"/sysUser/delete",s),U=s=>e.put(r+`/sysUser/resetPwd/${s.id}`),u=s=>e.post(r+"/user/export",s,{responseType:"blob"});export{n as B,o as a,p as b,a as c,i as d,u as e,d as g,U as r};
