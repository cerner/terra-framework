(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[75049],{89500:function(e,t,n){"use strict";var r=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=r(n(67294)),a=n(39711),i=r(n(2406)),o=r(n(26659));t.default=function(){return l.default.createElement(a.MemoryRouter,null,l.default.createElement(i.default,{id:"test-header",layoutConfig:{size:"small",toggleMenu:function(){}},nameConfig:{title:"app-test-title"},utilityConfig:{title:"test-util-title",initialSelectedKey:"test-menu",onChange:function(){},menuItems:[{key:"test-menu",contentLocation:"body",title:"test-menu-title"}]},extensions:l.default.createElement(o.default,{layoutConfig:{size:"large"}}),applicationLinks:{links:[{id:"123",path:"/something1",text:"item 1"},{id:"234",path:"/something2",text:"item 2"},{id:"345",path:"/something3",text:"item 3"}]}}))}},26659:function(e,t,n){"use strict";var r=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=r(n(10434)),a=r(n(13012)),i=r(n(67294)),o=r(n(47166)),u=r(n(90278)),f=o.default.bind(u.default);t.default=function(e){return"large"!==(0,l.default)({},((0,a.default)(e),e)).layoutConfig.size?i.default.createElement("div",{className:f("demo-extensions-small")},"Test Extensions Small"):i.default.createElement("div",{className:f(["demo-extensions"])},"Test Extensions Large")}},66633:function(e,t,n){"use strict";n.r(t),t.default={arrange:"Arrange-module__arrange___hY0Ml",fill:"Arrange-module__fill___m88eq",fit:"Arrange-module__fit___tv8j-",center:"Arrange-module__center___9qfhG",bottom:"Arrange-module__bottom___8beod",stretch:"Arrange-module__stretch___eQF-k",default:"Arrange-module__default___z+O29"}},90278:function(e,t,n){"use strict";n.r(t),t.default={"demo-extensions":"demoStyles-module__demo-extensions___YUK-8","demo-extensions-small":"demoStyles-module__demo-extensions-small___gY17H"}},78490:function(e,t,n){"use strict";function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.AlignmentTypes=void 0;var l=f(n(67294)),a=f(n(45697)),i=f(n(47166)),o=f(n(66633)),u=["fitStart","fill","fitEnd","align","alignFitStart","alignFill","alignFitEnd","fitStartAttributes","fillAttributes","fitEndAttributes"];function f(e){return e&&e.__esModule?e:{default:e}}function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){m(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var l=n.call(e,t||"default");if("object"!==r(l))return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===r(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}t.AlignmentTypes={CENTER:"center",BOTTOM:"bottom",STRETCH:"stretch"};var p=i.default.bind(o.default),g={fitStart:a.default.element,fill:a.default.element.isRequired,fitEnd:a.default.element,align:a.default.oneOf(["center","bottom","stretch"]),alignFitStart:a.default.oneOf(["center","bottom","stretch"]),alignFitEnd:a.default.oneOf(["center","bottom","stretch"]),alignFill:a.default.oneOf(["center","bottom","stretch"]),fitStartAttributes:a.default.object,fillAttributes:a.default.object,fitEndAttributes:a.default.object},y=function(e){var t=e.fitStart,n=e.fill,r=e.fitEnd,a=e.align,i=e.alignFitStart,o=e.alignFill,f=e.alignFitEnd,c=e.fitStartAttributes,m=e.fillAttributes,g=e.fitEndAttributes,y=b(e,u),_=d({},c),v=d({},m),O=d({},g);return l.default.createElement("span",s({},y,{className:p("arrange",y.className)}),l.default.createElement("span",s({},_,{className:p("fit",a||i,_.className,"fit-block")}),t),l.default.createElement("span",s({},v,{className:p("fill",a||o,v.className,"fill-block")}),n),l.default.createElement("span",s({},O,{className:p("fit",a||f,O.className)}),r))};y.propTypes=g;var _=y;t.default=_},91021:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(67294)),l=a(n(99139));function a(e){return e&&e.__esModule?e:{default:e}}function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}var o=function(e){var t=i({},e);return r.default.createElement(l.default,t,r.default.createElement("path",{d:"M24 37.7 0 14.2l3.8-3.9L24 30l20.2-19.7 3.8 3.9z"}))};o.displayName="IconChevronDown",o.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};var u=o;t.default=u},13012:function(e){e.exports=function(e){if(null==e)throw new TypeError("Cannot destructure "+e)},e.exports.__esModule=!0,e.exports.default=e.exports}}]);