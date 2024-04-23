"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[50445,32227],{201:function(e,t,n){var a=n(24994),l=n(73738);t.A=void 0;var r=a(n(85715)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=l(e)&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var a={__proto__:null},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(a,o,i):a[o]=e[o]}return a.default=e,n&&n.set(e,a),a}(n(96540)),i=a(n(5556)),c=a(n(67967)),u=n(92912),s=a(n(49558)),d=a(n(53665)),m=n(25966),p=a(n(89986));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}var _=c.default.bind(p.default),h={example:i.default.element,exampleSrc:i.default.element,exampleCssSrc:i.default.element,title:i.default.string,description:i.default.node,isExpanded:i.default.bool},v=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},b=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},y=function(e){var t=e.example,n=e.exampleSrc,a=e.exampleCssSrc,l=e.title,i=e.description,c=e.isExpanded,p=(0,o.useState)(c),f=(0,r.default)(p,2),h=f[0],y=f[1],w=(0,o.useState)(!1),g=(0,r.default)(w,2),E=g[0],N=g[1],x=o.default.useContext(u.ThemeContext),O=void 0!==a,C=function(){N(!E),h&&y(!h)},k=function(){y(!h),E&&N(!E)},T=function(e,t){e.nativeEvent.keyCode!==m.KEY_SPACE&&e.nativeEvent.keyCode!==m.KEY_RETURN||(e.preventDefault(),t())};return o.default.createElement("div",{className:_("template",x.className)},o.default.createElement("div",{className:_("header")},l&&o.default.createElement("h2",{className:_("title")},l)),o.default.createElement("div",{className:_("content")},i&&o.default.createElement("div",{className:_("description")},i),t),o.default.createElement("div",{className:_("footer")},n?o.default.createElement("div",{className:_("button-container")},O&&o.default.createElement("button",{type:"button",className:_("css-toggle","item",{"is-selected":E}),onClick:C,onKeyDown:function(e){return T(e,C)},onBlur:v,onMouseDown:b,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(s.default,{className:_("chevron")}),o.default.createElement("span",null,"CSS"),o.default.createElement(d.default,{className:_("chevron")})),o.default.createElement("button",{type:"button",className:_("code-toggle","item",{"is-selected":h}),onClick:k,onKeyDown:function(e){return T(e,k)},onBlur:v,onMouseDown:b,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(s.default,{className:_("chevron")}),o.default.createElement("span",null,"Code"),o.default.createElement(d.default,{className:_("chevron")}))):null,o.default.createElement("div",null,E&&o.default.createElement("div",{className:_("css")},a),h&&o.default.createElement("div",{className:_("code")},n))))};y.propTypes=h,y.defaultProps={isExpanded:!1};t.A=y},86159:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=u(n(96540)),l=u(n(5556)),r=u(n(67967)),o=u(n(23695)),i=u(n(36605)),c=["children"];function u(e){return e&&e.__esModule?e:{default:e}}function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},s.apply(this,arguments)}function d(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var m=r.default.bind(i.default),p=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},f=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},_={children:l.default.string},h=function(e){var t=e.children,n=d(e,c),l=a.default.useContext(o.default),i=(0,r.default)(m(["button",l.className]),n.className);return a.default.createElement("button",s({},n,{type:"button",className:i,onBlur:p,onMouseDown:f,"data-focus-styles-enabled":!0}),t)};h.propTypes=_;t.default=h},20999:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=c(n(96540)),l=c(n(5556)),r=c(n(67967)),o=c(n(23695)),i=c(n(17269));function c(e){return e&&e.__esModule?e:{default:e}}var u=r.default.bind(i.default),s={ariaLevel:l.default.oneOf(["2","3","4","5","6"]),children:l.default.node,variant:l.default.oneOf(["ux-recommendation","caution","deprecation","maintenance","important","not-supported"])},d=function(e){var t=e.ariaLevel,n=e.variant,l=e.children,r=a.default.useContext(o.default);return a.default.createElement("div",{className:u("notice",n,r.className)},a.default.createElement("div",{className:u("accessory"),"aria-hidden":"true",focusable:"false"}),a.default.createElement("div",{role:"heading",className:u("title"),"aria-level":t},a.default.createElement("span",null,function(e){return"ux-recommendation"===e?"UX Recommendation":"caution"===e?"Caution":"deprecation"===e?"Deprecation Notice":"maintenance"===e?"In Maintenance":"important"===e?"Important":"not-supported"===e?"Hazards for Incorrect Usage":"error"}(n))),a.default.createElement("div",{className:u("children")},function(e){return"not-supported"===e?a.default.createElement(a.default.Fragment,null,a.default.createElement("p",{className:u("paragraph")},"This component was designed and tested according to the documented implementation."),a.default.createElement("p",{className:u("paragraph")},"Using the component incorrectly:",a.default.createElement("ul",{className:u("list")},a.default.createElement("li",null,"will likely result in improper composition and create accessibility issues"),a.default.createElement("li",null,"may cause erratic or broken behaviors and styles"),a.default.createElement("li",null,a.default.createElement("strong",null,"will not be supported "),"or enhanced to allow for incorrect use")))):null}(n),a.default.Children.map(l,(function(e){return"string"==typeof e?a.default.createElement("p",null,e):e}))))};d.propTypes=s,d.defaultProps={ariaLevel:"2",variant:"important"};t.default=d},18778:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=s(n(96540)),l=s(n(5556)),r=s(n(46942)),o=s(n(67967)),i=s(n(23695)),c=s(n(16576)),u=["title"];function s(e){return e&&e.__esModule?e:{default:e}}function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},d.apply(this,arguments)}function m(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=o.default.bind(c.default),f={title:l.default.string},_=function(e){var t=e.title,n=m(e,u),l=a.default.useContext(i.default),o=(0,r.default)(p(["placeholder",l.className]),n.className),c=p(["inner"]);return a.default.createElement("div",d({},n,{className:o}),a.default.createElement("div",{className:c},a.default.createElement("p",{className:p("title")},t)))};_.propTypes=f,_.defaultProps={title:""};t.default=_},74647:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Button",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"Notice",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"Placeholder",{enumerable:!0,get:function(){return l.default}});var a=o(n(20999)),l=o(n(18778)),r=o(n(86159));function o(e){return e&&e.__esModule?e:{default:e}}},91826:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var a=n(58168),l=n(53986),r=n(96540),o=n(36665),i=n(74647),c=n(40358),u=["components"],s={};function d(e){var t=e.components,n=(0,l.A)(e,u);return(0,o.mdx)("wrapper",(0,a.A)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-jsx"},"/* eslint-disable react/forbid-dom-props */\nimport React, { useState } from 'react';\nimport CompactInteractiveList, { alignTypes } from 'terra-compact-interactive-list';\nimport {\n  IconFeaturedOff, IconFeatured, IconMultipleResultsNormal, IconMultipleResultsNotNormal, IconMultipleResultsCritical,\n} from 'terra-icon';\nimport Button from 'terra-button';\n\nconst FeaturedIcon = () => {\n  const [isFeatured, setIsFeatured] = useState(false);\n  const onButtonClick = () => setIsFeatured(!isFeatured);\n  return (\n    isFeatured ? <Button variant=\"utility\" text=\"Unfavorite item\" icon={<IconFeatured />} onClick={onButtonClick} /> : <Button variant=\"utility\" text=\"Favorite item\" icon={<IconFeaturedOff />} onClick={onButtonClick} />\n  );\n};\nconst iconResultsNormal = <IconMultipleResultsNormal a11yLabel=\"Results normal\" height=\"1.5em\" width=\"1.5em\" />;\nconst iconResultsNotNormal = <IconMultipleResultsNotNormal a11yLabel=\"Results not normal\" height=\"1.5em\" width=\"1.5em\" />;\nconst iconResultsCritical = <IconMultipleResultsCritical a11yLabel=\"Results critical\" height=\"1.5em\" width=\"1.5em\" />;\n\nconst rows = [\n  {\n    id: 'row_1',\n    cells: [\n      { content: iconResultsNormal },\n      { content: 'Discern Care Set (1)' },\n      { content: <FeaturedIcon /> },\n    ],\n  },\n  {\n    id: 'row_2',\n    cells: [\n      { content: iconResultsNormal },\n      { content: 'Initial observation Care/Day High Severity 99220 (2)' },\n      { content: <FeaturedIcon /> },\n    ],\n  },\n  {\n    id: 'row_3',\n    cells: [\n      { content: iconResultsNotNormal },\n      { content: 'Arterial Sheath Care (3)' },\n      { content: <FeaturedIcon /> },\n    ],\n  },\n  {\n    id: 'row_4',\n    cells: [\n      { content: ' ' },\n      { content: 'Sbsq Observation Care/Day High Severity 99226 (4)' },\n      { content: <FeaturedIcon /> },\n    ],\n  },\n  {\n    id: 'row_5',\n    cells: [\n      { content: iconResultsCritical },\n      { content: 'Arterial Sheath Care (5)' },\n      { content: <FeaturedIcon /> },\n    ],\n  },\n];\n\nconst cols = [\n  {\n    id: 'Column-0',\n    displayName: 'Status',\n    width: '5em',\n    align: alignTypes.CENTER,\n  },\n  {\n    id: 'Column-1',\n    displayName: 'Service name',\n    // flexGrow prop is not set here, but as there is no width set, the column will be flex growing\n    maximumWidth: '25em',\n    minimumWidth: '7em',\n  },\n  {\n    id: 'Column-2',\n    displayName: 'Featured',\n    width: '5em',\n    align: alignTypes.CENTER,\n  },\n];\n\nconst ScalableUnits = () => (\n  <div style={{ fontSize: '1.25em' }}>\n    <CompactInteractiveList\n      id=\"compact-interactive-list-scalable-units\"\n      ariaLabel=\"Compact Interactive List\"\n      rows={rows}\n      columns={cols}\n      numberOfColumns={2}\n      rowHeaderIndex={1}\n    />\n  </div>\n);\n\nexport default ScalableUnits;\n\n")))}d.isMDXComponent=!0;var m=n(201),p=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.createElement(m.A,{title:t||"Scalable Units",description:n,example:r.createElement(c.A,null),exampleSrc:r.createElement(d,null),isExpanded:a})},f=["components"],_={},h="wrapper";function v(e){var t=e.components,n=(0,l.A)(e,f);return(0,o.mdx)(h,(0,a.A)({},_,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"scalable-units"},"Scalable Units"),(0,o.mdx)(i.Notice,{variant:"important",ariaLevel:"3",mdxType:"Notice"},(0,o.mdx)("p",null,"The supported units for width properties are ",(0,o.mdx)("inlineCode",{parentName:"p"},"px"),", ",(0,o.mdx)("inlineCode",{parentName:"p"},"em"),", and ",(0,o.mdx)("inlineCode",{parentName:"p"},"rem"),".\nEnsure that the width units are consistent across all properties in the same component. The width properties are\n",(0,o.mdx)("a",{parentName:"p",href:"/terra-framework/pull/2143/components/cerner-terra-framework-docs/compact-interactive-list/about"},"columnMinimumWidth"),",\n",(0,o.mdx)("a",{parentName:"p",href:"/terra-framework/pull/2143/components/cerner-terra-framework-docs/compact-interactive-list/about"},"columnMaximumWidth"),",\n",(0,o.mdx)("a",{parentName:"p",href:"/terra-framework/pull/2143/components/cerner-terra-framework-docs/compact-interactive-list/about"},"width"),",\n",(0,o.mdx)("a",{parentName:"p",href:"/terra-framework/pull/2143/components/cerner-terra-framework-docs/compact-interactive-list/about"},"minimumWidth"),", and\n",(0,o.mdx)("a",{parentName:"p",href:"/terra-framework/pull/2143/components/cerner-terra-framework-docs/compact-interactive-list/about"},"maximumWidth"),".\nAny width units inconsistent with the rest of the component properties are disregarded.")),(0,o.mdx)("h3",{id:"description"},"Description"),(0,o.mdx)("p",null,"This example demonstrates a ",(0,o.mdx)("a",{parentName:"p",href:"/terra-framework/pull/2143/components/cerner-terra-framework-docs/compact-interactive-list/about"},"Compact Interactive List")," component placed in a container with fontSize set to ",(0,o.mdx)("strong",{parentName:"p"},"1.2em")," and ",(0,o.mdx)("a",{parentName:"p",href:"/terra-framework/pull/2143/components/cerner-terra-framework-docs/compact-interactive-list/about"},"width")," properties set in units relative to the font size. "),(0,o.mdx)(p,{mdxType:"ScalableUnits"}))}v.isMDXComponent=!0},40358:function(e,t,n){var a=n(24994),l=n(73738);t.A=void 0;var r=a(n(85715)),o=d(n(96540)),i=d(n(79943)),c=n(33049),u=a(n(23986));function s(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(s=function(e){return e?n:t})(e)}function d(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=l(e)&&"function"!=typeof e)return{default:e};var n=s(t);if(n&&n.has(e))return n.get(e);var a={__proto__:null},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&{}.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(a,o,i):a[o]=e[o]}return a.default=e,n&&n.set(e,a),a}var m=function(){var e=(0,o.useState)(!1),t=(0,r.default)(e,2),n=t[0],a=t[1],l=function(){return a(!n)};return n?o.default.createElement(u.default,{variant:"utility",text:"Unfavorite item",icon:o.default.createElement(c.IconFeatured,null),onClick:l}):o.default.createElement(u.default,{variant:"utility",text:"Favorite item",icon:o.default.createElement(c.IconFeaturedOff,null),onClick:l})},p=o.default.createElement(c.IconMultipleResultsNormal,{a11yLabel:"Results normal",height:"1.5em",width:"1.5em"}),f=o.default.createElement(c.IconMultipleResultsNotNormal,{a11yLabel:"Results not normal",height:"1.5em",width:"1.5em"}),_=o.default.createElement(c.IconMultipleResultsCritical,{a11yLabel:"Results critical",height:"1.5em",width:"1.5em"}),h=[{id:"row_1",cells:[{content:p},{content:"Discern Care Set (1)"},{content:o.default.createElement(m,null)}]},{id:"row_2",cells:[{content:p},{content:"Initial observation Care/Day High Severity 99220 (2)"},{content:o.default.createElement(m,null)}]},{id:"row_3",cells:[{content:f},{content:"Arterial Sheath Care (3)"},{content:o.default.createElement(m,null)}]},{id:"row_4",cells:[{content:" "},{content:"Sbsq Observation Care/Day High Severity 99226 (4)"},{content:o.default.createElement(m,null)}]},{id:"row_5",cells:[{content:_},{content:"Arterial Sheath Care (5)"},{content:o.default.createElement(m,null)}]}],v=[{id:"Column-0",displayName:"Status",width:"5em",align:i.alignTypes.CENTER},{id:"Column-1",displayName:"Service name",maximumWidth:"25em",minimumWidth:"7em"},{id:"Column-2",displayName:"Featured",width:"5em",align:i.alignTypes.CENTER}];t.A=function(){return o.default.createElement("div",{style:{fontSize:"1.25em"}},o.default.createElement(i.default,{id:"compact-interactive-list-scalable-units",ariaLabel:"Compact Interactive List",rows:h,columns:v,numberOfColumns:2,rowHeaderIndex:1}))}},89986:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},36605:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Button-module__clinical-lowlight-theme___TyZWB","orion-fusion-theme":"Button-module__orion-fusion-theme___q-FcQ",button:"Button-module__button___QuCn2","is-active":"Button-module__is-active___Z8AuK"}},17269:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Notice-module__clinical-lowlight-theme___aa5xV","orion-fusion-theme":"Notice-module__orion-fusion-theme___QAE-T",notice:"Notice-module__notice___GWkPA",children:"Notice-module__children___lDYsm",accessory:"Notice-module__accessory___wkLOG",title:"Notice-module__title___6H5tc","ux-recommendation":"Notice-module__ux-recommendation___N8BuK",caution:"Notice-module__caution___hPrVl",deprecation:"Notice-module__deprecation___g1drA",maintenance:"Notice-module__maintenance___kWLIZ",important:"Notice-module__important___p5DiF","not-supported":"Notice-module__not-supported___34bHd",paragraph:"Notice-module__paragraph___5h-w1",list:"Notice-module__list___M2Kxj"}},16576:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Placeholder-module__clinical-lowlight-theme___Obm9K","orion-fusion-theme":"Placeholder-module__orion-fusion-theme___svHY+",placeholder:"Placeholder-module__placeholder___ZZDXd",inner:"Placeholder-module__inner___fJq9o",title:"Placeholder-module__title___teBSo"}},58168:function(e,t,n){function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},a.apply(this,arguments)}n.d(t,{A:function(){return a}})},53986:function(e,t,n){function a(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}n.d(t,{A:function(){return a}})}}]);