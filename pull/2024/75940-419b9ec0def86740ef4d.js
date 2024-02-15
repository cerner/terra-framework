"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[75940],{33792:function(e,t,n){var o=n(22411),l=n(59848);t.c=void 0;var a=o(n(97936)),c=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=l(e)&&"function"!=typeof e)return{default:e};var n=p(t);if(n&&n.has(e))return n.get(e);var o={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in e)if("default"!==c&&Object.prototype.hasOwnProperty.call(e,c)){var r=a?Object.getOwnPropertyDescriptor(e,c):null;r&&(r.get||r.set)?Object.defineProperty(o,c,r):o[c]=e[c]}return o.default=e,n&&n.set(e,o),o}(n(11504)),r=o(n(3268)),i=o(n(74824)),s=n(93048),u=o(n(72672)),d=o(n(3308)),m=n(97196),f=o(n(86896));function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(p=function(e){return e?n:t})(e)}var w=i.default.bind(f.default),b={example:r.default.element,exampleSrc:r.default.element,exampleCssSrc:r.default.element,title:r.default.string,description:r.default.node,isExpanded:r.default.bool},_=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},y=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},S=function(e){var t=e.example,n=e.exampleSrc,o=e.exampleCssSrc,l=e.title,r=e.description,i=e.isExpanded,f=(0,c.useState)(i),p=(0,a.default)(f,2),b=p[0],S=p[1],v=(0,c.useState)(!1),h=(0,a.default)(v,2),x=h[0],E=h[1],C=c.default.useContext(s.ThemeContext),g=void 0!==o,T=function(){E(!x),b&&S(!b)},k=function(){S(!b),x&&E(!x)},R=function(e,t){e.nativeEvent.keyCode!==m.KEY_SPACE&&e.nativeEvent.keyCode!==m.KEY_RETURN||(e.preventDefault(),t())};return c.default.createElement("div",{className:w("template",C.className)},c.default.createElement("div",{className:w("header")},l&&c.default.createElement("h2",{className:w("title")},l)),c.default.createElement("div",{className:w("content")},r&&c.default.createElement("div",{className:w("description")},r),t),c.default.createElement("div",{className:w("footer")},n?c.default.createElement("div",{className:w("button-container")},g&&c.default.createElement("button",{type:"button",className:w("css-toggle","item",{"is-selected":x}),onClick:T,onKeyDown:function(e){return R(e,T)},onBlur:_,onMouseDown:y,tabIndex:0,"data-focus-styles-enabled":!0},c.default.createElement(u.default,{className:w("chevron")}),c.default.createElement("span",null,"CSS"),c.default.createElement(d.default,{className:w("chevron")})),c.default.createElement("button",{type:"button",className:w("code-toggle","item",{"is-selected":b}),onClick:k,onKeyDown:function(e){return R(e,k)},onBlur:_,onMouseDown:y,tabIndex:0,"data-focus-styles-enabled":!0},c.default.createElement(u.default,{className:w("chevron")}),c.default.createElement("span",null,"Code"),c.default.createElement(d.default,{className:w("chevron")}))):null,c.default.createElement("div",null,x&&c.default.createElement("div",{className:w("css")},o),b&&c.default.createElement("div",{className:w("code")},n))))};S.propTypes=b,S.defaultProps={isExpanded:!1};t.c=S},75940:function(e,t,n){n.r(t),n.d(t,{default:function(){return b}});var o=n(45072),l=n(52822),a=n(11504),c=n(69788),r=n(61984),i=["components"],s={};function u(e){var t=e.components,n=(0,l.c)(e,i);return(0,c.mdx)("wrapper",(0,o.c)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,c.mdx)("pre",null,(0,c.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React, {\n  useState, useRef, useCallback, useMemo,\n} from 'react';\nimport Table from 'terra-table';\n\nconst tableDataJSON = {\n  cols: [\n    { id: 'Column-0', displayName: 'Patient' },\n    { id: 'Column-1', displayName: 'Location' },\n    { id: 'Column-2', displayName: 'Illness Severity' },\n  ],\n  rows: [\n    {\n      id: '1',\n      cells: [\n        { content: 'Fleck, Arthur' },\n        { content: '1007-MTN' },\n        { content: 'Unstable' },\n      ],\n    },\n    {\n      id: '2',\n      cells: [\n        { content: 'Wayne, Bruce' },\n        { content: '1107-MTN-DR' },\n        { content: 'Stable' },\n\n      ],\n    },\n    {\n      id: '3',\n      cells: [\n        { content: 'Carr, Alicia' },\n        { content: '1007-MTN' },\n        { content: 'Unstable' },\n\n      ],\n    },\n    {\n      id: '4',\n      cells: [\n        { content: 'McMurphy, Donald' },\n        { content: '1024-MTN', isMasked: true },\n        { content: 'Stable' },\n      ],\n    },\n    {\n      id: '5',\n      cells: [\n        { content: 'Peters, Timothy' },\n        { content: '1207-MTN' },\n        { content: 'Unstable', isMasked: true },\n      ],\n    },\n  ],\n};\n\nconst TableRowSelection = () => {\n  const rowSelectionModeRef = useRef();\n  const rowHeaderIndex = 0;\n  const { cols, rows } = tableDataJSON;\n  const [rowData, setRowData] = useState(rows);\n  const [hasSelectableRows, setHasSelectableRows] = useState(false);\n\n  const modifyCols = () => [...cols].map((col, columnIndex) => {\n    const newCol = { ...col };\n    if (columnIndex < 2) {\n      newCol.action = {\n        label: `${col.displayName} action`,\n        // eslint-disable-next-line no-alert\n        onClick: () => alert(`${col.displayName} action clicked`),\n      };\n    }\n    return newCol;\n  });\n\n  // Add actions to first 2 columns\n  // eslint-disable-next-line react-hooks/exhaustive-deps\n  const modifiedCols = useMemo(modifyCols, [cols]);\n\n  const clearRowSelection = useCallback(() => {\n    const newRowData = [...rowData];\n    // eslint-disable-next-line no-return-assign, no-param-reassign\n    newRowData.forEach(row => (row.isSelected = false));\n    setRowData(newRowData);\n  }, [rowData]);\n\n  const onRowSelectionModeChange = useCallback((event) => {\n    if (!event.target.checked) {\n      clearRowSelection();\n    }\n    setHasSelectableRows(event.target.checked);\n  }, [clearRowSelection]);\n\n  const onRowSelect = useCallback((rowSelection) => {\n    const { rowId } = rowSelection;\n\n    // Remove current selections\n    const newRowData = [...rowData];\n\n    const dataRowToUpdate = newRowData.find(row => row.id === rowId);\n    if (dataRowToUpdate) {\n      dataRowToUpdate.isSelected = !dataRowToUpdate.isSelected;\n    }\n\n    setRowData(newRowData);\n  }, [rowData]);\n\n  const onRowSelectionHeaderSelect = useCallback(() => {\n    // eslint-disable-next-line no-alert\n    alert('Row Selection Header Clicked');\n  }, []);\n\n  return (\n    <React.Fragment>\n      <div>\n        <label htmlFor=\"rowSelectionMode\"><b>Row Selection Mode</b></label>\n        <input\n          id=\"rowSelectionMode\"\n          type=\"checkbox\"\n          ref={rowSelectionModeRef}\n          onChange={onRowSelectionModeChange}\n        />\n      </div>\n      <Table\n        id=\"table-with-row-selections\"\n        overflowColumns={modifiedCols}\n        rows={rowData}\n        rowHeaderIndex={rowHeaderIndex}\n        columnWidth=\"180px\"\n        ariaLabel=\"Table with Row Selections\"\n        rowSelectionMode={hasSelectableRows ? 'multiple' : undefined} // Prop to turn row selection mode on/off\n        onRowSelect={onRowSelect} // For row selection, consumer must provide a callback that the Worklist Data Grid will call when the user selects one or more rows.\n        onRowSelectionHeaderSelect={onRowSelectionHeaderSelect}\n      />\n    </React.Fragment>\n  );\n};\n\nexport default TableRowSelection;\n\n")))}u.isMDXComponent=!0;var d=n(33792),m=function(e){var t=e.title,n=e.description,o=e.isExpanded;return a.createElement(d.c,{title:t||"Table Column Actions",description:n,example:a.createElement(r.c,null),exampleSrc:a.createElement(u,null),isExpanded:o})},f=["components"],p={},w="wrapper";function b(e){var t=e.components,n=(0,l.c)(e,f);return(0,c.mdx)(w,(0,o.c)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,c.mdx)("h1",{id:"table---column-actions"},"Table - Column Actions"),(0,c.mdx)(m,{title:"Table With Column Actions",mdxType:"TableColumnActions"}))}b.isMDXComponent=!0},61984:function(e,t,n){var o=n(22411),l=n(59848);t.c=void 0;var a=o(n(2676)),c=o(n(25724)),r=o(n(97936)),i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=l(e)&&"function"!=typeof e)return{default:e};var n=u(t);if(n&&n.has(e))return n.get(e);var o={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in e)if("default"!==c&&Object.prototype.hasOwnProperty.call(e,c)){var r=a?Object.getOwnPropertyDescriptor(e,c):null;r&&(r.get||r.set)?Object.defineProperty(o,c,r):o[c]=e[c]}return o.default=e,n&&n.set(e,o),o}(n(11504)),s=o(n(36276));function u(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(u=function(e){return e?n:t})(e)}function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}var m=[{id:"Column-0",displayName:"Patient"},{id:"Column-1",displayName:"Location"},{id:"Column-2",displayName:"Illness Severity"}],f=[{id:"1",cells:[{content:"Fleck, Arthur"},{content:"1007-MTN"},{content:"Unstable"}]},{id:"2",cells:[{content:"Wayne, Bruce"},{content:"1107-MTN-DR"},{content:"Stable"}]},{id:"3",cells:[{content:"Carr, Alicia"},{content:"1007-MTN"},{content:"Unstable"}]},{id:"4",cells:[{content:"McMurphy, Donald"},{content:"1024-MTN",isMasked:!0},{content:"Stable"}]},{id:"5",cells:[{content:"Peters, Timothy"},{content:"1207-MTN"},{content:"Unstable",isMasked:!0}]}];t.c=function(){var e=(0,i.useRef)(),t=m,n=f,o=(0,i.useState)(n),l=(0,r.default)(o,2),u=l[0],p=l[1],w=(0,i.useState)(!1),b=(0,r.default)(w,2),_=b[0],y=b[1],S=(0,i.useMemo)((function(){return(0,c.default)(t).map((function(e,t){var n=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){(0,a.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e);return t<2&&(n.action={label:"".concat(e.displayName," action"),onClick:function(){return alert("".concat(e.displayName," action clicked"))}}),n}))}),[t]),v=(0,i.useCallback)((function(){var e=(0,c.default)(u);e.forEach((function(e){return e.isSelected=!1})),p(e)}),[u]),h=(0,i.useCallback)((function(e){e.target.checked||v(),y(e.target.checked)}),[v]),x=(0,i.useCallback)((function(e){var t=e.rowId,n=(0,c.default)(u),o=n.find((function(e){return e.id===t}));o&&(o.isSelected=!o.isSelected),p(n)}),[u]),E=(0,i.useCallback)((function(){alert("Row Selection Header Clicked")}),[]);return i.default.createElement(i.default.Fragment,null,i.default.createElement("div",null,i.default.createElement("label",{htmlFor:"rowSelectionMode"},i.default.createElement("b",null,"Row Selection Mode")),i.default.createElement("input",{id:"rowSelectionMode",type:"checkbox",ref:e,onChange:h})),i.default.createElement(s.default,{id:"table-with-row-selections",overflowColumns:S,rows:u,rowHeaderIndex:0,columnWidth:"180px",ariaLabel:"Table with Row Selections",rowSelectionMode:_?"multiple":void 0,onRowSelect:x,onRowSelectionHeaderSelect:E}))}},86896:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},45072:function(e,t,n){function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},o.apply(this,arguments)}n.d(t,{c:function(){return o}})},52822:function(e,t,n){function o(e,t){if(null==e)return{};var n,o,l=function(e,t){if(null==e)return{};var n,o,l={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}n.d(t,{c:function(){return o}})}}]);