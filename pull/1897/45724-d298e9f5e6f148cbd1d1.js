"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[45724],{92648:function(e,t,n){n.r(t),n.d(t,{default:function(){return s}});var r=n(87462),o=n(44925),a=(n(67294),n(81254)),i=n(21165),l=["components"],c={},u="wrapper";function s(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.mdx)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("h1",{id:"pinned-columns-with-row-selection"},"Pinned Columns with Row Selection"),(0,a.mdx)("h3",{id:"description"},"Description"),(0,a.mdx)("p",null,"This example demonstrates a ",(0,a.mdx)("a",{parentName:"p",href:"/terra-framework/pull/1897/components/cerner-terra-framework-docs/data-grid/worklist-data-grid/about"},"Worklist Data Grid")," that supports both ",(0,a.mdx)("a",{parentName:"p",href:"/terra-framework/pull/1897/components/cerner-terra-framework-docs/data-grid/worklist-data-grid/examples/cell-selection"},"Pinned Columns")," and ",(0,a.mdx)("a",{parentName:"p",href:"/terra-framework/pull/1897/components/cerner-terra-framework-docs/data-grid/worklist-data-grid/examples/row-selection"},"Row Selection")," features.\nIt is important to note that when Row Selection mode is turned on, the Worklist Data Grid treats row selection cell column as a pinned column."),(0,a.mdx)("h3",{id:"properties-required"},"Properties required"),(0,a.mdx)("p",null,"Refer to the properties specified in ",(0,a.mdx)("a",{parentName:"p",href:"/terra-framework/pull/1897/components/cerner-terra-framework-docs/data-grid/worklist-data-grid/examples/cell-selection"},"Pinned Columns")," and ",(0,a.mdx)("a",{parentName:"p",href:"/terra-framework/pull/1897/components/cerner-terra-framework-docs/data-grid/worklist-data-grid/examples/row-selection"},"Row Selection")," examples for details."),(0,a.mdx)(i.Z,{title:"Worklist Data Grid with Pinned Columns and Row Selection",mdxType:"PinnedColumnsWithRowSelection"}))}s.isMDXComponent=!0},21165:function(e,t,n){var r=n(64836),o=n(18698);t.Z=void 0;var a=r(n(861)),i=r(n(27424)),l=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=o(e)&&"function"!=typeof e)return{default:e};var n=u(t);if(n&&n.has(e))return n.get(e);var r={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var l=a?Object.getOwnPropertyDescriptor(e,i):null;l&&(l.get||l.set)?Object.defineProperty(r,i,l):r[i]=e[i]}return r.default=e,n&&n.set(e,r),r}(n(67294)),c=n(55730);function u(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(u=function(e){return e?n:t})(e)}var s=[{id:"Column-0",displayName:"Patient"},{id:"Column-1",displayName:"Location"},{id:"Column-2",displayName:"Illness Severity"},{id:"Column-3",displayName:"Visit"},{id:"Column-4",displayName:"Allergy"},{id:"Column-5",displayName:"Primary Contact"},{id:"Column-6",displayName:"Generic Order Counts"},{id:"Column-7",displayName:"Patient Age"},{id:"Column-8",displayName:"Medication History"},{id:"Column-9",displayName:"My Relationship"},{id:"Column-10",displayName:"Not Selectable",isSelectable:!1}],d=[{id:"1",cells:[{content:"Fleck, Arthur"},{content:"1007-MTN"},{content:"Unstable"},{content:"Inpatient, 2 months"},{content:""},{content:"Quinzell, Harleen"},{content:""},{isMasked:!0},{isMasked:!0},{content:"Admitting Physician"},{content:"",isSelectable:!1}]},{id:"2",cells:[{content:"Wayne, Bruce"},{content:"1007-MTN-DR"},{content:"Stable"},{content:"Outpatient, 2 days"},{content:"Phytochemicals"},{content:"Grayson, Richard"},{content:""},{content:""},{isMasked:!0},{content:"Admitting Physician"},{content:"",isSelectable:!1}]}];t.Z=function(){var e=(0,l.useRef)(),t=s,n=d,r=(0,l.useState)(n),o=(0,i.default)(r,2),u=o[0],f=o[1],p=(0,l.useState)(!1),m=(0,i.default)(p,2),y=m[0],b=m[1],w=(0,l.useCallback)((function(){var e=(0,a.default)(u);e.forEach((function(e){return e.isSelected=!1})),f(e)}),[u]),h=(0,l.useCallback)((function(){e.current.checked=!1,b(!1),w()}),[w]),v=(0,l.useCallback)((function(e){var t=(0,a.default)(u);e.forEach((function(e){var n=t.find((function(t){return t.id===e.id}));n&&(n.isSelected=e.selected)})),f(t)}),[u]),O=(0,l.useCallback)((function(){var e=(0,a.default)(u);e.forEach((function(e){return e.isSelected=!0})),f(e)}),[u]),_=(0,l.useCallback)((function(){e.current.checked||(e.current.checked=!0),b(!0)}),[]);return l.default.createElement(l.default.Fragment,null,l.default.createElement("div",null,l.default.createElement("label",{htmlFor:"rowSelectionMode"},l.default.createElement("b",null,"Row Selection Mode")),l.default.createElement("input",{id:"rowSelectionMode",type:"checkbox",ref:e,onChange:function(e){e.target.checked||w(),b(e.target.checked)}})),l.default.createElement(c.WorklistDataGrid,{id:"pinned-columns-with-row-selection",pinnedColumns:t.slice(0,3),overflowColumns:t.slice(3),rows:u,rowHeaderIndex:0,defaultColumnWidth:180,ariaLabel:"Worklist Data Grid with Pinned Columns and Row Selection",hasSelectableRows:y,onRowSelect:v,onRowSelectAll:O,onClearSelectedRows:w,onDisableSelectableRows:h,onEnableRowSelection:_}))}},9197:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"SectionHeader-module__clinical-lowlight-theme___M-5zo","orion-fusion-theme":"SectionHeader-module__orion-fusion-theme___MGUT7","section-header":"SectionHeader-module__section-header___wbdJQ","is-interactable":"SectionHeader-module__is-interactable___4Hj3Z","is-active":"SectionHeader-module__is-active___Qfdbq","is-transparent":"SectionHeader-module__is-transparent___3L6Q5","title-arrange":"SectionHeader-module__title-arrange___t4JW1",title:"SectionHeader-module__title___EPyaG","accordion-icon-wrapper":"SectionHeader-module__accordion-icon-wrapper___BOHqG","accordion-icon":"SectionHeader-module__accordion-icon___VQmOf","is-open":"SectionHeader-module__is-open___naqpt","arrange-wrapper":"SectionHeader-module__arrange-wrapper___jwEJm"}},16772:function(e,t,n){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=m(n(67294)),a=m(n(45697)),i=m(n(94184)),l=m(n(47166)),c=m(n(47341)),u=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var n=p(t);if(n&&n.has(e))return n.get(e);var o={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var l=a?Object.getOwnPropertyDescriptor(e,i):null;l&&(l.get||l.set)?Object.defineProperty(o,i,l):o[i]=e[i]}o.default=e,n&&n.set(e,o);return o}(n(51051)),s=m(n(78490)),d=m(n(9197)),f=["text","title","onClick","isOpen","isTransparent","level"];function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(p=function(e){return e?n:t})(e)}function m(e){return e&&e.__esModule?e:{default:e}}function y(){return y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},y.apply(this,arguments)}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function w(e,t,n){return(t=O(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function h(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,O(r.key),r)}}function O(e){var t=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===r(t)?t:String(t)}function _(e,t){return _=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},_(e,t)}function g(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=S(e);if(t){var a=S(this).constructor;n=Reflect.construct(o,arguments,a)}else n=o.apply(this,arguments);return function(e,t){if(t&&("object"===r(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return k(e)}(this,n)}}function k(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function S(e){return S=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},S(e)}var j=l.default.bind(d.default),P={text:a.default.string,title:a.default.string,onClick:a.default.func,isOpen:a.default.bool,level:a.default.oneOf([1,2,3,4,5,6]),isTransparent:a.default.bool},C={onClick:void 0,isOpen:!1,isTransparent:!1},x=function(e){return e.nativeEvent.keyCode===u.KEY_RETURN||e.nativeEvent.keyCode===u.KEY_SPACE},E=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&_(e,t)}(l,e);var t,n,r,a=g(l);function l(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),(t=a.call(this,e)).state={isActive:!1},t.wrapOnKeyDown=t.wrapOnKeyDown.bind(k(t)),t.wrapOnKeyUp=t.wrapOnKeyUp.bind(k(t)),t}return t=l,n=[{key:"wrapOnKeyDown",value:function(e){var t=this;return function(n){x(n)&&!t.state.isActive&&(t.setState({isActive:!0}),t.props.onClick&&t.props.onClick(n)),e&&e(n)}}},{key:"wrapOnKeyUp",value:function(e){var t=this;return function(n){x(n)&&t.state.isActive&&t.setState({isActive:!1}),e&&e(n)}}},{key:"render",value:function(){var e=this.props,t=e.text,n=e.title,r=e.onClick,a=e.isOpen,l=e.isTransparent,c=e.level,u=h(e,f),d=this.context,p=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){w(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},u);r&&(p.tabIndex="0",p.onKeyDown=this.wrapOnKeyDown(p.onKeyDown),p.onKeyUp=this.wrapOnKeyUp(p.onKeyUp),p.onClick=r);var m=j(["accordion-icon",{"is-open":r&&a}]),v=o.default.createElement("span",{className:j("accordion-icon-wrapper")},o.default.createElement("span",{className:m})),O=(0,i.default)(j("section-header",{"is-interactable":r},{"is-active":this.state.isActive},{"is-transparent":l},d.className),u.className);c||console.warn("Default heading level may not appropriate has it would fail to convey context of heading in a site / application where it is used. Heading level should be set explicitly depending on the position of header in site / application to allow screen readers to identify headers consistently."),n&&console.warn("`title` prop has been renamed to `text`. please update all the refernces of `title` prop to use prop `text`.");var _="h".concat(c||2),g=t||n,k=r&&v?{type:"button",tabIndex:"-1","aria-expanded":a,"aria-label":g}:void 0,S=r&&v?"button":"span";return o.default.createElement(_,y({},p,{className:O,"aria-label":r?void 0:g}),o.default.createElement(S,y({},k,{className:j("arrange-wrapper")}),o.default.createElement(s.default,{fitStart:r&&v,fill:o.default.createElement("span",{"aria-hidden":void 0!==r,className:j("title")},g),className:j("title-arrange")})))}}],n&&v(t.prototype,n),r&&v(t,r),Object.defineProperty(t,"prototype",{writable:!1}),l}(o.default.Component);E.propTypes=P,E.defaultProps=C,E.contextType=c.default;var N=E;t.default=N},87462:function(e,t,n){function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},r.apply(this,arguments)}n.d(t,{Z:function(){return r}})},44925:function(e,t,n){function r(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.d(t,{Z:function(){return r}})}}]);