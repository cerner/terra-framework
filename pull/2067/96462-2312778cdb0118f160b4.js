"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[96462],{75855:function(e,t,n){n.r(t),n.d(t,{default:function(){return x}});var a=n(58168),r=n(53986),o=n(96540),i=n(36665),l=n(74647),c=n(26493),s=["components"],m={};function u(e){var t=e.components,n=(0,r.A)(e,s);return(0,i.mdx)("wrapper",(0,a.A)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React, { useState } from 'react';\nimport CompactInteractiveList from 'terra-compact-interactive-list';\nimport {\n  IconFeaturedOff, IconFeatured, IconMultipleResultsNormal, IconMultipleResultsNotNormal, IconMultipleResultsCritical,\n} from 'terra-icon';\nimport Button from 'terra-button';\n\nconst FeaturedIcon = () => {\n  const [isFeatured, setIsFeatured] = useState(false);\n  const onButtonClick = () => setIsFeatured(!isFeatured);\n  return (\n    isFeatured ? <Button variant=\"utility\" text=\"Featured button\" icon={<IconFeatured />} onClick={onButtonClick} /> : <Button variant=\"utility\" text=\"Featured off button\" icon={<IconFeaturedOff />} onClick={onButtonClick} />\n  );\n};\nconst iconResultsNormal = <IconMultipleResultsNormal a11yLabel=\"Results normal\" height=\"1.5em\" width=\"1.5em\" />;\nconst iconResultsNotNormal = <IconMultipleResultsNotNormal a11yLabel=\"Results not normal\" height=\"1.5em\" width=\"1.5em\" />;\nconst iconResultsCritical = <IconMultipleResultsCritical a11yLabel=\"Results critical\" height=\"1.5em\" width=\"1.5em\" />;\n\nconst rows = [\n  {\n    id: 'row_1',\n    cells: [\n      { content: iconResultsNormal },\n      { content: 'Discern Care Set (1)' },\n      { content: <FeaturedIcon /> },\n    ],\n  },\n  {\n    id: 'row_2',\n    cells: [\n      { content: iconResultsNormal },\n      { content: 'Initial observation Care/Day High Severity 99220 (2)' },\n      { content: <FeaturedIcon /> },\n    ],\n  },\n  {\n    id: 'row_3',\n    cells: [\n      { content: iconResultsNotNormal },\n      { content: 'Arterial Sheath Care (3)' },\n      { content: <FeaturedIcon /> },\n    ],\n  },\n  {\n    id: 'row_4',\n    cells: [\n      { content: ' ' },\n      { content: 'Sbsq Observation Care/Day High Severity 99226 (4)' },\n      { content: <FeaturedIcon /> },\n    ],\n  },\n  {\n    id: 'row_5',\n    cells: [\n      { content: iconResultsCritical },\n      { content: 'Arterial Sheath Care (5)' },\n      { content: <FeaturedIcon /> },\n    ],\n  },\n];\n\nconst cols = [\n  {\n    id: 'Column-0',\n    displayName: 'Icon',\n    width: '60px',\n  },\n  {\n    id: 'Column-1',\n    displayName: 'Service name',\n  },\n  {\n    id: 'Column-2',\n    displayName: 'Featured',\n    width: '60px',\n  },\n];\n\nconst BasicCompactInteractiveList = () => (\n  <CompactInteractiveList\n    id=\"compact-interactive-list-basic\"\n    ariaLabel=\"Compact Interactive List\"\n    rows={rows}\n    columns={cols}\n    rowHeaderIndex={1}\n  />\n);\n\nexport default BasicCompactInteractiveList;\n\n")))}u.isMDXComponent=!0;var d=n(201),p=function(e){var t=e.title,n=e.description,a=e.isExpanded;return o.createElement(d.A,{title:t||"Basic Compact Interactive List",description:n,example:o.createElement(c.A,null),exampleSrc:o.createElement(u,null),isExpanded:a})},f=n(80312),h=["components"],v={},w="wrapper";function x(e){var t=e.components,n=(0,r.A)(e,h);return(0,i.mdx)(w,(0,a.A)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"basic-compact-interactive-list"},"Basic Compact Interactive List"),(0,i.mdx)("h3",{id:"description"},"Description"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"The ",(0,i.mdx)("strong",{parentName:"li"},(0,i.mdx)("a",{parentName:"strong",href:"/terra-framework/pull/2067/components/cerner-terra-framework-docs/compact-interactive-list/about"},"Compact Interactive List"))," component consists of a grid of semantic rows (items) arranged into visual columns and visual rows.\nEach semantic row has a border, which visually separates it from the other rows in the list."),(0,i.mdx)("li",{parentName:"ul"},"The rows are divided into semantic columns, which do not have visual separators, but provide data alignment and allow ",(0,i.mdx)("a",{parentName:"li",href:"/terra-framework/pull/2067/components/cerner-terra-framework-docs/compact-interactive-list/about"},(0,i.mdx)("strong",{parentName:"a"},"keyboard navigation")),".\nThe ",(0,i.mdx)("strong",{parentName:"li"},(0,i.mdx)("a",{parentName:"strong",href:"/terra-framework/pull/2067/components/cerner-terra-framework-docs/compact-interactive-list/about"},"columns")," property")," provides the rules for semantic column structure. "),(0,i.mdx)("li",{parentName:"ul"},"The ",(0,i.mdx)("strong",{parentName:"li"},(0,i.mdx)("a",{parentName:"strong",href:"/terra-framework/pull/2067/components/cerner-terra-framework-docs/compact-interactive-list/about"},"cells")," property")," provides the row content.\nThe number of cells in a row must be exactly the same as the number of elements in ",(0,i.mdx)("strong",{parentName:"li"},(0,i.mdx)("a",{parentName:"strong",href:"/terra-framework/pull/2067/components/cerner-terra-framework-docs/compact-interactive-list/about"},"columns")," array"),".\nIf a cell is supposed to be empty, the ",(0,i.mdx)("strong",{parentName:"li"},(0,i.mdx)("a",{parentName:"strong",href:"/terra-framework/pull/2067/components/cerner-terra-framework-docs/compact-interactive-list/about"},"content")," property")," must be an empty string.")),(0,i.mdx)("h3",{id:"creating-basic-compact-interactive-list"},"Creating Basic Compact Interactive List"),(0,i.mdx)("h4",{id:"basic-columns-property-example"},"Basic Columns Property Example"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Break row data into semantic columns in a meaningful way. Each semantic column should have as few elements as possible.\nIn the example below, the data is split into following columns: ",(0,i.mdx)("inlineCode",{parentName:"li"},"Icon"),", ",(0,i.mdx)("inlineCode",{parentName:"li"},"Service Name"),", and ",(0,i.mdx)("inlineCode",{parentName:"li"},"Featured"),"."),(0,i.mdx)("li",{parentName:"ul"},"Provide unique ",(0,i.mdx)("strong",{parentName:"li"},(0,i.mdx)("a",{parentName:"strong",href:"/terra-framework/pull/2067/components/cerner-terra-framework-docs/compact-interactive-list/about"},"id")),"\nand meaningful ",(0,i.mdx)("strong",{parentName:"li"},(0,i.mdx)("a",{parentName:"strong",href:"/terra-framework/pull/2067/components/cerner-terra-framework-docs/compact-interactive-list/about"},"displayName")),"\nto all semantic columns. The column headers are hidden, but they are used by assistive technologies, like screen readers, to provide column context."),(0,i.mdx)("li",{parentName:"ul"},"Provide meaningful, identifying row headers. Assistive technologies use these to provide context as a user navigates through rows.")),(0,i.mdx)(l.Notice,{variant:"important",ariaLevel:"3",mdxType:"Notice"},(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Tips for creating meaningful row headers:")),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Select the semantic column that contains unique information (such as name or title), and set the ",(0,i.mdx)("strong",{parentName:"li"},(0,i.mdx)("a",{parentName:"strong",href:"/terra-framework/pull/2067/components/cerner-terra-framework-docs/compact-interactive-list/about"},"rowHeaderIndex")," property")," to the index of that column."),(0,i.mdx)("li",{parentName:"ul"},"Avoid using generic information or interactive elements in cells that are row headers."))),(0,i.mdx)("p",null,"This example demonstrates basic usage of the ",(0,i.mdx)("strong",{parentName:"p"},(0,i.mdx)("a",{parentName:"strong",href:"/terra-framework/pull/2067/components/cerner-terra-framework-docs/compact-interactive-list/about"},"columns")," property"),"."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},"const cols = [\n  {\n    id: 'Column-0',\n    displayName: 'Icon',\n    width: '60px', // width property is not required, it is used to provide a better visual structure\n  },\n  {\n    id: 'Column-1',\n    displayName: 'Service name', // this column info is announced as a row header\n    // omitting width property allows the semanic column to flex and grow or shrink\n  },\n  {\n    id: 'Column-2',\n    displayName: 'Featured',\n    width: '60px', // width property is not required, it is used to provide a better visual structure\n  },\n];\n")),(0,i.mdx)("h4",{id:"basic-rows-prop-example"},"Basic Rows Prop Example"),(0,i.mdx)("p",null,"This example demonstrates basic usage of the ",(0,i.mdx)("strong",{parentName:"p"},(0,i.mdx)("a",{parentName:"strong",href:"/terra-framework/pull/2067/components/cerner-terra-framework-docs/compact-interactive-list/about"},"rows")," property"),". "),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},"const rows = [\n  {\n    id: 'row_1',\n    cells: [\n      { content: iconResultsNormal },\n      { content: 'Discern Care Set (1)' },\n      { content: <FeaturedIcon /> },\n    ],\n  },\n  ... // 4 more row elements\n];\n")),(0,i.mdx)("h4",{id:"basic-compact-interactive-list-example"},"Basic Compact Interactive List Example"),(0,i.mdx)("p",null,"This example demonstrates a basic Compact Interactive List component that consists of five semantic rows, organized into three semantic columns, where the ",(0,i.mdx)("inlineCode",{parentName:"p"},"Service Name")," column is a row header."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},'const DefaultCompactInteractiveList = () => (\n  <CompactInteractiveList\n    id="default-compact-interactive-list"\n    ariaLabel="Default Compact Interactive List"\n    rows={rows}\n    columns={cols}\n    rowHeaderIndex={1} // Specifies \'Service Name\' column as row header for every semantic row.\n  />\n);\n')),(0,i.mdx)(p,{mdxType:"BasicCompactInteractiveList"}),(0,i.mdx)("h4",{id:"compact-interactive-list-with-several-visual-columns"},"Compact Interactive List with Several Visual Columns"),(0,i.mdx)("p",null,"To save space and facilitate faster keyboard navigation, the rows can be organized in visual columns with ",(0,i.mdx)("strong",{parentName:"p"},(0,i.mdx)("a",{parentName:"strong",href:"/terra-framework/pull/2067/components/cerner-terra-framework-docs/compact-interactive-list/about"},"numberOfColumns"),"\nproperty")," set to a number. Visual columns (unlike semantic columns), have visual borders at row ends."),(0,i.mdx)("p",null,"This example demonstrates the same Compact Interactive List component as above (five semantic rows organized into three semantic columns), but this time the rows are split into two visual columns."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},'const DefaultCompactInteractiveList = () => (\n  <CompactInteractiveList\n    id="default-conpact-interactive-list"\n    ariaLabel="Default Compact Interactive List"\n    rows={rows}\n    columns={cols}\n    rowHeaderIndex={1}\n    numberOfColumns={2} // makes 2 visual columns\n  />\n);\n')),(0,i.mdx)(f.A,{title:"Several Visual Columns",mdxType:"ResponsiveColumns"}),(0,i.mdx)("p",null,"Explore the ",(0,i.mdx)("strong",{parentName:"p"},(0,i.mdx)("a",{parentName:"strong",href:"/terra-framework/pull/2067/components/cerner-terra-framework-docs/compact-interactive-list/examples/number-of-columns"},"Number Of Columns")," example")," to learn more."))}x.isMDXComponent=!0},80312:function(e,t,n){n.d(t,{A:function(){return d}});var a=n(96540),r=n(43921),o=n(58168),i=n(53986),l=n(36665),c=["components"],s={};function m(e){var t=e.components,n=(0,i.A)(e,c);return(0,l.mdx)("wrapper",(0,o.A)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React, { useState } from 'react';\nimport CompactInteractiveList, { alignTypes } from 'terra-compact-interactive-list';\nimport {\n  IconFeaturedOff, IconFeatured, IconMultipleResultsNormal, IconMultipleResultsNotNormal, IconMultipleResultsCritical,\n} from 'terra-icon';\nimport Button from 'terra-button';\n\nconst FeaturedIcon = () => {\n  const [isFeatured, setIsFeatured] = useState(false);\n  const onButtonClick = () => setIsFeatured(!isFeatured);\n  return (\n    isFeatured ? <Button variant=\"utility\" text=\"Featured button\" icon={<IconFeatured />} onClick={onButtonClick} /> : <Button variant=\"utility\" text=\"Featured off button\" icon={<IconFeaturedOff />} onClick={onButtonClick} />\n  );\n};\nconst iconResultsNormal = <IconMultipleResultsNormal a11yLabel=\"Results normal\" height=\"1.5em\" width=\"1.5em\" />;\nconst iconResultsNotNormal = <IconMultipleResultsNotNormal a11yLabel=\"Results not normal\" height=\"1.5em\" width=\"1.5em\" />;\nconst iconResultsCritical = <IconMultipleResultsCritical a11yLabel=\"Results critical\" height=\"1.5em\" width=\"1.5em\" />;\n\nconst rows = [\n  {\n    id: 'row_1',\n    cells: [\n      { content: iconResultsNormal },\n      { content: 'Discern Care Set (1)' },\n      { content: <FeaturedIcon /> },\n    ],\n  },\n  {\n    id: 'row_2',\n    cells: [\n      { content: iconResultsNormal },\n      { content: 'Initial observation Care/Day High Severity 99220 (2)' },\n      { content: <FeaturedIcon /> },\n    ],\n  },\n  {\n    id: 'row_3',\n    cells: [\n      { content: iconResultsNotNormal },\n      { content: 'Arterial Sheath Care (3)' },\n      { content: <FeaturedIcon /> },\n    ],\n  },\n  {\n    id: 'row_4',\n    cells: [\n      { content: ' ' },\n      { content: 'Sbsq Observation Care/Day High Severity 99226 (4)' },\n      { content: <FeaturedIcon /> },\n    ],\n  },\n  {\n    id: 'row_5',\n    cells: [\n      { content: iconResultsCritical },\n      { content: 'Arterial Sheath Care (5)' },\n      { content: <FeaturedIcon /> },\n    ],\n  },\n];\n\nconst cols = [\n  {\n    id: 'Column-0',\n    displayName: 'Icon',\n    width: '60px',\n    align: alignTypes.CENTER,\n  },\n  {\n    id: 'Column-1',\n    displayName: 'Service name',\n    width: '200px', // will be used as a css flexBasis\n    flexGrow: true, // makes the column grow or shrink\n  },\n  {\n    id: 'Column-2',\n    displayName: 'Featured',\n    width: '60px',\n    align: alignTypes.CENTER,\n  },\n];\n\nconst ResponsiveColumns = () => (\n  <CompactInteractiveList\n    id=\"compact-interactive-list-responsive-columns\"\n    ariaLabel=\"Compact Interactive List\"\n    rows={rows}\n    columns={cols}\n    numberOfColumns={2}\n    rowHeaderIndex={1}\n  />\n);\n\nexport default ResponsiveColumns;\n\n")))}m.isMDXComponent=!0;var u=n(201),d=function(e){var t=e.title,n=e.description,o=e.isExpanded;return a.createElement(u.A,{title:t||"Responsive Columns",description:n,example:a.createElement(r.A,null),exampleSrc:a.createElement(m,null),isExpanded:o})}},26493:function(e,t,n){var a=n(24994),r=n(73738);t.A=void 0;var o=a(n(85715)),i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=r(e)&&"function"!=typeof e)return{default:e};var n=m(t);if(n&&n.has(e))return n.get(e);var a={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var l=o?Object.getOwnPropertyDescriptor(e,i):null;l&&(l.get||l.set)?Object.defineProperty(a,i,l):a[i]=e[i]}return a.default=e,n&&n.set(e,a),a}(n(96540)),l=a(n(79943)),c=n(33049),s=a(n(23986));function m(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(m=function(e){return e?n:t})(e)}var u=function(){var e=(0,i.useState)(!1),t=(0,o.default)(e,2),n=t[0],a=t[1],r=function(){return a(!n)};return n?i.default.createElement(s.default,{variant:"utility",text:"Featured button",icon:i.default.createElement(c.IconFeatured,null),onClick:r}):i.default.createElement(s.default,{variant:"utility",text:"Featured off button",icon:i.default.createElement(c.IconFeaturedOff,null),onClick:r})},d=i.default.createElement(c.IconMultipleResultsNormal,{a11yLabel:"Results normal",height:"1.5em",width:"1.5em"}),p=i.default.createElement(c.IconMultipleResultsNotNormal,{a11yLabel:"Results not normal",height:"1.5em",width:"1.5em"}),f=i.default.createElement(c.IconMultipleResultsCritical,{a11yLabel:"Results critical",height:"1.5em",width:"1.5em"}),h=[{id:"row_1",cells:[{content:d},{content:"Discern Care Set (1)"},{content:i.default.createElement(u,null)}]},{id:"row_2",cells:[{content:d},{content:"Initial observation Care/Day High Severity 99220 (2)"},{content:i.default.createElement(u,null)}]},{id:"row_3",cells:[{content:p},{content:"Arterial Sheath Care (3)"},{content:i.default.createElement(u,null)}]},{id:"row_4",cells:[{content:" "},{content:"Sbsq Observation Care/Day High Severity 99226 (4)"},{content:i.default.createElement(u,null)}]},{id:"row_5",cells:[{content:f},{content:"Arterial Sheath Care (5)"},{content:i.default.createElement(u,null)}]}],v=[{id:"Column-0",displayName:"Icon",width:"60px"},{id:"Column-1",displayName:"Service name"},{id:"Column-2",displayName:"Featured",width:"60px"}];t.A=function(){return i.default.createElement(l.default,{id:"compact-interactive-list-basic",ariaLabel:"Compact Interactive List",rows:h,columns:v,rowHeaderIndex:1})}},43921:function(e,t,n){var a=n(24994),r=n(73738);t.A=void 0;var o=a(n(85715)),i=u(n(96540)),l=u(n(79943)),c=n(33049),s=a(n(23986));function m(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(m=function(e){return e?n:t})(e)}function u(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=r(e)&&"function"!=typeof e)return{default:e};var n=m(t);if(n&&n.has(e))return n.get(e);var a={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var l=o?Object.getOwnPropertyDescriptor(e,i):null;l&&(l.get||l.set)?Object.defineProperty(a,i,l):a[i]=e[i]}return a.default=e,n&&n.set(e,a),a}var d=function(){var e=(0,i.useState)(!1),t=(0,o.default)(e,2),n=t[0],a=t[1],r=function(){return a(!n)};return n?i.default.createElement(s.default,{variant:"utility",text:"Featured button",icon:i.default.createElement(c.IconFeatured,null),onClick:r}):i.default.createElement(s.default,{variant:"utility",text:"Featured off button",icon:i.default.createElement(c.IconFeaturedOff,null),onClick:r})},p=i.default.createElement(c.IconMultipleResultsNormal,{a11yLabel:"Results normal",height:"1.5em",width:"1.5em"}),f=i.default.createElement(c.IconMultipleResultsNotNormal,{a11yLabel:"Results not normal",height:"1.5em",width:"1.5em"}),h=i.default.createElement(c.IconMultipleResultsCritical,{a11yLabel:"Results critical",height:"1.5em",width:"1.5em"}),v=[{id:"row_1",cells:[{content:p},{content:"Discern Care Set (1)"},{content:i.default.createElement(d,null)}]},{id:"row_2",cells:[{content:p},{content:"Initial observation Care/Day High Severity 99220 (2)"},{content:i.default.createElement(d,null)}]},{id:"row_3",cells:[{content:f},{content:"Arterial Sheath Care (3)"},{content:i.default.createElement(d,null)}]},{id:"row_4",cells:[{content:" "},{content:"Sbsq Observation Care/Day High Severity 99226 (4)"},{content:i.default.createElement(d,null)}]},{id:"row_5",cells:[{content:h},{content:"Arterial Sheath Care (5)"},{content:i.default.createElement(d,null)}]}],w=[{id:"Column-0",displayName:"Icon",width:"60px",align:l.alignTypes.CENTER},{id:"Column-1",displayName:"Service name",width:"200px",flexGrow:!0},{id:"Column-2",displayName:"Featured",width:"60px",align:l.alignTypes.CENTER}];t.A=function(){return i.default.createElement(l.default,{id:"compact-interactive-list-responsive-columns",ariaLabel:"Compact Interactive List",rows:v,columns:w,numberOfColumns:2,rowHeaderIndex:1})}}}]);