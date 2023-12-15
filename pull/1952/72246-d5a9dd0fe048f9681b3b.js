"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[72246],{72246:function(e,t,n){var c=n(64836),r=n(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=c(n(10434)),i=c(n(27424)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=r(e)&&"function"!=typeof e)return{default:e};var n=d(t);if(n&&n.has(e))return n.get(e);var c={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var o=a?Object.getOwnPropertyDescriptor(e,i):null;o&&(o.get||o.set)?Object.defineProperty(c,i,o):c[i]=e[i]}return c.default=e,n&&n.set(e,c),c}(n(67294)),u=c(n(55281)),l=c(n(850));function d(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(d=function(e){return e?n:t})(e)}t.default=function(){var e=(0,o.useState)(!1),t=(0,i.default)(e,2),n=t[0],c=t[1],r=(0,o.useState)("accept"),d=(0,i.default)(r,2),f=d[0],p=d[1],s=(0,o.useState)("acceptFirst"),h=(0,i.default)(s,2),m=h[0],j=h[1],A=function(){c(!1)},E=(0,o.useMemo)((function(){return{text:"accept",onClick:A}}),[]),k=(0,o.useMemo)((function(){return{text:"reject",onClick:A}}),[]),b=(0,o.useState)({acceptAction:E}),O=(0,i.default)(b,2),w=O[0],C=O[1],g=function(e){var t={};e.toLowerCase().includes("accept")&&(t.acceptAction=E),e.toLowerCase().includes("reject")&&(t.rejectAction=k),C(t),c(!0)},v=function(e){C({acceptAction:E,rejectAction:k}),j(e),c(!0)},z=function(e){C({acceptAction:E,rejectAction:k}),p(e),c(!0)};return o.default.createElement(o.default.Fragment,null,n&&o.default.createElement(l.default,(0,a.default)({variant:"hazard-medium",dialogTitle:"Action Options in Notification Dialog",startMessage:"The notification dialog can display one or two buttons to accept and/or reject the message and close the dialog.",content:"The buttonOrder prop can be used to flip which button is first when both buttons are rendered.",endMessage:"The emphasizedAction prop indicates whether acceptAction, rejectAction or neither action should be emphasized."},w,{buttonOrder:m,emphasizedAction:f})),o.default.createElement("h2",null,"Actions Options"),o.default.createElement(u.default,{id:"accept",text:"Accept Action",onClick:function(){return g("accept")}}),o.default.createElement(u.default,{id:"reject",text:"Reject Action",onClick:function(){return g("reject")}}),o.default.createElement(u.default,{id:"acceptAndReject",text:"Accept and Reject Action",onClick:function(){return g("acceptAndReject")}}),o.default.createElement("h2",null,"Button Order Options"),o.default.createElement(u.default,{id:"acceptFirst",text:"Accept Action First",onClick:function(){return v("acceptFirst")}}),o.default.createElement(u.default,{id:"rejectFirst",text:"Reject Action First",onClick:function(){return v("rejectFirst")}}),o.default.createElement("h2",null,"Emphasized Button Options"),o.default.createElement(u.default,{id:"acceptEmphasized",text:"Accept Action Emphasized",onClick:function(){return z("accept")}}),o.default.createElement(u.default,{id:"rejectEmphasized",text:"Reject Action Emphasized",onClick:function(){return z("reject")}}),o.default.createElement(u.default,{id:"neitherEmphasized",text:"Neither Emphasized",onClick:function(){return z("none")}}))}}}]);