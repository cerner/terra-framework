"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[32568],{17213:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var r=n(58168),a=n(53986),o=n(96540),i=n(36665),l=n(74647),c=n(80312),m=n(60859),s=["components"],u={};function d(e){var t=e.components,n=(0,a.A)(e,s);return(0,i.mdx)("wrapper",(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React, { useState } from 'react';\nimport CompactInteractiveList, { alignTypes } from 'terra-compact-interactive-list';\nimport {\n  IconFeaturedOff, IconFeatured, IconMultipleResultsNormal, IconMultipleResultsNotNormal, IconMultipleResultsCritical,\n} from 'terra-icon';\nimport Button from 'terra-button';\n\nconst FeaturedIcon = () => {\n  const [isFeatured, setIsFeatured] = useState(false);\n  const onButtonClick = () => setIsFeatured(!isFeatured);\n  return (\n    isFeatured ? <Button variant=\"utility\" text=\"Featured button\" icon={<IconFeatured />} onClick={onButtonClick} /> : <Button variant=\"utility\" text=\"Featured off button\" icon={<IconFeaturedOff />} onClick={onButtonClick} />\n  );\n};\n\nconst iconResultsNormal = <IconMultipleResultsNormal a11yLabel=\"Results normal\" height=\"1.5em\" width=\"1.5em\" />;\nconst iconResultsNotNormal = <IconMultipleResultsNotNormal a11yLabel=\"Results not normal\" height=\"1.5em\" width=\"1.5em\" />;\nconst iconResultsCritical = <IconMultipleResultsCritical a11yLabel=\"Results critical\" height=\"1.5em\" width=\"1.5em\" />;\n\nconst rows = [\n  {\n    id: 'row_1',\n    cells: [\n      { content: iconResultsNormal },\n      { content: 'Discern Care Set (1)' },\n      { content: <FeaturedIcon /> },\n    ],\n  },\n  {\n    id: 'row_2',\n    cells: [\n      { content: iconResultsNormal },\n      { content: 'Initial observation Care/Day High Severity 99220 (2)' },\n      { content: <FeaturedIcon /> },\n    ],\n  },\n  {\n    id: 'row_3',\n    cells: [\n      { content: iconResultsNotNormal },\n      { content: 'Arterial Sheath Care (3)' },\n      { content: <FeaturedIcon /> },\n    ],\n  },\n  {\n    id: 'row_4',\n    cells: [\n      { content: ' ' },\n      { content: 'Sbsq Observation Care/Day High Severity 99226 (4)' },\n      { content: <FeaturedIcon /> },\n    ],\n  },\n  {\n    id: 'row_5',\n    cells: [\n      { content: iconResultsCritical },\n      { content: 'Arterial Sheath Care (5)' },\n      { content: <FeaturedIcon /> },\n    ],\n  },\n];\n\nconst cols = [\n  {\n    id: 'Column-0',\n    displayName: 'Icon',\n    width: '60px',\n    align: alignTypes.CENTER,\n  },\n  {\n    id: 'Column-1',\n    displayName: 'Service name',\n    width: '300px', // will be used as a css flexBasis\n    flexGrow: true, // makes the column grow or shrink\n    maximumWidth: '400px',\n    minimumWidth: '200px',\n  },\n  {\n    id: 'Column-2',\n    displayName: 'Featured',\n    width: '60px',\n    align: alignTypes.CENTER,\n  },\n];\n\nconst ResponsiveColumnsMaxWidth = () => (\n  <CompactInteractiveList\n    id=\"compact-interactive-list-resp-columns-max-width\"\n    ariaLabel=\"Compact Interactive List\"\n    rows={rows}\n    columns={cols}\n    numberOfColumns={2}\n    columnMinimumWidth=\"234px\"\n    rowHeaderIndex={1}\n  />\n);\n\nexport default ResponsiveColumnsMaxWidth;\n\n")))}d.isMDXComponent=!0;var p=n(201),f=function(e){var t=e.title,n=e.description,r=e.isExpanded;return o.createElement(p.A,{title:t||"Responsive Columns Max Width",description:n,example:o.createElement(m.A,null),exampleSrc:o.createElement(d,null),isExpanded:r})},h=["components"],x={},w="wrapper";function v(e){var t=e.components,n=(0,a.A)(e,h);return(0,i.mdx)(w,(0,r.A)({},x,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"responsive-columns"},"Responsive Columns"),(0,i.mdx)("h3",{id:"description"},"Description"),(0,i.mdx)("p",null,"This example demonstrates a ",(0,i.mdx)("a",{parentName:"p",href:"/terra-framework/pull/2056/components/cerner-terra-framework-docs/compact-interactive-list/about"},"Compact Interactive List")," component with responsive columns."),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"The middle semantic column with the text information has the ",(0,i.mdx)("a",{parentName:"li",href:"/terra-framework/pull/2056/components/cerner-terra-framework-docs/compact-interactive-list/about"},"flexGrow")," property set to ",(0,i.mdx)("strong",{parentName:"li"},"true"),", which allows the column to expand to fill the container's width."),(0,i.mdx)("li",{parentName:"ul"},"The maximum width for the text column is unlimited because the ",(0,i.mdx)("a",{parentName:"li",href:"/terra-framework/pull/2056/components/cerner-terra-framework-docs/compact-interactive-list/about"},"maximumWidth")," property is not set."),(0,i.mdx)("li",{parentName:"ul"},"The minimum width uses the default value because the ",(0,i.mdx)("a",{parentName:"li",href:"/terra-framework/pull/2056/components/cerner-terra-framework-docs/compact-interactive-list/about"},"minimumWidth")," property is not set."),(0,i.mdx)("li",{parentName:"ul"},"Once the list reaches its minimum width, defined by the fixed width columns and the default minimum width of the flex expanding column, the scrollbar is displayed.")),(0,i.mdx)(c.A,{mdxType:"ResponsiveColumns"}),(0,i.mdx)("h3",{id:"usage"},"Usage"),(0,i.mdx)("h4",{id:"create-a-responsive-column"},"Create a Responsive Column"),(0,i.mdx)("p",null,"Use one of the following methods to make a sematic column responsive:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Omit the ",(0,i.mdx)("a",{parentName:"li",href:"/terra-framework/pull/2056/components/cerner-terra-framework-docs/compact-interactive-list/about"},"width")," property to make a semantic column expand or shrink to fill all available space."),(0,i.mdx)("li",{parentName:"ul"},"Set the ",(0,i.mdx)("a",{parentName:"li",href:"/terra-framework/pull/2056/components/cerner-terra-framework-docs/compact-interactive-list/about"},"flexGrow")," property to ",(0,i.mdx)("strong",{parentName:"li"},"true")," with the ",(0,i.mdx)("a",{parentName:"li",href:"/terra-framework/pull/2056/components/cerner-terra-framework-docs/compact-interactive-list/about"},"width")," property set to a number that also makes the column responsive.\nIf you keep ",(0,i.mdx)("a",{parentName:"li",href:"/terra-framework/pull/2056/components/cerner-terra-framework-docs/compact-interactive-list/about"},"width"),", the property can be used as a ",(0,i.mdx)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/flex-basis"},"flex basis"),".")),(0,i.mdx)("h4",{id:"control-maximum-and-minimum-width"},"Control Maximum and Minimum Width"),(0,i.mdx)(l.Notice,{variant:"important",ariaLevel:"3",mdxType:"Notice"},(0,i.mdx)("p",null,"The supported units for width properties are ",(0,i.mdx)("inlineCode",{parentName:"p"},"px"),", ",(0,i.mdx)("inlineCode",{parentName:"p"},"em"),", and ",(0,i.mdx)("inlineCode",{parentName:"p"},"rem"),".\nEnsure that the width units are consistent across all properties in the same component. The width properties are\n",(0,i.mdx)("a",{parentName:"p",href:"/terra-framework/pull/2056/components/cerner-terra-framework-docs/compact-interactive-list/about"},"columnMinimumWidth"),",\n",(0,i.mdx)("a",{parentName:"p",href:"/terra-framework/pull/2056/components/cerner-terra-framework-docs/compact-interactive-list/about"},"columnMaximumWidth"),",\n",(0,i.mdx)("a",{parentName:"p",href:"/terra-framework/pull/2056/components/cerner-terra-framework-docs/compact-interactive-list/about"},"width"),",\n",(0,i.mdx)("a",{parentName:"p",href:"/terra-framework/pull/2056/components/cerner-terra-framework-docs/compact-interactive-list/about"},"minimumWidth"),", and\n",(0,i.mdx)("a",{parentName:"p",href:"/terra-framework/pull/2056/components/cerner-terra-framework-docs/compact-interactive-list/about"},"maximumWidth"),".\nWidth units inconsistent with the rest of the component properties are disregarded.")),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"To control the minimum and maximum width of all flexible columns in the component, use the\n",(0,i.mdx)("a",{parentName:"li",href:"/terra-framework/pull/2056/components/cerner-terra-framework-docs/compact-interactive-list/about"},"columnMaximumWidth")," and\n",(0,i.mdx)("a",{parentName:"li",href:"/terra-framework/pull/2056/components/cerner-terra-framework-docs/compact-interactive-list/about"},"columnMinimumWidth")," properties.\nIf the ",(0,i.mdx)("a",{parentName:"li",href:"/terra-framework/pull/2056/components/cerner-terra-framework-docs/compact-interactive-list/about"},"columnMinimumWidth")," property is not set, the default value is used."),(0,i.mdx)("li",{parentName:"ul"},"Alternatively, you can individually pass the ",(0,i.mdx)("a",{parentName:"li",href:"/terra-framework/pull/2056/components/cerner-terra-framework-docs/compact-interactive-list/about"},"minimumWidth")," and ",(0,i.mdx)("a",{parentName:"li",href:"/terra-framework/pull/2056/components/cerner-terra-framework-docs/compact-interactive-list/about"},"maximumWidth")," to a column, which provides more flexibility. ")),(0,i.mdx)("p",null,"In the following example, the text column has the maximumWidth set to ",(0,i.mdx)("strong",{parentName:"p"},"400px")," and minimumWidth set to ",(0,i.mdx)("strong",{parentName:"p"},"200px"),":"),(0,i.mdx)(f,{mdxType:"ResponsiveColumnsMaxWidth"}))}v.isMDXComponent=!0},80312:function(e,t,n){n.d(t,{A:function(){return d}});var r=n(96540),a=n(43921),o=n(58168),i=n(53986),l=n(36665),c=["components"],m={};function s(e){var t=e.components,n=(0,i.A)(e,c);return(0,l.mdx)("wrapper",(0,o.A)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React, { useState } from 'react';\nimport CompactInteractiveList, { alignTypes } from 'terra-compact-interactive-list';\nimport {\n  IconFeaturedOff, IconFeatured, IconMultipleResultsNormal, IconMultipleResultsNotNormal, IconMultipleResultsCritical,\n} from 'terra-icon';\nimport Button from 'terra-button';\n\nconst FeaturedIcon = () => {\n  const [isFeatured, setIsFeatured] = useState(false);\n  const onButtonClick = () => setIsFeatured(!isFeatured);\n  return (\n    isFeatured ? <Button variant=\"utility\" text=\"Featured button\" icon={<IconFeatured />} onClick={onButtonClick} /> : <Button variant=\"utility\" text=\"Featured off button\" icon={<IconFeaturedOff />} onClick={onButtonClick} />\n  );\n};\nconst iconResultsNormal = <IconMultipleResultsNormal a11yLabel=\"Results normal\" height=\"1.5em\" width=\"1.5em\" />;\nconst iconResultsNotNormal = <IconMultipleResultsNotNormal a11yLabel=\"Results not normal\" height=\"1.5em\" width=\"1.5em\" />;\nconst iconResultsCritical = <IconMultipleResultsCritical a11yLabel=\"Results critical\" height=\"1.5em\" width=\"1.5em\" />;\n\nconst rows = [\n  {\n    id: 'row_1',\n    cells: [\n      { content: iconResultsNormal },\n      { content: 'Discern Care Set (1)' },\n      { content: <FeaturedIcon /> },\n    ],\n  },\n  {\n    id: 'row_2',\n    cells: [\n      { content: iconResultsNormal },\n      { content: 'Initial observation Care/Day High Severity 99220 (2)' },\n      { content: <FeaturedIcon /> },\n    ],\n  },\n  {\n    id: 'row_3',\n    cells: [\n      { content: iconResultsNotNormal },\n      { content: 'Arterial Sheath Care (3)' },\n      { content: <FeaturedIcon /> },\n    ],\n  },\n  {\n    id: 'row_4',\n    cells: [\n      { content: ' ' },\n      { content: 'Sbsq Observation Care/Day High Severity 99226 (4)' },\n      { content: <FeaturedIcon /> },\n    ],\n  },\n  {\n    id: 'row_5',\n    cells: [\n      { content: iconResultsCritical },\n      { content: 'Arterial Sheath Care (5)' },\n      { content: <FeaturedIcon /> },\n    ],\n  },\n];\n\nconst cols = [\n  {\n    id: 'Column-0',\n    displayName: 'Icon',\n    width: '60px',\n    align: alignTypes.CENTER,\n  },\n  {\n    id: 'Column-1',\n    displayName: 'Service name',\n    width: '200px', // will be used as a css flexBasis\n    flexGrow: true, // makes the column grow or shrink\n  },\n  {\n    id: 'Column-2',\n    displayName: 'Featured',\n    width: '60px',\n    align: alignTypes.CENTER,\n  },\n];\n\nconst ResponsiveColumns = () => (\n  <CompactInteractiveList\n    id=\"compact-interactive-list-responsive-columns\"\n    ariaLabel=\"Compact Interactive List\"\n    rows={rows}\n    columns={cols}\n    numberOfColumns={2}\n    rowHeaderIndex={1}\n  />\n);\n\nexport default ResponsiveColumns;\n\n")))}s.isMDXComponent=!0;var u=n(201),d=function(e){var t=e.title,n=e.description,o=e.isExpanded;return r.createElement(u.A,{title:t||"Responsive Columns",description:n,example:r.createElement(a.A,null),exampleSrc:r.createElement(s,null),isExpanded:o})}},43921:function(e,t,n){var r=n(24994),a=n(73738);t.A=void 0;var o=r(n(85715)),i=u(n(96540)),l=u(n(79943)),c=n(33049),m=r(n(23986));function s(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(s=function(e){return e?n:t})(e)}function u(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var n=s(t);if(n&&n.has(e))return n.get(e);var r={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var l=o?Object.getOwnPropertyDescriptor(e,i):null;l&&(l.get||l.set)?Object.defineProperty(r,i,l):r[i]=e[i]}return r.default=e,n&&n.set(e,r),r}var d=function(){var e=(0,i.useState)(!1),t=(0,o.default)(e,2),n=t[0],r=t[1],a=function(){return r(!n)};return n?i.default.createElement(m.default,{variant:"utility",text:"Featured button",icon:i.default.createElement(c.IconFeatured,null),onClick:a}):i.default.createElement(m.default,{variant:"utility",text:"Featured off button",icon:i.default.createElement(c.IconFeaturedOff,null),onClick:a})},p=i.default.createElement(c.IconMultipleResultsNormal,{a11yLabel:"Results normal",height:"1.5em",width:"1.5em"}),f=i.default.createElement(c.IconMultipleResultsNotNormal,{a11yLabel:"Results not normal",height:"1.5em",width:"1.5em"}),h=i.default.createElement(c.IconMultipleResultsCritical,{a11yLabel:"Results critical",height:"1.5em",width:"1.5em"}),x=[{id:"row_1",cells:[{content:p},{content:"Discern Care Set (1)"},{content:i.default.createElement(d,null)}]},{id:"row_2",cells:[{content:p},{content:"Initial observation Care/Day High Severity 99220 (2)"},{content:i.default.createElement(d,null)}]},{id:"row_3",cells:[{content:f},{content:"Arterial Sheath Care (3)"},{content:i.default.createElement(d,null)}]},{id:"row_4",cells:[{content:" "},{content:"Sbsq Observation Care/Day High Severity 99226 (4)"},{content:i.default.createElement(d,null)}]},{id:"row_5",cells:[{content:h},{content:"Arterial Sheath Care (5)"},{content:i.default.createElement(d,null)}]}],w=[{id:"Column-0",displayName:"Icon",width:"60px",align:l.alignTypes.CENTER},{id:"Column-1",displayName:"Service name",width:"200px",flexGrow:!0},{id:"Column-2",displayName:"Featured",width:"60px",align:l.alignTypes.CENTER}];t.A=function(){return i.default.createElement(l.default,{id:"compact-interactive-list-responsive-columns",ariaLabel:"Compact Interactive List",rows:x,columns:w,numberOfColumns:2,rowHeaderIndex:1})}},60859:function(e,t,n){var r=n(24994),a=n(73738);t.A=void 0;var o=r(n(85715)),i=u(n(96540)),l=u(n(79943)),c=n(33049),m=r(n(23986));function s(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(s=function(e){return e?n:t})(e)}function u(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var n=s(t);if(n&&n.has(e))return n.get(e);var r={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var l=o?Object.getOwnPropertyDescriptor(e,i):null;l&&(l.get||l.set)?Object.defineProperty(r,i,l):r[i]=e[i]}return r.default=e,n&&n.set(e,r),r}var d=function(){var e=(0,i.useState)(!1),t=(0,o.default)(e,2),n=t[0],r=t[1],a=function(){return r(!n)};return n?i.default.createElement(m.default,{variant:"utility",text:"Featured button",icon:i.default.createElement(c.IconFeatured,null),onClick:a}):i.default.createElement(m.default,{variant:"utility",text:"Featured off button",icon:i.default.createElement(c.IconFeaturedOff,null),onClick:a})},p=i.default.createElement(c.IconMultipleResultsNormal,{a11yLabel:"Results normal",height:"1.5em",width:"1.5em"}),f=i.default.createElement(c.IconMultipleResultsNotNormal,{a11yLabel:"Results not normal",height:"1.5em",width:"1.5em"}),h=i.default.createElement(c.IconMultipleResultsCritical,{a11yLabel:"Results critical",height:"1.5em",width:"1.5em"}),x=[{id:"row_1",cells:[{content:p},{content:"Discern Care Set (1)"},{content:i.default.createElement(d,null)}]},{id:"row_2",cells:[{content:p},{content:"Initial observation Care/Day High Severity 99220 (2)"},{content:i.default.createElement(d,null)}]},{id:"row_3",cells:[{content:f},{content:"Arterial Sheath Care (3)"},{content:i.default.createElement(d,null)}]},{id:"row_4",cells:[{content:" "},{content:"Sbsq Observation Care/Day High Severity 99226 (4)"},{content:i.default.createElement(d,null)}]},{id:"row_5",cells:[{content:h},{content:"Arterial Sheath Care (5)"},{content:i.default.createElement(d,null)}]}],w=[{id:"Column-0",displayName:"Icon",width:"60px",align:l.alignTypes.CENTER},{id:"Column-1",displayName:"Service name",width:"300px",flexGrow:!0,maximumWidth:"400px",minimumWidth:"200px"},{id:"Column-2",displayName:"Featured",width:"60px",align:l.alignTypes.CENTER}];t.A=function(){return i.default.createElement(l.default,{id:"compact-interactive-list-resp-columns-max-width",ariaLabel:"Compact Interactive List",rows:x,columns:w,numberOfColumns:2,columnMinimumWidth:"234px",rowHeaderIndex:1})}}}]);