"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[617],{49271:function(e,t,n){var r=n(64836),a=n(18698);t.Z=void 0;var o=r(n(27424)),l=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var i=o?Object.getOwnPropertyDescriptor(e,l):null;i&&(i.get||i.set)?Object.defineProperty(r,l,i):r[l]=e[l]}r.default=e,n&&n.set(e,r);return r}(n(67294)),i=r(n(45697)),c=r(n(19845)),u=n(21538),s=r(n(33864)),m=r(n(23399)),d=n(51051),p=r(n(53560));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}var h=c.default.bind(p.default),w={example:i.default.element,exampleSrc:i.default.element,exampleCssSrc:i.default.element,title:i.default.string,description:i.default.node,isExpanded:i.default.bool},v=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},y=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},_=function(e){var t=e.example,n=e.exampleSrc,r=e.exampleCssSrc,a=e.title,i=e.description,c=e.isExpanded,p=(0,l.useState)(c),f=(0,o.default)(p,2),w=f[0],_=f[1],b=(0,l.useState)(!1),C=(0,o.default)(b,2),x=C[0],g=C[1],E=l.default.useContext(u.ThemeContext),N=void 0!==r,I=function(){g(!x),w&&_(!w)},S=function(){_(!w),x&&g(!x)},k=function(e,t){e.nativeEvent.keyCode!==d.KEY_SPACE&&e.nativeEvent.keyCode!==d.KEY_RETURN||(e.preventDefault(),t())};return l.default.createElement("div",{className:h("template",E.className)},l.default.createElement("div",{className:h("header")},a&&l.default.createElement("h2",{className:h("title")},a)),l.default.createElement("div",{className:h("content")},i&&l.default.createElement("div",{className:h("description")},i),t),l.default.createElement("div",{className:h("footer")},n?l.default.createElement("div",{className:h("button-container")},N&&l.default.createElement("button",{type:"button",className:h("css-toggle","item",{"is-selected":x}),onClick:I,onKeyDown:function(e){return k(e,I)},onBlur:v,onMouseDown:y,tabIndex:0,"data-focus-styles-enabled":!0},l.default.createElement(s.default,{className:h("chevron")}),l.default.createElement("span",null,"CSS"),l.default.createElement(m.default,{className:h("chevron")})),l.default.createElement("button",{type:"button",className:h("code-toggle","item",{"is-selected":w}),onClick:S,onKeyDown:function(e){return k(e,S)},onBlur:v,onMouseDown:y,tabIndex:0,"data-focus-styles-enabled":!0},l.default.createElement(s.default,{className:h("chevron")}),l.default.createElement("span",null,"Code"),l.default.createElement(m.default,{className:h("chevron")}))):null,l.default.createElement("div",null,x&&l.default.createElement("div",{className:h("css")},r),w&&l.default.createElement("div",{className:h("code")},n))))};_.propTypes=w,_.defaultProps={isExpanded:!1};var b=_;t.Z=b},6952:function(e,t,n){n.r(t),n.d(t,{default:function(){return C}});var r=n(87462),a=n(44925),o=n(67294),l=n(81254),i=n(8685),c=["components"],u={};function s(e){var t=e.components,n=(0,a.Z)(e,c);return(0,l.mdx)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React, { useState } from 'react';\nimport CompactInteractiveList, { alignTypes } from 'terra-compact-interactive-list';\nimport { ActiveBreakpointContext } from 'terra-breakpoints';\nimport {\n  IconFeaturedOff, IconFeatured, IconMultipleResultsNormal, IconMultipleResultsNotNormal, IconMultipleResultsCritical,\n} from 'terra-icon';\nimport Button from 'terra-button';\n\nconst FeaturedIcon = () => {\n  const [isFeatured, setIsFeatured] = useState(false);\n  const onButtonClick = () => setIsFeatured(!isFeatured);\n  return (\n    isFeatured ? <Button variant=\"utility\" text=\"Featured button\" icon={<IconFeatured />} onClick={onButtonClick} /> : <Button variant=\"utility\" text=\"Featured off button\" icon={<IconFeaturedOff />} onClick={onButtonClick} />\n  );\n};\nconst iconResultsNormal = <IconMultipleResultsNormal a11yLabel=\"Results normal\" height=\"1.5em\" width=\"1.5em\" />;\nconst iconResultsNotNormal = <IconMultipleResultsNotNormal a11yLabel=\"Results not normal\" height=\"1.5em\" width=\"1.5em\" />;\nconst iconResultsCritical = <IconMultipleResultsCritical a11yLabel=\"Results critical\" height=\"1.5em\" width=\"1.5em\" />;\n\nconst rows = [\n  {\n    id: 'row_1',\n    cells: [\n      { content: iconResultsNormal },\n      { content: 'Discern Care Set (1)' },\n      { content: <FeaturedIcon /> },\n    ],\n  },\n  {\n    id: 'row_2',\n    cells: [\n      { content: iconResultsNormal },\n      { content: 'Initial observation Care/Day High Severity 99220 (2)' },\n      { content: <FeaturedIcon /> },\n    ],\n  },\n  {\n    id: 'row_3',\n    cells: [\n      { content: iconResultsNotNormal },\n      { content: 'Arterial Sheath Care (3)' },\n      { content: <FeaturedIcon /> },\n    ],\n  },\n  {\n    id: 'row_4',\n    cells: [\n      { content: ' ' },\n      { content: 'Sbsq Observation Care/Day High Severity 99226 (4)' },\n      { content: <FeaturedIcon /> },\n    ],\n  },\n  {\n    id: 'row_5',\n    cells: [\n      { content: iconResultsCritical },\n      { content: 'Arterial Sheath Care (5)' },\n      { content: <FeaturedIcon /> },\n    ],\n  },\n  {\n    id: 'row_6',\n    cells: [\n      { content: iconResultsNormal },\n      { content: 'Arterial Sheath Care (6)' },\n      { content: <FeaturedIcon /> },\n    ],\n  },\n  {\n    id: 'row_7',\n    cells: [\n      { content: ' ' },\n      { content: 'Sbsq Observation Care/Day High Severity 99226 (7)' },\n      { content: <FeaturedIcon /> },\n    ],\n  },\n  {\n    id: 'row_8',\n    cells: [\n      { content: iconResultsNormal },\n      { content: 'Arterial Sheath Care (8)' },\n      { content: <FeaturedIcon /> },\n    ],\n  },\n  {\n    id: 'row_9',\n    cells: [\n      { content: iconResultsNormal },\n      { content: 'Arterial Sheath Care (9)' },\n      { content: <FeaturedIcon /> },\n    ],\n  },\n  {\n    id: 'row_10',\n    cells: [\n      { content: iconResultsNormal },\n      { content: 'Arterial Sheath Care (10)' },\n      { content: <FeaturedIcon /> },\n    ],\n  },\n];\n\nconst getNumberOfColumns = (activeBreakpoint) => {\n  switch (activeBreakpoint) {\n    case 'enormous': return 4;\n    case 'huge': return 3;\n    case 'large': return 2;\n    case 'medium': return 2;\n    case 'small': return 1;\n    case 'tiny': return 1;\n    default: return 1;\n  }\n};\n\nconst getRowHeight = (activeBreakpoint) => {\n  switch (activeBreakpoint) {\n    case 'enormous': return '60px';\n    case 'huge': return '60px';\n    case 'large': return '60px';\n    case 'medium': return '60px';\n    case 'small': return '40px';\n    case 'tiny': return '40px';\n    default: return '40px';\n  }\n};\n\nconst cols = [\n  {\n    id: 'Column-0',\n    displayName: 'Icon',\n    width: '60px',\n    align: alignTypes.CENTER,\n  },\n  {\n    id: 'Column-1',\n    displayName: 'Service name',\n    width: '200px', // will be used as a css flexBasis\n    flexGrow: true, // makes the column grow or shrink\n  },\n  {\n    id: 'Column-2',\n    displayName: 'Featured',\n    width: '60px',\n    align: alignTypes.CENTER,\n  },\n];\n\nconst VerticalFlow = () => {\n  const activeBreakpoint = React.useContext(ActiveBreakpointContext);\n  return (\n    <CompactInteractiveList\n      id=\"with-breakpoints\"\n      ariaLabel=\"Compact Interactive List\"\n      rows={rows}\n      columns={cols}\n      numberOfColumns={getNumberOfColumns(activeBreakpoint)}\n      rowHeight={getRowHeight(activeBreakpoint)}\n      rowHeaderIndex={1}\n    />\n  );\n};\n\nexport default VerticalFlow;\n\n")))}s.isMDXComponent=!0;var m=n(49271),d=function(e){var t=e.title,n=e.description,r=e.isExpanded;return o.createElement(m.Z,{title:t||"Vertical Flow",description:n,example:o.createElement(i.Z,null),exampleSrc:o.createElement(s,null),isExpanded:r})},p=n(94708),f=["components"],h={};function w(e){var t=e.components,n=(0,a.Z)(e,f);return(0,l.mdx)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React, { useState } from 'react';\nimport CompactInteractiveList, { alignTypes } from 'terra-compact-interactive-list';\nimport { ActiveBreakpointContext } from 'terra-breakpoints';\nimport {\n  IconFeaturedOff, IconFeatured, IconMultipleResultsNormal, IconMultipleResultsNotNormal, IconMultipleResultsCritical,\n} from 'terra-icon';\nimport Button from 'terra-button';\n\nconst FeaturedIcon = () => {\n  const [isFeatured, setIsFeatured] = useState(false);\n  const onButtonClick = () => setIsFeatured(!isFeatured);\n  return (\n    isFeatured ? <Button variant=\"utility\" text=\"Featured button\" icon={<IconFeatured />} onClick={onButtonClick} /> : <Button variant=\"utility\" text=\"Featured off button\" icon={<IconFeaturedOff />} onClick={onButtonClick} />\n  );\n};\nconst iconResultsNormal = <IconMultipleResultsNormal a11yLabel=\"Results normal\" height=\"1.5em\" width=\"1.5em\" />;\nconst iconResultsNotNormal = <IconMultipleResultsNotNormal a11yLabel=\"Results not normal\" height=\"1.5em\" width=\"1.5em\" />;\nconst iconResultsCritical = <IconMultipleResultsCritical a11yLabel=\"Results critical\" height=\"1.5em\" width=\"1.5em\" />;\n\nconst rows = [\n  {\n    id: 'row_1',\n    cells: [\n      { content: iconResultsNormal },\n      { content: 'Discern Care Set (1)' },\n      { content: <FeaturedIcon /> },\n    ],\n  },\n  {\n    id: 'row_2',\n    cells: [\n      { content: iconResultsNormal },\n      { content: 'Initial observation Care/Day High Severity 99220 (2)' },\n      { content: <FeaturedIcon /> },\n    ],\n  },\n  {\n    id: 'row_3',\n    cells: [\n      { content: iconResultsNotNormal },\n      { content: 'Arterial Sheath Care (3)' },\n      { content: <FeaturedIcon /> },\n    ],\n  },\n  {\n    id: 'row_4',\n    cells: [\n      { content: ' ' },\n      { content: 'Sbsq Observation Care/Day High Severity 99226 (4)' },\n      { content: <FeaturedIcon /> },\n    ],\n  },\n  {\n    id: 'row_5',\n    cells: [\n      { content: iconResultsCritical },\n      { content: 'Arterial Sheath Care (5)' },\n      { content: <FeaturedIcon /> },\n    ],\n  },\n  {\n    id: 'row_6',\n    cells: [\n      { content: iconResultsNormal },\n      { content: 'Arterial Sheath Care (6)' },\n      { content: <FeaturedIcon /> },\n    ],\n  },\n  {\n    id: 'row_7',\n    cells: [\n      { content: ' ' },\n      { content: 'Sbsq Observation Care/Day High Severity 99226 (7)' },\n      { content: <FeaturedIcon /> },\n    ],\n  },\n  {\n    id: 'row_8',\n    cells: [\n      { content: iconResultsNormal },\n      { content: 'Arterial Sheath Care (8)' },\n      { content: <FeaturedIcon /> },\n    ],\n  },\n  {\n    id: 'row_9',\n    cells: [\n      { content: iconResultsNormal },\n      { content: 'Arterial Sheath Care (9)' },\n      { content: <FeaturedIcon /> },\n    ],\n  },\n  {\n    id: 'row_10',\n    cells: [\n      { content: iconResultsNormal },\n      { content: 'Arterial Sheath Care (10)' },\n      { content: <FeaturedIcon /> },\n    ],\n  },\n];\n\nconst getNumberOfColumns = (activeBreakpoint) => {\n  switch (activeBreakpoint) {\n    case 'enormous': return 4;\n    case 'huge': return 3;\n    case 'large': return 2;\n    case 'medium': return 2;\n    case 'small': return 1;\n    case 'tiny': return 1;\n    default: return 1;\n  }\n};\n\nconst cols = [\n  {\n    id: 'Column-0',\n    displayName: 'Icon',\n    width: '60px',\n    align: alignTypes.CENTER,\n  },\n  {\n    id: 'Column-1',\n    displayName: 'Service name',\n    width: '200px', // will be used as a css flexBasis\n    flexGrow: true, // makes the column grow or shrink\n  },\n  {\n    id: 'Column-2',\n    displayName: 'Featured',\n    width: '60px',\n    align: alignTypes.CENTER,\n  },\n];\n\nconst HorizontalFlow = () => {\n  const activeBreakpoint = React.useContext(ActiveBreakpointContext);\n\n  return (\n    <CompactInteractiveList\n      id=\"with-breakpoints\"\n      ariaLabel=\"Compact Interactive List\"\n      rows={rows}\n      columns={cols}\n      numberOfColumns={getNumberOfColumns(activeBreakpoint)}\n      rowHeaderIndex={1}\n      flowHorizontally\n    />\n  );\n};\n\nexport default HorizontalFlow;\n\n")))}w.isMDXComponent=!0;var v=function(e){var t=e.title,n=e.description,r=e.isExpanded;return o.createElement(m.Z,{title:t||"Horizontal Flow",description:n,example:o.createElement(p.Z,null),exampleSrc:o.createElement(w,null),isExpanded:r})},y=["components"],_={},b="wrapper";function C(e){var t=e.components,n=(0,a.Z)(e,y);return(0,l.mdx)(b,(0,r.Z)({},_,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("h1",{id:"flow-direction"},"Flow Direction"),(0,l.mdx)("h3",{id:"vertical-flow"},"Vertical Flow"),(0,l.mdx)("p",null,"By default, the items in the ",(0,l.mdx)("a",{parentName:"p",href:"/terra-framework/components/cerner-terra-framework-docs/compact-interactive-list/about"},"Compact Interactive List")," component are read from top to bottom before moving to a new visual column."),(0,l.mdx)(d,{mdxType:"VerticalFlow"}),(0,l.mdx)("h4",{id:"usage"},"Usage"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"The ",(0,l.mdx)("a",{parentName:"li",href:"/terra-framework/components/cerner-terra-framework-docs/compact-interactive-list/about"},"rowHeight")," property is required for the list items to use vertical flow. If not set, the default value is used."),(0,l.mdx)("li",{parentName:"ul"},"The items are distributed evenly between all columns but the last one. The last column accommodates the remainder after the number of items is divided by the number of columns."),(0,l.mdx)("li",{parentName:"ul"},"Note: If the number of rows is divisible by the ",(0,l.mdx)("a",{parentName:"li",href:"/terra-framework/components/cerner-terra-framework-docs/compact-interactive-list/about"},"numberOfColumns")," value minus 1 without a remainder, the last column will be empty.")),(0,l.mdx)("h3",{id:"horizontal-flow"},"Horizontal Flow"),(0,l.mdx)("p",null,"If the ",(0,l.mdx)("a",{parentName:"p",href:"/terra-framework/components/cerner-terra-framework-docs/compact-interactive-list/about"},"flowHorizontally")," property is set to ",(0,l.mdx)("strong",{parentName:"p"},"true"),", the flow direction changes to read from left to right before moving to a new line. ",(0,l.mdx)("em",{parentName:"p"},"This isn't a common way to use this component and is not recommended for most purposes.")),(0,l.mdx)(v,{mdxType:"HorizontalFlow"}),(0,l.mdx)("h4",{id:"usage-1"},"Usage"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"The horizontal flow does not require setting the ",(0,l.mdx)("a",{parentName:"li",href:"/terra-framework/components/cerner-terra-framework-docs/compact-interactive-list/about"},"rowHeight")," property."),(0,l.mdx)("li",{parentName:"ul"},"All empty spaces are distributed in the last row.")))}C.isMDXComponent=!0},94708:function(e,t,n){var r=n(64836),a=n(18698);t.Z=void 0;var o=r(n(27424)),l=d(n(67294)),i=d(n(31915)),c=n(30210),u=n(34614),s=r(n(55281));function m(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(m=function(e){return e?n:t})(e)}function d(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var n=m(t);if(n&&n.has(e))return n.get(e);var r={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var i=o?Object.getOwnPropertyDescriptor(e,l):null;i&&(i.get||i.set)?Object.defineProperty(r,l,i):r[l]=e[l]}return r.default=e,n&&n.set(e,r),r}var p=function(){var e=(0,l.useState)(!1),t=(0,o.default)(e,2),n=t[0],r=t[1],a=function(){return r(!n)};return n?l.default.createElement(s.default,{variant:"utility",text:"Featured button",icon:l.default.createElement(u.IconFeatured,null),onClick:a}):l.default.createElement(s.default,{variant:"utility",text:"Featured off button",icon:l.default.createElement(u.IconFeaturedOff,null),onClick:a})},f=l.default.createElement(u.IconMultipleResultsNormal,{a11yLabel:"Results normal",height:"1.5em",width:"1.5em"}),h=l.default.createElement(u.IconMultipleResultsNotNormal,{a11yLabel:"Results not normal",height:"1.5em",width:"1.5em"}),w=l.default.createElement(u.IconMultipleResultsCritical,{a11yLabel:"Results critical",height:"1.5em",width:"1.5em"}),v=[{id:"row_1",cells:[{content:f},{content:"Discern Care Set (1)"},{content:l.default.createElement(p,null)}]},{id:"row_2",cells:[{content:f},{content:"Initial observation Care/Day High Severity 99220 (2)"},{content:l.default.createElement(p,null)}]},{id:"row_3",cells:[{content:h},{content:"Arterial Sheath Care (3)"},{content:l.default.createElement(p,null)}]},{id:"row_4",cells:[{content:" "},{content:"Sbsq Observation Care/Day High Severity 99226 (4)"},{content:l.default.createElement(p,null)}]},{id:"row_5",cells:[{content:w},{content:"Arterial Sheath Care (5)"},{content:l.default.createElement(p,null)}]},{id:"row_6",cells:[{content:f},{content:"Arterial Sheath Care (6)"},{content:l.default.createElement(p,null)}]},{id:"row_7",cells:[{content:" "},{content:"Sbsq Observation Care/Day High Severity 99226 (7)"},{content:l.default.createElement(p,null)}]},{id:"row_8",cells:[{content:f},{content:"Arterial Sheath Care (8)"},{content:l.default.createElement(p,null)}]},{id:"row_9",cells:[{content:f},{content:"Arterial Sheath Care (9)"},{content:l.default.createElement(p,null)}]},{id:"row_10",cells:[{content:f},{content:"Arterial Sheath Care (10)"},{content:l.default.createElement(p,null)}]}],y=function(e){switch(e){case"enormous":return 4;case"huge":return 3;case"large":case"medium":return 2;default:return 1}},_=[{id:"Column-0",displayName:"Icon",width:"60px",align:i.alignTypes.CENTER},{id:"Column-1",displayName:"Service name",width:"200px",flexGrow:!0},{id:"Column-2",displayName:"Featured",width:"60px",align:i.alignTypes.CENTER}];t.Z=function(){var e=l.default.useContext(c.ActiveBreakpointContext);return l.default.createElement(i.default,{id:"with-breakpoints",ariaLabel:"Compact Interactive List",rows:v,columns:_,numberOfColumns:y(e),rowHeaderIndex:1,flowHorizontally:!0})}},8685:function(e,t,n){var r=n(64836),a=n(18698);t.Z=void 0;var o=r(n(27424)),l=d(n(67294)),i=d(n(31915)),c=n(30210),u=n(34614),s=r(n(55281));function m(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(m=function(e){return e?n:t})(e)}function d(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var n=m(t);if(n&&n.has(e))return n.get(e);var r={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var i=o?Object.getOwnPropertyDescriptor(e,l):null;i&&(i.get||i.set)?Object.defineProperty(r,l,i):r[l]=e[l]}return r.default=e,n&&n.set(e,r),r}var p=function(){var e=(0,l.useState)(!1),t=(0,o.default)(e,2),n=t[0],r=t[1],a=function(){return r(!n)};return n?l.default.createElement(s.default,{variant:"utility",text:"Featured button",icon:l.default.createElement(u.IconFeatured,null),onClick:a}):l.default.createElement(s.default,{variant:"utility",text:"Featured off button",icon:l.default.createElement(u.IconFeaturedOff,null),onClick:a})},f=l.default.createElement(u.IconMultipleResultsNormal,{a11yLabel:"Results normal",height:"1.5em",width:"1.5em"}),h=l.default.createElement(u.IconMultipleResultsNotNormal,{a11yLabel:"Results not normal",height:"1.5em",width:"1.5em"}),w=l.default.createElement(u.IconMultipleResultsCritical,{a11yLabel:"Results critical",height:"1.5em",width:"1.5em"}),v=[{id:"row_1",cells:[{content:f},{content:"Discern Care Set (1)"},{content:l.default.createElement(p,null)}]},{id:"row_2",cells:[{content:f},{content:"Initial observation Care/Day High Severity 99220 (2)"},{content:l.default.createElement(p,null)}]},{id:"row_3",cells:[{content:h},{content:"Arterial Sheath Care (3)"},{content:l.default.createElement(p,null)}]},{id:"row_4",cells:[{content:" "},{content:"Sbsq Observation Care/Day High Severity 99226 (4)"},{content:l.default.createElement(p,null)}]},{id:"row_5",cells:[{content:w},{content:"Arterial Sheath Care (5)"},{content:l.default.createElement(p,null)}]},{id:"row_6",cells:[{content:f},{content:"Arterial Sheath Care (6)"},{content:l.default.createElement(p,null)}]},{id:"row_7",cells:[{content:" "},{content:"Sbsq Observation Care/Day High Severity 99226 (7)"},{content:l.default.createElement(p,null)}]},{id:"row_8",cells:[{content:f},{content:"Arterial Sheath Care (8)"},{content:l.default.createElement(p,null)}]},{id:"row_9",cells:[{content:f},{content:"Arterial Sheath Care (9)"},{content:l.default.createElement(p,null)}]},{id:"row_10",cells:[{content:f},{content:"Arterial Sheath Care (10)"},{content:l.default.createElement(p,null)}]}],y=function(e){switch(e){case"enormous":return 4;case"huge":return 3;case"large":case"medium":return 2;default:return 1}},_=function(e){switch(e){case"enormous":case"huge":case"large":case"medium":return"60px";default:return"40px"}},b=[{id:"Column-0",displayName:"Icon",width:"60px",align:i.alignTypes.CENTER},{id:"Column-1",displayName:"Service name",width:"200px",flexGrow:!0},{id:"Column-2",displayName:"Featured",width:"60px",align:i.alignTypes.CENTER}];t.Z=function(){var e=l.default.useContext(c.ActiveBreakpointContext);return l.default.createElement(i.default,{id:"with-breakpoints",ariaLabel:"Compact Interactive List",rows:v,columns:b,numberOfColumns:y(e),rowHeight:_(e),rowHeaderIndex:1})}},53560:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},87462:function(e,t,n){function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},r.apply(this,arguments)}n.d(t,{Z:function(){return r}})},44925:function(e,t,n){function r(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}n.d(t,{Z:function(){return r}})},15785:function(e,t,n){function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function a(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(t,{Z:function(){return a}})}}]);