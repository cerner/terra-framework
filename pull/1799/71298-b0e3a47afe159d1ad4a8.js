"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[71298],{40996:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=c(n(67294)),r=c(n(45697)),i=c(n(47166)),l=c(n(47341)),o=c(n(66983)),u=["children"];function c(e){return e&&e.__esModule?e:{default:e}}function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},d.apply(this,arguments)}function f(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.default.bind(o.default),_=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},m=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},p={children:r.default.string},v=function(e){var t=e.children,n=f(e,u),r=a.default.useContext(l.default),o=(0,i.default)(s(["button",r.className]),n.className);return a.default.createElement("button",d({},n,{type:"button",className:o,onBlur:_,onMouseDown:m,"data-focus-styles-enabled":!0}),t)};v.propTypes=p;var h=v;t.default=h},59278:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=u(n(67294)),r=u(n(45697)),i=u(n(47166)),l=u(n(47341)),o=u(n(30866));function u(e){return e&&e.__esModule?e:{default:e}}var c=i.default.bind(o.default),d={ariaLevel:r.default.oneOf(["2","3","4","5","6"]),children:r.default.node,variant:r.default.oneOf(["ux-recommendation","caution","deprecation","maintenance","important","not-supported"])},f=function(e){var t=e.ariaLevel,n=e.variant,r=e.children,i=a.default.useContext(l.default);return a.default.createElement("div",{className:c("notice",n,i.className)},a.default.createElement("div",{className:c("accessory"),"aria-hidden":"true",focusable:"false"}),a.default.createElement("div",{role:"heading",className:c("title"),"aria-level":t},a.default.createElement("span",null,function(e){return"ux-recommendation"===e?"UX Recommendation":"caution"===e?"Caution":"deprecation"===e?"Deprecation Notice":"maintenance"===e?"In Maintenance":"important"===e?"Important":"not-supported"===e?"Hazards for Incorrect Usage":"error"}(n))),a.default.createElement("div",{className:c("children")},function(e){return"not-supported"===e?a.default.createElement(a.default.Fragment,null,a.default.createElement("p",{className:c("paragraph")},"This component was designed and tested according to the documented implementation."),a.default.createElement("p",{className:c("paragraph")},"Using the component incorrectly:",a.default.createElement("ul",{className:c("list")},a.default.createElement("li",null,"will likely result in improper composition and create accessibility issues"),a.default.createElement("li",null,"may cause erratic or broken behaviors and styles"),a.default.createElement("li",null,a.default.createElement("strong",null,"will not be supported "),"or enhanced to allow for incorrect use")))):null}(n),a.default.Children.map(r,(function(e){return"string"==typeof e?a.default.createElement("p",null,e):e}))))};f.propTypes=d,f.defaultProps={ariaLevel:"2",variant:"important"};var s=f;t.default=s},47306:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=d(n(67294)),r=d(n(45697)),i=d(n(94184)),l=d(n(47166)),o=d(n(47341)),u=d(n(42620)),c=["title"];function d(e){return e&&e.__esModule?e:{default:e}}function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},f.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var _=l.default.bind(u.default),m={title:r.default.string},p=function(e){var t=e.title,n=s(e,c),r=a.default.useContext(o.default),l=(0,i.default)(_(["placeholder",r.className]),n.className),u=_(["inner"]);return a.default.createElement("div",f({},n,{className:l}),a.default.createElement("div",{className:u},a.default.createElement("p",{className:_("title")},t)))};p.propTypes=m,p.defaultProps={title:""};var v=p;t.default=v},34261:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Button",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"Notice",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"Placeholder",{enumerable:!0,get:function(){return r.default}});var a=l(n(59278)),r=l(n(47306)),i=l(n(40996));function l(e){return e&&e.__esModule?e:{default:e}}},66635:function(e,t,n){var a=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(67294)),i=a(n(47166)),l=a(n(63190)),o=i.default.bind(l.default),u=function(e){var t=e.children;return r.default.createElement("div",{className:o("main-content")},t)};t.default=u},45664:function(e,t,n){var a=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(67294)),i=a(n(47166)),l=n(34261),o=a(n(1756)),u=i.default.bind(o.default),c=function(){return r.default.createElement("div",{className:u("indicator")},r.default.createElement(l.Placeholder,{title:"I'm Loading"}))};t.default=c},30111:function(e,t,n){var a=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(67294)),i=a(n(47166)),l=n(34261),o=a(n(79337)),u=i.default.bind(o.default),c=function(){return r.default.createElement("div",{className:u("indicator")},r.default.createElement(l.Placeholder,{title:"I'm Loading More"}))};t.default=c},91048:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){return new Promise((function(t){return setTimeout((function(){t(function(e){var t=!1,n=(e>=0?e:0)+1;n>9&&(t=!0);for(var a=[],r=0;r<10;r+=1)a.push({title:"Item ".concat(10*e+r),key:"unique-".concat(10*e+r)});return{nextPageKey:n,items:a,isFinalPage:t}}(e))}),2e3)}))};t.default=n},68341:function(e,t,n){var a=n(64836),r=n(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(56690)),l=a(n(89728)),o=a(n(66115)),u=a(n(61655)),c=a(n(94993)),d=a(n(73808)),f=a(n(67294)),s=a(n(47166)),_=n(34261),m=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var n=b(t);if(n&&n.has(e))return n.get(e);var a={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var o=i?Object.getOwnPropertyDescriptor(e,l):null;o&&(o.get||o.set)?Object.defineProperty(a,l,o):a[l]=e[l]}a.default=e,n&&n.set(e,a);return a}(n(45186)),p=a(n(9144)),v=a(n(45664)),h=a(n(30111)),y=a(n(66635)),g=a(n(91048));function b(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(b=function(e){return e?n:t})(e)}function O(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=(0,d.default)(e);if(t){var r=(0,d.default)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return(0,c.default)(this,n)}}var P=s.default.bind(p.default),N=function(e){(0,u.default)(n,e);var t=O(n);function n(e){var a;return(0,i.default)(this,n),(a=t.call(this,e)).requestData=a.requestData.bind((0,o.default)(a)),a.state={isFinishedLoading:!1,currentPageKey:null,items:[]},a}return(0,l.default)(n,[{key:"requestData",value:function(){var e=this;(0,g.default)(this.state.currentPageKey).then((function(t){return e.setState((function(e){return{isFinishedLoading:t.isFinalPage,currentPageKey:t.nextPageKey,items:e.items.concat(t.items)}}))}))}},{key:"createItems",value:function(){return this.state.items.map((function(e){return f.default.createElement(m.Item,{key:e.key},f.default.createElement(_.Placeholder,{title:e.title,className:P("item-placeholder")}))}))}},{key:"render",value:function(){return f.default.createElement(y.default,null,f.default.createElement(m.default,{dividerStyle:"standard",isFinishedLoading:this.state.isFinishedLoading,onRequestItems:this.requestData,initialLoadingIndicator:f.default.createElement(v.default,null),progressiveLoadingIndicator:f.default.createElement(h.default,null),progressiveLoadingMessage:"Loading allergies...",ariaLabel:"Progressive Loading List"},this.createItems()))}}]),n}(f.default.Component);t.default=N},66983:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Button-module__clinical-lowlight-theme___TyZWB","orion-fusion-theme":"Button-module__orion-fusion-theme___q-FcQ",button:"Button-module__button___QuCn2","is-active":"Button-module__is-active___Z8AuK"}},30866:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Notice-module__clinical-lowlight-theme___aa5xV","orion-fusion-theme":"Notice-module__orion-fusion-theme___QAE-T",notice:"Notice-module__notice___GWkPA",children:"Notice-module__children___lDYsm",accessory:"Notice-module__accessory___wkLOG",title:"Notice-module__title___6H5tc","ux-recommendation":"Notice-module__ux-recommendation___N8BuK",caution:"Notice-module__caution___hPrVl",deprecation:"Notice-module__deprecation___g1drA",maintenance:"Notice-module__maintenance___kWLIZ",important:"Notice-module__important___p5DiF","not-supported":"Notice-module__not-supported___34bHd",paragraph:"Notice-module__paragraph___5h-w1",list:"Notice-module__list___M2Kxj"}},42620:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Placeholder-module__clinical-lowlight-theme___Obm9K","orion-fusion-theme":"Placeholder-module__orion-fusion-theme___svHY+",placeholder:"Placeholder-module__placeholder___ZZDXd",inner:"Placeholder-module__inner___fJq9o",title:"Placeholder-module__title___teBSo"}},1756:function(e,t,n){n.r(t),t.default={indicator:"MyInitialLoadingIndicator-module__indicator___YCO1r"}},79337:function(e,t,n){n.r(t),t.default={indicator:"MyProgressiveLoadingIndicator-module__indicator___guoIM"}},63190:function(e,t,n){n.r(t),t.default={placeholder:"InfiniteListDocExampleCommon-module__placeholder___+p5qG","item-content":"InfiniteListDocExampleCommon-module__item-content___wVR4Q","main-content":"InfiniteListDocExampleCommon-module__main-content___b5X2e"}},9144:function(e,t,n){n.r(t),t.default={"item-type1":"InfiniteListTestCommon-module__item-type1___i4b17","item-type2":"InfiniteListTestCommon-module__item-type2___CQpeo","item-type3":"InfiniteListTestCommon-module__item-type3___MJCOQ","item-type4":"InfiniteListTestCommon-module__item-type4___qej9q","progressive-loading-indicator":"InfiniteListTestCommon-module__progressive-loading-indicator___X24uj","item-content":"InfiniteListTestCommon-module__item-content___jBrVy","content-wrapper":"InfiniteListTestCommon-module__content-wrapper___9gVdS","infinite-list-wrapper":"InfiniteListTestCommon-module__infinite-list-wrapper___pM5U8","item-placeholder":"InfiniteListTestCommon-module__item-placeholder___ph1-s"}}}]);