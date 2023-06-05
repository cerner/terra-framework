"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[57287],{51536:function(t,e,r){var n=r(64836);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(r(67294)),l=r(39711),i=n(r(2396)),o=n(r(94809)),u=n(r(50826)),f=n(r(2406)),c=function(){return a.default.createElement(l.MemoryRouter,null,a.default.createElement(f.default,{id:"test-header",layoutConfig:{size:"large"},nameConfig:{title:"app-test-title"},utilityConfig:{title:"test-util-title",initialSelectedKey:"test-menu",onChange:function(){},menuItems:[{key:"test-menu",contentLocation:"body",title:"test-menu-title"}]},applicationLinks:{links:[{id:"123",path:"/something1",text:"item 1",icon:a.default.createElement(i.default,null)},{id:"234",path:"/something2",text:"item 2",icon:a.default.createElement(o.default,null)},{id:"345",path:"/something3",text:"item 3",icon:a.default.createElement(u.default,null)}]}}))};e.default=c},66633:function(t,e,r){r.r(e),e.default={arrange:"Arrange-module__arrange___hY0Ml",fill:"Arrange-module__fill___m88eq",fit:"Arrange-module__fit___tv8j-",center:"Arrange-module__center___9qfhG",bottom:"Arrange-module__bottom___8beod",stretch:"Arrange-module__stretch___eQF-k",default:"Arrange-module__default___z+O29"}},78490:function(t,e,r){function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.AlignmentTypes=void 0;var a=f(r(67294)),l=f(r(45697)),i=f(r(47166)),o=f(r(66633)),u=["fitStart","fill","fitEnd","align","alignFitStart","alignFill","alignFitEnd","fitStartAttributes","fillAttributes","fitEndAttributes"];function f(t){return t&&t.__esModule?t:{default:t}}function c(){return c=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},c.apply(this,arguments)}function s(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function d(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(Object(r),!0).forEach((function(e){m(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function m(t,e,r){return(e=function(t){var e=function(t,e){if("object"!==n(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var a=r.call(t,e||"default");if("object"!==n(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===n(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function p(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}e.AlignmentTypes={CENTER:"center",BOTTOM:"bottom",STRETCH:"stretch"};var b=i.default.bind(o.default),v={fitStart:l.default.element,fill:l.default.element.isRequired,fitEnd:l.default.element,align:l.default.oneOf(["center","bottom","stretch"]),alignFitStart:l.default.oneOf(["center","bottom","stretch"]),alignFitEnd:l.default.oneOf(["center","bottom","stretch"]),alignFill:l.default.oneOf(["center","bottom","stretch"]),fitStartAttributes:l.default.object,fillAttributes:l.default.object,fitEndAttributes:l.default.object},g=function(t){var e=t.fitStart,r=t.fill,n=t.fitEnd,l=t.align,i=t.alignFitStart,o=t.alignFill,f=t.alignFitEnd,s=t.fitStartAttributes,m=t.fillAttributes,v=t.fitEndAttributes,g=p(t,u),y=d({},s),_=d({},m),O=d({},v);return a.default.createElement("div",c({},g,{className:b("arrange",g.className)}),a.default.createElement("div",c({},y,{className:b("fit",l||i,y.className)}),e),a.default.createElement("div",c({},_,{className:b("fill",l||o,_.className)}),r),a.default.createElement("div",c({},O,{className:b("fit",l||f,O.className)}),n))};g.propTypes=v;var y=g;e.default=y},91021:function(t,e,r){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=l(r(67294)),a=l(r(99139));function l(t){return t&&t.__esModule?t:{default:t}}function i(){return i=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},i.apply(this,arguments)}var o=function(t){var e=i({},t);return n.default.createElement(a.default,e,n.default.createElement("path",{d:"M24 37.7L0 14.2l3.8-3.9L24 30l20.2-19.7 3.8 3.9z"}))};o.displayName="IconChevronDown",o.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isBidi:!0};var u=o;e.default=u},94809:function(t,e,r){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=l(r(67294)),a=l(r(99139));function l(t){return t&&t.__esModule?t:{default:t}}function i(){return i=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},i.apply(this,arguments)}var o=function(t){var e=i({},t);return n.default.createElement(a.default,e,n.default.createElement("path",{d:"M45.8 12c1.2 0 2.2 1 2.2 2.2v26.7c0 1.2-1 2.2-2.2 2.2H2.2C1 43 0 42 0 40.8V7.2C0 6 1 5 2.2 5H15c1.4.1 2.7.6 3.7 1.6l3.8 3.9c1 1 2.3 1.5 3.7 1.6l19.4-.1h.2z"}))};o.displayName="IconFolder",o.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",isBidi:!0};var u=o;e.default=u},2396:function(t,e,r){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=l(r(67294)),a=l(r(99139));function l(t){return t&&t.__esModule?t:{default:t}}function i(){return i=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},i.apply(this,arguments)}var o=function(t){var e=i({},t);return n.default.createElement(a.default,e,n.default.createElement("path",{d:"M42.1 4H28V2a2 2 0 00-2-2h-4a2 2 0 00-2 2v2H5.9L5 11h38zM38 14H8.1l3.7 32a2.26 2.26 0 002.2 2h20a2.26 2.26 0 002.2-2l3.7-32z"}))};o.displayName="IconTrash",o.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1"};var u=o;e.default=u}}]);