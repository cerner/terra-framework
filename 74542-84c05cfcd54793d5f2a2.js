"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[74542],{201:function(e,n,t){var l=t(24994),o=t(73738);n.A=void 0;var a=l(t(85715)),c=function(e,n){if(!n&&e&&e.__esModule)return e;if(null===e||"object"!=o(e)&&"function"!=typeof e)return{default:e};var t=f(n);if(t&&t.has(e))return t.get(e);var l={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in e)if("default"!==c&&Object.prototype.hasOwnProperty.call(e,c)){var r=a?Object.getOwnPropertyDescriptor(e,c):null;r&&(r.get||r.set)?Object.defineProperty(l,c,r):l[c]=e[c]}return l.default=e,t&&t.set(e,l),l}(t(96540)),r=l(t(5556)),s=l(t(67967)),i=t(92912),d=l(t(49558)),u=l(t(53665)),m=t(25966),p=l(t(89986));function f(e){if("function"!=typeof WeakMap)return null;var n=new WeakMap,t=new WeakMap;return(f=function(e){return e?t:n})(e)}var w=s.default.bind(p.default),h={example:r.default.element,exampleSrc:r.default.element,exampleCssSrc:r.default.element,title:r.default.string,description:r.default.node,isExpanded:r.default.bool},_=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},C=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},x=function(e){var n=e.example,t=e.exampleSrc,l=e.exampleCssSrc,o=e.title,r=e.description,s=e.isExpanded,p=(0,c.useState)(s),f=(0,a.default)(p,2),h=f[0],x=f[1],g=(0,c.useState)(!1),v=(0,a.default)(g,2),b=v[0],y=v[1],S=c.default.useContext(i.ThemeContext),D=void 0!==l,E=function(){y(!b),h&&x(!h)},N=function(){x(!h),b&&y(!b)},M=function(e,n){e.nativeEvent.keyCode!==m.KEY_SPACE&&e.nativeEvent.keyCode!==m.KEY_RETURN||(e.preventDefault(),n())};return c.default.createElement("div",{className:w("template",S.className)},c.default.createElement("div",{className:w("header")},o&&c.default.createElement("h2",{className:w("title")},o)),c.default.createElement("div",{className:w("content")},r&&c.default.createElement("div",{className:w("description")},r),n),c.default.createElement("div",{className:w("footer")},t?c.default.createElement("div",{className:w("button-container")},D&&c.default.createElement("button",{type:"button",className:w("css-toggle","item",{"is-selected":b}),onClick:E,onKeyDown:function(e){return M(e,E)},onBlur:_,onMouseDown:C,tabIndex:0,"data-focus-styles-enabled":!0},c.default.createElement(d.default,{className:w("chevron")}),c.default.createElement("span",null,"CSS"),c.default.createElement(u.default,{className:w("chevron")})),c.default.createElement("button",{type:"button",className:w("code-toggle","item",{"is-selected":h}),onClick:N,onKeyDown:function(e){return M(e,N)},onBlur:_,onMouseDown:C,tabIndex:0,"data-focus-styles-enabled":!0},c.default.createElement(d.default,{className:w("chevron")}),c.default.createElement("span",null,"Code"),c.default.createElement(u.default,{className:w("chevron")}))):null,c.default.createElement("div",null,b&&c.default.createElement("div",{className:w("css")},l),h&&c.default.createElement("div",{className:w("code")},t))))};x.propTypes=h,x.defaultProps={isExpanded:!1};n.A=x},50222:function(e,n,t){t.r(n),t.d(n,{default:function(){return h}});var l=t(58168),o=t(53986),a=t(96540),c=t(36665),r=t(78201),s=["components"],i={};function d(e){var n=e.components,t=(0,o.A)(e,s);return(0,c.mdx)("wrapper",(0,l.A)({},i,t,{components:n,mdxType:"MDXLayout"}),(0,c.mdx)("pre",null,(0,c.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React, { useState, useCallback } from 'react';\nimport { FlowsheetDataGrid } from 'terra-data-grid';\n\nconst gridDataJSON = {\n  cols: [\n    { id: 'Column-0', displayName: 'Vitals' },\n    {\n      id: 'Column-1',\n      displayName: 'March 16',\n      columnSpan: 2,\n      action: {\n        label: 'March 16 action',\n        // eslint-disable-next-line no-alert\n        onClick: () => alert('March 16 action called'),\n      },\n    },\n    {\n      id: 'Column-2',\n      displayName: 'March 17',\n      columnSpan: 2,\n      action: {\n        label: 'March 17 action',\n        // eslint-disable-next-line no-alert\n        onClick: () => alert('March 17 action called'),\n      },\n    },\n    { id: 'Column-3', displayName: 'March 18', columnSpan: 3 },\n    { id: 'Column-4', displayName: 'March 19' },\n    { id: 'Column-5', displayName: 'March 20' },\n    { id: 'Column-6', displayName: 'March 21' },\n    { id: 'Column-7', displayName: 'March 22' },\n  ],\n  rows: [\n    {\n      id: '1',\n      cells: [\n        { content: 'Heart Rate Monitored (bpm)' },\n        { content: '68' },\n        { content: '69' },\n        { content: '66' },\n        { content: '68' },\n        { content: '69' },\n        { content: '67' },\n        { content: '69' },\n        { content: '68' },\n        { content: '69' },\n        { content: '67' },\n        { content: '69' },\n      ],\n    },\n    {\n      id: '2',\n      cells: [\n        { content: 'Temperature Oral (degC)' },\n        { content: '36.7' },\n        { content: '36.9' },\n        { content: '36.7' },\n        { content: '37' },\n        { content: '36.7' },\n        { content: '37' },\n        { content: '36.7' },\n        { content: '37' },\n        { content: '36.7' },\n        { content: '37' },\n        { content: '36.7' },\n      ],\n    },\n    {\n      id: '3',\n      cells: [\n        { content: 'Cardiac Index (L/min/m2)' },\n        { content: '2.25' },\n        { content: '2.28' },\n        { content: '2.25' },\n        { content: '2.8' },\n        { content: '2.25' },\n        { content: '2.8' },\n        { content: '2.25' },\n        { content: '2.8' },\n        { content: '2.25' },\n        { content: '2.8' },\n        { content: '2.25' },\n      ],\n    },\n    {\n      id: '4',\n      cells: [\n        { content: 'ICP (mmHg)' },\n        { content: '11' },\n        { content: '12' },\n        { content: '11' },\n        { content: '12' },\n        { content: '13' },\n        { content: '14' },\n        { content: '13' },\n        { content: '12' },\n        { content: '13' },\n        { content: '14' },\n        { content: '13' },\n      ],\n    },\n    {\n      id: '5',\n      cells: [\n        { content: 'CPP (mmHg)' },\n        { content: '63' },\n        { content: '47' },\n        { content: '63' },\n        { content: '48' },\n        { content: '63' },\n        { content: '47' },\n        { content: '63' },\n        { content: '48' },\n        { content: '63' },\n        { content: '47' },\n        { content: '63' },\n      ],\n    },\n  ],\n};\n\nconst FlowsheetWithColumnSpan = () => {\n  const { cols, rows } = gridDataJSON;\n\n  const [rowData, setRowData] = useState(rows);\n\n  const onCellSelect = useCallback((selectedCell) => {\n    if (selectedCell.rowId && selectedCell.columnId) {\n      const rowIndex = rowData.findIndex(e => e.id === selectedCell.rowId);\n      const { columnIndex } = selectedCell;\n      let otherSelectionsExist = false;\n      // Remove cell selections, excluding current cell\n      const newRowData = [...rowData];\n      for (let row = 0; row < rowData.length; row += 1) {\n        for (let cell = 0; cell < rowData[row].cells.length; cell += 1) {\n          const currentCell = rowData[row].cells[cell];\n          if (currentCell.isSelected && !(row === rowIndex && cell === columnIndex) && !selectedCell.isMetaPressed) {\n            currentCell.isSelected = false;\n            otherSelectionsExist = true;\n          }\n        }\n      }\n\n      // If the current cell is the only selected cell, toggle it to unselected. Otherwise, set it to selected.\n      newRowData[rowIndex].cells[columnIndex].isSelected = !rowData[rowIndex].cells[columnIndex].isSelected || otherSelectionsExist;\n      setRowData(newRowData);\n    }\n  }, [rowData]);\n\n  const onClearSelectedCells = useCallback(() => {\n    // Remove current selections\n    const newRowData = [...rowData];\n    for (let row = 0; row < rowData.length; row += 1) {\n      for (let cell = 0; cell < rowData[row].cells.length; cell += 1) {\n        newRowData[row].cells[cell].isSelected = false;\n      }\n    }\n    setRowData(newRowData);\n  }, [rowData]);\n\n  const onCellRangeSelect = useCallback((cells) => {\n    const newRowData = [...rowData];\n\n    // Remove current selections\n    for (let row = 0; row < rowData.length; row += 1) {\n      for (let cell = 0; cell < rowData[row].cells.length; cell += 1) {\n        newRowData[row].cells[cell].isSelected = false;\n      }\n    }\n\n    cells.forEach((cell) => {\n      const rowIndex = rowData.findIndex(e => e.id === cell.rowId);\n      const { columnIndex } = cell;\n\n      newRowData[rowIndex].cells[columnIndex].isSelected = true;\n    });\n\n    setRowData(newRowData);\n  }, [rowData]);\n\n  return (\n    <FlowsheetDataGrid\n      id=\"flowsheet-with-column-span-actions\"\n      columns={cols}\n      rows={rowData}\n      ariaLabel=\"Flowsheet Data Grid\"\n      onCellSelect={onCellSelect}\n      onClearSelectedCells={onClearSelectedCells}\n      onCellRangeSelect={onCellRangeSelect}\n    />\n  );\n};\n\nexport default FlowsheetWithColumnSpan;\n\n")))}d.isMDXComponent=!0;var u=t(201),m=function(e){var n=e.title,t=e.description,l=e.isExpanded;return a.createElement(u.A,{title:n||"Flowsheet With Column Span Actions",description:t,example:a.createElement(r.A,null),exampleSrc:a.createElement(d,null),isExpanded:l})},p=["components"],f={},w="wrapper";function h(e){var n=e.components,t=(0,o.A)(e,p);return(0,c.mdx)(w,(0,l.A)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,c.mdx)("h1",{id:"flowsheet-data-grid-with-column-span-and-actions"},"Flowsheet Data Grid With Column Span and Actions"),(0,c.mdx)("h3",{id:"description"},"Description"),(0,c.mdx)("p",null,"This example demonstrates a ",(0,c.mdx)("a",{parentName:"p",href:"/terra-framework/components/cerner-terra-framework-docs/data-grid/flowsheet-data-grid/about"},"Flowsheet Data Grid")," with column span and actions support."),(0,c.mdx)(m,{title:"Flowsheet Data Grid With Column Span Actions",mdxType:"FlowsheetWithColumnSpanActions"}),(0,c.mdx)("p",null,"Note: Column Highlighting is not supported for columns with column span."))}h.isMDXComponent=!0},78201:function(e,n,t){var l=t(24994),o=t(73738);n.A=void 0;var a=l(t(41132)),c=l(t(85715)),r=function(e,n){if(!n&&e&&e.__esModule)return e;if(null===e||"object"!=o(e)&&"function"!=typeof e)return{default:e};var t=i(n);if(t&&t.has(e))return t.get(e);var l={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in e)if("default"!==c&&{}.hasOwnProperty.call(e,c)){var r=a?Object.getOwnPropertyDescriptor(e,c):null;r&&(r.get||r.set)?Object.defineProperty(l,c,r):l[c]=e[c]}return l.default=e,t&&t.set(e,l),l}(t(96540)),s=t(45663);function i(e){if("function"!=typeof WeakMap)return null;var n=new WeakMap,t=new WeakMap;return(i=function(e){return e?t:n})(e)}var d={cols:[{id:"Column-0",displayName:"Vitals"},{id:"Column-1",displayName:"March 16",columnSpan:2,action:{label:"March 16 action",onClick:function(){return alert("March 16 action called")}}},{id:"Column-2",displayName:"March 17",columnSpan:2,action:{label:"March 17 action",onClick:function(){return alert("March 17 action called")}}},{id:"Column-3",displayName:"March 18",columnSpan:3},{id:"Column-4",displayName:"March 19"},{id:"Column-5",displayName:"March 20"},{id:"Column-6",displayName:"March 21"},{id:"Column-7",displayName:"March 22"}],rows:[{id:"1",cells:[{content:"Heart Rate Monitored (bpm)"},{content:"68"},{content:"69"},{content:"66"},{content:"68"},{content:"69"},{content:"67"},{content:"69"},{content:"68"},{content:"69"},{content:"67"},{content:"69"}]},{id:"2",cells:[{content:"Temperature Oral (degC)"},{content:"36.7"},{content:"36.9"},{content:"36.7"},{content:"37"},{content:"36.7"},{content:"37"},{content:"36.7"},{content:"37"},{content:"36.7"},{content:"37"},{content:"36.7"}]},{id:"3",cells:[{content:"Cardiac Index (L/min/m2)"},{content:"2.25"},{content:"2.28"},{content:"2.25"},{content:"2.8"},{content:"2.25"},{content:"2.8"},{content:"2.25"},{content:"2.8"},{content:"2.25"},{content:"2.8"},{content:"2.25"}]},{id:"4",cells:[{content:"ICP (mmHg)"},{content:"11"},{content:"12"},{content:"11"},{content:"12"},{content:"13"},{content:"14"},{content:"13"},{content:"12"},{content:"13"},{content:"14"},{content:"13"}]},{id:"5",cells:[{content:"CPP (mmHg)"},{content:"63"},{content:"47"},{content:"63"},{content:"48"},{content:"63"},{content:"47"},{content:"63"},{content:"48"},{content:"63"},{content:"47"},{content:"63"}]}]};n.A=function(){var e=d.cols,n=d.rows,t=(0,r.useState)(n),l=(0,c.default)(t,2),o=l[0],i=l[1],u=(0,r.useCallback)((function(e){if(e.rowId&&e.columnId){for(var n=o.findIndex((function(n){return n.id===e.rowId})),t=e.columnIndex,l=!1,c=(0,a.default)(o),r=0;r<o.length;r+=1)for(var s=0;s<o[r].cells.length;s+=1){var d=o[r].cells[s];!d.isSelected||r===n&&s===t||e.isMetaPressed||(d.isSelected=!1,l=!0)}c[n].cells[t].isSelected=!o[n].cells[t].isSelected||l,i(c)}}),[o]),m=(0,r.useCallback)((function(){for(var e=(0,a.default)(o),n=0;n<o.length;n+=1)for(var t=0;t<o[n].cells.length;t+=1)e[n].cells[t].isSelected=!1;i(e)}),[o]),p=(0,r.useCallback)((function(e){for(var n=(0,a.default)(o),t=0;t<o.length;t+=1)for(var l=0;l<o[t].cells.length;l+=1)n[t].cells[l].isSelected=!1;e.forEach((function(e){var t=o.findIndex((function(n){return n.id===e.rowId})),l=e.columnIndex;n[t].cells[l].isSelected=!0})),i(n)}),[o]);return r.default.createElement(s.FlowsheetDataGrid,{id:"flowsheet-with-column-span-actions",columns:e,rows:o,ariaLabel:"Flowsheet Data Grid",onCellSelect:u,onClearSelectedCells:m,onCellRangeSelect:p})}},89986:function(e,n,t){t.r(n),n.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},58168:function(e,n,t){function l(){return l=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e},l.apply(this,arguments)}t.d(n,{A:function(){return l}})},53986:function(e,n,t){function l(e,n){if(null==e)return{};var t,l,o=function(e,n){if(null==e)return{};var t,l,o={},a=Object.keys(e);for(l=0;l<a.length;l++)t=a[l],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)t=a[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}t.d(n,{A:function(){return l}})}}]);