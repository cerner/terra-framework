"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[98796],{201:function(e,t,n){var a=n(24994),l=n(73738);t.A=void 0;var o=a(n(85715)),i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=l(e)&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var a={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var r=o?Object.getOwnPropertyDescriptor(e,i):null;r&&(r.get||r.set)?Object.defineProperty(a,i,r):a[i]=e[i]}return a.default=e,n&&n.set(e,a),a}(n(96540)),r=a(n(5556)),c=a(n(67967)),s=n(92912),d=a(n(49558)),m=a(n(53665)),u=n(25966),p=a(n(89986));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}var _=c.default.bind(p.default),b={example:r.default.element,exampleSrc:r.default.element,exampleCssSrc:r.default.element,title:r.default.string,description:r.default.node,isExpanded:r.default.bool},y=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},h=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},x=function(e){var t=e.example,n=e.exampleSrc,a=e.exampleCssSrc,l=e.title,r=e.description,c=e.isExpanded,p=(0,i.useState)(c),f=(0,o.default)(p,2),b=f[0],x=f[1],N=(0,i.useState)(!1),C=(0,o.default)(N,2),E=C[0],v=C[1],g=i.default.useContext(s.ThemeContext),T=void 0!==a,k=function(){v(!E),b&&x(!b)},w=function(){x(!b),E&&v(!E)},A=function(e,t){e.nativeEvent.keyCode!==u.KEY_SPACE&&e.nativeEvent.keyCode!==u.KEY_RETURN||(e.preventDefault(),t())};return i.default.createElement("div",{className:_("template",g.className)},i.default.createElement("div",{className:_("header")},l&&i.default.createElement("h2",{className:_("title")},l)),i.default.createElement("div",{className:_("content")},r&&i.default.createElement("div",{className:_("description")},r),t),i.default.createElement("div",{className:_("footer")},n?i.default.createElement("div",{className:_("button-container")},T&&i.default.createElement("button",{type:"button",className:_("css-toggle","item",{"is-selected":E}),onClick:k,onKeyDown:function(e){return A(e,k)},onBlur:y,onMouseDown:h,tabIndex:0,"data-focus-styles-enabled":!0},i.default.createElement(d.default,{className:_("chevron")}),i.default.createElement("span",null,"CSS"),i.default.createElement(m.default,{className:_("chevron")})),i.default.createElement("button",{type:"button",className:_("code-toggle","item",{"is-selected":b}),onClick:w,onKeyDown:function(e){return A(e,w)},onBlur:y,onMouseDown:h,tabIndex:0,"data-focus-styles-enabled":!0},i.default.createElement(d.default,{className:_("chevron")}),i.default.createElement("span",null,"Code"),i.default.createElement(m.default,{className:_("chevron")}))):null,i.default.createElement("div",null,E&&i.default.createElement("div",{className:_("css")},a),b&&i.default.createElement("div",{className:_("code")},n))))};x.propTypes=b,x.defaultProps={isExpanded:!1};t.A=x},98796:function(e,t,n){n.r(t),n.d(t,{default:function(){return b}});var a=n(58168),l=n(53986),o=n(96540),i=n(36665),r=n(58202),c=["components"],s={};function d(e){var t=e.components,n=(0,l.A)(e,c);return(0,i.mdx)("wrapper",(0,a.A)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-jsx"},"/* eslint-disable no-alert */\nimport React from 'react';\nimport Table from 'terra-table';\n\nconst tableDataJSON = {\n  cols: [\n    {\n      id: 'Column-0',\n      displayName: 'Patient',\n      action: {\n        label: 'Patient action',\n        onClick: () => alert('Patient action clicked'),\n      },\n    },\n    {\n      id: 'Column-1',\n      displayName: 'Location',\n      action: {\n        label: 'Location action',\n        onClick: () => alert('Location action clicked'),\n      },\n    },\n    { id: 'Column-2', displayName: 'Illness Severity' },\n    { id: 'Column-3', displayName: 'Visit' },\n    { id: 'Column-4', displayName: 'Allergy' },\n    { id: 'Column-5', displayName: 'Primary Contact' },\n    { id: 'Column-6', displayName: 'Generic Order Counts' },\n    { id: 'Column-7', displayName: 'Patient Age' },\n    { id: 'Column-8', displayName: 'Medication History' },\n    { id: 'Column-9', displayName: 'My Relationship' },\n  ],\n  rows: [\n    {\n      id: '1',\n      cells: [\n        { content: 'Fleck, Arthur' },\n        { content: '1007-MTN' },\n        { content: 'Unstable' },\n        { content: 'Inpatient, 2 months' },\n        { content: '' },\n        { content: 'Quinzell, Harleen' },\n        { content: '' },\n        { isMasked: true, maskedLabel: 'Age Hidden' },\n        { isMasked: true },\n        { content: 'Admitting Physician' },\n      ],\n    },\n    {\n      id: '2',\n      cells: [\n        { content: 'Wayne, Bruce' },\n        { content: '1007-MTN-DR' },\n        { content: 'Stable' },\n        { content: 'Outpatient, 2 days' },\n        { content: 'Phytochemicals' },\n        { content: 'Grayson, Richard' },\n        { content: '' },\n        { content: '' },\n        { isMasked: true },\n        { content: 'Admitting Physician' },\n      ],\n    },\n  ],\n};\n\nconst TableRowSelection = () => (\n  <Table\n    id=\"table-with-actions\"\n    pinnedColumns={tableDataJSON.cols.slice(0, 2)}\n    overflowColumns={tableDataJSON.cols.slice(2)}\n    rows={tableDataJSON.rows}\n    ariaLabel=\"Table with pinned columns\"\n  />\n);\n\nexport default TableRowSelection;\n\n")))}d.isMDXComponent=!0;var m=n(201),u=function(e){var t=e.title,n=e.description,a=e.isExpanded;return o.createElement(m.A,{title:t||"Table Column Actions",description:n,example:o.createElement(r.A,null),exampleSrc:o.createElement(d,null),isExpanded:a})},p=["components"],f={},_="wrapper";function b(e){var t=e.components,n=(0,l.A)(e,p);return(0,i.mdx)(_,(0,a.A)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"table---column-actions"},"Table - Column Actions"),(0,i.mdx)("h3",{id:"description"},"Description"),(0,i.mdx)("p",null,"This example demonstrates a ",(0,i.mdx)("a",{parentName:"p",href:"/terra-framework/pull/2077/components/cerner-terra-framework-docs/table/about"},"Table")," that supports Column Actions."),(0,i.mdx)("h4",{id:"required-properties"},"Required Properties"),(0,i.mdx)("p",null,"The ",(0,i.mdx)("strong",{parentName:"p"},(0,i.mdx)("a",{parentName:"strong",href:"/terra-framework/pull/2077/components/cerner-terra-framework-docs/table/about"},"action")," property")," needs to be passed to a column with following properties:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"label")," property: The label for the action button. "),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"onClick")," callback property: When the user clicks on an action button, this callback is requested.")),(0,i.mdx)(u,{title:"Table With Column Actions",mdxType:"TableColumnActions"}))}b.isMDXComponent=!0},58202:function(e,t,n){var a=n(24994);t.A=void 0;var l=a(n(96540)),o=a(n(83264)),i={cols:[{id:"Column-0",displayName:"Patient",action:{label:"Patient action",onClick:function(){return alert("Patient action clicked")}}},{id:"Column-1",displayName:"Location",action:{label:"Location action",onClick:function(){return alert("Location action clicked")}}},{id:"Column-2",displayName:"Illness Severity"},{id:"Column-3",displayName:"Visit"},{id:"Column-4",displayName:"Allergy"},{id:"Column-5",displayName:"Primary Contact"},{id:"Column-6",displayName:"Generic Order Counts"},{id:"Column-7",displayName:"Patient Age"},{id:"Column-8",displayName:"Medication History"},{id:"Column-9",displayName:"My Relationship"}],rows:[{id:"1",cells:[{content:"Fleck, Arthur"},{content:"1007-MTN"},{content:"Unstable"},{content:"Inpatient, 2 months"},{content:""},{content:"Quinzell, Harleen"},{content:""},{isMasked:!0,maskedLabel:"Age Hidden"},{isMasked:!0},{content:"Admitting Physician"}]},{id:"2",cells:[{content:"Wayne, Bruce"},{content:"1007-MTN-DR"},{content:"Stable"},{content:"Outpatient, 2 days"},{content:"Phytochemicals"},{content:"Grayson, Richard"},{content:""},{content:""},{isMasked:!0},{content:"Admitting Physician"}]}]};t.A=function(){return l.default.createElement(o.default,{id:"table-with-actions",pinnedColumns:i.cols.slice(0,2),overflowColumns:i.cols.slice(2),rows:i.rows,ariaLabel:"Table with pinned columns"})}},89986:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},58168:function(e,t,n){function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},a.apply(this,arguments)}n.d(t,{A:function(){return a}})},53986:function(e,t,n){function a(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}n.d(t,{A:function(){return a}})}}]);