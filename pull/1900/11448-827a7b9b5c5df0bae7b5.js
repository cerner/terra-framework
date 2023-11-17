"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[11448,47209],{49271:function(e,t,n){var a=n(64836),l=n(18698);t.Z=void 0;var o=a(n(27424)),r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==l(e)&&"function"!=typeof e)return{default:e};var n=m(t);if(n&&n.has(e))return n.get(e);var a={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var i=o?Object.getOwnPropertyDescriptor(e,r):null;i&&(i.get||i.set)?Object.defineProperty(a,r,i):a[r]=e[r]}a.default=e,n&&n.set(e,a);return a}(n(67294)),i=a(n(45697)),c=a(n(47166)),s=n(21538),u=a(n(33864)),d=a(n(23399)),f=n(51051),p=a(n(53560));function m(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(m=function(e){return e?n:t})(e)}var y=c.default.bind(p.default),h={example:i.default.element,exampleSrc:i.default.element,exampleCssSrc:i.default.element,title:i.default.string,description:i.default.node,isExpanded:i.default.bool},b=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},w=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},_=function(e){var t=e.example,n=e.exampleSrc,a=e.exampleCssSrc,l=e.title,i=e.description,c=e.isExpanded,p=(0,r.useState)(c),m=(0,o.default)(p,2),h=m[0],_=m[1],v=(0,r.useState)(!1),g=(0,o.default)(v,2),x=g[0],C=g[1],O=r.default.useContext(s.ThemeContext),S=void 0!==a,k=function(){C(!x),h&&_(!h)},D=function(){_(!h),x&&C(!x)},E=function(e,t){e.nativeEvent.keyCode!==f.KEY_SPACE&&e.nativeEvent.keyCode!==f.KEY_RETURN||(e.preventDefault(),t())};return r.default.createElement("div",{className:y("template",O.className)},r.default.createElement("div",{className:y("header")},l&&r.default.createElement("h2",{className:y("title")},l)),r.default.createElement("div",{className:y("content")},i&&r.default.createElement("div",{className:y("description")},i),t),r.default.createElement("div",{className:y("footer")},n?r.default.createElement("div",{className:y("button-container")},S&&r.default.createElement("button",{type:"button",className:y("css-toggle","item",{"is-selected":x}),onClick:k,onKeyDown:function(e){return E(e,k)},onBlur:b,onMouseDown:w,tabIndex:0,"data-focus-styles-enabled":!0},r.default.createElement(u.default,{className:y("chevron")}),r.default.createElement("span",null,"CSS"),r.default.createElement(d.default,{className:y("chevron")})),r.default.createElement("button",{type:"button",className:y("code-toggle","item",{"is-selected":h}),onClick:D,onKeyDown:function(e){return E(e,D)},onBlur:b,onMouseDown:w,tabIndex:0,"data-focus-styles-enabled":!0},r.default.createElement(u.default,{className:y("chevron")}),r.default.createElement("span",null,"Code"),r.default.createElement(d.default,{className:y("chevron")}))):null,r.default.createElement("div",null,x&&r.default.createElement("div",{className:y("css")},a),h&&r.default.createElement("div",{className:y("code")},n))))};_.propTypes=h,_.defaultProps={isExpanded:!1};var v=_;t.Z=v},29352:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var a=n(87462),l=n(44925),o=n(67294),r=n(81254),i=n(37392),c=["components"],s={};function u(e){var t=e.components,n=(0,l.Z)(e,c);return(0,r.mdx)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React, { useState, useCallback } from 'react';\nimport { DisclosureManagerContext } from 'terra-disclosure-manager';\nimport { WorklistDataGrid } from 'terra-data-grid';\nimport DisclosureComponent from './disclosure/DisclosureComponent';\n\nconst gridDataJSON = {\n  cols: [\n    { id: 'Column-0', displayName: 'Patient' },\n    { id: 'Column-1', displayName: 'Location' },\n    { id: 'Column-2', displayName: 'Illness Severity' },\n    { id: 'Column-3', displayName: 'Visit' },\n    { id: 'Column-4', displayName: 'Allergy' },\n    { id: 'Column-5', displayName: 'Primary Contact' },\n    { id: 'Column-6', displayName: 'Generic Order Counts' },\n    { id: 'Column-7', displayName: 'Patient Age' },\n    { id: 'Column-8', displayName: 'Medication History' },\n    { id: 'Column-9', displayName: 'My Relationship' },\n    { id: 'Column-10', displayName: 'Not Selectable', isSelectable: false },\n  ],\n  rows: [\n    {\n      id: '1',\n      ariaLabel: 'First Row',\n      cells: [\n        { content: 'Fleck, Arthur' },\n        { content: '1007-MTN' },\n        { content: 'Unstable' },\n        { content: 'Inpatient, 2 months' },\n        { content: '' },\n        { content: 'Quinzell, Harleen' },\n        { content: '' },\n        { isMasked: true }, // This cell's content will be masked\n        { isMasked: true },\n        { content: 'Admitting Physician' },\n        { content: '', isSelectable: false }, // This cell cannot be selected via click but can receive focus when navigating through keyboard\n      ],\n    },\n    {\n      id: '2',\n      ariaLabel: 'Second Row',\n      cells: [\n        { content: 'Wayne, Bruce' },\n        { content: '1007-MTN-DR' },\n        { content: 'Stable' },\n        { content: 'Outpatient, 2 days' },\n        { content: 'Phytochemicals' },\n        { content: 'Grayson, Richard' },\n        { content: '' },\n        { content: '' },\n        { isMasked: true },\n        { content: 'Admitting Physician' },\n        { content: '', isSelectable: false },\n      ],\n    },\n  ],\n};\n\nconst CellSelection = () => {\n  const rowHeaderIndex = 0;\n  const { cols, rows } = gridDataJSON;\n  const disclosureManager = React.useContext(DisclosureManagerContext);\n\n  const [rowData, setRowData] = useState(rows);\n\n  const onCellSelect = useCallback((rowId, columnId) => {\n    if (rowId && columnId) {\n      const rowIndex = rowData.findIndex(e => e.id === rowId);\n      const columnIndex = cols.findIndex(e => e.id === columnId);\n\n      // Remove current selections as the Worklist Data Grid can have only one selected cell at any instance.\n      const newRowData = [...rowData];\n      for (let row = 0; row < rowData.length; row += 1) {\n        for (let cell = 0; cell < rowData[row].cells.length; cell += 1) {\n          const currentCell = rowData[row].cells[cell];\n          if (currentCell.isSelected && !(row === rowIndex && cell === columnIndex)) {\n            currentCell.isSelected = false;\n          }\n        }\n      }\n\n      // Toggle selection state of selected cell\n      newRowData[rowIndex].cells[columnIndex].isSelected = !rowData[rowIndex].cells[columnIndex].isSelected;\n      setRowData(newRowData);\n\n      // Example illustrates implementation of a Disclosure Manager on selection of a cell.\n      disclosureManager.disclose({\n        preferredType: 'panel',\n        size: 'tiny',\n        content: {\n          component: (\n            <DisclosureComponent\n              columnHeader={cols[columnIndex].displayName}\n              rowHeader={rowData[rowIndex].cells[0].content}\n              content={rowData[rowIndex].cells[columnIndex].content}\n              name={cols[columnIndex].displayName}\n            />\n          ),\n        },\n      });\n    }\n  }, [cols, disclosureManager, rowData]);\n\n  const onClearSelectedCells = useCallback(() => {\n    // Remove current selections\n    const newRowData = [...rowData];\n    for (let row = 0; row < rowData.length; row += 1) {\n      for (let cell = 0; cell < rowData[row].cells.length; cell += 1) {\n        newRowData[row].cells[cell].isSelected = false;\n      }\n    }\n\n    setRowData(newRowData);\n  }, [rowData]);\n\n  return (\n    <WorklistDataGrid\n      id=\"worklist-data-grid-row-selection\"\n      overflowColumns={cols} // Column Headers\n      rows={rowData} // Rows with cell data\n      rowHeaderIndex={rowHeaderIndex}\n      rowHeight=\"50px\"\n      defaultColumnWidth={100}\n      columnHeaderHeight=\"100px\"\n      ariaLabel=\"Worklist Data Grid With Cell Selection\"\n      onCellSelect={onCellSelect} // For cell selection, a callback function must be provided so that the Worklist Data Grid can invoke it when a cell is selective.\n      onClearSelectedCells={onClearSelectedCells} // To clear the selection of a cell, a callback function must be provided so that the Worklist Data Grid can execute it to clear the selection.\n    />\n  );\n};\n\nexport default CellSelection;\n\n")))}u.isMDXComponent=!0;var d=n(49271),f=function(e){var t=e.title,n=e.description,a=e.isExpanded;return o.createElement(d.Z,{title:t||"Cell Selection",description:n,example:o.createElement(i.Z,null),exampleSrc:o.createElement(u,null),isExpanded:a})},p=["components"],m={},y="wrapper";function h(e){var t=e.components,n=(0,l.Z)(e,p);return(0,r.mdx)(y,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"cell-selection"},"Cell Selection"),(0,r.mdx)("h3",{id:"description"},"Description"),(0,r.mdx)("p",null,"This example demonstrates a ",(0,r.mdx)("a",{parentName:"p",href:"/terra-framework/pull/1900/components/cerner-terra-framework-docs/data-grid/worklist-data-grid/about"},"Worklist Data Grid")," that has support for cell selection.\nA cell is selected by clicking on the cell or pressing the Spacebar on the focused\ncell. Only cells that are selectable and not masked can be selected.\nA cell is selectable by default."),(0,r.mdx)("h3",{id:"properties-required"},"Properties required"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"The ",(0,r.mdx)("strong",{parentName:"li"},"onCellSelect")," callback prop: When the user selects a cell, this callback will be called with the rowId and columnId of the selected cell.\nIn this example, the information is used to look up the matching cell information in the input data and disclose additional information for that cell.\nThe ",(0,r.mdx)("inlineCode",{parentName:"li"},"selected")," attribute of the matching cell in the row data is toggled to be true. But an end user may choose to do nothing when the cell is already selected.\nSince only one cell may be selected, any previous cell selection is cleared before a new cell is selected.")),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"The ",(0,r.mdx)("strong",{parentName:"li"},"onClearSelectedCells")," callback prop: When the user presses Escape, this callback gets called. In this example, the selected attribute of any selected cell is set to false and the Worklist Data Grid is re-rendered.")),(0,r.mdx)(f,{title:"",mdxType:"CellSelection"}))}h.isMDXComponent=!0},37392:function(e,t,n){var a=n(64836),l=n(18698);t.Z=void 0;var o=a(n(861)),r=a(n(27424)),i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=l(e)&&"function"!=typeof e)return{default:e};var n=d(t);if(n&&n.has(e))return n.get(e);var a={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var i=o?Object.getOwnPropertyDescriptor(e,r):null;i&&(i.get||i.set)?Object.defineProperty(a,r,i):a[r]=e[r]}return a.default=e,n&&n.set(e,a),a}(n(67294)),c=n(56019),s=n(55730),u=a(n(85635));function d(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(d=function(e){return e?n:t})(e)}var f=[{id:"Column-0",displayName:"Patient"},{id:"Column-1",displayName:"Location"},{id:"Column-2",displayName:"Illness Severity"},{id:"Column-3",displayName:"Visit"},{id:"Column-4",displayName:"Allergy"},{id:"Column-5",displayName:"Primary Contact"},{id:"Column-6",displayName:"Generic Order Counts"},{id:"Column-7",displayName:"Patient Age"},{id:"Column-8",displayName:"Medication History"},{id:"Column-9",displayName:"My Relationship"},{id:"Column-10",displayName:"Not Selectable",isSelectable:!1}],p=[{id:"1",ariaLabel:"First Row",cells:[{content:"Fleck, Arthur"},{content:"1007-MTN"},{content:"Unstable"},{content:"Inpatient, 2 months"},{content:""},{content:"Quinzell, Harleen"},{content:""},{isMasked:!0},{isMasked:!0},{content:"Admitting Physician"},{content:"",isSelectable:!1}]},{id:"2",ariaLabel:"Second Row",cells:[{content:"Wayne, Bruce"},{content:"1007-MTN-DR"},{content:"Stable"},{content:"Outpatient, 2 days"},{content:"Phytochemicals"},{content:"Grayson, Richard"},{content:""},{content:""},{isMasked:!0},{content:"Admitting Physician"},{content:"",isSelectable:!1}]}];t.Z=function(){var e=f,t=p,n=i.default.useContext(c.DisclosureManagerContext),a=(0,i.useState)(t),l=(0,r.default)(a,2),d=l[0],m=l[1],y=(0,i.useCallback)((function(t,a){if(t&&a){for(var l=d.findIndex((function(e){return e.id===t})),r=e.findIndex((function(e){return e.id===a})),c=(0,o.default)(d),s=0;s<d.length;s+=1)for(var f=0;f<d[s].cells.length;f+=1){var p=d[s].cells[f];!p.isSelected||s===l&&f===r||(p.isSelected=!1)}c[l].cells[r].isSelected=!d[l].cells[r].isSelected,m(c),n.disclose({preferredType:"panel",size:"tiny",content:{component:i.default.createElement(u.default,{columnHeader:e[r].displayName,rowHeader:d[l].cells[0].content,content:d[l].cells[r].content,name:e[r].displayName})}})}}),[e,n,d]),h=(0,i.useCallback)((function(){for(var e=(0,o.default)(d),t=0;t<d.length;t+=1)for(var n=0;n<d[t].cells.length;n+=1)e[t].cells[n].isSelected=!1;m(e)}),[d]);return i.default.createElement(s.WorklistDataGrid,{id:"worklist-data-grid-row-selection",overflowColumns:e,rows:d,rowHeaderIndex:0,rowHeight:"50px",defaultColumnWidth:100,columnHeaderHeight:"100px",ariaLabel:"Worklist Data Grid With Cell Selection",onCellSelect:y,onClearSelectedCells:h})}},85635:function(e,t,n){var a=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=a(n(56690)),o=a(n(89728)),r=a(n(66115)),i=a(n(61655)),c=a(n(94993)),s=a(n(73808)),u=a(n(67294)),d=a(n(45697)),f=a(n(47166)),p=a(n(55281)),m=a(n(10027)),y=a(n(17092)),h=n(56019),b=a(n(81606));function w(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=(0,s.default)(e);if(t){var l=(0,s.default)(this).constructor;n=Reflect.construct(a,arguments,l)}else n=a.apply(this,arguments);return(0,c.default)(this,n)}}var _=f.default.bind(b.default),v={name:d.default.string,content:d.default.string,rowHeader:d.default.string,columnHeader:d.default.string,disclosureManager:h.disclosureManagerShape},g=function(e){(0,i.default)(n,e);var t=w(n);function n(e){var a;return(0,l.default)(this,n),(a=t.call(this,e)).checkLockState=a.checkLockState.bind((0,r.default)(a)),a.state={text:void 0},a}return(0,o.default)(n,[{key:"componentDidMount",value:function(){var e=this.props.disclosureManager;e&&e.registerDismissCheck&&e.registerDismissCheck(this.checkLockState)}},{key:"checkLockState",value:function(){var e=this;return this.state.text&&this.state.text.length?new Promise((function(t,n){confirm("".concat(e.props.name," has unsaved changes that will be lost. Do you wish to continue?"))?t():n()})):Promise.resolve()}},{key:"render",value:function(){var e=this.props,t=e.disclosureManager,n=e.name,a=e.content,l=e.rowHeader,o=e.columnHeader;return u.default.createElement(m.default,{fill:!0,header:u.default.createElement(y.default,{title:"Disclosure - ".concat(n),onClose:t.closeDisclosure})},u.default.createElement("div",{className:_("content-wrapper")},u.default.createElement("h3",null,"".concat(l," - ").concat(o)),u.default.createElement("p",null,a),u.default.createElement(p.default,{text:"Dismiss",onClick:function(){t.dismiss().catch((function(){console.log("Dismiss failed. A lock must be in place.")}))}})))}}]),n}(u.default.Component);g.propTypes=v,g.defaultProps={name:"Disclosure Component"};var x=(0,h.withDisclosureManager)(g);t.default=x},53560:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},9197:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"SectionHeader-module__clinical-lowlight-theme___M-5zo","orion-fusion-theme":"SectionHeader-module__orion-fusion-theme___MGUT7","section-header":"SectionHeader-module__section-header___wbdJQ","is-interactable":"SectionHeader-module__is-interactable___4Hj3Z","is-active":"SectionHeader-module__is-active___Qfdbq","is-transparent":"SectionHeader-module__is-transparent___3L6Q5","title-arrange":"SectionHeader-module__title-arrange___t4JW1",title:"SectionHeader-module__title___EPyaG","accordion-icon-wrapper":"SectionHeader-module__accordion-icon-wrapper___BOHqG","accordion-icon":"SectionHeader-module__accordion-icon___VQmOf","is-open":"SectionHeader-module__is-open___naqpt","arrange-wrapper":"SectionHeader-module__arrange-wrapper___jwEJm"}},81606:function(e,t,n){n.r(t),t.default={"content-wrapper":"DisclosureComponent-module__content-wrapper___2tYpZ"}},16772:function(e,t,n){function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=m(n(67294)),o=m(n(45697)),r=m(n(94184)),i=m(n(47166)),c=m(n(47341)),s=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var n=p(t);if(n&&n.has(e))return n.get(e);var l={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var i=o?Object.getOwnPropertyDescriptor(e,r):null;i&&(i.get||i.set)?Object.defineProperty(l,r,i):l[r]=e[r]}l.default=e,n&&n.set(e,l);return l}(n(51051)),u=m(n(78490)),d=m(n(9197)),f=["text","title","onClick","isOpen","isTransparent","level"];function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(p=function(e){return e?n:t})(e)}function m(e){return e&&e.__esModule?e:{default:e}}function y(){return y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},y.apply(this,arguments)}function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e,t,n){return(t=v(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function w(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}function _(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,v(a.key),a)}}function v(e){var t=function(e,t){if("object"!==a(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var l=n.call(e,t||"default");if("object"!==a(l))return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===a(t)?t:String(t)}function g(e,t){return g=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},g(e,t)}function x(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,l=O(e);if(t){var o=O(this).constructor;n=Reflect.construct(l,arguments,o)}else n=l.apply(this,arguments);return function(e,t){if(t&&("object"===a(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return C(e)}(this,n)}}function C(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function O(e){return O=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},O(e)}var S=i.default.bind(d.default),k={text:o.default.string,title:o.default.string,onClick:o.default.func,isOpen:o.default.bool,level:o.default.oneOf([1,2,3,4,5,6]),isTransparent:o.default.bool},D={onClick:void 0,isOpen:!1,isTransparent:!1},E=function(e){return e.nativeEvent.keyCode===s.KEY_RETURN||e.nativeEvent.keyCode===s.KEY_SPACE},N=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&g(e,t)}(i,e);var t,n,a,o=x(i);function i(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(t=o.call(this,e)).state={isActive:!1},t.wrapOnKeyDown=t.wrapOnKeyDown.bind(C(t)),t.wrapOnKeyUp=t.wrapOnKeyUp.bind(C(t)),t}return t=i,n=[{key:"wrapOnKeyDown",value:function(e){var t=this;return function(n){E(n)&&!t.state.isActive&&(t.setState({isActive:!0}),t.props.onClick&&t.props.onClick(n)),e&&e(n)}}},{key:"wrapOnKeyUp",value:function(e){var t=this;return function(n){E(n)&&t.state.isActive&&t.setState({isActive:!1}),e&&e(n)}}},{key:"render",value:function(){var e=this.props,t=e.text,n=e.title,a=e.onClick,o=e.isOpen,i=e.isTransparent,c=e.level,s=w(e,f),d=this.context,p=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},s);a&&(p.tabIndex="0",p.onKeyDown=this.wrapOnKeyDown(p.onKeyDown),p.onKeyUp=this.wrapOnKeyUp(p.onKeyUp),p.onClick=a);var m=S(["accordion-icon",{"is-open":a&&o}]),_=l.default.createElement("span",{className:S("accordion-icon-wrapper")},l.default.createElement("span",{className:m})),v=(0,r.default)(S("section-header",{"is-interactable":a},{"is-active":this.state.isActive},{"is-transparent":i},d.className),s.className);c||console.warn("Default heading level may not appropriate has it would fail to convey context of heading in a site / application where it is used. Heading level should be set explicitly depending on the position of header in site / application to allow screen readers to identify headers consistently."),n&&console.warn("`title` prop has been renamed to `text`. please update all the refernces of `title` prop to use prop `text`.");var g="h".concat(c||2),x=t||n,C=a&&_?{type:"button",tabIndex:"-1","aria-expanded":o,"aria-label":x}:void 0,O=a&&_?"button":"span";return l.default.createElement(g,y({},p,{className:v,"aria-label":a?void 0:x}),l.default.createElement(O,y({},C,{className:S("arrange-wrapper")}),l.default.createElement(u.default,{fitStart:a&&_,fill:l.default.createElement("span",{"aria-hidden":void 0!==a,className:S("title")},x),className:S("title-arrange")})))}}],n&&_(t.prototype,n),a&&_(t,a),Object.defineProperty(t,"prototype",{writable:!1}),i}(l.default.Component);N.propTypes=k,N.defaultProps=D,N.contextType=c.default;var P=N;t.default=P},87462:function(e,t,n){function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},a.apply(this,arguments)}n.d(t,{Z:function(){return a}})},44925:function(e,t,n){function a(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}n.d(t,{Z:function(){return a}})}}]);