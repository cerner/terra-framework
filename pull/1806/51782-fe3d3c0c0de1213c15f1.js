"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[51782],{51782:function(e,t,r){var a=r(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(r(67294)),o=a(r(47166)),i=a(r(4418)),u=a(r(28969)),l=o.default.bind(u.default),c=function(){return n.default.createElement(i.default,{variant:"custom",custom:{iconClassName:l("custom-notification-dialog-icon"),signalWord:"Custom Signal Word"}})};t.default=c},4418:function(e,t,r){var a=r(64836),n=r(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(r(10434)),i=a(r(70215)),u=a(r(27424)),l=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var r=m(t);if(r&&r.has(e))return r.get(e);var a={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var u=o?Object.getOwnPropertyDescriptor(e,i):null;u&&(u.get||u.set)?Object.defineProperty(a,i,u):a[i]=e[i]}a.default=e,r&&r.set(e,a);return a}(r(67294)),c=a(r(55281)),f=a(r(45697)),d=a(r(850)),s=["variant"];function m(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(m=function(e){return e?r:t})(e)}var p={variant:f.default.oneOf(["hazard-high","hazard-medium","hazard-low","error","custom"])},v=function(e){var t=(0,l.useState)(!1),r=(0,u.default)(t,2),a=r[0],n=r[1],f=(0,l.useRef)(),m=function(){n(!1),document.querySelector("#root").removeAttribute("inert"),f.current.focus()},p=e.variant,v=(0,i.default)(e,s);return l.default.createElement(l.default.Fragment,null,a&&l.default.createElement(d.default,(0,o.default)({},v,{variant:p,dialogTitle:"The title relates directly to the choices.",startMessage:"The Main Instruction is text used to provide more detail or define terminology. Don’t repeat the title verbatim.",onRequestClose:m,acceptAction:{text:"Confirm",onClick:m},rejectAction:{text:"Close",onClick:m},buttonOrder:"acceptFirst",emphasizedAction:"accept"})),l.default.createElement(c.default,{id:"trigger-notification-dialog",text:"Trigger NotificationDialog",onClick:function(){n(!0)},refCallback:function(e){f.current=e}}))};v.propTypes=p;var g=v;t.default=g},28969:function(e,t,r){r.r(t),t.default={"custom-notification-dialog-icon":"CustomVariant-module__custom-notification-dialog-icon___hDIZB","clinical-lowlight-theme":"CustomVariant-module__clinical-lowlight-theme___8VB2Q"}}}]);