/*! For license information please see 52868-320331ae16fcc1effd2f.js.LICENSE.txt */
(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[52868],{49271:function(e,t,n){"use strict";var a=n(64836),l=n(18698);t.Z=void 0;var r=a(n(27424)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==l(e)&&"function"!=typeof e)return{default:e};var n=m(t);if(n&&n.has(e))return n.get(e);var a={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=r?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(a,o,u):a[o]=e[o]}a.default=e,n&&n.set(e,a);return a}(n(67294)),u=a(n(45697)),i=a(n(47166)),c=n(21538),s=a(n(33864)),d=a(n(23399)),f=n(51051),p=a(n(53560));function m(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(m=function(e){return e?n:t})(e)}var _=i.default.bind(p.default),v={example:u.default.element,exampleSrc:u.default.element,exampleCssSrc:u.default.element,title:u.default.string,description:u.default.node,isExpanded:u.default.bool},h=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},y=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},b=function(e){var t=e.example,n=e.exampleSrc,a=e.exampleCssSrc,l=e.title,u=e.description,i=e.isExpanded,p=(0,o.useState)(i),m=(0,r.default)(p,2),v=m[0],b=m[1],g=(0,o.useState)(!1),E=(0,r.default)(g,2),O=E[0],N=E[1],x=o.default.useContext(c.ThemeContext),w=void 0!==a,T=function(){N(!O),v&&b(!v)},P=function(){b(!v),O&&N(!O)},j=function(e,t){e.nativeEvent.keyCode!==f.KEY_SPACE&&e.nativeEvent.keyCode!==f.KEY_RETURN||(e.preventDefault(),t())};return o.default.createElement("div",{className:_("template",x.className)},o.default.createElement("div",{className:_("header")},l&&o.default.createElement("h2",{className:_("title")},l)),o.default.createElement("div",{className:_("content")},u&&o.default.createElement("div",{className:_("description")},u),t),o.default.createElement("div",{className:_("footer")},n?o.default.createElement("div",{className:_("button-container")},w&&o.default.createElement("button",{type:"button",className:_("css-toggle","item",{"is-selected":O}),onClick:T,onKeyDown:function(e){return j(e,T)},onBlur:h,onMouseDown:y,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(s.default,{className:_("chevron")}),o.default.createElement("span",null,"CSS"),o.default.createElement(d.default,{className:_("chevron")})),o.default.createElement("button",{type:"button",className:_("code-toggle","item",{"is-selected":v}),onClick:P,onKeyDown:function(e){return j(e,P)},onBlur:h,onMouseDown:y,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(s.default,{className:_("chevron")}),o.default.createElement("span",null,"Code"),o.default.createElement(d.default,{className:_("chevron")}))):null,o.default.createElement("div",null,O&&o.default.createElement("div",{className:_("css")},a),v&&o.default.createElement("div",{className:_("code")},n))))};b.propTypes=v,b.defaultProps={isExpanded:!1};var g=b;t.Z=g},53560:function(e,t,n){"use strict";n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},59088:function(e,t,n){"use strict";n.r(t),t.default={"clinical-lowlight-theme":"Button-module__clinical-lowlight-theme___TSAYW","orion-fusion-theme":"Button-module__orion-fusion-theme___96AL7",button:"Button-module__button___v+HKw","is-active":"Button-module__is-active___ypcX2"}},92977:function(e,t,n){"use strict";n.r(t),t.default={"clinical-lowlight-theme":"Notice-module__clinical-lowlight-theme___pTExk","orion-fusion-theme":"Notice-module__orion-fusion-theme___PF+qo",notice:"Notice-module__notice___WorbQ",children:"Notice-module__children___Mtqhu",accessory:"Notice-module__accessory___1zdDg",title:"Notice-module__title___5gv-b","ux-recommendation":"Notice-module__ux-recommendation___+II9D",caution:"Notice-module__caution___048ot",deprecation:"Notice-module__deprecation___s+V2d",maintenance:"Notice-module__maintenance___TCmi1",important:"Notice-module__important___eBEgg","not-supported":"Notice-module__not-supported___W-Jcy",paragraph:"Notice-module__paragraph___YTZe3",list:"Notice-module__list___1Yd9S"}},4365:function(e,t,n){"use strict";n.r(t),t.default={"clinical-lowlight-theme":"Placeholder-module__clinical-lowlight-theme___KIp+p","orion-fusion-theme":"Placeholder-module__orion-fusion-theme___5tg-n",placeholder:"Placeholder-module__placeholder___a1DlK",inner:"Placeholder-module__inner___eQKWp",title:"Placeholder-module__title___-1dNV"}},33864:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(67294)),l=r(n(99139));function r(e){return e&&e.__esModule?e:{default:e}}function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}var u=function(e){var t=o({},e);return a.default.createElement(l.default,t,a.default.createElement("path",{d:"M10.3 24L33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};u.displayName="IconChevronLeft",u.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isBidi:!0};var i=u;t.default=i},98545:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=c(n(67294)),l=c(n(14824)),r=c(n(15471)),o=c(n(47341)),u=c(n(59088)),i=["children"];function c(e){return e&&e.__esModule?e:{default:e}}function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},s.apply(this,arguments)}function d(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var f=r.default.bind(u.default),p=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},m=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},_={children:l.default.string},v=function(e){var t=e.children,n=d(e,i),l=a.default.useContext(o.default),u=(0,r.default)(f(["button",l.className]),n.className);return a.default.createElement("button",s({},n,{type:"button",className:u,onBlur:p,onMouseDown:m,"data-focus-styles-enabled":!0}),t)};v.propTypes=_;var h=v;t.default=h},21369:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n(67294)),l=i(n(14824)),r=i(n(15471)),o=i(n(47341)),u=i(n(92977));function i(e){return e&&e.__esModule?e:{default:e}}var c=r.default.bind(u.default),s={ariaLevel:l.default.oneOf(["2","3","4","5","6"]),children:l.default.node,variant:l.default.oneOf(["ux-recommendation","caution","deprecation","maintenance","important","not-supported"])},d=function(e){var t=e.ariaLevel,n=e.variant,l=e.children,r=a.default.useContext(o.default);return a.default.createElement("div",{className:c("notice",n,r.className)},a.default.createElement("div",{className:c("accessory"),"aria-hidden":"true",focusable:"false"}),a.default.createElement("div",{role:"heading",className:c("title"),"aria-level":t},a.default.createElement("span",null,function(e){return"ux-recommendation"===e?"UX Recommendation":"caution"===e?"Caution":"deprecation"===e?"Deprecation Notice":"maintenance"===e?"In Maintenance":"important"===e?"Important":"not-supported"===e?"Hazards for Incorrect Usage":"error"}(n))),a.default.createElement("div",{className:c("children")},function(e){return"not-supported"===e?a.default.createElement(a.default.Fragment,null,a.default.createElement("p",{className:c("paragraph")},"This component was designed and tested according to the documented implementation."),a.default.createElement("p",{className:c("paragraph")},"Using the component incorrectly:",a.default.createElement("ul",{className:c("list")},a.default.createElement("li",null,"will likely result in improper composition and create accessibility issues"),a.default.createElement("li",null,"may cause erratic or broken behaviors and styles"),a.default.createElement("li",null,a.default.createElement("strong",null,"will not be supported "),"or enhanced to allow for incorrect use")))):null}(n),a.default.Children.map(l,(function(e){return"string"==typeof e?a.default.createElement("p",null,e):e}))))};d.propTypes=s,d.defaultProps={ariaLevel:"2",variant:"important"};var f=d;t.default=f},63031:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=s(n(67294)),l=s(n(14824)),r=s(n(15321)),o=s(n(15471)),u=s(n(47341)),i=s(n(4365)),c=["title"];function s(e){return e&&e.__esModule?e:{default:e}}function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},d.apply(this,arguments)}function f(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=o.default.bind(i.default),m={title:l.default.string},_=function(e){var t=e.title,n=f(e,c),l=a.default.useContext(u.default),o=(0,r.default)(p(["placeholder",l.className]),n.className),i=p(["inner"]);return a.default.createElement("div",d({},n,{className:o}),a.default.createElement("div",{className:i},a.default.createElement("p",{className:p("title")},t)))};_.propTypes=m,_.defaultProps={title:""};var v=_;t.default=v},75983:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Button",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"Notice",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"Placeholder",{enumerable:!0,get:function(){return l.default}});var a=o(n(21369)),l=o(n(63031)),r=o(n(98545));function o(e){return e&&e.__esModule?e:{default:e}}},15471:function(e,t){var n;!function(){"use strict";var a={}.hasOwnProperty;function l(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var r=typeof n;if("string"===r||"number"===r)e.push(this&&this[n]||n);else if(Array.isArray(n))e.push(l.apply(this,n));else if("object"===r){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var o in n)a.call(n,o)&&n[o]&&e.push(this&&this[o]||o)}}}return e.join(" ")}e.exports?(l.default=l,e.exports=l):void 0===(n=function(){return l}.apply(t,[]))||(e.exports=n)}()},15321:function(e,t){var n;!function(){"use strict";var a={}.hasOwnProperty;function l(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var r=typeof n;if("string"===r||"number"===r)e.push(n);else if(Array.isArray(n)){if(n.length){var o=l.apply(null,n);o&&e.push(o)}}else if("object"===r){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var u in n)a.call(n,u)&&n[u]&&e.push(u)}}}return e.join(" ")}e.exports?(l.default=l,e.exports=l):void 0===(n=function(){return l}.apply(t,[]))||(e.exports=n)}()},95860:function(e,t,n){"use strict";var a=n(54770);function l(){}function r(){}r.resetWarningCache=l,e.exports=function(){function e(e,t,n,l,r,o){if(o!==a){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:r,resetWarningCache:l};return n.PropTypes=n,n}},14824:function(e,t,n){e.exports=n(95860)()},54770:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);