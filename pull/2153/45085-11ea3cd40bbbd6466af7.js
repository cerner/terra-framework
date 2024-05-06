"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[45085],{45085:function(n,e,t){t.r(e),t.d(e,{default:function(){return C}});var o=t(58168),a=t(53986),r=t(96540),l=t(36665),i=t(74647),c=(t(20574),t(53123)),s=["components"],d={};function u(n){var e=n.components,t=(0,a.A)(n,s);return(0,l.mdx)("wrapper",(0,o.A)({},d,t,{components:e,mdxType:"MDXLayout"}),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React, { useCallback, useState } from 'react';\nimport Table from 'terra-table';\n\nconst tableData = {\n  cols: [\n    {\n      id: 'Column-0', displayName: 'Patient', sortIndicator: 'ascending', isSelectable: true,\n    },\n    {\n      id: 'Column-1', displayName: 'Location', isSelectable: true,\n    },\n    { id: 'Column-2', displayName: 'Illness Severity', isSelectable: true },\n    { id: 'Column-3', displayName: 'Visit' },\n    { id: 'Column-4', displayName: 'Allergy' },\n    { id: 'Column-5', displayName: 'Primary Contact' },\n    { id: 'Column-6', displayName: 'Generic Order Counts' },\n    { id: 'Column-7', displayName: 'Patient Age' },\n    { id: 'Column-8', displayName: 'Medication History' },\n    { id: 'Column-9', displayName: 'My Relationship' },\n  ],\n  rows: [\n    {\n      id: '1',\n      cells: [\n        { content: 'Fleck, Arthur' },\n        { content: '1007-MTN' },\n        { content: 'Unstable' },\n        { content: 'Inpatient, 2 months' },\n        { content: '' },\n        { content: 'Quinzell, Harleen' },\n        { content: '' },\n        { isMasked: true },\n        { isMasked: true },\n        { content: 'Admitting Physician' },\n      ],\n    },\n    {\n      id: '2',\n      cells: [\n        { content: 'Wayne, Bruce' },\n        { content: '1007-MTN-DR' },\n        { content: 'Stable' },\n        { content: 'Outpatient, 2 days' },\n        { content: 'Phytochemicals' },\n        { content: 'Grayson, Richard' },\n        { content: '' },\n        { content: '' },\n        { isMasked: true },\n        { content: 'Admitting Physician' },\n      ],\n    },\n  ],\n};\n\nconst SortableTable = () => {\n  const [tableColumns, setTableColumns] = useState(tableData.cols);\n  const [tableRows, setTableRows] = useState(tableData.rows);\n  const handleColumnSelect = useCallback((columnId) => {\n    const newColumns = [...tableColumns].map((col) => {\n      const newCol = { ...col };\n      if (columnId === col.id) {\n        newCol.sortIndicator = col.sortIndicator === 'ascending' ? 'descending' : 'ascending';\n      } else {\n        newCol.sortIndicator = undefined;\n      }\n      return newCol;\n    });\n\n    const newRows = [...tableRows];\n\n    const columnIndex = newColumns.findIndex(col => col.id === columnId);\n    if (columnIndex > -1) {\n      const { sortIndicator } = newColumns[columnIndex];\n      newRows.sort((rowA, rowB) => {\n        const firstRowContent = rowA.cells[columnIndex].content || '';\n        const secondRowContent = rowB.cells[columnIndex].content || '';\n\n        if (sortIndicator === 'ascending') {\n          return firstRowContent.localeCompare(secondRowContent);\n        }\n        return secondRowContent.localeCompare(firstRowContent);\n      });\n    }\n\n    setTableColumns(newColumns);\n    setTableRows(newRows);\n  }, [tableColumns, tableRows]);\n\n  return (\n    <Table\n      id=\"my-table-id\"\n      overflowColumns={tableColumns}\n      rows={tableRows}\n      onColumnSelect={handleColumnSelect}\n      ariaLabel=\"Sortable Table\"\n    />\n  );\n};\n\nexport default SortableTable;\n\n")))}u.isMDXComponent=!0;var m=t(201),p=function(n){var e=n.title,t=n.description,o=n.isExpanded;return r.createElement(m.A,{title:e||"Sortable Table",description:t,example:r.createElement(c.A,null),exampleSrc:r.createElement(u,null),isExpanded:o})},b=["components"],f={},y="wrapper";function C(n){var e=n.components,t=(0,a.A)(n,b);return(0,l.mdx)(y,(0,o.A)({},f,t,{components:e,mdxType:"MDXLayout"}),(0,l.mdx)("h1",{id:"sortable-table"},"Sortable Table"),(0,l.mdx)(i.Notice,{variant:"important",ariaLevel:"2",mdxType:"Notice"},"Please note that JAWS will not announce a change in sort order when using the Edge or Chrome browsers."),(0,l.mdx)("h3",{id:"description"},"Description"),(0,l.mdx)("p",null,"This example demonstrates a ",(0,l.mdx)("a",{parentName:"p",href:"/terra-framework/pull/2153/components/cerner-terra-framework-docs/table/about"},"Table")," component with sortable information.\nThe Table component does not have logic to perform column sorting because knowledge about the column data business logic would be required.\nConsumers can enable sorting capabilities by listening to the onColumnSelect callback and properly updating the source data of the table."),(0,l.mdx)("h3",{id:"required-properties"},"Required Properties"),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"onColumnSelect"),": When the user selects a column, this callback is called with the columnId of the selected column."),(0,l.mdx)(p,{mdxType:"SortableTable"}))}C.isMDXComponent=!0},20574:function(n,e,t){t.d(e,{E:function(){return r}});var o=t(96540),a=t(55713),r=function(n){var e=n.url;return o.createElement(a.A,{src:"https://github.com/cerner/terra-framework/tree/main/packages/terra-table",name:"terra-table",version:"5.23.0",url:e})}},53123:function(n,e,t){var o=t(24994),a=t(73738);e.A=void 0;var r=o(t(43693)),l=o(t(41132)),i=o(t(85715)),c=function(n,e){if(!e&&n&&n.__esModule)return n;if(null===n||"object"!=a(n)&&"function"!=typeof n)return{default:n};var t=d(e);if(t&&t.has(n))return t.get(n);var o={__proto__:null},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in n)if("default"!==l&&{}.hasOwnProperty.call(n,l)){var i=r?Object.getOwnPropertyDescriptor(n,l):null;i&&(i.get||i.set)?Object.defineProperty(o,l,i):o[l]=n[l]}return o.default=n,t&&t.set(n,o),o}(t(96540)),s=o(t(83264));function d(n){if("function"!=typeof WeakMap)return null;var e=new WeakMap,t=new WeakMap;return(d=function(n){return n?t:e})(n)}function u(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}var m=[{id:"Column-0",displayName:"Patient",sortIndicator:"ascending",isSelectable:!0},{id:"Column-1",displayName:"Location",isSelectable:!0},{id:"Column-2",displayName:"Illness Severity",isSelectable:!0},{id:"Column-3",displayName:"Visit"},{id:"Column-4",displayName:"Allergy"},{id:"Column-5",displayName:"Primary Contact"},{id:"Column-6",displayName:"Generic Order Counts"},{id:"Column-7",displayName:"Patient Age"},{id:"Column-8",displayName:"Medication History"},{id:"Column-9",displayName:"My Relationship"}],p=[{id:"1",cells:[{content:"Fleck, Arthur"},{content:"1007-MTN"},{content:"Unstable"},{content:"Inpatient, 2 months"},{content:""},{content:"Quinzell, Harleen"},{content:""},{isMasked:!0},{isMasked:!0},{content:"Admitting Physician"}]},{id:"2",cells:[{content:"Wayne, Bruce"},{content:"1007-MTN-DR"},{content:"Stable"},{content:"Outpatient, 2 days"},{content:"Phytochemicals"},{content:"Grayson, Richard"},{content:""},{content:""},{isMasked:!0},{content:"Admitting Physician"}]}];e.A=function(){var n=(0,c.useState)(m),e=(0,i.default)(n,2),t=e[0],o=e[1],a=(0,c.useState)(p),d=(0,i.default)(a,2),b=d[0],f=d[1],y=(0,c.useCallback)((function(n){var e=(0,l.default)(t).map((function(e){var t=function(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?u(Object(t),!0).forEach((function(e){(0,r.default)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}({},e);return n===e.id?t.sortIndicator="ascending"===e.sortIndicator?"descending":"ascending":t.sortIndicator=void 0,t})),a=(0,l.default)(b),i=e.findIndex((function(e){return e.id===n}));if(i>-1){var c=e[i].sortIndicator;a.sort((function(n,e){var t=n.cells[i].content||"",o=e.cells[i].content||"";return"ascending"===c?t.localeCompare(o):o.localeCompare(t)}))}o(e),f(a)}),[t,b]);return c.default.createElement(s.default,{id:"my-table-id",overflowColumns:t,rows:b,onColumnSelect:y,ariaLabel:"Sortable Table"})}}}]);