(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[64052],{61704:function(t,e,n){"use strict";var r=n(24994),a=n(73738);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=r(n(96540)),i=r(n(5556)),u=n(28651),l=r(n(54495)),f=r(n(67967)),c=r(n(25645)),s=function(t,e){if(!e&&t&&t.__esModule)return t;if(null===t||"object"!=a(t)&&"function"!=typeof t)return{default:t};var n=d(e);if(n&&n.has(t))return n.get(t);var r={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in t)if("default"!==i&&{}.hasOwnProperty.call(t,i)){var u=o?Object.getOwnPropertyDescriptor(t,i):null;u&&(u.get||u.set)?Object.defineProperty(r,i,u):r[i]=t[i]}return r.default=t,n&&n.set(t,r),r}(n(97787));function d(t){if("function"!=typeof WeakMap)return null;var e=new WeakMap,n=new WeakMap;return(d=function(t){return t?n:e})(t)}var p=f.default.bind(c.default),m=function(t){var e=t.contentName;return o.default.createElement("div",null,"Page Content:"," ",e)};m.propTypes={contentName:i.default.string};var b={menu:{"/page_1":{path:"/page_1",component:{default:{componentClass:s.RoutingMenu,props:{title:"Page 1 Menu",menuItems:[{text:"Item 1",path:"/page_1/item_1",hasSubMenu:!0},{text:"Item 2",path:"/page_1/item_2"}]}}}},"/page_1/item_1":{path:"/page_1/item_1",component:{default:{componentClass:s.RoutingMenu,props:{title:"Page 1 Item 1 Menu",menuItems:[{text:"Thing 1",path:"/page_1/item_1/thing_1"},{text:"Thing 2",path:"/page_1/item_1/thing_2"}]}}}}},content:{"/page_1":{path:"/page_1",component:{default:{componentClass:m,props:{contentName:"Page 1"}}}}}},g=(0,u.withRouter)((function(){return o.default.createElement(l.default,{fill:!0,id:"application-layout-test"},o.default.createElement(s.default,{routingConfig:b,indexPath:"/page_1"}))}));e.default=function(){return o.default.createElement("div",{className:p("app-router")},o.default.createElement(u.MemoryRouter,null,o.default.createElement(g,null)))}},92420:function(t,e,n){"use strict";n.r(e),e.default={arrange:"Arrange-module__arrange___hY0Ml",fill:"Arrange-module__fill___m88eq",fit:"Arrange-module__fit___tv8j-",center:"Arrange-module__center___9qfhG",bottom:"Arrange-module__bottom___8beod",stretch:"Arrange-module__stretch___eQF-k",default:"Arrange-module__default___z+O29"}},25645:function(t,e,n){"use strict";n.r(e),e.default={"app-router":"ApplicationLayoutCommon-test-module__app-router___tIBx8"}},39496:function(t,e,n){"use strict";function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.AlignmentTypes=void 0;var a=f(n(96540)),o=f(n(5556)),i=f(n(67967)),u=f(n(92420)),l=["fitStart","fill","fitEnd","align","alignFitStart","alignFill","alignFitEnd","fitStartAttributes","fillAttributes","fitEndAttributes"];function f(t){return t&&t.__esModule?t:{default:t}}function c(){return c=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},c.apply(this,arguments)}function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){p(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e,n){var a;return a=function(t,e){if("object"!=r(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var a=n.call(t,e||"default");if("object"!=r(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(e,"string"),(e="symbol"==r(a)?a:String(a))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function m(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}e.AlignmentTypes={CENTER:"center",BOTTOM:"bottom",STRETCH:"stretch"};var b=i.default.bind(u.default),g={fitStart:o.default.element,fill:o.default.element.isRequired,fitEnd:o.default.element,align:o.default.oneOf(["center","bottom","stretch"]),alignFitStart:o.default.oneOf(["center","bottom","stretch"]),alignFitEnd:o.default.oneOf(["center","bottom","stretch"]),alignFill:o.default.oneOf(["center","bottom","stretch"]),fitStartAttributes:o.default.object,fillAttributes:o.default.object,fitEndAttributes:o.default.object},_=function(t){var e=t.fitStart,n=t.fill,r=t.fitEnd,o=t.align,i=t.alignFitStart,u=t.alignFill,f=t.alignFitEnd,s=t.fitStartAttributes,p=t.fillAttributes,g=t.fitEndAttributes,_=m(t,l),y=d({},s),v=d({},p),h=d({},g);return a.default.createElement("span",c({},_,{className:b("arrange",_.className)}),a.default.createElement("span",c({},y,{className:b("fit",o||i,y.className,"fit-block")}),e),a.default.createElement("span",c({},v,{className:b("fill",o||u,v.className,"fill-block")}),n),a.default.createElement("span",c({},h,{className:b("fit",o||f,h.className)}),r))};_.propTypes=g;e.default=_},40495:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=o(n(96540)),a=o(n(25365));function o(t){return t&&t.__esModule?t:{default:t}}function i(){return i=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},i.apply(this,arguments)}var u=function(t){var e=i({},t);return r.default.createElement(a.default,e,r.default.createElement("path",{d:"M24 37.7 0 14.2l3.8-3.9L24 30l20.2-19.7 3.8 3.9z"}))};u.displayName="IconChevronDown",u.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};e.default=u},20220:function(t){var e=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'],n=e.join(","),r="undefined"==typeof Element?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector;function a(t,e){e=e||{};var a,i,u,c=[],s=[],d=t.querySelectorAll(n);for(e.includeContainer&&r.call(t,n)&&(d=Array.prototype.slice.apply(d)).unshift(t),a=0;a<d.length;a++)o(i=d[a])&&(0===(u=l(i))?c.push(i):s.push({documentOrder:a,tabIndex:u,node:i}));return s.sort(f).map((function(t){return t.node})).concat(c)}function o(t){return!(!i(t)||function(t){return function(t){return c(t)&&"radio"===t.type}(t)&&!function(t){if(!t.name)return!0;var e=t.ownerDocument.querySelectorAll('input[type="radio"][name="'+t.name+'"]'),n=function(t){for(var e=0;e<t.length;e++)if(t[e].checked)return t[e]}(e);return!n||n===t}(t)}(t)||l(t)<0)}function i(t){return!(t.disabled||function(t){return c(t)&&"hidden"===t.type}(t)||function(t){return null===t.offsetParent||"hidden"===getComputedStyle(t).visibility}(t))}a.isTabbable=function(t){if(!t)throw new Error("No node provided");return!1!==r.call(t,n)&&o(t)},a.isFocusable=function(t){if(!t)throw new Error("No node provided");return!1!==r.call(t,u)&&i(t)};var u=e.concat("iframe").join(",");function l(t){var e=parseInt(t.getAttribute("tabindex"),10);return isNaN(e)?function(t){return"true"===t.contentEditable}(t)?0:t.tabIndex:e}function f(t,e){return t.tabIndex===e.tabIndex?t.documentOrder-e.documentOrder:t.tabIndex-e.tabIndex}function c(t){return"INPUT"===t.tagName}t.exports=a}}]);