"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[45466],{72643:function(e,t,n){var r=n(64836),a=n(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(n(10434)),o=r(n(70215)),l=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var n=m(t);if(n&&n.has(e))return n.get(e);var r={__proto__:null},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var l=i?Object.getOwnPropertyDescriptor(e,o):null;l&&(l.get||l.set)?Object.defineProperty(r,o,l):r[o]=e[o]}return r.default=e,n&&n.set(e,r),r}(n(67294)),u=r(n(45697)),f=r(n(19845)),c=r(n(47341)),d=r(n(28411)),s=r(n(80404)),p=["excludeDates","filterDate","includeDates","maxDate","minDate","onChange","selectedDate","value"];function m(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(m=function(e){return e?n:t})(e)}var v=f.default.bind(s.default),h={excludeDates:u.default.arrayOf(u.default.string),filterDate:u.default.func,includeDates:u.default.arrayOf(u.default.string),maxDate:u.default.string,minDate:u.default.string,onChange:u.default.func,selectedDate:u.default.string,value:u.default.string},y={excludeDates:void 0,filterDate:void 0,includeDates:void 0,maxDate:"2100-12-31",minDate:"1900-01-01",onChange:void 0,selectedDate:void 0},b=function(e){var t=e.excludeDates,n=e.filterDate,r=e.includeDates,a=e.maxDate,u=e.minDate,f=e.onChange,s=e.selectedDate,m=e.value,h=(0,o.default)(e,p),y=(0,l.useContext)(c.default);return l.default.createElement(d.default,(0,i.default)({},h,{name:"terra-calendar-filter",isInline:!0,selectedDate:s,value:m,onChange:function(e,t,n){if(f){var r=n.inputValue;f(e,t,r)}},excludeDates:t,filterDate:n,includeDates:r,maxDate:a,minDate:u,calendarClassName:v("calendar-filter",y.className)}))};b.propTypes=h,b.defaultProps=y;t.default=b},19861:function(e,t,n){var r=n(64836),a=n(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(n(27424)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var n=c(t);if(n&&n.has(e))return n.get(e);var r={__proto__:null},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var l=i?Object.getOwnPropertyDescriptor(e,o):null;l&&(l.get||l.set)?Object.defineProperty(r,o,l):r[o]=e[o]}return r.default=e,n&&n.set(e,r),r}(n(67294)),l=r(n(80008)),u=r(n(45697)),f=r(n(72643));function c(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(c=function(e){return e?n:t})(e)}var d={value:u.default.string},s={value:void 0},p=function(e){var t=e.value,n=(0,o.useState)(t),r=(0,i.default)(n,2),a=r[0],l=r[1],u=(0,o.useState)(""),c=(0,i.default)(u,2),d=c[0],s=c[1],p=(0,o.useState)(""),m=(0,i.default)(p,2),v=m[0],h=m[1];return o.default.createElement("div",null,o.default.createElement("h3",null,"Selected Value:"," ",o.default.createElement("span",{id:"selected-date"},a),o.default.createElement("br",null),o.default.createElement("br",null),"ISO String:"," ",o.default.createElement("span",{id:"iso"},d),o.default.createElement("br",null),o.default.createElement("br",null),"Formatted Value:"," ",o.default.createElement("span",{id:"formatted-date"},v)),o.default.createElement(f.default,{onChange:function(e,t,n){l(t),s(t),h(n)},value:a}))};p.propTypes=d,p.defaultProps=s;t.default=function(){return o.default.createElement(p,{value:(0,l.default)().format("2020-05-15")})}},80404:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"CalendarFilter-module__clinical-lowlight-theme___ypjZz","orion-fusion-theme":"CalendarFilter-module__orion-fusion-theme___aZ6J6","calendar-filter":"CalendarFilter-module__calendar-filter___i4i03"}},88245:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n(67294)),a=i(n(99139));function i(e){return e&&e.__esModule?e:{default:e}}function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}var l=function(e){var t=o({},e);return r.default.createElement(a.default,t,r.default.createElement("path",{d:"M43 6h-4V2.2C39 1 38 0 36.8 0h-1.7C33.9.1 33 1 33 2.2V6H15V2.2C15 1 14 0 12.8 0h-1.7C9.9.1 9 1 9 2.2V6H5c-1.1 0-2 .9-2 2v38c0 1.1.9 2 2 2h24c1.3-.1 2.5-.6 3.4-1.4l11.2-11.1c.8-.9 1.3-2.1 1.4-3.4V8c0-1.1-.9-2-2-2zM6 21h36v10H30c-1.1 0-2 .9-2 2v12H6V21zm25 22.8V34h9.8L31 43.8z"}))};l.displayName="IconCalendar",l.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"};t.default=l},80906:function(e,t,n){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.DependentViewport=void 0;var a=f(n(67294)),i=f(n(45697)),o=f(n(32018)),l=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=r(e)&&"function"!=typeof e)return{default:e};var n=u(t);if(n&&n.has(e))return n.get(e);var a={__proto__:null},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var l=i?Object.getOwnPropertyDescriptor(e,o):null;l&&(l.get||l.set)?Object.defineProperty(a,o,l):a[o]=e[o]}return a.default=e,n&&n.set(e,a),a}(n(30210));function u(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(u=function(e){return e?n:t})(e)}function f(e){return e&&e.__esModule?e:{default:e}}function c(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,(i=a.key,o=void 0,o=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var a=n.call(e,t||"default");if("object"!==r(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(i,"string"),"symbol"===r(o)?o:String(o)),a)}var i,o}function d(e,t){return d=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},d(e,t)}function s(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=m(e);if(t){var i=m(this).constructor;n=Reflect.construct(a,arguments,i)}else n=a.apply(this,arguments);return function(e,t){if(t&&("object"===r(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return p(e)}(this,n)}}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e){return m=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},m(e)}t.DependentViewport={WINDOW:"window",PARENT:"parent"};var v={children:i.default.node,onChange:i.default.func,onResize:i.default.func,tiny:i.default.element,small:i.default.element,medium:i.default.element,large:i.default.element,huge:i.default.element,enormous:i.default.element,responsiveTo:i.default.oneOf(["window","parent"])},h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&d(e,t)}(u,e);var t,n,r,i=s(u);function u(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this)).state={element:null},e.setContainer=e.setContainer.bind(p(e)),e.handleResize=e.handleResize.bind(p(e)),e.handleWindowResize=e.handleWindowResize.bind(p(e)),e.animationFrameID=null,e}return t=u,(n=[{key:"componentDidMount",value:function(){var e=this,t=this.props;t.tiny,t.small,t.medium,t.large,t.huge,t.enormous,this.container?(this.handleResize(this.container.getBoundingClientRect().width),this.resizeObserver=new o.default((function(t){e.animationFrameID=window.requestAnimationFrame((function(){e.animationFrameID=null,e.handleResize(t[0].target.getBoundingClientRect().width)}))})),this.resizeObserver.observe(this.container)):(this.handleResize(window.innerWidth),window.addEventListener("resize",this.handleWindowResize))}},{key:"componentWillUnmount",value:function(){this.container?(window.cancelAnimationFrame(this.animationFrameID),this.resizeObserver.disconnect(this.container),this.container=null):window.removeEventListener("resize",this.handleWindowResize)}},{key:"handleResize",value:function(e){var t=this.props,n=t.onChange,r=t.onResize,a=t.tiny,i=t.small,o=t.medium,u=t.large,f=t.huge,c=t.enormous;r&&r(e);var d,s=(0,l.activeBreakpointForSize)(e);n&&s!==this.breakpoint&&n(s),this.breakpoint=s,(a||i||o||u||f||c)&&(d=e>=l.default.enormous&&c?"enormous":e>=l.default.huge&&f?"huge":e>=l.default.large&&u?"large":e>=l.default.medium&&o?"medium":e>=l.default.small&&i?"small":"tiny",this.state.element!==d&&this.setState({element:d}))}},{key:"handleWindowResize",value:function(){this.handleResize(window.innerWidth)}},{key:"setContainer",value:function(e){null!==e&&(this.container="parent"===this.props.responsiveTo?e.parentNode:null)}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.responsiveTo;return this.state.element?this.props[this.state.element]||null:a.default.createElement(a.default.Fragment,null,"parent"===n&&!this.container&&a.default.createElement("div",{ref:this.setContainer}),t)}}])&&c(t.prototype,n),r&&c(t,r),Object.defineProperty(t,"prototype",{writable:!1}),u}(a.default.Component);h.propTypes=v,h.defaultProps={responsiveTo:"parent"};t.default=h}}]);