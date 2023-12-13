"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[5070],{44367:function(e,t,n){var r=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=r(n(56690)),a=r(n(89728)),i=r(n(61655)),u=r(n(94993)),o=r(n(73808)),c=r(n(67294)),f=r(n(45697)),s=r(n(47166)),d=r(n(93670)),m=r(n(70419)),b=r(n(83279)),p=r(n(31532)),y=r(n(47341)),_=r(n(82347));function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,o.default)(e);if(t){var l=(0,o.default)(this).constructor;n=Reflect.construct(r,arguments,l)}else n=r.apply(this,arguments);return(0,u.default)(this,n)}}var h=s.default.bind(_.default),g={isSelectableMenu:f.default.bool},O=function(e){(0,i.default)(n,e);var t=v(n);function n(){return(0,l.default)(this,n),t.apply(this,arguments)}return(0,a.default)(n,[{key:"getChildContext",value:function(){return{isSelectableMenu:!0}}},{key:"render",value:function(){var e=this.context;return c.default.createElement("div",null,c.default.createElement("div",{id:"isSelected"},c.default.createElement("p",null,"The item is disabled. The selection state should not change with any user interaction.")),c.default.createElement(d.default,{className:h(["mimic-menu-container"]),role:"menu"},c.default.createElement(m.default.Item,{text:"Disabled Menu Item",key:"1",className:"TestDisabledItem",isSelectable:!0,isDisabled:!0}),c.default.createElement(m.default.Item,{isDisabled:!0,isSelectable:!0,text:"Nested Menu",key:"2",className:"TestNestedMenu",subMenuItems:[c.default.createElement(m.default.Item,{text:"Default 2.1",key:"2.1",className:"TestNestedMenuContent"})]}),c.default.createElement(m.default.Item,{isDisabled:!0,text:"Disabled Selected Menu Item",key:"3",className:"TestDisabledItem",isSelectable:!0,isSelected:!0}),c.default.createElement(m.default.Item,{isDisabled:!0,text:"Disabled eIFU Icon Menu Item",key:"4",className:"TestDisabledItem",isInstructionsForUse:!0}),c.default.createElement(m.default.Item,{isDisabled:!0,text:"Disabled Icon Menu Item",key:"5",className:"TestDisabledItem",icon:c.default.createElement(b.default,null)}),c.default.createElement(m.default.Item,{isDisabled:!0,text:"Disabled Themeable Icon Menu Item",key:"6",className:"TestDisabledItem",icon:c.default.createElement(p.default,{className:h(["red-color",e.className])})})))}}]),n}(c.default.Component);O.childContextTypes=g,O.contextType=y.default;t.default=O},66633:function(e,t,n){n.r(t),t.default={arrange:"Arrange-module__arrange___hY0Ml",fill:"Arrange-module__fill___m88eq",fit:"Arrange-module__fit___tv8j-",center:"Arrange-module__center___9qfhG",bottom:"Arrange-module__bottom___8beod",stretch:"Arrange-module__stretch___eQF-k",default:"Arrange-module__default___z+O29"}},82347:function(e,t,n){n.r(t),t.default={"mimic-menu-container":"MenuItemCommon-module__mimic-menu-container___vxRKf","red-color":"MenuItemCommon-module__red-color___kgz2x","orion-fusion-theme":"MenuItemCommon-module__orion-fusion-theme___q04e2","clinical-lowlight-theme":"MenuItemCommon-module__clinical-lowlight-theme___iB4N8"}},78490:function(e,t,n){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.AlignmentTypes=void 0;var l=c(n(67294)),a=c(n(45697)),i=c(n(47166)),u=c(n(66633)),o=["fitStart","fill","fitEnd","align","alignFitStart","alignFill","alignFitEnd","fitStartAttributes","fillAttributes","fitEndAttributes"];function c(e){return e&&e.__esModule?e:{default:e}}function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f.apply(this,arguments)}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){m(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var l=n.call(e,t||"default");if("object"!==r(l))return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===r(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}t.AlignmentTypes={CENTER:"center",BOTTOM:"bottom",STRETCH:"stretch"};var p=i.default.bind(u.default),y={fitStart:a.default.element,fill:a.default.element.isRequired,fitEnd:a.default.element,align:a.default.oneOf(["center","bottom","stretch"]),alignFitStart:a.default.oneOf(["center","bottom","stretch"]),alignFitEnd:a.default.oneOf(["center","bottom","stretch"]),alignFill:a.default.oneOf(["center","bottom","stretch"]),fitStartAttributes:a.default.object,fillAttributes:a.default.object,fitEndAttributes:a.default.object},_=function(e){var t=e.fitStart,n=e.fill,r=e.fitEnd,a=e.align,i=e.alignFitStart,u=e.alignFill,c=e.alignFitEnd,s=e.fitStartAttributes,m=e.fillAttributes,y=e.fitEndAttributes,_=b(e,o),v=d({},s),h=d({},m),g=d({},y);return l.default.createElement("span",f({},_,{className:p("arrange",_.className)}),l.default.createElement("span",f({},v,{className:p("fit",a||i,v.className,"fit-block")}),t),l.default.createElement("span",f({},h,{className:p("fill",a||u,h.className,"fill-block")}),n),l.default.createElement("span",f({},g,{className:p("fit",a||c,g.className)}),r))};_.propTypes=y;t.default=_},46379:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n(67294)),l=i(n(99139)),a=n(25387);function i(e){return e&&e.__esModule?e:{default:e}}function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u.apply(this,arguments)}var o=function(e){var t=u({},e);return r.default.createElement(a.FormattedMessage,{id:"Terra.icon.IconConsultInstructionsForUse.title"},(function(e){return r.default.createElement("span",{"aria-label":e,title:e},r.default.createElement(l.default,t,r.default.createElement("path",{d:"M42.746 9c-2.28 0-4.508-.85-6.405-2.115a10.165 10.165 0 0 0-5.646-1.71c-2.205 0-4.404.714-6.233 2.131L24 7.663l-.462-.357a10.17 10.17 0 0 0-6.233-2.131c-1.964 0-3.932.567-5.646 1.71C9.762 8.15 7.534 9 5.254 9H0v34h5.254c2.28 0 4.508-.85 6.405-2.115a10.163 10.163 0 0 1 5.646-1.71c1.826 0 3.646.498 5.257 1.471.142.548.626.916 1.159.916h.556c.534 0 1.017-.368 1.159-.916a10.172 10.172 0 0 1 5.257-1.471c1.964 0 3.932.567 5.646 1.71C38.238 42.15 40.466 43 42.746 43H48V9h-5.254zM9.995 38.389C8.893 39.124 7.175 40 5.254 40H3V12h2.254c2.709 0 5.5-.906 8.069-2.619a7.157 7.157 0 0 1 3.983-1.206c1.583 0 3.144.534 4.396 1.503l.798.618v26.95a13.237 13.237 0 0 0-5.195-1.07 13.13 13.13 0 0 0-7.31 2.213zM45 40h-2.254c-1.921 0-3.639-.876-4.741-1.611a13.138 13.138 0 0 0-7.31-2.214c-1.788 0-3.56.371-5.195 1.07v-26.95l.798-.618a7.219 7.219 0 0 1 4.397-1.503c1.422 0 2.799.417 3.982 1.206 2.57 1.713 5.36 2.619 8.069 2.619H45V40zm-8-11h2v2h-7v-2h2v-6h-2v-2h5v8zm-4-12a2 2 0 1 1 3.999-.001A2 2 0 0 1 33 17z"})))}))};o.displayName="IconConsultInstructionsForUse",o.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"};t.default=o},31532:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(67294)),l=a(n(99139));function a(e){return e&&e.__esModule?e:{default:e}}function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}var u=function(e){var t=i({},e);return r.default.createElement(l.default,t,r.default.createElement("path",{d:"m46 15.1-2.7-5.5-16.5 9.6V0h-5.5v19.2L4.8 9.6l-2.7 5.5L17.8 24 2 32.9l2.7 5.5 16.5-9.6V48h5.5V28.8l16.5 9.6 2.7-5.5L30.2 24 46 15.1z"}))};u.displayName="IconRequired",u.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"};t.default=u}}]);