"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[21633],{22863:function(e,t,a){var n=a(64836);t.Z=void 0;var l=n(a(67294)),r=n(a(45697)),o=n(a(47166)),u=n(a(17422)),i=o.default.bind(u.default),c={name:r.default.string.isRequired,src:r.default.string,url:r.default.string,version:r.default.string.isRequired},s=function(e){var t=e.src,a=e.name,n=e.url,r=e.version,o=l.default.createElement("a",{className:i("badge"),href:n||"https://www.npmjs.org/package/".concat(a,"/v/").concat(r)},l.default.createElement("span",{className:i("badge-name")},n?"package":"npm"),l.default.createElement("span",{className:i("badge-version")},"v".concat(r))),u=t?l.default.createElement("a",{className:i("badge"),href:t},l.default.createElement("span",{className:i("badge-name")},"github"),l.default.createElement("span",{className:i("badge-version")},"source")):void 0;return l.default.createElement("div",{className:i("badge-container")},o,u)};s.propTypes=c;var d=s;t.Z=d},49271:function(e,t,a){var n=a(64836),l=a(18698);t.Z=void 0;var r=n(a(27424)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==l(e)&&"function"!=typeof e)return{default:e};var a=_(t);if(a&&a.has(e))return a.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=r?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(n,o,u):n[o]=e[o]}n.default=e,a&&a.set(e,n);return n}(a(67294)),u=n(a(45697)),i=n(a(47166)),c=a(21538),s=n(a(33864)),d=n(a(23399)),f=a(51051),m=n(a(53560));function _(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(_=function(e){return e?a:t})(e)}var p=i.default.bind(m.default),b={example:u.default.element,exampleSrc:u.default.element,exampleCssSrc:u.default.element,title:u.default.string,description:u.default.node,isExpanded:u.default.bool},g=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},v=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},y=function(e){var t=e.example,a=e.exampleSrc,n=e.exampleCssSrc,l=e.title,u=e.description,i=e.isExpanded,m=(0,o.useState)(i),_=(0,r.default)(m,2),b=_[0],y=_[1],E=(0,o.useState)(!1),h=(0,r.default)(E,2),O=h[0],w=h[1],j=o.default.useContext(c.ThemeContext),N=void 0!==n,x=function(){w(!O),b&&y(!b)},T=function(){y(!b),O&&w(!O)},S=function(e,t){e.nativeEvent.keyCode!==f.KEY_SPACE&&e.nativeEvent.keyCode!==f.KEY_RETURN||(e.preventDefault(),t())};return o.default.createElement("div",{className:p("template",j.className)},o.default.createElement("div",{className:p("header")},l&&o.default.createElement("h2",{className:p("title")},l)),o.default.createElement("div",{className:p("content")},u&&o.default.createElement("div",{className:p("description")},u),t),o.default.createElement("div",{className:p("footer")},a?o.default.createElement("div",{className:p("button-container")},N&&o.default.createElement("button",{type:"button",className:p("css-toggle","item",{"is-selected":O}),onClick:x,onKeyDown:function(e){return S(e,x)},onBlur:g,onMouseDown:v,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(s.default,{className:p("chevron")}),o.default.createElement("span",null,"CSS"),o.default.createElement(d.default,{className:p("chevron")})),o.default.createElement("button",{type:"button",className:p("code-toggle","item",{"is-selected":b}),onClick:T,onKeyDown:function(e){return S(e,T)},onBlur:g,onMouseDown:v,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(s.default,{className:p("chevron")}),o.default.createElement("span",null,"Code"),o.default.createElement(d.default,{className:p("chevron")}))):null,o.default.createElement("div",null,O&&o.default.createElement("div",{className:p("css")},n),b&&o.default.createElement("div",{className:p("code")},a))))};y.propTypes=b,y.defaultProps={isExpanded:!1};var E=y;t.Z=E},17422:function(e,t,a){a.r(t),t.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},53560:function(e,t,a){a.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},66633:function(e,t,a){a.r(t),t.default={arrange:"Arrange-module__arrange___hY0Ml",fill:"Arrange-module__fill___m88eq",fit:"Arrange-module__fit___tv8j-",center:"Arrange-module__center___9qfhG",bottom:"Arrange-module__bottom___8beod",stretch:"Arrange-module__stretch___eQF-k",default:"Arrange-module__default___z+O29"}},78490:function(e,t,a){function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.AlignmentTypes=void 0;var l=c(a(67294)),r=c(a(45697)),o=c(a(47166)),u=c(a(66633)),i=["fitStart","fill","fitEnd","align","alignFitStart","alignFill","alignFitEnd","fitStartAttributes","fillAttributes","fitEndAttributes"];function c(e){return e&&e.__esModule?e:{default:e}}function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},s.apply(this,arguments)}function d(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function f(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?d(Object(a),!0).forEach((function(t){m(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e,t,a){return(t=function(e){var t=function(e,t){if("object"!==n(e)||null===e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var l=a.call(e,t||"default");if("object"!==n(l))return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===n(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function _(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}t.AlignmentTypes={CENTER:"center",BOTTOM:"bottom",STRETCH:"stretch"};var p=o.default.bind(u.default),b={fitStart:r.default.element,fill:r.default.element.isRequired,fitEnd:r.default.element,align:r.default.oneOf(["center","bottom","stretch"]),alignFitStart:r.default.oneOf(["center","bottom","stretch"]),alignFitEnd:r.default.oneOf(["center","bottom","stretch"]),alignFill:r.default.oneOf(["center","bottom","stretch"]),fitStartAttributes:r.default.object,fillAttributes:r.default.object,fitEndAttributes:r.default.object},g=function(e){var t=e.fitStart,a=e.fill,n=e.fitEnd,r=e.align,o=e.alignFitStart,u=e.alignFill,c=e.alignFitEnd,d=e.fitStartAttributes,m=e.fillAttributes,b=e.fitEndAttributes,g=_(e,i),v=f({},d),y=f({},m),E=f({},b);return l.default.createElement("span",s({},g,{className:p("arrange",g.className)}),l.default.createElement("span",s({},v,{className:p("fit",r||o,v.className,"fit-block")}),t),l.default.createElement("span",s({},y,{className:p("fill",r||u,y.className,"fill-block")}),a),l.default.createElement("span",s({},E,{className:p("fit",r||c,E.className)}),n))};g.propTypes=b;var v=g;t.default=v},91021:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(67294)),l=r(a(99139));function r(e){return e&&e.__esModule?e:{default:e}}function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},o.apply(this,arguments)}var u=function(e){var t=o({},e);return n.default.createElement(l.default,t,n.default.createElement("path",{d:"M24 37.7 0 14.2l3.8-3.9L24 30l20.2-19.7 3.8 3.9z"}))};u.displayName="IconChevronDown",u.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};var i=u;t.default=i},33864:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(67294)),l=r(a(99139));function r(e){return e&&e.__esModule?e:{default:e}}function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},o.apply(this,arguments)}var u=function(e){var t=o({},e);return n.default.createElement(l.default,t,n.default.createElement("path",{d:"M10.3 24 33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};u.displayName="IconChevronLeft",u.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};var i=u;t.default=i}}]);