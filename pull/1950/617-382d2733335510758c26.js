"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[617],{49271:function(e,t,n){var r=n(64836),o=n(18698);t.Z=void 0;var a=r(n(27424)),l=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==o(e)&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var r={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var c=a?Object.getOwnPropertyDescriptor(e,l):null;c&&(c.get||c.set)?Object.defineProperty(r,l,c):r[l]=e[l]}r.default=e,n&&n.set(e,r);return r}(n(67294)),c=r(n(45697)),i=r(n(47166)),s=n(21538),u=r(n(33864)),d=r(n(23399)),m=n(51051),p=r(n(53560));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}var w=i.default.bind(p.default),h={example:c.default.element,exampleSrc:c.default.element,exampleCssSrc:c.default.element,title:c.default.string,description:c.default.node,isExpanded:c.default.bool},y=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},b=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},v=function(e){var t=e.example,n=e.exampleSrc,r=e.exampleCssSrc,o=e.title,c=e.description,i=e.isExpanded,p=(0,l.useState)(i),f=(0,a.default)(p,2),h=f[0],v=f[1],g=(0,l.useState)(!1),_=(0,a.default)(g,2),x=_[0],C=_[1],R=l.default.useContext(s.ThemeContext),S=void 0!==r,O=function(){C(!x),h&&v(!h)},N=function(){v(!h),x&&C(!x)},I=function(e,t){e.nativeEvent.keyCode!==m.KEY_SPACE&&e.nativeEvent.keyCode!==m.KEY_RETURN||(e.preventDefault(),t())};return l.default.createElement("div",{className:w("template",R.className)},l.default.createElement("div",{className:w("header")},o&&l.default.createElement("h2",{className:w("title")},o)),l.default.createElement("div",{className:w("content")},c&&l.default.createElement("div",{className:w("description")},c),t),l.default.createElement("div",{className:w("footer")},n?l.default.createElement("div",{className:w("button-container")},S&&l.default.createElement("button",{type:"button",className:w("css-toggle","item",{"is-selected":x}),onClick:O,onKeyDown:function(e){return I(e,O)},onBlur:y,onMouseDown:b,tabIndex:0,"data-focus-styles-enabled":!0},l.default.createElement(u.default,{className:w("chevron")}),l.default.createElement("span",null,"CSS"),l.default.createElement(d.default,{className:w("chevron")})),l.default.createElement("button",{type:"button",className:w("code-toggle","item",{"is-selected":h}),onClick:N,onKeyDown:function(e){return I(e,N)},onBlur:y,onMouseDown:b,tabIndex:0,"data-focus-styles-enabled":!0},l.default.createElement(u.default,{className:w("chevron")}),l.default.createElement("span",null,"Code"),l.default.createElement(d.default,{className:w("chevron")}))):null,l.default.createElement("div",null,x&&l.default.createElement("div",{className:w("css")},r),h&&l.default.createElement("div",{className:w("code")},n))))};v.propTypes=h,v.defaultProps={isExpanded:!1};var g=v;t.Z=g},6952:function(e,t,n){n.r(t),n.d(t,{default:function(){return _}});var r=n(87462),o=n(44925),a=n(67294),l=n(81254),c=n(8685),i=["components"],s={};function u(e){var t=e.components,n=(0,o.Z)(e,i);return(0,l.mdx)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React, { useState } from 'react';\nimport CompactInteractiveList, { alignTypes } from 'terra-compact-interactive-list';\nimport { ActiveBreakpointContext } from 'terra-breakpoints';\nimport {\n  IconFeaturedOff, IconFeatured, IconMultipleResultsNormal, IconMultipleResultsNotNormal, IconMultipleResultsCritical,\n} from 'terra-icon';\n\nconst iconFeaturedOff = <IconFeaturedOff a11yLabel=\"Featured off\" height=\"1.5em\" width=\"1.5em\" />;\nconst iconFeatured = <IconFeatured a11yLabel=\"Featured\" height=\"1.5em\" width=\"1.5em\" />;\nconst iconResultsNormal = <IconMultipleResultsNormal a11yLabel=\"Results normal\" height=\"1.5em\" width=\"1.5em\" />;\nconst iconResultsNotNormal = <IconMultipleResultsNotNormal a11yLabel=\"Results not normal\" height=\"1.5em\" width=\"1.5em\" />;\nconst iconResultsCritical = <IconMultipleResultsCritical a11yLabel=\"Results critical\" height=\"1.5em\" width=\"1.5em\" />;\n\nconst rows = [\n  {\n    id: 'row_1',\n    cells: [\n      { content: iconResultsNormal },\n      { content: 'Discern Care Set (1)' },\n      { content: '' },\n    ],\n  },\n  {\n    id: 'row_2',\n    cells: [\n      { content: iconResultsNormal },\n      { content: 'Initial observation Care/Day High Severity 99220 (2)' },\n      { content: '' },\n    ],\n  },\n  {\n    id: 'row_3',\n    cells: [\n      { content: iconResultsNotNormal },\n      { content: 'Arterial Sheath Care (3)' },\n      { content: '' },\n    ],\n  },\n  {\n    id: 'row_4',\n    cells: [\n      { content: ' ' },\n      { content: 'Sbsq Observation Care/Day High Severity 99226 (4)' },\n      { content: ' ' },\n    ],\n  },\n  {\n    id: 'row_5',\n    cells: [\n      { content: iconResultsCritical },\n      { content: 'Arterial Sheath Care (5)' },\n      { content: '' },\n    ],\n  },\n  {\n    id: 'row_6',\n    cells: [\n      { content: iconResultsNormal },\n      { content: 'Arterial Sheath Care (6)' },\n      { content: '' },\n    ],\n  },\n  {\n    id: 'row_7',\n    cells: [\n      { content: ' ' },\n      { content: 'Sbsq Observation Care/Day High Severity 99226 (7)' },\n      { content: ' ' },\n    ],\n  },\n  {\n    id: 'row_8',\n    cells: [\n      { content: iconResultsNormal },\n      { content: 'Arterial Sheath Care (8)' },\n      { content: ' ' },\n    ],\n  },\n  {\n    id: 'row_9',\n    cells: [\n      { content: iconResultsNormal },\n      { content: 'Arterial Sheath Care (9)' },\n      { content: ' ' },\n    ],\n  },\n  {\n    id: 'row_10',\n    cells: [\n      { content: iconResultsNormal },\n      { content: 'Arterial Sheath Care (10)' },\n      { content: ' ' },\n    ],\n  },\n];\n\nconst calculateRows = (featuredRowsIds) => {\n  const calculatedRows = [...rows];\n  return calculatedRows.map(row => {\n    const newRow = { ...row, cells: [...row.cells] };\n    if (featuredRowsIds.indexOf(row.id) >= 0) {\n      newRow.cells[2] = { ...row.cells[2], content: iconFeatured };\n    } else { newRow.cells[2] = { ...row.cells[2], content: iconFeaturedOff }; }\n    return newRow;\n  });\n};\n\nconst getNumberOfColumns = (activeBreakpoint) => {\n  switch (activeBreakpoint) {\n    case 'enormous': return 4;\n    case 'huge': return 3;\n    case 'large': return 2;\n    case 'medium': return 2;\n    case 'small': return 1;\n    case 'tiny': return 1;\n    default: return 1;\n  }\n};\n\nconst getRowHeight = (activeBreakpoint) => {\n  switch (activeBreakpoint) {\n    case 'enormous': return '60px';\n    case 'huge': return '60px';\n    case 'large': return '60px';\n    case 'medium': return '60px';\n    case 'small': return '40px';\n    case 'tiny': return '40px';\n    default: return '40px';\n  }\n};\n\nconst cols = [\n  {\n    id: 'Column-0',\n    displayName: 'Icon',\n    width: '60px',\n    align: alignTypes.CENTER,\n  },\n  {\n    id: 'Column-1',\n    displayName: 'Service name',\n    width: '200px', // will be used as a css flexBasis\n    flexGrow: true, // makes the column grow or shrink\n  },\n  {\n    id: 'Column-2',\n    displayName: 'Featured',\n    width: '60px',\n    align: alignTypes.CENTER,\n  },\n];\n\nconst VerticalFlow = () => {\n  const activeBreakpoint = React.useContext(ActiveBreakpointContext);\n  const [featuredRowsIds, setFeaturedRowsIds] = useState([]);\n  const displayedRows = calculateRows(featuredRowsIds);\n\n  const onCellSelect = ({ rowId, columnId }) => {\n    if (columnId === cols[2].id) {\n      const newSelectedRows = [...featuredRowsIds];\n      const index = newSelectedRows.findIndex(row => row === rowId);\n      if (index >= 0) {\n        newSelectedRows.splice(index, 1);\n      } else {\n        newSelectedRows.push(rowId);\n      }\n      setFeaturedRowsIds(newSelectedRows);\n    }\n  };\n\n  const onClearSelection = () => {\n    setFeaturedRowsIds([]);\n  };\n\n  return (\n    <CompactInteractiveList\n      id=\"with-breakpoints\"\n      ariaLabel=\"Compact Interactive List\"\n      rows={displayedRows}\n      columns={cols}\n      numberOfColumns={getNumberOfColumns(activeBreakpoint)}\n      rowHeight={getRowHeight(activeBreakpoint)}\n      rowHeaderIndex={1}\n      onCellSelect={onCellSelect}\n      onClearSelection={onClearSelection}\n    />\n  );\n};\n\nexport default VerticalFlow;\n\n")))}u.isMDXComponent=!0;var d=n(49271),m=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.createElement(d.Z,{title:t||"Vertical Flow",description:n,example:a.createElement(c.Z,null),exampleSrc:a.createElement(u,null),isExpanded:r})},p=n(94708),f=["components"],w={};function h(e){var t=e.components,n=(0,o.Z)(e,f);return(0,l.mdx)("wrapper",(0,r.Z)({},w,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React, { useState } from 'react';\nimport CompactInteractiveList, { alignTypes } from 'terra-compact-interactive-list';\nimport { ActiveBreakpointContext } from 'terra-breakpoints';\nimport {\n  IconFeaturedOff, IconFeatured, IconMultipleResultsNormal, IconMultipleResultsNotNormal, IconMultipleResultsCritical,\n} from 'terra-icon';\n\nconst iconFeaturedOff = <IconFeaturedOff a11yLabel=\"Featured off\" height=\"1.5em\" width=\"1.5em\" />;\nconst iconFeatured = <IconFeatured a11yLabel=\"Featured\" height=\"1.5em\" width=\"1.5em\" />;\nconst iconResultsNormal = <IconMultipleResultsNormal a11yLabel=\"Results normal\" height=\"1.5em\" width=\"1.5em\" />;\nconst iconResultsNotNormal = <IconMultipleResultsNotNormal a11yLabel=\"Results not normal\" height=\"1.5em\" width=\"1.5em\" />;\nconst iconResultsCritical = <IconMultipleResultsCritical a11yLabel=\"Results critical\" height=\"1.5em\" width=\"1.5em\" />;\n\nconst rows = [\n  {\n    id: 'row_1',\n    cells: [\n      { content: iconResultsNormal },\n      { content: 'Discern Care Set (1)' },\n      { content: '' },\n    ],\n  },\n  {\n    id: 'row_2',\n    cells: [\n      { content: iconResultsNormal },\n      { content: 'Initial observation Care/Day High Severity 99220 (2)' },\n      { content: '' },\n    ],\n  },\n  {\n    id: 'row_3',\n    cells: [\n      { content: iconResultsNotNormal },\n      { content: 'Arterial Sheath Care (3)' },\n      { content: '' },\n    ],\n  },\n  {\n    id: 'row_4',\n    cells: [\n      { content: ' ' },\n      { content: 'Sbsq Observation Care/Day High Severity 99226 (4)' },\n      { content: ' ' },\n    ],\n  },\n  {\n    id: 'row_5',\n    cells: [\n      { content: iconResultsCritical },\n      { content: 'Arterial Sheath Care (5)' },\n      { content: '' },\n    ],\n  },\n  {\n    id: 'row_6',\n    cells: [\n      { content: iconResultsNormal },\n      { content: 'Arterial Sheath Care (6)' },\n      { content: '' },\n    ],\n  },\n  {\n    id: 'row_7',\n    cells: [\n      { content: ' ' },\n      { content: 'Sbsq Observation Care/Day High Severity 99226 (7)' },\n      { content: ' ' },\n    ],\n  },\n  {\n    id: 'row_8',\n    cells: [\n      { content: iconResultsNormal },\n      { content: 'Arterial Sheath Care (8)' },\n      { content: ' ' },\n    ],\n  },\n  {\n    id: 'row_9',\n    cells: [\n      { content: iconResultsNormal },\n      { content: 'Arterial Sheath Care (9)' },\n      { content: ' ' },\n    ],\n  },\n  {\n    id: 'row_10',\n    cells: [\n      { content: iconResultsNormal },\n      { content: 'Arterial Sheath Care (10)' },\n      { content: ' ' },\n    ],\n  },\n];\n\nconst calculateRows = (featuredRowsIds) => {\n  const calculatedRows = [...rows];\n  return calculatedRows.map(row => {\n    const newRow = { ...row, cells: [...row.cells] };\n    if (featuredRowsIds.indexOf(row.id) >= 0) {\n      newRow.cells[2] = { ...row.cells[2], content: iconFeatured };\n    } else { newRow.cells[2] = { ...row.cells[2], content: iconFeaturedOff }; }\n    return newRow;\n  });\n};\n\nconst getNumberOfColumns = (activeBreakpoint) => {\n  switch (activeBreakpoint) {\n    case 'enormous': return 4;\n    case 'huge': return 3;\n    case 'large': return 2;\n    case 'medium': return 2;\n    case 'small': return 1;\n    case 'tiny': return 1;\n    default: return 1;\n  }\n};\n\nconst cols = [\n  {\n    id: 'Column-0',\n    displayName: 'Icon',\n    width: '60px',\n    align: alignTypes.CENTER,\n  },\n  {\n    id: 'Column-1',\n    displayName: 'Service name',\n    width: '200px', // will be used as a css flexBasis\n    flexGrow: true, // makes the column grow or shrink\n  },\n  {\n    id: 'Column-2',\n    displayName: 'Featured',\n    width: '60px',\n    align: alignTypes.CENTER,\n  },\n];\n\nconst HorizontalFlow = () => {\n  const activeBreakpoint = React.useContext(ActiveBreakpointContext);\n  const [featuredRowsIds, setFeaturedRowsIds] = useState([]);\n  const displayedRows = calculateRows(featuredRowsIds);\n\n  const onCellSelect = ({ rowId, columnId }) => {\n    if (columnId === cols[2].id) {\n      const newSelectedRows = [...featuredRowsIds];\n      const index = newSelectedRows.findIndex(row => row === rowId);\n      if (index >= 0) {\n        newSelectedRows.splice(index, 1);\n      } else {\n        newSelectedRows.push(rowId);\n      }\n      setFeaturedRowsIds(newSelectedRows);\n    }\n  };\n\n  const onClearSelection = () => {\n    setFeaturedRowsIds([]);\n  };\n\n  return (\n    <CompactInteractiveList\n      id=\"with-breakpoints\"\n      ariaLabel=\"Compact Interactive List\"\n      rows={displayedRows}\n      columns={cols}\n      numberOfColumns={getNumberOfColumns(activeBreakpoint)}\n      rowHeaderIndex={1}\n      onCellSelect={onCellSelect}\n      onClearSelection={onClearSelection}\n      flowHorizontally\n    />\n  );\n};\n\nexport default HorizontalFlow;\n\n")))}h.isMDXComponent=!0;var y=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.createElement(d.Z,{title:t||"Horizontal Flow",description:n,example:a.createElement(p.Z,null),exampleSrc:a.createElement(h,null),isExpanded:r})},b=["components"],v={},g="wrapper";function _(e){var t=e.components,n=(0,o.Z)(e,b);return(0,l.mdx)(g,(0,r.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("h1",{id:"flow-direction"},"Flow Direction"),(0,l.mdx)("h3",{id:"vertical-flow"},"Vertical Flow"),(0,l.mdx)("p",null,"By default, the items in the ",(0,l.mdx)("a",{parentName:"p",href:"/terra-framework/pull/1950/components/cerner-terra-framework-docs/compact-interactive-list/about"},"Compact Interactive List")," component are read from top to bottom before moving to a new visual column."),(0,l.mdx)(m,{mdxType:"VerticalFlow"}),(0,l.mdx)("h4",{id:"usage"},"Usage"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"The ",(0,l.mdx)("a",{parentName:"li",href:"/terra-framework/pull/1950/components/cerner-terra-framework-docs/compact-interactive-list/about"},"rowHeight")," property is required for the list items to use vertical flow. If not set, the default value is used."),(0,l.mdx)("li",{parentName:"ul"},"The items are distributed evenly between all columns but the last one. The last column accommodates the remainder after the number of items is divided by the number of columns."),(0,l.mdx)("li",{parentName:"ul"},"Ensure that the number of rows is not divisible by the ",(0,l.mdx)("a",{parentName:"li",href:"/terra-framework/pull/1950/components/cerner-terra-framework-docs/compact-interactive-list/about"},"numberOfColumns")," value minus 1 without a remainder, which leads to an empty last column.")),(0,l.mdx)("h3",{id:"horizontal-flow"},"Horizontal Flow"),(0,l.mdx)("p",null,"If the ",(0,l.mdx)("a",{parentName:"p",href:"/terra-framework/pull/1950/components/cerner-terra-framework-docs/compact-interactive-list/about"},"flowHorizontally")," property is set to ",(0,l.mdx)("strong",{parentName:"p"},"true"),", the flow direction changes to read from left to right before moving to a new line."),(0,l.mdx)(y,{mdxType:"HorizontalFlow"}),(0,l.mdx)("h4",{id:"usage-1"},"Usage"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"The horizontal flow does not require setting the ",(0,l.mdx)("a",{parentName:"li",href:"/terra-framework/pull/1950/components/cerner-terra-framework-docs/compact-interactive-list/about"},"rowHeight")," property."),(0,l.mdx)("li",{parentName:"ul"},"All empty spaces are distributed in the last row.")))}_.isMDXComponent=!0},94708:function(e,t,n){var r=n(64836),o=n(18698);t.Z=void 0;var a=r(n(27424)),l=r(n(861)),c=r(n(38416)),i=p(n(67294)),s=p(n(31915)),u=n(30210),d=n(34614);function m(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(m=function(e){return e?n:t})(e)}function p(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=o(e)&&"function"!=typeof e)return{default:e};var n=m(t);if(n&&n.has(e))return n.get(e);var r={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var c=a?Object.getOwnPropertyDescriptor(e,l):null;c&&(c.get||c.set)?Object.defineProperty(r,l,c):r[l]=e[l]}return r.default=e,n&&n.set(e,r),r}function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){(0,c.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var h=i.default.createElement(d.IconFeaturedOff,{a11yLabel:"Featured off",height:"1.5em",width:"1.5em"}),y=i.default.createElement(d.IconFeatured,{a11yLabel:"Featured",height:"1.5em",width:"1.5em"}),b=i.default.createElement(d.IconMultipleResultsNormal,{a11yLabel:"Results normal",height:"1.5em",width:"1.5em"}),v=[{id:"row_1",cells:[{content:b},{content:"Discern Care Set (1)"},{content:""}]},{id:"row_2",cells:[{content:b},{content:"Initial observation Care/Day High Severity 99220 (2)"},{content:""}]},{id:"row_3",cells:[{content:i.default.createElement(d.IconMultipleResultsNotNormal,{a11yLabel:"Results not normal",height:"1.5em",width:"1.5em"})},{content:"Arterial Sheath Care (3)"},{content:""}]},{id:"row_4",cells:[{content:" "},{content:"Sbsq Observation Care/Day High Severity 99226 (4)"},{content:" "}]},{id:"row_5",cells:[{content:i.default.createElement(d.IconMultipleResultsCritical,{a11yLabel:"Results critical",height:"1.5em",width:"1.5em"})},{content:"Arterial Sheath Care (5)"},{content:""}]},{id:"row_6",cells:[{content:b},{content:"Arterial Sheath Care (6)"},{content:""}]},{id:"row_7",cells:[{content:" "},{content:"Sbsq Observation Care/Day High Severity 99226 (7)"},{content:" "}]},{id:"row_8",cells:[{content:b},{content:"Arterial Sheath Care (8)"},{content:" "}]},{id:"row_9",cells:[{content:b},{content:"Arterial Sheath Care (9)"},{content:" "}]},{id:"row_10",cells:[{content:b},{content:"Arterial Sheath Care (10)"},{content:" "}]}],g=function(e){switch(e){case"enormous":return 4;case"huge":return 3;case"large":case"medium":return 2;default:return 1}},_=[{id:"Column-0",displayName:"Icon",width:"60px",align:s.alignTypes.CENTER},{id:"Column-1",displayName:"Service name",width:"200px",flexGrow:!0},{id:"Column-2",displayName:"Featured",width:"60px",align:s.alignTypes.CENTER}];t.Z=function(){var e=i.default.useContext(u.ActiveBreakpointContext),t=(0,i.useState)([]),n=(0,a.default)(t,2),r=n[0],o=n[1],c=function(e){return[].concat(v).map((function(t){var n=w(w({},t),{},{cells:(0,l.default)(t.cells)});return e.indexOf(t.id)>=0?n.cells[2]=w(w({},t.cells[2]),{},{content:y}):n.cells[2]=w(w({},t.cells[2]),{},{content:h}),n}))}(r);return i.default.createElement(s.default,{id:"with-breakpoints",ariaLabel:"Compact Interactive List",rows:c,columns:_,numberOfColumns:g(e),rowHeaderIndex:1,onCellSelect:function(e){var t=e.rowId;if(e.columnId===_[2].id){var n=(0,l.default)(r),a=n.findIndex((function(e){return e===t}));a>=0?n.splice(a,1):n.push(t),o(n)}},onClearSelection:function(){o([])},flowHorizontally:!0})}},8685:function(e,t,n){var r=n(64836),o=n(18698);t.Z=void 0;var a=r(n(27424)),l=r(n(861)),c=r(n(38416)),i=p(n(67294)),s=p(n(31915)),u=n(30210),d=n(34614);function m(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(m=function(e){return e?n:t})(e)}function p(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=o(e)&&"function"!=typeof e)return{default:e};var n=m(t);if(n&&n.has(e))return n.get(e);var r={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var c=a?Object.getOwnPropertyDescriptor(e,l):null;c&&(c.get||c.set)?Object.defineProperty(r,l,c):r[l]=e[l]}return r.default=e,n&&n.set(e,r),r}function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){(0,c.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var h=i.default.createElement(d.IconFeaturedOff,{a11yLabel:"Featured off",height:"1.5em",width:"1.5em"}),y=i.default.createElement(d.IconFeatured,{a11yLabel:"Featured",height:"1.5em",width:"1.5em"}),b=i.default.createElement(d.IconMultipleResultsNormal,{a11yLabel:"Results normal",height:"1.5em",width:"1.5em"}),v=[{id:"row_1",cells:[{content:b},{content:"Discern Care Set (1)"},{content:""}]},{id:"row_2",cells:[{content:b},{content:"Initial observation Care/Day High Severity 99220 (2)"},{content:""}]},{id:"row_3",cells:[{content:i.default.createElement(d.IconMultipleResultsNotNormal,{a11yLabel:"Results not normal",height:"1.5em",width:"1.5em"})},{content:"Arterial Sheath Care (3)"},{content:""}]},{id:"row_4",cells:[{content:" "},{content:"Sbsq Observation Care/Day High Severity 99226 (4)"},{content:" "}]},{id:"row_5",cells:[{content:i.default.createElement(d.IconMultipleResultsCritical,{a11yLabel:"Results critical",height:"1.5em",width:"1.5em"})},{content:"Arterial Sheath Care (5)"},{content:""}]},{id:"row_6",cells:[{content:b},{content:"Arterial Sheath Care (6)"},{content:""}]},{id:"row_7",cells:[{content:" "},{content:"Sbsq Observation Care/Day High Severity 99226 (7)"},{content:" "}]},{id:"row_8",cells:[{content:b},{content:"Arterial Sheath Care (8)"},{content:" "}]},{id:"row_9",cells:[{content:b},{content:"Arterial Sheath Care (9)"},{content:" "}]},{id:"row_10",cells:[{content:b},{content:"Arterial Sheath Care (10)"},{content:" "}]}],g=function(e){switch(e){case"enormous":return 4;case"huge":return 3;case"large":case"medium":return 2;default:return 1}},_=function(e){switch(e){case"enormous":case"huge":case"large":case"medium":return"60px";default:return"40px"}},x=[{id:"Column-0",displayName:"Icon",width:"60px",align:s.alignTypes.CENTER},{id:"Column-1",displayName:"Service name",width:"200px",flexGrow:!0},{id:"Column-2",displayName:"Featured",width:"60px",align:s.alignTypes.CENTER}];t.Z=function(){var e=i.default.useContext(u.ActiveBreakpointContext),t=(0,i.useState)([]),n=(0,a.default)(t,2),r=n[0],o=n[1],c=function(e){return[].concat(v).map((function(t){var n=w(w({},t),{},{cells:(0,l.default)(t.cells)});return e.indexOf(t.id)>=0?n.cells[2]=w(w({},t.cells[2]),{},{content:y}):n.cells[2]=w(w({},t.cells[2]),{},{content:h}),n}))}(r);return i.default.createElement(s.default,{id:"with-breakpoints",ariaLabel:"Compact Interactive List",rows:c,columns:x,numberOfColumns:g(e),rowHeight:_(e),rowHeaderIndex:1,onCellSelect:function(e){var t=e.rowId;if(e.columnId===x[2].id){var n=(0,l.default)(r),a=n.findIndex((function(e){return e===t}));a>=0?n.splice(a,1):n.push(t),o(n)}},onClearSelection:function(){o([])}})}},53560:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},87462:function(e,t,n){function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},r.apply(this,arguments)}n.d(t,{Z:function(){return r}})},44925:function(e,t,n){function r(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.d(t,{Z:function(){return r}})},15785:function(e,t,n){function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(t,{Z:function(){return o}})}}]);