"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[79433],{79433:function(e,t,a){var n=a(64836),l=a(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(861)),u=n(a(27424)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==l(e)&&"function"!=typeof e)return{default:e};var a=b(t);if(a&&a.has(e))return a.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var o=r?Object.getOwnPropertyDescriptor(e,u):null;o&&(o.get||o.set)?Object.defineProperty(n,u,o):n[u]=e[u]}n.default=e,a&&a.set(e,n);return n}(a(67294)),i=n(a(47166)),s=n(a(56468)),c=n(a(50826)),d=n(a(76414)),f=n(a(66815)),p=n(a(82967));function b(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(b=function(e){return e?a:t})(e)}var m=i.default.bind(p.default),v=function(){var e=[],t=(0,o.useState)(e),a=(0,u.default)(t,2),n=a[0],l=a[1],i=(0,o.useState)(),p=(0,u.default)(i,1)[0];e.push({label:"Doctors",key:"CloseLabelTab",content:"Doctor details"}),e.push({label:"Pharmacy",icon:o.default.createElement(s.default,null),isIconOnly:!0,key:"CloseIconTab",content:"Pharmacy details"}),e.push({label:"Customized Tab",customDisplay:o.default.createElement("div",{className:m("custom-display")},"Customized Tab"),key:"CloseCustomTab",content:"Custom display"}),e.push({label:"Disabled Tab",key:"CloseDisabledTab",icon:o.default.createElement(c.default,null),isDisabled:!0}),e.push({label:"List of In-Patient Details Department Wise",key:"CloselongLabel",content:"List for In-Patient Details Department Wise"}),e.push({label:"Appointments",key:"CloselastTab",content:"Appointments"});return o.default.createElement("div",{className:m("content-wrapper-default"),id:"tabs-container"},o.default.createElement(d.default,{activeKey:p,isClosable:!0,ariaLabelAddTab:"Add Tab",onTabClose:function(e){var t=(0,r.default)(n),a=t.findIndex((function(t){return t.key===e}));-1!==a&&(t.splice(a,1),l(t))}},n.map((function(e){return o.default.createElement(d.default.Pane,{label:e.label,isIconOnly:e.isIconOnly,customDisplay:e.customDisplay,isDisabled:e.isDisabled,icon:e.icon,key:e.key,id:e.key},o.default.createElement(f.default,{label:e.content}))}))))};t.default=v},66815:function(e,t,a){var n=a(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(67294)),r=n(a(47166)),u=n(a(45697)),o=n(a(82967)),i=r.default.bind(o.default),s={isLabelHidden:u.default.bool,label:u.default.string,id:u.default.string},c=function(e){var t=e.isLabelHidden,a=e.label,n=e.id;return l.default.createElement("div",{className:i("tab-content"),id:n},t?l.default.createElement("h3",{className:"truncationHeader"},a):null,"Content for"," ",l.default.createElement("i",null,a))};c.propTypes=s;var d=c;t.default=d},82967:function(e,t,a){a.r(t),t.default={"content-wrapper-default":"TabsTemplate-module__content-wrapper-default___8tJaQ","content-wrapper-600":"TabsTemplate-module__content-wrapper-600___FFMST","content-wrapper-400":"TabsTemplate-module__content-wrapper-400___+UWwG","tab-content":"TabsTemplate-module__tab-content___oadEx"}},56468:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(67294)),l=r(a(99139));function r(e){return e&&e.__esModule?e:{default:e}}function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},u.apply(this,arguments)}var o=function(e){var t=u({},e);return n.default.createElement(l.default,t,n.default.createElement("path",{d:"M46.1 12H37V4c0-1.1-.9-2-2-2H13c-1.1 0-2 .9-2 2v8H1.9c-1 0-1.9.8-1.9 1.9v29.3c0 1 .8 1.9 1.9 1.9h44.3c1 0 1.9-.8 1.9-1.9V13.9c-.1-1.1-.9-1.9-2-1.9zM14 7h20v5H14V7zm21 20.6V31h-9v9h-4v-9h-9v-4h9v-9h4v9h9v.6z"}))};o.displayName="IconBriefcase",o.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"};var i=o;t.default=i}}]);