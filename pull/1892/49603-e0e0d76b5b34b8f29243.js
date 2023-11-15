"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[49603,47209],{49271:function(e,t,n){var a=n(64836),r=n(18698);t.Z=void 0;var l=a(n(27424)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var n=m(t);if(n&&n.has(e))return n.get(e);var a={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=l?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(a,o,i):a[o]=e[o]}a.default=e,n&&n.set(e,a);return a}(n(67294)),i=a(n(45697)),c=a(n(47166)),u=n(21538),s=a(n(33864)),d=a(n(23399)),p=n(51051),f=a(n(53560));function m(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(m=function(e){return e?n:t})(e)}var b=c.default.bind(f.default),y={example:i.default.element,exampleSrc:i.default.element,exampleCssSrc:i.default.element,title:i.default.string,description:i.default.node,isExpanded:i.default.bool},_=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},v=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},g=function(e){var t=e.example,n=e.exampleSrc,a=e.exampleCssSrc,r=e.title,i=e.description,c=e.isExpanded,f=(0,o.useState)(c),m=(0,l.default)(f,2),y=m[0],g=m[1],h=(0,o.useState)(!1),w=(0,l.default)(h,2),x=w[0],O=w[1],E=o.default.useContext(u.ThemeContext),C=void 0!==a,N=function(){O(!x),y&&g(!y)},k=function(){g(!y),x&&O(!x)},j=function(e,t){e.nativeEvent.keyCode!==p.KEY_SPACE&&e.nativeEvent.keyCode!==p.KEY_RETURN||(e.preventDefault(),t())};return o.default.createElement("div",{className:b("template",E.className)},o.default.createElement("div",{className:b("header")},r&&o.default.createElement("h2",{className:b("title")},r)),o.default.createElement("div",{className:b("content")},i&&o.default.createElement("div",{className:b("description")},i),t),o.default.createElement("div",{className:b("footer")},n?o.default.createElement("div",{className:b("button-container")},C&&o.default.createElement("button",{type:"button",className:b("css-toggle","item",{"is-selected":x}),onClick:N,onKeyDown:function(e){return j(e,N)},onBlur:_,onMouseDown:v,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(s.default,{className:b("chevron")}),o.default.createElement("span",null,"CSS"),o.default.createElement(d.default,{className:b("chevron")})),o.default.createElement("button",{type:"button",className:b("code-toggle","item",{"is-selected":y}),onClick:k,onKeyDown:function(e){return j(e,k)},onBlur:_,onMouseDown:v,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(s.default,{className:b("chevron")}),o.default.createElement("span",null,"Code"),o.default.createElement(d.default,{className:b("chevron")}))):null,o.default.createElement("div",null,x&&o.default.createElement("div",{className:b("css")},a),y&&o.default.createElement("div",{className:b("code")},n))))};g.propTypes=y,g.defaultProps={isExpanded:!1};var h=g;t.Z=h},25358:function(e,t,n){n.r(t),n.d(t,{default:function(){return y}});var a=n(87462),r=n(44925),l=n(67294),o=n(81254),i=n(29525),c=["components"],u={};function s(e){var t=e.components,n=(0,r.Z)(e,c);return(0,o.mdx)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-jsx"},'import React, { useState } from \'react\';\nimport { WorklistDataGrid } from \'terra-data-grid\';\nimport NotificationDialog from \'terra-notification-dialog\';\n\nconst WorklistDataGridFocusableCell = () => {\n  const rowHeaderIndex = 0;\n\n  const [isOpen, setIsOpen] = useState(false);\n\n  const handleCloseModal = () => {\n    setIsOpen(false);\n  };\n\n  const handleButtonOpenModal = () => {\n    setIsOpen(true);\n  };\n\n  const buttonCell = <button type="button" aria-label="Alert" onClick={handleButtonOpenModal}>Alert</button>;\n  // eslint-disable-next-line react/forbid-dom-props\n  const inputCell = <input type="text" aria-label="Text Input" style={{ width: \'100px\', height: \'25px\', display: \'inline\' }} />;\n  const anchorCell = <a href="https://www.oracle.com/" aria-label="Visit Oracle">Visit Oracle</a>;\n  const textAreaCell = <textarea name="textArea" aria-label="Text Area" rows="1" cols="15" />;\n  const selectCell = (\n    <select name="specialties" id="specialties" aria-label="Select Specialty">\n      <option value="ambulatory">Ambulatory</option>\n      <option value="cardiology">Cardiology</option>\n      <option value="radiology">Radiology</option>\n      <option value="neurology">Neurology</option>\n    </select>\n  );\n\n  const gridDataJSON = {\n    cols: [\n      { id: \'Column-0\', displayName: \'Patient\' },\n      { id: \'Column-1\', displayName: \'Column 1\' },\n      { id: \'Column-2\', displayName: \'Column 2\' },\n      { id: \'Column-3\', displayName: \'Column 3\' },\n    ],\n    rows: [\n      {\n        id: \'1\',\n        cells: [\n          { content: \'Fleck, Arthur\' },\n          {\n            content: <>\n              {buttonCell}\n              <div>Non-Focusable Text</div>\n              {/* eslint-disable-next-line react/jsx-closing-tag-location */}\n            </>,\n          },\n          { content: inputCell },\n          { content: anchorCell },\n        ],\n      },\n      {\n        id: \'2\',\n        cells: [\n          { content: \'Wayne, Bruce\' },\n          {\n            content: (<div>\n              {buttonCell}\n              {inputCell}\n              {/* eslint-disable-next-line react/jsx-closing-tag-location */}\n            </div>),\n          },\n          { content: selectCell },\n          { content: textAreaCell },\n        ],\n      },\n    ],\n  };\n\n  const { cols, rows } = gridDataJSON;\n\n  return (\n    <>\n      {isOpen && (\n      <NotificationDialog\n        variant="hazard-low"\n        dialogTitle="Button from Focusable Cell"\n        startMessage="Button Selected"\n        acceptAction={{\n          text: \'OK\',\n          onClick: handleCloseModal,\n        }}\n      />\n      )}\n      <WorklistDataGrid\n        id="default-terra-worklist-data-grid-focusable-cell"\n        overflowColumns={cols}\n        defaultColumnWidth={170}\n        rows={rows}\n        rowHeaderIndex={rowHeaderIndex}\n        rowHeight="50px"\n        ariaLabel="Worklist Data Grid"\n      />\n    </>\n  );\n};\n\nexport default WorklistDataGridFocusableCell;\n\n')))}s.isMDXComponent=!0;var d=n(49271),p=function(e){var t=e.title,n=e.description,a=e.isExpanded;return l.createElement(d.Z,{title:t||"Worklist Data Grid Focusable Cell",description:n,example:l.createElement(i.Z,null),exampleSrc:l.createElement(s,null),isExpanded:a})},f=["components"],m={},b="wrapper";function y(e){var t=e.components,n=(0,r.Z)(e,f);return(0,o.mdx)(b,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"single-cell-navigation-dive-in"},"Single Cell Navigation (Dive-In)"),(0,o.mdx)("h3",{id:"description"},"Description"),(0,o.mdx)("p",null,"The content of a cell in the ",(0,o.mdx)("a",{parentName:"p",href:"/terra-framework/pull/1892/components/cerner-terra-framework-docs/data-grid/worklist-data-grid/about"},"Worklist Data Grid")," may be empty, text, numerical, or any combination of widgets.\nSince the ",(0,o.mdx)("a",{parentName:"p",href:"https://www.w3.org/WAI/ARIA/apg/patterns/grid/"},"grid pattern")," mandates only one tab stop and arrow keys for navigation, these keys are not available by default to navigate focusable elements inside a cell.\nTo make these keys available for cell navigation as part of its basic functionality, the Worklist Data Grid supports single cell navigation (dive-in mode).\nEnabling single cell navigation will disable grid navigation and disabling single cell navigation will restore grid navigation."),(0,o.mdx)("span",{style:{color:"blue"}},(0,o.mdx)("em",null,"Single Cell navigation is built-in and does not require any additional setup or implementation.")),(0,o.mdx)("h4",{id:"keyboard-interactions"},"Keyboard Interactions"),(0,o.mdx)("table",null,(0,o.mdx)("thead",{parentName:"table"},(0,o.mdx)("tr",{parentName:"thead"},(0,o.mdx)("th",{parentName:"tr",align:null},"Key Interaction"),(0,o.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,o.mdx)("tbody",{parentName:"table"},(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("em",{parentName:"td"},"Enter")),(0,o.mdx)("td",{parentName:"tr",align:null},"Enable Single Cell Navigation and disable grid navigation.")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("em",{parentName:"td"},"Escape")),(0,o.mdx)("td",{parentName:"tr",align:null},"Disable Single Cell Navigation and restore grid navigation.")))),(0,o.mdx)(p,{title:"Single Cell Navigation",mdxType:"WorklistDataGridFocusableCell"}))}y.isMDXComponent=!0},29525:function(e,t,n){var a=n(64836),r=n(18698);t.Z=void 0;var l=a(n(27424)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=r(e)&&"function"!=typeof e)return{default:e};var n=u(t);if(n&&n.has(e))return n.get(e);var a={__proto__:null},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=l?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(a,o,i):a[o]=e[o]}return a.default=e,n&&n.set(e,a),a}(n(67294)),i=n(55730),c=a(n(850));function u(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(u=function(e){return e?n:t})(e)}t.Z=function(){var e=(0,o.useState)(!1),t=(0,l.default)(e,2),n=t[0],a=t[1],r=o.default.createElement("button",{type:"button","aria-label":"Alert",onClick:function(){a(!0)}},"Alert"),u=o.default.createElement("input",{type:"text","aria-label":"Text Input",style:{width:"100px",height:"25px",display:"inline"}}),s=o.default.createElement("a",{href:"https://www.oracle.com/","aria-label":"Visit Oracle"},"Visit Oracle"),d=o.default.createElement("textarea",{name:"textArea","aria-label":"Text Area",rows:"1",cols:"15"}),p=o.default.createElement("select",{name:"specialties",id:"specialties","aria-label":"Select Specialty"},o.default.createElement("option",{value:"ambulatory"},"Ambulatory"),o.default.createElement("option",{value:"cardiology"},"Cardiology"),o.default.createElement("option",{value:"radiology"},"Radiology"),o.default.createElement("option",{value:"neurology"},"Neurology")),f={cols:[{id:"Column-0",displayName:"Patient"},{id:"Column-1",displayName:"Column 1"},{id:"Column-2",displayName:"Column 2"},{id:"Column-3",displayName:"Column 3"}],rows:[{id:"1",cells:[{content:"Fleck, Arthur"},{content:o.default.createElement(o.default.Fragment,null,r,o.default.createElement("div",null,"Non-Focusable Text"))},{content:u},{content:s}]},{id:"2",cells:[{content:"Wayne, Bruce"},{content:o.default.createElement("div",null,r,u)},{content:p},{content:d}]}]},m=f.cols,b=f.rows;return o.default.createElement(o.default.Fragment,null,n&&o.default.createElement(c.default,{variant:"hazard-low",dialogTitle:"Button from Focusable Cell",startMessage:"Button Selected",acceptAction:{text:"OK",onClick:function(){a(!1)}}}),o.default.createElement(i.WorklistDataGrid,{id:"default-terra-worklist-data-grid-focusable-cell",overflowColumns:m,defaultColumnWidth:170,rows:b,rowHeaderIndex:0,rowHeight:"50px",ariaLabel:"Worklist Data Grid"}))}},53560:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},9197:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"SectionHeader-module__clinical-lowlight-theme___M-5zo","orion-fusion-theme":"SectionHeader-module__orion-fusion-theme___MGUT7","section-header":"SectionHeader-module__section-header___wbdJQ","is-interactable":"SectionHeader-module__is-interactable___4Hj3Z","is-active":"SectionHeader-module__is-active___Qfdbq","is-transparent":"SectionHeader-module__is-transparent___3L6Q5","title-arrange":"SectionHeader-module__title-arrange___t4JW1",title:"SectionHeader-module__title___EPyaG","accordion-icon-wrapper":"SectionHeader-module__accordion-icon-wrapper___BOHqG","accordion-icon":"SectionHeader-module__accordion-icon___VQmOf","is-open":"SectionHeader-module__is-open___naqpt","arrange-wrapper":"SectionHeader-module__arrange-wrapper___jwEJm"}},16772:function(e,t,n){function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=m(n(67294)),l=m(n(45697)),o=m(n(94184)),i=m(n(47166)),c=m(n(47341)),u=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var r={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=l?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(r,o,i):r[o]=e[o]}r.default=e,n&&n.set(e,r);return r}(n(51051)),s=m(n(78490)),d=m(n(9197)),p=["text","title","onClick","isOpen","isTransparent","level"];function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}function m(e){return e&&e.__esModule?e:{default:e}}function b(){return b=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},b.apply(this,arguments)}function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function _(e,t,n){return(t=h(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function v(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function g(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,h(a.key),a)}}function h(e){var t=function(e,t){if("object"!==a(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==a(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===a(t)?t:String(t)}function w(e,t){return w=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},w(e,t)}function x(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=E(e);if(t){var l=E(this).constructor;n=Reflect.construct(r,arguments,l)}else n=r.apply(this,arguments);return function(e,t){if(t&&("object"===a(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return O(e)}(this,n)}}function O(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function E(e){return E=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},E(e)}var C=i.default.bind(d.default),N={text:l.default.string,title:l.default.string,onClick:l.default.func,isOpen:l.default.bool,level:l.default.oneOf([1,2,3,4,5,6]),isTransparent:l.default.bool},k={onClick:void 0,isOpen:!1,isTransparent:!1},j=function(e){return e.nativeEvent.keyCode===u.KEY_RETURN||e.nativeEvent.keyCode===u.KEY_SPACE},S=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&w(e,t)}(i,e);var t,n,a,l=x(i);function i(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(t=l.call(this,e)).state={isActive:!1},t.wrapOnKeyDown=t.wrapOnKeyDown.bind(O(t)),t.wrapOnKeyUp=t.wrapOnKeyUp.bind(O(t)),t}return t=i,n=[{key:"wrapOnKeyDown",value:function(e){var t=this;return function(n){j(n)&&!t.state.isActive&&(t.setState({isActive:!0}),t.props.onClick&&t.props.onClick(n)),e&&e(n)}}},{key:"wrapOnKeyUp",value:function(e){var t=this;return function(n){j(n)&&t.state.isActive&&t.setState({isActive:!1}),e&&e(n)}}},{key:"render",value:function(){var e=this.props,t=e.text,n=e.title,a=e.onClick,l=e.isOpen,i=e.isTransparent,c=e.level,u=v(e,p),d=this.context,f=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){_(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},u);a&&(f.tabIndex="0",f.onKeyDown=this.wrapOnKeyDown(f.onKeyDown),f.onKeyUp=this.wrapOnKeyUp(f.onKeyUp),f.onClick=a);var m=C(["accordion-icon",{"is-open":a&&l}]),g=r.default.createElement("span",{className:C("accordion-icon-wrapper")},r.default.createElement("span",{className:m})),h=(0,o.default)(C("section-header",{"is-interactable":a},{"is-active":this.state.isActive},{"is-transparent":i},d.className),u.className);c||console.warn("Default heading level may not appropriate has it would fail to convey context of heading in a site / application where it is used. Heading level should be set explicitly depending on the position of header in site / application to allow screen readers to identify headers consistently."),n&&console.warn("`title` prop has been renamed to `text`. please update all the refernces of `title` prop to use prop `text`.");var w="h".concat(c||2),x=t||n,O=a&&g?{type:"button",tabIndex:"-1","aria-expanded":l,"aria-label":x}:void 0,E=a&&g?"button":"span";return r.default.createElement(w,b({},f,{className:h,"aria-label":a?void 0:x}),r.default.createElement(E,b({},O,{className:C("arrange-wrapper")}),r.default.createElement(s.default,{fitStart:a&&g,fill:r.default.createElement("span",{"aria-hidden":void 0!==a,className:C("title")},x),className:C("title-arrange")})))}}],n&&g(t.prototype,n),a&&g(t,a),Object.defineProperty(t,"prototype",{writable:!1}),i}(r.default.Component);S.propTypes=N,S.defaultProps=k,S.contextType=c.default;var P=S;t.default=P},87462:function(e,t,n){function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},a.apply(this,arguments)}n.d(t,{Z:function(){return a}})},44925:function(e,t,n){function a(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}n.d(t,{Z:function(){return a}})}}]);