"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[93062],{93062:function(n,e,t){t.r(e),t.d(e,{default:function(){return C}});var a=t(87462),l=t(44925),o=t(67294),i=t(81254),d=t(61701),m=t(5874),r=["components"],s={};function c(n){var e=n.components,t=(0,l.Z)(n,r);return(0,i.mdx)("wrapper",(0,a.Z)({},s,t,{components:e,mdxType:"MDXLayout"}),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Table from 'terra-table';\n\nconst tableData = {\n  cols: [\n    { id: 'Column-0', displayName: 'Patient' },\n    { id: 'Column-1', displayName: 'Location' },\n    { id: 'Column-2', displayName: 'Illness Severity' },\n    { id: 'Column-3', displayName: 'Visit' },\n    { id: 'Column-4', displayName: 'Allergy' },\n    { id: 'Column-5', displayName: 'Primary Contact' },\n    { id: 'Column-6', displayName: 'Generic Order Counts' },\n    { id: 'Column-7', displayName: 'Patient Age' },\n    { id: 'Column-8', displayName: 'Medication History' },\n    { id: 'Column-9', displayName: 'My Relationship' },\n    { id: 'Column-10', displayName: 'Not Selectable' },\n  ],\n  rows: [\n    {\n      id: '1',\n      cells: [\n        { content: 'Fleck, Arthur' },\n        { content: '1007-MTN' },\n        { content: 'Unstable' },\n        { content: 'Inpatient, 2 months' },\n        { content: '' },\n        { content: 'Quinzell, Harleen' },\n        { content: '' },\n        { isMasked: true },\n        { isMasked: true },\n        { content: 'Admitting Physician' },\n        { content: '' },\n      ],\n    },\n    {\n      id: '2',\n      cells: [\n        { content: 'Wayne, Bruce' },\n        { content: '1007-MTN-DR' },\n        { content: 'Stable' },\n        { content: 'Outpatient, 2 days' },\n        { content: 'Phytochemicals' },\n        { content: 'Grayson, Richard' },\n        { content: '' },\n        { content: '' },\n        { isMasked: true },\n        { content: 'Admitting Physician' },\n        { content: '' },\n      ],\n    },\n  ],\n};\n\nconst PinnedColumnsTable = () => (\n  <Table\n    id=\"my-table-id\"\n    pinnedColumns={tableData.cols.slice(0, 2)}\n    overflowColumns={tableData.cols.slice(2)}\n    rows={tableData.rows}\n  />\n);\n\nexport default PinnedColumnsTable;\n\n")))}c.isMDXComponent=!0;var p=t(49271),u=function(n){var e=n.title,t=n.description,a=n.isExpanded;return o.createElement(p.Z,{title:e||"Pinned Columns Table",description:t,example:o.createElement(m.Z,null),exampleSrc:o.createElement(c,null),isExpanded:a})},y=t(41288),N=["components"],x={},b="wrapper";function C(n){var e=n.components,t=(0,l.Z)(n,N);return(0,i.mdx)(b,(0,a.Z)({},x,t,{components:e,mdxType:"MDXLayout"}),(0,i.mdx)(d.C,{mdxType:"Badge"}),(0,i.mdx)("h1",{id:"pinned-columns-table"},"Pinned Columns Table"),(0,i.mdx)("p",null,"Terra Table is a structural component used to create data tables. Table provides means to handle row selection and hooks for sortable columns."),(0,i.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Install with ",(0,i.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"npm install terra-table"))))),(0,i.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),(0,i.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),(0,i.mdx)("table",null,(0,i.mdx)("thead",{parentName:"table"},(0,i.mdx)("tr",{parentName:"thead"},(0,i.mdx)("th",{parentName:"tr",align:null},"Peer Dependency"),(0,i.mdx)("th",{parentName:"tr",align:null},"Version"))),(0,i.mdx)("tbody",{parentName:"table"},(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"react"),(0,i.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"react-dom"),(0,i.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"react-intl"),(0,i.mdx)("td",{parentName:"tr",align:null},"^2.8.0")))),(0,i.mdx)("h2",{id:"usage"},"Usage"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-jsx"},'import Table from "terra-table";\n')),(0,i.mdx)(u,{mdxType:"PinnedColumnsTable"}),(0,i.mdx)("h2",{id:"table-props"},"Table Props"),(0,i.mdx)(y.Z,{mdxType:"TablePropsTable"}))}C.isMDXComponent=!0},5874:function(n,e,t){var a=t(64836);e.Z=void 0;var l=a(t(67294)),o=a(t(12810)),i={cols:[{id:"Column-0",displayName:"Patient"},{id:"Column-1",displayName:"Location"},{id:"Column-2",displayName:"Illness Severity"},{id:"Column-3",displayName:"Visit"},{id:"Column-4",displayName:"Allergy"},{id:"Column-5",displayName:"Primary Contact"},{id:"Column-6",displayName:"Generic Order Counts"},{id:"Column-7",displayName:"Patient Age"},{id:"Column-8",displayName:"Medication History"},{id:"Column-9",displayName:"My Relationship"},{id:"Column-10",displayName:"Not Selectable"}],rows:[{id:"1",cells:[{content:"Fleck, Arthur"},{content:"1007-MTN"},{content:"Unstable"},{content:"Inpatient, 2 months"},{content:""},{content:"Quinzell, Harleen"},{content:""},{isMasked:!0},{isMasked:!0},{content:"Admitting Physician"},{content:""}]},{id:"2",cells:[{content:"Wayne, Bruce"},{content:"1007-MTN-DR"},{content:"Stable"},{content:"Outpatient, 2 days"},{content:"Phytochemicals"},{content:"Grayson, Richard"},{content:""},{content:""},{isMasked:!0},{content:"Admitting Physician"},{content:""}]}]};e.Z=function(){return l.default.createElement(o.default,{id:"my-table-id",pinnedColumns:i.cols.slice(0,2),overflowColumns:i.cols.slice(2),rows:i.rows})}}}]);