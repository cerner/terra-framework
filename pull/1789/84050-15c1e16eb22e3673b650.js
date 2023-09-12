/*! For license information please see 84050-15c1e16eb22e3673b650.js.LICENSE.txt */
(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[84050],{96765:function(e,t,r){"use strict";var a=r(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=a(r(67294)),n=a(r(47166)),i=a(r(14235)),o=a(r(95491)),s=a(r(28461)),u=n.default.bind(s.default),f=function(){return l.default.createElement(i.default,{data:o.default.slice(0,3),ariaLabel:"Example of removable Pills",className:u(["show-border"])})};t.default=f},95491:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=[{label:"asthma",labelCategory:"respiratory",id:"terra-filter-pills-asthma"},{label:"bronchitis",labelCategory:"respiratory",id:"terra-filter-pills-bronchitis"},{label:"fibro",labelCategory:"respiratory",id:"terra-filter-pills-fibro"},{label:"allergies",labelCategory:"skin",id:"terra-filter-pills-allergies"},{label:"hypertension",labelCategory:"cardio",id:"terra-filter-pills-hypertension"},{label:"cardiac",labelCategory:"cardio",id:"terra-filter-pills-cardiac"}];t.default=r},14235:function(e,t,r){"use strict";var a=r(64836),l=r(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(r(861)),i=a(r(27424)),o=c(r(67294)),s=a(r(45697)),u=c(r(43128));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(f=function(e){return e?r:t})(e)}function c(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==l(e)&&"function"!=typeof e)return{default:e};var r=f(t);if(r&&r.has(e))return r.get(e);var a={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var o=n?Object.getOwnPropertyDescriptor(e,i):null;o&&(o.get||o.set)?Object.defineProperty(a,i,o):a[i]=e[i]}return a.default=e,r&&r.set(e,a),a}var d={ariaLabel:s.default.string,className:s.default.string,data:s.default.array,isCollapsible:s.default.bool},p=function(e){var t=e.data,r=e.ariaLabel,a=e.className,l=e.isCollapsible,s=(0,o.useState)(t),f=(0,i.default)(s,2),c=f[0],d=f[1],p=(0,o.useState)(0),b=(0,i.default)(p,2),y=b[0],_=b[1];return o.default.createElement(o.default.Fragment,null,o.default.createElement(u.default,{ariaLabel:r,onRemove:function(e,t){var r=c;r.splice(t.index,1),d((0,n.default)(r))},className:a,isCollapsible:l},c.map((function(e,t){return o.default.createElement(u.Pill,{label:e.label,labelCategory:e.labelCategory,id:e.id,key:e.id,metaData:{index:t}})}))),c.length<=0&&o.default.createElement("button",{type:"button",onClick:function(){return d(t)}},"Show Pills"),l&&o.default.createElement("button",{type:"button",onClick:function(){var e=c,t={label:"test-pill- ".concat(y),id:"test-filter-pills-test-".concat(y)};_((function(e){return e+1})),e.push(t),d(e)}}," Add more pills"))};p.propTypes=d,p.defaultProps={isCollapsible:!1};var b=p;t.default=b},28461:function(e,t,r){"use strict";r.r(t),t.default={"spacing-wrapper":"FilterPillsTestCommon-module__spacing-wrapper___VtTUh",container:"FilterPillsTestCommon-module__container___kHV-K","show-border":"FilterPillsTestCommon-module__show-border___zbvfC","width-50":"FilterPillsTestCommon-module__width-50___+OPfT","width-10":"FilterPillsTestCommon-module__width-10___mO70v",hidden:"FilterPillsTestCommon-module__hidden___+-b03"}},8144:function(e,t,r){"use strict";r.r(t),t.default={"visually-hidden-text":"VisuallyHiddenText-module__visually-hidden-text___fgEgE"}},42518:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=s(r(67294)),l=s(r(28466)),n=s(r(7037)),i=s(r(8144)),o=["refCallback","text"];function s(e){return e&&e.__esModule?e:{default:e}}function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},u.apply(this,arguments)}function f(e,t){if(null==e)return{};var r,a,l=function(e,t){if(null==e)return{};var r,a,l={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var c=n.default.bind(i.default),d={refCallback:l.default.func,text:l.default.string},p={text:void 0,refCallback:void 0},b=function(e){var t=e.refCallback,r=e.text,l=f(e,o),n=c(["visually-hidden-text",l.className]);return a.default.createElement("span",u({ref:t},l,{className:n}),r)};b.propTypes=d,b.defaultProps=p;var y=b;t.default=y},7037:function(e,t){var r;!function(){"use strict";var a={}.hasOwnProperty;function l(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var n=typeof r;if("string"===n||"number"===n)e.push(this&&this[r]||r);else if(Array.isArray(r))e.push(l.apply(this,r));else if("object"===n){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){e.push(r.toString());continue}for(var i in r)a.call(r,i)&&r[i]&&e.push(this&&this[i]||i)}}}return e.join(" ")}e.exports?(l.default=l,e.exports=l):void 0===(r=function(){return l}.apply(t,[]))||(e.exports=r)}()},19349:function(e,t,r){"use strict";var a=r(34074);function l(){}function n(){}n.resetWarningCache=l,e.exports=function(){function e(e,t,r,l,n,i){if(i!==a){var o=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw o.name="Invariant Violation",o}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:n,resetWarningCache:l};return r.PropTypes=r,r}},28466:function(e,t,r){e.exports=r(19349)()},34074:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);