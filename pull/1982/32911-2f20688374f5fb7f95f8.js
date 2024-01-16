"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[32911,33377,43089],{49271:function(e,t,n){var a=n(64836),l=n(18698);t.Z=void 0;var o=a(n(27424)),i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==l(e)&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var a={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var r=o?Object.getOwnPropertyDescriptor(e,i):null;r&&(r.get||r.set)?Object.defineProperty(a,i,r):a[i]=e[i]}a.default=e,n&&n.set(e,a);return a}(n(67294)),r=a(n(45697)),c=a(n(19845)),s=n(21538),d=a(n(33864)),m=a(n(23399)),u=n(51051),p=a(n(53560));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}var y=c.default.bind(p.default),b={example:r.default.element,exampleSrc:r.default.element,exampleCssSrc:r.default.element,title:r.default.string,description:r.default.node,isExpanded:r.default.bool},_=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},h=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},N=function(e){var t=e.example,n=e.exampleSrc,a=e.exampleCssSrc,l=e.title,r=e.description,c=e.isExpanded,p=(0,i.useState)(c),f=(0,o.default)(p,2),b=f[0],N=f[1],x=(0,i.useState)(!1),v=(0,o.default)(x,2),E=v[0],C=v[1],g=i.default.useContext(s.ThemeContext),T=void 0!==a,S=function(){C(!E),b&&N(!b)},w=function(){N(!b),E&&C(!E)},M=function(e,t){e.nativeEvent.keyCode!==u.KEY_SPACE&&e.nativeEvent.keyCode!==u.KEY_RETURN||(e.preventDefault(),t())};return i.default.createElement("div",{className:y("template",g.className)},i.default.createElement("div",{className:y("header")},l&&i.default.createElement("h2",{className:y("title")},l)),i.default.createElement("div",{className:y("content")},r&&i.default.createElement("div",{className:y("description")},r),t),i.default.createElement("div",{className:y("footer")},n?i.default.createElement("div",{className:y("button-container")},T&&i.default.createElement("button",{type:"button",className:y("css-toggle","item",{"is-selected":E}),onClick:S,onKeyDown:function(e){return M(e,S)},onBlur:_,onMouseDown:h,tabIndex:0,"data-focus-styles-enabled":!0},i.default.createElement(d.default,{className:y("chevron")}),i.default.createElement("span",null,"CSS"),i.default.createElement(m.default,{className:y("chevron")})),i.default.createElement("button",{type:"button",className:y("code-toggle","item",{"is-selected":b}),onClick:w,onKeyDown:function(e){return M(e,w)},onBlur:_,onMouseDown:h,tabIndex:0,"data-focus-styles-enabled":!0},i.default.createElement(d.default,{className:y("chevron")}),i.default.createElement("span",null,"Code"),i.default.createElement(m.default,{className:y("chevron")}))):null,i.default.createElement("div",null,E&&i.default.createElement("div",{className:y("css")},a),b&&i.default.createElement("div",{className:y("code")},n))))};N.propTypes=b,N.defaultProps={isExpanded:!1};var x=N;t.Z=x},37447:function(e,t,n){n.r(t),n.d(t,{default:function(){return b}});var a=n(87462),l=n(44925),o=n(67294),i=n(81254),r=n(13366),c=["components"],s={};function d(e){var t=e.components,n=(0,l.Z)(e,c);return(0,i.mdx)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Table from 'terra-table';\n\nconst tableDataJSON = {\n  cols: [\n    { id: 'Column-0', displayName: 'Patient' },\n    { id: 'Column-1', displayName: 'Location' },\n    { id: 'Column-2', displayName: 'Illness Severity' },\n    { id: 'Column-3', displayName: 'Visit' },\n    { id: 'Column-4', displayName: 'Allergy' },\n    { id: 'Column-5', displayName: 'Primary Contact' },\n    { id: 'Column-6', displayName: 'Generic Order Counts' },\n    { id: 'Column-7', displayName: 'Patient Age' },\n    { id: 'Column-8', displayName: 'Medication History' },\n    { id: 'Column-9', displayName: 'My Relationship' },\n    { id: 'Column-10', displayName: 'Not Selectable', isSelectable: false },\n  ],\n  rows: [\n    {\n      id: '1',\n      cells: [\n        { content: 'Fleck, Arthur' },\n        { content: '1007-MTN' },\n        { content: 'Unstable' },\n        { content: 'Inpatient, 2 months' },\n        { content: '' },\n        { content: 'Quinzell, Harleen' },\n        { content: '' },\n        { isMasked: true },\n        { isMasked: true },\n        { content: 'Admitting Physician' },\n        { content: '', isSelectable: false },\n      ],\n    },\n    {\n      id: '2',\n      cells: [\n        { content: 'Wayne, Bruce' },\n        { content: '1007-MTN-DR' },\n        { content: 'Stable' },\n        { content: 'Outpatient, 2 days' },\n        { content: 'Phytochemicals' },\n        { content: 'Grayson, Richard' },\n        { content: '' },\n        { content: '' },\n        { isMasked: true },\n        { content: 'Admitting Physician' },\n        { content: '', isSelectable: false },\n      ],\n    },\n    {\n      id: '3',\n      cells: [\n        { content: 'McDonald, Ronald' },\n        { content: '1007-MTN-RN' },\n        { content: 'Critical' },\n        { content: 'Inpatient, 2 days' },\n        { content: 'Phytochemicals' },\n        { content: 'Smith, Melissa' },\n        { content: '' },\n        { content: '' },\n        { isMasked: true },\n        { content: 'Family Physician' },\n        { content: '', isSelectable: false },\n      ],\n    },\n    {\n      id: '4',\n      cells: [\n        { content: 'Wayne, Bruce' },\n        { content: '1018-MTN-DR' },\n        { content: 'Stable' },\n        { content: 'Outpatient, 2 days' },\n        { content: 'Aspirin' },\n        { content: 'Jones, Gary' },\n        { content: '' },\n        { content: '' },\n        { isMasked: true },\n        { content: 'Primary Care Physician' },\n        { content: '', isSelectable: false },\n      ],\n    },\n  ],\n};\n\nconst ZebraStripedTable = () => {\n  const { cols, rows } = tableDataJSON;\n\n  return (\n    <Table\n      id=\"zebra-striped-table\"\n      overflowColumns={cols}\n      rows={rows}\n      isStriped\n      ariaLabel=\"Table with zebra striping\"\n    />\n  );\n};\n\nexport default ZebraStripedTable;\n\n")))}d.isMDXComponent=!0;var m=n(49271),u=function(e){var t=e.title,n=e.description,a=e.isExpanded;return o.createElement(m.Z,{title:t||"Zebra Striped Table",description:n,example:o.createElement(r.Z,null),exampleSrc:o.createElement(d,null),isExpanded:a})},p=["components"],f={},y="wrapper";function b(e){var t=e.components,n=(0,l.Z)(e,p);return(0,i.mdx)(y,(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"zebra-striping"},"Zebra Striping"),(0,i.mdx)("h3",{id:"description"},"Description"),(0,i.mdx)("p",null,"This example demonstrates a ",(0,i.mdx)("a",{parentName:"p",href:"/terra-framework/pull/1982/components/cerner-terra-framework-docs/table/about"},"Table")," component that has zebra striping enabled for its rows."),(0,i.mdx)("h3",{id:"required-properties"},"Required Properties"),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"isStriped"),": A Boolean value specifying whether the table has zebra striping for rows. A value of ",(0,i.mdx)("strong",{parentName:"p"},"true")," enables zebra striping."),(0,i.mdx)(u,{title:"Zebra Striped Table Example",mdxType:"ZebraStripedTable"}))}b.isMDXComponent=!0},13366:function(e,t,n){var a=n(64836);t.Z=void 0;var l=a(n(67294)),o=a(n(12810)),i=[{id:"Column-0",displayName:"Patient"},{id:"Column-1",displayName:"Location"},{id:"Column-2",displayName:"Illness Severity"},{id:"Column-3",displayName:"Visit"},{id:"Column-4",displayName:"Allergy"},{id:"Column-5",displayName:"Primary Contact"},{id:"Column-6",displayName:"Generic Order Counts"},{id:"Column-7",displayName:"Patient Age"},{id:"Column-8",displayName:"Medication History"},{id:"Column-9",displayName:"My Relationship"},{id:"Column-10",displayName:"Not Selectable",isSelectable:!1}],r=[{id:"1",cells:[{content:"Fleck, Arthur"},{content:"1007-MTN"},{content:"Unstable"},{content:"Inpatient, 2 months"},{content:""},{content:"Quinzell, Harleen"},{content:""},{isMasked:!0},{isMasked:!0},{content:"Admitting Physician"},{content:"",isSelectable:!1}]},{id:"2",cells:[{content:"Wayne, Bruce"},{content:"1007-MTN-DR"},{content:"Stable"},{content:"Outpatient, 2 days"},{content:"Phytochemicals"},{content:"Grayson, Richard"},{content:""},{content:""},{isMasked:!0},{content:"Admitting Physician"},{content:"",isSelectable:!1}]},{id:"3",cells:[{content:"McDonald, Ronald"},{content:"1007-MTN-RN"},{content:"Critical"},{content:"Inpatient, 2 days"},{content:"Phytochemicals"},{content:"Smith, Melissa"},{content:""},{content:""},{isMasked:!0},{content:"Family Physician"},{content:"",isSelectable:!1}]},{id:"4",cells:[{content:"Wayne, Bruce"},{content:"1018-MTN-DR"},{content:"Stable"},{content:"Outpatient, 2 days"},{content:"Aspirin"},{content:"Jones, Gary"},{content:""},{content:""},{isMasked:!0},{content:"Primary Care Physician"},{content:"",isSelectable:!1}]}];t.Z=function(){var e=i,t=r;return l.default.createElement(o.default,{id:"zebra-striped-table",overflowColumns:e,rows:t,isStriped:!0,ariaLabel:"Table with zebra striping"})}},53560:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},87462:function(e,t,n){function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},a.apply(this,arguments)}n.d(t,{Z:function(){return a}})},44925:function(e,t,n){function a(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}n.d(t,{Z:function(){return a}})}}]);