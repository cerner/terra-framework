"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[11155],{49271:function(e,t,n){var l=n(64836),a=n(18698);t.Z=void 0;var o=l(n(27424)),r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var l={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var i=o?Object.getOwnPropertyDescriptor(e,r):null;i&&(i.get||i.set)?Object.defineProperty(l,r,i):l[r]=e[r]}return l.default=e,n&&n.set(e,l),l}(n(67294)),i=l(n(45697)),c=l(n(19845)),m=n(21538),d=l(n(33864)),u=l(n(23399)),s=n(51051),p=l(n(53560));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}var h=c.default.bind(p.default),g={example:i.default.element,exampleSrc:i.default.element,exampleCssSrc:i.default.element,title:i.default.string,description:i.default.node,isExpanded:i.default.bool},_=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},x=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},E=function(e){var t=e.example,n=e.exampleSrc,l=e.exampleCssSrc,a=e.title,i=e.description,c=e.isExpanded,p=(0,r.useState)(c),f=(0,o.default)(p,2),g=f[0],E=f[1],b=(0,r.useState)(!1),v=(0,o.default)(b,2),w=v[0],C=v[1],y=r.default.useContext(m.ThemeContext),N=void 0!==l,T=function(){C(!w),g&&E(!g)},D=function(){E(!g),w&&C(!w)},O=function(e,t){e.nativeEvent.keyCode!==s.KEY_SPACE&&e.nativeEvent.keyCode!==s.KEY_RETURN||(e.preventDefault(),t())};return r.default.createElement("div",{className:h("template",y.className)},r.default.createElement("div",{className:h("header")},a&&r.default.createElement("h2",{className:h("title")},a)),r.default.createElement("div",{className:h("content")},i&&r.default.createElement("div",{className:h("description")},i),t),r.default.createElement("div",{className:h("footer")},n?r.default.createElement("div",{className:h("button-container")},N&&r.default.createElement("button",{type:"button",className:h("css-toggle","item",{"is-selected":w}),onClick:T,onKeyDown:function(e){return O(e,T)},onBlur:_,onMouseDown:x,tabIndex:0,"data-focus-styles-enabled":!0},r.default.createElement(d.default,{className:h("chevron")}),r.default.createElement("span",null,"CSS"),r.default.createElement(u.default,{className:h("chevron")})),r.default.createElement("button",{type:"button",className:h("code-toggle","item",{"is-selected":g}),onClick:D,onKeyDown:function(e){return O(e,D)},onBlur:_,onMouseDown:x,tabIndex:0,"data-focus-styles-enabled":!0},r.default.createElement(d.default,{className:h("chevron")}),r.default.createElement("span",null,"Code"),r.default.createElement(u.default,{className:h("chevron")}))):null,r.default.createElement("div",null,w&&r.default.createElement("div",{className:h("css")},l),g&&r.default.createElement("div",{className:h("code")},n))))};E.propTypes=g,E.defaultProps={isExpanded:!1};t.Z=E},61738:function(e,t,n){n.r(t),n.d(t,{default:function(){return g}});var l=n(87462),a=n(44925),o=n(67294),r=n(81254),i=n(76999),c=["components"],m={};function d(e){var t=e.components,n=(0,a.Z)(e,c);return(0,r.mdx)("wrapper",(0,l.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { FlowsheetDataGrid } from 'terra-data-grid';\n\nconst ColumnHighlightGreen = () => {\n  const gridDataJSON = {\n    cols: [\n      { id: 'Column-0', displayName: 'Vitals' },\n      { id: 'Column-1', displayName: 'March 16' },\n      {\n        id: 'Column-2',\n        displayName: 'March 17',\n        columnHighlightColor: 'green',\n        columnHighlightDescription: 'Selected time',\n      },\n      { id: 'Column-3', displayName: 'March 18' },\n    ],\n    rows: [\n      {\n        id: '1',\n        cells: [\n          { content: 'Heart Rate Monitored (bpm)' },\n          { content: '68' },\n          { content: '66' },\n          { content: '67' },\n        ],\n      },\n      {\n        id: '2',\n        cells: [\n          { content: 'Temperature Oral (degC)' },\n          { content: '36.7' },\n          { content: '36.9' },\n          { content: '37' },\n        ],\n      },\n      {\n        id: '3',\n        cells: [\n          { content: 'Cardiac Index (L/min/m2)' },\n          { content: '2.25' },\n          { content: '2.28' },\n          { content: '2.8' },\n        ],\n      },\n      {\n        id: '4',\n        cells: [\n          { content: 'ICP (mmHg)' },\n          { content: '11' },\n          { content: '11' },\n          { content: '12' },\n        ],\n      },\n      {\n        id: '5',\n        cells: [\n          { content: 'CPP (mmHg)' },\n          { content: '63' },\n          { content: '47' },\n          { content: '48' },\n        ],\n      },\n    ],\n  };\n\n  const { cols, rows } = gridDataJSON;\n\n  return (\n    <FlowsheetDataGrid\n      id=\"terra-flowsheet-data-grid-column-highlight-green\"\n      columns={cols}\n      rows={rows}\n      ariaLabel=\"Flowsheet Data Grid\"\n      columnHighlightId=\"Column-2\"\n      columnHighlightColor=\"green\"\n    />\n  );\n};\n\nexport default ColumnHighlightGreen;\n\n")))}d.isMDXComponent=!0;var u=n(49271),s=function(e){var t=e.title,n=e.description,l=e.isExpanded;return o.createElement(u.Z,{title:t||"Column Highlight Green",description:n,example:o.createElement(i.Z,null),exampleSrc:o.createElement(d,null),isExpanded:l})},p=["components"],f={},h="wrapper";function g(e){var t=e.components,n=(0,a.Z)(e,p);return(0,r.mdx)(h,(0,l.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"flowsheet-data-grid-with-green-column-highlighting"},"Flowsheet Data Grid with green column highlighting"),(0,r.mdx)("h3",{id:"description"},"Description"),(0,r.mdx)("p",null,"This example demonstrates a basic ",(0,r.mdx)("a",{parentName:"p",href:"/terra-framework/pull/1985/components/cerner-terra-framework-docs/data-grid/flowsheet-data-grid/about"},"Flowsheet Data Grid")," with green column highlighting."),(0,r.mdx)("p",null,"Below are the attributes used for column highlighting."),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"columnHighlightColor")," can be used to set highlight colour to either Orange or Green."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"columnHighlightDescription")," can be used to provide context regarding the highlighted column to screen readers.")),(0,r.mdx)(s,{title:"Flowsheet Data Grid with green column highlight",mdxType:"ColumnHighlightGreen"}))}g.isMDXComponent=!0},76999:function(e,t,n){var l=n(64836);t.Z=void 0;var a=l(n(67294)),o=n(55730);t.Z=function(){var e=[{id:"Column-0",displayName:"Vitals"},{id:"Column-1",displayName:"March 16"},{id:"Column-2",displayName:"March 17",columnHighlightColor:"green",columnHighlightDescription:"Selected time"},{id:"Column-3",displayName:"March 18"}],t=[{id:"1",cells:[{content:"Heart Rate Monitored (bpm)"},{content:"68"},{content:"66"},{content:"67"}]},{id:"2",cells:[{content:"Temperature Oral (degC)"},{content:"36.7"},{content:"36.9"},{content:"37"}]},{id:"3",cells:[{content:"Cardiac Index (L/min/m2)"},{content:"2.25"},{content:"2.28"},{content:"2.8"}]},{id:"4",cells:[{content:"ICP (mmHg)"},{content:"11"},{content:"11"},{content:"12"}]},{id:"5",cells:[{content:"CPP (mmHg)"},{content:"63"},{content:"47"},{content:"48"}]}];return a.default.createElement(o.FlowsheetDataGrid,{id:"terra-flowsheet-data-grid-column-highlight-green",columns:e,rows:t,ariaLabel:"Flowsheet Data Grid",columnHighlightId:"Column-2",columnHighlightColor:"green"})}},53560:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},87462:function(e,t,n){function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},l.apply(this,arguments)}n.d(t,{Z:function(){return l}})},44925:function(e,t,n){function l(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},o=Object.keys(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}n.d(t,{Z:function(){return l}})}}]);