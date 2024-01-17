"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[1296],{22863:function(e,t,n){var a=n(64836);t.Z=void 0;var l=a(n(67294)),o=a(n(45697)),r=a(n(47166)),i=a(n(17422)),c=r.default.bind(i.default),d={name:o.default.string.isRequired,src:o.default.string,url:o.default.string,version:o.default.string.isRequired},s=function(e){var t=e.src,n=e.name,a=e.url,o=e.version,r=l.default.createElement("a",{className:c("badge"),href:a||"https://www.npmjs.org/package/".concat(n,"/v/").concat(o)},l.default.createElement("span",{className:c("badge-name")},a?"package":"npm"),l.default.createElement("span",{className:c("badge-version")},"v".concat(o))),i=t?l.default.createElement("a",{className:c("badge"),href:t},l.default.createElement("span",{className:c("badge-name")},"github"),l.default.createElement("span",{className:c("badge-version")},"source")):void 0;return l.default.createElement("div",{className:c("badge-container")},r,i)};s.propTypes=d;var m=s;t.Z=m},49271:function(e,t,n){var a=n(64836),l=n(18698);t.Z=void 0;var o=a(n(27424)),r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==l(e)&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var a={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var i=o?Object.getOwnPropertyDescriptor(e,r):null;i&&(i.get||i.set)?Object.defineProperty(a,r,i):a[r]=e[r]}a.default=e,n&&n.set(e,a);return a}(n(67294)),i=a(n(45697)),c=a(n(47166)),d=n(21538),s=a(n(33864)),m=a(n(23399)),u=n(51051),p=a(n(53560));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}var _=c.default.bind(p.default),b={example:i.default.element,exampleSrc:i.default.element,exampleCssSrc:i.default.element,title:i.default.string,description:i.default.node,isExpanded:i.default.bool},y=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},v=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},g=function(e){var t=e.example,n=e.exampleSrc,a=e.exampleCssSrc,l=e.title,i=e.description,c=e.isExpanded,p=(0,r.useState)(c),f=(0,o.default)(p,2),b=f[0],g=f[1],E=(0,r.useState)(!1),h=(0,o.default)(E,2),N=h[0],x=h[1],C=r.default.useContext(d.ThemeContext),T=void 0!==a,w=function(){x(!N),b&&g(!b)},k=function(){g(!b),N&&x(!N)},M=function(e,t){e.nativeEvent.keyCode!==u.KEY_SPACE&&e.nativeEvent.keyCode!==u.KEY_RETURN||(e.preventDefault(),t())};return r.default.createElement("div",{className:_("template",C.className)},r.default.createElement("div",{className:_("header")},l&&r.default.createElement("h2",{className:_("title")},l)),r.default.createElement("div",{className:_("content")},i&&r.default.createElement("div",{className:_("description")},i),t),r.default.createElement("div",{className:_("footer")},n?r.default.createElement("div",{className:_("button-container")},T&&r.default.createElement("button",{type:"button",className:_("css-toggle","item",{"is-selected":N}),onClick:w,onKeyDown:function(e){return M(e,w)},onBlur:y,onMouseDown:v,tabIndex:0,"data-focus-styles-enabled":!0},r.default.createElement(s.default,{className:_("chevron")}),r.default.createElement("span",null,"CSS"),r.default.createElement(m.default,{className:_("chevron")})),r.default.createElement("button",{type:"button",className:_("code-toggle","item",{"is-selected":b}),onClick:k,onKeyDown:function(e){return M(e,k)},onBlur:y,onMouseDown:v,tabIndex:0,"data-focus-styles-enabled":!0},r.default.createElement(s.default,{className:_("chevron")}),r.default.createElement("span",null,"Code"),r.default.createElement(m.default,{className:_("chevron")}))):null,r.default.createElement("div",null,N&&r.default.createElement("div",{className:_("css")},a),b&&r.default.createElement("div",{className:_("code")},n))))};g.propTypes=b,g.defaultProps={isExpanded:!1};var E=g;t.Z=E},1296:function(e,t,n){n.r(t),n.d(t,{default:function(){return s}});var a=n(87462),l=n(44925),o=(n(67294),n(81254)),r=(n(61701),n(98108)),i=["components"],c={},d="wrapper";function s(e){var t=e.components,n=(0,l.Z)(e,i);return(0,o.mdx)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"default-table"},"Default Table"),(0,o.mdx)("h3",{id:"description"},"Description"),(0,o.mdx)("p",null,"This example demonstrates a basic ",(0,o.mdx)("a",{parentName:"p",href:"/terra-framework/pull/1985/components/cerner-terra-framework-docs/table/about"},"Table")," component implementation."),(0,o.mdx)(r.Z,{mdxType:"DefaultTable"}))}s.isMDXComponent=!0},98108:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(67294),l=n(7871),o=n(87462),r=n(44925),i=n(81254),c=["components"],d={};function s(e){var t=e.components,n=(0,r.Z)(e,c);return(0,i.mdx)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Table from 'terra-table';\n\nconst tableData = {\n  cols: [\n    { id: 'Column-0', displayName: 'Patient' },\n    { id: 'Column-1', displayName: 'Location' },\n    { id: 'Column-2', displayName: 'Illness Severity' },\n    { id: 'Column-3', displayName: 'Visit' },\n    { id: 'Column-4', displayName: 'Allergy' },\n    { id: 'Column-5', displayName: 'Primary Contact' },\n    { id: 'Column-6', displayName: 'Generic Order Counts' },\n    { id: 'Column-7', displayName: 'Patient Age' },\n    { id: 'Column-8', displayName: 'Medication History' },\n    { id: 'Column-9', displayName: 'My Relationship' },\n  ],\n  rows: [\n    {\n      id: '1',\n      cells: [\n        { content: 'Fleck, Arthur' },\n        { content: '1007-MTN' },\n        { content: 'Unstable' },\n        { content: 'Inpatient, 2 months' },\n        { content: '' },\n        { content: 'Quinzell, Harleen' },\n        { content: '' },\n        { isMasked: true, maskedLabel: 'Age Hidden' },\n        { isMasked: true },\n        { content: 'Admitting Physician' },\n      ],\n    },\n    {\n      id: '2',\n      cells: [\n        { content: 'Wayne, Bruce' },\n        { content: '1007-MTN-DR' },\n        { content: 'Stable' },\n        { content: 'Outpatient, 2 days' },\n        { content: 'Phytochemicals' },\n        { content: 'Grayson, Richard' },\n        { content: '' },\n        { content: '' },\n        { isMasked: true },\n        { content: 'Admitting Physician' },\n      ],\n    },\n  ],\n};\n\nconst DefaultTable = () => (\n  <Table\n    id=\"my-table-id\"\n    overflowColumns={tableData.cols}\n    rows={tableData.rows}\n    ariaLabel=\"Table\"\n  />\n);\n\nexport default DefaultTable;\n\n")))}s.isMDXComponent=!0;var m=n(49271),u=function(e){var t=e.title,n=e.description,o=e.isExpanded;return a.createElement(m.Z,{title:t||"Default Table",description:n,example:a.createElement(l.Z,null),exampleSrc:a.createElement(s,null),isExpanded:o})}},61701:function(e,t,n){n.d(t,{C:function(){return o}});var a=n(67294),l=n(22863),o=function(e){var t=e.url;return a.createElement(l.Z,{src:"https://github.com/cerner/terra-framework/tree/main/packages/terra-table",name:"terra-table",version:"5.3.2",url:t})}},7871:function(e,t,n){var a=n(64836);t.Z=void 0;var l=a(n(67294)),o=a(n(12810)),r={cols:[{id:"Column-0",displayName:"Patient"},{id:"Column-1",displayName:"Location"},{id:"Column-2",displayName:"Illness Severity"},{id:"Column-3",displayName:"Visit"},{id:"Column-4",displayName:"Allergy"},{id:"Column-5",displayName:"Primary Contact"},{id:"Column-6",displayName:"Generic Order Counts"},{id:"Column-7",displayName:"Patient Age"},{id:"Column-8",displayName:"Medication History"},{id:"Column-9",displayName:"My Relationship"}],rows:[{id:"1",cells:[{content:"Fleck, Arthur"},{content:"1007-MTN"},{content:"Unstable"},{content:"Inpatient, 2 months"},{content:""},{content:"Quinzell, Harleen"},{content:""},{isMasked:!0,maskedLabel:"Age Hidden"},{isMasked:!0},{content:"Admitting Physician"}]},{id:"2",cells:[{content:"Wayne, Bruce"},{content:"1007-MTN-DR"},{content:"Stable"},{content:"Outpatient, 2 days"},{content:"Phytochemicals"},{content:"Grayson, Richard"},{content:""},{content:""},{isMasked:!0},{content:"Admitting Physician"}]}]};t.Z=function(){return l.default.createElement(o.default,{id:"my-table-id",overflowColumns:r.cols,rows:r.rows,ariaLabel:"Table"})}},17422:function(e,t,n){n.r(t),t.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},53560:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},87462:function(e,t,n){function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},a.apply(this,arguments)}n.d(t,{Z:function(){return a}})},44925:function(e,t,n){function a(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}n.d(t,{Z:function(){return a}})}}]);