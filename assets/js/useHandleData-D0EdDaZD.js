
/**
 * 由 MrZhang 提供技术支持
 * Powered by elegant-admin
 * Github https://github.com/zhangyao1990/elegant-admin
 */

import{b as o,a as u}from"./element-plus-iUOJk6xm.js";function g(t,n={},e,r="warning"){return new Promise((a,s)=>{o.confirm(`是否${e}?`,"温馨提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:r,draggable:!0}).then(async()=>{if(!await t(n))return s(new Error("Something went wrong"));u({type:"success",message:`${e}成功!`}),a(!0)})})}export{g as u};
