"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[31040],{82457:function(e,t,n){var r=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(n(67294)),l=r(n(45697)),o=n(25387),a=r(n(57927)),u={items:l.default.arrayOf(l.default.shape({key:l.default.string,text:l.default.string,title:l.default.string,href:l.default.string,onClick:l.default.func})),intl:l.default.shape({formatMessage:l.default.func}).isRequired},c=function(e){var t=e.items,n=e.intl,r=t.slice(0,t.length-1),l=t[t.length-1];return i.default.createElement(a.default,{isReversedChildrenOrder:!0,useHorizontalIcon:!0,isStartAligned:!0,iconText:n.formatMessage({id:"Terra.file-path.icon.text"})},r.map((function(e){return[i.default.createElement(a.default.Hyperlink,{key:e.key,text:e.text,title:e.title,href:e.href,onClick:e.onClick}),i.default.createElement(a.default.Divider,{useChevronRightIcon:!0,key:"divider-".concat(e.key)})]})).flat(),i.default.createElement(a.default.Item,{isTextOnly:!0,text:l.text,key:l.key}))};c.propTypes=u;t.default=(0,o.injectIntl)(c)},60017:function(e,t,n){var r=n(64836),i=n(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=r(n(27424)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=i(e)&&"function"!=typeof e)return{default:e};var n=u(t);if(n&&n.has(e))return n.get(e);var r={__proto__:null},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var a=l?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(r,o,a):r[o]=e[o]}return r.default=e,n&&n.set(e,r),r}(n(67294)),a=r(n(82457));function u(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(u=function(e){return e?n:t})(e)}t.default=function(){var e=(0,o.useState)("Nothing"),t=(0,l.default)(e,2),n=t[0],r=t[1],i=function(e){return function(){r(e)}},u=[{key:"link-0",text:"Link 0",onClick:i("Link 0")},{key:"link-1",text:"Link 1",onClick:i("Link 1")},{key:"link-2",text:"Link 2",onClick:i("Link 2")},{key:"link-3",text:"Link 3",onClick:i("Link 3")},{key:"link-4",text:"Link 4",onClick:i("Link 4")},{key:"link-5",text:"Link 5",onClick:i("Link 5")},{key:"link-6",text:"Link 6",onClick:i("Link 6")},{key:"link-7",text:"Link 7",onClick:i("Link 7")},{key:"link-8",text:"Link 8",onClick:i("Link 8")},{key:"link-9",text:"Link 9",onClick:i("Link 9")},{key:"link-10",text:"Link 10",onClick:i("Link 10")},{key:"link-11",text:"Link 11",onClick:i("Link 11")},{key:"link-12",text:"Link 12",onClick:i("Link 12")}];return o.default.createElement(o.default.Fragment,null,o.default.createElement(a.default,{items:u}),o.default.createElement("h1",{style:{textAlign:"right"}},"".concat(n," clicked!")))}},66633:function(e,t,n){n.r(t),t.default={arrange:"Arrange-module__arrange___hY0Ml",fill:"Arrange-module__fill___m88eq",fit:"Arrange-module__fit___tv8j-",center:"Arrange-module__center___9qfhG",bottom:"Arrange-module__bottom___8beod",stretch:"Arrange-module__stretch___eQF-k",default:"Arrange-module__default___z+O29"}},12472:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Checkbox-module__clinical-lowlight-theme___J4i3C","orion-fusion-theme":"Checkbox-module__orion-fusion-theme___ZTiEC",checkbox:"Checkbox-module__checkbox___pLlkO",label:"Checkbox-module__label___96oeA","is-mobile":"Checkbox-module__is-mobile___HQ1Ax","native-input":"Checkbox-module__native-input___9pZ94","label-text":"Checkbox-module__label-text___NBjgG","is-hidden":"Checkbox-module__is-hidden___q9DyW","is-disabled":"Checkbox-module__is-disabled___pimXj","is-inline":"Checkbox-module__is-inline___8-h-C"}},78490:function(e,t,n){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.AlignmentTypes=void 0;var i=c(n(67294)),l=c(n(45697)),o=c(n(47166)),a=c(n(66633)),u=["fitStart","fill","fitEnd","align","alignFitStart","alignFill","alignFitEnd","fitStartAttributes","fillAttributes","fitEndAttributes"];function c(e){return e&&e.__esModule?e:{default:e}}function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f.apply(this,arguments)}function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,t||"default");if("object"!==r(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===r(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}t.AlignmentTypes={CENTER:"center",BOTTOM:"bottom",STRETCH:"stretch"};var p=o.default.bind(a.default),k={fitStart:l.default.element,fill:l.default.element.isRequired,fitEnd:l.default.element,align:l.default.oneOf(["center","bottom","stretch"]),alignFitStart:l.default.oneOf(["center","bottom","stretch"]),alignFitEnd:l.default.oneOf(["center","bottom","stretch"]),alignFill:l.default.oneOf(["center","bottom","stretch"]),fitStartAttributes:l.default.object,fillAttributes:l.default.object,fitEndAttributes:l.default.object},y=function(e){var t=e.fitStart,n=e.fill,r=e.fitEnd,l=e.align,o=e.alignFitStart,a=e.alignFill,c=e.alignFitEnd,d=e.fitStartAttributes,b=e.fillAttributes,k=e.fitEndAttributes,y=m(e,u),_=s({},d),h=s({},b),g=s({},k);return i.default.createElement("span",f({},y,{className:p("arrange",y.className)}),i.default.createElement("span",f({},_,{className:p("fit",l||o,_.className,"fit-block")}),t),i.default.createElement("span",f({},h,{className:p("fill",l||a,h.className,"fill-block")}),n),i.default.createElement("span",f({},g,{className:p("fit",l||c,g.className)}),r))};y.propTypes=k;var _=y;t.default=_},15185:function(e,t,n){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=s(n(67294)),l=s(n(45697)),o=s(n(94184)),a=s(n(47166)),u=s(n(47341)),c=s(n(12472)),f=s(n(84538)),d=["checked","defaultChecked","inputAttrs","id","disabled","isInline","isLabelHidden","labelText","labelTextAttrs","name","onBlur","onChange","onFocus","value"];function s(e){return e&&e.__esModule?e:{default:e}}function b(){return b=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},b.apply(this,arguments)}function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,t||"default");if("object"!==r(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===r(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function k(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var y=a.default.bind(c.default),_={checked:l.default.bool,defaultChecked:l.default.bool,id:l.default.string,inputAttrs:l.default.object,disabled:l.default.bool,isInline:l.default.bool,isLabelHidden:l.default.bool,labelText:l.default.string.isRequired,labelTextAttrs:l.default.object,name:l.default.string,onBlur:l.default.func,onChange:l.default.func,onFocus:l.default.func,value:l.default.string},h={checked:void 0,defaultChecked:void 0,id:void 0,inputAttrs:{},disabled:!1,isInline:!1,isLabelHidden:!1,labelTextAttrs:{},name:null,onBlur:void 0,onChange:void 0,onFocus:void 0,value:void 0},g=function(e){var t=e.checked,n=e.defaultChecked,r=e.inputAttrs,l=e.id,a=e.disabled,c=e.isInline,s=e.isLabelHidden,_=e.labelText,h=e.labelTextAttrs,g=e.name,v=e.onBlur,O=e.onChange,j=e.onFocus,x=e.value,C=k(e,d),w=i.default.useContext(u.default),P=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},r);void 0!==t?P.checked=t:P.defaultChecked=n;var E=(0,o.default)(y("checkbox",{"is-inline":c},w.className),C.className),S=y(["label",{"is-disabled":a},{"is-mobile":f.default.isConsideredMobileDevice()},h.className]),L=y(["native-input",r.className]),A=y(["label-text",{"is-hidden":s},{"is-mobile":f.default.isConsideredMobileDevice()}]),T=null;return s?(P["aria-label"]=_,T=i.default.createElement("span",b({},h,{className:A}))):T=i.default.createElement("span",b({},h,{className:A}),_),i.default.createElement("div",b({},C,{className:E}),i.default.createElement("label",{htmlFor:l,className:S},i.default.createElement("input",b({},P,{type:"checkbox",id:l,disabled:a,name:g,value:x,onChange:O,onFocus:j,onBlur:v,className:L})),T))};g.propTypes=_,g.defaultProps=h,g.isCheckbox=!0;var v=g;t.default=v},84538:function(e){var t={isConsideredMobileDevice:function(){return window.matchMedia("(max-width: 1024px)").matches&&("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0)}};e.exports=t}}]);