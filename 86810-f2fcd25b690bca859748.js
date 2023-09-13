"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[86810],{82091:function(e,t,a){var n=a(64836),l=a(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(861)),c=n(a(27424)),u=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==l(e)&&"function"!=typeof e)return{default:e};var a=b(t);if(a&&a.has(e))return a.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in e)if("default"!==c&&Object.prototype.hasOwnProperty.call(e,c)){var u=r?Object.getOwnPropertyDescriptor(e,c):null;u&&(u.get||u.set)?Object.defineProperty(n,c,u):n[c]=e[c]}n.default=e,a&&a.set(e,n);return n}(a(67294)),d=n(a(47166)),o=n(a(68766)),i=n(a(50826)),f=n(a(76414)),s=n(a(66815)),p=n(a(82967));function b(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(b=function(e){return e?a:t})(e)}var v=d.default.bind(p.default),m=-1;var y=function(){var e=[],t=(0,u.useState)(e),a=(0,c.default)(t,2),n=a[0],l=a[1],d=(0,u.useState)(),p=(0,c.default)(d,2),b=p[0],y=p[1];return e.push({label:"Patient Information",key:"AddcloseLabelTab",content:"Patient Information"}),e.push({label:"Add Patient",icon:u.default.createElement(o.default,null),isIconOnly:!0,key:"AddcloseIconTab",content:"Add Patient"}),e.push({label:"TPA & Insurance",customDisplay:u.default.createElement("div",{className:v("custom-display")},"TPA & Insurance"),key:"AddcloseCustomTab",content:"TPA & Insurance"}),e.push({label:"Disabled Tab",key:"AddcloseDisabledTab",icon:u.default.createElement(i.default,null),isDisabled:!0}),e.push({label:"List of Out-Patient Details Department Wise",key:"AddcloselongLabel",content:"List of Out-Patient Details Department Wise"}),e.push({label:"Ambulance Service",key:"AddcloselastTab",content:"Ambulance Service"}),u.default.createElement("div",{className:v("content-wrapper-default"),id:"tabs-container"},u.default.createElement(f.default,{setFocusOnContent:!0,activeKey:b,isClosable:!0,onSelectAddButton:function(){m+=1;var e=n;e.push({label:"Added New Tab_".concat(m),isIconOnly:!1,key:"AddTabandCloseTab_".concat(m),content:"Added New Tab_".concat(m),isActive:!0}),y("AddTabandCloseTab_".concat(m)),l(e)},ariaLabelAddTab:"Add Tab",onTabClose:function(e,t){var a=(0,r.default)(n),c=a.findIndex((function(e){return e.key===t}));-1!==c&&(a.splice(c,1),l(a))}},n.map((function(e){return u.default.createElement(f.default.Pane,{label:e.label,isIconOnly:e.isIconOnly,customDisplay:e.customDisplay,isDisabled:e.isDisabled,icon:e.icon,key:e.key,id:e.key},u.default.createElement(s.default,{label:e.content}))}))))};t.default=y},66815:function(e,t,a){var n=a(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(67294)),r=n(a(47166)),c=n(a(45697)),u=n(a(82967)),d=r.default.bind(u.default),o={isLabelHidden:c.default.bool,label:c.default.string,children:c.default.node,id:c.default.string},i=function(e){var t=e.isLabelHidden,a=e.label,n=e.id,r=e.children;return l.default.createElement("div",{className:d("tab-content"),id:n},t?l.default.createElement("h3",{className:"truncationHeader"},a):null,r||l.default.createElement("div",null,"Content for"," ",l.default.createElement("i",null,a)))};i.propTypes=o;var f=i;t.default=f},82967:function(e,t,a){a.r(t),t.default={"content-wrapper-default":"TabsTemplate-module__content-wrapper-default___8tJaQ","content-wrapper-600":"TabsTemplate-module__content-wrapper-600___FFMST","content-wrapper-400":"TabsTemplate-module__content-wrapper-400___+UWwG","tab-content":"TabsTemplate-module__tab-content___oadEx"}},30217:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(67294)),l=r(a(99139));function r(e){return e&&e.__esModule?e:{default:e}}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},c.apply(this,arguments)}var u=function(e){var t=c({},e);return n.default.createElement(l.default,t,n.default.createElement("path",{d:"M48 21H27V0h-6v21H0v6h21v21h6V27h21z"}))};u.displayName="IconAdd",u.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};var d=u;t.default=d},68766:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(67294)),l=r(a(99139));function r(e){return e&&e.__esModule?e:{default:e}}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},c.apply(this,arguments)}var u=function(e){var t=c({},e);return n.default.createElement(l.default,t,n.default.createElement("path",{d:"M48 34H38V24h-4v10H24v4h10v10h4V38h10zM19.7-.1A8.7 8.7 0 1 1 11 8.6a8.71 8.71 0 0 1 8.7-8.7zM22 32h10v-7.4a12.84 12.84 0 0 0-10.2-5h-4.2A12.93 12.93 0 0 0 4.7 32.5v4.4H22z"}))};u.displayName="IconAddPerson",u.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};var d=u;t.default=d},66272:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(67294)),l=r(a(99139));function r(e){return e&&e.__esModule?e:{default:e}}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},c.apply(this,arguments)}var u=function(e){var t=c({},e);return n.default.createElement(l.default,t,n.default.createElement("g",{"data-name":"48"},n.default.createElement("circle",{cx:"15",cy:"4.632",r:"3.5"}),n.default.createElement("circle",{cx:"15",cy:"17.443",r:"3.5"}),n.default.createElement("circle",{cx:"15",cy:"30.254",r:"3.5"}),n.default.createElement("circle",{cx:"15",cy:"43.066",r:"3.5"}),n.default.createElement("circle",{cx:"33",cy:"4.632",r:"3.5"}),n.default.createElement("circle",{cx:"33",cy:"17.544",r:"3.5"}),n.default.createElement("circle",{cx:"33",cy:"30.456",r:"3.5"}),n.default.createElement("circle",{cx:"33",cy:"43.368",r:"3.5"})))};u.displayName="IconKnurling",u.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"};var d=u;t.default=d}}]);