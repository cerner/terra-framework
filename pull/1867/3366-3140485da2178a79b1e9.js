"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[3366],{85902:function(e,t,a){var n=a(64836),l=a(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(27424)),d=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=l(e)&&"function"!=typeof e)return{default:e};var a=p(t);if(a&&a.has(e))return a.get(e);var n={__proto__:null},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var d in e)if("default"!==d&&Object.prototype.hasOwnProperty.call(e,d)){var u=r?Object.getOwnPropertyDescriptor(e,d):null;u&&(u.get||u.set)?Object.defineProperty(n,d,u):n[d]=e[d]}return n.default=e,a&&a.set(e,n),n}(a(67294)),u=n(a(47166)),o=n(a(56468)),c=n(a(50826)),i=n(a(76414)),s=n(a(66815)),f=n(a(82967));function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(p=function(e){return e?a:t})(e)}var b=u.default.bind(f.default),v=-1;t.default=function(){var e=[],t=(0,d.useState)(e),a=(0,r.default)(t,2),n=a[0],l=a[1],u=(0,d.useState)(),f=(0,r.default)(u,2),p=f[0],_=f[1];e.push({label:"Self Registration",key:"AddLabelTab",content:"Self Registration"}),e.push({label:"Find A Doctor",icon:d.default.createElement(c.default,null),isIconOnly:!0,key:"AddIconTab",content:"Find A Doctor"}),e.push({label:"View Specialities",customDisplay:d.default.createElement("div",{className:b("custom-display")},"View Specialities"),key:"AddCustomTab",content:"View Specialities"}),e.push({label:"Disabled Tab",key:"AddDisabledTab",icon:d.default.createElement(o.default,null),isDisabled:!0}),e.push({label:"Billing, Insurance & Payment",key:"AddlongLabel",content:"Billing, Insurance & Payment"}),e.push({label:"Lab Medicine",key:"AddlastTab",content:"Lab Medicine"});return d.default.createElement("div",{className:b("content-wrapper-default"),id:"tabs-container"},d.default.createElement(i.default,{onChange:function(e,t){t!==p&&_(t)},setFocusOnContent:!0,activeKey:p,onSelectAddButton:function(){v+=1;var e=n;e.push({label:"Added New Tab_".concat(v),isIconOnly:!1,key:"AddNewTabs_".concat(v),content:"Added New Tab_".concat(v),isActive:!0}),_("AddNewTabs_".concat(v)),l(e)},ariaLabelAddTab:"Add Tab"},n.map((function(e){return d.default.createElement(i.default.Pane,{label:e.label,isIconOnly:e.isIconOnly,customDisplay:e.customDisplay,isDisabled:e.isDisabled,icon:e.icon,key:e.key,id:e.key},d.default.createElement(s.default,{label:e.content}))}))))}},66815:function(e,t,a){var n=a(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(67294)),r=n(a(47166)),d=n(a(45697)),u=n(a(82967)),o=r.default.bind(u.default),c={isLabelHidden:d.default.bool,label:d.default.string,children:d.default.node,id:d.default.string},i=function(e){var t=e.isLabelHidden,a=e.label,n=e.id,r=e.children;return l.default.createElement("div",{className:o("tab-content"),id:n},t?l.default.createElement("h3",{className:"truncationHeader"},a):null,r||l.default.createElement("div",null,"Content for"," ",l.default.createElement("i",null,a)))};i.propTypes=c;t.default=i},82967:function(e,t,a){a.r(t),t.default={"content-wrapper-default":"TabsTemplate-module__content-wrapper-default___8tJaQ","content-wrapper-600":"TabsTemplate-module__content-wrapper-600___FFMST","content-wrapper-400":"TabsTemplate-module__content-wrapper-400___+UWwG","tab-content":"TabsTemplate-module__tab-content___oadEx","content-container-vertical":"TabsTemplate-module__content-container-vertical___LIDez"}},30217:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(67294)),l=r(a(99139));function r(e){return e&&e.__esModule?e:{default:e}}function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},d.apply(this,arguments)}var u=function(e){var t=d({},e);return n.default.createElement(l.default,t,n.default.createElement("path",{d:"M48 21H27V0h-6v21H0v6h21v21h6V27h21z"}))};u.displayName="IconAdd",u.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};t.default=u},56468:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(67294)),l=r(a(99139));function r(e){return e&&e.__esModule?e:{default:e}}function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},d.apply(this,arguments)}var u=function(e){var t=d({},e);return n.default.createElement(l.default,t,n.default.createElement("path",{d:"M46.1 12H37V4c0-1.1-.9-2-2-2H13c-1.1 0-2 .9-2 2v8H1.9c-1 0-1.9.8-1.9 1.9v29.3c0 1 .8 1.9 1.9 1.9h44.3c1 0 1.9-.8 1.9-1.9V13.9c-.1-1.1-.9-1.9-2-1.9zM14 7h20v5H14V7zm21 20.6V31h-9v9h-4v-9h-9v-4h9v-9h4v9h9v.6z"}))};u.displayName="IconBriefcase",u.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"};t.default=u}}]);