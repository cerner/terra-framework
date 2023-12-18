"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[66978],{79433:function(e,t,a){var n=a(64836),l=a(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(861)),o=n(a(27424)),u=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=l(e)&&"function"!=typeof e)return{default:e};var a=b(t);if(a&&a.has(e))return a.get(e);var n={__proto__:null},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=r?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(n,o,u):n[o]=e[o]}return n.default=e,a&&a.set(e,n),n}(a(67294)),i=n(a(47166)),d=n(a(56468)),c=n(a(50826)),s=n(a(76414)),f=n(a(66815)),p=n(a(82967));function b(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(b=function(e){return e?a:t})(e)}var m=i.default.bind(p.default);t.default=function(){var e=[],t=(0,u.useState)(e),a=(0,o.default)(t,2),n=a[0],l=a[1];e.push({label:"Doctors",key:"CloseLabelTab",content:"Doctor details"}),e.push({label:"Pharmacy",icon:u.default.createElement(d.default,null),isIconOnly:!0,key:"CloseIconTab",content:"Pharmacy details"}),e.push({label:"Cutomised Test Tab",customDisplay:u.default.createElement("div",{className:m("custom-display")},"Customized Tab"),key:"CloseCustomTab",content:"Custom display"}),e.push({label:"Disabled Tab",key:"CloseDisabledTab",icon:u.default.createElement(c.default,null),isDisabled:!0}),e.push({label:"List of In-Patient Details Department Wise",key:"CloselongLabel",content:"List for In-Patient Details Department Wise"}),e.push({label:"Appointments",key:"CloselastTab",content:"Appointments"});return u.default.createElement("div",{className:m("content-wrapper-default"),id:"tabs-container"},u.default.createElement(s.default,{setFocusOnContent:!0,isClosable:!0,ariaLabelAddTab:"Add Tab",onTabClose:function(e,t){var a=(0,r.default)(n),o=a.findIndex((function(e){return e.key===t}));-1!==o&&(a.splice(o,1),l(a))}},n.map((function(e){return u.default.createElement(s.default.Pane,{label:e.label,isIconOnly:e.isIconOnly,customDisplay:e.customDisplay,isDisabled:e.isDisabled,icon:e.icon,key:e.key,id:e.key},u.default.createElement(f.default,{label:e.content}))}))))}},66815:function(e,t,a){var n=a(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(67294)),r=n(a(47166)),o=n(a(45697)),u=n(a(82967)),i=r.default.bind(u.default),d={isLabelHidden:o.default.bool,label:o.default.string,children:o.default.node,id:o.default.string},c=function(e){var t=e.isLabelHidden,a=e.label,n=e.id,r=e.children;return l.default.createElement("div",{className:i("tab-content"),id:n},t?l.default.createElement("h3",{className:"truncationHeader"},a):null,r||l.default.createElement("div",null,"Content for"," ",l.default.createElement("i",null,a)))};c.propTypes=d;t.default=c},82967:function(e,t,a){a.r(t),t.default={"content-wrapper-default":"TabsTemplate-module__content-wrapper-default___8tJaQ","content-wrapper-600":"TabsTemplate-module__content-wrapper-600___FFMST","content-wrapper-400":"TabsTemplate-module__content-wrapper-400___+UWwG","tab-content":"TabsTemplate-module__tab-content___oadEx","content-container-vertical":"TabsTemplate-module__content-container-vertical___LIDez","custom-display":"TabsTemplate-module__custom-display___7q4FS"}},30217:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(67294)),l=r(a(99139));function r(e){return e&&e.__esModule?e:{default:e}}function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},o.apply(this,arguments)}var u=function(e){var t=o({},e);return n.default.createElement(l.default,t,n.default.createElement("path",{d:"M48 21H27V0h-6v21H0v6h21v21h6V27h21z"}))};u.displayName="IconAdd",u.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};t.default=u},56468:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(67294)),l=r(a(99139));function r(e){return e&&e.__esModule?e:{default:e}}function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},o.apply(this,arguments)}var u=function(e){var t=o({},e);return n.default.createElement(l.default,t,n.default.createElement("path",{d:"M46.1 12H37V4c0-1.1-.9-2-2-2H13c-1.1 0-2 .9-2 2v8H1.9c-1 0-1.9.8-1.9 1.9v29.3c0 1 .8 1.9 1.9 1.9h44.3c1 0 1.9-.8 1.9-1.9V13.9c-.1-1.1-.9-1.9-2-1.9zM14 7h20v5H14V7zm21 20.6V31h-9v9h-4v-9h-9v-4h9v-9h4v9h9v.6z"}))};u.displayName="IconBriefcase",u.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"};t.default=u}}]);