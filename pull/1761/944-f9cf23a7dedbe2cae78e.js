/*! For license information please see 944-f9cf23a7dedbe2cae78e.js.LICENSE.txt */
(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[944],{66633:function(e,t,r){"use strict";r.r(t),t.default={arrange:"Arrange-module__arrange___hY0Ml",fill:"Arrange-module__fill___m88eq",fit:"Arrange-module__fit___tv8j-",center:"Arrange-module__center___9qfhG",bottom:"Arrange-module__bottom___8beod",stretch:"Arrange-module__stretch___eQF-k",default:"Arrange-module__default___z+O29"}},12472:function(e,t,r){"use strict";r.r(t),t.default={"clinical-lowlight-theme":"Checkbox-module__clinical-lowlight-theme___J4i3C","orion-fusion-theme":"Checkbox-module__orion-fusion-theme___ZTiEC",checkbox:"Checkbox-module__checkbox___pLlkO",label:"Checkbox-module__label___96oeA","is-mobile":"Checkbox-module__is-mobile___HQ1Ax","native-input":"Checkbox-module__native-input___9pZ94","label-text":"Checkbox-module__label-text___NBjgG","is-hidden":"Checkbox-module__is-hidden___q9DyW","is-disabled":"Checkbox-module__is-disabled___pimXj","is-inline":"Checkbox-module__is-inline___8-h-C"}},74260:function(e,t,r){"use strict";r.r(t),t.default={"visually-hidden-text":"VisuallyHiddenText-module__visually-hidden-text___vcInW"}},78490:function(e,t,r){"use strict";function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.AlignmentTypes=void 0;var i=c(r(67294)),o=c(r(45697)),l=c(r(47166)),a=c(r(66633)),u=["fitStart","fill","fitEnd","align","alignFitStart","alignFill","alignFitEnd","fitStartAttributes","fillAttributes","fitEndAttributes"];function c(e){return e&&e.__esModule?e:{default:e}}function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s.apply(this,arguments)}function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){b(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==n(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,t||"default");if("object"!==n(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===n(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}t.AlignmentTypes={CENTER:"center",BOTTOM:"bottom",STRETCH:"stretch"};var m=l.default.bind(a.default),y={fitStart:o.default.element,fill:o.default.element.isRequired,fitEnd:o.default.element,align:o.default.oneOf(["center","bottom","stretch"]),alignFitStart:o.default.oneOf(["center","bottom","stretch"]),alignFitEnd:o.default.oneOf(["center","bottom","stretch"]),alignFill:o.default.oneOf(["center","bottom","stretch"]),fitStartAttributes:o.default.object,fillAttributes:o.default.object,fitEndAttributes:o.default.object},h=function(e){var t=e.fitStart,r=e.fill,n=e.fitEnd,o=e.align,l=e.alignFitStart,a=e.alignFill,c=e.alignFitEnd,f=e.fitStartAttributes,b=e.fillAttributes,y=e.fitEndAttributes,h=p(e,u),v=d({},f),_=d({},b),g=d({},y);return i.default.createElement("span",s({},h,{className:m("arrange",h.className)}),i.default.createElement("span",s({},v,{className:m("fit",o||l,v.className,"fit-block")}),t),i.default.createElement("span",s({},_,{className:m("fill",o||a,_.className,"fill-block")}),r),i.default.createElement("span",s({},g,{className:m("fit",o||c,g.className)}),n))};h.propTypes=y;var v=h;t.default=v},15185:function(e,t,r){"use strict";function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=d(r(67294)),o=d(r(45697)),l=d(r(94184)),a=d(r(47166)),u=d(r(47341)),c=d(r(12472)),s=d(r(84538)),f=["checked","defaultChecked","inputAttrs","id","disabled","isInline","isLabelHidden","labelText","labelTextAttrs","name","onBlur","onChange","onFocus","value"];function d(e){return e&&e.__esModule?e:{default:e}}function b(){return b=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},b.apply(this,arguments)}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==n(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,t||"default");if("object"!==n(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===n(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function y(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var h=a.default.bind(c.default),v={checked:o.default.bool,defaultChecked:o.default.bool,id:o.default.string,inputAttrs:o.default.object,disabled:o.default.bool,isInline:o.default.bool,isLabelHidden:o.default.bool,labelText:o.default.string.isRequired,labelTextAttrs:o.default.object,name:o.default.string,onBlur:o.default.func,onChange:o.default.func,onFocus:o.default.func,value:o.default.string},_={checked:void 0,defaultChecked:void 0,id:void 0,inputAttrs:{},disabled:!1,isInline:!1,isLabelHidden:!1,labelTextAttrs:{},name:null,onBlur:void 0,onChange:void 0,onFocus:void 0,value:void 0},g=function(e){var t=e.checked,r=e.defaultChecked,n=e.inputAttrs,o=e.id,a=e.disabled,c=e.isInline,d=e.isLabelHidden,v=e.labelText,_=e.labelTextAttrs,g=e.name,O=e.onBlur,j=e.onChange,x=e.onFocus,w=e.value,k=y(e,f),P=i.default.useContext(u.default),C=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){m(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},n);void 0!==t?C.checked=t:C.defaultChecked=r;var S=(0,l.default)(h("checkbox",{"is-inline":c},P.className),k.className),E=h(["label",{"is-disabled":a},{"is-mobile":s.default.isConsideredMobileDevice()},_.className]),T=h(["native-input",n.className]),A=h(["label-text",{"is-hidden":d},{"is-mobile":s.default.isConsideredMobileDevice()}]),N=null;return d?(C["aria-label"]=v,N=i.default.createElement("span",b({},_,{className:A}))):N=i.default.createElement("span",b({},_,{className:A}),v),i.default.createElement("div",b({},k,{className:S}),i.default.createElement("label",{htmlFor:o,className:E},i.default.createElement("input",b({},C,{type:"checkbox",id:o,disabled:a,name:g,value:w,onChange:j,onFocus:x,onBlur:O,className:T})),N))};g.propTypes=v,g.defaultProps=_,g.isCheckbox=!0;var O=g;t.default=O},84538:function(e){"use strict";var t={isConsideredMobileDevice:function(){return window.matchMedia("(max-width: 1024px)").matches&&("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0)}};e.exports=t},46379:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(r(67294)),i=l(r(99139)),o=r(25387);function l(e){return e&&e.__esModule?e:{default:e}}function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}var u=function(e){var t=a({},e);return n.default.createElement(o.FormattedMessage,{id:"Terra.icon.IconConsultInstructionsForUse.title"},(function(e){return n.default.createElement("span",{"aria-label":e,title:e},n.default.createElement(i.default,t,n.default.createElement("path",{d:"M42.746 9c-2.28 0-4.508-.85-6.405-2.115a10.165 10.165 0 0 0-5.646-1.71c-2.205 0-4.404.714-6.233 2.131L24 7.663l-.462-.357a10.17 10.17 0 0 0-6.233-2.131c-1.964 0-3.932.567-5.646 1.71C9.762 8.15 7.534 9 5.254 9H0v34h5.254c2.28 0 4.508-.85 6.405-2.115a10.163 10.163 0 0 1 5.646-1.71c1.826 0 3.646.498 5.257 1.471.142.548.626.916 1.159.916h.556c.534 0 1.017-.368 1.159-.916a10.172 10.172 0 0 1 5.257-1.471c1.964 0 3.932.567 5.646 1.71C38.238 42.15 40.466 43 42.746 43H48V9h-5.254zM9.995 38.389C8.893 39.124 7.175 40 5.254 40H3V12h2.254c2.709 0 5.5-.906 8.069-2.619a7.157 7.157 0 0 1 3.983-1.206c1.583 0 3.144.534 4.396 1.503l.798.618v26.95a13.237 13.237 0 0 0-5.195-1.07 13.13 13.13 0 0 0-7.31 2.213zM45 40h-2.254c-1.921 0-3.639-.876-4.741-1.611a13.138 13.138 0 0 0-7.31-2.214c-1.788 0-3.56.371-5.195 1.07v-26.95l.798-.618a7.219 7.219 0 0 1 4.397-1.503c1.422 0 2.799.417 3.982 1.206 2.57 1.713 5.36 2.619 8.069 2.619H45V40zm-8-11h2v2h-7v-2h2v-6h-2v-2h5v8zm-4-12a2 2 0 1 1 3.999-.001A2 2 0 0 1 33 17z"})))}))};u.displayName="IconConsultInstructionsForUse",u.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"};var c=u;t.default=c},37645:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=u(r(67294)),i=u(r(71881)),o=u(r(35960)),l=u(r(74260)),a=["refCallback","text"];function u(e){return e&&e.__esModule?e:{default:e}}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},c.apply(this,arguments)}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var f=o.default.bind(l.default),d={refCallback:i.default.func,text:i.default.string},b={text:void 0,refCallback:void 0},p=function(e){var t=e.refCallback,r=e.text,i=s(e,a),o=f(["visually-hidden-text",i.className]);return n.default.createElement("span",c({ref:t},i,{className:o}),r)};p.propTypes=d,p.defaultProps=b;var m=p;t.default=m},35960:function(e,t){var r;!function(){"use strict";var n={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(this&&this[r]||r);else if(Array.isArray(r))e.push(i.apply(this,r));else if("object"===o){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){e.push(r.toString());continue}for(var l in r)n.call(r,l)&&r[l]&&e.push(this&&this[l]||l)}}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(r=function(){return i}.apply(t,[]))||(e.exports=r)}()},7944:function(e,t,r){"use strict";var n=r(85633);function i(){}function o(){}o.resetWarningCache=i,e.exports=function(){function e(e,t,r,i,o,l){if(l!==n){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:i};return r.PropTypes=r,r}},71881:function(e,t,r){e.exports=r(7944)()},85633:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);