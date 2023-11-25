(function(){"use strict";var e={6419:function(e,n,t){var r=t(9242),o=t(3396);function i(e,n){const t=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.Wm)(t)])}var a=t(89);const u={},c=(0,a.Z)(u,[["render",i],["__scopeId","data-v-c3fdc422"]]);var f=c,d=t(1120),s=t(5893),l=t(1020),p=t(4787);(0,r.ri)(f).use(d.Z).use((0,l.WB)()).component("BaseTitle",p.Z).component("DataTable",s.Z).mount("#app")},1120:function(e,n,t){var r=t(2483);const o=[{path:"/",name:"main",component:()=>t.e(65).then(t.bind(t,9895))},{path:"/orgs",name:"orgs",component:()=>Promise.all([t.e(353),t.e(172)]).then(t.bind(t,5129))},{path:"/orgs/:id",name:"orgsById",component:()=>Promise.all([t.e(353),t.e(57)]).then(t.bind(t,5789))},{path:"/orgs/dishes/:id",name:"dishes",component:()=>Promise.all([t.e(353),t.e(463)]).then(t.bind(t,8794))},{path:"/create/org",name:"createOrg",component:()=>Promise.all([t.e(353),t.e(368)]).then(t.bind(t,2602))},{path:"/create/:id/category",name:"createCategory",component:()=>Promise.all([t.e(353),t.e(948)]).then(t.bind(t,4160))},{path:"/create/:id/dish",name:"createDish",component:()=>Promise.all([t.e(353),t.e(487)]).then(t.bind(t,9310))}],i=(0,r.p7)({history:(0,r.PO)("/"),routes:o});n.Z=i},4787:function(e,n,t){t.d(n,{Z:function(){return c}});var r=t(3396);function o(e,n){return(0,r.wg)(),(0,r.iD)("h1",null,[(0,r.WI)(e.$slots,"default",{},void 0,!0)])}var i=t(89);const a={},u=(0,i.Z)(a,[["render",o],["__scopeId","data-v-a1ec9bee"]]);var c=u}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={exports:{}};return e[r].call(i.exports,i,i.exports,t),i.exports}t.m=e,function(){var e=[];t.O=function(n,r,o,i){if(!r){var a=1/0;for(d=0;d<e.length;d++){r=e[d][0],o=e[d][1],i=e[d][2];for(var u=!0,c=0;c<r.length;c++)(!1&i||a>=i)&&Object.keys(t.O).every((function(e){return t.O[e](r[c])}))?r.splice(c--,1):(u=!1,i<a&&(a=i));if(u){e.splice(d--,1);var f=o();void 0!==f&&(n=f)}}return n}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[r,o,i]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,r){return t.f[r](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+e+"."+{57:"d8fbb581",65:"83bca100",172:"dfd08000",353:"59a54e45",368:"4e76b941",463:"1f3a3f9b",487:"9d4477fb",948:"ff731d22"}[e]+".js"}}(),function(){t.miniCssF=function(e){return"css/"+e+"."+{57:"b4447817",65:"ad692701",172:"c1feda70",368:"aec20cd8",463:"f16053c3",487:"7f266067",948:"9d0b9fd2"}[e]+".css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="app:";t.l=function(r,o,i,a){if(e[r])e[r].push(o);else{var u,c;if(void 0!==i)for(var f=document.getElementsByTagName("script"),d=0;d<f.length;d++){var s=f[d];if(s.getAttribute("src")==r||s.getAttribute("data-webpack")==n+i){u=s;break}}u||(c=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,t.nc&&u.setAttribute("nonce",t.nc),u.setAttribute("data-webpack",n+i),u.src=r),e[r]=[o];var l=function(n,t){u.onerror=u.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(e){return e(t)})),n)return n(t)},p=setTimeout(l.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=l.bind(null,u.onerror),u.onload=l.bind(null,u.onload),c&&document.head.appendChild(u)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,n,t,r,o){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var a=function(t){if(i.onerror=i.onload=null,"load"===t.type)r();else{var a=t&&("load"===t.type?"missing":t.type),u=t&&t.target&&t.target.href||n,c=new Error("Loading CSS chunk "+e+" failed.\n("+u+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=a,c.request=u,i.parentNode&&i.parentNode.removeChild(i),o(c)}};return i.onerror=i.onload=a,i.href=n,t?t.parentNode.insertBefore(i,t.nextSibling):document.head.appendChild(i),i},n=function(e,n){for(var t=document.getElementsByTagName("link"),r=0;r<t.length;r++){var o=t[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===e||i===n))return o}var a=document.getElementsByTagName("style");for(r=0;r<a.length;r++){o=a[r],i=o.getAttribute("data-href");if(i===e||i===n)return o}},r=function(r){return new Promise((function(o,i){var a=t.miniCssF(r),u=t.p+a;if(n(a,u))return o();e(r,u,null,o,i)}))},o={143:0};t.f.miniCss=function(e,n){var t={57:1,65:1,172:1,368:1,463:1,487:1,948:1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=r(e).then((function(){o[e]=0}),(function(n){throw delete o[e],n})))}}}(),function(){var e={143:0};t.f.j=function(n,r){var o=t.o(e,n)?e[n]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(t,r){o=e[n]=[t,r]}));r.push(o[2]=i);var a=t.p+t.u(n),u=new Error,c=function(r){if(t.o(e,n)&&(o=e[n],0!==o&&(e[n]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;u.message="Loading chunk "+n+" failed.\n("+i+": "+a+")",u.name="ChunkLoadError",u.type=i,u.request=a,o[1](u)}};t.l(a,c,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,r){var o,i,a=r[0],u=r[1],c=r[2],f=0;if(a.some((function(n){return 0!==e[n]}))){for(o in u)t.o(u,o)&&(t.m[o]=u[o]);if(c)var d=c(t)}for(n&&n(r);f<a.length;f++)i=a[f],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(d)},r=self["webpackChunkapp"]=self["webpackChunkapp"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=t.O(void 0,[998],(function(){return t(6419)}));r=t.O(r)})();
//# sourceMappingURL=app.5e7b43dd.js.map