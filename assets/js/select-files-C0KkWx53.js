
/**
 * 由 MrZhang 提供技术支持
 * Powered by elegant-admin
 * Github https://github.com/zhangyao1990/elegant-admin
 */

var c=function(e){e===void 0&&(e={});var i=e.accept;i===void 0&&(i="");var t=e.capture;t===void 0&&(t=!1);var n=e.multiple;n===void 0&&(n=!1);var a=document.createElement("input");return a.type="file",a.accept=i,a.capture=t,a.multiple=n,a},u=function(e){return new Promise(function(i){var t=c(e);t.addEventListener("change",function(){return i(t.files||null)}),setTimeout(function(){var n=new MouseEvent("click");t.dispatchEvent(n)},0)})};export{u as s};
