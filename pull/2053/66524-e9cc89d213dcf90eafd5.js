"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[66524],{26376:function(e,t,n){var r=n(24994),l=n(73738);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(85715)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=l(e)&&"function"!=typeof e)return{default:e};var n=c(t);if(n&&n.has(e))return n.get(e);var r={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=a?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(r,o,i):r[o]=e[o]}return r.default=e,n&&n.set(e,r),r}(n(96540)),i=r(n(59944)),u=r(n(26714));function c(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(c=function(e){return e?n:t})(e)}t.default=function(){var e=(0,o.useState)(!1),t=(0,a.default)(e,2),n=t[0],r=t[1];return o.default.createElement(u.default,{alwaysCollapsedMenuItems:[o.default.createElement(u.default.Item,{text:"Collapsed Button 1",key:"collapsedButton1"}),o.default.createElement(u.default.Item,{text:"Collapsed Button 2",key:"collapsedButton2"}),o.default.createElement(u.default.Item,{text:"Collapsed Button 3",key:"collapsedButton3"})]},o.default.createElement(u.default.Item,{text:"Button A",className:"ButtonA",key:"buttonA"}),o.default.createElement(u.default.Item,{text:"Button B",className:"ButtonB",key:"buttonB"}),o.default.createElement(u.default.Divider,{key:"Divider4"}),o.default.createElement("p",null,"Status:"," ",n?"Selected":"Unselected"),o.default.createElement(u.default.Item,{id:"data-menu-button",text:"Select Button 1",className:"Button1",key:"button1",isSelectable:!0,isSelected:n,onClick:function(){return r(!n)}}),o.default.createElement(u.default.Item,{text:"Button 2",className:"Button2",key:"button2"}),o.default.createElement(u.default.Item,{icon:o.default.createElement(i.default,null),text:"Button3",className:"IconOnly",key:"button3",isIconOnly:!0}))}},92420:function(e,t,n){n.r(t),t.default={arrange:"Arrange-module__arrange___hY0Ml",fill:"Arrange-module__fill___m88eq",fit:"Arrange-module__fit___tv8j-",center:"Arrange-module__center___9qfhG",bottom:"Arrange-module__bottom___8beod",stretch:"Arrange-module__stretch___eQF-k",default:"Arrange-module__default___z+O29"}},4267:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Checkbox-module__clinical-lowlight-theme___J4i3C","orion-fusion-theme":"Checkbox-module__orion-fusion-theme___ZTiEC",checkbox:"Checkbox-module__checkbox___pLlkO",label:"Checkbox-module__label___96oeA","is-mobile":"Checkbox-module__is-mobile___HQ1Ax","native-input":"Checkbox-module__native-input___9pZ94","label-text":"Checkbox-module__label-text___NBjgG","is-hidden":"Checkbox-module__is-hidden___q9DyW","is-disabled":"Checkbox-module__is-disabled___pimXj","is-inline":"Checkbox-module__is-inline___8-h-C"}},39496:function(e,t,n){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.AlignmentTypes=void 0;var l=c(n(96540)),a=c(n(5556)),o=c(n(67967)),i=c(n(92420)),u=["fitStart","fill","fitEnd","align","alignFitStart","alignFill","alignFitEnd","fitStartAttributes","fillAttributes","fitEndAttributes"];function c(e){return e&&e.__esModule?e:{default:e}}function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f.apply(this,arguments)}function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t,n){var l;return l=function(e,t){if("object"!=r(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var l=n.call(e,t||"default");if("object"!=r(l))return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"),(t="symbol"==r(l)?l:String(l))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}t.AlignmentTypes={CENTER:"center",BOTTOM:"bottom",STRETCH:"stretch"};var p=o.default.bind(i.default),y={fitStart:a.default.element,fill:a.default.element.isRequired,fitEnd:a.default.element,align:a.default.oneOf(["center","bottom","stretch"]),alignFitStart:a.default.oneOf(["center","bottom","stretch"]),alignFitEnd:a.default.oneOf(["center","bottom","stretch"]),alignFill:a.default.oneOf(["center","bottom","stretch"]),fitStartAttributes:a.default.object,fillAttributes:a.default.object,fitEndAttributes:a.default.object},_=function(e){var t=e.fitStart,n=e.fill,r=e.fitEnd,a=e.align,o=e.alignFitStart,i=e.alignFill,c=e.alignFitEnd,d=e.fitStartAttributes,b=e.fillAttributes,y=e.fitEndAttributes,_=m(e,u),v=s({},d),h=s({},b),O=s({},y);return l.default.createElement("span",f({},_,{className:p("arrange",_.className)}),l.default.createElement("span",f({},v,{className:p("fit",a||o,v.className,"fit-block")}),t),l.default.createElement("span",f({},h,{className:p("fill",a||i,h.className,"fill-block")}),n),l.default.createElement("span",f({},O,{className:p("fit",a||c,O.className)}),r))};_.propTypes=y;t.default=_},63639:function(e,t,n){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=s(n(96540)),a=s(n(5556)),o=s(n(46942)),i=s(n(67967)),u=s(n(23695)),c=s(n(4267)),f=s(n(68611)),d=["checked","defaultChecked","inputAttrs","id","disabled","isInline","isLabelHidden","labelText","labelTextAttrs","name","onBlur","onChange","onFocus","value"];function s(e){return e&&e.__esModule?e:{default:e}}function b(){return b=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},b.apply(this,arguments)}function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e,t,n){var l;return l=function(e,t){if("object"!=r(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var l=n.call(e,t||"default");if("object"!=r(l))return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"),(t="symbol"==r(l)?l:String(l))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function y(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var _=i.default.bind(c.default),v={checked:a.default.bool,defaultChecked:a.default.bool,id:a.default.string,inputAttrs:a.default.object,disabled:a.default.bool,isInline:a.default.bool,isLabelHidden:a.default.bool,labelText:a.default.string.isRequired,labelTextAttrs:a.default.object,name:a.default.string,onBlur:a.default.func,onChange:a.default.func,onFocus:a.default.func,value:a.default.string},h={checked:void 0,defaultChecked:void 0,id:void 0,inputAttrs:{},disabled:!1,isInline:!1,isLabelHidden:!1,labelTextAttrs:{},name:null,onBlur:void 0,onChange:void 0,onFocus:void 0,value:void 0},O=function(e){var t=e.checked,n=e.defaultChecked,r=e.inputAttrs,a=e.id,i=e.disabled,c=e.isInline,s=e.isLabelHidden,v=e.labelText,h=e.labelTextAttrs,O=e.name,g=e.onBlur,j=e.onChange,k=e.onFocus,x=e.value,w=y(e,d),E=l.default.useContext(u.default),S=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},r);void 0!==t?S.checked=t:S.defaultChecked=n;var P=(0,o.default)(_("checkbox",{"is-inline":c},E.className),w.className),C=_(["label",{"is-disabled":i},{"is-mobile":f.default.isConsideredMobileDevice()},h.className]),A=_(["native-input",r.className]),N=_(["label-text",{"is-hidden":s},{"is-mobile":f.default.isConsideredMobileDevice()}]),B=null;return s?(S["aria-label"]=v,B=l.default.createElement("span",b({},h,{className:N}))):B=l.default.createElement("span",b({},h,{className:N}),v),l.default.createElement("div",b({},w,{className:P}),l.default.createElement("label",{htmlFor:a,className:C},l.default.createElement("input",b({},S,{type:"checkbox",id:a,disabled:i,name:O,value:x,onChange:j,onFocus:k,onBlur:g,className:A})),B))};O.propTypes=v,O.defaultProps=h,O.isCheckbox=!0;t.default=O},68611:function(e){var t={isConsideredMobileDevice:function(){return window.matchMedia("(max-width: 1024px)").matches&&("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0)}};e.exports=t}}]);