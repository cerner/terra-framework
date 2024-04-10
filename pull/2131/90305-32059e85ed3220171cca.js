"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[90305],{201:function(e,t,n){var a=n(24994),r=n(73738);t.A=void 0;var l=a(n(85715)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=r(e)&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var a={__proto__:null},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=l?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(a,o,i):a[o]=e[o]}return a.default=e,n&&n.set(e,a),a}(n(96540)),i=a(n(5556)),c=a(n(67967)),u=n(92912),s=a(n(49558)),m=a(n(53665)),d=n(25966),p=a(n(89986));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}var h=c.default.bind(p.default),w={example:i.default.element,exampleSrc:i.default.element,exampleCssSrc:i.default.element,title:i.default.string,description:i.default.node,isExpanded:i.default.bool},v=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},_=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},y=function(e){var t=e.example,n=e.exampleSrc,a=e.exampleCssSrc,r=e.title,i=e.description,c=e.isExpanded,p=(0,o.useState)(c),f=(0,l.default)(p,2),w=f[0],y=f[1],C=(0,o.useState)(!1),x=(0,l.default)(C,2),b=x[0],g=x[1],E=o.default.useContext(u.ThemeContext),N=void 0!==a,I=function(){g(!b),w&&y(!w)},S=function(){y(!w),b&&g(!b)},k=function(e,t){e.nativeEvent.keyCode!==d.KEY_SPACE&&e.nativeEvent.keyCode!==d.KEY_RETURN||(e.preventDefault(),t())};return o.default.createElement("div",{className:h("template",E.className)},o.default.createElement("div",{className:h("header")},r&&o.default.createElement("h2",{className:h("title")},r)),o.default.createElement("div",{className:h("content")},i&&o.default.createElement("div",{className:h("description")},i),t),o.default.createElement("div",{className:h("footer")},n?o.default.createElement("div",{className:h("button-container")},N&&o.default.createElement("button",{type:"button",className:h("css-toggle","item",{"is-selected":b}),onClick:I,onKeyDown:function(e){return k(e,I)},onBlur:v,onMouseDown:_,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(s.default,{className:h("chevron")}),o.default.createElement("span",null,"CSS"),o.default.createElement(m.default,{className:h("chevron")})),o.default.createElement("button",{type:"button",className:h("code-toggle","item",{"is-selected":w}),onClick:S,onKeyDown:function(e){return k(e,S)},onBlur:v,onMouseDown:_,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(s.default,{className:h("chevron")}),o.default.createElement("span",null,"Code"),o.default.createElement(m.default,{className:h("chevron")}))):null,o.default.createElement("div",null,b&&o.default.createElement("div",{className:h("css")},a),w&&o.default.createElement("div",{className:h("code")},n))))};y.propTypes=w,y.defaultProps={isExpanded:!1};t.A=y},53846:function(e,t,n){n.r(t),n.d(t,{default:function(){return x}});var a=n(58168),r=n(53986),l=n(96540),o=n(36665),i=n(39068),c=["components"],u={};function s(e){var t=e.components,n=(0,r.A)(e,c);return(0,o.mdx)("wrapper",(0,a.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React, { useState } from 'react';\nimport CompactInteractiveList, { alignTypes } from 'terra-compact-interactive-list';\nimport { ActiveBreakpointContext } from 'terra-breakpoints';\nimport {\n  IconFeaturedOff, IconFeatured, IconMultipleResultsNormal, IconMultipleResultsNotNormal, IconMultipleResultsCritical,\n} from 'terra-icon';\nimport Button from 'terra-button';\n\nconst FeaturedIcon = () => {\n  const [isFeatured, setIsFeatured] = useState(false);\n  const onButtonClick = () => setIsFeatured(!isFeatured);\n  return (\n    isFeatured ? <Button variant=\"utility\" text=\"Unfavorite item\" icon={<IconFeatured />} onClick={onButtonClick} /> : <Button variant=\"utility\" text=\"Favorite item\" icon={<IconFeaturedOff />} onClick={onButtonClick} />\n  );\n};\nconst iconResultsNormal = <IconMultipleResultsNormal a11yLabel=\"Results normal\" height=\"1.5em\" width=\"1.5em\" />;\nconst iconResultsNotNormal = <IconMultipleResultsNotNormal a11yLabel=\"Results not normal\" height=\"1.5em\" width=\"1.5em\" />;\nconst iconResultsCritical = <IconMultipleResultsCritical a11yLabel=\"Results critical\" height=\"1.5em\" width=\"1.5em\" />;\n\nconst rows = [\n  {\n    id: 'row_1',\n    cells: [\n      { content: iconResultsNormal },\n      { content: 'Discern Care Set (1)' },\n      { content: <FeaturedIcon /> },\n    ],\n  },\n  {\n    id: 'row_2',\n    cells: [\n      { content: iconResultsNormal },\n      { content: 'Initial observation Care/Day High Severity 99220 (2)' },\n      { content: <FeaturedIcon /> },\n    ],\n  },\n  {\n    id: 'row_3',\n    cells: [\n      { content: iconResultsNotNormal },\n      { content: 'Arterial Sheath Care (3)' },\n      { content: <FeaturedIcon /> },\n    ],\n  },\n  {\n    id: 'row_4',\n    cells: [\n      { content: ' ' },\n      { content: 'Sbsq Observation Care/Day High Severity 99226 (4)' },\n      { content: <FeaturedIcon /> },\n    ],\n  },\n  {\n    id: 'row_5',\n    cells: [\n      { content: iconResultsCritical },\n      { content: 'Arterial Sheath Care (5)' },\n      { content: <FeaturedIcon /> },\n    ],\n  },\n  {\n    id: 'row_6',\n    cells: [\n      { content: iconResultsNormal },\n      { content: 'Arterial Sheath Care (6)' },\n      { content: <FeaturedIcon /> },\n    ],\n  },\n  {\n    id: 'row_7',\n    cells: [\n      { content: ' ' },\n      { content: 'Sbsq Observation Care/Day High Severity 99226 (7)' },\n      { content: <FeaturedIcon /> },\n    ],\n  },\n  {\n    id: 'row_8',\n    cells: [\n      { content: iconResultsNormal },\n      { content: 'Arterial Sheath Care (8)' },\n      { content: <FeaturedIcon /> },\n    ],\n  },\n  {\n    id: 'row_9',\n    cells: [\n      { content: iconResultsNormal },\n      { content: 'Arterial Sheath Care (9)' },\n      { content: <FeaturedIcon /> },\n    ],\n  },\n  {\n    id: 'row_10',\n    cells: [\n      { content: iconResultsNormal },\n      { content: 'Arterial Sheath Care (10)' },\n      { content: <FeaturedIcon /> },\n    ],\n  },\n];\n\nconst getNumberOfColumns = (activeBreakpoint) => {\n  switch (activeBreakpoint) {\n    case 'enormous': return 4;\n    case 'huge': return 3;\n    case 'large': return 2;\n    case 'medium': return 2;\n    case 'small': return 1;\n    case 'tiny': return 1;\n    default: return 1;\n  }\n};\n\nconst getRowHeight = (activeBreakpoint) => {\n  switch (activeBreakpoint) {\n    case 'enormous': return '60px';\n    case 'huge': return '60px';\n    case 'large': return '60px';\n    case 'medium': return '60px';\n    case 'small': return '40px';\n    case 'tiny': return '40px';\n    default: return '40px';\n  }\n};\n\nconst cols = [\n  {\n    id: 'Column-0',\n    displayName: 'Status',\n    width: '60px',\n    align: alignTypes.CENTER,\n  },\n  {\n    id: 'Column-1',\n    displayName: 'Service name',\n    width: '200px', // will be used as a css flexBasis\n    flexGrow: true, // makes the column grow or shrink\n  },\n  {\n    id: 'Column-2',\n    displayName: 'Featured',\n    width: '60px',\n    align: alignTypes.CENTER,\n  },\n];\n\nconst VerticalFlow = () => {\n  const activeBreakpoint = React.useContext(ActiveBreakpointContext);\n  return (\n    <CompactInteractiveList\n      id=\"compact-interactive-list-vertical-flow\"\n      ariaLabel=\"Compact Interactive List\"\n      rows={rows}\n      columns={cols}\n      numberOfColumns={getNumberOfColumns(activeBreakpoint)}\n      rowHeight={getRowHeight(activeBreakpoint)}\n      rowHeaderIndex={1}\n    />\n  );\n};\n\nexport default VerticalFlow;\n\n")))}s.isMDXComponent=!0;var m=n(201),d=function(e){var t=e.title,n=e.description,a=e.isExpanded;return l.createElement(m.A,{title:t||"Vertical Flow",description:n,example:l.createElement(i.A,null),exampleSrc:l.createElement(s,null),isExpanded:a})},p=n(56114),f=["components"],h={};function w(e){var t=e.components,n=(0,r.A)(e,f);return(0,o.mdx)("wrapper",(0,a.A)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React, { useState } from 'react';\nimport CompactInteractiveList, { alignTypes } from 'terra-compact-interactive-list';\nimport { ActiveBreakpointContext } from 'terra-breakpoints';\nimport {\n  IconFeaturedOff, IconFeatured, IconMultipleResultsNormal, IconMultipleResultsNotNormal, IconMultipleResultsCritical,\n} from 'terra-icon';\nimport Button from 'terra-button';\n\nconst FeaturedIcon = () => {\n  const [isFeatured, setIsFeatured] = useState(false);\n  const onButtonClick = () => setIsFeatured(!isFeatured);\n  return (\n    isFeatured ? <Button variant=\"utility\" text=\"Unfavorite item\" icon={<IconFeatured />} onClick={onButtonClick} /> : <Button variant=\"utility\" text=\"Favorite item\" icon={<IconFeaturedOff />} onClick={onButtonClick} />\n  );\n};\nconst iconResultsNormal = <IconMultipleResultsNormal a11yLabel=\"Results normal\" height=\"1.5em\" width=\"1.5em\" />;\nconst iconResultsNotNormal = <IconMultipleResultsNotNormal a11yLabel=\"Results not normal\" height=\"1.5em\" width=\"1.5em\" />;\nconst iconResultsCritical = <IconMultipleResultsCritical a11yLabel=\"Results critical\" height=\"1.5em\" width=\"1.5em\" />;\n\nconst rows = [\n  {\n    id: 'row_1',\n    cells: [\n      { content: iconResultsNormal },\n      { content: 'Discern Care Set (1)' },\n      { content: <FeaturedIcon /> },\n    ],\n  },\n  {\n    id: 'row_2',\n    cells: [\n      { content: iconResultsNormal },\n      { content: 'Initial observation Care/Day High Severity 99220 (2)' },\n      { content: <FeaturedIcon /> },\n    ],\n  },\n  {\n    id: 'row_3',\n    cells: [\n      { content: iconResultsNotNormal },\n      { content: 'Arterial Sheath Care (3)' },\n      { content: <FeaturedIcon /> },\n    ],\n  },\n  {\n    id: 'row_4',\n    cells: [\n      { content: ' ' },\n      { content: 'Sbsq Observation Care/Day High Severity 99226 (4)' },\n      { content: <FeaturedIcon /> },\n    ],\n  },\n  {\n    id: 'row_5',\n    cells: [\n      { content: iconResultsCritical },\n      { content: 'Arterial Sheath Care (5)' },\n      { content: <FeaturedIcon /> },\n    ],\n  },\n  {\n    id: 'row_6',\n    cells: [\n      { content: iconResultsNormal },\n      { content: 'Arterial Sheath Care (6)' },\n      { content: <FeaturedIcon /> },\n    ],\n  },\n  {\n    id: 'row_7',\n    cells: [\n      { content: ' ' },\n      { content: 'Sbsq Observation Care/Day High Severity 99226 (7)' },\n      { content: <FeaturedIcon /> },\n    ],\n  },\n  {\n    id: 'row_8',\n    cells: [\n      { content: iconResultsNormal },\n      { content: 'Arterial Sheath Care (8)' },\n      { content: <FeaturedIcon /> },\n    ],\n  },\n  {\n    id: 'row_9',\n    cells: [\n      { content: iconResultsNormal },\n      { content: 'Arterial Sheath Care (9)' },\n      { content: <FeaturedIcon /> },\n    ],\n  },\n  {\n    id: 'row_10',\n    cells: [\n      { content: iconResultsNormal },\n      { content: 'Arterial Sheath Care (10)' },\n      { content: <FeaturedIcon /> },\n    ],\n  },\n];\n\nconst getNumberOfColumns = (activeBreakpoint) => {\n  switch (activeBreakpoint) {\n    case 'enormous': return 4;\n    case 'huge': return 3;\n    case 'large': return 2;\n    case 'medium': return 2;\n    case 'small': return 1;\n    case 'tiny': return 1;\n    default: return 1;\n  }\n};\n\nconst cols = [\n  {\n    id: 'Column-0',\n    displayName: 'Status',\n    width: '60px',\n    align: alignTypes.CENTER,\n  },\n  {\n    id: 'Column-1',\n    displayName: 'Service name',\n    width: '200px', // will be used as a css flexBasis\n    flexGrow: true, // makes the column grow or shrink\n  },\n  {\n    id: 'Column-2',\n    displayName: 'Featured',\n    width: '60px',\n    align: alignTypes.CENTER,\n  },\n];\n\nconst HorizontalFlow = () => {\n  const activeBreakpoint = React.useContext(ActiveBreakpointContext);\n\n  return (\n    <CompactInteractiveList\n      id=\"compact-interactive-list-horizontal-flow\"\n      ariaLabel=\"Compact Interactive List\"\n      rows={rows}\n      columns={cols}\n      numberOfColumns={getNumberOfColumns(activeBreakpoint)}\n      rowHeaderIndex={1}\n      flowHorizontally\n    />\n  );\n};\n\nexport default HorizontalFlow;\n\n")))}w.isMDXComponent=!0;var v=function(e){var t=e.title,n=e.description,a=e.isExpanded;return l.createElement(m.A,{title:t||"Horizontal Flow",description:n,example:l.createElement(p.A,null),exampleSrc:l.createElement(w,null),isExpanded:a})},_=["components"],y={},C="wrapper";function x(e){var t=e.components,n=(0,r.A)(e,_);return(0,o.mdx)(C,(0,a.A)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"flow-direction"},"Flow Direction"),(0,o.mdx)("h3",{id:"vertical-flow"},"Vertical Flow"),(0,o.mdx)("p",null,"By default, the items in the ",(0,o.mdx)("a",{parentName:"p",href:"/terra-framework/pull/2131/components/cerner-terra-framework-docs/compact-interactive-list/about"},"Compact Interactive List")," component are read from top to bottom before moving to a new visual column."),(0,o.mdx)(d,{mdxType:"VerticalFlow"}),(0,o.mdx)("h4",{id:"usage"},"Usage"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"The ",(0,o.mdx)("a",{parentName:"li",href:"/terra-framework/pull/2131/components/cerner-terra-framework-docs/compact-interactive-list/about"},"rowHeight")," property is required for the list items to use vertical flow. If not set, the default value is used."),(0,o.mdx)("li",{parentName:"ul"},"The items are distributed evenly between all columns but the last one. The last column accommodates the remainder after the number of items is divided by the number of columns."),(0,o.mdx)("li",{parentName:"ul"},"Note: If the number of rows is divisible by the ",(0,o.mdx)("a",{parentName:"li",href:"/terra-framework/pull/2131/components/cerner-terra-framework-docs/compact-interactive-list/about"},"numberOfColumns")," value minus 1 without a remainder, the last column will be empty.")),(0,o.mdx)("h3",{id:"horizontal-flow"},"Horizontal Flow"),(0,o.mdx)("p",null,"If the ",(0,o.mdx)("a",{parentName:"p",href:"/terra-framework/pull/2131/components/cerner-terra-framework-docs/compact-interactive-list/about"},"flowHorizontally")," property is set to ",(0,o.mdx)("strong",{parentName:"p"},"true"),", the flow direction changes to read from left to right before moving to a new line. ",(0,o.mdx)("em",{parentName:"p"},"This isn't a common way to use this component and is not recommended for most purposes.")),(0,o.mdx)(v,{mdxType:"HorizontalFlow"}),(0,o.mdx)("h4",{id:"usage-1"},"Usage"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"The horizontal flow does not require setting the ",(0,o.mdx)("a",{parentName:"li",href:"/terra-framework/pull/2131/components/cerner-terra-framework-docs/compact-interactive-list/about"},"rowHeight")," property."),(0,o.mdx)("li",{parentName:"ul"},"All empty spaces are distributed in the last row.")))}x.isMDXComponent=!0},56114:function(e,t,n){var a=n(24994),r=n(73738);t.A=void 0;var l=a(n(85715)),o=d(n(96540)),i=d(n(79943)),c=n(58216),u=n(33049),s=a(n(23986));function m(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(m=function(e){return e?n:t})(e)}function d(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=r(e)&&"function"!=typeof e)return{default:e};var n=m(t);if(n&&n.has(e))return n.get(e);var a={__proto__:null},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&{}.hasOwnProperty.call(e,o)){var i=l?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(a,o,i):a[o]=e[o]}return a.default=e,n&&n.set(e,a),a}var p=function(){var e=(0,o.useState)(!1),t=(0,l.default)(e,2),n=t[0],a=t[1],r=function(){return a(!n)};return n?o.default.createElement(s.default,{variant:"utility",text:"Unfavorite item",icon:o.default.createElement(u.IconFeatured,null),onClick:r}):o.default.createElement(s.default,{variant:"utility",text:"Favorite item",icon:o.default.createElement(u.IconFeaturedOff,null),onClick:r})},f=o.default.createElement(u.IconMultipleResultsNormal,{a11yLabel:"Results normal",height:"1.5em",width:"1.5em"}),h=o.default.createElement(u.IconMultipleResultsNotNormal,{a11yLabel:"Results not normal",height:"1.5em",width:"1.5em"}),w=o.default.createElement(u.IconMultipleResultsCritical,{a11yLabel:"Results critical",height:"1.5em",width:"1.5em"}),v=[{id:"row_1",cells:[{content:f},{content:"Discern Care Set (1)"},{content:o.default.createElement(p,null)}]},{id:"row_2",cells:[{content:f},{content:"Initial observation Care/Day High Severity 99220 (2)"},{content:o.default.createElement(p,null)}]},{id:"row_3",cells:[{content:h},{content:"Arterial Sheath Care (3)"},{content:o.default.createElement(p,null)}]},{id:"row_4",cells:[{content:" "},{content:"Sbsq Observation Care/Day High Severity 99226 (4)"},{content:o.default.createElement(p,null)}]},{id:"row_5",cells:[{content:w},{content:"Arterial Sheath Care (5)"},{content:o.default.createElement(p,null)}]},{id:"row_6",cells:[{content:f},{content:"Arterial Sheath Care (6)"},{content:o.default.createElement(p,null)}]},{id:"row_7",cells:[{content:" "},{content:"Sbsq Observation Care/Day High Severity 99226 (7)"},{content:o.default.createElement(p,null)}]},{id:"row_8",cells:[{content:f},{content:"Arterial Sheath Care (8)"},{content:o.default.createElement(p,null)}]},{id:"row_9",cells:[{content:f},{content:"Arterial Sheath Care (9)"},{content:o.default.createElement(p,null)}]},{id:"row_10",cells:[{content:f},{content:"Arterial Sheath Care (10)"},{content:o.default.createElement(p,null)}]}],_=function(e){switch(e){case"enormous":return 4;case"huge":return 3;case"large":case"medium":return 2;default:return 1}},y=[{id:"Column-0",displayName:"Status",width:"60px",align:i.alignTypes.CENTER},{id:"Column-1",displayName:"Service name",width:"200px",flexGrow:!0},{id:"Column-2",displayName:"Featured",width:"60px",align:i.alignTypes.CENTER}];t.A=function(){var e=o.default.useContext(c.ActiveBreakpointContext);return o.default.createElement(i.default,{id:"compact-interactive-list-horizontal-flow",ariaLabel:"Compact Interactive List",rows:v,columns:y,numberOfColumns:_(e),rowHeaderIndex:1,flowHorizontally:!0})}},39068:function(e,t,n){var a=n(24994),r=n(73738);t.A=void 0;var l=a(n(85715)),o=d(n(96540)),i=d(n(79943)),c=n(58216),u=n(33049),s=a(n(23986));function m(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(m=function(e){return e?n:t})(e)}function d(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=r(e)&&"function"!=typeof e)return{default:e};var n=m(t);if(n&&n.has(e))return n.get(e);var a={__proto__:null},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&{}.hasOwnProperty.call(e,o)){var i=l?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(a,o,i):a[o]=e[o]}return a.default=e,n&&n.set(e,a),a}var p=function(){var e=(0,o.useState)(!1),t=(0,l.default)(e,2),n=t[0],a=t[1],r=function(){return a(!n)};return n?o.default.createElement(s.default,{variant:"utility",text:"Unfavorite item",icon:o.default.createElement(u.IconFeatured,null),onClick:r}):o.default.createElement(s.default,{variant:"utility",text:"Favorite item",icon:o.default.createElement(u.IconFeaturedOff,null),onClick:r})},f=o.default.createElement(u.IconMultipleResultsNormal,{a11yLabel:"Results normal",height:"1.5em",width:"1.5em"}),h=o.default.createElement(u.IconMultipleResultsNotNormal,{a11yLabel:"Results not normal",height:"1.5em",width:"1.5em"}),w=o.default.createElement(u.IconMultipleResultsCritical,{a11yLabel:"Results critical",height:"1.5em",width:"1.5em"}),v=[{id:"row_1",cells:[{content:f},{content:"Discern Care Set (1)"},{content:o.default.createElement(p,null)}]},{id:"row_2",cells:[{content:f},{content:"Initial observation Care/Day High Severity 99220 (2)"},{content:o.default.createElement(p,null)}]},{id:"row_3",cells:[{content:h},{content:"Arterial Sheath Care (3)"},{content:o.default.createElement(p,null)}]},{id:"row_4",cells:[{content:" "},{content:"Sbsq Observation Care/Day High Severity 99226 (4)"},{content:o.default.createElement(p,null)}]},{id:"row_5",cells:[{content:w},{content:"Arterial Sheath Care (5)"},{content:o.default.createElement(p,null)}]},{id:"row_6",cells:[{content:f},{content:"Arterial Sheath Care (6)"},{content:o.default.createElement(p,null)}]},{id:"row_7",cells:[{content:" "},{content:"Sbsq Observation Care/Day High Severity 99226 (7)"},{content:o.default.createElement(p,null)}]},{id:"row_8",cells:[{content:f},{content:"Arterial Sheath Care (8)"},{content:o.default.createElement(p,null)}]},{id:"row_9",cells:[{content:f},{content:"Arterial Sheath Care (9)"},{content:o.default.createElement(p,null)}]},{id:"row_10",cells:[{content:f},{content:"Arterial Sheath Care (10)"},{content:o.default.createElement(p,null)}]}],_=function(e){switch(e){case"enormous":return 4;case"huge":return 3;case"large":case"medium":return 2;default:return 1}},y=function(e){switch(e){case"enormous":case"huge":case"large":case"medium":return"60px";default:return"40px"}},C=[{id:"Column-0",displayName:"Status",width:"60px",align:i.alignTypes.CENTER},{id:"Column-1",displayName:"Service name",width:"200px",flexGrow:!0},{id:"Column-2",displayName:"Featured",width:"60px",align:i.alignTypes.CENTER}];t.A=function(){var e=o.default.useContext(c.ActiveBreakpointContext);return o.default.createElement(i.default,{id:"compact-interactive-list-vertical-flow",ariaLabel:"Compact Interactive List",rows:v,columns:C,numberOfColumns:_(e),rowHeight:y(e),rowHeaderIndex:1})}},89986:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},58168:function(e,t,n){function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},a.apply(this,arguments)}n.d(t,{A:function(){return a}})},53986:function(e,t,n){function a(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}n.d(t,{A:function(){return a}})}}]);