function v(){}function I(t,n){for(const e in n)t[e]=n[e];return t}function q(t){return t()}function P(){return Object.create(null)}function y(t){t.forEach(q)}function B(t){return typeof t=="function"}function st(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let x;function ot(t,n){return x||(x=document.createElement("a")),x.href=n,t===x.href}function W(t){return Object.keys(t).length===0}function G(t,...n){if(t==null)return v;const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function at(t,n,e){t.$$.on_destroy.push(G(n,e))}function ft(t,n,e,i){if(t){const r=D(t,n,e,i);return t[0](r)}}function D(t,n,e,i){return t[1]&&i?I(e.ctx.slice(),t[1](i(n))):e.ctx}function _t(t,n,e,i){if(t[2]&&i){const r=t[2](i(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const o=[],c=Math.max(n.dirty.length,r.length);for(let s=0;s<c;s+=1)o[s]=n.dirty[s]|r[s];return o}return n.dirty|r}return n.dirty}function dt(t,n,e,i,r,o){if(r){const c=D(n,e,i,o);t.p(c,r)}}function ht(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}function mt(t){const n={};for(const e in t)e[0]!=="$"&&(n[e]=t[e]);return n}function pt(t){return t??""}let w=!1;function J(){w=!0}function K(){w=!1}function Q(t,n,e,i){for(;t<n;){const r=t+(n-t>>1);e(r)<=i?t=r+1:n=r}return t}function R(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const u=[];for(let l=0;l<n.length;l++){const f=n[l];f.claim_order!==void 0&&u.push(f)}n=u}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let r=0;for(let u=0;u<n.length;u++){const l=n[u].claim_order,f=(r>0&&n[e[r]].claim_order<=l?r+1:Q(1,r,g=>n[e[g]].claim_order,l))-1;i[u]=e[f]+1;const a=f+1;e[a]=u,r=Math.max(a,r)}const o=[],c=[];let s=n.length-1;for(let u=e[r]+1;u!=0;u=i[u-1]){for(o.push(n[u-1]);s>=u;s--)c.push(n[s]);s--}for(;s>=0;s--)c.push(n[s]);o.reverse(),c.sort((u,l)=>u.claim_order-l.claim_order);for(let u=0,l=0;u<c.length;u++){for(;l<o.length&&c[u].claim_order>=o[l].claim_order;)l++;const f=l<o.length?o[l]:null;t.insertBefore(c[u],f)}}function U(t,n){if(w){for(R(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function yt(t,n,e){w&&!e?U(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function V(t){t.parentNode&&t.parentNode.removeChild(t)}function gt(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function X(t){return document.createElement(t)}function Y(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function C(t){return document.createTextNode(t)}function xt(){return C(" ")}function bt(){return C("")}function $t(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function vt(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function Z(t){return Array.from(t.childNodes)}function tt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function L(t,n,e,i,r=!1){tt(t);const o=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const s=t[c];if(n(s)){const u=e(s);return u===void 0?t.splice(c,1):t[c]=u,r||(t.claim_info.last_index=c),s}}for(let c=t.claim_info.last_index-1;c>=0;c--){const s=t[c];if(n(s)){const u=e(s);return u===void 0?t.splice(c,1):t[c]=u,r?u===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,s}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function O(t,n,e,i){return L(t,r=>r.nodeName===n,r=>{const o=[];for(let c=0;c<r.attributes.length;c++){const s=r.attributes[c];e[s.name]||o.push(s.name)}o.forEach(c=>r.removeAttribute(c))},()=>i(n))}function wt(t,n,e){return O(t,n,e,X)}function Et(t,n,e){return O(t,n,e,Y)}function nt(t,n){return L(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>C(n),!0)}function Nt(t){return nt(t," ")}function St(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function At(t,n,e,i){e===null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}function et(t,n,{bubbles:e=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,e,i,n),r}function jt(t,n){return new t(n)}let p;function m(t){p=t}function E(){if(!p)throw new Error("Function called outside component initialization");return p}function Ct(t){E().$$.on_mount.push(t)}function kt(t){E().$$.after_update.push(t)}function Mt(t){E().$$.on_destroy.push(t)}function Pt(){const t=E();return(n,e,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[n];if(r){const o=et(n,e,{cancelable:i});return r.slice().forEach(c=>{c.call(t,o)}),!o.defaultPrevented}return!0}}const h=[],T=[],b=[],S=[],z=Promise.resolve();let A=!1;function F(){A||(A=!0,z.then(H))}function Tt(){return F(),z}function j(t){b.push(t)}function qt(t){S.push(t)}const N=new Set;let d=0;function H(){if(d!==0)return;const t=p;do{try{for(;d<h.length;){const n=h[d];d++,m(n),it(n.$$)}}catch(n){throw h.length=0,d=0,n}for(m(null),h.length=0,d=0;T.length;)T.pop()();for(let n=0;n<b.length;n+=1){const e=b[n];N.has(e)||(N.add(e),e())}b.length=0}while(h.length);for(;S.length;)S.pop()();A=!1,N.clear(),m(t)}function it(t){if(t.fragment!==null){t.update(),y(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(j)}}const $=new Set;let _;function Bt(){_={r:0,c:[],p:_}}function Dt(){_.r||y(_.c),_=_.p}function rt(t,n){t&&t.i&&($.delete(t),t.i(n))}function Lt(t,n,e,i){if(t&&t.o){if($.has(t))return;$.add(t),_.c.push(()=>{$.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}else i&&i()}function Ot(t,n,e){const i=t.$$.props[n];i!==void 0&&(t.$$.bound[i]=e,e(t.$$.ctx[i]))}function zt(t){t&&t.c()}function Ft(t,n){t&&t.l(n)}function ct(t,n,e,i){const{fragment:r,after_update:o}=t.$$;r&&r.m(n,e),i||j(()=>{const c=t.$$.on_mount.map(q).filter(B);t.$$.on_destroy?t.$$.on_destroy.push(...c):y(c),t.$$.on_mount=[]}),o.forEach(j)}function ut(t,n){const e=t.$$;e.fragment!==null&&(y(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function lt(t,n){t.$$.dirty[0]===-1&&(h.push(t),F(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Ht(t,n,e,i,r,o,c,s=[-1]){const u=p;m(t);const l=t.$$={fragment:null,ctx:[],props:o,update:v,not_equal:r,bound:P(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(u?u.$$.context:[])),callbacks:P(),dirty:s,skip_bound:!1,root:n.target||u.$$.root};c&&c(l.root);let f=!1;if(l.ctx=e?e(t,n.props||{},(a,g,...k)=>{const M=k.length?k[0]:g;return l.ctx&&r(l.ctx[a],l.ctx[a]=M)&&(!l.skip_bound&&l.bound[a]&&l.bound[a](M),f&&lt(t,a)),g}):[],l.update(),f=!0,y(l.before_update),l.fragment=i?i(l.ctx):!1,n.target){if(n.hydrate){J();const a=Z(n.target);l.fragment&&l.fragment.l(a),a.forEach(V)}else l.fragment&&l.fragment.c();n.intro&&rt(t.$$.fragment),ct(t,n.target,n.anchor,n.customElement),K(),H()}m(u)}class It{$destroy(){ut(this,1),this.$destroy=v}$on(n,e){if(!B(e))return v;const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}$set(n){this.$$set&&!W(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}export{Ft as A,ct as B,ut as C,ft as D,dt as E,ht as F,_t as G,U as H,at as I,pt as J,$t as K,Pt as L,y as M,Y as N,Et as O,I as P,mt as Q,ot as R,It as S,gt as T,Mt as U,Ot as V,qt as W,xt as a,yt as b,Nt as c,Lt as d,bt as e,Dt as f,rt as g,V as h,Ht as i,kt as j,X as k,wt as l,Z as m,v as n,Ct as o,vt as p,At as q,C as r,st as s,Tt as t,nt as u,St as v,Bt as w,T as x,jt as y,zt as z};
