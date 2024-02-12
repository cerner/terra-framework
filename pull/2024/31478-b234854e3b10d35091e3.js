"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[31478],{49271:function(e,t,n){var a=n(64836),o=n(18698);t.Z=void 0;var l=a(n(27424)),c=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=o(e)&&"function"!=typeof e)return{default:e};var n=p(t);if(n&&n.has(e))return n.get(e);var a={__proto__:null},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in e)if("default"!==c&&Object.prototype.hasOwnProperty.call(e,c)){var r=l?Object.getOwnPropertyDescriptor(e,c):null;r&&(r.get||r.set)?Object.defineProperty(a,c,r):a[c]=e[c]}return a.default=e,n&&n.set(e,a),a}(n(67294)),r=a(n(45697)),i=a(n(19845)),s=n(21538),u=a(n(33864)),d=a(n(23399)),m=n(51051),f=a(n(53560));function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(p=function(e){return e?n:t})(e)}var w=i.default.bind(f.default),h={example:r.default.element,exampleSrc:r.default.element,exampleCssSrc:r.default.element,title:r.default.string,description:r.default.node,isExpanded:r.default.bool},b=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},y=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},C=function(e){var t=e.example,n=e.exampleSrc,a=e.exampleCssSrc,o=e.title,r=e.description,i=e.isExpanded,f=(0,c.useState)(i),p=(0,l.default)(f,2),h=p[0],C=p[1],_=(0,c.useState)(!1),S=(0,l.default)(_,2),g=S[0],v=S[1],k=c.default.useContext(s.ThemeContext),R=void 0!==a,E=function(){v(!g),h&&C(!h)},x=function(){C(!h),g&&v(!g)},D=function(e,t){e.nativeEvent.keyCode!==m.KEY_SPACE&&e.nativeEvent.keyCode!==m.KEY_RETURN||(e.preventDefault(),t())};return c.default.createElement("div",{className:w("template",k.className)},c.default.createElement("div",{className:w("header")},o&&c.default.createElement("h2",{className:w("title")},o)),c.default.createElement("div",{className:w("content")},r&&c.default.createElement("div",{className:w("description")},r),t),c.default.createElement("div",{className:w("footer")},n?c.default.createElement("div",{className:w("button-container")},R&&c.default.createElement("button",{type:"button",className:w("css-toggle","item",{"is-selected":g}),onClick:E,onKeyDown:function(e){return D(e,E)},onBlur:b,onMouseDown:y,tabIndex:0,"data-focus-styles-enabled":!0},c.default.createElement(u.default,{className:w("chevron")}),c.default.createElement("span",null,"CSS"),c.default.createElement(d.default,{className:w("chevron")})),c.default.createElement("button",{type:"button",className:w("code-toggle","item",{"is-selected":h}),onClick:x,onKeyDown:function(e){return D(e,x)},onBlur:b,onMouseDown:y,tabIndex:0,"data-focus-styles-enabled":!0},c.default.createElement(u.default,{className:w("chevron")}),c.default.createElement("span",null,"Code"),c.default.createElement(d.default,{className:w("chevron")}))):null,c.default.createElement("div",null,g&&c.default.createElement("div",{className:w("css")},a),h&&c.default.createElement("div",{className:w("code")},n))))};C.propTypes=h,C.defaultProps={isExpanded:!1};t.Z=C},54627:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var a=n(87462),o=n(44925),l=n(67294),c=n(81254),r=n(32181),i=["components"],s={};function u(e){var t=e.components,n=(0,o.Z)(e,i);return(0,c.mdx)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,c.mdx)("pre",null,(0,c.mdx)("code",{parentName:"pre",className:"language-jsx"},"/* eslint-disable no-param-reassign */\nimport React, { useState, useRef, useCallback } from 'react';\nimport { WorklistDataGrid } from 'terra-data-grid';\nimport { DisclosureManagerContext } from 'terra-disclosure-manager';\nimport DisclosureComponent from './disclosure/DisclosureComponent';\n\nconst gridDataJSON = {\n  cols: [\n    { id: 'Column-0', displayName: 'Patient' },\n    { id: 'Column-1', displayName: 'Location' },\n    { id: 'Column-2', displayName: 'Illness Severity' },\n    { id: 'Column-3', displayName: 'Visit' },\n    { id: 'Column-4', displayName: 'Allergy' },\n    { id: 'Column-5', displayName: 'Primary Contact' },\n    { id: 'Column-6', displayName: 'Generic Order Counts' },\n    { id: 'Column-7', displayName: 'Patient Age' },\n    { id: 'Column-8', displayName: 'Medication History' },\n    { id: 'Column-9', displayName: 'My Relationship' },\n    { id: 'Column-10', displayName: 'Not Selectable', isSelectable: false },\n  ],\n  rows: [\n    {\n      id: '1',\n      cells: [\n        { content: 'Fleck, Arthur' },\n        { content: '1007-MTN' },\n        { content: 'Unstable' },\n        { content: 'Inpatient, 2 months' },\n        { content: '' },\n        { content: 'Quinzell, Harleen' },\n        { content: '' },\n        { isMasked: true },\n        { isMasked: true },\n        { content: 'Admitting Physician' },\n        { content: '', isSelectable: false },\n      ],\n    },\n    {\n      id: '2',\n      cells: [\n        { content: 'Wayne, Bruce' },\n        { content: '1007-MTN-DR' },\n        { content: 'Stable' },\n        { content: 'Outpatient, 2 days' },\n        { content: 'Phytochemicals' },\n        { content: 'Grayson, Richard' },\n        { content: '' },\n        { content: '' },\n        { isMasked: true },\n        { content: 'Admitting Physician' },\n        { content: '', isSelectable: false },\n      ],\n    },\n  ],\n};\n\nconst ColumnActions = () => {\n  const rowSelectionModeRef = useRef();\n  const rowHeaderIndex = 0;\n  const { cols, rows } = gridDataJSON;\n  const [rowData, setRowData] = useState(rows);\n  const [hasSelectableRows, setHasSelectableRows] = useState(false);\n  const disclosureManager = React.useContext(DisclosureManagerContext);\n\n  // Add actions to first 5 columns\n  cols.forEach((col, columnIndex) => {\n    if (columnIndex < 5) {\n      col.action = {\n        label: `${col.displayName} action`,\n        onCall: () => disclosureManager.disclose({\n          preferredType: 'panel',\n          size: 'small',\n          content: {\n            component: (\n              <DisclosureComponent\n                columnHeader={cols[columnIndex].displayName}\n                rowHeader=\"Detailed Info\"\n                content=\"According to the Journal of Healthcare Management/American College of Healthcare Executives, a 500-bed hospital loses over $4 million annually due to clinical communication inefficiencies. A unified clinical communication strategy can help health systems begin to close the gap.\"\n                name={cols[columnIndex].displayName}\n              />\n            ),\n          },\n        }),\n      };\n    }\n  });\n\n  const clearRowSelection = useCallback(() => {\n    const newRowData = [...rowData];\n    // eslint-disable-next-line no-return-assign, no-param-reassign\n    newRowData.forEach(row => (row.isSelected = false));\n    setRowData(newRowData);\n  }, [rowData]);\n\n  const disableSelectableRows = useCallback(() => {\n    rowSelectionModeRef.current.checked = false;\n    setHasSelectableRows(false);\n    clearRowSelection();\n  }, [clearRowSelection]);\n\n  const onRowSelect = useCallback((rowsToSelectAndUnSelect) => {\n    // Remove current selections\n    const newRowData = [...rowData];\n\n    rowsToSelectAndUnSelect.forEach((updatedRow) => {\n      const dataRowToUpdate = newRowData.find(row => row.id === updatedRow.id);\n      if (dataRowToUpdate) {\n        dataRowToUpdate.isSelected = updatedRow.selected;\n      }\n    });\n\n    setRowData(newRowData);\n  }, [rowData]);\n\n  const onRowSelectAll = useCallback(() => {\n    const newRowData = [...rowData];\n    // eslint-disable-next-line no-return-assign, no-param-reassign\n    newRowData.forEach(row => (row.isSelected = true));\n    setRowData(newRowData);\n  }, [rowData]);\n\n  const onRowSelectionModeChange = (event) => {\n    if (!event.target.checked) {\n      clearRowSelection();\n    }\n    setHasSelectableRows(event.target.checked);\n  };\n\n  const onColumnSelect = useCallback((columnId) => {\n    // eslint-disable-next-line no-alert\n    alert(`Column Selection Header for ${columnId} Clicked`);\n  }, []);\n\n  const enableRowSelection = useCallback(() => {\n    if (!rowSelectionModeRef.current.checked) {\n      rowSelectionModeRef.current.checked = true;\n    }\n    setHasSelectableRows(true);\n  }, []);\n\n  return (\n    <React.Fragment>\n      <div>\n        <label htmlFor=\"rowSelectionMode\"><b>Row Selection Mode</b></label>\n        <input\n          id=\"rowSelectionMode\"\n          type=\"checkbox\"\n          ref={rowSelectionModeRef}\n          onChange={onRowSelectionModeChange}\n        />\n      </div>\n      <WorklistDataGrid\n        id=\"worklist-data-grid-with-column-actions\"\n        pinnedColumns={cols.slice(0, 3)} // Consumer must specify pinnedColumns prop to display columns that need to pinned (stickied).\n        overflowColumns={cols.slice(3)} // Consumer must specify overflowColumns prop to display columns that do not need to be stickied and can scroll horizontally.\n        rows={rowData}\n        rowHeaderIndex={rowHeaderIndex}\n        defaultColumnWidth={180}\n        ariaLabel=\"Worklist Data Grid with Column Actions\"\n        onColumnSelect={onColumnSelect}\n        hasSelectableRows={hasSelectableRows} // Prop to turn row selection mode on/off\n        onRowSelect={onRowSelect} // For row selection, consumer must provide a callback that the Worklist Data Grid will call when the user selects one or more rows.\n        onRowSelectAll={onRowSelectAll} // For row selection, consumer must provide a callback that the Worklist Data Grid will call when the user selects all rows.\n        onClearSelectedRows={clearRowSelection} // To clear selected rows, consumer must provide a callback that the Worklist Data Grid will call to clear the selection.\n        onDisableSelectableRows={disableSelectableRows} // Consumer must provide a callback that the Worklist Data Grid will call to turn off the row selection mode.\n        onEnableRowSelection={enableRowSelection} // Consumer must provide a callback that the Worklist Data Grid will call to turn on the row selection mode.\n      />\n    </React.Fragment>\n  );\n};\n\nexport default ColumnActions;\n\n")))}u.isMDXComponent=!0;var d=n(49271),m=function(e){var t=e.title,n=e.description,a=e.isExpanded;return l.createElement(d.Z,{title:t||"Column Actions",description:n,example:l.createElement(r.Z,null),exampleSrc:l.createElement(u,null),isExpanded:a})},f=["components"],p={},w="wrapper";function h(e){var t=e.components,n=(0,o.Z)(e,f);return(0,c.mdx)(w,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,c.mdx)("h1",{id:"column-actions"},"Column Actions"),(0,c.mdx)("h3",{id:"description"},"Description"),(0,c.mdx)("p",null,"This example demonstrates a ",(0,c.mdx)("a",{parentName:"p",href:"/terra-framework/pull/2024/components/cerner-terra-framework-docs/data-grid/worklist-data-grid/about"},"Worklist Data Grid")," that supports Column Actions feature."),(0,c.mdx)(m,{mdxType:"ColumnActions"}))}h.isMDXComponent=!0},32181:function(e,t,n){var a=n(64836),o=n(18698);t.Z=void 0;var l=a(n(861)),c=a(n(27424)),r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=o(e)&&"function"!=typeof e)return{default:e};var n=d(t);if(n&&n.has(e))return n.get(e);var a={__proto__:null},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in e)if("default"!==c&&Object.prototype.hasOwnProperty.call(e,c)){var r=l?Object.getOwnPropertyDescriptor(e,c):null;r&&(r.get||r.set)?Object.defineProperty(a,c,r):a[c]=e[c]}return a.default=e,n&&n.set(e,a),a}(n(67294)),i=n(55730),s=n(56019),u=a(n(85635));function d(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(d=function(e){return e?n:t})(e)}var m=[{id:"Column-0",displayName:"Patient"},{id:"Column-1",displayName:"Location"},{id:"Column-2",displayName:"Illness Severity"},{id:"Column-3",displayName:"Visit"},{id:"Column-4",displayName:"Allergy"},{id:"Column-5",displayName:"Primary Contact"},{id:"Column-6",displayName:"Generic Order Counts"},{id:"Column-7",displayName:"Patient Age"},{id:"Column-8",displayName:"Medication History"},{id:"Column-9",displayName:"My Relationship"},{id:"Column-10",displayName:"Not Selectable",isSelectable:!1}],f=[{id:"1",cells:[{content:"Fleck, Arthur"},{content:"1007-MTN"},{content:"Unstable"},{content:"Inpatient, 2 months"},{content:""},{content:"Quinzell, Harleen"},{content:""},{isMasked:!0},{isMasked:!0},{content:"Admitting Physician"},{content:"",isSelectable:!1}]},{id:"2",cells:[{content:"Wayne, Bruce"},{content:"1007-MTN-DR"},{content:"Stable"},{content:"Outpatient, 2 days"},{content:"Phytochemicals"},{content:"Grayson, Richard"},{content:""},{content:""},{isMasked:!0},{content:"Admitting Physician"},{content:"",isSelectable:!1}]}];t.Z=function(){var e=(0,r.useRef)(),t=m,n=f,a=(0,r.useState)(n),o=(0,c.default)(a,2),d=o[0],p=o[1],w=(0,r.useState)(!1),h=(0,c.default)(w,2),b=h[0],y=h[1],C=r.default.useContext(s.DisclosureManagerContext);t.forEach((function(e,n){n<5&&(e.action={label:"".concat(e.displayName," action"),onCall:function(){return C.disclose({preferredType:"panel",size:"small",content:{component:r.default.createElement(u.default,{columnHeader:t[n].displayName,rowHeader:"Detailed Info",content:"According to the Journal of Healthcare Management/American College of Healthcare Executives, a 500-bed hospital loses over $4 million annually due to clinical communication inefficiencies. A unified clinical communication strategy can help health systems begin to close the gap.",name:t[n].displayName})}})}})}));var _=(0,r.useCallback)((function(){var e=(0,l.default)(d);e.forEach((function(e){return e.isSelected=!1})),p(e)}),[d]),S=(0,r.useCallback)((function(){e.current.checked=!1,y(!1),_()}),[_]),g=(0,r.useCallback)((function(e){var t=(0,l.default)(d);e.forEach((function(e){var n=t.find((function(t){return t.id===e.id}));n&&(n.isSelected=e.selected)})),p(t)}),[d]),v=(0,r.useCallback)((function(){var e=(0,l.default)(d);e.forEach((function(e){return e.isSelected=!0})),p(e)}),[d]),k=(0,r.useCallback)((function(e){alert("Column Selection Header for ".concat(e," Clicked"))}),[]),R=(0,r.useCallback)((function(){e.current.checked||(e.current.checked=!0),y(!0)}),[]);return r.default.createElement(r.default.Fragment,null,r.default.createElement("div",null,r.default.createElement("label",{htmlFor:"rowSelectionMode"},r.default.createElement("b",null,"Row Selection Mode")),r.default.createElement("input",{id:"rowSelectionMode",type:"checkbox",ref:e,onChange:function(e){e.target.checked||_(),y(e.target.checked)}})),r.default.createElement(i.WorklistDataGrid,{id:"worklist-data-grid-with-column-actions",pinnedColumns:t.slice(0,3),overflowColumns:t.slice(3),rows:d,rowHeaderIndex:0,defaultColumnWidth:180,ariaLabel:"Worklist Data Grid with Column Actions",onColumnSelect:k,hasSelectableRows:b,onRowSelect:g,onRowSelectAll:v,onClearSelectedRows:_,onDisableSelectableRows:S,onEnableRowSelection:R}))}},85635:function(e,t,n){var a=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(56690)),l=a(n(89728)),c=a(n(94993)),r=a(n(73808)),i=a(n(66115)),s=a(n(61655)),u=a(n(67294)),d=a(n(45697)),m=a(n(19845)),f=a(n(55281)),p=a(n(10027)),w=a(n(17092)),h=n(56019),b=a(n(81606));function y(e,t,n){return t=(0,r.default)(t),(0,c.default)(e,C()?Reflect.construct(t,n||[],(0,r.default)(e).constructor):t.apply(e,n))}function C(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(C=function(){return!!e})()}var _=m.default.bind(b.default),S={name:d.default.string,content:d.default.string,rowHeader:d.default.string,columnHeader:d.default.string,disclosureManager:h.disclosureManagerShape},g=function(e){function t(e){var n;return(0,o.default)(this,t),(n=y(this,t,[e])).checkLockState=n.checkLockState.bind((0,i.default)(n)),n.state={text:void 0},n}return(0,s.default)(t,e),(0,l.default)(t,[{key:"componentDidMount",value:function(){var e=this.props.disclosureManager;e&&e.registerDismissCheck&&e.registerDismissCheck(this.checkLockState)}},{key:"checkLockState",value:function(){var e=this;return this.state.text&&this.state.text.length?new Promise((function(t,n){confirm("".concat(e.props.name," has unsaved changes that will be lost. Do you wish to continue?"))?t():n()})):Promise.resolve()}},{key:"render",value:function(){var e=this.props,t=e.disclosureManager,n=e.name,a=e.content,o=e.rowHeader,l=e.columnHeader;return u.default.createElement(p.default,{fill:!0,header:u.default.createElement(w.default,{title:"Disclosure - ".concat(n),onClose:t.closeDisclosure})},u.default.createElement("div",{className:_("content-wrapper")},u.default.createElement("h3",null,"".concat(o," - ").concat(l)),u.default.createElement("p",null,a),u.default.createElement(f.default,{text:"Dismiss",onClick:function(){t.dismiss().catch((function(){console.log("Dismiss failed. A lock must be in place.")}))}})))}}]),t}(u.default.Component);g.propTypes=S,g.defaultProps={name:"Disclosure Component"};var v=(0,h.withDisclosureManager)(g);t.default=v},53560:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},81606:function(e,t,n){n.r(t),t.default={"content-wrapper":"DisclosureComponent-module__content-wrapper___2tYpZ"}},87462:function(e,t,n){function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},a.apply(this,arguments)}n.d(t,{Z:function(){return a}})},44925:function(e,t,n){function a(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.d(t,{Z:function(){return a}})}}]);