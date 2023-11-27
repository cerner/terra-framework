"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[19729],{49271:function(e,t,n){var a=n(64836),o=n(18698);t.Z=void 0;var l=a(n(27424)),r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==o(e)&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var a={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var c=l?Object.getOwnPropertyDescriptor(e,r):null;c&&(c.get||c.set)?Object.defineProperty(a,r,c):a[r]=e[r]}a.default=e,n&&n.set(e,a);return a}(n(67294)),c=a(n(45697)),s=a(n(47166)),i=n(21538),u=a(n(33864)),d=a(n(23399)),m=n(51051),p=a(n(53560));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}var b=s.default.bind(p.default),h={example:c.default.element,exampleSrc:c.default.element,exampleCssSrc:c.default.element,title:c.default.string,description:c.default.node,isExpanded:c.default.bool},_=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},y=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},w=function(e){var t=e.example,n=e.exampleSrc,a=e.exampleCssSrc,o=e.title,c=e.description,s=e.isExpanded,p=(0,r.useState)(s),f=(0,l.default)(p,2),h=f[0],w=f[1],x=(0,r.useState)(!1),C=(0,l.default)(x,2),v=C[0],g=C[1],E=r.default.useContext(i.ThemeContext),S=void 0!==a,T=function(){g(!v),h&&w(!h)},O=function(){w(!h),v&&g(!v)},N=function(e,t){e.nativeEvent.keyCode!==m.KEY_SPACE&&e.nativeEvent.keyCode!==m.KEY_RETURN||(e.preventDefault(),t())};return r.default.createElement("div",{className:b("template",E.className)},r.default.createElement("div",{className:b("header")},o&&r.default.createElement("h2",{className:b("title")},o)),r.default.createElement("div",{className:b("content")},c&&r.default.createElement("div",{className:b("description")},c),t),r.default.createElement("div",{className:b("footer")},n?r.default.createElement("div",{className:b("button-container")},S&&r.default.createElement("button",{type:"button",className:b("css-toggle","item",{"is-selected":v}),onClick:T,onKeyDown:function(e){return N(e,T)},onBlur:_,onMouseDown:y,tabIndex:0,"data-focus-styles-enabled":!0},r.default.createElement(u.default,{className:b("chevron")}),r.default.createElement("span",null,"CSS"),r.default.createElement(d.default,{className:b("chevron")})),r.default.createElement("button",{type:"button",className:b("code-toggle","item",{"is-selected":h}),onClick:O,onKeyDown:function(e){return N(e,O)},onBlur:_,onMouseDown:y,tabIndex:0,"data-focus-styles-enabled":!0},r.default.createElement(u.default,{className:b("chevron")}),r.default.createElement("span",null,"Code"),r.default.createElement(d.default,{className:b("chevron")}))):null,r.default.createElement("div",null,v&&r.default.createElement("div",{className:b("css")},a),h&&r.default.createElement("div",{className:b("code")},n))))};w.propTypes=h,w.defaultProps={isExpanded:!1};var x=w;t.Z=x},66566:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var a=n(87462),o=n(44925),l=n(67294),r=n(81254),c=n(8113),s=["components"],i={};function u(e){var t=e.components,n=(0,o.Z)(e,s);return(0,r.mdx)("wrapper",(0,a.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React, { useState } from 'react';\nimport Table from 'terra-table';\n\nconst tableDataJSON = {\n  cols: [\n    {\n      id: 'Column-0', displayName: 'Patient', sortIndicator: 'ascending', hasError: true, isSelectable: true, // This column header will be rendered with a sort indicator and an error icon by default.\n    },\n    { id: 'Column-1', displayName: 'Location', isSelectable: true },\n    { id: 'Column-2', displayName: 'Illness Severity', isSelectable: true },\n    { id: 'Column-3', displayName: 'Visit', isSelectable: true },\n    { id: 'Column-4', displayName: 'Allergy', hasError: true }, // Use hasError property to display an error icon in the column header\n    { id: 'Column-5', displayName: 'Primary Contact', isSelectable: true },\n  ],\n  rows: [\n    {\n      id: '1',\n      cells: [\n        { content: 'Fleck, Arthur' },\n        { content: '1007-MTN' },\n        { content: 'Unstable' },\n        { content: 'Inpatient, 2 months' },\n        { content: '' },\n        { content: 'Quinzell, Harleen' },\n      ],\n    },\n    {\n      id: '2',\n      cells: [\n        { content: 'Wayne, Bruce' },\n        { content: '1007-MTN-DR' },\n        { content: 'Stable' },\n        { content: 'Outpatient, 2 days' },\n        { content: 'Phytochemicals' },\n        { content: 'Grayson, Richard' },\n      ],\n    },\n  ],\n};\n\nconst TableWithColumnStates = () => {\n  const rowHeaderIndex = 0;\n  const { cols, rows } = tableDataJSON;\n\n  const [tableColumns, setTableColumns] = useState(cols);\n  const [tableRows, setTableRows] = useState(rows);\n\n  // The onColumnSelect will sort the rows and toggle the current sort indicator.\n  const onColumnSelect = (columnId) => {\n    const newColumnArray = tableColumns.map((column, columnIndex) => {\n      const newColumn = { ...column };\n\n      if (column.id === columnId) {\n        newColumn.sortIndicator = column.sortIndicator === 'ascending' ? 'descending' : 'ascending';\n\n        const newGridRows = [...tableRows];\n        newGridRows.sort((rowA, rowB) => {\n          const firstRowContent = rowA.cells[columnIndex].content || '';\n          const secondRowContent = rowB.cells[columnIndex].content || '';\n\n          if (newColumn.sortIndicator === 'ascending') {\n            return firstRowContent.localeCompare(secondRowContent);\n          }\n          return secondRowContent.localeCompare(firstRowContent);\n        });\n\n        setTableRows(newGridRows);\n      } else {\n        newColumn.sortIndicator = undefined;\n      }\n\n      return newColumn;\n    });\n\n    setTableColumns(newColumnArray);\n  };\n\n  return (\n    <Table\n      id=\"terra-table-with-column-states\"\n      overflowColumns={tableColumns}\n      rows={tableRows}\n      rowHeaderIndex={rowHeaderIndex}\n      rowHeight=\"50px\"\n      defaultColumnWidth={100}\n      columnHeaderHeight=\"50px\"\n      onColumnSelect={onColumnSelect} // Consumer must provide this callback to the Worklist Data Grid for it to call when the user selects a column header.\n      ariaLabel=\"Table\"\n    />\n  );\n};\n\nexport default TableWithColumnStates;\n\n")))}u.isMDXComponent=!0;var d=n(49271),m=function(e){var t=e.title,n=e.description,a=e.isExpanded;return l.createElement(d.Z,{title:t||"Table Column States",description:n,example:l.createElement(c.Z,null),exampleSrc:l.createElement(u,null),isExpanded:a})},p=["components"],f={},b="wrapper";function h(e){var t=e.components,n=(0,o.Z)(e,p);return(0,r.mdx)(b,(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"column-states-and-selection"},"Column States and Selection"),(0,r.mdx)("h3",{id:"description"},"Description"),(0,r.mdx)("p",null,"This example demonstrates a ",(0,r.mdx)("a",{parentName:"p",href:"/terra-framework/pull/1915/components/cerner-terra-framework-docs/table/about"},"Table")," that supports column states and sorting.\nA column can be selected by clicking on the column header or tabbing to the column header and pressing the Space key on the focused column header.\nOnly columns that are selectable can be selected."),(0,r.mdx)("p",null,"The Column can display error and sort indicator icons to represent its current state."),(0,r.mdx)("h3",{id:"properties-required"},"Properties required"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"The ",(0,r.mdx)("strong",{parentName:"li"},(0,r.mdx)("em",{parentName:"strong"},"onColumnSelect"))," callback prop: When the user selects a column, this callback will be called with the columnId of the selected column.")),(0,r.mdx)("p",null,"The below example also demonstrates how properties such as ",(0,r.mdx)("em",{parentName:"p"},"isSelectable"),", ",(0,r.mdx)("em",{parentName:"p"},"hasError")," and ",(0,r.mdx)("em",{parentName:"p"},"sortIndicator")," can be provided by the consumer to control if column header is selectable, display error state, and show sort indicator icons respectively."),(0,r.mdx)(m,{title:"Table Column States",mdxType:"TableColumnStates"}))}h.isMDXComponent=!0},8113:function(e,t,n){var a=n(64836),o=n(18698);t.Z=void 0;var l=a(n(861)),r=a(n(38416)),c=a(n(27424)),s=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=o(e)&&"function"!=typeof e)return{default:e};var n=u(t);if(n&&n.has(e))return n.get(e);var a={__proto__:null},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var c=l?Object.getOwnPropertyDescriptor(e,r):null;c&&(c.get||c.set)?Object.defineProperty(a,r,c):a[r]=e[r]}return a.default=e,n&&n.set(e,a),a}(n(67294)),i=a(n(12810));function u(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(u=function(e){return e?n:t})(e)}function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var m=[{id:"Column-0",displayName:"Patient",sortIndicator:"ascending",hasError:!0,isSelectable:!0},{id:"Column-1",displayName:"Location",isSelectable:!0},{id:"Column-2",displayName:"Illness Severity",isSelectable:!0},{id:"Column-3",displayName:"Visit",isSelectable:!0},{id:"Column-4",displayName:"Allergy",hasError:!0},{id:"Column-5",displayName:"Primary Contact",isSelectable:!0}],p=[{id:"1",cells:[{content:"Fleck, Arthur"},{content:"1007-MTN"},{content:"Unstable"},{content:"Inpatient, 2 months"},{content:""},{content:"Quinzell, Harleen"}]},{id:"2",cells:[{content:"Wayne, Bruce"},{content:"1007-MTN-DR"},{content:"Stable"},{content:"Outpatient, 2 days"},{content:"Phytochemicals"},{content:"Grayson, Richard"}]}];t.Z=function(){var e=m,t=p,n=(0,s.useState)(e),a=(0,c.default)(n,2),o=a[0],u=a[1],f=(0,s.useState)(t),b=(0,c.default)(f,2),h=b[0],_=b[1];return s.default.createElement(i.default,{id:"terra-table-with-column-states",overflowColumns:o,rows:h,rowHeaderIndex:0,rowHeight:"50px",defaultColumnWidth:100,columnHeaderHeight:"50px",onColumnSelect:function(e){var t=o.map((function(t,n){var a=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){(0,r.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},t);if(t.id===e){a.sortIndicator="ascending"===t.sortIndicator?"descending":"ascending";var o=(0,l.default)(h);o.sort((function(e,t){var o=e.cells[n].content||"",l=t.cells[n].content||"";return"ascending"===a.sortIndicator?o.localeCompare(l):l.localeCompare(o)})),_(o)}else a.sortIndicator=void 0;return a}));u(t)},ariaLabel:"Table"})}},53560:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},87462:function(e,t,n){function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},a.apply(this,arguments)}n.d(t,{Z:function(){return a}})},44925:function(e,t,n){function a(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.d(t,{Z:function(){return a}})}}]);