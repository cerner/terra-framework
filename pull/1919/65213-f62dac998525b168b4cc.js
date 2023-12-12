"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[65213,33377,43089,37703],{49271:function(e,t,n){var a=n(64836),o=n(18698);t.Z=void 0;var r=a(n(27424)),l=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==o(e)&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var a={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var i=r?Object.getOwnPropertyDescriptor(e,l):null;i&&(i.get||i.set)?Object.defineProperty(a,l,i):a[l]=e[l]}a.default=e,n&&n.set(e,a);return a}(n(67294)),i=a(n(45697)),c=a(n(47166)),s=n(21538),d=a(n(33864)),u=a(n(23399)),m=n(51051),p=a(n(53560));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}var y=c.default.bind(p.default),h={example:i.default.element,exampleSrc:i.default.element,exampleCssSrc:i.default.element,title:i.default.string,description:i.default.node,isExpanded:i.default.bool},_=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},b=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},w=function(e){var t=e.example,n=e.exampleSrc,a=e.exampleCssSrc,o=e.title,i=e.description,c=e.isExpanded,p=(0,l.useState)(c),f=(0,r.default)(p,2),h=f[0],w=f[1],g=(0,l.useState)(!1),C=(0,r.default)(g,2),v=C[0],x=C[1],E=l.default.useContext(s.ThemeContext),N=void 0!==a,k=function(){x(!v),h&&w(!h)},O=function(){w(!h),v&&x(!v)},S=function(e,t){e.nativeEvent.keyCode!==m.KEY_SPACE&&e.nativeEvent.keyCode!==m.KEY_RETURN||(e.preventDefault(),t())};return l.default.createElement("div",{className:y("template",E.className)},l.default.createElement("div",{className:y("header")},o&&l.default.createElement("h2",{className:y("title")},o)),l.default.createElement("div",{className:y("content")},i&&l.default.createElement("div",{className:y("description")},i),t),l.default.createElement("div",{className:y("footer")},n?l.default.createElement("div",{className:y("button-container")},N&&l.default.createElement("button",{type:"button",className:y("css-toggle","item",{"is-selected":v}),onClick:k,onKeyDown:function(e){return S(e,k)},onBlur:_,onMouseDown:b,tabIndex:0,"data-focus-styles-enabled":!0},l.default.createElement(d.default,{className:y("chevron")}),l.default.createElement("span",null,"CSS"),l.default.createElement(u.default,{className:y("chevron")})),l.default.createElement("button",{type:"button",className:y("code-toggle","item",{"is-selected":h}),onClick:O,onKeyDown:function(e){return S(e,O)},onBlur:_,onMouseDown:b,tabIndex:0,"data-focus-styles-enabled":!0},l.default.createElement(d.default,{className:y("chevron")}),l.default.createElement("span",null,"Code"),l.default.createElement(u.default,{className:y("chevron")}))):null,l.default.createElement("div",null,v&&l.default.createElement("div",{className:y("css")},a),h&&l.default.createElement("div",{className:y("code")},n))))};w.propTypes=h,w.defaultProps={isExpanded:!1};var g=w;t.Z=g},87425:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var a=n(87462),o=n(44925),r=n(67294),l=n(81254),i=n(79021),c=["components"],s={};function d(e){var t=e.components,n=(0,o.Z)(e,c);return(0,l.mdx)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React, { useState } from 'react';\nimport { WorklistDataGrid } from 'terra-data-grid';\n\nconst gridDataJSON = {\n  cols: [\n    {\n      id: 'Column-0', displayName: 'Patient', sortIndicator: 'ascending', hasError: true, // This column header will be rendered with a sort indicator and an error icon by default.\n    },\n    { id: 'Column-1', displayName: 'Location' },\n    { id: 'Column-2', displayName: 'Illness Severity' },\n    { id: 'Column-3', displayName: 'Visit' },\n    { id: 'Column-4', displayName: 'Allergy', hasError: true }, // Use hasError property to display an error icon in the column header\n    { id: 'Column-5', displayName: 'Primary Contact' },\n    { id: 'Column-6', displayName: 'Generic Order Counts' },\n    { id: 'Column-7', displayName: 'Patient Age' },\n    { id: 'Column-8', displayName: 'Medication History' },\n    { id: 'Column-9', displayName: 'My Relationship' },\n    { id: 'Column-10', displayName: 'Not Selectable', isSelectable: false }, // Column header cannot be selected via click or Spacebar but can receive focus when navigating through keyboard\n  ],\n  rows: [\n    {\n      id: '1',\n      cells: [\n        { content: 'Fleck, Arthur' },\n        { content: '1007-MTN' },\n        { content: 'Unstable' },\n        { content: 'Inpatient, 2 months' },\n        { content: '' },\n        { content: 'Quinzell, Harleen' },\n        { content: '' },\n        { isMasked: true },\n        { isMasked: true },\n        { content: 'Admitting Physician' },\n        { content: '', isSelectable: false },\n      ],\n    },\n    {\n      id: '2',\n      cells: [\n        { content: 'Wayne, Bruce' },\n        { content: '1007-MTN-DR' },\n        { content: 'Stable' },\n        { content: 'Outpatient, 2 days' },\n        { content: 'Phytochemicals' },\n        { content: 'Grayson, Richard' },\n        { content: '' },\n        { content: '' },\n        { isMasked: true },\n        { content: 'Admitting Physician' },\n        { content: '', isSelectable: false },\n      ],\n    },\n  ],\n};\n\nconst WorklistDataGridWithColumnStates = () => {\n  const rowHeaderIndex = 0;\n  const { cols, rows } = gridDataJSON;\n\n  const [gridColumns, setGridColumns] = useState(cols);\n  const [gridRows, setGridRows] = useState(rows);\n\n  // The onColumnSelect will sort the rows and toggle the current sort indicator.\n  const onColumnSelect = (columnId) => {\n    const newColumnArray = gridColumns.map((column, columnIndex) => {\n      const newColumn = { ...column };\n\n      if (column.id === columnId) {\n        newColumn.sortIndicator = column.sortIndicator === 'ascending' ? 'descending' : 'ascending';\n\n        const newGridRows = [...gridRows];\n        newGridRows.sort((rowA, rowB) => {\n          const firstRowContent = rowA.cells[columnIndex].content || '';\n          const secondRowContent = rowB.cells[columnIndex].content || '';\n\n          if (newColumn.sortIndicator === 'ascending') {\n            return firstRowContent.localeCompare(secondRowContent);\n          }\n          return secondRowContent.localeCompare(firstRowContent);\n        });\n\n        setGridRows(newGridRows);\n      } else {\n        newColumn.sortIndicator = undefined;\n      }\n\n      return newColumn;\n    });\n\n    setGridColumns(newColumnArray);\n  };\n\n  return (\n    <WorklistDataGrid\n      id=\"terra-worklist-data-grid-with-column-states\"\n      overflowColumns={gridColumns}\n      rows={gridRows}\n      rowHeaderIndex={rowHeaderIndex}\n      rowHeight=\"50px\"\n      defaultColumnWidth={100}\n      columnHeaderHeight=\"50px\"\n      onColumnSelect={onColumnSelect} // Consumer must provide this callback to the Worklist Data Grid for it to call when the user selects a column header.\n      ariaLabel=\"Worklist Data Grid\"\n    />\n  );\n};\n\nexport default WorklistDataGridWithColumnStates;\n\n")))}d.isMDXComponent=!0;var u=n(49271),m=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.createElement(u.Z,{title:t||"Worklist Data Grid Column States",description:n,example:r.createElement(i.Z,null),exampleSrc:r.createElement(d,null),isExpanded:a})},p=["components"],f={},y="wrapper";function h(e){var t=e.components,n=(0,o.Z)(e,p);return(0,l.mdx)(y,(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("h1",{id:"column-states-and-selection"},"Column States and Selection"),(0,l.mdx)("h3",{id:"description"},"Description"),(0,l.mdx)("p",null,"This example demonstrates a ",(0,l.mdx)("a",{parentName:"p",href:"/terra-framework/pull/1919/components/cerner-terra-framework-docs/data-grid/worklist-data-grid/about"},"Worklist Data Grid")," that supports column states and selection.\nA column can be selected by clicking on the column or pressing the Spacebar on the focused column.\nOnly columns that are selectable can be selected. A column is selectable by default."),(0,l.mdx)("p",null,"The Column can display icons representing its current state such as sort indicator and error."),(0,l.mdx)("h3",{id:"properties-required"},"Properties required"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"The ",(0,l.mdx)("strong",{parentName:"li"},(0,l.mdx)("em",{parentName:"strong"},"onColumnSelect"))," callback prop: When the user selects a column, this callback will be called with the columnId of the selected column.")),(0,l.mdx)("p",null,"The below example also demonstrates how properties such as ",(0,l.mdx)("em",{parentName:"p"},"isSelectable"),", ",(0,l.mdx)("em",{parentName:"p"},"hasError")," and ",(0,l.mdx)("em",{parentName:"p"},"sortIndicator")," can be provided by the consumer to prevent selection, display error and show sort indicator icons respectively."),(0,l.mdx)(m,{title:"Worklist Data Grid Column States",mdxType:"WorklistDataGridColumnStates"}))}h.isMDXComponent=!0},79021:function(e,t,n){var a=n(64836),o=n(18698);t.Z=void 0;var r=a(n(861)),l=a(n(38416)),i=a(n(27424)),c=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=o(e)&&"function"!=typeof e)return{default:e};var n=d(t);if(n&&n.has(e))return n.get(e);var a={__proto__:null},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var i=r?Object.getOwnPropertyDescriptor(e,l):null;i&&(i.get||i.set)?Object.defineProperty(a,l,i):a[l]=e[l]}return a.default=e,n&&n.set(e,a),a}(n(67294)),s=n(55730);function d(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(d=function(e){return e?n:t})(e)}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var m=[{id:"Column-0",displayName:"Patient",sortIndicator:"ascending",hasError:!0},{id:"Column-1",displayName:"Location"},{id:"Column-2",displayName:"Illness Severity"},{id:"Column-3",displayName:"Visit"},{id:"Column-4",displayName:"Allergy",hasError:!0},{id:"Column-5",displayName:"Primary Contact"},{id:"Column-6",displayName:"Generic Order Counts"},{id:"Column-7",displayName:"Patient Age"},{id:"Column-8",displayName:"Medication History"},{id:"Column-9",displayName:"My Relationship"},{id:"Column-10",displayName:"Not Selectable",isSelectable:!1}],p=[{id:"1",cells:[{content:"Fleck, Arthur"},{content:"1007-MTN"},{content:"Unstable"},{content:"Inpatient, 2 months"},{content:""},{content:"Quinzell, Harleen"},{content:""},{isMasked:!0},{isMasked:!0},{content:"Admitting Physician"},{content:"",isSelectable:!1}]},{id:"2",cells:[{content:"Wayne, Bruce"},{content:"1007-MTN-DR"},{content:"Stable"},{content:"Outpatient, 2 days"},{content:"Phytochemicals"},{content:"Grayson, Richard"},{content:""},{content:""},{isMasked:!0},{content:"Admitting Physician"},{content:"",isSelectable:!1}]}];t.Z=function(){var e=m,t=p,n=(0,c.useState)(e),a=(0,i.default)(n,2),o=a[0],d=a[1],f=(0,c.useState)(t),y=(0,i.default)(f,2),h=y[0],_=y[1];return c.default.createElement(s.WorklistDataGrid,{id:"terra-worklist-data-grid-with-column-states",overflowColumns:o,rows:h,rowHeaderIndex:0,rowHeight:"50px",defaultColumnWidth:100,columnHeaderHeight:"50px",onColumnSelect:function(e){var t=o.map((function(t,n){var a=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){(0,l.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},t);if(t.id===e){a.sortIndicator="ascending"===t.sortIndicator?"descending":"ascending";var o=(0,r.default)(h);o.sort((function(e,t){var o=e.cells[n].content||"",r=t.cells[n].content||"";return"ascending"===a.sortIndicator?o.localeCompare(r):r.localeCompare(o)})),_(o)}else a.sortIndicator=void 0;return a}));d(t)},ariaLabel:"Worklist Data Grid"})}},53560:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},87462:function(e,t,n){function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},a.apply(this,arguments)}n.d(t,{Z:function(){return a}})},44925:function(e,t,n){function a(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.d(t,{Z:function(){return a}})}}]);