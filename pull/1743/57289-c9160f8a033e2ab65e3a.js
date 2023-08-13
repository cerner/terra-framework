"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[57289],{49271:function(e,t,n){var l=n(64836),a=n(18698);t.Z=void 0;var o=l(n(27424)),r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var n=p(t);if(n&&n.has(e))return n.get(e);var l={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var i=o?Object.getOwnPropertyDescriptor(e,r):null;i&&(i.get||i.set)?Object.defineProperty(l,r,i):l[r]=e[r]}l.default=e,n&&n.set(e,l);return l}(n(67294)),i=l(n(45697)),c=l(n(47166)),s=n(21538),d=l(n(33864)),u=l(n(23399)),m=n(51051),f=l(n(53560));function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(p=function(e){return e?n:t})(e)}var w=c.default.bind(f.default),S={example:i.default.element,exampleSrc:i.default.element,exampleCssSrc:i.default.element,title:i.default.string,description:i.default.node,isExpanded:i.default.bool},_=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},y=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},R=function(e){var t=e.example,n=e.exampleSrc,l=e.exampleCssSrc,a=e.title,i=e.description,c=e.isExpanded,f=(0,r.useState)(c),p=(0,o.default)(f,2),S=p[0],R=p[1],b=(0,r.useState)(!1),h=(0,o.default)(b,2),v=h[0],E=h[1],g=r.default.useContext(s.ThemeContext),C=void 0!==l,N=function(){E(!v),S&&R(!S)},x=function(){R(!S),v&&E(!v)},k=function(e,t){e.nativeEvent.keyCode!==m.KEY_SPACE&&e.nativeEvent.keyCode!==m.KEY_RETURN||(e.preventDefault(),t())};return r.default.createElement("div",{className:w("template",g.className)},r.default.createElement("div",{className:w("header")},a&&r.default.createElement("h2",{className:w("title")},a)),r.default.createElement("div",{className:w("content")},i&&r.default.createElement("div",{className:w("description")},i),t),r.default.createElement("div",{className:w("footer")},n?r.default.createElement("div",{className:w("button-container")},C&&r.default.createElement("button",{type:"button",className:w("css-toggle","item",{"is-selected":v}),onClick:N,onKeyDown:function(e){return k(e,N)},onBlur:_,onMouseDown:y,tabIndex:0,"data-focus-styles-enabled":!0},r.default.createElement(d.default,{className:w("chevron")}),r.default.createElement("span",null,"CSS"),r.default.createElement(u.default,{className:w("chevron")})),r.default.createElement("button",{type:"button",className:w("code-toggle","item",{"is-selected":S}),onClick:x,onKeyDown:function(e){return k(e,x)},onBlur:_,onMouseDown:y,tabIndex:0,"data-focus-styles-enabled":!0},r.default.createElement(d.default,{className:w("chevron")}),r.default.createElement("span",null,"Code"),r.default.createElement(u.default,{className:w("chevron")}))):null,r.default.createElement("div",null,v&&r.default.createElement("div",{className:w("css")},l),S&&r.default.createElement("div",{className:w("code")},n))))};R.propTypes=S,R.defaultProps={isExpanded:!1};var b=R;t.Z=b},90925:function(e,t,n){n.r(t),n.d(t,{default:function(){return S}});var l=n(87462),a=n(44925),o=n(67294),r=n(81254),i=n(22725),c=["components"],s={};function d(e){var t=e.components,n=(0,a.Z)(e,c);return(0,r.mdx)("wrapper",(0,l.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React, { useState, useRef } from 'react';\nimport WorklistDataGrid from 'terra-worklist-data-grid';\nimport WorklistDataGridUtils from 'terra-worklist-data-grid/src/utils/WorklistDataGridUtils';\n\nconst gridDataJSON = {\n  cols: [\n    { id: 'Column-0', displayName: 'Patient' },\n    { id: 'Column-1', displayName: 'Location' },\n    { id: 'Column-2', displayName: 'Illness Severity' },\n    { id: 'Column-3', displayName: 'Visit' },\n    { id: 'Column-4', displayName: 'Allergy' },\n    { id: 'Column-5', displayName: 'Primary Contact' },\n    { id: 'Column-6', displayName: 'Generic Order Counts' },\n    { id: 'Column-7', displayName: 'Patient Age' },\n    { id: 'Column-8', displayName: 'Medication History' },\n    { id: 'Column-9', displayName: 'My Relationship' },\n    { id: 'Column-10', displayName: 'Not Selectable', isSelectable: false },\n  ],\n  rows: [\n    {\n      id: '1',\n      cells: [\n        { content: 'Fleck, Arthur' },\n        { content: '1007-MTN' },\n        { content: 'Unstable' },\n        { content: 'Inpatient, 2 months' },\n        { content: '' },\n        { content: 'Quinzell, Harleen' },\n        { content: '' },\n        { isMasked: true },\n        { isMasked: true },\n        { content: 'Admitting Physician' },\n        { content: '', isSelectable: false },\n      ],\n    },\n    {\n      id: '2',\n      cells: [\n        { content: 'Wayne, Bruce' },\n        { content: '1007-MTN-DR' },\n        { content: 'Stable' },\n        { content: 'Outpatient, 2 days' },\n        { content: 'Phytochemicals' },\n        { content: 'Grayson, Richard' },\n        { content: '' },\n        { content: '' },\n        { isMasked: true },\n        { content: 'Admitting Physician' },\n        { content: '', isSelectable: false },\n      ],\n    },\n  ],\n};\n\nconst RowSelection = () => {\n  const rowSelectionModeRef = useRef();\n  const rowHeaderIndex = 0;\n  const { cols, rows } = gridDataJSON;\n  const [selectedRows, setSelectedRows] = useState([]);\n  const [hasSelectableRows, setHasSelectableRows] = useState(false);\n\n  const determineSelectedRows = (allRowsSelected, userSelectedRow) => {\n    if (!userSelectedRow) {\n      return [];\n    }\n\n    let remainingSelectedRow = [];\n    if (allRowsSelected) {\n      remainingSelectedRow = userSelectedRow;\n    } else if (selectedRows.includes(userSelectedRow[0])) {\n      // Row Deselect so remove this rowId.\n      remainingSelectedRow = selectedRows.filter(e => (e !== userSelectedRow[0]));\n    } else {\n      // Row Selected so add this rowId.\n      remainingSelectedRow = remainingSelectedRow.concat(selectedRows);\n      remainingSelectedRow.push(userSelectedRow[0]);\n    }\n    return remainingSelectedRow;\n  };\n\n  const clearRowSelection = () => {\n    // eslint-disable-next-line no-param-reassign\n    rows.forEach(r => { if (r.isSelected) { r.isSelected = false; } });\n    setSelectedRows([]);\n  };\n\n  const disableSelectableRows = () => {\n    rowSelectionModeRef.current.checked = false;\n    setHasSelectableRows(false);\n    clearRowSelection();\n  };\n\n  const onRowSelectionModeChange = (event) => {\n    if (!event.target.checked) {\n      clearRowSelection();\n    }\n    setHasSelectableRows(event.target.checked);\n  };\n\n  const onColumnSelect = (columnId) => {\n    if (columnId === WorklistDataGridUtils.ROW_SELECTION_COLUMN.id) {\n      // eslint-disable-next-line no-alert\n      alert('Row Selection Header Clicked');\n    }\n  };\n\n  return (\n    <React.Fragment>\n      <div>\n        <label htmlFor=\"rowSelectionMode\"><b>Row Selection Mode</b></label>\n        <input\n          id=\"rowSelectionMode\"\n          type=\"checkbox\"\n          ref={rowSelectionModeRef}\n          onChange={onRowSelectionModeChange}\n        />\n      </div>\n      <WorklistDataGrid\n        id=\"default-terra-worklist-data-grid\"\n        overflowColumns={cols}\n        rows={[...rows]}\n        rowHeaderIndex={rowHeaderIndex}\n        columnWidth=\"180px\"\n        ariaLabel=\"Worklist Data Grid\"\n        hasSelectableRows={hasSelectableRows}\n        onRowSelect={(rowId) => {\n          const newRows = [];\n          const selectedRow = rows.find(e => e.id === rowId);\n          selectedRow.isSelected = !selectedRow.isSelected;\n          rows.forEach(element => {\n            if (element.isSelected) {\n              newRows.push(element.id);\n            }\n          });\n          setSelectedRows(determineSelectedRows(false, newRows));\n        }}\n        onRowSelectAll={() => {\n          const newRows = [];\n          rows.forEach(e => { e.isSelected = true; newRows.push(e.id); });\n          setSelectedRows(determineSelectedRows(true, newRows));\n        }}\n        onClearSelectedRows={() => {\n          clearRowSelection();\n        }}\n        onDisableSelectableRows={() => {\n          disableSelectableRows();\n        }}\n        onColumnSelect={onColumnSelect}\n      />\n    </React.Fragment>\n  );\n};\n\nexport default RowSelection;\n\n")))}d.isMDXComponent=!0;var u=n(49271),m=function(e){var t=e.title,n=e.description,l=e.isExpanded;return o.createElement(u.Z,{title:t||"Row Selection",description:n,example:o.createElement(i.Z,null),exampleSrc:o.createElement(d,null),isExpanded:l})},f=["components"],p={},w="wrapper";function S(e){var t=e.components,n=(0,a.Z)(e,f);return(0,r.mdx)(w,(0,l.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)(m,{title:"Worklist Data Grid With Row Selection",mdxType:"RowSelection"}))}S.isMDXComponent=!0},22725:function(e,t,n){var l=n(64836),a=n(18698);t.Z=void 0;var o=l(n(861)),r=l(n(27424)),i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var n=d(t);if(n&&n.has(e))return n.get(e);var l={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var i=o?Object.getOwnPropertyDescriptor(e,r):null;i&&(i.get||i.set)?Object.defineProperty(l,r,i):l[r]=e[r]}l.default=e,n&&n.set(e,l);return l}(n(67294)),c=l(n(72095)),s=l(n(74390));function d(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(d=function(e){return e?n:t})(e)}var u=[{id:"Column-0",displayName:"Patient"},{id:"Column-1",displayName:"Location"},{id:"Column-2",displayName:"Illness Severity"},{id:"Column-3",displayName:"Visit"},{id:"Column-4",displayName:"Allergy"},{id:"Column-5",displayName:"Primary Contact"},{id:"Column-6",displayName:"Generic Order Counts"},{id:"Column-7",displayName:"Patient Age"},{id:"Column-8",displayName:"Medication History"},{id:"Column-9",displayName:"My Relationship"},{id:"Column-10",displayName:"Not Selectable",isSelectable:!1}],m=[{id:"1",cells:[{content:"Fleck, Arthur"},{content:"1007-MTN"},{content:"Unstable"},{content:"Inpatient, 2 months"},{content:""},{content:"Quinzell, Harleen"},{content:""},{isMasked:!0},{isMasked:!0},{content:"Admitting Physician"},{content:"",isSelectable:!1}]},{id:"2",cells:[{content:"Wayne, Bruce"},{content:"1007-MTN-DR"},{content:"Stable"},{content:"Outpatient, 2 days"},{content:"Phytochemicals"},{content:"Grayson, Richard"},{content:""},{content:""},{isMasked:!0},{content:"Admitting Physician"},{content:"",isSelectable:!1}]}],f=function(){var e=(0,i.useRef)(),t=u,n=m,l=(0,i.useState)([]),a=(0,r.default)(l,2),d=a[0],f=a[1],p=(0,i.useState)(!1),w=(0,r.default)(p,2),S=w[0],_=w[1],y=function(e,t){if(!t)return[];var n=[];return e?n=t:d.includes(t[0])?n=d.filter((function(e){return e!==t[0]})):(n=n.concat(d)).push(t[0]),n},R=function(){n.forEach((function(e){e.isSelected&&(e.isSelected=!1)})),f([])};return i.default.createElement(i.default.Fragment,null,i.default.createElement("div",null,i.default.createElement("label",{htmlFor:"rowSelectionMode"},i.default.createElement("b",null,"Row Selection Mode")),i.default.createElement("input",{id:"rowSelectionMode",type:"checkbox",ref:e,onChange:function(e){e.target.checked||R(),_(e.target.checked)}})),i.default.createElement(c.default,{id:"default-terra-worklist-data-grid",overflowColumns:t,rows:(0,o.default)(n),rowHeaderIndex:0,columnWidth:"180px",ariaLabel:"Worklist Data Grid",hasSelectableRows:S,onRowSelect:function(e){var t=[],l=n.find((function(t){return t.id===e}));l.isSelected=!l.isSelected,n.forEach((function(e){e.isSelected&&t.push(e.id)})),f(y(!1,t))},onRowSelectAll:function(){var e=[];n.forEach((function(t){t.isSelected=!0,e.push(t.id)})),f(y(!0,e))},onClearSelectedRows:function(){R()},onDisableSelectableRows:function(){e.current.checked=!1,_(!1),R()},onColumnSelect:function(e){e===s.default.ROW_SELECTION_COLUMN.id&&alert("Row Selection Header Clicked")}}))};t.Z=f},74390:function(e,t,n){n.r(t);var l={ROW_SELECTION_COLUMN:{id:"WorklistDataGrid-rowSelectionColumn",width:40,isSelectable:!0,isResizable:!1},FIRST_NON_HEADER_ROW:1};t.default=l},53560:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},33864:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=o(n(67294)),a=o(n(99139));function o(e){return e&&e.__esModule?e:{default:e}}function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},r.apply(this,arguments)}var i=function(e){var t=r({},e);return l.default.createElement(a.default,t,l.default.createElement("path",{d:"M10.3 24L33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};i.displayName="IconChevronLeft",i.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isBidi:!0};var c=i;t.default=c},87462:function(e,t,n){function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},l.apply(this,arguments)}n.d(t,{Z:function(){return l}})},44925:function(e,t,n){function l(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},o=Object.keys(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}n.d(t,{Z:function(){return l}})}}]);