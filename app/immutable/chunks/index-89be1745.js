import{a4 as m}from"./index-9a49305f.js";function l(n){const t=n-1;return t*t*t+1}function h(n){const t=Math.cos(n*Math.PI*.5);return Math.abs(t)<1e-14?1:1-t}function M(n){return Math.sin(n*Math.PI/2)}function $(n,{delay:t=0,duration:o=400,easing:s=m}={}){const a=+getComputedStyle(n).opacity;return{delay:t,duration:o,easing:s,css:r=>`opacity: ${r*a}`}}function b(n,{delay:t=0,duration:o=400,easing:s=l,x:a=0,y:r=0,opacity:u=0}={}){const e=getComputedStyle(n),c=+e.opacity,f=e.transform==="none"?"":e.transform,p=c*(1-u);return{delay:t,duration:o,easing:s,css:(i,y)=>`
			transform: ${f} translate(${(1-i)*a}px, ${(1-i)*r}px);
			opacity: ${c-p*y}`}}export{b as a,h as b,$ as f,M as s};
