"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[79516],{49271:function(e,t,n){var a=n(64836),l=n(18698);t.Z=void 0;var o=a(n(27424)),c=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==l(e)&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var a={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in e)if("default"!==c&&Object.prototype.hasOwnProperty.call(e,c)){var i=o?Object.getOwnPropertyDescriptor(e,c):null;i&&(i.get||i.set)?Object.defineProperty(a,c,i):a[c]=e[c]}a.default=e,n&&n.set(e,a);return a}(n(67294)),i=a(n(45697)),r=a(n(47166)),s=n(21538),d=a(n(33864)),u=a(n(23399)),m=n(51051),p=a(n(53560));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}var y=r.default.bind(p.default),_={example:i.default.element,exampleSrc:i.default.element,exampleCssSrc:i.default.element,title:i.default.string,description:i.default.node,isExpanded:i.default.bool},b=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},v=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},h=function(e){var t=e.example,n=e.exampleSrc,a=e.exampleCssSrc,l=e.title,i=e.description,r=e.isExpanded,p=(0,c.useState)(r),f=(0,o.default)(p,2),_=f[0],h=f[1],N=(0,c.useState)(!1),E=(0,o.default)(N,2),C=E[0],x=E[1],g=c.default.useContext(s.ThemeContext),S=void 0!==a,T=function(){x(!C),_&&h(!_)},M=function(){h(!_),C&&x(!C)},w=function(e,t){e.nativeEvent.keyCode!==m.KEY_SPACE&&e.nativeEvent.keyCode!==m.KEY_RETURN||(e.preventDefault(),t())};return c.default.createElement("div",{className:y("template",g.className)},c.default.createElement("div",{className:y("header")},l&&c.default.createElement("h2",{className:y("title")},l)),c.default.createElement("div",{className:y("content")},i&&c.default.createElement("div",{className:y("description")},i),t),c.default.createElement("div",{className:y("footer")},n?c.default.createElement("div",{className:y("button-container")},S&&c.default.createElement("button",{type:"button",className:y("css-toggle","item",{"is-selected":C}),onClick:T,onKeyDown:function(e){return w(e,T)},onBlur:b,onMouseDown:v,tabIndex:0,"data-focus-styles-enabled":!0},c.default.createElement(d.default,{className:y("chevron")}),c.default.createElement("span",null,"CSS"),c.default.createElement(u.default,{className:y("chevron")})),c.default.createElement("button",{type:"button",className:y("code-toggle","item",{"is-selected":_}),onClick:M,onKeyDown:function(e){return w(e,M)},onBlur:b,onMouseDown:v,tabIndex:0,"data-focus-styles-enabled":!0},c.default.createElement(d.default,{className:y("chevron")}),c.default.createElement("span",null,"Code"),c.default.createElement(u.default,{className:y("chevron")}))):null,c.default.createElement("div",null,C&&c.default.createElement("div",{className:y("css")},a),_&&c.default.createElement("div",{className:y("code")},n))))};h.propTypes=_,h.defaultProps={isExpanded:!1};var N=h;t.Z=N},37447:function(e,t,n){n.r(t),n.d(t,{default:function(){return _}});var a=n(87462),l=n(44925),o=n(67294),c=n(81254),i=n(13366),r=["components"],s={};function d(e){var t=e.components,n=(0,l.Z)(e,r);return(0,c.mdx)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,c.mdx)("pre",null,(0,c.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Table from 'terra-table';\n\nconst tableDataJSON = {\n  cols: [\n    { id: 'Column-0', displayName: 'Patient' },\n    { id: 'Column-1', displayName: 'Location' },\n    { id: 'Column-2', displayName: 'Illness Severity' },\n    { id: 'Column-3', displayName: 'Visit' },\n    { id: 'Column-4', displayName: 'Allergy' },\n    { id: 'Column-5', displayName: 'Primary Contact' },\n    { id: 'Column-6', displayName: 'Generic Order Counts' },\n    { id: 'Column-7', displayName: 'Patient Age' },\n    { id: 'Column-8', displayName: 'Medication History' },\n    { id: 'Column-9', displayName: 'My Relationship' },\n    { id: 'Column-10', displayName: 'Not Selectable', isSelectable: false },\n  ],\n  rows: [\n    {\n      id: '1',\n      cells: [\n        { content: 'Fleck, Arthur' },\n        { content: '1007-MTN' },\n        { content: 'Unstable' },\n        { content: 'Inpatient, 2 months' },\n        { content: '' },\n        { content: 'Quinzell, Harleen' },\n        { content: '' },\n        { isMasked: true },\n        { isMasked: true },\n        { content: 'Admitting Physician' },\n        { content: '', isSelectable: false },\n      ],\n    },\n    {\n      id: '2',\n      cells: [\n        { content: 'Wayne, Bruce' },\n        { content: '1007-MTN-DR' },\n        { content: 'Stable' },\n        { content: 'Outpatient, 2 days' },\n        { content: 'Phytochemicals' },\n        { content: 'Grayson, Richard' },\n        { content: '' },\n        { content: '' },\n        { isMasked: true },\n        { content: 'Admitting Physician' },\n        { content: '', isSelectable: false },\n      ],\n    },\n    {\n      id: '3',\n      cells: [\n        { content: 'McDonald, Ronald' },\n        { content: '1007-MTN-RN' },\n        { content: 'Critical' },\n        { content: 'Inpatient, 2 days' },\n        { content: 'Phytochemicals' },\n        { content: 'Smith, Melissa' },\n        { content: '' },\n        { content: '' },\n        { isMasked: true },\n        { content: 'Family Physician' },\n        { content: '', isSelectable: false },\n      ],\n    },\n    {\n      id: '4',\n      cells: [\n        { content: 'Wayne, Bruce' },\n        { content: '1018-MTN-DR' },\n        { content: 'Stable' },\n        { content: 'Outpatient, 2 days' },\n        { content: 'Aspirin' },\n        { content: 'Jones, Gary' },\n        { content: '' },\n        { content: '' },\n        { isMasked: true },\n        { content: 'Primary Care Physician' },\n        { content: '', isSelectable: false },\n      ],\n    },\n  ],\n};\n\nconst ZebraStripedTable = () => {\n  const { cols, rows } = tableDataJSON;\n\n  return (\n    <Table\n      id=\"zebra-striped-table\"\n      overflowColumns={cols}\n      rows={rows}\n      isStriped\n    />\n  );\n};\n\nexport default ZebraStripedTable;\n\n")))}d.isMDXComponent=!0;var u=n(49271),m=function(e){var t=e.title,n=e.description,a=e.isExpanded;return o.createElement(u.Z,{title:t||"Zebra Striped Table",description:n,example:o.createElement(i.Z,null),exampleSrc:o.createElement(d,null),isExpanded:a})},p=["components"],f={},y="wrapper";function _(e){var t=e.components,n=(0,l.Z)(e,p);return(0,c.mdx)(y,(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,c.mdx)(m,{title:"Zebra Striped Table Example",mdxType:"ZebraStripedTable"}))}_.isMDXComponent=!0},13366:function(e,t,n){var a=n(64836);t.Z=void 0;var l=a(n(67294)),o=a(n(12810)),c=[{id:"Column-0",displayName:"Patient"},{id:"Column-1",displayName:"Location"},{id:"Column-2",displayName:"Illness Severity"},{id:"Column-3",displayName:"Visit"},{id:"Column-4",displayName:"Allergy"},{id:"Column-5",displayName:"Primary Contact"},{id:"Column-6",displayName:"Generic Order Counts"},{id:"Column-7",displayName:"Patient Age"},{id:"Column-8",displayName:"Medication History"},{id:"Column-9",displayName:"My Relationship"},{id:"Column-10",displayName:"Not Selectable",isSelectable:!1}],i=[{id:"1",cells:[{content:"Fleck, Arthur"},{content:"1007-MTN"},{content:"Unstable"},{content:"Inpatient, 2 months"},{content:""},{content:"Quinzell, Harleen"},{content:""},{isMasked:!0},{isMasked:!0},{content:"Admitting Physician"},{content:"",isSelectable:!1}]},{id:"2",cells:[{content:"Wayne, Bruce"},{content:"1007-MTN-DR"},{content:"Stable"},{content:"Outpatient, 2 days"},{content:"Phytochemicals"},{content:"Grayson, Richard"},{content:""},{content:""},{isMasked:!0},{content:"Admitting Physician"},{content:"",isSelectable:!1}]},{id:"3",cells:[{content:"McDonald, Ronald"},{content:"1007-MTN-RN"},{content:"Critical"},{content:"Inpatient, 2 days"},{content:"Phytochemicals"},{content:"Smith, Melissa"},{content:""},{content:""},{isMasked:!0},{content:"Family Physician"},{content:"",isSelectable:!1}]},{id:"4",cells:[{content:"Wayne, Bruce"},{content:"1018-MTN-DR"},{content:"Stable"},{content:"Outpatient, 2 days"},{content:"Aspirin"},{content:"Jones, Gary"},{content:""},{content:""},{isMasked:!0},{content:"Primary Care Physician"},{content:"",isSelectable:!1}]}];t.Z=function(){var e=c,t=i;return l.default.createElement(o.default,{id:"zebra-striped-table",overflowColumns:e,rows:t,isStriped:!0})}},53560:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},33864:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(67294)),l=o(n(99139));function o(e){return e&&e.__esModule?e:{default:e}}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},c.apply(this,arguments)}var i=function(e){var t=c({},e);return a.default.createElement(l.default,t,a.default.createElement("path",{d:"M10.3 24 33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};i.displayName="IconChevronLeft",i.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};t.default=i},87462:function(e,t,n){function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},a.apply(this,arguments)}n.d(t,{Z:function(){return a}})},44925:function(e,t,n){function a(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}n.d(t,{Z:function(){return a}})}}]);