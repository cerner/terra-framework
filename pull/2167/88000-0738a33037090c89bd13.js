"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[88e3],{201:function(e,n,t){var o=t(24994),l=t(73738);n.A=void 0;var c=o(t(85715)),s=function(e,n){if(!n&&e&&e.__esModule)return e;if(null===e||"object"!=l(e)&&"function"!=typeof e)return{default:e};var t=f(n);if(t&&t.has(e))return t.get(e);var o={__proto__:null},c=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if("default"!==s&&{}.hasOwnProperty.call(e,s)){var i=c?Object.getOwnPropertyDescriptor(e,s):null;i&&(i.get||i.set)?Object.defineProperty(o,s,i):o[s]=e[s]}return o.default=e,t&&t.set(e,o),o}(t(96540)),i=o(t(5556)),a=o(t(67967)),r=t(92912),d=o(t(49558)),u=o(t(53665)),p=t(25966),m=o(t(89986));function f(e){if("function"!=typeof WeakMap)return null;var n=new WeakMap,t=new WeakMap;return(f=function(e){return e?t:n})(e)}var S=a.default.bind(m.default),w={example:i.default.element,exampleSrc:i.default.element,exampleCssSrc:i.default.element,title:i.default.string,description:i.default.node,isExpanded:i.default.bool},b=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},h=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},y=function(e){var n=e.example,t=e.exampleSrc,o=e.exampleCssSrc,l=e.title,i=e.description,a=e.isExpanded,m=(0,s.useState)(a),f=(0,c.default)(m,2),w=f[0],y=f[1],C=(0,s.useState)(!1),x=(0,c.default)(C,2),I=x[0],_=x[1],g=s.default.useContext(r.ThemeContext),O=void 0!==o,T=function(){_(!I),w&&y(!w)},v=function(){y(!w),I&&_(!I)},N=function(e,n){e.nativeEvent.keyCode!==p.KEY_SPACE&&e.nativeEvent.keyCode!==p.KEY_RETURN||(e.preventDefault(),n())};return s.default.createElement("div",{className:S("template",g.className)},s.default.createElement("div",{className:S("header")},l&&s.default.createElement("h2",{className:S("title")},l)),s.default.createElement("div",{className:S("content")},i&&s.default.createElement("div",{className:S("description")},i),n),s.default.createElement("div",{className:S("footer")},t?s.default.createElement("div",{className:S("button-container")},O&&s.default.createElement("button",{type:"button",className:S("css-toggle","item",{"is-selected":I}),onClick:T,onKeyDown:function(e){return N(e,T)},onBlur:b,onMouseDown:h,tabIndex:0,"data-focus-styles-enabled":!0},s.default.createElement(d.default,{className:S("chevron")}),s.default.createElement("span",null,"CSS"),s.default.createElement(u.default,{className:S("chevron")})),s.default.createElement("button",{type:"button",className:S("code-toggle","item",{"is-selected":w}),onClick:v,onKeyDown:function(e){return N(e,v)},onBlur:b,onMouseDown:h,tabIndex:0,"data-focus-styles-enabled":!0},s.default.createElement(d.default,{className:S("chevron")}),s.default.createElement("span",null,"Code"),s.default.createElement(u.default,{className:S("chevron")}))):null,s.default.createElement("div",null,I&&s.default.createElement("div",{className:S("css")},o),w&&s.default.createElement("div",{className:S("code")},t))))};y.propTypes=w,y.defaultProps={isExpanded:!1};n.A=y},70240:function(e,n,t){t.r(n),t.d(n,{default:function(){return x}});var o=t(58168),l=t(53986),c=t(96540),s=t(36665),i=t(68956),a=["components"],r={};function d(e){var n=e.components,t=(0,l.A)(e,a);return(0,s.mdx)("wrapper",(0,o.A)({},r,t,{components:n,mdxType:"MDXLayout"}),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React, { useCallback, useState } from 'react';\nimport { FlowsheetDataGrid } from 'terra-data-grid';\n\nconst gridDataJSON = {\n  cols: [\n    {\n      id: 'Column-0', displayName: 'Patient', isSelectable: true,\n    },\n    {\n      id: 'Column-1', displayName: 'Location', isSelectable: true,\n    },\n    { id: 'Column-2', displayName: 'Illness Severity', isSelectable: true },\n    { id: 'Column-3', displayName: 'Visit' },\n    { id: 'Column-4', displayName: 'Allergy' },\n    { id: 'Column-5', displayName: 'Primary Contact' },\n\n  ],\n  sections: [{\n    id: 'section-0',\n    isCollapsible: true,\n    text: 'Test Section',\n    rows: [\n      {\n        id: '1',\n        cells: [\n          { content: 'Fleck, Arthur' },\n          { content: '1007-MTN' },\n          { content: 'Unstable' },\n          { content: 'Inpatient, 2 months' },\n          { content: '' },\n          { content: 'Quinzell, Harleen' },\n        ],\n      },\n      {\n        id: '2',\n        cells: [\n          { content: 'Wayne, Bruce' },\n          { content: '1007-MTN-DR' },\n          { content: 'Stable' },\n          { content: 'Outpatient, 2 days' },\n          { content: 'Phytochemicals' },\n          { content: 'Grayson, Richard' },\n        ],\n      },\n    ],\n  },\n  {\n    id: 'section-1',\n    text: 'Test Section #2',\n    rows: [\n      {\n        id: '3',\n        cells: [\n          { content: 'Parker, Peter' },\n          { content: '1007-MTN' },\n          { content: 'Unstable' },\n          { content: 'Inpatient, 2 months' },\n          { content: '' },\n          { content: 'Octopus, Doctor' },\n        ],\n      },\n      {\n        id: '4',\n        cells: [\n          { content: 'Stark, Tony' },\n          { content: '1007-MTN-DR' },\n          { content: 'Stable' },\n          { content: 'Outpatient, 2 days' },\n          { content: 'Phytochemicals' },\n          { content: 'America, Captain' },\n        ],\n      },\n    ],\n  }],\n};\n\nconst FlowsheetWithSections = () => {\n  const [tableSections, setTableSections] = useState(gridDataJSON.sections);\n\n  const handleSectionSelect = (sectionId) => {\n    const newSections = [...tableSections];\n    const sectionIndex = newSections.findIndex(section => section.id === sectionId);\n\n    const sectionToClear = newSections.find(section => section.id === sectionId);\n\n    sectionToClear.rows = sectionToClear.rows.map(row => ({\n      ...row,\n      cells: row.cells.map(cell => ({\n        ...cell,\n        isSelected: false,\n      })),\n    }));\n\n    if (sectionIndex > -1) {\n      newSections[sectionIndex].isCollapsed = !newSections[sectionIndex].isCollapsed;\n    }\n\n    setTableSections(newSections);\n  };\n\n  const getClearedSections = useCallback((isMetaPressed) => tableSections.map(section => ({\n    ...section,\n    rows: section.rows.map(row => ({\n      ...row,\n      cells: row.cells.map(cell => ({\n        ...cell,\n        isSelected: isMetaPressed ? cell.isSelected : false,\n      })),\n    })),\n  })), [tableSections]);\n\n  const onCellSelect = useCallback((selectedCell) => {\n    let selectedSection = tableSections.find(section => section.id === selectedCell.sectionId);\n\n    const columnIndex = gridDataJSON.cols.findIndex(col => col.id === selectedCell.columnId);\n    const rowIndex = selectedSection.rows.findIndex(row => row.id === selectedCell.rowId);\n    const previousCell = selectedSection.rows[rowIndex].cells[columnIndex];\n\n    const newSections = getClearedSections(selectedCell.isMetaPressed);\n\n    //   // If the current cell is the only selected cell, toggle it to unselected. Otherwise, set it to selected.\n    selectedSection = newSections.find(section => section.id === selectedCell.sectionId);\n    selectedSection.rows[rowIndex].cells[columnIndex].isSelected = !previousCell.isSelected;\n    setTableSections(newSections);\n  }, [tableSections, getClearedSections]);\n\n  const handleCellRangeSelection = useCallback((cells) => {\n    const columnIndexesToUpdate = new Set(cells\n      .map(cell => cell.columnId)\n      .map(id => gridDataJSON.cols.findIndex(col => col.id === id)));\n\n    const rowsToUpdate = new Set(cells.map(cell => cell.rowId));\n\n    const newSections = getClearedSections();\n    const selectedSection = newSections.find(section => section.id === cells[0].sectionId);\n\n    selectedSection.rows = selectedSection.rows.map(row => ({\n      ...row,\n      cells: row.cells.map((cell, cellIndex) => ({\n        ...cell,\n        isSelected: columnIndexesToUpdate.has(cellIndex) && rowsToUpdate.has(row.id),\n      })),\n    }));\n\n    setTableSections(newSections);\n  }, [getClearedSections]);\n\n  const onClearSelectedCells = () => {\n    setTableSections(getClearedSections());\n  };\n\n  return (\n    <FlowsheetDataGrid\n      id=\"flowsheet-with-sections\"\n      columns={gridDataJSON.cols}\n      sections={tableSections}\n      ariaLabel=\"Flowsheet Data Grid with Sections\"\n      onSectionSelect={handleSectionSelect}\n      onCellRangeSelect={handleCellRangeSelection}\n      onCellSelect={onCellSelect}\n      onClearSelectedCells={onClearSelectedCells}\n    />\n  );\n};\n\nexport default FlowsheetWithSections;\n\n")))}d.isMDXComponent=!0;var u=t(201),p=function(e){var n=e.title,t=e.description,o=e.isExpanded;return c.createElement(u.A,{title:n||"Flowsheet With Sections",description:t,example:c.createElement(i.A,null),exampleSrc:c.createElement(d,null),isExpanded:o})},m=t(47273),f=["components"],S={};function w(e){var n=e.components,t=(0,l.A)(e,f);return(0,s.mdx)("wrapper",(0,o.A)({},S,t,{components:n,mdxType:"MDXLayout"}),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React, { useCallback, useState } from 'react';\nimport { FlowsheetDataGrid } from 'terra-data-grid';\n\nconst gridDataJSON = {\n  cols: [\n    {\n      id: 'Column-0', displayName: 'Patient', isSelectable: true,\n    },\n    {\n      id: 'Column-1', displayName: 'Location', isSelectable: true,\n    },\n    { id: 'Column-2', displayName: 'Illness Severity', isSelectable: true },\n    { id: 'Column-3', displayName: 'Visit' },\n    { id: 'Column-4', displayName: 'Allergy' },\n    { id: 'Column-5', displayName: 'Primary Contact' },\n\n  ],\n  sections: [{\n    id: 'section-0',\n    text: 'Test Section',\n    subsections: [\n      {\n        id: 'subsection-0',\n        text: 'Test SubSection',\n        rows: [\n          {\n            id: '1',\n            cells: [\n              { content: 'Fleck, Arthur' },\n              { content: '1007-MTN' },\n              { content: 'Unstable' },\n              { content: 'Inpatient, 2 months' },\n              { content: '' },\n              { content: 'Quinzell, Harleen' },\n            ],\n          },\n          {\n            id: '2',\n            cells: [\n              { content: 'Wayne, Bruce' },\n              { content: '1007-MTN-DR' },\n              { content: 'Stable' },\n              { content: 'Outpatient, 2 days' },\n              { content: 'Phytochemicals' },\n              { content: 'Grayson, Richard' },\n            ],\n          },\n        ],\n      },\n      {\n        id: 'subsection-1',\n        text: 'Test SubSection #2',\n        rows: [\n          {\n            id: '3',\n            cells: [\n              { content: 'Fleck, Arthur' },\n              { content: '1007-MTN' },\n              { content: 'Unstable' },\n              { content: 'Inpatient, 2 months' },\n              { content: '' },\n              { content: 'Quinzell, Harleen' },\n            ],\n          },\n          {\n            id: '4',\n            cells: [\n              { content: 'Wayne, Bruce' },\n              { content: '1007-MTN-DR' },\n              { content: 'Stable' },\n              { content: 'Outpatient, 2 days' },\n              { content: 'Phytochemicals' },\n              { content: 'Grayson, Richard' },\n            ],\n          },\n        ],\n      },\n    ],\n  },\n  {\n    id: 'section-1',\n    text: 'Test Section #2',\n    rows: [\n      {\n        id: '5',\n        cells: [\n          { content: 'Parker, Peter' },\n          { content: '1007-MTN' },\n          { content: 'Unstable' },\n          { content: 'Inpatient, 2 months' },\n          { content: '' },\n          { content: 'Octopus, Doctor' },\n        ],\n      },\n      {\n        id: '6',\n        cells: [\n          { content: 'Stark, Tony' },\n          { content: '1007-MTN-DR' },\n          { content: 'Stable' },\n          { content: 'Outpatient, 2 days' },\n          { content: 'Phytochemicals' },\n          { content: 'America, Captain' },\n        ],\n      },\n    ],\n  }],\n};\n\nconst FlowsheetWithSubsections = () => {\n  const [tableSections, setTableSections] = useState(gridDataJSON.sections);\n\n  const handleSectionSelect = (sectionId) => {\n    const newSections = [...tableSections];\n    const sectionIndex = newSections.findIndex(section => section.id === sectionId);\n\n    const sectionToClear = newSections.find(section => section.id === sectionId);\n\n    sectionToClear.rows = sectionToClear.rows.map(row => ({\n      ...row,\n      cells: row.cells.map(cell => ({\n        ...cell,\n        isSelected: false,\n      })),\n    }));\n\n    if (sectionIndex > -1) {\n      newSections[sectionIndex].isCollapsed = !newSections[sectionIndex].isCollapsed;\n    }\n\n    setTableSections(newSections);\n  };\n\n  const getClearedSections = useCallback((isMetaPressed) => tableSections.map(section => ({\n    ...section,\n    rows: section.rows ? section.rows.map(row => ({\n      ...row,\n      cells: row.cells.map(cell => ({\n        ...cell,\n        isSelected: isMetaPressed ? cell.isSelected : false,\n      })),\n    })) : undefined,\n    subsections: section.subsections ? section.subsections.map(subsection => ({\n      ...subsection,\n      rows: subsection.rows.map(row => ({\n        ...row,\n        cells: row.cells.map(cell => ({\n          ...cell,\n          isSelected: isMetaPressed ? cell.isSelected : false,\n        })),\n      })),\n    })) : undefined,\n  })), [tableSections]);\n\n  const onCellSelect = useCallback((selectedCell) => {\n    let selectedSection = tableSections.find(section => section.id === selectedCell.sectionId);\n    let selectedSubsection = selectedSection.subsections ? selectedSection.subsections.find(subsection => subsection.id === selectedCell.subsectionId) : undefined;\n\n    const rowIndex = selectedSubsection ? selectedSubsection.rows.findIndex(row => row.id === selectedCell.rowId)\n      : selectedSection.rows.findIndex(row => row.id === selectedCell.rowId);\n\n    const columnIndex = gridDataJSON.cols.findIndex(col => col.id === selectedCell.columnId);\n    const previousCell = selectedSubsection ? selectedSubsection.rows[rowIndex].cells[columnIndex] : selectedSection.rows[rowIndex].cells[columnIndex];\n\n    const newSections = getClearedSections(selectedCell.isMetaPressed);\n\n    // If the current cell is the only selected cell, toggle it to unselected. Otherwise, set it to selected.\n    selectedSection = newSections.find(section => section.id === selectedCell.sectionId);\n\n    if (selectedSection.subsections) {\n      selectedSubsection = selectedSection.subsections.find(subsection => subsection.id === selectedCell.subsectionId);\n      selectedSubsection.rows[rowIndex].cells[columnIndex].isSelected = !previousCell.isSelected;\n    } else {\n      selectedSection.rows[rowIndex].cells[columnIndex].isSelected = !previousCell.isSelected;\n    }\n\n    setTableSections(newSections);\n  }, [tableSections, getClearedSections]);\n\n  const handleCellRangeSelection = useCallback((cells) => {\n    const columnIndexesToUpdate = new Set(cells\n      .map(cell => cell.columnId)\n      .map(id => gridDataJSON.cols.findIndex(col => col.id === id)));\n\n    const rowsToUpdate = new Set(cells.map(cell => cell.rowId));\n\n    const newSections = getClearedSections();\n    const selectedSection = newSections.find(section => section.id === cells[0].sectionId);\n\n    if (selectedSection.subsections) {\n      selectedSection.subsections = selectedSection.subsections.map(subsection => ({\n        ...subsection,\n        rows: subsection.rows.map(row => ({\n          ...row,\n          cells: row.cells.map((cell, cellIndex) => ({\n            ...cell,\n            isSelected: columnIndexesToUpdate.has(cellIndex) && rowsToUpdate.has(row.id),\n          })),\n        })),\n      }));\n    } else {\n      selectedSection.rows = selectedSection.rows.map(row => ({\n        ...row,\n        cells: row.cells.map((cell, cellIndex) => ({\n          ...cell,\n          isSelected: columnIndexesToUpdate.has(cellIndex) && rowsToUpdate.has(row.id),\n        })),\n      }));\n    }\n\n    setTableSections(newSections);\n  }, [getClearedSections]);\n\n  const onClearSelectedCells = () => {\n    setTableSections(getClearedSections());\n  };\n\n  return (\n    <FlowsheetDataGrid\n      id=\"flowsheet-with-subsections\"\n      columns={gridDataJSON.cols}\n      sections={tableSections}\n      ariaLabel=\"Flowsheet Data Grid with Subsections\"\n      onSectionSelect={handleSectionSelect}\n      onCellRangeSelect={handleCellRangeSelection}\n      onCellSelect={onCellSelect}\n      onClearSelectedCells={onClearSelectedCells}\n    />\n  );\n};\n\nexport default FlowsheetWithSubsections;\n\n")))}w.isMDXComponent=!0;var b=function(e){var n=e.title,t=e.description,o=e.isExpanded;return c.createElement(u.A,{title:n||"Flowsheet With Subsections",description:t,example:c.createElement(m.A,null),exampleSrc:c.createElement(w,null),isExpanded:o})},h=["components"],y={},C="wrapper";function x(e){var n=e.components,t=(0,l.A)(e,h);return(0,s.mdx)(C,(0,o.A)({},y,t,{components:n,mdxType:"MDXLayout"}),(0,s.mdx)("h1",{id:"flowsheet-data-grid-sections"},"Flowsheet Data Grid Sections"),(0,s.mdx)("h3",{id:"description"},"Description"),(0,s.mdx)("p",null,"This example demonstrates a ",(0,s.mdx)("a",{parentName:"p",href:"/terra-framework/pull/2167/components/cerner-terra-framework-docs/data-grid/flowsheet-data-grid/about"},"Flowsheet Data Grid")," component with information grouped by sections."),(0,s.mdx)("h3",{id:"required-properties"},"Required Properties"),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("strong",{parentName:"li"},"sections"),": The tabular information for the component."),(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("strong",{parentName:"li"},"isCollapsible"),": This property determines whether a section is collapsible. Collapsible sections contain a button in the section header."),(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("strong",{parentName:"li"},"isCollapsed"),": When users select the section header of a collapsible section, this property is toggled to control whether the section is expanded or collapsed.")),(0,s.mdx)(p,{mdxType:"FlowsheetWithSections"}),(0,s.mdx)(b,{mdxType:"FlowsheetWithSubsections"}))}x.isMDXComponent=!0},68956:function(e,n,t){var o=t(24994),l=t(73738);n.A=void 0;var c=o(t(43693)),s=o(t(41132)),i=o(t(85715)),a=function(e,n){if(!n&&e&&e.__esModule)return e;if(null===e||"object"!=l(e)&&"function"!=typeof e)return{default:e};var t=d(n);if(t&&t.has(e))return t.get(e);var o={__proto__:null},c=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if("default"!==s&&{}.hasOwnProperty.call(e,s)){var i=c?Object.getOwnPropertyDescriptor(e,s):null;i&&(i.get||i.set)?Object.defineProperty(o,s,i):o[s]=e[s]}return o.default=e,t&&t.set(e,o),o}(t(96540)),r=t(45663);function d(e){if("function"!=typeof WeakMap)return null;var n=new WeakMap,t=new WeakMap;return(d=function(e){return e?t:n})(e)}function u(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?u(Object(t),!0).forEach((function(n){(0,c.default)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var m={cols:[{id:"Column-0",displayName:"Patient",isSelectable:!0},{id:"Column-1",displayName:"Location",isSelectable:!0},{id:"Column-2",displayName:"Illness Severity",isSelectable:!0},{id:"Column-3",displayName:"Visit"},{id:"Column-4",displayName:"Allergy"},{id:"Column-5",displayName:"Primary Contact"}],sections:[{id:"section-0",isCollapsible:!0,text:"Test Section",rows:[{id:"1",cells:[{content:"Fleck, Arthur"},{content:"1007-MTN"},{content:"Unstable"},{content:"Inpatient, 2 months"},{content:""},{content:"Quinzell, Harleen"}]},{id:"2",cells:[{content:"Wayne, Bruce"},{content:"1007-MTN-DR"},{content:"Stable"},{content:"Outpatient, 2 days"},{content:"Phytochemicals"},{content:"Grayson, Richard"}]}]},{id:"section-1",text:"Test Section #2",rows:[{id:"3",cells:[{content:"Parker, Peter"},{content:"1007-MTN"},{content:"Unstable"},{content:"Inpatient, 2 months"},{content:""},{content:"Octopus, Doctor"}]},{id:"4",cells:[{content:"Stark, Tony"},{content:"1007-MTN-DR"},{content:"Stable"},{content:"Outpatient, 2 days"},{content:"Phytochemicals"},{content:"America, Captain"}]}]}]};n.A=function(){var e=(0,a.useState)(m.sections),n=(0,i.default)(e,2),t=n[0],o=n[1],l=(0,a.useCallback)((function(e){return t.map((function(n){return p(p({},n),{},{rows:n.rows.map((function(n){return p(p({},n),{},{cells:n.cells.map((function(n){return p(p({},n),{},{isSelected:!!e&&n.isSelected})}))})}))})}))}),[t]),c=(0,a.useCallback)((function(e){var n=t.find((function(n){return n.id===e.sectionId})),c=m.cols.findIndex((function(n){return n.id===e.columnId})),s=n.rows.findIndex((function(n){return n.id===e.rowId})),i=n.rows[s].cells[c],a=l(e.isMetaPressed);(n=a.find((function(n){return n.id===e.sectionId}))).rows[s].cells[c].isSelected=!i.isSelected,o(a)}),[t,l]),d=(0,a.useCallback)((function(e){var n=new Set(e.map((function(e){return e.columnId})).map((function(e){return m.cols.findIndex((function(n){return n.id===e}))}))),t=new Set(e.map((function(e){return e.rowId}))),c=l(),s=c.find((function(n){return n.id===e[0].sectionId}));s.rows=s.rows.map((function(e){return p(p({},e),{},{cells:e.cells.map((function(o,l){return p(p({},o),{},{isSelected:n.has(l)&&t.has(e.id)})}))})})),o(c)}),[l]);return a.default.createElement(r.FlowsheetDataGrid,{id:"flowsheet-with-sections",columns:m.cols,sections:t,ariaLabel:"Flowsheet Data Grid with Sections",onSectionSelect:function(e){var n=(0,s.default)(t),l=n.findIndex((function(n){return n.id===e})),c=n.find((function(n){return n.id===e}));c.rows=c.rows.map((function(e){return p(p({},e),{},{cells:e.cells.map((function(e){return p(p({},e),{},{isSelected:!1})}))})})),l>-1&&(n[l].isCollapsed=!n[l].isCollapsed),o(n)},onCellRangeSelect:d,onCellSelect:c,onClearSelectedCells:function(){o(l())}})}},47273:function(e,n,t){var o=t(24994),l=t(73738);n.A=void 0;var c=o(t(43693)),s=o(t(41132)),i=o(t(85715)),a=function(e,n){if(!n&&e&&e.__esModule)return e;if(null===e||"object"!=l(e)&&"function"!=typeof e)return{default:e};var t=d(n);if(t&&t.has(e))return t.get(e);var o={__proto__:null},c=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if("default"!==s&&{}.hasOwnProperty.call(e,s)){var i=c?Object.getOwnPropertyDescriptor(e,s):null;i&&(i.get||i.set)?Object.defineProperty(o,s,i):o[s]=e[s]}return o.default=e,t&&t.set(e,o),o}(t(96540)),r=t(45663);function d(e){if("function"!=typeof WeakMap)return null;var n=new WeakMap,t=new WeakMap;return(d=function(e){return e?t:n})(e)}function u(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?u(Object(t),!0).forEach((function(n){(0,c.default)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var m={cols:[{id:"Column-0",displayName:"Patient",isSelectable:!0},{id:"Column-1",displayName:"Location",isSelectable:!0},{id:"Column-2",displayName:"Illness Severity",isSelectable:!0},{id:"Column-3",displayName:"Visit"},{id:"Column-4",displayName:"Allergy"},{id:"Column-5",displayName:"Primary Contact"}],sections:[{id:"section-0",text:"Test Section",subsections:[{id:"subsection-0",text:"Test SubSection",rows:[{id:"1",cells:[{content:"Fleck, Arthur"},{content:"1007-MTN"},{content:"Unstable"},{content:"Inpatient, 2 months"},{content:""},{content:"Quinzell, Harleen"}]},{id:"2",cells:[{content:"Wayne, Bruce"},{content:"1007-MTN-DR"},{content:"Stable"},{content:"Outpatient, 2 days"},{content:"Phytochemicals"},{content:"Grayson, Richard"}]}]},{id:"subsection-1",text:"Test SubSection #2",rows:[{id:"3",cells:[{content:"Fleck, Arthur"},{content:"1007-MTN"},{content:"Unstable"},{content:"Inpatient, 2 months"},{content:""},{content:"Quinzell, Harleen"}]},{id:"4",cells:[{content:"Wayne, Bruce"},{content:"1007-MTN-DR"},{content:"Stable"},{content:"Outpatient, 2 days"},{content:"Phytochemicals"},{content:"Grayson, Richard"}]}]}]},{id:"section-1",text:"Test Section #2",rows:[{id:"5",cells:[{content:"Parker, Peter"},{content:"1007-MTN"},{content:"Unstable"},{content:"Inpatient, 2 months"},{content:""},{content:"Octopus, Doctor"}]},{id:"6",cells:[{content:"Stark, Tony"},{content:"1007-MTN-DR"},{content:"Stable"},{content:"Outpatient, 2 days"},{content:"Phytochemicals"},{content:"America, Captain"}]}]}]};n.A=function(){var e=(0,a.useState)(m.sections),n=(0,i.default)(e,2),t=n[0],o=n[1],l=(0,a.useCallback)((function(e){return t.map((function(n){return p(p({},n),{},{rows:n.rows?n.rows.map((function(n){return p(p({},n),{},{cells:n.cells.map((function(n){return p(p({},n),{},{isSelected:!!e&&n.isSelected})}))})})):void 0,subsections:n.subsections?n.subsections.map((function(n){return p(p({},n),{},{rows:n.rows.map((function(n){return p(p({},n),{},{cells:n.cells.map((function(n){return p(p({},n),{},{isSelected:!!e&&n.isSelected})}))})}))})})):void 0})}))}),[t]),c=(0,a.useCallback)((function(e){var n=t.find((function(n){return n.id===e.sectionId})),c=n.subsections?n.subsections.find((function(n){return n.id===e.subsectionId})):void 0,s=c?c.rows.findIndex((function(n){return n.id===e.rowId})):n.rows.findIndex((function(n){return n.id===e.rowId})),i=m.cols.findIndex((function(n){return n.id===e.columnId})),a=c?c.rows[s].cells[i]:n.rows[s].cells[i],r=l(e.isMetaPressed);(n=r.find((function(n){return n.id===e.sectionId}))).subsections?(c=n.subsections.find((function(n){return n.id===e.subsectionId}))).rows[s].cells[i].isSelected=!a.isSelected:n.rows[s].cells[i].isSelected=!a.isSelected,o(r)}),[t,l]),d=(0,a.useCallback)((function(e){var n=new Set(e.map((function(e){return e.columnId})).map((function(e){return m.cols.findIndex((function(n){return n.id===e}))}))),t=new Set(e.map((function(e){return e.rowId}))),c=l(),s=c.find((function(n){return n.id===e[0].sectionId}));s.subsections?s.subsections=s.subsections.map((function(e){return p(p({},e),{},{rows:e.rows.map((function(e){return p(p({},e),{},{cells:e.cells.map((function(o,l){return p(p({},o),{},{isSelected:n.has(l)&&t.has(e.id)})}))})}))})})):s.rows=s.rows.map((function(e){return p(p({},e),{},{cells:e.cells.map((function(o,l){return p(p({},o),{},{isSelected:n.has(l)&&t.has(e.id)})}))})})),o(c)}),[l]);return a.default.createElement(r.FlowsheetDataGrid,{id:"flowsheet-with-subsections",columns:m.cols,sections:t,ariaLabel:"Flowsheet Data Grid with Subsections",onSectionSelect:function(e){var n=(0,s.default)(t),l=n.findIndex((function(n){return n.id===e})),c=n.find((function(n){return n.id===e}));c.rows=c.rows.map((function(e){return p(p({},e),{},{cells:e.cells.map((function(e){return p(p({},e),{},{isSelected:!1})}))})})),l>-1&&(n[l].isCollapsed=!n[l].isCollapsed),o(n)},onCellRangeSelect:d,onCellSelect:c,onClearSelectedCells:function(){o(l())}})}},89986:function(e,n,t){t.r(n),n.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},58168:function(e,n,t){function o(){return o=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},o.apply(this,arguments)}t.d(n,{A:function(){return o}})},53986:function(e,n,t){function o(e,n){if(null==e)return{};var t,o,l=function(e,n){if(null==e)return{};var t={};for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){if(n.indexOf(o)>=0)continue;t[o]=e[o]}return t}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)t=c[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}t.d(n,{A:function(){return o}})}}]);