"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[91339,77883,18974,22020],{22863:function(e,t,n){var r=n(64836);t.Z=void 0;var o=r(n(67294)),l=r(n(45697)),u=r(n(47166)),a=r(n(17422)),i=u.default.bind(a.default),c={name:l.default.string.isRequired,src:l.default.string,url:l.default.string,version:l.default.string.isRequired},m=function(e){var t=e.src,n=e.name,r=e.url,l=e.version,u=o.default.createElement("a",{className:i("badge"),href:r||"https://www.npmjs.org/package/".concat(n,"/v/").concat(l)},o.default.createElement("span",{className:i("badge-name")},r?"package":"npm"),o.default.createElement("span",{className:i("badge-version")},"v".concat(l))),a=t?o.default.createElement("a",{className:i("badge"),href:t},o.default.createElement("span",{className:i("badge-name")},"github"),o.default.createElement("span",{className:i("badge-version")},"source")):void 0;return o.default.createElement("div",{className:i("badge-container")},u,a)};m.propTypes=c;var d=m;t.Z=d},49271:function(e,t,n){var r=n(64836),o=n(18698);t.Z=void 0;var l=r(n(27424)),u=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==o(e)&&"function"!=typeof e)return{default:e};var n=s(t);if(n&&n.has(e))return n.get(e);var r={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var a=l?Object.getOwnPropertyDescriptor(e,u):null;a&&(a.get||a.set)?Object.defineProperty(r,u,a):r[u]=e[u]}r.default=e,n&&n.set(e,r);return r}(n(67294)),a=r(n(45697)),i=r(n(47166)),c=n(21538),m=r(n(33864)),d=r(n(23399)),_=n(51051),f=r(n(53560));function s(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(s=function(e){return e?n:t})(e)}var p=i.default.bind(f.default),b={example:a.default.element,exampleSrc:a.default.element,exampleCssSrc:a.default.element,title:a.default.string,description:a.default.node,isExpanded:a.default.bool},y=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},v=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},g=function(e){var t=e.example,n=e.exampleSrc,r=e.exampleCssSrc,o=e.title,a=e.description,i=e.isExpanded,f=(0,u.useState)(i),s=(0,l.default)(f,2),b=s[0],g=s[1],h=(0,u.useState)(!1),O=(0,l.default)(h,2),w=O[0],j=O[1],E=u.default.useContext(c.ThemeContext),P=void 0!==r,G=function(){j(!w),b&&g(!b)},S=function(){g(!b),w&&j(!w)},x=function(e,t){e.nativeEvent.keyCode!==_.KEY_SPACE&&e.nativeEvent.keyCode!==_.KEY_RETURN||(e.preventDefault(),t())};return u.default.createElement("div",{className:p("template",E.className)},u.default.createElement("div",{className:p("header")},o&&u.default.createElement("h2",{className:p("title")},o)),u.default.createElement("div",{className:p("content")},a&&u.default.createElement("div",{className:p("description")},a),t),u.default.createElement("div",{className:p("footer")},n?u.default.createElement("div",{className:p("button-container")},P&&u.default.createElement("button",{type:"button",className:p("css-toggle","item",{"is-selected":w}),onClick:G,onKeyDown:function(e){return x(e,G)},onBlur:y,onMouseDown:v,tabIndex:0,"data-focus-styles-enabled":!0},u.default.createElement(m.default,{className:p("chevron")}),u.default.createElement("span",null,"CSS"),u.default.createElement(d.default,{className:p("chevron")})),u.default.createElement("button",{type:"button",className:p("code-toggle","item",{"is-selected":b}),onClick:S,onKeyDown:function(e){return x(e,S)},onBlur:y,onMouseDown:v,tabIndex:0,"data-focus-styles-enabled":!0},u.default.createElement(m.default,{className:p("chevron")}),u.default.createElement("span",null,"Code"),u.default.createElement(d.default,{className:p("chevron")}))):null,u.default.createElement("div",null,w&&u.default.createElement("div",{className:p("css")},r),b&&u.default.createElement("div",{className:p("code")},n))))};g.propTypes=b,g.defaultProps={isExpanded:!1};var h=g;t.Z=h},17422:function(e,t,n){n.r(t),t.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},53560:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},66633:function(e,t,n){n.r(t),t.default={arrange:"Arrange-module__arrange___hY0Ml",fill:"Arrange-module__fill___m88eq",fit:"Arrange-module__fit___tv8j-",center:"Arrange-module__center___9qfhG",bottom:"Arrange-module__bottom___8beod",stretch:"Arrange-module__stretch___eQF-k",default:"Arrange-module__default___z+O29"}},68586:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Input-module__clinical-lowlight-theme___clY96","orion-fusion-theme":"Input-module__orion-fusion-theme___phvH5","form-input":"Input-module__form-input___Fk8kb","form-error":"Input-module__form-error___aU4hq","form-incomplete":"Input-module__form-incomplete___h4I7H"}},49959:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Grid-module__clinical-lowlight-theme___iBVVg","orion-fusion-theme":"Grid-module__orion-fusion-theme___hxBQz",grid:"Grid-module__grid___Os-i8",column:"Grid-module__column___zXP7v","column-tiny-1":"Grid-module__column-tiny-1___+1wfL","column-tiny-2":"Grid-module__column-tiny-2___PrgO4","column-tiny-3":"Grid-module__column-tiny-3___9YJit","column-tiny-4":"Grid-module__column-tiny-4___jIRz+","column-tiny-5":"Grid-module__column-tiny-5___IOG0q","column-tiny-6":"Grid-module__column-tiny-6___htaH4","column-tiny-7":"Grid-module__column-tiny-7___a33iE","column-tiny-8":"Grid-module__column-tiny-8___-yY3y","column-tiny-9":"Grid-module__column-tiny-9___zy187","column-tiny-10":"Grid-module__column-tiny-10___xGjO7","column-tiny-11":"Grid-module__column-tiny-11___jmS1E","column-tiny-12":"Grid-module__column-tiny-12___-6WVA","column-small-1":"Grid-module__column-small-1___xxAEw","column-small-2":"Grid-module__column-small-2___h46ZG","column-small-3":"Grid-module__column-small-3___cGpOb","column-small-4":"Grid-module__column-small-4___sD5fv","column-small-5":"Grid-module__column-small-5___GIPIh","column-small-6":"Grid-module__column-small-6___v9PQi","column-small-7":"Grid-module__column-small-7___3tEtM","column-small-8":"Grid-module__column-small-8___v5Aqd","column-small-9":"Grid-module__column-small-9___EQWCI","column-small-10":"Grid-module__column-small-10___m0tGE","column-small-11":"Grid-module__column-small-11___2pWbr","column-small-12":"Grid-module__column-small-12___5JnEA","column-medium-1":"Grid-module__column-medium-1___Yz235","column-medium-2":"Grid-module__column-medium-2___9jJQg","column-medium-3":"Grid-module__column-medium-3___li0pW","column-medium-4":"Grid-module__column-medium-4___J+DGa","column-medium-5":"Grid-module__column-medium-5___NpRnE","column-medium-6":"Grid-module__column-medium-6___i5TZS","column-medium-7":"Grid-module__column-medium-7___FPmRH","column-medium-8":"Grid-module__column-medium-8___pVJuv","column-medium-9":"Grid-module__column-medium-9___9R-eZ","column-medium-10":"Grid-module__column-medium-10___IdHZl","column-medium-11":"Grid-module__column-medium-11___R53Lk","column-medium-12":"Grid-module__column-medium-12___nisE+","column-large-1":"Grid-module__column-large-1___iu56a","column-large-2":"Grid-module__column-large-2___xmnS6","column-large-3":"Grid-module__column-large-3___lcwn6","column-large-4":"Grid-module__column-large-4___DAqhR","column-large-5":"Grid-module__column-large-5___FY8vE","column-large-6":"Grid-module__column-large-6___htHJ+","column-large-7":"Grid-module__column-large-7___V01cK","column-large-8":"Grid-module__column-large-8___yv14+","column-large-9":"Grid-module__column-large-9___IZJLb","column-large-10":"Grid-module__column-large-10___Yq3R8","column-large-11":"Grid-module__column-large-11___fz98K","column-large-12":"Grid-module__column-large-12___qedSp","column-huge-1":"Grid-module__column-huge-1___Y7ydw","column-huge-2":"Grid-module__column-huge-2___RekuK","column-huge-3":"Grid-module__column-huge-3___sO6jv","column-huge-4":"Grid-module__column-huge-4___C3Zti","column-huge-5":"Grid-module__column-huge-5___YOTc5","column-huge-6":"Grid-module__column-huge-6___0je45","column-huge-7":"Grid-module__column-huge-7___iHY-G","column-huge-8":"Grid-module__column-huge-8___hwq18","column-huge-9":"Grid-module__column-huge-9___XkrI1","column-huge-10":"Grid-module__column-huge-10___kk+IW","column-huge-11":"Grid-module__column-huge-11___izwwH","column-huge-12":"Grid-module__column-huge-12___VTALE","column-enormous-1":"Grid-module__column-enormous-1___7jaM7","column-enormous-2":"Grid-module__column-enormous-2___XJH79","column-enormous-3":"Grid-module__column-enormous-3___bcPxR","column-enormous-4":"Grid-module__column-enormous-4___fAqEp","column-enormous-5":"Grid-module__column-enormous-5___0QWBj","column-enormous-6":"Grid-module__column-enormous-6___4WMSd","column-enormous-7":"Grid-module__column-enormous-7___Bvt0l","column-enormous-8":"Grid-module__column-enormous-8___1rQyt","column-enormous-9":"Grid-module__column-enormous-9___2n6pM","column-enormous-10":"Grid-module__column-enormous-10___HcDD6","column-enormous-11":"Grid-module__column-enormous-11___CvLx0","column-enormous-12":"Grid-module__column-enormous-12___ifU5q"}},9197:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"SectionHeader-module__clinical-lowlight-theme___M-5zo","orion-fusion-theme":"SectionHeader-module__orion-fusion-theme___MGUT7","section-header":"SectionHeader-module__section-header___wbdJQ","is-interactable":"SectionHeader-module__is-interactable___4Hj3Z","is-active":"SectionHeader-module__is-active___Qfdbq","is-transparent":"SectionHeader-module__is-transparent___3L6Q5","title-arrange":"SectionHeader-module__title-arrange___t4JW1",title:"SectionHeader-module__title___EPyaG","accordion-icon-wrapper":"SectionHeader-module__accordion-icon-wrapper___BOHqG","accordion-icon":"SectionHeader-module__accordion-icon___VQmOf","is-open":"SectionHeader-module__is-open___naqpt","arrange-wrapper":"SectionHeader-module__arrange-wrapper___jwEJm"}},78490:function(e,t,n){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.AlignmentTypes=void 0;var o=c(n(67294)),l=c(n(45697)),u=c(n(47166)),a=c(n(66633)),i=["fitStart","fill","fitEnd","align","alignFitStart","alignFill","alignFitEnd","fitStartAttributes","fillAttributes","fitEndAttributes"];function c(e){return e&&e.__esModule?e:{default:e}}function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},m.apply(this,arguments)}function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){f(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function f(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===r(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}t.AlignmentTypes={CENTER:"center",BOTTOM:"bottom",STRETCH:"stretch"};var p=u.default.bind(a.default),b={fitStart:l.default.element,fill:l.default.element.isRequired,fitEnd:l.default.element,align:l.default.oneOf(["center","bottom","stretch"]),alignFitStart:l.default.oneOf(["center","bottom","stretch"]),alignFitEnd:l.default.oneOf(["center","bottom","stretch"]),alignFill:l.default.oneOf(["center","bottom","stretch"]),fitStartAttributes:l.default.object,fillAttributes:l.default.object,fitEndAttributes:l.default.object},y=function(e){var t=e.fitStart,n=e.fill,r=e.fitEnd,l=e.align,u=e.alignFitStart,a=e.alignFill,c=e.alignFitEnd,d=e.fitStartAttributes,f=e.fillAttributes,b=e.fitEndAttributes,y=s(e,i),v=_({},d),g=_({},f),h=_({},b);return o.default.createElement("span",m({},y,{className:p("arrange",y.className)}),o.default.createElement("span",m({},v,{className:p("fit",l||u,v.className,"fit-block")}),t),o.default.createElement("span",m({},g,{className:p("fill",l||a,g.className,"fill-block")}),n),o.default.createElement("span",m({},h,{className:p("fit",l||c,h.className)}),r))};y.propTypes=b;t.default=y},55142:function(e,t,n){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=d(n(67294)),l=d(n(45697)),u=d(n(94184)),a=d(n(47166)),i=d(n(47341)),c=d(n(68586)),m=["defaultValue","disabled","isIncomplete","isInvalid","onBlur","onChange","onFocus","onInput","name","pattern","refCallback","required","type","ariaLabel","value"];function d(e){return e&&e.__esModule?e:{default:e}}function _(){return _=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},_.apply(this,arguments)}function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e,t,n){return(t=y(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,y(r.key),r)}}function y(e){var t=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===r(t)?t:String(t)}function v(e,t){return v=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},v(e,t)}function g(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=h(e);if(t){var l=h(this).constructor;n=Reflect.construct(o,arguments,l)}else n=o.apply(this,arguments);return function(e,t){if(t&&("object"===r(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,n)}}function h(e){return h=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},h(e)}var O=a.default.bind(c.default),w={defaultValue:l.default.oneOfType([l.default.string,l.default.number]),disabled:l.default.bool,isIncomplete:l.default.bool,isInvalid:l.default.bool,onBlur:l.default.func,onChange:l.default.func,onFocus:l.default.func,onInput:l.default.func,name:l.default.string,pattern:l.default.string,refCallback:l.default.func,required:l.default.bool,type:l.default.string,value:l.default.oneOfType([l.default.string,l.default.number]),ariaLabel:l.default.string},j={defaultValue:void 0,disabled:!1,isIncomplete:!1,isInvalid:!1,onBlur:void 0,onChange:void 0,onFocus:void 0,onInput:void 0,name:null,pattern:void 0,required:!1,refCallback:void 0,type:void 0,value:void 0},E=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&v(e,t)}(a,e);var t,n,r,l=g(a);function a(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),l.apply(this,arguments)}return t=a,n=[{key:"render",value:function(){var e,t=this.props,n=t.defaultValue,r=t.disabled,l=t.isIncomplete,a=t.isInvalid,i=t.onBlur,c=t.onChange,d=t.onFocus,b=t.onInput,y=t.name,v=t.pattern,g=t.refCallback,h=t.required,w=t.type,j=t.ariaLabel,E=t.value,P=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},p(t,m)),G=this.context,S=(void 0===w||["text","number","password","email","search","tel","url","hidden"].includes(w))&&O("form-input",{"form-error":a},{"form-incomplete":l&&h&&!a},G.className),x=(0,u.default)(S,P.className);return P&&Object.prototype.hasOwnProperty.call(P,"aria-label")?e=j||P["aria-label"]:j&&(e=j),P["aria-label"]=e,h&&(P["aria-required"]="true"),void 0!==E?P.value=E:void 0!==n&&(P.defaultValue=n),P.placeholder&&!P.showMpageFusionPlaceholder&&(P.placeholder=null),delete P.showMpageFusionPlaceholder,o.default.createElement("input",_({},P,{ref:function(e){g&&g(e)},name:y,type:w,pattern:v,onBlur:i,onChange:c,onFocus:d,onInput:b,disabled:r,required:h,className:x}))}}],n&&b(t.prototype,n),r&&b(t,r),Object.defineProperty(t,"prototype",{writable:!1}),a}(o.default.Component);E.propTypes=w,E.defaultProps=j,E.contextType=i.default,E.isInput=!0;t.default=E},14012:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(67294)),o=a(n(45697)),l=a(n(3546)),u=a(n(53510));function a(e){return e&&e.__esModule?e:{default:e}}var i={children:o.default.node.isRequired},c=function(e){return r.default.createElement("div",e)};c.propTypes=i,c.Row=l.default,c.Column=u.default;var m=c;t.default=m},53510:function(e,t,n){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=d(n(67294)),l=d(n(45697)),u=d(n(94184)),a=d(n(47166)),i=d(n(47341)),c=d(n(49959)),m=["className","children","tiny","small","medium","large","huge","enormous"];function d(e){return e&&e.__esModule?e:{default:e}}function _(){return _=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},_.apply(this,arguments)}function f(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===r(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.default.bind(c.default),b=function(e,t){if(e[t]){var n=e[t];return n>=1&&n<=12?null:new Error("".concat(t," must be in range 1 to 12 inclusively"))}return null},y={children:l.default.node,className:l.default.string,tiny:b,enormous:b,huge:b,large:b,medium:b,small:b},v=function(e){var t,n=e.className,r=e.children,l=e.tiny,a=e.small,c=e.medium,d=e.large,b=e.huge,y=e.enormous,v=s(e,m),g=o.default.useContext(i.default),h=(0,u.default)(p(["column",(t={},f(t,"column-tiny-".concat(l),l),f(t,"column-small-".concat(a),a),f(t,"column-medium-".concat(c),c),f(t,"column-large-".concat(d),d),f(t,"column-huge-".concat(b),b),f(t,"column-enormous-".concat(y),y),t),g.className]),n);return o.default.createElement("div",_({},v,{className:h}),r)};v.propTypes=y;var g=v;t.default=g},3546:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=m(n(67294)),o=m(n(45697)),l=m(n(94184)),u=m(n(47166)),a=m(n(47341)),i=m(n(49959)),c=["className","children"];function m(e){return e&&e.__esModule?e:{default:e}}function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},d.apply(this,arguments)}function _(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var f=u.default.bind(i.default),s={children:o.default.node.isRequired,className:o.default.string},p=function(e){var t=e.className,n=e.children,o=_(e,c),u=r.default.useContext(a.default);return r.default.createElement("div",d({},o,{className:(0,l.default)(f("grid",u.className),t)}),n)};p.propTypes=s;var b=p;t.default=b},33864:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(n(67294)),o=l(n(99139));function l(e){return e&&e.__esModule?e:{default:e}}function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u.apply(this,arguments)}var a=function(e){var t=u({},e);return r.default.createElement(o.default,t,r.default.createElement("path",{d:"M10.3 24 33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};a.displayName="IconChevronLeft",a.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};t.default=a},16772:function(e,t,n){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=s(n(67294)),l=s(n(45697)),u=s(n(94184)),a=s(n(47166)),i=s(n(47341)),c=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=r(e)&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var o={__proto__:null},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var a=l?Object.getOwnPropertyDescriptor(e,u):null;a&&(a.get||a.set)?Object.defineProperty(o,u,a):o[u]=e[u]}return o.default=e,n&&n.set(e,o),o}(n(51051)),m=s(n(78490)),d=s(n(9197)),_=["text","title","onClick","isOpen","isTransparent","level"];function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}function s(e){return e&&e.__esModule?e:{default:e}}function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p.apply(this,arguments)}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e,t,n){return(t=h(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function v(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,h(r.key),r)}}function h(e){var t=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===r(t)?t:String(t)}function O(e,t){return O=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},O(e,t)}function w(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=E(e);if(t){var l=E(this).constructor;n=Reflect.construct(o,arguments,l)}else n=o.apply(this,arguments);return function(e,t){if(t&&("object"===r(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return j(e)}(this,n)}}function j(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function E(e){return E=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},E(e)}var P=a.default.bind(d.default),G={text:l.default.string,title:l.default.string,onClick:l.default.func,isOpen:l.default.bool,level:l.default.oneOf([1,2,3,4,5,6]),isTransparent:l.default.bool},S={onClick:void 0,isOpen:!1,isTransparent:!1},x=function(e){return e.nativeEvent.keyCode===c.KEY_RETURN||e.nativeEvent.keyCode===c.KEY_SPACE},N=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&O(e,t)}(a,e);var t,n,r,l=w(a);function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=l.call(this,e)).state={isActive:!1},t.wrapOnKeyDown=t.wrapOnKeyDown.bind(j(t)),t.wrapOnKeyUp=t.wrapOnKeyUp.bind(j(t)),t}return t=a,n=[{key:"wrapOnKeyDown",value:function(e){var t=this;return function(n){x(n)&&!t.state.isActive&&(t.setState({isActive:!0}),t.props.onClick&&t.props.onClick(n)),e&&e(n)}}},{key:"wrapOnKeyUp",value:function(e){var t=this;return function(n){x(n)&&t.state.isActive&&t.setState({isActive:!1}),e&&e(n)}}},{key:"render",value:function(){var e=this.props,t=e.text,n=e.title,r=e.onClick,l=e.isOpen,a=e.isTransparent,i=e.level,c=v(e,_),d=this.context,f=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){y(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},c);r&&(f.tabIndex="0",f.onKeyDown=this.wrapOnKeyDown(f.onKeyDown),f.onKeyUp=this.wrapOnKeyUp(f.onKeyUp),f.onClick=r);var s=P(["accordion-icon",{"is-open":r&&l}]),g=o.default.createElement("span",{className:P("accordion-icon-wrapper")},o.default.createElement("span",{className:s})),h=(0,u.default)(P("section-header",{"is-interactable":r},{"is-active":this.state.isActive},{"is-transparent":a},d.className),c.className);i||console.warn("Default heading level may not appropriate has it would fail to convey context of heading in a site / application where it is used. Heading level should be set explicitly depending on the position of header in site / application to allow screen readers to identify headers consistently."),n&&console.warn("`title` prop has been renamed to `text`. please update all the refernces of `title` prop to use prop `text`.");var O="h".concat(i||2),w=t||n,j=r&&g?{type:"button",tabIndex:"-1","aria-expanded":l,"aria-label":w}:void 0,E=r&&g?"button":"span";return o.default.createElement(O,p({},f,{className:h,"aria-label":r?void 0:w}),o.default.createElement(E,p({},j,{className:P("arrange-wrapper")}),o.default.createElement(m.default,{fitStart:r&&g,fill:o.default.createElement("span",{"aria-hidden":void 0!==r,className:P("title")},w),className:P("title-arrange")})))}}],n&&g(t.prototype,n),r&&g(t,r),Object.defineProperty(t,"prototype",{writable:!1}),a}(o.default.Component);N.propTypes=G,N.defaultProps=S,N.contextType=i.default;t.default=N}}]);