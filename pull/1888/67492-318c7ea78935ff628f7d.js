"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[67492,60514,87538,14152,75739],{22863:function(e,t,a){var n=a(64836);t.Z=void 0;var l=n(a(67294)),r=n(a(45697)),o=n(a(47166)),i=n(a(17422)),d=o.default.bind(i.default),u={name:r.default.string.isRequired,src:r.default.string,url:r.default.string,version:r.default.string.isRequired},c=function(e){var t=e.src,a=e.name,n=e.url,r=e.version,o=l.default.createElement("a",{className:d("badge"),href:n||"https://www.npmjs.org/package/".concat(a,"/v/").concat(r)},l.default.createElement("span",{className:d("badge-name")},n?"package":"npm"),l.default.createElement("span",{className:d("badge-version")},"v".concat(r))),i=t?l.default.createElement("a",{className:d("badge"),href:t},l.default.createElement("span",{className:d("badge-name")},"github"),l.default.createElement("span",{className:d("badge-version")},"source")):void 0;return l.default.createElement("div",{className:d("badge-container")},o,i)};c.propTypes=u;var m=c;t.Z=m},49271:function(e,t,a){var n=a(64836),l=a(18698);t.Z=void 0;var r=n(a(27424)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==l(e)&&"function"!=typeof e)return{default:e};var a=f(t);if(a&&a.has(e))return a.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e,a&&a.set(e,n);return n}(a(67294)),i=n(a(45697)),d=n(a(47166)),u=a(21538),c=n(a(33864)),m=n(a(23399)),s=a(51051),p=n(a(53560));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(f=function(e){return e?a:t})(e)}var _=d.default.bind(p.default),v={example:i.default.element,exampleSrc:i.default.element,exampleCssSrc:i.default.element,title:i.default.string,description:i.default.node,isExpanded:i.default.bool},x=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},b=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},h=function(e){var t=e.example,a=e.exampleSrc,n=e.exampleCssSrc,l=e.title,i=e.description,d=e.isExpanded,p=(0,o.useState)(d),f=(0,r.default)(p,2),v=f[0],h=f[1],g=(0,o.useState)(!1),y=(0,r.default)(g,2),N=y[0],E=y[1],w=o.default.useContext(u.ThemeContext),T=void 0!==n,O=function(){E(!N),v&&h(!v)},C=function(){h(!v),N&&E(!N)},P=function(e,t){e.nativeEvent.keyCode!==s.KEY_SPACE&&e.nativeEvent.keyCode!==s.KEY_RETURN||(e.preventDefault(),t())};return o.default.createElement("div",{className:_("template",w.className)},o.default.createElement("div",{className:_("header")},l&&o.default.createElement("h2",{className:_("title")},l)),o.default.createElement("div",{className:_("content")},i&&o.default.createElement("div",{className:_("description")},i),t),o.default.createElement("div",{className:_("footer")},a?o.default.createElement("div",{className:_("button-container")},T&&o.default.createElement("button",{type:"button",className:_("css-toggle","item",{"is-selected":N}),onClick:O,onKeyDown:function(e){return P(e,O)},onBlur:x,onMouseDown:b,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(c.default,{className:_("chevron")}),o.default.createElement("span",null,"CSS"),o.default.createElement(m.default,{className:_("chevron")})),o.default.createElement("button",{type:"button",className:_("code-toggle","item",{"is-selected":v}),onClick:C,onKeyDown:function(e){return P(e,C)},onBlur:x,onMouseDown:b,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(c.default,{className:_("chevron")}),o.default.createElement("span",null,"Code"),o.default.createElement(m.default,{className:_("chevron")}))):null,o.default.createElement("div",null,N&&o.default.createElement("div",{className:_("css")},n),v&&o.default.createElement("div",{className:_("code")},a))))};h.propTypes=v,h.defaultProps={isExpanded:!1};var g=h;t.Z=g},40996:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=u(a(67294)),l=u(a(45697)),r=u(a(47166)),o=u(a(47341)),i=u(a(66983)),d=["children"];function u(e){return e&&e.__esModule?e:{default:e}}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},c.apply(this,arguments)}function m(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=r.default.bind(i.default),p=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},f=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},_={children:l.default.string},v=function(e){var t=e.children,a=m(e,d),l=n.default.useContext(o.default),i=(0,r.default)(s(["button",l.className]),a.className);return n.default.createElement("button",c({},a,{type:"button",className:i,onBlur:p,onMouseDown:f,"data-focus-styles-enabled":!0}),t)};v.propTypes=_;var x=v;t.default=x},59278:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=d(a(67294)),l=d(a(45697)),r=d(a(47166)),o=d(a(47341)),i=d(a(30866));function d(e){return e&&e.__esModule?e:{default:e}}var u=r.default.bind(i.default),c={ariaLevel:l.default.oneOf(["2","3","4","5","6"]),children:l.default.node,variant:l.default.oneOf(["ux-recommendation","caution","deprecation","maintenance","important","not-supported"])},m=function(e){var t=e.ariaLevel,a=e.variant,l=e.children,r=n.default.useContext(o.default);return n.default.createElement("div",{className:u("notice",a,r.className)},n.default.createElement("div",{className:u("accessory"),"aria-hidden":"true",focusable:"false"}),n.default.createElement("div",{role:"heading",className:u("title"),"aria-level":t},n.default.createElement("span",null,function(e){return"ux-recommendation"===e?"UX Recommendation":"caution"===e?"Caution":"deprecation"===e?"Deprecation Notice":"maintenance"===e?"In Maintenance":"important"===e?"Important":"not-supported"===e?"Hazards for Incorrect Usage":"error"}(a))),n.default.createElement("div",{className:u("children")},function(e){return"not-supported"===e?n.default.createElement(n.default.Fragment,null,n.default.createElement("p",{className:u("paragraph")},"This component was designed and tested according to the documented implementation."),n.default.createElement("p",{className:u("paragraph")},"Using the component incorrectly:",n.default.createElement("ul",{className:u("list")},n.default.createElement("li",null,"will likely result in improper composition and create accessibility issues"),n.default.createElement("li",null,"may cause erratic or broken behaviors and styles"),n.default.createElement("li",null,n.default.createElement("strong",null,"will not be supported "),"or enhanced to allow for incorrect use")))):null}(a),n.default.Children.map(l,(function(e){return"string"==typeof e?n.default.createElement("p",null,e):e}))))};m.propTypes=c,m.defaultProps={ariaLevel:"2",variant:"important"};var s=m;t.default=s},47306:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=c(a(67294)),l=c(a(45697)),r=c(a(94184)),o=c(a(47166)),i=c(a(47341)),d=c(a(42620)),u=["title"];function c(e){return e&&e.__esModule?e:{default:e}}function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},m.apply(this,arguments)}function s(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=o.default.bind(d.default),f={title:l.default.string},_=function(e){var t=e.title,a=s(e,u),l=n.default.useContext(i.default),o=(0,r.default)(p(["placeholder",l.className]),a.className),d=p(["inner"]);return n.default.createElement("div",m({},a,{className:o}),n.default.createElement("div",{className:d},n.default.createElement("p",{className:p("title")},t)))};_.propTypes=f,_.defaultProps={title:""};var v=_;t.default=v},34261:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Button",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"Notice",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"Placeholder",{enumerable:!0,get:function(){return l.default}});var n=o(a(59278)),l=o(a(47306)),r=o(a(40996));function o(e){return e&&e.__esModule?e:{default:e}}},85891:function(e,t,a){a.r(t),a.d(t,{default:function(){return v}});var n=a(87462),l=a(44925),r=(a(67294),a(81254)),o=a(34261),i=(a(33615),a(78530)),d=["components"],u={},c="wrapper";function m(e){var t=e.components,a=(0,l.Z)(e,d);return(0,r.mdx)(c,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)(i.ZP,{mdxType:"PropsTable"},(0,r.mdx)(i.X2,{key:"ROW1",mdxType:"Row"},(0,r.mdx)(i.O,{mdxType:"PropNameCell"},"id"),(0,r.mdx)(i.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,r.mdx)(i.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,r.mdx)(i.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(i.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"String that will be used to identify the table. If multiple tables are on the same page, each table should have\na unique id."))),(0,r.mdx)(i.X2,{key:"ROW2",mdxType:"Row"},(0,r.mdx)(i.O,{mdxType:"PropNameCell"},"ariaLabelledBy"),(0,r.mdx)(i.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,r.mdx)(i.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(i.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(i.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"String that identifies the element (or elements) that labels the table."))),(0,r.mdx)(i.X2,{key:"ROW3",mdxType:"Row"},(0,r.mdx)(i.O,{mdxType:"PropNameCell"},"ariaLabel"),(0,r.mdx)(i.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,r.mdx)(i.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(i.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(i.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"String that labels the table for accessibility. If ariaLabelledBy is specified, ariaLabel will not be used.")))))}m.isMDXComponent=!0;var s=a(20923),p=["components"],f={},_="wrapper";function v(e){var t=e.components,a=(0,l.Z)(e,p);return(0,r.mdx)(_,(0,n.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"terra-compactinteractivelist"},"Terra CompactInteractiveList"),(0,r.mdx)(o.Notice,{variant:"caution",ariaLevel:"2",mdxType:"Notice"},"Terra Compact Interactive List is currently under alpha release. There may be breaking changes between releases until it is stable with the 1.0 release."),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"terra-compact-interactive-list")," component  provides users a way to render a collection of interactive data in a list format into a single tab stop. The list can be arranged in columns to fit wide space, and the user can navigate between them with the arrow keys."),(0,r.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Install with ",(0,r.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"npm install terra-compact-interactive-list"))))),(0,r.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),(0,r.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Peer Dependency"),(0,r.mdx)("th",{parentName:"tr",align:null},"Version"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"react"),(0,r.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"react-dom"),(0,r.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"react-intl"),(0,r.mdx)("td",{parentName:"tr",align:null},"^2.8.0")))),(0,r.mdx)("h2",{id:"component-features"},"Component Features"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"},"Cross-Browser Support")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#mobile-support"},"Mobile Support")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#internationalization-i18n"},"Internationalization Support")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#ltr--rtl"},"LTR/RTL Support"))),(0,r.mdx)("h2",{id:"examples"},"Examples"),(0,r.mdx)(s.Z,{mdxType:"DefaultCompactInteractiveList"}),(0,r.mdx)("h2",{id:"compact-interactive-list-props-table"},"Compact Interactive List Props Table"),(0,r.mdx)(m,{mdxType:"CompactInteractiveListPropsTable"}))}v.isMDXComponent=!0},20923:function(e,t,a){a.d(t,{Z:function(){return s}});var n=a(67294),l=a(76274),r=a(87462),o=a(44925),i=a(81254),d=["components"],u={};function c(e){var t=e.components,a=(0,o.Z)(e,d);return(0,i.mdx)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport CompactInteractiveList from 'terra-compact-interactive-list';\n\nconst DefaultCompactInteractiveList = () => (\n  <CompactInteractiveList />\n);\n\nexport default DefaultCompactInteractiveList;\n\n")))}c.isMDXComponent=!0;var m=a(49271),s=function(e){var t=e.title,a=e.description,r=e.isExpanded;return n.createElement(m.Z,{title:t||"Default Compact Interactive List",description:a,example:n.createElement(l.Z,null),exampleSrc:n.createElement(c,null),isExpanded:r})}},33615:function(e,t,a){a.d(t,{C:function(){return r}});var n=a(67294),l=a(22863),r=function(e){var t=e.url;return n.createElement(l.Z,{src:"https://github.com/cerner/terra-framework/tree/main/packages/terra-file-path",name:"terra-file-path",version:"1.0.1",url:t})}},11632:function(e,t,a){var n=a(64836),l=a(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=l(e)&&"function"!=typeof e)return{default:e};var a=m(t);if(a&&a.has(e))return a.get(e);var n={__proto__:null},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}return n.default=e,a&&a.set(e,n),n}(a(67294)),o=n(a(45697)),i=a(25387),d=n(a(47166)),u=n(a(47341)),c=n(a(22031));function m(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(m=function(e){return e?a:t})(e)}var s=d.default.bind(c.default),p={id:o.default.string.isRequired,ariaLabelledBy:o.default.string,ariaLabel:o.default.string},f=function(e){var t=e.id,a=e.ariaLabelledBy,n=e.ariaLabel,l=(0,r.useContext)(u.default);return r.default.createElement("div",{className:s("compact-interactive-list-container"),tabIndex:0},r.default.createElement("div",{id:t,role:"grid","aria-labelledby":a,"aria-label":n,className:s("compact-interactive-list",l.className)},r.default.createElement("div",{role:"row"},r.default.createElement("div",{role:"gridcell"},"This is the placeholder div"))))};f.propTypes=p;t.default=(0,i.injectIntl)(f)},76274:function(e,t,a){var n=a(64836);t.Z=void 0;var l=n(a(67294)),r=n(a(11632));t.Z=function(){return l.default.createElement(r.default,null)}},17422:function(e,t,a){a.r(t),t.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},53560:function(e,t,a){a.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},66983:function(e,t,a){a.r(t),t.default={"clinical-lowlight-theme":"Button-module__clinical-lowlight-theme___TyZWB","orion-fusion-theme":"Button-module__orion-fusion-theme___q-FcQ",button:"Button-module__button___QuCn2","is-active":"Button-module__is-active___Z8AuK"}},30866:function(e,t,a){a.r(t),t.default={"clinical-lowlight-theme":"Notice-module__clinical-lowlight-theme___aa5xV","orion-fusion-theme":"Notice-module__orion-fusion-theme___QAE-T",notice:"Notice-module__notice___GWkPA",children:"Notice-module__children___lDYsm",accessory:"Notice-module__accessory___wkLOG",title:"Notice-module__title___6H5tc","ux-recommendation":"Notice-module__ux-recommendation___N8BuK",caution:"Notice-module__caution___hPrVl",deprecation:"Notice-module__deprecation___g1drA",maintenance:"Notice-module__maintenance___kWLIZ",important:"Notice-module__important___p5DiF","not-supported":"Notice-module__not-supported___34bHd",paragraph:"Notice-module__paragraph___5h-w1",list:"Notice-module__list___M2Kxj"}},42620:function(e,t,a){a.r(t),t.default={"clinical-lowlight-theme":"Placeholder-module__clinical-lowlight-theme___Obm9K","orion-fusion-theme":"Placeholder-module__orion-fusion-theme___svHY+",placeholder:"Placeholder-module__placeholder___ZZDXd",inner:"Placeholder-module__inner___fJq9o",title:"Placeholder-module__title___teBSo"}},22031:function(e,t,a){a.r(t),t.default={"clinical-lowlight-theme":"CompactInteractiveList-module__clinical-lowlight-theme___DFfiU","orion-fusion-theme":"CompactInteractiveList-module__orion-fusion-theme___btGus","compact-interactive-list-container":"CompactInteractiveList-module__compact-interactive-list-container___4CKB8","compact-interactive-list":"CompactInteractiveList-module__compact-interactive-list___6V8b0"}},33864:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(67294)),l=r(a(99139));function r(e){return e&&e.__esModule?e:{default:e}}function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},o.apply(this,arguments)}var i=function(e){var t=o({},e);return n.default.createElement(l.default,t,n.default.createElement("path",{d:"M10.3 24 33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};i.displayName="IconChevronLeft",i.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};t.default=i}}]);