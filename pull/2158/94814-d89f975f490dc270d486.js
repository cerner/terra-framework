"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[94814,90911,13292,46149,68530],{201:function(e,l,t){var n=t(24994),a=t(73738);l.A=void 0;var d=n(t(85715)),r=function(e,l){if(!l&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var t=x(l);if(t&&t.has(e))return t.get(e);var n={__proto__:null},d=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&{}.hasOwnProperty.call(e,r)){var m=d?Object.getOwnPropertyDescriptor(e,r):null;m&&(m.get||m.set)?Object.defineProperty(n,r,m):n[r]=e[r]}return n.default=e,t&&t.set(e,n),n}(t(96540)),m=n(t(5556)),o=n(t(67967)),i=t(92912),c=n(t(49558)),u=n(t(53665)),p=t(25966),s=n(t(89986));function x(e){if("function"!=typeof WeakMap)return null;var l=new WeakMap,t=new WeakMap;return(x=function(e){return e?t:l})(e)}var y=o.default.bind(s.default),f={example:m.default.element,exampleSrc:m.default.element,exampleCssSrc:m.default.element,title:m.default.string,description:m.default.node,isExpanded:m.default.bool},h=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},_=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},b=function(e){var l=e.example,t=e.exampleSrc,n=e.exampleCssSrc,a=e.title,m=e.description,o=e.isExpanded,s=(0,r.useState)(o),x=(0,d.default)(s,2),f=x[0],b=x[1],T=(0,r.useState)(!1),N=(0,d.default)(T,2),g=N[0],v=N[1],k=r.default.useContext(i.ThemeContext),C=void 0!==n,w=function(){v(!g),f&&b(!f)},D=function(){b(!f),g&&v(!g)},E=function(e,l){e.nativeEvent.keyCode!==p.KEY_SPACE&&e.nativeEvent.keyCode!==p.KEY_RETURN||(e.preventDefault(),l())};return r.default.createElement("div",{className:y("template",k.className)},r.default.createElement("div",{className:y("header")},a&&r.default.createElement("h2",{className:y("title")},a)),r.default.createElement("div",{className:y("content")},m&&r.default.createElement("div",{className:y("description")},m),l),r.default.createElement("div",{className:y("footer")},t?r.default.createElement("div",{className:y("button-container")},C&&r.default.createElement("button",{type:"button",className:y("css-toggle","item",{"is-selected":g}),onClick:w,onKeyDown:function(e){return E(e,w)},onBlur:h,onMouseDown:_,tabIndex:0,"data-focus-styles-enabled":!0},r.default.createElement(c.default,{className:y("chevron")}),r.default.createElement("span",null,"CSS"),r.default.createElement(u.default,{className:y("chevron")})),r.default.createElement("button",{type:"button",className:y("code-toggle","item",{"is-selected":f}),onClick:D,onKeyDown:function(e){return E(e,D)},onBlur:h,onMouseDown:_,tabIndex:0,"data-focus-styles-enabled":!0},r.default.createElement(c.default,{className:y("chevron")}),r.default.createElement("span",null,"Code"),r.default.createElement(u.default,{className:y("chevron")}))):null,r.default.createElement("div",null,g&&r.default.createElement("div",{className:y("css")},n),f&&r.default.createElement("div",{className:y("code")},t))))};b.propTypes=f,b.defaultProps={isExpanded:!1};l.A=b},86159:function(e,l,t){Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var n=i(t(96540)),a=i(t(5556)),d=i(t(67967)),r=i(t(23695)),m=i(t(36605)),o=["children"];function i(e){return e&&e.__esModule?e:{default:e}}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var t=arguments[l];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},c.apply(this,arguments)}function u(e,l){if(null==e)return{};var t,n,a=function(e,l){if(null==e)return{};var t,n,a={},d=Object.keys(e);for(n=0;n<d.length;n++)t=d[n],l.indexOf(t)>=0||(a[t]=e[t]);return a}(e,l);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(n=0;n<d.length;n++)t=d[n],l.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=d.default.bind(m.default),s=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},x=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},y={children:a.default.string},f=function(e){var l=e.children,t=u(e,o),a=n.default.useContext(r.default),m=(0,d.default)(p(["button",a.className]),t.className);return n.default.createElement("button",c({},t,{type:"button",className:m,onBlur:s,onMouseDown:x,"data-focus-styles-enabled":!0}),l)};f.propTypes=y;l.default=f},20999:function(e,l,t){Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var n=o(t(96540)),a=o(t(5556)),d=o(t(67967)),r=o(t(23695)),m=o(t(17269));function o(e){return e&&e.__esModule?e:{default:e}}var i=d.default.bind(m.default),c={ariaLevel:a.default.oneOf(["2","3","4","5","6"]),children:a.default.node,variant:a.default.oneOf(["ux-recommendation","caution","deprecation","maintenance","important","not-supported"])},u=function(e){var l=e.ariaLevel,t=e.variant,a=e.children,d=n.default.useContext(r.default);return n.default.createElement("div",{className:i("notice",t,d.className)},n.default.createElement("div",{className:i("accessory"),"aria-hidden":"true",focusable:"false"}),n.default.createElement("div",{role:"heading",className:i("title"),"aria-level":l},n.default.createElement("span",null,function(e){return"ux-recommendation"===e?"UX Recommendation":"caution"===e?"Caution":"deprecation"===e?"Deprecation Notice":"maintenance"===e?"In Maintenance":"important"===e?"Important":"not-supported"===e?"Hazards for Incorrect Usage":"error"}(t))),n.default.createElement("div",{className:i("children")},function(e){return"not-supported"===e?n.default.createElement(n.default.Fragment,null,n.default.createElement("p",{className:i("paragraph")},"This component was designed and tested according to the documented implementation."),n.default.createElement("p",{className:i("paragraph")},"Using the component incorrectly:",n.default.createElement("ul",{className:i("list")},n.default.createElement("li",null,"will likely result in improper composition and create accessibility issues"),n.default.createElement("li",null,"may cause erratic or broken behaviors and styles"),n.default.createElement("li",null,n.default.createElement("strong",null,"will not be supported "),"or enhanced to allow for incorrect use")))):null}(t),n.default.Children.map(a,(function(e){return"string"==typeof e?n.default.createElement("p",null,e):e}))))};u.propTypes=c,u.defaultProps={ariaLevel:"2",variant:"important"};l.default=u},18778:function(e,l,t){Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var n=c(t(96540)),a=c(t(5556)),d=c(t(46942)),r=c(t(67967)),m=c(t(23695)),o=c(t(16576)),i=["title"];function c(e){return e&&e.__esModule?e:{default:e}}function u(){return u=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var t=arguments[l];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},u.apply(this,arguments)}function p(e,l){if(null==e)return{};var t,n,a=function(e,l){if(null==e)return{};var t,n,a={},d=Object.keys(e);for(n=0;n<d.length;n++)t=d[n],l.indexOf(t)>=0||(a[t]=e[t]);return a}(e,l);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(n=0;n<d.length;n++)t=d[n],l.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.default.bind(o.default),x={title:a.default.string},y=function(e){var l=e.title,t=p(e,i),a=n.default.useContext(m.default),r=(0,d.default)(s(["placeholder",a.className]),t.className),o=s(["inner"]);return n.default.createElement("div",u({},t,{className:r}),n.default.createElement("div",{className:o},n.default.createElement("p",{className:s("title")},l)))};y.propTypes=x,y.defaultProps={title:""};l.default=y},74647:function(e,l,t){Object.defineProperty(l,"__esModule",{value:!0}),Object.defineProperty(l,"Button",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(l,"Notice",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(l,"Placeholder",{enumerable:!0,get:function(){return a.default}});var n=r(t(20999)),a=r(t(18778)),d=r(t(86159));function r(e){return e&&e.__esModule?e:{default:e}}},29782:function(e,l,t){t.r(l),t.d(l,{default:function(){return q}});var n=t(58168),a=t(53986),d=t(96540),r=t(36665),m=t(55713),o=function(e){var l=e.url;return d.createElement(m.A,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-table",name:"terra-table",version:"4.36.0",url:l})},i=t(74647),c=t(89539),u=["components"],p={};function s(e){var l=e.components,t=(0,a.A)(e,u);return(0,r.mdx)("wrapper",(0,n.A)({},p,t,{components:l,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Table from 'legacy-terra-table';\n\nconst TableExample = () => (\n  <Table\n    summaryId=\"default-table\"\n    summary=\"This is a default table structure.\"\n    numberOfColumns={3}\n    headerData={{\n      cells: [\n        { id: 'header-name', key: 'name', children: 'Name' },\n        { id: 'header-address', key: 'address', children: 'Address' },\n        { id: 'header-phone_number', key: 'phone_number', children: 'Phone Number' },\n      ],\n    }}\n    bodyData={[\n      {\n        rows: [\n          {\n            key: 'row-0',\n            cells: [\n              { key: 'cell-0', children: 'John Smith' },\n              { key: 'cell-1', children: '123 Adams Drive' },\n              { key: 'cell-2', children: '111-222-3333' },\n            ],\n          },\n          {\n            key: 'row-1',\n            cells: [\n              { key: 'cell-0', children: 'Jane Smith' },\n              { key: 'cell-1', children: '321 Drive Street' },\n              { key: 'cell-2', children: '111-222-3333' },\n            ],\n          },\n          {\n            key: 'row-2',\n            cells: [\n              { key: 'cell-0', children: 'Dave Smith' },\n              { key: 'cell-1', children: '213 Raymond Road' },\n              { key: 'cell-2', children: '111-222-3333' },\n            ],\n          },\n        ],\n      },\n    ]}\n  />\n);\n\nexport default TableExample;\n\n")))}s.isMDXComponent=!0;var x=t(201),y=function(e){var l=e.title,t=e.description,n=e.isExpanded;return d.createElement(x.A,{title:l||"Default Table",description:t,example:d.createElement(c.A,null),exampleSrc:d.createElement(s,null),isExpanded:n})},f=t(9892),h=["components"],_={};function b(e){var l=e.components,t=(0,a.A)(e,h);return(0,r.mdx)("wrapper",(0,n.A)({},_,t,{components:l,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Table from 'legacy-terra-table';\n\nconst PaddingTable = () => (\n  <Table\n    summaryId=\"compact-table\"\n    summary=\"This table has compact row padding.\"\n    cellPaddingStyle=\"compact\"\n    numberOfColumns={1}\n    dividerStyle=\"horizontal\"\n    headerData={{\n      cells: [\n        { id: 'header-name', key: 'name', children: 'Name' },\n        { id: 'header-address', key: 'address', children: 'Address' },\n        { id: 'header-phone_number', key: 'phone_number', children: 'Phone Number' },\n      ],\n    }}\n    bodyData={[\n      {\n        rows: [\n          {\n            key: 'row-0',\n            cells: [\n              { key: 'cell-0', children: 'John Smith' },\n              { key: 'cell-1', children: '123 Adams Drive' },\n              { key: 'cell-2', children: '111-222-3333' },\n            ],\n          },\n          {\n            key: 'row-1',\n            cells: [\n              { key: 'cell-0', children: 'Jane Smith' },\n              { key: 'cell-1', children: '321 Drive Street' },\n              { key: 'cell-2', children: '111-222-3333' },\n            ],\n          },\n          {\n            key: 'row-2',\n            cells: [\n              { key: 'cell-0', children: 'Dave Smith' },\n              { key: 'cell-1', children: '213 Raymond Road' },\n              { key: 'cell-2', children: '111-222-3333' },\n            ],\n          },\n        ],\n      },\n    ]}\n  />\n);\n\nexport default PaddingTable;\n\n")))}b.isMDXComponent=!0;var T=function(e){var l=e.title,t=e.description,n=e.isExpanded;return d.createElement(x.A,{title:l||"Compact Padding Table",description:t,example:d.createElement(f.A,null),exampleSrc:d.createElement(b,null),isExpanded:n})},N=t(43013),g=["components"],v={};function k(e){var l=e.components,t=(0,a.A)(e,g);return(0,r.mdx)("wrapper",(0,n.A)({},v,t,{components:l,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Table from 'legacy-terra-table';\n\nconst StripedTable = () => (\n  <Table\n    summaryId=\"striped-table\"\n    summary=\"This table displays striped rows.\"\n    numberOfColumns={3}\n    dividerStyle=\"horizontal\"\n    headerData={{\n      cells: [\n        { id: 'header-name', key: 'name', children: 'Name' },\n        { id: 'header-address', key: 'address', children: 'Address' },\n        { id: 'header-phone_number', key: 'phone_number', children: 'Phone Number' },\n      ],\n    }}\n    bodyData={[\n      {\n        rows: [\n          {\n            key: 'row-0',\n            cells: [\n              { key: 'cell-0', children: 'John Smith' },\n              { key: 'cell-1', children: '123 Adams Drive' },\n              { key: 'cell-2', children: '111-222-3333' },\n            ],\n          },\n          {\n            key: 'row-1',\n            isStriped: true,\n            cells: [\n              { key: 'cell-0', children: 'Jane Smith' },\n              { key: 'cell-1', children: '321 Drive Street' },\n              { key: 'cell-2', children: '111-222-3333' },\n            ],\n          },\n          {\n            key: 'row-2',\n            cells: [\n              { key: 'cell-0', children: 'Dave Smith' },\n              { key: 'cell-1', children: '213 Raymond Road' },\n              { key: 'cell-2', children: '111-222-3333' },\n            ],\n          },\n        ],\n      },\n    ]}\n  />\n);\n\nexport default StripedTable;\n\n")))}k.isMDXComponent=!0;var C=function(e){var l=e.title,t=e.description,n=e.isExpanded;return d.createElement(x.A,{title:l||"Striped Table",description:t,example:d.createElement(N.A,null),exampleSrc:d.createElement(k,null),isExpanded:n})},w=t(12883),D=["components"],E={},R="wrapper";function O(e){var l=e.components,t=(0,a.A)(e,D);return(0,r.mdx)(R,(0,n.A)({},E,t,{components:l,mdxType:"MDXLayout"}),(0,r.mdx)(w.Ay,{mdxType:"PropsTable"},(0,r.mdx)(w.fI,{key:"ROW1",mdxType:"Row"},(0,r.mdx)(w.dt,{mdxType:"PropNameCell"},"bodyData"),(0,r.mdx)(w.$d,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"arrayOf: [{\n  type: 'custom',\n}],\n"))),(0,r.mdx)(w.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(w.NZ,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(w.Hd,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"An array of sections containing rows."))),(0,r.mdx)(w.fI,{key:"ROW2",mdxType:"Row"},(0,r.mdx)(w.dt,{mdxType:"PropNameCell"},"checkStyle"),(0,r.mdx)(w.$d,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"enum: [\n  'icon'\n  'toggle'\n],\n"))),(0,r.mdx)(w.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(w.NZ,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(w.Hd,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"The check mark styling to apply."))),(0,r.mdx)(w.fI,{key:"ROW3",mdxType:"Row"},(0,r.mdx)(w.dt,{mdxType:"PropNameCell"},"dividerStyle"),(0,r.mdx)(w.$d,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"enum: [\n  'vertical'\n  'horizontal'\n  'both'\n],\n"))),(0,r.mdx)(w.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(w.NZ,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(w.Hd,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"The divider styling to apply to the child rows."))),(0,r.mdx)(w.fI,{key:"ROW4",mdxType:"Row"},(0,r.mdx)(w.dt,{mdxType:"PropNameCell"},"columnWidths"),(0,r.mdx)(w.$d,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"arrayOf: [{\n  type: 'custom',\n}],\n"))),(0,r.mdx)(w.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(w.NZ,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(w.Hd,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"The width value structures associated to each column."))),(0,r.mdx)(w.fI,{key:"ROW5",mdxType:"Row"},(0,r.mdx)(w.dt,{mdxType:"PropNameCell"},"hasChevrons"),(0,r.mdx)(w.$d,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,r.mdx)(w.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(w.NZ,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(w.Hd,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Whether or not the rows should have chevrons applied."))),(0,r.mdx)(w.fI,{key:"ROW6",mdxType:"Row"},(0,r.mdx)(w.dt,{mdxType:"PropNameCell"},"headerData"),(0,r.mdx)(w.$d,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"custom\n"))),(0,r.mdx)(w.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(w.NZ,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(w.Hd,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"The data to build header cells and columns."))),(0,r.mdx)(w.fI,{key:"ROW7",mdxType:"Row"},(0,r.mdx)(w.dt,{mdxType:"PropNameCell"},"headerNode"),(0,r.mdx)(w.$d,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"node\n"))),(0,r.mdx)(w.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(w.NZ,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(w.Hd,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Element to append to the top of the table. i.e. toolbars etc."))),(0,r.mdx)(w.fI,{key:"ROW8",mdxType:"Row"},(0,r.mdx)(w.dt,{mdxType:"PropNameCell"},"fill"),(0,r.mdx)(w.$d,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,r.mdx)(w.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(w.NZ,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,r.mdx)(w.Hd,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Whether or not the table should expanded to fill its parent element."))),(0,r.mdx)(w.fI,{key:"ROW9",mdxType:"Row"},(0,r.mdx)(w.dt,{mdxType:"PropNameCell"},"footerNode"),(0,r.mdx)(w.$d,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"node\n"))),(0,r.mdx)(w.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(w.NZ,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(w.Hd,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Element to append to the bottom of the table. i.e. toolbars etc."))),(0,r.mdx)(w.fI,{key:"ROW10",mdxType:"Row"},(0,r.mdx)(w.dt,{mdxType:"PropNameCell"},"numberOfColumns"),(0,r.mdx)(w.$d,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"number\n"))),(0,r.mdx)(w.YZ,{isRequired:!0,mdxType:"RequiredCell"}),(0,r.mdx)(w.NZ,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(w.Hd,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"The numberOfColumns to be used as a descriptor for assistive technology."))),(0,r.mdx)(w.fI,{key:"ROW11",mdxType:"Row"},(0,r.mdx)(w.dt,{mdxType:"PropNameCell"},"numberOfRows"),(0,r.mdx)(w.$d,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"number\n"))),(0,r.mdx)(w.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(w.NZ,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(w.Hd,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"This value is used for accessibility when paged/virtualized rows are used.\nBy default this value is derived from the number of rows passed within the section."))),(0,r.mdx)(w.fI,{key:"ROW12",mdxType:"Row"},(0,r.mdx)(w.dt,{mdxType:"PropNameCell"},"cellPaddingStyle"),(0,r.mdx)(w.$d,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"enum: [\n  'standard'\n  'compact'\n],\n"))),(0,r.mdx)(w.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(w.NZ,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(w.Hd,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"The padding styling to apply to the cell content."))),(0,r.mdx)(w.fI,{key:"ROW13",mdxType:"Row"},(0,r.mdx)(w.dt,{mdxType:"PropNameCell"},"rowStyle"),(0,r.mdx)(w.$d,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"enum: [\n  'disclose'\n  'toggle'\n],\n"))),(0,r.mdx)(w.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(w.NZ,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(w.Hd,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"The interaction styling to apply to the row.\n",(0,r.mdx)("inlineCode",{parentName:"p"},"'toggle'")," relates to the toggling of state as a means of input. ",(0,r.mdx)("inlineCode",{parentName:"p"},"'disclose'"),' relates to the presentation or disclosure of another component.\nBoth variants can ultimately display as "selected", but the interaction and structure are different for accessibility.'))),(0,r.mdx)(w.fI,{key:"ROW14",mdxType:"Row"},(0,r.mdx)(w.dt,{mdxType:"PropNameCell"},"scrollRefCallback"),(0,r.mdx)(w.$d,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,r.mdx)(w.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(w.NZ,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(w.Hd,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Function callback returning the html node of the table's inner body element."))),(0,r.mdx)(w.fI,{key:"ROW15",mdxType:"Row"},(0,r.mdx)(w.dt,{mdxType:"PropNameCell"},"showSimpleFooter"),(0,r.mdx)(w.$d,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,r.mdx)(w.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(w.NZ,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,r.mdx)(w.Hd,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Whether or not a display only footer should be affixed to the table."))),(0,r.mdx)(w.fI,{key:"ROW16",mdxType:"Row"},(0,r.mdx)(w.dt,{mdxType:"PropNameCell"},"summary"),(0,r.mdx)(w.$d,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,r.mdx)(w.YZ,{isRequired:!0,mdxType:"RequiredCell"}),(0,r.mdx)(w.NZ,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(w.Hd,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"The summary text to describe the table's content and interactions."))),(0,r.mdx)(w.fI,{key:"ROW17",mdxType:"Row"},(0,r.mdx)(w.dt,{mdxType:"PropNameCell"},"summaryId"),(0,r.mdx)(w.$d,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,r.mdx)(w.YZ,{isRequired:!0,mdxType:"RequiredCell"}),(0,r.mdx)(w.NZ,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(w.Hd,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"The element id to associate to the descriptive text.")))))}O.isMDXComponent=!0;var P,S=["components"],j=(P="StandardPaddingTable",function(e){return console.warn("Component "+P+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.mdx)("div",e)}),A={},Z="wrapper";function q(e){var l=e.components,t=(0,a.A)(e,S);return(0,r.mdx)(Z,(0,n.A)({},A,t,{components:l,mdxType:"MDXLayout"}),(0,r.mdx)(o,{mdxType:"Badge"}),(0,r.mdx)("p",null,(0,r.mdx)("a",{parentName:"p",href:"/terra-framework/pull/2158/components/cerner-terra-framework-docs/table/version-4-docs/about"},(0,r.mdx)("img",{parentName:"a",src:"https://badgen.net/badge/status/Deprecated/grey",alt:"Deprecated"}))),(0,r.mdx)("h1",{id:"terra-table"},"Terra Table"),(0,r.mdx)(i.Notice,{variant:"deprecation",mdxType:"Notice"},(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"terra-table@4")," is no longer supported. If you are using ",(0,r.mdx)("inlineCode",{parentName:"p"},"terra-table@4"),", please upgrade to ",(0,r.mdx)("a",{parentName:"p",href:"/terra-framework/pull/2158/components/cerner-terra-framework-docs/table/about"},"v5"),".")),(0,r.mdx)("p",null,"Terra Table is a structural component used to create data tables. Table provides means to handle row selection and hooks for sortable columns."),(0,r.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Install with ",(0,r.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"npm install terra-table@4"))))),(0,r.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),(0,r.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Peer Dependency"),(0,r.mdx)("th",{parentName:"tr",align:null},"Version"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"react"),(0,r.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"react-dom"),(0,r.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"react-intl"),(0,r.mdx)("td",{parentName:"tr",align:null},"^2.8.0")))),(0,r.mdx)("h2",{id:"usage"},"Usage"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import Table from 'terra-table@4';\n")),(0,r.mdx)("h2",{id:"component-features"},"Component Features"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"},"Cross-Browser Support")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#responsive-support"},"Responsive Support")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#mobile-support"},"Mobile Support")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#ltr--rtl"},"LTR/RTL Support"))),(0,r.mdx)("h1",{id:"examples"},"Examples"),(0,r.mdx)(y,{mdxType:"DefaultTable"}),(0,r.mdx)(j,{mdxType:"StandardPaddingTable"}),(0,r.mdx)(T,{mdxType:"CompactPaddingTable"}),(0,r.mdx)(C,{title:"Striped Table, No Padding Table",description:"(Note: the no padding style table is intended for tables with custom cell content that includes it's own internal spacing)",mdxType:"StripedTable"}),(0,r.mdx)("h2",{id:"table-props"},"Table Props"),(0,r.mdx)(O,{mdxType:"PropsTable"}))}q.isMDXComponent=!0},9892:function(e,l,t){var n=t(24994);l.A=void 0;var a=n(t(96540)),d=n(t(42596));l.A=function(){return a.default.createElement(d.default,{summaryId:"compact-table",summary:"This table has compact row padding.",cellPaddingStyle:"compact",numberOfColumns:1,dividerStyle:"horizontal",headerData:{cells:[{id:"header-name",key:"name",children:"Name"},{id:"header-address",key:"address",children:"Address"},{id:"header-phone_number",key:"phone_number",children:"Phone Number"}]},bodyData:[{rows:[{key:"row-0",cells:[{key:"cell-0",children:"John Smith"},{key:"cell-1",children:"123 Adams Drive"},{key:"cell-2",children:"111-222-3333"}]},{key:"row-1",cells:[{key:"cell-0",children:"Jane Smith"},{key:"cell-1",children:"321 Drive Street"},{key:"cell-2",children:"111-222-3333"}]},{key:"row-2",cells:[{key:"cell-0",children:"Dave Smith"},{key:"cell-1",children:"213 Raymond Road"},{key:"cell-2",children:"111-222-3333"}]}]}]})}},89539:function(e,l,t){var n=t(24994);l.A=void 0;var a=n(t(96540)),d=n(t(42596));l.A=function(){return a.default.createElement(d.default,{summaryId:"default-table",summary:"This is a default table structure.",numberOfColumns:3,headerData:{cells:[{id:"header-name",key:"name",children:"Name"},{id:"header-address",key:"address",children:"Address"},{id:"header-phone_number",key:"phone_number",children:"Phone Number"}]},bodyData:[{rows:[{key:"row-0",cells:[{key:"cell-0",children:"John Smith"},{key:"cell-1",children:"123 Adams Drive"},{key:"cell-2",children:"111-222-3333"}]},{key:"row-1",cells:[{key:"cell-0",children:"Jane Smith"},{key:"cell-1",children:"321 Drive Street"},{key:"cell-2",children:"111-222-3333"}]},{key:"row-2",cells:[{key:"cell-0",children:"Dave Smith"},{key:"cell-1",children:"213 Raymond Road"},{key:"cell-2",children:"111-222-3333"}]}]}]})}},43013:function(e,l,t){var n=t(24994);l.A=void 0;var a=n(t(96540)),d=n(t(42596));l.A=function(){return a.default.createElement(d.default,{summaryId:"striped-table",summary:"This table displays striped rows.",numberOfColumns:3,dividerStyle:"horizontal",headerData:{cells:[{id:"header-name",key:"name",children:"Name"},{id:"header-address",key:"address",children:"Address"},{id:"header-phone_number",key:"phone_number",children:"Phone Number"}]},bodyData:[{rows:[{key:"row-0",cells:[{key:"cell-0",children:"John Smith"},{key:"cell-1",children:"123 Adams Drive"},{key:"cell-2",children:"111-222-3333"}]},{key:"row-1",isStriped:!0,cells:[{key:"cell-0",children:"Jane Smith"},{key:"cell-1",children:"321 Drive Street"},{key:"cell-2",children:"111-222-3333"}]},{key:"row-2",cells:[{key:"cell-0",children:"Dave Smith"},{key:"cell-1",children:"213 Raymond Road"},{key:"cell-2",children:"111-222-3333"}]}]}]})}},89986:function(e,l,t){t.r(l),l.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},36605:function(e,l,t){t.r(l),l.default={"clinical-lowlight-theme":"Button-module__clinical-lowlight-theme___TyZWB","orion-fusion-theme":"Button-module__orion-fusion-theme___q-FcQ",button:"Button-module__button___QuCn2","is-active":"Button-module__is-active___Z8AuK"}},17269:function(e,l,t){t.r(l),l.default={"clinical-lowlight-theme":"Notice-module__clinical-lowlight-theme___aa5xV","orion-fusion-theme":"Notice-module__orion-fusion-theme___QAE-T",notice:"Notice-module__notice___GWkPA",children:"Notice-module__children___lDYsm",accessory:"Notice-module__accessory___wkLOG",title:"Notice-module__title___6H5tc","ux-recommendation":"Notice-module__ux-recommendation___N8BuK",caution:"Notice-module__caution___hPrVl",deprecation:"Notice-module__deprecation___g1drA",maintenance:"Notice-module__maintenance___kWLIZ",important:"Notice-module__important___p5DiF","not-supported":"Notice-module__not-supported___34bHd",paragraph:"Notice-module__paragraph___5h-w1",list:"Notice-module__list___M2Kxj"}},16576:function(e,l,t){t.r(l),l.default={"clinical-lowlight-theme":"Placeholder-module__clinical-lowlight-theme___Obm9K","orion-fusion-theme":"Placeholder-module__orion-fusion-theme___svHY+",placeholder:"Placeholder-module__placeholder___ZZDXd",inner:"Placeholder-module__inner___fJq9o",title:"Placeholder-module__title___teBSo"}},49558:function(e,l,t){Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var n=d(t(96540)),a=d(t(25365));function d(e){return e&&e.__esModule?e:{default:e}}var r=function(e){var l=Object.assign({},e);return n.default.createElement(a.default,l,n.default.createElement("path",{d:"M10.3 24 33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};r.displayName="IconChevronLeft",r.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};l.default=r}}]);