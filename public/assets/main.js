!function(e){var t={};function n(o){if(t[o])return t[o].exports;var a=t[o]={i:o,l:!1,exports:{}};return e[o].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(o,a,function(t){return e[t]}.bind(null,a));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var a=(i=o,s=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(c," */")),r=o.sources.map((function(e){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(e," */")}));return[n].concat(r).concat([a]).join("\n")}var i,s,c;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,o){"string"==typeof e&&(e=[[null,e,""]]);var a={};if(o)for(var r=0;r<this.length;r++){var i=this[r][0];null!=i&&(a[i]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);o&&a[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},function(e,t,n){e.exports=n(5)},function(e,t,n){var o=n(3),a=n(4);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var r={insert:"head",singleton:!1};o(a,r);e.exports=a.locals||{}},function(e,t,n){"use strict";var o,a=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},r=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),i=[];function s(e){for(var t=-1,n=0;n<i.length;n++)if(i[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},o=[],a=0;a<e.length;a++){var r=e[a],c=t.base?r[0]+t.base:r[0],f=n[c]||0,d="".concat(c," ").concat(f);n[c]=f+1;var u=s(d),l={css:r[1],media:r[2],sourceMap:r[3]};-1!==u?(i[u].references++,i[u].updater(l)):i.push({identifier:d,updater:g(l,t),references:1}),o.push(d)}return o}function f(e){var t=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var a=n.nc;a&&(o.nonce=a)}if(Object.keys(o).forEach((function(e){t.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(t);else{var i=r(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var d,u=(d=[],function(e,t){return d[e]=t,d.filter(Boolean).join("\n")});function l(e,t,n,o){var a=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=u(t,a);else{var r=document.createTextNode(a),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(r,i[t]):e.appendChild(r)}}function p(e,t,n){var o=n.css,a=n.media,r=n.sourceMap;if(a?e.setAttribute("media",a):e.removeAttribute("media"),r&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var h=null,m=0;function g(e,t){var n,o,a;if(t.singleton){var r=m++;n=h||(h=f(t)),o=l.bind(null,n,r,!1),a=l.bind(null,n,r,!0)}else n=f(t),o=p.bind(null,n,t),a=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else a()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=a());var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<n.length;o++){var a=s(n[o]);i[a].references--}for(var r=c(e,t),f=0;f<n.length;f++){var d=s(n[f]);0===i[d].references&&(i[d].updater(),i.splice(d,1))}n=r}}}},function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o)()(!1);a.push([e.i,"html{scroll-behavior:smooth}body{scroll-behavior:smooth;padding:0;margin:0;width:100%;height:3000px}.show,hidden{transition:all 1s ease-in-out}.hidden,.container-page{opacity:0;height:100vh}.show{opacity:1;height:initial}.moveEffect{height:150px;width:150px;background-color:gray}.loaderPage{text-align:center;height:100vh;background-color:white;position:absolute;width:100%;z-index:999;top:0}.show,hidden{transition:all 1s ease-in-out}.hidden,.container-page{opacity:0;overflow:hidden;height:100vh}.show{opacity:1;overflow:initial;height:initial}svg.tea{--secondary: #33406f;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}svg.tea #teabag{transform-origin:top center;transform:rotate(3deg);animation:swing 2s infinite}svg.tea #steamL{stroke-dasharray:13;stroke-dashoffset:13;animation:steamLarge 2s infinite}svg.tea #steamR{stroke-dasharray:9;stroke-dashoffset:9;animation:steamSmall 2s infinite}@-moz-keyframes swing{50%{transform:rotate(-3deg)}}@-webkit-keyframes swing{50%{transform:rotate(-3deg)}}@-o-keyframes swing{50%{transform:rotate(-3deg)}}@keyframes swing{50%{transform:rotate(-3deg)}}@-moz-keyframes steamLarge{0%{stroke-dashoffset:13;opacity:0.6}100%{stroke-dashoffset:39;opacity:0}}@-webkit-keyframes steamLarge{0%{stroke-dashoffset:13;opacity:0.6}100%{stroke-dashoffset:39;opacity:0}}@-o-keyframes steamLarge{0%{stroke-dashoffset:13;opacity:0.6}100%{stroke-dashoffset:39;opacity:0}}@keyframes steamLarge{0%{stroke-dashoffset:13;opacity:0.6}100%{stroke-dashoffset:39;opacity:0}}@-moz-keyframes steamSmall{10%{stroke-dashoffset:9;opacity:0.6}80%{stroke-dashoffset:27;opacity:0}100%{stroke-dashoffset:27;opacity:0}}@-webkit-keyframes steamSmall{10%{stroke-dashoffset:9;opacity:0.6}80%{stroke-dashoffset:27;opacity:0}100%{stroke-dashoffset:27;opacity:0}}@-o-keyframes steamSmall{10%{stroke-dashoffset:9;opacity:0.6}80%{stroke-dashoffset:27;opacity:0}100%{stroke-dashoffset:27;opacity:0}}@keyframes steamSmall{10%{stroke-dashoffset:9;opacity:0.6}80%{stroke-dashoffset:27;opacity:0}100%{stroke-dashoffset:27;opacity:0}}.navigation{-webkit-box-shadow:0px 0px 5px 0px rgba(0,0,0,0.56);-moz-box-shadow:0px 0px 5px 0px rgba(0,0,0,0.56);box-shadow:0px 0px 5px 0px rgba(0,0,0,0.56)}.navigation ul{margin:0;padding:0;transition:all .1s ease-in-out}.navigation ul li{display:inline-block;margin:5px 10px;padding:2px}.progress-bar{position:fixed;top:0;z-index:1;height:8px;background:#4caf50;width:0;transition:all .1s ease-in-out}\n",""]),t.default=a},function(e,t,n){"use strict";n.r(t);n(2);var o=function(){function e(){var e=this;window.addEventListener("load",(function(t){window.addEventListener("scroll",(function(t){e.animate()}))}))}return e.prototype.animate=function(){var e=document.getElementById("myBar"),t=window.innerHeight,n=window.pageYOffset/(document.body.clientHeight-t)*100;e.style.width=n+"%"},e}(),a=function(){function e(){var e=this;window.addEventListener("DOMContentLoaded",(function(){window.addEventListener("load",(function(){e.loader()}))}))}return e.prototype.loader=function(){document.getElementById("loaderPage").classList.add("hidden"),document.getElementById("container-page").classList.add("show")},e}();(new o).animate(),(new a).loader()}]);