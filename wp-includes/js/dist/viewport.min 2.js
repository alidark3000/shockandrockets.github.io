/*! This file is auto-generated */
!function(){"use strict";var e={d:function(t,r){for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})},o:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r:function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{ifViewportMatches:function(){return f},store:function(){return s},withViewportMatch:function(){return h}});var r={};e.r(r),e.d(r,{setIsMatching:function(){return c}});var n={};e.r(n),e.d(n,{isViewportMatch:function(){return u}});var o=window.lodash,i=window.wp.data;var a=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return"SET_IS_MATCHING"===t.type?t.values:e};function c(e){return{type:"SET_IS_MATCHING",values:e}}function u(e,t){return-1===t.indexOf(" ")&&(t=">= "+t),!!e[t]}const s=(0,i.createReduxStore)("core/viewport",{reducer:a,actions:r,selectors:n});(0,i.register)(s);var d=(e,t)=>{const r=(0,o.debounce)((()=>{const e=(0,o.mapValues)(n,(e=>e.matches));(0,i.dispatch)(s).setIsMatching(e)}),{leading:!0}),n=(0,o.reduce)(e,((e,n,i)=>((0,o.forEach)(t,((t,o)=>{const a=window.matchMedia(`(${t}: ${n}px)`);a.addListener(r);const c=[o,i].join(" ");e[c]=a})),e)),{});window.addEventListener("orientationchange",r),r(),r.flush()},p=window.wp.compose;function w(){return w=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},w.apply(this,arguments)}var l=window.wp.element;var h=e=>(0,p.createHigherOrderComponent)((t=>(0,p.pure)((r=>{const n=(0,o.mapValues)(e,(e=>{let[t,r]=e.split(" ");return void 0===r&&(r=t,t=">="),(0,p.useViewportMatch)(r,t)}));return(0,l.createElement)(t,w({},r,n))}))),"withViewportMatch");var f=e=>(0,p.createHigherOrderComponent)((0,p.compose)([h({isViewportMatch:e}),(0,p.ifCondition)((e=>e.isViewportMatch))]),"ifViewportMatches");d({huge:1440,wide:1280,large:960,medium:782,small:600,mobile:480},{"<":"max-width",">=":"min-width"}),(window.wp=window.wp||{}).viewport=t}();