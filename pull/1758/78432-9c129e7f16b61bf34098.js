/*! For license information please see 78432-9c129e7f16b61bf34098.js.LICENSE.txt */
(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[78432,71062],{49271:function(e,t,n){"use strict";var r=n(64836),o=n(18698);t.Z=void 0;var l=r(n(27424)),u=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==o(e)&&"function"!=typeof e)return{default:e};var n=_(t);if(n&&n.has(e))return n.get(e);var r={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var i=l?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(r,u,i):r[u]=e[u]}r.default=e,n&&n.set(e,r);return r}(n(67294)),i=r(n(45697)),a=r(n(47166)),c=n(21538),f=r(n(33864)),d=r(n(23399)),s=n(51051),m=r(n(53560));function _(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(_=function(e){return e?n:t})(e)}var p=a.default.bind(m.default),b={example:i.default.element,exampleSrc:i.default.element,exampleCssSrc:i.default.element,title:i.default.string,description:i.default.node,isExpanded:i.default.bool},y=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},v=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},g=function(e){var t=e.example,n=e.exampleSrc,r=e.exampleCssSrc,o=e.title,i=e.description,a=e.isExpanded,m=(0,u.useState)(a),_=(0,l.default)(m,2),b=_[0],g=_[1],O=(0,u.useState)(!1),h=(0,l.default)(O,2),j=h[0],w=h[1],E=u.default.useContext(c.ThemeContext),P=void 0!==r,S=function(){w(!j),b&&g(!b)},G=function(){g(!b),j&&w(!j)},x=function(e,t){e.nativeEvent.keyCode!==s.KEY_SPACE&&e.nativeEvent.keyCode!==s.KEY_RETURN||(e.preventDefault(),t())};return u.default.createElement("div",{className:p("template",E.className)},u.default.createElement("div",{className:p("header")},o&&u.default.createElement("h2",{className:p("title")},o)),u.default.createElement("div",{className:p("content")},i&&u.default.createElement("div",{className:p("description")},i),t),u.default.createElement("div",{className:p("footer")},n?u.default.createElement("div",{className:p("button-container")},P&&u.default.createElement("button",{type:"button",className:p("css-toggle","item",{"is-selected":j}),onClick:S,onKeyDown:function(e){return x(e,S)},onBlur:y,onMouseDown:v,tabIndex:0,"data-focus-styles-enabled":!0},u.default.createElement(f.default,{className:p("chevron")}),u.default.createElement("span",null,"CSS"),u.default.createElement(d.default,{className:p("chevron")})),u.default.createElement("button",{type:"button",className:p("code-toggle","item",{"is-selected":b}),onClick:G,onKeyDown:function(e){return x(e,G)},onBlur:y,onMouseDown:v,tabIndex:0,"data-focus-styles-enabled":!0},u.default.createElement(f.default,{className:p("chevron")}),u.default.createElement("span",null,"Code"),u.default.createElement(d.default,{className:p("chevron")}))):null,u.default.createElement("div",null,j&&u.default.createElement("div",{className:p("css")},r),b&&u.default.createElement("div",{className:p("code")},n))))};g.propTypes=b,g.defaultProps={isExpanded:!1};var O=g;t.Z=O},53560:function(e,t,n){"use strict";n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},66633:function(e,t,n){"use strict";n.r(t),t.default={arrange:"Arrange-module__arrange___hY0Ml",fill:"Arrange-module__fill___m88eq",fit:"Arrange-module__fit___tv8j-",center:"Arrange-module__center___9qfhG",bottom:"Arrange-module__bottom___8beod",stretch:"Arrange-module__stretch___eQF-k",default:"Arrange-module__default___z+O29"}},68586:function(e,t,n){"use strict";n.r(t),t.default={"clinical-lowlight-theme":"Input-module__clinical-lowlight-theme___clY96","orion-fusion-theme":"Input-module__orion-fusion-theme___phvH5","form-input":"Input-module__form-input___Fk8kb","form-error":"Input-module__form-error___aU4hq","form-incomplete":"Input-module__form-incomplete___h4I7H"}},49959:function(e,t,n){"use strict";n.r(t),t.default={"clinical-lowlight-theme":"Grid-module__clinical-lowlight-theme___iBVVg","orion-fusion-theme":"Grid-module__orion-fusion-theme___hxBQz",grid:"Grid-module__grid___Os-i8",column:"Grid-module__column___zXP7v","column-tiny-1":"Grid-module__column-tiny-1___+1wfL","column-tiny-2":"Grid-module__column-tiny-2___PrgO4","column-tiny-3":"Grid-module__column-tiny-3___9YJit","column-tiny-4":"Grid-module__column-tiny-4___jIRz+","column-tiny-5":"Grid-module__column-tiny-5___IOG0q","column-tiny-6":"Grid-module__column-tiny-6___htaH4","column-tiny-7":"Grid-module__column-tiny-7___a33iE","column-tiny-8":"Grid-module__column-tiny-8___-yY3y","column-tiny-9":"Grid-module__column-tiny-9___zy187","column-tiny-10":"Grid-module__column-tiny-10___xGjO7","column-tiny-11":"Grid-module__column-tiny-11___jmS1E","column-tiny-12":"Grid-module__column-tiny-12___-6WVA","column-small-1":"Grid-module__column-small-1___xxAEw","column-small-2":"Grid-module__column-small-2___h46ZG","column-small-3":"Grid-module__column-small-3___cGpOb","column-small-4":"Grid-module__column-small-4___sD5fv","column-small-5":"Grid-module__column-small-5___GIPIh","column-small-6":"Grid-module__column-small-6___v9PQi","column-small-7":"Grid-module__column-small-7___3tEtM","column-small-8":"Grid-module__column-small-8___v5Aqd","column-small-9":"Grid-module__column-small-9___EQWCI","column-small-10":"Grid-module__column-small-10___m0tGE","column-small-11":"Grid-module__column-small-11___2pWbr","column-small-12":"Grid-module__column-small-12___5JnEA","column-medium-1":"Grid-module__column-medium-1___Yz235","column-medium-2":"Grid-module__column-medium-2___9jJQg","column-medium-3":"Grid-module__column-medium-3___li0pW","column-medium-4":"Grid-module__column-medium-4___J+DGa","column-medium-5":"Grid-module__column-medium-5___NpRnE","column-medium-6":"Grid-module__column-medium-6___i5TZS","column-medium-7":"Grid-module__column-medium-7___FPmRH","column-medium-8":"Grid-module__column-medium-8___pVJuv","column-medium-9":"Grid-module__column-medium-9___9R-eZ","column-medium-10":"Grid-module__column-medium-10___IdHZl","column-medium-11":"Grid-module__column-medium-11___R53Lk","column-medium-12":"Grid-module__column-medium-12___nisE+","column-large-1":"Grid-module__column-large-1___iu56a","column-large-2":"Grid-module__column-large-2___xmnS6","column-large-3":"Grid-module__column-large-3___lcwn6","column-large-4":"Grid-module__column-large-4___DAqhR","column-large-5":"Grid-module__column-large-5___FY8vE","column-large-6":"Grid-module__column-large-6___htHJ+","column-large-7":"Grid-module__column-large-7___V01cK","column-large-8":"Grid-module__column-large-8___yv14+","column-large-9":"Grid-module__column-large-9___IZJLb","column-large-10":"Grid-module__column-large-10___Yq3R8","column-large-11":"Grid-module__column-large-11___fz98K","column-large-12":"Grid-module__column-large-12___qedSp","column-huge-1":"Grid-module__column-huge-1___Y7ydw","column-huge-2":"Grid-module__column-huge-2___RekuK","column-huge-3":"Grid-module__column-huge-3___sO6jv","column-huge-4":"Grid-module__column-huge-4___C3Zti","column-huge-5":"Grid-module__column-huge-5___YOTc5","column-huge-6":"Grid-module__column-huge-6___0je45","column-huge-7":"Grid-module__column-huge-7___iHY-G","column-huge-8":"Grid-module__column-huge-8___hwq18","column-huge-9":"Grid-module__column-huge-9___XkrI1","column-huge-10":"Grid-module__column-huge-10___kk+IW","column-huge-11":"Grid-module__column-huge-11___izwwH","column-huge-12":"Grid-module__column-huge-12___VTALE","column-enormous-1":"Grid-module__column-enormous-1___7jaM7","column-enormous-2":"Grid-module__column-enormous-2___XJH79","column-enormous-3":"Grid-module__column-enormous-3___bcPxR","column-enormous-4":"Grid-module__column-enormous-4___fAqEp","column-enormous-5":"Grid-module__column-enormous-5___0QWBj","column-enormous-6":"Grid-module__column-enormous-6___4WMSd","column-enormous-7":"Grid-module__column-enormous-7___Bvt0l","column-enormous-8":"Grid-module__column-enormous-8___1rQyt","column-enormous-9":"Grid-module__column-enormous-9___2n6pM","column-enormous-10":"Grid-module__column-enormous-10___HcDD6","column-enormous-11":"Grid-module__column-enormous-11___CvLx0","column-enormous-12":"Grid-module__column-enormous-12___ifU5q"}},9197:function(e,t,n){"use strict";n.r(t),t.default={"clinical-lowlight-theme":"SectionHeader-module__clinical-lowlight-theme___M-5zo","orion-fusion-theme":"SectionHeader-module__orion-fusion-theme___MGUT7","section-header":"SectionHeader-module__section-header___wbdJQ","is-interactable":"SectionHeader-module__is-interactable___4Hj3Z","is-active":"SectionHeader-module__is-active___Qfdbq","is-transparent":"SectionHeader-module__is-transparent___3L6Q5","title-arrange":"SectionHeader-module__title-arrange___t4JW1",title:"SectionHeader-module__title___EPyaG","accordion-icon-wrapper":"SectionHeader-module__accordion-icon-wrapper___BOHqG","accordion-icon":"SectionHeader-module__accordion-icon___VQmOf","is-open":"SectionHeader-module__is-open___naqpt","arrange-wrapper":"SectionHeader-module__arrange-wrapper___jwEJm"}},23351:function(e,t,n){"use strict";n.r(t),t.default={arrange:"Arrange-module__arrange___2T8Bx",fill:"Arrange-module__fill___syrmP",fit:"Arrange-module__fit___vTG4e",center:"Arrange-module__center___pcei8",bottom:"Arrange-module__bottom___IXO-O",stretch:"Arrange-module__stretch___hMxmm",default:"Arrange-module__default___uqsBC"}},75346:function(e,t,n){"use strict";n.r(t),t.default={"visually-hidden-text":"VisuallyHiddenText-module__visually-hidden-text___lA9vx"}},78490:function(e,t,n){"use strict";function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.AlignmentTypes=void 0;var o=c(n(67294)),l=c(n(45697)),u=c(n(47166)),i=c(n(66633)),a=["fitStart","fill","fitEnd","align","alignFitStart","alignFill","alignFitEnd","fitStartAttributes","fillAttributes","fitEndAttributes"];function c(e){return e&&e.__esModule?e:{default:e}}function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f.apply(this,arguments)}function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){m(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===r(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}t.AlignmentTypes={CENTER:"center",BOTTOM:"bottom",STRETCH:"stretch"};var p=u.default.bind(i.default),b={fitStart:l.default.element,fill:l.default.element.isRequired,fitEnd:l.default.element,align:l.default.oneOf(["center","bottom","stretch"]),alignFitStart:l.default.oneOf(["center","bottom","stretch"]),alignFitEnd:l.default.oneOf(["center","bottom","stretch"]),alignFill:l.default.oneOf(["center","bottom","stretch"]),fitStartAttributes:l.default.object,fillAttributes:l.default.object,fitEndAttributes:l.default.object},y=function(e){var t=e.fitStart,n=e.fill,r=e.fitEnd,l=e.align,u=e.alignFitStart,i=e.alignFill,c=e.alignFitEnd,d=e.fitStartAttributes,m=e.fillAttributes,b=e.fitEndAttributes,y=_(e,a),v=s({},d),g=s({},m),O=s({},b);return o.default.createElement("div",f({},y,{className:p("arrange",y.className)}),o.default.createElement("div",f({},v,{className:p("fit",l||u,v.className)}),t),o.default.createElement("div",f({},g,{className:p("fill",l||i,g.className)}),n),o.default.createElement("div",f({},O,{className:p("fit",l||c,O.className)}),r))};y.propTypes=b;var v=y;t.default=v},55142:function(e,t,n){"use strict";function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=d(n(67294)),l=d(n(45697)),u=d(n(94184)),i=d(n(47166)),a=d(n(47341)),c=d(n(68586)),f=["defaultValue","disabled","isIncomplete","isInvalid","onBlur","onChange","onFocus","onInput","name","pattern","refCallback","required","type","ariaLabel","value"];function d(e){return e&&e.__esModule?e:{default:e}}function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _(e,t,n){return(t=y(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,y(r.key),r)}}function y(e){var t=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===r(t)?t:String(t)}function v(e,t){return v=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},v(e,t)}function g(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=O(e);if(t){var l=O(this).constructor;n=Reflect.construct(o,arguments,l)}else n=o.apply(this,arguments);return function(e,t){if(t&&("object"===r(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,n)}}function O(e){return O=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},O(e)}var h=i.default.bind(c.default),j={defaultValue:l.default.oneOfType([l.default.string,l.default.number]),disabled:l.default.bool,isIncomplete:l.default.bool,isInvalid:l.default.bool,onBlur:l.default.func,onChange:l.default.func,onFocus:l.default.func,onInput:l.default.func,name:l.default.string,pattern:l.default.string,refCallback:l.default.func,required:l.default.bool,type:l.default.string,value:l.default.oneOfType([l.default.string,l.default.number]),ariaLabel:l.default.string},w={defaultValue:void 0,disabled:!1,isIncomplete:!1,isInvalid:!1,onBlur:void 0,onChange:void 0,onFocus:void 0,onInput:void 0,name:null,pattern:void 0,required:!1,refCallback:void 0,type:void 0,value:void 0},E=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&v(e,t)}(i,e);var t,n,r,l=g(i);function i(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),l.apply(this,arguments)}return t=i,n=[{key:"render",value:function(){var e,t=this.props,n=t.defaultValue,r=t.disabled,l=t.isIncomplete,i=t.isInvalid,a=t.onBlur,c=t.onChange,d=t.onFocus,b=t.onInput,y=t.name,v=t.pattern,g=t.refCallback,O=t.required,j=t.type,w=t.ariaLabel,E=t.value,P=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){_(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},p(t,f)),S=this.context,G=(void 0===j||["text","number","password","email","search","tel","url","hidden"].includes(j))&&h("form-input",{"form-error":i},{"form-incomplete":l&&O&&!i},S.className),x=(0,u.default)(G,P.className);return P&&Object.prototype.hasOwnProperty.call(P,"aria-label")?e=w||P["aria-label"]:w&&(e=w),P["aria-label"]=e,O&&(P["aria-required"]="true"),void 0!==E?P.value=E:void 0!==n&&(P.defaultValue=n),P.placeholder&&!P.showMpageFusionPlaceholder&&(P.placeholder=null),delete P.showMpageFusionPlaceholder,o.default.createElement("input",s({},P,{ref:function(e){g&&g(e)},name:y,type:j,pattern:v,onBlur:a,onChange:c,onFocus:d,onInput:b,disabled:r,required:O,className:x}))}}],n&&b(t.prototype,n),r&&b(t,r),Object.defineProperty(t,"prototype",{writable:!1}),i}(o.default.Component);E.propTypes=j,E.defaultProps=w,E.contextType=a.default,E.isInput=!0;var P=E;t.default=P},14012:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n(67294)),o=i(n(45697)),l=i(n(3546)),u=i(n(53510));function i(e){return e&&e.__esModule?e:{default:e}}var a={children:o.default.node.isRequired},c=function(e){return r.default.createElement("div",e)};c.propTypes=a,c.Row=l.default,c.Column=u.default;var f=c;t.default=f},53510:function(e,t,n){"use strict";function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=d(n(67294)),l=d(n(45697)),u=d(n(94184)),i=d(n(47166)),a=d(n(47341)),c=d(n(49959)),f=["className","children","tiny","small","medium","large","huge","enormous"];function d(e){return e&&e.__esModule?e:{default:e}}function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}function m(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===r(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=i.default.bind(c.default),b=function(e,t){if(e[t]){var n=e[t];return n>=1&&n<=12?null:new Error("".concat(t," must be in range 1 to 12 inclusively"))}return null},y={children:l.default.node,className:l.default.string,tiny:b,enormous:b,huge:b,large:b,medium:b,small:b},v=function(e){var t,n=e.className,r=e.children,l=e.tiny,i=e.small,c=e.medium,d=e.large,b=e.huge,y=e.enormous,v=_(e,f),g=o.default.useContext(a.default),O=(0,u.default)(p(["column",(t={},m(t,"column-tiny-".concat(l),l),m(t,"column-small-".concat(i),i),m(t,"column-medium-".concat(c),c),m(t,"column-large-".concat(d),d),m(t,"column-huge-".concat(b),b),m(t,"column-enormous-".concat(y),y),t),g.className]),n);return o.default.createElement("div",s({},v,{className:O}),r)};v.propTypes=y;var g=v;t.default=g},3546:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=f(n(67294)),o=f(n(45697)),l=f(n(94184)),u=f(n(47166)),i=f(n(47341)),a=f(n(49959)),c=["className","children"];function f(e){return e&&e.__esModule?e:{default:e}}function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},d.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var m=u.default.bind(a.default),_={children:o.default.node.isRequired,className:o.default.string},p=function(e){var t=e.className,n=e.children,o=s(e,c),u=r.default.useContext(i.default);return r.default.createElement("div",d({},o,{className:(0,l.default)(m("grid",u.className),t)}),n)};p.propTypes=_;var b=p;t.default=b},33864:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(n(67294)),o=l(n(99139));function l(e){return e&&e.__esModule?e:{default:e}}function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u.apply(this,arguments)}var i=function(e){var t=u({},e);return r.default.createElement(o.default,t,r.default.createElement("path",{d:"M10.3 24 33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};i.displayName="IconChevronLeft",i.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};var a=i;t.default=a},16772:function(e,t,n){"use strict";function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=_(n(67294)),l=_(n(45697)),u=_(n(94184)),i=_(n(47166)),a=_(n(47341)),c=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var n=m(t);if(n&&n.has(e))return n.get(e);var o={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var i=l?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(o,u,i):o[u]=e[u]}o.default=e,n&&n.set(e,o);return o}(n(51051)),f=_(n(86695)),d=_(n(9197)),s=["text","title","onClick","isOpen","isTransparent","level"];function m(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(m=function(e){return e?n:t})(e)}function _(e){return e&&e.__esModule?e:{default:e}}function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p.apply(this,arguments)}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e,t,n){return(t=O(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function v(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,O(r.key),r)}}function O(e){var t=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===r(t)?t:String(t)}function h(e,t){return h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},h(e,t)}function j(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=E(e);if(t){var l=E(this).constructor;n=Reflect.construct(o,arguments,l)}else n=o.apply(this,arguments);return function(e,t){if(t&&("object"===r(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return w(e)}(this,n)}}function w(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function E(e){return E=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},E(e)}var P=i.default.bind(d.default),S={text:l.default.string,title:l.default.string,onClick:l.default.func,isOpen:l.default.bool,level:l.default.oneOf([1,2,3,4,5,6]),isTransparent:l.default.bool},G={onClick:void 0,isOpen:!1,isTransparent:!1},x=function(e){return e.nativeEvent.keyCode===c.KEY_RETURN||e.nativeEvent.keyCode===c.KEY_SPACE},T=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&h(e,t)}(i,e);var t,n,r,l=j(i);function i(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(t=l.call(this,e)).state={isActive:!1},t.wrapOnKeyDown=t.wrapOnKeyDown.bind(w(t)),t.wrapOnKeyUp=t.wrapOnKeyUp.bind(w(t)),t}return t=i,n=[{key:"wrapOnKeyDown",value:function(e){var t=this;return function(n){x(n)&&!t.state.isActive&&(t.setState({isActive:!0}),t.props.onClick&&t.props.onClick(n)),e&&e(n)}}},{key:"wrapOnKeyUp",value:function(e){var t=this;return function(n){x(n)&&t.state.isActive&&t.setState({isActive:!1}),e&&e(n)}}},{key:"render",value:function(){var e=this.props,t=e.text,n=e.title,r=e.onClick,l=e.isOpen,i=e.isTransparent,a=e.level,c=v(e,s),d=this.context,m=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){y(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},c);r&&(m.tabIndex="0",m.onKeyDown=this.wrapOnKeyDown(m.onKeyDown),m.onKeyUp=this.wrapOnKeyUp(m.onKeyUp),m.onClick=r);var _=P(["accordion-icon",{"is-open":r&&l}]),g=o.default.createElement("span",{className:P("accordion-icon-wrapper")},o.default.createElement("span",{className:_})),O=(0,u.default)(P("section-header",{"is-interactable":r},{"is-active":this.state.isActive},{"is-transparent":i},d.className),c.className);a||console.warn("Default heading level may not appropriate has it would fail to convey context of heading in a site / application where it is used. Heading level should be set explicitly depending on the position of header in site / application to allow screen readers to identify headers consistently."),n&&console.warn("`title` prop has been renamed to `text`. please update all the refernces of `title` prop to use prop `text`.");var h="h".concat(a||2),j=t||n,w=r&&g?{type:"button",tabIndex:"-1","aria-expanded":l,"aria-label":j}:void 0,E=r&&g?"button":"span";return o.default.createElement(h,p({},m,{className:O,"aria-label":r?void 0:j}),o.default.createElement(E,p({},w,{className:P("arrange-wrapper")}),o.default.createElement(f.default,{fitStart:r&&g,fill:o.default.createElement("span",{"aria-hidden":void 0!==r,className:P("title")},j),className:P("title-arrange")})))}}],n&&g(t.prototype,n),r&&g(t,r),Object.defineProperty(t,"prototype",{writable:!1}),i}(o.default.Component);T.propTypes=S,T.defaultProps=G,T.contextType=a.default;var N=T;t.default=N},86695:function(e,t,n){"use strict";function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.AlignmentTypes=void 0;var o=c(n(67294)),l=c(n(45697)),u=c(n(47166)),i=c(n(23351)),a=["fitStart","fill","fitEnd","align","alignFitStart","alignFill","alignFitEnd","fitStartAttributes","fillAttributes","fitEndAttributes"];function c(e){return e&&e.__esModule?e:{default:e}}function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f.apply(this,arguments)}function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){m(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===r(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}t.AlignmentTypes={CENTER:"center",BOTTOM:"bottom",STRETCH:"stretch"};var p=u.default.bind(i.default),b={fitStart:l.default.element,fill:l.default.element.isRequired,fitEnd:l.default.element,align:l.default.oneOf(["center","bottom","stretch"]),alignFitStart:l.default.oneOf(["center","bottom","stretch"]),alignFitEnd:l.default.oneOf(["center","bottom","stretch"]),alignFill:l.default.oneOf(["center","bottom","stretch"]),fitStartAttributes:l.default.object,fillAttributes:l.default.object,fitEndAttributes:l.default.object},y=function(e){var t=e.fitStart,n=e.fill,r=e.fitEnd,l=e.align,u=e.alignFitStart,i=e.alignFill,c=e.alignFitEnd,d=e.fitStartAttributes,m=e.fillAttributes,b=e.fitEndAttributes,y=_(e,a),v=s({},d),g=s({},m),O=s({},b);return o.default.createElement("span",f({},y,{className:p("arrange",y.className)}),o.default.createElement("span",f({},v,{className:p("fit",l||u,v.className,"fit-block")}),t),o.default.createElement("span",f({},g,{className:p("fill",l||i,g.className,"fill-block")}),n),o.default.createElement("span",f({},O,{className:p("fit",l||c,O.className)}),r))};y.propTypes=b;var v=y;t.default=v},23870:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(67294)),o=a(n(65218)),l=a(n(37968)),u=a(n(75346)),i=["refCallback","text"];function a(e){return e&&e.__esModule?e:{default:e}}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}function f(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=l.default.bind(u.default),s={refCallback:o.default.func,text:o.default.string},m={text:void 0,refCallback:void 0},_=function(e){var t=e.refCallback,n=e.text,o=f(e,i),l=d(["visually-hidden-text",o.className]);return r.default.createElement("span",c({ref:t},o,{className:l}),n)};_.propTypes=s,_.defaultProps=m;var p=_;t.default=p},37968:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var l=typeof n;if("string"===l||"number"===l)e.push(this&&this[n]||n);else if(Array.isArray(n))e.push(o.apply(this,n));else if("object"===l){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var u in n)r.call(n,u)&&n[u]&&e.push(this&&this[u]||u)}}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},72399:function(e,t,n){"use strict";var r=n(672);function o(){}function l(){}l.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,l,u){if(u!==r){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:l,resetWarningCache:o};return n.PropTypes=n,n}},65218:function(e,t,n){e.exports=n(72399)()},672:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);