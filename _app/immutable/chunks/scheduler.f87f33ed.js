function g(){}const M=t=>t;function x(t,n){for(const e in n)t[e]=n[e];return t}function A(t){return!!t&&(typeof t=="object"||typeof t=="function")&&typeof t.then=="function"}function w(t){return t()}function B(){return Object.create(null)}function j(t){t.forEach(w)}function E(t){return typeof t=="function"}function C(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}function P(t){return Object.keys(t).length===0}function F(t,...n){if(t==null){for(const o of n)o(void 0);return g}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function S(t,n,e){t.$$.on_destroy.push(F(n,e))}function U(t,n,e,o){if(t){const s=m(t,n,e,o);return t[0](s)}}function m(t,n,e,o){return t[1]&&o?x(e.ctx.slice(),t[1](o(n))):e.ctx}function G(t,n,e,o){if(t[2]&&o){const s=t[2](o(e));if(n.dirty===void 0)return s;if(typeof s=="object"){const a=[],f=Math.max(n.dirty.length,s.length);for(let u=0;u<f;u+=1)a[u]=n.dirty[u]|s[u];return a}return n.dirty|s}return n.dirty}function H(t,n,e,o,s,a){if(s){const f=m(n,e,o,a);t.p(f,s)}}function I(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let o=0;o<e;o++)n[o]=-1;return n}return-1}function J(t){return t&&E(t.destroy)?t.destroy:g}function K(t){const n=typeof t=="string"&&t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return n?[parseFloat(n[1]),n[2]||"px"]:[t,"px"]}let l;function d(t){l=t}function b(){if(!l)throw new Error("Function called outside component initialization");return l}function L(t){b().$$.on_mount.push(t)}function N(t){b().$$.after_update.push(t)}function Q(t){b().$$.on_destroy.push(t)}function R(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach(o=>o.call(this,n))}const i=[],y=[];let r=[];const _=[],k=Promise.resolve();let p=!1;function O(){p||(p=!0,k.then(z))}function T(){return O(),k}function q(t){r.push(t)}function V(t){_.push(t)}const h=new Set;let c=0;function z(){if(c!==0)return;const t=l;do{try{for(;c<i.length;){const n=i[c];c++,d(n),D(n.$$)}}catch(n){throw i.length=0,c=0,n}for(d(null),i.length=0,c=0;y.length;)y.pop()();for(let n=0;n<r.length;n+=1){const e=r[n];h.has(e)||(h.add(e),e())}r.length=0}while(i.length);for(;_.length;)_.pop()();p=!1,h.clear(),d(t)}function D(t){if(t.fragment!==null){t.update(),j(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(q)}}function W(t){const n=[],e=[];r.forEach(o=>t.indexOf(o)===-1?n.push(o):e.push(o)),e.forEach(o=>o()),r=n}export{P as A,W as B,l as C,w as D,i as E,O as F,N as a,y as b,S as c,q as d,J as e,Q as f,R as g,V as h,U as i,I as j,G as k,A as l,b as m,g as n,L as o,d as p,z as q,j as r,C as s,T as t,H as u,K as v,M as w,F as x,E as y,B as z};
