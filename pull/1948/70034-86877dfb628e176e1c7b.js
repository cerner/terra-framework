"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[70034,33377,43089,37703],{49271:function(e,t,n){var l=n(64836),a=n(18698);t.Z=void 0;var o=l(n(27424)),r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var n=p(t);if(n&&n.has(e))return n.get(e);var l={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var c=o?Object.getOwnPropertyDescriptor(e,r):null;c&&(c.get||c.set)?Object.defineProperty(l,r,c):l[r]=e[r]}l.default=e,n&&n.set(e,l);return l}(n(67294)),c=l(n(45697)),d=l(n(47166)),s=n(21538),i=l(n(33864)),u=l(n(23399)),m=n(51051),f=l(n(53560));function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(p=function(e){return e?n:t})(e)}var w=d.default.bind(f.default),h={example:c.default.element,exampleSrc:c.default.element,exampleCssSrc:c.default.element,title:c.default.string,description:c.default.node,isExpanded:c.default.bool},_=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},x=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},C=function(e){var t=e.example,n=e.exampleSrc,l=e.exampleCssSrc,a=e.title,c=e.description,d=e.isExpanded,f=(0,r.useState)(d),p=(0,o.default)(f,2),h=p[0],C=p[1],g=(0,r.useState)(!1),b=(0,o.default)(g,2),v=b[0],D=b[1],y=r.default.useContext(s.ThemeContext),E=void 0!==l,S=function(){D(!v),h&&C(!h)},N=function(){C(!h),v&&D(!v)},I=function(e,t){e.nativeEvent.keyCode!==m.KEY_SPACE&&e.nativeEvent.keyCode!==m.KEY_RETURN||(e.preventDefault(),t())};return r.default.createElement("div",{className:w("template",y.className)},r.default.createElement("div",{className:w("header")},a&&r.default.createElement("h2",{className:w("title")},a)),r.default.createElement("div",{className:w("content")},c&&r.default.createElement("div",{className:w("description")},c),t),r.default.createElement("div",{className:w("footer")},n?r.default.createElement("div",{className:w("button-container")},E&&r.default.createElement("button",{type:"button",className:w("css-toggle","item",{"is-selected":v}),onClick:S,onKeyDown:function(e){return I(e,S)},onBlur:_,onMouseDown:x,tabIndex:0,"data-focus-styles-enabled":!0},r.default.createElement(i.default,{className:w("chevron")}),r.default.createElement("span",null,"CSS"),r.default.createElement(u.default,{className:w("chevron")})),r.default.createElement("button",{type:"button",className:w("code-toggle","item",{"is-selected":h}),onClick:N,onKeyDown:function(e){return I(e,N)},onBlur:_,onMouseDown:x,tabIndex:0,"data-focus-styles-enabled":!0},r.default.createElement(i.default,{className:w("chevron")}),r.default.createElement("span",null,"Code"),r.default.createElement(u.default,{className:w("chevron")}))):null,r.default.createElement("div",null,v&&r.default.createElement("div",{className:w("css")},l),h&&r.default.createElement("div",{className:w("code")},n))))};C.propTypes=h,C.defaultProps={isExpanded:!1};var g=C;t.Z=g},3790:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var l=n(87462),a=n(44925),o=n(67294),r=n(81254),c=n(92465),d=["components"],s={};function i(e){var t=e.components,n=(0,a.Z)(e,d);return(0,r.mdx)("wrapper",(0,l.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React, { useState, useCallback } from 'react';\nimport { FlowsheetDataGrid } from 'terra-data-grid';\n\nconst ColumnHeadersHidden = () => {\n  const gridDataJSON = {\n    cols: [\n      { id: 'Column-0', displayName: 'Vitals' },\n      { id: 'Column-1', displayName: 'March 16' },\n      { id: 'Column-2', displayName: 'March 17' },\n      { id: 'Column-3', displayName: 'March 18' },\n    ],\n    rows: [\n      {\n        id: '1',\n        cells: [\n          { content: 'Heart Rate Monitored (bpm)' },\n          { content: '68' },\n          { content: '66' },\n          { content: '67' },\n        ],\n      },\n      {\n        id: '2',\n        cells: [\n          { content: 'Temperature Oral (degC)' },\n          { content: '36.7' },\n          { content: '36.9' },\n          { content: '37' },\n        ],\n      },\n      {\n        id: '3',\n        cells: [\n          { content: 'Cardiac Index (L/min/m2)' },\n          { content: '2.25' },\n          { content: '2.28' },\n          { content: null },\n        ],\n      },\n      {\n        id: '4',\n        cells: [\n          { content: 'ICP (mmHg)' },\n          { content: null },\n          { content: '11' },\n          { content: '12' },\n        ],\n      },\n      {\n        id: '5',\n        cells: [\n          { content: 'CPP (mmHg)' },\n          { content: '63' },\n          { content: null },\n          { content: '48' },\n        ],\n      },\n    ],\n  };\n\n  const { cols, rows } = gridDataJSON;\n  const [rowData, setRowData] = useState(rows);\n\n  const onCellSelect = useCallback((selectedCell) => {\n    if (selectedCell.rowId && selectedCell.columnId) {\n      const rowIndex = rowData.findIndex(e => e.id === selectedCell.rowId);\n      const columnIndex = cols.findIndex(e => e.id === selectedCell.columnId);\n      let otherSelectionsExist = false;\n\n      // Remove cell selections, excluding current cell\n      const newRowData = [...rowData];\n      for (let row = 0; row < rowData.length; row += 1) {\n        for (let cell = 0; cell < rowData[row].cells.length; cell += 1) {\n          const currentCell = rowData[row].cells[cell];\n          if (currentCell.isSelected && !(row === rowIndex && cell === columnIndex)) {\n            currentCell.isSelected = false;\n            otherSelectionsExist = true;\n          }\n        }\n      }\n\n      // If the current cell is the only selected cell, toggle it to unselected. Otherwise, set it to selected.\n      newRowData[rowIndex].cells[columnIndex].isSelected = !rowData[rowIndex].cells[columnIndex].isSelected || otherSelectionsExist;\n      setRowData(newRowData);\n    }\n  }, [cols, rowData]);\n\n  const onClearSelectedCells = useCallback(() => {\n    // Remove current selections\n    const newRowData = [...rowData];\n    for (let row = 0; row < rowData.length; row += 1) {\n      for (let cell = 0; cell < rowData[row].cells.length; cell += 1) {\n        newRowData[row].cells[cell].isSelected = false;\n      }\n    }\n\n    setRowData(newRowData);\n  }, [rowData]);\n\n  const onCellRangeSelect = useCallback((cells) => {\n    const newRowData = [...rowData];\n\n    // Remove current selections\n    for (let row = 0; row < rowData.length; row += 1) {\n      for (let cell = 0; cell < rowData[row].cells.length; cell += 1) {\n        newRowData[row].cells[cell].isSelected = false;\n      }\n    }\n\n    cells.forEach((cell) => {\n      const rowIndex = rowData.findIndex(e => e.id === cell.rowId);\n      const columnIndex = cols.findIndex(e => e.id === cell.columnId);\n\n      newRowData[rowIndex].cells[columnIndex].isSelected = true;\n    });\n\n    setRowData(newRowData);\n  }, [cols, rowData]);\n\n  return (\n    <FlowsheetDataGrid\n      id=\"default-terra-flowsheet-data-grid\"\n      columns={cols}\n      rows={rowData}\n      ariaLabel=\"Flowsheet Data Grid\"\n      onCellSelect={onCellSelect}\n      onClearSelectedCells={onClearSelectedCells}\n      onCellRangeSelect={onCellRangeSelect}\n      hasVisibleColumnHeaders={false}\n    />\n  );\n};\n\nexport default ColumnHeadersHidden;\n\n")))}i.isMDXComponent=!0;var u=n(49271),m=function(e){var t=e.title,n=e.description,l=e.isExpanded;return o.createElement(u.Z,{title:t||"Column Headers Hidden",description:n,example:o.createElement(c.Z,null),exampleSrc:o.createElement(i,null),isExpanded:l})},f=["components"],p={},w="wrapper";function h(e){var t=e.components,n=(0,a.Z)(e,f);return(0,r.mdx)(w,(0,l.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"hiding-column-headers"},"Hiding Column Headers"),(0,r.mdx)("h3",{id:"description"},"Description"),(0,r.mdx)("p",null,"The ",(0,r.mdx)("a",{parentName:"p",href:"/terra-framework/pull/1948/components/cerner-terra-framework-docs/data-grid/flowsheet-data-grid/about"},"Flowsheet Data Grid")," can hide column headers with the ",(0,r.mdx)("inlineCode",{parentName:"p"},"hasVisibleColumnHeaders")," prop."),(0,r.mdx)("h3",{id:"usage"},"Usage"),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"hasVisibleColumns")," is a boolean. By default, it is set to ",(0,r.mdx)("inlineCode",{parentName:"p"},"true"),".\nWhen it is set to ",(0,r.mdx)("inlineCode",{parentName:"p"},"false"),", the column headers are hidden, but still exist in the DOM and can be read by screenreaders when providing context for the table.\nThis is useful when needing to use custom alternative to column headers, such as Stella Timeline."),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Note:")),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Column header labels should still be provided in the dataset to ensure that sceenreaders will still read out the appropriate context for the table."),(0,r.mdx)("li",{parentName:"ul"},"When using custom column headers, then logic must be added to ensure that the column widths match are in sync if resizing columns are enabled.\nThe ",(0,r.mdx)("a",{parentName:"li",href:"/terra-framework/pull/1948/components/cerner-terra-framework-docs/data-grid/flowsheet-data-grid/about"},"width")," property of columns can be used to control the Flowsheet Data Grid column widths.")),(0,r.mdx)(m,{title:"Flowsheet Data Grid with Hidden Column Headers",description:"The column headers can be hidden with the hasVisibleColumnHeaders prop set to false.",mdxType:"ColumnHeadersHidden"}))}h.isMDXComponent=!0},92465:function(e,t,n){var l=n(64836),a=n(18698);t.Z=void 0;var o=l(n(861)),r=l(n(27424)),c=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var n=s(t);if(n&&n.has(e))return n.get(e);var l={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var c=o?Object.getOwnPropertyDescriptor(e,r):null;c&&(c.get||c.set)?Object.defineProperty(l,r,c):l[r]=e[r]}return l.default=e,n&&n.set(e,l),l}(n(67294)),d=n(55730);function s(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(s=function(e){return e?n:t})(e)}t.Z=function(){var e=[{id:"Column-0",displayName:"Vitals"},{id:"Column-1",displayName:"March 16"},{id:"Column-2",displayName:"March 17"},{id:"Column-3",displayName:"March 18"}],t=[{id:"1",cells:[{content:"Heart Rate Monitored (bpm)"},{content:"68"},{content:"66"},{content:"67"}]},{id:"2",cells:[{content:"Temperature Oral (degC)"},{content:"36.7"},{content:"36.9"},{content:"37"}]},{id:"3",cells:[{content:"Cardiac Index (L/min/m2)"},{content:"2.25"},{content:"2.28"},{content:null}]},{id:"4",cells:[{content:"ICP (mmHg)"},{content:null},{content:"11"},{content:"12"}]},{id:"5",cells:[{content:"CPP (mmHg)"},{content:"63"},{content:null},{content:"48"}]}],n=(0,c.useState)(t),l=(0,r.default)(n,2),a=l[0],s=l[1],i=(0,c.useCallback)((function(t){if(t.rowId&&t.columnId){for(var n=a.findIndex((function(e){return e.id===t.rowId})),l=e.findIndex((function(e){return e.id===t.columnId})),r=!1,c=(0,o.default)(a),d=0;d<a.length;d+=1)for(var i=0;i<a[d].cells.length;i+=1){var u=a[d].cells[i];!u.isSelected||d===n&&i===l||(u.isSelected=!1,r=!0)}c[n].cells[l].isSelected=!a[n].cells[l].isSelected||r,s(c)}}),[e,a]),u=(0,c.useCallback)((function(){for(var e=(0,o.default)(a),t=0;t<a.length;t+=1)for(var n=0;n<a[t].cells.length;n+=1)e[t].cells[n].isSelected=!1;s(e)}),[a]),m=(0,c.useCallback)((function(t){for(var n=(0,o.default)(a),l=0;l<a.length;l+=1)for(var r=0;r<a[l].cells.length;r+=1)n[l].cells[r].isSelected=!1;t.forEach((function(t){var l=a.findIndex((function(e){return e.id===t.rowId})),o=e.findIndex((function(e){return e.id===t.columnId}));n[l].cells[o].isSelected=!0})),s(n)}),[e,a]);return c.default.createElement(d.FlowsheetDataGrid,{id:"default-terra-flowsheet-data-grid",columns:e,rows:a,ariaLabel:"Flowsheet Data Grid",onCellSelect:i,onClearSelectedCells:u,onCellRangeSelect:m,hasVisibleColumnHeaders:!1})}},53560:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},87462:function(e,t,n){function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},l.apply(this,arguments)}n.d(t,{Z:function(){return l}})},44925:function(e,t,n){function l(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},o=Object.keys(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}n.d(t,{Z:function(){return l}})}}]);