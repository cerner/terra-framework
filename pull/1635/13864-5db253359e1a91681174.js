"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[13864],{8787:function(e,t,r){var a=r(64836),n=r(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=a(r(10434)),i=a(r(27424)),l=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var r=c(t);if(r&&r.has(e))return r.get(e);var a={},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var l=u?Object.getOwnPropertyDescriptor(e,i):null;l&&(l.get||l.set)?Object.defineProperty(a,i,l):a[i]=e[i]}a.default=e,r&&r.set(e,a);return a}(r(67294)),f=a(r(45697)),o=a(r(44887)),d=a(r(77947));function c(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(c=function(e){return e?r:t})(e)}var p={value:f.default.string,initialTimeZone:f.default.string},s=function(e){var t=e.value,r=d.default.createSafeDate(t,e.initialTimeZone);r&&r.isValid()&&(t=r.format());var a=(0,l.useState)(t),n=(0,i.default)(a,2),f=n[0],c=n[1];return l.default.createElement("div",null,l.default.createElement("p",null,"Selected ISO Date Time:",l.default.createElement("span",{"data-date-time-value":!0},f)),l.default.createElement(o.default,(0,u.default)({name:"date-time-picker-example",onChange:function(e,t){c(t)},initialTimeZone:e.initialTimeZone},e)))};s.propTypes=p,s.defaultProps={value:""};var v=s;t.default=v},13864:function(e,t,r){var a=r(64836),n=r(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u,i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var r=o(t);if(r&&r.has(e))return r.get(e);var a={},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var l=u?Object.getOwnPropertyDescriptor(e,i):null;l&&(l.get||l.set)?Object.defineProperty(a,i,l):a[i]=e[i]}a.default=e,r&&r.set(e,a);return a}(r(67294)),l=a(r(77947)),f=a(r(8787));function o(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(o=function(e){return e?r:t})(e)}var d=function(){return(0,i.useEffect)((function(){return window.ontouchstart||(u=!0,window.ontouchstart="true"),function(){u&&delete window.ontouchstart}})),i.default.createElement(i.default.Fragment,null,i.default.createElement("h3",{id:"titleWithDateTimeValue"},"Disabled Date-Time-Picker"),i.default.createElement(f.default,{id:"disabledDatetimeValueProvided",disabled:!0,value:"2019-04-10T15:23:00-05:00",timeVariant:l.default.FORMAT_12_HOUR}))};t.default=d}}]);