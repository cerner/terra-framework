"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[72605,47209],{49271:function(e,t,n){var l=n(64836),r=n(18698);t.Z=void 0;var a=l(n(27424)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var n=m(t);if(n&&n.has(e))return n.get(e);var l={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var c=a?Object.getOwnPropertyDescriptor(e,o):null;c&&(c.get||c.set)?Object.defineProperty(l,o,c):l[o]=e[o]}l.default=e,n&&n.set(e,l);return l}(n(67294)),c=l(n(45697)),i=l(n(47166)),s=n(21538),d=l(n(33864)),u=l(n(23399)),p=n(51051),f=l(n(53560));function m(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(m=function(e){return e?n:t})(e)}var h=i.default.bind(f.default),w={example:c.default.element,exampleSrc:c.default.element,exampleCssSrc:c.default.element,title:c.default.string,description:c.default.node,isExpanded:c.default.bool},b=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},_=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},y=function(e){var t=e.example,n=e.exampleSrc,l=e.exampleCssSrc,r=e.title,c=e.description,i=e.isExpanded,f=(0,o.useState)(i),m=(0,a.default)(f,2),w=m[0],y=m[1],g=(0,o.useState)(!1),v=(0,a.default)(g,2),x=v[0],O=v[1],S=o.default.useContext(s.ThemeContext),C=void 0!==l,E=function(){O(!x),w&&y(!w)},D=function(){y(!w),x&&O(!x)},N=function(e,t){e.nativeEvent.keyCode!==p.KEY_SPACE&&e.nativeEvent.keyCode!==p.KEY_RETURN||(e.preventDefault(),t())};return o.default.createElement("div",{className:h("template",S.className)},o.default.createElement("div",{className:h("header")},r&&o.default.createElement("h2",{className:h("title")},r)),o.default.createElement("div",{className:h("content")},c&&o.default.createElement("div",{className:h("description")},c),t),o.default.createElement("div",{className:h("footer")},n?o.default.createElement("div",{className:h("button-container")},C&&o.default.createElement("button",{type:"button",className:h("css-toggle","item",{"is-selected":x}),onClick:E,onKeyDown:function(e){return N(e,E)},onBlur:b,onMouseDown:_,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(d.default,{className:h("chevron")}),o.default.createElement("span",null,"CSS"),o.default.createElement(u.default,{className:h("chevron")})),o.default.createElement("button",{type:"button",className:h("code-toggle","item",{"is-selected":w}),onClick:D,onKeyDown:function(e){return N(e,D)},onBlur:b,onMouseDown:_,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(d.default,{className:h("chevron")}),o.default.createElement("span",null,"Code"),o.default.createElement(u.default,{className:h("chevron")}))):null,o.default.createElement("div",null,x&&o.default.createElement("div",{className:h("css")},l),w&&o.default.createElement("div",{className:h("code")},n))))};y.propTypes=w,y.defaultProps={isExpanded:!1};var g=y;t.Z=g},7615:function(e,t,n){n.r(t),n.d(t,{default:function(){return w}});var l=n(87462),r=n(44925),a=n(67294),o=n(81254),c=n(64393),i=["components"],s={};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.mdx)("wrapper",(0,l.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React, { useState, useCallback } from 'react';\nimport { FlowsheetDataGrid } from 'terra-data-grid';\n\nconst CellSelection = () => {\n  const gridDataJSON = {\n    cols: [\n      { id: 'Column-0', displayName: 'Vitals', isSelectable: false },\n      { id: 'Column-1', displayName: 'March 16' },\n      { id: 'Column-2', displayName: 'March 17' },\n      { id: 'Column-3', displayName: 'March 18' },\n    ],\n    rows: [\n      {\n        id: '1',\n        cells: [\n          { content: 'Heart Rate Monitored (bpm)' },\n          { content: '68' },\n          { content: '66' },\n          { content: '67' },\n        ],\n      },\n      {\n        id: '2',\n        cells: [\n          { content: 'Temperature Oral (degC)' },\n          { content: '36.7' },\n          { content: '36.9' },\n          { content: '37' },\n        ],\n      },\n      {\n        id: '3',\n        cells: [\n          { content: 'Cardiac Index (L/min/m2)' },\n          { content: '2.25' },\n          { content: '2.28' },\n          { content: '2.8' },\n        ],\n      },\n      {\n        id: '4',\n        cells: [\n          { content: 'ICP (mmHg)' },\n          { content: '11' },\n          { content: '11' },\n          { content: '12' },\n        ],\n      },\n      {\n        id: '5',\n        cells: [\n          { content: 'CPP (mmHg)' },\n          { content: '63' },\n          { content: '47' },\n          { content: '48' },\n        ],\n      },\n    ],\n  };\n\n  const { cols, rows } = gridDataJSON;\n  const [rowData, setRowData] = useState(rows);\n\n  const onCellSelect = useCallback((rowId, columnId) => {\n    if (rowId && columnId) {\n      const rowIndex = rowData.findIndex(e => e.id === rowId);\n      const columnIndex = cols.findIndex(e => e.id === columnId);\n      let otherSelectionsExist = false;\n\n      // Remove cell selections, excluding current cell\n      const newRowData = [...rowData];\n      for (let row = 0; row < rowData.length; row += 1) {\n        for (let cell = 0; cell < rowData[row].cells.length; cell += 1) {\n          const currentCell = rowData[row].cells[cell];\n          if (currentCell.isSelected && !(row === rowIndex && cell === columnIndex)) {\n            currentCell.isSelected = false;\n            otherSelectionsExist = true;\n          }\n        }\n      }\n\n      // If the current cell is the only selected cell, toggle it to unselected. Otherwise, set it to selected.\n      newRowData[rowIndex].cells[columnIndex].isSelected = !rowData[rowIndex].cells[columnIndex].isSelected || otherSelectionsExist;\n      setRowData(newRowData);\n    }\n  }, [cols, rowData]);\n\n  const onClearSelectedCells = useCallback(() => {\n    // Remove current selections\n    const newRowData = [...rowData];\n    for (let row = 0; row < rowData.length; row += 1) {\n      for (let cell = 0; cell < rowData[row].cells.length; cell += 1) {\n        newRowData[row].cells[cell].isSelected = false;\n      }\n    }\n\n    setRowData(newRowData);\n  }, [rowData]);\n\n  const onCellRangeSelect = useCallback((cells) => {\n    const newRowData = [...rowData];\n\n    // Remove current selections\n    for (let row = 0; row < rowData.length; row += 1) {\n      for (let cell = 0; cell < rowData[row].cells.length; cell += 1) {\n        newRowData[row].cells[cell].isSelected = false;\n      }\n    }\n\n    cells.forEach((cell) => {\n      const rowIndex = rowData.findIndex(e => e.id === cell.rowId);\n      const columnIndex = cols.findIndex(e => e.id === cell.columnId);\n\n      newRowData[rowIndex].cells[columnIndex].isSelected = true;\n    });\n\n    setRowData(newRowData);\n  }, [cols, rowData]);\n\n  return (\n    <FlowsheetDataGrid\n      id=\"default-terra-flowsheet-data-grid\"\n      columns={cols}\n      rows={rowData}\n      ariaLabel=\"Flowsheet Data Grid\"\n      onCellSelect={onCellSelect}\n      onClearSelectedCells={onClearSelectedCells}\n      onCellRangeSelect={onCellRangeSelect}\n    />\n  );\n};\n\nexport default CellSelection;\n\n")))}d.isMDXComponent=!0;var u=n(49271),p=function(e){var t=e.title,n=e.description,l=e.isExpanded;return a.createElement(u.Z,{title:t||"Cell Selection",description:n,example:a.createElement(c.Z,null),exampleSrc:a.createElement(d,null),isExpanded:l})},f=["components"],m={},h="wrapper";function w(e){var t=e.components,n=(0,r.Z)(e,f);return(0,o.mdx)(h,(0,l.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"cell-selection"},"Cell Selection"),(0,o.mdx)("h2",{id:"description"},"Description"),(0,o.mdx)("p",null,"This example demonstrates a Flowsheet Data Grid with cell selection support by utilizing the following ",(0,o.mdx)("a",{parentName:"p",href:"/terra-framework/pull/1882/components/cerner-terra-framework-docs/data-grid/flowsheet-data-grid/about"},"properties"),":"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},"The ",(0,o.mdx)("strong",{parentName:"p"},"onCellSelect")," callback prop: When the user selects a cell, this callback will be called with the ",(0,o.mdx)("inlineCode",{parentName:"p"},"rowId")," and ",(0,o.mdx)("inlineCode",{parentName:"p"},"columnId")," of the selected cell.\nIn this example, the ",(0,o.mdx)("inlineCode",{parentName:"p"},"isSelected")," cell property is toggled to true, adding highlighting to the selected cell.")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},"The ",(0,o.mdx)("strong",{parentName:"p"},"onCellRangeSelect")," callback prop: When the user selects a range of multiple cells at once, a (1-D) array of cell objects, each containing ",(0,o.mdx)("inlineCode",{parentName:"p"},"rowId")," and ",(0,o.mdx)("inlineCode",{parentName:"p"},"columnId")," properties, is the function parameter.\nIn this example, the ",(0,o.mdx)("inlineCode",{parentName:"p"},"isSelected")," cell property is toggled to true for each of the provided cells, adding highlighting to each cell.")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},"The ",(0,o.mdx)("strong",{parentName:"p"},"onClearSelectedCells")," callback prop: When the user presses the Escape key, this callback gets called. In this example, the ",(0,o.mdx)("inlineCode",{parentName:"p"},"isSelected")," attribute of any selected cell is set to false and the Flowsheet Data Grid is re-rendered."))),(0,o.mdx)("h2",{id:"interactions"},"Interactions"),(0,o.mdx)("p",null,"When using this example, there are several ways to interact with the cells of the grid."),(0,o.mdx)("h3",{id:"single-cell-selection"},"Single Cell Selection"),(0,o.mdx)("p",null,"Selecting a single cell can be achieved by either of the following methods:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Click on a selectable cell. OR"),(0,o.mdx)("li",{parentName:"ul"},"Press Spacebar when focused on a selectable cell.")),(0,o.mdx)("h3",{id:"multi-cell-range-selection"},"Multi-Cell (Range) Selection"),(0,o.mdx)("p",null,"Selecting a range of multiple cells can be achieved by the following:"),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"Select a single cell (see ",(0,o.mdx)("a",{parentName:"p",href:"#single-cell-selection"},"Single Cell Selection"),"). AND")),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"Options include:"),(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},"Hold Shift key and click on another selectable* cell. This will select the entire range of rows and columns between the selected and starting cell."),(0,o.mdx)("li",{parentName:"ul"},"Use the directional arrow keys to navigate the focus indicator, hold Shift key and press Spacebar on another selectable cell. This option will also select the range of rows and columns between the cells."),(0,o.mdx)("li",{parentName:"ul"},"Hold Shift key and use the directional arrow keys to expand the range of selected cells.")))),(0,o.mdx)("p",null,"*Both the column headers and the cells in the row header (leftmost) column are focusable but not selectable when in range selection mode."),(0,o.mdx)(p,{title:"Flowsheet Data Grid with Cell Selection",mdxType:"CellSelection"}))}w.isMDXComponent=!0},64393:function(e,t,n){var l=n(64836),r=n(18698);t.Z=void 0;var a=l(n(861)),o=l(n(27424)),c=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=r(e)&&"function"!=typeof e)return{default:e};var n=s(t);if(n&&n.has(e))return n.get(e);var l={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var c=a?Object.getOwnPropertyDescriptor(e,o):null;c&&(c.get||c.set)?Object.defineProperty(l,o,c):l[o]=e[o]}return l.default=e,n&&n.set(e,l),l}(n(67294)),i=n(55730);function s(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(s=function(e){return e?n:t})(e)}t.Z=function(){var e=[{id:"Column-0",displayName:"Vitals",isSelectable:!1},{id:"Column-1",displayName:"March 16"},{id:"Column-2",displayName:"March 17"},{id:"Column-3",displayName:"March 18"}],t=[{id:"1",cells:[{content:"Heart Rate Monitored (bpm)"},{content:"68"},{content:"66"},{content:"67"}]},{id:"2",cells:[{content:"Temperature Oral (degC)"},{content:"36.7"},{content:"36.9"},{content:"37"}]},{id:"3",cells:[{content:"Cardiac Index (L/min/m2)"},{content:"2.25"},{content:"2.28"},{content:"2.8"}]},{id:"4",cells:[{content:"ICP (mmHg)"},{content:"11"},{content:"11"},{content:"12"}]},{id:"5",cells:[{content:"CPP (mmHg)"},{content:"63"},{content:"47"},{content:"48"}]}],n=(0,c.useState)(t),l=(0,o.default)(n,2),r=l[0],s=l[1],d=(0,c.useCallback)((function(t,n){if(t&&n){for(var l=r.findIndex((function(e){return e.id===t})),o=e.findIndex((function(e){return e.id===n})),c=!1,i=(0,a.default)(r),d=0;d<r.length;d+=1)for(var u=0;u<r[d].cells.length;u+=1){var p=r[d].cells[u];!p.isSelected||d===l&&u===o||(p.isSelected=!1,c=!0)}i[l].cells[o].isSelected=!r[l].cells[o].isSelected||c,s(i)}}),[e,r]),u=(0,c.useCallback)((function(){for(var e=(0,a.default)(r),t=0;t<r.length;t+=1)for(var n=0;n<r[t].cells.length;n+=1)e[t].cells[n].isSelected=!1;s(e)}),[r]),p=(0,c.useCallback)((function(t){for(var n=(0,a.default)(r),l=0;l<r.length;l+=1)for(var o=0;o<r[l].cells.length;o+=1)n[l].cells[o].isSelected=!1;t.forEach((function(t){var l=r.findIndex((function(e){return e.id===t.rowId})),a=e.findIndex((function(e){return e.id===t.columnId}));n[l].cells[a].isSelected=!0})),s(n)}),[e,r]);return c.default.createElement(i.FlowsheetDataGrid,{id:"default-terra-flowsheet-data-grid",columns:e,rows:r,ariaLabel:"Flowsheet Data Grid",onCellSelect:d,onClearSelectedCells:u,onCellRangeSelect:p})}},53560:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},9197:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"SectionHeader-module__clinical-lowlight-theme___M-5zo","orion-fusion-theme":"SectionHeader-module__orion-fusion-theme___MGUT7","section-header":"SectionHeader-module__section-header___wbdJQ","is-interactable":"SectionHeader-module__is-interactable___4Hj3Z","is-active":"SectionHeader-module__is-active___Qfdbq","is-transparent":"SectionHeader-module__is-transparent___3L6Q5","title-arrange":"SectionHeader-module__title-arrange___t4JW1",title:"SectionHeader-module__title___EPyaG","accordion-icon-wrapper":"SectionHeader-module__accordion-icon-wrapper___BOHqG","accordion-icon":"SectionHeader-module__accordion-icon___VQmOf","is-open":"SectionHeader-module__is-open___naqpt","arrange-wrapper":"SectionHeader-module__arrange-wrapper___jwEJm"}},16772:function(e,t,n){function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=m(n(67294)),a=m(n(45697)),o=m(n(94184)),c=m(n(47166)),i=m(n(47341)),s=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==l(e)&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var r={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var c=a?Object.getOwnPropertyDescriptor(e,o):null;c&&(c.get||c.set)?Object.defineProperty(r,o,c):r[o]=e[o]}r.default=e,n&&n.set(e,r);return r}(n(51051)),d=m(n(78490)),u=m(n(9197)),p=["text","title","onClick","isOpen","isTransparent","level"];function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}function m(e){return e&&e.__esModule?e:{default:e}}function h(){return h=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},h.apply(this,arguments)}function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function b(e,t,n){return(t=g(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function y(e,t){for(var n=0;n<t.length;n++){var l=t[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,g(l.key),l)}}function g(e){var t=function(e,t){if("object"!==l(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==l(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===l(t)?t:String(t)}function v(e,t){return v=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},v(e,t)}function x(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=S(e);if(t){var a=S(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return function(e,t){if(t&&("object"===l(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return O(e)}(this,n)}}function O(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function S(e){return S=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},S(e)}var C=c.default.bind(u.default),E={text:a.default.string,title:a.default.string,onClick:a.default.func,isOpen:a.default.bool,level:a.default.oneOf([1,2,3,4,5,6]),isTransparent:a.default.bool},D={onClick:void 0,isOpen:!1,isTransparent:!1},N=function(e){return e.nativeEvent.keyCode===s.KEY_RETURN||e.nativeEvent.keyCode===s.KEY_SPACE},j=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&v(e,t)}(c,e);var t,n,l,a=x(c);function c(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(t=a.call(this,e)).state={isActive:!1},t.wrapOnKeyDown=t.wrapOnKeyDown.bind(O(t)),t.wrapOnKeyUp=t.wrapOnKeyUp.bind(O(t)),t}return t=c,n=[{key:"wrapOnKeyDown",value:function(e){var t=this;return function(n){N(n)&&!t.state.isActive&&(t.setState({isActive:!0}),t.props.onClick&&t.props.onClick(n)),e&&e(n)}}},{key:"wrapOnKeyUp",value:function(e){var t=this;return function(n){N(n)&&t.state.isActive&&t.setState({isActive:!1}),e&&e(n)}}},{key:"render",value:function(){var e=this.props,t=e.text,n=e.title,l=e.onClick,a=e.isOpen,c=e.isTransparent,i=e.level,s=_(e,p),u=this.context,f=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},s);l&&(f.tabIndex="0",f.onKeyDown=this.wrapOnKeyDown(f.onKeyDown),f.onKeyUp=this.wrapOnKeyUp(f.onKeyUp),f.onClick=l);var m=C(["accordion-icon",{"is-open":l&&a}]),y=r.default.createElement("span",{className:C("accordion-icon-wrapper")},r.default.createElement("span",{className:m})),g=(0,o.default)(C("section-header",{"is-interactable":l},{"is-active":this.state.isActive},{"is-transparent":c},u.className),s.className);i||console.warn("Default heading level may not appropriate has it would fail to convey context of heading in a site / application where it is used. Heading level should be set explicitly depending on the position of header in site / application to allow screen readers to identify headers consistently."),n&&console.warn("`title` prop has been renamed to `text`. please update all the refernces of `title` prop to use prop `text`.");var v="h".concat(i||2),x=t||n,O=l&&y?{type:"button",tabIndex:"-1","aria-expanded":a,"aria-label":x}:void 0,S=l&&y?"button":"span";return r.default.createElement(v,h({},f,{className:g,"aria-label":l?void 0:x}),r.default.createElement(S,h({},O,{className:C("arrange-wrapper")}),r.default.createElement(d.default,{fitStart:l&&y,fill:r.default.createElement("span",{"aria-hidden":void 0!==l,className:C("title")},x),className:C("title-arrange")})))}}],n&&y(t.prototype,n),l&&y(t,l),Object.defineProperty(t,"prototype",{writable:!1}),c}(r.default.Component);j.propTypes=E,j.defaultProps=D,j.contextType=i.default;var k=j;t.default=k},87462:function(e,t,n){function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},l.apply(this,arguments)}n.d(t,{Z:function(){return l}})},44925:function(e,t,n){function l(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}n.d(t,{Z:function(){return l}})}}]);