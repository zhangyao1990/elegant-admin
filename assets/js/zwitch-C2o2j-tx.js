
/**
 * 由 MrZhang 提供技术支持
 * Powered by elegant-admin
 * Github https://github.com/zhangyao1990/elegant-admin
 */

const c={}.hasOwnProperty;function e(s,a){const i=a||{};function n(t,...d){let o=n.invalid;const r=n.handlers;if(t&&c.call(t,s)){const l=String(t[s]);o=c.call(r,l)?r[l]:n.unknown}if(o)return o.call(this,t,...d)}return n.handlers=i.handlers||{},n.invalid=i.invalid,n.unknown=i.unknown,n}export{e as z};
