"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[99769],{201:function(e,t,n){var l=n(24994),a=n(73738);t.A=void 0;var o=l(n(85715)),r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var l={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&{}.hasOwnProperty.call(e,r)){var c=o?Object.getOwnPropertyDescriptor(e,r):null;c&&(c.get||c.set)?Object.defineProperty(l,r,c):l[r]=e[r]}return l.default=e,n&&n.set(e,l),l}(n(96540)),c=l(n(5556)),i=l(n(67967)),s=n(92912),d=l(n(49558)),u=l(n(53665)),m=n(25966),p=l(n(89986));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}var w=i.default.bind(p.default),_={example:c.default.element,exampleSrc:c.default.element,exampleCssSrc:c.default.element,title:c.default.string,description:c.default.node,isExpanded:c.default.bool},b=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},x=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},S=function(e){var t=e.example,n=e.exampleSrc,l=e.exampleCssSrc,a=e.title,c=e.description,i=e.isExpanded,p=(0,r.useState)(i),f=(0,o.default)(p,2),_=f[0],S=f[1],h=(0,r.useState)(!1),g=(0,o.default)(h,2),v=g[0],y=g[1],E=r.default.useContext(s.ThemeContext),N=void 0!==l,T=function(){y(!v),_&&S(!_)},R=function(){S(!_),v&&y(!v)},C=function(e,t){e.nativeEvent.keyCode!==m.KEY_SPACE&&e.nativeEvent.keyCode!==m.KEY_RETURN||(e.preventDefault(),t())};return r.default.createElement("div",{className:w("template",E.className)},r.default.createElement("div",{className:w("header")},a&&r.default.createElement("h2",{className:w("title")},a)),r.default.createElement("div",{className:w("content")},c&&r.default.createElement("div",{className:w("description")},c),t),r.default.createElement("div",{className:w("footer")},n?r.default.createElement("div",{className:w("button-container")},N&&r.default.createElement("button",{type:"button",className:w("css-toggle","item",{"is-selected":v}),onClick:T,onKeyDown:function(e){return C(e,T)},onBlur:b,onMouseDown:x,tabIndex:0,"data-focus-styles-enabled":!0},r.default.createElement(d.default,{className:w("chevron")}),r.default.createElement("span",null,"CSS"),r.default.createElement(u.default,{className:w("chevron")})),r.default.createElement("button",{type:"button",className:w("code-toggle","item",{"is-selected":_}),onClick:R,onKeyDown:function(e){return C(e,R)},onBlur:b,onMouseDown:x,tabIndex:0,"data-focus-styles-enabled":!0},r.default.createElement(d.default,{className:w("chevron")}),r.default.createElement("span",null,"Code"),r.default.createElement(u.default,{className:w("chevron")}))):null,r.default.createElement("div",null,v&&r.default.createElement("div",{className:w("css")},l),_&&r.default.createElement("div",{className:w("code")},n))))};S.propTypes=_,S.defaultProps={isExpanded:!1};t.A=S},99769:function(e,t,n){n.r(t),n.d(t,{default:function(){return _}});var l=n(58168),a=n(53986),o=n(96540),r=n(36665),c=n(38121),i=["components"],s={};function d(e){var t=e.components,n=(0,a.A)(e,i);return(0,r.mdx)("wrapper",(0,l.A)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React, { useState, useCallback } from 'react';\nimport Table from 'terra-table';\n\nconst tableDataJSON = {\n  cols: [\n    { id: 'Column-0', displayName: 'Patient' },\n    { id: 'Column-1', displayName: 'Location' },\n    { id: 'Column-2', displayName: 'Illness Severity' },\n  ],\n  rows: [\n    {\n      id: '1',\n      isSelectable: true,\n      cells: [\n        { content: 'Fleck, Arthur' },\n        { content: '1007-MTN' },\n        { content: 'Unstable' },\n      ],\n    },\n    {\n      id: '2',\n      isSelectable: true,\n      cells: [\n        { content: 'Wayne, Bruce' },\n        { content: '1107-MTN-DR' },\n        { content: 'Stable' },\n\n      ],\n    },\n    {\n      id: '3',\n      isSelectable: true,\n      cells: [\n        { content: 'Carr, Alicia' },\n        { content: '1007-MTN' },\n        { content: 'Unstable' },\n\n      ],\n    },\n    {\n      id: '4',\n      isSelectable: true,\n      cells: [\n        { content: 'McMurphy, Donald' },\n        { content: '1024-MTN', isMasked: true },\n        { content: 'Stable' },\n      ],\n    },\n    {\n      id: '5',\n      isSelectable: true,\n      cells: [\n        { content: 'Peters, Timothy' },\n        { content: '1207-MTN' },\n        { content: 'Unstable', isMasked: true },\n      ],\n    },\n  ],\n};\n\nconst TableSingleRowSelection = () => {\n  const rowHeaderIndex = 0;\n  const { cols, rows } = tableDataJSON;\n  const [rowData, setRowData] = useState(rows);\n\n  const onRowSelect = useCallback((rowSelection) => {\n    const { rowId } = rowSelection;\n\n    const newRowData = [...rowData];\n\n    const dataRowToUpdate = newRowData.find(row => row.id === rowId);\n\n    newRowData.forEach((row) => {\n      if (row.id !== dataRowToUpdate.id) {\n        // eslint-disable-next-line no-return-assign, no-param-reassign\n        row.isSelected = false;\n      }\n    });\n\n    dataRowToUpdate.isSelected = !dataRowToUpdate.isSelected;\n\n    setRowData(newRowData);\n  }, [rowData]);\n\n  const onRowSelectionHeaderSelect = useCallback(() => {\n    // eslint-disable-next-line no-alert\n    alert('Row Selection Header Clicked');\n  }, []);\n\n  return (\n    <Table\n      id=\"table-with-single-row-selection\"\n      overflowColumns={cols}\n      rows={rowData}\n      rowHeaderIndex={rowHeaderIndex}\n      columnWidth=\"180px\"\n      ariaLabel=\"Table with Single Row Selection\"\n      rowSelectionMode=\"single\" // Prop to turn row selection mode on/off\n      onRowSelect={onRowSelect} // For row selection, consumer must provide a callback that the Worklist Data Grid will call when the user selects one or more rows.\n      onRowSelectionHeaderSelect={onRowSelectionHeaderSelect}\n    />\n  );\n};\n\nexport default TableSingleRowSelection;\n\n")))}d.isMDXComponent=!0;var u=n(201),m=function(e){var t=e.title,n=e.description,l=e.isExpanded;return o.createElement(u.A,{title:t||"Table Single Row Selection",description:n,example:o.createElement(c.A,null),exampleSrc:o.createElement(d,null),isExpanded:l})},p=["components"],f={},w="wrapper";function _(e){var t=e.components,n=(0,a.A)(e,p);return(0,r.mdx)(w,(0,l.A)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"table---single-row-selection"},"Table - Single Row Selection"),(0,r.mdx)("h3",{id:"description"},"Description"),(0,r.mdx)("p",null,"Row selection mode is controlled with a property and is off by default.\nWhen creating a table that supports single row selection, the consumer must set the property.\nThis example demonstrates a table with full support for multiple row selections.\nBecause the component is an accessible table, each row selection checkbox is a tab stop."),(0,r.mdx)("h3",{id:"required-properties"},"Required Properties"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"rowSelectionMode"),(0,r.mdx)("li",{parentName:"ul"},"onRowSelect")),(0,r.mdx)("h2",{id:"row-selection-interactions"},"Row Selection Interactions"),(0,r.mdx)("p",null,"For this example, you can perform the following actions to achieve row-centric outcomes:"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Outcome"),(0,r.mdx)("th",{parentName:"tr",align:null},"Action"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"Select a Row"),(0,r.mdx)("td",{parentName:"tr",align:null},"When single row selection is enabled, select the appropriate row, or press ",(0,r.mdx)("strong",{parentName:"td"},"TAB")," until the row is active and then press the ",(0,r.mdx)("strong",{parentName:"td"},"SPACEBAR"),".")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"Clear a Row"),(0,r.mdx)("td",{parentName:"tr",align:null},"Select the appropriate row, or press ",(0,r.mdx)("strong",{parentName:"td"},"TAB")," until the row is active and then press the ",(0,r.mdx)("strong",{parentName:"td"},"SPACEBAR"),".")))),(0,r.mdx)(m,{title:"Table With Single Row Selection",mdxType:"TableSingleRowSelection"}))}_.isMDXComponent=!0},38121:function(e,t,n){var l=n(24994),a=n(73738);t.A=void 0;var o=l(n(41132)),r=l(n(85715)),c=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var n=s(t);if(n&&n.has(e))return n.get(e);var l={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&{}.hasOwnProperty.call(e,r)){var c=o?Object.getOwnPropertyDescriptor(e,r):null;c&&(c.get||c.set)?Object.defineProperty(l,r,c):l[r]=e[r]}return l.default=e,n&&n.set(e,l),l}(n(96540)),i=l(n(83264));function s(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(s=function(e){return e?n:t})(e)}var d=[{id:"Column-0",displayName:"Patient"},{id:"Column-1",displayName:"Location"},{id:"Column-2",displayName:"Illness Severity"}],u=[{id:"1",isSelectable:!0,cells:[{content:"Fleck, Arthur"},{content:"1007-MTN"},{content:"Unstable"}]},{id:"2",isSelectable:!0,cells:[{content:"Wayne, Bruce"},{content:"1107-MTN-DR"},{content:"Stable"}]},{id:"3",isSelectable:!0,cells:[{content:"Carr, Alicia"},{content:"1007-MTN"},{content:"Unstable"}]},{id:"4",isSelectable:!0,cells:[{content:"McMurphy, Donald"},{content:"1024-MTN",isMasked:!0},{content:"Stable"}]},{id:"5",isSelectable:!0,cells:[{content:"Peters, Timothy"},{content:"1207-MTN"},{content:"Unstable",isMasked:!0}]}];t.A=function(){var e=d,t=u,n=(0,c.useState)(t),l=(0,r.default)(n,2),a=l[0],s=l[1],m=(0,c.useCallback)((function(e){var t=e.rowId,n=(0,o.default)(a),l=n.find((function(e){return e.id===t}));n.forEach((function(e){e.id!==l.id&&(e.isSelected=!1)})),l.isSelected=!l.isSelected,s(n)}),[a]),p=(0,c.useCallback)((function(){alert("Row Selection Header Clicked")}),[]);return c.default.createElement(i.default,{id:"table-with-single-row-selection",overflowColumns:e,rows:a,rowHeaderIndex:0,columnWidth:"180px",ariaLabel:"Table with Single Row Selection",rowSelectionMode:"single",onRowSelect:m,onRowSelectionHeaderSelect:p})}},89986:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},58168:function(e,t,n){function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)({}).hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},l.apply(null,arguments)}n.d(t,{A:function(){return l}})},53986:function(e,t,n){function l(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n={};for(var l in e)if({}.hasOwnProperty.call(e,l)){if(t.indexOf(l)>=0)continue;n[l]=e[l]}return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||{}.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}n.d(t,{A:function(){return l}})}}]);