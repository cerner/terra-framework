"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[68277,48883,57721],{72720:function(n,e,t){t.r(e),t.d(e,{default:function(){return f}});var o=t(87462),c=t(44925),i=t(67294),a=t(81254),s=t(11381),l=["components"],r={};function d(n){var e=n.components,t=(0,c.Z)(n,l);return(0,a.mdx)("wrapper",(0,o.Z)({},r,t,{components:e,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React, { useState } from 'react';\nimport { FlowsheetDataGrid } from 'terra-data-grid';\n\nconst gridDataJSON = {\n  cols: [\n    {\n      id: 'Column-0', displayName: 'Patient', isSelectable: true,\n    },\n    {\n      id: 'Column-1', displayName: 'Location', isSelectable: true,\n    },\n    { id: 'Column-2', displayName: 'Illness Severity', isSelectable: true },\n    { id: 'Column-3', displayName: 'Visit' },\n    { id: 'Column-4', displayName: 'Allergy' },\n    { id: 'Column-5', displayName: 'Primary Contact' },\n\n  ],\n  sections: [{\n    id: 'section-0',\n    isCollapsible: true,\n    text: 'Test Section',\n    rows: [\n      {\n        id: '1',\n        cells: [\n          { content: 'Fleck, Arthur' },\n          { content: '1007-MTN' },\n          { content: 'Unstable' },\n          { content: 'Inpatient, 2 months' },\n          { content: '' },\n          { content: 'Quinzell, Harleen' },\n        ],\n      },\n      {\n        id: '2',\n        cells: [\n          { content: 'Wayne, Bruce' },\n          { content: '1007-MTN-DR' },\n          { content: 'Stable' },\n          { content: 'Outpatient, 2 days' },\n          { content: 'Phytochemicals' },\n          { content: 'Grayson, Richard' },\n        ],\n      },\n    ],\n  },\n  {\n    id: 'section-1',\n    text: 'Test Section #2',\n    rows: [\n      {\n        id: '3',\n        cells: [\n          { content: 'Parker, Peter' },\n          { content: '1007-MTN' },\n          { content: 'Unstable' },\n          { content: 'Inpatient, 2 months' },\n          { content: '' },\n          { content: 'Octopus, Doctor' },\n        ],\n      },\n      {\n        id: '4',\n        cells: [\n          { content: 'Stark, Tony' },\n          { content: '1007-MTN-DR' },\n          { content: 'Stable' },\n          { content: 'Outpatient, 2 days' },\n          { content: 'Phytochemicals' },\n          { content: 'America, Captain' },\n        ],\n      },\n    ],\n  }],\n};\n\nconst FlowsheetWithSections = () => {\n  const [tableSections, setTableSections] = useState(gridDataJSON.sections);\n\n  const handleSectionSelect = (sectionId) => {\n    const newSections = [...tableSections];\n    const sectionIndex = newSections.findIndex(section => section.id === sectionId);\n\n    if (sectionIndex > -1) {\n      newSections[sectionIndex].isCollapsed = !newSections[sectionIndex].isCollapsed;\n    }\n\n    setTableSections(newSections);\n  };\n\n  return (\n    <FlowsheetDataGrid\n      id=\"flowsheet-with-sections\"\n      columns={gridDataJSON.cols}\n      sections={tableSections}\n      onSectionSelect={handleSectionSelect}\n    />\n  );\n};\n\nexport default FlowsheetWithSections;\n\n")))}d.isMDXComponent=!0;var u=t(49271),p=function(n){var e=n.title,t=n.description,o=n.isExpanded;return i.createElement(u.Z,{title:e||"Flowsheet With Sections",description:t,example:i.createElement(s.Z,null),exampleSrc:i.createElement(d,null),isExpanded:o})},m=["components"],S={},y="wrapper";function f(n){var e=n.components,t=(0,c.Z)(n,m);return(0,a.mdx)(y,(0,o.Z)({},S,t,{components:e,mdxType:"MDXLayout"}),(0,a.mdx)(p,{mdxType:"FlowsheetWithSections"}))}f.isMDXComponent=!0},11381:function(n,e,t){var o=t(64836),c=t(18698);e.Z=void 0;var i=o(t(861)),a=o(t(27424)),s=function(n,e){if(!e&&n&&n.__esModule)return n;if(null===n||"object"!=c(n)&&"function"!=typeof n)return{default:n};var t=r(e);if(t&&t.has(n))return t.get(n);var o={__proto__:null},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in n)if("default"!==a&&Object.prototype.hasOwnProperty.call(n,a)){var s=i?Object.getOwnPropertyDescriptor(n,a):null;s&&(s.get||s.set)?Object.defineProperty(o,a,s):o[a]=n[a]}return o.default=n,t&&t.set(n,o),o}(t(67294)),l=t(55730);function r(n){if("function"!=typeof WeakMap)return null;var e=new WeakMap,t=new WeakMap;return(r=function(n){return n?t:e})(n)}var d={cols:[{id:"Column-0",displayName:"Patient",isSelectable:!0},{id:"Column-1",displayName:"Location",isSelectable:!0},{id:"Column-2",displayName:"Illness Severity",isSelectable:!0},{id:"Column-3",displayName:"Visit"},{id:"Column-4",displayName:"Allergy"},{id:"Column-5",displayName:"Primary Contact"}],sections:[{id:"section-0",isCollapsible:!0,text:"Test Section",rows:[{id:"1",cells:[{content:"Fleck, Arthur"},{content:"1007-MTN"},{content:"Unstable"},{content:"Inpatient, 2 months"},{content:""},{content:"Quinzell, Harleen"}]},{id:"2",cells:[{content:"Wayne, Bruce"},{content:"1007-MTN-DR"},{content:"Stable"},{content:"Outpatient, 2 days"},{content:"Phytochemicals"},{content:"Grayson, Richard"}]}]},{id:"section-1",text:"Test Section #2",rows:[{id:"3",cells:[{content:"Parker, Peter"},{content:"1007-MTN"},{content:"Unstable"},{content:"Inpatient, 2 months"},{content:""},{content:"Octopus, Doctor"}]},{id:"4",cells:[{content:"Stark, Tony"},{content:"1007-MTN-DR"},{content:"Stable"},{content:"Outpatient, 2 days"},{content:"Phytochemicals"},{content:"America, Captain"}]}]}]};e.Z=function(){var n=(0,s.useState)(d.sections),e=(0,a.default)(n,2),t=e[0],o=e[1];return s.default.createElement(l.FlowsheetDataGrid,{id:"flowsheet-with-sections",columns:d.cols,sections:t,onSectionSelect:function(n){var e=(0,i.default)(t),c=e.findIndex((function(e){return e.id===n}));c>-1&&(e[c].isCollapsed=!e[c].isCollapsed),o(e)}})}}}]);