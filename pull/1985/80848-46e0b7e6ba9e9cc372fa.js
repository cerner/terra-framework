"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[80848],{33792:function(e,t,n){var l=n(22411),a=n(59848);t.c=void 0;var o=l(n(97936)),c=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var l={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in e)if("default"!==c&&Object.prototype.hasOwnProperty.call(e,c)){var r=o?Object.getOwnPropertyDescriptor(e,c):null;r&&(r.get||r.set)?Object.defineProperty(l,c,r):l[c]=e[c]}return l.default=e,n&&n.set(e,l),l}(n(11504)),r=l(n(3268)),i=l(n(74824)),d=n(93048),s=l(n(72672)),u=l(n(3308)),m=n(97196),p=l(n(86896));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}var h=i.default.bind(p.default),w={example:r.default.element,exampleSrc:r.default.element,exampleCssSrc:r.default.element,title:r.default.string,description:r.default.node,isExpanded:r.default.bool},x=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},g=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},_=function(e){var t=e.example,n=e.exampleSrc,l=e.exampleCssSrc,a=e.title,r=e.description,i=e.isExpanded,p=(0,c.useState)(i),f=(0,o.default)(p,2),w=f[0],_=f[1],C=(0,c.useState)(!1),b=(0,o.default)(C,2),S=b[0],v=b[1],y=c.default.useContext(d.ThemeContext),D=void 0!==l,N=function(){v(!S),w&&_(!w)},E=function(){_(!w),S&&v(!S)},I=function(e,t){e.nativeEvent.keyCode!==m.KEY_SPACE&&e.nativeEvent.keyCode!==m.KEY_RETURN||(e.preventDefault(),t())};return c.default.createElement("div",{className:h("template",y.className)},c.default.createElement("div",{className:h("header")},a&&c.default.createElement("h2",{className:h("title")},a)),c.default.createElement("div",{className:h("content")},r&&c.default.createElement("div",{className:h("description")},r),t),c.default.createElement("div",{className:h("footer")},n?c.default.createElement("div",{className:h("button-container")},D&&c.default.createElement("button",{type:"button",className:h("css-toggle","item",{"is-selected":S}),onClick:N,onKeyDown:function(e){return I(e,N)},onBlur:x,onMouseDown:g,tabIndex:0,"data-focus-styles-enabled":!0},c.default.createElement(s.default,{className:h("chevron")}),c.default.createElement("span",null,"CSS"),c.default.createElement(u.default,{className:h("chevron")})),c.default.createElement("button",{type:"button",className:h("code-toggle","item",{"is-selected":w}),onClick:E,onKeyDown:function(e){return I(e,E)},onBlur:x,onMouseDown:g,tabIndex:0,"data-focus-styles-enabled":!0},c.default.createElement(s.default,{className:h("chevron")}),c.default.createElement("span",null,"Code"),c.default.createElement(u.default,{className:h("chevron")}))):null,c.default.createElement("div",null,S&&c.default.createElement("div",{className:h("css")},l),w&&c.default.createElement("div",{className:h("code")},n))))};_.propTypes=w,_.defaultProps={isExpanded:!1};t.c=_},53796:function(e,t,n){n.r(t),n.d(t,{default:function(){return w}});var l=n(45072),a=n(52822),o=n(11504),c=n(69788),r=n(59332),i=["components"],d={};function s(e){var t=e.components,n=(0,a.c)(e,i);return(0,c.mdx)("wrapper",(0,l.c)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,c.mdx)("pre",null,(0,c.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React, { useState, useCallback } from 'react';\nimport { FlowsheetDataGrid } from 'terra-data-grid';\n\nconst CellSelection = () => {\n  const gridDataJSON = {\n    cols: [\n      { id: 'Column-0', displayName: 'Vitals' },\n      { id: 'Column-1', displayName: 'March 16' },\n      { id: 'Column-2', displayName: 'March 17' },\n      { id: 'Column-3', displayName: 'March 18' },\n    ],\n    rows: [\n      {\n        id: '1',\n        cells: [\n          { content: 'Heart Rate Monitored (bpm)' },\n          { content: '68' },\n          { content: '66' },\n          { content: '67' },\n        ],\n      },\n      {\n        id: '2',\n        cells: [\n          { content: 'Temperature Oral (degC)' },\n          { content: '36.7' },\n          { content: '36.9' },\n          { content: '37' },\n        ],\n      },\n      {\n        id: '3',\n        cells: [\n          { content: 'Cardiac Index (L/min/m2)' },\n          { content: '2.25' },\n          { content: '2.28' },\n          { content: '2.8' },\n        ],\n      },\n      {\n        id: '4',\n        cells: [\n          { content: 'ICP (mmHg)' },\n          { content: '11' },\n          { content: '11' },\n          { content: '12' },\n        ],\n      },\n      {\n        id: '5',\n        cells: [\n          { content: 'CPP (mmHg)' },\n          { content: '63' },\n          { content: '47' },\n          { content: '48' },\n        ],\n      },\n    ],\n  };\n\n  const { cols, rows } = gridDataJSON;\n  const [rowData, setRowData] = useState(rows);\n\n  const onCellSelect = useCallback((selectedCell) => {\n    if (selectedCell.rowId && selectedCell.columnId) {\n      const rowIndex = rowData.findIndex(e => e.id === selectedCell.rowId);\n      const columnIndex = cols.findIndex(e => e.id === selectedCell.columnId);\n      let otherSelectionsExist = false;\n\n      // Remove cell selections, excluding current cell\n      const newRowData = [...rowData];\n      for (let row = 0; row < rowData.length; row += 1) {\n        for (let cell = 0; cell < rowData[row].cells.length; cell += 1) {\n          const currentCell = rowData[row].cells[cell];\n          if (currentCell.isSelected && !(row === rowIndex && cell === columnIndex) && !selectedCell.isMetaPressed) {\n            currentCell.isSelected = false;\n            otherSelectionsExist = true;\n          }\n        }\n      }\n\n      // If the current cell is the only selected cell, toggle it to unselected. Otherwise, set it to selected.\n      newRowData[rowIndex].cells[columnIndex].isSelected = !rowData[rowIndex].cells[columnIndex].isSelected || otherSelectionsExist;\n      setRowData(newRowData);\n    }\n  }, [cols, rowData]);\n\n  const onClearSelectedCells = useCallback(() => {\n    // Remove current selections\n    const newRowData = [...rowData];\n    for (let row = 0; row < rowData.length; row += 1) {\n      for (let cell = 0; cell < rowData[row].cells.length; cell += 1) {\n        newRowData[row].cells[cell].isSelected = false;\n      }\n    }\n\n    setRowData(newRowData);\n  }, [rowData]);\n\n  const onCellRangeSelect = useCallback((cells) => {\n    const newRowData = [...rowData];\n\n    // Remove current selections\n    for (let row = 0; row < rowData.length; row += 1) {\n      for (let cell = 0; cell < rowData[row].cells.length; cell += 1) {\n        newRowData[row].cells[cell].isSelected = false;\n      }\n    }\n\n    cells.forEach((cell) => {\n      const rowIndex = rowData.findIndex(e => e.id === cell.rowId);\n      const columnIndex = cols.findIndex(e => e.id === cell.columnId);\n\n      newRowData[rowIndex].cells[columnIndex].isSelected = true;\n    });\n\n    setRowData(newRowData);\n  }, [cols, rowData]);\n\n  return (\n    <FlowsheetDataGrid\n      id=\"default-terra-flowsheet-data-grid\"\n      columns={cols}\n      rows={rowData}\n      ariaLabel=\"Flowsheet Data Grid\"\n      onCellSelect={onCellSelect}\n      onClearSelectedCells={onClearSelectedCells}\n      onCellRangeSelect={onCellRangeSelect}\n    />\n  );\n};\n\nexport default CellSelection;\n\n")))}s.isMDXComponent=!0;var u=n(33792),m=function(e){var t=e.title,n=e.description,l=e.isExpanded;return o.createElement(u.c,{title:t||"Cell Selection",description:n,example:o.createElement(r.c,null),exampleSrc:o.createElement(s,null),isExpanded:l})},p=["components"],f={},h="wrapper";function w(e){var t=e.components,n=(0,a.c)(e,p);return(0,c.mdx)(h,(0,l.c)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,c.mdx)("h1",{id:"cell-selection"},"Cell Selection"),(0,c.mdx)("h3",{id:"description"},"Description"),(0,c.mdx)("p",null,"This example demonstrates a Flowsheet Data Grid with cell selection support by utilizing the following ",(0,c.mdx)("a",{parentName:"p",href:"/terra-framework/pull/1985/components/cerner-terra-framework-docs/data-grid/flowsheet-data-grid/about"},"properties"),":"),(0,c.mdx)("ul",null,(0,c.mdx)("li",{parentName:"ul"},(0,c.mdx)("p",{parentName:"li"},"The ",(0,c.mdx)("strong",{parentName:"p"},"onCellSelect")," callback prop: When the user selects a cell, this callback will be called with the ",(0,c.mdx)("inlineCode",{parentName:"p"},"rowId")," and ",(0,c.mdx)("inlineCode",{parentName:"p"},"columnId")," of the selected cell.\nIn this example, the ",(0,c.mdx)("inlineCode",{parentName:"p"},"isSelected")," cell property is toggled to true, adding highlighting to the selected cell.")),(0,c.mdx)("li",{parentName:"ul"},(0,c.mdx)("p",{parentName:"li"},"The ",(0,c.mdx)("strong",{parentName:"p"},"onCellRangeSelect")," callback prop: When the user selects a range of multiple cells at once, a (1-D) array of cell objects, each containing ",(0,c.mdx)("inlineCode",{parentName:"p"},"rowId")," and ",(0,c.mdx)("inlineCode",{parentName:"p"},"columnId")," properties, is the function parameter.\nIn this example, the ",(0,c.mdx)("inlineCode",{parentName:"p"},"isSelected")," cell property is toggled to true for each of the provided cells, adding highlighting to each cell.")),(0,c.mdx)("li",{parentName:"ul"},(0,c.mdx)("p",{parentName:"li"},"The ",(0,c.mdx)("strong",{parentName:"p"},"onClearSelectedCells")," callback prop: When the user presses the Escape key, this callback gets called. In this example, the ",(0,c.mdx)("inlineCode",{parentName:"p"},"isSelected")," attribute of any selected cell is set to false and the Flowsheet Data Grid is re-rendered."))),(0,c.mdx)("h3",{id:"interactions"},"Interactions"),(0,c.mdx)("p",null,"When using this example, there are several ways to interact with the cells of the grid."),(0,c.mdx)("h4",{id:"single-cell-selection"},"Single Cell Selection"),(0,c.mdx)("p",null,"Selecting a single cell can be achieved by either of the following methods:"),(0,c.mdx)("ul",null,(0,c.mdx)("li",{parentName:"ul"},"Click on a selectable cell. OR"),(0,c.mdx)("li",{parentName:"ul"},"Press Spacebar when focused on a selectable cell.")),(0,c.mdx)("h4",{id:"multi-cell-range-selection"},"Multi-Cell (Range) Selection"),(0,c.mdx)("p",null,"Selecting a range of multiple cells can be achieved by the following:"),(0,c.mdx)("ol",null,(0,c.mdx)("li",{parentName:"ol"},(0,c.mdx)("p",{parentName:"li"},"Select a single cell (see ",(0,c.mdx)("a",{parentName:"p",href:"#single-cell-selection"},"Single Cell Selection"),"). AND")),(0,c.mdx)("li",{parentName:"ol"},(0,c.mdx)("p",{parentName:"li"},"Options include:"),(0,c.mdx)("ul",{parentName:"li"},(0,c.mdx)("li",{parentName:"ul"},"Hold Shift key and click on another selectable* cell. This will select the entire range of rows and columns between the selected and starting cell."),(0,c.mdx)("li",{parentName:"ul"},"Use the directional arrow keys to navigate the focus indicator, hold Shift key and press Spacebar on another selectable cell. This option will also select the range of rows and columns between the cells."),(0,c.mdx)("li",{parentName:"ul"},"Hold Shift key and use the directional arrow keys to expand the range of selected cells.")))),(0,c.mdx)("p",null,"*Both the column headers and the cells in the row header (leftmost) column are focusable but not selectable when in range selection mode."),(0,c.mdx)(m,{title:"Flowsheet Data Grid with Cell Selection",mdxType:"CellSelection"}))}w.isMDXComponent=!0},59332:function(e,t,n){var l=n(22411),a=n(59848);t.c=void 0;var o=l(n(25724)),c=l(n(97936)),r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var n=d(t);if(n&&n.has(e))return n.get(e);var l={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in e)if("default"!==c&&Object.prototype.hasOwnProperty.call(e,c)){var r=o?Object.getOwnPropertyDescriptor(e,c):null;r&&(r.get||r.set)?Object.defineProperty(l,c,r):l[c]=e[c]}return l.default=e,n&&n.set(e,l),l}(n(11504)),i=n(15920);function d(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(d=function(e){return e?n:t})(e)}t.c=function(){var e=[{id:"Column-0",displayName:"Vitals"},{id:"Column-1",displayName:"March 16"},{id:"Column-2",displayName:"March 17"},{id:"Column-3",displayName:"March 18"}],t=[{id:"1",cells:[{content:"Heart Rate Monitored (bpm)"},{content:"68"},{content:"66"},{content:"67"}]},{id:"2",cells:[{content:"Temperature Oral (degC)"},{content:"36.7"},{content:"36.9"},{content:"37"}]},{id:"3",cells:[{content:"Cardiac Index (L/min/m2)"},{content:"2.25"},{content:"2.28"},{content:"2.8"}]},{id:"4",cells:[{content:"ICP (mmHg)"},{content:"11"},{content:"11"},{content:"12"}]},{id:"5",cells:[{content:"CPP (mmHg)"},{content:"63"},{content:"47"},{content:"48"}]}],n=(0,r.useState)(t),l=(0,c.default)(n,2),a=l[0],d=l[1],s=(0,r.useCallback)((function(t){if(t.rowId&&t.columnId){for(var n=a.findIndex((function(e){return e.id===t.rowId})),l=e.findIndex((function(e){return e.id===t.columnId})),c=!1,r=(0,o.default)(a),i=0;i<a.length;i+=1)for(var s=0;s<a[i].cells.length;s+=1){var u=a[i].cells[s];!u.isSelected||i===n&&s===l||t.isMetaPressed||(u.isSelected=!1,c=!0)}r[n].cells[l].isSelected=!a[n].cells[l].isSelected||c,d(r)}}),[e,a]),u=(0,r.useCallback)((function(){for(var e=(0,o.default)(a),t=0;t<a.length;t+=1)for(var n=0;n<a[t].cells.length;n+=1)e[t].cells[n].isSelected=!1;d(e)}),[a]),m=(0,r.useCallback)((function(t){for(var n=(0,o.default)(a),l=0;l<a.length;l+=1)for(var c=0;c<a[l].cells.length;c+=1)n[l].cells[c].isSelected=!1;t.forEach((function(t){var l=a.findIndex((function(e){return e.id===t.rowId})),o=e.findIndex((function(e){return e.id===t.columnId}));n[l].cells[o].isSelected=!0})),d(n)}),[e,a]);return r.default.createElement(i.FlowsheetDataGrid,{id:"default-terra-flowsheet-data-grid",columns:e,rows:a,ariaLabel:"Flowsheet Data Grid",onCellSelect:s,onClearSelectedCells:u,onCellRangeSelect:m})}},86896:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},45072:function(e,t,n){function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},l.apply(this,arguments)}n.d(t,{c:function(){return l}})},52822:function(e,t,n){function l(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},o=Object.keys(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}n.d(t,{c:function(){return l}})}}]);