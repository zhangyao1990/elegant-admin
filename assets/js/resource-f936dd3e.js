
	/**
 * 	由 智慧网络医院 提供技术支持
 */
	
import{A as e,P as t}from"./index-5246f43c.js";const r=s=>e.post(t+"/apiPermissions/page",s),o=s=>e.post(t+"/apiPermissions/save",s),p=s=>e.put(t+"/apiPermissions/update",s),a=s=>e.get(t+`/apiPermissions/${s.id}`,s),n=s=>e.delete(t+"/apiPermissions/delete",s);export{a,o as b,n as d,p as e,r as g};
