"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[19528],{49271:function(e,t,n){var a=n(64836),l=n(18698);t.Z=void 0;var o=a(n(27424)),r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==l(e)&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var a={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var i=o?Object.getOwnPropertyDescriptor(e,r):null;i&&(i.get||i.set)?Object.defineProperty(a,r,i):a[r]=e[r]}a.default=e,n&&n.set(e,a);return a}(n(67294)),i=a(n(45697)),c=a(n(47166)),s=n(21538),d=a(n(33864)),u=a(n(23399)),m=n(51051),p=a(n(53560));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}var w=c.default.bind(p.default),_={example:i.default.element,exampleSrc:i.default.element,exampleCssSrc:i.default.element,title:i.default.string,description:i.default.node,isExpanded:i.default.bool},y=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},S=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},b=function(e){var t=e.example,n=e.exampleSrc,a=e.exampleCssSrc,l=e.title,i=e.description,c=e.isExpanded,p=(0,r.useState)(c),f=(0,o.default)(p,2),_=f[0],b=f[1],h=(0,r.useState)(!1),R=(0,o.default)(h,2),v=R[0],g=R[1],E=r.default.useContext(s.ThemeContext),x=void 0!==a,N=function(){g(!v),_&&b(!_)},C=function(){b(!_),v&&g(!v)},k=function(e,t){e.nativeEvent.keyCode!==m.KEY_SPACE&&e.nativeEvent.keyCode!==m.KEY_RETURN||(e.preventDefault(),t())};return r.default.createElement("div",{className:w("template",E.className)},r.default.createElement("div",{className:w("header")},l&&r.default.createElement("h2",{className:w("title")},l)),r.default.createElement("div",{className:w("content")},i&&r.default.createElement("div",{className:w("description")},i),t),r.default.createElement("div",{className:w("footer")},n?r.default.createElement("div",{className:w("button-container")},x&&r.default.createElement("button",{type:"button",className:w("css-toggle","item",{"is-selected":v}),onClick:N,onKeyDown:function(e){return k(e,N)},onBlur:y,onMouseDown:S,tabIndex:0,"data-focus-styles-enabled":!0},r.default.createElement(d.default,{className:w("chevron")}),r.default.createElement("span",null,"CSS"),r.default.createElement(u.default,{className:w("chevron")})),r.default.createElement("button",{type:"button",className:w("code-toggle","item",{"is-selected":_}),onClick:C,onKeyDown:function(e){return k(e,C)},onBlur:y,onMouseDown:S,tabIndex:0,"data-focus-styles-enabled":!0},r.default.createElement(d.default,{className:w("chevron")}),r.default.createElement("span",null,"Code"),r.default.createElement(u.default,{className:w("chevron")}))):null,r.default.createElement("div",null,v&&r.default.createElement("div",{className:w("css")},a),_&&r.default.createElement("div",{className:w("code")},n))))};b.propTypes=_,b.defaultProps={isExpanded:!1};var h=b;t.Z=h},93168:function(e,t,n){n.r(t),n.d(t,{default:function(){return _}});var a=n(87462),l=n(44925),o=n(67294),r=n(81254),i=n(36450),c=["components"],s={};function d(e){var t=e.components,n=(0,l.Z)(e,c);return(0,r.mdx)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React, { useState } from 'react';\nimport WorklistDataGrid from 'terra-worklist-data-grid';\n\nconst gridDataJSON = {\n  cols: [\n    { id: 'Column-0', displayName: 'Patient' },\n    { id: 'Column-1', displayName: 'Location' },\n    { id: 'Column-2', displayName: 'Illness Severity' },\n    { id: 'Column-3', displayName: 'Visit' },\n    { id: 'Column-4', displayName: 'Allergy' },\n    { id: 'Column-5', displayName: 'Primary Contact' },\n    { id: 'Column-6', displayName: 'Generic Order Counts' },\n    { id: 'Column-7', displayName: 'Patient Age' },\n    { id: 'Column-8', displayName: 'Medication History' },\n    { id: 'Column-9', displayName: 'My Relationship' },\n    { id: 'Column-10', displayName: 'Not Selectable', isSelectable: false },\n  ],\n  rows: [\n    {\n      id: '1',\n      ariaLabel: 'First Row',\n      cells: [\n        { content: 'Fleck, Arthur' },\n        { content: '1007-MTN' },\n        { content: 'Unstable' },\n        { content: 'Inpatient, 2 months' },\n        { content: '' },\n        { content: 'Quinzell, Harleen' },\n        { content: '' },\n        { isMasked: true },\n        { isMasked: true },\n        { content: 'Admitting Physician' },\n        { content: '', isSelectable: false },\n      ],\n    },\n    {\n      id: '2',\n      ariaLabel: 'Second Row',\n      cells: [\n        { content: 'Wayne, Bruce' },\n        { content: '1007-MTN-DR' },\n        { content: 'Stable' },\n        { content: 'Outpatient, 2 days' },\n        { content: 'Phytochemicals' },\n        { content: 'Grayson, Richard' },\n        { content: '' },\n        { content: '' },\n        { isMasked: true },\n        { content: 'Admitting Physician' },\n        { content: '', isSelectable: false },\n      ],\n    },\n  ],\n};\nconst WorklistDataGridWithRowSelection = () => {\n  const rowHeaderIndex = 0;\n  const { cols, rows } = gridDataJSON;\n  const [selectedRows, setSelectedRows] = useState([]);\n  const [hasSelectableRows, setHasSelectableRows] = useState(true);\n\n  const determineSelectedRows = (allRowsSelected, userSelectedRow) => {\n    if (!userSelectedRow) {\n      return [];\n    }\n\n    let remainingSelectedRow = [];\n    if (allRowsSelected) {\n      remainingSelectedRow = userSelectedRow;\n    } else if (selectedRows.includes(userSelectedRow[0])) {\n      // Row Deselect so remove this rowId.\n      remainingSelectedRow = selectedRows.filter(e => (e !== userSelectedRow[0]));\n    } else {\n      // Row Selected so add this rowId.\n      remainingSelectedRow = remainingSelectedRow.concat(selectedRows);\n      remainingSelectedRow.push(userSelectedRow[0]);\n    }\n    return remainingSelectedRow;\n  };\n\n  const clearRowSelection = () => {\n    // eslint-disable-next-line no-param-reassign\n    rows.forEach(r => { if (r.isSelected) { r.isSelected = false; } });\n    setSelectedRows([]);\n  };\n\n  const disableSelectableRows = () => {\n    setHasSelectableRows(false);\n    clearRowSelection();\n  };\n\n  return (\n    <WorklistDataGrid\n      id=\"worklist-data-grid-row-selection\"\n      columns={cols}\n      rows={[...rows]}\n      rowHeaderIndex={rowHeaderIndex}\n      rowHeight=\"50px\"\n      columnWidth=\"50px\"\n      columnHeaderHeight=\"50px\"\n      ariaLabel=\"Worklist Data Grid\"\n      hasSelectableRows={hasSelectableRows}\n      onRowSelect={(rowId) => {\n        const newRows = [];\n        const selectedRow = rows.find(e => e.id === rowId);\n        selectedRow.isSelected = !selectedRow.isSelected;\n        rows.forEach(element => {\n          if (element.isSelected) {\n            newRows.push(element.id);\n          }\n        });\n        setSelectedRows(determineSelectedRows(false, newRows));\n      }}\n      onRowSelectAll={() => {\n        const newRows = [];\n        rows.forEach(e => { e.isSelected = true; newRows.push(e.id); });\n        setSelectedRows(determineSelectedRows(true, newRows));\n      }}\n      onClearSelectedRows={() => {\n        clearRowSelection();\n      }}\n      onDisableSelectableRows={() => {\n        disableSelectableRows();\n      }}\n    />\n  );\n};\n\nexport default WorklistDataGridWithRowSelection;\n\n")))}d.isMDXComponent=!0;var u=n(49271),m=function(e){var t=e.title,n=e.description,a=e.isExpanded;return o.createElement(u.Z,{title:t||"Worklist Data Grid With Row Selection",description:n,example:o.createElement(i.Z,null),exampleSrc:o.createElement(d,null),isExpanded:a})},p=["components"],f={},w="wrapper";function _(e){var t=e.components,n=(0,l.Z)(e,p);return(0,r.mdx)(w,(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)(m,{title:"Worklist Data Grid With Row Selection",mdxType:"WorklistDataGridWithRowSelection"}))}_.isMDXComponent=!0},36450:function(e,t,n){var a=n(64836),l=n(18698);t.Z=void 0;var o=a(n(861)),r=a(n(27424)),i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==l(e)&&"function"!=typeof e)return{default:e};var n=s(t);if(n&&n.has(e))return n.get(e);var a={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var i=o?Object.getOwnPropertyDescriptor(e,r):null;i&&(i.get||i.set)?Object.defineProperty(a,r,i):a[r]=e[r]}a.default=e,n&&n.set(e,a);return a}(n(67294)),c=a(n(72095));function s(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(s=function(e){return e?n:t})(e)}var d=[{id:"Column-0",displayName:"Patient"},{id:"Column-1",displayName:"Location"},{id:"Column-2",displayName:"Illness Severity"},{id:"Column-3",displayName:"Visit"},{id:"Column-4",displayName:"Allergy"},{id:"Column-5",displayName:"Primary Contact"},{id:"Column-6",displayName:"Generic Order Counts"},{id:"Column-7",displayName:"Patient Age"},{id:"Column-8",displayName:"Medication History"},{id:"Column-9",displayName:"My Relationship"},{id:"Column-10",displayName:"Not Selectable",isSelectable:!1}],u=[{id:"1",ariaLabel:"First Row",cells:[{content:"Fleck, Arthur"},{content:"1007-MTN"},{content:"Unstable"},{content:"Inpatient, 2 months"},{content:""},{content:"Quinzell, Harleen"},{content:""},{isMasked:!0},{isMasked:!0},{content:"Admitting Physician"},{content:"",isSelectable:!1}]},{id:"2",ariaLabel:"Second Row",cells:[{content:"Wayne, Bruce"},{content:"1007-MTN-DR"},{content:"Stable"},{content:"Outpatient, 2 days"},{content:"Phytochemicals"},{content:"Grayson, Richard"},{content:""},{content:""},{isMasked:!0},{content:"Admitting Physician"},{content:"",isSelectable:!1}]}],m=function(){var e=d,t=u,n=(0,i.useState)([]),a=(0,r.default)(n,2),l=a[0],s=a[1],m=(0,i.useState)(!0),p=(0,r.default)(m,2),f=p[0],w=p[1],_=function(e,t){if(!t)return[];var n=[];return e?n=t:l.includes(t[0])?n=l.filter((function(e){return e!==t[0]})):(n=n.concat(l)).push(t[0]),n},y=function(){t.forEach((function(e){e.isSelected&&(e.isSelected=!1)})),s([])};return i.default.createElement(c.default,{id:"worklist-data-grid-row-selection",columns:e,rows:(0,o.default)(t),rowHeaderIndex:0,rowHeight:"50px",columnWidth:"50px",columnHeaderHeight:"50px",ariaLabel:"Worklist Data Grid",hasSelectableRows:f,onRowSelect:function(e){var n=[],a=t.find((function(t){return t.id===e}));a.isSelected=!a.isSelected,t.forEach((function(e){e.isSelected&&n.push(e.id)})),s(_(!1,n))},onRowSelectAll:function(){var e=[];t.forEach((function(t){t.isSelected=!0,e.push(t.id)})),s(_(!0,e))},onClearSelectedRows:function(){y()},onDisableSelectableRows:function(){w(!1),y()}})};t.Z=m},53560:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},33864:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(67294)),l=o(n(99139));function o(e){return e&&e.__esModule?e:{default:e}}function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}var i=function(e){var t=r({},e);return a.default.createElement(l.default,t,a.default.createElement("path",{d:"M10.3 24L33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};i.displayName="IconChevronLeft",i.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isBidi:!0};var c=i;t.default=c},87462:function(e,t,n){function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},a.apply(this,arguments)}n.d(t,{Z:function(){return a}})},44925:function(e,t,n){function a(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}n.d(t,{Z:function(){return a}})}}]);