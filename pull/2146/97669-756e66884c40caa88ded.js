"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[97669],{201:function(e,n,t){var o=t(24994),l=t(73738);n.A=void 0;var a=o(t(85715)),c=function(e,n){if(!n&&e&&e.__esModule)return e;if(null===e||"object"!=l(e)&&"function"!=typeof e)return{default:e};var t=f(n);if(t&&t.has(e))return t.get(e);var o={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in e)if("default"!==c&&Object.prototype.hasOwnProperty.call(e,c)){var i=a?Object.getOwnPropertyDescriptor(e,c):null;i&&(i.get||i.set)?Object.defineProperty(o,c,i):o[c]=e[c]}return o.default=e,t&&t.set(e,o),o}(t(96540)),i=o(t(5556)),s=o(t(67967)),r=t(92912),d=o(t(49558)),u=o(t(53665)),p=t(25966),m=o(t(89986));function f(e){if("function"!=typeof WeakMap)return null;var n=new WeakMap,t=new WeakMap;return(f=function(e){return e?t:n})(e)}var b=s.default.bind(m.default),y={example:i.default.element,exampleSrc:i.default.element,exampleCssSrc:i.default.element,title:i.default.string,description:i.default.node,isExpanded:i.default.bool},S=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},x=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},w=function(e){var n=e.example,t=e.exampleSrc,o=e.exampleCssSrc,l=e.title,i=e.description,s=e.isExpanded,m=(0,c.useState)(s),f=(0,a.default)(m,2),y=f[0],w=f[1],_=(0,c.useState)(!1),h=(0,a.default)(_,2),T=h[0],C=h[1],v=c.default.useContext(r.ThemeContext),N=void 0!==o,O=function(){C(!T),y&&w(!y)},E=function(){w(!y),T&&C(!T)},g=function(e,n){e.nativeEvent.keyCode!==p.KEY_SPACE&&e.nativeEvent.keyCode!==p.KEY_RETURN||(e.preventDefault(),n())};return c.default.createElement("div",{className:b("template",v.className)},c.default.createElement("div",{className:b("header")},l&&c.default.createElement("h2",{className:b("title")},l)),c.default.createElement("div",{className:b("content")},i&&c.default.createElement("div",{className:b("description")},i),n),c.default.createElement("div",{className:b("footer")},t?c.default.createElement("div",{className:b("button-container")},N&&c.default.createElement("button",{type:"button",className:b("css-toggle","item",{"is-selected":T}),onClick:O,onKeyDown:function(e){return g(e,O)},onBlur:S,onMouseDown:x,tabIndex:0,"data-focus-styles-enabled":!0},c.default.createElement(d.default,{className:b("chevron")}),c.default.createElement("span",null,"CSS"),c.default.createElement(u.default,{className:b("chevron")})),c.default.createElement("button",{type:"button",className:b("code-toggle","item",{"is-selected":y}),onClick:E,onKeyDown:function(e){return g(e,E)},onBlur:S,onMouseDown:x,tabIndex:0,"data-focus-styles-enabled":!0},c.default.createElement(d.default,{className:b("chevron")}),c.default.createElement("span",null,"Code"),c.default.createElement(u.default,{className:b("chevron")}))):null,c.default.createElement("div",null,T&&c.default.createElement("div",{className:b("css")},o),y&&c.default.createElement("div",{className:b("code")},t))))};w.propTypes=y,w.defaultProps={isExpanded:!1};n.A=w},97669:function(e,n,t){t.r(n),t.d(n,{default:function(){return h}});var o=t(58168),l=t(53986),a=t(96540),c=t(36665),i=t(66051),s=["components"],r={};function d(e){var n=e.components,t=(0,l.A)(e,s);return(0,c.mdx)("wrapper",(0,o.A)({},r,t,{components:n,mdxType:"MDXLayout"}),(0,c.mdx)("pre",null,(0,c.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React, { useState } from 'react';\nimport Table from 'terra-table';\n\nconst tableData = {\n  cols: [\n    {\n      id: 'Column-0', displayName: 'Patient', isSelectable: true,\n    },\n    {\n      id: 'Column-1', displayName: 'Location', isSelectable: true,\n    },\n    { id: 'Column-2', displayName: 'Illness Severity', isSelectable: true },\n    { id: 'Column-3', displayName: 'Visit' },\n    { id: 'Column-4', displayName: 'Allergy' },\n    { id: 'Column-5', displayName: 'Primary Contact' },\n\n  ],\n  sections: [{\n    id: 'section-0',\n    text: 'Test Section',\n    rows: [\n      {\n        id: '1',\n        cells: [\n          { content: 'Fleck, Arthur' },\n          { content: '1007-MTN' },\n          { content: 'Unstable' },\n          { content: 'Inpatient, 2 months' },\n          { content: '' },\n          { content: 'Quinzell, Harleen' },\n        ],\n      },\n      {\n        id: '2',\n        cells: [\n          { content: 'Wayne, Bruce' },\n          { content: '1007-MTN-DR' },\n          { content: 'Stable' },\n          { content: 'Outpatient, 2 days' },\n          { content: 'Phytochemicals' },\n          { content: 'Grayson, Richard' },\n        ],\n      },\n    ],\n  },\n  {\n    id: 'section-1',\n    text: 'Test Section #2',\n    rows: [\n      {\n        id: '3',\n        cells: [\n          { content: 'Parker, Peter' },\n          { content: '1007-MTN' },\n          { content: 'Unstable' },\n          { content: 'Inpatient, 2 months' },\n          { content: '' },\n          { content: 'Octopus, Doctor' },\n        ],\n      },\n      {\n        id: '4',\n        cells: [\n          { content: 'Stark, Tony' },\n          { content: '1007-MTN-DR' },\n          { content: 'Stable' },\n          { content: 'Outpatient, 2 days' },\n          { content: 'Phytochemicals' },\n          { content: 'America, Captain' },\n        ],\n      },\n    ],\n  }],\n};\n\nconst TableWithSections = () => {\n  const [tableSections, setTableSections] = useState(tableData.sections);\n\n  const handleSectionSelect = (sectionId) => {\n    const newSections = [...tableSections];\n    const sectionIndex = newSections.findIndex(section => section.id === sectionId);\n\n    if (sectionIndex > -1) {\n      newSections[sectionIndex].isCollapsed = !newSections[sectionIndex].isCollapsed;\n    }\n\n    setTableSections(newSections);\n  };\n\n  return (\n    <Table\n      id=\"table-with-sections\"\n      pinnedColumns={tableData.cols.slice(0, 2)}\n      overflowColumns={tableData.cols.slice(2)}\n      sections={tableSections}\n      onSectionSelect={handleSectionSelect}\n      isStriped\n    />\n  );\n};\n\nexport default TableWithSections;\n\n")))}d.isMDXComponent=!0;var u=t(201),p=function(e){var n=e.title,t=e.description,o=e.isExpanded;return a.createElement(u.A,{title:n||"Table With Sections",description:t,example:a.createElement(i.A,null),exampleSrc:a.createElement(d,null),isExpanded:o})},m=t(45227),f=["components"],b={};function y(e){var n=e.components,t=(0,l.A)(e,f);return(0,c.mdx)("wrapper",(0,o.A)({},b,t,{components:n,mdxType:"MDXLayout"}),(0,c.mdx)("pre",null,(0,c.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React, { useState, useCallback } from 'react';\nimport Table from 'terra-table';\n\nconst tableData = {\n  cols: [\n    {\n      id: 'Column-0', displayName: 'Patient', sortIndicator: 'ascending', isSelectable: true,\n    },\n    {\n      id: 'Column-1', displayName: 'Location', isSelectable: true,\n    },\n    { id: 'Column-2', displayName: 'Illness Severity', isSelectable: true },\n    { id: 'Column-3', displayName: 'Visit' },\n    { id: 'Column-4', displayName: 'Allergy' },\n    { id: 'Column-5', displayName: 'Primary Contact' },\n\n  ],\n  sections: [{\n    id: 'section-0',\n    isCollapsible: true,\n    isCollapsed: true,\n    text: 'Test Section',\n    rows: [\n      {\n        id: '1',\n        cells: [\n          { content: 'Fleck, Arthur' },\n          { content: '1007-MTN' },\n          { content: 'Unstable' },\n          { content: 'Inpatient, 2 months' },\n          { content: '' },\n          { content: 'Quinzell, Harleen' },\n        ],\n      },\n      {\n        id: '2',\n        cells: [\n          { content: 'Wayne, Bruce' },\n          { content: '1007-MTN-DR' },\n          { content: 'Stable' },\n          { content: 'Outpatient, 2 days' },\n          { content: 'Phytochemicals' },\n          { content: 'Grayson, Richard' },\n        ],\n      },\n    ],\n  },\n  {\n    id: 'section-1',\n    isCollapsible: true,\n    isCollapsed: false,\n    text: 'Test Section #2',\n    rows: [\n      {\n        id: '3',\n        cells: [\n          { content: 'Parker, Peter' },\n          { content: '1007-MTN' },\n          { content: 'Unstable' },\n          { content: 'Inpatient, 2 months' },\n          { content: '' },\n          { content: 'Octopus, Doctor' },\n        ],\n      },\n      {\n        id: '4',\n        cells: [\n          { content: 'Stark, Tony' },\n          { content: '1007-MTN-DR' },\n          { content: 'Stable' },\n          { content: 'Outpatient, 2 days' },\n          { content: 'Phytochemicals' },\n          { content: 'America, Captain' },\n        ],\n      },\n    ],\n  }],\n};\n\nconst TableWithCollapsibleSections = () => {\n  const [tableSections, setTableSections] = useState(tableData.sections);\n\n  const handleSectionSelect = (sectionId) => {\n    const newSections = [...tableSections];\n    const sectionIndex = newSections.findIndex(section => section.id === sectionId);\n\n    if (sectionIndex > -1) {\n      newSections[sectionIndex].isCollapsed = !newSections[sectionIndex].isCollapsed;\n    }\n\n    setTableSections(newSections);\n  };\n\n  const onRowSelect = useCallback((rowSelection) => {\n    const { sectionId, rowId } = rowSelection;\n\n    const newSections = [...tableSections];\n\n    const sectionIndex = newSections.findIndex(section => section.id === sectionId);\n\n    const rowIndexToUpdate = newSections[sectionIndex].rows.findIndex(row => row.id === rowId);\n    if (rowIndexToUpdate >= 0) {\n      newSections[sectionIndex].rows[rowIndexToUpdate] = { ...newSections[sectionIndex].rows[rowIndexToUpdate] };\n      newSections[sectionIndex].rows[rowIndexToUpdate].isSelected = !newSections[sectionIndex].rows[rowIndexToUpdate].isSelected;\n    }\n\n    setTableSections(newSections);\n  }, [tableSections]);\n\n  return (\n    <Table\n      id=\"table-with-sections\"\n      overflowColumns={tableData.cols}\n      sections={tableSections}\n      rowSelectionMode=\"multiple\"\n      onRowSelect={onRowSelect}\n      onSectionSelect={handleSectionSelect}\n    />\n  );\n};\n\nexport default TableWithCollapsibleSections;\n\n")))}y.isMDXComponent=!0;var S=function(e){var n=e.title,t=e.description,o=e.isExpanded;return a.createElement(u.A,{title:n||"Table With Collapsible Sections",description:t,example:a.createElement(m.A,null),exampleSrc:a.createElement(y,null),isExpanded:o})},x=["components"],w={},_="wrapper";function h(e){var n=e.components,t=(0,l.A)(e,x);return(0,c.mdx)(_,(0,o.A)({},w,t,{components:n,mdxType:"MDXLayout"}),(0,c.mdx)("h1",{id:"table-sections"},"Table Sections"),(0,c.mdx)("h3",{id:"description"},"Description"),(0,c.mdx)("p",null,"This example demonstrates a ",(0,c.mdx)("a",{parentName:"p",href:"/terra-framework/pull/2146/components/cerner-terra-framework-docs/table/about"},"Table")," component with information grouped by sections."),(0,c.mdx)("h3",{id:"required-properties"},"Required Properties"),(0,c.mdx)("ul",null,(0,c.mdx)("li",{parentName:"ul"},(0,c.mdx)("strong",{parentName:"li"},"sections"),": The tablular information for the component."),(0,c.mdx)("li",{parentName:"ul"},(0,c.mdx)("strong",{parentName:"li"},"isCollapsible"),": This property determines whether a section is collapsible. Collapsible sections contain a button in the section header."),(0,c.mdx)("li",{parentName:"ul"},(0,c.mdx)("strong",{parentName:"li"},"isCollapsed"),": When users select the section header of a collapsible section, this property is toggled to control whether the section is expanded or collapsed.")),(0,c.mdx)(S,{mdxType:"TableWithCollapsibleSections"}),(0,c.mdx)(p,{mdxType:"TableWithSections"}))}h.isMDXComponent=!0},45227:function(e,n,t){var o=t(24994),l=t(73738);n.A=void 0;var a=o(t(43693)),c=o(t(41132)),i=o(t(85715)),s=function(e,n){if(!n&&e&&e.__esModule)return e;if(null===e||"object"!=l(e)&&"function"!=typeof e)return{default:e};var t=d(n);if(t&&t.has(e))return t.get(e);var o={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in e)if("default"!==c&&{}.hasOwnProperty.call(e,c)){var i=a?Object.getOwnPropertyDescriptor(e,c):null;i&&(i.get||i.set)?Object.defineProperty(o,c,i):o[c]=e[c]}return o.default=e,t&&t.set(e,o),o}(t(96540)),r=o(t(83264));function d(e){if("function"!=typeof WeakMap)return null;var n=new WeakMap,t=new WeakMap;return(d=function(e){return e?t:n})(e)}function u(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}var p={cols:[{id:"Column-0",displayName:"Patient",sortIndicator:"ascending",isSelectable:!0},{id:"Column-1",displayName:"Location",isSelectable:!0},{id:"Column-2",displayName:"Illness Severity",isSelectable:!0},{id:"Column-3",displayName:"Visit"},{id:"Column-4",displayName:"Allergy"},{id:"Column-5",displayName:"Primary Contact"}],sections:[{id:"section-0",isCollapsible:!0,isCollapsed:!0,text:"Test Section",rows:[{id:"1",cells:[{content:"Fleck, Arthur"},{content:"1007-MTN"},{content:"Unstable"},{content:"Inpatient, 2 months"},{content:""},{content:"Quinzell, Harleen"}]},{id:"2",cells:[{content:"Wayne, Bruce"},{content:"1007-MTN-DR"},{content:"Stable"},{content:"Outpatient, 2 days"},{content:"Phytochemicals"},{content:"Grayson, Richard"}]}]},{id:"section-1",isCollapsible:!0,isCollapsed:!1,text:"Test Section #2",rows:[{id:"3",cells:[{content:"Parker, Peter"},{content:"1007-MTN"},{content:"Unstable"},{content:"Inpatient, 2 months"},{content:""},{content:"Octopus, Doctor"}]},{id:"4",cells:[{content:"Stark, Tony"},{content:"1007-MTN-DR"},{content:"Stable"},{content:"Outpatient, 2 days"},{content:"Phytochemicals"},{content:"America, Captain"}]}]}]};n.A=function(){var e=(0,s.useState)(p.sections),n=(0,i.default)(e,2),t=n[0],o=n[1],l=(0,s.useCallback)((function(e){var n=e.sectionId,l=e.rowId,i=(0,c.default)(t),s=i.findIndex((function(e){return e.id===n})),r=i[s].rows.findIndex((function(e){return e.id===l}));r>=0&&(i[s].rows[r]=function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?u(Object(t),!0).forEach((function(n){(0,a.default)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},i[s].rows[r]),i[s].rows[r].isSelected=!i[s].rows[r].isSelected),o(i)}),[t]);return s.default.createElement(r.default,{id:"table-with-sections",overflowColumns:p.cols,sections:t,rowSelectionMode:"multiple",onRowSelect:l,onSectionSelect:function(e){var n=(0,c.default)(t),l=n.findIndex((function(n){return n.id===e}));l>-1&&(n[l].isCollapsed=!n[l].isCollapsed),o(n)}})}},66051:function(e,n,t){var o=t(24994),l=t(73738);n.A=void 0;var a=o(t(41132)),c=o(t(85715)),i=function(e,n){if(!n&&e&&e.__esModule)return e;if(null===e||"object"!=l(e)&&"function"!=typeof e)return{default:e};var t=r(n);if(t&&t.has(e))return t.get(e);var o={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in e)if("default"!==c&&{}.hasOwnProperty.call(e,c)){var i=a?Object.getOwnPropertyDescriptor(e,c):null;i&&(i.get||i.set)?Object.defineProperty(o,c,i):o[c]=e[c]}return o.default=e,t&&t.set(e,o),o}(t(96540)),s=o(t(83264));function r(e){if("function"!=typeof WeakMap)return null;var n=new WeakMap,t=new WeakMap;return(r=function(e){return e?t:n})(e)}var d={cols:[{id:"Column-0",displayName:"Patient",isSelectable:!0},{id:"Column-1",displayName:"Location",isSelectable:!0},{id:"Column-2",displayName:"Illness Severity",isSelectable:!0},{id:"Column-3",displayName:"Visit"},{id:"Column-4",displayName:"Allergy"},{id:"Column-5",displayName:"Primary Contact"}],sections:[{id:"section-0",text:"Test Section",rows:[{id:"1",cells:[{content:"Fleck, Arthur"},{content:"1007-MTN"},{content:"Unstable"},{content:"Inpatient, 2 months"},{content:""},{content:"Quinzell, Harleen"}]},{id:"2",cells:[{content:"Wayne, Bruce"},{content:"1007-MTN-DR"},{content:"Stable"},{content:"Outpatient, 2 days"},{content:"Phytochemicals"},{content:"Grayson, Richard"}]}]},{id:"section-1",text:"Test Section #2",rows:[{id:"3",cells:[{content:"Parker, Peter"},{content:"1007-MTN"},{content:"Unstable"},{content:"Inpatient, 2 months"},{content:""},{content:"Octopus, Doctor"}]},{id:"4",cells:[{content:"Stark, Tony"},{content:"1007-MTN-DR"},{content:"Stable"},{content:"Outpatient, 2 days"},{content:"Phytochemicals"},{content:"America, Captain"}]}]}]};n.A=function(){var e=(0,i.useState)(d.sections),n=(0,c.default)(e,2),t=n[0],o=n[1];return i.default.createElement(s.default,{id:"table-with-sections",pinnedColumns:d.cols.slice(0,2),overflowColumns:d.cols.slice(2),sections:t,onSectionSelect:function(e){var n=(0,a.default)(t),l=n.findIndex((function(n){return n.id===e}));l>-1&&(n[l].isCollapsed=!n[l].isCollapsed),o(n)},isStriped:!0})}},89986:function(e,n,t){t.r(n),n.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},58168:function(e,n,t){function o(){return o=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},o.apply(this,arguments)}t.d(n,{A:function(){return o}})},53986:function(e,n,t){function o(e,n){if(null==e)return{};var t,o,l=function(e,n){if(null==e)return{};var t,o,l={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}t.d(n,{A:function(){return o}})}}]);