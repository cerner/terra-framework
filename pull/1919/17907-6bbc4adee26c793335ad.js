"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[17907,48883],{59131:function(e,n,t){t.r(n),t.d(n,{default:function(){return b}});var o=t(87462),l=t(44925),a=t(67294),r=t(81254),c=t(79178),i=["components"],s={};function d(e){var n=e.components,t=(0,l.Z)(e,i);return(0,r.mdx)("wrapper",(0,o.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React, { useState, useCallback } from 'react';\nimport Table from 'terra-table';\n\nconst tableDataJSON = {\n  cols: [\n    { id: 'Column-0', displayName: 'Patient' },\n    { id: 'Column-1', displayName: 'Location' },\n    { id: 'Column-2', displayName: 'Illness Severity' },\n  ],\n  rows: [\n    {\n      id: '1',\n      isSelectable: true,\n      cells: [\n        { content: 'Fleck, Arthur' },\n        { content: '1007-MTN' },\n        { content: 'Unstable' },\n      ],\n    },\n    {\n      id: '2',\n      isSelectable: true,\n      cells: [\n        { content: 'Wayne, Bruce' },\n        { content: '1107-MTN-DR' },\n        { content: 'Stable' },\n\n      ],\n    },\n    {\n      id: '3',\n      isSelectable: true,\n      cells: [\n        { content: 'Carr, Alicia' },\n        { content: '1007-MTN' },\n        { content: 'Unstable' },\n\n      ],\n    },\n    {\n      id: '4',\n      isSelectable: true,\n      cells: [\n        { content: 'McMurphy, Donald' },\n        { content: '1024-MTN', isMasked: true },\n        { content: 'Stable' },\n      ],\n    },\n    {\n      id: '5',\n      isSelectable: true,\n      cells: [\n        { content: 'Peters, Timothy' },\n        { content: '1207-MTN' },\n        { content: 'Unstable', isMasked: true },\n      ],\n    },\n  ],\n};\n\nconst TableSingleRowSelection = () => {\n  const rowHeaderIndex = 0;\n  const { cols, rows } = tableDataJSON;\n  const [rowData, setRowData] = useState(rows);\n\n  const onRowSelect = useCallback((rowSelection) => {\n    const { rowId } = rowSelection;\n\n    const newRowData = [...rowData];\n\n    const dataRowToUpdate = newRowData.find(row => row.id === rowId);\n\n    newRowData.forEach((row) => {\n      if (row.id !== dataRowToUpdate.id) {\n        // eslint-disable-next-line no-return-assign, no-param-reassign\n        row.isSelected = false;\n      }\n    });\n\n    dataRowToUpdate.isSelected = !dataRowToUpdate.isSelected;\n\n    setRowData(newRowData);\n  }, [rowData]);\n\n  const onRowSelectionHeaderSelect = useCallback(() => {\n    // eslint-disable-next-line no-alert\n    alert('Row Selection Header Clicked');\n  }, []);\n\n  return (\n    <Table\n      id=\"table-with-single-row-selection\"\n      overflowColumns={cols}\n      rows={rowData}\n      rowHeaderIndex={rowHeaderIndex}\n      columnWidth=\"180px\"\n      ariaLabel=\"Table with Single Row Selection\"\n      rowSelectionMode=\"single\" // Prop to turn row selection mode on/off\n      onRowSelect={onRowSelect} // For row selection, consumer must provide a callback that the Worklist Data Grid will call when the user selects one or more rows.\n      onRowSelectionHeaderSelect={onRowSelectionHeaderSelect}\n    />\n  );\n};\n\nexport default TableSingleRowSelection;\n\n")))}d.isMDXComponent=!0;var u=t(49271),w=function(e){var n=e.title,t=e.description,o=e.isExpanded;return a.createElement(u.Z,{title:n||"Table Single Row Selection",description:t,example:a.createElement(c.Z,null),exampleSrc:a.createElement(d,null),isExpanded:o})},p=["components"],S={},m="wrapper";function b(e){var n=e.components,t=(0,l.Z)(e,p);return(0,r.mdx)(m,(0,o.Z)({},S,t,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)(w,{title:"Table With Single Row Selection",mdxType:"TableSingleRowSelection"}))}b.isMDXComponent=!0},79178:function(e,n,t){var o=t(64836),l=t(18698);n.Z=void 0;var a=o(t(861)),r=o(t(27424)),c=function(e,n){if(!n&&e&&e.__esModule)return e;if(null===e||"object"!=l(e)&&"function"!=typeof e)return{default:e};var t=s(n);if(t&&t.has(e))return t.get(e);var o={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var c=a?Object.getOwnPropertyDescriptor(e,r):null;c&&(c.get||c.set)?Object.defineProperty(o,r,c):o[r]=e[r]}return o.default=e,t&&t.set(e,o),o}(t(67294)),i=o(t(12810));function s(e){if("function"!=typeof WeakMap)return null;var n=new WeakMap,t=new WeakMap;return(s=function(e){return e?t:n})(e)}var d=[{id:"Column-0",displayName:"Patient"},{id:"Column-1",displayName:"Location"},{id:"Column-2",displayName:"Illness Severity"}],u=[{id:"1",isSelectable:!0,cells:[{content:"Fleck, Arthur"},{content:"1007-MTN"},{content:"Unstable"}]},{id:"2",isSelectable:!0,cells:[{content:"Wayne, Bruce"},{content:"1107-MTN-DR"},{content:"Stable"}]},{id:"3",isSelectable:!0,cells:[{content:"Carr, Alicia"},{content:"1007-MTN"},{content:"Unstable"}]},{id:"4",isSelectable:!0,cells:[{content:"McMurphy, Donald"},{content:"1024-MTN",isMasked:!0},{content:"Stable"}]},{id:"5",isSelectable:!0,cells:[{content:"Peters, Timothy"},{content:"1207-MTN"},{content:"Unstable",isMasked:!0}]}];n.Z=function(){var e=d,n=u,t=(0,c.useState)(n),o=(0,r.default)(t,2),l=o[0],s=o[1],w=(0,c.useCallback)((function(e){var n=e.rowId,t=(0,a.default)(l),o=t.find((function(e){return e.id===n}));t.forEach((function(e){e.id!==o.id&&(e.isSelected=!1)})),o.isSelected=!o.isSelected,s(t)}),[l]),p=(0,c.useCallback)((function(){alert("Row Selection Header Clicked")}),[]);return c.default.createElement(i.default,{id:"table-with-single-row-selection",overflowColumns:e,rows:l,rowHeaderIndex:0,columnWidth:"180px",ariaLabel:"Table with Single Row Selection",rowSelectionMode:"single",onRowSelect:w,onRowSelectionHeaderSelect:p})}}}]);