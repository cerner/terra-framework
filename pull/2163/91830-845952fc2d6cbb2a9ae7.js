"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[91830,32227,90911,13292,46149,68530],{55713:function(e,t,a){var n=a(24994);t.A=void 0;var l=n(a(96540)),r=n(a(5556)),o=n(a(67967)),u=n(a(25642)),c=o.default.bind(u.default),d={name:r.default.string.isRequired,src:r.default.string,url:r.default.string,version:r.default.string.isRequired},i=function(e){var t=e.src,a=e.name,n=e.url,r=e.version,o=l.default.createElement("a",{className:c("badge"),href:n||"https://www.npmjs.org/package/".concat(a,"/v/").concat(r)},l.default.createElement("span",{className:c("badge-name")},n?"package":"npm"),l.default.createElement("span",{className:c("badge-version")},"v".concat(r))),u=t?l.default.createElement("a",{className:c("badge"),href:t},l.default.createElement("span",{className:c("badge-name")},"github"),l.default.createElement("span",{className:c("badge-version")},"source")):void 0;return l.default.createElement("div",{className:c("badge-container")},o,u)};i.propTypes=d;t.A=i},201:function(e,t,a){var n=a(24994),l=a(73738);t.A=void 0;var r=n(a(85715)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=l(e)&&"function"!=typeof e)return{default:e};var a=_(t);if(a&&a.has(e))return a.get(e);var n={__proto__:null},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&{}.hasOwnProperty.call(e,o)){var u=r?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(n,o,u):n[o]=e[o]}return n.default=e,a&&a.set(e,n),n}(a(96540)),u=n(a(5556)),c=n(a(67967)),d=a(92912),i=n(a(49558)),s=n(a(53665)),f=a(25966),m=n(a(89986));function _(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(_=function(e){return e?a:t})(e)}var p=c.default.bind(m.default),v={example:u.default.element,exampleSrc:u.default.element,exampleCssSrc:u.default.element,title:u.default.string,description:u.default.node,isExpanded:u.default.bool},b=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},h=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},g=function(e){var t=e.example,a=e.exampleSrc,n=e.exampleCssSrc,l=e.title,u=e.description,c=e.isExpanded,m=(0,o.useState)(c),_=(0,r.default)(m,2),v=_[0],g=_[1],y=(0,o.useState)(!1),E=(0,r.default)(y,2),N=E[0],w=E[1],O=o.default.useContext(d.ThemeContext),x=void 0!==n,j=function(){w(!N),v&&g(!v)},P=function(){g(!v),N&&w(!N)},T=function(e,t){e.nativeEvent.keyCode!==f.KEY_SPACE&&e.nativeEvent.keyCode!==f.KEY_RETURN||(e.preventDefault(),t())};return o.default.createElement("div",{className:p("template",O.className)},o.default.createElement("div",{className:p("header")},l&&o.default.createElement("h2",{className:p("title")},l)),o.default.createElement("div",{className:p("content")},u&&o.default.createElement("div",{className:p("description")},u),t),o.default.createElement("div",{className:p("footer")},a?o.default.createElement("div",{className:p("button-container")},x&&o.default.createElement("button",{type:"button",className:p("css-toggle","item",{"is-selected":N}),onClick:j,onKeyDown:function(e){return T(e,j)},onBlur:b,onMouseDown:h,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(i.default,{className:p("chevron")}),o.default.createElement("span",null,"CSS"),o.default.createElement(s.default,{className:p("chevron")})),o.default.createElement("button",{type:"button",className:p("code-toggle","item",{"is-selected":v}),onClick:P,onKeyDown:function(e){return T(e,P)},onBlur:b,onMouseDown:h,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(i.default,{className:p("chevron")}),o.default.createElement("span",null,"Code"),o.default.createElement(s.default,{className:p("chevron")}))):null,o.default.createElement("div",null,N&&o.default.createElement("div",{className:p("css")},n),v&&o.default.createElement("div",{className:p("code")},a))))};g.propTypes=v,g.defaultProps={isExpanded:!1};t.A=g},86159:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=d(a(96540)),l=d(a(5556)),r=d(a(67967)),o=d(a(23695)),u=d(a(36605)),c=["children"];function d(e){return e&&e.__esModule?e:{default:e}}function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},i.apply(this,arguments)}function s(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var f=r.default.bind(u.default),m=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},_=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},p={children:l.default.string},v=function(e){var t=e.children,a=s(e,c),l=n.default.useContext(o.default),u=(0,r.default)(f(["button",l.className]),a.className);return n.default.createElement("button",i({},a,{type:"button",className:u,onBlur:m,onMouseDown:_,"data-focus-styles-enabled":!0}),t)};v.propTypes=p;t.default=v},20999:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=c(a(96540)),l=c(a(5556)),r=c(a(67967)),o=c(a(23695)),u=c(a(17269));function c(e){return e&&e.__esModule?e:{default:e}}var d=r.default.bind(u.default),i={ariaLevel:l.default.oneOf(["2","3","4","5","6"]),children:l.default.node,variant:l.default.oneOf(["ux-recommendation","caution","deprecation","maintenance","important","not-supported"])},s=function(e){var t=e.ariaLevel,a=e.variant,l=e.children,r=n.default.useContext(o.default);return n.default.createElement("div",{className:d("notice",a,r.className)},n.default.createElement("div",{className:d("accessory"),"aria-hidden":"true",focusable:"false"}),n.default.createElement("div",{role:"heading",className:d("title"),"aria-level":t},n.default.createElement("span",null,function(e){return"ux-recommendation"===e?"UX Recommendation":"caution"===e?"Caution":"deprecation"===e?"Deprecation Notice":"maintenance"===e?"In Maintenance":"important"===e?"Important":"not-supported"===e?"Hazards for Incorrect Usage":"error"}(a))),n.default.createElement("div",{className:d("children")},function(e){return"not-supported"===e?n.default.createElement(n.default.Fragment,null,n.default.createElement("p",{className:d("paragraph")},"This component was designed and tested according to the documented implementation."),n.default.createElement("p",{className:d("paragraph")},"Using the component incorrectly:",n.default.createElement("ul",{className:d("list")},n.default.createElement("li",null,"will likely result in improper composition and create accessibility issues"),n.default.createElement("li",null,"may cause erratic or broken behaviors and styles"),n.default.createElement("li",null,n.default.createElement("strong",null,"will not be supported "),"or enhanced to allow for incorrect use")))):null}(a),n.default.Children.map(l,(function(e){return"string"==typeof e?n.default.createElement("p",null,e):e}))))};s.propTypes=i,s.defaultProps={ariaLevel:"2",variant:"important"};t.default=s},18778:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(a(96540)),l=i(a(5556)),r=i(a(46942)),o=i(a(67967)),u=i(a(23695)),c=i(a(16576)),d=["title"];function i(e){return e&&e.__esModule?e:{default:e}}function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},s.apply(this,arguments)}function f(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var m=o.default.bind(c.default),_={title:l.default.string},p=function(e){var t=e.title,a=f(e,d),l=n.default.useContext(u.default),o=(0,r.default)(m(["placeholder",l.className]),a.className),c=m(["inner"]);return n.default.createElement("div",s({},a,{className:o}),n.default.createElement("div",{className:c},n.default.createElement("p",{className:m("title")},t)))};p.propTypes=_,p.defaultProps={title:""};t.default=p},74647:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Button",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"Notice",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"Placeholder",{enumerable:!0,get:function(){return l.default}});var n=o(a(20999)),l=o(a(18778)),r=o(a(86159));function o(e){return e&&e.__esModule?e:{default:e}}},25642:function(e,t,a){a.r(t),t.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},89986:function(e,t,a){a.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},36605:function(e,t,a){a.r(t),t.default={"clinical-lowlight-theme":"Button-module__clinical-lowlight-theme___TyZWB","orion-fusion-theme":"Button-module__orion-fusion-theme___q-FcQ",button:"Button-module__button___QuCn2","is-active":"Button-module__is-active___Z8AuK"}},17269:function(e,t,a){a.r(t),t.default={"clinical-lowlight-theme":"Notice-module__clinical-lowlight-theme___aa5xV","orion-fusion-theme":"Notice-module__orion-fusion-theme___QAE-T",notice:"Notice-module__notice___GWkPA",children:"Notice-module__children___lDYsm",accessory:"Notice-module__accessory___wkLOG",title:"Notice-module__title___6H5tc","ux-recommendation":"Notice-module__ux-recommendation___N8BuK",caution:"Notice-module__caution___hPrVl",deprecation:"Notice-module__deprecation___g1drA",maintenance:"Notice-module__maintenance___kWLIZ",important:"Notice-module__important___p5DiF","not-supported":"Notice-module__not-supported___34bHd",paragraph:"Notice-module__paragraph___5h-w1",list:"Notice-module__list___M2Kxj"}},16576:function(e,t,a){a.r(t),t.default={"clinical-lowlight-theme":"Placeholder-module__clinical-lowlight-theme___Obm9K","orion-fusion-theme":"Placeholder-module__orion-fusion-theme___svHY+",placeholder:"Placeholder-module__placeholder___ZZDXd",inner:"Placeholder-module__inner___fJq9o",title:"Placeholder-module__title___teBSo"}},49558:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(96540)),l=r(a(25365));function r(e){return e&&e.__esModule?e:{default:e}}var o=function(e){var t=Object.assign({},e);return n.default.createElement(l.default,t,n.default.createElement("path",{d:"M10.3 24 33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};o.displayName="IconChevronLeft",o.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};t.default=o},94685:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(96540)),l=r(a(25365));function r(e){return e&&e.__esModule?e:{default:e}}var o=function(e){var t=Object.assign({},e);return n.default.createElement(l.default,t,n.default.createElement("path",{d:"M24 0A14.94 14.94 0 0 0 9.1 14.9a15.52 15.52 0 0 0 1.5 6.5 14.69 14.69 0 0 0 4.1 5.1 12.06 12.06 0 0 1 4.3 6.7 2.19 2.19 0 0 0-1.1 1.8v7.8a2.11 2.11 0 0 0 2.1 2.1h1a3 3 0 1 0 6 0h.9a2.11 2.11 0 0 0 2.1-2.1V35a2.06 2.06 0 0 0-1.1-1.8 12.4 12.4 0 0 1 4.1-6.6 16.23 16.23 0 0 0 4.4-5.3 14.43 14.43 0 0 0 1.5-6.5A14.92 14.92 0 0 0 24 0zm7 24.4a15.76 15.76 0 0 0-3.9 5 11.75 11.75 0 0 0-1.2 3.6h-.2V20h2a1.54 1.54 0 0 0 1.5-1.5 1.56 1.56 0 0 0-1.6-1.5h-7a1.5 1.5 0 0 0 0 3h2v13h-.5a13.86 13.86 0 0 0-1.2-3.6 14.67 14.67 0 0 0-4.5-5.4h.1a12 12 0 0 1-4.3-9.1A11.78 11.78 0 0 1 24 3a11.93 11.93 0 0 1 11.9 11.9 12 12 0 0 1-4.9 9.5z"}))};o.displayName="IconLightbulb",o.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};t.default=o},26177:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(96540)),l=r(a(25365));function r(e){return e&&e.__esModule?e:{default:e}}var o=function(e){var t=Object.assign({},e);return n.default.createElement(l.default,t,n.default.createElement("path",{d:"M44.7 3.2C42.6 1.1 39.8 0 37 0s-5.7 1.1-7.8 3.3l-26 26c-4.3 4.3-4.2 11.3.1 15.6 2.1 2 4.9 3.1 7.7 3.1s5.7-1.1 7.8-3.3l26-26c4.3-4.3 4.3-11.3-.1-15.5zm-2 13.4-13 13-11.4-11.2 13-13C32.8 3.8 34.8 3 37 3c2.1 0 4.1.8 5.6 2.3S45 8.8 45 11c0 2.1-.8 4.1-2.3 5.6z"}))};o.displayName="IconPill",o.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"};t.default=o},86952:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(96540)),l=r(a(25365));function r(e){return e&&e.__esModule?e:{default:e}}var o=function(e){var t=Object.assign({},e);return n.default.createElement(l.default,t,n.default.createElement("path",{d:"M48 8v16h-6v-5.7L25.31 35l-4.56-4.56L9.18 42H48v6H0V0h6v36.7l14.75-14.76 4.56 4.56L37.82 14H32V8z"}))};o.displayName="IconVisualization",o.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};t.default=o},58168:function(e,t,a){function n(){return n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},n.apply(this,arguments)}a.d(t,{A:function(){return n}})},53986:function(e,t,a){function n(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;a[n]=e[n]}return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}a.d(t,{A:function(){return n}})}}]);