function v(){}function se(e,t){for(const n in t)e[n]=t[n];return e}function K(e){return e()}function G(){return Object.create(null)}function E(e){e.forEach(K)}function B(e){return typeof e=="function"}function Ne(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let M;function Se(e,t){return M||(M=document.createElement("a")),M.href=t,e===M.href}function le(e){return Object.keys(e).length===0}function oe(e,...t){if(e==null)return v;const n=e.subscribe(...t);return n.unsubscribe?()=>n.unsubscribe():n}function Ae(e,t,n){e.$$.on_destroy.push(oe(t,n))}function ke(e,t,n,i){if(e){const r=Q(e,t,n,i);return e[0](r)}}function Q(e,t,n,i){return e[1]&&i?se(n.ctx.slice(),e[1](i(t))):n.ctx}function Me(e,t,n,i){if(e[2]&&i){const r=e[2](i(n));if(t.dirty===void 0)return r;if(typeof r=="object"){const a=[],s=Math.max(t.dirty.length,r.length);for(let c=0;c<s;c+=1)a[c]=t.dirty[c]|r[c];return a}return t.dirty|r}return t.dirty}function Te(e,t,n,i,r,a){if(r){const s=Q(t,n,i,a);e.p(s,r)}}function je(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32;for(let i=0;i<n;i++)t[i]=-1;return t}return-1}function qe(e){return e??""}function Ce(e){return e&&B(e.destroy)?e.destroy:v}const U=typeof window<"u";let De=U?()=>window.performance.now():()=>Date.now(),V=U?e=>requestAnimationFrame(e):v;const x=new Set;function X(e){x.forEach(t=>{t.c(e)||(x.delete(t),t.f())}),x.size!==0&&V(X)}function Le(e){let t;return x.size===0&&V(X),{promise:new Promise(n=>{x.add(t={c:e,f:n})}),abort(){x.delete(t)}}}let j=!1;function ce(){j=!0}function ae(){j=!1}function ue(e,t,n,i){for(;e<t;){const r=e+(t-e>>1);n(r)<=i?e=r+1:t=r}return e}function fe(e){if(e.hydrate_init)return;e.hydrate_init=!0;let t=e.childNodes;if(e.nodeName==="HEAD"){const l=[];for(let o=0;o<t.length;o++){const f=t[o];f.claim_order!==void 0&&l.push(f)}t=l}const n=new Int32Array(t.length+1),i=new Int32Array(t.length);n[0]=-1;let r=0;for(let l=0;l<t.length;l++){const o=t[l].claim_order,f=(r>0&&t[n[r]].claim_order<=o?r+1:ue(1,r,d=>t[n[d]].claim_order,o))-1;i[l]=n[f]+1;const _=f+1;n[_]=l,r=Math.max(_,r)}const a=[],s=[];let c=t.length-1;for(let l=n[r]+1;l!=0;l=i[l-1]){for(a.push(t[l-1]);c>=l;c--)s.push(t[c]);c--}for(;c>=0;c--)s.push(t[c]);a.reverse(),s.sort((l,o)=>l.claim_order-o.claim_order);for(let l=0,o=0;l<s.length;l++){for(;o<a.length&&s[l].claim_order>=a[o].claim_order;)o++;const f=o<a.length?a[o]:null;e.insertBefore(s[l],f)}}function de(e,t){if(j){for(fe(e),(e.actual_end_child===void 0||e.actual_end_child!==null&&e.actual_end_child.parentNode!==e)&&(e.actual_end_child=e.firstChild);e.actual_end_child!==null&&e.actual_end_child.claim_order===void 0;)e.actual_end_child=e.actual_end_child.nextSibling;t!==e.actual_end_child?(t.claim_order!==void 0||t.parentNode!==e)&&e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling}else(t.parentNode!==e||t.nextSibling!==null)&&e.appendChild(t)}function Oe(e,t,n){j&&!n?de(e,t):(t.parentNode!==e||t.nextSibling!=n)&&e.insertBefore(t,n||null)}function _e(e){e.parentNode&&e.parentNode.removeChild(e)}function Pe(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function he(e){return document.createElement(e)}function me(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function H(e){return document.createTextNode(e)}function ze(){return H(" ")}function Be(){return H("")}function He(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function Fe(e){return function(t){return t.preventDefault(),e.call(this,t)}}function Re(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function pe(e){return Array.from(e.childNodes)}function ye(e){e.claim_info===void 0&&(e.claim_info={last_index:0,total_claimed:0})}function Y(e,t,n,i,r=!1){ye(e);const a=(()=>{for(let s=e.claim_info.last_index;s<e.length;s++){const c=e[s];if(t(c)){const l=n(c);return l===void 0?e.splice(s,1):e[s]=l,r||(e.claim_info.last_index=s),c}}for(let s=e.claim_info.last_index-1;s>=0;s--){const c=e[s];if(t(c)){const l=n(c);return l===void 0?e.splice(s,1):e[s]=l,r?l===void 0&&e.claim_info.last_index--:e.claim_info.last_index=s,c}}return i()})();return a.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1,a}function Z(e,t,n,i){return Y(e,r=>r.nodeName===t,r=>{const a=[];for(let s=0;s<r.attributes.length;s++){const c=r.attributes[s];n[c.name]||a.push(c.name)}a.forEach(s=>r.removeAttribute(s))},()=>i(t))}function We(e,t,n){return Z(e,t,n,he)}function Ge(e,t,n){return Z(e,t,n,me)}function ge(e,t){return Y(e,n=>n.nodeType===3,n=>{const i=""+t;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>H(t),!0)}function Ie(e){return ge(e," ")}function Je(e,t){t=""+t,e.data!==t&&(e.data=t)}function Ke(e,t,n,i){n===null?e.style.removeProperty(t):e.style.setProperty(t,n,i?"important":"")}function Qe(e,t,n){e.classList[n?"add":"remove"](t)}function Ue(e,t){const n=[];let i=0;for(const r of t.childNodes)if(r.nodeType===8){const a=r.textContent.trim();a===`HEAD_${e}_END`?(i-=1,n.push(r)):a===`HEAD_${e}_START`&&(i+=1,n.push(r))}else i>0&&n.push(r);return n}function Ve(e,t){return new e(t)}let S;function N(e){S=e}function ee(){if(!S)throw new Error("Function called outside component initialization");return S}function Xe(e){ee().$$.on_mount.push(e)}function Ye(e){ee().$$.after_update.push(e)}const b=[],I=[];let $=[];const J=[],te=Promise.resolve();let P=!1;function ne(){P||(P=!0,te.then(ie))}function Ze(){return ne(),te}function z(e){$.push(e)}const O=new Set;let w=0;function ie(){if(w!==0)return;const e=S;do{try{for(;w<b.length;){const t=b[w];w++,N(t),we(t.$$)}}catch(t){throw b.length=0,w=0,t}for(N(null),b.length=0,w=0;I.length;)I.pop()();for(let t=0;t<$.length;t+=1){const n=$[t];O.has(n)||(O.add(n),n())}$.length=0}while(b.length);for(;J.length;)J.pop()();P=!1,O.clear(),N(e)}function we(e){if(e.fragment!==null){e.update(),E(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(z)}}function be(e){const t=[],n=[];$.forEach(i=>e.indexOf(i)===-1?t.push(i):n.push(i)),n.forEach(i=>i()),$=t}const T=new Set;let g;function et(){g={r:0,c:[],p:g}}function tt(){g.r||E(g.c),g=g.p}function re(e,t){e&&e.i&&(T.delete(e),e.i(t))}function nt(e,t,n,i){if(e&&e.o){if(T.has(e))return;T.add(e),g.c.push(()=>{T.delete(e),i&&(n&&e.d(1),i())}),e.o(t)}else i&&i()}const it=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function rt(e,t){e.d(1),t.delete(e.key)}function st(e,t,n,i,r,a,s,c,l,o,f,_){let d=e.length,m=a.length,h=d;const q={};for(;h--;)q[e[h].key]=h;const A=[],C=new Map,D=new Map,F=[];for(h=m;h--;){const u=_(r,a,h),p=n(u);let y=s.get(p);y?i&&F.push(()=>y.p(u,t)):(y=o(p,u),y.c()),C.set(p,A[h]=y),p in q&&D.set(p,Math.abs(h-q[p]))}const R=new Set,W=new Set;function L(u){re(u,1),u.m(c,f),s.set(u.key,u),f=u.first,m--}for(;d&&m;){const u=A[m-1],p=e[d-1],y=u.key,k=p.key;u===p?(f=u.first,d--,m--):C.has(k)?!s.has(y)||R.has(y)?L(u):W.has(k)?d--:D.get(y)>D.get(k)?(W.add(y),L(u)):(R.add(k),d--):(l(p,s),d--)}for(;d--;){const u=e[d];C.has(u.key)||l(u,s)}for(;m;)L(A[m-1]);return E(F),A}const xe=["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"];[...xe];function lt(e){e&&e.c()}function ot(e,t){e&&e.l(t)}function $e(e,t,n,i){const{fragment:r,after_update:a}=e.$$;r&&r.m(t,n),i||z(()=>{const s=e.$$.on_mount.map(K).filter(B);e.$$.on_destroy?e.$$.on_destroy.push(...s):E(s),e.$$.on_mount=[]}),a.forEach(z)}function ve(e,t){const n=e.$$;n.fragment!==null&&(be(n.after_update),E(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Ee(e,t){e.$$.dirty[0]===-1&&(b.push(e),ne(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function ct(e,t,n,i,r,a,s,c=[-1]){const l=S;N(e);const o=e.$$={fragment:null,ctx:[],props:a,update:v,not_equal:r,bound:G(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(l?l.$$.context:[])),callbacks:G(),dirty:c,skip_bound:!1,root:t.target||l.$$.root};s&&s(o.root);let f=!1;if(o.ctx=n?n(e,t.props||{},(_,d,...m)=>{const h=m.length?m[0]:d;return o.ctx&&r(o.ctx[_],o.ctx[_]=h)&&(!o.skip_bound&&o.bound[_]&&o.bound[_](h),f&&Ee(e,_)),d}):[],o.update(),f=!0,E(o.before_update),o.fragment=i?i(o.ctx):!1,t.target){if(t.hydrate){ce();const _=pe(t.target);o.fragment&&o.fragment.l(_),_.forEach(_e)}else o.fragment&&o.fragment.c();t.intro&&re(e.$$.fragment),$e(e,t.target,t.anchor,t.customElement),ae(),ie()}N(l)}class at{$destroy(){ve(this,1),this.$destroy=v}$on(t,n){if(!B(n))return v;const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(t){this.$$set&&!le(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}export{$e as A,ve as B,me as C,Ge as D,Se as E,de as F,v as G,Ae as H,ke as I,Te as J,je as K,Me as L,De as M,Le as N,He as O,E as P,Ue as Q,Qe as R,at as S,Ce as T,st as U,it as V,rt as W,B as X,Fe as Y,Pe as Z,qe as _,ze as a,Oe as b,Ie as c,nt as d,Be as e,tt as f,re as g,_e as h,ct as i,Ye as j,he as k,We as l,pe as m,Re as n,Xe as o,Ke as p,H as q,ge as r,Ne as s,Ze as t,Je as u,et as v,I as w,Ve as x,lt as y,ot as z};
