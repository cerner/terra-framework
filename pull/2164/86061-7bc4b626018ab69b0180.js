"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[86061],{8935:function(e,t,a){var n=a(24994),l=a(73738);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var d=n(a(85715)),r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=l(e)&&"function"!=typeof e)return{default:e};var a=p(t);if(a&&a.has(e))return a.get(e);var n={__proto__:null},d=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&{}.hasOwnProperty.call(e,r)){var u=d?Object.getOwnPropertyDescriptor(e,r):null;u&&(u.get||u.set)?Object.defineProperty(n,r,u):n[r]=e[r]}return n.default=e,a&&a.set(e,n),n}(a(96540)),u=n(a(67967)),c=n(a(57588)),o=n(a(98814)),i=n(a(11918)),s=n(a(74240)),f=n(a(10925));function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(p=function(e){return e?a:t})(e)}var b=u.default.bind(f.default),_=-1;t.default=function(){var e=[],t=(0,r.useState)(e),a=(0,d.default)(t,2),n=a[0],l=a[1],u=(0,r.useState)(),f=(0,d.default)(u,2),p=f[0],v=f[1];e.push({label:"Self Registration",key:"AddLabelTab",content:"Self Registration"}),e.push({label:"Find A Doctor",icon:r.default.createElement(o.default,null),isIconOnly:!0,key:"AddIconTab",content:"Find A Doctor"}),e.push({label:"View Specialities",customDisplay:r.default.createElement("div",{className:b("custom-display")},"View Specialities"),key:"AddCustomTab",content:"View Specialities"}),e.push({label:"Disabled Tab",key:"AddDisabledTab",icon:r.default.createElement(c.default,null),isDisabled:!0}),e.push({label:"Billing, Insurance & Payment",key:"AddlongLabel",content:"Billing, Insurance & Payment"}),e.push({label:"Lab Medicine",key:"AddlastTab",content:"Lab Medicine"});return r.default.createElement("div",{className:b("content-wrapper-default"),id:"tabs-container"},r.default.createElement(i.default,{onChange:function(e,t){t!==p&&v(t)},setFocusOnContent:!0,activeKey:p,onSelectAddButton:function(){_+=1;var e=n;e.push({label:"Added New Tab_".concat(_),isIconOnly:!1,key:"AddNewTabs_".concat(_),content:"Added New Tab_".concat(_),isActive:!0}),v("AddNewTabs_".concat(_)),l(e)},ariaLabelAddTab:"Add Tab"},n.map((function(e){return r.default.createElement(i.default.Pane,{label:e.label,isIconOnly:e.isIconOnly,customDisplay:e.customDisplay,isDisabled:e.isDisabled,icon:e.icon,key:e.key,id:e.key},r.default.createElement(s.default,{label:e.content}))}))))}},74240:function(e,t,a){var n=a(24994);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(96540)),d=n(a(67967)),r=n(a(5556)),u=n(a(10925)),c=d.default.bind(u.default),o={isLabelHidden:r.default.bool,label:r.default.string,children:r.default.node,id:r.default.string},i=function(e){var t=e.isLabelHidden,a=e.label,n=e.id,d=e.children;return l.default.createElement("div",{className:c("tab-content"),id:n},t?l.default.createElement("h3",{className:"truncationHeader"},a):null,d||l.default.createElement("div",null,"Content for"," ",l.default.createElement("i",null,a)))};i.propTypes=o;t.default=i},10925:function(e,t,a){a.r(t),t.default={"content-wrapper-default":"TabsTemplate-module__content-wrapper-default___8tJaQ","content-wrapper-600":"TabsTemplate-module__content-wrapper-600___FFMST","content-wrapper-400":"TabsTemplate-module__content-wrapper-400___+UWwG","tab-content":"TabsTemplate-module__tab-content___oadEx","content-container-vertical":"TabsTemplate-module__content-container-vertical___LIDez","custom-display":"TabsTemplate-module__custom-display___7q4FS"}},55767:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=d(a(96540)),l=d(a(25365));function d(e){return e&&e.__esModule?e:{default:e}}var r=function(e){var t=Object.assign({},e);return n.default.createElement(l.default,t,n.default.createElement("path",{d:"M48 21H27V0h-6v21H0v6h21v21h6V27h21z"}))};r.displayName="IconAdd",r.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};t.default=r},57588:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=d(a(96540)),l=d(a(25365));function d(e){return e&&e.__esModule?e:{default:e}}var r=function(e){var t=Object.assign({},e);return n.default.createElement(l.default,t,n.default.createElement("path",{d:"M46.1 12H37V4c0-1.1-.9-2-2-2H13c-1.1 0-2 .9-2 2v8H1.9c-1 0-1.9.8-1.9 1.9v29.3c0 1 .8 1.9 1.9 1.9h44.3c1 0 1.9-.8 1.9-1.9V13.9c-.1-1.1-.9-1.9-2-1.9zM14 7h20v5H14V7zm21 20.6V31h-9v9h-4v-9h-9v-4h9v-9h4v9h9v.6z"}))};r.displayName="IconBriefcase",r.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"};t.default=r}}]);