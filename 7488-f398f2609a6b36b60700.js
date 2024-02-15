"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[7488],{84564:function(e,t,r){var n=r(22411);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(r(11504)),u=n(r(74824)),l=n(r(45060)),a=n(r(27736)),i=u.default.bind(a.default);t.default=function(){return o.default.createElement("div",{className:i("content-wrapper")},o.default.createElement(l.default,{id:"timeInput",name:"time-input",value:"12:12:12",showSeconds:!0}))}},83500:function(e,t,r){r.r(t),t.default={"clinical-lowlight-theme":"Input-module__clinical-lowlight-theme___clY96","orion-fusion-theme":"Input-module__orion-fusion-theme___phvH5","form-input":"Input-module__form-input___Fk8kb","form-error":"Input-module__form-error___aU4hq","form-incomplete":"Input-module__form-incomplete___h4I7H"}},27736:function(e,t,r){r.r(t),t.default={"content-wrapper":"TimeInput-test-module__content-wrapper___9EMnN"}},41404:function(e,t,r){function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=p(r(11504)),u=p(r(3268)),l=p(r(82084)),a=p(r(74824)),i=p(r(7804)),f=p(r(83500)),c=["defaultValue","disabled","isIncomplete","isInvalid","onBlur","onChange","onFocus","onInput","name","pattern","refCallback","required","type","ariaLabel","value"];function p(e){return e&&e.__esModule?e:{default:e}}function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},d.apply(this,arguments)}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e,t,r){return(t=v(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function y(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},u=Object.keys(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function m(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,v(n.key),n)}}function v(e){var t=function(e,t){if("object"!==n(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!==n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===n(t)?t:String(t)}function h(e,t){return h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},h(e,t)}function O(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,o=_(e);if(t){var u=_(this).constructor;r=Reflect.construct(o,arguments,u)}else r=o.apply(this,arguments);return function(e,t){if(t&&("object"===n(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,r)}}function _(e){return _=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},_(e)}var g=a.default.bind(f.default),w={defaultValue:u.default.oneOfType([u.default.string,u.default.number]),disabled:u.default.bool,isIncomplete:u.default.bool,isInvalid:u.default.bool,onBlur:u.default.func,onChange:u.default.func,onFocus:u.default.func,onInput:u.default.func,name:u.default.string,pattern:u.default.string,refCallback:u.default.func,required:u.default.bool,type:u.default.string,value:u.default.oneOfType([u.default.string,u.default.number]),ariaLabel:u.default.string},j={defaultValue:void 0,disabled:!1,isIncomplete:!1,isInvalid:!1,onBlur:void 0,onChange:void 0,onFocus:void 0,onInput:void 0,name:null,pattern:void 0,required:!1,refCallback:void 0,type:void 0,value:void 0},P=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&h(e,t)}(a,e);var t,r,n,u=O(a);function a(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),u.apply(this,arguments)}return t=a,r=[{key:"render",value:function(){var e,t=this.props,r=t.defaultValue,n=t.disabled,u=t.isIncomplete,a=t.isInvalid,i=t.onBlur,f=t.onChange,p=t.onFocus,m=t.onInput,v=t.name,h=t.pattern,O=t.refCallback,_=t.required,w=t.type,j=t.ariaLabel,P=t.value,I=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){b(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},y(t,c)),k=this.context,S=(void 0===w||["text","number","password","email","search","tel","url","hidden"].includes(w))&&g("form-input",{"form-error":a},{"form-incomplete":u&&_&&!a},k.className),C=(0,l.default)(S,I.className);return I&&Object.prototype.hasOwnProperty.call(I,"aria-label")?e=j||I["aria-label"]:j&&(e=j),I["aria-label"]=e,_&&(I["aria-required"]="true"),void 0!==P?I.value=P:void 0!==r&&(I.defaultValue=r),I.placeholder&&!I.showMpageFusionPlaceholder&&(I.placeholder=null),delete I.showMpageFusionPlaceholder,o.default.createElement("input",d({},I,{ref:function(e){O&&O(e)},name:v,type:w,pattern:h,onBlur:i,onChange:f,onFocus:p,onInput:m,disabled:n,required:_,className:C}))}}],r&&m(t.prototype,r),n&&m(t,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(o.default.Component);P.propTypes=w,P.defaultProps=j,P.contextType=i.default,P.isInput=!0;t.default=P}}]);