"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[41537,47209],{49271:function(e,t,n){var r=n(64836),a=n(18698);t.Z=void 0;var o=r(n(27424)),l=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var n=m(t);if(n&&n.has(e))return n.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var i=o?Object.getOwnPropertyDescriptor(e,l):null;i&&(i.get||i.set)?Object.defineProperty(r,l,i):r[l]=e[l]}r.default=e,n&&n.set(e,r);return r}(n(67294)),i=r(n(45697)),c=r(n(47166)),u=n(21538),s=r(n(33864)),d=r(n(23399)),p=n(51051),f=r(n(53560));function m(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(m=function(e){return e?n:t})(e)}var _=c.default.bind(f.default),y={example:i.default.element,exampleSrc:i.default.element,exampleCssSrc:i.default.element,title:i.default.string,description:i.default.node,isExpanded:i.default.bool},b=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},v=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},h=function(e){var t=e.example,n=e.exampleSrc,r=e.exampleCssSrc,a=e.title,i=e.description,c=e.isExpanded,f=(0,l.useState)(c),m=(0,o.default)(f,2),y=m[0],h=m[1],w=(0,l.useState)(!1),O=(0,o.default)(w,2),g=O[0],E=O[1],x=l.default.useContext(u.ThemeContext),j=void 0!==r,P=function(){E(!g),y&&h(!y)},C=function(){h(!y),g&&E(!g)},S=function(e,t){e.nativeEvent.keyCode!==p.KEY_SPACE&&e.nativeEvent.keyCode!==p.KEY_RETURN||(e.preventDefault(),t())};return l.default.createElement("div",{className:_("template",x.className)},l.default.createElement("div",{className:_("header")},a&&l.default.createElement("h2",{className:_("title")},a)),l.default.createElement("div",{className:_("content")},i&&l.default.createElement("div",{className:_("description")},i),t),l.default.createElement("div",{className:_("footer")},n?l.default.createElement("div",{className:_("button-container")},j&&l.default.createElement("button",{type:"button",className:_("css-toggle","item",{"is-selected":g}),onClick:P,onKeyDown:function(e){return S(e,P)},onBlur:b,onMouseDown:v,tabIndex:0,"data-focus-styles-enabled":!0},l.default.createElement(s.default,{className:_("chevron")}),l.default.createElement("span",null,"CSS"),l.default.createElement(d.default,{className:_("chevron")})),l.default.createElement("button",{type:"button",className:_("code-toggle","item",{"is-selected":y}),onClick:C,onKeyDown:function(e){return S(e,C)},onBlur:b,onMouseDown:v,tabIndex:0,"data-focus-styles-enabled":!0},l.default.createElement(s.default,{className:_("chevron")}),l.default.createElement("span",null,"Code"),l.default.createElement(d.default,{className:_("chevron")}))):null,l.default.createElement("div",null,g&&l.default.createElement("div",{className:_("css")},r),y&&l.default.createElement("div",{className:_("code")},n))))};h.propTypes=y,h.defaultProps={isExpanded:!1};var w=h;t.Z=w},40738:function(e,t,n){n.r(t),n.d(t,{default:function(){return y}});var r=n(87462),a=n(44925),o=n(67294),l=n(81254),i=n(39592),c=["components"],u={};function s(e){var t=e.components,n=(0,a.Z)(e,c);return(0,l.mdx)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { FlowsheetDataGrid } from 'terra-data-grid';\n\nconst gridDataJSON = {\n  cols: [\n    { id: 'Column-0', displayName: 'Vitals' },\n    { id: 'Column-1', displayName: 'March 16' },\n    { id: 'Column-2', displayName: 'March 17' },\n    { id: 'Column-3', displayName: 'March 18' },\n  ],\n  rows: [\n    {\n      id: '1',\n      cells: [\n        { content: 'Heart Rate Monitored (bpm)' },\n        { content: '68' },\n        { content: '66' },\n        { content: '67' },\n      ],\n    },\n    {\n      id: '2',\n      cells: [\n        { content: 'Temperature Oral (degC)' },\n        { content: '36.7' },\n        { content: '36.9' },\n        { content: '37' },\n      ],\n    },\n    {\n      id: '3',\n      cells: [\n        { content: 'Cardiac Index (L/min/m2)' },\n        { content: '2.25' },\n        { content: '2.28' },\n        { content: '2.8' },\n      ],\n    },\n    {\n      id: '4',\n      cells: [\n        { content: 'ICP (mmHg)' },\n        { content: '11' },\n        { content: '11' },\n        { content: '12' },\n      ],\n    },\n    {\n      id: '5',\n      cells: [\n        { content: 'CPP (mmHg)' },\n        { content: '63' },\n        { content: '47' },\n        { content: '48' },\n      ],\n    },\n  ],\n};\n\nconst BasicFlowsheetDataGrid = () => {\n  const { cols, rows } = gridDataJSON;\n\n  return (\n    <FlowsheetDataGrid\n      id=\"default-terra-flowsheet-data-grid\"\n      columns={cols}\n      rows={rows}\n      ariaLabel=\"Flowsheet Data Grid\"\n    />\n  );\n};\n\nexport default BasicFlowsheetDataGrid;\n\n")))}s.isMDXComponent=!0;var d=n(49271),p=function(e){var t=e.title,n=e.description,r=e.isExpanded;return o.createElement(d.Z,{title:t||"Basic Flowsheet Data Grid",description:n,example:o.createElement(i.Z,null),exampleSrc:o.createElement(s,null),isExpanded:r})},f=["components"],m={},_="wrapper";function y(e){var t=e.components,n=(0,a.Z)(e,f);return(0,l.mdx)(_,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("h1",{id:"basic-flowsheet-data-grid"},"Basic Flowsheet Data Grid"),(0,l.mdx)("h3",{id:"description"},"Description"),(0,l.mdx)("p",null,"This example demonstrates a basic ",(0,l.mdx)("a",{parentName:"p",href:"/terra-framework/pull/1900/components/cerner-terra-framework-docs/data-grid/flowsheet-data-grid/about"},"Flowsheet Data Grid")," with basic keyboard interactions."),(0,l.mdx)(p,{title:"Basic Flowsheet Data Grid",mdxType:"BasicFlowsheetDataGrid"}))}y.isMDXComponent=!0},39592:function(e,t,n){var r=n(64836);t.Z=void 0;var a=r(n(67294)),o=n(55730),l=[{id:"Column-0",displayName:"Vitals"},{id:"Column-1",displayName:"March 16"},{id:"Column-2",displayName:"March 17"},{id:"Column-3",displayName:"March 18"}],i=[{id:"1",cells:[{content:"Heart Rate Monitored (bpm)"},{content:"68"},{content:"66"},{content:"67"}]},{id:"2",cells:[{content:"Temperature Oral (degC)"},{content:"36.7"},{content:"36.9"},{content:"37"}]},{id:"3",cells:[{content:"Cardiac Index (L/min/m2)"},{content:"2.25"},{content:"2.28"},{content:"2.8"}]},{id:"4",cells:[{content:"ICP (mmHg)"},{content:"11"},{content:"11"},{content:"12"}]},{id:"5",cells:[{content:"CPP (mmHg)"},{content:"63"},{content:"47"},{content:"48"}]}];t.Z=function(){var e=l,t=i;return a.default.createElement(o.FlowsheetDataGrid,{id:"default-terra-flowsheet-data-grid",columns:e,rows:t,ariaLabel:"Flowsheet Data Grid"})}},53560:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},9197:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"SectionHeader-module__clinical-lowlight-theme___M-5zo","orion-fusion-theme":"SectionHeader-module__orion-fusion-theme___MGUT7","section-header":"SectionHeader-module__section-header___wbdJQ","is-interactable":"SectionHeader-module__is-interactable___4Hj3Z","is-active":"SectionHeader-module__is-active___Qfdbq","is-transparent":"SectionHeader-module__is-transparent___3L6Q5","title-arrange":"SectionHeader-module__title-arrange___t4JW1",title:"SectionHeader-module__title___EPyaG","accordion-icon-wrapper":"SectionHeader-module__accordion-icon-wrapper___BOHqG","accordion-icon":"SectionHeader-module__accordion-icon___VQmOf","is-open":"SectionHeader-module__is-open___naqpt","arrange-wrapper":"SectionHeader-module__arrange-wrapper___jwEJm"}},16772:function(e,t,n){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=m(n(67294)),o=m(n(45697)),l=m(n(94184)),i=m(n(47166)),c=m(n(47341)),u=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var a={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var i=o?Object.getOwnPropertyDescriptor(e,l):null;i&&(i.get||i.set)?Object.defineProperty(a,l,i):a[l]=e[l]}a.default=e,n&&n.set(e,a);return a}(n(51051)),s=m(n(78490)),d=m(n(9197)),p=["text","title","onClick","isOpen","isTransparent","level"];function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}function m(e){return e&&e.__esModule?e:{default:e}}function _(){return _=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},_.apply(this,arguments)}function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e,t,n){return(t=w(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function v(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,w(r.key),r)}}function w(e){var t=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var a=n.call(e,t||"default");if("object"!==r(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===r(t)?t:String(t)}function O(e,t){return O=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},O(e,t)}function g(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=x(e);if(t){var o=x(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return function(e,t){if(t&&("object"===r(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return E(e)}(this,n)}}function E(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function x(e){return x=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},x(e)}var j=i.default.bind(d.default),P={text:o.default.string,title:o.default.string,onClick:o.default.func,isOpen:o.default.bool,level:o.default.oneOf([1,2,3,4,5,6]),isTransparent:o.default.bool},C={onClick:void 0,isOpen:!1,isTransparent:!1},S=function(e){return e.nativeEvent.keyCode===u.KEY_RETURN||e.nativeEvent.keyCode===u.KEY_SPACE},D=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&O(e,t)}(i,e);var t,n,r,o=g(i);function i(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(t=o.call(this,e)).state={isActive:!1},t.wrapOnKeyDown=t.wrapOnKeyDown.bind(E(t)),t.wrapOnKeyUp=t.wrapOnKeyUp.bind(E(t)),t}return t=i,n=[{key:"wrapOnKeyDown",value:function(e){var t=this;return function(n){S(n)&&!t.state.isActive&&(t.setState({isActive:!0}),t.props.onClick&&t.props.onClick(n)),e&&e(n)}}},{key:"wrapOnKeyUp",value:function(e){var t=this;return function(n){S(n)&&t.state.isActive&&t.setState({isActive:!1}),e&&e(n)}}},{key:"render",value:function(){var e=this.props,t=e.text,n=e.title,r=e.onClick,o=e.isOpen,i=e.isTransparent,c=e.level,u=v(e,p),d=this.context,f=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},u);r&&(f.tabIndex="0",f.onKeyDown=this.wrapOnKeyDown(f.onKeyDown),f.onKeyUp=this.wrapOnKeyUp(f.onKeyUp),f.onClick=r);var m=j(["accordion-icon",{"is-open":r&&o}]),h=a.default.createElement("span",{className:j("accordion-icon-wrapper")},a.default.createElement("span",{className:m})),w=(0,l.default)(j("section-header",{"is-interactable":r},{"is-active":this.state.isActive},{"is-transparent":i},d.className),u.className);c||console.warn("Default heading level may not appropriate has it would fail to convey context of heading in a site / application where it is used. Heading level should be set explicitly depending on the position of header in site / application to allow screen readers to identify headers consistently."),n&&console.warn("`title` prop has been renamed to `text`. please update all the refernces of `title` prop to use prop `text`.");var O="h".concat(c||2),g=t||n,E=r&&h?{type:"button",tabIndex:"-1","aria-expanded":o,"aria-label":g}:void 0,x=r&&h?"button":"span";return a.default.createElement(O,_({},f,{className:w,"aria-label":r?void 0:g}),a.default.createElement(x,_({},E,{className:j("arrange-wrapper")}),a.default.createElement(s.default,{fitStart:r&&h,fill:a.default.createElement("span",{"aria-hidden":void 0!==r,className:j("title")},g),className:j("title-arrange")})))}}],n&&h(t.prototype,n),r&&h(t,r),Object.defineProperty(t,"prototype",{writable:!1}),i}(a.default.Component);D.propTypes=P,D.defaultProps=C,D.contextType=c.default;var N=D;t.default=N},87462:function(e,t,n){function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},r.apply(this,arguments)}n.d(t,{Z:function(){return r}})},44925:function(e,t,n){function r(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}n.d(t,{Z:function(){return r}})}}]);