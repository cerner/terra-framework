"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[69440],{69440:function(e,t,a){var r=a(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(67294)),u=r(a(77947)),l=r(a(8787)),i=function(){return n.default.createElement(l.default,{value:"2017-08-08T10:30:00",showSeconds:!0,timeVariant:u.default.FORMAT_12_HOUR})};t.default=i},8787:function(e,t,a){var r=a(64836),n=a(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=r(a(10434)),l=r(a(27424)),i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var a=c(t);if(a&&a.has(e))return a.get(e);var r={},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var i=u?Object.getOwnPropertyDescriptor(e,l):null;i&&(i.get||i.set)?Object.defineProperty(r,l,i):r[l]=e[l]}r.default=e,a&&a.set(e,r);return r}(a(67294)),f=r(a(45697)),o=r(a(44887)),d=r(a(77947));function c(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(c=function(e){return e?a:t})(e)}var p={value:f.default.string,initialTimeZone:f.default.string},s=function(e){var t=e.value,a=d.default.createSafeDate(t,e.initialTimeZone);a&&a.isValid()&&(t=a.format());var r=(0,i.useState)(t),n=(0,l.default)(r,2),f=n[0],c=n[1];return i.default.createElement("div",null,i.default.createElement("p",null,"Selected ISO Date Time:",i.default.createElement("span",{"data-date-time-value":!0},f)),i.default.createElement(o.default,(0,u.default)({name:"date-time-picker-example",onChange:function(e,t){c(t)},initialTimeZone:e.initialTimeZone},e)))};s.propTypes=p,s.defaultProps={value:""};var v=s;t.default=v}}]);