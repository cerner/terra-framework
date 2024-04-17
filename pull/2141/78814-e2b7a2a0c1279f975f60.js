"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[78814],{201:function(e,t,n){var l=n(24994),a=n(73738);t.A=void 0;var o=l(n(85715)),r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var l={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var i=o?Object.getOwnPropertyDescriptor(e,r):null;i&&(i.get||i.set)?Object.defineProperty(l,r,i):l[r]=e[r]}return l.default=e,n&&n.set(e,l),l}(n(96540)),i=l(n(5556)),c=l(n(67967)),u=n(92912),s=l(n(49558)),d=l(n(53665)),m=n(25966),p=l(n(89986));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}var b=c.default.bind(p.default),_={example:i.default.element,exampleSrc:i.default.element,exampleCssSrc:i.default.element,title:i.default.string,description:i.default.node,isExpanded:i.default.bool},y=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},x=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},v=function(e){var t=e.example,n=e.exampleSrc,l=e.exampleCssSrc,a=e.title,i=e.description,c=e.isExpanded,p=(0,r.useState)(c),f=(0,o.default)(p,2),_=f[0],v=f[1],E=(0,r.useState)(!1),h=(0,o.default)(E,2),g=h[0],w=h[1],C=r.default.useContext(u.ThemeContext),T=void 0!==l,O=function(){w(!g),_&&v(!_)},A=function(){v(!_),g&&w(!g)},N=function(e,t){e.nativeEvent.keyCode!==m.KEY_SPACE&&e.nativeEvent.keyCode!==m.KEY_RETURN||(e.preventDefault(),t())};return r.default.createElement("div",{className:b("template",C.className)},r.default.createElement("div",{className:b("header")},a&&r.default.createElement("h2",{className:b("title")},a)),r.default.createElement("div",{className:b("content")},i&&r.default.createElement("div",{className:b("description")},i),t),r.default.createElement("div",{className:b("footer")},n?r.default.createElement("div",{className:b("button-container")},T&&r.default.createElement("button",{type:"button",className:b("css-toggle","item",{"is-selected":g}),onClick:O,onKeyDown:function(e){return N(e,O)},onBlur:y,onMouseDown:x,tabIndex:0,"data-focus-styles-enabled":!0},r.default.createElement(s.default,{className:b("chevron")}),r.default.createElement("span",null,"CSS"),r.default.createElement(d.default,{className:b("chevron")})),r.default.createElement("button",{type:"button",className:b("code-toggle","item",{"is-selected":_}),onClick:A,onKeyDown:function(e){return N(e,A)},onBlur:y,onMouseDown:x,tabIndex:0,"data-focus-styles-enabled":!0},r.default.createElement(s.default,{className:b("chevron")}),r.default.createElement("span",null,"Code"),r.default.createElement(d.default,{className:b("chevron")}))):null,r.default.createElement("div",null,g&&r.default.createElement("div",{className:b("css")},l),_&&r.default.createElement("div",{className:b("code")},n))))};v.propTypes=_,v.defaultProps={isExpanded:!1};t.A=v},78814:function(e,t,n){n.r(t),n.d(t,{default:function(){return _}});var l=n(58168),a=n(53986),o=n(96540),r=n(36665),i=n(38579),c=["components"],u={};function s(e){var t=e.components,n=(0,a.A)(e,c);return(0,r.mdx)("wrapper",(0,l.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},'import React, { useState } from \'react\';\nimport Table from \'terra-table\';\nimport NotificationDialog from \'terra-notification-dialog\';\n\nconst TableFocusableCell = () => {\n  const [isOpen, setIsOpen] = useState(false);\n\n  const handleCloseModal = () => {\n    setIsOpen(false);\n  };\n\n  const handleButtonOpenModal = () => {\n    setIsOpen(true);\n  };\n\n  const buttonCell = <button type="button" aria-label="Alert" onClick={handleButtonOpenModal}>Alert</button>;\n  // eslint-disable-next-line react/forbid-dom-props\n  const inputCell = <input type="text" aria-label="Text Input" style={{ width: \'100px\', height: \'25px\', display: \'inline\' }} />;\n  const anchorCell = <a href="https://www.oracle.com/" aria-label="Visit Oracle">Visit Oracle</a>;\n  const textAreaCell = <textarea name="textArea" aria-label="Text Area" rows="1" cols="15" />;\n  const selectCell = (\n    <select name="specialties" id="specialties" aria-label="Select Specialty">\n      <option value="ambulatory">Ambulatory</option>\n      <option value="cardiology">Cardiology</option>\n      <option value="radiology">Radiology</option>\n      <option value="neurology">Neurology</option>\n    </select>\n  );\n\n  const tableDataJSON = {\n    cols: [\n      { id: \'Column-0\', displayName: \'Patient\' },\n      { id: \'Column-1\', displayName: \'Action A\' },\n      { id: \'Column-2\', displayName: \'Action B\' },\n      { id: \'Column-3\', displayName: \'Action C\' },\n    ],\n    rows: [\n      {\n        id: \'1\',\n        cells: [\n          { content: \'Fleck, Arthur\' },\n          {\n            content: <>\n              {buttonCell}\n              <div>Non-Focusable Text</div>\n              {/* eslint-disable-next-line react/jsx-closing-tag-location */}\n            </>,\n          },\n          { content: inputCell },\n          { content: anchorCell },\n        ],\n      },\n      {\n        id: \'2\',\n        cells: [\n          { content: \'Wayne, Bruce\' },\n          {\n            content: (<div>\n              {buttonCell}\n              {inputCell}\n              {/* eslint-disable-next-line react/jsx-closing-tag-location */}\n            </div>),\n          },\n          { content: selectCell },\n          { content: textAreaCell },\n        ],\n      },\n    ],\n  };\n\n  const { cols, rows } = tableDataJSON;\n\n  return (\n    <>\n      {isOpen && (\n      <NotificationDialog\n        variant="hazard-low"\n        dialogTitle="Button from Focusable Cell"\n        startMessage="Button Selected"\n        acceptAction={{\n          text: \'OK\',\n          onClick: handleCloseModal,\n        }}\n      />\n      )}\n      <Table\n        id="table-focusable-cell"\n        overflowColumns={cols}\n        rows={rows}\n        rowHeight="45px"\n        ariaLabel="Table with Focusable Elements"\n      />\n    </>\n  );\n};\n\nexport default TableFocusableCell;\n\n')))}s.isMDXComponent=!0;var d=n(201),m=function(e){var t=e.title,n=e.description,l=e.isExpanded;return o.createElement(d.A,{title:t||"Table Focusable Cell",description:n,example:o.createElement(i.A,null),exampleSrc:o.createElement(s,null),isExpanded:l})},p=["components"],f={},b="wrapper";function _(e){var t=e.components,n=(0,a.A)(e,p);return(0,r.mdx)(b,(0,l.A)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"table-with-interactable-elements"},"Table With Interactable Elements"),(0,r.mdx)("h3",{id:"description"},"Description"),(0,r.mdx)("p",null,"This example demonstrates the tab stop behavior of a ",(0,r.mdx)("a",{parentName:"p",href:"/terra-framework/pull/2141/components/cerner-terra-framework-docs/table/about"},"Table")," component with cells\nthat contain interactive elements."),(0,r.mdx)(m,{title:"Table With Focusable Cell Elements",mdxType:"TableFocusableCell"}))}_.isMDXComponent=!0},38579:function(e,t,n){var l=n(24994),a=n(73738);t.A=void 0;var o=l(n(85715)),r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var n=u(t);if(n&&n.has(e))return n.get(e);var l={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&{}.hasOwnProperty.call(e,r)){var i=o?Object.getOwnPropertyDescriptor(e,r):null;i&&(i.get||i.set)?Object.defineProperty(l,r,i):l[r]=e[r]}return l.default=e,n&&n.set(e,l),l}(n(96540)),i=l(n(83264)),c=l(n(92471));function u(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(u=function(e){return e?n:t})(e)}t.A=function(){var e=(0,r.useState)(!1),t=(0,o.default)(e,2),n=t[0],l=t[1],a=r.default.createElement("button",{type:"button","aria-label":"Alert",onClick:function(){l(!0)}},"Alert"),u=r.default.createElement("input",{type:"text","aria-label":"Text Input",style:{width:"100px",height:"25px",display:"inline"}}),s=r.default.createElement("a",{href:"https://www.oracle.com/","aria-label":"Visit Oracle"},"Visit Oracle"),d=r.default.createElement("textarea",{name:"textArea","aria-label":"Text Area",rows:"1",cols:"15"}),m=r.default.createElement("select",{name:"specialties",id:"specialties","aria-label":"Select Specialty"},r.default.createElement("option",{value:"ambulatory"},"Ambulatory"),r.default.createElement("option",{value:"cardiology"},"Cardiology"),r.default.createElement("option",{value:"radiology"},"Radiology"),r.default.createElement("option",{value:"neurology"},"Neurology")),p={cols:[{id:"Column-0",displayName:"Patient"},{id:"Column-1",displayName:"Action A"},{id:"Column-2",displayName:"Action B"},{id:"Column-3",displayName:"Action C"}],rows:[{id:"1",cells:[{content:"Fleck, Arthur"},{content:r.default.createElement(r.default.Fragment,null,a,r.default.createElement("div",null,"Non-Focusable Text"))},{content:u},{content:s}]},{id:"2",cells:[{content:"Wayne, Bruce"},{content:r.default.createElement("div",null,a,u)},{content:m},{content:d}]}]},f=p.cols,b=p.rows;return r.default.createElement(r.default.Fragment,null,n&&r.default.createElement(c.default,{variant:"hazard-low",dialogTitle:"Button from Focusable Cell",startMessage:"Button Selected",acceptAction:{text:"OK",onClick:function(){l(!1)}}}),r.default.createElement(i.default,{id:"table-focusable-cell",overflowColumns:f,rows:b,rowHeight:"45px",ariaLabel:"Table with Focusable Elements"}))}},89986:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},58168:function(e,t,n){function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},l.apply(this,arguments)}n.d(t,{A:function(){return l}})},53986:function(e,t,n){function l(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},o=Object.keys(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}n.d(t,{A:function(){return l}})}}]);