"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[47884],{22365:function(e,t,n){var l=n(64836),o=n(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(27424)),r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=o(e)&&"function"!=typeof e)return{default:e};var n=c(t);if(n&&n.has(e))return n.get(e);var l={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var u=a?Object.getOwnPropertyDescriptor(e,r):null;u&&(u.get||u.set)?Object.defineProperty(l,r,u):l[r]=e[r]}return l.default=e,n&&n.set(e,l),l}(n(67294)),u=l(n(66053)),i=l(n(57927));function c(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(c=function(e){return e?n:t})(e)}t.default=function(){var e=(0,r.useState)(!1),t=(0,a.default)(e,2),n=t[0],l=t[1];return r.default.createElement(i.default,{alwaysCollapsedMenuItems:[r.default.createElement(i.default.Item,{text:"Collapsed Button 1",key:"collapsedButton1"}),r.default.createElement(i.default.Item,{text:"Collapsed Button 2",key:"collapsedButton2"}),r.default.createElement(i.default.Item,{text:"Collapsed Button 3",key:"collapsedButton3"})]},r.default.createElement(i.default.Item,{text:"Button A",className:"ButtonA",key:"buttonA"}),r.default.createElement(i.default.Item,{text:"Button B",className:"ButtonB",key:"buttonB"}),r.default.createElement(i.default.Divider,{key:"Divider4"}),r.default.createElement("p",null,"Status:"," ",n?"Selected":"Unselected"),r.default.createElement(i.default.Item,{id:"data-menu-button",text:"Select Button 1",className:"Button1",key:"button1",isSelectable:!0,isSelected:n,onClick:function(){return l(!n)}}),r.default.createElement(i.default.Item,{text:"Button 2",className:"Button2",key:"button2"}),r.default.createElement(i.default.Item,{icon:r.default.createElement(u.default,null),text:"Button3",className:"IconOnly",key:"button3",isIconOnly:!0}))}},12472:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Checkbox-module__clinical-lowlight-theme___J4i3C","orion-fusion-theme":"Checkbox-module__orion-fusion-theme___ZTiEC",checkbox:"Checkbox-module__checkbox___pLlkO",label:"Checkbox-module__label___96oeA","is-mobile":"Checkbox-module__is-mobile___HQ1Ax","native-input":"Checkbox-module__native-input___9pZ94","label-text":"Checkbox-module__label-text___NBjgG","is-hidden":"Checkbox-module__is-hidden___q9DyW","is-disabled":"Checkbox-module__is-disabled___pimXj","is-inline":"Checkbox-module__is-inline___8-h-C"}},15185:function(e,t,n){function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=f(n(67294)),a=f(n(45697)),r=f(n(94184)),u=f(n(47166)),i=f(n(47341)),c=f(n(12472)),d=f(n(84538)),s=["checked","defaultChecked","inputAttrs","id","disabled","isInline","isLabelHidden","labelText","labelTextAttrs","name","onBlur","onChange","onFocus","value"];function f(e){return e&&e.__esModule?e:{default:e}}function b(){return b=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},b.apply(this,arguments)}function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function p(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==l(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!==l(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===l(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function h(e,t){if(null==e)return{};var n,l,o=function(e,t){if(null==e)return{};var n,l,o={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var _=u.default.bind(c.default),y={checked:a.default.bool,defaultChecked:a.default.bool,id:a.default.string,inputAttrs:a.default.object,disabled:a.default.bool,isInline:a.default.bool,isLabelHidden:a.default.bool,labelText:a.default.string.isRequired,labelTextAttrs:a.default.object,name:a.default.string,onBlur:a.default.func,onChange:a.default.func,onFocus:a.default.func,value:a.default.string},v={checked:void 0,defaultChecked:void 0,id:void 0,inputAttrs:{},disabled:!1,isInline:!1,isLabelHidden:!1,labelTextAttrs:{},name:null,onBlur:void 0,onChange:void 0,onFocus:void 0,value:void 0},k=function(e){var t=e.checked,n=e.defaultChecked,l=e.inputAttrs,a=e.id,u=e.disabled,c=e.isInline,f=e.isLabelHidden,y=e.labelText,v=e.labelTextAttrs,k=e.name,O=e.onBlur,x=e.onChange,g=e.onFocus,C=e.value,j=h(e,s),w=o.default.useContext(i.default),B=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},l);void 0!==t?B.checked=t:B.defaultChecked=n;var P=(0,r.default)(_("checkbox",{"is-inline":c},w.className),j.className),E=_(["label",{"is-disabled":u},{"is-mobile":d.default.isConsideredMobileDevice()},v.className]),S=_(["native-input",l.className]),I=_(["label-text",{"is-hidden":f},{"is-mobile":d.default.isConsideredMobileDevice()}]),N=null;return f?(B["aria-label"]=y,N=o.default.createElement("span",b({},v,{className:I}))):N=o.default.createElement("span",b({},v,{className:I}),y),o.default.createElement("div",b({},j,{className:P}),o.default.createElement("label",{htmlFor:a,className:E},o.default.createElement("input",b({},B,{type:"checkbox",id:a,disabled:u,name:k,value:C,onChange:x,onFocus:g,onBlur:O,className:S})),N))};k.propTypes=y,k.defaultProps=v,k.isCheckbox=!0;t.default=k},84538:function(e){var t={isConsideredMobileDevice:function(){return window.matchMedia("(max-width: 1024px)").matches&&("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0)}};e.exports=t}}]);