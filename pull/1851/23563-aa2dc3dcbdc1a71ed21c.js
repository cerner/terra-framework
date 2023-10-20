"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[23563],{49271:function(e,t,n){var a=n(64836),l=n(18698);t.Z=void 0;var r=a(n(27424)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==l(e)&&"function"!=typeof e)return{default:e};var n=p(t);if(n&&n.has(e))return n.get(e);var a={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var c=r?Object.getOwnPropertyDescriptor(e,o):null;c&&(c.get||c.set)?Object.defineProperty(a,o,c):a[o]=e[o]}a.default=e,n&&n.set(e,a);return a}(n(67294)),c=a(n(45697)),u=a(n(47166)),d=n(21538),i=a(n(33864)),s=a(n(23399)),m=n(51051),f=a(n(53560));function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(p=function(e){return e?n:t})(e)}var _=u.default.bind(f.default),v={example:c.default.element,exampleSrc:c.default.element,exampleCssSrc:c.default.element,title:c.default.string,description:c.default.node,isExpanded:c.default.bool},h=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},y=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},b=function(e){var t=e.example,n=e.exampleSrc,a=e.exampleCssSrc,l=e.title,c=e.description,u=e.isExpanded,f=(0,o.useState)(u),p=(0,r.default)(f,2),v=p[0],b=p[1],w=(0,o.useState)(!1),E=(0,r.default)(w,2),g=E[0],x=E[1],O=o.default.useContext(d.ThemeContext),C=void 0!==a,N=function(){x(!g),v&&b(!v)},D=function(){b(!v),g&&x(!g)},T=function(e,t){e.nativeEvent.keyCode!==m.KEY_SPACE&&e.nativeEvent.keyCode!==m.KEY_RETURN||(e.preventDefault(),t())};return o.default.createElement("div",{className:_("template",O.className)},o.default.createElement("div",{className:_("header")},l&&o.default.createElement("h2",{className:_("title")},l)),o.default.createElement("div",{className:_("content")},c&&o.default.createElement("div",{className:_("description")},c),t),o.default.createElement("div",{className:_("footer")},n?o.default.createElement("div",{className:_("button-container")},C&&o.default.createElement("button",{type:"button",className:_("css-toggle","item",{"is-selected":g}),onClick:N,onKeyDown:function(e){return T(e,N)},onBlur:h,onMouseDown:y,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(i.default,{className:_("chevron")}),o.default.createElement("span",null,"CSS"),o.default.createElement(s.default,{className:_("chevron")})),o.default.createElement("button",{type:"button",className:_("code-toggle","item",{"is-selected":v}),onClick:D,onKeyDown:function(e){return T(e,D)},onBlur:h,onMouseDown:y,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(i.default,{className:_("chevron")}),o.default.createElement("span",null,"Code"),o.default.createElement(s.default,{className:_("chevron")}))):null,o.default.createElement("div",null,g&&o.default.createElement("div",{className:_("css")},a),v&&o.default.createElement("div",{className:_("code")},n))))};b.propTypes=v,b.defaultProps={isExpanded:!1};var w=b;t.Z=w},79195:function(e,t,n){n.r(t),n.d(t,{default:function(){return i}});var a=n(87462),l=n(44925),r=(n(67294),n(81254)),o=n(47959),c=["components"],u={},d="wrapper";function i(e){var t=e.components,n=(0,l.Z)(e,c);return(0,r.mdx)(d,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)(o.Z,{title:"Default Flowsheet Data Grid",mdxType:"DefaultFlowsheetDataGrid"}))}i.isMDXComponent=!0},47959:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(67294),l=n(25397),r=n(87462),o=n(44925),c=n(81254),u=["components"],d={};function i(e){var t=e.components,n=(0,o.Z)(e,u);return(0,c.mdx)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,c.mdx)("pre",null,(0,c.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { FlowsheetDataGrid } from 'terra-data-grid';\n\nconst gridDataJSON = {\n  cols: [\n    { id: 'Column-0', displayName: 'Vitals', isSelectable: false },\n    { id: 'Column-1', displayName: 'March 16' },\n    { id: 'Column-2', displayName: 'March 17' },\n    { id: 'Column-3', displayName: 'March 18' },\n  ],\n  rows: [\n    {\n      id: '1',\n      cells: [\n        { content: 'Heart Rate Monitored (bpm)' },\n        { content: '68' },\n        { content: '66' },\n        { content: '67' },\n      ],\n    },\n    {\n      id: '2',\n      cells: [\n        { content: 'Temperature Oral (degC)' },\n        { content: '36.7' },\n        { content: '36.9' },\n        { content: '37' },\n      ],\n    },\n    {\n      id: '3',\n      cells: [\n        { content: 'Cardiac Index (L/min/m2)' },\n        { content: '2.25' },\n        { content: '2.28' },\n        { content: '2.8' },\n      ],\n    },\n    {\n      id: '4',\n      cells: [\n        { content: 'ICP (mmHg)' },\n        { content: '11' },\n        { content: '11' },\n        { content: '12' },\n      ],\n    },\n    {\n      id: '5',\n      cells: [\n        { content: 'CPP (mmHg)' },\n        { content: '63' },\n        { content: '47' },\n        { content: '48' },\n      ],\n    },\n  ],\n};\n\nconst DefaultFlowsheetDataGrid = () => {\n  const { cols, rows } = gridDataJSON;\n\n  return (\n    <FlowsheetDataGrid\n      id=\"default-terra-flowsheet-data-grid\"\n      columns={cols}\n      rows={rows}\n      ariaLabel=\"Flowsheet Data Grid\"\n    />\n  );\n};\n\nexport default DefaultFlowsheetDataGrid;\n\n")))}i.isMDXComponent=!0;var s=n(49271),m=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.createElement(s.Z,{title:t||"Default Flowsheet Data Grid",description:n,example:a.createElement(l.Z,null),exampleSrc:a.createElement(i,null),isExpanded:r})}},25397:function(e,t,n){var a=n(64836);t.Z=void 0;var l=a(n(67294)),r=n(55730),o=[{id:"Column-0",displayName:"Vitals",isSelectable:!1},{id:"Column-1",displayName:"March 16"},{id:"Column-2",displayName:"March 17"},{id:"Column-3",displayName:"March 18"}],c=[{id:"1",cells:[{content:"Heart Rate Monitored (bpm)"},{content:"68"},{content:"66"},{content:"67"}]},{id:"2",cells:[{content:"Temperature Oral (degC)"},{content:"36.7"},{content:"36.9"},{content:"37"}]},{id:"3",cells:[{content:"Cardiac Index (L/min/m2)"},{content:"2.25"},{content:"2.28"},{content:"2.8"}]},{id:"4",cells:[{content:"ICP (mmHg)"},{content:"11"},{content:"11"},{content:"12"}]},{id:"5",cells:[{content:"CPP (mmHg)"},{content:"63"},{content:"47"},{content:"48"}]}];t.Z=function(){var e=o,t=c;return l.default.createElement(r.FlowsheetDataGrid,{id:"default-terra-flowsheet-data-grid",columns:e,rows:t,ariaLabel:"Flowsheet Data Grid"})}},53560:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},33864:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(67294)),l=r(n(99139));function r(e){return e&&e.__esModule?e:{default:e}}function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}var c=function(e){var t=o({},e);return a.default.createElement(l.default,t,a.default.createElement("path",{d:"M10.3 24 33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};c.displayName="IconChevronLeft",c.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};t.default=c},84784:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(67294)),l=r(n(99139));function r(e){return e&&e.__esModule?e:{default:e}}function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}var c=function(e){var t=o({},e);return a.default.createElement(l.default,t,a.default.createElement("path",{d:"m47.9 24.5-3.8-3.8L27 37.4V0h-6v37.4L3.9 20.7.1 24.5 24 48z"}))};c.displayName="IconDown",c.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};t.default=c},33710:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(67294)),l=r(n(99139));function r(e){return e&&e.__esModule?e:{default:e}}function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}var c=function(e){var t=o({},e);return a.default.createElement(l.default,t,a.default.createElement("path",{d:"M24 0 .1 23.5l3.8 3.8L21 10.6V48h6V10.6l17.1 16.7 3.8-3.8z"}))};c.displayName="IconUp",c.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};t.default=c},87462:function(e,t,n){function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},a.apply(this,arguments)}n.d(t,{Z:function(){return a}})},44925:function(e,t,n){function a(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}n.d(t,{Z:function(){return a}})}}]);