"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[79815,26692,10778,24958],{49271:function(e,t,a){var l=a(64836),n=a(18698);t.Z=void 0;var r=l(a(27424)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var a=f(t);if(a&&a.has(e))return a.get(e);var l={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=r?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(l,o,u):l[o]=e[o]}l.default=e,a&&a.set(e,l);return l}(a(67294)),u=l(a(45697)),c=l(a(47166)),i=a(21538),d=l(a(33864)),s=l(a(23399)),m=a(51051),_=l(a(53560));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(f=function(e){return e?a:t})(e)}var p=c.default.bind(_.default),v={example:u.default.element,exampleSrc:u.default.element,exampleCssSrc:u.default.element,title:u.default.string,description:u.default.node,isExpanded:u.default.bool},h=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},b=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},y=function(e){var t=e.example,a=e.exampleSrc,l=e.exampleCssSrc,n=e.title,u=e.description,c=e.isExpanded,_=(0,o.useState)(c),f=(0,r.default)(_,2),v=f[0],y=f[1],E=(0,o.useState)(!1),g=(0,r.default)(E,2),N=g[0],O=g[1],x=o.default.useContext(i.ThemeContext),w=void 0!==l,P=function(){O(!N),v&&y(!v)},j=function(){y(!v),N&&O(!N)},T=function(e,t){e.nativeEvent.keyCode!==m.KEY_SPACE&&e.nativeEvent.keyCode!==m.KEY_RETURN||(e.preventDefault(),t())};return o.default.createElement("div",{className:p("template",x.className)},o.default.createElement("div",{className:p("header")},n&&o.default.createElement("h2",{className:p("title")},n)),o.default.createElement("div",{className:p("content")},u&&o.default.createElement("div",{className:p("description")},u),t),o.default.createElement("div",{className:p("footer")},a?o.default.createElement("div",{className:p("button-container")},w&&o.default.createElement("button",{type:"button",className:p("css-toggle","item",{"is-selected":N}),onClick:P,onKeyDown:function(e){return T(e,P)},onBlur:h,onMouseDown:b,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(d.default,{className:p("chevron")}),o.default.createElement("span",null,"CSS"),o.default.createElement(s.default,{className:p("chevron")})),o.default.createElement("button",{type:"button",className:p("code-toggle","item",{"is-selected":v}),onClick:j,onKeyDown:function(e){return T(e,j)},onBlur:h,onMouseDown:b,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(d.default,{className:p("chevron")}),o.default.createElement("span",null,"Code"),o.default.createElement(s.default,{className:p("chevron")}))):null,o.default.createElement("div",null,N&&o.default.createElement("div",{className:p("css")},l),v&&o.default.createElement("div",{className:p("code")},a))))};y.propTypes=v,y.defaultProps={isExpanded:!1};var E=y;t.Z=E},40996:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=i(a(67294)),n=i(a(45697)),r=i(a(47166)),o=i(a(47341)),u=i(a(66983)),c=["children"];function i(e){return e&&e.__esModule?e:{default:e}}function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},d.apply(this,arguments)}function s(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var m=r.default.bind(u.default),_=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},f=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},p={children:n.default.string},v=function(e){var t=e.children,a=s(e,c),n=l.default.useContext(o.default),u=(0,r.default)(m(["button",n.className]),a.className);return l.default.createElement("button",d({},a,{type:"button",className:u,onBlur:_,onMouseDown:f,"data-focus-styles-enabled":!0}),t)};v.propTypes=p;var h=v;t.default=h},59278:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=c(a(67294)),n=c(a(45697)),r=c(a(47166)),o=c(a(47341)),u=c(a(30866));function c(e){return e&&e.__esModule?e:{default:e}}var i=r.default.bind(u.default),d={ariaLevel:n.default.oneOf(["2","3","4","5","6"]),children:n.default.node,variant:n.default.oneOf(["ux-recommendation","caution","deprecation","maintenance","important","not-supported"])},s=function(e){var t=e.ariaLevel,a=e.variant,n=e.children,r=l.default.useContext(o.default);return l.default.createElement("div",{className:i("notice",a,r.className)},l.default.createElement("div",{className:i("accessory"),"aria-hidden":"true",focusable:"false"}),l.default.createElement("div",{role:"heading",className:i("title"),"aria-level":t},l.default.createElement("span",null,function(e){return"ux-recommendation"===e?"UX Recommendation":"caution"===e?"Caution":"deprecation"===e?"Deprecation Notice":"maintenance"===e?"In Maintenance":"important"===e?"Important":"not-supported"===e?"Hazards for Incorrect Usage":"error"}(a))),l.default.createElement("div",{className:i("children")},function(e){return"not-supported"===e?l.default.createElement(l.default.Fragment,null,l.default.createElement("p",{className:i("paragraph")},"This component was designed and tested according to the documented implementation."),l.default.createElement("p",{className:i("paragraph")},"Using the component incorrectly:",l.default.createElement("ul",{className:i("list")},l.default.createElement("li",null,"will likely result in improper composition and create accessibility issues"),l.default.createElement("li",null,"may cause erratic or broken behaviors and styles"),l.default.createElement("li",null,l.default.createElement("strong",null,"will not be supported "),"or enhanced to allow for incorrect use")))):null}(a),l.default.Children.map(n,(function(e){return"string"==typeof e?l.default.createElement("p",null,e):e}))))};s.propTypes=d,s.defaultProps={ariaLevel:"2",variant:"important"};var m=s;t.default=m},47306:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=d(a(67294)),n=d(a(45697)),r=d(a(94184)),o=d(a(47166)),u=d(a(47341)),c=d(a(42620)),i=["title"];function d(e){return e&&e.__esModule?e:{default:e}}function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},s.apply(this,arguments)}function m(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var _=o.default.bind(c.default),f={title:n.default.string},p=function(e){var t=e.title,a=m(e,i),n=l.default.useContext(u.default),o=(0,r.default)(_(["placeholder",n.className]),a.className),c=_(["inner"]);return l.default.createElement("div",s({},a,{className:o}),l.default.createElement("div",{className:c},l.default.createElement("p",{className:_("title")},t)))};p.propTypes=f,p.defaultProps={title:""};var v=p;t.default=v},34261:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Button",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"Notice",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"Placeholder",{enumerable:!0,get:function(){return n.default}});var l=o(a(59278)),n=o(a(47306)),r=o(a(40996));function o(e){return e&&e.__esModule?e:{default:e}}},53560:function(e,t,a){a.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},66983:function(e,t,a){a.r(t),t.default={"clinical-lowlight-theme":"Button-module__clinical-lowlight-theme___TyZWB","orion-fusion-theme":"Button-module__orion-fusion-theme___q-FcQ",button:"Button-module__button___QuCn2","is-active":"Button-module__is-active___Z8AuK"}},30866:function(e,t,a){a.r(t),t.default={"clinical-lowlight-theme":"Notice-module__clinical-lowlight-theme___aa5xV","orion-fusion-theme":"Notice-module__orion-fusion-theme___QAE-T",notice:"Notice-module__notice___GWkPA",children:"Notice-module__children___lDYsm",accessory:"Notice-module__accessory___wkLOG",title:"Notice-module__title___6H5tc","ux-recommendation":"Notice-module__ux-recommendation___N8BuK",caution:"Notice-module__caution___hPrVl",deprecation:"Notice-module__deprecation___g1drA",maintenance:"Notice-module__maintenance___kWLIZ",important:"Notice-module__important___p5DiF","not-supported":"Notice-module__not-supported___34bHd",paragraph:"Notice-module__paragraph___5h-w1",list:"Notice-module__list___M2Kxj"}},42620:function(e,t,a){a.r(t),t.default={"clinical-lowlight-theme":"Placeholder-module__clinical-lowlight-theme___Obm9K","orion-fusion-theme":"Placeholder-module__orion-fusion-theme___svHY+",placeholder:"Placeholder-module__placeholder___ZZDXd",inner:"Placeholder-module__inner___fJq9o",title:"Placeholder-module__title___teBSo"}},33864:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=r(a(67294)),n=r(a(99139));function r(e){return e&&e.__esModule?e:{default:e}}function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},o.apply(this,arguments)}var u=function(e){var t=o({},e);return l.default.createElement(n.default,t,l.default.createElement("path",{d:"M10.3 24 33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};u.displayName="IconChevronLeft",u.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};var c=u;t.default=c}}]);