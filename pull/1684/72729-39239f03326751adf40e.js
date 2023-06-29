/*! For license information please see 72729-39239f03326751adf40e.js.LICENSE.txt */
(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[72729],{92214:function(e,t,n){"use strict";var r=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(56690)),l=r(n(89728)),u=r(n(66115)),o=r(n(61655)),i=r(n(94993)),f=r(n(73808)),c=r(n(67294)),s=r(n(55281)),d=r(n(47166)),p=r(n(70419)),m=r(n(51162)),b=r(n(18845));function y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,f.default)(e);if(t){var a=(0,f.default)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return(0,i.default)(this,n)}}var v=d.default.bind(b.default),h=function(e){(0,o.default)(n,e);var t=y(n);function n(e){var r;return(0,a.default)(this,n),(r=t.call(this,e)).handleButtonClick=r.handleButtonClick.bind((0,u.default)(r)),r.handleRequestClose=r.handleRequestClose.bind((0,u.default)(r)),r.setButtonNode=r.setButtonNode.bind((0,u.default)(r)),r.getButtonNode=r.getButtonNode.bind((0,u.default)(r)),r.setParentNode=r.setParentNode.bind((0,u.default)(r)),r.getParentNode=r.getParentNode.bind((0,u.default)(r)),r.state={open:!1},r}return(0,l.default)(n,[{key:"componentDidMount",value:function(){this.forceUpdate()}},{key:"handleButtonClick",value:function(){this.setState({open:!0})}},{key:"handleRequestClose",value:function(){this.setState({open:!1})}},{key:"setButtonNode",value:function(e){this.buttonNode=e}},{key:"getButtonNode",value:function(){return this.buttonNode}},{key:"setParentNode",value:function(e){this.parentNode=e}},{key:"getParentNode",value:function(){return this.parentNode}},{key:"render",value:function(){return c.default.createElement("div",{className:v("content-wrapper"),ref:this.setParentNode},c.default.createElement(p.default,{boundingRef:this.getParentNode,isOpen:this.state.open,targetRef:this.getButtonNode,onRequestClose:this.handleRequestClose,classNameContent:"TestBoundedContent"},c.default.createElement(p.default.Item,{text:"Default 1",key:"1"}),c.default.createElement(p.default.Item,{text:"Default 2",key:"2",className:"TestNestedMenu",subMenuItems:[c.default.createElement(p.default.Item,{text:"Default 2.1",key:"2.1",className:"TestNestedMenuContent"}),c.default.createElement(p.default.Item,{text:"Default 2.2",key:"2.2"}),c.default.createElement(p.default.Item,{text:"Default 2.3",key:"2.3"})]}),c.default.createElement(p.default.Item,{text:"Default 3",key:"3"}),c.default.createElement(p.default.Item,{text:"Default 4",key:"4"}),c.default.createElement(p.default.Item,{text:"Default 5",key:"5"}),c.default.createElement(p.default.ItemGroup,{isSelectable:!0,onChange:this.handleOnChange,key:"6"},c.default.createElement(p.default.Item,{text:"Default 61",key:"61"}),c.default.createElement(p.default.Item,{text:"Default 62",key:"62"}),c.default.createElement(p.default.Item,{text:"Default 63",key:"63"})),c.default.createElement(p.default.Item,{text:"Default 7",key:"7"}),c.default.createElement(p.default.Item,{text:"Default 8",key:"8"})),c.default.createElement(s.default,{id:"bounded-button",type:"button",onClick:this.handleButtonClick,text:"Default Menu","aria-haspopup":!0,icon:c.default.createElement(m.default,null),isReversed:!0,refCallback:this.setButtonNode}))}}]),n}(c.default.Component);t.default=h},66633:function(e,t,n){"use strict";n.r(t),t.default={arrange:"Arrange-module__arrange___hY0Ml",fill:"Arrange-module__fill___m88eq",fit:"Arrange-module__fit___tv8j-",center:"Arrange-module__center___9qfhG",bottom:"Arrange-module__bottom___8beod",stretch:"Arrange-module__stretch___eQF-k",default:"Arrange-module__default___z+O29"}},18845:function(e,t,n){"use strict";n.r(t),t.default={"content-wrapper":"BoundedMenu-test-module__content-wrapper___AsMCE"}},74260:function(e,t,n){"use strict";n.r(t),t.default={"visually-hidden-text":"VisuallyHiddenText-module__visually-hidden-text___vcInW"}},78490:function(e,t,n){"use strict";function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.AlignmentTypes=void 0;var a=f(n(67294)),l=f(n(45697)),u=f(n(47166)),o=f(n(66633)),i=["fitStart","fill","fitEnd","align","alignFitStart","alignFill","alignFitEnd","fitStartAttributes","fillAttributes","fitEndAttributes"];function f(e){return e&&e.__esModule?e:{default:e}}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var a=n.call(e,t||"default");if("object"!==r(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===r(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}t.AlignmentTypes={CENTER:"center",BOTTOM:"bottom",STRETCH:"stretch"};var b=u.default.bind(o.default),y={fitStart:l.default.element,fill:l.default.element.isRequired,fitEnd:l.default.element,align:l.default.oneOf(["center","bottom","stretch"]),alignFitStart:l.default.oneOf(["center","bottom","stretch"]),alignFitEnd:l.default.oneOf(["center","bottom","stretch"]),alignFill:l.default.oneOf(["center","bottom","stretch"]),fitStartAttributes:l.default.object,fillAttributes:l.default.object,fitEndAttributes:l.default.object},v=function(e){var t=e.fitStart,n=e.fill,r=e.fitEnd,l=e.align,u=e.alignFitStart,o=e.alignFill,f=e.alignFitEnd,s=e.fitStartAttributes,p=e.fillAttributes,y=e.fitEndAttributes,v=m(e,i),h=d({},s),g=d({},p),O=d({},y);return a.default.createElement("div",c({},v,{className:b("arrange",v.className)}),a.default.createElement("div",c({},h,{className:b("fit",l||u,h.className)}),t),a.default.createElement("div",c({},g,{className:b("fill",l||o,g.className)}),n),a.default.createElement("div",c({},O,{className:b("fit",l||f,O.className)}),r))};v.propTypes=y;var h=v;t.default=h},46379:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(n(67294)),a=u(n(99139)),l=n(25387);function u(e){return e&&e.__esModule?e:{default:e}}function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}var i=function(e){var t=o({},e);return r.default.createElement(l.FormattedMessage,{id:"Terra.icon.IconConsultInstructionsForUse.title"},(function(e){return r.default.createElement("span",{"aria-label":e,title:e},r.default.createElement(a.default,t,r.default.createElement("path",{d:"M42.746 9c-2.28 0-4.508-.85-6.405-2.115a10.165 10.165 0 00-5.646-1.71c-2.205 0-4.404.714-6.233 2.131L24 7.663l-.462-.357a10.17 10.17 0 00-6.233-2.131c-1.964 0-3.932.567-5.646 1.71C9.762 8.15 7.534 9 5.254 9H0v34h5.254c2.28 0 4.508-.85 6.405-2.115a10.163 10.163 0 015.646-1.71c1.826 0 3.646.498 5.257 1.471.142.548.626.916 1.159.916h.556c.534 0 1.017-.368 1.159-.916a10.172 10.172 0 015.257-1.471c1.964 0 3.932.567 5.646 1.71C38.238 42.15 40.466 43 42.746 43H48V9h-5.254zM9.995 38.389C8.893 39.124 7.175 40 5.254 40H3V12h2.254c2.709 0 5.5-.906 8.069-2.619a7.157 7.157 0 013.983-1.206c1.583 0 3.144.534 4.396 1.503l.798.618v26.95a13.237 13.237 0 00-5.195-1.07 13.13 13.13 0 00-7.31 2.213zM45 40h-2.254c-1.921 0-3.639-.876-4.741-1.611a13.138 13.138 0 00-7.31-2.214c-1.788 0-3.56.371-5.195 1.07v-26.95l.798-.618a7.219 7.219 0 014.397-1.503c1.422 0 2.799.417 3.982 1.206 2.57 1.713 5.36 2.619 8.069 2.619H45V40zm-8-11h2v2h-7v-2h2v-6h-2v-2h5v8zm-4-12a2 2 0 113.999-.001A2 2 0 0133 17z"})))}))};i.displayName="IconConsultInstructionsForUse",i.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"};var f=i;t.default=f},37645:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n(67294)),a=i(n(71881)),l=i(n(35960)),u=i(n(74260)),o=["refCallback","text"];function i(e){return e&&e.__esModule?e:{default:e}}function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f.apply(this,arguments)}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=l.default.bind(u.default),d={refCallback:a.default.func,text:a.default.string},p={text:void 0,refCallback:void 0},m=function(e){var t=e.refCallback,n=e.text,a=c(e,o),l=s(["visually-hidden-text",a.className]);return r.default.createElement("span",f({ref:t},a,{className:l}),n)};m.propTypes=d,m.defaultProps=p;var b=m;t.default=b},35960:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var l=typeof n;if("string"===l||"number"===l)e.push(this&&this[n]||n);else if(Array.isArray(n))e.push(a.apply(this,n));else if("object"===l){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var u in n)r.call(n,u)&&n[u]&&e.push(this&&this[u]||u)}}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()},7944:function(e,t,n){"use strict";var r=n(85633);function a(){}function l(){}l.resetWarningCache=a,e.exports=function(){function e(e,t,n,a,l,u){if(u!==r){var o=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw o.name="Invariant Violation",o}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:l,resetWarningCache:a};return n.PropTypes=n,n}},71881:function(e,t,n){e.exports=n(7944)()},85633:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);