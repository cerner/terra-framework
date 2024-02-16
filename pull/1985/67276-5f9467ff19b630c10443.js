"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[67276],{61660:function(e,t,n){var l=n(22411);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(n(94064)),a=l(n(66024)),o=l(n(96284)),u=l(n(63532)),i=l(n(54216)),c=l(n(11504)),f=l(n(3268)),s=l(n(74824)),d=l(n(17104)),m=l(n(556)),b=l(n(61893)),g=l(n(7804)),p=l(n(70048));function _(e,t,n){return t=(0,u.default)(t),(0,o.default)(e,y()?Reflect.construct(t,n||[],(0,u.default)(e).constructor):t.apply(e,n))}function y(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(y=function(){return!!e})()}var v=s.default.bind(p.default),h={isSelectableMenu:f.default.bool},O=function(e){function t(){return(0,r.default)(this,t),_(this,t,arguments)}return(0,i.default)(t,e),(0,a.default)(t,[{key:"getChildContext",value:function(){return{isSelectableMenu:!0}}},{key:"render",value:function(){var e=this.context;return c.default.createElement("div",null,c.default.createElement("p",null,"default icon, themeable, isToggled, isToggleable, and isInstructionsForUse combinations"),c.default.createElement("br",null),c.default.createElement("ul",{className:v("mimic-menu-container"),role:"menu"},c.default.createElement(d.default.Item,{text:"Icon",key:"Icon",icon:c.default.createElement(m.default,null)}),c.default.createElement(d.default.Item,{text:"Icon, themeable",key:"Icon, themeable",icon:c.default.createElement(b.default,{className:v(["red-color",e.className])})}),c.default.createElement(d.default.Item,{text:"Icon, isToggleable",key:"Icon, isToggleable",icon:c.default.createElement(m.default,null),isSelectable:!0}),c.default.createElement(d.default.Item,{text:"Icon, isToggleable, and isToggled",key:"Icon, isToggleable, isToggled",icon:c.default.createElement(m.default,null),isSelectable:!0,isSelected:!0}),c.default.createElement(d.default.Item,{text:"Icon, isToggled, notToggleable",key:"Icon, isToggled, notToggleable",icon:c.default.createElement(m.default,null),isSelected:!0}),c.default.createElement(d.default.Item,{text:"isInstructionsForUse, icon",key:"isInstructionsForUse, icon",isSelected:!0,isSelectable:!0,icon:c.default.createElement(m.default,null),isInstructionsForUse:!0}),c.default.createElement(d.default.Item,{text:"MenuItem - Submenu",key:"MenuItem - Submenu",subMenuItems:[c.default.createElement(d.default.Item,{text:"Not Visible"})]})))}}]),t}(c.default.Component);O.childContextTypes=h,O.contextType=g.default;t.default=O},28300:function(e,t,n){n.r(t),t.default={arrange:"Arrange-module__arrange___hY0Ml",fill:"Arrange-module__fill___m88eq",fit:"Arrange-module__fit___tv8j-",center:"Arrange-module__center___9qfhG",bottom:"Arrange-module__bottom___8beod",stretch:"Arrange-module__stretch___eQF-k",default:"Arrange-module__default___z+O29"}},70048:function(e,t,n){n.r(t),t.default={"mimic-menu-container":"MenuItemCommon-module__mimic-menu-container___vxRKf","red-color":"MenuItemCommon-module__red-color___kgz2x","orion-fusion-theme":"MenuItemCommon-module__orion-fusion-theme___q04e2","clinical-lowlight-theme":"MenuItemCommon-module__clinical-lowlight-theme___iB4N8"}},94515:function(e,t,n){function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.AlignmentTypes=void 0;var r=c(n(11504)),a=c(n(3268)),o=c(n(74824)),u=c(n(28300)),i=["fitStart","fill","fitEnd","align","alignFitStart","alignFill","alignFitEnd","fitStartAttributes","fillAttributes","fitEndAttributes"];function c(e){return e&&e.__esModule?e:{default:e}}function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},f.apply(this,arguments)}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){m(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==l(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==l(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===l(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}t.AlignmentTypes={CENTER:"center",BOTTOM:"bottom",STRETCH:"stretch"};var g=o.default.bind(u.default),p={fitStart:a.default.element,fill:a.default.element.isRequired,fitEnd:a.default.element,align:a.default.oneOf(["center","bottom","stretch"]),alignFitStart:a.default.oneOf(["center","bottom","stretch"]),alignFitEnd:a.default.oneOf(["center","bottom","stretch"]),alignFill:a.default.oneOf(["center","bottom","stretch"]),fitStartAttributes:a.default.object,fillAttributes:a.default.object,fitEndAttributes:a.default.object},_=function(e){var t=e.fitStart,n=e.fill,l=e.fitEnd,a=e.align,o=e.alignFitStart,u=e.alignFill,c=e.alignFitEnd,s=e.fitStartAttributes,m=e.fillAttributes,p=e.fitEndAttributes,_=b(e,i),y=d({},s),v=d({},m),h=d({},p);return r.default.createElement("span",f({},_,{className:g("arrange",_.className)}),r.default.createElement("span",f({},y,{className:g("fit",a||o,y.className,"fit-block")}),t),r.default.createElement("span",f({},v,{className:g("fill",a||u,v.className,"fill-block")}),n),r.default.createElement("span",f({},h,{className:g("fit",a||c,h.className)}),l))};_.propTypes=p;t.default=_},30992:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=o(n(11504)),r=o(n(22728)),a=n(93627);function o(e){return e&&e.__esModule?e:{default:e}}function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},u.apply(this,arguments)}var i=function(e){var t=u({},e);return l.default.createElement(a.FormattedMessage,{id:"Terra.icon.IconConsultInstructionsForUse.title"},(function(e){return l.default.createElement("span",{"aria-label":e,title:e},l.default.createElement(r.default,t,l.default.createElement("path",{d:"M42.746 9c-2.28 0-4.508-.85-6.405-2.115a10.165 10.165 0 0 0-5.646-1.71c-2.205 0-4.404.714-6.233 2.131L24 7.663l-.462-.357a10.17 10.17 0 0 0-6.233-2.131c-1.964 0-3.932.567-5.646 1.71C9.762 8.15 7.534 9 5.254 9H0v34h5.254c2.28 0 4.508-.85 6.405-2.115a10.163 10.163 0 0 1 5.646-1.71c1.826 0 3.646.498 5.257 1.471.142.548.626.916 1.159.916h.556c.534 0 1.017-.368 1.159-.916a10.172 10.172 0 0 1 5.257-1.471c1.964 0 3.932.567 5.646 1.71C38.238 42.15 40.466 43 42.746 43H48V9h-5.254zM9.995 38.389C8.893 39.124 7.175 40 5.254 40H3V12h2.254c2.709 0 5.5-.906 8.069-2.619a7.157 7.157 0 0 1 3.983-1.206c1.583 0 3.144.534 4.396 1.503l.798.618v26.95a13.237 13.237 0 0 0-5.195-1.07 13.13 13.13 0 0 0-7.31 2.213zM45 40h-2.254c-1.921 0-3.639-.876-4.741-1.611a13.138 13.138 0 0 0-7.31-2.214c-1.788 0-3.56.371-5.195 1.07v-26.95l.798-.618a7.219 7.219 0 0 1 4.397-1.503c1.422 0 2.799.417 3.982 1.206 2.57 1.713 5.36 2.619 8.069 2.619H45V40zm-8-11h2v2h-7v-2h2v-6h-2v-2h5v8zm-4-12a2 2 0 1 1 3.999-.001A2 2 0 0 1 33 17z"})))}))};i.displayName="IconConsultInstructionsForUse",i.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"};t.default=i},61893:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=a(n(11504)),r=a(n(22728));function a(e){return e&&e.__esModule?e:{default:e}}function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},o.apply(this,arguments)}var u=function(e){var t=o({},e);return l.default.createElement(r.default,t,l.default.createElement("path",{d:"m46 15.1-2.7-5.5-16.5 9.6V0h-5.5v19.2L4.8 9.6l-2.7 5.5L17.8 24 2 32.9l2.7 5.5 16.5-9.6V48h5.5V28.8l16.5 9.6 2.7-5.5L30.2 24 46 15.1z"}))};u.displayName="IconRequired",u.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"};t.default=u}}]);