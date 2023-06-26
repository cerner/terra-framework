/*! For license information please see 97446-109307e2cd18024f06f2.js.LICENSE.txt */
(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[97446],{49271:function(e,t,r){"use strict";var n=r(64836),a=r(18698);t.Z=void 0;var l=n(r(27424)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var r=m(t);if(r&&r.has(e))return r.get(e);var n={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=l?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(n,o,u):n[o]=e[o]}n.default=e,r&&r.set(e,n);return n}(r(67294)),u=n(r(45697)),i=n(r(47166)),c=r(21538),s=n(r(33864)),f=n(r(23399)),d=r(51051),p=n(r(53560));function m(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(m=function(e){return e?r:t})(e)}var v=i.default.bind(p.default),_={example:u.default.element,exampleSrc:u.default.element,exampleCssSrc:u.default.element,title:u.default.string,description:u.default.node,isExpanded:u.default.bool},b=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},y=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},h=function(e){var t=e.example,r=e.exampleSrc,n=e.exampleCssSrc,a=e.title,u=e.description,i=e.isExpanded,p=(0,o.useState)(i),m=(0,l.default)(p,2),_=m[0],h=m[1],g=(0,o.useState)(!1),O=(0,l.default)(g,2),E=O[0],w=O[1],j=o.default.useContext(c.ThemeContext),x=void 0!==n,P=function(){w(!E),_&&h(!_)},T=function(){h(!_),E&&w(!E)},S=function(e,t){e.nativeEvent.keyCode!==d.KEY_SPACE&&e.nativeEvent.keyCode!==d.KEY_RETURN||(e.preventDefault(),t())};return o.default.createElement("div",{className:v("template",j.className)},o.default.createElement("div",{className:v("header")},a&&o.default.createElement("h2",{className:v("title")},a)),o.default.createElement("div",{className:v("content")},u&&o.default.createElement("div",{className:v("description")},u),t),o.default.createElement("div",{className:v("footer")},r?o.default.createElement("div",{className:v("button-container")},x&&o.default.createElement("button",{type:"button",className:v("css-toggle","item",{"is-selected":E}),onClick:P,onKeyDown:function(e){return S(e,P)},onBlur:b,onMouseDown:y,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(s.default,{className:v("chevron")}),o.default.createElement("span",null,"CSS"),o.default.createElement(f.default,{className:v("chevron")})),o.default.createElement("button",{type:"button",className:v("code-toggle","item",{"is-selected":_}),onClick:T,onKeyDown:function(e){return S(e,T)},onBlur:b,onMouseDown:y,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(s.default,{className:v("chevron")}),o.default.createElement("span",null,"Code"),o.default.createElement(f.default,{className:v("chevron")}))):null,o.default.createElement("div",null,E&&o.default.createElement("div",{className:v("css")},n),_&&o.default.createElement("div",{className:v("code")},r))))};h.propTypes=_,h.defaultProps={isExpanded:!1};var g=h;t.Z=g},53560:function(e,t,r){"use strict";r.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},66633:function(e,t,r){"use strict";r.r(t),t.default={arrange:"Arrange-module__arrange___hY0Ml",fill:"Arrange-module__fill___m88eq",fit:"Arrange-module__fit___tv8j-",center:"Arrange-module__center___9qfhG",bottom:"Arrange-module__bottom___8beod",stretch:"Arrange-module__stretch___eQF-k",default:"Arrange-module__default___z+O29"}},74260:function(e,t,r){"use strict";r.r(t),t.default={"visually-hidden-text":"VisuallyHiddenText-module__visually-hidden-text___vcInW"}},78490:function(e,t,r){"use strict";function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.AlignmentTypes=void 0;var a=c(r(67294)),l=c(r(45697)),o=c(r(47166)),u=c(r(66633)),i=["fitStart","fill","fitEnd","align","alignFitStart","alignFill","alignFitEnd","fitStartAttributes","fillAttributes","fitEndAttributes"];function c(e){return e&&e.__esModule?e:{default:e}}function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s.apply(this,arguments)}function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==n(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var a=r.call(e,t||"default");if("object"!==n(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===n(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function m(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}t.AlignmentTypes={CENTER:"center",BOTTOM:"bottom",STRETCH:"stretch"};var v=o.default.bind(u.default),_={fitStart:l.default.element,fill:l.default.element.isRequired,fitEnd:l.default.element,align:l.default.oneOf(["center","bottom","stretch"]),alignFitStart:l.default.oneOf(["center","bottom","stretch"]),alignFitEnd:l.default.oneOf(["center","bottom","stretch"]),alignFill:l.default.oneOf(["center","bottom","stretch"]),fitStartAttributes:l.default.object,fillAttributes:l.default.object,fitEndAttributes:l.default.object},b=function(e){var t=e.fitStart,r=e.fill,n=e.fitEnd,l=e.align,o=e.alignFitStart,u=e.alignFill,c=e.alignFitEnd,f=e.fitStartAttributes,p=e.fillAttributes,_=e.fitEndAttributes,b=m(e,i),y=d({},f),h=d({},p),g=d({},_);return a.default.createElement("div",s({},b,{className:v("arrange",b.className)}),a.default.createElement("div",s({},y,{className:v("fit",l||o,y.className)}),t),a.default.createElement("div",s({},h,{className:v("fill",l||u,h.className)}),r),a.default.createElement("div",s({},g,{className:v("fit",l||c,g.className)}),n))};b.propTypes=_;var y=b;t.default=y},78878:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(r(67294)),a=l(r(99139));function l(e){return e&&e.__esModule?e:{default:e}}function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}var u=function(e){var t=o({},e);return n.default.createElement(a.default,t,n.default.createElement("path",{d:"M24 34l14 14V0H10v48z"}))};u.displayName="IconBookmark",u.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1"};var i=u;t.default=i},56468:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(r(67294)),a=l(r(99139));function l(e){return e&&e.__esModule?e:{default:e}}function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}var u=function(e){var t=o({},e);return n.default.createElement(a.default,t,n.default.createElement("path",{d:"M46.1 12H37V4c0-1.1-.9-2-2-2H13c-1.1 0-2 .9-2 2v8H1.9c-1 0-1.9.8-1.9 1.9v29.3c0 1 .8 1.9 1.9 1.9h44.3c1 0 1.9-.8 1.9-1.9V13.9c-.1-1.1-.9-1.9-2-1.9zM14 7h20v5H14V7zm21 20.6V31h-9v9h-4v-9h-9v-4h9v-9h4v9h9v.6z"}))};u.displayName="IconBriefcase",u.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"};var i=u;t.default=i},88245:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(r(67294)),a=l(r(99139));function l(e){return e&&e.__esModule?e:{default:e}}function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}var u=function(e){var t=o({},e);return n.default.createElement(a.default,t,n.default.createElement("path",{d:"M43 6h-4V2.2C39 1 38 0 36.8 0h-1.7C33.9.1 33 1 33 2.2V6H15V2.2C15 1 14 0 12.8 0h-1.7C9.9.1 9 1 9 2.2V6H5c-1.1 0-2 .9-2 2v38c0 1.1.9 2 2 2h24c1.3-.1 2.5-.6 3.4-1.4l11.2-11.1c.8-.9 1.3-2.1 1.4-3.4V8c0-1.1-.9-2-2-2zM6 21h36v10H30c-1.1 0-2 .9-2 2v12H6V21zm25 22.8V34h9.8L31 43.8z"}))};u.displayName="IconCalendar",u.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"};var i=u;t.default=i},33864:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(r(67294)),a=l(r(99139));function l(e){return e&&e.__esModule?e:{default:e}}function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}var u=function(e){var t=o({},e);return n.default.createElement(a.default,t,n.default.createElement("path",{d:"M10.3 24L33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};u.displayName="IconChevronLeft",u.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isBidi:!0};var i=u;t.default=i},46379:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(r(67294)),a=o(r(99139)),l=r(25387);function o(e){return e&&e.__esModule?e:{default:e}}function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},u.apply(this,arguments)}var i=function(e){var t=u({},e);return n.default.createElement(l.FormattedMessage,{id:"Terra.icon.IconConsultInstructionsForUse.title"},(function(e){return n.default.createElement("span",{"aria-label":e,title:e},n.default.createElement(a.default,t,n.default.createElement("path",{d:"M42.746 9c-2.28 0-4.508-.85-6.405-2.115a10.165 10.165 0 00-5.646-1.71c-2.205 0-4.404.714-6.233 2.131L24 7.663l-.462-.357a10.17 10.17 0 00-6.233-2.131c-1.964 0-3.932.567-5.646 1.71C9.762 8.15 7.534 9 5.254 9H0v34h5.254c2.28 0 4.508-.85 6.405-2.115a10.163 10.163 0 015.646-1.71c1.826 0 3.646.498 5.257 1.471.142.548.626.916 1.159.916h.556c.534 0 1.017-.368 1.159-.916a10.172 10.172 0 015.257-1.471c1.964 0 3.932.567 5.646 1.71C38.238 42.15 40.466 43 42.746 43H48V9h-5.254zM9.995 38.389C8.893 39.124 7.175 40 5.254 40H3V12h2.254c2.709 0 5.5-.906 8.069-2.619a7.157 7.157 0 013.983-1.206c1.583 0 3.144.534 4.396 1.503l.798.618v26.95a13.237 13.237 0 00-5.195-1.07 13.13 13.13 0 00-7.31 2.213zM45 40h-2.254c-1.921 0-3.639-.876-4.741-1.611a13.138 13.138 0 00-7.31-2.214c-1.788 0-3.56.371-5.195 1.07v-26.95l.798-.618a7.219 7.219 0 014.397-1.503c1.422 0 2.799.417 3.982 1.206 2.57 1.713 5.36 2.619 8.069 2.619H45V40zm-8-11h2v2h-7v-2h2v-6h-2v-2h5v8zm-4-12a2 2 0 113.999-.001A2 2 0 0133 17z"})))}))};i.displayName="IconConsultInstructionsForUse",i.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"};var c=i;t.default=c},71739:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(r(67294)),a=l(r(99139));function l(e){return e&&e.__esModule?e:{default:e}}function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}var u=function(e){var t=o({},e);return n.default.createElement(a.default,t,n.default.createElement("path",{d:"M45.8 8H2.2C1 8 0 9 0 10.2v27.7C0 39 1 40 2.2 40h43.7c1.2 0 2.2-1 2.2-2.2V10.2C48 9 47 8 45.8 8zM3 37V14.6l21 15 21-15V37H3zm.1-26h41.7L24 25.9 3.1 11z"}))};u.displayName="IconEnvelope",u.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"};var i=u;t.default=i},87491:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(r(67294)),a=l(r(99139));function l(e){return e&&e.__esModule?e:{default:e}}function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}var u=function(e){var t=o({},e);return n.default.createElement(a.default,t,n.default.createElement("path",{d:"M39.8 12H35V1.7c0-.9-.8-1.7-1.7-1.7H8.7C7.8 0 7 .8 7 1.7V12H2.2C1 12 0 13 0 14.2v19.7C.1 35.1 1 36 2.2 36H7v10.3c0 .9.8 1.7 1.7 1.7h24.6c.9 0 1.7-.8 1.7-1.7V36h4.8c1.2 0 2.2-1 2.2-2.2V14.2c0-1.2-1-2.2-2.2-2.2zM10 3h22v9H10V3zm22 42H10V29.9h22V45zm3.2-24C34 21 33 20 33 18.8s1-2.2 2.2-2.2 2.2 1 2.2 2.2c0 1.2-1 2.2-2.2 2.2z"}))};u.displayName="IconPrinter",u.defaultProps={viewBox:"0 0 42 48",xmlns:"http://www.w3.org/2000/svg"};var i=u;t.default=i},37645:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(r(67294)),a=i(r(71881)),l=i(r(35960)),o=i(r(74260)),u=["refCallback","text"];function i(e){return e&&e.__esModule?e:{default:e}}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},c.apply(this,arguments)}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var f=l.default.bind(o.default),d={refCallback:a.default.func,text:a.default.string},p={text:void 0,refCallback:void 0},m=function(e){var t=e.refCallback,r=e.text,a=s(e,u),l=f(["visually-hidden-text",a.className]);return n.default.createElement("span",c({ref:t},a,{className:l}),r)};m.propTypes=d,m.defaultProps=p;var v=m;t.default=v},35960:function(e,t){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var l=typeof r;if("string"===l||"number"===l)e.push(this&&this[r]||r);else if(Array.isArray(r))e.push(a.apply(this,r));else if("object"===l){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){e.push(r.toString());continue}for(var o in r)n.call(r,o)&&r[o]&&e.push(this&&this[o]||o)}}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},7944:function(e,t,r){"use strict";var n=r(85633);function a(){}function l(){}l.resetWarningCache=a,e.exports=function(){function e(e,t,r,a,l,o){if(o!==n){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:l,resetWarningCache:a};return r.PropTypes=r,r}},71881:function(e,t,r){e.exports=r(7944)()},85633:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);