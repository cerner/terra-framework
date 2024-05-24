"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[46010],{26376:function(t,e,r){var n=r(24994),l=r(73738);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(r(85715)),u=function(t,e){if(!e&&t&&t.__esModule)return t;if(null===t||"object"!=l(t)&&"function"!=typeof t)return{default:t};var r=f(e);if(r&&r.has(t))return r.get(t);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in t)if("default"!==u&&{}.hasOwnProperty.call(t,u)){var o=a?Object.getOwnPropertyDescriptor(t,u):null;o&&(o.get||o.set)?Object.defineProperty(n,u,o):n[u]=t[u]}return n.default=t,r&&r.set(t,n),n}(r(96540)),o=n(r(59944)),i=n(r(26714));function f(t){if("function"!=typeof WeakMap)return null;var e=new WeakMap,r=new WeakMap;return(f=function(t){return t?r:e})(t)}e.default=function(){var t=(0,u.useState)(!1),e=(0,a.default)(t,2),r=e[0],n=e[1];return u.default.createElement(i.default,{alwaysCollapsedMenuItems:[u.default.createElement(i.default.Item,{text:"Collapsed Button 1",key:"collapsedButton1"}),u.default.createElement(i.default.Item,{text:"Collapsed Button 2",key:"collapsedButton2"}),u.default.createElement(i.default.Item,{text:"Collapsed Button 3",key:"collapsedButton3"})]},u.default.createElement(i.default.Item,{text:"Button A",className:"ButtonA",key:"buttonA"}),u.default.createElement(i.default.Item,{text:"Button B",className:"ButtonB",key:"buttonB"}),u.default.createElement(i.default.Divider,{key:"Divider4"}),u.default.createElement("p",null,"Status:"," ",r?"Selected":"Unselected"),u.default.createElement(i.default.Item,{id:"data-menu-button",text:"Select Button 1",className:"Button1",key:"button1",isSelectable:!0,isSelected:r,onClick:function(){return n(!r)}}),u.default.createElement(i.default.Item,{text:"Button 2",className:"Button2",key:"button2"}),u.default.createElement(i.default.Item,{icon:u.default.createElement(o.default,null),text:"Button3",className:"IconOnly",key:"button3",isIconOnly:!0}))}},92420:function(t,e,r){r.r(e),e.default={arrange:"Arrange-module__arrange___hY0Ml",fill:"Arrange-module__fill___m88eq",fit:"Arrange-module__fit___tv8j-",center:"Arrange-module__center___9qfhG",bottom:"Arrange-module__bottom___8beod",stretch:"Arrange-module__stretch___eQF-k",default:"Arrange-module__default___z+O29"}},39496:function(t,e,r){function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.AlignmentTypes=void 0;var l=f(r(96540)),a=f(r(5556)),u=f(r(67967)),o=f(r(92420)),i=["fitStart","fill","fitEnd","align","alignFitStart","alignFill","alignFitEnd","fitStartAttributes","fillAttributes","fitEndAttributes"];function f(t){return t&&t.__esModule?t:{default:t}}function c(){return c=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},c.apply(this,arguments)}function s(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function d(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(Object(r),!0).forEach((function(e){m(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function m(t,e,r){var l;return l=function(t,e){if("object"!=n(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var l=r.call(t,e||"default");if("object"!=n(l))return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(e,"string"),(e="symbol"==n(l)?l:l+"")in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function b(t,e){if(null==t)return{};var r,n,l=function(t,e){if(null==t)return{};var r={};for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)){if(e.indexOf(n)>=0)continue;r[n]=t[n]}return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(l[r]=t[r])}return l}e.AlignmentTypes={CENTER:"center",BOTTOM:"bottom",STRETCH:"stretch"};var p=u.default.bind(o.default),y={fitStart:a.default.element,fill:a.default.element.isRequired,fitEnd:a.default.element,align:a.default.oneOf(["center","bottom","stretch"]),alignFitStart:a.default.oneOf(["center","bottom","stretch"]),alignFitEnd:a.default.oneOf(["center","bottom","stretch"]),alignFill:a.default.oneOf(["center","bottom","stretch"]),fitStartAttributes:a.default.object,fillAttributes:a.default.object,fitEndAttributes:a.default.object},O=function(t){var e=t.fitStart,r=t.fill,n=t.fitEnd,a=t.align,u=t.alignFitStart,o=t.alignFill,f=t.alignFitEnd,s=t.fitStartAttributes,m=t.fillAttributes,y=t.fitEndAttributes,O=b(t,i),_=d({},s),g=d({},m),v=d({},y);return l.default.createElement("span",c({},O,{className:p("arrange",O.className)}),l.default.createElement("span",c({},_,{className:p("fit",a||u,_.className,"fit-block")}),e),l.default.createElement("span",c({},g,{className:p("fill",a||o,g.className,"fill-block")}),r),l.default.createElement("span",c({},v,{className:p("fit",a||f,v.className)}),n))};O.propTypes=y;e.default=O}}]);