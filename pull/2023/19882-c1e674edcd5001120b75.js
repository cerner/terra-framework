"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[19882,33377,43089],{49271:function(e,t,n){var a=n(64836),l=n(18698);t.Z=void 0;var o=a(n(27424)),r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=l(e)&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var a={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var c=o?Object.getOwnPropertyDescriptor(e,r):null;c&&(c.get||c.set)?Object.defineProperty(a,r,c):a[r]=e[r]}return a.default=e,n&&n.set(e,a),a}(n(67294)),c=a(n(45697)),s=a(n(19845)),i=n(21538),d=a(n(33864)),u=a(n(23399)),m=n(51051),p=a(n(53560));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}var _=s.default.bind(p.default),h={example:c.default.element,exampleSrc:c.default.element,exampleCssSrc:c.default.element,title:c.default.string,description:c.default.node,isExpanded:c.default.bool},y=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},b=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},v=function(e){var t=e.example,n=e.exampleSrc,a=e.exampleCssSrc,l=e.title,c=e.description,s=e.isExpanded,p=(0,r.useState)(s),f=(0,o.default)(p,2),h=f[0],v=f[1],x=(0,r.useState)(!1),E=(0,o.default)(x,2),N=E[0],T=E[1],g=r.default.useContext(i.ThemeContext),w=void 0!==a,C=function(){T(!N),h&&v(!h)},O=function(){v(!h),N&&T(!N)},S=function(e,t){e.nativeEvent.keyCode!==m.KEY_SPACE&&e.nativeEvent.keyCode!==m.KEY_RETURN||(e.preventDefault(),t())};return r.default.createElement("div",{className:_("template",g.className)},r.default.createElement("div",{className:_("header")},l&&r.default.createElement("h2",{className:_("title")},l)),r.default.createElement("div",{className:_("content")},c&&r.default.createElement("div",{className:_("description")},c),t),r.default.createElement("div",{className:_("footer")},n?r.default.createElement("div",{className:_("button-container")},w&&r.default.createElement("button",{type:"button",className:_("css-toggle","item",{"is-selected":N}),onClick:C,onKeyDown:function(e){return S(e,C)},onBlur:y,onMouseDown:b,tabIndex:0,"data-focus-styles-enabled":!0},r.default.createElement(d.default,{className:_("chevron")}),r.default.createElement("span",null,"CSS"),r.default.createElement(u.default,{className:_("chevron")})),r.default.createElement("button",{type:"button",className:_("code-toggle","item",{"is-selected":h}),onClick:O,onKeyDown:function(e){return S(e,O)},onBlur:y,onMouseDown:b,tabIndex:0,"data-focus-styles-enabled":!0},r.default.createElement(d.default,{className:_("chevron")}),r.default.createElement("span",null,"Code"),r.default.createElement(u.default,{className:_("chevron")}))):null,r.default.createElement("div",null,N&&r.default.createElement("div",{className:_("css")},a),h&&r.default.createElement("div",{className:_("code")},n))))};v.propTypes=h,v.defaultProps={isExpanded:!1};t.Z=v},16157:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var a=n(87462),l=n(44925),o=n(67294),r=n(81254),c=n(40197),s=["components"],i={};function d(e){var t=e.components,n=(0,l.Z)(e,s);return(0,r.mdx)("wrapper",(0,a.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Table from 'terra-table';\n\nconst tableDataJSON = {\n  cols: [\n    { id: 'Column-0', displayName: 'Patient' },\n    { id: 'Column-1', displayName: 'Location' },\n    { id: 'Column-2', displayName: 'Illness Severity' },\n    { id: 'Column-3', displayName: 'Visit' },\n    { id: 'Column-4', displayName: 'Allergy' },\n    { id: 'Column-5', displayName: 'Primary Contact' },\n  ],\n  rows: [\n    {\n      id: '1',\n      cells: [\n        { content: 'Fleck, Arthur' },\n        { content: '1007-MTN' },\n        { content: 'Unstable' },\n        { content: 'Inpatient, 2 months' },\n        { content: '' },\n        { content: 'Quinzell, Harleen' },\n      ],\n    },\n    {\n      id: '2',\n      isSelected: true,\n      cells: [\n        { content: 'Wayne, Bruce' },\n        { content: '1007-MTN-DR' },\n        { content: 'Stable' },\n        { content: 'Outpatient, 2 days' },\n        { content: 'Phytochemicals' },\n        { content: 'Grayson, Richard' },\n      ],\n    },\n    {\n      id: '3',\n      cells: [\n        { content: 'Parker, Peter' },\n        { content: '1018-MTN-DR' },\n        { content: 'Severe' },\n        { content: 'Inpatient, 2 days' },\n        { content: 'Aspirin' },\n        { content: 'Grayson, Richard' },\n      ],\n    },\n  ],\n};\n\nconst TableWithoutHeaders = () => {\n  const { cols, rows } = tableDataJSON;\n\n  return (\n    <Table\n      id=\"table-without-headers\"\n      overflowColumns={cols}\n      rows={rows}\n      hasVisibleColumnHeaders={false}\n    />\n  );\n};\n\nexport default TableWithoutHeaders;\n\n")))}d.isMDXComponent=!0;var u=n(49271),m=function(e){var t=e.title,n=e.description,a=e.isExpanded;return o.createElement(u.Z,{title:t||"Table Without Headers",description:n,example:o.createElement(c.Z,null),exampleSrc:o.createElement(d,null),isExpanded:a})},p=["components"],f={},_="wrapper";function h(e){var t=e.components,n=(0,l.Z)(e,p);return(0,r.mdx)(_,(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"headerless-table"},"Headerless Table"),(0,r.mdx)("h3",{id:"description"},"Description"),(0,r.mdx)("p",null,"This example demonstrates a ",(0,r.mdx)("a",{parentName:"p",href:"/terra-framework/pull/2023/components/cerner-terra-framework-docs/table/about"},"Table")," component without column headers.\nThe column headers still exist in the Document Object Model (DOM) for proper accessibility support. However, they are hidden from the user's view.\nEnsure that you account for these factors during implementation."),(0,r.mdx)("h3",{id:"required-properties"},"Required Properties"),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"hasVisibleColumnHeaders"),": A Boolean value indicating whether the table columns are displayed. Setting the value to ",(0,r.mdx)("strong",{parentName:"p"},"false")," hides the columns, but a screen reader still reads the column header values."),(0,r.mdx)(m,{title:"Table Without Column Headers",mdxType:"TableWithoutHeaders"}))}h.isMDXComponent=!0},40197:function(e,t,n){var a=n(64836);t.Z=void 0;var l=a(n(67294)),o=a(n(12810)),r=[{id:"Column-0",displayName:"Patient"},{id:"Column-1",displayName:"Location"},{id:"Column-2",displayName:"Illness Severity"},{id:"Column-3",displayName:"Visit"},{id:"Column-4",displayName:"Allergy"},{id:"Column-5",displayName:"Primary Contact"}],c=[{id:"1",cells:[{content:"Fleck, Arthur"},{content:"1007-MTN"},{content:"Unstable"},{content:"Inpatient, 2 months"},{content:""},{content:"Quinzell, Harleen"}]},{id:"2",isSelected:!0,cells:[{content:"Wayne, Bruce"},{content:"1007-MTN-DR"},{content:"Stable"},{content:"Outpatient, 2 days"},{content:"Phytochemicals"},{content:"Grayson, Richard"}]},{id:"3",cells:[{content:"Parker, Peter"},{content:"1018-MTN-DR"},{content:"Severe"},{content:"Inpatient, 2 days"},{content:"Aspirin"},{content:"Grayson, Richard"}]}];t.Z=function(){var e=r,t=c;return l.default.createElement(o.default,{id:"table-without-headers",overflowColumns:e,rows:t,hasVisibleColumnHeaders:!1})}},53560:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},87462:function(e,t,n){function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},a.apply(this,arguments)}n.d(t,{Z:function(){return a}})},44925:function(e,t,n){function a(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}n.d(t,{Z:function(){return a}})}}]);