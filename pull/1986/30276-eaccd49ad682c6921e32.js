"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[30276,79815,26692,10778,24958,78909,29409],{49271:function(e,l,n){var t=n(64836),a=n(18698);l.Z=void 0;var r=t(n(27424)),d=function(e,l){if(!l&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var n=x(l);if(n&&n.has(e))return n.get(e);var t={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var d in e)if("default"!==d&&Object.prototype.hasOwnProperty.call(e,d)){var m=r?Object.getOwnPropertyDescriptor(e,d):null;m&&(m.get||m.set)?Object.defineProperty(t,d,m):t[d]=e[d]}t.default=e,n&&n.set(e,t);return t}(n(67294)),m=t(n(45697)),o=t(n(19845)),i=n(21538),c=t(n(33864)),u=t(n(23399)),p=n(51051),s=t(n(53560));function x(e){if("function"!=typeof WeakMap)return null;var l=new WeakMap,n=new WeakMap;return(x=function(e){return e?n:l})(e)}var y=o.default.bind(s.default),f={example:m.default.element,exampleSrc:m.default.element,exampleCssSrc:m.default.element,title:m.default.string,description:m.default.node,isExpanded:m.default.bool},h=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},_=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},b=function(e){var l=e.example,n=e.exampleSrc,t=e.exampleCssSrc,a=e.title,m=e.description,o=e.isExpanded,s=(0,d.useState)(o),x=(0,r.default)(s,2),f=x[0],b=x[1],T=(0,d.useState)(!1),g=(0,r.default)(T,2),v=g[0],N=g[1],k=d.default.useContext(i.ThemeContext),C=void 0!==t,w=function(){N(!v),f&&b(!f)},D=function(){b(!f),v&&N(!v)},E=function(e,l){e.nativeEvent.keyCode!==p.KEY_SPACE&&e.nativeEvent.keyCode!==p.KEY_RETURN||(e.preventDefault(),l())};return d.default.createElement("div",{className:y("template",k.className)},d.default.createElement("div",{className:y("header")},a&&d.default.createElement("h2",{className:y("title")},a)),d.default.createElement("div",{className:y("content")},m&&d.default.createElement("div",{className:y("description")},m),l),d.default.createElement("div",{className:y("footer")},n?d.default.createElement("div",{className:y("button-container")},C&&d.default.createElement("button",{type:"button",className:y("css-toggle","item",{"is-selected":v}),onClick:w,onKeyDown:function(e){return E(e,w)},onBlur:h,onMouseDown:_,tabIndex:0,"data-focus-styles-enabled":!0},d.default.createElement(c.default,{className:y("chevron")}),d.default.createElement("span",null,"CSS"),d.default.createElement(u.default,{className:y("chevron")})),d.default.createElement("button",{type:"button",className:y("code-toggle","item",{"is-selected":f}),onClick:D,onKeyDown:function(e){return E(e,D)},onBlur:h,onMouseDown:_,tabIndex:0,"data-focus-styles-enabled":!0},d.default.createElement(c.default,{className:y("chevron")}),d.default.createElement("span",null,"Code"),d.default.createElement(u.default,{className:y("chevron")}))):null,d.default.createElement("div",null,v&&d.default.createElement("div",{className:y("css")},t),f&&d.default.createElement("div",{className:y("code")},n))))};b.propTypes=f,b.defaultProps={isExpanded:!1};var T=b;l.Z=T},40996:function(e,l,n){Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var t=i(n(67294)),a=i(n(45697)),r=i(n(19845)),d=i(n(47341)),m=i(n(66983)),o=["children"];function i(e){return e&&e.__esModule?e:{default:e}}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var n=arguments[l];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},c.apply(this,arguments)}function u(e,l){if(null==e)return{};var n,t,a=function(e,l){if(null==e)return{};var n,t,a={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],l.indexOf(n)>=0||(a[n]=e[n]);return a}(e,l);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],l.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.default.bind(m.default),s=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},x=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},y={children:a.default.string},f=function(e){var l=e.children,n=u(e,o),a=t.default.useContext(d.default),m=(0,r.default)(p(["button",a.className]),n.className);return t.default.createElement("button",c({},n,{type:"button",className:m,onBlur:s,onMouseDown:x,"data-focus-styles-enabled":!0}),l)};f.propTypes=y;l.default=f},59278:function(e,l,n){Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var t=o(n(67294)),a=o(n(45697)),r=o(n(19845)),d=o(n(47341)),m=o(n(30866));function o(e){return e&&e.__esModule?e:{default:e}}var i=r.default.bind(m.default),c={ariaLevel:a.default.oneOf(["2","3","4","5","6"]),children:a.default.node,variant:a.default.oneOf(["ux-recommendation","caution","deprecation","maintenance","important","not-supported"])},u=function(e){var l=e.ariaLevel,n=e.variant,a=e.children,r=t.default.useContext(d.default);return t.default.createElement("div",{className:i("notice",n,r.className)},t.default.createElement("div",{className:i("accessory"),"aria-hidden":"true",focusable:"false"}),t.default.createElement("div",{role:"heading",className:i("title"),"aria-level":l},t.default.createElement("span",null,function(e){return"ux-recommendation"===e?"UX Recommendation":"caution"===e?"Caution":"deprecation"===e?"Deprecation Notice":"maintenance"===e?"In Maintenance":"important"===e?"Important":"not-supported"===e?"Hazards for Incorrect Usage":"error"}(n))),t.default.createElement("div",{className:i("children")},function(e){return"not-supported"===e?t.default.createElement(t.default.Fragment,null,t.default.createElement("p",{className:i("paragraph")},"This component was designed and tested according to the documented implementation."),t.default.createElement("p",{className:i("paragraph")},"Using the component incorrectly:",t.default.createElement("ul",{className:i("list")},t.default.createElement("li",null,"will likely result in improper composition and create accessibility issues"),t.default.createElement("li",null,"may cause erratic or broken behaviors and styles"),t.default.createElement("li",null,t.default.createElement("strong",null,"will not be supported "),"or enhanced to allow for incorrect use")))):null}(n),t.default.Children.map(a,(function(e){return"string"==typeof e?t.default.createElement("p",null,e):e}))))};u.propTypes=c,u.defaultProps={ariaLevel:"2",variant:"important"};l.default=u},47306:function(e,l,n){Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var t=c(n(67294)),a=c(n(45697)),r=c(n(93967)),d=c(n(19845)),m=c(n(47341)),o=c(n(42620)),i=["title"];function c(e){return e&&e.__esModule?e:{default:e}}function u(){return u=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var n=arguments[l];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},u.apply(this,arguments)}function p(e,l){if(null==e)return{};var n,t,a=function(e,l){if(null==e)return{};var n,t,a={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],l.indexOf(n)>=0||(a[n]=e[n]);return a}(e,l);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],l.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=d.default.bind(o.default),x={title:a.default.string},y=function(e){var l=e.title,n=p(e,i),a=t.default.useContext(m.default),d=(0,r.default)(s(["placeholder",a.className]),n.className),o=s(["inner"]);return t.default.createElement("div",u({},n,{className:d}),t.default.createElement("div",{className:o},t.default.createElement("p",{className:s("title")},l)))};y.propTypes=x,y.defaultProps={title:""};l.default=y},34261:function(e,l,n){Object.defineProperty(l,"__esModule",{value:!0}),Object.defineProperty(l,"Button",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(l,"Notice",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(l,"Placeholder",{enumerable:!0,get:function(){return a.default}});var t=d(n(59278)),a=d(n(47306)),r=d(n(40996));function d(e){return e&&e.__esModule?e:{default:e}}},8347:function(e,l,n){n.r(l),n.d(l,{default:function(){return M}});var t=n(87462),a=n(44925),r=n(67294),d=n(81254),m=n(22863),o=function(e){var l=e.url;return r.createElement(m.Z,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-table",name:"terra-table",version:"4.36.0",url:l})},i=n(34261),c=n(42424),u=["components"],p={};function s(e){var l=e.components,n=(0,a.Z)(e,u);return(0,d.mdx)("wrapper",(0,t.Z)({},p,n,{components:l,mdxType:"MDXLayout"}),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Table from 'legacy-terra-table';\n\nconst TableExample = () => (\n  <Table\n    summaryId=\"default-table\"\n    summary=\"This is a default table structure.\"\n    numberOfColumns={3}\n    headerData={{\n      cells: [\n        { id: 'header-name', key: 'name', children: 'Name' },\n        { id: 'header-address', key: 'address', children: 'Address' },\n        { id: 'header-phone_number', key: 'phone_number', children: 'Phone Number' },\n      ],\n    }}\n    bodyData={[\n      {\n        rows: [\n          {\n            key: 'row-0',\n            cells: [\n              { key: 'cell-0', children: 'John Smith' },\n              { key: 'cell-1', children: '123 Adams Drive' },\n              { key: 'cell-2', children: '111-222-3333' },\n            ],\n          },\n          {\n            key: 'row-1',\n            cells: [\n              { key: 'cell-0', children: 'Jane Smith' },\n              { key: 'cell-1', children: '321 Drive Street' },\n              { key: 'cell-2', children: '111-222-3333' },\n            ],\n          },\n          {\n            key: 'row-2',\n            cells: [\n              { key: 'cell-0', children: 'Dave Smith' },\n              { key: 'cell-1', children: '213 Raymond Road' },\n              { key: 'cell-2', children: '111-222-3333' },\n            ],\n          },\n        ],\n      },\n    ]}\n  />\n);\n\nexport default TableExample;\n\n")))}s.isMDXComponent=!0;var x=n(49271),y=function(e){var l=e.title,n=e.description,t=e.isExpanded;return r.createElement(x.Z,{title:l||"Default Table",description:n,example:r.createElement(c.Z,null),exampleSrc:r.createElement(s,null),isExpanded:t})},f=n(37691),h=["components"],_={};function b(e){var l=e.components,n=(0,a.Z)(e,h);return(0,d.mdx)("wrapper",(0,t.Z)({},_,n,{components:l,mdxType:"MDXLayout"}),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Table from 'legacy-terra-table';\n\nconst PaddingTable = () => (\n  <Table\n    summaryId=\"compact-table\"\n    summary=\"This table has compact row padding.\"\n    cellPaddingStyle=\"compact\"\n    numberOfColumns={1}\n    dividerStyle=\"horizontal\"\n    headerData={{\n      cells: [\n        { id: 'header-name', key: 'name', children: 'Name' },\n        { id: 'header-address', key: 'address', children: 'Address' },\n        { id: 'header-phone_number', key: 'phone_number', children: 'Phone Number' },\n      ],\n    }}\n    bodyData={[\n      {\n        rows: [\n          {\n            key: 'row-0',\n            cells: [\n              { key: 'cell-0', children: 'John Smith' },\n              { key: 'cell-1', children: '123 Adams Drive' },\n              { key: 'cell-2', children: '111-222-3333' },\n            ],\n          },\n          {\n            key: 'row-1',\n            cells: [\n              { key: 'cell-0', children: 'Jane Smith' },\n              { key: 'cell-1', children: '321 Drive Street' },\n              { key: 'cell-2', children: '111-222-3333' },\n            ],\n          },\n          {\n            key: 'row-2',\n            cells: [\n              { key: 'cell-0', children: 'Dave Smith' },\n              { key: 'cell-1', children: '213 Raymond Road' },\n              { key: 'cell-2', children: '111-222-3333' },\n            ],\n          },\n        ],\n      },\n    ]}\n  />\n);\n\nexport default PaddingTable;\n\n")))}b.isMDXComponent=!0;var T=function(e){var l=e.title,n=e.description,t=e.isExpanded;return r.createElement(x.Z,{title:l||"Compact Padding Table",description:n,example:r.createElement(f.Z,null),exampleSrc:r.createElement(b,null),isExpanded:t})},g=n(1675),v=["components"],N={};function k(e){var l=e.components,n=(0,a.Z)(e,v);return(0,d.mdx)("wrapper",(0,t.Z)({},N,n,{components:l,mdxType:"MDXLayout"}),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Table from 'legacy-terra-table';\n\nconst StripedTable = () => (\n  <Table\n    summaryId=\"striped-table\"\n    summary=\"This table displays striped rows.\"\n    numberOfColumns={3}\n    dividerStyle=\"horizontal\"\n    headerData={{\n      cells: [\n        { id: 'header-name', key: 'name', children: 'Name' },\n        { id: 'header-address', key: 'address', children: 'Address' },\n        { id: 'header-phone_number', key: 'phone_number', children: 'Phone Number' },\n      ],\n    }}\n    bodyData={[\n      {\n        rows: [\n          {\n            key: 'row-0',\n            cells: [\n              { key: 'cell-0', children: 'John Smith' },\n              { key: 'cell-1', children: '123 Adams Drive' },\n              { key: 'cell-2', children: '111-222-3333' },\n            ],\n          },\n          {\n            key: 'row-1',\n            isStriped: true,\n            cells: [\n              { key: 'cell-0', children: 'Jane Smith' },\n              { key: 'cell-1', children: '321 Drive Street' },\n              { key: 'cell-2', children: '111-222-3333' },\n            ],\n          },\n          {\n            key: 'row-2',\n            cells: [\n              { key: 'cell-0', children: 'Dave Smith' },\n              { key: 'cell-1', children: '213 Raymond Road' },\n              { key: 'cell-2', children: '111-222-3333' },\n            ],\n          },\n        ],\n      },\n    ]}\n  />\n);\n\nexport default StripedTable;\n\n")))}k.isMDXComponent=!0;var C=function(e){var l=e.title,n=e.description,t=e.isExpanded;return r.createElement(x.Z,{title:l||"Striped Table",description:n,example:r.createElement(g.Z,null),exampleSrc:r.createElement(k,null),isExpanded:t})},w=n(78530),D=["components"],E={},O="wrapper";function R(e){var l=e.components,n=(0,a.Z)(e,D);return(0,d.mdx)(O,(0,t.Z)({},E,n,{components:l,mdxType:"MDXLayout"}),(0,d.mdx)(w.ZP,{mdxType:"PropsTable"},(0,d.mdx)(w.X2,{key:"ROW1",mdxType:"Row"},(0,d.mdx)(w.O,{mdxType:"PropNameCell"},"bodyData"),(0,d.mdx)(w.Di,{mdxType:"TypeCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"arrayOf: [{\n  type: 'custom',\n}],\n"))),(0,d.mdx)(w.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,d.mdx)(w.mW,{mdxType:"DefaultValueCell"},(0,d.mdx)("p",null,"none")),(0,d.mdx)(w.Ex,{mdxType:"DescriptionCell"},(0,d.mdx)("p",null,"An array of sections containing rows."))),(0,d.mdx)(w.X2,{key:"ROW2",mdxType:"Row"},(0,d.mdx)(w.O,{mdxType:"PropNameCell"},"checkStyle"),(0,d.mdx)(w.Di,{mdxType:"TypeCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"enum: [\n  'icon'\n  'toggle'\n],\n"))),(0,d.mdx)(w.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,d.mdx)(w.mW,{mdxType:"DefaultValueCell"},(0,d.mdx)("p",null,"none")),(0,d.mdx)(w.Ex,{mdxType:"DescriptionCell"},(0,d.mdx)("p",null,"The check mark styling to apply."))),(0,d.mdx)(w.X2,{key:"ROW3",mdxType:"Row"},(0,d.mdx)(w.O,{mdxType:"PropNameCell"},"dividerStyle"),(0,d.mdx)(w.Di,{mdxType:"TypeCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"enum: [\n  'vertical'\n  'horizontal'\n  'both'\n],\n"))),(0,d.mdx)(w.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,d.mdx)(w.mW,{mdxType:"DefaultValueCell"},(0,d.mdx)("p",null,"none")),(0,d.mdx)(w.Ex,{mdxType:"DescriptionCell"},(0,d.mdx)("p",null,"The divider styling to apply to the child rows."))),(0,d.mdx)(w.X2,{key:"ROW4",mdxType:"Row"},(0,d.mdx)(w.O,{mdxType:"PropNameCell"},"columnWidths"),(0,d.mdx)(w.Di,{mdxType:"TypeCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"arrayOf: [{\n  type: 'custom',\n}],\n"))),(0,d.mdx)(w.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,d.mdx)(w.mW,{mdxType:"DefaultValueCell"},(0,d.mdx)("p",null,"none")),(0,d.mdx)(w.Ex,{mdxType:"DescriptionCell"},(0,d.mdx)("p",null,"The width value structures associated to each column."))),(0,d.mdx)(w.X2,{key:"ROW5",mdxType:"Row"},(0,d.mdx)(w.O,{mdxType:"PropNameCell"},"hasChevrons"),(0,d.mdx)(w.Di,{mdxType:"TypeCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,d.mdx)(w.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,d.mdx)(w.mW,{mdxType:"DefaultValueCell"},(0,d.mdx)("p",null,"none")),(0,d.mdx)(w.Ex,{mdxType:"DescriptionCell"},(0,d.mdx)("p",null,"Whether or not the rows should have chevrons applied."))),(0,d.mdx)(w.X2,{key:"ROW6",mdxType:"Row"},(0,d.mdx)(w.O,{mdxType:"PropNameCell"},"headerData"),(0,d.mdx)(w.Di,{mdxType:"TypeCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"custom\n"))),(0,d.mdx)(w.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,d.mdx)(w.mW,{mdxType:"DefaultValueCell"},(0,d.mdx)("p",null,"none")),(0,d.mdx)(w.Ex,{mdxType:"DescriptionCell"},(0,d.mdx)("p",null,"The data to build header cells and columns."))),(0,d.mdx)(w.X2,{key:"ROW7",mdxType:"Row"},(0,d.mdx)(w.O,{mdxType:"PropNameCell"},"headerNode"),(0,d.mdx)(w.Di,{mdxType:"TypeCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"node\n"))),(0,d.mdx)(w.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,d.mdx)(w.mW,{mdxType:"DefaultValueCell"},(0,d.mdx)("p",null,"none")),(0,d.mdx)(w.Ex,{mdxType:"DescriptionCell"},(0,d.mdx)("p",null,"Element to append to the top of the table. i.e. toolbars etc."))),(0,d.mdx)(w.X2,{key:"ROW8",mdxType:"Row"},(0,d.mdx)(w.O,{mdxType:"PropNameCell"},"fill"),(0,d.mdx)(w.Di,{mdxType:"TypeCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,d.mdx)(w.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,d.mdx)(w.mW,{mdxType:"DefaultValueCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,d.mdx)(w.Ex,{mdxType:"DescriptionCell"},(0,d.mdx)("p",null,"Whether or not the table should expanded to fill its parent element."))),(0,d.mdx)(w.X2,{key:"ROW9",mdxType:"Row"},(0,d.mdx)(w.O,{mdxType:"PropNameCell"},"footerNode"),(0,d.mdx)(w.Di,{mdxType:"TypeCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"node\n"))),(0,d.mdx)(w.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,d.mdx)(w.mW,{mdxType:"DefaultValueCell"},(0,d.mdx)("p",null,"none")),(0,d.mdx)(w.Ex,{mdxType:"DescriptionCell"},(0,d.mdx)("p",null,"Element to append to the bottom of the table. i.e. toolbars etc."))),(0,d.mdx)(w.X2,{key:"ROW10",mdxType:"Row"},(0,d.mdx)(w.O,{mdxType:"PropNameCell"},"numberOfColumns"),(0,d.mdx)(w.Di,{mdxType:"TypeCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"number\n"))),(0,d.mdx)(w.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,d.mdx)(w.mW,{mdxType:"DefaultValueCell"},(0,d.mdx)("p",null,"none")),(0,d.mdx)(w.Ex,{mdxType:"DescriptionCell"},(0,d.mdx)("p",null,"The numberOfColumns to be used as a descriptor for assistive technology."))),(0,d.mdx)(w.X2,{key:"ROW11",mdxType:"Row"},(0,d.mdx)(w.O,{mdxType:"PropNameCell"},"numberOfRows"),(0,d.mdx)(w.Di,{mdxType:"TypeCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"number\n"))),(0,d.mdx)(w.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,d.mdx)(w.mW,{mdxType:"DefaultValueCell"},(0,d.mdx)("p",null,"none")),(0,d.mdx)(w.Ex,{mdxType:"DescriptionCell"},(0,d.mdx)("p",null,"This value is used for accessibility when paged/virtualized rows are used.\nBy default this value is derived from the number of rows passed within the section."))),(0,d.mdx)(w.X2,{key:"ROW12",mdxType:"Row"},(0,d.mdx)(w.O,{mdxType:"PropNameCell"},"cellPaddingStyle"),(0,d.mdx)(w.Di,{mdxType:"TypeCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"enum: [\n  'standard'\n  'compact'\n],\n"))),(0,d.mdx)(w.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,d.mdx)(w.mW,{mdxType:"DefaultValueCell"},(0,d.mdx)("p",null,"none")),(0,d.mdx)(w.Ex,{mdxType:"DescriptionCell"},(0,d.mdx)("p",null,"The padding styling to apply to the cell content."))),(0,d.mdx)(w.X2,{key:"ROW13",mdxType:"Row"},(0,d.mdx)(w.O,{mdxType:"PropNameCell"},"rowStyle"),(0,d.mdx)(w.Di,{mdxType:"TypeCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"enum: [\n  'disclose'\n  'toggle'\n],\n"))),(0,d.mdx)(w.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,d.mdx)(w.mW,{mdxType:"DefaultValueCell"},(0,d.mdx)("p",null,"none")),(0,d.mdx)(w.Ex,{mdxType:"DescriptionCell"},(0,d.mdx)("p",null,"The interaction styling to apply to the row.\n",(0,d.mdx)("inlineCode",{parentName:"p"},"'toggle'")," relates to the toggling of state as a means of input. ",(0,d.mdx)("inlineCode",{parentName:"p"},"'disclose'"),' relates to the presentation or disclosure of another component.\nBoth variants can ultimately display as "selected", but the interaction and structure are different for accessibility.'))),(0,d.mdx)(w.X2,{key:"ROW14",mdxType:"Row"},(0,d.mdx)(w.O,{mdxType:"PropNameCell"},"scrollRefCallback"),(0,d.mdx)(w.Di,{mdxType:"TypeCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,d.mdx)(w.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,d.mdx)(w.mW,{mdxType:"DefaultValueCell"},(0,d.mdx)("p",null,"none")),(0,d.mdx)(w.Ex,{mdxType:"DescriptionCell"},(0,d.mdx)("p",null,"Function callback returning the html node of the table's inner body element."))),(0,d.mdx)(w.X2,{key:"ROW15",mdxType:"Row"},(0,d.mdx)(w.O,{mdxType:"PropNameCell"},"showSimpleFooter"),(0,d.mdx)(w.Di,{mdxType:"TypeCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,d.mdx)(w.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,d.mdx)(w.mW,{mdxType:"DefaultValueCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,d.mdx)(w.Ex,{mdxType:"DescriptionCell"},(0,d.mdx)("p",null,"Whether or not a display only footer should be affixed to the table."))),(0,d.mdx)(w.X2,{key:"ROW16",mdxType:"Row"},(0,d.mdx)(w.O,{mdxType:"PropNameCell"},"summary"),(0,d.mdx)(w.Di,{mdxType:"TypeCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,d.mdx)(w.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,d.mdx)(w.mW,{mdxType:"DefaultValueCell"},(0,d.mdx)("p",null,"none")),(0,d.mdx)(w.Ex,{mdxType:"DescriptionCell"},(0,d.mdx)("p",null,"The summary text to describe the table's content and interactions."))),(0,d.mdx)(w.X2,{key:"ROW17",mdxType:"Row"},(0,d.mdx)(w.O,{mdxType:"PropNameCell"},"summaryId"),(0,d.mdx)(w.Di,{mdxType:"TypeCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,d.mdx)(w.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,d.mdx)(w.mW,{mdxType:"DefaultValueCell"},(0,d.mdx)("p",null,"none")),(0,d.mdx)(w.Ex,{mdxType:"DescriptionCell"},(0,d.mdx)("p",null,"The element id to associate to the descriptive text.")))))}R.isMDXComponent=!0;var S,P=["components"],j=(S="StandardPaddingTable",function(e){return console.warn("Component "+S+" was not imported, exported, or provided by MDXProvider as global scope"),(0,d.mdx)("div",e)}),W={},q="wrapper";function M(e){var l=e.components,n=(0,a.Z)(e,P);return(0,d.mdx)(q,(0,t.Z)({},W,n,{components:l,mdxType:"MDXLayout"}),(0,d.mdx)(o,{mdxType:"Badge"}),(0,d.mdx)("p",null,(0,d.mdx)("a",{parentName:"p",href:"/terra-framework/pull/1986/components/cerner-terra-framework-docs/table/version-4-docs/about"},(0,d.mdx)("img",{parentName:"a",src:"https://badgen.net/badge/status/Deprecated/grey",alt:"Deprecated"}))),(0,d.mdx)("h1",{id:"terra-table"},"Terra Table"),(0,d.mdx)(i.Notice,{variant:"deprecation",mdxType:"Notice"},(0,d.mdx)("p",null,(0,d.mdx)("inlineCode",{parentName:"p"},"terra-table@4")," is no longer supported. If you are using ",(0,d.mdx)("inlineCode",{parentName:"p"},"terra-table@4"),", please upgrade to ",(0,d.mdx)("a",{parentName:"p",href:"/terra-framework/pull/1986/components/cerner-terra-framework-docs/table/about"},"v5"),".")),(0,d.mdx)("p",null,"Terra Table is a structural component used to create data tables. Table provides means to handle row selection and hooks for sortable columns."),(0,d.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Install with ",(0,d.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("inlineCode",{parentName:"li"},"npm install terra-table@4"))))),(0,d.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),(0,d.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Peer Dependency"),(0,d.mdx)("th",{parentName:"tr",align:null},"Version"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"react"),(0,d.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"react-dom"),(0,d.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"react-intl"),(0,d.mdx)("td",{parentName:"tr",align:null},"^2.8.0")))),(0,d.mdx)("h2",{id:"usage"},"Usage"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-jsx"},"import Table from 'terra-table@4';\n")),(0,d.mdx)("h2",{id:"component-features"},"Component Features"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"},"Cross-Browser Support")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#responsive-support"},"Responsive Support")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#mobile-support"},"Mobile Support")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#ltr--rtl"},"LTR/RTL Support"))),(0,d.mdx)("h1",{id:"examples"},"Examples"),(0,d.mdx)(y,{mdxType:"DefaultTable"}),(0,d.mdx)(j,{mdxType:"StandardPaddingTable"}),(0,d.mdx)(T,{mdxType:"CompactPaddingTable"}),(0,d.mdx)(C,{title:"Striped Table, No Padding Table",description:"(Note: the no padding style table is intended for tables with custom cell content that includes it's own internal spacing)",mdxType:"StripedTable"}),(0,d.mdx)("h2",{id:"table-props"},"Table Props"),(0,d.mdx)(R,{mdxType:"PropsTable"}))}M.isMDXComponent=!0},37691:function(e,l,n){var t=n(64836);l.Z=void 0;var a=t(n(67294)),r=t(n(49343));l.Z=function(){return a.default.createElement(r.default,{summaryId:"compact-table",summary:"This table has compact row padding.",cellPaddingStyle:"compact",numberOfColumns:1,dividerStyle:"horizontal",headerData:{cells:[{id:"header-name",key:"name",children:"Name"},{id:"header-address",key:"address",children:"Address"},{id:"header-phone_number",key:"phone_number",children:"Phone Number"}]},bodyData:[{rows:[{key:"row-0",cells:[{key:"cell-0",children:"John Smith"},{key:"cell-1",children:"123 Adams Drive"},{key:"cell-2",children:"111-222-3333"}]},{key:"row-1",cells:[{key:"cell-0",children:"Jane Smith"},{key:"cell-1",children:"321 Drive Street"},{key:"cell-2",children:"111-222-3333"}]},{key:"row-2",cells:[{key:"cell-0",children:"Dave Smith"},{key:"cell-1",children:"213 Raymond Road"},{key:"cell-2",children:"111-222-3333"}]}]}]})}},42424:function(e,l,n){var t=n(64836);l.Z=void 0;var a=t(n(67294)),r=t(n(49343));l.Z=function(){return a.default.createElement(r.default,{summaryId:"default-table",summary:"This is a default table structure.",numberOfColumns:3,headerData:{cells:[{id:"header-name",key:"name",children:"Name"},{id:"header-address",key:"address",children:"Address"},{id:"header-phone_number",key:"phone_number",children:"Phone Number"}]},bodyData:[{rows:[{key:"row-0",cells:[{key:"cell-0",children:"John Smith"},{key:"cell-1",children:"123 Adams Drive"},{key:"cell-2",children:"111-222-3333"}]},{key:"row-1",cells:[{key:"cell-0",children:"Jane Smith"},{key:"cell-1",children:"321 Drive Street"},{key:"cell-2",children:"111-222-3333"}]},{key:"row-2",cells:[{key:"cell-0",children:"Dave Smith"},{key:"cell-1",children:"213 Raymond Road"},{key:"cell-2",children:"111-222-3333"}]}]}]})}},1675:function(e,l,n){var t=n(64836);l.Z=void 0;var a=t(n(67294)),r=t(n(49343));l.Z=function(){return a.default.createElement(r.default,{summaryId:"striped-table",summary:"This table displays striped rows.",numberOfColumns:3,dividerStyle:"horizontal",headerData:{cells:[{id:"header-name",key:"name",children:"Name"},{id:"header-address",key:"address",children:"Address"},{id:"header-phone_number",key:"phone_number",children:"Phone Number"}]},bodyData:[{rows:[{key:"row-0",cells:[{key:"cell-0",children:"John Smith"},{key:"cell-1",children:"123 Adams Drive"},{key:"cell-2",children:"111-222-3333"}]},{key:"row-1",isStriped:!0,cells:[{key:"cell-0",children:"Jane Smith"},{key:"cell-1",children:"321 Drive Street"},{key:"cell-2",children:"111-222-3333"}]},{key:"row-2",cells:[{key:"cell-0",children:"Dave Smith"},{key:"cell-1",children:"213 Raymond Road"},{key:"cell-2",children:"111-222-3333"}]}]}]})}},53560:function(e,l,n){n.r(l),l.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},66983:function(e,l,n){n.r(l),l.default={"clinical-lowlight-theme":"Button-module__clinical-lowlight-theme___TyZWB","orion-fusion-theme":"Button-module__orion-fusion-theme___q-FcQ",button:"Button-module__button___QuCn2","is-active":"Button-module__is-active___Z8AuK"}},30866:function(e,l,n){n.r(l),l.default={"clinical-lowlight-theme":"Notice-module__clinical-lowlight-theme___aa5xV","orion-fusion-theme":"Notice-module__orion-fusion-theme___QAE-T",notice:"Notice-module__notice___GWkPA",children:"Notice-module__children___lDYsm",accessory:"Notice-module__accessory___wkLOG",title:"Notice-module__title___6H5tc","ux-recommendation":"Notice-module__ux-recommendation___N8BuK",caution:"Notice-module__caution___hPrVl",deprecation:"Notice-module__deprecation___g1drA",maintenance:"Notice-module__maintenance___kWLIZ",important:"Notice-module__important___p5DiF","not-supported":"Notice-module__not-supported___34bHd",paragraph:"Notice-module__paragraph___5h-w1",list:"Notice-module__list___M2Kxj"}},42620:function(e,l,n){n.r(l),l.default={"clinical-lowlight-theme":"Placeholder-module__clinical-lowlight-theme___Obm9K","orion-fusion-theme":"Placeholder-module__orion-fusion-theme___svHY+",placeholder:"Placeholder-module__placeholder___ZZDXd",inner:"Placeholder-module__inner___fJq9o",title:"Placeholder-module__title___teBSo"}},33864:function(e,l,n){Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var t=r(n(67294)),a=r(n(99139));function r(e){return e&&e.__esModule?e:{default:e}}function d(){return d=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var n=arguments[l];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},d.apply(this,arguments)}var m=function(e){var l=d({},e);return t.default.createElement(a.default,l,t.default.createElement("path",{d:"M10.3 24 33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};m.displayName="IconChevronLeft",m.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};l.default=m}}]);