"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[90434],{38136:function(e,t,n){var r=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(56690)),u=r(n(89728)),a=r(n(66115)),l=r(n(61655)),i=r(n(94993)),f=r(n(73808)),c=r(n(67294)),p=r(n(47166)),d=r(n(43671)),s=r(n(7009));function b(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,f.default)(e);if(t){var o=(0,f.default)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return(0,i.default)(this,n)}}var y=p.default.bind(s.default),m=function(e){(0,l.default)(n,e);var t=b(n);function n(e){var r;return(0,o.default)(this,n),(r=t.call(this,e)).state={input:null},r.handleOnChange=r.handleOnChange.bind((0,a.default)(r)),r}return(0,u.default)(n,[{key:"handleOnChange",value:function(e,t){this.setState({input:t})}},{key:"render",value:function(){return c.default.createElement("div",{className:y("content-wrapper")},c.default.createElement("div",{id:"time-input-value"},c.default.createElement("h3",null,"Time Input:",this.state.input)),c.default.createElement(d.default,{id:"timeInput",name:"time-input",onChange:this.handleOnChange,showSeconds:!0}))}}]),n}(c.default.Component);t.default=m},68586:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Input-module__clinical-lowlight-theme___clY96","orion-fusion-theme":"Input-module__orion-fusion-theme___phvH5","form-input":"Input-module__form-input___Fk8kb","form-error":"Input-module__form-error___aU4hq","form-incomplete":"Input-module__form-incomplete___h4I7H"}},7009:function(e,t,n){n.r(t),t.default={"content-wrapper":"TimeInput-test-module__content-wrapper___9EMnN"}},55142:function(e,t,n){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=p(n(67294)),u=p(n(45697)),a=p(n(94184)),l=p(n(47166)),i=p(n(47341)),f=p(n(68586)),c=["defaultValue","disabled","isIncomplete","isInvalid","onBlur","onChange","onFocus","onInput","name","pattern","refCallback","required","type","ariaLabel","value"];function p(e){return e&&e.__esModule?e:{default:e}}function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},d.apply(this,arguments)}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e,t,n){return(t=v(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function y(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,v(r.key),r)}}function v(e){var t=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===r(t)?t:String(t)}function h(e,t){return h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},h(e,t)}function O(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=_(e);if(t){var u=_(this).constructor;n=Reflect.construct(o,arguments,u)}else n=o.apply(this,arguments);return function(e,t){if(t&&("object"===r(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,n)}}function _(e){return _=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},_(e)}var g=l.default.bind(f.default),w={defaultValue:u.default.oneOfType([u.default.string,u.default.number]),disabled:u.default.bool,isIncomplete:u.default.bool,isInvalid:u.default.bool,onBlur:u.default.func,onChange:u.default.func,onFocus:u.default.func,onInput:u.default.func,name:u.default.string,pattern:u.default.string,refCallback:u.default.func,required:u.default.bool,type:u.default.string,value:u.default.oneOfType([u.default.string,u.default.number]),ariaLabel:u.default.string},j={defaultValue:void 0,disabled:!1,isIncomplete:!1,isInvalid:!1,onBlur:void 0,onChange:void 0,onFocus:void 0,onInput:void 0,name:null,pattern:void 0,required:!1,refCallback:void 0,type:void 0,value:void 0},P=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&h(e,t)}(l,e);var t,n,r,u=O(l);function l(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),u.apply(this,arguments)}return t=l,n=[{key:"render",value:function(){var e,t=this.props,n=t.defaultValue,r=t.disabled,u=t.isIncomplete,l=t.isInvalid,i=t.onBlur,f=t.onChange,p=t.onFocus,m=t.onInput,v=t.name,h=t.pattern,O=t.refCallback,_=t.required,w=t.type,j=t.ariaLabel,P=t.value,I=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},y(t,c)),C=this.context,k=(void 0===w||["text","number","password","email","search","tel","url","hidden"].includes(w))&&g("form-input",{"form-error":l},{"form-incomplete":u&&_&&!l},C.className),S=(0,a.default)(k,I.className);return I&&Object.prototype.hasOwnProperty.call(I,"aria-label")?e=j||I["aria-label"]:j&&(e=j),I["aria-label"]=e,_&&(I["aria-required"]="true"),void 0!==P?I.value=P:void 0!==n&&(I.defaultValue=n),I.placeholder&&!I.showMpageFusionPlaceholder&&(I.placeholder=null),delete I.showMpageFusionPlaceholder,o.default.createElement("input",d({},I,{ref:function(e){O&&O(e)},name:v,type:w,pattern:h,onBlur:i,onChange:f,onFocus:p,onInput:m,disabled:r,required:_,className:S}))}}],n&&m(t.prototype,n),r&&m(t,r),Object.defineProperty(t,"prototype",{writable:!1}),l}(o.default.Component);P.propTypes=w,P.defaultProps=j,P.contextType=i.default,P.isInput=!0;var I=P;t.default=I}}]);