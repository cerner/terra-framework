(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[92811],{51452:function(e,t,r){"use strict";var n=r(24994);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(r(96540)),a=r(28651),i=n(r(52921)),o=n(r(36563));t.default=function(){return l.default.createElement(a.MemoryRouter,null,l.default.createElement(i.default,{id:"test-header",layoutConfig:{size:"large"},nameConfig:{title:"app-test-title"},utilityConfig:{title:"test-util-title",initialSelectedKey:"test-menu",onChange:function(){},menuItems:[{key:"test-menu",contentLocation:"body",title:"test-menu-title"}]},extensions:l.default.createElement(o.default,{layoutConfig:{size:"large"}}),applicationLinks:{links:[{id:"123",path:"/something1",text:"item 1"},{id:"234",path:"/something2",text:"item 2"},{id:"345",path:"/something3",text:"item 3"}]}}))}},36563:function(e,t,r){"use strict";var n=r(24994);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(r(94634)),a=n(r(69620)),i=n(r(96540)),o=n(r(67967)),u=n(r(56783)),f=o.default.bind(u.default);t.default=function(e){return"large"!==(0,l.default)({},((0,a.default)(e),e)).layoutConfig.size?i.default.createElement("div",{className:f("demo-extensions-small")},"Test Extensions Small"):i.default.createElement("div",{className:f(["demo-extensions"])},"Test Extensions Large")}},92420:function(e,t,r){"use strict";r.r(t),t.default={arrange:"Arrange-module__arrange___hY0Ml",fill:"Arrange-module__fill___m88eq",fit:"Arrange-module__fit___tv8j-",center:"Arrange-module__center___9qfhG",bottom:"Arrange-module__bottom___8beod",stretch:"Arrange-module__stretch___eQF-k",default:"Arrange-module__default___z+O29"}},56783:function(e,t,r){"use strict";r.r(t),t.default={"demo-extensions":"demoStyles-module__demo-extensions___YUK-8","demo-extensions-small":"demoStyles-module__demo-extensions-small___gY17H"}},39496:function(e,t,r){"use strict";function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.AlignmentTypes=void 0;var l=f(r(96540)),a=f(r(5556)),i=f(r(67967)),o=f(r(92420)),u=["fitStart","fill","fitEnd","align","alignFitStart","alignFill","alignFitEnd","fitStartAttributes","fillAttributes","fitEndAttributes"];function f(e){return e&&e.__esModule?e:{default:e}}function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s.apply(this,arguments)}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){m(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(e,t,r){var l;return l=function(e,t){if("object"!=n(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var l=r.call(e,t||"default");if("object"!=n(l))return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"),(t="symbol"==n(l)?l:l+"")in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function b(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}t.AlignmentTypes={CENTER:"center",BOTTOM:"bottom",STRETCH:"stretch"};var p=i.default.bind(o.default),_={fitStart:a.default.element,fill:a.default.element.isRequired,fitEnd:a.default.element,align:a.default.oneOf(["center","bottom","stretch"]),alignFitStart:a.default.oneOf(["center","bottom","stretch"]),alignFitEnd:a.default.oneOf(["center","bottom","stretch"]),alignFill:a.default.oneOf(["center","bottom","stretch"]),fitStartAttributes:a.default.object,fillAttributes:a.default.object,fitEndAttributes:a.default.object},y=function(e){var t=e.fitStart,r=e.fill,n=e.fitEnd,a=e.align,i=e.alignFitStart,o=e.alignFill,f=e.alignFitEnd,c=e.fitStartAttributes,m=e.fillAttributes,_=e.fitEndAttributes,y=b(e,u),g=d({},c),v=d({},m),O=d({},_);return l.default.createElement("span",s({},y,{className:p("arrange",y.className)}),l.default.createElement("span",s({},g,{className:p("fit",a||i,g.className,"fit-block")}),t),l.default.createElement("span",s({},v,{className:p("fill",a||o,v.className,"fill-block")}),r),l.default.createElement("span",s({},O,{className:p("fit",a||f,O.className)}),n))};y.propTypes=_;t.default=y},40495:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(r(96540)),l=a(r(25365));function a(e){return e&&e.__esModule?e:{default:e}}var i=function(e){var t=Object.assign({},e);return n.default.createElement(l.default,t,n.default.createElement("path",{d:"M24 37.7 0 14.2l3.8-3.9L24 30l20.2-19.7 3.8 3.9z"}))};i.displayName="IconChevronDown",i.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};t.default=i},69620:function(e){e.exports=function(e){if(null==e)throw new TypeError("Cannot destructure "+e)},e.exports.__esModule=!0,e.exports.default=e.exports}}]);