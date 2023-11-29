"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[90760],{49271:function(e,t,n){var l=n(64836),a=n(18698);t.Z=void 0;var o=l(n(27424)),r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var l={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var c=o?Object.getOwnPropertyDescriptor(e,r):null;c&&(c.get||c.set)?Object.defineProperty(l,r,c):l[r]=e[r]}l.default=e,n&&n.set(e,l);return l}(n(67294)),c=l(n(45697)),i=l(n(47166)),d=n(21538),s=l(n(33864)),u=l(n(23399)),m=n(51051),p=l(n(53560));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}var h=i.default.bind(p.default),w={example:c.default.element,exampleSrc:c.default.element,exampleCssSrc:c.default.element,title:c.default.string,description:c.default.node,isExpanded:c.default.bool},x=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},g=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},_=function(e){var t=e.example,n=e.exampleSrc,l=e.exampleCssSrc,a=e.title,c=e.description,i=e.isExpanded,p=(0,r.useState)(i),f=(0,o.default)(p,2),w=f[0],_=f[1],b=(0,r.useState)(!1),C=(0,o.default)(b,2),S=C[0],v=C[1],y=r.default.useContext(d.ThemeContext),D=void 0!==l,N=function(){v(!S),w&&_(!w)},E=function(){_(!w),S&&v(!S)},I=function(e,t){e.nativeEvent.keyCode!==m.KEY_SPACE&&e.nativeEvent.keyCode!==m.KEY_RETURN||(e.preventDefault(),t())};return r.default.createElement("div",{className:h("template",y.className)},r.default.createElement("div",{className:h("header")},a&&r.default.createElement("h2",{className:h("title")},a)),r.default.createElement("div",{className:h("content")},c&&r.default.createElement("div",{className:h("description")},c),t),r.default.createElement("div",{className:h("footer")},n?r.default.createElement("div",{className:h("button-container")},D&&r.default.createElement("button",{type:"button",className:h("css-toggle","item",{"is-selected":S}),onClick:N,onKeyDown:function(e){return I(e,N)},onBlur:x,onMouseDown:g,tabIndex:0,"data-focus-styles-enabled":!0},r.default.createElement(s.default,{className:h("chevron")}),r.default.createElement("span",null,"CSS"),r.default.createElement(u.default,{className:h("chevron")})),r.default.createElement("button",{type:"button",className:h("code-toggle","item",{"is-selected":w}),onClick:E,onKeyDown:function(e){return I(e,E)},onBlur:x,onMouseDown:g,tabIndex:0,"data-focus-styles-enabled":!0},r.default.createElement(s.default,{className:h("chevron")}),r.default.createElement("span",null,"Code"),r.default.createElement(u.default,{className:h("chevron")}))):null,r.default.createElement("div",null,S&&r.default.createElement("div",{className:h("css")},l),w&&r.default.createElement("div",{className:h("code")},n))))};_.propTypes=w,_.defaultProps={isExpanded:!1};var b=_;t.Z=b},7615:function(e,t,n){n.r(t),n.d(t,{default:function(){return w}});var l=n(87462),a=n(44925),o=n(67294),r=n(81254),c=n(64393),i=["components"],d={};function s(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.mdx)("wrapper",(0,l.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React, { useState, useCallback } from 'react';\nimport { FlowsheetDataGrid } from 'terra-data-grid';\n\nconst CellSelection = () => {\n  const gridDataJSON = {\n    cols: [\n      { id: 'Column-0', displayName: 'Vitals' },\n      { id: 'Column-1', displayName: 'March 16' },\n      { id: 'Column-2', displayName: 'March 17' },\n      { id: 'Column-3', displayName: 'March 18' },\n    ],\n    rows: [\n      {\n        id: '1',\n        cells: [\n          { content: 'Heart Rate Monitored (bpm)' },\n          { content: '68' },\n          { content: '66' },\n          { content: '67' },\n        ],\n      },\n      {\n        id: '2',\n        cells: [\n          { content: 'Temperature Oral (degC)' },\n          { content: '36.7' },\n          { content: '36.9' },\n          { content: '37' },\n        ],\n      },\n      {\n        id: '3',\n        cells: [\n          { content: 'Cardiac Index (L/min/m2)' },\n          { content: '2.25' },\n          { content: '2.28' },\n          { content: '2.8' },\n        ],\n      },\n      {\n        id: '4',\n        cells: [\n          { content: 'ICP (mmHg)' },\n          { content: '11' },\n          { content: '11' },\n          { content: '12' },\n        ],\n      },\n      {\n        id: '5',\n        cells: [\n          { content: 'CPP (mmHg)' },\n          { content: '63' },\n          { content: '47' },\n          { content: '48' },\n        ],\n      },\n    ],\n  };\n\n  const { cols, rows } = gridDataJSON;\n  const [rowData, setRowData] = useState(rows);\n\n  const onCellSelect = useCallback((rowId, columnId) => {\n    if (rowId && columnId) {\n      const rowIndex = rowData.findIndex(e => e.id === rowId);\n      const columnIndex = cols.findIndex(e => e.id === columnId);\n      let otherSelectionsExist = false;\n\n      // Remove cell selections, excluding current cell\n      const newRowData = [...rowData];\n      for (let row = 0; row < rowData.length; row += 1) {\n        for (let cell = 0; cell < rowData[row].cells.length; cell += 1) {\n          const currentCell = rowData[row].cells[cell];\n          if (currentCell.isSelected && !(row === rowIndex && cell === columnIndex)) {\n            currentCell.isSelected = false;\n            otherSelectionsExist = true;\n          }\n        }\n      }\n\n      // If the current cell is the only selected cell, toggle it to unselected. Otherwise, set it to selected.\n      newRowData[rowIndex].cells[columnIndex].isSelected = !rowData[rowIndex].cells[columnIndex].isSelected || otherSelectionsExist;\n      setRowData(newRowData);\n    }\n  }, [cols, rowData]);\n\n  const onClearSelectedCells = useCallback(() => {\n    // Remove current selections\n    const newRowData = [...rowData];\n    for (let row = 0; row < rowData.length; row += 1) {\n      for (let cell = 0; cell < rowData[row].cells.length; cell += 1) {\n        newRowData[row].cells[cell].isSelected = false;\n      }\n    }\n\n    setRowData(newRowData);\n  }, [rowData]);\n\n  const onCellRangeSelect = useCallback((cells) => {\n    const newRowData = [...rowData];\n\n    // Remove current selections\n    for (let row = 0; row < rowData.length; row += 1) {\n      for (let cell = 0; cell < rowData[row].cells.length; cell += 1) {\n        newRowData[row].cells[cell].isSelected = false;\n      }\n    }\n\n    cells.forEach((cell) => {\n      const rowIndex = rowData.findIndex(e => e.id === cell.rowId);\n      const columnIndex = cols.findIndex(e => e.id === cell.columnId);\n\n      newRowData[rowIndex].cells[columnIndex].isSelected = true;\n    });\n\n    setRowData(newRowData);\n  }, [cols, rowData]);\n\n  return (\n    <FlowsheetDataGrid\n      id=\"default-terra-flowsheet-data-grid\"\n      columns={cols}\n      rows={rowData}\n      ariaLabel=\"Flowsheet Data Grid\"\n      onCellSelect={onCellSelect}\n      onClearSelectedCells={onClearSelectedCells}\n      onCellRangeSelect={onCellRangeSelect}\n    />\n  );\n};\n\nexport default CellSelection;\n\n")))}s.isMDXComponent=!0;var u=n(49271),m=function(e){var t=e.title,n=e.description,l=e.isExpanded;return o.createElement(u.Z,{title:t||"Cell Selection",description:n,example:o.createElement(c.Z,null),exampleSrc:o.createElement(s,null),isExpanded:l})},p=["components"],f={},h="wrapper";function w(e){var t=e.components,n=(0,a.Z)(e,p);return(0,r.mdx)(h,(0,l.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"cell-selection"},"Cell Selection"),(0,r.mdx)("h3",{id:"description"},"Description"),(0,r.mdx)("p",null,"This example demonstrates a Flowsheet Data Grid with cell selection support by utilizing the following ",(0,r.mdx)("a",{parentName:"p",href:"/terra-framework/pull/1903/components/cerner-terra-framework-docs/data-grid/flowsheet-data-grid/about"},"properties"),":"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"The ",(0,r.mdx)("strong",{parentName:"p"},"onCellSelect")," callback prop: When the user selects a cell, this callback will be called with the ",(0,r.mdx)("inlineCode",{parentName:"p"},"rowId")," and ",(0,r.mdx)("inlineCode",{parentName:"p"},"columnId")," of the selected cell.\nIn this example, the ",(0,r.mdx)("inlineCode",{parentName:"p"},"isSelected")," cell property is toggled to true, adding highlighting to the selected cell.")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"The ",(0,r.mdx)("strong",{parentName:"p"},"onCellRangeSelect")," callback prop: When the user selects a range of multiple cells at once, a (1-D) array of cell objects, each containing ",(0,r.mdx)("inlineCode",{parentName:"p"},"rowId")," and ",(0,r.mdx)("inlineCode",{parentName:"p"},"columnId")," properties, is the function parameter.\nIn this example, the ",(0,r.mdx)("inlineCode",{parentName:"p"},"isSelected")," cell property is toggled to true for each of the provided cells, adding highlighting to each cell.")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"The ",(0,r.mdx)("strong",{parentName:"p"},"onClearSelectedCells")," callback prop: When the user presses the Escape key, this callback gets called. In this example, the ",(0,r.mdx)("inlineCode",{parentName:"p"},"isSelected")," attribute of any selected cell is set to false and the Flowsheet Data Grid is re-rendered."))),(0,r.mdx)("h3",{id:"interactions"},"Interactions"),(0,r.mdx)("p",null,"When using this example, there are several ways to interact with the cells of the grid."),(0,r.mdx)("h4",{id:"single-cell-selection"},"Single Cell Selection"),(0,r.mdx)("p",null,"Selecting a single cell can be achieved by either of the following methods:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Click on a selectable cell. OR"),(0,r.mdx)("li",{parentName:"ul"},"Press Spacebar when focused on a selectable cell.")),(0,r.mdx)("h4",{id:"multi-cell-range-selection"},"Multi-Cell (Range) Selection"),(0,r.mdx)("p",null,"Selecting a range of multiple cells can be achieved by the following:"),(0,r.mdx)("ol",null,(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"Select a single cell (see ",(0,r.mdx)("a",{parentName:"p",href:"#single-cell-selection"},"Single Cell Selection"),"). AND")),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"Options include:"),(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"Hold Shift key and click on another selectable* cell. This will select the entire range of rows and columns between the selected and starting cell."),(0,r.mdx)("li",{parentName:"ul"},"Use the directional arrow keys to navigate the focus indicator, hold Shift key and press Spacebar on another selectable cell. This option will also select the range of rows and columns between the cells."),(0,r.mdx)("li",{parentName:"ul"},"Hold Shift key and use the directional arrow keys to expand the range of selected cells.")))),(0,r.mdx)("p",null,"*Both the column headers and the cells in the row header (leftmost) column are focusable but not selectable when in range selection mode."),(0,r.mdx)(m,{title:"Flowsheet Data Grid with Cell Selection",mdxType:"CellSelection"}))}w.isMDXComponent=!0},64393:function(e,t,n){var l=n(64836),a=n(18698);t.Z=void 0;var o=l(n(861)),r=l(n(27424)),c=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var n=d(t);if(n&&n.has(e))return n.get(e);var l={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var c=o?Object.getOwnPropertyDescriptor(e,r):null;c&&(c.get||c.set)?Object.defineProperty(l,r,c):l[r]=e[r]}return l.default=e,n&&n.set(e,l),l}(n(67294)),i=n(55730);function d(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(d=function(e){return e?n:t})(e)}t.Z=function(){var e=[{id:"Column-0",displayName:"Vitals"},{id:"Column-1",displayName:"March 16"},{id:"Column-2",displayName:"March 17"},{id:"Column-3",displayName:"March 18"}],t=[{id:"1",cells:[{content:"Heart Rate Monitored (bpm)"},{content:"68"},{content:"66"},{content:"67"}]},{id:"2",cells:[{content:"Temperature Oral (degC)"},{content:"36.7"},{content:"36.9"},{content:"37"}]},{id:"3",cells:[{content:"Cardiac Index (L/min/m2)"},{content:"2.25"},{content:"2.28"},{content:"2.8"}]},{id:"4",cells:[{content:"ICP (mmHg)"},{content:"11"},{content:"11"},{content:"12"}]},{id:"5",cells:[{content:"CPP (mmHg)"},{content:"63"},{content:"47"},{content:"48"}]}],n=(0,c.useState)(t),l=(0,r.default)(n,2),a=l[0],d=l[1],s=(0,c.useCallback)((function(t,n){if(t&&n){for(var l=a.findIndex((function(e){return e.id===t})),r=e.findIndex((function(e){return e.id===n})),c=!1,i=(0,o.default)(a),s=0;s<a.length;s+=1)for(var u=0;u<a[s].cells.length;u+=1){var m=a[s].cells[u];!m.isSelected||s===l&&u===r||(m.isSelected=!1,c=!0)}i[l].cells[r].isSelected=!a[l].cells[r].isSelected||c,d(i)}}),[e,a]),u=(0,c.useCallback)((function(){for(var e=(0,o.default)(a),t=0;t<a.length;t+=1)for(var n=0;n<a[t].cells.length;n+=1)e[t].cells[n].isSelected=!1;d(e)}),[a]),m=(0,c.useCallback)((function(t){for(var n=(0,o.default)(a),l=0;l<a.length;l+=1)for(var r=0;r<a[l].cells.length;r+=1)n[l].cells[r].isSelected=!1;t.forEach((function(t){var l=a.findIndex((function(e){return e.id===t.rowId})),o=e.findIndex((function(e){return e.id===t.columnId}));n[l].cells[o].isSelected=!0})),d(n)}),[e,a]);return c.default.createElement(i.FlowsheetDataGrid,{id:"default-terra-flowsheet-data-grid",columns:e,rows:a,ariaLabel:"Flowsheet Data Grid",onCellSelect:s,onClearSelectedCells:u,onCellRangeSelect:m})}},53560:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},87462:function(e,t,n){function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},l.apply(this,arguments)}n.d(t,{Z:function(){return l}})},44925:function(e,t,n){function l(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},o=Object.keys(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}n.d(t,{Z:function(){return l}})}}]);