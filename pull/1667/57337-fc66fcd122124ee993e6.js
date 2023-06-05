/*! For license information please see 57337-fc66fcd122124ee993e6.js.LICENSE.txt */
(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[57337],{10544:function(t,e,n){"use strict";var r=n(64836);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=r(n(56690)),l=r(n(89728)),o=r(n(66115)),i=r(n(61655)),u=r(n(94993)),f=r(n(73808)),c=r(n(67294)),s=r(n(70419)),d=r(n(55281)),p=r(n(51162));function b(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=(0,f.default)(t);if(e){var a=(0,f.default)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return(0,u.default)(this,n)}}var v=function(t){(0,i.default)(n,t);var e=b(n);function n(t){var r;return(0,a.default)(this,n),(r=e.call(this,t)).handleButtonClick=r.handleButtonClick.bind((0,o.default)(r)),r.handleRequestClose=r.handleRequestClose.bind((0,o.default)(r)),r.setButtonNode=r.setButtonNode.bind((0,o.default)(r)),r.getButtonNode=r.getButtonNode.bind((0,o.default)(r)),r.state={open:!1},r}return(0,l.default)(n,[{key:"handleButtonClick",value:function(){this.setState({open:!0})}},{key:"handleRequestClose",value:function(){this.setState({open:!1})}},{key:"setButtonNode",value:function(t){this.buttonNode=t}},{key:"getButtonNode",value:function(){return this.buttonNode}},{key:"render",value:function(){return c.default.createElement("div",null,c.default.createElement(s.default,{isOpen:this.state.open,targetRef:this.getButtonNode,onRequestClose:this.handleRequestClose},c.default.createElement(s.default.Item,{text:"Default Item 1",id:"TestContent1"}),c.default.createElement(s.default.Item,{text:"Default Item 2",id:"TestContent2",isDisabled:!0,onClick:function(){alert("Disabled item was clicked !")}})),c.default.createElement(d.default,{id:"default-button",type:"button",onClick:this.handleButtonClick,text:"Default Menu","aria-haspopup":!0,icon:c.default.createElement(p.default,null),isReversed:!0,refCallback:this.setButtonNode}))}}]),n}(c.default.Component);e.default=v},66633:function(t,e,n){"use strict";n.r(e),e.default={arrange:"Arrange-module__arrange___hY0Ml",fill:"Arrange-module__fill___m88eq",fit:"Arrange-module__fit___tv8j-",center:"Arrange-module__center___9qfhG",bottom:"Arrange-module__bottom___8beod",stretch:"Arrange-module__stretch___eQF-k",default:"Arrange-module__default___z+O29"}},74260:function(t,e,n){"use strict";n.r(e),e.default={"visually-hidden-text":"VisuallyHiddenText-module__visually-hidden-text___vcInW"}},78490:function(t,e,n){"use strict";function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.AlignmentTypes=void 0;var a=f(n(67294)),l=f(n(45697)),o=f(n(47166)),i=f(n(66633)),u=["fitStart","fill","fitEnd","align","alignFitStart","alignFill","alignFitEnd","fitStartAttributes","fillAttributes","fitEndAttributes"];function f(t){return t&&t.__esModule?t:{default:t}}function c(){return c=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},c.apply(this,arguments)}function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){p(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e,n){return(e=function(t){var e=function(t,e){if("object"!==r(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var a=n.call(t,e||"default");if("object"!==r(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===r(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function b(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}e.AlignmentTypes={CENTER:"center",BOTTOM:"bottom",STRETCH:"stretch"};var v=o.default.bind(i.default),y={fitStart:l.default.element,fill:l.default.element.isRequired,fitEnd:l.default.element,align:l.default.oneOf(["center","bottom","stretch"]),alignFitStart:l.default.oneOf(["center","bottom","stretch"]),alignFitEnd:l.default.oneOf(["center","bottom","stretch"]),alignFill:l.default.oneOf(["center","bottom","stretch"]),fitStartAttributes:l.default.object,fillAttributes:l.default.object,fitEndAttributes:l.default.object},m=function(t){var e=t.fitStart,n=t.fill,r=t.fitEnd,l=t.align,o=t.alignFitStart,i=t.alignFill,f=t.alignFitEnd,s=t.fitStartAttributes,p=t.fillAttributes,y=t.fitEndAttributes,m=b(t,u),h=d({},s),g=d({},p),O=d({},y);return a.default.createElement("div",c({},m,{className:v("arrange",m.className)}),a.default.createElement("div",c({},h,{className:v("fit",l||o,h.className)}),e),a.default.createElement("div",c({},g,{className:v("fill",l||i,g.className)}),n),a.default.createElement("div",c({},O,{className:v("fit",l||f,O.className)}),r))};m.propTypes=y;var h=m;e.default=h},46379:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=o(n(67294)),a=o(n(99139)),l=n(25387);function o(t){return t&&t.__esModule?t:{default:t}}function i(){return i=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},i.apply(this,arguments)}var u=function(t){var e=i({},t);return r.default.createElement(l.FormattedMessage,{id:"Terra.icon.IconConsultInstructionsForUse.title"},(function(t){return r.default.createElement("span",{"aria-label":t,title:t},r.default.createElement(a.default,e,r.default.createElement("path",{d:"M42.746 9c-2.28 0-4.508-.85-6.405-2.115a10.165 10.165 0 00-5.646-1.71c-2.205 0-4.404.714-6.233 2.131L24 7.663l-.462-.357a10.17 10.17 0 00-6.233-2.131c-1.964 0-3.932.567-5.646 1.71C9.762 8.15 7.534 9 5.254 9H0v34h5.254c2.28 0 4.508-.85 6.405-2.115a10.163 10.163 0 015.646-1.71c1.826 0 3.646.498 5.257 1.471.142.548.626.916 1.159.916h.556c.534 0 1.017-.368 1.159-.916a10.172 10.172 0 015.257-1.471c1.964 0 3.932.567 5.646 1.71C38.238 42.15 40.466 43 42.746 43H48V9h-5.254zM9.995 38.389C8.893 39.124 7.175 40 5.254 40H3V12h2.254c2.709 0 5.5-.906 8.069-2.619a7.157 7.157 0 013.983-1.206c1.583 0 3.144.534 4.396 1.503l.798.618v26.95a13.237 13.237 0 00-5.195-1.07 13.13 13.13 0 00-7.31 2.213zM45 40h-2.254c-1.921 0-3.639-.876-4.741-1.611a13.138 13.138 0 00-7.31-2.214c-1.788 0-3.56.371-5.195 1.07v-26.95l.798-.618a7.219 7.219 0 014.397-1.503c1.422 0 2.799.417 3.982 1.206 2.57 1.713 5.36 2.619 8.069 2.619H45V40zm-8-11h2v2h-7v-2h2v-6h-2v-2h5v8zm-4-12a2 2 0 113.999-.001A2 2 0 0133 17z"})))}))};u.displayName="IconConsultInstructionsForUse",u.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"};var f=u;e.default=f},37645:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=u(n(67294)),a=u(n(71881)),l=u(n(35960)),o=u(n(74260)),i=["refCallback","text"];function u(t){return t&&t.__esModule?t:{default:t}}function f(){return f=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},f.apply(this,arguments)}function c(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=l.default.bind(o.default),d={refCallback:a.default.func,text:a.default.string},p={text:void 0,refCallback:void 0},b=function(t){var e=t.refCallback,n=t.text,a=c(t,i),l=s(["visually-hidden-text",a.className]);return r.default.createElement("span",f({ref:e},a,{className:l}),n)};b.propTypes=d,b.defaultProps=p;var v=b;e.default=v},35960:function(t,e){var n;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var t=[],e=0;e<arguments.length;e++){var n=arguments[e];if(n){var l=typeof n;if("string"===l||"number"===l)t.push(this&&this[n]||n);else if(Array.isArray(n))t.push(a.apply(this,n));else if("object"===l){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){t.push(n.toString());continue}for(var o in n)r.call(n,o)&&n[o]&&t.push(this&&this[o]||o)}}}return t.join(" ")}t.exports?(a.default=a,t.exports=a):void 0===(n=function(){return a}.apply(e,[]))||(t.exports=n)}()},7944:function(t,e,n){"use strict";var r=n(85633);function a(){}function l(){}l.resetWarningCache=a,t.exports=function(){function t(t,e,n,a,l,o){if(o!==r){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function e(){return t}t.isRequired=t;var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:l,resetWarningCache:a};return n.PropTypes=n,n}},71881:function(t,e,n){t.exports=n(7944)()},85633:function(t){"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);