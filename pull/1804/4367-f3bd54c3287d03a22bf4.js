"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[4367],{49271:function(e,t,n){var a=n(64836),l=n(18698);t.Z=void 0;var o=a(n(27424)),r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==l(e)&&"function"!=typeof e)return{default:e};var n=p(t);if(n&&n.has(e))return n.get(e);var a={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var c=o?Object.getOwnPropertyDescriptor(e,r):null;c&&(c.get||c.set)?Object.defineProperty(a,r,c):a[r]=e[r]}a.default=e,n&&n.set(e,a);return a}(n(67294)),c=a(n(45697)),i=a(n(47166)),s=n(21538),u=a(n(33864)),d=a(n(23399)),m=n(51051),f=a(n(53560));function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(p=function(e){return e?n:t})(e)}var w=i.default.bind(f.default),y={example:c.default.element,exampleSrc:c.default.element,exampleCssSrc:c.default.element,title:c.default.string,description:c.default.node,isExpanded:c.default.bool},v=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},_=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},h=function(e){var t=e.example,n=e.exampleSrc,a=e.exampleCssSrc,l=e.title,c=e.description,i=e.isExpanded,f=(0,r.useState)(i),p=(0,o.default)(f,2),y=p[0],h=p[1],g=(0,r.useState)(!1),C=(0,o.default)(g,2),b=C[0],x=C[1],D=r.default.useContext(s.ThemeContext),E=void 0!==a,S=function(){x(!b),y&&h(!y)},N=function(){h(!y),b&&x(!b)},k=function(e,t){e.nativeEvent.keyCode!==m.KEY_SPACE&&e.nativeEvent.keyCode!==m.KEY_RETURN||(e.preventDefault(),t())};return r.default.createElement("div",{className:w("template",D.className)},r.default.createElement("div",{className:w("header")},l&&r.default.createElement("h2",{className:w("title")},l)),r.default.createElement("div",{className:w("content")},c&&r.default.createElement("div",{className:w("description")},c),t),r.default.createElement("div",{className:w("footer")},n?r.default.createElement("div",{className:w("button-container")},E&&r.default.createElement("button",{type:"button",className:w("css-toggle","item",{"is-selected":b}),onClick:S,onKeyDown:function(e){return k(e,S)},onBlur:v,onMouseDown:_,tabIndex:0,"data-focus-styles-enabled":!0},r.default.createElement(u.default,{className:w("chevron")}),r.default.createElement("span",null,"CSS"),r.default.createElement(d.default,{className:w("chevron")})),r.default.createElement("button",{type:"button",className:w("code-toggle","item",{"is-selected":y}),onClick:N,onKeyDown:function(e){return k(e,N)},onBlur:v,onMouseDown:_,tabIndex:0,"data-focus-styles-enabled":!0},r.default.createElement(u.default,{className:w("chevron")}),r.default.createElement("span",null,"Code"),r.default.createElement(d.default,{className:w("chevron")}))):null,r.default.createElement("div",null,b&&r.default.createElement("div",{className:w("css")},a),y&&r.default.createElement("div",{className:w("code")},n))))};h.propTypes=y,h.defaultProps={isExpanded:!1};var g=h;t.Z=g},29352:function(e,t,n){n.r(t),n.d(t,{default:function(){return y}});var a=n(87462),l=n(44925),o=n(67294),r=n(81254),c=n(37392),i=["components"],s={};function u(e){var t=e.components,n=(0,l.Z)(e,i);return(0,r.mdx)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React, { useState, useCallback } from 'react';\nimport { DisclosureManagerContext } from 'terra-disclosure-manager';\nimport { WorklistDataGrid } from 'terra-data-grid';\nimport DisclosureComponent from './disclosure/DisclosureComponent';\n\nconst gridDataJSON = {\n  cols: [\n    { id: 'Column-0', displayName: 'Patient' },\n    { id: 'Column-1', displayName: 'Location' },\n    { id: 'Column-2', displayName: 'Illness Severity' },\n    { id: 'Column-3', displayName: 'Visit' },\n    { id: 'Column-4', displayName: 'Allergy' },\n    { id: 'Column-5', displayName: 'Primary Contact' },\n    { id: 'Column-6', displayName: 'Generic Order Counts' },\n    { id: 'Column-7', displayName: 'Patient Age' },\n    { id: 'Column-8', displayName: 'Medication History' },\n    { id: 'Column-9', displayName: 'My Relationship' },\n    { id: 'Column-10', displayName: 'Not Selectable', isSelectable: false },\n  ],\n  rows: [\n    {\n      id: '1',\n      ariaLabel: 'First Row',\n      cells: [\n        { content: 'Fleck, Arthur' },\n        { content: '1007-MTN' },\n        { content: 'Unstable' },\n        { content: 'Inpatient, 2 months' },\n        { content: '' },\n        { content: 'Quinzell, Harleen' },\n        { content: '' },\n        { isMasked: true },\n        { isMasked: true },\n        { content: 'Admitting Physician' },\n        { content: '', isSelectable: false },\n      ],\n    },\n    {\n      id: '2',\n      ariaLabel: 'Second Row',\n      cells: [\n        { content: 'Wayne, Bruce' },\n        { content: '1007-MTN-DR' },\n        { content: 'Stable' },\n        { content: 'Outpatient, 2 days' },\n        { content: 'Phytochemicals' },\n        { content: 'Grayson, Richard' },\n        { content: '' },\n        { content: '' },\n        { isMasked: true },\n        { content: 'Admitting Physician' },\n        { content: '', isSelectable: false },\n      ],\n    },\n  ],\n};\nconst CellSelection = () => {\n  const rowHeaderIndex = 0;\n  const { cols, rows } = gridDataJSON;\n  const disclosureManager = React.useContext(DisclosureManagerContext);\n\n  const [rowData, setRowData] = useState(rows);\n\n  const onCellSelect = useCallback((rowId, columnId) => {\n    if (rowId && columnId) {\n      const rowIndex = rowData.findIndex(e => e.id === rowId);\n      const columnIndex = cols.findIndex(e => e.id === columnId);\n\n      // Remove current selections\n      const newRowData = [...rowData];\n      for (let row = 0; row < rowData.length; row += 1) {\n        for (let cell = 0; cell < rowData[row].cells.length; cell += 1) {\n          const currentCell = rowData[row].cells[cell];\n          if (currentCell.isSelected && !(row === rowIndex && cell === columnIndex)) {\n            currentCell.isSelected = false;\n          }\n        }\n      }\n\n      // Toggle selection state of selected cell\n      newRowData[rowIndex].cells[columnIndex].isSelected = !rowData[rowIndex].cells[columnIndex].isSelected;\n      setRowData(newRowData);\n\n      disclosureManager.disclose({\n        preferredType: 'panel',\n        size: 'tiny',\n        content: {\n          component: (\n            <DisclosureComponent\n              columnHeader={cols[columnIndex].displayName}\n              rowHeader={rowData[rowIndex].cells[0].content}\n              content={rowData[rowIndex].cells[columnIndex].content}\n              name={cols[columnIndex].displayName}\n            />\n          ),\n        },\n      });\n    }\n  }, [cols, disclosureManager, rowData]);\n\n  const onClearSelectedCells = useCallback(() => {\n    // Remove current selections\n    const newRowData = [...rowData];\n    for (let row = 0; row < rowData.length; row += 1) {\n      for (let cell = 0; cell < rowData[row].cells.length; cell += 1) {\n        newRowData[row].cells[cell].isSelected = false;\n      }\n    }\n\n    setRowData(newRowData);\n  }, [rowData]);\n\n  return (\n    <WorklistDataGrid\n      id=\"worklist-data-grid-row-selection\"\n      overflowColumns={cols}\n      rows={rowData}\n      rowHeaderIndex={rowHeaderIndex}\n      rowHeight=\"50px\"\n      defaultColumnWidth={100}\n      columnHeaderHeight=\"100px\"\n      ariaLabel=\"Worklist Data Grid With Cell Selection\"\n      onCellSelect={onCellSelect}\n      onClearSelectedCells={onClearSelectedCells}\n    />\n  );\n};\n\nexport default CellSelection;\n\n")))}u.isMDXComponent=!0;var d=n(49271),m=function(e){var t=e.title,n=e.description,a=e.isExpanded;return o.createElement(d.Z,{title:t||"Cell Selection",description:n,example:o.createElement(c.Z,null),exampleSrc:o.createElement(u,null),isExpanded:a})},f=["components"],p={},w="wrapper";function y(e){var t=e.components,n=(0,l.Z)(e,f);return(0,r.mdx)(w,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)(m,{title:"Worklist Data Grid With Cell Selection",mdxType:"CellSelection"}))}y.isMDXComponent=!0},37392:function(e,t,n){var a=n(64836),l=n(18698);t.Z=void 0;var o=a(n(861)),r=a(n(27424)),c=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==l(e)&&"function"!=typeof e)return{default:e};var n=d(t);if(n&&n.has(e))return n.get(e);var a={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var c=o?Object.getOwnPropertyDescriptor(e,r):null;c&&(c.get||c.set)?Object.defineProperty(a,r,c):a[r]=e[r]}a.default=e,n&&n.set(e,a);return a}(n(67294)),i=n(56019),s=n(55730),u=a(n(85635));function d(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(d=function(e){return e?n:t})(e)}var m=[{id:"Column-0",displayName:"Patient"},{id:"Column-1",displayName:"Location"},{id:"Column-2",displayName:"Illness Severity"},{id:"Column-3",displayName:"Visit"},{id:"Column-4",displayName:"Allergy"},{id:"Column-5",displayName:"Primary Contact"},{id:"Column-6",displayName:"Generic Order Counts"},{id:"Column-7",displayName:"Patient Age"},{id:"Column-8",displayName:"Medication History"},{id:"Column-9",displayName:"My Relationship"},{id:"Column-10",displayName:"Not Selectable",isSelectable:!1}],f=[{id:"1",ariaLabel:"First Row",cells:[{content:"Fleck, Arthur"},{content:"1007-MTN"},{content:"Unstable"},{content:"Inpatient, 2 months"},{content:""},{content:"Quinzell, Harleen"},{content:""},{isMasked:!0},{isMasked:!0},{content:"Admitting Physician"},{content:"",isSelectable:!1}]},{id:"2",ariaLabel:"Second Row",cells:[{content:"Wayne, Bruce"},{content:"1007-MTN-DR"},{content:"Stable"},{content:"Outpatient, 2 days"},{content:"Phytochemicals"},{content:"Grayson, Richard"},{content:""},{content:""},{isMasked:!0},{content:"Admitting Physician"},{content:"",isSelectable:!1}]}];t.Z=function(){var e=m,t=f,n=c.default.useContext(i.DisclosureManagerContext),a=(0,c.useState)(t),l=(0,r.default)(a,2),d=l[0],p=l[1],w=(0,c.useCallback)((function(t,a){if(t&&a){for(var l=d.findIndex((function(e){return e.id===t})),r=e.findIndex((function(e){return e.id===a})),i=(0,o.default)(d),s=0;s<d.length;s+=1)for(var m=0;m<d[s].cells.length;m+=1){var f=d[s].cells[m];!f.isSelected||s===l&&m===r||(f.isSelected=!1)}i[l].cells[r].isSelected=!d[l].cells[r].isSelected,p(i),n.disclose({preferredType:"panel",size:"tiny",content:{component:c.default.createElement(u.default,{columnHeader:e[r].displayName,rowHeader:d[l].cells[0].content,content:d[l].cells[r].content,name:e[r].displayName})}})}}),[e,n,d]),y=(0,c.useCallback)((function(){for(var e=(0,o.default)(d),t=0;t<d.length;t+=1)for(var n=0;n<d[t].cells.length;n+=1)e[t].cells[n].isSelected=!1;p(e)}),[d]);return c.default.createElement(s.WorklistDataGrid,{id:"worklist-data-grid-row-selection",overflowColumns:e,rows:d,rowHeaderIndex:0,rowHeight:"50px",defaultColumnWidth:100,columnHeaderHeight:"100px",ariaLabel:"Worklist Data Grid With Cell Selection",onCellSelect:w,onClearSelectedCells:y})}},85635:function(e,t,n){var a=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=a(n(56690)),o=a(n(89728)),r=a(n(66115)),c=a(n(61655)),i=a(n(94993)),s=a(n(73808)),u=a(n(67294)),d=a(n(45697)),m=a(n(47166)),f=a(n(55281)),p=a(n(10027)),w=a(n(17092)),y=n(56019),v=a(n(81606));function _(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=(0,s.default)(e);if(t){var l=(0,s.default)(this).constructor;n=Reflect.construct(a,arguments,l)}else n=a.apply(this,arguments);return(0,i.default)(this,n)}}var h=m.default.bind(v.default),g={name:d.default.string,content:d.default.string,rowHeader:d.default.string,columnHeader:d.default.string,disclosureManager:y.disclosureManagerShape},C=function(e){(0,c.default)(n,e);var t=_(n);function n(e){var a;return(0,l.default)(this,n),(a=t.call(this,e)).checkLockState=a.checkLockState.bind((0,r.default)(a)),a.state={text:void 0},a}return(0,o.default)(n,[{key:"componentDidMount",value:function(){var e=this.props.disclosureManager;e&&e.registerDismissCheck&&e.registerDismissCheck(this.checkLockState)}},{key:"checkLockState",value:function(){var e=this;return this.state.text&&this.state.text.length?new Promise((function(t,n){confirm("".concat(e.props.name," has unsaved changes that will be lost. Do you wish to continue?"))?t():n()})):Promise.resolve()}},{key:"render",value:function(){var e=this.props,t=e.disclosureManager,n=e.name,a=e.content,l=e.rowHeader,o=e.columnHeader;return u.default.createElement(p.default,{fill:!0,header:u.default.createElement(w.default,{title:"Disclosure - ".concat(n),onClose:t.closeDisclosure})},u.default.createElement("div",{className:h("content-wrapper")},u.default.createElement("h3",null,"".concat(l," - ").concat(o)),u.default.createElement("p",null,a),u.default.createElement(f.default,{text:"Dismiss",onClick:function(){t.dismiss().catch((function(){console.log("Dismiss failed. A lock must be in place.")}))}})))}}]),n}(u.default.Component);C.propTypes=g,C.defaultProps={name:"Disclosure Component"};var b=(0,y.withDisclosureManager)(C);t.default=b},53560:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},81606:function(e,t,n){n.r(t),t.default={"content-wrapper":"DisclosureComponent-module__content-wrapper___2tYpZ"}},33864:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(67294)),l=o(n(99139));function o(e){return e&&e.__esModule?e:{default:e}}function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}var c=function(e){var t=r({},e);return a.default.createElement(l.default,t,a.default.createElement("path",{d:"M10.3 24 33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};c.displayName="IconChevronLeft",c.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};var i=c;t.default=i},84784:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(67294)),l=o(n(99139));function o(e){return e&&e.__esModule?e:{default:e}}function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}var c=function(e){var t=r({},e);return a.default.createElement(l.default,t,a.default.createElement("path",{d:"m47.9 24.5-3.8-3.8L27 37.4V0h-6v37.4L3.9 20.7.1 24.5 24 48z"}))};c.displayName="IconDown",c.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};var i=c;t.default=i},33710:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(67294)),l=o(n(99139));function o(e){return e&&e.__esModule?e:{default:e}}function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}var c=function(e){var t=r({},e);return a.default.createElement(l.default,t,a.default.createElement("path",{d:"M24 0 .1 23.5l3.8 3.8L21 10.6V48h6V10.6l17.1 16.7 3.8-3.8z"}))};c.displayName="IconUp",c.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};var i=c;t.default=i},87462:function(e,t,n){function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},a.apply(this,arguments)}n.d(t,{Z:function(){return a}})},44925:function(e,t,n){function a(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}n.d(t,{Z:function(){return a}})}}]);