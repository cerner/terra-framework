"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[19624,84878,38601,57935],{22863:function(e,t,n){var a=n(64836);t.Z=void 0;var l=a(n(67294)),r=a(n(45697)),o=a(n(47166)),i=a(n(17422)),u=o.default.bind(i.default),c={name:r.default.string.isRequired,src:r.default.string,url:r.default.string,version:r.default.string.isRequired},d=function(e){var t=e.src,n=e.name,a=e.url,r=e.version,o=l.default.createElement("a",{className:u("badge"),href:a||"https://www.npmjs.org/package/".concat(n,"/v/").concat(r)},l.default.createElement("span",{className:u("badge-name")},a?"package":"npm"),l.default.createElement("span",{className:u("badge-version")},"v".concat(r))),i=t?l.default.createElement("a",{className:u("badge"),href:t},l.default.createElement("span",{className:u("badge-name")},"github"),l.default.createElement("span",{className:u("badge-version")},"source")):void 0;return l.default.createElement("div",{className:u("badge-container")},o,i)};d.propTypes=c;var s=d;t.Z=s},49271:function(e,t,n){var a=n(64836),l=n(18698);t.Z=void 0;var r=a(n(27424)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==l(e)&&"function"!=typeof e)return{default:e};var n=b(t);if(n&&n.has(e))return n.get(e);var a={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(a,o,i):a[o]=e[o]}a.default=e,n&&n.set(e,a);return a}(n(67294)),i=a(n(45697)),u=a(n(47166)),c=n(21538),d=a(n(33864)),s=a(n(23399)),f=n(51051),m=a(n(53560));function b(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(b=function(e){return e?n:t})(e)}var _=u.default.bind(m.default),p={example:i.default.element,exampleSrc:i.default.element,exampleCssSrc:i.default.element,title:i.default.string,description:i.default.node,isExpanded:i.default.bool},g=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},v=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},y=function(e){var t=e.example,n=e.exampleSrc,a=e.exampleCssSrc,l=e.title,i=e.description,u=e.isExpanded,m=(0,o.useState)(u),b=(0,r.default)(m,2),p=b[0],y=b[1],h=(0,o.useState)(!1),E=(0,r.default)(h,2),O=E[0],x=E[1],j=o.default.useContext(c.ThemeContext),w=void 0!==a,k=function(){x(!O),p&&y(!p)},N=function(){y(!p),O&&x(!O)},T=function(e,t){e.nativeEvent.keyCode!==f.KEY_SPACE&&e.nativeEvent.keyCode!==f.KEY_RETURN||(e.preventDefault(),t())};return o.default.createElement("div",{className:_("template",j.className)},o.default.createElement("div",{className:_("header")},l&&o.default.createElement("h2",{className:_("title")},l)),o.default.createElement("div",{className:_("content")},i&&o.default.createElement("div",{className:_("description")},i),t),o.default.createElement("div",{className:_("footer")},n?o.default.createElement("div",{className:_("button-container")},w&&o.default.createElement("button",{type:"button",className:_("css-toggle","item",{"is-selected":O}),onClick:k,onKeyDown:function(e){return T(e,k)},onBlur:g,onMouseDown:v,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(d.default,{className:_("chevron")}),o.default.createElement("span",null,"CSS"),o.default.createElement(s.default,{className:_("chevron")})),o.default.createElement("button",{type:"button",className:_("code-toggle","item",{"is-selected":p}),onClick:N,onKeyDown:function(e){return T(e,N)},onBlur:g,onMouseDown:v,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(d.default,{className:_("chevron")}),o.default.createElement("span",null,"Code"),o.default.createElement(s.default,{className:_("chevron")}))):null,o.default.createElement("div",null,O&&o.default.createElement("div",{className:_("css")},a),p&&o.default.createElement("div",{className:_("code")},n))))};y.propTypes=p,y.defaultProps={isExpanded:!1};var h=y;t.Z=h},17422:function(e,t,n){n.r(t),t.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},53560:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},66633:function(e,t,n){n.r(t),t.default={arrange:"Arrange-module__arrange___hY0Ml",fill:"Arrange-module__fill___m88eq",fit:"Arrange-module__fit___tv8j-",center:"Arrange-module__center___9qfhG",bottom:"Arrange-module__bottom___8beod",stretch:"Arrange-module__stretch___eQF-k",default:"Arrange-module__default___z+O29"}},12472:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Checkbox-module__clinical-lowlight-theme___J4i3C","orion-fusion-theme":"Checkbox-module__orion-fusion-theme___ZTiEC",checkbox:"Checkbox-module__checkbox___pLlkO",label:"Checkbox-module__label___96oeA","is-mobile":"Checkbox-module__is-mobile___HQ1Ax","native-input":"Checkbox-module__native-input___9pZ94","label-text":"Checkbox-module__label-text___NBjgG","is-hidden":"Checkbox-module__is-hidden___q9DyW","is-disabled":"Checkbox-module__is-disabled___pimXj","is-inline":"Checkbox-module__is-inline___8-h-C"}},78490:function(e,t,n){function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.AlignmentTypes=void 0;var l=c(n(67294)),r=c(n(45697)),o=c(n(47166)),i=c(n(66633)),u=["fitStart","fill","fitEnd","align","alignFitStart","alignFill","alignFitEnd","fitStartAttributes","fillAttributes","fitEndAttributes"];function c(e){return e&&e.__esModule?e:{default:e}}function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},d.apply(this,arguments)}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){m(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==a(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var l=n.call(e,t||"default");if("object"!==a(l))return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===a(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}t.AlignmentTypes={CENTER:"center",BOTTOM:"bottom",STRETCH:"stretch"};var _=o.default.bind(i.default),p={fitStart:r.default.element,fill:r.default.element.isRequired,fitEnd:r.default.element,align:r.default.oneOf(["center","bottom","stretch"]),alignFitStart:r.default.oneOf(["center","bottom","stretch"]),alignFitEnd:r.default.oneOf(["center","bottom","stretch"]),alignFill:r.default.oneOf(["center","bottom","stretch"]),fitStartAttributes:r.default.object,fillAttributes:r.default.object,fitEndAttributes:r.default.object},g=function(e){var t=e.fitStart,n=e.fill,a=e.fitEnd,r=e.align,o=e.alignFitStart,i=e.alignFill,c=e.alignFitEnd,s=e.fitStartAttributes,m=e.fillAttributes,p=e.fitEndAttributes,g=b(e,u),v=f({},s),y=f({},m),h=f({},p);return l.default.createElement("span",d({},g,{className:_("arrange",g.className)}),l.default.createElement("span",d({},v,{className:_("fit",r||o,v.className,"fit-block")}),t),l.default.createElement("span",d({},y,{className:_("fill",r||i,y.className,"fill-block")}),n),l.default.createElement("span",d({},h,{className:_("fit",r||c,h.className)}),a))};g.propTypes=p;t.default=g},15185:function(e,t,n){function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=f(n(67294)),r=f(n(45697)),o=f(n(94184)),i=f(n(47166)),u=f(n(47341)),c=f(n(12472)),d=f(n(84538)),s=["checked","defaultChecked","inputAttrs","id","disabled","isInline","isLabelHidden","labelText","labelTextAttrs","name","onBlur","onChange","onFocus","value"];function f(e){return e&&e.__esModule?e:{default:e}}function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},m.apply(this,arguments)}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function _(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==a(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var l=n.call(e,t||"default");if("object"!==a(l))return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===a(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var g=i.default.bind(c.default),v={checked:r.default.bool,defaultChecked:r.default.bool,id:r.default.string,inputAttrs:r.default.object,disabled:r.default.bool,isInline:r.default.bool,isLabelHidden:r.default.bool,labelText:r.default.string.isRequired,labelTextAttrs:r.default.object,name:r.default.string,onBlur:r.default.func,onChange:r.default.func,onFocus:r.default.func,value:r.default.string},y={checked:void 0,defaultChecked:void 0,id:void 0,inputAttrs:{},disabled:!1,isInline:!1,isLabelHidden:!1,labelTextAttrs:{},name:null,onBlur:void 0,onChange:void 0,onFocus:void 0,value:void 0},h=function(e){var t=e.checked,n=e.defaultChecked,a=e.inputAttrs,r=e.id,i=e.disabled,c=e.isInline,f=e.isLabelHidden,v=e.labelText,y=e.labelTextAttrs,h=e.name,E=e.onBlur,O=e.onChange,x=e.onFocus,j=e.value,w=p(e,s),k=l.default.useContext(u.default),N=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){_(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},a);void 0!==t?N.checked=t:N.defaultChecked=n;var T=(0,o.default)(g("checkbox",{"is-inline":c},k.className),w.className),C=g(["label",{"is-disabled":i},{"is-mobile":d.default.isConsideredMobileDevice()},y.className]),S=g(["native-input",a.className]),P=g(["label-text",{"is-hidden":f},{"is-mobile":d.default.isConsideredMobileDevice()}]),A=null;return f?(N["aria-label"]=v,A=l.default.createElement("span",m({},y,{className:P}))):A=l.default.createElement("span",m({},y,{className:P}),v),l.default.createElement("div",m({},w,{className:T}),l.default.createElement("label",{htmlFor:r,className:C},l.default.createElement("input",m({},N,{type:"checkbox",id:r,disabled:i,name:h,value:j,onChange:O,onFocus:x,onBlur:E,className:S})),A))};h.propTypes=v,h.defaultProps=y,h.isCheckbox=!0;t.default=h},84538:function(e){var t={isConsideredMobileDevice:function(){return window.matchMedia("(max-width: 1024px)").matches&&("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0)}};e.exports=t}}]);