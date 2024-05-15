"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[75276],{13500:function(e,n,t){t.r(n),t.d(n,{default:function(){return f}});var o=t(58168),r=t(53986),a=t(96540),i=t(36665),l=t(74647),s=t(14417),c=["components"],d={};function u(e){var n=e.components,t=(0,r.A)(e,c);return(0,i.mdx)("wrapper",(0,o.A)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React, { useState } from 'react';\nimport { WorklistDataGrid } from 'terra-data-grid';\n\nconst gridDataJSON = {\n  cols: [\n    {\n      id: 'Column-0', displayName: 'Patient', sortIndicator: 'ascending', hasError: true, // This column header will be rendered with a sort indicator and an error icon by default.\n    },\n    { id: 'Column-1', displayName: 'Location' },\n    { id: 'Column-2', displayName: 'Illness Severity' },\n    { id: 'Column-3', displayName: 'Visit' },\n    { id: 'Column-4', displayName: 'Allergy', hasError: true }, // Use hasError property to display an error icon in the column header\n    { id: 'Column-5', displayName: 'Primary Contact' },\n    { id: 'Column-6', displayName: 'Generic Order Counts' },\n    { id: 'Column-7', displayName: 'Patient Age' },\n    { id: 'Column-8', displayName: 'Medication History' },\n    { id: 'Column-9', displayName: 'My Relationship' },\n    { id: 'Column-10', displayName: 'Not Selectable', isSelectable: false }, // Column header cannot be selected via click or Spacebar but can receive focus when navigating through keyboard\n  ],\n  rows: [\n    {\n      id: '1',\n      cells: [\n        { content: 'Fleck, Arthur' },\n        { content: '1007-MTN' },\n        { content: 'Unstable' },\n        { content: 'Inpatient, 2 months' },\n        { content: '' },\n        { content: 'Quinzell, Harleen' },\n        { content: '' },\n        { isMasked: true },\n        { isMasked: true },\n        { content: 'Admitting Physician' },\n        { content: '', isSelectable: false },\n      ],\n    },\n    {\n      id: '2',\n      cells: [\n        { content: 'Wayne, Bruce' },\n        { content: '1007-MTN-DR' },\n        { content: 'Stable' },\n        { content: 'Outpatient, 2 days' },\n        { content: 'Phytochemicals' },\n        { content: 'Grayson, Richard' },\n        { content: '' },\n        { content: '' },\n        { isMasked: true },\n        { content: 'Admitting Physician' },\n        { content: '', isSelectable: false },\n      ],\n    },\n  ],\n};\n\nconst WorklistDataGridWithColumnStates = () => {\n  const rowHeaderIndex = 0;\n  const { cols, rows } = gridDataJSON;\n\n  const [gridColumns, setGridColumns] = useState(cols);\n  const [gridRows, setGridRows] = useState(rows);\n\n  // The onColumnSelect will sort the rows and toggle the current sort indicator.\n  const onColumnSelect = (columnId) => {\n    const newColumnArray = gridColumns.map((column, columnIndex) => {\n      const newColumn = { ...column };\n\n      if (column.id === columnId) {\n        newColumn.sortIndicator = column.sortIndicator === 'ascending' ? 'descending' : 'ascending';\n\n        const newGridRows = [...gridRows];\n        newGridRows.sort((rowA, rowB) => {\n          const firstRowContent = rowA.cells[columnIndex].content || '';\n          const secondRowContent = rowB.cells[columnIndex].content || '';\n\n          if (newColumn.sortIndicator === 'ascending') {\n            return firstRowContent.localeCompare(secondRowContent);\n          }\n          return secondRowContent.localeCompare(firstRowContent);\n        });\n\n        setGridRows(newGridRows);\n      } else {\n        newColumn.sortIndicator = undefined;\n      }\n\n      return newColumn;\n    });\n\n    setGridColumns(newColumnArray);\n  };\n\n  return (\n    <WorklistDataGrid\n      id=\"terra-worklist-data-grid-with-column-states\"\n      overflowColumns={gridColumns}\n      rows={gridRows}\n      rowHeaderIndex={rowHeaderIndex}\n      rowHeight=\"50px\"\n      defaultColumnWidth={100}\n      columnHeaderHeight=\"50px\"\n      onColumnSelect={onColumnSelect} // Consumer must provide this callback to the Worklist Data Grid for it to call when the user selects a column header.\n      ariaLabel=\"Worklist Data Grid\"\n    />\n  );\n};\n\nexport default WorklistDataGridWithColumnStates;\n\n")))}u.isMDXComponent=!0;var m=t(201),p=function(e){var n=e.title,t=e.description,o=e.isExpanded;return a.createElement(m.A,{title:n||"Worklist Data Grid Column States",description:t,example:a.createElement(s.A,null),exampleSrc:a.createElement(u,null),isExpanded:o})},h=["components"],y={},w="wrapper";function f(e){var n=e.components,t=(0,r.A)(e,h);return(0,i.mdx)(w,(0,o.A)({},y,t,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"column-states-and-selection"},"Column States and Selection"),(0,i.mdx)(l.Notice,{variant:"important",ariaLevel:"2",mdxType:"Notice"},"Please note that JAWS will not announce a change in sort order when using the Edge or Chrome browsers."),(0,i.mdx)("h3",{id:"description"},"Description"),(0,i.mdx)("p",null,"This example demonstrates a ",(0,i.mdx)("a",{parentName:"p",href:"/terra-framework/pull/2164/components/cerner-terra-framework-docs/data-grid/worklist-data-grid/about"},"Worklist Data Grid")," that supports column states and selection.\nA column can be selected by clicking on the column or pressing the Spacebar on the focused column.\nOnly columns that are selectable can be selected. A column is selectable by default."),(0,i.mdx)("p",null,"The Column can display icons representing its current state such as sort indicator and error."),(0,i.mdx)("h3",{id:"properties-required"},"Properties required"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"The ",(0,i.mdx)("strong",{parentName:"li"},(0,i.mdx)("em",{parentName:"strong"},"onColumnSelect"))," callback prop: When the user selects a column, this callback will be called with the columnId of the selected column.")),(0,i.mdx)("p",null,"The below example also demonstrates how properties such as ",(0,i.mdx)("em",{parentName:"p"},"isSelectable"),", ",(0,i.mdx)("em",{parentName:"p"},"hasError")," and ",(0,i.mdx)("em",{parentName:"p"},"sortIndicator")," can be provided by the consumer to prevent selection, display error and show sort indicator icons respectively."),(0,i.mdx)(p,{title:"Worklist Data Grid Column States",mdxType:"WorklistDataGridColumnStates"}))}f.isMDXComponent=!0},14417:function(e,n,t){var o=t(24994),r=t(73738);n.A=void 0;var a=o(t(41132)),i=o(t(43693)),l=o(t(85715)),s=function(e,n){if(!n&&e&&e.__esModule)return e;if(null===e||"object"!=r(e)&&"function"!=typeof e)return{default:e};var t=d(n);if(t&&t.has(e))return t.get(e);var o={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&{}.hasOwnProperty.call(e,i)){var l=a?Object.getOwnPropertyDescriptor(e,i):null;l&&(l.get||l.set)?Object.defineProperty(o,i,l):o[i]=e[i]}return o.default=e,t&&t.set(e,o),o}(t(96540)),c=t(45663);function d(e){if("function"!=typeof WeakMap)return null;var n=new WeakMap,t=new WeakMap;return(d=function(e){return e?t:n})(e)}function u(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}var m=[{id:"Column-0",displayName:"Patient",sortIndicator:"ascending",hasError:!0},{id:"Column-1",displayName:"Location"},{id:"Column-2",displayName:"Illness Severity"},{id:"Column-3",displayName:"Visit"},{id:"Column-4",displayName:"Allergy",hasError:!0},{id:"Column-5",displayName:"Primary Contact"},{id:"Column-6",displayName:"Generic Order Counts"},{id:"Column-7",displayName:"Patient Age"},{id:"Column-8",displayName:"Medication History"},{id:"Column-9",displayName:"My Relationship"},{id:"Column-10",displayName:"Not Selectable",isSelectable:!1}],p=[{id:"1",cells:[{content:"Fleck, Arthur"},{content:"1007-MTN"},{content:"Unstable"},{content:"Inpatient, 2 months"},{content:""},{content:"Quinzell, Harleen"},{content:""},{isMasked:!0},{isMasked:!0},{content:"Admitting Physician"},{content:"",isSelectable:!1}]},{id:"2",cells:[{content:"Wayne, Bruce"},{content:"1007-MTN-DR"},{content:"Stable"},{content:"Outpatient, 2 days"},{content:"Phytochemicals"},{content:"Grayson, Richard"},{content:""},{content:""},{isMasked:!0},{content:"Admitting Physician"},{content:"",isSelectable:!1}]}];n.A=function(){var e=m,n=p,t=(0,s.useState)(e),o=(0,l.default)(t,2),r=o[0],d=o[1],h=(0,s.useState)(n),y=(0,l.default)(h,2),w=y[0],f=y[1];return s.default.createElement(c.WorklistDataGrid,{id:"terra-worklist-data-grid-with-column-states",overflowColumns:r,rows:w,rowHeaderIndex:0,rowHeight:"50px",defaultColumnWidth:100,columnHeaderHeight:"50px",onColumnSelect:function(e){var n=r.map((function(n,t){var o=function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?u(Object(t),!0).forEach((function(n){(0,i.default)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},n);if(n.id===e){o.sortIndicator="ascending"===n.sortIndicator?"descending":"ascending";var r=(0,a.default)(w);r.sort((function(e,n){var r=e.cells[t].content||"",a=n.cells[t].content||"";return"ascending"===o.sortIndicator?r.localeCompare(a):a.localeCompare(r)})),f(r)}else o.sortIndicator=void 0;return o}));d(n)},ariaLabel:"Worklist Data Grid"})}}}]);