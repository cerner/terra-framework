"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[60663],{201:function(e,t,n){var l=n(24994),o=n(73738);t.A=void 0;var c=l(n(85715)),i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=o(e)&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var l={__proto__:null},c=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&{}.hasOwnProperty.call(e,i)){var a=c?Object.getOwnPropertyDescriptor(e,i):null;a&&(a.get||a.set)?Object.defineProperty(l,i,a):l[i]=e[i]}return l.default=e,n&&n.set(e,l),l}(n(96540)),a=l(n(5556)),s=l(n(67967)),r=n(92912),d=l(n(49558)),u=l(n(53665)),m=n(25966),p=l(n(89986));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}var h=s.default.bind(p.default),g={example:a.default.element,exampleSrc:a.default.element,exampleCssSrc:a.default.element,title:a.default.string,description:a.default.node,isExpanded:a.default.bool},w=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},S=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},b=function(e){var t=e.example,n=e.exampleSrc,l=e.exampleCssSrc,o=e.title,a=e.description,s=e.isExpanded,p=(0,i.useState)(s),f=(0,c.default)(p,2),g=f[0],b=f[1],_=(0,i.useState)(!1),C=(0,c.default)(_,2),x=C[0],y=C[1],v=i.default.useContext(r.ThemeContext),N=void 0!==l,E=function(){y(!x),g&&b(!g)},O=function(){b(!g),x&&y(!x)},T=function(e,t){e.nativeEvent.keyCode!==m.KEY_SPACE&&e.nativeEvent.keyCode!==m.KEY_RETURN||(e.preventDefault(),t())};return i.default.createElement("div",{className:h("template",v.className)},i.default.createElement("div",{className:h("header")},o&&i.default.createElement("h2",{className:h("title")},o)),i.default.createElement("div",{className:h("content")},a&&i.default.createElement("div",{className:h("description")},a),t),i.default.createElement("div",{className:h("footer")},n?i.default.createElement("div",{className:h("button-container")},N&&i.default.createElement("button",{type:"button",className:h("css-toggle","item",{"is-selected":x}),onClick:E,onKeyDown:function(e){return T(e,E)},onBlur:w,onMouseDown:S,tabIndex:0,"data-focus-styles-enabled":!0},i.default.createElement(d.default,{className:h("chevron")}),i.default.createElement("span",null,"CSS"),i.default.createElement(u.default,{className:h("chevron")})),i.default.createElement("button",{type:"button",className:h("code-toggle","item",{"is-selected":g}),onClick:O,onKeyDown:function(e){return T(e,O)},onBlur:w,onMouseDown:S,tabIndex:0,"data-focus-styles-enabled":!0},i.default.createElement(d.default,{className:h("chevron")}),i.default.createElement("span",null,"Code"),i.default.createElement(u.default,{className:h("chevron")}))):null,i.default.createElement("div",null,x&&i.default.createElement("div",{className:h("css")},l),g&&i.default.createElement("div",{className:h("code")},n))))};b.propTypes=g,b.defaultProps={isExpanded:!1};t.A=b},81919:function(e,t,n){n.r(t),n.d(t,{default:function(){return g}});var l=n(58168),o=n(53986),c=n(96540),i=n(36665),a=n(68993),s=["components"],r={};function d(e){var t=e.components,n=(0,o.A)(e,s);return(0,i.mdx)("wrapper",(0,l.A)({},r,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React, { useCallback, useState } from 'react';\nimport { ColumnHighlightColor, FlowsheetDataGrid } from 'terra-data-grid';\n\nconst gridDataJSON = {\n  cols: [\n    {\n      id: 'Column-0', displayName: 'Patient', isSelectable: true,\n    },\n    {\n      id: 'Column-1', displayName: 'Location', isSelectable: true,\n    },\n    {\n      id: 'Column-2',\n      displayName: 'Illness Severity',\n      isSelectable: true,\n      columnHighlightColor: ColumnHighlightColor.ORANGE,\n      columnHighlightDescription: 'Most recent time',\n    },\n    { id: 'Column-3', displayName: 'Visit' },\n    { id: 'Column-4', displayName: 'Allergy' },\n    { id: 'Column-5', displayName: 'Primary Contact' },\n\n  ],\n  sections: [{\n    id: 'section-0',\n    isCollapsible: true,\n    text: 'Test Section',\n    rows: [\n      {\n        id: '1',\n        cells: [\n          { content: 'Fleck, Arthur' },\n          { content: '1007-MTN' },\n          { content: 'Unstable' },\n          { content: 'Inpatient, 2 months' },\n          { content: '' },\n          { content: 'Quinzell, Harleen' },\n        ],\n      },\n      {\n        id: '2',\n        cells: [\n          { content: 'Wayne, Bruce' },\n          { content: '1007-MTN-DR' },\n          { content: 'Stable' },\n          { content: 'Outpatient, 2 days' },\n          { content: 'Phytochemicals' },\n          { content: 'Grayson, Richard' },\n        ],\n      },\n    ],\n  },\n  {\n    id: 'section-1',\n    text: 'Test Section #2',\n    rows: [\n      {\n        id: '3',\n        cells: [\n          { content: 'Parker, Peter' },\n          { content: '1007-MTN' },\n          { content: 'Unstable' },\n          { content: 'Inpatient, 2 months' },\n          { content: '' },\n          { content: 'Octopus, Doctor' },\n        ],\n      },\n      {\n        id: '4',\n        cells: [\n          { content: 'Stark, Tony' },\n          { content: '1007-MTN-DR' },\n          { content: 'Stable' },\n          { content: 'Outpatient, 2 days' },\n          { content: 'Phytochemicals' },\n          { content: 'America, Captain' },\n        ],\n      },\n    ],\n  }],\n};\n\nconst FlowsheetSectionsWithColHighlight = () => {\n  const [tableSections, setTableSections] = useState(gridDataJSON.sections);\n\n  const handleSectionSelect = (sectionId) => {\n    const newSections = [...tableSections];\n    const sectionIndex = newSections.findIndex(section => section.id === sectionId);\n\n    const sectionToClear = newSections.find(section => section.id === sectionId);\n\n    sectionToClear.rows = sectionToClear.rows.map(row => ({\n      ...row,\n      cells: row.cells.map(cell => ({\n        ...cell,\n        isSelected: false,\n      })),\n    }));\n\n    if (sectionIndex > -1) {\n      newSections[sectionIndex].isCollapsed = !newSections[sectionIndex].isCollapsed;\n    }\n\n    setTableSections(newSections);\n  };\n\n  const getClearedSections = useCallback((isMetaPressed) => tableSections.map(section => ({\n    ...section,\n    rows: section.rows.map(row => ({\n      ...row,\n      cells: row.cells.map(cell => ({\n        ...cell,\n        isSelected: isMetaPressed ? cell.isSelected : false,\n      })),\n    })),\n  })), [tableSections]);\n\n  const onCellSelect = useCallback((selectedCell) => {\n    let selectedSection = tableSections.find(section => section.id === selectedCell.sectionId);\n\n    const columnIndex = gridDataJSON.cols.findIndex(col => col.id === selectedCell.columnId);\n    const rowIndex = selectedSection.rows.findIndex(row => row.id === selectedCell.rowId);\n    const previousCell = selectedSection.rows[rowIndex].cells[columnIndex];\n\n    const newSections = getClearedSections(selectedCell.isMetaPressed);\n\n    //   // If the current cell is the only selected cell, toggle it to unselected. Otherwise, set it to selected.\n    selectedSection = newSections.find(section => section.id === selectedCell.sectionId);\n    selectedSection.rows[rowIndex].cells[columnIndex].isSelected = !previousCell.isSelected;\n    setTableSections(newSections);\n  }, [tableSections, getClearedSections]);\n\n  const handleCellRangeSelection = useCallback((cells) => {\n    const columnIndexesToUpdate = new Set(cells\n      .map(cell => cell.columnId)\n      .map(id => gridDataJSON.cols.findIndex(col => col.id === id)));\n\n    const rowsToUpdate = new Set(cells.map(cell => cell.rowId));\n\n    const newSections = getClearedSections();\n    const selectedSection = newSections.find(section => section.id === cells[0].sectionId);\n\n    selectedSection.rows = selectedSection.rows.map(row => ({\n      ...row,\n      cells: row.cells.map((cell, cellIndex) => ({\n        ...cell,\n        isSelected: columnIndexesToUpdate.has(cellIndex) && rowsToUpdate.has(row.id),\n      })),\n    }));\n\n    setTableSections(newSections);\n  }, [getClearedSections]);\n\n  const onClearSelectedCells = () => {\n    setTableSections(getClearedSections());\n  };\n\n  return (\n    <FlowsheetDataGrid\n      id=\"flowsheet-sections-with-col-highlight\"\n      columns={gridDataJSON.cols}\n      sections={tableSections}\n      ariaLabel=\"Flowsheet Data Grid Sections with column highlight\"\n      onSectionSelect={handleSectionSelect}\n      onCellRangeSelect={handleCellRangeSelection}\n      onCellSelect={onCellSelect}\n      onClearSelectedCells={onClearSelectedCells}\n    />\n  );\n};\n\nexport default FlowsheetSectionsWithColHighlight;\n\n")))}d.isMDXComponent=!0;var u=n(201),m=function(e){var t=e.title,n=e.description,l=e.isExpanded;return c.createElement(u.A,{title:t||"Flowsheet Sections With Col Highlight",description:n,example:c.createElement(a.A,null),exampleSrc:c.createElement(d,null),isExpanded:l})},p=["components"],f={},h="wrapper";function g(e){var t=e.components,n=(0,o.A)(e,p);return(0,i.mdx)(h,(0,l.A)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"flowsheet-data-grid-sections-with-column-highlight"},"Flowsheet Data Grid Sections with column highlight"),(0,i.mdx)("h3",{id:"description"},"Description"),(0,i.mdx)("p",null,"This example demonstrates a ",(0,i.mdx)("a",{parentName:"p",href:"/terra-framework/components/cerner-terra-framework-docs/data-grid/flowsheet-data-grid/about"},"Flowsheet Data Grid")," component with information grouped by sections along with column highlighting."),(0,i.mdx)("h3",{id:"required-properties"},"Required Properties"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"sections"),": The tabular information for the component."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"isCollapsible"),": This property determines whether a section is collapsible. Collapsible sections contain a button in the section header."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"isCollapsed"),": When users select the section header of a collapsible section, this property is toggled to control whether the section is expanded or collapsed.")),(0,i.mdx)("h3",{id:"below-are-the-attributes-used-for-column-highlighting"},"Below are the attributes used for column highlighting."),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"columnHighlightColor")," can be used to set highlight colour to either Orange or Green."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"columnHighlightDescription")," can be used to provide context regarding the highlighted column to screen readers.")),(0,i.mdx)(m,{mdxType:"FlowsheetSectionsWithColHighlight"}),(0,i.mdx)("p",null,"Note: Column Highlighting is not supported for columns with column span."))}g.isMDXComponent=!0},68993:function(e,t,n){var l=n(24994),o=n(73738);t.A=void 0;var c=l(n(43693)),i=l(n(41132)),a=l(n(85715)),s=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=o(e)&&"function"!=typeof e)return{default:e};var n=d(t);if(n&&n.has(e))return n.get(e);var l={__proto__:null},c=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&{}.hasOwnProperty.call(e,i)){var a=c?Object.getOwnPropertyDescriptor(e,i):null;a&&(a.get||a.set)?Object.defineProperty(l,i,a):l[i]=e[i]}return l.default=e,n&&n.set(e,l),l}(n(96540)),r=n(45663);function d(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(d=function(e){return e?n:t})(e)}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){(0,c.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var p={cols:[{id:"Column-0",displayName:"Patient",isSelectable:!0},{id:"Column-1",displayName:"Location",isSelectable:!0},{id:"Column-2",displayName:"Illness Severity",isSelectable:!0,columnHighlightColor:r.ColumnHighlightColor.ORANGE,columnHighlightDescription:"Most recent time"},{id:"Column-3",displayName:"Visit"},{id:"Column-4",displayName:"Allergy"},{id:"Column-5",displayName:"Primary Contact"}],sections:[{id:"section-0",isCollapsible:!0,text:"Test Section",rows:[{id:"1",cells:[{content:"Fleck, Arthur"},{content:"1007-MTN"},{content:"Unstable"},{content:"Inpatient, 2 months"},{content:""},{content:"Quinzell, Harleen"}]},{id:"2",cells:[{content:"Wayne, Bruce"},{content:"1007-MTN-DR"},{content:"Stable"},{content:"Outpatient, 2 days"},{content:"Phytochemicals"},{content:"Grayson, Richard"}]}]},{id:"section-1",text:"Test Section #2",rows:[{id:"3",cells:[{content:"Parker, Peter"},{content:"1007-MTN"},{content:"Unstable"},{content:"Inpatient, 2 months"},{content:""},{content:"Octopus, Doctor"}]},{id:"4",cells:[{content:"Stark, Tony"},{content:"1007-MTN-DR"},{content:"Stable"},{content:"Outpatient, 2 days"},{content:"Phytochemicals"},{content:"America, Captain"}]}]}]};t.A=function(){var e=(0,s.useState)(p.sections),t=(0,a.default)(e,2),n=t[0],l=t[1],o=(0,s.useCallback)((function(e){return n.map((function(t){return m(m({},t),{},{rows:t.rows.map((function(t){return m(m({},t),{},{cells:t.cells.map((function(t){return m(m({},t),{},{isSelected:!!e&&t.isSelected})}))})}))})}))}),[n]),c=(0,s.useCallback)((function(e){var t=n.find((function(t){return t.id===e.sectionId})),c=p.cols.findIndex((function(t){return t.id===e.columnId})),i=t.rows.findIndex((function(t){return t.id===e.rowId})),a=t.rows[i].cells[c],s=o(e.isMetaPressed);(t=s.find((function(t){return t.id===e.sectionId}))).rows[i].cells[c].isSelected=!a.isSelected,l(s)}),[n,o]),d=(0,s.useCallback)((function(e){var t=new Set(e.map((function(e){return e.columnId})).map((function(e){return p.cols.findIndex((function(t){return t.id===e}))}))),n=new Set(e.map((function(e){return e.rowId}))),c=o(),i=c.find((function(t){return t.id===e[0].sectionId}));i.rows=i.rows.map((function(e){return m(m({},e),{},{cells:e.cells.map((function(l,o){return m(m({},l),{},{isSelected:t.has(o)&&n.has(e.id)})}))})})),l(c)}),[o]);return s.default.createElement(r.FlowsheetDataGrid,{id:"flowsheet-sections-with-col-highlight",columns:p.cols,sections:n,ariaLabel:"Flowsheet Data Grid Sections with column highlight",onSectionSelect:function(e){var t=(0,i.default)(n),o=t.findIndex((function(t){return t.id===e})),c=t.find((function(t){return t.id===e}));c.rows=c.rows.map((function(e){return m(m({},e),{},{cells:e.cells.map((function(e){return m(m({},e),{},{isSelected:!1})}))})})),o>-1&&(t[o].isCollapsed=!t[o].isCollapsed),l(t)},onCellRangeSelect:d,onCellSelect:c,onClearSelectedCells:function(){l(o())}})}},89986:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},58168:function(e,t,n){function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)({}).hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},l.apply(null,arguments)}n.d(t,{A:function(){return l}})},53986:function(e,t,n){function l(e,t){if(null==e)return{};var n,l,o=function(e,t){if(null==e)return{};var n={};for(var l in e)if({}.hasOwnProperty.call(e,l)){if(t.indexOf(l)>=0)continue;n[l]=e[l]}return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(l=0;l<c.length;l++)n=c[l],t.indexOf(n)>=0||{}.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.d(t,{A:function(){return l}})}}]);