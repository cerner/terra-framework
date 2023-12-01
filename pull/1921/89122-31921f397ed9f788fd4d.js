"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[89122],{49271:function(e,n,t){var o=t(64836),l=t(18698);n.Z=void 0;var a=o(t(27424)),c=function(e,n){if(!n&&e&&e.__esModule)return e;if(null===e||"object"!==l(e)&&"function"!=typeof e)return{default:e};var t=f(n);if(t&&t.has(e))return t.get(e);var o={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in e)if("default"!==c&&Object.prototype.hasOwnProperty.call(e,c)){var i=a?Object.getOwnPropertyDescriptor(e,c):null;i&&(i.get||i.set)?Object.defineProperty(o,c,i):o[c]=e[c]}o.default=e,t&&t.set(e,o);return o}(t(67294)),i=o(t(45697)),s=o(t(47166)),r=t(21538),d=o(t(33864)),u=o(t(23399)),m=t(51051),p=o(t(53560));function f(e){if("function"!=typeof WeakMap)return null;var n=new WeakMap,t=new WeakMap;return(f=function(e){return e?t:n})(e)}var b=s.default.bind(p.default),y={example:i.default.element,exampleSrc:i.default.element,exampleCssSrc:i.default.element,title:i.default.string,description:i.default.node,isExpanded:i.default.bool},S=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},_=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},h=function(e){var n=e.example,t=e.exampleSrc,o=e.exampleCssSrc,l=e.title,i=e.description,s=e.isExpanded,p=(0,c.useState)(s),f=(0,a.default)(p,2),y=f[0],h=f[1],x=(0,c.useState)(!1),v=(0,a.default)(x,2),C=v[0],T=v[1],N=c.default.useContext(r.ThemeContext),w=void 0!==o,E=function(){T(!C),y&&h(!y)},g=function(){h(!y),C&&T(!C)},O=function(e,n){e.nativeEvent.keyCode!==m.KEY_SPACE&&e.nativeEvent.keyCode!==m.KEY_RETURN||(e.preventDefault(),n())};return c.default.createElement("div",{className:b("template",N.className)},c.default.createElement("div",{className:b("header")},l&&c.default.createElement("h2",{className:b("title")},l)),c.default.createElement("div",{className:b("content")},i&&c.default.createElement("div",{className:b("description")},i),n),c.default.createElement("div",{className:b("footer")},t?c.default.createElement("div",{className:b("button-container")},w&&c.default.createElement("button",{type:"button",className:b("css-toggle","item",{"is-selected":C}),onClick:E,onKeyDown:function(e){return O(e,E)},onBlur:S,onMouseDown:_,tabIndex:0,"data-focus-styles-enabled":!0},c.default.createElement(d.default,{className:b("chevron")}),c.default.createElement("span",null,"CSS"),c.default.createElement(u.default,{className:b("chevron")})),c.default.createElement("button",{type:"button",className:b("code-toggle","item",{"is-selected":y}),onClick:g,onKeyDown:function(e){return O(e,g)},onBlur:S,onMouseDown:_,tabIndex:0,"data-focus-styles-enabled":!0},c.default.createElement(d.default,{className:b("chevron")}),c.default.createElement("span",null,"Code"),c.default.createElement(u.default,{className:b("chevron")}))):null,c.default.createElement("div",null,C&&c.default.createElement("div",{className:b("css")},o),y&&c.default.createElement("div",{className:b("code")},t))))};h.propTypes=y,h.defaultProps={isExpanded:!1};var x=h;n.Z=x},98350:function(e,n,t){t.r(n),t.d(n,{default:function(){return v}});var o=t(87462),l=t(44925),a=t(67294),c=t(81254),i=t(71815),s=["components"],r={};function d(e){var n=e.components,t=(0,l.Z)(e,s);return(0,c.mdx)("wrapper",(0,o.Z)({},r,t,{components:n,mdxType:"MDXLayout"}),(0,c.mdx)("pre",null,(0,c.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React, { useState } from 'react';\nimport Table from 'terra-table';\n\nconst tableData = {\n  cols: [\n    {\n      id: 'Column-0', displayName: 'Patient', sortIndicator: 'ascending', isSelectable: true,\n    },\n    {\n      id: 'Column-1', displayName: 'Location', isSelectable: true,\n    },\n    { id: 'Column-2', displayName: 'Illness Severity', isSelectable: true },\n    { id: 'Column-3', displayName: 'Visit' },\n    { id: 'Column-4', displayName: 'Allergy' },\n    { id: 'Column-5', displayName: 'Primary Contact' },\n\n  ],\n  sections: [{\n    id: 'section-0',\n    text: 'Test Section',\n    rows: [\n      {\n        id: '1',\n        cells: [\n          { content: 'Fleck, Arthur' },\n          { content: '1007-MTN' },\n          { content: 'Unstable' },\n          { content: 'Inpatient, 2 months' },\n          { content: '' },\n          { content: 'Quinzell, Harleen' },\n        ],\n      },\n      {\n        id: '2',\n        cells: [\n          { content: 'Wayne, Bruce' },\n          { content: '1007-MTN-DR' },\n          { content: 'Stable' },\n          { content: 'Outpatient, 2 days' },\n          { content: 'Phytochemicals' },\n          { content: 'Grayson, Richard' },\n        ],\n      },\n    ],\n  },\n  {\n    id: 'section-1',\n    text: 'Test Section #2',\n    rows: [\n      {\n        id: '3',\n        cells: [\n          { content: 'Parker, Peter' },\n          { content: '1007-MTN' },\n          { content: 'Unstable' },\n          { content: 'Inpatient, 2 months' },\n          { content: '' },\n          { content: 'Octopus, Doctor' },\n        ],\n      },\n      {\n        id: '4',\n        cells: [\n          { content: 'Stark, Tony' },\n          { content: '1007-MTN-DR' },\n          { content: 'Stable' },\n          { content: 'Outpatient, 2 days' },\n          { content: 'Phytochemicals' },\n          { content: 'America, Captain' },\n        ],\n      },\n    ],\n  }],\n};\n\nconst TableWithSections = () => {\n  const [tableSections, setTableSections] = useState(tableData.sections);\n\n  const handleSectionSelect = (sectionId) => {\n    const newSections = [...tableSections];\n    const sectionIndex = newSections.findIndex(section => section.id === sectionId);\n\n    if (sectionIndex > -1) {\n      newSections[sectionIndex].isCollapsed = !newSections[sectionIndex].isCollapsed;\n    }\n\n    setTableSections(newSections);\n  };\n\n  return (\n    <Table\n      id=\"table-with-sections\"\n      pinnedColumns={tableData.cols.slice(0, 2)}\n      overflowColumns={tableData.cols.slice(2)}\n      sections={tableSections}\n      onSectionSelect={handleSectionSelect}\n      isStriped\n    />\n  );\n};\n\nexport default TableWithSections;\n\n")))}d.isMDXComponent=!0;var u=t(49271),m=function(e){var n=e.title,t=e.description,o=e.isExpanded;return a.createElement(u.Z,{title:n||"Table With Sections",description:t,example:a.createElement(i.Z,null),exampleSrc:a.createElement(d,null),isExpanded:o})},p=t(41823),f=["components"],b={};function y(e){var n=e.components,t=(0,l.Z)(e,f);return(0,c.mdx)("wrapper",(0,o.Z)({},b,t,{components:n,mdxType:"MDXLayout"}),(0,c.mdx)("pre",null,(0,c.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React, { useState } from 'react';\nimport Table from 'terra-table';\n\nconst tableData = {\n  cols: [\n    {\n      id: 'Column-0', displayName: 'Patient', sortIndicator: 'ascending', isSelectable: true,\n    },\n    {\n      id: 'Column-1', displayName: 'Location', isSelectable: true,\n    },\n    { id: 'Column-2', displayName: 'Illness Severity', isSelectable: true },\n    { id: 'Column-3', displayName: 'Visit' },\n    { id: 'Column-4', displayName: 'Allergy' },\n    { id: 'Column-5', displayName: 'Primary Contact' },\n\n  ],\n  sections: [{\n    id: 'section-0',\n    isCollapsible: true,\n    isCollapsed: true,\n    text: 'Test Section',\n    rows: [\n      {\n        id: '1',\n        cells: [\n          { content: 'Fleck, Arthur' },\n          { content: '1007-MTN' },\n          { content: 'Unstable' },\n          { content: 'Inpatient, 2 months' },\n          { content: '' },\n          { content: 'Quinzell, Harleen' },\n        ],\n      },\n      {\n        id: '2',\n        cells: [\n          { content: 'Wayne, Bruce' },\n          { content: '1007-MTN-DR' },\n          { content: 'Stable' },\n          { content: 'Outpatient, 2 days' },\n          { content: 'Phytochemicals' },\n          { content: 'Grayson, Richard' },\n        ],\n      },\n    ],\n  },\n  {\n    id: 'section-1',\n    isCollapsible: true,\n    isCollapsed: false,\n    text: 'Test Section #2',\n    rows: [\n      {\n        id: '3',\n        cells: [\n          { content: 'Parker, Peter' },\n          { content: '1007-MTN' },\n          { content: 'Unstable' },\n          { content: 'Inpatient, 2 months' },\n          { content: '' },\n          { content: 'Octopus, Doctor' },\n        ],\n      },\n      {\n        id: '4',\n        cells: [\n          { content: 'Stark, Tony' },\n          { content: '1007-MTN-DR' },\n          { content: 'Stable' },\n          { content: 'Outpatient, 2 days' },\n          { content: 'Phytochemicals' },\n          { content: 'America, Captain' },\n        ],\n      },\n    ],\n  }],\n};\n\nconst TableWithCollapsibleSections = () => {\n  const [tableSections, setTableSections] = useState(tableData.sections);\n\n  const handleSectionSelect = (sectionId) => {\n    const newSections = [...tableSections];\n    const sectionIndex = newSections.findIndex(section => section.id === sectionId);\n\n    if (sectionIndex > -1) {\n      newSections[sectionIndex].isCollapsed = !newSections[sectionIndex].isCollapsed;\n    }\n\n    setTableSections(newSections);\n  };\n\n  return (\n    <Table\n      id=\"table-with-sections\"\n      overflowColumns={tableData.cols}\n      sections={tableSections}\n      onSectionSelect={handleSectionSelect}\n    />\n  );\n};\n\nexport default TableWithCollapsibleSections;\n\n")))}y.isMDXComponent=!0;var S=function(e){var n=e.title,t=e.description,o=e.isExpanded;return a.createElement(u.Z,{title:n||"Table With Collapsible Sections",description:t,example:a.createElement(p.Z,null),exampleSrc:a.createElement(y,null),isExpanded:o})},_=["components"],h={},x="wrapper";function v(e){var n=e.components,t=(0,l.Z)(e,_);return(0,c.mdx)(x,(0,o.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,c.mdx)(S,{mdxType:"TableWithCollapsibleSections"}),(0,c.mdx)(m,{mdxType:"TableWithSections"}))}v.isMDXComponent=!0},41823:function(e,n,t){var o=t(64836),l=t(18698);n.Z=void 0;var a=o(t(861)),c=o(t(27424)),i=function(e,n){if(!n&&e&&e.__esModule)return e;if(null===e||"object"!=l(e)&&"function"!=typeof e)return{default:e};var t=r(n);if(t&&t.has(e))return t.get(e);var o={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in e)if("default"!==c&&Object.prototype.hasOwnProperty.call(e,c)){var i=a?Object.getOwnPropertyDescriptor(e,c):null;i&&(i.get||i.set)?Object.defineProperty(o,c,i):o[c]=e[c]}return o.default=e,t&&t.set(e,o),o}(t(67294)),s=o(t(12810));function r(e){if("function"!=typeof WeakMap)return null;var n=new WeakMap,t=new WeakMap;return(r=function(e){return e?t:n})(e)}var d={cols:[{id:"Column-0",displayName:"Patient",sortIndicator:"ascending",isSelectable:!0},{id:"Column-1",displayName:"Location",isSelectable:!0},{id:"Column-2",displayName:"Illness Severity",isSelectable:!0},{id:"Column-3",displayName:"Visit"},{id:"Column-4",displayName:"Allergy"},{id:"Column-5",displayName:"Primary Contact"}],sections:[{id:"section-0",isCollapsible:!0,isCollapsed:!0,text:"Test Section",rows:[{id:"1",cells:[{content:"Fleck, Arthur"},{content:"1007-MTN"},{content:"Unstable"},{content:"Inpatient, 2 months"},{content:""},{content:"Quinzell, Harleen"}]},{id:"2",cells:[{content:"Wayne, Bruce"},{content:"1007-MTN-DR"},{content:"Stable"},{content:"Outpatient, 2 days"},{content:"Phytochemicals"},{content:"Grayson, Richard"}]}]},{id:"section-1",isCollapsible:!0,isCollapsed:!1,text:"Test Section #2",rows:[{id:"3",cells:[{content:"Parker, Peter"},{content:"1007-MTN"},{content:"Unstable"},{content:"Inpatient, 2 months"},{content:""},{content:"Octopus, Doctor"}]},{id:"4",cells:[{content:"Stark, Tony"},{content:"1007-MTN-DR"},{content:"Stable"},{content:"Outpatient, 2 days"},{content:"Phytochemicals"},{content:"America, Captain"}]}]}]};n.Z=function(){var e=(0,i.useState)(d.sections),n=(0,c.default)(e,2),t=n[0],o=n[1];return i.default.createElement(s.default,{id:"table-with-sections",overflowColumns:d.cols,sections:t,onSectionSelect:function(e){var n=(0,a.default)(t),l=n.findIndex((function(n){return n.id===e}));l>-1&&(n[l].isCollapsed=!n[l].isCollapsed),o(n)}})}},71815:function(e,n,t){var o=t(64836),l=t(18698);n.Z=void 0;var a=o(t(861)),c=o(t(27424)),i=function(e,n){if(!n&&e&&e.__esModule)return e;if(null===e||"object"!=l(e)&&"function"!=typeof e)return{default:e};var t=r(n);if(t&&t.has(e))return t.get(e);var o={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in e)if("default"!==c&&Object.prototype.hasOwnProperty.call(e,c)){var i=a?Object.getOwnPropertyDescriptor(e,c):null;i&&(i.get||i.set)?Object.defineProperty(o,c,i):o[c]=e[c]}return o.default=e,t&&t.set(e,o),o}(t(67294)),s=o(t(12810));function r(e){if("function"!=typeof WeakMap)return null;var n=new WeakMap,t=new WeakMap;return(r=function(e){return e?t:n})(e)}var d={cols:[{id:"Column-0",displayName:"Patient",sortIndicator:"ascending",isSelectable:!0},{id:"Column-1",displayName:"Location",isSelectable:!0},{id:"Column-2",displayName:"Illness Severity",isSelectable:!0},{id:"Column-3",displayName:"Visit"},{id:"Column-4",displayName:"Allergy"},{id:"Column-5",displayName:"Primary Contact"}],sections:[{id:"section-0",text:"Test Section",rows:[{id:"1",cells:[{content:"Fleck, Arthur"},{content:"1007-MTN"},{content:"Unstable"},{content:"Inpatient, 2 months"},{content:""},{content:"Quinzell, Harleen"}]},{id:"2",cells:[{content:"Wayne, Bruce"},{content:"1007-MTN-DR"},{content:"Stable"},{content:"Outpatient, 2 days"},{content:"Phytochemicals"},{content:"Grayson, Richard"}]}]},{id:"section-1",text:"Test Section #2",rows:[{id:"3",cells:[{content:"Parker, Peter"},{content:"1007-MTN"},{content:"Unstable"},{content:"Inpatient, 2 months"},{content:""},{content:"Octopus, Doctor"}]},{id:"4",cells:[{content:"Stark, Tony"},{content:"1007-MTN-DR"},{content:"Stable"},{content:"Outpatient, 2 days"},{content:"Phytochemicals"},{content:"America, Captain"}]}]}]};n.Z=function(){var e=(0,i.useState)(d.sections),n=(0,c.default)(e,2),t=n[0],o=n[1];return i.default.createElement(s.default,{id:"table-with-sections",pinnedColumns:d.cols.slice(0,2),overflowColumns:d.cols.slice(2),sections:t,onSectionSelect:function(e){var n=(0,a.default)(t),l=n.findIndex((function(n){return n.id===e}));l>-1&&(n[l].isCollapsed=!n[l].isCollapsed),o(n)},isStriped:!0})}},53560:function(e,n,t){t.r(n),n.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},87462:function(e,n,t){function o(){return o=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},o.apply(this,arguments)}t.d(n,{Z:function(){return o}})},44925:function(e,n,t){function o(e,n){if(null==e)return{};var t,o,l=function(e,n){if(null==e)return{};var t,o,l={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}t.d(n,{Z:function(){return o}})}}]);