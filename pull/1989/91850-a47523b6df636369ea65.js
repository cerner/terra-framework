"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[91850,33377,43089,37703],{49271:function(e,t,n){var l=n(64836),a=n(18698);t.Z=void 0;var o=l(n(27424)),r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var l={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var i=o?Object.getOwnPropertyDescriptor(e,r):null;i&&(i.get||i.set)?Object.defineProperty(l,r,i):l[r]=e[r]}l.default=e,n&&n.set(e,l);return l}(n(67294)),i=l(n(45697)),c=l(n(19845)),s=n(21538),d=l(n(33864)),u=l(n(23399)),m=n(51051),p=l(n(53560));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}var w=c.default.bind(p.default),y={example:i.default.element,exampleSrc:i.default.element,exampleCssSrc:i.default.element,title:i.default.string,description:i.default.node,isExpanded:i.default.bool},_=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},h=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},x=function(e){var t=e.example,n=e.exampleSrc,l=e.exampleCssSrc,a=e.title,i=e.description,c=e.isExpanded,p=(0,r.useState)(c),f=(0,o.default)(p,2),y=f[0],x=f[1],C=(0,r.useState)(!1),b=(0,o.default)(C,2),v=b[0],g=b[1],N=r.default.useContext(s.ThemeContext),E=void 0!==l,k=function(){g(!v),y&&x(!y)},D=function(){x(!y),v&&g(!v)},S=function(e,t){e.nativeEvent.keyCode!==m.KEY_SPACE&&e.nativeEvent.keyCode!==m.KEY_RETURN||(e.preventDefault(),t())};return r.default.createElement("div",{className:w("template",N.className)},r.default.createElement("div",{className:w("header")},a&&r.default.createElement("h2",{className:w("title")},a)),r.default.createElement("div",{className:w("content")},i&&r.default.createElement("div",{className:w("description")},i),t),r.default.createElement("div",{className:w("footer")},n?r.default.createElement("div",{className:w("button-container")},E&&r.default.createElement("button",{type:"button",className:w("css-toggle","item",{"is-selected":v}),onClick:k,onKeyDown:function(e){return S(e,k)},onBlur:_,onMouseDown:h,tabIndex:0,"data-focus-styles-enabled":!0},r.default.createElement(d.default,{className:w("chevron")}),r.default.createElement("span",null,"CSS"),r.default.createElement(u.default,{className:w("chevron")})),r.default.createElement("button",{type:"button",className:w("code-toggle","item",{"is-selected":y}),onClick:D,onKeyDown:function(e){return S(e,D)},onBlur:_,onMouseDown:h,tabIndex:0,"data-focus-styles-enabled":!0},r.default.createElement(d.default,{className:w("chevron")}),r.default.createElement("span",null,"Code"),r.default.createElement(u.default,{className:w("chevron")}))):null,r.default.createElement("div",null,v&&r.default.createElement("div",{className:w("css")},l),y&&r.default.createElement("div",{className:w("code")},n))))};x.propTypes=y,x.defaultProps={isExpanded:!1};var C=x;t.Z=C},41740:function(e,t,n){n.r(t),n.d(t,{default:function(){return y}});var l=n(87462),a=n(44925),o=n(67294),r=n(81254),i=n(96216),c=["components"],s={};function d(e){var t=e.components,n=(0,a.Z)(e,c);return(0,r.mdx)("wrapper",(0,l.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React, { useCallback, useState } from 'react';\nimport { WorklistDataGrid } from 'terra-data-grid';\n\nconst gridDataJSON = {\n  cols: [\n    { id: 'Column-0', displayName: 'Patient' },\n    { id: 'Column-1', displayName: 'Location' },\n    { id: 'Column-2', displayName: 'Illness Severity' },\n    { id: 'Column-3', displayName: 'Visit' },\n    { id: 'Column-4', displayName: 'Allergy' },\n    { id: 'Column-5', displayName: 'Primary Contact' },\n    { id: 'Column-6', displayName: 'Generic Order Counts' },\n    { id: 'Column-7', displayName: 'Patient Age' },\n    { id: 'Column-8', displayName: 'Medication History' },\n    { id: 'Column-9', displayName: 'My Relationship' },\n    { id: 'Column-10', displayName: 'Not Selectable', isSelectable: false },\n  ],\n  rows: [\n    {\n      id: '1',\n      cells: [\n        { content: 'Fleck, Arthur' },\n        { content: '1007-MTN' },\n        { content: 'Unstable' },\n        { content: 'Inpatient, 2 months' },\n        { content: '' },\n        { content: 'Quinzell, Harleen' },\n        { content: '' },\n        { isMasked: true },\n        { isMasked: true },\n        { content: 'Admitting Physician' },\n        { content: '', isSelectable: false },\n      ],\n    },\n    {\n      id: '2',\n      cells: [\n        { content: 'Wayne, Bruce' },\n        { content: '1007-MTN-DR' },\n        { content: 'Stable' },\n        { content: 'Outpatient, 2 days' },\n        { content: 'Phytochemicals' },\n        { content: 'Grayson, Richard' },\n        { content: '' },\n        { content: '' },\n        { isMasked: true },\n        { content: 'Admitting Physician' },\n        { content: '', isSelectable: false },\n      ],\n    },\n  ],\n};\n\nconst PinnedColumns = () => {\n  const rowHeaderIndex = 0;\n  const { cols, rows } = gridDataJSON;\n\n  const [rowData, setRowData] = useState(rows);\n\n  const onCellSelect = useCallback((rowId, columnId) => {\n    if (rowId && columnId) {\n      const rowIndex = rowData.findIndex(row => row.id === rowId);\n      const columnIndex = cols.findIndex(column => column.id === columnId);\n\n      // Remove current selections\n      const newRowData = [...rowData];\n      for (let row = 0; row < rowData.length; row += 1) {\n        for (let cell = 0; cell < rowData[row].cells.length; cell += 1) {\n          const currentCell = rowData[row].cells[cell];\n          if (currentCell.isSelected && !(row === rowIndex && cell === columnIndex)) {\n            currentCell.isSelected = false;\n          }\n        }\n      }\n\n      // Toggle selection state of selected cell\n      newRowData[rowIndex].cells[columnIndex].isSelected = !rowData[rowIndex].cells[columnIndex].isSelected;\n      setRowData(newRowData);\n    }\n  }, [cols, rowData]);\n\n  const onClearSelectedCells = useCallback(() => {\n    // Remove current selections\n    const newRowData = [...rowData];\n    for (let row = 0; row < rowData.length; row += 1) {\n      for (let cell = 0; cell < rowData[row].cells.length; cell += 1) {\n        newRowData[row].cells[cell].isSelected = false;\n      }\n    }\n\n    setRowData(newRowData);\n  }, [rowData]);\n\n  return (\n    <WorklistDataGrid\n      id=\"terra-worklist-data-grid-pinned-columns\"\n      pinnedColumns={cols.slice(0, 3)} // This prop must be specified to display columns that need to pinned (stickied).\n      overflowColumns={cols.slice(3)} // This prop must be specified to display columns that do not need to be stickied and can be scrolled horizontally.\n      rows={rowData}\n      rowHeaderIndex={rowHeaderIndex}\n      ariaLabel=\"Worklist Data Grid\"\n      onCellSelect={onCellSelect}\n      onClearSelectedCells={onClearSelectedCells}\n    />\n  );\n};\n\nexport default PinnedColumns;\n\n")))}d.isMDXComponent=!0;var u=n(49271),m=function(e){var t=e.title,n=e.description,l=e.isExpanded;return o.createElement(u.Z,{title:t||"Pinned Columns",description:n,example:o.createElement(i.Z,null),exampleSrc:o.createElement(d,null),isExpanded:l})},p=["components"],f={},w="wrapper";function y(e){var t=e.components,n=(0,a.Z)(e,p);return(0,r.mdx)(w,(0,l.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"pinned-columns"},"Pinned Columns"),(0,r.mdx)("h3",{id:"description"},"Description"),(0,r.mdx)("p",null,"The ",(0,r.mdx)("a",{parentName:"p",href:"/terra-framework/pull/1989/components/cerner-terra-framework-docs/data-grid/worklist-data-grid/about"},"Worklist Data Grid")," defines two types of columns: Pinned and Overflow.\nThe pinned columns are aligned to the left of the Worklist Data Grid and cannot be scrolled.\nThe overflow section is aligned to the right of pinned columns and scrolls horizontally to reveal each overflow column.\nThis example demonstrates a Worklist Data Grid that supports both pinned and overflow columns."),(0,r.mdx)("h3",{id:"properties-required"},"Properties required"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"The ",(0,r.mdx)("strong",{parentName:"p"},"pinnedColumns")," prop is used to specify columns that need to be aligned left of the grid and stickied.")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"The ",(0,r.mdx)("strong",{parentName:"p"},"overflowColumns")," prop is used to specify columns that do not need to be stickied and can scroll horizontally."))),(0,r.mdx)("p",null,"Columns specified in both these props will rendered in the order in which they are provided."),(0,r.mdx)(m,{title:"Worklist Data Grid with Pinned Columns",mdxType:"PinnedColumns"}))}y.isMDXComponent=!0},96216:function(e,t,n){var l=n(64836),a=n(18698);t.Z=void 0;var o=l(n(861)),r=l(n(27424)),i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var n=s(t);if(n&&n.has(e))return n.get(e);var l={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var i=o?Object.getOwnPropertyDescriptor(e,r):null;i&&(i.get||i.set)?Object.defineProperty(l,r,i):l[r]=e[r]}return l.default=e,n&&n.set(e,l),l}(n(67294)),c=n(55730);function s(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(s=function(e){return e?n:t})(e)}var d=[{id:"Column-0",displayName:"Patient"},{id:"Column-1",displayName:"Location"},{id:"Column-2",displayName:"Illness Severity"},{id:"Column-3",displayName:"Visit"},{id:"Column-4",displayName:"Allergy"},{id:"Column-5",displayName:"Primary Contact"},{id:"Column-6",displayName:"Generic Order Counts"},{id:"Column-7",displayName:"Patient Age"},{id:"Column-8",displayName:"Medication History"},{id:"Column-9",displayName:"My Relationship"},{id:"Column-10",displayName:"Not Selectable",isSelectable:!1}],u=[{id:"1",cells:[{content:"Fleck, Arthur"},{content:"1007-MTN"},{content:"Unstable"},{content:"Inpatient, 2 months"},{content:""},{content:"Quinzell, Harleen"},{content:""},{isMasked:!0},{isMasked:!0},{content:"Admitting Physician"},{content:"",isSelectable:!1}]},{id:"2",cells:[{content:"Wayne, Bruce"},{content:"1007-MTN-DR"},{content:"Stable"},{content:"Outpatient, 2 days"},{content:"Phytochemicals"},{content:"Grayson, Richard"},{content:""},{content:""},{isMasked:!0},{content:"Admitting Physician"},{content:"",isSelectable:!1}]}];t.Z=function(){var e=d,t=u,n=(0,i.useState)(t),l=(0,r.default)(n,2),a=l[0],s=l[1],m=(0,i.useCallback)((function(t,n){if(t&&n){for(var l=a.findIndex((function(e){return e.id===t})),r=e.findIndex((function(e){return e.id===n})),i=(0,o.default)(a),c=0;c<a.length;c+=1)for(var d=0;d<a[c].cells.length;d+=1){var u=a[c].cells[d];!u.isSelected||c===l&&d===r||(u.isSelected=!1)}i[l].cells[r].isSelected=!a[l].cells[r].isSelected,s(i)}}),[e,a]),p=(0,i.useCallback)((function(){for(var e=(0,o.default)(a),t=0;t<a.length;t+=1)for(var n=0;n<a[t].cells.length;n+=1)e[t].cells[n].isSelected=!1;s(e)}),[a]);return i.default.createElement(c.WorklistDataGrid,{id:"terra-worklist-data-grid-pinned-columns",pinnedColumns:e.slice(0,3),overflowColumns:e.slice(3),rows:a,rowHeaderIndex:0,ariaLabel:"Worklist Data Grid",onCellSelect:m,onClearSelectedCells:p})}},53560:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},87462:function(e,t,n){function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},l.apply(this,arguments)}n.d(t,{Z:function(){return l}})},44925:function(e,t,n){function l(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},o=Object.keys(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}n.d(t,{Z:function(){return l}})}}]);