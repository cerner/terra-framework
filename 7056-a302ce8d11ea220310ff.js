"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[7056],{7056:function(e,t,l){var a=l(22411);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(l(11504)),i=a(l(74824)),o=a(l(68628)),n=a(l(93180)),u=a(l(56944)),d=i.default.bind(o.default);t.default=function(){return r.default.createElement(n.default,{data:u.default.slice(0,3),ariaLabel:"Example of selectable and removable Filter Pills",className:d(["show-border","width-10"])})}},56944:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=[{label:"asthma",labelCategory:"respiratory",id:"terra-filter-pills-asthma"},{label:"bronchitis",labelCategory:"respiratory",id:"terra-filter-pills-bronchitis"},{label:"fibro",labelCategory:"respiratory",id:"terra-filter-pills-fibro"},{label:"allergies",labelCategory:"skin",id:"terra-filter-pills-allergies"},{label:"hypertension",labelCategory:"cardio",id:"terra-filter-pills-hypertension"},{label:"cardiac",labelCategory:"cardio",id:"terra-filter-pills-cardiac"}]},93180:function(e,t,l){var a=l(22411),r=l(59848);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(l(25724)),o=a(l(97936)),n=f(l(11504)),u=a(l(3268)),d=f(l(24392));function s(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,l=new WeakMap;return(s=function(e){return e?l:t})(e)}function f(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=r(e)&&"function"!=typeof e)return{default:e};var l=s(t);if(l&&l.has(e))return l.get(e);var a={__proto__:null},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var n=i?Object.getOwnPropertyDescriptor(e,o):null;n&&(n.get||n.set)?Object.defineProperty(a,o,n):a[o]=e[o]}return a.default=e,l&&l.set(e,a),a}var c={ariaLabel:u.default.string,className:u.default.string,data:u.default.array,isCollapsible:u.default.bool},p=function(e){var t=e.data,l=e.ariaLabel,a=e.className,r=e.isCollapsible,u=(0,n.useState)(t),s=(0,o.default)(u,2),f=s[0],c=s[1],p=(0,n.useState)(0),b=(0,o.default)(p,2),_=b[0],m=b[1];return n.default.createElement(n.default.Fragment,null,n.default.createElement(d.default,{ariaLabel:l,onRemove:function(e,t){var l=f;l.splice(t.index,1),c((0,i.default)(l))},className:a,isCollapsible:r},f.map((function(e,t){return n.default.createElement(d.Pill,{label:e.label,labelCategory:e.labelCategory,id:e.id,key:e.id,metaData:{index:t}})}))),f.length<=0&&n.default.createElement("button",{type:"button",onClick:function(){return c(t)}},"Show Pills"),r&&n.default.createElement("button",{type:"button",onClick:function(){var e=f,t={label:"test-pill- ".concat(_),id:"test-filter-pills-test-".concat(_)};m((function(e){return e+1})),e.push(t),c(e)}}," Add more pills"))};p.propTypes=c,p.defaultProps={isCollapsible:!1};t.default=p},68628:function(e,t,l){l.r(t),t.default={"spacing-wrapper":"FilterPillsTestCommon-module__spacing-wrapper___VtTUh",container:"FilterPillsTestCommon-module__container___kHV-K","show-border":"FilterPillsTestCommon-module__show-border___zbvfC","width-50":"FilterPillsTestCommon-module__width-50___+OPfT","width-10":"FilterPillsTestCommon-module__width-10___mO70v",hidden:"FilterPillsTestCommon-module__hidden___+-b03"}}}]);