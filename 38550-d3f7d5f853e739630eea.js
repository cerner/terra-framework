"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[38550],{55713:function(e,t,n){var a=n(24994);t.A=void 0;var l=a(n(96540)),o=a(n(5556)),r=a(n(67967)),i=a(n(25642)),d=r.default.bind(i.default),c={name:o.default.string.isRequired,src:o.default.string,url:o.default.string,version:o.default.string.isRequired},s=function(e){var t=e.src,n=e.name,a=e.url,o=e.version,r=l.default.createElement("a",{className:d("badge"),href:a||"https://www.npmjs.org/package/".concat(n,"/v/").concat(o)},l.default.createElement("span",{className:d("badge-name")},a?"package":"npm"),l.default.createElement("span",{className:d("badge-version")},"v".concat(o))),i=t?l.default.createElement("a",{className:d("badge"),href:t},l.default.createElement("span",{className:d("badge-name")},"github"),l.default.createElement("span",{className:d("badge-version")},"source")):void 0;return l.default.createElement("div",{className:d("badge-container")},r,i)};s.propTypes=c;t.A=s},201:function(e,t,n){var a=n(24994),l=n(73738);t.A=void 0;var o=a(n(85715)),r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=l(e)&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var a={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var i=o?Object.getOwnPropertyDescriptor(e,r):null;i&&(i.get||i.set)?Object.defineProperty(a,r,i):a[r]=e[r]}return a.default=e,n&&n.set(e,a),a}(n(96540)),i=a(n(5556)),d=a(n(67967)),c=n(92912),s=a(n(49558)),u=a(n(53665)),m=n(25966),p=a(n(89986));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}var _=d.default.bind(p.default),b={example:i.default.element,exampleSrc:i.default.element,exampleCssSrc:i.default.element,title:i.default.string,description:i.default.node,isExpanded:i.default.bool},y=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},g=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},h=function(e){var t=e.example,n=e.exampleSrc,a=e.exampleCssSrc,l=e.title,i=e.description,d=e.isExpanded,p=(0,r.useState)(d),f=(0,o.default)(p,2),b=f[0],h=f[1],v=(0,r.useState)(!1),E=(0,o.default)(v,2),x=E[0],N=E[1],w=r.default.useContext(c.ThemeContext),C=void 0!==a,T=function(){N(!x),b&&h(!b)},k=function(){h(!b),x&&N(!x)},A=function(e,t){e.nativeEvent.keyCode!==m.KEY_SPACE&&e.nativeEvent.keyCode!==m.KEY_RETURN||(e.preventDefault(),t())};return r.default.createElement("div",{className:_("template",w.className)},r.default.createElement("div",{className:_("header")},l&&r.default.createElement("h2",{className:_("title")},l)),r.default.createElement("div",{className:_("content")},i&&r.default.createElement("div",{className:_("description")},i),t),r.default.createElement("div",{className:_("footer")},n?r.default.createElement("div",{className:_("button-container")},C&&r.default.createElement("button",{type:"button",className:_("css-toggle","item",{"is-selected":x}),onClick:T,onKeyDown:function(e){return A(e,T)},onBlur:y,onMouseDown:g,tabIndex:0,"data-focus-styles-enabled":!0},r.default.createElement(s.default,{className:_("chevron")}),r.default.createElement("span",null,"CSS"),r.default.createElement(u.default,{className:_("chevron")})),r.default.createElement("button",{type:"button",className:_("code-toggle","item",{"is-selected":b}),onClick:k,onKeyDown:function(e){return A(e,k)},onBlur:y,onMouseDown:g,tabIndex:0,"data-focus-styles-enabled":!0},r.default.createElement(s.default,{className:_("chevron")}),r.default.createElement("span",null,"Code"),r.default.createElement(u.default,{className:_("chevron")}))):null,r.default.createElement("div",null,x&&r.default.createElement("div",{className:_("css")},a),b&&r.default.createElement("div",{className:_("code")},n))))};h.propTypes=b,h.defaultProps={isExpanded:!1};t.A=h},38550:function(e,t,n){n.r(t),n.d(t,{default:function(){return b}});var a=n(58168),l=n(53986),o=n(96540),r=n(36665),i=(n(20574),n(5238)),d=["components"],c={};function s(e){var t=e.components,n=(0,l.A)(e,d);return(0,r.mdx)("wrapper",(0,a.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Table from 'terra-table';\n\nconst tableData = {\n  cols: [\n    { id: 'Column-0', displayName: 'Patient' },\n    { id: 'Column-1', displayName: 'Location' },\n    { id: 'Column-2', displayName: 'Illness Severity' },\n    { id: 'Column-3', displayName: 'Visit' },\n    { id: 'Column-4', displayName: 'Allergy' },\n    { id: 'Column-5', displayName: 'Primary Contact' },\n    { id: 'Column-6', displayName: 'Generic Order Counts' },\n    { id: 'Column-7', displayName: 'Patient Age' },\n    { id: 'Column-8', displayName: 'Medication History' },\n    { id: 'Column-9', displayName: 'My Relationship' },\n  ],\n  rows: [\n    {\n      id: '1',\n      cells: [\n        { content: 'Fleck, Arthur' },\n        { content: '1007-MTN' },\n        { content: 'Unstable' },\n        { content: 'Inpatient, 2 months' },\n        { content: '' },\n        { content: 'Quinzell, Harleen' },\n        { content: '' },\n        { isMasked: true, maskedLabel: 'Age Hidden' },\n        { isMasked: true },\n        { content: 'Admitting Physician' },\n      ],\n    },\n    {\n      id: '2',\n      cells: [\n        { content: 'Wayne, Bruce' },\n        { content: '1007-MTN-DR' },\n        { content: 'Stable' },\n        { content: 'Outpatient, 2 days' },\n        { content: 'Phytochemicals' },\n        { content: 'Grayson, Richard' },\n        { content: '' },\n        { content: '' },\n        { isMasked: true },\n        { content: 'Admitting Physician' },\n      ],\n    },\n  ],\n};\n\nconst TableWithoutRowHeader = () => (\n  <Table\n    id=\"table-without-row-header\"\n    overflowColumns={tableData.cols}\n    rows={tableData.rows}\n    rowHeaderIndex={-1}\n    ariaLabel=\"Table\"\n  />\n);\n\nexport default TableWithoutRowHeader;\n\n")))}s.isMDXComponent=!0;var u=n(201),m=function(e){var t=e.title,n=e.description,a=e.isExpanded;return o.createElement(u.A,{title:t||"Table Without Row Header",description:n,example:o.createElement(i.A,null),exampleSrc:o.createElement(s,null),isExpanded:a})},p=["components"],f={},_="wrapper";function b(e){var t=e.components,n=(0,l.A)(e,p);return(0,r.mdx)(_,(0,a.A)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"default-table-without-row-header"},"Default Table without row header"),(0,r.mdx)("h3",{id:"description"},"Description"),(0,r.mdx)("p",null,"This example demonstrates a basic ",(0,r.mdx)("a",{parentName:"p",href:"/terra-framework/components/cerner-terra-framework-docs/table/about"},"Table")," component implementation without row header."),(0,r.mdx)(m,{mdxType:"TableWithoutRowHeader"}))}b.isMDXComponent=!0},20574:function(e,t,n){n.d(t,{E:function(){return o}});var a=n(96540),l=n(55713),o=function(e){var t=e.url;return a.createElement(l.A,{src:"https://github.com/cerner/terra-framework/tree/main/packages/terra-table",name:"terra-table",version:"5.18.0",url:t})}},5238:function(e,t,n){var a=n(24994);t.A=void 0;var l=a(n(96540)),o=a(n(83264)),r={cols:[{id:"Column-0",displayName:"Patient"},{id:"Column-1",displayName:"Location"},{id:"Column-2",displayName:"Illness Severity"},{id:"Column-3",displayName:"Visit"},{id:"Column-4",displayName:"Allergy"},{id:"Column-5",displayName:"Primary Contact"},{id:"Column-6",displayName:"Generic Order Counts"},{id:"Column-7",displayName:"Patient Age"},{id:"Column-8",displayName:"Medication History"},{id:"Column-9",displayName:"My Relationship"}],rows:[{id:"1",cells:[{content:"Fleck, Arthur"},{content:"1007-MTN"},{content:"Unstable"},{content:"Inpatient, 2 months"},{content:""},{content:"Quinzell, Harleen"},{content:""},{isMasked:!0,maskedLabel:"Age Hidden"},{isMasked:!0},{content:"Admitting Physician"}]},{id:"2",cells:[{content:"Wayne, Bruce"},{content:"1007-MTN-DR"},{content:"Stable"},{content:"Outpatient, 2 days"},{content:"Phytochemicals"},{content:"Grayson, Richard"},{content:""},{content:""},{isMasked:!0},{content:"Admitting Physician"}]}]};t.A=function(){return l.default.createElement(o.default,{id:"table-without-row-header",overflowColumns:r.cols,rows:r.rows,rowHeaderIndex:-1,ariaLabel:"Table"})}},25642:function(e,t,n){n.r(t),t.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},89986:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},58168:function(e,t,n){function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},a.apply(this,arguments)}n.d(t,{A:function(){return a}})},53986:function(e,t,n){function a(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}n.d(t,{A:function(){return a}})}}]);