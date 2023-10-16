"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[48467],{49271:function(e,t,n){var a=n(64836),l=n(18698);t.Z=void 0;var o=a(n(27424)),c=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==l(e)&&"function"!=typeof e)return{default:e};var n=p(t);if(n&&n.has(e))return n.get(e);var a={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in e)if("default"!==c&&Object.prototype.hasOwnProperty.call(e,c)){var r=o?Object.getOwnPropertyDescriptor(e,c):null;r&&(r.get||r.set)?Object.defineProperty(a,c,r):a[c]=e[c]}a.default=e,n&&n.set(e,a);return a}(n(67294)),r=a(n(45697)),i=a(n(47166)),s=n(21538),d=a(n(33864)),u=a(n(23399)),m=n(51051),f=a(n(53560));function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(p=function(e){return e?n:t})(e)}var w=i.default.bind(f.default),b={example:r.default.element,exampleSrc:r.default.element,exampleCssSrc:r.default.element,title:r.default.string,description:r.default.node,isExpanded:r.default.bool},_=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},S=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},y=function(e){var t=e.example,n=e.exampleSrc,a=e.exampleCssSrc,l=e.title,r=e.description,i=e.isExpanded,f=(0,c.useState)(i),p=(0,o.default)(f,2),b=p[0],y=p[1],h=(0,c.useState)(!1),R=(0,o.default)(h,2),C=R[0],v=R[1],E=c.default.useContext(s.ThemeContext),g=void 0!==a,k=function(){v(!C),b&&y(!b)},x=function(){y(!b),C&&v(!C)},N=function(e,t){e.nativeEvent.keyCode!==m.KEY_SPACE&&e.nativeEvent.keyCode!==m.KEY_RETURN||(e.preventDefault(),t())};return c.default.createElement("div",{className:w("template",E.className)},c.default.createElement("div",{className:w("header")},l&&c.default.createElement("h2",{className:w("title")},l)),c.default.createElement("div",{className:w("content")},r&&c.default.createElement("div",{className:w("description")},r),t),c.default.createElement("div",{className:w("footer")},n?c.default.createElement("div",{className:w("button-container")},g&&c.default.createElement("button",{type:"button",className:w("css-toggle","item",{"is-selected":C}),onClick:k,onKeyDown:function(e){return N(e,k)},onBlur:_,onMouseDown:S,tabIndex:0,"data-focus-styles-enabled":!0},c.default.createElement(d.default,{className:w("chevron")}),c.default.createElement("span",null,"CSS"),c.default.createElement(u.default,{className:w("chevron")})),c.default.createElement("button",{type:"button",className:w("code-toggle","item",{"is-selected":b}),onClick:x,onKeyDown:function(e){return N(e,x)},onBlur:_,onMouseDown:S,tabIndex:0,"data-focus-styles-enabled":!0},c.default.createElement(d.default,{className:w("chevron")}),c.default.createElement("span",null,"Code"),c.default.createElement(u.default,{className:w("chevron")}))):null,c.default.createElement("div",null,C&&c.default.createElement("div",{className:w("css")},a),b&&c.default.createElement("div",{className:w("code")},n))))};y.propTypes=b,y.defaultProps={isExpanded:!1};var h=y;t.Z=h},33125:function(e,t,n){n.r(t),n.d(t,{default:function(){return b}});var a=n(87462),l=n(44925),o=n(67294),c=n(81254),r=n(74550),i=["components"],s={};function d(e){var t=e.components,n=(0,l.Z)(e,i);return(0,c.mdx)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,c.mdx)("pre",null,(0,c.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React, { useState, useRef, useCallback } from 'react';\nimport { WorklistDataGrid } from 'terra-data-grid';\n\nconst gridDataJSON = {\n  cols: [\n    { id: 'Column-0', displayName: 'Patient' },\n    { id: 'Column-1', displayName: 'Location' },\n    { id: 'Column-2', displayName: 'Illness Severity' },\n    { id: 'Column-3', displayName: 'Visit' },\n    { id: 'Column-4', displayName: 'Allergy' },\n    { id: 'Column-5', displayName: 'Primary Contact' },\n    { id: 'Column-6', displayName: 'Generic Order Counts' },\n    { id: 'Column-7', displayName: 'Patient Age' },\n    { id: 'Column-8', displayName: 'Medication History' },\n    { id: 'Column-9', displayName: 'My Relationship' },\n    { id: 'Column-10', displayName: 'Not Selectable', isSelectable: false },\n  ],\n  rows: [\n    {\n      id: '1',\n      cells: [\n        { content: 'Fleck, Arthur' },\n        { content: '1007-MTN' },\n        { content: 'Unstable' },\n        { content: 'Inpatient, 2 months' },\n        { content: '' },\n        { content: 'Quinzell, Harleen' },\n        { content: '' },\n        { isMasked: true },\n        { isMasked: true },\n        { content: 'Admitting Physician' },\n        { content: '', isSelectable: false },\n      ],\n    },\n    {\n      id: '2',\n      cells: [\n        { content: 'Wayne, Bruce' },\n        { content: '1007-MTN-DR' },\n        { content: 'Stable' },\n        { content: 'Outpatient, 2 days' },\n        { content: 'Phytochemicals' },\n        { content: 'Grayson, Richard' },\n        { content: '' },\n        { content: '' },\n        { isMasked: true },\n        { content: 'Admitting Physician' },\n        { content: '', isSelectable: false },\n      ],\n    },\n  ],\n};\n\nconst RowSelection = () => {\n  const rowSelectionModeRef = useRef();\n  const rowHeaderIndex = 0;\n  const { cols, rows } = gridDataJSON;\n  const [rowData, setRowData] = useState(rows);\n  const [hasSelectableRows, setHasSelectableRows] = useState(false);\n\n  const clearRowSelection = useCallback(() => {\n    const newRowData = [...rowData];\n    // eslint-disable-next-line no-return-assign, no-param-reassign\n    newRowData.forEach(row => (row.isSelected = false));\n    setRowData(newRowData);\n  }, [rowData]);\n\n  const disableSelectableRows = useCallback(() => {\n    rowSelectionModeRef.current.checked = false;\n    setHasSelectableRows(false);\n    clearRowSelection();\n  }, [clearRowSelection]);\n\n  const onRowSelect = useCallback((rowsToSelectAndUnSelect) => {\n    // Remove current selections\n    const newRowData = [...rowData];\n\n    rowsToSelectAndUnSelect.forEach((updatedRow) => {\n      const dataRowToUpdate = newRowData.find(row => row.id === updatedRow.id);\n      if (dataRowToUpdate) {\n        dataRowToUpdate.isSelected = updatedRow.selected;\n      }\n    });\n\n    setRowData(newRowData);\n  }, [rowData]);\n\n  const onRowSelectAll = useCallback(() => {\n    const newRowData = [...rowData];\n    // eslint-disable-next-line no-return-assign, no-param-reassign\n    newRowData.forEach(row => (row.isSelected = true));\n    setRowData(newRowData);\n  }, [rowData]);\n\n  const onRowSelectionModeChange = (event) => {\n    if (!event.target.checked) {\n      clearRowSelection();\n    }\n    setHasSelectableRows(event.target.checked);\n  };\n\n  const enableRowSelection = useCallback(() => {\n    if (!rowSelectionModeRef.current.checked) {\n      rowSelectionModeRef.current.checked = true;\n    }\n    setHasSelectableRows(true);\n  }, []);\n\n  return (\n    <React.Fragment>\n      <div>\n        <label htmlFor=\"rowSelectionMode\"><b>Row Selection Mode</b></label>\n        <input\n          id=\"rowSelectionMode\"\n          type=\"checkbox\"\n          ref={rowSelectionModeRef}\n          onChange={onRowSelectionModeChange}\n        />\n      </div>\n      <WorklistDataGrid\n        id=\"pinned-columns-with-row-selection\"\n        pinnedColumns={cols.slice(0, 3)}\n        overflowColumns={cols.slice(3)}\n        rows={rowData}\n        rowHeaderIndex={rowHeaderIndex}\n        defaultColumnWidth={180}\n        ariaLabel=\"Worklist Data Grid with Pinned Columns and Row Selection\"\n        hasSelectableRows={hasSelectableRows}\n        onRowSelect={onRowSelect}\n        onRowSelectAll={onRowSelectAll}\n        onClearSelectedRows={clearRowSelection}\n        onDisableSelectableRows={disableSelectableRows}\n        onEnableRowSelection={enableRowSelection}\n      />\n    </React.Fragment>\n  );\n};\n\nexport default RowSelection;\n\n")))}d.isMDXComponent=!0;var u=n(49271),m=function(e){var t=e.title,n=e.description,a=e.isExpanded;return o.createElement(u.Z,{title:t||"Pinned Columns With Row Selection",description:n,example:o.createElement(r.Z,null),exampleSrc:o.createElement(d,null),isExpanded:a})},f=["components"],p={},w="wrapper";function b(e){var t=e.components,n=(0,l.Z)(e,f);return(0,c.mdx)(w,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,c.mdx)(m,{title:"Worklist Data Grid with Pinned Columns and Row Selection",mdxType:"PinnedColumnsWithRowSelection"}))}b.isMDXComponent=!0},74550:function(e,t,n){var a=n(64836),l=n(18698);t.Z=void 0;var o=a(n(861)),c=a(n(27424)),r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=l(e)&&"function"!=typeof e)return{default:e};var n=s(t);if(n&&n.has(e))return n.get(e);var a={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in e)if("default"!==c&&Object.prototype.hasOwnProperty.call(e,c)){var r=o?Object.getOwnPropertyDescriptor(e,c):null;r&&(r.get||r.set)?Object.defineProperty(a,c,r):a[c]=e[c]}return a.default=e,n&&n.set(e,a),a}(n(67294)),i=n(55730);function s(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(s=function(e){return e?n:t})(e)}var d=[{id:"Column-0",displayName:"Patient"},{id:"Column-1",displayName:"Location"},{id:"Column-2",displayName:"Illness Severity"},{id:"Column-3",displayName:"Visit"},{id:"Column-4",displayName:"Allergy"},{id:"Column-5",displayName:"Primary Contact"},{id:"Column-6",displayName:"Generic Order Counts"},{id:"Column-7",displayName:"Patient Age"},{id:"Column-8",displayName:"Medication History"},{id:"Column-9",displayName:"My Relationship"},{id:"Column-10",displayName:"Not Selectable",isSelectable:!1}],u=[{id:"1",cells:[{content:"Fleck, Arthur"},{content:"1007-MTN"},{content:"Unstable"},{content:"Inpatient, 2 months"},{content:""},{content:"Quinzell, Harleen"},{content:""},{isMasked:!0},{isMasked:!0},{content:"Admitting Physician"},{content:"",isSelectable:!1}]},{id:"2",cells:[{content:"Wayne, Bruce"},{content:"1007-MTN-DR"},{content:"Stable"},{content:"Outpatient, 2 days"},{content:"Phytochemicals"},{content:"Grayson, Richard"},{content:""},{content:""},{isMasked:!0},{content:"Admitting Physician"},{content:"",isSelectable:!1}]}];t.Z=function(){var e=(0,r.useRef)(),t=d,n=u,a=(0,r.useState)(n),l=(0,c.default)(a,2),s=l[0],m=l[1],f=(0,r.useState)(!1),p=(0,c.default)(f,2),w=p[0],b=p[1],_=(0,r.useCallback)((function(){var e=(0,o.default)(s);e.forEach((function(e){return e.isSelected=!1})),m(e)}),[s]),S=(0,r.useCallback)((function(){e.current.checked=!1,b(!1),_()}),[_]),y=(0,r.useCallback)((function(e){var t=(0,o.default)(s);e.forEach((function(e){var n=t.find((function(t){return t.id===e.id}));n&&(n.isSelected=e.selected)})),m(t)}),[s]),h=(0,r.useCallback)((function(){var e=(0,o.default)(s);e.forEach((function(e){return e.isSelected=!0})),m(e)}),[s]),R=(0,r.useCallback)((function(){e.current.checked||(e.current.checked=!0),b(!0)}),[]);return r.default.createElement(r.default.Fragment,null,r.default.createElement("div",null,r.default.createElement("label",{htmlFor:"rowSelectionMode"},r.default.createElement("b",null,"Row Selection Mode")),r.default.createElement("input",{id:"rowSelectionMode",type:"checkbox",ref:e,onChange:function(e){e.target.checked||_(),b(e.target.checked)}})),r.default.createElement(i.WorklistDataGrid,{id:"pinned-columns-with-row-selection",pinnedColumns:t.slice(0,3),overflowColumns:t.slice(3),rows:s,rowHeaderIndex:0,defaultColumnWidth:180,ariaLabel:"Worklist Data Grid with Pinned Columns and Row Selection",hasSelectableRows:w,onRowSelect:y,onRowSelectAll:h,onClearSelectedRows:_,onDisableSelectableRows:S,onEnableRowSelection:R}))}},53560:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},87462:function(e,t,n){function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},a.apply(this,arguments)}n.d(t,{Z:function(){return a}})},44925:function(e,t,n){function a(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}n.d(t,{Z:function(){return a}})}}]);