"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[813],{22863:function(e,a,t){var n=t(64836);a.Z=void 0;var l=n(t(67294)),d=n(t(45697)),m=n(t(47166)),r=n(t(17422)),o=m.default.bind(r.default),i={name:d.default.string.isRequired,src:d.default.string,url:d.default.string,version:d.default.string.isRequired},p=function(e){var a=e.src,t=e.name,n=e.url,d=e.version,m=l.default.createElement("a",{className:o("badge"),href:n||"https://www.npmjs.org/package/".concat(t,"/v/").concat(d)},l.default.createElement("span",{className:o("badge-name")},n?"package":"npm"),l.default.createElement("span",{className:o("badge-version")},"v".concat(d))),r=a?l.default.createElement("a",{className:o("badge"),href:a},l.default.createElement("span",{className:o("badge-name")},"github"),l.default.createElement("span",{className:o("badge-version")},"source")):void 0;return l.default.createElement("div",{className:o("badge-container")},m,r)};p.propTypes=i;var s=p;a.Z=s},49271:function(e,a,t){var n=t(64836),l=t(18698);a.Z=void 0;var d=n(t(27424)),m=function(e,a){if(!a&&e&&e.__esModule)return e;if(null===e||"object"!==l(e)&&"function"!=typeof e)return{default:e};var t=x(a);if(t&&t.has(e))return t.get(e);var n={},d=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var m in e)if("default"!==m&&Object.prototype.hasOwnProperty.call(e,m)){var r=d?Object.getOwnPropertyDescriptor(e,m):null;r&&(r.get||r.set)?Object.defineProperty(n,m,r):n[m]=e[m]}n.default=e,t&&t.set(e,n);return n}(t(67294)),r=n(t(45697)),o=n(t(47166)),i=t(21538),p=n(t(33864)),s=n(t(23399)),u=t(51051),c=n(t(53560));function x(e){if("function"!=typeof WeakMap)return null;var a=new WeakMap,t=new WeakMap;return(x=function(e){return e?t:a})(e)}var y=o.default.bind(c.default),f={example:r.default.element,exampleSrc:r.default.element,exampleCssSrc:r.default.element,title:r.default.string,description:r.default.node,isExpanded:r.default.bool},g=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},T=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},b=function(e){var a=e.example,t=e.exampleSrc,n=e.exampleCssSrc,l=e.title,r=e.description,o=e.isExpanded,c=(0,m.useState)(o),x=(0,d.default)(c,2),f=x[0],b=x[1],h=(0,m.useState)(!1),N=(0,d.default)(h,2),C=N[0],v=N[1],_=m.default.useContext(i.ThemeContext),w=void 0!==n,E=function(){v(!C),f&&b(!f)},R=function(){b(!f),C&&v(!C)},D=function(e,a){e.nativeEvent.keyCode!==u.KEY_SPACE&&e.nativeEvent.keyCode!==u.KEY_RETURN||(e.preventDefault(),a())};return m.default.createElement("div",{className:y("template",_.className)},m.default.createElement("div",{className:y("header")},l&&m.default.createElement("h2",{className:y("title")},l)),m.default.createElement("div",{className:y("content")},r&&m.default.createElement("div",{className:y("description")},r),a),m.default.createElement("div",{className:y("footer")},t?m.default.createElement("div",{className:y("button-container")},w&&m.default.createElement("button",{type:"button",className:y("css-toggle","item",{"is-selected":C}),onClick:E,onKeyDown:function(e){return D(e,E)},onBlur:g,onMouseDown:T,tabIndex:0,"data-focus-styles-enabled":!0},m.default.createElement(p.default,{className:y("chevron")}),m.default.createElement("span",null,"CSS"),m.default.createElement(s.default,{className:y("chevron")})),m.default.createElement("button",{type:"button",className:y("code-toggle","item",{"is-selected":f}),onClick:R,onKeyDown:function(e){return D(e,R)},onBlur:g,onMouseDown:T,tabIndex:0,"data-focus-styles-enabled":!0},m.default.createElement(p.default,{className:y("chevron")}),m.default.createElement("span",null,"Code"),m.default.createElement(s.default,{className:y("chevron")}))):null,m.default.createElement("div",null,C&&m.default.createElement("div",{className:y("css")},n),f&&m.default.createElement("div",{className:y("code")},t))))};b.propTypes=f,b.defaultProps={isExpanded:!1};var h=b;a.Z=h},39888:function(e,a,t){t.r(a),t.d(a,{default:function(){return f}});var n=t(87462),l=t(44925),d=(t(67294),t(81254)),m=t(61701),r=t(98108),o=t(78530),i=["components"],p={},s="wrapper";function u(e){var a=e.components,t=(0,l.Z)(e,i);return(0,d.mdx)(s,(0,n.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,d.mdx)(o.ZP,{mdxType:"PropsTable"},(0,d.mdx)(o.X2,{key:"ROW1",mdxType:"Row"},(0,d.mdx)(o.O,{mdxType:"PropNameCell"},"id"),(0,d.mdx)(o.Di,{mdxType:"TypeCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,d.mdx)(o.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,d.mdx)(o.mW,{mdxType:"DefaultValueCell"},(0,d.mdx)("p",null,"none")),(0,d.mdx)(o.Ex,{mdxType:"DescriptionCell"},(0,d.mdx)("p",null,"String that will be used to identify the table. If multiple tables are on the same page, each table should have\na unique id."))),(0,d.mdx)(o.X2,{key:"ROW2",mdxType:"Row"},(0,d.mdx)(o.O,{mdxType:"PropNameCell"},"rows"),(0,d.mdx)(o.Di,{mdxType:"TypeCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"arrayOf: [{\n  type: 'custom',\n}],\n"))),(0,d.mdx)(o.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,d.mdx)(o.mW,{mdxType:"DefaultValueCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"[]\n"))),(0,d.mdx)(o.Ex,{mdxType:"DescriptionCell"},(0,d.mdx)("p",null,"Data for content in the body of the table. Rows will be rendered in the order given."))),(0,d.mdx)(o.X2,{key:"ROW3",mdxType:"Row"},(0,d.mdx)(o.O,{mdxType:"PropNameCell"},"ariaLabelledBy"),(0,d.mdx)(o.Di,{mdxType:"TypeCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,d.mdx)(o.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,d.mdx)(o.mW,{mdxType:"DefaultValueCell"},(0,d.mdx)("p",null,"none")),(0,d.mdx)(o.Ex,{mdxType:"DescriptionCell"},(0,d.mdx)("p",null,"String that identifies the element (or elements) that labels the table."))),(0,d.mdx)(o.X2,{key:"ROW4",mdxType:"Row"},(0,d.mdx)(o.O,{mdxType:"PropNameCell"},"ariaLabel"),(0,d.mdx)(o.Di,{mdxType:"TypeCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,d.mdx)(o.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,d.mdx)(o.mW,{mdxType:"DefaultValueCell"},(0,d.mdx)("p",null,"none")),(0,d.mdx)(o.Ex,{mdxType:"DescriptionCell"},(0,d.mdx)("p",null,"String that labels the table for accessibility. If ariaLabelledBy is specified, ariaLabel will not be used."))),(0,d.mdx)(o.X2,{key:"ROW5",mdxType:"Row"},(0,d.mdx)(o.O,{mdxType:"PropNameCell"},"pinnedColumns"),(0,d.mdx)(o.Di,{mdxType:"TypeCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"arrayOf: [{\n  type: 'custom',\n}],\n"))),(0,d.mdx)(o.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,d.mdx)(o.mW,{mdxType:"DefaultValueCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"[]\n"))),(0,d.mdx)(o.Ex,{mdxType:"DescriptionCell"},(0,d.mdx)("p",null,"Data for pinned columns. Pinned columns are the stickied leftmost columns of the table.\nColumns will be presented in the order given."))),(0,d.mdx)(o.X2,{key:"ROW6",mdxType:"Row"},(0,d.mdx)(o.O,{mdxType:"PropNameCell"},"overflowColumns"),(0,d.mdx)(o.Di,{mdxType:"TypeCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"arrayOf: [{\n  type: 'custom',\n}],\n"))),(0,d.mdx)(o.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,d.mdx)(o.mW,{mdxType:"DefaultValueCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"[]\n"))),(0,d.mdx)(o.Ex,{mdxType:"DescriptionCell"},(0,d.mdx)("p",null,"Data for overflow columns. Overflow columns are rendered in the table's horizontal overflow.\nColumns will be presented in the order given."))),(0,d.mdx)(o.X2,{key:"ROW7",mdxType:"Row"},(0,d.mdx)(o.O,{mdxType:"PropNameCell"},"defaultColumnWidth"),(0,d.mdx)(o.Di,{mdxType:"TypeCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"number\n"))),(0,d.mdx)(o.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,d.mdx)(o.mW,{mdxType:"DefaultValueCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"200\n"))),(0,d.mdx)(o.Ex,{mdxType:"DescriptionCell"},(0,d.mdx)("p",null,"Number indicating the default column width in px. This value will be used if no overriding width value is provided on a per-column basis."))),(0,d.mdx)(o.X2,{key:"ROW8",mdxType:"Row"},(0,d.mdx)(o.O,{mdxType:"PropNameCell"},"columnHeaderHeight"),(0,d.mdx)(o.Di,{mdxType:"TypeCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,d.mdx)(o.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,d.mdx)(o.mW,{mdxType:"DefaultValueCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"'2.5rem'\n"))),(0,d.mdx)(o.Ex,{mdxType:"DescriptionCell"},(0,d.mdx)("p",null,"String that specifies the column height. Any valid CSS height value is accepted."))),(0,d.mdx)(o.X2,{key:"ROW9",mdxType:"Row"},(0,d.mdx)(o.O,{mdxType:"PropNameCell"},"rowHeight"),(0,d.mdx)(o.Di,{mdxType:"TypeCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,d.mdx)(o.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,d.mdx)(o.mW,{mdxType:"DefaultValueCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"'2.5rem'\n"))),(0,d.mdx)(o.Ex,{mdxType:"DescriptionCell"},(0,d.mdx)("p",null,"String that specifies the height for the rows in the table. Any valid CSS value is accepted."))),(0,d.mdx)(o.X2,{key:"ROW10",mdxType:"Row"},(0,d.mdx)(o.O,{mdxType:"PropNameCell"},"rowHeaderIndex"),(0,d.mdx)(o.Di,{mdxType:"TypeCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"custom\n"))),(0,d.mdx)(o.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,d.mdx)(o.mW,{mdxType:"DefaultValueCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"0\n"))),(0,d.mdx)(o.Ex,{mdxType:"DescriptionCell"},(0,d.mdx)("p",null,"Number indicating the index of the column that represents row header. Index is 0 based and cannot exceed one less than the number of columns in the table."))),(0,d.mdx)(o.X2,{key:"ROW11",mdxType:"Row"},(0,d.mdx)(o.O,{mdxType:"PropNameCell"},"onColumnResize"),(0,d.mdx)(o.Di,{mdxType:"TypeCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,d.mdx)(o.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,d.mdx)(o.mW,{mdxType:"DefaultValueCell"},(0,d.mdx)("p",null,"none")),(0,d.mdx)(o.Ex,{mdxType:"DescriptionCell"},(0,d.mdx)("p",null,"Function that is called when a resizable column is resized. Parameters:\n@param {string} columnId columnId\n@param {string} requestedWidth requestedWidth"))),(0,d.mdx)(o.X2,{key:"ROW12",mdxType:"Row"},(0,d.mdx)(o.O,{mdxType:"PropNameCell"},"onColumnSelect"),(0,d.mdx)(o.Di,{mdxType:"TypeCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,d.mdx)(o.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,d.mdx)(o.mW,{mdxType:"DefaultValueCell"},(0,d.mdx)("p",null,"none")),(0,d.mdx)(o.Ex,{mdxType:"DescriptionCell"},(0,d.mdx)("p",null,"Callback function that is called when a selectable column is selected. Parameters:\n@param {string} columnId columnId"))),(0,d.mdx)(o.X2,{key:"ROW13",mdxType:"Row"},(0,d.mdx)(o.O,{mdxType:"PropNameCell"},"hasSelectableRows"),(0,d.mdx)(o.Di,{mdxType:"TypeCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,d.mdx)(o.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,d.mdx)(o.mW,{mdxType:"DefaultValueCell"},(0,d.mdx)("p",null,"none")),(0,d.mdx)(o.Ex,{mdxType:"DescriptionCell"},(0,d.mdx)("p",null,"Boolean indicating whether or not the table should allow entire rows to be selectable. An additional column will be\nrendered to allow for row selection to occur."))),(0,d.mdx)(o.X2,{key:"ROW14",mdxType:"Row"},(0,d.mdx)(o.O,{mdxType:"PropNameCell"},"isStriped"),(0,d.mdx)(o.Di,{mdxType:"TypeCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,d.mdx)(o.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,d.mdx)(o.mW,{mdxType:"DefaultValueCell"},(0,d.mdx)("p",null,"none")),(0,d.mdx)(o.Ex,{mdxType:"DescriptionCell"},(0,d.mdx)("p",null,"Boolean specifying whether or not the table should have zebra striping for rows.")))))}u.isMDXComponent=!0;var c=["components"],x={},y="wrapper";function f(e){var a=e.components,t=(0,l.Z)(e,c);return(0,d.mdx)(y,(0,n.Z)({},x,t,{components:a,mdxType:"MDXLayout"}),(0,d.mdx)(m.C,{mdxType:"Badge"}),(0,d.mdx)("h1",{id:"terra-table"},"Terra Table"),(0,d.mdx)("p",null,"Terra Table is a structural component used to display tabular data. Table provides means to handle row selection and hooks for sortable columns."),(0,d.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Install with ",(0,d.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("inlineCode",{parentName:"li"},"npm install terra-table"))))),(0,d.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),(0,d.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Peer Dependency"),(0,d.mdx)("th",{parentName:"tr",align:null},"Version"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"react"),(0,d.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"react-dom"),(0,d.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"react-intl"),(0,d.mdx)("td",{parentName:"tr",align:null},"^2.8.0")))),(0,d.mdx)("h2",{id:"usage"},"Usage"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-jsx"},'import Table from "terra-table";\n')),(0,d.mdx)("h2",{id:"component-features"},"Component Features"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"},"Cross-Browser Support")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#responsive-support"},"Responsive Support")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#mobile-support"},"Mobile Support")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#ltr--rtl"},"LTR/RTL Support"))),(0,d.mdx)("h1",{id:"default-table"},"Default Table"),(0,d.mdx)(r.Z,{mdxType:"DefaultTable"}),(0,d.mdx)("h2",{id:"table-props"},"Table Props"),(0,d.mdx)(u,{mdxType:"TablePropsTable"}))}f.isMDXComponent=!0},98108:function(e,a,t){t.d(a,{Z:function(){return u}});var n=t(67294),l=t(87829),d=t(87462),m=t(44925),r=t(81254),o=["components"],i={};function p(e){var a=e.components,t=(0,m.Z)(e,o);return(0,r.mdx)("wrapper",(0,d.Z)({},i,t,{components:a,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Table from 'terra-table';\n\nconst tableData = {\n  cols: [\n    { id: 'Column-0', displayName: 'Patient', isResizable: true },\n    { id: 'Column-1', displayName: 'Location' },\n    { id: 'Column-2', displayName: 'Illness Severity' },\n    { id: 'Column-3', displayName: 'Visit' },\n    { id: 'Column-4', displayName: 'Allergy' },\n    { id: 'Column-5', displayName: 'Primary Contact' },\n    { id: 'Column-6', displayName: 'Generic Order Counts' },\n    { id: 'Column-7', displayName: 'Patient Age' },\n    { id: 'Column-8', displayName: 'Medication History' },\n    { id: 'Column-9', displayName: 'My Relationship' },\n  ],\n  rows: [\n    {\n      id: '1',\n      cells: [\n        { content: 'Fleck, Arthur' },\n        { content: '1007-MTN' },\n        { content: 'Unstable' },\n        { content: 'Inpatient, 2 months' },\n        { content: '' },\n        { content: 'Quinzell, Harleen' },\n        { content: '' },\n        { isMasked: true },\n        { isMasked: true },\n        { content: 'Admitting Physician' },\n      ],\n    },\n    {\n      id: '2',\n      cells: [\n        { content: 'Wayne, Bruce' },\n        { content: '1007-MTN-DR' },\n        { content: 'Stable' },\n        { content: 'Outpatient, 2 days' },\n        { content: 'Phytochemicals' },\n        { content: 'Grayson, Richard' },\n        { content: '' },\n        { content: '' },\n        { isMasked: true },\n        { content: 'Admitting Physician' },\n      ],\n    },\n  ],\n};\n\nconst DefaultTable = () => (\n  <Table\n    id=\"my-table-id\"\n    overflowColumns={tableData.cols}\n    rows={tableData.rows}\n  />\n);\n\nexport default DefaultTable;\n\n")))}p.isMDXComponent=!0;var s=t(49271),u=function(e){var a=e.title,t=e.description,d=e.isExpanded;return n.createElement(s.Z,{title:a||"Default Table",description:t,example:n.createElement(l.Z,null),exampleSrc:n.createElement(p,null),isExpanded:d})}},61701:function(e,a,t){t.d(a,{C:function(){return d}});var n=t(67294),l=t(22863),d=function(e){var a=e.url;return n.createElement(l.Z,{src:"https://github.com/cerner/table-framework/tree/main/packages/terra-table",name:"terra-table",version:"5.0.0-alpha.0",url:a})}},87829:function(e,a,t){var n=t(64836);a.Z=void 0;var l=n(t(67294)),d=n(t(12810)),m={cols:[{id:"Column-0",displayName:"Patient",isResizable:!0},{id:"Column-1",displayName:"Location"},{id:"Column-2",displayName:"Illness Severity"},{id:"Column-3",displayName:"Visit"},{id:"Column-4",displayName:"Allergy"},{id:"Column-5",displayName:"Primary Contact"},{id:"Column-6",displayName:"Generic Order Counts"},{id:"Column-7",displayName:"Patient Age"},{id:"Column-8",displayName:"Medication History"},{id:"Column-9",displayName:"My Relationship"}],rows:[{id:"1",cells:[{content:"Fleck, Arthur"},{content:"1007-MTN"},{content:"Unstable"},{content:"Inpatient, 2 months"},{content:""},{content:"Quinzell, Harleen"},{content:""},{isMasked:!0},{isMasked:!0},{content:"Admitting Physician"}]},{id:"2",cells:[{content:"Wayne, Bruce"},{content:"1007-MTN-DR"},{content:"Stable"},{content:"Outpatient, 2 days"},{content:"Phytochemicals"},{content:"Grayson, Richard"},{content:""},{content:""},{isMasked:!0},{content:"Admitting Physician"}]}]};a.Z=function(){return l.default.createElement(d.default,{id:"my-table-id",overflowColumns:m.cols,rows:m.rows})}},17422:function(e,a,t){t.r(a),a.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},53560:function(e,a,t){t.r(a),a.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},33864:function(e,a,t){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=d(t(67294)),l=d(t(99139));function d(e){return e&&e.__esModule?e:{default:e}}function m(){return m=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},m.apply(this,arguments)}var r=function(e){var a=m({},e);return n.default.createElement(l.default,a,n.default.createElement("path",{d:"M10.3 24 33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};r.displayName="IconChevronLeft",r.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};a.default=r}}]);