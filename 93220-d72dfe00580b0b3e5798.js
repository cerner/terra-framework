"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[93220],{39311:function(e,t,n){var r=n(24994);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(94634)),i=r(n(43693)),o=r(n(91847)),l=r(n(96540)),u=r(n(5556)),d=r(n(32527)),c=n(8604),s=r(n(86438)),f=r(n(70283)),p=["datePickerId","disabled","inputAttributes","error","errorIcon","excludeDates","filterDate","help","hideRequired","isIncomplete","isInvalid","isInline","isLabelHidden","includeDates","intl","label","labelAttrs","maxDate","minDate","maxWidth","name","onBlur","onChange","onChangeRaw","onClickOutside","onFocus","onRequestClose","onSelect","required","selectedDate","showOptional","value"];function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){(0,i.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var h={datePickerId:u.default.string.isRequired,disabled:u.default.bool,error:u.default.node,errorIcon:u.default.element,excludeDates:u.default.arrayOf(u.default.string),filterDate:u.default.func,help:u.default.node,hideRequired:u.default.bool,includeDates:u.default.arrayOf(u.default.string),inputAttributes:u.default.object,intl:u.default.shape({formatMessage:u.default.func,locale:u.default.string}).isRequired,isIncomplete:u.default.bool,isInline:u.default.bool,isInvalid:u.default.bool,isLabelHidden:u.default.bool,label:u.default.node.isRequired,labelAttrs:u.default.object,maxDate:u.default.string,minDate:u.default.string,name:u.default.string.isRequired,onBlur:u.default.func,onChange:u.default.func,onChangeRaw:u.default.func,onClickOutside:u.default.func,onFocus:u.default.func,onRequestClose:u.default.func,onSelect:u.default.func,required:u.default.bool,maxWidth:u.default.string,selectedDate:u.default.string,showOptional:u.default.bool,value:u.default.string},v={disabled:!1,error:null,errorIcon:l.default.createElement(s.default,null),excludeDates:void 0,filterDate:void 0,help:null,hideRequired:!1,includeDates:void 0,inputAttributes:void 0,isIncomplete:!1,isInline:!1,isInvalid:!1,isLabelHidden:!1,labelAttrs:{},maxDate:void 0,maxWidth:void 0,minDate:void 0,onBlur:void 0,onChange:void 0,onChangeRaw:void 0,onClickOutside:void 0,onFocus:void 0,onSelect:void 0,required:!1,selectedDate:void 0,showOptional:!1},y=function(e){var t=e.datePickerId,n=e.disabled,r=e.inputAttributes,i=e.error,u=(e.errorIcon,e.excludeDates),c=e.filterDate,s=e.help,m=e.hideRequired,h=e.isIncomplete,v=e.isInvalid,y=e.isInline,g=e.isLabelHidden,w=e.includeDates,O=e.intl,D=e.label,P=e.labelAttrs,j=e.maxDate,k=e.minDate,_=e.maxWidth,R=e.name,C=e.onBlur,I=e.onChange,E=e.onChangeRaw,z=e.onClickOutside,q=e.onFocus,M=e.onRequestClose,S=e.onSelect,W=e.required,x=e.selectedDate,F=e.showOptional,T=e.value,A=(0,o.default)(e,p),H="".concat(t,"-help");i&&v&&(H="".concat(t,"-error ").concat(t,"-help"));var B=r&&r["aria-describedby"],L=r;H&&(L=b(b({},r),{},{"aria-describedby":B?"".concat(H," ").concat(B):H}));var V=O.formatMessage({id:"Terra.datePicker.dateFormat"}),N=s?l.default.createElement("div",{"aria-label":"".concat(O.formatMessage({id:"Terra.datePicker.dateFormatLabel"})," ").concat(V,", ").concat(s)},"(".concat(V,")"),l.default.createElement("br",null),s):l.default.createElement("div",{"aria-label":"".concat(O.formatMessage({id:"Terra.datePicker.dateFormatLabel"})," ").concat(V)},"(".concat(V,")"));return l.default.createElement(d.default,(0,a.default)({},A,{label:D,labelAttrs:P,error:i,help:N,hideRequired:m,required:W,showOptional:F,isInvalid:v,isInline:y,isLabelHidden:g,htmlFor:t,maxWidth:_}),l.default.createElement(f.default,{disabled:n,id:t,inputAttributes:L,excludeDates:u,filterDate:c,useExternalFormatMask:!0,includeDates:w,isInvalid:v,isIncomplete:h,maxDate:j,minDate:k,ariaLabel:D,name:R,onBlur:C,onChange:I,onChangeRaw:E,onRequestClose:M,onClickOutside:z,onFocus:q,onSelect:S,required:W,selectedDate:x,value:T}))};y.propTypes=h,y.defaultProps=v;t.default=(0,c.injectIntl)(y)},59726:function(e,t,n){var r=n(24994),a=n(73738);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(n(85715)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var n=c(t);if(n&&n.has(e))return n.get(e);var r={__proto__:null},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&{}.hasOwnProperty.call(e,o)){var l=i?Object.getOwnPropertyDescriptor(e,o):null;l&&(l.get||l.set)?Object.defineProperty(r,o,l):r[o]=e[o]}return r.default=e,n&&n.set(e,r),r}(n(96540)),l=r(n(67967)),u=r(n(39311)),d=r(n(86189));function c(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(c=function(e){return e?n:t})(e)}var s=l.default.bind(d.default);t.default=function(){var e=(0,o.useState)(!1),t=(0,i.default)(e,2),n=t[0],r=t[1],a=(0,o.useState)(!1),l=(0,i.default)(a,2),d=l[0],c=l[1],f=(0,o.useState)(!1),p=(0,i.default)(f,2),m=p[0],b=p[1];return o.default.createElement("div",{className:s("content-wrapper")},o.default.createElement("button",{type:"button",id:"validity-toggle",onClick:function(){r(!n)}},"Toggle Validity"),o.default.createElement("button",{type:"button",id:"incomplete-toggle",onClick:function(){c(!d),b(!m)}},"Toggle Incomplete"),o.default.createElement("div",{id:"primary-description"},"Description text provided by user for Primary Date Picker"),o.default.createElement(u.default,{label:"Primary Date Picker",isInvalid:n,isIncomplete:d,required:m,error:"Error message.",name:"date-input",datePickerId:"primary",help:"Help message.",inputAttributes:{"aria-describedby":"primary-description",id:"primary-date-picker"}}),o.default.createElement(u.default,{label:"Secondary Date Picker",isInvalid:n,isIncomplete:d,required:m,error:"Error message.",name:"date-input",datePickerId:"secondary",help:"Help message.",inputAttributes:{id:"secondary-date-picker"}}))}},86189:function(e,t,n){n.r(t),t.default={"content-wrapper":"DatePicker-test-module__content-wrapper___dH2Rb","date-wrapper":"DatePicker-test-module__date-wrapper___c5yjd"}},71576:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n(96540)),a=i(n(25365));function i(e){return e&&e.__esModule?e:{default:e}}function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}var l=function(e){var t=o({},e);return r.default.createElement(a.default,t,r.default.createElement("path",{d:"M43 6h-4V2.2C39 1 38 0 36.8 0h-1.7C33.9.1 33 1 33 2.2V6H15V2.2C15 1 14 0 12.8 0h-1.7C9.9.1 9 1 9 2.2V6H5c-1.1 0-2 .9-2 2v38c0 1.1.9 2 2 2h24c1.3-.1 2.5-.6 3.4-1.4l11.2-11.1c.8-.9 1.3-2.1 1.4-3.4V8c0-1.1-.9-2-2-2zM6 21h36v10H30c-1.1 0-2 .9-2 2v12H6V21zm25 22.8V34h9.8L31 43.8z"}))};l.displayName="IconCalendar",l.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"};t.default=l},4213:function(e,t,n){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.DependentViewport=void 0;var a=d(n(96540)),i=d(n(5556)),o=d(n(7829)),l=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=r(e)&&"function"!=typeof e)return{default:e};var n=u(t);if(n&&n.has(e))return n.get(e);var a={__proto__:null},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var l=i?Object.getOwnPropertyDescriptor(e,o):null;l&&(l.get||l.set)?Object.defineProperty(a,o,l):a[o]=e[o]}return a.default=e,n&&n.set(e,a),a}(n(58216));function u(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(u=function(e){return e?n:t})(e)}function d(e){return e&&e.__esModule?e:{default:e}}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,s(r.key),r)}}function s(e){var t=function(e,t){if("object"!=r(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var a=n.call(e,t||"default");if("object"!=r(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==r(t)?t:String(t)}function f(e,t,n){return t=m(t),function(e,t){if(t&&("object"===r(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return b(e)}(e,p()?Reflect.construct(t,n||[],m(e).constructor):t.apply(e,n))}function p(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(p=function(){return!!e})()}function m(e){return m=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},m(e)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e,t){return h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},h(e,t)}t.DependentViewport={WINDOW:"window",PARENT:"parent"};var v={children:i.default.node,onChange:i.default.func,onResize:i.default.func,tiny:i.default.element,small:i.default.element,medium:i.default.element,large:i.default.element,huge:i.default.element,enormous:i.default.element,responsiveTo:i.default.oneOf(["window","parent"])},y=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=f(this,t)).state={element:null},e.setContainer=e.setContainer.bind(b(e)),e.handleResize=e.handleResize.bind(b(e)),e.handleWindowResize=e.handleWindowResize.bind(b(e)),e.animationFrameID=null,e}var n,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&h(e,t)}(t,e),n=t,(r=[{key:"componentDidMount",value:function(){var e=this,t=this.props;t.tiny,t.small,t.medium,t.large,t.huge,t.enormous,this.container?(this.handleResize(this.container.getBoundingClientRect().width),this.resizeObserver=new o.default((function(t){e.animationFrameID=window.requestAnimationFrame((function(){e.animationFrameID=null,e.handleResize(t[0].target.getBoundingClientRect().width)}))})),this.resizeObserver.observe(this.container)):(this.handleResize(window.innerWidth),window.addEventListener("resize",this.handleWindowResize))}},{key:"componentWillUnmount",value:function(){this.container?(window.cancelAnimationFrame(this.animationFrameID),this.resizeObserver.disconnect(this.container),this.container=null):window.removeEventListener("resize",this.handleWindowResize)}},{key:"handleResize",value:function(e){var t=this.props,n=t.onChange,r=t.onResize,a=t.tiny,i=t.small,o=t.medium,u=t.large,d=t.huge,c=t.enormous;r&&r(e);var s,f=(0,l.activeBreakpointForSize)(e);n&&f!==this.breakpoint&&n(f),this.breakpoint=f,(a||i||o||u||d||c)&&(s=e>=l.default.enormous&&c?"enormous":e>=l.default.huge&&d?"huge":e>=l.default.large&&u?"large":e>=l.default.medium&&o?"medium":e>=l.default.small&&i?"small":"tiny",this.state.element!==s&&this.setState({element:s}))}},{key:"handleWindowResize",value:function(){this.handleResize(window.innerWidth)}},{key:"setContainer",value:function(e){null!==e&&(this.container="parent"===this.props.responsiveTo?e.parentNode:null)}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.responsiveTo;return this.state.element?this.props[this.state.element]||null:a.default.createElement(a.default.Fragment,null,"parent"===n&&!this.container&&a.default.createElement("div",{ref:this.setContainer}),t)}}])&&c(n.prototype,r),i&&c(n,i),Object.defineProperty(n,"prototype",{writable:!1}),t}(a.default.Component);y.propTypes=v,y.defaultProps={responsiveTo:"parent"};t.default=y}}]);