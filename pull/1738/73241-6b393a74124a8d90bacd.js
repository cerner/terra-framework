/*! For license information please see 73241-6b393a74124a8d90bacd.js.LICENSE.txt */
(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[73241],{19081:function(e,t,r){"use strict";var n=r(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(r(67294)),c=n(r(47166)),l=n(r(14091)),i=n(r(81186)),o=c.default.bind(i.default),u=function(){return a.default.createElement("div",{role:"tablist",className:o("content-wrapper")},a.default.createElement(l.default,{label:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat eros quis erat tincidunt, id scelerisque magna ultricies. Vivamus pellentesque.",id:"longText"}))};t.default=u},81186:function(e,t,r){"use strict";r.r(t),t.default={"content-wrapper":"TabPane-test-module__content-wrapper___o3y1w","custom-display-content":"TabPane-test-module__custom-display-content___KPU3P"}},62218:function(e,t,r){"use strict";r.r(t),t.default={"visually-hidden-text":"VisuallyHiddenText-module__visually-hidden-text___7p7K9"}},66272:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=c(r(67294)),a=c(r(99139));function c(e){return e&&e.__esModule?e:{default:e}}function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},l.apply(this,arguments)}var i=function(e){var t=l({},e);return n.default.createElement(a.default,t,n.default.createElement("g",{"data-name":"48"},n.default.createElement("circle",{cx:"15",cy:"4.632",r:"3.5"}),n.default.createElement("circle",{cx:"15",cy:"17.443",r:"3.5"}),n.default.createElement("circle",{cx:"15",cy:"30.254",r:"3.5"}),n.default.createElement("circle",{cx:"15",cy:"43.066",r:"3.5"}),n.default.createElement("circle",{cx:"33",cy:"4.632",r:"3.5"}),n.default.createElement("circle",{cx:"33",cy:"17.544",r:"3.5"}),n.default.createElement("circle",{cx:"33",cy:"30.456",r:"3.5"}),n.default.createElement("circle",{cx:"33",cy:"43.368",r:"3.5"})))};i.displayName="IconKnurling",i.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"};var o=i;t.default=o},20855:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(r(67294)),a=o(r(1296)),c=o(r(86863)),l=o(r(62218)),i=["refCallback","text"];function o(e){return e&&e.__esModule?e:{default:e}}function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},u.apply(this,arguments)}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var f=c.default.bind(l.default),d={refCallback:a.default.func,text:a.default.string},p={text:void 0,refCallback:void 0},y=function(e){var t=e.refCallback,r=e.text,a=s(e,i),c=f(["visually-hidden-text",a.className]);return n.default.createElement("span",u({ref:t},a,{className:c}),r)};y.propTypes=d,y.defaultProps=p;var v=y;t.default=v},86863:function(e,t){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var c=typeof r;if("string"===c||"number"===c)e.push(this&&this[r]||r);else if(Array.isArray(r))e.push(a.apply(this,r));else if("object"===c){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){e.push(r.toString());continue}for(var l in r)n.call(r,l)&&r[l]&&e.push(this&&this[l]||l)}}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},66924:function(e,t,r){"use strict";var n=r(33396);function a(){}function c(){}c.resetWarningCache=a,e.exports=function(){function e(e,t,r,a,c,l){if(l!==n){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:c,resetWarningCache:a};return r.PropTypes=r,r}},1296:function(e,t,r){e.exports=r(66924)()},33396:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);