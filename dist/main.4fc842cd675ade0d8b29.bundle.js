/*! For license information please see main.4fc842cd675ade0d8b29.bundle.js.LICENSE.txt */
!function(){var t,e,r,n,o={5649:function(t,e,r){function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function o(){"use strict";o=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,i=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},u=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",l=a.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(t){f=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof d?e:d,a=Object.create(o.prototype),u=new k(n||[]);return i(a,"_invoke",{value:O(t,r,u)}),a}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var p={};function d(){}function v(){}function y(){}var m={};f(m,u,(function(){return this}));var g=Object.getPrototypeOf,b=g&&g(g(P([])));b&&b!==e&&r.call(b,u)&&(m=b);var w=y.prototype=d.prototype=Object.create(m);function x(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function j(t,e){function o(i,a,u,c){var l=h(t[i],t,a);if("throw"!==l.type){var f=l.arg,s=f.value;return s&&"object"==n(s)&&r.call(s,"__await")?e.resolve(s.__await).then((function(t){o("next",t,u,c)}),(function(t){o("throw",t,u,c)})):e.resolve(s).then((function(t){f.value=t,u(f)}),(function(t){return o("throw",t,u,c)}))}c(l.arg)}var a;i(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return a=a?a.then(n,n):n()}})}function O(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return _()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var u=S(a,r);if(u){if(u===p)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=h(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===p)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}function S(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,S(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),p;var o=h(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,p;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,p):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function P(t){if(t){var e=t[u];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:_}}function _(){return{value:void 0,done:!0}}return v.prototype=y,i(w,"constructor",{value:y,configurable:!0}),i(y,"constructor",{value:v,configurable:!0}),v.displayName=f(y,l,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,f(t,l,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},x(j.prototype),f(j.prototype,c,(function(){return this})),t.AsyncIterator=j,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new j(s(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(w),f(w,l,"Generator"),f(w,u,(function(){return this})),f(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=P,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var u=r.call(i,"catchLoc"),c=r.call(i,"finallyLoc");if(u&&c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;L(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:P(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),p}},t}function i(t,e,r,n,o,i,a){try{var u=t[i](a),c=u.value}catch(t){return void r(t)}u.done?e(c):Promise.resolve(c).then(n,o)}function a(){var t;return t=o().mark((function t(){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve("async is working");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})),a=function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function u(t){i(a,n,o,u,c,"next",t)}function c(t){i(a,n,o,u,c,"throw",t)}u(void 0)}))},a.apply(this,arguments)}(function(){return a.apply(this,arguments)})().then(console.log);console.log(42),r.e(784).then(r.t.bind(r,8784,23)).then((function(t){return console.log("Lodash",t.default.random(1,5,!0))}))},8253:function(){console.log("multiple entry test")},9659:function(t,e,r){"use strict";var n=r(7634);function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function i(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(i=n.key,a=void 0,a=function(t,e){if("object"!==o(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==o(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(i,"string"),"symbol"===o(a)?a:String(a)),n)}var i,a}var a=function(){function t(e,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.title=e,this.img=r,this.date=new Date}var e,r,n;return e=t,(r=[{key:"toString",value:function(){return JSON.stringify({title:this.title,date:this.date.toJSON(),img:this.img},null,2)}}])&&i(e.prototype,r),n&&i(e,n),Object.defineProperty(e,"prototype",{writable:!1}),t}(),u=(r(5649),JSON.parse('{"content":"json content"}')),c=r.p+"assets/webpack-logo.png",l=r(6299),f=r.n(l),s=r(4246),h=function(){return(0,s.jsxs)("div",{className:"container",children:[(0,s.jsx)("h1",{children:"My webpack training."}),(0,s.jsx)("hr",{}),(0,s.jsx)("div",{className:"logo"}),(0,s.jsx)("hr",{}),(0,s.jsx)("pre",{}),(0,s.jsx)("div",{className:"box",children:(0,s.jsx)("h2",{children:"scss test"})})]})};(0,n.s)(document.getElementById("app")).render((0,s.jsx)(h,{}));var p=new a("Post title",c);console.log("Post to string:",p.toString()),console.log("JSON file content:",u),console.log("XML",'<?xml version="1.0" encoding="UTF-8"?>\r\n<email>\r\n    <to>Vladislav</to>\r\n    <from>webpack</from>\r\n    <heading>training</heading>\r\n    <body>body</body>\r\n</email>'),console.log("CSV",f()),console.log("txt",txt)},6299:function(t){t.exports=[["Username"," Identifier","First name","Last name"],["booker12","9012","Rachel","Booker"],["grey07","2070","Laura","Grey"],["johnson81","4081","Craig","Johnson"],["jenkins46","9346","Mary","Jenkins"],["smith79","5079","Jamie","Smith"],[""],[""]]}},i={};function a(t){var e=i[t];if(void 0!==e)return e.exports;var r=i[t]={id:t,loaded:!1,exports:{}};return o[t].call(r.exports,r,r.exports,a),r.loaded=!0,r.exports}a.m=o,t=[],a.O=function(e,r,n,o){if(!r){var i=1/0;for(f=0;f<t.length;f++){r=t[f][0],n=t[f][1],o=t[f][2];for(var u=!0,c=0;c<r.length;c++)(!1&o||i>=o)&&Object.keys(a.O).every((function(t){return a.O[t](r[c])}))?r.splice(c--,1):(u=!1,o<i&&(i=o));if(u){t.splice(f--,1);var l=n();void 0!==l&&(e=l)}}return e}o=o||0;for(var f=t.length;f>0&&t[f-1][2]>o;f--)t[f]=t[f-1];t[f]=[r,n,o]},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,{a:e}),e},r=Object.getPrototypeOf?function(t){return Object.getPrototypeOf(t)}:function(t){return t.__proto__},a.t=function(t,n){if(1&n&&(t=this(t)),8&n)return t;if("object"==typeof t&&t){if(4&n&&t.__esModule)return t;if(16&n&&"function"==typeof t.then)return t}var o=Object.create(null);a.r(o);var i={};e=e||[null,r({}),r([]),r(r)];for(var u=2&n&&t;"object"==typeof u&&!~e.indexOf(u);u=r(u))Object.getOwnPropertyNames(u).forEach((function(e){i[e]=function(){return t[e]}}));return i.default=function(){return t},a.d(o,i),o},a.d=function(t,e){for(var r in e)a.o(e,r)&&!a.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},a.f={},a.e=function(t){return Promise.all(Object.keys(a.f).reduce((function(e,r){return a.f[r](t,e),e}),[]))},a.u=function(t){return t+"."+a.h()+".bundle.js"},a.miniCssF=function(t){},a.h=function(){return"4fc842cd675ade0d8b29"},a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n={},a.l=function(t,e,r,o){if(n[t])n[t].push(e);else{var i,u;if(void 0!==r)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var f=c[l];if(f.getAttribute("src")==t){i=f;break}}i||(u=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,a.nc&&i.setAttribute("nonce",a.nc),i.src=t),n[t]=[e];var s=function(e,r){i.onerror=i.onload=null,clearTimeout(h);var o=n[t];if(delete n[t],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((function(t){return t(r)})),e)return e(r)},h=setTimeout(s.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=s.bind(null,i.onerror),i.onload=s.bind(null,i.onload),u&&document.head.appendChild(i)}},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t},function(){var t;a.g.importScripts&&(t=a.g.location+"");var e=a.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var r=e.getElementsByTagName("script");r.length&&(t=r[r.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),a.p=t}(),function(){var t={179:0};a.f.j=function(e,r){var n=a.o(t,e)?t[e]:void 0;if(0!==n)if(n)r.push(n[2]);else{var o=new Promise((function(r,o){n=t[e]=[r,o]}));r.push(n[2]=o);var i=a.p+a.u(e),u=new Error;a.l(i,(function(r){if(a.o(t,e)&&(0!==(n=t[e])&&(t[e]=void 0),n)){var o=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;u.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",u.name="ChunkLoadError",u.type=o,u.request=i,n[1](u)}}),"chunk-"+e,e)}},a.O.j=function(e){return 0===t[e]};var e=function(e,r){var n,o,i=r[0],u=r[1],c=r[2],l=0;if(i.some((function(e){return 0!==t[e]}))){for(n in u)a.o(u,n)&&(a.m[n]=u[n]);if(c)var f=c(a)}for(e&&e(r);l<i.length;l++)o=i[l],a.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return a.O(f)},r=self.webpackChunk=self.webpackChunk||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}(),a.O(void 0,[874],(function(){return a(1202)})),a.O(void 0,[874],(function(){return a(9659)}));var u=a.O(void 0,[874],(function(){return a(8253)}));u=a.O(u)}();