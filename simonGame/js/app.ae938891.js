(function(A){function t(t){for(var o,a,i=t[0],c=t[1],l=t[2],d=0,q=[];d<i.length;d++)a=i[d],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&q.push(n[a][0]),n[a]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(A[o]=c[o]);u&&u(t);while(q.length)q.shift()();return r.push.apply(r,l||[]),e()}function e(){for(var A,t=0;t<r.length;t++){for(var e=r[t],o=!0,i=1;i<e.length;i++){var c=e[i];0!==n[c]&&(o=!1)}o&&(r.splice(t--,1),A=a(a.s=e[0]))}return A}var o={},n={app:0},r=[];function a(t){if(o[t])return o[t].exports;var e=o[t]={i:t,l:!1,exports:{}};return A[t].call(e.exports,e,e.exports,a),e.l=!0,e.exports}a.m=A,a.c=o,a.d=function(A,t,e){a.o(A,t)||Object.defineProperty(A,t,{enumerable:!0,get:e})},a.r=function(A){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(A,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(A,"__esModule",{value:!0})},a.t=function(A,t){if(1&t&&(A=a(A)),8&t)return A;if(4&t&&"object"===typeof A&&A&&A.__esModule)return A;var e=Object.create(null);if(a.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:A}),2&t&&"string"!=typeof A)for(var o in A)a.d(e,o,function(t){return A[t]}.bind(null,o));return e},a.n=function(A){var t=A&&A.__esModule?function(){return A["default"]}:function(){return A};return a.d(t,"a",t),t},a.o=function(A,t){return Object.prototype.hasOwnProperty.call(A,t)},a.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=c;r.push([0,"chunk-vendors"]),e()})({0:function(A,t,e){A.exports=e("56d7")},"034f":function(A,t,e){"use strict";e("85ec")},"0e09":function(A,t,e){"use strict";e.d(t,"a",(function(){return o})),e.d(t,"b",(function(){return n}));var o=function(){var A=this,t=A.$createElement;A._self._c;return A._m(0)},n=[function(){var A=this,t=A.$createElement,e=A._self._c||t;return e("div",{attrs:{id:"app"}},[e("div",{staticClass:"wrapper"},[e("div",{staticClass:"circle"},[e("div",{staticClass:"battom-part"},[e("div",{staticClass:"top-left-color part"}),e("div",{staticClass:"top-right-color part"})]),e("div",{staticClass:"top-part"},[e("div",{staticClass:"bottom-left-color part"}),e("div",{staticClass:"bottom-right-color part"})])]),e("div",{staticClass:"controller-wrapper"},[e("div",{staticClass:"controller"},[e("h2",{attrs:{id:"round-text"}},[A._v("ROUND "),e("span",{attrs:{id:"round-number"}})]),e("button",{attrs:{id:"startBtn"}},[A._v("Start")]),e("ul",{staticClass:"game-mode"},[e("li",[e("input",{attrs:{type:"radio",name:"compexity",id:"easy",checked:""}}),e("label",{attrs:{for:"easy"}},[A._v(" Easy")])]),e("li",[e("input",{attrs:{type:"radio",name:"compexity",id:"normal"}}),e("label",{attrs:{for:"normal"}},[A._v(" Normal")])]),e("li",[e("input",{attrs:{type:"radio",name:"compexity",id:"hard"}}),e("label",{attrs:{for:"hard"}},[A._v(" Hard")])])])])])])])}]},"196f":function(A,t){A.exports="data:audio/mpeg;base64,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"},"199c":function(A,t){},"23be":function(A,t,e){"use strict";var o=e("199c"),n=e.n(o);t["default"]=n.a},"3c6d":function(A,t){A.exports="data:audio/mpeg;base64,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"},"3cf8":function(A,t){A.exports="data:audio/mpeg;base64,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"},"3dfd":function(A,t,e){"use strict";var o=e("0e09"),n=e("23be"),r=(e("034f"),e("2877")),a=Object(r["a"])(n["default"],o["a"],o["b"],!1,null,null,null);t["default"]=a.exports},"56d7":function(A,t,e){"use strict";e.r(t);e("e260"),e("e6cf"),e("cca6"),e("a79d");var o=e("2b0e"),n=e("3dfd");o["a"].config.productionTip=!1,new o["a"]({render:function(A){return A(n["default"])}}).$mount("#app");var r,a,i,c,l,u,d,q=[],s=[],f=!0,p=!0,m=new Audio(e("3c6d")),h=new Audio(e("3cf8")),g=new Audio(e("196f")),y=new Audio(e("78fc")),v=document.querySelector("#round-text"),W=document.querySelector("#round-number"),U=document.querySelector(".top-right-color"),Q=document.querySelector(".top-left-color"),b=document.querySelector(".bottom-right-color"),C=document.querySelector(".bottom-left-color"),M=document.querySelector("#easy"),S=document.querySelector("#normal"),x=document.querySelector("#hard"),k=document.querySelector("#startBtn");d=function(){M.checked?(u=1500,console.log("easy")):S.checked?(u=1e3,console.log("normal")):x.checked&&(u=800,console.log("hard"))},k.addEventListener("click",(function(A){d(),p&&I()}));var E=function(){W.innerHTML=a},I=function(){p=!1,q=[],s=[],r=0,l=0,a=1,E(),i=!0;for(var A=0;A<20;A++)q.push(Math.floor(4*Math.random())+1);c=!0,l=setInterval(O,u)};function O(){r==a&&(clearInterval(l),c=!1,F()),c&&(F(),setTimeout((function(){1==q[r]&&G(),2==q[r]&&j(),3==q[r]&&V(),4==q[r]&&z(),r++}),200))}var G=function(){f&&m.play(),f=!0,Q.style.backgroundColor="lightgreen"},j=function(){f&&h.play(),f=!0,U.style.backgroundColor="gold"},V=function(){f&&g.play(),f=!0,C.style.backgroundColor="tomato"},z=function(){f&&y.play(),f=!0,b.style.backgroundColor="dodgerblue"},F=function(){Q.style.backgroundColor="green",U.style.backgroundColor="yellow",C.style.backgroundColor="red",b.style.backgroundColor="blue"},Z=function(){Q.style.backgroundColor="lightgreen",U.style.backgroundColor="gold",C.style.backgroundColor="tomato",b.style.backgroundColor="dodgerblue"};Q.addEventListener("click",(function(A){s.push(1),K(),G(),p||setTimeout((function(){F()}),300)})),U.addEventListener("click",(function(A){s.push(2),K(),j(),p||setTimeout((function(){F()}),300)})),C.addEventListener("click",(function(A){s.push(3),K(),V(),p||setTimeout((function(){F()}),300)})),b.addEventListener("click",(function(A){s.push(4),K(),z(),p||setTimeout((function(){F()}),300)}));var K=function(){s[s.length-1]!==q[s.length-1]&&(i=!1),20==s.length&&i&&P(),1!=i&&(Z(),v.innerHTML="НЕВЕРНО!",setTimeout((function(){W.innerHTML=a,F(),I()}),800),setTimeout((function(){v.innerHTML="ROUND"}),800),f=!1),a==s.length&&i&&!p&&(a++,s=[],c=!0,r=0,W.innerHTML=a,l=setInterval(O,800))},P=function(){Z(),W.innerHTML("WIN!"),p=!0}},"78fc":function(A,t){A.exports="data:audio/mpeg;base64,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"},"85ec":function(A,t,e){}});
//# sourceMappingURL=app.ae938891.js.map