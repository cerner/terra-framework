"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[98438],{98438:function(e,n,t){t.r(n),t.d(n,{default:function(){return C}});var a=t(87462),o=t(44925),r=t(67294),l=t(81254),i=t(61701),s=t(24006),c=["components"],d={};function m(e){var n=e.components,t=(0,o.Z)(e,c);return(0,l.mdx)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React, { useState } from 'react';\nimport Table from 'terra-table';\n\nconst tableData = {\n  cols: [\n    {\n      id: 'Column-0', displayName: 'Patient', sortIndicator: 'ascending', isSelectable: true,\n    },\n    {\n      id: 'Column-1', displayName: 'Location', isSelectable: true,\n    },\n    { id: 'Column-2', displayName: 'Illness Severity', isSelectable: true },\n    { id: 'Column-3', displayName: 'Visit' },\n    { id: 'Column-4', displayName: 'Allergy' },\n    { id: 'Column-5', displayName: 'Primary Contact' },\n    { id: 'Column-6', displayName: 'Generic Order Counts' },\n    { id: 'Column-7', displayName: 'Patient Age' },\n    { id: 'Column-8', displayName: 'Medication History' },\n    { id: 'Column-9', displayName: 'My Relationship' },\n    { id: 'Column-10', displayName: 'Not Selectable' },\n  ],\n  rows: [\n    {\n      id: '1',\n      cells: [\n        { content: 'Fleck, Arthur' },\n        { content: '1007-MTN' },\n        { content: 'Unstable' },\n        { content: 'Inpatient, 2 months' },\n        { content: '' },\n        { content: 'Quinzell, Harleen' },\n        { content: '' },\n        { isMasked: true },\n        { isMasked: true },\n        { content: 'Admitting Physician' },\n        { content: '' },\n      ],\n    },\n    {\n      id: '2',\n      cells: [\n        { content: 'Wayne, Bruce' },\n        { content: '1007-MTN-DR' },\n        { content: 'Stable' },\n        { content: 'Outpatient, 2 days' },\n        { content: 'Phytochemicals' },\n        { content: 'Grayson, Richard' },\n        { content: '' },\n        { content: '' },\n        { isMasked: true },\n        { content: 'Admitting Physician' },\n        { content: '' },\n      ],\n    },\n  ],\n};\n\nconst SortableTable = () => {\n  const [tableColumns, setTableColumns] = useState(tableData.cols);\n  const [tableRows, setTableRows] = useState(tableData.rows);\n  const handleColumnSelect = (columnId) => {\n    const newColumns = [...tableColumns].map((col) => {\n      const newCol = { ...col };\n      if (columnId === col.id) {\n        newCol.sortIndicator = col.sortIndicator === 'ascending' ? 'descending' : 'ascending';\n      } else {\n        newCol.sortIndicator = undefined;\n      }\n      return newCol;\n    });\n\n    const newRows = [...tableRows];\n\n    const columnIndex = newColumns.findIndex(col => col.id === columnId);\n    if (columnIndex > -1) {\n      const { sortIndicator } = newColumns[columnIndex];\n      newRows.sort((rowA, rowB) => {\n        const firstRowContent = rowA.cells[columnIndex].content || '';\n        const secondRowContent = rowB.cells[columnIndex].content || '';\n\n        if (sortIndicator === 'ascending') {\n          return firstRowContent.localeCompare(secondRowContent);\n        }\n        return secondRowContent.localeCompare(firstRowContent);\n      });\n    }\n\n    setTableColumns(newColumns);\n    setTableRows(newRows);\n  };\n\n  return (\n    <Table\n      id=\"my-table-id\"\n      overflowColumns={tableColumns}\n      rows={tableRows}\n      onColumnSelect={handleColumnSelect}\n    />\n  );\n};\n\nexport default SortableTable;\n\n")))}m.isMDXComponent=!0;var u=t(49271),p=function(e){var n=e.title,t=e.description,a=e.isExpanded;return r.createElement(u.Z,{title:n||"Sortable Table",description:t,example:r.createElement(s.Z,null),exampleSrc:r.createElement(m,null),isExpanded:a})},b=t(41288),f=["components"],y={},x="wrapper";function C(e){var n=e.components,t=(0,o.Z)(e,f);return(0,l.mdx)(x,(0,a.Z)({},y,t,{components:n,mdxType:"MDXLayout"}),(0,l.mdx)(i.C,{mdxType:"Badge"}),(0,l.mdx)("h1",{id:"sortable-table"},"Sortable Table"),(0,l.mdx)("p",null,"Terra Table is a structural component used to create data tables. Table provides means to handle row selection and hooks for sortable columns."),(0,l.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Install with ",(0,l.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"npm install terra-table"))))),(0,l.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),(0,l.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Peer Dependency"),(0,l.mdx)("th",{parentName:"tr",align:null},"Version"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"react"),(0,l.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"react-dom"),(0,l.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"react-intl"),(0,l.mdx)("td",{parentName:"tr",align:null},"^2.8.0")))),(0,l.mdx)("h2",{id:"usage"},"Usage"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-jsx"},'import Table from "terra-table";\n')),(0,l.mdx)("h2",{id:"component-features"},"Component Features"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"},"Cross-Browser Support")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#responsive-support"},"Responsive Support")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#mobile-support"},"Mobile Support")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#ltr--rtl"},"LTR/RTL Support"))),(0,l.mdx)(p,{mdxType:"SortableTable"}),(0,l.mdx)("h2",{id:"table-props"},"Table Props"),(0,l.mdx)(b.Z,{mdxType:"TablePropsTable"}))}C.isMDXComponent=!0},24006:function(e,n,t){var a=t(64836),o=t(18698);n.Z=void 0;var r=a(t(38416)),l=a(t(861)),i=a(t(27424)),s=function(e,n){if(!n&&e&&e.__esModule)return e;if(null===e||"object"!=o(e)&&"function"!=typeof e)return{default:e};var t=d(n);if(t&&t.has(e))return t.get(e);var a={__proto__:null},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var i=r?Object.getOwnPropertyDescriptor(e,l):null;i&&(i.get||i.set)?Object.defineProperty(a,l,i):a[l]=e[l]}return a.default=e,t&&t.set(e,a),a}(t(67294)),c=a(t(12810));function d(e){if("function"!=typeof WeakMap)return null;var n=new WeakMap,t=new WeakMap;return(d=function(e){return e?t:n})(e)}function m(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}var u=[{id:"Column-0",displayName:"Patient",sortIndicator:"ascending",isSelectable:!0},{id:"Column-1",displayName:"Location",isSelectable:!0},{id:"Column-2",displayName:"Illness Severity",isSelectable:!0},{id:"Column-3",displayName:"Visit"},{id:"Column-4",displayName:"Allergy"},{id:"Column-5",displayName:"Primary Contact"},{id:"Column-6",displayName:"Generic Order Counts"},{id:"Column-7",displayName:"Patient Age"},{id:"Column-8",displayName:"Medication History"},{id:"Column-9",displayName:"My Relationship"},{id:"Column-10",displayName:"Not Selectable"}],p=[{id:"1",cells:[{content:"Fleck, Arthur"},{content:"1007-MTN"},{content:"Unstable"},{content:"Inpatient, 2 months"},{content:""},{content:"Quinzell, Harleen"},{content:""},{isMasked:!0},{isMasked:!0},{content:"Admitting Physician"},{content:""}]},{id:"2",cells:[{content:"Wayne, Bruce"},{content:"1007-MTN-DR"},{content:"Stable"},{content:"Outpatient, 2 days"},{content:"Phytochemicals"},{content:"Grayson, Richard"},{content:""},{content:""},{isMasked:!0},{content:"Admitting Physician"},{content:""}]}];n.Z=function(){var e=(0,s.useState)(u),n=(0,i.default)(e,2),t=n[0],a=n[1],o=(0,s.useState)(p),d=(0,i.default)(o,2),b=d[0],f=d[1];return s.default.createElement(c.default,{id:"my-table-id",overflowColumns:t,rows:b,onColumnSelect:function(e){var n=(0,l.default)(t).map((function(n){var t=function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?m(Object(t),!0).forEach((function(n){(0,r.default)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},n);return e===n.id?t.sortIndicator="ascending"===n.sortIndicator?"descending":"ascending":t.sortIndicator=void 0,t})),o=(0,l.default)(b),i=n.findIndex((function(n){return n.id===e}));if(i>-1){var s=n[i].sortIndicator;o.sort((function(e,n){var t=e.cells[i].content||"",a=n.cells[i].content||"";return"ascending"===s?t.localeCompare(a):a.localeCompare(t)}))}a(n),f(o)}})}}}]);