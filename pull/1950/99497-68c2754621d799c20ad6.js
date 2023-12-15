"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[99497,33377,43089,37703],{49271:function(e,t,n){var l=n(64836),o=n(18698);t.Z=void 0;var a=l(n(27424)),c=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==o(e)&&"function"!=typeof e)return{default:e};var n=w(t);if(n&&n.has(e))return n.get(e);var l={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in e)if("default"!==c&&Object.prototype.hasOwnProperty.call(e,c)){var r=a?Object.getOwnPropertyDescriptor(e,c):null;r&&(r.get||r.set)?Object.defineProperty(l,c,r):l[c]=e[c]}l.default=e,n&&n.set(e,l);return l}(n(67294)),r=l(n(45697)),d=l(n(47166)),s=n(21538),i=l(n(33864)),u=l(n(23399)),m=n(51051),f=l(n(53560));function w(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(w=function(e){return e?n:t})(e)}var p=d.default.bind(f.default),_={example:r.default.element,exampleSrc:r.default.element,exampleCssSrc:r.default.element,title:r.default.string,description:r.default.node,isExpanded:r.default.bool},h=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},x=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},S=function(e){var t=e.example,n=e.exampleSrc,l=e.exampleCssSrc,o=e.title,r=e.description,d=e.isExpanded,f=(0,c.useState)(d),w=(0,a.default)(f,2),_=w[0],S=w[1],g=(0,c.useState)(!1),C=(0,a.default)(g,2),D=C[0],v=C[1],b=c.default.useContext(s.ThemeContext),R=void 0!==l,E=function(){v(!D),_&&S(!_)},I=function(){S(!_),D&&v(!D)},y=function(e,t){e.nativeEvent.keyCode!==m.KEY_SPACE&&e.nativeEvent.keyCode!==m.KEY_RETURN||(e.preventDefault(),t())};return c.default.createElement("div",{className:p("template",b.className)},c.default.createElement("div",{className:p("header")},o&&c.default.createElement("h2",{className:p("title")},o)),c.default.createElement("div",{className:p("content")},r&&c.default.createElement("div",{className:p("description")},r),t),c.default.createElement("div",{className:p("footer")},n?c.default.createElement("div",{className:p("button-container")},R&&c.default.createElement("button",{type:"button",className:p("css-toggle","item",{"is-selected":D}),onClick:E,onKeyDown:function(e){return y(e,E)},onBlur:h,onMouseDown:x,tabIndex:0,"data-focus-styles-enabled":!0},c.default.createElement(i.default,{className:p("chevron")}),c.default.createElement("span",null,"CSS"),c.default.createElement(u.default,{className:p("chevron")})),c.default.createElement("button",{type:"button",className:p("code-toggle","item",{"is-selected":_}),onClick:I,onKeyDown:function(e){return y(e,I)},onBlur:h,onMouseDown:x,tabIndex:0,"data-focus-styles-enabled":!0},c.default.createElement(i.default,{className:p("chevron")}),c.default.createElement("span",null,"Code"),c.default.createElement(u.default,{className:p("chevron")}))):null,c.default.createElement("div",null,D&&c.default.createElement("div",{className:p("css")},l),_&&c.default.createElement("div",{className:p("code")},n))))};S.propTypes=_,S.defaultProps={isExpanded:!1};var g=S;t.Z=g},60917:function(e,t,n){n.r(t),n.d(t,{default:function(){return _}});var l=n(87462),o=n(44925),a=n(67294),c=n(81254),r=n(33720),d=["components"],s={};function i(e){var t=e.components,n=(0,o.Z)(e,d);return(0,c.mdx)("wrapper",(0,l.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,c.mdx)("pre",null,(0,c.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React, { useState, useCallback } from 'react';\nimport { FlowsheetDataGrid } from 'terra-data-grid';\n\nconst RowSelection = () => {\n  const gridDataJSON = {\n    cols: [\n      { id: 'Column-0', displayName: 'Vitals' },\n      { id: 'Column-1', displayName: 'March 16' },\n      { id: 'Column-2', displayName: 'March 17' },\n      { id: 'Column-3', displayName: 'March 18' },\n    ],\n    rows: [\n      {\n        id: '1',\n        cells: [\n          { content: 'Heart Rate Monitored (bpm)' },\n          { content: '68' },\n          { content: '66' },\n          { content: '67' },\n        ],\n      },\n      {\n        id: '2',\n        cells: [\n          { content: 'Temperature Oral (degC)' },\n          { content: '36.7' },\n          { content: '36.9' },\n          { content: '37' },\n        ],\n      },\n      {\n        id: '3',\n        cells: [\n          { content: 'Cardiac Index (L/min/m2)' },\n          { content: '2.25' },\n          { content: '2.28' },\n          { content: '2.8' },\n        ],\n      },\n      {\n        id: '4',\n        cells: [\n          { content: 'ICP (mmHg)' },\n          { content: '11' },\n          { content: '11' },\n          { content: '12' },\n        ],\n      },\n      {\n        id: '5',\n        cells: [\n          { content: 'CPP (mmHg)' },\n          { content: '63' },\n          { content: '47' },\n          { content: '48' },\n        ],\n      },\n    ],\n  };\n\n  const { cols, rows } = gridDataJSON;\n  const [rowData, setRowData] = useState(rows);\n  const [selectedRow, setSelectedRow] = useState(undefined);\n\n  const clearSelectedRow = useCallback(() => {\n    if (selectedRow) {\n      setSelectedRow(undefined);\n    }\n  }, [selectedRow]);\n\n  const onRowSelect = useCallback((rowToSelect) => {\n    const { rowId } = rowToSelect; // Contains rowId and sectionId\n    if (rowId) {\n      const rowIndex = rowData.findIndex(e => e.id === rowId);\n\n      const newRowData = [...rowData];\n\n      // Remove current selections\n      for (let row = 0; row < rowData.length; row += 1) {\n        newRowData[row].isSelected = false;\n        for (let cell = 0; cell < rowData[row].cells.length; cell += 1) {\n          newRowData[row].cells[cell].isSelected = false;\n        }\n      }\n\n      if (selectedRow !== rowId) {\n        newRowData[rowIndex].isSelected = true;\n        setSelectedRow(rowId);\n      } else {\n        newRowData[rowIndex].isSelected = false;\n        clearSelectedRow();\n      }\n\n      setRowData(newRowData);\n    }\n  }, [clearSelectedRow, rowData, selectedRow]);\n\n  const onCellSelect = useCallback((selectedCell) => {\n    if (selectedCell.rowId && selectedCell.columnId) {\n      const rowIndex = rowData.findIndex(e => e.id === selectedCell.rowId);\n      const columnIndex = cols.findIndex(e => e.id === selectedCell.columnId);\n      let otherSelectionsExist = false;\n\n      // Remove cell selections, excluding current cell\n      const newRowData = [...rowData];\n      for (let row = 0; row < rowData.length; row += 1) {\n        newRowData[row].isSelected = false;\n        for (let cell = 0; cell < rowData[row].cells.length; cell += 1) {\n          const currentCell = rowData[row].cells[cell];\n          if (currentCell.isSelected && !(row === rowIndex && cell === columnIndex)) {\n            currentCell.isSelected = false;\n            otherSelectionsExist = true;\n          }\n        }\n      }\n\n      // If the current cell is the only selected cell, toggle it to unselected. Otherwise, set it to selected.\n      newRowData[rowIndex].cells[columnIndex].isSelected = !rowData[rowIndex].cells[columnIndex].isSelected || otherSelectionsExist;\n      clearSelectedRow();\n      setRowData(newRowData);\n    }\n  }, [cols, rowData, clearSelectedRow]);\n\n  const onClearSelectedCells = useCallback(() => {\n    // Remove current selections\n    const newRowData = [...rowData];\n    for (let row = 0; row < rowData.length; row += 1) {\n      for (let cell = 0; cell < rowData[row].cells.length; cell += 1) {\n        newRowData[row].cells[cell].isSelected = false;\n      }\n    }\n\n    clearSelectedRow();\n    setRowData(newRowData);\n  }, [clearSelectedRow, rowData]);\n\n  const onCellRangeSelect = useCallback((cells) => {\n    const newRowData = [...rowData];\n\n    // Remove current selections\n    for (let row = 0; row < rowData.length; row += 1) {\n      newRowData[row].isSelected = false;\n      for (let cell = 0; cell < rowData[row].cells.length; cell += 1) {\n        newRowData[row].cells[cell].isSelected = false;\n      }\n    }\n\n    cells.forEach((cell) => {\n      const rowIndex = rowData.findIndex(e => e.id === cell.rowId);\n      const columnIndex = cols.findIndex(e => e.id === cell.columnId);\n\n      newRowData[rowIndex].cells[columnIndex].isSelected = true;\n    });\n\n    clearSelectedRow();\n    setRowData(newRowData);\n  }, [clearSelectedRow, cols, rowData]);\n\n  return (\n    <FlowsheetDataGrid\n      id=\"default-terra-flowsheet-data-grid\"\n      columns={cols}\n      rows={rowData}\n      ariaLabel=\"Flowsheet Data Grid\"\n      onCellSelect={onCellSelect}\n      onClearSelectedCells={onClearSelectedCells}\n      onCellRangeSelect={onCellRangeSelect}\n      onRowSelect={onRowSelect}\n    />\n  );\n};\n\nexport default RowSelection;\n\n")))}i.isMDXComponent=!0;var u=n(49271),m=function(e){var t=e.title,n=e.description,l=e.isExpanded;return a.createElement(u.Z,{title:t||"Row Selection",description:n,example:a.createElement(r.Z,null),exampleSrc:a.createElement(i,null),isExpanded:l})},f=["components"],w={},p="wrapper";function _(e){var t=e.components,n=(0,o.Z)(e,f);return(0,c.mdx)(p,(0,l.Z)({},w,n,{components:t,mdxType:"MDXLayout"}),(0,c.mdx)("h1",{id:"row-selection"},"Row Selection"),(0,c.mdx)("h3",{id:"description"},"Description"),(0,c.mdx)("p",null,"This example demonstrates a Flowsheet Data Grid with row selection support by utilizing the following ",(0,c.mdx)("a",{parentName:"p",href:"/terra-framework/pull/1950/components/cerner-terra-framework-docs/data-grid/flowsheet-data-grid/about"},"properties"),":"),(0,c.mdx)("ul",null,(0,c.mdx)("li",{parentName:"ul"},"The ",(0,c.mdx)("strong",{parentName:"li"},"onRowSelect")," callback prop: When the user selects a row header cell (a cell in the pinned first column), this callback will be called with an object containing the ",(0,c.mdx)("inlineCode",{parentName:"li"},"rowId")," and ",(0,c.mdx)("inlineCode",{parentName:"li"},"sectionId")," of the selected row.\nIn this example, the ",(0,c.mdx)("inlineCode",{parentName:"li"},"isSelected")," row property is toggled to true, adding highlighting to the selected row.")),(0,c.mdx)(m,{title:"Flowsheet Data Grid with Row Selection",mdxType:"RowSelection"}))}_.isMDXComponent=!0},33720:function(e,t,n){var l=n(64836),o=n(18698);t.Z=void 0;var a=l(n(861)),c=l(n(27424)),r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=o(e)&&"function"!=typeof e)return{default:e};var n=s(t);if(n&&n.has(e))return n.get(e);var l={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in e)if("default"!==c&&Object.prototype.hasOwnProperty.call(e,c)){var r=a?Object.getOwnPropertyDescriptor(e,c):null;r&&(r.get||r.set)?Object.defineProperty(l,c,r):l[c]=e[c]}return l.default=e,n&&n.set(e,l),l}(n(67294)),d=n(55730);function s(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(s=function(e){return e?n:t})(e)}t.Z=function(){var e=[{id:"Column-0",displayName:"Vitals"},{id:"Column-1",displayName:"March 16"},{id:"Column-2",displayName:"March 17"},{id:"Column-3",displayName:"March 18"}],t=[{id:"1",cells:[{content:"Heart Rate Monitored (bpm)"},{content:"68"},{content:"66"},{content:"67"}]},{id:"2",cells:[{content:"Temperature Oral (degC)"},{content:"36.7"},{content:"36.9"},{content:"37"}]},{id:"3",cells:[{content:"Cardiac Index (L/min/m2)"},{content:"2.25"},{content:"2.28"},{content:"2.8"}]},{id:"4",cells:[{content:"ICP (mmHg)"},{content:"11"},{content:"11"},{content:"12"}]},{id:"5",cells:[{content:"CPP (mmHg)"},{content:"63"},{content:"47"},{content:"48"}]}],n=(0,r.useState)(t),l=(0,c.default)(n,2),o=l[0],s=l[1],i=(0,r.useState)(void 0),u=(0,c.default)(i,2),m=u[0],f=u[1],w=(0,r.useCallback)((function(){m&&f(void 0)}),[m]),p=(0,r.useCallback)((function(e){var t=e.rowId;if(t){for(var n=o.findIndex((function(e){return e.id===t})),l=(0,a.default)(o),c=0;c<o.length;c+=1){l[c].isSelected=!1;for(var r=0;r<o[c].cells.length;r+=1)l[c].cells[r].isSelected=!1}m!==t?(l[n].isSelected=!0,f(t)):(l[n].isSelected=!1,w()),s(l)}}),[w,o,m]),_=(0,r.useCallback)((function(t){if(t.rowId&&t.columnId){for(var n=o.findIndex((function(e){return e.id===t.rowId})),l=e.findIndex((function(e){return e.id===t.columnId})),c=!1,r=(0,a.default)(o),d=0;d<o.length;d+=1){r[d].isSelected=!1;for(var i=0;i<o[d].cells.length;i+=1){var u=o[d].cells[i];!u.isSelected||d===n&&i===l||(u.isSelected=!1,c=!0)}}r[n].cells[l].isSelected=!o[n].cells[l].isSelected||c,w(),s(r)}}),[e,o,w]),h=(0,r.useCallback)((function(){for(var e=(0,a.default)(o),t=0;t<o.length;t+=1)for(var n=0;n<o[t].cells.length;n+=1)e[t].cells[n].isSelected=!1;w(),s(e)}),[w,o]),x=(0,r.useCallback)((function(t){for(var n=(0,a.default)(o),l=0;l<o.length;l+=1){n[l].isSelected=!1;for(var c=0;c<o[l].cells.length;c+=1)n[l].cells[c].isSelected=!1}t.forEach((function(t){var l=o.findIndex((function(e){return e.id===t.rowId})),a=e.findIndex((function(e){return e.id===t.columnId}));n[l].cells[a].isSelected=!0})),w(),s(n)}),[w,e,o]);return r.default.createElement(d.FlowsheetDataGrid,{id:"default-terra-flowsheet-data-grid",columns:e,rows:o,ariaLabel:"Flowsheet Data Grid",onCellSelect:_,onClearSelectedCells:h,onCellRangeSelect:x,onRowSelect:p})}},53560:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},87462:function(e,t,n){function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},l.apply(this,arguments)}n.d(t,{Z:function(){return l}})},44925:function(e,t,n){function l(e,t){if(null==e)return{};var n,l,o=function(e,t){if(null==e)return{};var n,l,o={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.d(t,{Z:function(){return l}})}}]);