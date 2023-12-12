"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[50922,48883,57721],{89702:function(n,e,t){t.r(e),t.d(e,{default:function(){return w}});var l=t(87462),o=t(44925),a=t(67294),r=t(81254),c=t(42181),s=["components"],i={};function d(n){var e=n.components,t=(0,o.Z)(n,s);return(0,r.mdx)("wrapper",(0,l.Z)({},i,t,{components:e,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { FlowsheetDataGrid } from 'terra-data-grid';\n\nconst gridDataJSON = {\n  cols: [\n    { id: 'Column-0', displayName: 'Vitals' },\n    { id: 'Column-1', displayName: 'March 16' },\n    { id: 'Column-2', displayName: 'March 17' },\n    { id: 'Column-3', displayName: 'March 18' },\n  ],\n  rows: [\n    {\n      id: '1',\n      cells: [\n        { content: 'Heart Rate Monitored (bpm)' },\n        { content: '68' },\n        { content: null },\n        { content: '67' },\n      ],\n    },\n    {\n      id: '2',\n      cells: [\n        { content: 'Temperature Oral (degC)' },\n        { content: null },\n        { content: '36.9' },\n        { content: null },\n      ],\n    },\n    {\n      id: '3',\n      cells: [\n        { content: 'Cardiac Index (L/min/m2)' },\n        { content: '2.25' },\n        { content: null },\n        { content: null },\n      ],\n    },\n    {\n      id: '4',\n      cells: [\n        { content: 'ICP (mmHg)' },\n        { content: null },\n        { content: '11' },\n        { content: '12' },\n      ],\n    },\n    {\n      id: '5',\n      cells: [\n        { content: 'CPP (mmHg)' },\n        { content: '63' },\n        { content: null },\n        { content: '48' },\n      ],\n    },\n  ],\n};\n\nconst NoResultCells = () => {\n  const { cols, rows } = gridDataJSON;\n\n  return (\n    <FlowsheetDataGrid\n      id=\"default-terra-flowsheet-data-grid-no-result-cells\"\n      columns={cols}\n      rows={rows}\n      ariaLabel=\"Flowsheet Data Grid with No Result Cells\"\n    />\n  );\n};\n\nexport default NoResultCells;\n\n")))}d.isMDXComponent=!0;var m=t(49271),u=function(n){var e=n.title,t=n.description,l=n.isExpanded;return a.createElement(m.Z,{title:e||"No Result Cells",description:t,example:a.createElement(c.Z,null),exampleSrc:a.createElement(d,null),isExpanded:l})},p=["components"],C={},h="wrapper";function w(n){var e=n.components,t=(0,o.Z)(n,p);return(0,r.mdx)(h,(0,l.Z)({},C,t,{components:e,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"no-result-cells"},'"No Result" Cells'),(0,r.mdx)("h3",{id:"description"},"Description"),(0,r.mdx)("p",null,'If the content of a cell is an empty string, "--", or null, it will be represented by a dash and presented to assistive technologies as "No result."'),(0,r.mdx)(u,{title:'Flowsheet Data Grid with "No Result" Cells',mdxType:"NoResultCells"}))}w.isMDXComponent=!0},42181:function(n,e,t){var l=t(64836);e.Z=void 0;var o=l(t(67294)),a=t(55730),r=[{id:"Column-0",displayName:"Vitals"},{id:"Column-1",displayName:"March 16"},{id:"Column-2",displayName:"March 17"},{id:"Column-3",displayName:"March 18"}],c=[{id:"1",cells:[{content:"Heart Rate Monitored (bpm)"},{content:"68"},{content:null},{content:"67"}]},{id:"2",cells:[{content:"Temperature Oral (degC)"},{content:null},{content:"36.9"},{content:null}]},{id:"3",cells:[{content:"Cardiac Index (L/min/m2)"},{content:"2.25"},{content:null},{content:null}]},{id:"4",cells:[{content:"ICP (mmHg)"},{content:null},{content:"11"},{content:"12"}]},{id:"5",cells:[{content:"CPP (mmHg)"},{content:"63"},{content:null},{content:"48"}]}];e.Z=function(){var n=r,e=c;return o.default.createElement(a.FlowsheetDataGrid,{id:"default-terra-flowsheet-data-grid-no-result-cells",columns:n,rows:e,ariaLabel:"Flowsheet Data Grid with No Result Cells"})}}}]);