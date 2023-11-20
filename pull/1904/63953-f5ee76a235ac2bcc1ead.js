"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[63953,47209],{49271:function(e,t,n){var o=n(64836),a=n(18698);t.Z=void 0;var l=o(n(27424)),r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var o={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var c=l?Object.getOwnPropertyDescriptor(e,r):null;c&&(c.get||c.set)?Object.defineProperty(o,r,c):o[r]=e[r]}o.default=e,n&&n.set(e,o);return o}(n(67294)),c=o(n(45697)),i=o(n(47166)),s=n(21538),d=o(n(33864)),u=o(n(23399)),p=n(51051),m=o(n(53560));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}var w=i.default.bind(m.default),b={example:c.default.element,exampleSrc:c.default.element,exampleCssSrc:c.default.element,title:c.default.string,description:c.default.node,isExpanded:c.default.bool},h=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},y=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},_=function(e){var t=e.example,n=e.exampleSrc,o=e.exampleCssSrc,a=e.title,c=e.description,i=e.isExpanded,m=(0,r.useState)(i),f=(0,l.default)(m,2),b=f[0],_=f[1],S=(0,r.useState)(!1),v=(0,l.default)(S,2),g=v[0],x=v[1],k=r.default.useContext(s.ThemeContext),N=void 0!==o,O=function(){x(!g),b&&_(!b)},R=function(){_(!b),g&&x(!g)},C=function(e,t){e.nativeEvent.keyCode!==p.KEY_SPACE&&e.nativeEvent.keyCode!==p.KEY_RETURN||(e.preventDefault(),t())};return r.default.createElement("div",{className:w("template",k.className)},r.default.createElement("div",{className:w("header")},a&&r.default.createElement("h2",{className:w("title")},a)),r.default.createElement("div",{className:w("content")},c&&r.default.createElement("div",{className:w("description")},c),t),r.default.createElement("div",{className:w("footer")},n?r.default.createElement("div",{className:w("button-container")},N&&r.default.createElement("button",{type:"button",className:w("css-toggle","item",{"is-selected":g}),onClick:O,onKeyDown:function(e){return C(e,O)},onBlur:h,onMouseDown:y,tabIndex:0,"data-focus-styles-enabled":!0},r.default.createElement(d.default,{className:w("chevron")}),r.default.createElement("span",null,"CSS"),r.default.createElement(u.default,{className:w("chevron")})),r.default.createElement("button",{type:"button",className:w("code-toggle","item",{"is-selected":b}),onClick:R,onKeyDown:function(e){return C(e,R)},onBlur:h,onMouseDown:y,tabIndex:0,"data-focus-styles-enabled":!0},r.default.createElement(d.default,{className:w("chevron")}),r.default.createElement("span",null,"Code"),r.default.createElement(u.default,{className:w("chevron")}))):null,r.default.createElement("div",null,g&&r.default.createElement("div",{className:w("css")},o),b&&r.default.createElement("div",{className:w("code")},n))))};_.propTypes=b,_.defaultProps={isExpanded:!1};var S=_;t.Z=S},13861:function(e,t,n){n.r(t),n.d(t,{default:function(){return b}});var o=n(87462),a=n(44925),l=n(67294),r=n(81254),c=n(41030),i=["components"],s={};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.mdx)("wrapper",(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React, { useState, useRef, useCallback } from 'react';\nimport { WorklistDataGrid } from 'terra-data-grid';\nimport WorklistDataGridUtils from 'terra-data-grid/src/utils/WorklistDataGridUtils';\n\nconst gridDataJSON = {\n  cols: [\n    { id: 'Column-0', displayName: 'Patient' },\n    { id: 'Column-1', displayName: 'Location' },\n    { id: 'Column-2', displayName: 'Illness Severity' },\n    { id: 'Column-3', displayName: 'Visit' },\n    { id: 'Column-4', displayName: 'Allergy' },\n    { id: 'Column-5', displayName: 'Primary Contact' },\n    { id: 'Column-6', displayName: 'Generic Order Counts' },\n  ],\n  rows: [\n    {\n      id: '1',\n      cells: [\n        { content: 'Fleck, Arthur' },\n        { content: '1007-MTN' },\n        { content: 'Unstable' },\n        { content: 'Inpatient, 2 months' },\n        { content: '' },\n        { content: 'Quinzell, Harleen' },\n        { content: '', isMasked: true },\n      ],\n    },\n    {\n      id: '2',\n      cells: [\n        { content: 'Wayne, Bruce' },\n        { content: '1107-MTN-DR' },\n        { content: 'Stable' },\n        { content: 'Outpatient, 2 days' },\n        { content: 'Phytochemicals' },\n        { content: 'Grayson, Richard' },\n        { content: '' },\n\n      ],\n    },\n    {\n      id: '3',\n      cells: [\n        { content: 'Carr, Alicia' },\n        { content: '1007-MTN' },\n        { content: 'Unstable' },\n        { content: 'Inpatient, 3 months' },\n        { content: '' },\n        { content: 'Quinzell, Harleen' },\n        { content: '' },\n\n      ],\n    },\n    {\n      id: '4',\n      cells: [\n        { content: 'McMurphy, Donald' },\n        { content: '1024-MTN', isMasked: true },\n        { content: 'Stable' },\n        { content: 'Inpatient, 5 months' },\n        { content: '' },\n        { content: 'Quinzell, Harleen' },\n        { content: '' },\n      ],\n    },\n    {\n      id: '5',\n      cells: [\n        { content: 'Peters, Timothy' },\n        { content: '1207-MTN' },\n        { content: 'Unstable', isMasked: true },\n        { content: 'Outpatient, 15 days' },\n        { content: '' },\n        { content: 'Quinzell, Harleen' },\n        { content: '' },\n      ],\n    },\n    {\n      id: '6',\n      cells: [\n        { content: 'Jones, Becky' },\n        { content: '1007-MTN' },\n        { content: 'Unstable' },\n        { content: 'Inpatient, 2 months' },\n        { content: '' },\n        { content: 'Quinzell, Harleen' },\n        { content: '' },\n      ],\n    },\n    {\n      id: '7',\n      cells: [\n        { content: 'Williams, Peter' },\n        { content: '1002-KTN' },\n        { content: 'Unstable' },\n        { content: 'Outpatient, 9 days' },\n        { content: '' },\n        { content: 'Quinzell, Harleen' },\n        { content: '' },\n      ],\n    },\n    {\n      id: '8',\n      cells: [\n        { content: 'Pratt, Michaela' },\n        { content: '2108-NTN' },\n        { content: 'Stable' },\n        { content: 'Outpatient, 45 days' },\n        { content: '' },\n        { content: 'Quinzell, Harleen' },\n        { content: '' },\n      ],\n    },\n    {\n      id: '9',\n      cells: [\n        { content: 'Styris, Scott' },\n        { content: '1007-MTN', isMasked: true },\n        { content: 'Unstable' },\n        { content: 'Inpatient, 2 months' },\n        { content: '' },\n        { content: 'Quinzell, Harleen' },\n        { content: '' },\n      ],\n    },\n    {\n      id: '10',\n      cells: [\n        { content: 'Cook, Allan' },\n        { content: '1700-SKB' },\n        { content: 'Stable' },\n        { content: 'Inpatient, 4 months' },\n        { content: '' },\n        { content: 'Quinzell, Harleen' },\n        { content: '' },\n      ],\n    },\n    {\n      id: '11',\n      cells: [\n        { content: 'Lahey, Nathaniel' },\n        { content: '1348-DRS' },\n        { content: 'Unstable' },\n        { content: 'Inpatient, 1 months' },\n        { content: '' },\n        { content: 'Quinzell, Harleen' },\n        { content: '' },\n      ],\n    },\n    {\n      id: '12',\n      cells: [\n        { content: 'Harris, Isabella' },\n        { content: '1809-MTN' },\n        { content: 'Stable' },\n        { content: 'Inpatient, 6 months' },\n        { content: '' },\n        { content: 'Quinzell, Harleen' },\n        { content: '' },\n      ],\n    },\n    {\n      id: '13',\n      cells: [\n        { content: 'Millstone, Asher' },\n        { content: '4133-MZN' },\n        { content: 'Unstable' },\n        { content: 'Inpatient, 9 months' },\n        { content: '' },\n        { content: 'Quinzell, Harleen' },\n        { content: '' },\n      ],\n    },\n  ],\n};\n\nconst RowSelection = () => {\n  const rowSelectionModeRef = useRef();\n  const rowHeaderIndex = 0;\n  const { cols, rows } = gridDataJSON;\n  const [rowData, setRowData] = useState(rows);\n  const [hasSelectableRows, setHasSelectableRows] = useState(false);\n\n  const clearRowSelection = useCallback(() => {\n    const newRowData = [...rowData];\n    // eslint-disable-next-line no-return-assign, no-param-reassign\n    newRowData.forEach(row => (row.isSelected = false));\n    setRowData(newRowData);\n  }, [rowData]);\n\n  const disableSelectableRows = useCallback(() => {\n    rowSelectionModeRef.current.checked = false;\n    setHasSelectableRows(false);\n    clearRowSelection();\n  }, [clearRowSelection]);\n\n  const onRowSelectionModeChange = useCallback((event) => {\n    if (!event.target.checked) {\n      clearRowSelection();\n    }\n    setHasSelectableRows(event.target.checked);\n  }, [clearRowSelection]);\n\n  const onColumnSelect = useCallback((columnId) => {\n    if (columnId === WorklistDataGridUtils.ROW_SELECTION_COLUMN.id) {\n      // eslint-disable-next-line no-alert\n      alert('Row Selection Header Clicked');\n    }\n  }, []);\n\n  const onRowSelect = useCallback((rowsToSelectAndUnSelect) => {\n    // Remove current selections\n    const newRowData = [...rowData];\n\n    rowsToSelectAndUnSelect.forEach((updatedRow) => {\n      const dataRowToUpdate = newRowData.find(row => row.id === updatedRow.id);\n      if (dataRowToUpdate) {\n        dataRowToUpdate.isSelected = updatedRow.selected;\n      }\n    });\n\n    setRowData(newRowData);\n  }, [rowData]);\n\n  const onRowSelectAll = useCallback(() => {\n    const newRowData = [...rowData];\n    // eslint-disable-next-line no-return-assign, no-param-reassign\n    newRowData.forEach(row => (row.isSelected = true));\n    setRowData(newRowData);\n  }, [rowData]);\n\n  const enableRowSelection = useCallback(() => {\n    if (!rowSelectionModeRef.current.checked) {\n      rowSelectionModeRef.current.checked = true;\n    }\n    setHasSelectableRows(true);\n  }, []);\n\n  return (\n    <React.Fragment>\n      <div>\n        <label htmlFor=\"rowSelectionMode\"><b>Row Selection Mode</b></label>\n        <input\n          id=\"rowSelectionMode\"\n          type=\"checkbox\"\n          ref={rowSelectionModeRef}\n          onChange={onRowSelectionModeChange}\n        />\n      </div>\n      <WorklistDataGrid\n        id=\"default-terra-worklist-data-grid\"\n        overflowColumns={cols}\n        rows={rowData}\n        rowHeaderIndex={rowHeaderIndex}\n        columnWidth={180}\n        ariaLabel=\"Worklist Data Grid\"\n        onColumnSelect={onColumnSelect}\n        hasSelectableRows={hasSelectableRows} // Prop to turn row selection mode on/off\n        onRowSelect={onRowSelect} // For row selection, consumer must provide a callback that the Worklist Data Grid will call when the user selects one or more rows.\n        onRowSelectAll={onRowSelectAll} // For row selection, consumer must provide a callback that the Worklist Data Grid will call when the user selects all rows.\n        onClearSelectedRows={clearRowSelection} // To clear selected rows, consumer must provide a callback that the Worklist Data Grid will call to clear the selection.\n        onDisableSelectableRows={disableSelectableRows} // Consumer must provide a callback that the Worklist Data Grid will call to turn off the row selection mode.\n        onEnableRowSelection={enableRowSelection} // Consumer must provide a callback that the Worklist Data Grid will call to turn on the row selection mode.\n      />\n    </React.Fragment>\n  );\n};\n\nexport default RowSelection;\n\n")))}d.isMDXComponent=!0;var u=n(49271),p=function(e){var t=e.title,n=e.description,o=e.isExpanded;return l.createElement(u.Z,{title:t||"Row Selection",description:n,example:l.createElement(c.Z,null),exampleSrc:l.createElement(d,null),isExpanded:o})},m=["components"],f={},w="wrapper";function b(e){var t=e.components,n=(0,a.Z)(e,m);return(0,r.mdx)(w,(0,o.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"row-selection"},"Row Selection"),(0,r.mdx)("h3",{id:"description"},"Description"),(0,r.mdx)("p",null,"The ",(0,r.mdx)("a",{parentName:"p",href:"/terra-framework/pull/1904/components/cerner-terra-framework-docs/data-grid/worklist-data-grid/about"},"Worklist Data Grid")," is built to operate in either of two selection modes:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Cell Selection (",(0,r.mdx)("em",{parentName:"li"},"default"),")"),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},"Row Selection"))),(0,r.mdx)("p",null,"Row Selection Mode is controlled via a prop and is off by default.\nWhen creating a Worklist Data Grid that supports Row Selection, the prop has to be explicitly set by the consumer.\nThis example demonstrates a Worklist Data Grid with full support for row selection and can be referenced for ",(0,r.mdx)("a",{parentName:"p",href:"/terra-framework/pull/1904/components/cerner-terra-framework-docs/data-grid/worklist-data-grid/examples/row-selection"},"row centric functionalities"),"."),(0,r.mdx)("h3",{id:"properties-required"},"Properties required"),(0,r.mdx)("p",null,"This example demonstrates a Worklist Data Grid with full support for row selection by utilizing the following ",(0,r.mdx)("a",{parentName:"p",href:"/terra-framework/pull/1904/components/cerner-terra-framework-docs/data-grid/worklist-data-grid/about"},"Worklist Data Grid properties"),":"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"hasSelectableRows"),(0,r.mdx)("li",{parentName:"ul"},"onRowSelect"),(0,r.mdx)("li",{parentName:"ul"},"onRowSelectAll"),(0,r.mdx)("li",{parentName:"ul"},"onClearSelectedRows"),(0,r.mdx)("li",{parentName:"ul"},"onDisableSelectableRows"),(0,r.mdx)("li",{parentName:"ul"},"onEnableRowSelection")),(0,r.mdx)("h2",{id:"row-selection-interactions"},"Row Selection Interactions"),(0,r.mdx)("p",null,"When using this example, the following row centric outcomes may be achieved by using the respective actions."),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Outcome"),(0,r.mdx)("th",{parentName:"tr",align:null},"Action"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"Select a row"),(0,r.mdx)("td",{parentName:"tr",align:null},"When Row Selection is on, click or press Spacebar anywhere on an ",(0,r.mdx)("em",{parentName:"td"},"unselected")," row.",(0,r.mdx)("br",null)," Shift+Click or press Shift+Spacebar anywhere on an ",(0,r.mdx)("em",{parentName:"td"},"unselected")," row.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"Unselect a row"),(0,r.mdx)("td",{parentName:"tr",align:null},"Click or press Spacebar anywhere on an ",(0,r.mdx)("em",{parentName:"td"},"selected")," row.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"Select all rows"),(0,r.mdx)("td",{parentName:"tr",align:null},"Press Control+A from anywhere on the grid.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"Unselect all selected rows"),(0,r.mdx)("td",{parentName:"tr",align:null},"Press Escape from anywhere on the grid.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"Select a range of rows"),(0,r.mdx)("td",{parentName:"tr",align:null},"From any row, hold Shift key and press up arrow or down arrow. Continue to press Up and Down arrow to expand or contract the range of rows.",(0,r.mdx)("br",null),"Select any unselected row then Shift+Click or Shift+Space on another row.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"Turn Row Selection mode On"),(0,r.mdx)("td",{parentName:"tr",align:null},"In addition to their default grid behavior, Shift+Click, Shift+Space, Shift+Up and Shift+Down will turn Row Selection Mode on if Row Selection Mode is off.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"Turn Row Selection mode Off"),(0,r.mdx)("td",{parentName:"tr",align:null},"Press Escape when no rows are selected.")))),(0,r.mdx)("p",null,(0,r.mdx)("a",{parentName:"p",href:"/terra-framework/pull/1904/components/cerner-terra-framework-docs/data-grid/worklist-data-grid/about"},"All Worklist Data Grid Keyboard Interactions")),(0,r.mdx)(p,{title:"Worklist Data Grid With Row Selection",mdxType:"RowSelection"}))}b.isMDXComponent=!0},42745:function(e,t,n){n.r(t);var o={ROW_SELECTION_COLUMN:{id:"WorklistDataGrid-rowSelectionColumn",width:40,isSelectable:!0,isResizable:!1}};t.default=o},41030:function(e,t,n){var o=n(64836),a=n(18698);t.Z=void 0;var l=o(n(861)),r=o(n(27424)),c=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var n=d(t);if(n&&n.has(e))return n.get(e);var o={__proto__:null},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var c=l?Object.getOwnPropertyDescriptor(e,r):null;c&&(c.get||c.set)?Object.defineProperty(o,r,c):o[r]=e[r]}return o.default=e,n&&n.set(e,o),o}(n(67294)),i=n(55730),s=o(n(42745));function d(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(d=function(e){return e?n:t})(e)}var u=[{id:"Column-0",displayName:"Patient"},{id:"Column-1",displayName:"Location"},{id:"Column-2",displayName:"Illness Severity"},{id:"Column-3",displayName:"Visit"},{id:"Column-4",displayName:"Allergy"},{id:"Column-5",displayName:"Primary Contact"},{id:"Column-6",displayName:"Generic Order Counts"}],p=[{id:"1",cells:[{content:"Fleck, Arthur"},{content:"1007-MTN"},{content:"Unstable"},{content:"Inpatient, 2 months"},{content:""},{content:"Quinzell, Harleen"},{content:"",isMasked:!0}]},{id:"2",cells:[{content:"Wayne, Bruce"},{content:"1107-MTN-DR"},{content:"Stable"},{content:"Outpatient, 2 days"},{content:"Phytochemicals"},{content:"Grayson, Richard"},{content:""}]},{id:"3",cells:[{content:"Carr, Alicia"},{content:"1007-MTN"},{content:"Unstable"},{content:"Inpatient, 3 months"},{content:""},{content:"Quinzell, Harleen"},{content:""}]},{id:"4",cells:[{content:"McMurphy, Donald"},{content:"1024-MTN",isMasked:!0},{content:"Stable"},{content:"Inpatient, 5 months"},{content:""},{content:"Quinzell, Harleen"},{content:""}]},{id:"5",cells:[{content:"Peters, Timothy"},{content:"1207-MTN"},{content:"Unstable",isMasked:!0},{content:"Outpatient, 15 days"},{content:""},{content:"Quinzell, Harleen"},{content:""}]},{id:"6",cells:[{content:"Jones, Becky"},{content:"1007-MTN"},{content:"Unstable"},{content:"Inpatient, 2 months"},{content:""},{content:"Quinzell, Harleen"},{content:""}]},{id:"7",cells:[{content:"Williams, Peter"},{content:"1002-KTN"},{content:"Unstable"},{content:"Outpatient, 9 days"},{content:""},{content:"Quinzell, Harleen"},{content:""}]},{id:"8",cells:[{content:"Pratt, Michaela"},{content:"2108-NTN"},{content:"Stable"},{content:"Outpatient, 45 days"},{content:""},{content:"Quinzell, Harleen"},{content:""}]},{id:"9",cells:[{content:"Styris, Scott"},{content:"1007-MTN",isMasked:!0},{content:"Unstable"},{content:"Inpatient, 2 months"},{content:""},{content:"Quinzell, Harleen"},{content:""}]},{id:"10",cells:[{content:"Cook, Allan"},{content:"1700-SKB"},{content:"Stable"},{content:"Inpatient, 4 months"},{content:""},{content:"Quinzell, Harleen"},{content:""}]},{id:"11",cells:[{content:"Lahey, Nathaniel"},{content:"1348-DRS"},{content:"Unstable"},{content:"Inpatient, 1 months"},{content:""},{content:"Quinzell, Harleen"},{content:""}]},{id:"12",cells:[{content:"Harris, Isabella"},{content:"1809-MTN"},{content:"Stable"},{content:"Inpatient, 6 months"},{content:""},{content:"Quinzell, Harleen"},{content:""}]},{id:"13",cells:[{content:"Millstone, Asher"},{content:"4133-MZN"},{content:"Unstable"},{content:"Inpatient, 9 months"},{content:""},{content:"Quinzell, Harleen"},{content:""}]}];t.Z=function(){var e=(0,c.useRef)(),t=u,n=p,o=(0,c.useState)(n),a=(0,r.default)(o,2),d=a[0],m=a[1],f=(0,c.useState)(!1),w=(0,r.default)(f,2),b=w[0],h=w[1],y=(0,c.useCallback)((function(){var e=(0,l.default)(d);e.forEach((function(e){return e.isSelected=!1})),m(e)}),[d]),_=(0,c.useCallback)((function(){e.current.checked=!1,h(!1),y()}),[y]),S=(0,c.useCallback)((function(e){e.target.checked||y(),h(e.target.checked)}),[y]),v=(0,c.useCallback)((function(e){e===s.default.ROW_SELECTION_COLUMN.id&&alert("Row Selection Header Clicked")}),[]),g=(0,c.useCallback)((function(e){var t=(0,l.default)(d);e.forEach((function(e){var n=t.find((function(t){return t.id===e.id}));n&&(n.isSelected=e.selected)})),m(t)}),[d]),x=(0,c.useCallback)((function(){var e=(0,l.default)(d);e.forEach((function(e){return e.isSelected=!0})),m(e)}),[d]),k=(0,c.useCallback)((function(){e.current.checked||(e.current.checked=!0),h(!0)}),[]);return c.default.createElement(c.default.Fragment,null,c.default.createElement("div",null,c.default.createElement("label",{htmlFor:"rowSelectionMode"},c.default.createElement("b",null,"Row Selection Mode")),c.default.createElement("input",{id:"rowSelectionMode",type:"checkbox",ref:e,onChange:S})),c.default.createElement(i.WorklistDataGrid,{id:"default-terra-worklist-data-grid",overflowColumns:t,rows:d,rowHeaderIndex:0,columnWidth:180,ariaLabel:"Worklist Data Grid",onColumnSelect:v,hasSelectableRows:b,onRowSelect:g,onRowSelectAll:x,onClearSelectedRows:y,onDisableSelectableRows:_,onEnableRowSelection:k}))}},53560:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},9197:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"SectionHeader-module__clinical-lowlight-theme___M-5zo","orion-fusion-theme":"SectionHeader-module__orion-fusion-theme___MGUT7","section-header":"SectionHeader-module__section-header___wbdJQ","is-interactable":"SectionHeader-module__is-interactable___4Hj3Z","is-active":"SectionHeader-module__is-active___Qfdbq","is-transparent":"SectionHeader-module__is-transparent___3L6Q5","title-arrange":"SectionHeader-module__title-arrange___t4JW1",title:"SectionHeader-module__title___EPyaG","accordion-icon-wrapper":"SectionHeader-module__accordion-icon-wrapper___BOHqG","accordion-icon":"SectionHeader-module__accordion-icon___VQmOf","is-open":"SectionHeader-module__is-open___naqpt","arrange-wrapper":"SectionHeader-module__arrange-wrapper___jwEJm"}},16772:function(e,t,n){function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=f(n(67294)),l=f(n(45697)),r=f(n(94184)),c=f(n(47166)),i=f(n(47341)),s=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==o(e)&&"function"!=typeof e)return{default:e};var n=m(t);if(n&&n.has(e))return n.get(e);var a={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var c=l?Object.getOwnPropertyDescriptor(e,r):null;c&&(c.get||c.set)?Object.defineProperty(a,r,c):a[r]=e[r]}a.default=e,n&&n.set(e,a);return a}(n(51051)),d=f(n(78490)),u=f(n(9197)),p=["text","title","onClick","isOpen","isTransparent","level"];function m(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(m=function(e){return e?n:t})(e)}function f(e){return e&&e.__esModule?e:{default:e}}function w(){return w=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},w.apply(this,arguments)}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function h(e,t,n){return(t=S(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function y(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function _(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,S(o.key),o)}}function S(e){var t=function(e,t){if("object"!==o(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var a=n.call(e,t||"default");if("object"!==o(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===o(t)?t:String(t)}function v(e,t){return v=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},v(e,t)}function g(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=k(e);if(t){var l=k(this).constructor;n=Reflect.construct(a,arguments,l)}else n=a.apply(this,arguments);return function(e,t){if(t&&("object"===o(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return x(e)}(this,n)}}function x(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function k(e){return k=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},k(e)}var N=c.default.bind(u.default),O={text:l.default.string,title:l.default.string,onClick:l.default.func,isOpen:l.default.bool,level:l.default.oneOf([1,2,3,4,5,6]),isTransparent:l.default.bool},R={onClick:void 0,isOpen:!1,isTransparent:!1},C=function(e){return e.nativeEvent.keyCode===s.KEY_RETURN||e.nativeEvent.keyCode===s.KEY_SPACE},E=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&v(e,t)}(c,e);var t,n,o,l=g(c);function c(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(t=l.call(this,e)).state={isActive:!1},t.wrapOnKeyDown=t.wrapOnKeyDown.bind(x(t)),t.wrapOnKeyUp=t.wrapOnKeyUp.bind(x(t)),t}return t=c,n=[{key:"wrapOnKeyDown",value:function(e){var t=this;return function(n){C(n)&&!t.state.isActive&&(t.setState({isActive:!0}),t.props.onClick&&t.props.onClick(n)),e&&e(n)}}},{key:"wrapOnKeyUp",value:function(e){var t=this;return function(n){C(n)&&t.state.isActive&&t.setState({isActive:!1}),e&&e(n)}}},{key:"render",value:function(){var e=this.props,t=e.text,n=e.title,o=e.onClick,l=e.isOpen,c=e.isTransparent,i=e.level,s=y(e,p),u=this.context,m=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){h(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},s);o&&(m.tabIndex="0",m.onKeyDown=this.wrapOnKeyDown(m.onKeyDown),m.onKeyUp=this.wrapOnKeyUp(m.onKeyUp),m.onClick=o);var f=N(["accordion-icon",{"is-open":o&&l}]),_=a.default.createElement("span",{className:N("accordion-icon-wrapper")},a.default.createElement("span",{className:f})),S=(0,r.default)(N("section-header",{"is-interactable":o},{"is-active":this.state.isActive},{"is-transparent":c},u.className),s.className);i||console.warn("Default heading level may not appropriate has it would fail to convey context of heading in a site / application where it is used. Heading level should be set explicitly depending on the position of header in site / application to allow screen readers to identify headers consistently."),n&&console.warn("`title` prop has been renamed to `text`. please update all the refernces of `title` prop to use prop `text`.");var v="h".concat(i||2),g=t||n,x=o&&_?{type:"button",tabIndex:"-1","aria-expanded":l,"aria-label":g}:void 0,k=o&&_?"button":"span";return a.default.createElement(v,w({},m,{className:S,"aria-label":o?void 0:g}),a.default.createElement(k,w({},x,{className:N("arrange-wrapper")}),a.default.createElement(d.default,{fitStart:o&&_,fill:a.default.createElement("span",{"aria-hidden":void 0!==o,className:N("title")},g),className:N("title-arrange")})))}}],n&&_(t.prototype,n),o&&_(t,o),Object.defineProperty(t,"prototype",{writable:!1}),c}(a.default.Component);E.propTypes=O,E.defaultProps=R,E.contextType=i.default;var D=E;t.default=D},87462:function(e,t,n){function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},o.apply(this,arguments)}n.d(t,{Z:function(){return o}})},44925:function(e,t,n){function o(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}n.d(t,{Z:function(){return o}})}}]);