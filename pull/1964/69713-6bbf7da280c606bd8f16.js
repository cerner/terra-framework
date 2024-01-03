"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[69713],{49271:function(e,t,n){var l=n(64836),a=n(18698);t.Z=void 0;var r=l(n(27424)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var l={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(l,o,i):l[o]=e[o]}l.default=e,n&&n.set(e,l);return l}(n(67294)),i=l(n(45697)),c=l(n(47166)),u=n(21538),s=l(n(33864)),d=l(n(23399)),m=n(51051),p=l(n(53560));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}var _=c.default.bind(p.default),h={example:i.default.element,exampleSrc:i.default.element,exampleCssSrc:i.default.element,title:i.default.string,description:i.default.node,isExpanded:i.default.bool},b=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},y=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},v=function(e){var t=e.example,n=e.exampleSrc,l=e.exampleCssSrc,a=e.title,i=e.description,c=e.isExpanded,p=(0,o.useState)(c),f=(0,r.default)(p,2),h=f[0],v=f[1],w=(0,o.useState)(!1),x=(0,r.default)(w,2),g=x[0],C=x[1],N=o.default.useContext(u.ThemeContext),E=void 0!==l,O=function(){C(!g),h&&v(!h)},S=function(){v(!h),g&&C(!g)},k=function(e,t){e.nativeEvent.keyCode!==m.KEY_SPACE&&e.nativeEvent.keyCode!==m.KEY_RETURN||(e.preventDefault(),t())};return o.default.createElement("div",{className:_("template",N.className)},o.default.createElement("div",{className:_("header")},a&&o.default.createElement("h2",{className:_("title")},a)),o.default.createElement("div",{className:_("content")},i&&o.default.createElement("div",{className:_("description")},i),t),o.default.createElement("div",{className:_("footer")},n?o.default.createElement("div",{className:_("button-container")},E&&o.default.createElement("button",{type:"button",className:_("css-toggle","item",{"is-selected":g}),onClick:O,onKeyDown:function(e){return k(e,O)},onBlur:b,onMouseDown:y,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(s.default,{className:_("chevron")}),o.default.createElement("span",null,"CSS"),o.default.createElement(d.default,{className:_("chevron")})),o.default.createElement("button",{type:"button",className:_("code-toggle","item",{"is-selected":h}),onClick:S,onKeyDown:function(e){return k(e,S)},onBlur:b,onMouseDown:y,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(s.default,{className:_("chevron")}),o.default.createElement("span",null,"Code"),o.default.createElement(d.default,{className:_("chevron")}))):null,o.default.createElement("div",null,g&&o.default.createElement("div",{className:_("css")},l),h&&o.default.createElement("div",{className:_("code")},n))))};v.propTypes=h,v.defaultProps={isExpanded:!1};var w=v;t.Z=w},40996:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=u(n(67294)),a=u(n(45697)),r=u(n(47166)),o=u(n(47341)),i=u(n(66983)),c=["children"];function u(e){return e&&e.__esModule?e:{default:e}}function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},s.apply(this,arguments)}function d(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=r.default.bind(i.default),p=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},f=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},_={children:a.default.string},h=function(e){var t=e.children,n=d(e,c),a=l.default.useContext(o.default),i=(0,r.default)(m(["button",a.className]),n.className);return l.default.createElement("button",s({},n,{type:"button",className:i,onBlur:p,onMouseDown:f,"data-focus-styles-enabled":!0}),t)};h.propTypes=_;t.default=h},59278:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=c(n(67294)),a=c(n(45697)),r=c(n(47166)),o=c(n(47341)),i=c(n(30866));function c(e){return e&&e.__esModule?e:{default:e}}var u=r.default.bind(i.default),s={ariaLevel:a.default.oneOf(["2","3","4","5","6"]),children:a.default.node,variant:a.default.oneOf(["ux-recommendation","caution","deprecation","maintenance","important","not-supported"])},d=function(e){var t=e.ariaLevel,n=e.variant,a=e.children,r=l.default.useContext(o.default);return l.default.createElement("div",{className:u("notice",n,r.className)},l.default.createElement("div",{className:u("accessory"),"aria-hidden":"true",focusable:"false"}),l.default.createElement("div",{role:"heading",className:u("title"),"aria-level":t},l.default.createElement("span",null,function(e){return"ux-recommendation"===e?"UX Recommendation":"caution"===e?"Caution":"deprecation"===e?"Deprecation Notice":"maintenance"===e?"In Maintenance":"important"===e?"Important":"not-supported"===e?"Hazards for Incorrect Usage":"error"}(n))),l.default.createElement("div",{className:u("children")},function(e){return"not-supported"===e?l.default.createElement(l.default.Fragment,null,l.default.createElement("p",{className:u("paragraph")},"This component was designed and tested according to the documented implementation."),l.default.createElement("p",{className:u("paragraph")},"Using the component incorrectly:",l.default.createElement("ul",{className:u("list")},l.default.createElement("li",null,"will likely result in improper composition and create accessibility issues"),l.default.createElement("li",null,"may cause erratic or broken behaviors and styles"),l.default.createElement("li",null,l.default.createElement("strong",null,"will not be supported "),"or enhanced to allow for incorrect use")))):null}(n),l.default.Children.map(a,(function(e){return"string"==typeof e?l.default.createElement("p",null,e):e}))))};d.propTypes=s,d.defaultProps={ariaLevel:"2",variant:"important"};t.default=d},47306:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=s(n(67294)),a=s(n(45697)),r=s(n(94184)),o=s(n(47166)),i=s(n(47341)),c=s(n(42620)),u=["title"];function s(e){return e&&e.__esModule?e:{default:e}}function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},d.apply(this,arguments)}function m(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=o.default.bind(c.default),f={title:a.default.string},_=function(e){var t=e.title,n=m(e,u),a=l.default.useContext(i.default),o=(0,r.default)(p(["placeholder",a.className]),n.className),c=p(["inner"]);return l.default.createElement("div",d({},n,{className:o}),l.default.createElement("div",{className:c},l.default.createElement("p",{className:p("title")},t)))};_.propTypes=f,_.defaultProps={title:""};t.default=_},34261:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Button",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"Notice",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"Placeholder",{enumerable:!0,get:function(){return a.default}});var l=o(n(59278)),a=o(n(47306)),r=o(n(40996));function o(e){return e&&e.__esModule?e:{default:e}}},36522:function(e,t,n){n.r(t),n.d(t,{default:function(){return b}});var l=n(87462),a=n(44925),r=n(67294),o=n(81254),i=n(34261),c=n(72815),u=["components"],s={};function d(e){var t=e.components,n=(0,a.Z)(e,u);return(0,o.mdx)("wrapper",(0,l.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React, { useState, useCallback } from 'react';\nimport CompactInteractiveList, { alignTypes } from 'terra-compact-interactive-list';\nimport {\n  IconFeaturedOff, IconFeatured, IconMultipleResultsNormal, IconMultipleResultsNotNormal, IconMultipleResultsCritical,\n} from 'terra-icon';\nimport Button from 'terra-button';\nimport Hyperlink from 'terra-hyperlink';\n\n// eslint-disable-next-line no-alert\nconst buttonCell = <Button text=\"Learn more\" />;\nconst anchorCell = <Hyperlink href=\"https://www.cerner.com\" text=\"Documents\" />;\nconst iconResultsNormal = <IconMultipleResultsNormal a11yLabel=\"Results normal\" height=\"1.5em\" width=\"1.5em\" />;\nconst iconResultsNotNormal = <IconMultipleResultsNotNormal a11yLabel=\"Results not normal\" height=\"1.5em\" width=\"1.5em\" />;\nconst iconResultsCritical = <IconMultipleResultsCritical a11yLabel=\"Results critical\" height=\"1.5em\" width=\"1.5em\" />;\n\nconst updateRows = (rowsToUpdate, columns, selectionDetails) => {\n  const columnIndex = columns.findIndex(column => selectionDetails?.columnId === column.id);\n  return [...rowsToUpdate.map(row => {\n    const newRow = {\n      ...row,\n      cells: [...row.cells.map((cell, index) => {\n        const isSelectedCell = selectionDetails?.rowId === row.id && index === columnIndex;\n        // eslint-disable-next-line no-nested-ternary\n        const isSelected = isSelectedCell ? !cell.isSelected : false;\n        return { ...cell, isSelected };\n      })],\n    };\n    return newRow;\n  })];\n};\n\nconst FeaturedIcon = () => {\n  const [isFeatured, setIsFeatured] = useState(false);\n  const onButtonClick = () => setIsFeatured(!isFeatured);\n  return (\n    isFeatured ? <Button variant=\"utility\" text=\"Unfavorite item\" icon={<IconFeatured />} onClick={onButtonClick} /> : <Button variant=\"utility\" text=\"Favorite item\" icon={<IconFeaturedOff />} onClick={onButtonClick} />\n  );\n};\n\nconst rows = [\n  {\n    id: 'row_1',\n    cells: [\n      { content: iconResultsNormal },\n      { content: 'Discern Care Set (1)' },\n      { content: buttonCell },\n      { content: <FeaturedIcon /> },\n    ],\n  },\n  {\n    id: 'row_2',\n    cells: [\n      { content: iconResultsNormal },\n      { content: 'Initial observation Care/Day High Severity 99220 (2)' },\n      { content: anchorCell },\n      { content: <FeaturedIcon /> },\n    ],\n  },\n  {\n    id: 'row_3',\n    cells: [\n      { content: iconResultsNotNormal },\n      { content: 'Arterial Sheath Care (3)' },\n      { content: anchorCell },\n      { content: <FeaturedIcon /> },\n    ],\n  },\n  {\n    id: 'row_4',\n    cells: [\n      { content: ' ' },\n      { content: 'Sbsq Observation Care/Day High Severity 99226 (4)' },\n      { content: buttonCell },\n      { content: <FeaturedIcon /> },\n    ],\n  },\n  {\n    id: 'row_5',\n    cells: [\n      { content: iconResultsCritical },\n      { content: 'Arterial Sheath Care (5)' },\n      { content: anchorCell },\n      { content: <FeaturedIcon /> },\n    ],\n  },\n];\n\nconst cols = [\n  {\n    id: 'Column-0',\n    displayName: 'Icon',\n    width: '50px',\n    align: alignTypes.CENTER,\n    isSelectable: true,\n  },\n  {\n    id: 'Column-1',\n    displayName: 'Service name',\n    width: '250px', // will be used as a css flexBasis\n    flexGrow: true, // makes the column grow or shrink\n    maximumWidth: '350px',\n    minimumWidth: '100px',\n    isSelectable: true,\n  },\n  {\n    id: 'Column-2',\n    displayName: 'Details',\n    width: '150px',\n    align: alignTypes.RIGHT,\n    isSelectable: true,\n  },\n  {\n    id: 'Column-3',\n    displayName: 'Featured',\n    width: '50px',\n    align: alignTypes.CENTER,\n    isSelectable: true,\n  },\n];\n\nconst CellContent = () => {\n  const [displayedRows, setDisplayedRows] = useState(rows);\n\n  const onCellSelect = useCallback(({ rowId, columnId }) => {\n    setDisplayedRows(updateRows(displayedRows, cols, { rowId, columnId }));\n  }, [displayedRows]);\n\n  const onClearSelection = useCallback(() => {\n    setDisplayedRows(updateRows(displayedRows, cols));\n  }, [displayedRows]);\n\n  return (\n    <CompactInteractiveList\n      id=\"with-breakpoints\"\n      ariaLabel=\"Compact Interactive List\"\n      rows={displayedRows}\n      columns={cols}\n      numberOfColumns={2}\n      columnMinimumWidth=\"234px\"\n      onCellSelect={onCellSelect} // a callback function for cell selection\n      onClearSelection={onClearSelection}\n      rowHeaderIndex={1}\n      rowHeight=\"50px\"\n    />\n  );\n};\n\nexport default CellContent;\n\n")))}d.isMDXComponent=!0;var m=n(49271),p=function(e){var t=e.title,n=e.description,l=e.isExpanded;return r.createElement(m.Z,{title:t||"Cell Content",description:n,example:r.createElement(c.Z,null),exampleSrc:r.createElement(d,null),isExpanded:l})},f=["components"],_={},h="wrapper";function b(e){var t=e.components,n=(0,a.Z)(e,f);return(0,o.mdx)(h,(0,l.Z)({},_,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"cell-content-and-cell-selection"},"Cell Content and Cell Selection"),(0,o.mdx)("h3",{id:"cell-content"},"Cell Content"),(0,o.mdx)(i.Notice,{variant:"important",ariaLevel:"3",mdxType:"Notice"},(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Only one interactive element per cell is allowed. Because the Compact Intercative List component is one tab stop and the arrow keys are used to move between cells, these keys are not available to move to multiple interactive elements in a cell. "),(0,o.mdx)("li",{parentName:"ul"},"Interactive elements are limited to ",(0,o.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/components/cerner-terra-core-docs/button/about"},"terra-button")," and ",(0,o.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/components/cerner-terra-core-docs/hyperlink/about"},"terra-hyperlink"),". Currently, the cell does not restrict interaction when active,\nand all interactive elements keep their native arrow key interactions. If you place a text input, a text area, or select elements in a cell, you are unable to move away from the cell with the arrow keys. "))),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"The ",(0,o.mdx)("a",{parentName:"li",href:"/terra-framework/pull/1964/components/cerner-terra-framework-docs/compact-interactive-list/about"},"content")," of a cell in the ",(0,o.mdx)("a",{parentName:"li",href:"/terra-framework/pull/1964/components/cerner-terra-framework-docs/compact-interactive-list/about"},"Compact Interactive List")," component may be empty, text, numerical, or any combination of widgets, but only one interactive element per cell is allowed."),(0,o.mdx)("li",{parentName:"ul"},"If a cell contains an interactive element, the interactive element becomes active when you select the cell. "),(0,o.mdx)("li",{parentName:"ul"},"If you press an arrow key when a cell is active, the next or previous cell becomes active.")),(0,o.mdx)("h3",{id:"cell-selection"},"Cell Selection"),(0,o.mdx)("p",null,"The example below demonstrates a ",(0,o.mdx)("a",{parentName:"p",href:"/terra-framework/pull/1964/components/cerner-terra-framework-docs/compact-interactive-list/about"},"Compact Interactive List")," component that supports cell selection. "),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"You can click a cell or press the ",(0,o.mdx)("strong",{parentName:"li"},"SPACERBAR")," on the active cell to select it. "),(0,o.mdx)("li",{parentName:"ul"},"A cell is selectable unless it contains an interactive element, in which case the interactive element default controls apply.")),(0,o.mdx)("h4",{id:"required-properties"},"Required Properties"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},(0,o.mdx)("a",{parentName:"strong",href:"/terra-framework/pull/1964/components/cerner-terra-framework-docs/compact-interactive-list/about"},"onCellSelect")," callback property:")," When the user selects a cell, this callback requests the object with the rowId and columnId properties of the selected cell. "),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},(0,o.mdx)("a",{parentName:"strong",href:"/terra-framework/pull/1964/components/cerner-terra-framework-docs/compact-interactive-list/about"},"onClearSelectedCells")," callback property:")," When the user presses the ",(0,o.mdx)("strong",{parentName:"li"},"ESC")," key, this callback is requested.")),(0,o.mdx)(p,{mdxType:"CellContent"}))}b.isMDXComponent=!0},72815:function(e,t,n){var l=n(64836),a=n(18698);t.Z=void 0;var r=l(n(27424)),o=l(n(38416)),i=l(n(861)),c=f(n(67294)),u=f(n(31915)),s=n(34614),d=l(n(55281)),m=l(n(34171));function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(p=function(e){return e?n:t})(e)}function f(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var n=p(t);if(n&&n.has(e))return n.get(e);var l={__proto__:null},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(l,o,i):l[o]=e[o]}return l.default=e,n&&n.set(e,l),l}function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(Object(n),!0).forEach((function(t){(0,o.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var b=c.default.createElement(d.default,{text:"Learn more"}),y=c.default.createElement(m.default,{href:"https://www.cerner.com",text:"Documents"}),v=c.default.createElement(s.IconMultipleResultsNormal,{a11yLabel:"Results normal",height:"1.5em",width:"1.5em"}),w=c.default.createElement(s.IconMultipleResultsNotNormal,{a11yLabel:"Results not normal",height:"1.5em",width:"1.5em"}),x=c.default.createElement(s.IconMultipleResultsCritical,{a11yLabel:"Results critical",height:"1.5em",width:"1.5em"}),g=function(e,t,n){var l=t.findIndex((function(e){return(null==n?void 0:n.columnId)===e.id}));return(0,i.default)(e.map((function(e){return h(h({},e),{},{cells:(0,i.default)(e.cells.map((function(t,a){var r=!!((null==n?void 0:n.rowId)===e.id&&a===l)&&!t.isSelected;return h(h({},t),{},{isSelected:r})})))})})))},C=function(){var e=(0,c.useState)(!1),t=(0,r.default)(e,2),n=t[0],l=t[1],a=function(){return l(!n)};return n?c.default.createElement(d.default,{variant:"utility",text:"Unfavorite item",icon:c.default.createElement(s.IconFeatured,null),onClick:a}):c.default.createElement(d.default,{variant:"utility",text:"Favorite item",icon:c.default.createElement(s.IconFeaturedOff,null),onClick:a})},N=[{id:"row_1",cells:[{content:v},{content:"Discern Care Set (1)"},{content:b},{content:c.default.createElement(C,null)}]},{id:"row_2",cells:[{content:v},{content:"Initial observation Care/Day High Severity 99220 (2)"},{content:y},{content:c.default.createElement(C,null)}]},{id:"row_3",cells:[{content:w},{content:"Arterial Sheath Care (3)"},{content:y},{content:c.default.createElement(C,null)}]},{id:"row_4",cells:[{content:" "},{content:"Sbsq Observation Care/Day High Severity 99226 (4)"},{content:b},{content:c.default.createElement(C,null)}]},{id:"row_5",cells:[{content:x},{content:"Arterial Sheath Care (5)"},{content:y},{content:c.default.createElement(C,null)}]}],E=[{id:"Column-0",displayName:"Icon",width:"50px",align:u.alignTypes.CENTER,isSelectable:!0},{id:"Column-1",displayName:"Service name",width:"250px",flexGrow:!0,maximumWidth:"350px",minimumWidth:"100px",isSelectable:!0},{id:"Column-2",displayName:"Details",width:"150px",align:u.alignTypes.RIGHT,isSelectable:!0},{id:"Column-3",displayName:"Featured",width:"50px",align:u.alignTypes.CENTER,isSelectable:!0}];t.Z=function(){var e=(0,c.useState)(N),t=(0,r.default)(e,2),n=t[0],l=t[1],a=(0,c.useCallback)((function(e){var t=e.rowId,a=e.columnId;l(g(n,E,{rowId:t,columnId:a}))}),[n]),o=(0,c.useCallback)((function(){l(g(n,E))}),[n]);return c.default.createElement(u.default,{id:"with-breakpoints",ariaLabel:"Compact Interactive List",rows:n,columns:E,numberOfColumns:2,columnMinimumWidth:"234px",onCellSelect:a,onClearSelection:o,rowHeaderIndex:1,rowHeight:"50px"})}},53560:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},66983:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Button-module__clinical-lowlight-theme___TyZWB","orion-fusion-theme":"Button-module__orion-fusion-theme___q-FcQ",button:"Button-module__button___QuCn2","is-active":"Button-module__is-active___Z8AuK"}},30866:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Notice-module__clinical-lowlight-theme___aa5xV","orion-fusion-theme":"Notice-module__orion-fusion-theme___QAE-T",notice:"Notice-module__notice___GWkPA",children:"Notice-module__children___lDYsm",accessory:"Notice-module__accessory___wkLOG",title:"Notice-module__title___6H5tc","ux-recommendation":"Notice-module__ux-recommendation___N8BuK",caution:"Notice-module__caution___hPrVl",deprecation:"Notice-module__deprecation___g1drA",maintenance:"Notice-module__maintenance___kWLIZ",important:"Notice-module__important___p5DiF","not-supported":"Notice-module__not-supported___34bHd",paragraph:"Notice-module__paragraph___5h-w1",list:"Notice-module__list___M2Kxj"}},42620:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Placeholder-module__clinical-lowlight-theme___Obm9K","orion-fusion-theme":"Placeholder-module__orion-fusion-theme___svHY+",placeholder:"Placeholder-module__placeholder___ZZDXd",inner:"Placeholder-module__inner___fJq9o",title:"Placeholder-module__title___teBSo"}},87462:function(e,t,n){function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},l.apply(this,arguments)}n.d(t,{Z:function(){return l}})},44925:function(e,t,n){function l(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}n.d(t,{Z:function(){return l}})},15785:function(e,t,n){function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,l=new Array(t);n<t;n++)l[n]=e[n];return l}function a(e){return function(e){if(Array.isArray(e))return l(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(t,{Z:function(){return a}})}}]);