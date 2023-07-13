"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[40644],{49271:function(e,t,n){var l=n(64836),a=n(18698);t.Z=void 0;var o=l(n(27424)),r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var n=p(t);if(n&&n.has(e))return n.get(e);var l={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var c=o?Object.getOwnPropertyDescriptor(e,r):null;c&&(c.get||c.set)?Object.defineProperty(l,r,c):l[r]=e[r]}l.default=e,n&&n.set(e,l);return l}(n(67294)),c=l(n(45697)),i=l(n(47166)),s=n(21538),d=l(n(33864)),u=l(n(23399)),m=n(51051),f=l(n(53560));function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(p=function(e){return e?n:t})(e)}var w=i.default.bind(f.default),S={example:c.default.element,exampleSrc:c.default.element,exampleCssSrc:c.default.element,title:c.default.string,description:c.default.node,isExpanded:c.default.bool},_=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},y=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},b=function(e){var t=e.example,n=e.exampleSrc,l=e.exampleCssSrc,a=e.title,c=e.description,i=e.isExpanded,f=(0,r.useState)(i),p=(0,o.default)(f,2),S=p[0],b=p[1],h=(0,r.useState)(!1),R=(0,o.default)(h,2),v=R[0],g=R[1],E=r.default.useContext(s.ThemeContext),x=void 0!==l,N=function(){g(!v),S&&b(!S)},C=function(){b(!S),v&&g(!v)},k=function(e,t){e.nativeEvent.keyCode!==m.KEY_SPACE&&e.nativeEvent.keyCode!==m.KEY_RETURN||(e.preventDefault(),t())};return r.default.createElement("div",{className:w("template",E.className)},r.default.createElement("div",{className:w("header")},a&&r.default.createElement("h2",{className:w("title")},a)),r.default.createElement("div",{className:w("content")},c&&r.default.createElement("div",{className:w("description")},c),t),r.default.createElement("div",{className:w("footer")},n?r.default.createElement("div",{className:w("button-container")},x&&r.default.createElement("button",{type:"button",className:w("css-toggle","item",{"is-selected":v}),onClick:N,onKeyDown:function(e){return k(e,N)},onBlur:_,onMouseDown:y,tabIndex:0,"data-focus-styles-enabled":!0},r.default.createElement(d.default,{className:w("chevron")}),r.default.createElement("span",null,"CSS"),r.default.createElement(u.default,{className:w("chevron")})),r.default.createElement("button",{type:"button",className:w("code-toggle","item",{"is-selected":S}),onClick:C,onKeyDown:function(e){return k(e,C)},onBlur:_,onMouseDown:y,tabIndex:0,"data-focus-styles-enabled":!0},r.default.createElement(d.default,{className:w("chevron")}),r.default.createElement("span",null,"Code"),r.default.createElement(u.default,{className:w("chevron")}))):null,r.default.createElement("div",null,v&&r.default.createElement("div",{className:w("css")},l),S&&r.default.createElement("div",{className:w("code")},n))))};b.propTypes=S,b.defaultProps={isExpanded:!1};var h=b;t.Z=h},90925:function(e,t,n){n.r(t),n.d(t,{default:function(){return S}});var l=n(87462),a=n(44925),o=n(67294),r=n(81254),c=n(22725),i=["components"],s={};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.mdx)("wrapper",(0,l.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React, { useState, useRef } from 'react';\nimport WorklistDataGrid from 'terra-worklist-data-grid';\n\nconst gridDataJSON = {\n  cols: [\n    { id: 'Column-0', displayName: 'Patient' },\n    { id: 'Column-1', displayName: 'Location' },\n    { id: 'Column-2', displayName: 'Illness Severity' },\n    { id: 'Column-3', displayName: 'Visit' },\n    { id: 'Column-4', displayName: 'Allergy' },\n    { id: 'Column-5', displayName: 'Primary Contact' },\n    { id: 'Column-6', displayName: 'Generic Order Counts' },\n    { id: 'Column-7', displayName: 'Patient Age' },\n    { id: 'Column-8', displayName: 'Medication History' },\n    { id: 'Column-9', displayName: 'My Relationship' },\n    { id: 'Column-10', displayName: 'Not Selectable', isSelectable: false },\n  ],\n  rows: [\n    {\n      id: '1',\n      cells: [\n        { content: 'Fleck, Arthur' },\n        { content: '1007-MTN' },\n        { content: 'Unstable' },\n        { content: 'Inpatient, 2 months' },\n        { content: '' },\n        { content: 'Quinzell, Harleen' },\n        { content: '' },\n        { isMasked: true },\n        { isMasked: true },\n        { content: 'Admitting Physician' },\n        { content: '', isSelectable: false },\n      ],\n    },\n    {\n      id: '2',\n      cells: [\n        { content: 'Wayne, Bruce' },\n        { content: '1007-MTN-DR' },\n        { content: 'Stable' },\n        { content: 'Outpatient, 2 days' },\n        { content: 'Phytochemicals' },\n        { content: 'Grayson, Richard' },\n        { content: '' },\n        { content: '' },\n        { isMasked: true },\n        { content: 'Admitting Physician' },\n        { content: '', isSelectable: false },\n      ],\n    },\n  ],\n};\n\nconst RowSelection = () => {\n  const rowSelectionModeRef = useRef();\n  const rowHeaderIndex = 0;\n  const { cols, rows } = gridDataJSON;\n  const [selectedRows, setSelectedRows] = useState([]);\n  const [hasSelectableRows, setHasSelectableRows] = useState(false);\n\n  const determineSelectedRows = (allRowsSelected, userSelectedRow) => {\n    if (!userSelectedRow) {\n      return [];\n    }\n\n    let remainingSelectedRow = [];\n    if (allRowsSelected) {\n      remainingSelectedRow = userSelectedRow;\n    } else if (selectedRows.includes(userSelectedRow[0])) {\n      // Row Deselect so remove this rowId.\n      remainingSelectedRow = selectedRows.filter(e => (e !== userSelectedRow[0]));\n    } else {\n      // Row Selected so add this rowId.\n      remainingSelectedRow = remainingSelectedRow.concat(selectedRows);\n      remainingSelectedRow.push(userSelectedRow[0]);\n    }\n    return remainingSelectedRow;\n  };\n\n  const clearRowSelection = () => {\n    // eslint-disable-next-line no-param-reassign\n    rows.forEach(r => { if (r.isSelected) { r.isSelected = false; } });\n    setSelectedRows([]);\n  };\n\n  const disableSelectableRows = () => {\n    rowSelectionModeRef.current.checked = false;\n    setHasSelectableRows(false);\n    clearRowSelection();\n  };\n\n  const onRowSelectionModeChange = (event) => {\n    if (!event.target.checked) {\n      clearRowSelection();\n    }\n    setHasSelectableRows(event.target.checked);\n  };\n\n  return (\n    <React.Fragment>\n      <div>\n        <label htmlFor=\"rowSelectionMode\"><b>Row Selection Mode</b></label>\n        <input\n          id=\"rowSelectionMode\"\n          type=\"checkbox\"\n          ref={rowSelectionModeRef}\n          onChange={onRowSelectionModeChange}\n        />\n      </div>\n      <WorklistDataGrid\n        id=\"default-terra-worklist-data-grid\"\n        columns={cols}\n        rows={[...rows]}\n        rowHeaderIndex={rowHeaderIndex}\n        columnWidth=\"180px\"\n        ariaLabel=\"Worklist Data Grid\"\n        hasSelectableRows={hasSelectableRows}\n        onRowSelect={(rowId) => {\n          const newRows = [];\n          const selectedRow = rows.find(e => e.id === rowId);\n          selectedRow.isSelected = !selectedRow.isSelected;\n          rows.forEach(element => {\n            if (element.isSelected) {\n              newRows.push(element.id);\n            }\n          });\n          setSelectedRows(determineSelectedRows(false, newRows));\n        }}\n        onRowSelectAll={() => {\n          const newRows = [];\n          rows.forEach(e => { e.isSelected = true; newRows.push(e.id); });\n          setSelectedRows(determineSelectedRows(true, newRows));\n        }}\n        onClearSelectedRows={() => {\n          clearRowSelection();\n        }}\n        onDisableSelectableRows={() => {\n          disableSelectableRows();\n        }}\n      />\n    </React.Fragment>\n  );\n};\n\nexport default RowSelection;\n\n")))}d.isMDXComponent=!0;var u=n(49271),m=function(e){var t=e.title,n=e.description,l=e.isExpanded;return o.createElement(u.Z,{title:t||"Row Selection",description:n,example:o.createElement(c.Z,null),exampleSrc:o.createElement(d,null),isExpanded:l})},f=["components"],p={},w="wrapper";function S(e){var t=e.components,n=(0,a.Z)(e,f);return(0,r.mdx)(w,(0,l.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)(m,{title:"Worklist Data Grid With Row Selection",mdxType:"RowSelection"}))}S.isMDXComponent=!0},22725:function(e,t,n){var l=n(64836),a=n(18698);t.Z=void 0;var o=l(n(861)),r=l(n(27424)),c=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var n=s(t);if(n&&n.has(e))return n.get(e);var l={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var c=o?Object.getOwnPropertyDescriptor(e,r):null;c&&(c.get||c.set)?Object.defineProperty(l,r,c):l[r]=e[r]}l.default=e,n&&n.set(e,l);return l}(n(67294)),i=l(n(72095));function s(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(s=function(e){return e?n:t})(e)}var d=[{id:"Column-0",displayName:"Patient"},{id:"Column-1",displayName:"Location"},{id:"Column-2",displayName:"Illness Severity"},{id:"Column-3",displayName:"Visit"},{id:"Column-4",displayName:"Allergy"},{id:"Column-5",displayName:"Primary Contact"},{id:"Column-6",displayName:"Generic Order Counts"},{id:"Column-7",displayName:"Patient Age"},{id:"Column-8",displayName:"Medication History"},{id:"Column-9",displayName:"My Relationship"},{id:"Column-10",displayName:"Not Selectable",isSelectable:!1}],u=[{id:"1",cells:[{content:"Fleck, Arthur"},{content:"1007-MTN"},{content:"Unstable"},{content:"Inpatient, 2 months"},{content:""},{content:"Quinzell, Harleen"},{content:""},{isMasked:!0},{isMasked:!0},{content:"Admitting Physician"},{content:"",isSelectable:!1}]},{id:"2",cells:[{content:"Wayne, Bruce"},{content:"1007-MTN-DR"},{content:"Stable"},{content:"Outpatient, 2 days"},{content:"Phytochemicals"},{content:"Grayson, Richard"},{content:""},{content:""},{isMasked:!0},{content:"Admitting Physician"},{content:"",isSelectable:!1}]}],m=function(){var e=(0,c.useRef)(),t=d,n=u,l=(0,c.useState)([]),a=(0,r.default)(l,2),s=a[0],m=a[1],f=(0,c.useState)(!1),p=(0,r.default)(f,2),w=p[0],S=p[1],_=function(e,t){if(!t)return[];var n=[];return e?n=t:s.includes(t[0])?n=s.filter((function(e){return e!==t[0]})):(n=n.concat(s)).push(t[0]),n},y=function(){n.forEach((function(e){e.isSelected&&(e.isSelected=!1)})),m([])};return c.default.createElement(c.default.Fragment,null,c.default.createElement("div",null,c.default.createElement("label",{htmlFor:"rowSelectionMode"},c.default.createElement("b",null,"Row Selection Mode")),c.default.createElement("input",{id:"rowSelectionMode",type:"checkbox",ref:e,onChange:function(e){e.target.checked||y(),S(e.target.checked)}})),c.default.createElement(i.default,{id:"default-terra-worklist-data-grid",columns:t,rows:(0,o.default)(n),rowHeaderIndex:0,columnWidth:"180px",ariaLabel:"Worklist Data Grid",hasSelectableRows:w,onRowSelect:function(e){var t=[],l=n.find((function(t){return t.id===e}));l.isSelected=!l.isSelected,n.forEach((function(e){e.isSelected&&t.push(e.id)})),m(_(!1,t))},onRowSelectAll:function(){var e=[];n.forEach((function(t){t.isSelected=!0,e.push(t.id)})),m(_(!0,e))},onClearSelectedRows:function(){y()},onDisableSelectableRows:function(){e.current.checked=!1,S(!1),y()}}))};t.Z=m},53560:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},33864:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=o(n(67294)),a=o(n(99139));function o(e){return e&&e.__esModule?e:{default:e}}function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},r.apply(this,arguments)}var c=function(e){var t=r({},e);return l.default.createElement(a.default,t,l.default.createElement("path",{d:"M10.3 24L33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};c.displayName="IconChevronLeft",c.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isBidi:!0};var i=c;t.default=i},87462:function(e,t,n){function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},l.apply(this,arguments)}n.d(t,{Z:function(){return l}})},44925:function(e,t,n){function l(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},o=Object.keys(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}n.d(t,{Z:function(){return l}})}}]);