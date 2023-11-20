"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[65729,47209],{49271:function(e,t,n){var r=n(64836),o=n(18698);t.Z=void 0;var a=r(n(27424)),l=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==o(e)&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var r={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var i=a?Object.getOwnPropertyDescriptor(e,l):null;i&&(i.get||i.set)?Object.defineProperty(r,l,i):r[l]=e[l]}r.default=e,n&&n.set(e,r);return r}(n(67294)),i=r(n(45697)),c=r(n(47166)),s=n(21538),u=r(n(33864)),d=r(n(23399)),p=n(51051),m=r(n(53560));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}var b=c.default.bind(m.default),y={example:i.default.element,exampleSrc:i.default.element,exampleCssSrc:i.default.element,title:i.default.string,description:i.default.node,isExpanded:i.default.bool},_=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},h=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},w=function(e){var t=e.example,n=e.exampleSrc,r=e.exampleCssSrc,o=e.title,i=e.description,c=e.isExpanded,m=(0,l.useState)(c),f=(0,a.default)(m,2),y=f[0],w=f[1],v=(0,l.useState)(!1),O=(0,a.default)(v,2),g=O[0],x=O[1],C=l.default.useContext(s.ThemeContext),E=void 0!==r,S=function(){x(!g),y&&w(!y)},j=function(){w(!y),g&&x(!g)},P=function(e,t){e.nativeEvent.keyCode!==p.KEY_SPACE&&e.nativeEvent.keyCode!==p.KEY_RETURN||(e.preventDefault(),t())};return l.default.createElement("div",{className:b("template",C.className)},l.default.createElement("div",{className:b("header")},o&&l.default.createElement("h2",{className:b("title")},o)),l.default.createElement("div",{className:b("content")},i&&l.default.createElement("div",{className:b("description")},i),t),l.default.createElement("div",{className:b("footer")},n?l.default.createElement("div",{className:b("button-container")},E&&l.default.createElement("button",{type:"button",className:b("css-toggle","item",{"is-selected":g}),onClick:S,onKeyDown:function(e){return P(e,S)},onBlur:_,onMouseDown:h,tabIndex:0,"data-focus-styles-enabled":!0},l.default.createElement(u.default,{className:b("chevron")}),l.default.createElement("span",null,"CSS"),l.default.createElement(d.default,{className:b("chevron")})),l.default.createElement("button",{type:"button",className:b("code-toggle","item",{"is-selected":y}),onClick:j,onKeyDown:function(e){return P(e,j)},onBlur:_,onMouseDown:h,tabIndex:0,"data-focus-styles-enabled":!0},l.default.createElement(u.default,{className:b("chevron")}),l.default.createElement("span",null,"Code"),l.default.createElement(d.default,{className:b("chevron")}))):null,l.default.createElement("div",null,g&&l.default.createElement("div",{className:b("css")},r),y&&l.default.createElement("div",{className:b("code")},n))))};w.propTypes=y,w.defaultProps={isExpanded:!1};var v=w;t.Z=v},66566:function(e,t,n){n.r(t),n.d(t,{default:function(){return y}});var r=n(87462),o=n(44925),a=n(67294),l=n(81254),i=n(8113),c=["components"],s={};function u(e){var t=e.components,n=(0,o.Z)(e,c);return(0,l.mdx)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React, { useState } from 'react';\nimport Table from 'terra-table';\n\nconst tableDataJSON = {\n  cols: [\n    {\n      id: 'Column-0', displayName: 'Patient', sortIndicator: 'ascending', hasError: true, isSelectable: true, // This column header will be rendered with a sort indicator and an error icon by default.\n    },\n    { id: 'Column-1', displayName: 'Location', isSelectable: true },\n    { id: 'Column-2', displayName: 'Illness Severity', isSelectable: true },\n    { id: 'Column-3', displayName: 'Visit', isSelectable: true },\n    { id: 'Column-4', displayName: 'Allergy', hasError: true }, // Use hasError property to display an error icon in the column header\n    { id: 'Column-5', displayName: 'Primary Contact', isSelectable: true },\n  ],\n  rows: [\n    {\n      id: '1',\n      cells: [\n        { content: 'Fleck, Arthur' },\n        { content: '1007-MTN' },\n        { content: 'Unstable' },\n        { content: 'Inpatient, 2 months' },\n        { content: '' },\n        { content: 'Quinzell, Harleen' },\n      ],\n    },\n    {\n      id: '2',\n      cells: [\n        { content: 'Wayne, Bruce' },\n        { content: '1007-MTN-DR' },\n        { content: 'Stable' },\n        { content: 'Outpatient, 2 days' },\n        { content: 'Phytochemicals' },\n        { content: 'Grayson, Richard' },\n      ],\n    },\n  ],\n};\n\nconst TableWithColumnStates = () => {\n  const rowHeaderIndex = 0;\n  const { cols, rows } = tableDataJSON;\n\n  const [tableColumns, setTableColumns] = useState(cols);\n  const [tableRows, setTableRows] = useState(rows);\n\n  // The onColumnSelect will sort the rows and toggle the current sort indicator.\n  const onColumnSelect = (columnId) => {\n    const newColumnArray = tableColumns.map((column, columnIndex) => {\n      const newColumn = { ...column };\n\n      if (column.id === columnId) {\n        newColumn.sortIndicator = column.sortIndicator === 'ascending' ? 'descending' : 'ascending';\n\n        const newGridRows = [...tableRows];\n        newGridRows.sort((rowA, rowB) => {\n          const firstRowContent = rowA.cells[columnIndex].content || '';\n          const secondRowContent = rowB.cells[columnIndex].content || '';\n\n          if (newColumn.sortIndicator === 'ascending') {\n            return firstRowContent.localeCompare(secondRowContent);\n          }\n          return secondRowContent.localeCompare(firstRowContent);\n        });\n\n        setTableRows(newGridRows);\n      } else {\n        newColumn.sortIndicator = undefined;\n      }\n\n      return newColumn;\n    });\n\n    setTableColumns(newColumnArray);\n  };\n\n  return (\n    <Table\n      id=\"terra-table-with-column-states\"\n      overflowColumns={tableColumns}\n      rows={tableRows}\n      rowHeaderIndex={rowHeaderIndex}\n      rowHeight=\"50px\"\n      defaultColumnWidth={100}\n      columnHeaderHeight=\"50px\"\n      onColumnSelect={onColumnSelect} // Consumer must provide this callback to the Worklist Data Grid for it to call when the user selects a column header.\n      ariaLabel=\"Table\"\n    />\n  );\n};\n\nexport default TableWithColumnStates;\n\n")))}u.isMDXComponent=!0;var d=n(49271),p=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.createElement(d.Z,{title:t||"Table Column States",description:n,example:a.createElement(i.Z,null),exampleSrc:a.createElement(u,null),isExpanded:r})},m=["components"],f={},b="wrapper";function y(e){var t=e.components,n=(0,o.Z)(e,m);return(0,l.mdx)(b,(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("h1",{id:"column-states-and-selection"},"Column States and Selection"),(0,l.mdx)("h3",{id:"description"},"Description"),(0,l.mdx)("p",null,"This example demonstrates a ",(0,l.mdx)("a",{parentName:"p",href:"/terra-framework/pull/1902/components/cerner-terra-framework-docs/table/about"},"Table")," that supports column states and sorting.\nA column can be selected by clicking on the column header or tabbing to the column header and pressing the Space key on the focused column header.\nOnly columns that are selectable can be selected."),(0,l.mdx)("p",null,"The Column can display error and sort indicator icons to represent its current state."),(0,l.mdx)("h3",{id:"properties-required"},"Properties required"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"The ",(0,l.mdx)("strong",{parentName:"li"},(0,l.mdx)("em",{parentName:"strong"},"onColumnSelect"))," callback prop: When the user selects a column, this callback will be called with the columnId of the selected column.")),(0,l.mdx)("p",null,"The below example also demonstrates how properties such as ",(0,l.mdx)("em",{parentName:"p"},"isSelectable"),", ",(0,l.mdx)("em",{parentName:"p"},"hasError")," and ",(0,l.mdx)("em",{parentName:"p"},"sortIndicator")," can be provided by the consumer to control if column header is selectable, display error state, and show sort indicator icons respectively."),(0,l.mdx)(p,{title:"Table Column States",mdxType:"TableColumnStates"}))}y.isMDXComponent=!0},8113:function(e,t,n){var r=n(64836),o=n(18698);t.Z=void 0;var a=r(n(861)),l=r(n(38416)),i=r(n(27424)),c=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=o(e)&&"function"!=typeof e)return{default:e};var n=u(t);if(n&&n.has(e))return n.get(e);var r={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var i=a?Object.getOwnPropertyDescriptor(e,l):null;i&&(i.get||i.set)?Object.defineProperty(r,l,i):r[l]=e[l]}return r.default=e,n&&n.set(e,r),r}(n(67294)),s=r(n(12810));function u(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(u=function(e){return e?n:t})(e)}function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var p=[{id:"Column-0",displayName:"Patient",sortIndicator:"ascending",hasError:!0,isSelectable:!0},{id:"Column-1",displayName:"Location",isSelectable:!0},{id:"Column-2",displayName:"Illness Severity",isSelectable:!0},{id:"Column-3",displayName:"Visit",isSelectable:!0},{id:"Column-4",displayName:"Allergy",hasError:!0},{id:"Column-5",displayName:"Primary Contact",isSelectable:!0}],m=[{id:"1",cells:[{content:"Fleck, Arthur"},{content:"1007-MTN"},{content:"Unstable"},{content:"Inpatient, 2 months"},{content:""},{content:"Quinzell, Harleen"}]},{id:"2",cells:[{content:"Wayne, Bruce"},{content:"1007-MTN-DR"},{content:"Stable"},{content:"Outpatient, 2 days"},{content:"Phytochemicals"},{content:"Grayson, Richard"}]}];t.Z=function(){var e=p,t=m,n=(0,c.useState)(e),r=(0,i.default)(n,2),o=r[0],u=r[1],f=(0,c.useState)(t),b=(0,i.default)(f,2),y=b[0],_=b[1];return c.default.createElement(s.default,{id:"terra-table-with-column-states",overflowColumns:o,rows:y,rowHeaderIndex:0,rowHeight:"50px",defaultColumnWidth:100,columnHeaderHeight:"50px",onColumnSelect:function(e){var t=o.map((function(t,n){var r=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){(0,l.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},t);if(t.id===e){r.sortIndicator="ascending"===t.sortIndicator?"descending":"ascending";var o=(0,a.default)(y);o.sort((function(e,t){var o=e.cells[n].content||"",a=t.cells[n].content||"";return"ascending"===r.sortIndicator?o.localeCompare(a):a.localeCompare(o)})),_(o)}else r.sortIndicator=void 0;return r}));u(t)},ariaLabel:"Table"})}},53560:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},9197:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"SectionHeader-module__clinical-lowlight-theme___M-5zo","orion-fusion-theme":"SectionHeader-module__orion-fusion-theme___MGUT7","section-header":"SectionHeader-module__section-header___wbdJQ","is-interactable":"SectionHeader-module__is-interactable___4Hj3Z","is-active":"SectionHeader-module__is-active___Qfdbq","is-transparent":"SectionHeader-module__is-transparent___3L6Q5","title-arrange":"SectionHeader-module__title-arrange___t4JW1",title:"SectionHeader-module__title___EPyaG","accordion-icon-wrapper":"SectionHeader-module__accordion-icon-wrapper___BOHqG","accordion-icon":"SectionHeader-module__accordion-icon___VQmOf","is-open":"SectionHeader-module__is-open___naqpt","arrange-wrapper":"SectionHeader-module__arrange-wrapper___jwEJm"}},16772:function(e,t,n){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=f(n(67294)),a=f(n(45697)),l=f(n(94184)),i=f(n(47166)),c=f(n(47341)),s=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var n=m(t);if(n&&n.has(e))return n.get(e);var o={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var i=a?Object.getOwnPropertyDescriptor(e,l):null;i&&(i.get||i.set)?Object.defineProperty(o,l,i):o[l]=e[l]}o.default=e,n&&n.set(e,o);return o}(n(51051)),u=f(n(78490)),d=f(n(9197)),p=["text","title","onClick","isOpen","isTransparent","level"];function m(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(m=function(e){return e?n:t})(e)}function f(e){return e&&e.__esModule?e:{default:e}}function b(){return b=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},b.apply(this,arguments)}function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _(e,t,n){return(t=v(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function h(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,v(r.key),r)}}function v(e){var t=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===r(t)?t:String(t)}function O(e,t){return O=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},O(e,t)}function g(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=C(e);if(t){var a=C(this).constructor;n=Reflect.construct(o,arguments,a)}else n=o.apply(this,arguments);return function(e,t){if(t&&("object"===r(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return x(e)}(this,n)}}function x(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function C(e){return C=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},C(e)}var E=i.default.bind(d.default),S={text:a.default.string,title:a.default.string,onClick:a.default.func,isOpen:a.default.bool,level:a.default.oneOf([1,2,3,4,5,6]),isTransparent:a.default.bool},j={onClick:void 0,isOpen:!1,isTransparent:!1},P=function(e){return e.nativeEvent.keyCode===s.KEY_RETURN||e.nativeEvent.keyCode===s.KEY_SPACE},T=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&O(e,t)}(i,e);var t,n,r,a=g(i);function i(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(t=a.call(this,e)).state={isActive:!1},t.wrapOnKeyDown=t.wrapOnKeyDown.bind(x(t)),t.wrapOnKeyUp=t.wrapOnKeyUp.bind(x(t)),t}return t=i,n=[{key:"wrapOnKeyDown",value:function(e){var t=this;return function(n){P(n)&&!t.state.isActive&&(t.setState({isActive:!0}),t.props.onClick&&t.props.onClick(n)),e&&e(n)}}},{key:"wrapOnKeyUp",value:function(e){var t=this;return function(n){P(n)&&t.state.isActive&&t.setState({isActive:!1}),e&&e(n)}}},{key:"render",value:function(){var e=this.props,t=e.text,n=e.title,r=e.onClick,a=e.isOpen,i=e.isTransparent,c=e.level,s=h(e,p),d=this.context,m=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){_(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},s);r&&(m.tabIndex="0",m.onKeyDown=this.wrapOnKeyDown(m.onKeyDown),m.onKeyUp=this.wrapOnKeyUp(m.onKeyUp),m.onClick=r);var f=E(["accordion-icon",{"is-open":r&&a}]),w=o.default.createElement("span",{className:E("accordion-icon-wrapper")},o.default.createElement("span",{className:f})),v=(0,l.default)(E("section-header",{"is-interactable":r},{"is-active":this.state.isActive},{"is-transparent":i},d.className),s.className);c||console.warn("Default heading level may not appropriate has it would fail to convey context of heading in a site / application where it is used. Heading level should be set explicitly depending on the position of header in site / application to allow screen readers to identify headers consistently."),n&&console.warn("`title` prop has been renamed to `text`. please update all the refernces of `title` prop to use prop `text`.");var O="h".concat(c||2),g=t||n,x=r&&w?{type:"button",tabIndex:"-1","aria-expanded":a,"aria-label":g}:void 0,C=r&&w?"button":"span";return o.default.createElement(O,b({},m,{className:v,"aria-label":r?void 0:g}),o.default.createElement(C,b({},x,{className:E("arrange-wrapper")}),o.default.createElement(u.default,{fitStart:r&&w,fill:o.default.createElement("span",{"aria-hidden":void 0!==r,className:E("title")},g),className:E("title-arrange")})))}}],n&&w(t.prototype,n),r&&w(t,r),Object.defineProperty(t,"prototype",{writable:!1}),i}(o.default.Component);T.propTypes=S,T.defaultProps=j,T.contextType=c.default;var N=T;t.default=N},87462:function(e,t,n){function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},r.apply(this,arguments)}n.d(t,{Z:function(){return r}})},44925:function(e,t,n){function r(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.d(t,{Z:function(){return r}})}}]);