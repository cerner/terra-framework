"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[80119],{49271:function(e,t,n){var r=n(64836),a=n(18698);t.Z=void 0;var o=r(n(27424)),l=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var i=o?Object.getOwnPropertyDescriptor(e,l):null;i&&(i.get||i.set)?Object.defineProperty(r,l,i):r[l]=e[l]}r.default=e,n&&n.set(e,r);return r}(n(67294)),i=r(n(45697)),c=r(n(47166)),s=n(21538),u=r(n(33864)),m=r(n(23399)),d=n(51051),p=r(n(53560));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}var h=c.default.bind(p.default),w={example:i.default.element,exampleSrc:i.default.element,exampleCssSrc:i.default.element,title:i.default.string,description:i.default.node,isExpanded:i.default.bool},_=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},b=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},x=function(e){var t=e.example,n=e.exampleSrc,r=e.exampleCssSrc,a=e.title,i=e.description,c=e.isExpanded,p=(0,l.useState)(c),f=(0,o.default)(p,2),w=f[0],x=f[1],y=(0,l.useState)(!1),v=(0,o.default)(y,2),g=v[0],N=v[1],O=l.default.useContext(s.ThemeContext),C=void 0!==r,R=function(){N(!g),w&&x(!w)},E=function(){x(!w),g&&N(!g)},I=function(e,t){e.nativeEvent.keyCode!==d.KEY_SPACE&&e.nativeEvent.keyCode!==d.KEY_RETURN||(e.preventDefault(),t())};return l.default.createElement("div",{className:h("template",O.className)},l.default.createElement("div",{className:h("header")},a&&l.default.createElement("h2",{className:h("title")},a)),l.default.createElement("div",{className:h("content")},i&&l.default.createElement("div",{className:h("description")},i),t),l.default.createElement("div",{className:h("footer")},n?l.default.createElement("div",{className:h("button-container")},C&&l.default.createElement("button",{type:"button",className:h("css-toggle","item",{"is-selected":g}),onClick:R,onKeyDown:function(e){return I(e,R)},onBlur:_,onMouseDown:b,tabIndex:0,"data-focus-styles-enabled":!0},l.default.createElement(u.default,{className:h("chevron")}),l.default.createElement("span",null,"CSS"),l.default.createElement(m.default,{className:h("chevron")})),l.default.createElement("button",{type:"button",className:h("code-toggle","item",{"is-selected":w}),onClick:E,onKeyDown:function(e){return I(e,E)},onBlur:_,onMouseDown:b,tabIndex:0,"data-focus-styles-enabled":!0},l.default.createElement(u.default,{className:h("chevron")}),l.default.createElement("span",null,"Code"),l.default.createElement(m.default,{className:h("chevron")}))):null,l.default.createElement("div",null,g&&l.default.createElement("div",{className:h("css")},r),w&&l.default.createElement("div",{className:h("code")},n))))};x.propTypes=w,x.defaultProps={isExpanded:!1};var y=x;t.Z=y},40996:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=s(n(67294)),a=s(n(45697)),o=s(n(47166)),l=s(n(47341)),i=s(n(66983)),c=["children"];function s(e){return e&&e.__esModule?e:{default:e}}function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u.apply(this,arguments)}function m(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=o.default.bind(i.default),p=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},f=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},h={children:a.default.string},w=function(e){var t=e.children,n=m(e,c),a=r.default.useContext(l.default),i=(0,o.default)(d(["button",a.className]),n.className);return r.default.createElement("button",u({},n,{type:"button",className:i,onBlur:p,onMouseDown:f,"data-focus-styles-enabled":!0}),t)};w.propTypes=h;t.default=w},59278:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=c(n(67294)),a=c(n(45697)),o=c(n(47166)),l=c(n(47341)),i=c(n(30866));function c(e){return e&&e.__esModule?e:{default:e}}var s=o.default.bind(i.default),u={ariaLevel:a.default.oneOf(["2","3","4","5","6"]),children:a.default.node,variant:a.default.oneOf(["ux-recommendation","caution","deprecation","maintenance","important","not-supported"])},m=function(e){var t=e.ariaLevel,n=e.variant,a=e.children,o=r.default.useContext(l.default);return r.default.createElement("div",{className:s("notice",n,o.className)},r.default.createElement("div",{className:s("accessory"),"aria-hidden":"true",focusable:"false"}),r.default.createElement("div",{role:"heading",className:s("title"),"aria-level":t},r.default.createElement("span",null,function(e){return"ux-recommendation"===e?"UX Recommendation":"caution"===e?"Caution":"deprecation"===e?"Deprecation Notice":"maintenance"===e?"In Maintenance":"important"===e?"Important":"not-supported"===e?"Hazards for Incorrect Usage":"error"}(n))),r.default.createElement("div",{className:s("children")},function(e){return"not-supported"===e?r.default.createElement(r.default.Fragment,null,r.default.createElement("p",{className:s("paragraph")},"This component was designed and tested according to the documented implementation."),r.default.createElement("p",{className:s("paragraph")},"Using the component incorrectly:",r.default.createElement("ul",{className:s("list")},r.default.createElement("li",null,"will likely result in improper composition and create accessibility issues"),r.default.createElement("li",null,"may cause erratic or broken behaviors and styles"),r.default.createElement("li",null,r.default.createElement("strong",null,"will not be supported "),"or enhanced to allow for incorrect use")))):null}(n),r.default.Children.map(a,(function(e){return"string"==typeof e?r.default.createElement("p",null,e):e}))))};m.propTypes=u,m.defaultProps={ariaLevel:"2",variant:"important"};t.default=m},47306:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(n(67294)),a=u(n(45697)),o=u(n(94184)),l=u(n(47166)),i=u(n(47341)),c=u(n(42620)),s=["title"];function u(e){return e&&e.__esModule?e:{default:e}}function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},m.apply(this,arguments)}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=l.default.bind(c.default),f={title:a.default.string},h=function(e){var t=e.title,n=d(e,s),a=r.default.useContext(i.default),l=(0,o.default)(p(["placeholder",a.className]),n.className),c=p(["inner"]);return r.default.createElement("div",m({},n,{className:l}),r.default.createElement("div",{className:c},r.default.createElement("p",{className:p("title")},t)))};h.propTypes=f,h.defaultProps={title:""};t.default=h},34261:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Button",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"Notice",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"Placeholder",{enumerable:!0,get:function(){return a.default}});var r=l(n(59278)),a=l(n(47306)),o=l(n(40996));function l(e){return e&&e.__esModule?e:{default:e}}},68827:function(e,t,n){n.r(t),n.d(t,{default:function(){return g}});var r=n(87462),a=n(44925),o=n(67294),l=n(81254),i=n(34261),c=n(94261),s=["components"],u={};function m(e){var t=e.components,n=(0,a.Z)(e,s);return(0,l.mdx)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React, { useState } from 'react';\nimport CompactInteractiveList, { alignTypes } from 'terra-compact-interactive-list';\nimport {\n  IconFeaturedOff, IconFeatured, IconMultipleResultsNormal, IconMultipleResultsNotNormal, IconMultipleResultsCritical,\n} from 'terra-icon';\n\nconst iconFeaturedOff = <IconFeaturedOff a11yLabel=\"Featured off\" height=\"1.5em\" width=\"1.5em\" />;\nconst iconFeatured = <IconFeatured a11yLabel=\"Featured\" height=\"1.5em\" width=\"1.5em\" />;\nconst iconResultsNormal = <IconMultipleResultsNormal a11yLabel=\"Results normal\" height=\"1.5em\" width=\"1.5em\" />;\nconst iconResultsNotNormal = <IconMultipleResultsNotNormal a11yLabel=\"Results not normal\" height=\"1.5em\" width=\"1.5em\" />;\nconst iconResultsCritical = <IconMultipleResultsCritical a11yLabel=\"Results critical\" height=\"1.5em\" width=\"1.5em\" />;\n\nconst rows = [\n  {\n    id: 'row_1',\n    cells: [\n      { content: iconResultsNormal },\n      { content: 'Discern Care Set (1)' },\n      { content: '' },\n    ],\n  },\n  {\n    id: 'row_2',\n    cells: [\n      { content: iconResultsNormal },\n      { content: 'Initial observation Care/Day High Severity 99220 (2)' },\n      { content: '' },\n    ],\n  },\n  {\n    id: 'row_3',\n    cells: [\n      { content: iconResultsNotNormal },\n      { content: 'Arterial Sheath Care (3)' },\n      { content: '' },\n    ],\n  },\n  {\n    id: 'row_4',\n    cells: [\n      { content: ' ' },\n      { content: 'Sbsq Observation Care/Day High Severity 99226 (4)' },\n      { content: ' ' },\n    ],\n  },\n  {\n    id: 'row_5',\n    cells: [\n      { content: iconResultsCritical },\n      { content: 'Arterial Sheath Care (5)' },\n      { content: '' },\n    ],\n  },\n];\n\nconst calculateRows = (featuredRowsIds) => {\n  const calculatedRows = [...rows];\n  return calculatedRows.map(row => {\n    const newRow = { ...row, cells: [...row.cells] };\n    if (featuredRowsIds.indexOf(row.id) >= 0) {\n      newRow.cells[2] = { ...row.cells[2], content: iconFeatured };\n    } else { newRow.cells[2] = { ...row.cells[2], content: iconFeaturedOff }; }\n    return newRow;\n  });\n};\n\nconst cols = [\n  {\n    id: 'Column-0',\n    displayName: 'Icon',\n    width: '60px',\n    align: alignTypes.CENTER,\n  },\n  {\n    id: 'Column-1',\n    displayName: 'Service name',\n    width: '200px', // will be used as a css flexBasis\n    flexGrow: true, // makes the column grow or shrink\n  },\n  {\n    id: 'Column-2',\n    displayName: 'Featured',\n    width: '60px',\n    align: alignTypes.CENTER,\n  },\n];\n\nconst ResponsiveColumns = () => {\n  const [featuredRowsIds, setFeaturedRowsIds] = useState([]);\n  const displayedRows = calculateRows(featuredRowsIds);\n\n  const onCellSelect = ({ rowId, columnId }) => {\n    if (columnId === cols[2].id) {\n      const newSelectedRows = [...featuredRowsIds];\n      const index = newSelectedRows.findIndex(row => row === rowId);\n      if (index >= 0) {\n        newSelectedRows.splice(index, 1);\n      } else {\n        newSelectedRows.push(rowId);\n      }\n      setFeaturedRowsIds(newSelectedRows);\n    }\n  };\n\n  const onClearSelection = () => {\n    setFeaturedRowsIds([]);\n  };\n\n  return (\n    <CompactInteractiveList\n      id=\"with-breakpoints\"\n      rows={displayedRows}\n      columns={cols}\n      numberOfColumns={2}\n      rowHeaderIndex={1}\n      onCellSelect={onCellSelect}\n      onClearSelection={onClearSelection}\n    />\n  );\n};\n\nexport default ResponsiveColumns;\n\n")))}m.isMDXComponent=!0;var d=n(49271),p=function(e){var t=e.title,n=e.description,r=e.isExpanded;return o.createElement(d.Z,{title:t||"Responsive Columns",description:n,example:o.createElement(c.Z,null),exampleSrc:o.createElement(m,null),isExpanded:r})},f=n(33832),h=["components"],w={};function _(e){var t=e.components,n=(0,a.Z)(e,h);return(0,l.mdx)("wrapper",(0,r.Z)({},w,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React, { useState } from 'react';\nimport CompactInteractiveList, { alignTypes } from 'terra-compact-interactive-list';\nimport {\n  IconFeaturedOff, IconFeatured, IconMultipleResultsNormal, IconMultipleResultsNotNormal, IconMultipleResultsCritical,\n} from 'terra-icon';\n\nconst iconFeaturedOff = <IconFeaturedOff a11yLabel=\"Featured off\" height=\"1.5em\" width=\"1.5em\" />;\nconst iconFeatured = <IconFeatured a11yLabel=\"Featured\" height=\"1.5em\" width=\"1.5em\" />;\nconst iconResultsNormal = <IconMultipleResultsNormal a11yLabel=\"Results normal\" height=\"1.5em\" width=\"1.5em\" />;\nconst iconResultsNotNormal = <IconMultipleResultsNotNormal a11yLabel=\"Results not normal\" height=\"1.5em\" width=\"1.5em\" />;\nconst iconResultsCritical = <IconMultipleResultsCritical a11yLabel=\"Results critical\" height=\"1.5em\" width=\"1.5em\" />;\n\nconst rows = [\n  {\n    id: 'row_1',\n    cells: [\n      { content: iconResultsNormal },\n      { content: 'Discern Care Set (1)' },\n      { content: '' },\n    ],\n  },\n  {\n    id: 'row_2',\n    cells: [\n      { content: iconResultsNormal },\n      { content: 'Initial observation Care/Day High Severity 99220 (2)' },\n      { content: '' },\n    ],\n  },\n  {\n    id: 'row_3',\n    cells: [\n      { content: iconResultsNotNormal },\n      { content: 'Arterial Sheath Care (3)' },\n      { content: '' },\n    ],\n  },\n  {\n    id: 'row_4',\n    cells: [\n      { content: ' ' },\n      { content: 'Sbsq Observation Care/Day High Severity 99226 (4)' },\n      { content: ' ' },\n    ],\n  },\n  {\n    id: 'row_5',\n    cells: [\n      { content: iconResultsCritical },\n      { content: 'Arterial Sheath Care (5)' },\n      { content: '' },\n    ],\n  },\n];\n\nconst calculateRows = (featuredRowsIds) => {\n  const calculatedRows = [...rows];\n  return calculatedRows.map(row => {\n    const newRow = { ...row, cells: [...row.cells] };\n    if (featuredRowsIds.indexOf(row.id) >= 0) {\n      newRow.cells[2] = { ...row.cells[2], content: iconFeatured };\n    } else { newRow.cells[2] = { ...row.cells[2], content: iconFeaturedOff }; }\n    return newRow;\n  });\n};\n\nconst cols = [\n  {\n    id: 'Column-0',\n    displayName: 'Icon',\n    width: '60px',\n    align: alignTypes.CENTER,\n  },\n  {\n    id: 'Column-1',\n    displayName: 'Service name',\n    width: '300px', // will be used as a css flexBasis\n    flexGrow: true, // makes the column grow or shrink\n    maximumWidth: '400px',\n    minimumWidth: '200px',\n  },\n  {\n    id: 'Column-2',\n    displayName: 'Featured',\n    width: '60px',\n    align: alignTypes.CENTER,\n  },\n];\n\nconst ResponsiveColumnsMaxWidth = () => {\n  const [featuredRowsIds, setFeaturedRowsIds] = useState([]);\n  const displayedRows = calculateRows(featuredRowsIds);\n\n  const onCellSelect = ({ rowId, columnId }) => {\n    if (columnId === cols[2].id) {\n      const newSelectedRows = [...featuredRowsIds];\n      const index = newSelectedRows.findIndex(row => row === rowId);\n      if (index >= 0) {\n        newSelectedRows.splice(index, 1);\n      } else {\n        newSelectedRows.push(rowId);\n      }\n      setFeaturedRowsIds(newSelectedRows);\n    }\n  };\n\n  const onClearSelection = () => {\n    setFeaturedRowsIds([]);\n  };\n\n  return (\n    <CompactInteractiveList\n      id=\"with-breakpoints\"\n      rows={displayedRows}\n      columns={cols}\n      numberOfColumns={2}\n      columnMinimumWidth=\"234px\"\n      rowHeaderIndex={1}\n      onCellSelect={onCellSelect}\n      onClearSelection={onClearSelection}\n    />\n  );\n};\n\nexport default ResponsiveColumnsMaxWidth;\n\n")))}_.isMDXComponent=!0;var b=function(e){var t=e.title,n=e.description,r=e.isExpanded;return o.createElement(d.Z,{title:t||"Responsive Columns Max Width",description:n,example:o.createElement(f.Z,null),exampleSrc:o.createElement(_,null),isExpanded:r})},x=["components"],y={},v="wrapper";function g(e){var t=e.components,n=(0,a.Z)(e,x);return(0,l.mdx)(v,(0,r.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("h1",{id:"responsive-columns"},"Responsive Columns"),(0,l.mdx)("h3",{id:"description"},"Description"),(0,l.mdx)("p",null,"This example demonstrates a ",(0,l.mdx)("a",{parentName:"p",href:"/terra-framework/pull/1949/components/cerner-terra-framework-docs/compact-interactive-list/about"},"Compact Interactive List")," with responsive columns."),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"The middle semantic column with the text information has ",(0,l.mdx)("a",{parentName:"li",href:"/terra-framework/pull/1949/components/cerner-terra-framework-docs/compact-interactive-list/about"},(0,l.mdx)("em",{parentName:"a"},"flexGrow"))," prop set to ",(0,l.mdx)("inlineCode",{parentName:"li"},"true")," which allows it to grow to fill up the container's width."),(0,l.mdx)("li",{parentName:"ul"},"The maximum width for the text column is not limited, as the ",(0,l.mdx)("a",{parentName:"li",href:"/terra-framework/pull/1949/components/cerner-terra-framework-docs/compact-interactive-list/about"},(0,l.mdx)("em",{parentName:"a"},"maximumWidth"))," property is not set."),(0,l.mdx)("li",{parentName:"ul"},"The minimum width would take the default value as ",(0,l.mdx)("a",{parentName:"li",href:"/terra-framework/pull/1949/components/cerner-terra-framework-docs/compact-interactive-list/about"},(0,l.mdx)("em",{parentName:"a"},"minimumWidth"))," property is not set."),(0,l.mdx)("li",{parentName:"ul"},"Once the list reaches its minimum width, defined by fixed width columns and the default minimum width of the flex growing column, the scroll shows up.")),(0,l.mdx)(p,{mdxType:"ResponsiveColumns"}),(0,l.mdx)("h3",{id:"usage"},"Usage"),(0,l.mdx)("h4",{id:"creating-a-responsive-column"},"Creating a Responsive Column"),(0,l.mdx)("p",null,"There are two ways to make a sematic column responsive:"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Omitting the ",(0,l.mdx)("a",{parentName:"li",href:"/terra-framework/pull/1949/components/cerner-terra-framework-docs/compact-interactive-list/about"},(0,l.mdx)("em",{parentName:"a"},"width"))," prop will make a semantic column grow or shrink to take all available space."),(0,l.mdx)("li",{parentName:"ul"},"Setting the ",(0,l.mdx)("a",{parentName:"li",href:"/terra-framework/pull/1949/components/cerner-terra-framework-docs/compact-interactive-list/about"},(0,l.mdx)("em",{parentName:"a"},"flexGrow"))," prop to ",(0,l.mdx)("inlineCode",{parentName:"li"},"true")," with the ",(0,l.mdx)("a",{parentName:"li",href:"/terra-framework/pull/1949/components/cerner-terra-framework-docs/compact-interactive-list/about"},(0,l.mdx)("em",{parentName:"a"},"width"))," set to a number will also make the column responsive.\nKeeping ",(0,l.mdx)("a",{parentName:"li",href:"/terra-framework/pull/1949/components/cerner-terra-framework-docs/compact-interactive-list/about"},(0,l.mdx)("em",{parentName:"a"},"width"))," is beneficial as it will be used as a ",(0,l.mdx)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/flex-basis"},"flex basis"),".")),(0,l.mdx)("h4",{id:"controlling-maximum-and-minimum-width"},"Controlling Maximum and Minimum Width"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"To control the minimum and maximum width of all flexible columns in the component, use\n",(0,l.mdx)("a",{parentName:"li",href:"/terra-framework/pull/1949/components/cerner-terra-framework-docs/compact-interactive-list/about"},(0,l.mdx)("em",{parentName:"a"},"columnMaximumWidth"))," and\n",(0,l.mdx)("a",{parentName:"li",href:"/terra-framework/pull/1949/components/cerner-terra-framework-docs/compact-interactive-list/about"},(0,l.mdx)("em",{parentName:"a"},"columnMinimumWidth"))," props.\nIf ",(0,l.mdx)("a",{parentName:"li",href:"/terra-framework/pull/1949/components/cerner-terra-framework-docs/compact-interactive-list/about"},(0,l.mdx)("em",{parentName:"a"},"columnMinimumWidth"))," prop hasn't been set, the default value will be used."),(0,l.mdx)("li",{parentName:"ul"},"Alternatively, the ",(0,l.mdx)("a",{parentName:"li",href:"/terra-framework/pull/1949/components/cerner-terra-framework-docs/compact-interactive-list/about"},(0,l.mdx)("em",{parentName:"a"},"minimumWidth"))," and ",(0,l.mdx)("a",{parentName:"li",href:"/terra-framework/pull/1949/components/cerner-terra-framework-docs/compact-interactive-list/about"},(0,l.mdx)("em",{parentName:"a"},"maximumWidth"))," passed individually to a column, provides more flexibility. ")),(0,l.mdx)(i.Notice,{variant:"important",ariaLevel:"3",mdxType:"Notice"},(0,l.mdx)("p",null,"The supported units for width props are ",(0,l.mdx)("inlineCode",{parentName:"p"},"px"),", ",(0,l.mdx)("inlineCode",{parentName:"p"},"em"),", and ",(0,l.mdx)("inlineCode",{parentName:"p"},"rem"),".\nThe width units should be consistent across all the props in the same component. That includes:\n",(0,l.mdx)("a",{parentName:"p",href:"/terra-framework/pull/1949/components/cerner-terra-framework-docs/compact-interactive-list/about"},(0,l.mdx)("em",{parentName:"a"},"columnMinimumWidth")),",\n",(0,l.mdx)("a",{parentName:"p",href:"/terra-framework/pull/1949/components/cerner-terra-framework-docs/compact-interactive-list/about"},(0,l.mdx)("em",{parentName:"a"},"columnMaximumWidth")),",\n",(0,l.mdx)("a",{parentName:"p",href:"/terra-framework/pull/1949/components/cerner-terra-framework-docs/compact-interactive-list/about"},(0,l.mdx)("em",{parentName:"a"},"width")),",\n",(0,l.mdx)("a",{parentName:"p",href:"/terra-framework/pull/1949/components/cerner-terra-framework-docs/compact-interactive-list/about"},(0,l.mdx)("em",{parentName:"a"},"minimumWidth")),", and\n",(0,l.mdx)("a",{parentName:"p",href:"/terra-framework/pull/1949/components/cerner-terra-framework-docs/compact-interactive-list/about"},(0,l.mdx)("em",{parentName:"a"},"maximumWidth")),".\nThe width units inconsistent with the rest of the component props will be disregarded.")),(0,l.mdx)("p",null,"In following example the text column has ",(0,l.mdx)("inlineCode",{parentName:"p"},'maximumWidth: "400px"')," and ",(0,l.mdx)("inlineCode",{parentName:"p"},'minimumWidth: "200px"'),":"),(0,l.mdx)(b,{mdxType:"ResponsiveColumnsMaxWidth"}))}g.isMDXComponent=!0},94261:function(e,t,n){var r=n(64836),a=n(18698);t.Z=void 0;var o=r(n(27424)),l=r(n(861)),i=r(n(38416)),c=d(n(67294)),s=d(n(31915)),u=n(34614);function m(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(m=function(e){return e?n:t})(e)}function d(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var n=m(t);if(n&&n.has(e))return n.get(e);var r={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var i=o?Object.getOwnPropertyDescriptor(e,l):null;i&&(i.get||i.set)?Object.defineProperty(r,l,i):r[l]=e[l]}return r.default=e,n&&n.set(e,r),r}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){(0,i.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var h=c.default.createElement(u.IconFeaturedOff,{a11yLabel:"Featured off",height:"1.5em",width:"1.5em"}),w=c.default.createElement(u.IconFeatured,{a11yLabel:"Featured",height:"1.5em",width:"1.5em"}),_=c.default.createElement(u.IconMultipleResultsNormal,{a11yLabel:"Results normal",height:"1.5em",width:"1.5em"}),b=[{id:"row_1",cells:[{content:_},{content:"Discern Care Set (1)"},{content:""}]},{id:"row_2",cells:[{content:_},{content:"Initial observation Care/Day High Severity 99220 (2)"},{content:""}]},{id:"row_3",cells:[{content:c.default.createElement(u.IconMultipleResultsNotNormal,{a11yLabel:"Results not normal",height:"1.5em",width:"1.5em"})},{content:"Arterial Sheath Care (3)"},{content:""}]},{id:"row_4",cells:[{content:" "},{content:"Sbsq Observation Care/Day High Severity 99226 (4)"},{content:" "}]},{id:"row_5",cells:[{content:c.default.createElement(u.IconMultipleResultsCritical,{a11yLabel:"Results critical",height:"1.5em",width:"1.5em"})},{content:"Arterial Sheath Care (5)"},{content:""}]}],x=[{id:"Column-0",displayName:"Icon",width:"60px",align:s.alignTypes.CENTER},{id:"Column-1",displayName:"Service name",width:"200px",flexGrow:!0},{id:"Column-2",displayName:"Featured",width:"60px",align:s.alignTypes.CENTER}];t.Z=function(){var e=(0,c.useState)([]),t=(0,o.default)(e,2),n=t[0],r=t[1],a=function(e){return[].concat(b).map((function(t){var n=f(f({},t),{},{cells:(0,l.default)(t.cells)});return e.indexOf(t.id)>=0?n.cells[2]=f(f({},t.cells[2]),{},{content:w}):n.cells[2]=f(f({},t.cells[2]),{},{content:h}),n}))}(n);return c.default.createElement(s.default,{id:"with-breakpoints",rows:a,columns:x,numberOfColumns:2,rowHeaderIndex:1,onCellSelect:function(e){var t=e.rowId;if(e.columnId===x[2].id){var a=(0,l.default)(n),o=a.findIndex((function(e){return e===t}));o>=0?a.splice(o,1):a.push(t),r(a)}},onClearSelection:function(){r([])}})}},33832:function(e,t,n){var r=n(64836),a=n(18698);t.Z=void 0;var o=r(n(27424)),l=r(n(861)),i=r(n(38416)),c=d(n(67294)),s=d(n(31915)),u=n(34614);function m(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(m=function(e){return e?n:t})(e)}function d(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var n=m(t);if(n&&n.has(e))return n.get(e);var r={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var i=o?Object.getOwnPropertyDescriptor(e,l):null;i&&(i.get||i.set)?Object.defineProperty(r,l,i):r[l]=e[l]}return r.default=e,n&&n.set(e,r),r}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){(0,i.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var h=c.default.createElement(u.IconFeaturedOff,{a11yLabel:"Featured off",height:"1.5em",width:"1.5em"}),w=c.default.createElement(u.IconFeatured,{a11yLabel:"Featured",height:"1.5em",width:"1.5em"}),_=c.default.createElement(u.IconMultipleResultsNormal,{a11yLabel:"Results normal",height:"1.5em",width:"1.5em"}),b=[{id:"row_1",cells:[{content:_},{content:"Discern Care Set (1)"},{content:""}]},{id:"row_2",cells:[{content:_},{content:"Initial observation Care/Day High Severity 99220 (2)"},{content:""}]},{id:"row_3",cells:[{content:c.default.createElement(u.IconMultipleResultsNotNormal,{a11yLabel:"Results not normal",height:"1.5em",width:"1.5em"})},{content:"Arterial Sheath Care (3)"},{content:""}]},{id:"row_4",cells:[{content:" "},{content:"Sbsq Observation Care/Day High Severity 99226 (4)"},{content:" "}]},{id:"row_5",cells:[{content:c.default.createElement(u.IconMultipleResultsCritical,{a11yLabel:"Results critical",height:"1.5em",width:"1.5em"})},{content:"Arterial Sheath Care (5)"},{content:""}]}],x=[{id:"Column-0",displayName:"Icon",width:"60px",align:s.alignTypes.CENTER},{id:"Column-1",displayName:"Service name",width:"300px",flexGrow:!0,maximumWidth:"400px",minimumWidth:"200px"},{id:"Column-2",displayName:"Featured",width:"60px",align:s.alignTypes.CENTER}];t.Z=function(){var e=(0,c.useState)([]),t=(0,o.default)(e,2),n=t[0],r=t[1],a=function(e){return[].concat(b).map((function(t){var n=f(f({},t),{},{cells:(0,l.default)(t.cells)});return e.indexOf(t.id)>=0?n.cells[2]=f(f({},t.cells[2]),{},{content:w}):n.cells[2]=f(f({},t.cells[2]),{},{content:h}),n}))}(n);return c.default.createElement(s.default,{id:"with-breakpoints",rows:a,columns:x,numberOfColumns:2,columnMinimumWidth:"234px",rowHeaderIndex:1,onCellSelect:function(e){var t=e.rowId;if(e.columnId===x[2].id){var a=(0,l.default)(n),o=a.findIndex((function(e){return e===t}));o>=0?a.splice(o,1):a.push(t),r(a)}},onClearSelection:function(){r([])}})}},53560:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},66983:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Button-module__clinical-lowlight-theme___TyZWB","orion-fusion-theme":"Button-module__orion-fusion-theme___q-FcQ",button:"Button-module__button___QuCn2","is-active":"Button-module__is-active___Z8AuK"}},30866:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Notice-module__clinical-lowlight-theme___aa5xV","orion-fusion-theme":"Notice-module__orion-fusion-theme___QAE-T",notice:"Notice-module__notice___GWkPA",children:"Notice-module__children___lDYsm",accessory:"Notice-module__accessory___wkLOG",title:"Notice-module__title___6H5tc","ux-recommendation":"Notice-module__ux-recommendation___N8BuK",caution:"Notice-module__caution___hPrVl",deprecation:"Notice-module__deprecation___g1drA",maintenance:"Notice-module__maintenance___kWLIZ",important:"Notice-module__important___p5DiF","not-supported":"Notice-module__not-supported___34bHd",paragraph:"Notice-module__paragraph___5h-w1",list:"Notice-module__list___M2Kxj"}},42620:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Placeholder-module__clinical-lowlight-theme___Obm9K","orion-fusion-theme":"Placeholder-module__orion-fusion-theme___svHY+",placeholder:"Placeholder-module__placeholder___ZZDXd",inner:"Placeholder-module__inner___fJq9o",title:"Placeholder-module__title___teBSo"}},87462:function(e,t,n){function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},r.apply(this,arguments)}n.d(t,{Z:function(){return r}})},44925:function(e,t,n){function r(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}n.d(t,{Z:function(){return r}})},15785:function(e,t,n){function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function a(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(t,{Z:function(){return a}})}}]);