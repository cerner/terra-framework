"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[80668],{201:function(e,t,n){var l=n(24994),a=n(73738);t.A=void 0;var o=l(n(85715)),r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var l={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&{}.hasOwnProperty.call(e,r)){var c=o?Object.getOwnPropertyDescriptor(e,r):null;c&&(c.get||c.set)?Object.defineProperty(l,r,c):l[r]=e[r]}return l.default=e,n&&n.set(e,l),l}(n(96540)),c=l(n(5556)),s=l(n(67967)),u=n(92912),d=l(n(49558)),i=l(n(53665)),m=n(25966),p=l(n(89986));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}var _=s.default.bind(p.default),x={example:c.default.element,exampleSrc:c.default.element,exampleCssSrc:c.default.element,title:c.default.string,description:c.default.node,isExpanded:c.default.bool},h=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},E=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},v=function(e){var t=e.example,n=e.exampleSrc,l=e.exampleCssSrc,a=e.title,c=e.description,s=e.isExpanded,p=(0,r.useState)(s),f=(0,o.default)(p,2),x=f[0],v=f[1],y=(0,r.useState)(!1),b=(0,o.default)(y,2),g=b[0],w=b[1],N=r.default.useContext(u.ThemeContext),C=void 0!==l,T=function(){w(!g),x&&v(!x)},O=function(){v(!x),g&&w(!g)},D=function(e,t){e.nativeEvent.keyCode!==m.KEY_SPACE&&e.nativeEvent.keyCode!==m.KEY_RETURN||(e.preventDefault(),t())};return r.default.createElement("div",{className:_("template",N.className)},r.default.createElement("div",{className:_("header")},a&&r.default.createElement("h2",{className:_("title")},a)),r.default.createElement("div",{className:_("content")},c&&r.default.createElement("div",{className:_("description")},c),t),r.default.createElement("div",{className:_("footer")},n?r.default.createElement("div",{className:_("button-container")},C&&r.default.createElement("button",{type:"button",className:_("css-toggle","item",{"is-selected":g}),onClick:T,onKeyDown:function(e){return D(e,T)},onBlur:h,onMouseDown:E,tabIndex:0,"data-focus-styles-enabled":!0},r.default.createElement(d.default,{className:_("chevron")}),r.default.createElement("span",null,"CSS"),r.default.createElement(i.default,{className:_("chevron")})),r.default.createElement("button",{type:"button",className:_("code-toggle","item",{"is-selected":x}),onClick:O,onKeyDown:function(e){return D(e,O)},onBlur:h,onMouseDown:E,tabIndex:0,"data-focus-styles-enabled":!0},r.default.createElement(d.default,{className:_("chevron")}),r.default.createElement("span",null,"Code"),r.default.createElement(i.default,{className:_("chevron")}))):null,r.default.createElement("div",null,g&&r.default.createElement("div",{className:_("css")},l),x&&r.default.createElement("div",{className:_("code")},n))))};v.propTypes=x,v.defaultProps={isExpanded:!1};t.A=v},33132:function(e,t,n){n.r(t),n.d(t,{default:function(){return x}});var l=n(58168),a=n(53986),o=n(96540),r=n(36665),c=n(93143),s=["components"],u={};function d(e){var t=e.components,n=(0,a.A)(e,s);return(0,r.mdx)("wrapper",(0,l.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { FlowsheetDataGrid } from 'terra-data-grid';\n\nconst gridDataJSON = {\n  cols: [\n    { id: 'Column-0', displayName: 'Vitals' },\n    { id: 'Column-1', displayName: 'March 16' },\n    { id: 'Column-2', displayName: 'March 17' },\n    { id: 'Column-3', displayName: 'March 18' },\n  ],\n  rows: [\n    {\n      id: '1',\n      cells: [\n        { content: 'Heart Rate Monitored (bpm)' },\n        { content: '68' },\n        { content: null },\n        { content: '67' },\n      ],\n    },\n    {\n      id: '2',\n      cells: [\n        { content: 'Temperature Oral (degC)' },\n        { content: null },\n        { content: '36.9' },\n        { content: null },\n      ],\n    },\n    {\n      id: '3',\n      cells: [\n        { content: 'Cardiac Index (L/min/m2)' },\n        { content: '2.25' },\n        { content: null },\n        { content: null },\n      ],\n    },\n    {\n      id: '4',\n      cells: [\n        { content: 'ICP (mmHg)' },\n        { content: null },\n        { content: '11' },\n        { content: '12' },\n      ],\n    },\n    {\n      id: '5',\n      cells: [\n        { content: 'CPP (mmHg)' },\n        { content: '63' },\n        { content: null },\n        { content: '48' },\n      ],\n    },\n  ],\n};\n\nconst NoResultCells = () => {\n  const { cols, rows } = gridDataJSON;\n\n  return (\n    <FlowsheetDataGrid\n      id=\"default-terra-flowsheet-data-grid-no-result-cells\"\n      columns={cols}\n      rows={rows}\n      ariaLabel=\"Flowsheet Data Grid with No Result Cells\"\n    />\n  );\n};\n\nexport default NoResultCells;\n\n")))}d.isMDXComponent=!0;var i=n(201),m=function(e){var t=e.title,n=e.description,l=e.isExpanded;return o.createElement(i.A,{title:t||"No Result Cells",description:n,example:o.createElement(c.A,null),exampleSrc:o.createElement(d,null),isExpanded:l})},p=["components"],f={},_="wrapper";function x(e){var t=e.components,n=(0,a.A)(e,p);return(0,r.mdx)(_,(0,l.A)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"no-result-cells"},"No Result Cells"),(0,r.mdx)("h3",{id:"description"},"Description"),(0,r.mdx)("p",null,"If the ",(0,r.mdx)("a",{parentName:"p",href:"/terra-framework/pull/2167/components/cerner-terra-framework-docs/data-grid/flowsheet-data-grid/about"},"content property"),' of a cell is an empty string, "--", or null, it is represented by two dashes and announced by assistive technologies as ',(0,r.mdx)("em",{parentName:"p"},"No result"),"."),(0,r.mdx)(m,{title:'Flowsheet Data Grid with "No Result" Cells',mdxType:"NoResultCells"}))}x.isMDXComponent=!0},93143:function(e,t,n){var l=n(24994);t.A=void 0;var a=l(n(96540)),o=n(45663),r=[{id:"Column-0",displayName:"Vitals"},{id:"Column-1",displayName:"March 16"},{id:"Column-2",displayName:"March 17"},{id:"Column-3",displayName:"March 18"}],c=[{id:"1",cells:[{content:"Heart Rate Monitored (bpm)"},{content:"68"},{content:null},{content:"67"}]},{id:"2",cells:[{content:"Temperature Oral (degC)"},{content:null},{content:"36.9"},{content:null}]},{id:"3",cells:[{content:"Cardiac Index (L/min/m2)"},{content:"2.25"},{content:null},{content:null}]},{id:"4",cells:[{content:"ICP (mmHg)"},{content:null},{content:"11"},{content:"12"}]},{id:"5",cells:[{content:"CPP (mmHg)"},{content:"63"},{content:null},{content:"48"}]}];t.A=function(){var e=r,t=c;return a.default.createElement(o.FlowsheetDataGrid,{id:"default-terra-flowsheet-data-grid-no-result-cells",columns:e,rows:t,ariaLabel:"Flowsheet Data Grid with No Result Cells"})}},89986:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},58168:function(e,t,n){function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},l.apply(this,arguments)}n.d(t,{A:function(){return l}})},53986:function(e,t,n){function l(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n={};for(var l in e)if(Object.prototype.hasOwnProperty.call(e,l)){if(t.indexOf(l)>=0)continue;n[l]=e[l]}return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}n.d(t,{A:function(){return l}})}}]);