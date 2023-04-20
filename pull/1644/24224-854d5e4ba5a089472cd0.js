/*! For license information please see 24224-854d5e4ba5a089472cd0.js.LICENSE.txt */
(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[24224],{38529:function(e,t,r){"use strict";var n=r(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(r(67294)),o=r(39711),a=n(r(67456)),u=n(r(53790)),l=n(r(50282));t.default=function(){return i.default.createElement(o.MemoryRouter,{initialEntries:u.default.map((function(e){return e.path})),initialIndex:0},i.default.createElement("div",{className:l.default["demo-header"]},i.default.createElement(a.default,{id:"test-tabs",alignment:"center",links:u.default})))}},53790:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=[{path:"/test1",text:"test 1"},{path:"/test2",text:"test 2"},{path:"/test3",text:"test 3"},{path:"/test4",text:"test 4"}];t.default=r},50282:function(e,t,r){"use strict";r.r(t),t.default={"demo-header":"demoStyles-module__demo-header___o5PlN","demo-header-with-icons":"demoStyles-module__demo-header-with-icons___Nt1gv"}},3336:function(e,t,r){"use strict";r.r(t),t.default={icon:"Icon-module__icon___FexpA","is-bidi":"Icon-module__is-bidi___edWBv","tui-Icon":"Icon-module__tui-Icon___NJXGo","is-spin":"Icon-module__is-spin___2YjYq"}},55068:function(e,t,r){"use strict";function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=c(r(67294)),o=c(r(31590)),a=c(r(49911)),u=c(r(27783)),l=c(r(3336)),s=["isBidi","isSpin","children","height","width","ariaLabel","a11yLabel","focusable"];function c(e){return e&&e.__esModule?e:{default:e}}function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},f.apply(this,arguments)}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==n(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,t||"default");if("object"!==n(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===n(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function b(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var y=u.default.bind(l.default),h={isBidi:o.default.bool,isSpin:o.default.bool,children:o.default.node,height:o.default.string,width:o.default.string,a11yLabel:o.default.string,ariaLabel:o.default.string,focusable:o.default.string},v=function(e){var t,r=e.isBidi,n=e.isSpin,o=e.children,u=e.height,l=e.width,c=e.ariaLabel,h=e.a11yLabel,v=e.focusable,m=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){d(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},b(e,s)),g=(0,a.default)(y("tui-Icon","icon",{"is-bidi":r},{"is-spin":n}),m.className);return h||c?(t=i.default.createElement("title",{},h||c),c&&console.warn("`ariaLabel` prop has been renamed to `a11yLabel`. please update all the refernces of ariaLabel prop to a11yLabel.")):(Object.keys(m).forEach((function(e){(e.includes("aria")||"title"===e||"role"===e)&&delete m[e]})),m.role="presentation"),m.height=u,m.width=l,m.focusable=v,i.default.createElement("svg",f({},m,{className:g}),t,o)};v.propTypes=h,v.defaultProps={isBidi:!1,isSpin:!1,children:null,height:"1em",width:"1em",focusable:"false"};var m=v;t.default=m},38859:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(r(67294)),i=o(r(55068));function o(e){return e&&e.__esModule?e:{default:e}}function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}var u=function(e){var t=a({},e);return n.default.createElement(i.default,t,n.default.createElement("path",{d:"M48 12L24 36 0 12h48z"}))};u.displayName="IconCaretDown",u.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",isBidi:!0};var l=u;t.default=l},27783:function(e,t){var r;!function(){"use strict";var n={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(this&&this[r]||r);else if(Array.isArray(r))e.push(i.apply(this,r));else if("object"===o){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){e.push(r.toString());continue}for(var a in r)n.call(r,a)&&r[a]&&e.push(this&&this[a]||a)}}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(r=function(){return i}.apply(t,[]))||(e.exports=r)}()},49911:function(e,t){var r;!function(){"use strict";var n={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)){if(r.length){var a=i.apply(null,r);a&&e.push(a)}}else if("object"===o){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){e.push(r.toString());continue}for(var u in r)n.call(r,u)&&r[u]&&e.push(u)}}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(r=function(){return i}.apply(t,[]))||(e.exports=r)}()},37968:function(e,t,r){"use strict";var n=r(83076);function i(){}function o(){}o.resetWarningCache=i,e.exports=function(){function e(e,t,r,i,o,a){if(a!==n){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:i};return r.PropTypes=r,r}},31590:function(e,t,r){e.exports=r(37968)()},83076:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);