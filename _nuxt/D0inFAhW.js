import{B as S,p as B,r as w,H as _,I as T,J as U,K as E,g as I,L as H,D as A,M as L,N as V,O as D,P as x,Q as F,R as O,S as N,T as M,C as z,U as W,V as Q}from"./B_dbTVkn.js";async function j(t,n=S()){const{path:d,matched:p}=n.resolve(t);if(!p.length||(n._routePreloaded||(n._routePreloaded=new Set),n._routePreloaded.has(d)))return;const g=n._preloadPromises=n._preloadPromises||[];if(g.length>4)return Promise.all(g).then(()=>j(t,n));n._routePreloaded.add(d);const e=p.map(a=>{var f;return(f=a.components)==null?void 0:f.default}).filter(a=>typeof a=="function");for(const a of e){const f=Promise.resolve(a()).catch(()=>{}).finally(()=>g.splice(g.indexOf(f)));g.push(f)}await Promise.all(g)}const $=(...t)=>t.find(n=>n!==void 0);function G(t){const n=t.componentName||"NuxtLink";function d(e){return typeof e=="string"&&e.startsWith("#")}function p(e,a){if(!e||t.trailingSlash!=="append"&&t.trailingSlash!=="remove")return e;if(typeof e=="string")return k(e,t.trailingSlash);const f="path"in e&&e.path!==void 0?e.path:a(e).path;return{...e,name:void 0,path:k(f,t.trailingSlash)}}function g(e){const a=S(),f=z(),i=x(()=>!!e.target&&e.target!=="_self"),v=x(()=>{const o=e.to||e.href||"";return typeof o=="string"&&N(o,{acceptRelative:!0})}),R=L("RouterLink"),y=typeof R!="string"?R.useLink:void 0,m=x(()=>{if(e.external)return!0;const o=e.to||e.href||"";return typeof o=="object"?!1:o===""||v.value}),r=x(()=>{const o=e.to||e.href||"";return m.value?o:p(o,a.resolve)}),c=m.value||y==null?void 0:y({...e,to:r}),b=x(()=>{var o;if(!r.value||v.value||d(r.value))return r.value;if(m.value){const P=typeof r.value=="object"&&"path"in r.value?O(r.value):r.value,C=typeof P=="object"?a.resolve(P).href:P;return p(C,a.resolve)}return typeof r.value=="object"?((o=a.resolve(r.value))==null?void 0:o.href)??null:p(M(f.app.baseURL,r.value),a.resolve)});return{to:r,hasTarget:i,isAbsoluteUrl:v,isExternal:m,href:b,isActive:(c==null?void 0:c.isActive)??x(()=>r.value===a.currentRoute.value.path),isExactActive:(c==null?void 0:c.isExactActive)??x(()=>r.value===a.currentRoute.value.path),route:(c==null?void 0:c.route)??x(()=>a.resolve(r.value)),async navigate(){await F(b.value,{replace:e.replace,external:m.value||i.value})}}}return B({name:n,props:{to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},prefetchOn:{type:[String,Object],default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1},custom:{type:Boolean,default:void 0,required:!1}},useLink:g,setup(e,{slots:a}){const f=S(),{to:i,href:v,navigate:R,isExternal:y,hasTarget:m,isAbsoluteUrl:r}=g(e),c=w(!1),b=w(null),o=l=>{var s;b.value=e.custom?(s=l==null?void 0:l.$el)==null?void 0:s.nextElementSibling:l==null?void 0:l.$el};function P(l){var s,u;return!c.value&&(typeof e.prefetchOn=="string"?e.prefetchOn===l:((s=e.prefetchOn)==null?void 0:s[l])??((u=t.prefetchOn)==null?void 0:u[l]))&&(e.prefetch??t.prefetch)!==!1&&e.noPrefetch!==!0&&e.target!=="_blank"&&!X()}async function C(l=_()){if(c.value)return;c.value=!0;const s=typeof i.value=="string"?i.value:y.value?O(i.value):f.resolve(i.value).fullPath,u=y.value?new URL(s,window.location.href).href:s;await Promise.all([l.hooks.callHook("link:prefetch",u).catch(()=>{}),!y.value&&!m.value&&j(i.value,f).catch(()=>{})])}if(P("visibility")){const l=_();let s,u=null;T(()=>{const h=J();U(()=>{s=E(()=>{var q;(q=b==null?void 0:b.value)!=null&&q.tagName&&(u=h.observe(b.value,async()=>{u==null||u(),u=null,await C(l)}))})})}),I(()=>{s&&H(s),u==null||u(),u=null})}return()=>{var u;if(!y.value&&!m.value&&!d(i.value)){const h={ref:o,to:i.value,activeClass:e.activeClass||t.activeClass,exactActiveClass:e.exactActiveClass||t.exactActiveClass,replace:e.replace,ariaCurrentValue:e.ariaCurrentValue,custom:e.custom};return e.custom||(P("interaction")&&(h.onPointerenter=C.bind(null,void 0),h.onFocus=C.bind(null,void 0)),c.value&&(h.class=e.prefetchedClass||t.prefetchedClass),h.rel=e.rel||void 0),A(L("RouterLink"),h,a.default)}const l=e.target||null,s=$(e.noRel?"":e.rel,t.externalRelAttribute,r.value||m.value?"noopener noreferrer":"")||null;return e.custom?a.default?a.default({href:v.value,navigate:R,prefetch:C,get route(){if(!v.value)return;const h=new URL(v.value,window.location.href);return{path:h.pathname,fullPath:h.pathname,get query(){return V(h.search)},hash:h.hash,params:{},name:void 0,matched:[],redirectedFrom:void 0,meta:{},href:v.value}},rel:s,target:l,isExternal:y.value||m.value,isActive:!1,isExactActive:!1}):null:A("a",{ref:b,href:v.value||null,rel:s,target:l},(u=a.default)==null?void 0:u.call(a))}}})}const Z=G(D);function k(t,n){const d=n==="append"?W:Q;return N(t)&&!t.startsWith("http")?t:d(t,!0)}function J(){const t=_();if(t._observer)return t._observer;let n=null;const d=new Map,p=(e,a)=>(n||(n=new IntersectionObserver(f=>{for(const i of f){const v=d.get(i.target);(i.isIntersecting||i.intersectionRatio>0)&&v&&v()}})),d.set(e,a),n.observe(e),()=>{d.delete(e),n==null||n.unobserve(e),d.size===0&&(n==null||n.disconnect(),n=null)});return t._observer={observe:p}}const K=/2g/;function X(){const t=navigator.connection;return!!(t&&(t.saveData||K.test(t.effectiveType)))}export{Z as _};
