"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[2067],{201:function(e,t,n){var a=n(24994),l=n(73738);t.A=void 0;var r=a(n(85715)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=l(e)&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var a={__proto__:null},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(a,o,i):a[o]=e[o]}return a.default=e,n&&n.set(e,a),a}(n(96540)),i=a(n(5556)),c=a(n(67967)),u=n(92912),s=a(n(49558)),m=a(n(53665)),d=n(25966),p=a(n(89986));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}var h=c.default.bind(p.default),_={example:i.default.element,exampleSrc:i.default.element,exampleCssSrc:i.default.element,title:i.default.string,description:i.default.node,isExpanded:i.default.bool},v=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},x=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},y=function(e){var t=e.example,n=e.exampleSrc,a=e.exampleCssSrc,l=e.title,i=e.description,c=e.isExpanded,p=(0,o.useState)(c),f=(0,r.default)(p,2),_=f[0],y=f[1],w=(0,o.useState)(!1),E=(0,r.default)(w,2),b=E[0],C=E[1],g=o.default.useContext(u.ThemeContext),N=void 0!==a,k=function(){C(!b),_&&y(!_)},T=function(){y(!_),b&&C(!b)},I=function(e,t){e.nativeEvent.keyCode!==d.KEY_SPACE&&e.nativeEvent.keyCode!==d.KEY_RETURN||(e.preventDefault(),t())};return o.default.createElement("div",{className:h("template",g.className)},o.default.createElement("div",{className:h("header")},l&&o.default.createElement("h2",{className:h("title")},l)),o.default.createElement("div",{className:h("content")},i&&o.default.createElement("div",{className:h("description")},i),t),o.default.createElement("div",{className:h("footer")},n?o.default.createElement("div",{className:h("button-container")},N&&o.default.createElement("button",{type:"button",className:h("css-toggle","item",{"is-selected":b}),onClick:k,onKeyDown:function(e){return I(e,k)},onBlur:v,onMouseDown:x,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(s.default,{className:h("chevron")}),o.default.createElement("span",null,"CSS"),o.default.createElement(m.default,{className:h("chevron")})),o.default.createElement("button",{type:"button",className:h("code-toggle","item",{"is-selected":_}),onClick:T,onKeyDown:function(e){return I(e,T)},onBlur:v,onMouseDown:x,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(s.default,{className:h("chevron")}),o.default.createElement("span",null,"Code"),o.default.createElement(m.default,{className:h("chevron")}))):null,o.default.createElement("div",null,b&&o.default.createElement("div",{className:h("css")},a),_&&o.default.createElement("div",{className:h("code")},n))))};y.propTypes=_,y.defaultProps={isExpanded:!1};t.A=y},87472:function(e,t,n){n.r(t),n.d(t,{default:function(){return s}});var a=n(58168),l=n(53986),r=(n(96540),n(36665)),o=n(55465),i=["components"],c={},u="wrapper";function s(e){var t=e.components,n=(0,l.A)(e,i);return(0,r.mdx)(u,(0,a.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"fixed-width-columns"},"Fixed Width Columns"),(0,r.mdx)("h3",{id:"description"},"Description"),(0,r.mdx)("p",null,"This example demonstrates a ",(0,r.mdx)("a",{parentName:"p",href:"/terra-framework/pull/2110/components/cerner-terra-framework-docs/compact-interactive-list/about"},"Compact Interactive List")," component that renders a collection of interactive information in a list format that has a single tab stop. "),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"The ",(0,r.mdx)("a",{parentName:"li",href:"/terra-framework/pull/2110/components/cerner-terra-framework-docs/compact-interactive-list/about"},"numberOfColumns")," property is set to ",(0,r.mdx)("strong",{parentName:"li"},"2")," to arrange the list in two visual columns."),(0,r.mdx)("li",{parentName:"ul"},"Each visual column has three semantic columns: an icon, a text description, and an interactive element column."),(0,r.mdx)("li",{parentName:"ul"},"All semantic columns have the ",(0,r.mdx)("a",{parentName:"li",href:"/terra-framework/pull/2110/components/cerner-terra-framework-docs/compact-interactive-list/about"},"width")," property explicitly set, with the ",(0,r.mdx)("a",{parentName:"li",href:"/terra-framework/pull/2110/components/cerner-terra-framework-docs/compact-interactive-list/about"},"flexGrow")," property omitted. The columns keep their width and do not expand or shrink."),(0,r.mdx)("li",{parentName:"ul"},"A horizontal scrollbar is displayed if the screen width is less than the width of the list."),(0,r.mdx)("li",{parentName:"ul"},"The list is one-tab stop. You can move focus between cells with the arrow keys or by clicking cells. Click ",(0,r.mdx)("strong",{parentName:"li"},"Featured")," (star) button or use the arrow keys and press the ",(0,r.mdx)("strong",{parentName:"li"},"SPACEBAR")," to change the state.")),(0,r.mdx)(o.A,{mdxType:"FixedWidthColumns"}))}s.isMDXComponent=!0},55465:function(e,t,n){n.d(t,{A:function(){return d}});var a=n(96540),l=n(58161),r=n(58168),o=n(53986),i=n(36665),c=["components"],u={};function s(e){var t=e.components,n=(0,o.A)(e,c);return(0,i.mdx)("wrapper",(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React, { useState } from 'react';\nimport CompactInteractiveList, { alignTypes } from 'terra-compact-interactive-list';\nimport {\n  IconFeaturedOff, IconFeatured, IconMultipleResultsNormal, IconMultipleResultsNotNormal, IconMultipleResultsCritical,\n} from 'terra-icon';\nimport Button from 'terra-button';\n\nconst FeaturedIcon = () => {\n  const [isFeatured, setIsFeatured] = useState(false);\n  const onButtonClick = () => setIsFeatured(!isFeatured);\n  return (\n    isFeatured ? <Button variant=\"utility\" text=\"Unfavorite item\" icon={<IconFeatured />} onClick={onButtonClick} /> : <Button variant=\"utility\" text=\"Favorite item\" icon={<IconFeaturedOff />} onClick={onButtonClick} />\n  );\n};\n\nconst iconResultsNormal = <IconMultipleResultsNormal a11yLabel=\"Results normal\" height=\"1.5em\" width=\"1.5em\" />;\nconst iconResultsNotNormal = <IconMultipleResultsNotNormal a11yLabel=\"Results not normal\" height=\"1.5em\" width=\"1.5em\" />;\nconst iconResultsCritical = <IconMultipleResultsCritical a11yLabel=\"Results critical\" height=\"1.5em\" width=\"1.5em\" />;\n\n// Source rows data for tests\nconst rows = [\n  {\n    id: 'row_1',\n    cells: [\n      { content: iconResultsNormal },\n      { content: 'Discern Care Set (1)' },\n      { content: <FeaturedIcon /> },\n    ],\n  },\n  {\n    id: 'row_2',\n    cells: [\n      { content: iconResultsNormal },\n      { content: 'Initial observation Care/Day High Severity 99220 (2)' },\n      { content: <FeaturedIcon /> },\n    ],\n  },\n  {\n    id: 'row_3',\n    cells: [\n      { content: iconResultsNotNormal },\n      { content: 'Arterial Sheath Care (3)' },\n      { content: <FeaturedIcon /> },\n    ],\n  },\n  {\n    id: 'row_4',\n    cells: [\n      { content: ' ' },\n      { content: 'Sbsq Observation Care/Day High Severity 99226 (4)' },\n      { content: <FeaturedIcon /> },\n    ],\n  },\n  {\n    id: 'row_5',\n    cells: [\n      { content: iconResultsCritical },\n      { content: 'Arterial Sheath Care (5)' },\n      { content: <FeaturedIcon /> },\n    ],\n  },\n];\n\nconst cols = [\n  {\n    id: 'Column-0',\n    displayName: 'Icon',\n    width: '5em',\n    align: alignTypes.CENTER,\n  },\n  {\n    id: 'Column-1',\n    displayName: 'Service name',\n    width: '20em',\n  },\n  {\n    id: 'Column-2',\n    displayName: 'Featured',\n    width: '5em',\n    align: alignTypes.CENTER,\n  },\n];\n\nconst FixedWidthColumns = () => (\n  <CompactInteractiveList\n    id=\"compact-interactive-list-fixed-width\"\n    ariaLabel=\"Compact Interactive List\"\n    rows={rows}\n    columns={cols}\n    numberOfColumns={2}\n    rowHeaderIndex={1}\n  />\n);\n\nexport default FixedWidthColumns;\n\n")))}s.isMDXComponent=!0;var m=n(201),d=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.createElement(m.A,{title:t||"Fixed Width Columns",description:n,example:a.createElement(l.A,null),exampleSrc:a.createElement(s,null),isExpanded:r})}},58161:function(e,t,n){var a=n(24994),l=n(73738);t.A=void 0;var r=a(n(85715)),o=m(n(96540)),i=m(n(79943)),c=n(33049),u=a(n(23986));function s(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(s=function(e){return e?n:t})(e)}function m(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=l(e)&&"function"!=typeof e)return{default:e};var n=s(t);if(n&&n.has(e))return n.get(e);var a={__proto__:null},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(a,o,i):a[o]=e[o]}return a.default=e,n&&n.set(e,a),a}var d=function(){var e=(0,o.useState)(!1),t=(0,r.default)(e,2),n=t[0],a=t[1],l=function(){return a(!n)};return n?o.default.createElement(u.default,{variant:"utility",text:"Unfavorite item",icon:o.default.createElement(c.IconFeatured,null),onClick:l}):o.default.createElement(u.default,{variant:"utility",text:"Favorite item",icon:o.default.createElement(c.IconFeaturedOff,null),onClick:l})},p=o.default.createElement(c.IconMultipleResultsNormal,{a11yLabel:"Results normal",height:"1.5em",width:"1.5em"}),f=o.default.createElement(c.IconMultipleResultsNotNormal,{a11yLabel:"Results not normal",height:"1.5em",width:"1.5em"}),h=o.default.createElement(c.IconMultipleResultsCritical,{a11yLabel:"Results critical",height:"1.5em",width:"1.5em"}),_=[{id:"row_1",cells:[{content:p},{content:"Discern Care Set (1)"},{content:o.default.createElement(d,null)}]},{id:"row_2",cells:[{content:p},{content:"Initial observation Care/Day High Severity 99220 (2)"},{content:o.default.createElement(d,null)}]},{id:"row_3",cells:[{content:f},{content:"Arterial Sheath Care (3)"},{content:o.default.createElement(d,null)}]},{id:"row_4",cells:[{content:" "},{content:"Sbsq Observation Care/Day High Severity 99226 (4)"},{content:o.default.createElement(d,null)}]},{id:"row_5",cells:[{content:h},{content:"Arterial Sheath Care (5)"},{content:o.default.createElement(d,null)}]}],v=[{id:"Column-0",displayName:"Icon",width:"5em",align:i.alignTypes.CENTER},{id:"Column-1",displayName:"Service name",width:"20em"},{id:"Column-2",displayName:"Featured",width:"5em",align:i.alignTypes.CENTER}];t.A=function(){return o.default.createElement(i.default,{id:"compact-interactive-list-fixed-width",ariaLabel:"Compact Interactive List",rows:_,columns:v,numberOfColumns:2,rowHeaderIndex:1})}},89986:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},58168:function(e,t,n){function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},a.apply(this,arguments)}n.d(t,{A:function(){return a}})},53986:function(e,t,n){function a(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}n.d(t,{A:function(){return a}})}}]);