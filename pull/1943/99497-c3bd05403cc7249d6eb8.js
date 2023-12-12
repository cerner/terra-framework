"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[99497,33377,43089,37703],{49271:function(e,t,n){var l=n(64836),o=n(18698);t.Z=void 0;var a=l(n(27424)),r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==o(e)&&"function"!=typeof e)return{default:e};var n=w(t);if(n&&n.has(e))return n.get(e);var l={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var c=a?Object.getOwnPropertyDescriptor(e,r):null;c&&(c.get||c.set)?Object.defineProperty(l,r,c):l[r]=e[r]}l.default=e,n&&n.set(e,l);return l}(n(67294)),c=l(n(45697)),d=l(n(47166)),s=n(21538),i=l(n(33864)),u=l(n(23399)),m=n(51051),f=l(n(53560));function w(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(w=function(e){return e?n:t})(e)}var p=d.default.bind(f.default),_={example:c.default.element,exampleSrc:c.default.element,exampleCssSrc:c.default.element,title:c.default.string,description:c.default.node,isExpanded:c.default.bool},h=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},x=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},S=function(e){var t=e.example,n=e.exampleSrc,l=e.exampleCssSrc,o=e.title,c=e.description,d=e.isExpanded,f=(0,r.useState)(d),w=(0,a.default)(f,2),_=w[0],S=w[1],g=(0,r.useState)(!1),D=(0,a.default)(g,2),v=D[0],C=D[1],b=r.default.useContext(s.ThemeContext),R=void 0!==l,E=function(){C(!v),_&&S(!_)},y=function(){S(!_),v&&C(!v)},I=function(e,t){e.nativeEvent.keyCode!==m.KEY_SPACE&&e.nativeEvent.keyCode!==m.KEY_RETURN||(e.preventDefault(),t())};return r.default.createElement("div",{className:p("template",b.className)},r.default.createElement("div",{className:p("header")},o&&r.default.createElement("h2",{className:p("title")},o)),r.default.createElement("div",{className:p("content")},c&&r.default.createElement("div",{className:p("description")},c),t),r.default.createElement("div",{className:p("footer")},n?r.default.createElement("div",{className:p("button-container")},R&&r.default.createElement("button",{type:"button",className:p("css-toggle","item",{"is-selected":v}),onClick:E,onKeyDown:function(e){return I(e,E)},onBlur:h,onMouseDown:x,tabIndex:0,"data-focus-styles-enabled":!0},r.default.createElement(i.default,{className:p("chevron")}),r.default.createElement("span",null,"CSS"),r.default.createElement(u.default,{className:p("chevron")})),r.default.createElement("button",{type:"button",className:p("code-toggle","item",{"is-selected":_}),onClick:y,onKeyDown:function(e){return I(e,y)},onBlur:h,onMouseDown:x,tabIndex:0,"data-focus-styles-enabled":!0},r.default.createElement(i.default,{className:p("chevron")}),r.default.createElement("span",null,"Code"),r.default.createElement(u.default,{className:p("chevron")}))):null,r.default.createElement("div",null,v&&r.default.createElement("div",{className:p("css")},l),_&&r.default.createElement("div",{className:p("code")},n))))};S.propTypes=_,S.defaultProps={isExpanded:!1};var g=S;t.Z=g},60917:function(e,t,n){n.r(t),n.d(t,{default:function(){return _}});var l=n(87462),o=n(44925),a=n(67294),r=n(81254),c=n(33720),d=["components"],s={};function i(e){var t=e.components,n=(0,o.Z)(e,d);return(0,r.mdx)("wrapper",(0,l.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React, { useState, useCallback } from 'react';\nimport { FlowsheetDataGrid } from 'terra-data-grid';\n\nconst RowSelection = () => {\n  const gridDataJSON = {\n    cols: [\n      { id: 'Column-0', displayName: 'Vitals' },\n      { id: 'Column-1', displayName: 'March 16' },\n      { id: 'Column-2', displayName: 'March 17' },\n      { id: 'Column-3', displayName: 'March 18' },\n    ],\n    rows: [\n      {\n        id: '1',\n        cells: [\n          { content: 'Heart Rate Monitored (bpm)' },\n          { content: '68' },\n          { content: '66' },\n          { content: '67' },\n        ],\n      },\n      {\n        id: '2',\n        cells: [\n          { content: 'Temperature Oral (degC)' },\n          { content: '36.7' },\n          { content: '36.9' },\n          { content: '37' },\n        ],\n      },\n      {\n        id: '3',\n        cells: [\n          { content: 'Cardiac Index (L/min/m2)' },\n          { content: '2.25' },\n          { content: '2.28' },\n          { content: '2.8' },\n        ],\n      },\n      {\n        id: '4',\n        cells: [\n          { content: 'ICP (mmHg)' },\n          { content: '11' },\n          { content: '11' },\n          { content: '12' },\n        ],\n      },\n      {\n        id: '5',\n        cells: [\n          { content: 'CPP (mmHg)' },\n          { content: '63' },\n          { content: '47' },\n          { content: '48' },\n        ],\n      },\n    ],\n  };\n\n  const { cols, rows } = gridDataJSON;\n  const [rowData, setRowData] = useState(rows);\n  const [selectedRow, setSelectedRow] = useState(undefined);\n\n  const clearSelectedRow = useCallback(() => {\n    if (selectedRow) {\n      setSelectedRow(undefined);\n    }\n  }, [selectedRow]);\n\n  const onRowSelect = useCallback((rowToSelect) => {\n    const { rowId } = rowToSelect; // Contains rowId and sectionId\n    if (rowId) {\n      const rowIndex = rowData.findIndex(e => e.id === rowId);\n\n      const newRowData = [...rowData];\n\n      // Remove current selections\n      for (let row = 0; row < rowData.length; row += 1) {\n        newRowData[row].isSelected = false;\n        for (let cell = 0; cell < rowData[row].cells.length; cell += 1) {\n          newRowData[row].cells[cell].isSelected = false;\n        }\n      }\n\n      if (selectedRow !== rowId) {\n        newRowData[rowIndex].isSelected = true;\n        setSelectedRow(rowId);\n      } else {\n        newRowData[rowIndex].isSelected = false;\n        clearSelectedRow();\n      }\n\n      setRowData(newRowData);\n    }\n  }, [clearSelectedRow, rowData, selectedRow]);\n\n  const onCellSelect = useCallback((rowId, columnId) => {\n    if (rowId && columnId) {\n      const rowIndex = rowData.findIndex(e => e.id === rowId);\n      const columnIndex = cols.findIndex(e => e.id === columnId);\n      let otherSelectionsExist = false;\n\n      // Remove cell selections, excluding current cell\n      const newRowData = [...rowData];\n      for (let row = 0; row < rowData.length; row += 1) {\n        newRowData[row].isSelected = false;\n        for (let cell = 0; cell < rowData[row].cells.length; cell += 1) {\n          const currentCell = rowData[row].cells[cell];\n          if (currentCell.isSelected && !(row === rowIndex && cell === columnIndex)) {\n            currentCell.isSelected = false;\n            otherSelectionsExist = true;\n          }\n        }\n      }\n\n      // If the current cell is the only selected cell, toggle it to unselected. Otherwise, set it to selected.\n      newRowData[rowIndex].cells[columnIndex].isSelected = !rowData[rowIndex].cells[columnIndex].isSelected || otherSelectionsExist;\n      clearSelectedRow();\n      setRowData(newRowData);\n    }\n  }, [clearSelectedRow, cols, rowData]);\n\n  const onClearSelectedCells = useCallback(() => {\n    // Remove current selections\n    const newRowData = [...rowData];\n    for (let row = 0; row < rowData.length; row += 1) {\n      for (let cell = 0; cell < rowData[row].cells.length; cell += 1) {\n        newRowData[row].cells[cell].isSelected = false;\n      }\n    }\n\n    clearSelectedRow();\n    setRowData(newRowData);\n  }, [clearSelectedRow, rowData]);\n\n  const onCellRangeSelect = useCallback((cells) => {\n    const newRowData = [...rowData];\n\n    // Remove current selections\n    for (let row = 0; row < rowData.length; row += 1) {\n      newRowData[row].isSelected = false;\n      for (let cell = 0; cell < rowData[row].cells.length; cell += 1) {\n        newRowData[row].cells[cell].isSelected = false;\n      }\n    }\n\n    cells.forEach((cell) => {\n      const rowIndex = rowData.findIndex(e => e.id === cell.rowId);\n      const columnIndex = cols.findIndex(e => e.id === cell.columnId);\n\n      newRowData[rowIndex].cells[columnIndex].isSelected = true;\n    });\n\n    clearSelectedRow();\n    setRowData(newRowData);\n  }, [clearSelectedRow, cols, rowData]);\n\n  return (\n    <FlowsheetDataGrid\n      id=\"default-terra-flowsheet-data-grid\"\n      columns={cols}\n      rows={rowData}\n      ariaLabel=\"Flowsheet Data Grid\"\n      onCellSelect={onCellSelect}\n      onClearSelectedCells={onClearSelectedCells}\n      onCellRangeSelect={onCellRangeSelect}\n      onRowSelect={onRowSelect}\n    />\n  );\n};\n\nexport default RowSelection;\n\n")))}i.isMDXComponent=!0;var u=n(49271),m=function(e){var t=e.title,n=e.description,l=e.isExpanded;return a.createElement(u.Z,{title:t||"Row Selection",description:n,example:a.createElement(c.Z,null),exampleSrc:a.createElement(i,null),isExpanded:l})},f=["components"],w={},p="wrapper";function _(e){var t=e.components,n=(0,o.Z)(e,f);return(0,r.mdx)(p,(0,l.Z)({},w,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"row-selection"},"Row Selection"),(0,r.mdx)("h3",{id:"description"},"Description"),(0,r.mdx)("p",null,"This example demonstrates a Flowsheet Data Grid with row selection support by utilizing the following ",(0,r.mdx)("a",{parentName:"p",href:"/terra-framework/pull/1943/components/cerner-terra-framework-docs/data-grid/flowsheet-data-grid/about"},"properties"),":"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"The ",(0,r.mdx)("strong",{parentName:"li"},"onRowSelect")," callback prop: When the user selects a row header cell (a cell in the pinned first column), this callback will be called with an object containing the ",(0,r.mdx)("inlineCode",{parentName:"li"},"rowId")," and ",(0,r.mdx)("inlineCode",{parentName:"li"},"sectionId")," of the selected row.\nIn this example, the ",(0,r.mdx)("inlineCode",{parentName:"li"},"isSelected")," row property is toggled to true, adding highlighting to the selected row.")),(0,r.mdx)(m,{title:"Flowsheet Data Grid with Row Selection",mdxType:"RowSelection"}))}_.isMDXComponent=!0},33720:function(e,t,n){var l=n(64836),o=n(18698);t.Z=void 0;var a=l(n(861)),r=l(n(27424)),c=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=o(e)&&"function"!=typeof e)return{default:e};var n=s(t);if(n&&n.has(e))return n.get(e);var l={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var c=a?Object.getOwnPropertyDescriptor(e,r):null;c&&(c.get||c.set)?Object.defineProperty(l,r,c):l[r]=e[r]}return l.default=e,n&&n.set(e,l),l}(n(67294)),d=n(55730);function s(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(s=function(e){return e?n:t})(e)}t.Z=function(){var e=[{id:"Column-0",displayName:"Vitals"},{id:"Column-1",displayName:"March 16"},{id:"Column-2",displayName:"March 17"},{id:"Column-3",displayName:"March 18"}],t=[{id:"1",cells:[{content:"Heart Rate Monitored (bpm)"},{content:"68"},{content:"66"},{content:"67"}]},{id:"2",cells:[{content:"Temperature Oral (degC)"},{content:"36.7"},{content:"36.9"},{content:"37"}]},{id:"3",cells:[{content:"Cardiac Index (L/min/m2)"},{content:"2.25"},{content:"2.28"},{content:"2.8"}]},{id:"4",cells:[{content:"ICP (mmHg)"},{content:"11"},{content:"11"},{content:"12"}]},{id:"5",cells:[{content:"CPP (mmHg)"},{content:"63"},{content:"47"},{content:"48"}]}],n=(0,c.useState)(t),l=(0,r.default)(n,2),o=l[0],s=l[1],i=(0,c.useState)(void 0),u=(0,r.default)(i,2),m=u[0],f=u[1],w=(0,c.useCallback)((function(){m&&f(void 0)}),[m]),p=(0,c.useCallback)((function(e){var t=e.rowId;if(t){for(var n=o.findIndex((function(e){return e.id===t})),l=(0,a.default)(o),r=0;r<o.length;r+=1){l[r].isSelected=!1;for(var c=0;c<o[r].cells.length;c+=1)l[r].cells[c].isSelected=!1}m!==t?(l[n].isSelected=!0,f(t)):(l[n].isSelected=!1,w()),s(l)}}),[w,o,m]),_=(0,c.useCallback)((function(t,n){if(t&&n){for(var l=o.findIndex((function(e){return e.id===t})),r=e.findIndex((function(e){return e.id===n})),c=!1,d=(0,a.default)(o),i=0;i<o.length;i+=1){d[i].isSelected=!1;for(var u=0;u<o[i].cells.length;u+=1){var m=o[i].cells[u];!m.isSelected||i===l&&u===r||(m.isSelected=!1,c=!0)}}d[l].cells[r].isSelected=!o[l].cells[r].isSelected||c,w(),s(d)}}),[w,e,o]),h=(0,c.useCallback)((function(){for(var e=(0,a.default)(o),t=0;t<o.length;t+=1)for(var n=0;n<o[t].cells.length;n+=1)e[t].cells[n].isSelected=!1;w(),s(e)}),[w,o]),x=(0,c.useCallback)((function(t){for(var n=(0,a.default)(o),l=0;l<o.length;l+=1){n[l].isSelected=!1;for(var r=0;r<o[l].cells.length;r+=1)n[l].cells[r].isSelected=!1}t.forEach((function(t){var l=o.findIndex((function(e){return e.id===t.rowId})),a=e.findIndex((function(e){return e.id===t.columnId}));n[l].cells[a].isSelected=!0})),w(),s(n)}),[w,e,o]);return c.default.createElement(d.FlowsheetDataGrid,{id:"default-terra-flowsheet-data-grid",columns:e,rows:o,ariaLabel:"Flowsheet Data Grid",onCellSelect:_,onClearSelectedCells:h,onCellRangeSelect:x,onRowSelect:p})}},53560:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},87462:function(e,t,n){function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},l.apply(this,arguments)}n.d(t,{Z:function(){return l}})},44925:function(e,t,n){function l(e,t){if(null==e)return{};var n,l,o=function(e,t){if(null==e)return{};var n,l,o={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.d(t,{Z:function(){return l}})}}]);