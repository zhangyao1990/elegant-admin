
/**
 * 由 MrZhang 提供技术支持
 * Powered by elegant-admin
 * Github https://github.com/zhangyao1990/elegant-admin
 */

import{d as B,r as I,w as q,i as p,b as N,a as h,c as K,f as S,k as o,q as T,_ as k,X as U,S as V,j as w,U as D,Q as z,F,a8 as H,R as M,p as b,V as Q,$ as R}from"./@vue-B5ZJ3lyG.js";import{v as E}from"./index-qeCTDZwl.js";import{_ as j}from"./icon.vue_vue_type_script_setup_true_lang-Ct1VJFCF.js";import{d as X}from"./vuedraggable-CX4WvCQN.js";const $=B({name:"ETreeNodeItem",__name:"treeNodeItem",props:{schema:{}},setup(_){const a=_,i=I(a.schema);q(()=>a.schema,e=>{i.value=e},{deep:!0});const g=p("slots",{}),y=p("pageSchema",{}),c=p("expandedKeys"),u=p("treeProps"),m=p("selectedKeys"),x=p("handleSelect"),f=N(()=>c.value.includes(a.schema.id??"")),l=B({setup(){return()=>{var e;return w("span",{class:{text:!0,hover:u.hoverKey===a.schema.id,checked:m.value.includes(a.schema.id)},onClick:()=>x(a.schema.id,a.schema)},((e=g["tree-node"])==null?void 0:e.call(g,a))??w("span",{class:"elegant-text-padding flex"},{default:()=>{var s;return[w("span",{class:"max-w-full truncate"},a.schema.label??((s=E.getComponentConfingByType(a.schema.type))==null?void 0:s.defaultSchema.label)),w("span",{class:"elegant-node-type-text flex-1 w-0 truncate"},a.schema.id)]}}))}}});function r(){const e=a.schema.id;if(!e)return!1;c.value.includes(e)?c.value=c.value.filter(s=>s!==e):c.value.push(e)}function t(){var s;const e=a.schema.id;if(!e||!((s=a.schema.children)!=null&&s.length))return!1;c.value.push(e)}return t(),(e,s)=>{var d,v,n,C,P;return h(),K("li",{class:T(["elegant-tree-node",{expanded:(d=a.schema.children)==null?void 0:d.length,"level-1":a.schema.id===((v=o(y).schemas[0])==null?void 0:v.id)}])},[S("a",null,[(n=a.schema.children)!=null&&n.length&&a.schema.id!==((C=o(y).schemas[0])==null?void 0:C.id)?(h(),K("span",{key:0,class:T(["icon-expanded",{expanded:f.value}]),onClick:r},[k(o(j),{name:"icon--elegant--caret-right-outlined"})],2)):U("",!0),k(o(l))]),(P=a.schema.children)!=null&&P.length?(h(),V(A,{key:0,schemas:o(i).children,"onUpdate:schemas":s[0]||(s[0]=L=>o(i).children=L),class:T(["elegant-tree-sublist",{expanded:f.value}]),"parent-schema":a.schema},null,8,["schemas","class","parent-schema"])):U("",!0)],2)}}}),G={key:1},A=B({name:"ETreeNodes",__name:"treeNodes",props:{schemas:{},parentSchema:{}},emits:["update:schemas"],setup(_,{emit:a}){const i=_,g=a,y=p("designer"),c=p("pageSchema"),u=p("treeProps"),m=N({get(){return i.schemas},set(l){g("update:schemas",l)}});function x(l){y.setDisableHover(!0),y.setCheckedNode(m.value[l])}function f(l){var r,t,e;return l.id===((r=c.schemas[0])==null?void 0:r.id)||(e=(t=E.getComponentConfingByType(l.type))==null?void 0:t.editConstraints)!=null&&e.immovable?"unmover-item":"draggable-item"}return(l,r)=>{var t,e,s,d,v;return(s=(e=o(E).getComponentConfingByType(((t=i.parentSchema)==null?void 0:t.type)||""))==null?void 0:e.editConstraints)!=null&&s.childImmovable?(h(),K("ul",G,[(h(!0),K(F,null,H(m.value,n=>(h(),V($,{key:n.id,schema:n},null,8,["schema"]))),128))])):(h(),V(o(X),z({key:0,modelValue:m.value,"onUpdate:modelValue":r[0]||(r[0]=n=>m.value=n),"item-key":"id","component-data":{},class:"elegant-draggable-range"},{animation:200,tag:"ul",group:"tree-draggable",ghostClass:"moveing",draggable:".draggable-item",disabled:!o(u).draggable||((d=m.value[0])==null?void 0:d.id)===((v=o(c).schemas[0])==null?void 0:v.id)},{onStart:r[1]||(r[1]=n=>x(n.oldIndex))}),{item:D(({element:n})=>[(h(),V($,{key:n.id,class:T(f(n)),schema:n},null,8,["class","schema"]))]),_:1},16,["modelValue"]))}}}),J={class:"elegant-tree h-full flex flex-col"},O={class:"elegant-search-box px-10px py-6px"},W={class:"elegant-tree-main h-0 flex-1 overflow-auto"},Y={class:"pt-42px text-center text-gray-400"},te=B({name:"ETree",__name:"tree",props:{options:{type:Array,default:()=>[]},hoverKey:{type:String,default:""},selectedKeys:{type:Array,default:()=>[]},draggable:{type:Boolean,default:!1}},emits:["update:selectedKeys","nodeClick"],setup(_,{emit:a}){const i=_,g=a,y=M();b("slots",y);const c=E.getComponent("input"),u=I(""),m=I([]),x=N({get(){return i.selectedKeys},set(t){g("update:selectedKeys",t)}}),f=N({get(){return l(i.options,u.value)},set(t){}});function l(t,e){const s=[];return t.forEach(d=>{var v;if((v=d.label)!=null&&v.includes(e))s.push(d);else if(d.children){const n=l(d.children,e);if(n.length>0){const C={...d};C.children=n,s.push(C)}}}),s}function r(t,e){x.value=[t],g("nodeClick",{id:t,componentSchema:e})}return b("expandedKeys",m),b("selectedKeys",x),b("treeProps",i),b("handleSelect",r),(t,e)=>(h(),K("div",J,[S("div",O,[k(o(c),{modelValue:u.value,"onUpdate:modelValue":e[0]||(e[0]=s=>u.value=s),value:u.value,"onUpdate:value":e[1]||(e[1]=s=>u.value=s),placeholder:"搜索节点",clearable:"","allow-clear":""},{prefix:D(()=>[k(o(j),{name:"icon--elegant--search-rounded"})]),_:1},8,["modelValue","value"])]),S("div",W,[S("ul",null,[k(A,{schemas:f.value,"onUpdate:schemas":e[2]||(e[2]=s=>f.value=s)},null,8,["schemas"])]),Q(S("div",Y," 没有查询到的数据 ",512),[[R,!f.value.length]])])]))}});export{te as _};
