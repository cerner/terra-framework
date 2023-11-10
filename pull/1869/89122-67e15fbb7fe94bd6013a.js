"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[89122],{49271:function(e,t,n){var o=n(64836),a=n(18698);t.Z=void 0;var l=o(n(27424)),c=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var o={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in e)if("default"!==c&&Object.prototype.hasOwnProperty.call(e,c)){var i=l?Object.getOwnPropertyDescriptor(e,c):null;i&&(i.get||i.set)?Object.defineProperty(o,c,i):o[c]=e[c]}o.default=e,n&&n.set(e,o);return o}(n(67294)),i=o(n(45697)),s=o(n(47166)),r=n(21538),d=o(n(33864)),u=o(n(23399)),m=n(51051),p=o(n(53560));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}var b=s.default.bind(p.default),y={example:i.default.element,exampleSrc:i.default.element,exampleCssSrc:i.default.element,title:i.default.string,description:i.default.node,isExpanded:i.default.bool},S=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},_=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},h=function(e){var t=e.example,n=e.exampleSrc,o=e.exampleCssSrc,a=e.title,i=e.description,s=e.isExpanded,p=(0,c.useState)(s),f=(0,l.default)(p,2),y=f[0],h=f[1],x=(0,c.useState)(!1),v=(0,l.default)(x,2),C=v[0],T=v[1],N=c.default.useContext(r.ThemeContext),w=void 0!==o,E=function(){T(!C),y&&h(!y)},g=function(){h(!y),C&&T(!C)},O=function(e,t){e.nativeEvent.keyCode!==m.KEY_SPACE&&e.nativeEvent.keyCode!==m.KEY_RETURN||(e.preventDefault(),t())};return c.default.createElement("div",{className:b("template",N.className)},c.default.createElement("div",{className:b("header")},a&&c.default.createElement("h2",{className:b("title")},a)),c.default.createElement("div",{className:b("content")},i&&c.default.createElement("div",{className:b("description")},i),t),c.default.createElement("div",{className:b("footer")},n?c.default.createElement("div",{className:b("button-container")},w&&c.default.createElement("button",{type:"button",className:b("css-toggle","item",{"is-selected":C}),onClick:E,onKeyDown:function(e){return O(e,E)},onBlur:S,onMouseDown:_,tabIndex:0,"data-focus-styles-enabled":!0},c.default.createElement(d.default,{className:b("chevron")}),c.default.createElement("span",null,"CSS"),c.default.createElement(u.default,{className:b("chevron")})),c.default.createElement("button",{type:"button",className:b("code-toggle","item",{"is-selected":y}),onClick:g,onKeyDown:function(e){return O(e,g)},onBlur:S,onMouseDown:_,tabIndex:0,"data-focus-styles-enabled":!0},c.default.createElement(d.default,{className:b("chevron")}),c.default.createElement("span",null,"Code"),c.default.createElement(u.default,{className:b("chevron")}))):null,c.default.createElement("div",null,C&&c.default.createElement("div",{className:b("css")},o),y&&c.default.createElement("div",{className:b("code")},n))))};h.propTypes=y,h.defaultProps={isExpanded:!1};var x=h;t.Z=x},98350:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var o=n(87462),a=n(44925),l=n(67294),c=n(81254),i=n(71815),s=["components"],r={};function d(e){var t=e.components,n=(0,a.Z)(e,s);return(0,c.mdx)("wrapper",(0,o.Z)({},r,n,{components:t,mdxType:"MDXLayout"}),(0,c.mdx)("pre",null,(0,c.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React, { useState } from 'react';\nimport Table from 'terra-table';\n\nconst tableData = {\n  cols: [\n    {\n      id: 'Column-0', displayName: 'Patient', sortIndicator: 'ascending', isSelectable: true,\n    },\n    {\n      id: 'Column-1', displayName: 'Location', isSelectable: true,\n    },\n    { id: 'Column-2', displayName: 'Illness Severity', isSelectable: true },\n    { id: 'Column-3', displayName: 'Visit' },\n    { id: 'Column-4', displayName: 'Allergy' },\n    { id: 'Column-5', displayName: 'Primary Contact' },\n\n  ],\n  sections: [{\n    id: 'section-0',\n    text: 'Test Section',\n    rows: [\n      {\n        id: '1',\n        cells: [\n          { content: 'Fleck, Arthur' },\n          { content: '1007-MTN' },\n          { content: 'Unstable' },\n          { content: 'Inpatient, 2 months' },\n          { content: '' },\n          { content: 'Quinzell, Harleen' },\n        ],\n      },\n      {\n        id: '2',\n        cells: [\n          { content: 'Wayne, Bruce' },\n          { content: '1007-MTN-DR' },\n          { content: 'Stable' },\n          { content: 'Outpatient, 2 days' },\n          { content: 'Phytochemicals' },\n          { content: 'Grayson, Richard' },\n        ],\n      },\n    ],\n  },\n  {\n    id: 'section-1',\n    text: 'Test Section #2',\n    rows: [\n      {\n        id: '3',\n        cells: [\n          { content: 'Parker, Peter' },\n          { content: '1007-MTN' },\n          { content: 'Unstable' },\n          { content: 'Inpatient, 2 months' },\n          { content: '' },\n          { content: 'Octopus, Doctor' },\n        ],\n      },\n      {\n        id: '4',\n        cells: [\n          { content: 'Stark, Tony' },\n          { content: '1007-MTN-DR' },\n          { content: 'Stable' },\n          { content: 'Outpatient, 2 days' },\n          { content: 'Phytochemicals' },\n          { content: 'America, Captain' },\n        ],\n      },\n    ],\n  }],\n};\n\nconst TableWithSections = () => {\n  const [tableSections, setTableSections] = useState(tableData.sections);\n\n  const handleSectionSelect = (sectionId) => {\n    const newSections = [...tableSections];\n    const sectionIndex = newSections.findIndex(section => section.id === sectionId);\n\n    if (sectionIndex > -1) {\n      newSections[sectionIndex].isCollapsed = !newSections[sectionIndex].isCollapsed;\n    }\n\n    setTableSections(newSections);\n  };\n\n  return (\n    <Table\n      id=\"table-with-sections\"\n      overflowColumns={tableData.cols}\n      sections={tableSections}\n      onSectionSelect={handleSectionSelect}\n      isStriped\n    />\n  );\n};\n\nexport default TableWithSections;\n\n")))}d.isMDXComponent=!0;var u=n(49271),m=function(e){var t=e.title,n=e.description,o=e.isExpanded;return l.createElement(u.Z,{title:t||"Table With Sections",description:n,example:l.createElement(i.Z,null),exampleSrc:l.createElement(d,null),isExpanded:o})},p=n(41823),f=["components"],b={};function y(e){var t=e.components,n=(0,a.Z)(e,f);return(0,c.mdx)("wrapper",(0,o.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,c.mdx)("pre",null,(0,c.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React, { useState } from 'react';\nimport Table from 'terra-table';\n\nconst tableData = {\n  cols: [\n    {\n      id: 'Column-0', displayName: 'Patient', sortIndicator: 'ascending', isSelectable: true,\n    },\n    {\n      id: 'Column-1', displayName: 'Location', isSelectable: true,\n    },\n    { id: 'Column-2', displayName: 'Illness Severity', isSelectable: true },\n    { id: 'Column-3', displayName: 'Visit' },\n    { id: 'Column-4', displayName: 'Allergy' },\n    { id: 'Column-5', displayName: 'Primary Contact' },\n\n  ],\n  sections: [{\n    id: 'section-0',\n    isCollapsible: true,\n    isCollapsed: true,\n    text: 'Test Section',\n    rows: [\n      {\n        id: '1',\n        cells: [\n          { content: 'Fleck, Arthur' },\n          { content: '1007-MTN' },\n          { content: 'Unstable' },\n          { content: 'Inpatient, 2 months' },\n          { content: '' },\n          { content: 'Quinzell, Harleen' },\n        ],\n      },\n      {\n        id: '2',\n        cells: [\n          { content: 'Wayne, Bruce' },\n          { content: '1007-MTN-DR' },\n          { content: 'Stable' },\n          { content: 'Outpatient, 2 days' },\n          { content: 'Phytochemicals' },\n          { content: 'Grayson, Richard' },\n        ],\n      },\n    ],\n  },\n  {\n    id: 'section-1',\n    isCollapsible: true,\n    isCollapsed: false,\n    text: 'Test Section #2',\n    rows: [\n      {\n        id: '3',\n        cells: [\n          { content: 'Parker, Peter' },\n          { content: '1007-MTN' },\n          { content: 'Unstable' },\n          { content: 'Inpatient, 2 months' },\n          { content: '' },\n          { content: 'Octopus, Doctor' },\n        ],\n      },\n      {\n        id: '4',\n        cells: [\n          { content: 'Stark, Tony' },\n          { content: '1007-MTN-DR' },\n          { content: 'Stable' },\n          { content: 'Outpatient, 2 days' },\n          { content: 'Phytochemicals' },\n          { content: 'America, Captain' },\n        ],\n      },\n    ],\n  }],\n};\n\nconst TableWithCollapsibleSections = () => {\n  const [tableSections, setTableSections] = useState(tableData.sections);\n\n  const handleSectionSelect = (sectionId) => {\n    const newSections = [...tableSections];\n    const sectionIndex = newSections.findIndex(section => section.id === sectionId);\n\n    if (sectionIndex > -1) {\n      newSections[sectionIndex].isCollapsed = !newSections[sectionIndex].isCollapsed;\n    }\n\n    setTableSections(newSections);\n  };\n\n  return (\n    <Table\n      id=\"table-with-sections\"\n      overflowColumns={tableData.cols}\n      sections={tableSections}\n      onSectionSelect={handleSectionSelect}\n    />\n  );\n};\n\nexport default TableWithCollapsibleSections;\n\n")))}y.isMDXComponent=!0;var S=function(e){var t=e.title,n=e.description,o=e.isExpanded;return l.createElement(u.Z,{title:t||"Table With Collapsible Sections",description:n,example:l.createElement(p.Z,null),exampleSrc:l.createElement(y,null),isExpanded:o})},_=["components"],h={},x="wrapper";function v(e){var t=e.components,n=(0,a.Z)(e,_);return(0,c.mdx)(x,(0,o.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,c.mdx)(S,{mdxType:"TableWithCollapsibleSections"}),(0,c.mdx)(m,{mdxType:"TableWithSections"}))}v.isMDXComponent=!0},41823:function(e,t,n){var o=n(64836),a=n(18698);t.Z=void 0;var l=o(n(861)),c=o(n(27424)),i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var n=r(t);if(n&&n.has(e))return n.get(e);var o={__proto__:null},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in e)if("default"!==c&&Object.prototype.hasOwnProperty.call(e,c)){var i=l?Object.getOwnPropertyDescriptor(e,c):null;i&&(i.get||i.set)?Object.defineProperty(o,c,i):o[c]=e[c]}return o.default=e,n&&n.set(e,o),o}(n(67294)),s=o(n(12810));function r(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(r=function(e){return e?n:t})(e)}var d={cols:[{id:"Column-0",displayName:"Patient",sortIndicator:"ascending",isSelectable:!0},{id:"Column-1",displayName:"Location",isSelectable:!0},{id:"Column-2",displayName:"Illness Severity",isSelectable:!0},{id:"Column-3",displayName:"Visit"},{id:"Column-4",displayName:"Allergy"},{id:"Column-5",displayName:"Primary Contact"}],sections:[{id:"section-0",isCollapsible:!0,isCollapsed:!0,text:"Test Section",rows:[{id:"1",cells:[{content:"Fleck, Arthur"},{content:"1007-MTN"},{content:"Unstable"},{content:"Inpatient, 2 months"},{content:""},{content:"Quinzell, Harleen"}]},{id:"2",cells:[{content:"Wayne, Bruce"},{content:"1007-MTN-DR"},{content:"Stable"},{content:"Outpatient, 2 days"},{content:"Phytochemicals"},{content:"Grayson, Richard"}]}]},{id:"section-1",isCollapsible:!0,isCollapsed:!1,text:"Test Section #2",rows:[{id:"3",cells:[{content:"Parker, Peter"},{content:"1007-MTN"},{content:"Unstable"},{content:"Inpatient, 2 months"},{content:""},{content:"Octopus, Doctor"}]},{id:"4",cells:[{content:"Stark, Tony"},{content:"1007-MTN-DR"},{content:"Stable"},{content:"Outpatient, 2 days"},{content:"Phytochemicals"},{content:"America, Captain"}]}]}]};t.Z=function(){var e=(0,i.useState)(d.sections),t=(0,c.default)(e,2),n=t[0],o=t[1];return i.default.createElement(s.default,{id:"table-with-sections",overflowColumns:d.cols,sections:n,onSectionSelect:function(e){var t=(0,l.default)(n),a=t.findIndex((function(t){return t.id===e}));a>-1&&(t[a].isCollapsed=!t[a].isCollapsed),o(t)}})}},71815:function(e,t,n){var o=n(64836),a=n(18698);t.Z=void 0;var l=o(n(861)),c=o(n(27424)),i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var n=r(t);if(n&&n.has(e))return n.get(e);var o={__proto__:null},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in e)if("default"!==c&&Object.prototype.hasOwnProperty.call(e,c)){var i=l?Object.getOwnPropertyDescriptor(e,c):null;i&&(i.get||i.set)?Object.defineProperty(o,c,i):o[c]=e[c]}return o.default=e,n&&n.set(e,o),o}(n(67294)),s=o(n(12810));function r(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(r=function(e){return e?n:t})(e)}var d={cols:[{id:"Column-0",displayName:"Patient",sortIndicator:"ascending",isSelectable:!0},{id:"Column-1",displayName:"Location",isSelectable:!0},{id:"Column-2",displayName:"Illness Severity",isSelectable:!0},{id:"Column-3",displayName:"Visit"},{id:"Column-4",displayName:"Allergy"},{id:"Column-5",displayName:"Primary Contact"}],sections:[{id:"section-0",text:"Test Section",rows:[{id:"1",cells:[{content:"Fleck, Arthur"},{content:"1007-MTN"},{content:"Unstable"},{content:"Inpatient, 2 months"},{content:""},{content:"Quinzell, Harleen"}]},{id:"2",cells:[{content:"Wayne, Bruce"},{content:"1007-MTN-DR"},{content:"Stable"},{content:"Outpatient, 2 days"},{content:"Phytochemicals"},{content:"Grayson, Richard"}]}]},{id:"section-1",text:"Test Section #2",rows:[{id:"3",cells:[{content:"Parker, Peter"},{content:"1007-MTN"},{content:"Unstable"},{content:"Inpatient, 2 months"},{content:""},{content:"Octopus, Doctor"}]},{id:"4",cells:[{content:"Stark, Tony"},{content:"1007-MTN-DR"},{content:"Stable"},{content:"Outpatient, 2 days"},{content:"Phytochemicals"},{content:"America, Captain"}]}]}]};t.Z=function(){var e=(0,i.useState)(d.sections),t=(0,c.default)(e,2),n=t[0],o=t[1];return i.default.createElement(s.default,{id:"table-with-sections",overflowColumns:d.cols,sections:n,onSectionSelect:function(e){var t=(0,l.default)(n),a=t.findIndex((function(t){return t.id===e}));a>-1&&(t[a].isCollapsed=!t[a].isCollapsed),o(t)},isStriped:!0})}},53560:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},87462:function(e,t,n){function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},o.apply(this,arguments)}n.d(t,{Z:function(){return o}})},44925:function(e,t,n){function o(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}n.d(t,{Z:function(){return o}})}}]);