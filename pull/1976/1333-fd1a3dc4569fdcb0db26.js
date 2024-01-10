"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[1333,33377,43089,37703],{49271:function(e,t,n){var l=n(64836),o=n(18698);t.Z=void 0;var c=l(n(27424)),a=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==o(e)&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var l={},c=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var s=c?Object.getOwnPropertyDescriptor(e,a):null;s&&(s.get||s.set)?Object.defineProperty(l,a,s):l[a]=e[a]}l.default=e,n&&n.set(e,l);return l}(n(67294)),s=l(n(45697)),r=l(n(19845)),i=n(21538),d=l(n(33864)),u=l(n(23399)),m=n(51051),p=l(n(53560));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}var S=r.default.bind(p.default),w={example:s.default.element,exampleSrc:s.default.element,exampleCssSrc:s.default.element,title:s.default.string,description:s.default.node,isExpanded:s.default.bool},b=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},h=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},_=function(e){var t=e.example,n=e.exampleSrc,l=e.exampleCssSrc,o=e.title,s=e.description,r=e.isExpanded,p=(0,a.useState)(r),f=(0,c.default)(p,2),w=f[0],_=f[1],y=(0,a.useState)(!1),x=(0,c.default)(y,2),C=x[0],g=x[1],v=a.default.useContext(i.ThemeContext),O=void 0!==l,T=function(){g(!C),w&&_(!w)},E=function(){_(!w),C&&g(!C)},N=function(e,t){e.nativeEvent.keyCode!==m.KEY_SPACE&&e.nativeEvent.keyCode!==m.KEY_RETURN||(e.preventDefault(),t())};return a.default.createElement("div",{className:S("template",v.className)},a.default.createElement("div",{className:S("header")},o&&a.default.createElement("h2",{className:S("title")},o)),a.default.createElement("div",{className:S("content")},s&&a.default.createElement("div",{className:S("description")},s),t),a.default.createElement("div",{className:S("footer")},n?a.default.createElement("div",{className:S("button-container")},O&&a.default.createElement("button",{type:"button",className:S("css-toggle","item",{"is-selected":C}),onClick:T,onKeyDown:function(e){return N(e,T)},onBlur:b,onMouseDown:h,tabIndex:0,"data-focus-styles-enabled":!0},a.default.createElement(d.default,{className:S("chevron")}),a.default.createElement("span",null,"CSS"),a.default.createElement(u.default,{className:S("chevron")})),a.default.createElement("button",{type:"button",className:S("code-toggle","item",{"is-selected":w}),onClick:E,onKeyDown:function(e){return N(e,E)},onBlur:b,onMouseDown:h,tabIndex:0,"data-focus-styles-enabled":!0},a.default.createElement(d.default,{className:S("chevron")}),a.default.createElement("span",null,"Code"),a.default.createElement(u.default,{className:S("chevron")}))):null,a.default.createElement("div",null,C&&a.default.createElement("div",{className:S("css")},l),w&&a.default.createElement("div",{className:S("code")},n))))};_.propTypes=w,_.defaultProps={isExpanded:!1};var y=_;t.Z=y},72720:function(e,t,n){n.r(t),n.d(t,{default:function(){return w}});var l=n(87462),o=n(44925),c=n(67294),a=n(81254),s=n(11381),r=["components"],i={};function d(e){var t=e.components,n=(0,o.Z)(e,r);return(0,a.mdx)("wrapper",(0,l.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React, { useCallback, useState } from 'react';\nimport { FlowsheetDataGrid } from 'terra-data-grid';\n\nconst gridDataJSON = {\n  cols: [\n    {\n      id: 'Column-0', displayName: 'Patient', isSelectable: true,\n    },\n    {\n      id: 'Column-1', displayName: 'Location', isSelectable: true,\n    },\n    { id: 'Column-2', displayName: 'Illness Severity', isSelectable: true },\n    { id: 'Column-3', displayName: 'Visit' },\n    { id: 'Column-4', displayName: 'Allergy' },\n    { id: 'Column-5', displayName: 'Primary Contact' },\n\n  ],\n  sections: [{\n    id: 'section-0',\n    isCollapsible: true,\n    text: 'Test Section',\n    rows: [\n      {\n        id: '1',\n        cells: [\n          { content: 'Fleck, Arthur' },\n          { content: '1007-MTN' },\n          { content: 'Unstable' },\n          { content: 'Inpatient, 2 months' },\n          { content: '' },\n          { content: 'Quinzell, Harleen' },\n        ],\n      },\n      {\n        id: '2',\n        cells: [\n          { content: 'Wayne, Bruce' },\n          { content: '1007-MTN-DR' },\n          { content: 'Stable' },\n          { content: 'Outpatient, 2 days' },\n          { content: 'Phytochemicals' },\n          { content: 'Grayson, Richard' },\n        ],\n      },\n    ],\n  },\n  {\n    id: 'section-1',\n    text: 'Test Section #2',\n    rows: [\n      {\n        id: '3',\n        cells: [\n          { content: 'Parker, Peter' },\n          { content: '1007-MTN' },\n          { content: 'Unstable' },\n          { content: 'Inpatient, 2 months' },\n          { content: '' },\n          { content: 'Octopus, Doctor' },\n        ],\n      },\n      {\n        id: '4',\n        cells: [\n          { content: 'Stark, Tony' },\n          { content: '1007-MTN-DR' },\n          { content: 'Stable' },\n          { content: 'Outpatient, 2 days' },\n          { content: 'Phytochemicals' },\n          { content: 'America, Captain' },\n        ],\n      },\n    ],\n  }],\n};\n\nconst FlowsheetWithSections = () => {\n  const [tableSections, setTableSections] = useState(gridDataJSON.sections);\n\n  const handleSectionSelect = (sectionId) => {\n    const newSections = [...tableSections];\n    const sectionIndex = newSections.findIndex(section => section.id === sectionId);\n\n    const sectionToClear = newSections.find(section => section.id === sectionId);\n\n    sectionToClear.rows = sectionToClear.rows.map(row => ({\n      ...row,\n      cells: row.cells.map(cell => ({\n        ...cell,\n        isSelected: false,\n      })),\n    }));\n\n    if (sectionIndex > -1) {\n      newSections[sectionIndex].isCollapsed = !newSections[sectionIndex].isCollapsed;\n    }\n\n    setTableSections(newSections);\n  };\n\n  const getClearedSections = useCallback(() => tableSections.map(section => ({\n    ...section,\n    rows: section.rows.map(row => ({\n      ...row,\n      cells: row.cells.map(cell => ({\n        ...cell,\n        isSelected: false,\n      })),\n    })),\n  })), [tableSections]);\n\n  const onCellSelect = useCallback((selectedCell) => {\n    let selectedSection = tableSections.find(section => section.id === selectedCell.sectionId);\n\n    const columnIndex = gridDataJSON.cols.findIndex(col => col.id === selectedCell.columnId);\n    const rowIndex = selectedSection.rows.findIndex(row => row.id === selectedCell.rowId);\n    const previousCell = selectedSection.rows[rowIndex].cells[columnIndex];\n\n    const newSections = getClearedSections();\n\n    //   // If the current cell is the only selected cell, toggle it to unselected. Otherwise, set it to selected.\n    selectedSection = newSections.find(section => section.id === selectedCell.sectionId);\n    selectedSection.rows[rowIndex].cells[columnIndex].isSelected = !previousCell.isSelected;\n    setTableSections(newSections);\n  }, [tableSections, getClearedSections]);\n\n  const handleCellRangeSelection = useCallback((cells) => {\n    const columnIndexesToUpdate = new Set(cells\n      .map(cell => cell.columnId)\n      .map(id => gridDataJSON.cols.findIndex(col => col.id === id)));\n\n    const rowsToUpdate = new Set(cells.map(cell => cell.rowId));\n\n    const newSections = getClearedSections();\n    const selectedSection = newSections.find(section => section.id === cells[0].sectionId);\n\n    selectedSection.rows = selectedSection.rows.map(row => ({\n      ...row,\n      cells: row.cells.map((cell, cellIndex) => ({\n        ...cell,\n        isSelected: columnIndexesToUpdate.has(cellIndex) && rowsToUpdate.has(row.id),\n      })),\n    }));\n\n    setTableSections(newSections);\n  }, [getClearedSections]);\n\n  const onClearSelectedCells = () => {\n    setTableSections(getClearedSections());\n  };\n\n  return (\n    <FlowsheetDataGrid\n      id=\"flowsheet-with-sections\"\n      columns={gridDataJSON.cols}\n      sections={tableSections}\n      onSectionSelect={handleSectionSelect}\n      onCellRangeSelect={handleCellRangeSelection}\n      onCellSelect={onCellSelect}\n      onClearSelectedCells={onClearSelectedCells}\n    />\n  );\n};\n\nexport default FlowsheetWithSections;\n\n")))}d.isMDXComponent=!0;var u=n(49271),m=function(e){var t=e.title,n=e.description,l=e.isExpanded;return c.createElement(u.Z,{title:t||"Flowsheet With Sections",description:n,example:c.createElement(s.Z,null),exampleSrc:c.createElement(d,null),isExpanded:l})},p=["components"],f={},S="wrapper";function w(e){var t=e.components,n=(0,o.Z)(e,p);return(0,a.mdx)(S,(0,l.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("h1",{id:"flowsheet-data-grid-sections"},"Flowsheet Data Grid Sections"),(0,a.mdx)("h3",{id:"description"},"Description"),(0,a.mdx)("p",null,"This example demonstrates a ",(0,a.mdx)("a",{parentName:"p",href:"/terra-framework/pull/1976/components/cerner-terra-framework-docs/data-grid/flowsheet-data-grid/about"},"Flowsheet Data Grid")," component with information grouped by sections."),(0,a.mdx)("h3",{id:"required-properties"},"Required Properties"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("strong",{parentName:"li"},"sections"),": The tabular information for the component."),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("strong",{parentName:"li"},"isCollapsible"),": This property determines whether a section is collapsible. Collapsible sections contain a button in the section header."),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("strong",{parentName:"li"},"isCollapsed"),": When users select the section header of a collapsible section, this property is toggled to control whether the section is expanded or collapsed.")),(0,a.mdx)(m,{mdxType:"FlowsheetWithSections"}))}w.isMDXComponent=!0},11381:function(e,t,n){var l=n(64836),o=n(18698);t.Z=void 0;var c=l(n(38416)),a=l(n(861)),s=l(n(27424)),r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=o(e)&&"function"!=typeof e)return{default:e};var n=d(t);if(n&&n.has(e))return n.get(e);var l={__proto__:null},c=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var s=c?Object.getOwnPropertyDescriptor(e,a):null;s&&(s.get||s.set)?Object.defineProperty(l,a,s):l[a]=e[a]}return l.default=e,n&&n.set(e,l),l}(n(67294)),i=n(55730);function d(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(d=function(e){return e?n:t})(e)}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){(0,c.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var p={cols:[{id:"Column-0",displayName:"Patient",isSelectable:!0},{id:"Column-1",displayName:"Location",isSelectable:!0},{id:"Column-2",displayName:"Illness Severity",isSelectable:!0},{id:"Column-3",displayName:"Visit"},{id:"Column-4",displayName:"Allergy"},{id:"Column-5",displayName:"Primary Contact"}],sections:[{id:"section-0",isCollapsible:!0,text:"Test Section",rows:[{id:"1",cells:[{content:"Fleck, Arthur"},{content:"1007-MTN"},{content:"Unstable"},{content:"Inpatient, 2 months"},{content:""},{content:"Quinzell, Harleen"}]},{id:"2",cells:[{content:"Wayne, Bruce"},{content:"1007-MTN-DR"},{content:"Stable"},{content:"Outpatient, 2 days"},{content:"Phytochemicals"},{content:"Grayson, Richard"}]}]},{id:"section-1",text:"Test Section #2",rows:[{id:"3",cells:[{content:"Parker, Peter"},{content:"1007-MTN"},{content:"Unstable"},{content:"Inpatient, 2 months"},{content:""},{content:"Octopus, Doctor"}]},{id:"4",cells:[{content:"Stark, Tony"},{content:"1007-MTN-DR"},{content:"Stable"},{content:"Outpatient, 2 days"},{content:"Phytochemicals"},{content:"America, Captain"}]}]}]};t.Z=function(){var e=(0,r.useState)(p.sections),t=(0,s.default)(e,2),n=t[0],l=t[1],o=(0,r.useCallback)((function(){return n.map((function(e){return m(m({},e),{},{rows:e.rows.map((function(e){return m(m({},e),{},{cells:e.cells.map((function(e){return m(m({},e),{},{isSelected:!1})}))})}))})}))}),[n]),c=(0,r.useCallback)((function(e){var t=n.find((function(t){return t.id===e.sectionId})),c=p.cols.findIndex((function(t){return t.id===e.columnId})),a=t.rows.findIndex((function(t){return t.id===e.rowId})),s=t.rows[a].cells[c],r=o();(t=r.find((function(t){return t.id===e.sectionId}))).rows[a].cells[c].isSelected=!s.isSelected,l(r)}),[n,o]),d=(0,r.useCallback)((function(e){var t=new Set(e.map((function(e){return e.columnId})).map((function(e){return p.cols.findIndex((function(t){return t.id===e}))}))),n=new Set(e.map((function(e){return e.rowId}))),c=o(),a=c.find((function(t){return t.id===e[0].sectionId}));a.rows=a.rows.map((function(e){return m(m({},e),{},{cells:e.cells.map((function(l,o){return m(m({},l),{},{isSelected:t.has(o)&&n.has(e.id)})}))})})),l(c)}),[o]);return r.default.createElement(i.FlowsheetDataGrid,{id:"flowsheet-with-sections",columns:p.cols,sections:n,onSectionSelect:function(e){var t=(0,a.default)(n),o=t.findIndex((function(t){return t.id===e})),c=t.find((function(t){return t.id===e}));c.rows=c.rows.map((function(e){return m(m({},e),{},{cells:e.cells.map((function(e){return m(m({},e),{},{isSelected:!1})}))})})),o>-1&&(t[o].isCollapsed=!t[o].isCollapsed),l(t)},onCellRangeSelect:d,onCellSelect:c,onClearSelectedCells:function(){l(o())}})}},53560:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},87462:function(e,t,n){function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},l.apply(this,arguments)}n.d(t,{Z:function(){return l}})},44925:function(e,t,n){function l(e,t){if(null==e)return{};var n,l,o=function(e,t){if(null==e)return{};var n,l,o={},c=Object.keys(e);for(l=0;l<c.length;l++)n=c[l],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(l=0;l<c.length;l++)n=c[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.d(t,{Z:function(){return l}})}}]);