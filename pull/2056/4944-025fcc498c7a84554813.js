"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[4944],{201:function(e,n,t){var a=t(24994),o=t(73738);n.A=void 0;var l=a(t(85715)),r=function(e,n){if(!n&&e&&e.__esModule)return e;if(null===e||"object"!=o(e)&&"function"!=typeof e)return{default:e};var t=f(n);if(t&&t.has(e))return t.get(e);var a={__proto__:null},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var c=l?Object.getOwnPropertyDescriptor(e,r):null;c&&(c.get||c.set)?Object.defineProperty(a,r,c):a[r]=e[r]}return a.default=e,t&&t.set(e,a),a}(t(96540)),c=a(t(5556)),i=a(t(67967)),s=t(92912),d=a(t(49558)),u=a(t(53665)),m=t(25966),p=a(t(89986));function f(e){if("function"!=typeof WeakMap)return null;var n=new WeakMap,t=new WeakMap;return(f=function(e){return e?t:n})(e)}var w=i.default.bind(p.default),h={example:c.default.element,exampleSrc:c.default.element,exampleCssSrc:c.default.element,title:c.default.string,description:c.default.node,isExpanded:c.default.bool},b=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},S=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},x=function(e){var n=e.example,t=e.exampleSrc,a=e.exampleCssSrc,o=e.title,c=e.description,i=e.isExpanded,p=(0,r.useState)(i),f=(0,l.default)(p,2),h=f[0],x=f[1],y=(0,r.useState)(!1),N=(0,l.default)(y,2),k=N[0],_=N[1],R=r.default.useContext(s.ThemeContext),g=void 0!==a,C=function(){_(!k),h&&x(!h)},v=function(){x(!h),k&&_(!k)},E=function(e,n){e.nativeEvent.keyCode!==m.KEY_SPACE&&e.nativeEvent.keyCode!==m.KEY_RETURN||(e.preventDefault(),n())};return r.default.createElement("div",{className:w("template",R.className)},r.default.createElement("div",{className:w("header")},o&&r.default.createElement("h2",{className:w("title")},o)),r.default.createElement("div",{className:w("content")},c&&r.default.createElement("div",{className:w("description")},c),n),r.default.createElement("div",{className:w("footer")},t?r.default.createElement("div",{className:w("button-container")},g&&r.default.createElement("button",{type:"button",className:w("css-toggle","item",{"is-selected":k}),onClick:C,onKeyDown:function(e){return E(e,C)},onBlur:b,onMouseDown:S,tabIndex:0,"data-focus-styles-enabled":!0},r.default.createElement(d.default,{className:w("chevron")}),r.default.createElement("span",null,"CSS"),r.default.createElement(u.default,{className:w("chevron")})),r.default.createElement("button",{type:"button",className:w("code-toggle","item",{"is-selected":h}),onClick:v,onKeyDown:function(e){return E(e,v)},onBlur:b,onMouseDown:S,tabIndex:0,"data-focus-styles-enabled":!0},r.default.createElement(d.default,{className:w("chevron")}),r.default.createElement("span",null,"Code"),r.default.createElement(u.default,{className:w("chevron")}))):null,r.default.createElement("div",null,k&&r.default.createElement("div",{className:w("css")},a),h&&r.default.createElement("div",{className:w("code")},t))))};x.propTypes=h,x.defaultProps={isExpanded:!1};n.A=x},42768:function(e,n,t){t.r(n),t.d(n,{default:function(){return h}});var a=t(58168),o=t(53986),l=t(96540),r=t(36665),c=t(12662),i=["components"],s={};function d(e){var n=e.components,t=(0,o.A)(e,i);return(0,r.mdx)("wrapper",(0,a.A)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React, { useState, useRef, useCallback } from 'react';\nimport { WorklistDataGrid } from 'terra-data-grid';\nimport WorklistDataGridUtils from 'terra-data-grid/src/utils/WorklistDataGridUtils';\n\nconst gridDataJSON = {\n  cols: [\n    { id: 'Column-0', displayName: 'Patient' },\n    { id: 'Column-1', displayName: 'Location' },\n    { id: 'Column-2', displayName: 'Illness Severity' },\n    { id: 'Column-3', displayName: 'Visit' },\n    { id: 'Column-4', displayName: 'Allergy' },\n    { id: 'Column-5', displayName: 'Primary Contact' },\n    { id: 'Column-6', displayName: 'Generic Order Counts' },\n  ],\n  rows: [\n    {\n      id: '1',\n      cells: [\n        { content: 'Fleck, Arthur' },\n        { content: '1007-MTN' },\n        { content: 'Unstable' },\n        { content: 'Inpatient, 2 months' },\n        { content: '' },\n        { content: 'Quinzell, Harleen' },\n        { content: '', isMasked: true },\n      ],\n    },\n    {\n      id: '2',\n      cells: [\n        { content: 'Wayne, Bruce' },\n        { content: '1107-MTN-DR' },\n        { content: 'Stable' },\n        { content: 'Outpatient, 2 days' },\n        { content: 'Phytochemicals' },\n        { content: 'Grayson, Richard' },\n        { content: '' },\n\n      ],\n    },\n    {\n      id: '3',\n      cells: [\n        { content: 'Carr, Alicia' },\n        { content: '1007-MTN' },\n        { content: 'Unstable' },\n        { content: 'Inpatient, 3 months' },\n        { content: '' },\n        { content: 'Quinzell, Harleen' },\n        { content: '' },\n\n      ],\n    },\n    {\n      id: '4',\n      cells: [\n        { content: 'McMurphy, Donald' },\n        { content: '1024-MTN', isMasked: true },\n        { content: 'Stable' },\n        { content: 'Inpatient, 5 months' },\n        { content: '' },\n        { content: 'Quinzell, Harleen' },\n        { content: '' },\n      ],\n    },\n    {\n      id: '5',\n      cells: [\n        { content: 'Peters, Timothy' },\n        { content: '1207-MTN' },\n        { content: 'Unstable', isMasked: true },\n        { content: 'Outpatient, 15 days' },\n        { content: '' },\n        { content: 'Quinzell, Harleen' },\n        { content: '' },\n      ],\n    },\n    {\n      id: '6',\n      cells: [\n        { content: 'Jones, Becky' },\n        { content: '1007-MTN' },\n        { content: 'Unstable' },\n        { content: 'Inpatient, 2 months' },\n        { content: '' },\n        { content: 'Quinzell, Harleen' },\n        { content: '' },\n      ],\n    },\n    {\n      id: '7',\n      cells: [\n        { content: 'Williams, Peter' },\n        { content: '1002-KTN' },\n        { content: 'Unstable' },\n        { content: 'Outpatient, 9 days' },\n        { content: '' },\n        { content: 'Quinzell, Harleen' },\n        { content: '' },\n      ],\n    },\n    {\n      id: '8',\n      cells: [\n        { content: 'Pratt, Michaela' },\n        { content: '2108-NTN' },\n        { content: 'Stable' },\n        { content: 'Outpatient, 45 days' },\n        { content: '' },\n        { content: 'Quinzell, Harleen' },\n        { content: '' },\n      ],\n    },\n    {\n      id: '9',\n      cells: [\n        { content: 'Styris, Scott' },\n        { content: '1007-MTN', isMasked: true },\n        { content: 'Unstable' },\n        { content: 'Inpatient, 2 months' },\n        { content: '' },\n        { content: 'Quinzell, Harleen' },\n        { content: '' },\n      ],\n    },\n    {\n      id: '10',\n      cells: [\n        { content: 'Cook, Allan' },\n        { content: '1700-SKB' },\n        { content: 'Stable' },\n        { content: 'Inpatient, 4 months' },\n        { content: '' },\n        { content: 'Quinzell, Harleen' },\n        { content: '' },\n      ],\n    },\n    {\n      id: '11',\n      cells: [\n        { content: 'Lahey, Nathaniel' },\n        { content: '1348-DRS' },\n        { content: 'Unstable' },\n        { content: 'Inpatient, 1 months' },\n        { content: '' },\n        { content: 'Quinzell, Harleen' },\n        { content: '' },\n      ],\n    },\n    {\n      id: '12',\n      cells: [\n        { content: 'Harris, Isabella' },\n        { content: '1809-MTN' },\n        { content: 'Stable' },\n        { content: 'Inpatient, 6 months' },\n        { content: '' },\n        { content: 'Quinzell, Harleen' },\n        { content: '' },\n      ],\n    },\n    {\n      id: '13',\n      cells: [\n        { content: 'Millstone, Asher' },\n        { content: '4133-MZN' },\n        { content: 'Unstable' },\n        { content: 'Inpatient, 9 months' },\n        { content: '' },\n        { content: 'Quinzell, Harleen' },\n        { content: '' },\n      ],\n    },\n  ],\n};\n\nconst RowSelection = () => {\n  const rowSelectionModeRef = useRef();\n  const rowHeaderIndex = 0;\n  const { cols, rows } = gridDataJSON;\n  const [rowData, setRowData] = useState(rows);\n  const [hasSelectableRows, setHasSelectableRows] = useState(false);\n\n  const clearRowSelection = useCallback(() => {\n    const newRowData = [...rowData];\n    // eslint-disable-next-line no-return-assign, no-param-reassign\n    newRowData.forEach(row => (row.isSelected = false));\n    setRowData(newRowData);\n  }, [rowData]);\n\n  const disableSelectableRows = useCallback(() => {\n    rowSelectionModeRef.current.checked = false;\n    setHasSelectableRows(false);\n    clearRowSelection();\n  }, [clearRowSelection]);\n\n  const onRowSelectionModeChange = useCallback((event) => {\n    if (!event.target.checked) {\n      clearRowSelection();\n    }\n    setHasSelectableRows(event.target.checked);\n  }, [clearRowSelection]);\n\n  const onColumnSelect = useCallback((columnId) => {\n    if (columnId === WorklistDataGridUtils.ROW_SELECTION_COLUMN.id) {\n      // eslint-disable-next-line no-alert\n      alert('Row Selection Header Clicked');\n    }\n  }, []);\n\n  const onRowSelect = useCallback((rowsToSelectAndUnSelect) => {\n    // Remove current selections\n    const newRowData = [...rowData];\n\n    rowsToSelectAndUnSelect.forEach((updatedRow) => {\n      const dataRowToUpdate = newRowData.find(row => row.id === updatedRow.id);\n      if (dataRowToUpdate) {\n        dataRowToUpdate.isSelected = updatedRow.selected;\n      }\n    });\n\n    setRowData(newRowData);\n  }, [rowData]);\n\n  const onRowSelectAll = useCallback(() => {\n    const newRowData = [...rowData];\n    // eslint-disable-next-line no-return-assign, no-param-reassign\n    newRowData.forEach(row => (row.isSelected = true));\n    setRowData(newRowData);\n  }, [rowData]);\n\n  const enableRowSelection = useCallback(() => {\n    if (!rowSelectionModeRef.current.checked) {\n      rowSelectionModeRef.current.checked = true;\n    }\n    setHasSelectableRows(true);\n  }, []);\n\n  return (\n    <React.Fragment>\n      <div>\n        <label htmlFor=\"rowSelectionMode\"><b>Row Selection Mode</b></label>\n        <input\n          id=\"rowSelectionMode\"\n          type=\"checkbox\"\n          ref={rowSelectionModeRef}\n          onChange={onRowSelectionModeChange}\n        />\n      </div>\n      <WorklistDataGrid\n        id=\"default-terra-worklist-data-grid\"\n        overflowColumns={cols}\n        rows={rowData}\n        rowHeaderIndex={rowHeaderIndex}\n        columnWidth={180}\n        ariaLabel=\"Worklist Data Grid\"\n        onColumnSelect={onColumnSelect}\n        hasSelectableRows={hasSelectableRows} // Prop to turn row selection mode on/off\n        onRowSelect={onRowSelect} // For row selection, consumer must provide a callback that the Worklist Data Grid will call when the user selects one or more rows.\n        onRowSelectAll={onRowSelectAll} // For row selection, consumer must provide a callback that the Worklist Data Grid will call when the user selects all rows.\n        onClearSelectedRows={clearRowSelection} // To clear selected rows, consumer must provide a callback that the Worklist Data Grid will call to clear the selection.\n        onDisableSelectableRows={disableSelectableRows} // Consumer must provide a callback that the Worklist Data Grid will call to turn off the row selection mode.\n        onEnableRowSelection={enableRowSelection} // Consumer must provide a callback that the Worklist Data Grid will call to turn on the row selection mode.\n      />\n    </React.Fragment>\n  );\n};\n\nexport default RowSelection;\n\n")))}d.isMDXComponent=!0;var u=t(201),m=function(e){var n=e.title,t=e.description,a=e.isExpanded;return l.createElement(u.A,{title:n||"Row Selection",description:t,example:l.createElement(c.A,null),exampleSrc:l.createElement(d,null),isExpanded:a})},p=["components"],f={},w="wrapper";function h(e){var n=e.components,t=(0,o.A)(e,p);return(0,r.mdx)(w,(0,a.A)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"row-selection"},"Row Selection"),(0,r.mdx)("h3",{id:"description"},"Description"),(0,r.mdx)("p",null,"The ",(0,r.mdx)("a",{parentName:"p",href:"/terra-framework/pull/2056/components/cerner-terra-framework-docs/data-grid/worklist-data-grid/about"},"Worklist Data Grid")," is built to operate in either of two selection modes:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Cell Selection (",(0,r.mdx)("em",{parentName:"li"},"default"),")"),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},"Row Selection"))),(0,r.mdx)("p",null,"Row Selection Mode is controlled via a prop and is off by default.\nWhen creating a Worklist Data Grid that supports Row Selection, the prop has to be explicitly set by the consumer.\nThis example demonstrates a Worklist Data Grid with full support for row selection and can be referenced for ",(0,r.mdx)("a",{parentName:"p",href:"/terra-framework/pull/2056/components/cerner-terra-framework-docs/data-grid/worklist-data-grid/examples/row-selection"},"row centric functionalities"),"."),(0,r.mdx)("h3",{id:"properties-required"},"Properties required"),(0,r.mdx)("p",null,"This example demonstrates a Worklist Data Grid with full support for row selection by utilizing the following ",(0,r.mdx)("a",{parentName:"p",href:"/terra-framework/pull/2056/components/cerner-terra-framework-docs/data-grid/worklist-data-grid/about"},"Worklist Data Grid properties"),":"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"hasSelectableRows"),(0,r.mdx)("li",{parentName:"ul"},"onRowSelect"),(0,r.mdx)("li",{parentName:"ul"},"onRowSelectAll"),(0,r.mdx)("li",{parentName:"ul"},"onClearSelectedRows"),(0,r.mdx)("li",{parentName:"ul"},"onDisableSelectableRows"),(0,r.mdx)("li",{parentName:"ul"},"onEnableRowSelection")),(0,r.mdx)("h2",{id:"row-selection-interactions"},"Row Selection Interactions"),(0,r.mdx)("p",null,"When using this example, the following row centric outcomes may be achieved by using the respective actions."),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Outcome"),(0,r.mdx)("th",{parentName:"tr",align:null},"Action"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"Select a row"),(0,r.mdx)("td",{parentName:"tr",align:null},"When Row Selection is on, click or press Spacebar anywhere on an ",(0,r.mdx)("em",{parentName:"td"},"unselected")," row.",(0,r.mdx)("br",null)," Shift+Click or press Shift+Spacebar anywhere on an ",(0,r.mdx)("em",{parentName:"td"},"unselected")," row.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"Unselect a row"),(0,r.mdx)("td",{parentName:"tr",align:null},"Click or press Spacebar anywhere on an ",(0,r.mdx)("em",{parentName:"td"},"selected")," row.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"Select all rows"),(0,r.mdx)("td",{parentName:"tr",align:null},"Press Control+A from anywhere on the grid.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"Unselect all selected rows"),(0,r.mdx)("td",{parentName:"tr",align:null},"Press Escape from anywhere on the grid.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"Select a range of rows"),(0,r.mdx)("td",{parentName:"tr",align:null},"From any row, hold Shift key and press up arrow or down arrow. Continue to press Up and Down arrow to expand or contract the range of rows.",(0,r.mdx)("br",null),"Select any unselected row then Shift+Click or Shift+Space on another row.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"Turn Row Selection mode On"),(0,r.mdx)("td",{parentName:"tr",align:null},"In addition to their default grid behavior, Shift+Click, Shift+Space, Shift+Up and Shift+Down will turn Row Selection Mode on if Row Selection Mode is off.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"Turn Row Selection mode Off"),(0,r.mdx)("td",{parentName:"tr",align:null},"Press Escape when no rows are selected.")))),(0,r.mdx)("p",null,(0,r.mdx)("a",{parentName:"p",href:"/terra-framework/pull/2056/components/cerner-terra-framework-docs/data-grid/worklist-data-grid/about"},"All Worklist Data Grid Keyboard Interactions")),(0,r.mdx)(m,{title:"Worklist Data Grid With Row Selection",mdxType:"RowSelection"}))}h.isMDXComponent=!0},65694:function(e,n,t){t.r(n);var a={ROW_SELECTION_COLUMN:{id:"WorklistDataGrid-rowSelectionColumn",width:40,isSelectable:!0,isResizable:!1}};n.default=a},12662:function(e,n,t){var a=t(24994),o=t(73738);n.A=void 0;var l=a(t(41132)),r=a(t(85715)),c=function(e,n){if(!n&&e&&e.__esModule)return e;if(null===e||"object"!=o(e)&&"function"!=typeof e)return{default:e};var t=d(n);if(t&&t.has(e))return t.get(e);var a={__proto__:null},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var c=l?Object.getOwnPropertyDescriptor(e,r):null;c&&(c.get||c.set)?Object.defineProperty(a,r,c):a[r]=e[r]}return a.default=e,t&&t.set(e,a),a}(t(96540)),i=t(45663),s=a(t(65694));function d(e){if("function"!=typeof WeakMap)return null;var n=new WeakMap,t=new WeakMap;return(d=function(e){return e?t:n})(e)}var u=[{id:"Column-0",displayName:"Patient"},{id:"Column-1",displayName:"Location"},{id:"Column-2",displayName:"Illness Severity"},{id:"Column-3",displayName:"Visit"},{id:"Column-4",displayName:"Allergy"},{id:"Column-5",displayName:"Primary Contact"},{id:"Column-6",displayName:"Generic Order Counts"}],m=[{id:"1",cells:[{content:"Fleck, Arthur"},{content:"1007-MTN"},{content:"Unstable"},{content:"Inpatient, 2 months"},{content:""},{content:"Quinzell, Harleen"},{content:"",isMasked:!0}]},{id:"2",cells:[{content:"Wayne, Bruce"},{content:"1107-MTN-DR"},{content:"Stable"},{content:"Outpatient, 2 days"},{content:"Phytochemicals"},{content:"Grayson, Richard"},{content:""}]},{id:"3",cells:[{content:"Carr, Alicia"},{content:"1007-MTN"},{content:"Unstable"},{content:"Inpatient, 3 months"},{content:""},{content:"Quinzell, Harleen"},{content:""}]},{id:"4",cells:[{content:"McMurphy, Donald"},{content:"1024-MTN",isMasked:!0},{content:"Stable"},{content:"Inpatient, 5 months"},{content:""},{content:"Quinzell, Harleen"},{content:""}]},{id:"5",cells:[{content:"Peters, Timothy"},{content:"1207-MTN"},{content:"Unstable",isMasked:!0},{content:"Outpatient, 15 days"},{content:""},{content:"Quinzell, Harleen"},{content:""}]},{id:"6",cells:[{content:"Jones, Becky"},{content:"1007-MTN"},{content:"Unstable"},{content:"Inpatient, 2 months"},{content:""},{content:"Quinzell, Harleen"},{content:""}]},{id:"7",cells:[{content:"Williams, Peter"},{content:"1002-KTN"},{content:"Unstable"},{content:"Outpatient, 9 days"},{content:""},{content:"Quinzell, Harleen"},{content:""}]},{id:"8",cells:[{content:"Pratt, Michaela"},{content:"2108-NTN"},{content:"Stable"},{content:"Outpatient, 45 days"},{content:""},{content:"Quinzell, Harleen"},{content:""}]},{id:"9",cells:[{content:"Styris, Scott"},{content:"1007-MTN",isMasked:!0},{content:"Unstable"},{content:"Inpatient, 2 months"},{content:""},{content:"Quinzell, Harleen"},{content:""}]},{id:"10",cells:[{content:"Cook, Allan"},{content:"1700-SKB"},{content:"Stable"},{content:"Inpatient, 4 months"},{content:""},{content:"Quinzell, Harleen"},{content:""}]},{id:"11",cells:[{content:"Lahey, Nathaniel"},{content:"1348-DRS"},{content:"Unstable"},{content:"Inpatient, 1 months"},{content:""},{content:"Quinzell, Harleen"},{content:""}]},{id:"12",cells:[{content:"Harris, Isabella"},{content:"1809-MTN"},{content:"Stable"},{content:"Inpatient, 6 months"},{content:""},{content:"Quinzell, Harleen"},{content:""}]},{id:"13",cells:[{content:"Millstone, Asher"},{content:"4133-MZN"},{content:"Unstable"},{content:"Inpatient, 9 months"},{content:""},{content:"Quinzell, Harleen"},{content:""}]}];n.A=function(){var e=(0,c.useRef)(),n=u,t=m,a=(0,c.useState)(t),o=(0,r.default)(a,2),d=o[0],p=o[1],f=(0,c.useState)(!1),w=(0,r.default)(f,2),h=w[0],b=w[1],S=(0,c.useCallback)((function(){var e=(0,l.default)(d);e.forEach((function(e){return e.isSelected=!1})),p(e)}),[d]),x=(0,c.useCallback)((function(){e.current.checked=!1,b(!1),S()}),[S]),y=(0,c.useCallback)((function(e){e.target.checked||S(),b(e.target.checked)}),[S]),N=(0,c.useCallback)((function(e){e===s.default.ROW_SELECTION_COLUMN.id&&alert("Row Selection Header Clicked")}),[]),k=(0,c.useCallback)((function(e){var n=(0,l.default)(d);e.forEach((function(e){var t=n.find((function(n){return n.id===e.id}));t&&(t.isSelected=e.selected)})),p(n)}),[d]),_=(0,c.useCallback)((function(){var e=(0,l.default)(d);e.forEach((function(e){return e.isSelected=!0})),p(e)}),[d]),R=(0,c.useCallback)((function(){e.current.checked||(e.current.checked=!0),b(!0)}),[]);return c.default.createElement(c.default.Fragment,null,c.default.createElement("div",null,c.default.createElement("label",{htmlFor:"rowSelectionMode"},c.default.createElement("b",null,"Row Selection Mode")),c.default.createElement("input",{id:"rowSelectionMode",type:"checkbox",ref:e,onChange:y})),c.default.createElement(i.WorklistDataGrid,{id:"default-terra-worklist-data-grid",overflowColumns:n,rows:d,rowHeaderIndex:0,columnWidth:180,ariaLabel:"Worklist Data Grid",onColumnSelect:N,hasSelectableRows:h,onRowSelect:k,onRowSelectAll:_,onClearSelectedRows:S,onDisableSelectableRows:x,onEnableRowSelection:R}))}},89986:function(e,n,t){t.r(n),n.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},58168:function(e,n,t){function a(){return a=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},a.apply(this,arguments)}t.d(n,{A:function(){return a}})},53986:function(e,n,t){function a(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}t.d(n,{A:function(){return a}})}}]);