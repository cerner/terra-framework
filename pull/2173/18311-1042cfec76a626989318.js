"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[18311],{55713:function(e,t,n){var a=n(24994);t.A=void 0;var l=a(n(96540)),o=a(n(5556)),r=a(n(67967)),u=a(n(25642)),c=r.default.bind(u.default),i={name:o.default.string.isRequired,src:o.default.string,url:o.default.string,version:o.default.string.isRequired},s=function(e){var t=e.src,n=e.name,a=e.url,o=e.version,r=l.default.createElement("a",{className:c("badge"),href:a||"https://www.npmjs.org/package/".concat(n,"/v/").concat(o)},l.default.createElement("span",{className:c("badge-name")},a?"package":"npm"),l.default.createElement("span",{className:c("badge-version")},"v".concat(o))),u=t?l.default.createElement("a",{className:c("badge"),href:t},l.default.createElement("span",{className:c("badge-name")},"github"),l.default.createElement("span",{className:c("badge-version")},"source")):void 0;return l.default.createElement("div",{className:c("badge-container")},r,u)};s.propTypes=i;t.A=s},201:function(e,t,n){var a=n(24994),l=n(73738);t.A=void 0;var o=a(n(85715)),r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=l(e)&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var a={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&{}.hasOwnProperty.call(e,r)){var u=o?Object.getOwnPropertyDescriptor(e,r):null;u&&(u.get||u.set)?Object.defineProperty(a,r,u):a[r]=e[r]}return a.default=e,n&&n.set(e,a),a}(n(96540)),u=a(n(5556)),c=a(n(67967)),i=n(92912),s=a(n(49558)),d=a(n(53665)),m=n(25966),p=a(n(89986));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}var _=c.default.bind(p.default),b={example:u.default.element,exampleSrc:u.default.element,exampleCssSrc:u.default.element,title:u.default.string,description:u.default.node,isExpanded:u.default.bool},y=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},v=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},E=function(e){var t=e.example,n=e.exampleSrc,a=e.exampleCssSrc,l=e.title,u=e.description,c=e.isExpanded,p=(0,r.useState)(c),f=(0,o.default)(p,2),b=f[0],E=f[1],x=(0,r.useState)(!1),g=(0,o.default)(x,2),T=g[0],h=g[1],N=r.default.useContext(i.ThemeContext),w=void 0!==a,A=function(){h(!T),b&&E(!b)},C=function(){E(!b),T&&h(!T)},D=function(e,t){e.nativeEvent.keyCode!==m.KEY_SPACE&&e.nativeEvent.keyCode!==m.KEY_RETURN||(e.preventDefault(),t())};return r.default.createElement("div",{className:_("template",N.className)},r.default.createElement("div",{className:_("header")},l&&r.default.createElement("h2",{className:_("title")},l)),r.default.createElement("div",{className:_("content")},u&&r.default.createElement("div",{className:_("description")},u),t),r.default.createElement("div",{className:_("footer")},n?r.default.createElement("div",{className:_("button-container")},w&&r.default.createElement("button",{type:"button",className:_("css-toggle","item",{"is-selected":T}),onClick:A,onKeyDown:function(e){return D(e,A)},onBlur:y,onMouseDown:v,tabIndex:0,"data-focus-styles-enabled":!0},r.default.createElement(s.default,{className:_("chevron")}),r.default.createElement("span",null,"CSS"),r.default.createElement(d.default,{className:_("chevron")})),r.default.createElement("button",{type:"button",className:_("code-toggle","item",{"is-selected":b}),onClick:C,onKeyDown:function(e){return D(e,C)},onBlur:y,onMouseDown:v,tabIndex:0,"data-focus-styles-enabled":!0},r.default.createElement(s.default,{className:_("chevron")}),r.default.createElement("span",null,"Code"),r.default.createElement(d.default,{className:_("chevron")}))):null,r.default.createElement("div",null,T&&r.default.createElement("div",{className:_("css")},a),b&&r.default.createElement("div",{className:_("code")},n))))};E.propTypes=b,E.defaultProps={isExpanded:!1};t.A=E},18311:function(e,t,n){n.r(t),n.d(t,{default:function(){return g}});var a=n(58168),l=n(53986),o=n(96540),r=n(36665),u=(n(20574),n(92182)),c=["components"],i={};function s(e){var t=e.components,n=(0,l.A)(e,c);return(0,r.mdx)("wrapper",(0,a.A)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Table from 'terra-table';\n\nconst tableData = {\n  cols: [\n    { id: 'Column-0', displayName: 'Patient' },\n    { id: 'Column-1', displayName: 'Location' },\n    { id: 'Column-2', displayName: 'Illness Severity' },\n    { id: 'Column-3', displayName: 'Visit' },\n  ],\n  rows: [\n    {\n      id: '1',\n      cells: [\n        { content: 'Fleck, Arthur' },\n        { content: '1007-MTN' },\n        { content: 'Unstable' },\n        { content: 'Inpatient, 2 months' },\n      ],\n    },\n    {\n      id: '2',\n      cells: [\n        { content: 'Wayne, Bruce' },\n        { content: '1007-MTN-DR' },\n        { content: 'Stable' },\n        { content: 'Outpatient, 2 days' },\n      ],\n    },\n  ],\n};\n\nconst AutoLayoutDefaultTable = () => (\n  <Table\n    id=\"my-table-id\"\n    isAutoLayout\n    overflowColumns={tableData.cols}\n    rows={tableData.rows}\n    ariaLabel=\"Table\"\n  />\n);\n\nexport default AutoLayoutDefaultTable;\n\n")))}s.isMDXComponent=!0;var d=n(201),m=function(e){var t=e.title,n=e.description,a=e.isExpanded;return o.createElement(d.A,{title:t||"Auto Layout Default Table",description:n,example:o.createElement(u.A,null),exampleSrc:o.createElement(s,null),isExpanded:a})},p=n(69763),f=["components"],_={};function b(e){var t=e.components,n=(0,l.A)(e,f);return(0,r.mdx)("wrapper",(0,a.A)({},_,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Table from 'terra-table';\n\nconst tableData = {\n  cols: [\n    { id: 'Column-0', displayName: 'Patient', width: '35%' },\n    { id: 'Column-1', displayName: 'Location', width: '25%' },\n    { id: 'Column-2', displayName: 'Illness Severity', width: '15%' },\n    { id: 'Column-3', displayName: 'Visit', width: '25%' },\n  ],\n  rows: [\n    {\n      id: '1',\n      cells: [\n        { content: 'Fleck, Arthur' },\n        { content: '1007-MTN' },\n        { content: 'Unstable' },\n        { content: 'Inpatient, 2 months' },\n      ],\n    },\n    {\n      id: '2',\n      cells: [\n        { content: 'Wayne, Bruce' },\n        { content: '1007-MTN-DR' },\n        { content: 'Stable' },\n        { content: 'Outpatient, 2 days' },\n      ],\n    },\n  ],\n};\n\nconst AutoLayoutTable = () => (\n  <Table\n    id=\"my-table-id\"\n    isAutoLayout\n    overflowColumns={tableData.cols}\n    rows={tableData.rows}\n    ariaLabel=\"Table\"\n  />\n);\n\nexport default AutoLayoutTable;\n\n")))}b.isMDXComponent=!0;var y=function(e){var t=e.title,n=e.description,a=e.isExpanded;return o.createElement(d.A,{title:t||"Auto Layout Table",description:n,example:o.createElement(p.A,null),exampleSrc:o.createElement(b,null),isExpanded:a})},v=["components"],E={},x="wrapper";function g(e){var t=e.components,n=(0,l.A)(e,v);return(0,r.mdx)(x,(0,a.A)({},E,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"auto-layout-table"},"Auto Layout Table"),(0,r.mdx)("h3",{id:"description"},"Description"),(0,r.mdx)("p",null,"This example demonstrates a ",(0,r.mdx)("a",{parentName:"p",href:"/terra-framework/pull/2173/components/cerner-terra-framework-docs/table/about"},"Table")," component implementation leveraging the auto layout."),(0,r.mdx)(m,{title:"Auto Layout Default",mdxType:"AutoLayoutDefaultTable"}),(0,r.mdx)(y,{title:"Auto Layout with Defined Column Sizes",mdxType:"AutoLayoutTable"}))}g.isMDXComponent=!0},20574:function(e,t,n){n.d(t,{E:function(){return o}});var a=n(96540),l=n(55713),o=function(e){var t=e.url;return a.createElement(l.A,{src:"https://github.com/cerner/terra-framework/tree/main/packages/terra-table",name:"terra-table",version:"5.25.0",url:t})}},92182:function(e,t,n){var a=n(24994);t.A=void 0;var l=a(n(96540)),o=a(n(83264)),r={cols:[{id:"Column-0",displayName:"Patient"},{id:"Column-1",displayName:"Location"},{id:"Column-2",displayName:"Illness Severity"},{id:"Column-3",displayName:"Visit"}],rows:[{id:"1",cells:[{content:"Fleck, Arthur"},{content:"1007-MTN"},{content:"Unstable"},{content:"Inpatient, 2 months"}]},{id:"2",cells:[{content:"Wayne, Bruce"},{content:"1007-MTN-DR"},{content:"Stable"},{content:"Outpatient, 2 days"}]}]};t.A=function(){return l.default.createElement(o.default,{id:"my-table-id",isAutoLayout:!0,overflowColumns:r.cols,rows:r.rows,ariaLabel:"Table"})}},69763:function(e,t,n){var a=n(24994);t.A=void 0;var l=a(n(96540)),o=a(n(83264)),r={cols:[{id:"Column-0",displayName:"Patient",width:"35%"},{id:"Column-1",displayName:"Location",width:"25%"},{id:"Column-2",displayName:"Illness Severity",width:"15%"},{id:"Column-3",displayName:"Visit",width:"25%"}],rows:[{id:"1",cells:[{content:"Fleck, Arthur"},{content:"1007-MTN"},{content:"Unstable"},{content:"Inpatient, 2 months"}]},{id:"2",cells:[{content:"Wayne, Bruce"},{content:"1007-MTN-DR"},{content:"Stable"},{content:"Outpatient, 2 days"}]}]};t.A=function(){return l.default.createElement(o.default,{id:"my-table-id",isAutoLayout:!0,overflowColumns:r.cols,rows:r.rows,ariaLabel:"Table"})}},25642:function(e,t,n){n.r(t),t.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},89986:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},58168:function(e,t,n){function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},a.apply(this,arguments)}n.d(t,{A:function(){return a}})},53986:function(e,t,n){function a(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n={};for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){if(t.indexOf(a)>=0)continue;n[a]=e[a]}return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}n.d(t,{A:function(){return a}})}}]);