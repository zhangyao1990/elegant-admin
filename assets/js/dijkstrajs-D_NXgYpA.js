
/**
 * 由 MrZhang 提供技术支持
 * Powered by elegant-admin
 * Github https://github.com/zhangyao1990/elegant-admin
 */

var l={exports:{}};(function(y){var u={single_source_shortest_paths:function(o,e,t){var r={},n={};n[e]=0;var i=u.PriorityQueue.make();i.push(e,0);for(var f,p,s,c,_,h,a,v,d;!i.empty();){f=i.pop(),p=f.value,c=f.cost,_=o[p]||{};for(s in _)_.hasOwnProperty(s)&&(h=_[s],a=c+h,v=n[s],d=typeof n[s]>"u",(d||v>a)&&(n[s]=a,i.push(s,a),r[s]=p))}if(typeof t<"u"&&typeof n[t]>"u"){var m=["Could not find a path from ",e," to ",t,"."].join("");throw new Error(m)}return r},extract_shortest_path_from_predecessor_list:function(o,e){for(var t=[],r=e;r;)t.push(r),o[r],r=o[r];return t.reverse(),t},find_path:function(o,e,t){var r=u.single_source_shortest_paths(o,e,t);return u.extract_shortest_path_from_predecessor_list(r,t)},PriorityQueue:{make:function(o){var e=u.PriorityQueue,t={},r;o=o||{};for(r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);return t.queue=[],t.sorter=o.sorter||e.default_sorter,t},default_sorter:function(o,e){return o.cost-e.cost},push:function(o,e){var t={value:o,cost:e};this.queue.push(t),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};y.exports=u})(l);var x=l.exports;export{x as d};
