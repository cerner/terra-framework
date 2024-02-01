"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[45636],{64233:function(e,t,n){var r=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(10434)),i=r(n(38416)),o=r(n(70215)),l=r(n(67294)),u=r(n(45697)),d=r(n(47717)),s=n(25387),c=r(n(51331)),f=r(n(28411)),p=["datePickerId","disabled","inputAttributes","error","errorIcon","excludeDates","filterDate","help","hideRequired","isIncomplete","isInvalid","isInline","isLabelHidden","includeDates","intl","label","labelAttrs","maxDate","minDate","maxWidth","name","onBlur","onChange","onChangeRaw","onClickOutside","onFocus","onRequestClose","onSelect","required","selectedDate","showOptional","value"];function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){(0,i.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var b={datePickerId:u.default.string.isRequired,disabled:u.default.bool,error:u.default.node,errorIcon:u.default.element,excludeDates:u.default.arrayOf(u.default.string),filterDate:u.default.func,help:u.default.node,hideRequired:u.default.bool,includeDates:u.default.arrayOf(u.default.string),inputAttributes:u.default.object,intl:u.default.shape({formatMessage:u.default.func,locale:u.default.string}).isRequired,isIncomplete:u.default.bool,isInline:u.default.bool,isInvalid:u.default.bool,isLabelHidden:u.default.bool,label:u.default.node.isRequired,labelAttrs:u.default.object,maxDate:u.default.string,minDate:u.default.string,name:u.default.string.isRequired,onBlur:u.default.func,onChange:u.default.func,onChangeRaw:u.default.func,onClickOutside:u.default.func,onFocus:u.default.func,onRequestClose:u.default.func,onSelect:u.default.func,required:u.default.bool,maxWidth:u.default.string,selectedDate:u.default.string,showOptional:u.default.bool,value:u.default.string},v={disabled:!1,error:null,errorIcon:l.default.createElement(c.default,null),excludeDates:void 0,filterDate:void 0,help:null,hideRequired:!1,includeDates:void 0,inputAttributes:void 0,isIncomplete:!1,isInline:!1,isInvalid:!1,isLabelHidden:!1,labelAttrs:{},maxDate:void 0,maxWidth:void 0,minDate:void 0,onBlur:void 0,onChange:void 0,onChangeRaw:void 0,onClickOutside:void 0,onFocus:void 0,onSelect:void 0,required:!1,selectedDate:void 0,showOptional:!1},y=function(e){var t=e.datePickerId,n=e.disabled,r=e.inputAttributes,i=e.error,u=(e.errorIcon,e.excludeDates),s=e.filterDate,c=e.help,h=e.hideRequired,b=e.isIncomplete,v=e.isInvalid,y=e.isInline,w=e.isLabelHidden,g=e.includeDates,O=e.intl,D=e.label,P=e.labelAttrs,R=e.maxDate,j=e.minDate,_=e.maxWidth,k=e.name,C=e.onBlur,I=e.onChange,E=e.onChangeRaw,z=e.onClickOutside,q=e.onFocus,x=e.onRequestClose,F=e.onSelect,M=e.required,S=e.selectedDate,W=e.showOptional,T=e.value,A=(0,o.default)(e,p),B="".concat(t,"-help");i&&v&&(B="".concat(t,"-error ").concat(t,"-help"));var L=r&&r["aria-describedby"],H=r;B&&(H=m(m({},r),{},{"aria-describedby":L?"".concat(B," ").concat(L):B}));var V=O.formatMessage({id:"Terra.datePicker.dateFormat"}),N=c?l.default.createElement("div",{"aria-label":"".concat(O.formatMessage({id:"Terra.datePicker.dateFormatLabel"})," ").concat(V,", ").concat(c)},"(".concat(V,")"),l.default.createElement("br",null),c):l.default.createElement("div",{"aria-label":"".concat(O.formatMessage({id:"Terra.datePicker.dateFormatLabel"})," ").concat(V)},"(".concat(V,")"));return l.default.createElement(d.default,(0,a.default)({},A,{label:D,labelAttrs:P,error:i,help:N,hideRequired:h,required:M,showOptional:W,isInvalid:v,isInline:y,isLabelHidden:w,htmlFor:t,maxWidth:_}),l.default.createElement(f.default,{disabled:n,id:t,inputAttributes:H,excludeDates:u,filterDate:s,useExternalFormatMask:!0,includeDates:g,isInvalid:v,isIncomplete:b,maxDate:R,minDate:j,ariaLabel:D,name:k,onBlur:C,onChange:I,onChangeRaw:E,onRequestClose:x,onClickOutside:z,onFocus:q,onSelect:F,required:M,selectedDate:S,value:T}))};y.propTypes=b,y.defaultProps=v;t.default=(0,s.injectIntl)(y)},35439:function(e,t,n){var r=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(67294)),i=r(n(19845)),o=r(n(64233)),l=r(n(94904)),u=i.default.bind(l.default);t.default=function(){return a.default.createElement("div",{className:u("content-wrapper")},a.default.createElement(o.default,{label:"Enter Date",name:"date-input",selectedDate:"2017-04-01",datePickerId:"disabled-date-picker",disabled:!0}))}},94904:function(e,t,n){n.r(t),t.default={"content-wrapper":"DatePicker-test-module__content-wrapper___dH2Rb","date-wrapper":"DatePicker-test-module__date-wrapper___c5yjd"}},88245:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n(67294)),a=i(n(99139));function i(e){return e&&e.__esModule?e:{default:e}}function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}var l=function(e){var t=o({},e);return r.default.createElement(a.default,t,r.default.createElement("path",{d:"M43 6h-4V2.2C39 1 38 0 36.8 0h-1.7C33.9.1 33 1 33 2.2V6H15V2.2C15 1 14 0 12.8 0h-1.7C9.9.1 9 1 9 2.2V6H5c-1.1 0-2 .9-2 2v38c0 1.1.9 2 2 2h24c1.3-.1 2.5-.6 3.4-1.4l11.2-11.1c.8-.9 1.3-2.1 1.4-3.4V8c0-1.1-.9-2-2-2zM6 21h36v10H30c-1.1 0-2 .9-2 2v12H6V21zm25 22.8V34h9.8L31 43.8z"}))};l.displayName="IconCalendar",l.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"};t.default=l},80906:function(e,t,n){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.DependentViewport=void 0;var a=d(n(67294)),i=d(n(45697)),o=d(n(32018)),l=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=r(e)&&"function"!=typeof e)return{default:e};var n=u(t);if(n&&n.has(e))return n.get(e);var a={__proto__:null},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var l=i?Object.getOwnPropertyDescriptor(e,o):null;l&&(l.get||l.set)?Object.defineProperty(a,o,l):a[o]=e[o]}return a.default=e,n&&n.set(e,a),a}(n(30210));function u(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(u=function(e){return e?n:t})(e)}function d(e){return e&&e.__esModule?e:{default:e}}function s(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,(i=a.key,o=void 0,o=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var a=n.call(e,t||"default");if("object"!==r(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(i,"string"),"symbol"===r(o)?o:String(o)),a)}var i,o}function c(e,t){return c=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},c(e,t)}function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=h(e);if(t){var i=h(this).constructor;n=Reflect.construct(a,arguments,i)}else n=a.apply(this,arguments);return function(e,t){if(t&&("object"===r(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return p(e)}(this,n)}}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e){return h=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},h(e)}t.DependentViewport={WINDOW:"window",PARENT:"parent"};var m={children:i.default.node,onChange:i.default.func,onResize:i.default.func,tiny:i.default.element,small:i.default.element,medium:i.default.element,large:i.default.element,huge:i.default.element,enormous:i.default.element,responsiveTo:i.default.oneOf(["window","parent"])},b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&c(e,t)}(u,e);var t,n,r,i=f(u);function u(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this)).state={element:null},e.setContainer=e.setContainer.bind(p(e)),e.handleResize=e.handleResize.bind(p(e)),e.handleWindowResize=e.handleWindowResize.bind(p(e)),e.animationFrameID=null,e}return t=u,(n=[{key:"componentDidMount",value:function(){var e=this,t=this.props;t.tiny,t.small,t.medium,t.large,t.huge,t.enormous,this.container?(this.handleResize(this.container.getBoundingClientRect().width),this.resizeObserver=new o.default((function(t){e.animationFrameID=window.requestAnimationFrame((function(){e.animationFrameID=null,e.handleResize(t[0].target.getBoundingClientRect().width)}))})),this.resizeObserver.observe(this.container)):(this.handleResize(window.innerWidth),window.addEventListener("resize",this.handleWindowResize))}},{key:"componentWillUnmount",value:function(){this.container?(window.cancelAnimationFrame(this.animationFrameID),this.resizeObserver.disconnect(this.container),this.container=null):window.removeEventListener("resize",this.handleWindowResize)}},{key:"handleResize",value:function(e){var t=this.props,n=t.onChange,r=t.onResize,a=t.tiny,i=t.small,o=t.medium,u=t.large,d=t.huge,s=t.enormous;r&&r(e);var c,f=(0,l.activeBreakpointForSize)(e);n&&f!==this.breakpoint&&n(f),this.breakpoint=f,(a||i||o||u||d||s)&&(c=e>=l.default.enormous&&s?"enormous":e>=l.default.huge&&d?"huge":e>=l.default.large&&u?"large":e>=l.default.medium&&o?"medium":e>=l.default.small&&i?"small":"tiny",this.state.element!==c&&this.setState({element:c}))}},{key:"handleWindowResize",value:function(){this.handleResize(window.innerWidth)}},{key:"setContainer",value:function(e){null!==e&&(this.container="parent"===this.props.responsiveTo?e.parentNode:null)}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.responsiveTo;return this.state.element?this.props[this.state.element]||null:a.default.createElement(a.default.Fragment,null,"parent"===n&&!this.container&&a.default.createElement("div",{ref:this.setContainer}),t)}}])&&s(t.prototype,n),r&&s(t,r),Object.defineProperty(t,"prototype",{writable:!1}),u}(a.default.Component);b.propTypes=m,b.defaultProps={responsiveTo:"parent"};t.default=b}}]);