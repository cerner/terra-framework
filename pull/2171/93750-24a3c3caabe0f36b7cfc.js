"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[93750],{201:function(e,t,n){var a=n(24994),l=n(73738);t.A=void 0;var o=a(n(85715)),r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=l(e)&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var a={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&{}.hasOwnProperty.call(e,r)){var i=o?Object.getOwnPropertyDescriptor(e,r):null;i&&(i.get||i.set)?Object.defineProperty(a,r,i):a[r]=e[r]}return a.default=e,n&&n.set(e,a),a}(n(96540)),i=a(n(5556)),c=a(n(67967)),u=n(92912),d=a(n(49558)),s=a(n(53665)),m=n(25966),p=a(n(89986));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}var _=c.default.bind(p.default),b={example:i.default.element,exampleSrc:i.default.element,exampleCssSrc:i.default.element,title:i.default.string,description:i.default.node,isExpanded:i.default.bool},x=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},h=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},y=function(e){var t=e.example,n=e.exampleSrc,a=e.exampleCssSrc,l=e.title,i=e.description,c=e.isExpanded,p=(0,r.useState)(c),f=(0,o.default)(p,2),b=f[0],y=f[1],v=(0,r.useState)(!1),g=(0,o.default)(v,2),E=g[0],w=g[1],N=r.default.useContext(u.ThemeContext),k=void 0!==a,C=function(){w(!E),b&&y(!b)},O=function(){y(!b),E&&w(!E)},A=function(e,t){e.nativeEvent.keyCode!==m.KEY_SPACE&&e.nativeEvent.keyCode!==m.KEY_RETURN||(e.preventDefault(),t())};return r.default.createElement("div",{className:_("template",N.className)},r.default.createElement("div",{className:_("header")},l&&r.default.createElement("h2",{className:_("title")},l)),r.default.createElement("div",{className:_("content")},i&&r.default.createElement("div",{className:_("description")},i),t),r.default.createElement("div",{className:_("footer")},n?r.default.createElement("div",{className:_("button-container")},k&&r.default.createElement("button",{type:"button",className:_("css-toggle","item",{"is-selected":E}),onClick:C,onKeyDown:function(e){return A(e,C)},onBlur:x,onMouseDown:h,tabIndex:0,"data-focus-styles-enabled":!0},r.default.createElement(d.default,{className:_("chevron")}),r.default.createElement("span",null,"CSS"),r.default.createElement(s.default,{className:_("chevron")})),r.default.createElement("button",{type:"button",className:_("code-toggle","item",{"is-selected":b}),onClick:O,onKeyDown:function(e){return A(e,O)},onBlur:x,onMouseDown:h,tabIndex:0,"data-focus-styles-enabled":!0},r.default.createElement(d.default,{className:_("chevron")}),r.default.createElement("span",null,"Code"),r.default.createElement(s.default,{className:_("chevron")}))):null,r.default.createElement("div",null,E&&r.default.createElement("div",{className:_("css")},a),b&&r.default.createElement("div",{className:_("code")},n))))};y.propTypes=b,y.defaultProps={isExpanded:!1};t.A=y},15670:function(e,t,n){n.r(t),n.d(t,{default:function(){return b}});var a=n(58168),l=n(53986),o=n(96540),r=n(36665),i=n(17004),c=["components"],u={};function d(e){var t=e.components,n=(0,l.A)(e,c);return(0,r.mdx)("wrapper",(0,a.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React, { useState } from 'react';\nimport { WorklistDataGrid } from 'terra-data-grid';\nimport NotificationDialog from 'terra-notification-dialog';\n\nconst WorklistDataGridAutoFocusableCell = () => {\n  const rowHeaderIndex = 0;\n\n  const [isOpen, setIsOpen] = useState(false);\n\n  const handleCloseModal = () => {\n    setIsOpen(false);\n  };\n\n  const handleButtonOpenModal = () => {\n    setIsOpen(true);\n  };\n\n  const buttonCell = <button type=\"button\" aria-label=\"Alert\" onClick={handleButtonOpenModal}>Alert</button>;\n  // eslint-disable-next-line react/forbid-dom-props\n  const anchorCell = <a href=\"https://www.oracle.com/\" aria-label=\"Visit Oracle\">Visit Oracle</a>;\n\n  const gridDataJSON = {\n    cols: [\n      { id: 'Column-0', displayName: 'Patient' },\n      { id: 'Column-1', displayName: 'Action A' },\n      { id: 'Column-2', displayName: 'Action B' },\n    ],\n    rows: [\n      {\n        id: '1',\n        cells: [\n          { content: 'Fleck, Arthur' },\n          { content: buttonCell },\n          { content: anchorCell },\n        ],\n      },\n    ],\n  };\n\n  const { cols, rows } = gridDataJSON;\n\n  return (\n    <>\n      {isOpen && (\n      <NotificationDialog\n        variant=\"hazard-low\"\n        dialogTitle=\"Button from Focusable Cell\"\n        startMessage=\"Button Selected\"\n        acceptAction={{\n          text: 'OK',\n          onClick: handleCloseModal,\n        }}\n      />\n      )}\n      <WorklistDataGrid\n        id=\"default-terra-worklist-data-grid-focusable-cell\"\n        overflowColumns={cols}\n        defaultColumnWidth={170}\n        rows={rows}\n        rowHeaderIndex={rowHeaderIndex}\n        rowHeight=\"50px\"\n        ariaLabel=\"Worklist Data Grid\"\n        isAutoFocusEnabled\n      />\n    </>\n  );\n};\n\nexport default WorklistDataGridAutoFocusableCell;\n\n")))}d.isMDXComponent=!0;var s=n(201),m=function(e){var t=e.title,n=e.description,a=e.isExpanded;return o.createElement(s.A,{title:t||"Worklist Data Grid Auto Focusable Cell",description:n,example:o.createElement(i.A,null),exampleSrc:o.createElement(d,null),isExpanded:a})},p=["components"],f={},_="wrapper";function b(e){var t=e.components,n=(0,l.A)(e,p);return(0,r.mdx)(_,(0,a.A)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"auto-focusable-cell-navigation"},"Auto Focusable Cell Navigation"),(0,r.mdx)("h3",{id:"description"},"Description"),(0,r.mdx)("p",null,"The content of a cell in the ",(0,r.mdx)("a",{parentName:"p",href:"/terra-framework/pull/2171/components/cerner-terra-framework-docs/data-grid/worklist-data-grid/about"},"Worklist Data Grid")," may be empty, text, numerical, or any combination of widgets.\nWhen the only interactable element in the cell is a button or hyperlink element and the isAutoFocusable property is set to true, navigation to the cell will focus the button or hyperlink element directly."),(0,r.mdx)("h4",{id:"keyboard-interactions"},"Keyboard Interactions"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Key Interaction"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("em",{parentName:"td"},"Enter")),(0,r.mdx)("td",{parentName:"tr",align:null},"Moves focus to the button or hyperlink element when the table cell has focus.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("em",{parentName:"td"},"Escape")),(0,r.mdx)("td",{parentName:"tr",align:null},"Moves focus to the parent table cell element.")))),(0,r.mdx)(m,{mdxType:"WorklistDataGridAutoFocusableCell"}))}b.isMDXComponent=!0},17004:function(e,t,n){var a=n(24994),l=n(73738);t.A=void 0;var o=a(n(85715)),r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=l(e)&&"function"!=typeof e)return{default:e};var n=u(t);if(n&&n.has(e))return n.get(e);var a={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&{}.hasOwnProperty.call(e,r)){var i=o?Object.getOwnPropertyDescriptor(e,r):null;i&&(i.get||i.set)?Object.defineProperty(a,r,i):a[r]=e[r]}return a.default=e,n&&n.set(e,a),a}(n(96540)),i=n(45663),c=a(n(92471));function u(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(u=function(e){return e?n:t})(e)}t.A=function(){var e=(0,r.useState)(!1),t=(0,o.default)(e,2),n=t[0],a=t[1],l={cols:[{id:"Column-0",displayName:"Patient"},{id:"Column-1",displayName:"Action A"},{id:"Column-2",displayName:"Action B"}],rows:[{id:"1",cells:[{content:"Fleck, Arthur"},{content:r.default.createElement("button",{type:"button","aria-label":"Alert",onClick:function(){a(!0)}},"Alert")},{content:r.default.createElement("a",{href:"https://www.oracle.com/","aria-label":"Visit Oracle"},"Visit Oracle")}]}]},u=l.cols,d=l.rows;return r.default.createElement(r.default.Fragment,null,n&&r.default.createElement(c.default,{variant:"hazard-low",dialogTitle:"Button from Focusable Cell",startMessage:"Button Selected",acceptAction:{text:"OK",onClick:function(){a(!1)}}}),r.default.createElement(i.WorklistDataGrid,{id:"default-terra-worklist-data-grid-focusable-cell",overflowColumns:u,defaultColumnWidth:170,rows:d,rowHeaderIndex:0,rowHeight:"50px",ariaLabel:"Worklist Data Grid",isAutoFocusEnabled:!0}))}},89986:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},58168:function(e,t,n){function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},a.apply(this,arguments)}n.d(t,{A:function(){return a}})},53986:function(e,t,n){function a(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n={};for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){if(t.indexOf(a)>=0)continue;n[a]=e[a]}return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}n.d(t,{A:function(){return a}})}}]);