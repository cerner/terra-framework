"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[38858,47209],{49271:function(e,t,n){var r=n(64836),o=n(18698);t.Z=void 0;var a=r(n(27424)),l=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==o(e)&&"function"!=typeof e)return{default:e};var n=m(t);if(n&&n.has(e))return n.get(e);var r={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var i=a?Object.getOwnPropertyDescriptor(e,l):null;i&&(i.get||i.set)?Object.defineProperty(r,l,i):r[l]=e[l]}r.default=e,n&&n.set(e,r);return r}(n(67294)),i=r(n(45697)),c=r(n(47166)),s=n(21538),u=r(n(33864)),d=r(n(23399)),p=n(51051),f=r(n(53560));function m(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(m=function(e){return e?n:t})(e)}var y=c.default.bind(f.default),_={example:i.default.element,exampleSrc:i.default.element,exampleCssSrc:i.default.element,title:i.default.string,description:i.default.node,isExpanded:i.default.bool},b=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},w=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},h=function(e){var t=e.example,n=e.exampleSrc,r=e.exampleCssSrc,o=e.title,i=e.description,c=e.isExpanded,f=(0,l.useState)(c),m=(0,a.default)(f,2),_=m[0],h=m[1],v=(0,l.useState)(!1),g=(0,a.default)(v,2),O=g[0],x=g[1],C=l.default.useContext(s.ThemeContext),S=void 0!==r,E=function(){x(!O),_&&h(!_)},k=function(){h(!_),O&&x(!O)},N=function(e,t){e.nativeEvent.keyCode!==p.KEY_SPACE&&e.nativeEvent.keyCode!==p.KEY_RETURN||(e.preventDefault(),t())};return l.default.createElement("div",{className:y("template",C.className)},l.default.createElement("div",{className:y("header")},o&&l.default.createElement("h2",{className:y("title")},o)),l.default.createElement("div",{className:y("content")},i&&l.default.createElement("div",{className:y("description")},i),t),l.default.createElement("div",{className:y("footer")},n?l.default.createElement("div",{className:y("button-container")},S&&l.default.createElement("button",{type:"button",className:y("css-toggle","item",{"is-selected":O}),onClick:E,onKeyDown:function(e){return N(e,E)},onBlur:b,onMouseDown:w,tabIndex:0,"data-focus-styles-enabled":!0},l.default.createElement(u.default,{className:y("chevron")}),l.default.createElement("span",null,"CSS"),l.default.createElement(d.default,{className:y("chevron")})),l.default.createElement("button",{type:"button",className:y("code-toggle","item",{"is-selected":_}),onClick:k,onKeyDown:function(e){return N(e,k)},onBlur:b,onMouseDown:w,tabIndex:0,"data-focus-styles-enabled":!0},l.default.createElement(u.default,{className:y("chevron")}),l.default.createElement("span",null,"Code"),l.default.createElement(d.default,{className:y("chevron")}))):null,l.default.createElement("div",null,O&&l.default.createElement("div",{className:y("css")},r),_&&l.default.createElement("div",{className:y("code")},n))))};h.propTypes=_,h.defaultProps={isExpanded:!1};var v=h;t.Z=v},41740:function(e,t,n){n.r(t),n.d(t,{default:function(){return _}});var r=n(87462),o=n(44925),a=n(67294),l=n(81254),i=n(96216),c=["components"],s={};function u(e){var t=e.components,n=(0,o.Z)(e,c);return(0,l.mdx)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React, { useCallback, useState } from 'react';\nimport { WorklistDataGrid } from 'terra-data-grid';\n\nconst gridDataJSON = {\n  cols: [\n    { id: 'Column-0', displayName: 'Patient' },\n    { id: 'Column-1', displayName: 'Location' },\n    { id: 'Column-2', displayName: 'Illness Severity' },\n    { id: 'Column-3', displayName: 'Visit' },\n    { id: 'Column-4', displayName: 'Allergy' },\n    { id: 'Column-5', displayName: 'Primary Contact' },\n    { id: 'Column-6', displayName: 'Generic Order Counts' },\n    { id: 'Column-7', displayName: 'Patient Age' },\n    { id: 'Column-8', displayName: 'Medication History' },\n    { id: 'Column-9', displayName: 'My Relationship' },\n    { id: 'Column-10', displayName: 'Not Selectable', isSelectable: false },\n  ],\n  rows: [\n    {\n      id: '1',\n      cells: [\n        { content: 'Fleck, Arthur' },\n        { content: '1007-MTN' },\n        { content: 'Unstable' },\n        { content: 'Inpatient, 2 months' },\n        { content: '' },\n        { content: 'Quinzell, Harleen' },\n        { content: '' },\n        { isMasked: true },\n        { isMasked: true },\n        { content: 'Admitting Physician' },\n        { content: '', isSelectable: false },\n      ],\n    },\n    {\n      id: '2',\n      cells: [\n        { content: 'Wayne, Bruce' },\n        { content: '1007-MTN-DR' },\n        { content: 'Stable' },\n        { content: 'Outpatient, 2 days' },\n        { content: 'Phytochemicals' },\n        { content: 'Grayson, Richard' },\n        { content: '' },\n        { content: '' },\n        { isMasked: true },\n        { content: 'Admitting Physician' },\n        { content: '', isSelectable: false },\n      ],\n    },\n  ],\n};\n\nconst PinnedColumns = () => {\n  const rowHeaderIndex = 0;\n  const { cols, rows } = gridDataJSON;\n\n  const [rowData, setRowData] = useState(rows);\n\n  const onCellSelect = useCallback((rowId, columnId) => {\n    if (rowId && columnId) {\n      const rowIndex = rowData.findIndex(row => row.id === rowId);\n      const columnIndex = cols.findIndex(column => column.id === columnId);\n\n      // Remove current selections\n      const newRowData = [...rowData];\n      for (let row = 0; row < rowData.length; row += 1) {\n        for (let cell = 0; cell < rowData[row].cells.length; cell += 1) {\n          const currentCell = rowData[row].cells[cell];\n          if (currentCell.isSelected && !(row === rowIndex && cell === columnIndex)) {\n            currentCell.isSelected = false;\n          }\n        }\n      }\n\n      // Toggle selection state of selected cell\n      newRowData[rowIndex].cells[columnIndex].isSelected = !rowData[rowIndex].cells[columnIndex].isSelected;\n      setRowData(newRowData);\n    }\n  }, [cols, rowData]);\n\n  const onClearSelectedCells = useCallback(() => {\n    // Remove current selections\n    const newRowData = [...rowData];\n    for (let row = 0; row < rowData.length; row += 1) {\n      for (let cell = 0; cell < rowData[row].cells.length; cell += 1) {\n        newRowData[row].cells[cell].isSelected = false;\n      }\n    }\n\n    setRowData(newRowData);\n  }, [rowData]);\n\n  return (\n    <WorklistDataGrid\n      id=\"terra-worklist-data-grid-pinned-columns\"\n      pinnedColumns={cols.slice(0, 3)} // This prop must be specified to display columns that need to pinned (stickied).\n      overflowColumns={cols.slice(3)} // This prop must be specified to display columns that do not need to be stickied and can be scrolled horizontally.\n      rows={rowData}\n      rowHeaderIndex={rowHeaderIndex}\n      ariaLabel=\"Worklist Data Grid\"\n      onCellSelect={onCellSelect}\n      onClearSelectedCells={onClearSelectedCells}\n    />\n  );\n};\n\nexport default PinnedColumns;\n\n")))}u.isMDXComponent=!0;var d=n(49271),p=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.createElement(d.Z,{title:t||"Pinned Columns",description:n,example:a.createElement(i.Z,null),exampleSrc:a.createElement(u,null),isExpanded:r})},f=["components"],m={},y="wrapper";function _(e){var t=e.components,n=(0,o.Z)(e,f);return(0,l.mdx)(y,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("h1",{id:"pinned-columns"},"Pinned Columns"),(0,l.mdx)("h3",{id:"description"},"Description"),(0,l.mdx)("p",null,"The ",(0,l.mdx)("a",{parentName:"p",href:"/terra-framework/pull/1896/components/cerner-terra-framework-docs/data-grid/worklist-data-grid/about"},"Worklist Data Grid")," defines two types of columns: Pinned and Overflow.\nThe pinned columns are aligned to the left of the Worklist Data Grid and cannot be scrolled.\nThe overflow section is aligned to the right of pinned columns and scrolls horizontally to reveal each overflow column.\nThis example demonstrates a Worklist Data Grid that supports both pinned and overflow columns."),(0,l.mdx)("h3",{id:"properties-required"},"Properties required"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},"The ",(0,l.mdx)("strong",{parentName:"p"},"pinnedColumns")," prop is used to specify columns that need to be aligned left of the grid and stickied.")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},"The ",(0,l.mdx)("strong",{parentName:"p"},"overflowColumns")," prop is used to specify columns that do not need to be stickied and can scroll horizontally."))),(0,l.mdx)("p",null,"Columns specified in both these props will rendered in the order in which they are provided."),(0,l.mdx)(p,{title:"Worklist Data Grid with Pinned Columns",mdxType:"PinnedColumns"}))}_.isMDXComponent=!0},96216:function(e,t,n){var r=n(64836),o=n(18698);t.Z=void 0;var a=r(n(861)),l=r(n(27424)),i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=o(e)&&"function"!=typeof e)return{default:e};var n=s(t);if(n&&n.has(e))return n.get(e);var r={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var i=a?Object.getOwnPropertyDescriptor(e,l):null;i&&(i.get||i.set)?Object.defineProperty(r,l,i):r[l]=e[l]}return r.default=e,n&&n.set(e,r),r}(n(67294)),c=n(55730);function s(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(s=function(e){return e?n:t})(e)}var u=[{id:"Column-0",displayName:"Patient"},{id:"Column-1",displayName:"Location"},{id:"Column-2",displayName:"Illness Severity"},{id:"Column-3",displayName:"Visit"},{id:"Column-4",displayName:"Allergy"},{id:"Column-5",displayName:"Primary Contact"},{id:"Column-6",displayName:"Generic Order Counts"},{id:"Column-7",displayName:"Patient Age"},{id:"Column-8",displayName:"Medication History"},{id:"Column-9",displayName:"My Relationship"},{id:"Column-10",displayName:"Not Selectable",isSelectable:!1}],d=[{id:"1",cells:[{content:"Fleck, Arthur"},{content:"1007-MTN"},{content:"Unstable"},{content:"Inpatient, 2 months"},{content:""},{content:"Quinzell, Harleen"},{content:""},{isMasked:!0},{isMasked:!0},{content:"Admitting Physician"},{content:"",isSelectable:!1}]},{id:"2",cells:[{content:"Wayne, Bruce"},{content:"1007-MTN-DR"},{content:"Stable"},{content:"Outpatient, 2 days"},{content:"Phytochemicals"},{content:"Grayson, Richard"},{content:""},{content:""},{isMasked:!0},{content:"Admitting Physician"},{content:"",isSelectable:!1}]}];t.Z=function(){var e=u,t=d,n=(0,i.useState)(t),r=(0,l.default)(n,2),o=r[0],s=r[1],p=(0,i.useCallback)((function(t,n){if(t&&n){for(var r=o.findIndex((function(e){return e.id===t})),l=e.findIndex((function(e){return e.id===n})),i=(0,a.default)(o),c=0;c<o.length;c+=1)for(var u=0;u<o[c].cells.length;u+=1){var d=o[c].cells[u];!d.isSelected||c===r&&u===l||(d.isSelected=!1)}i[r].cells[l].isSelected=!o[r].cells[l].isSelected,s(i)}}),[e,o]),f=(0,i.useCallback)((function(){for(var e=(0,a.default)(o),t=0;t<o.length;t+=1)for(var n=0;n<o[t].cells.length;n+=1)e[t].cells[n].isSelected=!1;s(e)}),[o]);return i.default.createElement(c.WorklistDataGrid,{id:"terra-worklist-data-grid-pinned-columns",pinnedColumns:e.slice(0,3),overflowColumns:e.slice(3),rows:o,rowHeaderIndex:0,ariaLabel:"Worklist Data Grid",onCellSelect:p,onClearSelectedCells:f})}},53560:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},9197:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"SectionHeader-module__clinical-lowlight-theme___M-5zo","orion-fusion-theme":"SectionHeader-module__orion-fusion-theme___MGUT7","section-header":"SectionHeader-module__section-header___wbdJQ","is-interactable":"SectionHeader-module__is-interactable___4Hj3Z","is-active":"SectionHeader-module__is-active___Qfdbq","is-transparent":"SectionHeader-module__is-transparent___3L6Q5","title-arrange":"SectionHeader-module__title-arrange___t4JW1",title:"SectionHeader-module__title___EPyaG","accordion-icon-wrapper":"SectionHeader-module__accordion-icon-wrapper___BOHqG","accordion-icon":"SectionHeader-module__accordion-icon___VQmOf","is-open":"SectionHeader-module__is-open___naqpt","arrange-wrapper":"SectionHeader-module__arrange-wrapper___jwEJm"}},16772:function(e,t,n){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=m(n(67294)),a=m(n(45697)),l=m(n(94184)),i=m(n(47166)),c=m(n(47341)),s=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var o={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var i=a?Object.getOwnPropertyDescriptor(e,l):null;i&&(i.get||i.set)?Object.defineProperty(o,l,i):o[l]=e[l]}o.default=e,n&&n.set(e,o);return o}(n(51051)),u=m(n(78490)),d=m(n(9197)),p=["text","title","onClick","isOpen","isTransparent","level"];function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}function m(e){return e&&e.__esModule?e:{default:e}}function y(){return y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},y.apply(this,arguments)}function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e,t,n){return(t=v(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function w(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,v(r.key),r)}}function v(e){var t=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===r(t)?t:String(t)}function g(e,t){return g=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},g(e,t)}function O(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=C(e);if(t){var a=C(this).constructor;n=Reflect.construct(o,arguments,a)}else n=o.apply(this,arguments);return function(e,t){if(t&&("object"===r(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return x(e)}(this,n)}}function x(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function C(e){return C=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},C(e)}var S=i.default.bind(d.default),E={text:a.default.string,title:a.default.string,onClick:a.default.func,isOpen:a.default.bool,level:a.default.oneOf([1,2,3,4,5,6]),isTransparent:a.default.bool},k={onClick:void 0,isOpen:!1,isTransparent:!1},N=function(e){return e.nativeEvent.keyCode===s.KEY_RETURN||e.nativeEvent.keyCode===s.KEY_SPACE},P=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&g(e,t)}(i,e);var t,n,r,a=O(i);function i(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(t=a.call(this,e)).state={isActive:!1},t.wrapOnKeyDown=t.wrapOnKeyDown.bind(x(t)),t.wrapOnKeyUp=t.wrapOnKeyUp.bind(x(t)),t}return t=i,n=[{key:"wrapOnKeyDown",value:function(e){var t=this;return function(n){N(n)&&!t.state.isActive&&(t.setState({isActive:!0}),t.props.onClick&&t.props.onClick(n)),e&&e(n)}}},{key:"wrapOnKeyUp",value:function(e){var t=this;return function(n){N(n)&&t.state.isActive&&t.setState({isActive:!1}),e&&e(n)}}},{key:"render",value:function(){var e=this.props,t=e.text,n=e.title,r=e.onClick,a=e.isOpen,i=e.isTransparent,c=e.level,s=w(e,p),d=this.context,f=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},s);r&&(f.tabIndex="0",f.onKeyDown=this.wrapOnKeyDown(f.onKeyDown),f.onKeyUp=this.wrapOnKeyUp(f.onKeyUp),f.onClick=r);var m=S(["accordion-icon",{"is-open":r&&a}]),h=o.default.createElement("span",{className:S("accordion-icon-wrapper")},o.default.createElement("span",{className:m})),v=(0,l.default)(S("section-header",{"is-interactable":r},{"is-active":this.state.isActive},{"is-transparent":i},d.className),s.className);c||console.warn("Default heading level may not appropriate has it would fail to convey context of heading in a site / application where it is used. Heading level should be set explicitly depending on the position of header in site / application to allow screen readers to identify headers consistently."),n&&console.warn("`title` prop has been renamed to `text`. please update all the refernces of `title` prop to use prop `text`.");var g="h".concat(c||2),O=t||n,x=r&&h?{type:"button",tabIndex:"-1","aria-expanded":a,"aria-label":O}:void 0,C=r&&h?"button":"span";return o.default.createElement(g,y({},f,{className:v,"aria-label":r?void 0:O}),o.default.createElement(C,y({},x,{className:S("arrange-wrapper")}),o.default.createElement(u.default,{fitStart:r&&h,fill:o.default.createElement("span",{"aria-hidden":void 0!==r,className:S("title")},O),className:S("title-arrange")})))}}],n&&h(t.prototype,n),r&&h(t,r),Object.defineProperty(t,"prototype",{writable:!1}),i}(o.default.Component);P.propTypes=E,P.defaultProps=k,P.contextType=c.default;var D=P;t.default=D},87462:function(e,t,n){function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},r.apply(this,arguments)}n.d(t,{Z:function(){return r}})},44925:function(e,t,n){function r(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.d(t,{Z:function(){return r}})}}]);