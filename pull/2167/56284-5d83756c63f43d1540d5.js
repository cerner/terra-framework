"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[56284],{55713:function(e,t,n){var a=n(24994);t.A=void 0;var l=a(n(96540)),o=a(n(5556)),r=a(n(67967)),i=a(n(25642)),c=r.default.bind(i.default),d={name:o.default.string.isRequired,src:o.default.string,url:o.default.string,version:o.default.string.isRequired},s=function(e){var t=e.src,n=e.name,a=e.url,o=e.version,r=l.default.createElement("a",{className:c("badge"),href:a||"https://www.npmjs.org/package/".concat(n,"/v/").concat(o)},l.default.createElement("span",{className:c("badge-name")},a?"package":"npm"),l.default.createElement("span",{className:c("badge-version")},"v".concat(o))),i=t?l.default.createElement("a",{className:c("badge"),href:t},l.default.createElement("span",{className:c("badge-name")},"github"),l.default.createElement("span",{className:c("badge-version")},"source")):void 0;return l.default.createElement("div",{className:c("badge-container")},r,i)};s.propTypes=d;t.A=s},201:function(e,t,n){var a=n(24994),l=n(73738);t.A=void 0;var o=a(n(85715)),r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=l(e)&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var a={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&{}.hasOwnProperty.call(e,r)){var i=o?Object.getOwnPropertyDescriptor(e,r):null;i&&(i.get||i.set)?Object.defineProperty(a,r,i):a[r]=e[r]}return a.default=e,n&&n.set(e,a),a}(n(96540)),i=a(n(5556)),c=a(n(67967)),d=n(92912),s=a(n(49558)),u=a(n(53665)),m=n(25966),p=a(n(89986));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}var _=c.default.bind(p.default),b={example:i.default.element,exampleSrc:i.default.element,exampleCssSrc:i.default.element,title:i.default.string,description:i.default.node,isExpanded:i.default.bool},y=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},v=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},g=function(e){var t=e.example,n=e.exampleSrc,a=e.exampleCssSrc,l=e.title,i=e.description,c=e.isExpanded,p=(0,r.useState)(c),f=(0,o.default)(p,2),b=f[0],g=f[1],E=(0,r.useState)(!1),h=(0,o.default)(E,2),N=h[0],x=h[1],C=r.default.useContext(d.ThemeContext),T=void 0!==a,w=function(){x(!N),b&&g(!b)},A=function(){g(!b),N&&x(!N)},k=function(e,t){e.nativeEvent.keyCode!==m.KEY_SPACE&&e.nativeEvent.keyCode!==m.KEY_RETURN||(e.preventDefault(),t())};return r.default.createElement("div",{className:_("template",C.className)},r.default.createElement("div",{className:_("header")},l&&r.default.createElement("h2",{className:_("title")},l)),r.default.createElement("div",{className:_("content")},i&&r.default.createElement("div",{className:_("description")},i),t),r.default.createElement("div",{className:_("footer")},n?r.default.createElement("div",{className:_("button-container")},T&&r.default.createElement("button",{type:"button",className:_("css-toggle","item",{"is-selected":N}),onClick:w,onKeyDown:function(e){return k(e,w)},onBlur:y,onMouseDown:v,tabIndex:0,"data-focus-styles-enabled":!0},r.default.createElement(s.default,{className:_("chevron")}),r.default.createElement("span",null,"CSS"),r.default.createElement(u.default,{className:_("chevron")})),r.default.createElement("button",{type:"button",className:_("code-toggle","item",{"is-selected":b}),onClick:A,onKeyDown:function(e){return k(e,A)},onBlur:y,onMouseDown:v,tabIndex:0,"data-focus-styles-enabled":!0},r.default.createElement(s.default,{className:_("chevron")}),r.default.createElement("span",null,"Code"),r.default.createElement(u.default,{className:_("chevron")}))):null,r.default.createElement("div",null,N&&r.default.createElement("div",{className:_("css")},a),b&&r.default.createElement("div",{className:_("code")},n))))};g.propTypes=b,g.defaultProps={isExpanded:!1};t.A=g},56284:function(e,t,n){n.r(t),n.d(t,{default:function(){return s}});var a=n(58168),l=n(53986),o=(n(96540),n(36665)),r=(n(20574),n(73139)),i=["components"],c={},d="wrapper";function s(e){var t=e.components,n=(0,l.A)(e,i);return(0,o.mdx)(d,(0,a.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"default-table"},"Default Table"),(0,o.mdx)("h3",{id:"description"},"Description"),(0,o.mdx)("p",null,"This example demonstrates a basic ",(0,o.mdx)("a",{parentName:"p",href:"/terra-framework/pull/2167/components/cerner-terra-framework-docs/table/about"},"Table")," component implementation."),(0,o.mdx)(r.A,{mdxType:"DefaultTable"}))}s.isMDXComponent=!0},73139:function(e,t,n){n.d(t,{A:function(){return m}});var a=n(96540),l=n(2640),o=n(58168),r=n(53986),i=n(36665),c=["components"],d={};function s(e){var t=e.components,n=(0,r.A)(e,c);return(0,i.mdx)("wrapper",(0,o.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Table from 'terra-table';\n\nconst tableData = {\n  cols: [\n    { id: 'Column-0', displayName: 'Patient' },\n    { id: 'Column-1', displayName: 'Location' },\n    { id: 'Column-2', displayName: 'Illness Severity' },\n    { id: 'Column-3', displayName: 'Visit' },\n    { id: 'Column-4', displayName: 'Allergy' },\n    { id: 'Column-5', displayName: 'Primary Contact' },\n    { id: 'Column-6', displayName: 'Generic Order Counts' },\n    { id: 'Column-7', displayName: 'Patient Age' },\n    { id: 'Column-8', displayName: 'Medication History' },\n    { id: 'Column-9', displayName: 'My Relationship' },\n  ],\n  rows: [\n    {\n      id: '1',\n      cells: [\n        { content: 'Fleck, Arthur' },\n        { content: '1007-MTN' },\n        { content: 'Unstable' },\n        { content: 'Inpatient, 2 months' },\n        { content: '' },\n        { content: 'Quinzell, Harleen' },\n        { content: '' },\n        { isMasked: true, maskedLabel: 'Age Hidden' },\n        { isMasked: true },\n        { content: 'Admitting Physician' },\n      ],\n    },\n    {\n      id: '2',\n      cells: [\n        { content: 'Wayne, Bruce' },\n        { content: '1007-MTN-DR' },\n        { content: 'Stable' },\n        { content: 'Outpatient, 2 days' },\n        { content: 'Phytochemicals' },\n        { content: 'Grayson, Richard' },\n        { content: '' },\n        { content: '' },\n        { isMasked: true },\n        { content: 'Admitting Physician' },\n      ],\n    },\n  ],\n};\n\nconst DefaultTable = () => (\n  <Table\n    id=\"my-table-id\"\n    overflowColumns={tableData.cols}\n    rows={tableData.rows}\n    ariaLabel=\"Table\"\n  />\n);\n\nexport default DefaultTable;\n\n")))}s.isMDXComponent=!0;var u=n(201),m=function(e){var t=e.title,n=e.description,o=e.isExpanded;return a.createElement(u.A,{title:t||"Default Table",description:n,example:a.createElement(l.A,null),exampleSrc:a.createElement(s,null),isExpanded:o})}},20574:function(e,t,n){n.d(t,{E:function(){return o}});var a=n(96540),l=n(55713),o=function(e){var t=e.url;return a.createElement(l.A,{src:"https://github.com/cerner/terra-framework/tree/main/packages/terra-table",name:"terra-table",version:"5.23.0",url:t})}},2640:function(e,t,n){var a=n(24994);t.A=void 0;var l=a(n(96540)),o=a(n(83264)),r={cols:[{id:"Column-0",displayName:"Patient"},{id:"Column-1",displayName:"Location"},{id:"Column-2",displayName:"Illness Severity"},{id:"Column-3",displayName:"Visit"},{id:"Column-4",displayName:"Allergy"},{id:"Column-5",displayName:"Primary Contact"},{id:"Column-6",displayName:"Generic Order Counts"},{id:"Column-7",displayName:"Patient Age"},{id:"Column-8",displayName:"Medication History"},{id:"Column-9",displayName:"My Relationship"}],rows:[{id:"1",cells:[{content:"Fleck, Arthur"},{content:"1007-MTN"},{content:"Unstable"},{content:"Inpatient, 2 months"},{content:""},{content:"Quinzell, Harleen"},{content:""},{isMasked:!0,maskedLabel:"Age Hidden"},{isMasked:!0},{content:"Admitting Physician"}]},{id:"2",cells:[{content:"Wayne, Bruce"},{content:"1007-MTN-DR"},{content:"Stable"},{content:"Outpatient, 2 days"},{content:"Phytochemicals"},{content:"Grayson, Richard"},{content:""},{content:""},{isMasked:!0},{content:"Admitting Physician"}]}]};t.A=function(){return l.default.createElement(o.default,{id:"my-table-id",overflowColumns:r.cols,rows:r.rows,ariaLabel:"Table"})}},25642:function(e,t,n){n.r(t),t.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},89986:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},58168:function(e,t,n){function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},a.apply(this,arguments)}n.d(t,{A:function(){return a}})},53986:function(e,t,n){function a(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n={};for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){if(t.indexOf(a)>=0)continue;n[a]=e[a]}return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}n.d(t,{A:function(){return a}})}}]);