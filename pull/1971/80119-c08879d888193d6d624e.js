"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[80119],{49271:function(e,t,n){var a=n(64836),r=n(18698);t.Z=void 0;var o=a(n(27424)),l=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var a={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var i=o?Object.getOwnPropertyDescriptor(e,l):null;i&&(i.get||i.set)?Object.defineProperty(a,l,i):a[l]=e[l]}a.default=e,n&&n.set(e,a);return a}(n(67294)),i=a(n(45697)),c=a(n(47166)),u=n(21538),m=a(n(33864)),s=a(n(23399)),d=n(51051),p=a(n(53560));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}var h=c.default.bind(p.default),_={example:i.default.element,exampleSrc:i.default.element,exampleCssSrc:i.default.element,title:i.default.string,description:i.default.node,isExpanded:i.default.bool},v=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},b=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},x=function(e){var t=e.example,n=e.exampleSrc,a=e.exampleCssSrc,r=e.title,i=e.description,c=e.isExpanded,p=(0,l.useState)(c),f=(0,o.default)(p,2),_=f[0],x=f[1],y=(0,l.useState)(!1),w=(0,o.default)(y,2),N=w[0],g=w[1],E=l.default.useContext(u.ThemeContext),C=void 0!==a,k=function(){g(!N),_&&x(!_)},O=function(){x(!_),N&&g(!N)},I=function(e,t){e.nativeEvent.keyCode!==d.KEY_SPACE&&e.nativeEvent.keyCode!==d.KEY_RETURN||(e.preventDefault(),t())};return l.default.createElement("div",{className:h("template",E.className)},l.default.createElement("div",{className:h("header")},r&&l.default.createElement("h2",{className:h("title")},r)),l.default.createElement("div",{className:h("content")},i&&l.default.createElement("div",{className:h("description")},i),t),l.default.createElement("div",{className:h("footer")},n?l.default.createElement("div",{className:h("button-container")},C&&l.default.createElement("button",{type:"button",className:h("css-toggle","item",{"is-selected":N}),onClick:k,onKeyDown:function(e){return I(e,k)},onBlur:v,onMouseDown:b,tabIndex:0,"data-focus-styles-enabled":!0},l.default.createElement(m.default,{className:h("chevron")}),l.default.createElement("span",null,"CSS"),l.default.createElement(s.default,{className:h("chevron")})),l.default.createElement("button",{type:"button",className:h("code-toggle","item",{"is-selected":_}),onClick:O,onKeyDown:function(e){return I(e,O)},onBlur:v,onMouseDown:b,tabIndex:0,"data-focus-styles-enabled":!0},l.default.createElement(m.default,{className:h("chevron")}),l.default.createElement("span",null,"Code"),l.default.createElement(s.default,{className:h("chevron")}))):null,l.default.createElement("div",null,N&&l.default.createElement("div",{className:h("css")},a),_&&l.default.createElement("div",{className:h("code")},n))))};x.propTypes=_,x.defaultProps={isExpanded:!1};var y=x;t.Z=y},40996:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=u(n(67294)),r=u(n(45697)),o=u(n(47166)),l=u(n(47341)),i=u(n(66983)),c=["children"];function u(e){return e&&e.__esModule?e:{default:e}}function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},m.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=o.default.bind(i.default),p=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},f=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},h={children:r.default.string},_=function(e){var t=e.children,n=s(e,c),r=a.default.useContext(l.default),i=(0,o.default)(d(["button",r.className]),n.className);return a.default.createElement("button",m({},n,{type:"button",className:i,onBlur:p,onMouseDown:f,"data-focus-styles-enabled":!0}),t)};_.propTypes=h;t.default=_},59278:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=c(n(67294)),r=c(n(45697)),o=c(n(47166)),l=c(n(47341)),i=c(n(30866));function c(e){return e&&e.__esModule?e:{default:e}}var u=o.default.bind(i.default),m={ariaLevel:r.default.oneOf(["2","3","4","5","6"]),children:r.default.node,variant:r.default.oneOf(["ux-recommendation","caution","deprecation","maintenance","important","not-supported"])},s=function(e){var t=e.ariaLevel,n=e.variant,r=e.children,o=a.default.useContext(l.default);return a.default.createElement("div",{className:u("notice",n,o.className)},a.default.createElement("div",{className:u("accessory"),"aria-hidden":"true",focusable:"false"}),a.default.createElement("div",{role:"heading",className:u("title"),"aria-level":t},a.default.createElement("span",null,function(e){return"ux-recommendation"===e?"UX Recommendation":"caution"===e?"Caution":"deprecation"===e?"Deprecation Notice":"maintenance"===e?"In Maintenance":"important"===e?"Important":"not-supported"===e?"Hazards for Incorrect Usage":"error"}(n))),a.default.createElement("div",{className:u("children")},function(e){return"not-supported"===e?a.default.createElement(a.default.Fragment,null,a.default.createElement("p",{className:u("paragraph")},"This component was designed and tested according to the documented implementation."),a.default.createElement("p",{className:u("paragraph")},"Using the component incorrectly:",a.default.createElement("ul",{className:u("list")},a.default.createElement("li",null,"will likely result in improper composition and create accessibility issues"),a.default.createElement("li",null,"may cause erratic or broken behaviors and styles"),a.default.createElement("li",null,a.default.createElement("strong",null,"will not be supported "),"or enhanced to allow for incorrect use")))):null}(n),a.default.Children.map(r,(function(e){return"string"==typeof e?a.default.createElement("p",null,e):e}))))};s.propTypes=m,s.defaultProps={ariaLevel:"2",variant:"important"};t.default=s},47306:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=m(n(67294)),r=m(n(45697)),o=m(n(94184)),l=m(n(47166)),i=m(n(47341)),c=m(n(42620)),u=["title"];function m(e){return e&&e.__esModule?e:{default:e}}function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},s.apply(this,arguments)}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=l.default.bind(c.default),f={title:r.default.string},h=function(e){var t=e.title,n=d(e,u),r=a.default.useContext(i.default),l=(0,o.default)(p(["placeholder",r.className]),n.className),c=p(["inner"]);return a.default.createElement("div",s({},n,{className:l}),a.default.createElement("div",{className:c},a.default.createElement("p",{className:p("title")},t)))};h.propTypes=f,h.defaultProps={title:""};t.default=h},34261:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Button",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"Notice",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"Placeholder",{enumerable:!0,get:function(){return r.default}});var a=l(n(59278)),r=l(n(47306)),o=l(n(40996));function l(e){return e&&e.__esModule?e:{default:e}}},68827:function(e,t,n){n.r(t),n.d(t,{default:function(){return N}});var a=n(87462),r=n(44925),o=n(67294),l=n(81254),i=n(34261),c=n(94261),u=["components"],m={};function s(e){var t=e.components,n=(0,r.Z)(e,u);return(0,l.mdx)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React, { useState } from 'react';\nimport CompactInteractiveList, { alignTypes } from 'terra-compact-interactive-list';\nimport {\n  IconFeaturedOff, IconFeatured, IconMultipleResultsNormal, IconMultipleResultsNotNormal, IconMultipleResultsCritical,\n} from 'terra-icon';\nimport Button from 'terra-button';\n\nconst FeaturedIcon = () => {\n  const [isFeatured, setIsFeatured] = useState(false);\n  const onButtonClick = () => setIsFeatured(!isFeatured);\n  return (\n    isFeatured ? <Button variant=\"utility\" text=\"Featured button\" icon={<IconFeatured />} onClick={onButtonClick} /> : <Button variant=\"utility\" text=\"Featured off button\" icon={<IconFeaturedOff />} onClick={onButtonClick} />\n  );\n};\nconst iconResultsNormal = <IconMultipleResultsNormal a11yLabel=\"Results normal\" height=\"1.5em\" width=\"1.5em\" />;\nconst iconResultsNotNormal = <IconMultipleResultsNotNormal a11yLabel=\"Results not normal\" height=\"1.5em\" width=\"1.5em\" />;\nconst iconResultsCritical = <IconMultipleResultsCritical a11yLabel=\"Results critical\" height=\"1.5em\" width=\"1.5em\" />;\n\nconst rows = [\n  {\n    id: 'row_1',\n    cells: [\n      { content: iconResultsNormal },\n      { content: 'Discern Care Set (1)' },\n      { content: <FeaturedIcon /> },\n    ],\n  },\n  {\n    id: 'row_2',\n    cells: [\n      { content: iconResultsNormal },\n      { content: 'Initial observation Care/Day High Severity 99220 (2)' },\n      { content: <FeaturedIcon /> },\n    ],\n  },\n  {\n    id: 'row_3',\n    cells: [\n      { content: iconResultsNotNormal },\n      { content: 'Arterial Sheath Care (3)' },\n      { content: <FeaturedIcon /> },\n    ],\n  },\n  {\n    id: 'row_4',\n    cells: [\n      { content: ' ' },\n      { content: 'Sbsq Observation Care/Day High Severity 99226 (4)' },\n      { content: <FeaturedIcon /> },\n    ],\n  },\n  {\n    id: 'row_5',\n    cells: [\n      { content: iconResultsCritical },\n      { content: 'Arterial Sheath Care (5)' },\n      { content: <FeaturedIcon /> },\n    ],\n  },\n];\n\nconst cols = [\n  {\n    id: 'Column-0',\n    displayName: 'Icon',\n    width: '60px',\n    align: alignTypes.CENTER,\n  },\n  {\n    id: 'Column-1',\n    displayName: 'Service name',\n    width: '200px', // will be used as a css flexBasis\n    flexGrow: true, // makes the column grow or shrink\n  },\n  {\n    id: 'Column-2',\n    displayName: 'Featured',\n    width: '60px',\n    align: alignTypes.CENTER,\n  },\n];\n\nconst ResponsiveColumns = () => (\n  <CompactInteractiveList\n    id=\"with-breakpoints\"\n    ariaLabel=\"Compact Interactive List\"\n    rows={rows}\n    columns={cols}\n    numberOfColumns={2}\n    rowHeaderIndex={1}\n  />\n);\n\nexport default ResponsiveColumns;\n\n")))}s.isMDXComponent=!0;var d=n(49271),p=function(e){var t=e.title,n=e.description,a=e.isExpanded;return o.createElement(d.Z,{title:t||"Responsive Columns",description:n,example:o.createElement(c.Z,null),exampleSrc:o.createElement(s,null),isExpanded:a})},f=n(33832),h=["components"],_={};function v(e){var t=e.components,n=(0,r.Z)(e,h);return(0,l.mdx)("wrapper",(0,a.Z)({},_,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React, { useState } from 'react';\nimport CompactInteractiveList, { alignTypes } from 'terra-compact-interactive-list';\nimport {\n  IconFeaturedOff, IconFeatured, IconMultipleResultsNormal, IconMultipleResultsNotNormal, IconMultipleResultsCritical,\n} from 'terra-icon';\nimport Button from 'terra-button';\n\nconst FeaturedIcon = () => {\n  const [isFeatured, setIsFeatured] = useState(false);\n  const onButtonClick = () => setIsFeatured(!isFeatured);\n  return (\n    isFeatured ? <Button variant=\"utility\" text=\"Featured button\" icon={<IconFeatured />} onClick={onButtonClick} /> : <Button variant=\"utility\" text=\"Featured off button\" icon={<IconFeaturedOff />} onClick={onButtonClick} />\n  );\n};\n\nconst iconResultsNormal = <IconMultipleResultsNormal a11yLabel=\"Results normal\" height=\"1.5em\" width=\"1.5em\" />;\nconst iconResultsNotNormal = <IconMultipleResultsNotNormal a11yLabel=\"Results not normal\" height=\"1.5em\" width=\"1.5em\" />;\nconst iconResultsCritical = <IconMultipleResultsCritical a11yLabel=\"Results critical\" height=\"1.5em\" width=\"1.5em\" />;\n\nconst rows = [\n  {\n    id: 'row_1',\n    cells: [\n      { content: iconResultsNormal },\n      { content: 'Discern Care Set (1)' },\n      { content: <FeaturedIcon /> },\n    ],\n  },\n  {\n    id: 'row_2',\n    cells: [\n      { content: iconResultsNormal },\n      { content: 'Initial observation Care/Day High Severity 99220 (2)' },\n      { content: <FeaturedIcon /> },\n    ],\n  },\n  {\n    id: 'row_3',\n    cells: [\n      { content: iconResultsNotNormal },\n      { content: 'Arterial Sheath Care (3)' },\n      { content: <FeaturedIcon /> },\n    ],\n  },\n  {\n    id: 'row_4',\n    cells: [\n      { content: ' ' },\n      { content: 'Sbsq Observation Care/Day High Severity 99226 (4)' },\n      { content: <FeaturedIcon /> },\n    ],\n  },\n  {\n    id: 'row_5',\n    cells: [\n      { content: iconResultsCritical },\n      { content: 'Arterial Sheath Care (5)' },\n      { content: <FeaturedIcon /> },\n    ],\n  },\n];\n\nconst cols = [\n  {\n    id: 'Column-0',\n    displayName: 'Icon',\n    width: '60px',\n    align: alignTypes.CENTER,\n  },\n  {\n    id: 'Column-1',\n    displayName: 'Service name',\n    width: '300px', // will be used as a css flexBasis\n    flexGrow: true, // makes the column grow or shrink\n    maximumWidth: '400px',\n    minimumWidth: '200px',\n  },\n  {\n    id: 'Column-2',\n    displayName: 'Featured',\n    width: '60px',\n    align: alignTypes.CENTER,\n  },\n];\n\nconst ResponsiveColumnsMaxWidth = () => (\n  <CompactInteractiveList\n    id=\"with-breakpoints\"\n    ariaLabel=\"Compact Interactive List\"\n    rows={rows}\n    columns={cols}\n    numberOfColumns={2}\n    columnMinimumWidth=\"234px\"\n    rowHeaderIndex={1}\n  />\n);\n\nexport default ResponsiveColumnsMaxWidth;\n\n")))}v.isMDXComponent=!0;var b=function(e){var t=e.title,n=e.description,a=e.isExpanded;return o.createElement(d.Z,{title:t||"Responsive Columns Max Width",description:n,example:o.createElement(f.Z,null),exampleSrc:o.createElement(v,null),isExpanded:a})},x=["components"],y={},w="wrapper";function N(e){var t=e.components,n=(0,r.Z)(e,x);return(0,l.mdx)(w,(0,a.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("h1",{id:"responsive-columns"},"Responsive Columns"),(0,l.mdx)("h3",{id:"description"},"Description"),(0,l.mdx)("p",null,"This example demonstrates a ",(0,l.mdx)("a",{parentName:"p",href:"/terra-framework/pull/1971/components/cerner-terra-framework-docs/compact-interactive-list/about"},"Compact Interactive List")," component with responsive columns."),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"The middle semantic column with the text information has the ",(0,l.mdx)("a",{parentName:"li",href:"/terra-framework/pull/1971/components/cerner-terra-framework-docs/compact-interactive-list/about"},"flexGrow")," property set to ",(0,l.mdx)("strong",{parentName:"li"},"true"),", which allows the column to expand to fill the container's width."),(0,l.mdx)("li",{parentName:"ul"},"The maximum width for the text column is unlimited because the ",(0,l.mdx)("a",{parentName:"li",href:"/terra-framework/pull/1971/components/cerner-terra-framework-docs/compact-interactive-list/about"},"maximumWidth")," property is not set."),(0,l.mdx)("li",{parentName:"ul"},"The minimum width uses the default value because the ",(0,l.mdx)("a",{parentName:"li",href:"/terra-framework/pull/1971/components/cerner-terra-framework-docs/compact-interactive-list/about"},"minimumWidth")," property is not set."),(0,l.mdx)("li",{parentName:"ul"},"Once the list reaches its minimum width, defined by the fixed width columns and the default minimum width of the flex expanding column, the scrollbar is displayed.")),(0,l.mdx)(p,{mdxType:"ResponsiveColumns"}),(0,l.mdx)("h3",{id:"usage"},"Usage"),(0,l.mdx)("h4",{id:"create-a-responsive-column"},"Create a Responsive Column"),(0,l.mdx)("p",null,"Use one of the following methods to make a sematic column responsive:"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Omit the ",(0,l.mdx)("a",{parentName:"li",href:"/terra-framework/pull/1971/components/cerner-terra-framework-docs/compact-interactive-list/about"},"width")," property to make a semantic column expand or shrink to fill all available space."),(0,l.mdx)("li",{parentName:"ul"},"Set the ",(0,l.mdx)("a",{parentName:"li",href:"/terra-framework/pull/1971/components/cerner-terra-framework-docs/compact-interactive-list/about"},"flexGrow")," property to ",(0,l.mdx)("strong",{parentName:"li"},"true")," with the ",(0,l.mdx)("a",{parentName:"li",href:"/terra-framework/pull/1971/components/cerner-terra-framework-docs/compact-interactive-list/about"},"width")," property set to a number that also makes the column responsive.\nIf you keep ",(0,l.mdx)("a",{parentName:"li",href:"/terra-framework/pull/1971/components/cerner-terra-framework-docs/compact-interactive-list/about"},"width"),", the property can be used as a ",(0,l.mdx)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/flex-basis"},"flex basis"),".")),(0,l.mdx)("h4",{id:"control-maximum-and-minimum-width"},"Control Maximum and Minimum Width"),(0,l.mdx)(i.Notice,{variant:"important",ariaLevel:"3",mdxType:"Notice"},(0,l.mdx)("p",null,"The supported units for width properties are ",(0,l.mdx)("inlineCode",{parentName:"p"},"px"),", ",(0,l.mdx)("inlineCode",{parentName:"p"},"em"),", and ",(0,l.mdx)("inlineCode",{parentName:"p"},"rem"),".\nEnsure that the width units are consistent across all properties in the same component. The width properties are\n",(0,l.mdx)("a",{parentName:"p",href:"/terra-framework/pull/1971/components/cerner-terra-framework-docs/compact-interactive-list/about"},"columnMinimumWidth"),",\n",(0,l.mdx)("a",{parentName:"p",href:"/terra-framework/pull/1971/components/cerner-terra-framework-docs/compact-interactive-list/about"},"columnMaximumWidth"),",\n",(0,l.mdx)("a",{parentName:"p",href:"/terra-framework/pull/1971/components/cerner-terra-framework-docs/compact-interactive-list/about"},"width"),",\n",(0,l.mdx)("a",{parentName:"p",href:"/terra-framework/pull/1971/components/cerner-terra-framework-docs/compact-interactive-list/about"},"minimumWidth"),", and\n",(0,l.mdx)("a",{parentName:"p",href:"/terra-framework/pull/1971/components/cerner-terra-framework-docs/compact-interactive-list/about"},"maximumWidth"),".\nWidth units inconsistent with the rest of the component properties are disregarded.")),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"To control the minimum and maximum width of all flexible columns in the component, use the\n",(0,l.mdx)("a",{parentName:"li",href:"/terra-framework/pull/1971/components/cerner-terra-framework-docs/compact-interactive-list/about"},"columnMaximumWidth")," and\n",(0,l.mdx)("a",{parentName:"li",href:"/terra-framework/pull/1971/components/cerner-terra-framework-docs/compact-interactive-list/about"},"columnMinimumWidth")," properties.\nIf the ",(0,l.mdx)("a",{parentName:"li",href:"/terra-framework/pull/1971/components/cerner-terra-framework-docs/compact-interactive-list/about"},"columnMinimumWidth")," property is not set, the default value is used."),(0,l.mdx)("li",{parentName:"ul"},"Alternatively, you can individually pass the ",(0,l.mdx)("a",{parentName:"li",href:"/terra-framework/pull/1971/components/cerner-terra-framework-docs/compact-interactive-list/about"},"minimumWidth")," and ",(0,l.mdx)("a",{parentName:"li",href:"/terra-framework/pull/1971/components/cerner-terra-framework-docs/compact-interactive-list/about"},"maximumWidth")," to a column, which provides more flexibility. ")),(0,l.mdx)("p",null,"In the following example, the text column has the maximumWidth set to ",(0,l.mdx)("strong",{parentName:"p"},"400px")," and minimumWidth set to ",(0,l.mdx)("strong",{parentName:"p"},"200px"),":"),(0,l.mdx)(b,{mdxType:"ResponsiveColumnsMaxWidth"}))}N.isMDXComponent=!0},94261:function(e,t,n){var a=n(64836),r=n(18698);t.Z=void 0;var o=a(n(27424)),l=s(n(67294)),i=s(n(31915)),c=n(34614),u=a(n(55281));function m(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(m=function(e){return e?n:t})(e)}function s(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=r(e)&&"function"!=typeof e)return{default:e};var n=m(t);if(n&&n.has(e))return n.get(e);var a={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var i=o?Object.getOwnPropertyDescriptor(e,l):null;i&&(i.get||i.set)?Object.defineProperty(a,l,i):a[l]=e[l]}return a.default=e,n&&n.set(e,a),a}var d=function(){var e=(0,l.useState)(!1),t=(0,o.default)(e,2),n=t[0],a=t[1],r=function(){return a(!n)};return n?l.default.createElement(u.default,{variant:"utility",text:"Featured button",icon:l.default.createElement(c.IconFeatured,null),onClick:r}):l.default.createElement(u.default,{variant:"utility",text:"Featured off button",icon:l.default.createElement(c.IconFeaturedOff,null),onClick:r})},p=l.default.createElement(c.IconMultipleResultsNormal,{a11yLabel:"Results normal",height:"1.5em",width:"1.5em"}),f=l.default.createElement(c.IconMultipleResultsNotNormal,{a11yLabel:"Results not normal",height:"1.5em",width:"1.5em"}),h=l.default.createElement(c.IconMultipleResultsCritical,{a11yLabel:"Results critical",height:"1.5em",width:"1.5em"}),_=[{id:"row_1",cells:[{content:p},{content:"Discern Care Set (1)"},{content:l.default.createElement(d,null)}]},{id:"row_2",cells:[{content:p},{content:"Initial observation Care/Day High Severity 99220 (2)"},{content:l.default.createElement(d,null)}]},{id:"row_3",cells:[{content:f},{content:"Arterial Sheath Care (3)"},{content:l.default.createElement(d,null)}]},{id:"row_4",cells:[{content:" "},{content:"Sbsq Observation Care/Day High Severity 99226 (4)"},{content:l.default.createElement(d,null)}]},{id:"row_5",cells:[{content:h},{content:"Arterial Sheath Care (5)"},{content:l.default.createElement(d,null)}]}],v=[{id:"Column-0",displayName:"Icon",width:"60px",align:i.alignTypes.CENTER},{id:"Column-1",displayName:"Service name",width:"200px",flexGrow:!0},{id:"Column-2",displayName:"Featured",width:"60px",align:i.alignTypes.CENTER}];t.Z=function(){return l.default.createElement(i.default,{id:"with-breakpoints",ariaLabel:"Compact Interactive List",rows:_,columns:v,numberOfColumns:2,rowHeaderIndex:1})}},33832:function(e,t,n){var a=n(64836),r=n(18698);t.Z=void 0;var o=a(n(27424)),l=s(n(67294)),i=s(n(31915)),c=n(34614),u=a(n(55281));function m(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(m=function(e){return e?n:t})(e)}function s(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=r(e)&&"function"!=typeof e)return{default:e};var n=m(t);if(n&&n.has(e))return n.get(e);var a={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var i=o?Object.getOwnPropertyDescriptor(e,l):null;i&&(i.get||i.set)?Object.defineProperty(a,l,i):a[l]=e[l]}return a.default=e,n&&n.set(e,a),a}var d=function(){var e=(0,l.useState)(!1),t=(0,o.default)(e,2),n=t[0],a=t[1],r=function(){return a(!n)};return n?l.default.createElement(u.default,{variant:"utility",text:"Featured button",icon:l.default.createElement(c.IconFeatured,null),onClick:r}):l.default.createElement(u.default,{variant:"utility",text:"Featured off button",icon:l.default.createElement(c.IconFeaturedOff,null),onClick:r})},p=l.default.createElement(c.IconMultipleResultsNormal,{a11yLabel:"Results normal",height:"1.5em",width:"1.5em"}),f=l.default.createElement(c.IconMultipleResultsNotNormal,{a11yLabel:"Results not normal",height:"1.5em",width:"1.5em"}),h=l.default.createElement(c.IconMultipleResultsCritical,{a11yLabel:"Results critical",height:"1.5em",width:"1.5em"}),_=[{id:"row_1",cells:[{content:p},{content:"Discern Care Set (1)"},{content:l.default.createElement(d,null)}]},{id:"row_2",cells:[{content:p},{content:"Initial observation Care/Day High Severity 99220 (2)"},{content:l.default.createElement(d,null)}]},{id:"row_3",cells:[{content:f},{content:"Arterial Sheath Care (3)"},{content:l.default.createElement(d,null)}]},{id:"row_4",cells:[{content:" "},{content:"Sbsq Observation Care/Day High Severity 99226 (4)"},{content:l.default.createElement(d,null)}]},{id:"row_5",cells:[{content:h},{content:"Arterial Sheath Care (5)"},{content:l.default.createElement(d,null)}]}],v=[{id:"Column-0",displayName:"Icon",width:"60px",align:i.alignTypes.CENTER},{id:"Column-1",displayName:"Service name",width:"300px",flexGrow:!0,maximumWidth:"400px",minimumWidth:"200px"},{id:"Column-2",displayName:"Featured",width:"60px",align:i.alignTypes.CENTER}];t.Z=function(){return l.default.createElement(i.default,{id:"with-breakpoints",ariaLabel:"Compact Interactive List",rows:_,columns:v,numberOfColumns:2,columnMinimumWidth:"234px",rowHeaderIndex:1})}},53560:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},66983:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Button-module__clinical-lowlight-theme___TyZWB","orion-fusion-theme":"Button-module__orion-fusion-theme___q-FcQ",button:"Button-module__button___QuCn2","is-active":"Button-module__is-active___Z8AuK"}},30866:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Notice-module__clinical-lowlight-theme___aa5xV","orion-fusion-theme":"Notice-module__orion-fusion-theme___QAE-T",notice:"Notice-module__notice___GWkPA",children:"Notice-module__children___lDYsm",accessory:"Notice-module__accessory___wkLOG",title:"Notice-module__title___6H5tc","ux-recommendation":"Notice-module__ux-recommendation___N8BuK",caution:"Notice-module__caution___hPrVl",deprecation:"Notice-module__deprecation___g1drA",maintenance:"Notice-module__maintenance___kWLIZ",important:"Notice-module__important___p5DiF","not-supported":"Notice-module__not-supported___34bHd",paragraph:"Notice-module__paragraph___5h-w1",list:"Notice-module__list___M2Kxj"}},42620:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Placeholder-module__clinical-lowlight-theme___Obm9K","orion-fusion-theme":"Placeholder-module__orion-fusion-theme___svHY+",placeholder:"Placeholder-module__placeholder___ZZDXd",inner:"Placeholder-module__inner___fJq9o",title:"Placeholder-module__title___teBSo"}},87462:function(e,t,n){function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},a.apply(this,arguments)}n.d(t,{Z:function(){return a}})},44925:function(e,t,n){function a(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}n.d(t,{Z:function(){return a}})},15785:function(e,t,n){function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function r(e){return function(e){if(Array.isArray(e))return a(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(t,{Z:function(){return r}})}}]);