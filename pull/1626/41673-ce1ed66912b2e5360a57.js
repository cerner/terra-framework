/*! For license information please see 41673-ce1ed66912b2e5360a57.js.LICENSE.txt */
(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[41673],{11082:function(e,t,n){"use strict";var r=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=r(n(56690)),a=r(n(89728)),o=r(n(61655)),i=r(n(94993)),u=r(n(73808)),c=r(n(67294)),f=r(n(45697)),s=r(n(47166)),d=r(n(70419)),m=r(n(3343)),p=r(n(31532)),b=r(n(47341)),y=r(n(82347));function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,u.default)(e);if(t){var l=(0,u.default)(this).constructor;n=Reflect.construct(r,arguments,l)}else n=r.apply(this,arguments);return(0,i.default)(this,n)}}var g=s.default.bind(y.default),h={isSelectableMenu:f.default.bool},_=function(e){(0,o.default)(n,e);var t=v(n);function n(){return(0,l.default)(this,n),t.apply(this,arguments)}return(0,a.default)(n,[{key:"getChildContext",value:function(){return{isSelectableMenu:!0}}},{key:"render",value:function(){var e=this.context;return c.default.createElement("div",null,c.default.createElement("p",null,"default icon, themeable, isToggled, isToggleable, and isInstructionsForUse combinations"),c.default.createElement("br",null),c.default.createElement("ul",{className:g("mimic-menu-container"),role:"menu"},c.default.createElement(d.default.Item,{text:"Icon",key:"Icon",icon:c.default.createElement(m.default,null)}),c.default.createElement(d.default.Item,{text:"Icon, themeable",key:"Icon, themeable",icon:c.default.createElement(p.default,{className:g(["red-color",e.className])})}),c.default.createElement(d.default.Item,{text:"Icon, isToggleable",key:"Icon, isToggleable",icon:c.default.createElement(m.default,null),isSelectable:!0}),c.default.createElement(d.default.Item,{text:"Icon, isToggleable, and isToggled",key:"Icon, isToggleable, isToggled",icon:c.default.createElement(m.default,null),isSelectable:!0,isSelected:!0}),c.default.createElement(d.default.Item,{text:"Icon, isToggled, notToggleable",key:"Icon, isToggled, notToggleable",icon:c.default.createElement(m.default,null),isSelected:!0}),c.default.createElement(d.default.Item,{text:"isInstructionsForUse, icon",key:"isInstructionsForUse, icon",isSelected:!0,isSelectable:!0,icon:c.default.createElement(m.default,null),isInstructionsForUse:!0}),c.default.createElement(d.default.Item,{text:"MenuItem - Submenu",key:"MenuItem - Submenu",subMenuItems:[c.default.createElement(d.default.Item,{text:"Not Visible"})]})))}}]),n}(c.default.Component);_.childContextTypes=h,_.contextType=b.default;var O=_;t.default=O},66633:function(e,t,n){"use strict";n.r(t),t.default={arrange:"Arrange-module__arrange___hY0Ml",fill:"Arrange-module__fill___m88eq",fit:"Arrange-module__fit___tv8j-",center:"Arrange-module__center___9qfhG",bottom:"Arrange-module__bottom___8beod",stretch:"Arrange-module__stretch___eQF-k",default:"Arrange-module__default___z+O29"}},82347:function(e,t,n){"use strict";n.r(t),t.default={"mimic-menu-container":"MenuItemCommon-module__mimic-menu-container___vxRKf","red-color":"MenuItemCommon-module__red-color___kgz2x","orion-fusion-theme":"MenuItemCommon-module__orion-fusion-theme___q04e2","clinical-lowlight-theme":"MenuItemCommon-module__clinical-lowlight-theme___iB4N8"}},74260:function(e,t,n){"use strict";n.r(t),t.default={"visually-hidden-text":"VisuallyHiddenText-module__visually-hidden-text___vcInW"}},78490:function(e,t,n){"use strict";function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.AlignmentTypes=void 0;var l=c(n(67294)),a=c(n(45697)),o=c(n(47166)),i=c(n(66633)),u=["fitStart","fill","fitEnd","align","alignFitStart","alignFill","alignFitEnd","fitStartAttributes","fillAttributes","fitEndAttributes"];function c(e){return e&&e.__esModule?e:{default:e}}function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f.apply(this,arguments)}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){m(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var l=n.call(e,t||"default");if("object"!==r(l))return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===r(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}t.AlignmentTypes={CENTER:"center",BOTTOM:"bottom",STRETCH:"stretch"};var b=o.default.bind(i.default),y={fitStart:a.default.element,fill:a.default.element.isRequired,fitEnd:a.default.element,align:a.default.oneOf(["center","bottom","stretch"]),alignFitStart:a.default.oneOf(["center","bottom","stretch"]),alignFitEnd:a.default.oneOf(["center","bottom","stretch"]),alignFill:a.default.oneOf(["center","bottom","stretch"]),fitStartAttributes:a.default.object,fillAttributes:a.default.object,fitEndAttributes:a.default.object},v=function(e){var t=e.fitStart,n=e.fill,r=e.fitEnd,a=e.align,o=e.alignFitStart,i=e.alignFill,c=e.alignFitEnd,s=e.fitStartAttributes,m=e.fillAttributes,y=e.fitEndAttributes,v=p(e,u),g=d({},s),h=d({},m),_=d({},y);return l.default.createElement("div",f({},v,{className:b("arrange",v.className)}),l.default.createElement("div",f({},g,{className:b("fit",a||o,g.className)}),t),l.default.createElement("div",f({},h,{className:b("fill",a||i,h.className)}),n),l.default.createElement("div",f({},_,{className:b("fit",a||c,_.className)}),r))};v.propTypes=y;var g=v;t.default=g},46379:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(67294)),l=o(n(99139)),a=n(25387);function o(e){return e&&e.__esModule?e:{default:e}}function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}var u=function(e){var t=i({},e);return r.default.createElement(a.FormattedMessage,{id:"Terra.icon.IconConsultInstructionsForUse.title"},(function(e){return r.default.createElement("span",{"aria-label":e,title:e},r.default.createElement(l.default,t,r.default.createElement("path",{d:"M42.746 9c-2.28 0-4.508-.85-6.405-2.115a10.165 10.165 0 00-5.646-1.71c-2.205 0-4.404.714-6.233 2.131L24 7.663l-.462-.357a10.17 10.17 0 00-6.233-2.131c-1.964 0-3.932.567-5.646 1.71C9.762 8.15 7.534 9 5.254 9H0v34h5.254c2.28 0 4.508-.85 6.405-2.115a10.163 10.163 0 015.646-1.71c1.826 0 3.646.498 5.257 1.471.142.548.626.916 1.159.916h.556c.534 0 1.017-.368 1.159-.916a10.172 10.172 0 015.257-1.471c1.964 0 3.932.567 5.646 1.71C38.238 42.15 40.466 43 42.746 43H48V9h-5.254zM9.995 38.389C8.893 39.124 7.175 40 5.254 40H3V12h2.254c2.709 0 5.5-.906 8.069-2.619a7.157 7.157 0 013.983-1.206c1.583 0 3.144.534 4.396 1.503l.798.618v26.95a13.237 13.237 0 00-5.195-1.07 13.13 13.13 0 00-7.31 2.213zM45 40h-2.254c-1.921 0-3.639-.876-4.741-1.611a13.138 13.138 0 00-7.31-2.214c-1.788 0-3.56.371-5.195 1.07v-26.95l.798-.618a7.219 7.219 0 014.397-1.503c1.422 0 2.799.417 3.982 1.206 2.57 1.713 5.36 2.619 8.069 2.619H45V40zm-8-11h2v2h-7v-2h2v-6h-2v-2h5v8zm-4-12a2 2 0 113.999-.001A2 2 0 0133 17z"})))}))};u.displayName="IconConsultInstructionsForUse",u.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"};var c=u;t.default=c},31532:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(67294)),l=a(n(99139));function a(e){return e&&e.__esModule?e:{default:e}}function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}var i=function(e){var t=o({},e);return r.default.createElement(l.default,t,r.default.createElement("path",{d:"M46 15.1l-2.7-5.5-16.5 9.6V0h-5.5v19.2L4.8 9.6l-2.7 5.5L17.8 24 2 32.9l2.7 5.5 16.5-9.6V48h5.5V28.8l16.5 9.6 2.7-5.5L30.2 24 46 15.1z"}))};i.displayName="IconRequired",i.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"};var u=i;t.default=u},37645:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(n(67294)),l=u(n(71881)),a=u(n(35960)),o=u(n(74260)),i=["refCallback","text"];function u(e){return e&&e.__esModule?e:{default:e}}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}function f(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.default.bind(o.default),d={refCallback:l.default.func,text:l.default.string},m={text:void 0,refCallback:void 0},p=function(e){var t=e.refCallback,n=e.text,l=f(e,i),a=s(["visually-hidden-text",l.className]);return r.default.createElement("span",c({ref:t},l,{className:a}),n)};p.propTypes=d,p.defaultProps=m;var b=p;t.default=b},35960:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function l(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var a=typeof n;if("string"===a||"number"===a)e.push(this&&this[n]||n);else if(Array.isArray(n))e.push(l.apply(this,n));else if("object"===a){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var o in n)r.call(n,o)&&n[o]&&e.push(this&&this[o]||o)}}}return e.join(" ")}e.exports?(l.default=l,e.exports=l):void 0===(n=function(){return l}.apply(t,[]))||(e.exports=n)}()},7944:function(e,t,n){"use strict";var r=n(85633);function l(){}function a(){}a.resetWarningCache=l,e.exports=function(){function e(e,t,n,l,a,o){if(o!==r){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:l};return n.PropTypes=n,n}},71881:function(e,t,n){e.exports=n(7944)()},85633:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);