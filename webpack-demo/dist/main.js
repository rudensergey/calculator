!function(e){var t={};function n(o){if(t[o])return t[o].exports;var u=t[o]={i:o,l:!1,exports:{}};return e[o].call(u.exports,u,u.exports,n),u.l=!0,u.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var u in e)n.d(o,u,function(t){return e[t]}.bind(null,u));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){let n=document.getElementById("sum"),o=document.getElementById("result"),u=document.getElementById("checkboxLayout"),r=document.getElementById("toggle"),i=document.getElementById("timeline"),c=document.getElementById("term__current"),d=20;function l(){d<20&&(d=20),d>365&&(d=365);let e=1;n.value=+(n.value+"").replace(/\D/gi,"");let t=n.value;u.hasAttribute("data-checked")&&(e=20),c.innerText=d,o.innerText=(t*1.0027**d*(e/d*d)).toFixed(2)+"$"}r.ontouchstart=function(e){e.preventDefault();let t=e.targetTouches[0].clientX-r.getBoundingClientRect().left;function n(e){let n=e.targetTouches[0],o=n.clientX-t-i.getBoundingClientRect().left,u=i.getBoundingClientRect(),c=(u.left+u.width-18-(u.left+36))/345;d=Math.round((n.clientX-(u.left+36))/c)+20,l(),o<0&&(o=0);let f=i.offsetWidth-r.offsetWidth;o>f&&(o=f),r.style.left=o+"px"}document.addEventListener("touchmove",n),document.addEventListener("touchend",(function e(){document.removeEventListener("touchmove",e),document.removeEventListener("touchend",n)}))},r.onmousedown=function(e){e.preventDefault();let t=e.clientX-r.getBoundingClientRect().left;function n(e){let n=e.clientX-t-i.getBoundingClientRect().left,o=i.getBoundingClientRect(),u=(o.left+o.width-18-(o.left+36))/345;d=Math.round((e.clientX-(o.left+36))/u)+20,l(),n<0&&(n=0);let c=i.offsetWidth-r.offsetWidth;n>c&&(n=c),r.style.left=n+"px"}document.addEventListener("mousemove",n),document.addEventListener("mouseup",(function e(){document.removeEventListener("mouseup",e),document.removeEventListener("mousemove",n)}))},r.ondragstart=function(){return!1},n.addEventListener("keyup",()=>l()),u.addEventListener("click",e=>{"INPUT"===e.target.tagName&&(u.hasAttribute("data-checked")?(u.removeAttribute("data-checked"),l()):(u.setAttribute("data-checked",!0),l()))})}]);