/*! For license information please see 88857-b861c12d409241155c5c.js.LICENSE.txt */
(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[88857],{66635:function(e,t,n){"use strict";var r=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(67294)),o=r(n(47166)),i=r(n(63190)),l=o.default.bind(i.default),u=function(e){var t=e.children;return a.default.createElement("div",{className:l("main-content")},t)};t.default=u},45664:function(e,t,n){"use strict";var r=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(67294)),o=r(n(47166)),i=n(75983),l=r(n(1756)),u=o.default.bind(l.default),c=function(){return a.default.createElement("div",{className:u("indicator")},a.default.createElement(i.Placeholder,{title:"I'm Loading"}))};t.default=c},30111:function(e,t,n){"use strict";var r=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(67294)),o=r(n(47166)),i=n(75983),l=r(n(79337)),u=o.default.bind(l.default),c=function(){return a.default.createElement("div",{className:u("indicator")},a.default.createElement(i.Placeholder,{title:"I'm Loading More"}))};t.default=c},91048:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){return new Promise((function(t){return setTimeout((function(){t(function(e){var t=!1,n=(e>=0?e:0)+1;n>9&&(t=!0);for(var r=[],a=0;a<10;a+=1)r.push({title:"Item ".concat(10*e+a),key:"unique-".concat(10*e+a)});return{nextPageKey:n,items:r,isFinalPage:t}}(e))}),2e3)}))};t.default=n},1756:function(e,t,n){"use strict";n.r(t),t.default={indicator:"MyInitialLoadingIndicator-module__indicator___YCO1r"}},79337:function(e,t,n){"use strict";n.r(t),t.default={indicator:"MyProgressiveLoadingIndicator-module__indicator___guoIM"}},63190:function(e,t,n){"use strict";n.r(t),t.default={placeholder:"InfiniteListDocExampleCommon-module__placeholder___+p5qG","item-content":"InfiniteListDocExampleCommon-module__item-content___wVR4Q","main-content":"InfiniteListDocExampleCommon-module__main-content___b5X2e"}},59088:function(e,t,n){"use strict";n.r(t),t.default={"clinical-lowlight-theme":"Button-module__clinical-lowlight-theme___TSAYW","orion-fusion-theme":"Button-module__orion-fusion-theme___96AL7",button:"Button-module__button___v+HKw","is-active":"Button-module__is-active___ypcX2"}},92977:function(e,t,n){"use strict";n.r(t),t.default={"clinical-lowlight-theme":"Notice-module__clinical-lowlight-theme___pTExk","orion-fusion-theme":"Notice-module__orion-fusion-theme___PF+qo",notice:"Notice-module__notice___WorbQ",children:"Notice-module__children___Mtqhu",accessory:"Notice-module__accessory___1zdDg",title:"Notice-module__title___5gv-b","ux-recommendation":"Notice-module__ux-recommendation___+II9D",caution:"Notice-module__caution___048ot",deprecation:"Notice-module__deprecation___s+V2d",maintenance:"Notice-module__maintenance___TCmi1",important:"Notice-module__important___eBEgg","not-supported":"Notice-module__not-supported___W-Jcy",paragraph:"Notice-module__paragraph___YTZe3",list:"Notice-module__list___1Yd9S"}},4365:function(e,t,n){"use strict";n.r(t),t.default={"clinical-lowlight-theme":"Placeholder-module__clinical-lowlight-theme___KIp+p","orion-fusion-theme":"Placeholder-module__orion-fusion-theme___5tg-n",placeholder:"Placeholder-module__placeholder___a1DlK",inner:"Placeholder-module__inner___eQKWp",title:"Placeholder-module__title___-1dNV"}},98545:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=c(n(67294)),a=c(n(14824)),o=c(n(15471)),i=c(n(47341)),l=c(n(59088)),u=["children"];function c(e){return e&&e.__esModule?e:{default:e}}function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},d.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var f=o.default.bind(l.default),_=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},p=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},m={children:a.default.string},h=function(e){var t=e.children,n=s(e,u),a=r.default.useContext(i.default),l=(0,o.default)(f(["button",a.className]),n.className);return r.default.createElement("button",d({},n,{type:"button",className:l,onBlur:_,onMouseDown:p,"data-focus-styles-enabled":!0}),t)};h.propTypes=m;var v=h;t.default=v},21369:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(n(67294)),a=u(n(14824)),o=u(n(15471)),i=u(n(47341)),l=u(n(92977));function u(e){return e&&e.__esModule?e:{default:e}}var c=o.default.bind(l.default),d={ariaLevel:a.default.oneOf(["2","3","4","5","6"]),children:a.default.node,variant:a.default.oneOf(["ux-recommendation","caution","deprecation","maintenance","important","not-supported"])},s=function(e){var t=e.ariaLevel,n=e.variant,a=e.children,o=r.default.useContext(i.default);return r.default.createElement("div",{className:c("notice",n,o.className)},r.default.createElement("div",{className:c("accessory"),"aria-hidden":"true",focusable:"false"}),r.default.createElement("div",{role:"heading",className:c("title"),"aria-level":t},r.default.createElement("span",null,function(e){return"ux-recommendation"===e?"UX Recommendation":"caution"===e?"Caution":"deprecation"===e?"Deprecation Notice":"maintenance"===e?"In Maintenance":"important"===e?"Important":"not-supported"===e?"Hazards for Incorrect Usage":"error"}(n))),r.default.createElement("div",{className:c("children")},function(e){return"not-supported"===e?r.default.createElement(r.default.Fragment,null,r.default.createElement("p",{className:c("paragraph")},"This component was designed and tested according to the documented implementation."),r.default.createElement("p",{className:c("paragraph")},"Using the component incorrectly:",r.default.createElement("ul",{className:c("list")},r.default.createElement("li",null,"will likely result in improper composition and create accessibility issues"),r.default.createElement("li",null,"may cause erratic or broken behaviors and styles"),r.default.createElement("li",null,r.default.createElement("strong",null,"will not be supported "),"or enhanced to allow for incorrect use")))):null}(n),r.default.Children.map(a,(function(e){return"string"==typeof e?r.default.createElement("p",null,e):e}))))};s.propTypes=d,s.defaultProps={ariaLevel:"2",variant:"important"};var f=s;t.default=f},63031:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=d(n(67294)),a=d(n(14824)),o=d(n(15321)),i=d(n(15471)),l=d(n(47341)),u=d(n(4365)),c=["title"];function d(e){return e&&e.__esModule?e:{default:e}}function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}function f(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var _=i.default.bind(u.default),p={title:a.default.string},m=function(e){var t=e.title,n=f(e,c),a=r.default.useContext(l.default),i=(0,o.default)(_(["placeholder",a.className]),n.className),u=_(["inner"]);return r.default.createElement("div",s({},n,{className:i}),r.default.createElement("div",{className:u},r.default.createElement("p",{className:_("title")},t)))};m.propTypes=p,m.defaultProps={title:""};var h=m;t.default=h},75983:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Button",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"Notice",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"Placeholder",{enumerable:!0,get:function(){return a.default}});var r=i(n(21369)),a=i(n(63031)),o=i(n(98545));function i(e){return e&&e.__esModule?e:{default:e}}},15471:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(this&&this[n]||n);else if(Array.isArray(n))e.push(a.apply(this,n));else if("object"===o){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var i in n)r.call(n,i)&&n[i]&&e.push(this&&this[i]||i)}}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()},15321:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)){if(n.length){var i=a.apply(null,n);i&&e.push(i)}}else if("object"===o){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var l in n)r.call(n,l)&&n[l]&&e.push(l)}}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()},95860:function(e,t,n){"use strict";var r=n(54770);function a(){}function o(){}o.resetWarningCache=a,e.exports=function(){function e(e,t,n,a,o,i){if(i!==r){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:a};return n.PropTypes=n,n}},14824:function(e,t,n){e.exports=n(95860)()},54770:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);