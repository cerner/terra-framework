"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[4367],{49271:function(e,t,n){var l=n(64836),a=n(18698);t.Z=void 0;var o=l(n(27424)),r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var n=p(t);if(n&&n.has(e))return n.get(e);var l={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var c=o?Object.getOwnPropertyDescriptor(e,r):null;c&&(c.get||c.set)?Object.defineProperty(l,r,c):l[r]=e[r]}l.default=e,n&&n.set(e,l);return l}(n(67294)),c=l(n(45697)),i=l(n(47166)),s=n(21538),d=l(n(33864)),u=l(n(23399)),m=n(51051),f=l(n(53560));function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(p=function(e){return e?n:t})(e)}var h=i.default.bind(f.default),w={example:c.default.element,exampleSrc:c.default.element,exampleCssSrc:c.default.element,title:c.default.string,description:c.default.node,isExpanded:c.default.bool},y=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},v=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},_=function(e){var t=e.example,n=e.exampleSrc,l=e.exampleCssSrc,a=e.title,c=e.description,i=e.isExpanded,f=(0,r.useState)(i),p=(0,o.default)(f,2),w=p[0],_=p[1],b=(0,r.useState)(!1),g=(0,o.default)(b,2),x=g[0],C=g[1],k=r.default.useContext(s.ThemeContext),D=void 0!==l,E=function(){C(!x),w&&_(!w)},S=function(){_(!w),x&&C(!x)},N=function(e,t){e.nativeEvent.keyCode!==m.KEY_SPACE&&e.nativeEvent.keyCode!==m.KEY_RETURN||(e.preventDefault(),t())};return r.default.createElement("div",{className:h("template",k.className)},r.default.createElement("div",{className:h("header")},a&&r.default.createElement("h2",{className:h("title")},a)),r.default.createElement("div",{className:h("content")},c&&r.default.createElement("div",{className:h("description")},c),t),r.default.createElement("div",{className:h("footer")},n?r.default.createElement("div",{className:h("button-container")},D&&r.default.createElement("button",{type:"button",className:h("css-toggle","item",{"is-selected":x}),onClick:E,onKeyDown:function(e){return N(e,E)},onBlur:y,onMouseDown:v,tabIndex:0,"data-focus-styles-enabled":!0},r.default.createElement(d.default,{className:h("chevron")}),r.default.createElement("span",null,"CSS"),r.default.createElement(u.default,{className:h("chevron")})),r.default.createElement("button",{type:"button",className:h("code-toggle","item",{"is-selected":w}),onClick:S,onKeyDown:function(e){return N(e,S)},onBlur:y,onMouseDown:v,tabIndex:0,"data-focus-styles-enabled":!0},r.default.createElement(d.default,{className:h("chevron")}),r.default.createElement("span",null,"Code"),r.default.createElement(u.default,{className:h("chevron")}))):null,r.default.createElement("div",null,x&&r.default.createElement("div",{className:h("css")},l),w&&r.default.createElement("div",{className:h("code")},n))))};_.propTypes=w,_.defaultProps={isExpanded:!1};var b=_;t.Z=b},29352:function(e,t,n){n.r(t),n.d(t,{default:function(){return w}});var l=n(87462),a=n(44925),o=n(67294),r=n(81254),c=n(37392),i=["components"],s={};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.mdx)("wrapper",(0,l.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React, { useState, useCallback } from 'react';\nimport { DisclosureManagerContext } from 'terra-disclosure-manager';\nimport { WorklistDataGrid } from 'terra-data-grid';\nimport DisclosureComponent from './disclosure/DisclosureComponent';\n\nconst gridDataJSON = {\n  cols: [\n    { id: 'Column-0', displayName: 'Patient' },\n    { id: 'Column-1', displayName: 'Location' },\n    { id: 'Column-2', displayName: 'Illness Severity' },\n    { id: 'Column-3', displayName: 'Visit' },\n    { id: 'Column-4', displayName: 'Allergy' },\n    { id: 'Column-5', displayName: 'Primary Contact' },\n    { id: 'Column-6', displayName: 'Generic Order Counts' },\n    { id: 'Column-7', displayName: 'Patient Age' },\n    { id: 'Column-8', displayName: 'Medication History' },\n    { id: 'Column-9', displayName: 'My Relationship' },\n    { id: 'Column-10', displayName: 'Not Selectable', isSelectable: false },\n  ],\n  rows: [\n    {\n      id: '1',\n      ariaLabel: 'First Row',\n      cells: [\n        { content: 'Fleck, Arthur' },\n        { content: '1007-MTN' },\n        { content: 'Unstable' },\n        { content: 'Inpatient, 2 months' },\n        { content: '' },\n        { content: 'Quinzell, Harleen' },\n        { content: '' },\n        { isMasked: true }, // This cell's content will be masked\n        { isMasked: true },\n        { content: 'Admitting Physician' },\n        { content: '', isSelectable: false }, // This cell cannot be selected via click but can receive focus when navigating through keyboard\n      ],\n    },\n    {\n      id: '2',\n      ariaLabel: 'Second Row',\n      cells: [\n        { content: 'Wayne, Bruce' },\n        { content: '1007-MTN-DR' },\n        { content: 'Stable' },\n        { content: 'Outpatient, 2 days' },\n        { content: 'Phytochemicals' },\n        { content: 'Grayson, Richard' },\n        { content: '' },\n        { content: '' },\n        { isMasked: true },\n        { content: 'Admitting Physician' },\n        { content: '', isSelectable: false },\n      ],\n    },\n  ],\n};\n\nconst CellSelection = () => {\n  const rowHeaderIndex = 0;\n  const { cols, rows } = gridDataJSON;\n  const disclosureManager = React.useContext(DisclosureManagerContext);\n\n  const [rowData, setRowData] = useState(rows);\n\n  const onCellSelect = useCallback((rowId, columnId) => {\n    if (rowId && columnId) {\n      const rowIndex = rowData.findIndex(e => e.id === rowId);\n      const columnIndex = cols.findIndex(e => e.id === columnId);\n\n      // Remove current selections as the Worklist Data Grid can have only one selected cell at any instance.\n      const newRowData = [...rowData];\n      for (let row = 0; row < rowData.length; row += 1) {\n        for (let cell = 0; cell < rowData[row].cells.length; cell += 1) {\n          const currentCell = rowData[row].cells[cell];\n          if (currentCell.isSelected && !(row === rowIndex && cell === columnIndex)) {\n            currentCell.isSelected = false;\n          }\n        }\n      }\n\n      // Toggle selection state of selected cell\n      newRowData[rowIndex].cells[columnIndex].isSelected = !rowData[rowIndex].cells[columnIndex].isSelected;\n      setRowData(newRowData);\n\n      // Example illustrates implementation of a Disclosure Manager on selection of a cell.\n      disclosureManager.disclose({\n        preferredType: 'panel',\n        size: 'tiny',\n        content: {\n          component: (\n            <DisclosureComponent\n              columnHeader={cols[columnIndex].displayName}\n              rowHeader={rowData[rowIndex].cells[0].content}\n              content={rowData[rowIndex].cells[columnIndex].content}\n              name={cols[columnIndex].displayName}\n            />\n          ),\n        },\n      });\n    }\n  }, [cols, disclosureManager, rowData]);\n\n  const onClearSelectedCells = useCallback(() => {\n    // Remove current selections\n    const newRowData = [...rowData];\n    for (let row = 0; row < rowData.length; row += 1) {\n      for (let cell = 0; cell < rowData[row].cells.length; cell += 1) {\n        newRowData[row].cells[cell].isSelected = false;\n      }\n    }\n\n    setRowData(newRowData);\n  }, [rowData]);\n\n  return (\n    <WorklistDataGrid\n      id=\"worklist-data-grid-row-selection\"\n      overflowColumns={cols} // Column Headers\n      rows={rowData} // Rows with cell data\n      rowHeaderIndex={rowHeaderIndex}\n      rowHeight=\"50px\"\n      defaultColumnWidth={100}\n      columnHeaderHeight=\"100px\"\n      ariaLabel=\"Worklist Data Grid With Cell Selection\"\n      onCellSelect={onCellSelect} // For cell selection, a callback function must be provided so that the Worklist Data Grid can invoke it when a cell is selective.\n      onClearSelectedCells={onClearSelectedCells} // To clear the selection of a cell, a callback function must be provided so that the Worklist Data Grid can execute it to clear the selection.\n    />\n  );\n};\n\nexport default CellSelection;\n\n")))}d.isMDXComponent=!0;var u=n(49271),m=function(e){var t=e.title,n=e.description,l=e.isExpanded;return o.createElement(u.Z,{title:t||"Cell Selection",description:n,example:o.createElement(c.Z,null),exampleSrc:o.createElement(d,null),isExpanded:l})},f=["components"],p={},h="wrapper";function w(e){var t=e.components,n=(0,a.Z)(e,f);return(0,r.mdx)(h,(0,l.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"cell-selection"},"Cell Selection"),(0,r.mdx)("h3",{id:"description"},"Description"),(0,r.mdx)("p",null,"This example demonstrates a ",(0,r.mdx)("a",{parentName:"p",href:"/terra-framework/pull/1843/components/cerner-terra-framework-docs/data-grid/worklist-data-grid/about"},"Worklist Data Grid")," that has support for cell selection.\nA cell is selected by clicking on the cell or pressing the Spacebar on the focused\ncell. Only cells that are selectable and not masked can be selected.\nA cell is selectable by default."),(0,r.mdx)("h3",{id:"properties-required"},"Properties required"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"The ",(0,r.mdx)("strong",{parentName:"li"},"onCellSelect")," callback prop: When the user selects a cell, this callback will be called with the rowId and columnId of the selected cell.\nIn this example, the information is used to look up the matching cell information in the input data and disclose additional information for that cell.\nThe ",(0,r.mdx)("inlineCode",{parentName:"li"},"selected")," attribute of the matching cell in the row data is toggled to be true. But an end user may choose to do nothing when the cell is already selected.\nSince only one cell may be selected, any previous cell selection is cleared before a new cell is selected.")),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"The ",(0,r.mdx)("strong",{parentName:"li"},"onClearSelectedCells")," callback prop: When the user presses Escape, this callback gets called. In this example, the selected attribute of any selected cell is set to false and the Worklist Data Grid is re-rendered.")),(0,r.mdx)(m,{title:"",mdxType:"CellSelection"}))}w.isMDXComponent=!0},37392:function(e,t,n){var l=n(64836),a=n(18698);t.Z=void 0;var o=l(n(861)),r=l(n(27424)),c=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var n=u(t);if(n&&n.has(e))return n.get(e);var l={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var c=o?Object.getOwnPropertyDescriptor(e,r):null;c&&(c.get||c.set)?Object.defineProperty(l,r,c):l[r]=e[r]}return l.default=e,n&&n.set(e,l),l}(n(67294)),i=n(56019),s=n(55730),d=l(n(85635));function u(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(u=function(e){return e?n:t})(e)}var m=[{id:"Column-0",displayName:"Patient"},{id:"Column-1",displayName:"Location"},{id:"Column-2",displayName:"Illness Severity"},{id:"Column-3",displayName:"Visit"},{id:"Column-4",displayName:"Allergy"},{id:"Column-5",displayName:"Primary Contact"},{id:"Column-6",displayName:"Generic Order Counts"},{id:"Column-7",displayName:"Patient Age"},{id:"Column-8",displayName:"Medication History"},{id:"Column-9",displayName:"My Relationship"},{id:"Column-10",displayName:"Not Selectable",isSelectable:!1}],f=[{id:"1",ariaLabel:"First Row",cells:[{content:"Fleck, Arthur"},{content:"1007-MTN"},{content:"Unstable"},{content:"Inpatient, 2 months"},{content:""},{content:"Quinzell, Harleen"},{content:""},{isMasked:!0},{isMasked:!0},{content:"Admitting Physician"},{content:"",isSelectable:!1}]},{id:"2",ariaLabel:"Second Row",cells:[{content:"Wayne, Bruce"},{content:"1007-MTN-DR"},{content:"Stable"},{content:"Outpatient, 2 days"},{content:"Phytochemicals"},{content:"Grayson, Richard"},{content:""},{content:""},{isMasked:!0},{content:"Admitting Physician"},{content:"",isSelectable:!1}]}];t.Z=function(){var e=m,t=f,n=c.default.useContext(i.DisclosureManagerContext),l=(0,c.useState)(t),a=(0,r.default)(l,2),u=a[0],p=a[1],h=(0,c.useCallback)((function(t,l){if(t&&l){for(var a=u.findIndex((function(e){return e.id===t})),r=e.findIndex((function(e){return e.id===l})),i=(0,o.default)(u),s=0;s<u.length;s+=1)for(var m=0;m<u[s].cells.length;m+=1){var f=u[s].cells[m];!f.isSelected||s===a&&m===r||(f.isSelected=!1)}i[a].cells[r].isSelected=!u[a].cells[r].isSelected,p(i),n.disclose({preferredType:"panel",size:"tiny",content:{component:c.default.createElement(d.default,{columnHeader:e[r].displayName,rowHeader:u[a].cells[0].content,content:u[a].cells[r].content,name:e[r].displayName})}})}}),[e,n,u]),w=(0,c.useCallback)((function(){for(var e=(0,o.default)(u),t=0;t<u.length;t+=1)for(var n=0;n<u[t].cells.length;n+=1)e[t].cells[n].isSelected=!1;p(e)}),[u]);return c.default.createElement(s.WorklistDataGrid,{id:"worklist-data-grid-row-selection",overflowColumns:e,rows:u,rowHeaderIndex:0,rowHeight:"50px",defaultColumnWidth:100,columnHeaderHeight:"100px",ariaLabel:"Worklist Data Grid With Cell Selection",onCellSelect:h,onClearSelectedCells:w})}},85635:function(e,t,n){var l=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(56690)),o=l(n(89728)),r=l(n(66115)),c=l(n(61655)),i=l(n(94993)),s=l(n(73808)),d=l(n(67294)),u=l(n(45697)),m=l(n(47166)),f=l(n(55281)),p=l(n(10027)),h=l(n(17092)),w=n(56019),y=l(n(81606));function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,l=(0,s.default)(e);if(t){var a=(0,s.default)(this).constructor;n=Reflect.construct(l,arguments,a)}else n=l.apply(this,arguments);return(0,i.default)(this,n)}}var _=m.default.bind(y.default),b={name:u.default.string,content:u.default.string,rowHeader:u.default.string,columnHeader:u.default.string,disclosureManager:w.disclosureManagerShape},g=function(e){(0,c.default)(n,e);var t=v(n);function n(e){var l;return(0,a.default)(this,n),(l=t.call(this,e)).checkLockState=l.checkLockState.bind((0,r.default)(l)),l.state={text:void 0},l}return(0,o.default)(n,[{key:"componentDidMount",value:function(){var e=this.props.disclosureManager;e&&e.registerDismissCheck&&e.registerDismissCheck(this.checkLockState)}},{key:"checkLockState",value:function(){var e=this;return this.state.text&&this.state.text.length?new Promise((function(t,n){confirm("".concat(e.props.name," has unsaved changes that will be lost. Do you wish to continue?"))?t():n()})):Promise.resolve()}},{key:"render",value:function(){var e=this.props,t=e.disclosureManager,n=e.name,l=e.content,a=e.rowHeader,o=e.columnHeader;return d.default.createElement(p.default,{fill:!0,header:d.default.createElement(h.default,{title:"Disclosure - ".concat(n),onClose:t.closeDisclosure})},d.default.createElement("div",{className:_("content-wrapper")},d.default.createElement("h3",null,"".concat(a," - ").concat(o)),d.default.createElement("p",null,l),d.default.createElement(f.default,{text:"Dismiss",onClick:function(){t.dismiss().catch((function(){console.log("Dismiss failed. A lock must be in place.")}))}})))}}]),n}(d.default.Component);g.propTypes=b,g.defaultProps={name:"Disclosure Component"};var x=(0,w.withDisclosureManager)(g);t.default=x},53560:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},81606:function(e,t,n){n.r(t),t.default={"content-wrapper":"DisclosureComponent-module__content-wrapper___2tYpZ"}},33864:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=o(n(67294)),a=o(n(99139));function o(e){return e&&e.__esModule?e:{default:e}}function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},r.apply(this,arguments)}var c=function(e){var t=r({},e);return l.default.createElement(a.default,t,l.default.createElement("path",{d:"M10.3 24 33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};c.displayName="IconChevronLeft",c.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};t.default=c},84784:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=o(n(67294)),a=o(n(99139));function o(e){return e&&e.__esModule?e:{default:e}}function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},r.apply(this,arguments)}var c=function(e){var t=r({},e);return l.default.createElement(a.default,t,l.default.createElement("path",{d:"m47.9 24.5-3.8-3.8L27 37.4V0h-6v37.4L3.9 20.7.1 24.5 24 48z"}))};c.displayName="IconDown",c.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};t.default=c},33710:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=o(n(67294)),a=o(n(99139));function o(e){return e&&e.__esModule?e:{default:e}}function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},r.apply(this,arguments)}var c=function(e){var t=r({},e);return l.default.createElement(a.default,t,l.default.createElement("path",{d:"M24 0 .1 23.5l3.8 3.8L21 10.6V48h6V10.6l17.1 16.7 3.8-3.8z"}))};c.displayName="IconUp",c.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};t.default=c},87462:function(e,t,n){function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},l.apply(this,arguments)}n.d(t,{Z:function(){return l}})},44925:function(e,t,n){function l(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},o=Object.keys(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}n.d(t,{Z:function(){return l}})}}]);