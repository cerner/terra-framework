"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[99743,33377,43089,37703],{49271:function(e,t,n){var a=n(64836),l=n(18698);t.Z=void 0;var o=a(n(27424)),r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=l(e)&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var a={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var i=o?Object.getOwnPropertyDescriptor(e,r):null;i&&(i.get||i.set)?Object.defineProperty(a,r,i):a[r]=e[r]}return a.default=e,n&&n.set(e,a),a}(n(67294)),i=a(n(45697)),d=a(n(19845)),c=n(21538),u=a(n(33864)),s=a(n(23399)),m=n(51051),p=a(n(53560));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}var g=d.default.bind(p.default),b={example:i.default.element,exampleSrc:i.default.element,exampleCssSrc:i.default.element,title:i.default.string,description:i.default.node,isExpanded:i.default.bool},_=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},x=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},y=function(e){var t=e.example,n=e.exampleSrc,a=e.exampleCssSrc,l=e.title,i=e.description,d=e.isExpanded,p=(0,r.useState)(d),f=(0,o.default)(p,2),b=f[0],y=f[1],v=(0,r.useState)(!1),h=(0,o.default)(v,2),E=h[0],w=h[1],C=r.default.useContext(c.ThemeContext),N=void 0!==a,k=function(){w(!E),b&&y(!b)},O=function(){y(!b),E&&w(!E)},T=function(e,t){e.nativeEvent.keyCode!==m.KEY_SPACE&&e.nativeEvent.keyCode!==m.KEY_RETURN||(e.preventDefault(),t())};return r.default.createElement("div",{className:g("template",C.className)},r.default.createElement("div",{className:g("header")},l&&r.default.createElement("h2",{className:g("title")},l)),r.default.createElement("div",{className:g("content")},i&&r.default.createElement("div",{className:g("description")},i),t),r.default.createElement("div",{className:g("footer")},n?r.default.createElement("div",{className:g("button-container")},N&&r.default.createElement("button",{type:"button",className:g("css-toggle","item",{"is-selected":E}),onClick:k,onKeyDown:function(e){return T(e,k)},onBlur:_,onMouseDown:x,tabIndex:0,"data-focus-styles-enabled":!0},r.default.createElement(u.default,{className:g("chevron")}),r.default.createElement("span",null,"CSS"),r.default.createElement(s.default,{className:g("chevron")})),r.default.createElement("button",{type:"button",className:g("code-toggle","item",{"is-selected":b}),onClick:O,onKeyDown:function(e){return T(e,O)},onBlur:_,onMouseDown:x,tabIndex:0,"data-focus-styles-enabled":!0},r.default.createElement(u.default,{className:g("chevron")}),r.default.createElement("span",null,"Code"),r.default.createElement(s.default,{className:g("chevron")}))):null,r.default.createElement("div",null,E&&r.default.createElement("div",{className:g("css")},a),b&&r.default.createElement("div",{className:g("code")},n))))};y.propTypes=b,y.defaultProps={isExpanded:!1};t.Z=y},25358:function(e,t,n){n.r(t),n.d(t,{default:function(){return b}});var a=n(87462),l=n(44925),o=n(67294),r=n(81254),i=n(29525),d=["components"],c={};function u(e){var t=e.components,n=(0,l.Z)(e,d);return(0,r.mdx)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},'import React, { useState } from \'react\';\nimport { WorklistDataGrid } from \'terra-data-grid\';\nimport NotificationDialog from \'terra-notification-dialog\';\n\nconst WorklistDataGridFocusableCell = () => {\n  const rowHeaderIndex = 0;\n\n  const [isOpen, setIsOpen] = useState(false);\n\n  const handleCloseModal = () => {\n    setIsOpen(false);\n  };\n\n  const handleButtonOpenModal = () => {\n    setIsOpen(true);\n  };\n\n  const buttonCell = <button type="button" aria-label="Alert" onClick={handleButtonOpenModal}>Alert</button>;\n  // eslint-disable-next-line react/forbid-dom-props\n  const inputCell = <input type="text" aria-label="Text Input" style={{ width: \'100px\', height: \'25px\', display: \'inline\' }} />;\n  const anchorCell = <a href="https://www.oracle.com/" aria-label="Visit Oracle">Visit Oracle</a>;\n  const textAreaCell = <textarea name="textArea" aria-label="Text Area" rows="1" cols="15" />;\n  const selectCell = (\n    <select name="specialties" id="specialties" aria-label="Select Specialty">\n      <option value="ambulatory">Ambulatory</option>\n      <option value="cardiology">Cardiology</option>\n      <option value="radiology">Radiology</option>\n      <option value="neurology">Neurology</option>\n    </select>\n  );\n\n  const gridDataJSON = {\n    cols: [\n      { id: \'Column-0\', displayName: \'Patient\' },\n      { id: \'Column-1\', displayName: \'Column 1\' },\n      { id: \'Column-2\', displayName: \'Column 2\' },\n      { id: \'Column-3\', displayName: \'Column 3\' },\n    ],\n    rows: [\n      {\n        id: \'1\',\n        cells: [\n          { content: \'Fleck, Arthur\' },\n          {\n            content: <>\n              {buttonCell}\n              <div>Non-Focusable Text</div>\n              {/* eslint-disable-next-line react/jsx-closing-tag-location */}\n            </>,\n          },\n          { content: inputCell },\n          { content: anchorCell },\n        ],\n      },\n      {\n        id: \'2\',\n        cells: [\n          { content: \'Wayne, Bruce\' },\n          {\n            content: (<div>\n              {buttonCell}\n              {inputCell}\n              {/* eslint-disable-next-line react/jsx-closing-tag-location */}\n            </div>),\n          },\n          { content: selectCell },\n          { content: textAreaCell },\n        ],\n      },\n    ],\n  };\n\n  const { cols, rows } = gridDataJSON;\n\n  return (\n    <>\n      {isOpen && (\n      <NotificationDialog\n        variant="hazard-low"\n        dialogTitle="Button from Focusable Cell"\n        startMessage="Button Selected"\n        acceptAction={{\n          text: \'OK\',\n          onClick: handleCloseModal,\n        }}\n      />\n      )}\n      <WorklistDataGrid\n        id="default-terra-worklist-data-grid-focusable-cell"\n        overflowColumns={cols}\n        defaultColumnWidth={170}\n        rows={rows}\n        rowHeaderIndex={rowHeaderIndex}\n        rowHeight="50px"\n        ariaLabel="Worklist Data Grid"\n      />\n    </>\n  );\n};\n\nexport default WorklistDataGridFocusableCell;\n\n')))}u.isMDXComponent=!0;var s=n(49271),m=function(e){var t=e.title,n=e.description,a=e.isExpanded;return o.createElement(s.Z,{title:t||"Worklist Data Grid Focusable Cell",description:n,example:o.createElement(i.Z,null),exampleSrc:o.createElement(u,null),isExpanded:a})},p=["components"],f={},g="wrapper";function b(e){var t=e.components,n=(0,l.Z)(e,p);return(0,r.mdx)(g,(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"single-cell-navigation-dive-in"},"Single Cell Navigation (Dive-In)"),(0,r.mdx)("h3",{id:"description"},"Description"),(0,r.mdx)("p",null,"The content of a cell in the ",(0,r.mdx)("a",{parentName:"p",href:"/terra-framework/pull/2031/components/cerner-terra-framework-docs/data-grid/worklist-data-grid/about"},"Worklist Data Grid")," may be empty, text, numerical, or any combination of widgets.\nSince the ",(0,r.mdx)("a",{parentName:"p",href:"https://www.w3.org/WAI/ARIA/apg/patterns/grid/"},"grid pattern")," mandates only one tab stop and arrow keys for navigation, these keys are not available by default to navigate focusable elements inside a cell.\nTo make these keys available for cell navigation as part of its basic functionality, the Worklist Data Grid supports single cell navigation (dive-in mode).\nEnabling single cell navigation will disable grid navigation and disabling single cell navigation will restore grid navigation."),(0,r.mdx)("span",{style:{color:"blue"}},(0,r.mdx)("em",null,"Single Cell navigation is built-in and does not require any additional setup or implementation.")),(0,r.mdx)("h4",{id:"keyboard-interactions"},"Keyboard Interactions"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Key Interaction"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("em",{parentName:"td"},"Enter")),(0,r.mdx)("td",{parentName:"tr",align:null},"Enable Single Cell Navigation and disable grid navigation.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("em",{parentName:"td"},"Escape")),(0,r.mdx)("td",{parentName:"tr",align:null},"Disable Single Cell Navigation and restore grid navigation.")))),(0,r.mdx)(m,{title:"Single Cell Navigation",mdxType:"WorklistDataGridFocusableCell"}))}b.isMDXComponent=!0},29525:function(e,t,n){var a=n(64836),l=n(18698);t.Z=void 0;var o=a(n(27424)),r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=l(e)&&"function"!=typeof e)return{default:e};var n=c(t);if(n&&n.has(e))return n.get(e);var a={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var i=o?Object.getOwnPropertyDescriptor(e,r):null;i&&(i.get||i.set)?Object.defineProperty(a,r,i):a[r]=e[r]}return a.default=e,n&&n.set(e,a),a}(n(67294)),i=n(55730),d=a(n(850));function c(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(c=function(e){return e?n:t})(e)}t.Z=function(){var e=(0,r.useState)(!1),t=(0,o.default)(e,2),n=t[0],a=t[1],l=r.default.createElement("button",{type:"button","aria-label":"Alert",onClick:function(){a(!0)}},"Alert"),c=r.default.createElement("input",{type:"text","aria-label":"Text Input",style:{width:"100px",height:"25px",display:"inline"}}),u=r.default.createElement("a",{href:"https://www.oracle.com/","aria-label":"Visit Oracle"},"Visit Oracle"),s=r.default.createElement("textarea",{name:"textArea","aria-label":"Text Area",rows:"1",cols:"15"}),m=r.default.createElement("select",{name:"specialties",id:"specialties","aria-label":"Select Specialty"},r.default.createElement("option",{value:"ambulatory"},"Ambulatory"),r.default.createElement("option",{value:"cardiology"},"Cardiology"),r.default.createElement("option",{value:"radiology"},"Radiology"),r.default.createElement("option",{value:"neurology"},"Neurology")),p={cols:[{id:"Column-0",displayName:"Patient"},{id:"Column-1",displayName:"Column 1"},{id:"Column-2",displayName:"Column 2"},{id:"Column-3",displayName:"Column 3"}],rows:[{id:"1",cells:[{content:"Fleck, Arthur"},{content:r.default.createElement(r.default.Fragment,null,l,r.default.createElement("div",null,"Non-Focusable Text"))},{content:c},{content:u}]},{id:"2",cells:[{content:"Wayne, Bruce"},{content:r.default.createElement("div",null,l,c)},{content:m},{content:s}]}]},f=p.cols,g=p.rows;return r.default.createElement(r.default.Fragment,null,n&&r.default.createElement(d.default,{variant:"hazard-low",dialogTitle:"Button from Focusable Cell",startMessage:"Button Selected",acceptAction:{text:"OK",onClick:function(){a(!1)}}}),r.default.createElement(i.WorklistDataGrid,{id:"default-terra-worklist-data-grid-focusable-cell",overflowColumns:f,defaultColumnWidth:170,rows:g,rowHeaderIndex:0,rowHeight:"50px",ariaLabel:"Worklist Data Grid"}))}},53560:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},87462:function(e,t,n){function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},a.apply(this,arguments)}n.d(t,{Z:function(){return a}})},44925:function(e,t,n){function a(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}n.d(t,{Z:function(){return a}})}}]);