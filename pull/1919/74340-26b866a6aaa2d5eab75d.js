"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[74340,48883,57721],{12297:function(e,t,n){var r=n(64836),o=n(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(n(861)),a=r(n(27424)),l=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=o(e)&&"function"!=typeof e)return{default:e};var n=u(t);if(n&&n.has(e))return n.get(e);var r={__proto__:null},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var l=i?Object.getOwnPropertyDescriptor(e,a):null;l&&(l.get||l.set)?Object.defineProperty(r,a,l):r[a]=e[a]}return r.default=e,n&&n.set(e,r),r}(n(67294)),c=n(55730);function u(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(u=function(e){return e?n:t})(e)}var s=[{id:"Column-0",displayName:"Patient"},{id:"Column-1",displayName:"Location"},{id:"Column-2",displayName:"Illness Severity"},{id:"Column-3",displayName:"Visit"},{id:"Column-4",displayName:"Allergy"},{id:"Column-5",displayName:"Primary Contact"},{id:"Column-6",displayName:"Generic Order Counts"},{id:"Column-7",displayName:"Patient Age"},{id:"Column-8",displayName:"Medication History"},{id:"Column-9",displayName:"My Relationship"},{id:"Column-10",displayName:"Not Selectable",isSelectable:!1}],f=[{id:"1",cells:[{content:"Fleck, Arthur"},{content:"1007-MTN"},{content:"Unstable"},{content:"Inpatient, 2 months"},{content:""},{content:"Quinzell, Harleen"},{content:""},{isMasked:!0},{isMasked:!0},{content:"Admitting Physician"},{content:"",isSelectable:!1}]},{id:"2",cells:[{content:"Wayne, Bruce"},{content:"1007-MTN-DR"},{content:"Stable"},{content:"Outpatient, 2 days"},{content:"Phytochemicals"},{content:"Grayson, Richard"},{content:""},{content:""},{isMasked:!0},{content:"Admitting Physician"},{content:"",isSelectable:!1}]}];t.default=function(){var e=s,t=(0,l.useState)([]),n=(0,a.default)(t,2),r=n[0],o=n[1];(0,l.useEffect)((function(){o(f)}),[]);var u=(0,l.useCallback)((function(t,n){if(t&&n){for(var a=r.findIndex((function(e){return e.id===t})),l=e.findIndex((function(e){return e.id===n})),c=(0,i.default)(r),u=0;u<r.length;u+=1)for(var s=0;s<r[u].cells.length;s+=1){var f=r[u].cells[s];!f.isSelected||u===a&&s===l||(f.isSelected=!1)}c[a].cells[l].isSelected=!r[a].cells[l].isSelected,o(c)}}),[e,r]),p=(0,l.useCallback)((function(){for(var e=(0,i.default)(r),t=0;t<r.length;t+=1)for(var n=0;n<r[t].cells.length;n+=1)e[t].cells[n].isSelected=!1;o(e)}),[r]);return l.default.createElement(c.WorklistDataGrid,{id:"pinned-columns",pinnedColumns:e.slice(0,3),overflowColumns:e.slice(3),rows:r,rowHeaderIndex:0,onCellSelect:u,onClearSelectedCells:p,ariaLabel:"Worklist Data Grid"})}},9197:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"SectionHeader-module__clinical-lowlight-theme___M-5zo","orion-fusion-theme":"SectionHeader-module__orion-fusion-theme___MGUT7","section-header":"SectionHeader-module__section-header___wbdJQ","is-transparent":"SectionHeader-module__is-transparent___3L6Q5","is-interactable":"SectionHeader-module__is-interactable___4Hj3Z","is-active":"SectionHeader-module__is-active___Qfdbq","title-arrange":"SectionHeader-module__title-arrange___t4JW1",title:"SectionHeader-module__title___EPyaG","accordion-icon-wrapper":"SectionHeader-module__accordion-icon-wrapper___BOHqG","accordion-icon":"SectionHeader-module__accordion-icon___VQmOf","is-open":"SectionHeader-module__is-open___naqpt","arrange-wrapper":"SectionHeader-module__arrange-wrapper___jwEJm","title-fixed":"SectionHeader-module__title-fixed___U8DzW"}},16772:function(e,t,n){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=y(n(67294)),i=y(n(45697)),a=y(n(94184)),l=y(n(47166)),c=y(n(47341)),u=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=r(e)&&"function"!=typeof e)return{default:e};var n=d(t);if(n&&n.has(e))return n.get(e);var o={__proto__:null},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var l=i?Object.getOwnPropertyDescriptor(e,a):null;l&&(l.get||l.set)?Object.defineProperty(o,a,l):o[a]=e[a]}return o.default=e,n&&n.set(e,o),o}(n(51051)),s=y(n(78490)),f=y(n(9197)),p=["text","title","refCallback","onClick","isOpen","isTransparent","level","isTitleFixed"];function d(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(d=function(e){return e?n:t})(e)}function y(e){return e&&e.__esModule?e:{default:e}}function b(){return b=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},b.apply(this,arguments)}function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e,t,n){return(t=w(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function v(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,w(r.key),r)}}function w(e){var t=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===r(t)?t:String(t)}function h(e,t){return h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},h(e,t)}function g(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=P(e);if(t){var i=P(this).constructor;n=Reflect.construct(o,arguments,i)}else n=o.apply(this,arguments);return function(e,t){if(t&&("object"===r(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return j(e)}(this,n)}}function j(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function P(e){return P=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},P(e)}var S=l.default.bind(f.default),k={text:i.default.string,title:i.default.string,refCallback:i.default.func,onClick:i.default.func,isOpen:i.default.bool,level:i.default.oneOf([1,2,3,4,5,6]),isTransparent:i.default.bool,isTitleFixed:i.default.bool},C={onClick:void 0,isOpen:!1,isTransparent:!1,level:2},N=function(e){return e.keyCode===u.KEY_RETURN||e.keyCode===u.KEY_SPACE},E=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&h(e,t)}(l,e);var t,n,r,i=g(l);function l(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),(t=i.call(this,e)).state={isActive:!1},t.wrapOnKeyDown=t.wrapOnKeyDown.bind(j(t)),t.wrapOnKeyUp=t.wrapOnKeyUp.bind(j(t)),t}return t=l,n=[{key:"wrapOnKeyDown",value:function(e){var t=this;return function(n){N(n)&&!t.state.isActive&&(t.setState({isActive:!0}),t.props.onClick&&t.props.onClick(n)),e&&e(n)}}},{key:"wrapOnKeyUp",value:function(e){var t=this;return function(n){N(n)&&t.state.isActive&&t.setState({isActive:!1}),e&&e(n)}}},{key:"render",value:function(){var e=this.props,t=e.text,n=e.title,r=e.refCallback,i=e.onClick,l=e.isOpen,c=e.isTransparent,u=e.level,f=e.isTitleFixed,d=v(e,p),y=this.context,O=o.default.createElement("span",{className:S("accordion-icon-wrapper")},o.default.createElement("span",{className:S(["accordion-icon",{"is-open":l}])})),w=(0,a.default)(S("section-header",{"is-interactable":i},{"is-active":this.state.isActive},{"is-transparent":c},y.className),d.className);n&&console.warn("`title` prop has been renamed to `text`. please update all the refernces of `title` prop to use prop `text`.");var h,g="h".concat(u),j=t||n,P=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(Object(n),!0).forEach((function(t){m(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},d),k={};return i?(k.ref=r,k.type="button",k["aria-expanded"]=l,k["aria-label"]=j,k.onKeyDown=this.wrapOnKeyDown(P.onKeyDown),k.onKeyUp=this.wrapOnKeyUp(P.onKeyUp),k.onClick=i,h="button"):(P.ref=r,h="span"),o.default.createElement(g,b({},P,{className:w,"aria-label":i?void 0:j}),o.default.createElement(h,b({},k,{className:S("arrange-wrapper",{"title-fixed":f})}),o.default.createElement(s.default,{fitStart:i&&O,fill:o.default.createElement("span",{"aria-hidden":void 0!==i,className:S("title")},j),className:S("title-arrange")})))}}],n&&O(t.prototype,n),r&&O(t,r),Object.defineProperty(t,"prototype",{writable:!1}),l}(o.default.Component);E.propTypes=k,E.defaultProps=C,E.contextType=c.default;t.default=E}}]);