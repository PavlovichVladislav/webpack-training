(()=>{"use strict";var r,e={696:(r,e,t)=>{var o=t(638);window.analytics=function(){let r=0,e=!1;const t=()=>r++;return o(document).on("click",t),{destroy(){o(document).off("click",t),e=!0},getClicks:()=>e?`Analytics is destoryed. Total click = ${counter}`:r}}()}},t={};function o(r){var n=t[r];if(void 0!==n)return n.exports;var a=t[r]={exports:{}};return e[r].call(a.exports,a,a.exports,o),a.exports}o.m=e,r=[],o.O=(e,t,n,a)=>{if(!t){var i=1/0;for(u=0;u<r.length;u++){for(var[t,n,a]=r[u],l=!0,c=0;c<t.length;c++)(!1&a||i>=a)&&Object.keys(o.O).every((r=>o.O[r](t[c])))?t.splice(c--,1):(l=!1,a<i&&(i=a));if(l){r.splice(u--,1);var s=n();void 0!==s&&(e=s)}}return e}a=a||0;for(var u=r.length;u>0&&r[u-1][2]>a;u--)r[u]=r[u-1];r[u]=[t,n,a]},o.n=r=>{var e=r&&r.__esModule?()=>r.default:()=>r;return o.d(e,{a:e}),e},o.d=(r,e)=>{for(var t in e)o.o(e,t)&&!o.o(r,t)&&Object.defineProperty(r,t,{enumerable:!0,get:e[t]})},o.o=(r,e)=>Object.prototype.hasOwnProperty.call(r,e),(()=>{var r={142:0};o.O.j=e=>0===r[e];var e=(e,t)=>{var n,a,[i,l,c]=t,s=0;if(i.some((e=>0!==r[e]))){for(n in l)o.o(l,n)&&(o.m[n]=l[n]);if(c)var u=c(o)}for(e&&e(t);s<i.length;s++)a=i[s],o.o(r,a)&&r[a]&&r[a][0](),r[a]=0;return o.O(u)},t=self.webpackChunk=self.webpackChunk||[];t.forEach(e.bind(null,0)),t.push=e.bind(null,t.push.bind(t))})();var n=o.O(void 0,[638],(()=>o(696)));n=o.O(n)})();