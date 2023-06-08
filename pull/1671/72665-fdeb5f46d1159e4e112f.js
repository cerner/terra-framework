(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[72665],{66633:function(e,t,r){"use strict";r.r(t),t.default={arrange:"Arrange-module__arrange___hY0Ml",fill:"Arrange-module__fill___m88eq",fit:"Arrange-module__fit___tv8j-",center:"Arrange-module__center___9qfhG",bottom:"Arrange-module__bottom___8beod",stretch:"Arrange-module__stretch___eQF-k",default:"Arrange-module__default___z+O29"}},34760:function(e){var t=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'],r=t.join(","),n="undefined"==typeof Element?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector;function a(e,t){t=t||{};var a,o,u,f=[],s=[],d=e.querySelectorAll(r);for(t.includeContainer&&n.call(e,r)&&(d=Array.prototype.slice.apply(d)).unshift(e),a=0;a<d.length;a++)l(o=d[a])&&(0===(u=i(o))?f.push(o):s.push({documentOrder:a,tabIndex:u,node:o}));return s.sort(c).map((function(e){return e.node})).concat(f)}function l(e){return!(!o(e)||function(e){return function(e){return f(e)&&"radio"===e.type}(e)&&!function(e){if(!e.name)return!0;var t=e.ownerDocument.querySelectorAll('input[type="radio"][name="'+e.name+'"]'),r=function(e){for(var t=0;t<e.length;t++)if(e[t].checked)return e[t]}(t);return!r||r===e}(e)}(e)||i(e)<0)}function o(e){return!(e.disabled||function(e){return f(e)&&"hidden"===e.type}(e)||function(e){return null===e.offsetParent||"hidden"===getComputedStyle(e).visibility}(e))}a.isTabbable=function(e){if(!e)throw new Error("No node provided");return!1!==n.call(e,r)&&l(e)},a.isFocusable=function(e){if(!e)throw new Error("No node provided");return!1!==n.call(e,u)&&o(e)};var u=t.concat("iframe").join(",");function i(e){var t=parseInt(e.getAttribute("tabindex"),10);return isNaN(t)?function(e){return"true"===e.contentEditable}(e)?0:e.tabIndex:t}function c(e,t){return e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex}function f(e){return"INPUT"===e.tagName}e.exports=a},78490:function(e,t,r){"use strict";function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.AlignmentTypes=void 0;var a=c(r(67294)),l=c(r(45697)),o=c(r(47166)),u=c(r(66633)),i=["fitStart","fill","fitEnd","align","alignFitStart","alignFill","alignFitEnd","fitStartAttributes","fillAttributes","fitEndAttributes"];function c(e){return e&&e.__esModule?e:{default:e}}function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},f.apply(this,arguments)}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==n(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var a=r.call(e,t||"default");if("object"!==n(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===n(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function v(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}t.AlignmentTypes={CENTER:"center",BOTTOM:"bottom",STRETCH:"stretch"};var b=o.default.bind(u.default),m={fitStart:l.default.element,fill:l.default.element.isRequired,fitEnd:l.default.element,align:l.default.oneOf(["center","bottom","stretch"]),alignFitStart:l.default.oneOf(["center","bottom","stretch"]),alignFitEnd:l.default.oneOf(["center","bottom","stretch"]),alignFill:l.default.oneOf(["center","bottom","stretch"]),fitStartAttributes:l.default.object,fillAttributes:l.default.object,fitEndAttributes:l.default.object},y=function(e){var t=e.fitStart,r=e.fill,n=e.fitEnd,l=e.align,o=e.alignFitStart,u=e.alignFill,c=e.alignFitEnd,s=e.fitStartAttributes,p=e.fillAttributes,m=e.fitEndAttributes,y=v(e,i),h=d({},s),g=d({},p),O=d({},m);return a.default.createElement("div",f({},y,{className:b("arrange",y.className)}),a.default.createElement("div",f({},h,{className:b("fit",l||o,h.className)}),t),a.default.createElement("div",f({},g,{className:b("fill",l||u,g.className)}),r),a.default.createElement("div",f({},O,{className:b("fit",l||c,O.className)}),n))};y.propTypes=m;var h=y;t.default=h},56657:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(r(67294)),a=l(r(99139));function l(e){return e&&e.__esModule?e:{default:e}}function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}var u=function(e){var t=o({},e);return n.default.createElement(a.default,t,n.default.createElement("path",{d:"M43.9 40.6c-.5 0-.9.1-1.3.2l-8.5-8.5c1.5-1.9 2.6-4.2 2.8-6.8h2l.3.3c1 1 2.6 1 3.7 0s1-2.6 0-3.7-2.6-1-3.7 0l-.3.3h-2c-.3-2.6-1.3-4.8-2.8-6.8l2.3-2.3c.6.3 1.3.5 2 .5 2.6 0 4.6-2.1 4.6-4.6s-2.1-4.6-4.6-4.6c-2.6 0-4.6 2.1-4.6 4.6 0 .7.2 1.4.5 2L32 13.4c-1.9-1.5-4.2-2.6-6.8-2.8V4.7l.3-.3c1-1 1-2.6 0-3.7s-2.6-1-3.7 0-1 2.6 0 3.7l.3.3v5.9c-2.6.3-4.8 1.3-6.8 2.8L7.2 5.2c.2-.4.2-.8.2-1.3 0-2-1.6-3.7-3.7-3.7S.1 2 .1 4s1.6 3.7 3.7 3.7c.5 0 .9-.1 1.3-.2l8.5 8.5c-1.5 1.9-2.6 4.2-2.8 6.8H9c-.6-1.8-2.3-3.2-4.3-3.2C2.2 19.4.2 21.5.2 24s2.1 4.6 4.6 4.6c2 0 3.8-1.3 4.3-3.2h1.6c.3 2.6 1.3 4.8 2.8 6.8l-5 5h-.4c-1.4 0-2.6 1.2-2.6 2.6 0 1.4 1.2 2.6 2.6 2.6s2.6-1.2 2.6-2.6v-.4l5-5c1.9 1.5 4.2 2.6 6.8 2.8v1.6c-1.8.6-3.2 2.3-3.2 4.3 0 2.6 2.1 4.6 4.6 4.6s4.6-2.1 4.6-4.6c0-2-1.3-3.8-3.2-4.3v-1.6c2.6-.3 4.8-1.3 6.8-2.8l8.5 8.5c-.2.4-.2.8-.2 1.3 0 2 1.6 3.7 3.7 3.7s3.7-1.6 3.7-3.7c.1-1.9-1.8-3.6-3.9-3.6z"}))};u.displayName="IconAllergy",u.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"};var i=u;t.default=i},91021:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(r(67294)),a=l(r(99139));function l(e){return e&&e.__esModule?e:{default:e}}function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}var u=function(e){var t=o({},e);return n.default.createElement(a.default,t,n.default.createElement("path",{d:"M24 37.7L0 14.2l3.8-3.9L24 30l20.2-19.7 3.8 3.9z"}))};u.displayName="IconChevronDown",u.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isBidi:!0};var i=u;t.default=i},34540:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(r(67294)),a=l(r(99139));function l(e){return e&&e.__esModule?e:{default:e}}function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}var u=function(e){var t=o({},e);return n.default.createElement(a.default,t,n.default.createElement("path",{d:"M.7 20.1a2.47 2.47 0 01-.7-1.5c0-.7.5-1.2 1.6-1.4L16.1 15l6.5-13.8C22.9.4 23.4 0 24 0s1 .4 1.4 1.2L31.9 15l14.5 2.2c1.1.2 1.6.6 1.6 1.4a2.75 2.75 0 01-.8 1.5L36.8 30.8l2.5 15.1v.6a2 2 0 01-.3 1.1 1 1 0 01-.9.4 1.92 1.92 0 01-1.2-.4l-13-7.1-13 7.1a2.84 2.84 0 01-1.2.4 1 1 0 01-.9-.4 2 2 0 01-.3-1.1 1.76 1.76 0 01.1-.6l2.5-15.1z"}))};u.displayName="IconFeatured",u.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1"};var i=u;t.default=i},94809:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(r(67294)),a=l(r(99139));function l(e){return e&&e.__esModule?e:{default:e}}function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}var u=function(e){var t=o({},e);return n.default.createElement(a.default,t,n.default.createElement("path",{d:"M45.8 12c1.2 0 2.2 1 2.2 2.2v26.7c0 1.2-1 2.2-2.2 2.2H2.2C1 43 0 42 0 40.8V7.2C0 6 1 5 2.2 5H15c1.4.1 2.7.6 3.7 1.6l3.8 3.9c1 1 2.3 1.5 3.7 1.6l19.4-.1h.2z"}))};u.displayName="IconFolder",u.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",isBidi:!0};var i=u;t.default=i},41623:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(r(67294)),a=l(r(99139));function l(e){return e&&e.__esModule?e:{default:e}}function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}var u=function(e){var t=o({},e);return n.default.createElement(a.default,t,n.default.createElement("path",{d:"M38.8 20H35v-9a11 11 0 00-22 0v9H9.2A2.22 2.22 0 007 22.2v23.7A2.2 2.2 0 009.2 48h29.7a2.22 2.22 0 002.2-2.2V22.2a2.38 2.38 0 00-2.3-2.2zM26 33.5V40h-4v-6.5a3.26 3.26 0 01-1-2.3 3 3 0 013-3 3.08 3.08 0 013 3 3.26 3.26 0 01-1 2.3zm6-14.9V20H16v-9a8 8 0 0116 0z"}))};u.displayName="IconPadlock",u.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1"};var i=u;t.default=i},87491:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(r(67294)),a=l(r(99139));function l(e){return e&&e.__esModule?e:{default:e}}function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}var u=function(e){var t=o({},e);return n.default.createElement(a.default,t,n.default.createElement("path",{d:"M39.8 12H35V1.7c0-.9-.8-1.7-1.7-1.7H8.7C7.8 0 7 .8 7 1.7V12H2.2C1 12 0 13 0 14.2v19.7C.1 35.1 1 36 2.2 36H7v10.3c0 .9.8 1.7 1.7 1.7h24.6c.9 0 1.7-.8 1.7-1.7V36h4.8c1.2 0 2.2-1 2.2-2.2V14.2c0-1.2-1-2.2-2.2-2.2zM10 3h22v9H10V3zm22 42H10V29.9h22V45zm3.2-24C34 21 33 20 33 18.8s1-2.2 2.2-2.2 2.2 1 2.2 2.2c0 1.2-1 2.2-2.2 2.2z"}))};u.displayName="IconPrinter",u.defaultProps={viewBox:"0 0 42 48",xmlns:"http://www.w3.org/2000/svg"};var i=u;t.default=i},2396:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(r(67294)),a=l(r(99139));function l(e){return e&&e.__esModule?e:{default:e}}function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}var u=function(e){var t=o({},e);return n.default.createElement(a.default,t,n.default.createElement("path",{d:"M42.1 4H28V2a2 2 0 00-2-2h-4a2 2 0 00-2 2v2H5.9L5 11h38zM38 14H8.1l3.7 32a2.26 2.26 0 002.2 2h20a2.26 2.26 0 002.2-2l3.7-32z"}))};u.displayName="IconTrash",u.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1"};var i=u;t.default=i}}]);