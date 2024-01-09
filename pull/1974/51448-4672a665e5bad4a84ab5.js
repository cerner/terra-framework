"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[51448],{49271:function(e,t,n){var a=n(64836),r=n(18698);t.Z=void 0;var l=a(n(27424)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var a={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=l?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(a,o,i):a[o]=e[o]}a.default=e,n&&n.set(e,a);return a}(n(67294)),i=a(n(45697)),c=a(n(19845)),u=n(21538),s=a(n(33864)),m=a(n(23399)),d=n(51051),p=a(n(53560));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}var h=c.default.bind(p.default),_={example:i.default.element,exampleSrc:i.default.element,exampleCssSrc:i.default.element,title:i.default.string,description:i.default.node,isExpanded:i.default.bool},y=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},v=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},b=function(e){var t=e.example,n=e.exampleSrc,a=e.exampleCssSrc,r=e.title,i=e.description,c=e.isExpanded,p=(0,o.useState)(c),f=(0,l.default)(p,2),_=f[0],b=f[1],w=(0,o.useState)(!1),x=(0,l.default)(w,2),E=x[0],g=x[1],C=o.default.useContext(u.ThemeContext),N=void 0!==a,k=function(){g(!E),_&&b(!_)},T=function(){b(!_),E&&g(!E)},I=function(e,t){e.nativeEvent.keyCode!==d.KEY_SPACE&&e.nativeEvent.keyCode!==d.KEY_RETURN||(e.preventDefault(),t())};return o.default.createElement("div",{className:h("template",C.className)},o.default.createElement("div",{className:h("header")},r&&o.default.createElement("h2",{className:h("title")},r)),o.default.createElement("div",{className:h("content")},i&&o.default.createElement("div",{className:h("description")},i),t),o.default.createElement("div",{className:h("footer")},n?o.default.createElement("div",{className:h("button-container")},N&&o.default.createElement("button",{type:"button",className:h("css-toggle","item",{"is-selected":E}),onClick:k,onKeyDown:function(e){return I(e,k)},onBlur:y,onMouseDown:v,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(s.default,{className:h("chevron")}),o.default.createElement("span",null,"CSS"),o.default.createElement(m.default,{className:h("chevron")})),o.default.createElement("button",{type:"button",className:h("code-toggle","item",{"is-selected":_}),onClick:T,onKeyDown:function(e){return I(e,T)},onBlur:y,onMouseDown:v,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(s.default,{className:h("chevron")}),o.default.createElement("span",null,"Code"),o.default.createElement(m.default,{className:h("chevron")}))):null,o.default.createElement("div",null,E&&o.default.createElement("div",{className:h("css")},a),_&&o.default.createElement("div",{className:h("code")},n))))};b.propTypes=_,b.defaultProps={isExpanded:!1};var w=b;t.Z=w},86333:function(e,t,n){n.r(t),n.d(t,{default:function(){return s}});var a=n(87462),r=n(44925),l=(n(67294),n(81254)),o=n(93798),i=["components"],c={},u="wrapper";function s(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.mdx)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("h1",{id:"fixed-width-columns"},"Fixed Width Columns"),(0,l.mdx)("h3",{id:"description"},"Description"),(0,l.mdx)("p",null,"This example demonstrates a ",(0,l.mdx)("a",{parentName:"p",href:"/terra-framework/pull/1974/components/cerner-terra-framework-docs/compact-interactive-list/about"},"Compact Interactive List")," component that renders a collection of interactive information in a list format that has a single tab stop. "),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"The ",(0,l.mdx)("a",{parentName:"li",href:"/terra-framework/pull/1974/components/cerner-terra-framework-docs/compact-interactive-list/about"},"numberOfColumns")," property is set to ",(0,l.mdx)("strong",{parentName:"li"},"2")," to arrange the list in two visual columns."),(0,l.mdx)("li",{parentName:"ul"},"Each visual column has three semantic columns: an icon, a text description, and an interactive element column."),(0,l.mdx)("li",{parentName:"ul"},"All semantic columns have the ",(0,l.mdx)("a",{parentName:"li",href:"/terra-framework/pull/1974/components/cerner-terra-framework-docs/compact-interactive-list/about"},"width")," property explicitly set, with the ",(0,l.mdx)("a",{parentName:"li",href:"/terra-framework/pull/1974/components/cerner-terra-framework-docs/compact-interactive-list/about"},"flexGrow")," property omitted. The columns keep their width and do not expand or shrink."),(0,l.mdx)("li",{parentName:"ul"},"A horizontal scrollbar is displayed if the screen width is less than the width of the list."),(0,l.mdx)("li",{parentName:"ul"},"The list is one-tab stop. You can move focus between cells with the arrow keys or by clicking cells. Click ",(0,l.mdx)("strong",{parentName:"li"},"Featured")," (star) button or use the arrow keys and press the ",(0,l.mdx)("strong",{parentName:"li"},"SPACEBAR")," to change the state.")),(0,l.mdx)(o.Z,{mdxType:"FixedWidthColumns"}))}s.isMDXComponent=!0},93798:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(67294),r=n(65736),l=n(87462),o=n(44925),i=n(81254),c=["components"],u={};function s(e){var t=e.components,n=(0,o.Z)(e,c);return(0,i.mdx)("wrapper",(0,l.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React, { useState } from 'react';\nimport CompactInteractiveList, { alignTypes } from 'terra-compact-interactive-list';\nimport {\n  IconFeaturedOff, IconFeatured, IconMultipleResultsNormal, IconMultipleResultsNotNormal, IconMultipleResultsCritical,\n} from 'terra-icon';\nimport Button from 'terra-button';\n\nconst FeaturedIcon = () => {\n  const [isFeatured, setIsFeatured] = useState(false);\n  const onButtonClick = () => setIsFeatured(!isFeatured);\n  return (\n    isFeatured ? <Button variant=\"utility\" text=\"Featured button\" icon={<IconFeatured />} onClick={onButtonClick} /> : <Button variant=\"utility\" text=\"Featured off button\" icon={<IconFeaturedOff />} onClick={onButtonClick} />\n  );\n};\n\nconst iconResultsNormal = <IconMultipleResultsNormal a11yLabel=\"Results normal\" height=\"1.5em\" width=\"1.5em\" />;\nconst iconResultsNotNormal = <IconMultipleResultsNotNormal a11yLabel=\"Results not normal\" height=\"1.5em\" width=\"1.5em\" />;\nconst iconResultsCritical = <IconMultipleResultsCritical a11yLabel=\"Results critical\" height=\"1.5em\" width=\"1.5em\" />;\n\n// Source rows data for tests\nconst rows = [\n  {\n    id: 'row_1',\n    cells: [\n      { content: iconResultsNormal },\n      { content: 'Discern Care Set (1)' },\n      { content: <FeaturedIcon /> },\n    ],\n  },\n  {\n    id: 'row_2',\n    cells: [\n      { content: iconResultsNormal },\n      { content: 'Initial observation Care/Day High Severity 99220 (2)' },\n      { content: <FeaturedIcon /> },\n    ],\n  },\n  {\n    id: 'row_3',\n    cells: [\n      { content: iconResultsNotNormal },\n      { content: 'Arterial Sheath Care (3)' },\n      { content: <FeaturedIcon /> },\n    ],\n  },\n  {\n    id: 'row_4',\n    cells: [\n      { content: ' ' },\n      { content: 'Sbsq Observation Care/Day High Severity 99226 (4)' },\n      { content: <FeaturedIcon /> },\n    ],\n  },\n  {\n    id: 'row_5',\n    cells: [\n      { content: iconResultsCritical },\n      { content: 'Arterial Sheath Care (5)' },\n      { content: <FeaturedIcon /> },\n    ],\n  },\n];\n\nconst cols = [\n  {\n    id: 'Column-0',\n    displayName: 'Icon',\n    width: '5em',\n    align: alignTypes.CENTER,\n  },\n  {\n    id: 'Column-1',\n    displayName: 'Service name',\n    width: '20em',\n  },\n  {\n    id: 'Column-2',\n    displayName: 'Featured',\n    width: '5em',\n    align: alignTypes.CENTER,\n  },\n];\n\nconst FixedWidthColumns = () => (\n  <CompactInteractiveList\n    id=\"interactive-compact-columns-width\"\n    ariaLabel=\"Compact Interactive List\"\n    rows={rows}\n    columns={cols}\n    numberOfColumns={2}\n    rowHeaderIndex={1}\n  />\n);\n\nexport default FixedWidthColumns;\n\n")))}s.isMDXComponent=!0;var m=n(49271),d=function(e){var t=e.title,n=e.description,l=e.isExpanded;return a.createElement(m.Z,{title:t||"Fixed Width Columns",description:n,example:a.createElement(r.Z,null),exampleSrc:a.createElement(s,null),isExpanded:l})}},65736:function(e,t,n){var a=n(64836),r=n(18698);t.Z=void 0;var l=a(n(27424)),o=m(n(67294)),i=m(n(31915)),c=n(34614),u=a(n(55281));function s(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(s=function(e){return e?n:t})(e)}function m(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=r(e)&&"function"!=typeof e)return{default:e};var n=s(t);if(n&&n.has(e))return n.get(e);var a={__proto__:null},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=l?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(a,o,i):a[o]=e[o]}return a.default=e,n&&n.set(e,a),a}var d=function(){var e=(0,o.useState)(!1),t=(0,l.default)(e,2),n=t[0],a=t[1],r=function(){return a(!n)};return n?o.default.createElement(u.default,{variant:"utility",text:"Featured button",icon:o.default.createElement(c.IconFeatured,null),onClick:r}):o.default.createElement(u.default,{variant:"utility",text:"Featured off button",icon:o.default.createElement(c.IconFeaturedOff,null),onClick:r})},p=o.default.createElement(c.IconMultipleResultsNormal,{a11yLabel:"Results normal",height:"1.5em",width:"1.5em"}),f=o.default.createElement(c.IconMultipleResultsNotNormal,{a11yLabel:"Results not normal",height:"1.5em",width:"1.5em"}),h=o.default.createElement(c.IconMultipleResultsCritical,{a11yLabel:"Results critical",height:"1.5em",width:"1.5em"}),_=[{id:"row_1",cells:[{content:p},{content:"Discern Care Set (1)"},{content:o.default.createElement(d,null)}]},{id:"row_2",cells:[{content:p},{content:"Initial observation Care/Day High Severity 99220 (2)"},{content:o.default.createElement(d,null)}]},{id:"row_3",cells:[{content:f},{content:"Arterial Sheath Care (3)"},{content:o.default.createElement(d,null)}]},{id:"row_4",cells:[{content:" "},{content:"Sbsq Observation Care/Day High Severity 99226 (4)"},{content:o.default.createElement(d,null)}]},{id:"row_5",cells:[{content:h},{content:"Arterial Sheath Care (5)"},{content:o.default.createElement(d,null)}]}],y=[{id:"Column-0",displayName:"Icon",width:"5em",align:i.alignTypes.CENTER},{id:"Column-1",displayName:"Service name",width:"20em"},{id:"Column-2",displayName:"Featured",width:"5em",align:i.alignTypes.CENTER}];t.Z=function(){return o.default.createElement(i.default,{id:"interactive-compact-columns-width",ariaLabel:"Compact Interactive List",rows:_,columns:y,numberOfColumns:2,rowHeaderIndex:1})}},53560:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},87462:function(e,t,n){function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},a.apply(this,arguments)}n.d(t,{Z:function(){return a}})},44925:function(e,t,n){function a(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}n.d(t,{Z:function(){return a}})},15785:function(e,t,n){function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function r(e){return function(e){if(Array.isArray(e))return a(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(t,{Z:function(){return r}})}}]);