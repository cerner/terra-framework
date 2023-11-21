"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[31608],{93065:function(e,t,n){var r=n(64836),o=n(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(n(38416)),a=r(n(861)),c=r(n(27424)),l=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=o(e)&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var r={__proto__:null},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var c=i?Object.getOwnPropertyDescriptor(e,a):null;c&&(c.get||c.set)?Object.defineProperty(r,a,c):r[a]=e[a]}return r.default=e,n&&n.set(e,r),r}(n(67294)),u=n(55730),s=r(n(19782));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){(0,i.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.default=function(){var e=s.default.cols,t=s.default.rows,n=(0,l.useState)(t),r=(0,c.default)(n,2),o=r[0],i=r[1],f=(0,l.useState)(e),p=(0,c.default)(f,2),y=p[0],b=p[1],O=(0,l.useCallback)((function(e){var t=(0,a.default)(o);e.forEach((function(e){var n=t.find((function(t){return t.id===e.id}));n&&(n.isSelected=e.selected)})),i(t)}),[o]),v=(0,l.useCallback)((function(){var e=o.map((function(e){return d(d({},e),{},{isSelected:!0})}));i(e)}),[o]);return l.default.createElement("div",null,l.default.createElement("div",null,l.default.createElement("button",{type:"button",id:"delete-rows-button",onClick:function(){return i(o.filter((function(e){return!e.isSelected})))}},"Delete Rows"),l.default.createElement("button",{type:"button",id:"filter-rows-button",onClick:function(){return i(o.filter((function(e){return e.isSelected})))}},"Filter Rows")),l.default.createElement(u.WorklistDataGrid,{id:"worklist-data-grid-delete-rows",overflowColumns:y,rows:o,rowHeaderIndex:0,ariaLabel:"Worklist Data Grid Delete Rows",hasSelectableRows:!0,onRowSelect:O,onRowSelectAll:v,onColumnSelect:function(e){var t=y.findIndex((function(t){return t.id===e}));if(-1!==t){var n=(0,a.default)(y);n.splice(t,1);var r=(0,a.default)(o);r.forEach((function(e){var n=(0,a.default)(e.cells);n.splice(t,1),e.cells=n})),b(n),i(r)}}}))}},9197:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"SectionHeader-module__clinical-lowlight-theme___M-5zo","orion-fusion-theme":"SectionHeader-module__orion-fusion-theme___MGUT7","section-header":"SectionHeader-module__section-header___wbdJQ","is-interactable":"SectionHeader-module__is-interactable___4Hj3Z","is-active":"SectionHeader-module__is-active___Qfdbq","is-transparent":"SectionHeader-module__is-transparent___3L6Q5","title-arrange":"SectionHeader-module__title-arrange___t4JW1",title:"SectionHeader-module__title___EPyaG","accordion-icon-wrapper":"SectionHeader-module__accordion-icon-wrapper___BOHqG","accordion-icon":"SectionHeader-module__accordion-icon___VQmOf","is-open":"SectionHeader-module__is-open___naqpt","arrange-wrapper":"SectionHeader-module__arrange-wrapper___jwEJm"}},16772:function(e,t,n){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=y(n(67294)),i=y(n(45697)),a=y(n(94184)),c=y(n(47166)),l=y(n(47341)),u=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var n=d(t);if(n&&n.has(e))return n.get(e);var o={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var c=i?Object.getOwnPropertyDescriptor(e,a):null;c&&(c.get||c.set)?Object.defineProperty(o,a,c):o[a]=e[a]}o.default=e,n&&n.set(e,o);return o}(n(51051)),s=y(n(78490)),f=y(n(9197)),p=["text","title","onClick","isOpen","isTransparent","level"];function d(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(d=function(e){return e?n:t})(e)}function y(e){return e&&e.__esModule?e:{default:e}}function b(){return b=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},b.apply(this,arguments)}function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e,t,n){return(t=_(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,_(r.key),r)}}function _(e){var t=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===r(t)?t:String(t)}function h(e,t){return h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},h(e,t)}function g(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=P(e);if(t){var i=P(this).constructor;n=Reflect.construct(o,arguments,i)}else n=o.apply(this,arguments);return function(e,t){if(t&&("object"===r(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return j(e)}(this,n)}}function j(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function P(e){return P=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},P(e)}var S=c.default.bind(f.default),k={text:i.default.string,title:i.default.string,onClick:i.default.func,isOpen:i.default.bool,level:i.default.oneOf([1,2,3,4,5,6]),isTransparent:i.default.bool},E={onClick:void 0,isOpen:!1,isTransparent:!1},C=function(e){return e.nativeEvent.keyCode===u.KEY_RETURN||e.nativeEvent.keyCode===u.KEY_SPACE},D=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&h(e,t)}(c,e);var t,n,r,i=g(c);function c(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(t=i.call(this,e)).state={isActive:!1},t.wrapOnKeyDown=t.wrapOnKeyDown.bind(j(t)),t.wrapOnKeyUp=t.wrapOnKeyUp.bind(j(t)),t}return t=c,n=[{key:"wrapOnKeyDown",value:function(e){var t=this;return function(n){C(n)&&!t.state.isActive&&(t.setState({isActive:!0}),t.props.onClick&&t.props.onClick(n)),e&&e(n)}}},{key:"wrapOnKeyUp",value:function(e){var t=this;return function(n){C(n)&&t.state.isActive&&t.setState({isActive:!1}),e&&e(n)}}},{key:"render",value:function(){var e=this.props,t=e.text,n=e.title,r=e.onClick,i=e.isOpen,c=e.isTransparent,l=e.level,u=m(e,p),f=this.context,d=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){v(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},u);r&&(d.tabIndex="0",d.onKeyDown=this.wrapOnKeyDown(d.onKeyDown),d.onKeyUp=this.wrapOnKeyUp(d.onKeyUp),d.onClick=r);var y=S(["accordion-icon",{"is-open":r&&i}]),w=o.default.createElement("span",{className:S("accordion-icon-wrapper")},o.default.createElement("span",{className:y})),_=(0,a.default)(S("section-header",{"is-interactable":r},{"is-active":this.state.isActive},{"is-transparent":c},f.className),u.className);l||console.warn("Default heading level may not appropriate has it would fail to convey context of heading in a site / application where it is used. Heading level should be set explicitly depending on the position of header in site / application to allow screen readers to identify headers consistently."),n&&console.warn("`title` prop has been renamed to `text`. please update all the refernces of `title` prop to use prop `text`.");var h="h".concat(l||2),g=t||n,j=r&&w?{type:"button",tabIndex:"-1","aria-expanded":i,"aria-label":g}:void 0,P=r&&w?"button":"span";return o.default.createElement(h,b({},d,{className:_,"aria-label":r?void 0:g}),o.default.createElement(P,b({},j,{className:S("arrange-wrapper")}),o.default.createElement(s.default,{fitStart:r&&w,fill:o.default.createElement("span",{"aria-hidden":void 0!==r,className:S("title")},g),className:S("title-arrange")})))}}],n&&w(t.prototype,n),r&&w(t,r),Object.defineProperty(t,"prototype",{writable:!1}),c}(o.default.Component);D.propTypes=k,D.defaultProps=E,D.contextType=l.default;var x=D;t.default=x},19782:function(e){e.exports=JSON.parse('{"cols":[{"id":"Column-0","displayName":"Vitals","isSelectable":false},{"id":"Column-1","displayName":"March 16"},{"id":"Column-2","displayName":"March 17"},{"id":"Column-3","displayName":"March 18"}],"rows":[{"id":"1","cells":[{"content":"Heart Rate Monitored (bpm)"},{"content":"68"},{"content":"66"},{"content":"67"}]},{"height":"150px","id":"2","cells":[{"content":"Temperature Oral (degC)"},{"content":"36.7","isMasked":true},{"content":"36.9","isMasked":true},{"content":"37","isMasked":true}]},{"id":"3","cells":[{"content":"Cardiac Index (L/min/m2)"},{"content":"2.25"},{"content":"2.28"},{"content":"2.8"}]},{"id":"4","cells":[{"content":"ICP (mmHg)","isMasked":true},{"content":"11"},{"content":"11"},{"content":"12"}]},{"id":"5","cells":[{"content":"CPP (mmHg)"},{"content":"63"},{"content":"47"},{"content":"48"}]},{"id":"6","cells":[{"content":"Oxygen Flow Rate (L/min)"},{"content":"2.0"},{"content":"6.5"},{"content":"7.2"}]},{"id":"7","cells":[{"content":"pCO2 Arterial (mmHg)"},{"content":"48.3"},{"content":"44.7","isMasked":true},{"content":"43.1"}]},{"id":"8","cells":[{"content":"Bicarbonate (mEq/L)"},{"content":"34.8"},{"content":"-27.6"},{"content":"32.3"}]},{"id":"9","cells":[{"content":"FIO2"},{"content":"45"},{"content":"43"},{"content":"44"}]},{"id":"10","cells":[{"content":"Weight (kg)"},{"content":"58.8"},{"content":"59"},{"content":"55.1"}]}]}')}}]);