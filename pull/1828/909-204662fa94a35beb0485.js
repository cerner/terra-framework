"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[909],{909:function(e,t,r){var a=r(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(r(67294)),i=a(r(4418));t.default=function(){return n.default.createElement(i.default,{variant:"error"})}},4418:function(e,t,r){var a=r(64836),n=r(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(r(10434)),o=a(r(70215)),u=a(r(27424)),l=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var r=s(t);if(r&&r.has(e))return r.get(e);var a={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=i?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(a,o,u):a[o]=e[o]}a.default=e,r&&r.set(e,a);return a}(r(67294)),f=a(r(55281)),c=a(r(45697)),d=a(r(850)),p=["variant"];function s(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(s=function(e){return e?r:t})(e)}var v={variant:c.default.oneOf(["hazard-high","hazard-medium","hazard-low","error","custom"])},h=function(e){var t=(0,l.useState)(!1),r=(0,u.default)(t,2),a=r[0],n=r[1],c=function(){n(!1)},s=e.variant,v=(0,o.default)(e,p);return l.default.createElement(l.default.Fragment,null,a&&l.default.createElement(d.default,(0,i.default)({},v,{variant:s,dialogTitle:"The title relates directly to the choices.",startMessage:"The Main Instruction is text used to provide more detail or define terminology. Don’t repeat the title verbatim.",acceptAction:{text:"Confirm",onClick:c},rejectAction:{text:"Close",onClick:c},buttonOrder:"acceptFirst",emphasizedAction:"accept"})),l.default.createElement(f.default,{id:"trigger-notification-dialog",text:"Trigger NotificationDialog",onClick:function(){n(!0)}}))};h.propTypes=v;t.default=h}}]);