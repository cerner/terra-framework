"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[80334],{49271:function(e,t,n){var a=n(64836),l=n(18698);t.Z=void 0;var o=a(n(27424)),r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==l(e)&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var a={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var c=o?Object.getOwnPropertyDescriptor(e,r):null;c&&(c.get||c.set)?Object.defineProperty(a,r,c):a[r]=e[r]}a.default=e,n&&n.set(e,a);return a}(n(67294)),c=a(n(45697)),u=a(n(47166)),i=n(21538),d=a(n(33864)),s=a(n(23399)),m=n(51051),p=a(n(53560));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}var _=u.default.bind(p.default),v={example:c.default.element,exampleSrc:c.default.element,exampleCssSrc:c.default.element,title:c.default.string,description:c.default.node,isExpanded:c.default.bool},y=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},b=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},h=function(e){var t=e.example,n=e.exampleSrc,a=e.exampleCssSrc,l=e.title,c=e.description,u=e.isExpanded,p=(0,r.useState)(u),f=(0,o.default)(p,2),v=f[0],h=f[1],E=(0,r.useState)(!1),x=(0,o.default)(E,2),w=x[0],g=x[1],N=r.default.useContext(i.ThemeContext),T=void 0!==a,O=function(){g(!w),v&&h(!v)},C=function(){h(!v),w&&g(!w)},P=function(e,t){e.nativeEvent.keyCode!==m.KEY_SPACE&&e.nativeEvent.keyCode!==m.KEY_RETURN||(e.preventDefault(),t())};return r.default.createElement("div",{className:_("template",N.className)},r.default.createElement("div",{className:_("header")},l&&r.default.createElement("h2",{className:_("title")},l)),r.default.createElement("div",{className:_("content")},c&&r.default.createElement("div",{className:_("description")},c),t),r.default.createElement("div",{className:_("footer")},n?r.default.createElement("div",{className:_("button-container")},T&&r.default.createElement("button",{type:"button",className:_("css-toggle","item",{"is-selected":w}),onClick:O,onKeyDown:function(e){return P(e,O)},onBlur:y,onMouseDown:b,tabIndex:0,"data-focus-styles-enabled":!0},r.default.createElement(d.default,{className:_("chevron")}),r.default.createElement("span",null,"CSS"),r.default.createElement(s.default,{className:_("chevron")})),r.default.createElement("button",{type:"button",className:_("code-toggle","item",{"is-selected":v}),onClick:C,onKeyDown:function(e){return P(e,C)},onBlur:y,onMouseDown:b,tabIndex:0,"data-focus-styles-enabled":!0},r.default.createElement(d.default,{className:_("chevron")}),r.default.createElement("span",null,"Code"),r.default.createElement(s.default,{className:_("chevron")}))):null,r.default.createElement("div",null,w&&r.default.createElement("div",{className:_("css")},a),v&&r.default.createElement("div",{className:_("code")},n))))};h.propTypes=v,h.defaultProps={isExpanded:!1};var E=h;t.Z=E},16157:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var a=n(87462),l=n(44925),o=n(67294),r=n(81254),c=n(40197),u=["components"],i={};function d(e){var t=e.components,n=(0,l.Z)(e,u);return(0,r.mdx)("wrapper",(0,a.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Table from 'terra-table';\n\nconst tableDataJSON = {\n  cols: [\n    { id: 'Column-0', displayName: 'Patient' },\n    { id: 'Column-1', displayName: 'Location' },\n    { id: 'Column-2', displayName: 'Illness Severity' },\n    { id: 'Column-3', displayName: 'Visit' },\n    { id: 'Column-4', displayName: 'Allergy' },\n    { id: 'Column-5', displayName: 'Primary Contact' },\n  ],\n  rows: [\n    {\n      id: '1',\n      cells: [\n        { content: 'Fleck, Arthur' },\n        { content: '1007-MTN' },\n        { content: 'Unstable' },\n        { content: 'Inpatient, 2 months' },\n        { content: '' },\n        { content: 'Quinzell, Harleen' },\n      ],\n    },\n    {\n      id: '2',\n      isSelected: true,\n      cells: [\n        { content: 'Wayne, Bruce' },\n        { content: '1007-MTN-DR' },\n        { content: 'Stable' },\n        { content: 'Outpatient, 2 days' },\n        { content: 'Phytochemicals' },\n        { content: 'Grayson, Richard' },\n      ],\n    },\n    {\n      id: '3',\n      cells: [\n        { content: 'Parker, Peter' },\n        { content: '1018-MTN-DR' },\n        { content: 'Severe' },\n        { content: 'Inpatient, 2 days' },\n        { content: 'Aspirin' },\n        { content: 'Grayson, Richard' },\n      ],\n    },\n  ],\n};\n\nconst TableWithoutHeaders = () => {\n  const { cols, rows } = tableDataJSON;\n\n  return (\n    <Table\n      id=\"table-without-headers\"\n      overflowColumns={cols}\n      rows={rows}\n      hasColumnHeaders={false}\n    />\n  );\n};\n\nexport default TableWithoutHeaders;\n\n")))}d.isMDXComponent=!0;var s=n(49271),m=function(e){var t=e.title,n=e.description,a=e.isExpanded;return o.createElement(s.Z,{title:t||"Table Without Headers",description:n,example:o.createElement(c.Z,null),exampleSrc:o.createElement(d,null),isExpanded:a})},p=["components"],f={},_="wrapper";function v(e){var t=e.components,n=(0,l.Z)(e,p);return(0,r.mdx)(_,(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)(m,{title:"Table Without Column Headers",mdxType:"TableWithoutHeaders"}))}v.isMDXComponent=!0},40197:function(e,t,n){var a=n(64836);t.Z=void 0;var l=a(n(67294)),o=a(n(12810)),r=[{id:"Column-0",displayName:"Patient"},{id:"Column-1",displayName:"Location"},{id:"Column-2",displayName:"Illness Severity"},{id:"Column-3",displayName:"Visit"},{id:"Column-4",displayName:"Allergy"},{id:"Column-5",displayName:"Primary Contact"}],c=[{id:"1",cells:[{content:"Fleck, Arthur"},{content:"1007-MTN"},{content:"Unstable"},{content:"Inpatient, 2 months"},{content:""},{content:"Quinzell, Harleen"}]},{id:"2",isSelected:!0,cells:[{content:"Wayne, Bruce"},{content:"1007-MTN-DR"},{content:"Stable"},{content:"Outpatient, 2 days"},{content:"Phytochemicals"},{content:"Grayson, Richard"}]},{id:"3",cells:[{content:"Parker, Peter"},{content:"1018-MTN-DR"},{content:"Severe"},{content:"Inpatient, 2 days"},{content:"Aspirin"},{content:"Grayson, Richard"}]}];t.Z=function(){var e=r,t=c;return l.default.createElement(o.default,{id:"table-without-headers",overflowColumns:e,rows:t,hasColumnHeaders:!1})}},53560:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},33864:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(67294)),l=o(n(99139));function o(e){return e&&e.__esModule?e:{default:e}}function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}var c=function(e){var t=r({},e);return a.default.createElement(l.default,t,a.default.createElement("path",{d:"M10.3 24 33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};c.displayName="IconChevronLeft",c.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};t.default=c},84784:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(67294)),l=o(n(99139));function o(e){return e&&e.__esModule?e:{default:e}}function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}var c=function(e){var t=r({},e);return a.default.createElement(l.default,t,a.default.createElement("path",{d:"m47.9 24.5-3.8-3.8L27 37.4V0h-6v37.4L3.9 20.7.1 24.5 24 48z"}))};c.displayName="IconDown",c.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};t.default=c},33710:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(67294)),l=o(n(99139));function o(e){return e&&e.__esModule?e:{default:e}}function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}var c=function(e){var t=r({},e);return a.default.createElement(l.default,t,a.default.createElement("path",{d:"M24 0 .1 23.5l3.8 3.8L21 10.6V48h6V10.6l17.1 16.7 3.8-3.8z"}))};c.displayName="IconUp",c.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};t.default=c},87462:function(e,t,n){function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},a.apply(this,arguments)}n.d(t,{Z:function(){return a}})},44925:function(e,t,n){function a(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}n.d(t,{Z:function(){return a}})}}]);