function s(o,i=0){const t=16.666666666666668;let n=0,a=requestAnimationFrame(r);function r(e){a=requestAnimationFrame(r),(e-n)/t>=i&&(o(e),n=e)}return()=>cancelAnimationFrame(a)}export{s as a};
