"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[33934,27127,43079,54672,32291,43629],{201:function(e,t,n){var l=n(24994),r=n(73738);t.A=void 0;var a=l(n(85715)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=r(e)&&"function"!=typeof e)return{default:e};var n=p(t);if(n&&n.has(e))return n.get(e);var l={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&{}.hasOwnProperty.call(e,o)){var i=a?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(l,o,i):l[o]=e[o]}return l.default=e,n&&n.set(e,l),l}(n(96540)),i=l(n(5556)),u=l(n(67967)),d=n(92912),s=l(n(49558)),c=l(n(53665)),f=n(25966),m=l(n(89986));function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(p=function(e){return e?n:t})(e)}var _=u.default.bind(m.default),h={example:i.default.element,exampleSrc:i.default.element,exampleCssSrc:i.default.element,title:i.default.string,description:i.default.node,isExpanded:i.default.bool},v=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},b=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},y=function(e){var t=e.example,n=e.exampleSrc,l=e.exampleCssSrc,r=e.title,i=e.description,u=e.isExpanded,m=(0,o.useState)(u),p=(0,a.default)(m,2),h=p[0],y=p[1],g=(0,o.useState)(!1),w=(0,a.default)(g,2),E=w[0],O=w[1],x=o.default.useContext(d.ThemeContext),j=void 0!==l,P=function(){O(!E),h&&y(!h)},T=function(){y(!h),E&&O(!E)},C=function(e,t){e.nativeEvent.keyCode!==f.KEY_SPACE&&e.nativeEvent.keyCode!==f.KEY_RETURN||(e.preventDefault(),t())};return o.default.createElement("div",{className:_("template",x.className)},o.default.createElement("div",{className:_("header")},r&&o.default.createElement("h2",{className:_("title")},r)),o.default.createElement("div",{className:_("content")},i&&o.default.createElement("div",{className:_("description")},i),t),o.default.createElement("div",{className:_("footer")},n?o.default.createElement("div",{className:_("button-container")},j&&o.default.createElement("button",{type:"button",className:_("css-toggle","item",{"is-selected":E}),onClick:P,onKeyDown:function(e){return C(e,P)},onBlur:v,onMouseDown:b,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(s.default,{className:_("chevron")}),o.default.createElement("span",null,"CSS"),o.default.createElement(c.default,{className:_("chevron")})),o.default.createElement("button",{type:"button",className:_("code-toggle","item",{"is-selected":h}),onClick:T,onKeyDown:function(e){return C(e,T)},onBlur:v,onMouseDown:b,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(s.default,{className:_("chevron")}),o.default.createElement("span",null,"Code"),o.default.createElement(c.default,{className:_("chevron")}))):null,o.default.createElement("div",null,E&&o.default.createElement("div",{className:_("css")},l),h&&o.default.createElement("div",{className:_("code")},n))))};y.propTypes=h,y.defaultProps={isExpanded:!1};t.A=y},89986:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},57497:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Fieldset-module__clinical-lowlight-theme___XMxG7","orion-fusion-theme":"Fieldset-module__orion-fusion-theme___rT15M",fieldset:"Fieldset-module__fieldset___J-xl3","fieldset-required":"Fieldset-module__fieldset-required___aTps3",legend:"Fieldset-module__legend___aExR-","legend-visually-hidden":"Fieldset-module__legend-visually-hidden___70GQh","help-text":"Fieldset-module__help-text___IuP4F","fieldset-children":"Fieldset-module__fieldset-children___YkIkm"}},41521:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=c(n(96540)),r=c(n(5556)),a=c(n(46942)),o=c(n(67967)),i=c(n(23695)),u=n(68414),d=c(n(57497)),s=["children","help","legend","legendAttrs","isLegendHidden","required"];function c(e){return e&&e.__esModule?e:{default:e}}function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},f.apply(this,arguments)}function m(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n={};for(var l in e)if(Object.prototype.hasOwnProperty.call(e,l)){if(t.indexOf(l)>=0)continue;n[l]=e[l]}return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.default.bind(d.default),_={children:r.default.node,help:r.default.node,legend:r.default.string,legendAttrs:r.default.object,required:r.default.bool,isLegendHidden:r.default.bool},h=function(e){var t,n,r=e.children,o=e.help,d=e.legend,c=e.legendAttrs,_=e.isLegendHidden,h=e.required,v=m(e,s),b=l.default.useContext(i.default),y=(0,a.default)(p(["fieldset",{"fieldset-required":h},b.className]),v.className),g=p(["legend",c.className,{"legend-visually-hidden":_}]),w="terra-fieldset-legend-".concat((0,u.v4)()),E="terra-fieldset-help-".concat((0,u.v4)());return l.default.createElement("fieldset",f({},v,{className:y}),d&&l.default.createElement("legend",f({id:w},c,{className:g}),d),o&&l.default.createElement("small",{id:E,className:p("help-text"),tabIndex:"-1"},o),l.default.createElement("div",{className:p("fieldset-children")},(o||d)&&r?(t=r,n=[],l.default.Children.forEach(t,(function(e){n.push(l.default.cloneElement(e,{"aria-labelledby":"".concat(w," ").concat(E)}))})),n):r))};h.propTypes=_,h.defaultProps={legendAttrs:{},required:!1,isLegendHidden:!1};t.default=h},71576:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=a(n(96540)),r=a(n(25365));function a(e){return e&&e.__esModule?e:{default:e}}var o=function(e){var t=Object.assign({},e);return l.default.createElement(r.default,t,l.default.createElement("path",{d:"M43 6h-4V2.2C39 1 38 0 36.8 0h-1.7C33.9.1 33 1 33 2.2V6H15V2.2C15 1 14 0 12.8 0h-1.7C9.9.1 9 1 9 2.2V6H5c-1.1 0-2 .9-2 2v38c0 1.1.9 2 2 2h24c1.3-.1 2.5-.6 3.4-1.4l11.2-11.1c.8-.9 1.3-2.1 1.4-3.4V8c0-1.1-.9-2-2-2zM6 21h36v10H30c-1.1 0-2 .9-2 2v12H6V21zm25 22.8V34h9.8L31 43.8z"}))};o.displayName="IconCalendar",o.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"};t.default=o},49558:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=a(n(96540)),r=a(n(25365));function a(e){return e&&e.__esModule?e:{default:e}}var o=function(e){var t=Object.assign({},e);return l.default.createElement(r.default,t,l.default.createElement("path",{d:"M10.3 24 33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};o.displayName="IconChevronLeft",o.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};t.default=o},4213:function(e,t,n){function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.DependentViewport=void 0;var r=d(n(96540)),a=d(n(5556)),o=d(n(7829)),i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=l(e)&&"function"!=typeof e)return{default:e};var n=u(t);if(n&&n.has(e))return n.get(e);var r={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&{}.hasOwnProperty.call(e,o)){var i=a?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(r,o,i):r[o]=e[o]}return r.default=e,n&&n.set(e,r),r}(n(58216));function u(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(u=function(e){return e?n:t})(e)}function d(e){return e&&e.__esModule?e:{default:e}}function s(e,t){for(var n=0;n<t.length;n++){var l=t[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,c(l.key),l)}}function c(e){var t=function(e,t){if("object"!=l(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=l(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==l(t)?t:t+""}function f(e,t,n){return t=p(t),function(e,t){if(t&&("object"===l(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,m()?Reflect.construct(t,n||[],p(e).constructor):t.apply(e,n))}function m(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(m=function(){return!!e})()}function p(e){return p=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},p(e)}function _(e,t){return _=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},_(e,t)}t.DependentViewport={WINDOW:"window",PARENT:"parent"};var h={children:a.default.node,onChange:a.default.func,onResize:a.default.func,tiny:a.default.element,small:a.default.element,medium:a.default.element,large:a.default.element,huge:a.default.element,enormous:a.default.element,responsiveTo:a.default.oneOf(["window","parent"])},v=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=f(this,t)).state={element:null},e.setContainer=e.setContainer.bind(e),e.handleResize=e.handleResize.bind(e),e.handleWindowResize=e.handleWindowResize.bind(e),e.animationFrameID=null,e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&_(e,t)}(t,e),n=t,(l=[{key:"componentDidMount",value:function(){var e=this,t=this.props;t.tiny,t.small,t.medium,t.large,t.huge,t.enormous,this.container?(this.handleResize(this.container.getBoundingClientRect().width),this.resizeObserver=new o.default((function(t){e.animationFrameID=window.requestAnimationFrame((function(){e.animationFrameID=null,e.handleResize(t[0].target.getBoundingClientRect().width)}))})),this.resizeObserver.observe(this.container)):(this.handleResize(window.innerWidth),window.addEventListener("resize",this.handleWindowResize))}},{key:"componentWillUnmount",value:function(){this.container?(window.cancelAnimationFrame(this.animationFrameID),this.resizeObserver.disconnect(this.container),this.container=null):window.removeEventListener("resize",this.handleWindowResize)}},{key:"handleResize",value:function(e){var t=this.props,n=t.onChange,l=t.onResize,r=t.tiny,a=t.small,o=t.medium,u=t.large,d=t.huge,s=t.enormous;l&&l(e);var c,f=(0,i.activeBreakpointForSize)(e);n&&f!==this.breakpoint&&n(f),this.breakpoint=f,(r||a||o||u||d||s)&&(c=e>=i.default.enormous&&s?"enormous":e>=i.default.huge&&d?"huge":e>=i.default.large&&u?"large":e>=i.default.medium&&o?"medium":e>=i.default.small&&a?"small":"tiny",this.state.element!==c&&this.setState({element:c}))}},{key:"handleWindowResize",value:function(){this.handleResize(window.innerWidth)}},{key:"setContainer",value:function(e){null!==e&&(this.container="parent"===this.props.responsiveTo?e.parentNode:null)}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.responsiveTo;return this.state.element?this.props[this.state.element]||null:r.default.createElement(r.default.Fragment,null,"parent"===n&&!this.container&&r.default.createElement("div",{ref:this.setContainer}),t)}}])&&s(n.prototype,l),a&&s(n,a),Object.defineProperty(n,"prototype",{writable:!1}),n;var n,l,a}(r.default.Component);v.propTypes=h,v.defaultProps={responsiveTo:"parent"};t.default=v}}]);