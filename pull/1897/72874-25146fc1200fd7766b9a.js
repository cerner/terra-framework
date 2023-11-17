"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[72874,47209],{49271:function(e,t,n){var r=n(64836),o=n(18698);t.Z=void 0;var l=r(n(27424)),a=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==o(e)&&"function"!=typeof e)return{default:e};var n=m(t);if(n&&n.has(e))return n.get(e);var r={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var c=l?Object.getOwnPropertyDescriptor(e,a):null;c&&(c.get||c.set)?Object.defineProperty(r,a,c):r[a]=e[a]}r.default=e,n&&n.set(e,r);return r}(n(67294)),c=r(n(45697)),i=r(n(47166)),s=n(21538),u=r(n(33864)),d=r(n(23399)),f=n(51051),p=r(n(53560));function m(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(m=function(e){return e?n:t})(e)}var w=i.default.bind(p.default),h={example:c.default.element,exampleSrc:c.default.element,exampleCssSrc:c.default.element,title:c.default.string,description:c.default.node,isExpanded:c.default.bool},_=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},b=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},y=function(e){var t=e.example,n=e.exampleSrc,r=e.exampleCssSrc,o=e.title,c=e.description,i=e.isExpanded,p=(0,a.useState)(i),m=(0,l.default)(p,2),h=m[0],y=m[1],v=(0,a.useState)(!1),g=(0,l.default)(v,2),x=g[0],O=g[1],C=a.default.useContext(s.ThemeContext),E=void 0!==r,S=function(){O(!x),h&&y(!h)},D=function(){y(!h),x&&O(!x)},j=function(e,t){e.nativeEvent.keyCode!==f.KEY_SPACE&&e.nativeEvent.keyCode!==f.KEY_RETURN||(e.preventDefault(),t())};return a.default.createElement("div",{className:w("template",C.className)},a.default.createElement("div",{className:w("header")},o&&a.default.createElement("h2",{className:w("title")},o)),a.default.createElement("div",{className:w("content")},c&&a.default.createElement("div",{className:w("description")},c),t),a.default.createElement("div",{className:w("footer")},n?a.default.createElement("div",{className:w("button-container")},E&&a.default.createElement("button",{type:"button",className:w("css-toggle","item",{"is-selected":x}),onClick:S,onKeyDown:function(e){return j(e,S)},onBlur:_,onMouseDown:b,tabIndex:0,"data-focus-styles-enabled":!0},a.default.createElement(u.default,{className:w("chevron")}),a.default.createElement("span",null,"CSS"),a.default.createElement(d.default,{className:w("chevron")})),a.default.createElement("button",{type:"button",className:w("code-toggle","item",{"is-selected":h}),onClick:D,onKeyDown:function(e){return j(e,D)},onBlur:_,onMouseDown:b,tabIndex:0,"data-focus-styles-enabled":!0},a.default.createElement(u.default,{className:w("chevron")}),a.default.createElement("span",null,"Code"),a.default.createElement(d.default,{className:w("chevron")}))):null,a.default.createElement("div",null,x&&a.default.createElement("div",{className:w("css")},r),h&&a.default.createElement("div",{className:w("code")},n))))};y.propTypes=h,y.defaultProps={isExpanded:!1};var v=y;t.Z=v},3790:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var r=n(87462),o=n(44925),l=n(67294),a=n(81254),c=n(92465),i=["components"],s={};function u(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.mdx)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React, { useState, useCallback } from 'react';\nimport { FlowsheetDataGrid } from 'terra-data-grid';\n\nconst ColumnHeadersHidden = () => {\n  const gridDataJSON = {\n    cols: [\n      { id: 'Column-0', displayName: 'Vitals' },\n      { id: 'Column-1', displayName: 'March 16' },\n      { id: 'Column-2', displayName: 'March 17' },\n      { id: 'Column-3', displayName: 'March 18' },\n    ],\n    rows: [\n      {\n        id: '1',\n        cells: [\n          { content: 'Heart Rate Monitored (bpm)' },\n          { content: '68' },\n          { content: '66' },\n          { content: '67' },\n        ],\n      },\n      {\n        id: '2',\n        cells: [\n          { content: 'Temperature Oral (degC)' },\n          { content: '36.7' },\n          { content: '36.9' },\n          { content: '37' },\n        ],\n      },\n      {\n        id: '3',\n        cells: [\n          { content: 'Cardiac Index (L/min/m2)' },\n          { content: '2.25' },\n          { content: '2.28' },\n          { content: null },\n        ],\n      },\n      {\n        id: '4',\n        cells: [\n          { content: 'ICP (mmHg)' },\n          { content: null },\n          { content: '11' },\n          { content: '12' },\n        ],\n      },\n      {\n        id: '5',\n        cells: [\n          { content: 'CPP (mmHg)' },\n          { content: '63' },\n          { content: null },\n          { content: '48' },\n        ],\n      },\n    ],\n  };\n\n  const { cols, rows } = gridDataJSON;\n  const [rowData, setRowData] = useState(rows);\n\n  const onCellSelect = useCallback((rowId, columnId) => {\n    if (rowId && columnId) {\n      const rowIndex = rowData.findIndex(e => e.id === rowId);\n      const columnIndex = cols.findIndex(e => e.id === columnId);\n      let otherSelectionsExist = false;\n\n      // Remove cell selections, excluding current cell\n      const newRowData = [...rowData];\n      for (let row = 0; row < rowData.length; row += 1) {\n        for (let cell = 0; cell < rowData[row].cells.length; cell += 1) {\n          const currentCell = rowData[row].cells[cell];\n          if (currentCell.isSelected && !(row === rowIndex && cell === columnIndex)) {\n            currentCell.isSelected = false;\n            otherSelectionsExist = true;\n          }\n        }\n      }\n\n      // If the current cell is the only selected cell, toggle it to unselected. Otherwise, set it to selected.\n      newRowData[rowIndex].cells[columnIndex].isSelected = !rowData[rowIndex].cells[columnIndex].isSelected || otherSelectionsExist;\n      setRowData(newRowData);\n    }\n  }, [cols, rowData]);\n\n  const onClearSelectedCells = useCallback(() => {\n    // Remove current selections\n    const newRowData = [...rowData];\n    for (let row = 0; row < rowData.length; row += 1) {\n      for (let cell = 0; cell < rowData[row].cells.length; cell += 1) {\n        newRowData[row].cells[cell].isSelected = false;\n      }\n    }\n\n    setRowData(newRowData);\n  }, [rowData]);\n\n  const onCellRangeSelect = useCallback((cells) => {\n    const newRowData = [...rowData];\n\n    // Remove current selections\n    for (let row = 0; row < rowData.length; row += 1) {\n      for (let cell = 0; cell < rowData[row].cells.length; cell += 1) {\n        newRowData[row].cells[cell].isSelected = false;\n      }\n    }\n\n    cells.forEach((cell) => {\n      const rowIndex = rowData.findIndex(e => e.id === cell.rowId);\n      const columnIndex = cols.findIndex(e => e.id === cell.columnId);\n\n      newRowData[rowIndex].cells[columnIndex].isSelected = true;\n    });\n\n    setRowData(newRowData);\n  }, [cols, rowData]);\n\n  return (\n    <FlowsheetDataGrid\n      id=\"default-terra-flowsheet-data-grid\"\n      columns={cols}\n      rows={rowData}\n      ariaLabel=\"Flowsheet Data Grid\"\n      onCellSelect={onCellSelect}\n      onClearSelectedCells={onClearSelectedCells}\n      onCellRangeSelect={onCellRangeSelect}\n      hasVisibleColumnHeaders={false}\n    />\n  );\n};\n\nexport default ColumnHeadersHidden;\n\n")))}u.isMDXComponent=!0;var d=n(49271),f=function(e){var t=e.title,n=e.description,r=e.isExpanded;return l.createElement(d.Z,{title:t||"Column Headers Hidden",description:n,example:l.createElement(c.Z,null),exampleSrc:l.createElement(u,null),isExpanded:r})},p=["components"],m={},w="wrapper";function h(e){var t=e.components,n=(0,o.Z)(e,p);return(0,a.mdx)(w,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("h1",{id:"hiding-column-headers"},"Hiding Column Headers"),(0,a.mdx)("h3",{id:"description"},"Description"),(0,a.mdx)("p",null,"The ",(0,a.mdx)("a",{parentName:"p",href:"/terra-framework/pull/1897/components/cerner-terra-framework-docs/data-grid/flowsheet-data-grid/about"},"Flowsheet Data Grid")," can hide column headers with the ",(0,a.mdx)("inlineCode",{parentName:"p"},"hasVisibleColumnHeaders")," prop."),(0,a.mdx)("h3",{id:"usage"},"Usage"),(0,a.mdx)("p",null,"The ",(0,a.mdx)("inlineCode",{parentName:"p"},"hasVisibleColumns")," is a boolean. By default, it is set to ",(0,a.mdx)("inlineCode",{parentName:"p"},"true"),".\nWhen it is set to ",(0,a.mdx)("inlineCode",{parentName:"p"},"false"),", the column headers are hidden, but still exist in the DOM and can be read by screenreaders when providing context for the table.\nThis is useful when needing to use custom alternative to column headers, such as Stella Timeline."),(0,a.mdx)("p",null,(0,a.mdx)("strong",{parentName:"p"},"Note:")),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"Column header labels should still be provided in the dataset to ensure that sceenreaders will still read out the appropriate context for the table."),(0,a.mdx)("li",{parentName:"ul"},"When using custom column headers, then logic must be added to ensure that the column widths match are in sync if resizing columns are enabled.\nThe ",(0,a.mdx)("a",{parentName:"li",href:"/terra-framework/pull/1897/components/cerner-terra-framework-docs/data-grid/flowsheet-data-grid/about"},"columns.width")," property for columns can be used to set the column widths programatically.")),(0,a.mdx)(f,{title:"Flowsheet Data Grid with no column headers",description:"The column headers can be hidden with the hasVisibleColumnHeaders prop set to false.",mdxType:"ColumnHeadersHidden"}))}h.isMDXComponent=!0},92465:function(e,t,n){var r=n(64836),o=n(18698);t.Z=void 0;var l=r(n(861)),a=r(n(27424)),c=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=o(e)&&"function"!=typeof e)return{default:e};var n=s(t);if(n&&n.has(e))return n.get(e);var r={__proto__:null},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var c=l?Object.getOwnPropertyDescriptor(e,a):null;c&&(c.get||c.set)?Object.defineProperty(r,a,c):r[a]=e[a]}return r.default=e,n&&n.set(e,r),r}(n(67294)),i=n(55730);function s(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(s=function(e){return e?n:t})(e)}t.Z=function(){var e=[{id:"Column-0",displayName:"Vitals"},{id:"Column-1",displayName:"March 16"},{id:"Column-2",displayName:"March 17"},{id:"Column-3",displayName:"March 18"}],t=[{id:"1",cells:[{content:"Heart Rate Monitored (bpm)"},{content:"68"},{content:"66"},{content:"67"}]},{id:"2",cells:[{content:"Temperature Oral (degC)"},{content:"36.7"},{content:"36.9"},{content:"37"}]},{id:"3",cells:[{content:"Cardiac Index (L/min/m2)"},{content:"2.25"},{content:"2.28"},{content:null}]},{id:"4",cells:[{content:"ICP (mmHg)"},{content:null},{content:"11"},{content:"12"}]},{id:"5",cells:[{content:"CPP (mmHg)"},{content:"63"},{content:null},{content:"48"}]}],n=(0,c.useState)(t),r=(0,a.default)(n,2),o=r[0],s=r[1],u=(0,c.useCallback)((function(t,n){if(t&&n){for(var r=o.findIndex((function(e){return e.id===t})),a=e.findIndex((function(e){return e.id===n})),c=!1,i=(0,l.default)(o),u=0;u<o.length;u+=1)for(var d=0;d<o[u].cells.length;d+=1){var f=o[u].cells[d];!f.isSelected||u===r&&d===a||(f.isSelected=!1,c=!0)}i[r].cells[a].isSelected=!o[r].cells[a].isSelected||c,s(i)}}),[e,o]),d=(0,c.useCallback)((function(){for(var e=(0,l.default)(o),t=0;t<o.length;t+=1)for(var n=0;n<o[t].cells.length;n+=1)e[t].cells[n].isSelected=!1;s(e)}),[o]),f=(0,c.useCallback)((function(t){for(var n=(0,l.default)(o),r=0;r<o.length;r+=1)for(var a=0;a<o[r].cells.length;a+=1)n[r].cells[a].isSelected=!1;t.forEach((function(t){var r=o.findIndex((function(e){return e.id===t.rowId})),l=e.findIndex((function(e){return e.id===t.columnId}));n[r].cells[l].isSelected=!0})),s(n)}),[e,o]);return c.default.createElement(i.FlowsheetDataGrid,{id:"default-terra-flowsheet-data-grid",columns:e,rows:o,ariaLabel:"Flowsheet Data Grid",onCellSelect:u,onClearSelectedCells:d,onCellRangeSelect:f,hasVisibleColumnHeaders:!1})}},53560:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},9197:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"SectionHeader-module__clinical-lowlight-theme___M-5zo","orion-fusion-theme":"SectionHeader-module__orion-fusion-theme___MGUT7","section-header":"SectionHeader-module__section-header___wbdJQ","is-interactable":"SectionHeader-module__is-interactable___4Hj3Z","is-active":"SectionHeader-module__is-active___Qfdbq","is-transparent":"SectionHeader-module__is-transparent___3L6Q5","title-arrange":"SectionHeader-module__title-arrange___t4JW1",title:"SectionHeader-module__title___EPyaG","accordion-icon-wrapper":"SectionHeader-module__accordion-icon-wrapper___BOHqG","accordion-icon":"SectionHeader-module__accordion-icon___VQmOf","is-open":"SectionHeader-module__is-open___naqpt","arrange-wrapper":"SectionHeader-module__arrange-wrapper___jwEJm"}},16772:function(e,t,n){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=m(n(67294)),l=m(n(45697)),a=m(n(94184)),c=m(n(47166)),i=m(n(47341)),s=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var n=p(t);if(n&&n.has(e))return n.get(e);var o={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var c=l?Object.getOwnPropertyDescriptor(e,a):null;c&&(c.get||c.set)?Object.defineProperty(o,a,c):o[a]=e[a]}o.default=e,n&&n.set(e,o);return o}(n(51051)),u=m(n(78490)),d=m(n(9197)),f=["text","title","onClick","isOpen","isTransparent","level"];function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(p=function(e){return e?n:t})(e)}function m(e){return e&&e.__esModule?e:{default:e}}function w(){return w=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},w.apply(this,arguments)}function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _(e,t,n){return(t=v(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,v(r.key),r)}}function v(e){var t=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===r(t)?t:String(t)}function g(e,t){return g=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},g(e,t)}function x(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=C(e);if(t){var l=C(this).constructor;n=Reflect.construct(o,arguments,l)}else n=o.apply(this,arguments);return function(e,t){if(t&&("object"===r(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return O(e)}(this,n)}}function O(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function C(e){return C=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},C(e)}var E=c.default.bind(d.default),S={text:l.default.string,title:l.default.string,onClick:l.default.func,isOpen:l.default.bool,level:l.default.oneOf([1,2,3,4,5,6]),isTransparent:l.default.bool},D={onClick:void 0,isOpen:!1,isTransparent:!1},j=function(e){return e.nativeEvent.keyCode===s.KEY_RETURN||e.nativeEvent.keyCode===s.KEY_SPACE},P=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&g(e,t)}(c,e);var t,n,r,l=x(c);function c(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(t=l.call(this,e)).state={isActive:!1},t.wrapOnKeyDown=t.wrapOnKeyDown.bind(O(t)),t.wrapOnKeyUp=t.wrapOnKeyUp.bind(O(t)),t}return t=c,n=[{key:"wrapOnKeyDown",value:function(e){var t=this;return function(n){j(n)&&!t.state.isActive&&(t.setState({isActive:!0}),t.props.onClick&&t.props.onClick(n)),e&&e(n)}}},{key:"wrapOnKeyUp",value:function(e){var t=this;return function(n){j(n)&&t.state.isActive&&t.setState({isActive:!1}),e&&e(n)}}},{key:"render",value:function(){var e=this.props,t=e.text,n=e.title,r=e.onClick,l=e.isOpen,c=e.isTransparent,i=e.level,s=b(e,f),d=this.context,p=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){_(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},s);r&&(p.tabIndex="0",p.onKeyDown=this.wrapOnKeyDown(p.onKeyDown),p.onKeyUp=this.wrapOnKeyUp(p.onKeyUp),p.onClick=r);var m=E(["accordion-icon",{"is-open":r&&l}]),y=o.default.createElement("span",{className:E("accordion-icon-wrapper")},o.default.createElement("span",{className:m})),v=(0,a.default)(E("section-header",{"is-interactable":r},{"is-active":this.state.isActive},{"is-transparent":c},d.className),s.className);i||console.warn("Default heading level may not appropriate has it would fail to convey context of heading in a site / application where it is used. Heading level should be set explicitly depending on the position of header in site / application to allow screen readers to identify headers consistently."),n&&console.warn("`title` prop has been renamed to `text`. please update all the refernces of `title` prop to use prop `text`.");var g="h".concat(i||2),x=t||n,O=r&&y?{type:"button",tabIndex:"-1","aria-expanded":l,"aria-label":x}:void 0,C=r&&y?"button":"span";return o.default.createElement(g,w({},p,{className:v,"aria-label":r?void 0:x}),o.default.createElement(C,w({},O,{className:E("arrange-wrapper")}),o.default.createElement(u.default,{fitStart:r&&y,fill:o.default.createElement("span",{"aria-hidden":void 0!==r,className:E("title")},x),className:E("title-arrange")})))}}],n&&y(t.prototype,n),r&&y(t,r),Object.defineProperty(t,"prototype",{writable:!1}),c}(o.default.Component);P.propTypes=S,P.defaultProps=D,P.contextType=i.default;var N=P;t.default=N},87462:function(e,t,n){function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},r.apply(this,arguments)}n.d(t,{Z:function(){return r}})},44925:function(e,t,n){function r(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.d(t,{Z:function(){return r}})}}]);