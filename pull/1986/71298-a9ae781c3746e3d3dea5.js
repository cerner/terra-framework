"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[71298],{40996:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=c(n(67294)),r=c(n(45697)),l=c(n(19845)),o=c(n(47341)),i=c(n(66983)),u=["children"];function c(e){return e&&e.__esModule?e:{default:e}}function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},d.apply(this,arguments)}function f(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=l.default.bind(i.default),_=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},m=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},p={children:r.default.string},v=function(e){var t=e.children,n=f(e,u),r=a.default.useContext(o.default),i=(0,l.default)(s(["button",r.className]),n.className);return a.default.createElement("button",d({},n,{type:"button",className:i,onBlur:_,onMouseDown:m,"data-focus-styles-enabled":!0}),t)};v.propTypes=p;t.default=v},59278:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=u(n(67294)),r=u(n(45697)),l=u(n(19845)),o=u(n(47341)),i=u(n(30866));function u(e){return e&&e.__esModule?e:{default:e}}var c=l.default.bind(i.default),d={ariaLevel:r.default.oneOf(["2","3","4","5","6"]),children:r.default.node,variant:r.default.oneOf(["ux-recommendation","caution","deprecation","maintenance","important","not-supported"])},f=function(e){var t=e.ariaLevel,n=e.variant,r=e.children,l=a.default.useContext(o.default);return a.default.createElement("div",{className:c("notice",n,l.className)},a.default.createElement("div",{className:c("accessory"),"aria-hidden":"true",focusable:"false"}),a.default.createElement("div",{role:"heading",className:c("title"),"aria-level":t},a.default.createElement("span",null,function(e){return"ux-recommendation"===e?"UX Recommendation":"caution"===e?"Caution":"deprecation"===e?"Deprecation Notice":"maintenance"===e?"In Maintenance":"important"===e?"Important":"not-supported"===e?"Hazards for Incorrect Usage":"error"}(n))),a.default.createElement("div",{className:c("children")},function(e){return"not-supported"===e?a.default.createElement(a.default.Fragment,null,a.default.createElement("p",{className:c("paragraph")},"This component was designed and tested according to the documented implementation."),a.default.createElement("p",{className:c("paragraph")},"Using the component incorrectly:",a.default.createElement("ul",{className:c("list")},a.default.createElement("li",null,"will likely result in improper composition and create accessibility issues"),a.default.createElement("li",null,"may cause erratic or broken behaviors and styles"),a.default.createElement("li",null,a.default.createElement("strong",null,"will not be supported "),"or enhanced to allow for incorrect use")))):null}(n),a.default.Children.map(r,(function(e){return"string"==typeof e?a.default.createElement("p",null,e):e}))))};f.propTypes=d,f.defaultProps={ariaLevel:"2",variant:"important"};t.default=f},47306:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=d(n(67294)),r=d(n(45697)),l=d(n(93967)),o=d(n(19845)),i=d(n(47341)),u=d(n(42620)),c=["title"];function d(e){return e&&e.__esModule?e:{default:e}}function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},f.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var _=o.default.bind(u.default),m={title:r.default.string},p=function(e){var t=e.title,n=s(e,c),r=a.default.useContext(i.default),o=(0,l.default)(_(["placeholder",r.className]),n.className),u=_(["inner"]);return a.default.createElement("div",f({},n,{className:o}),a.default.createElement("div",{className:u},a.default.createElement("p",{className:_("title")},t)))};p.propTypes=m,p.defaultProps={title:""};t.default=p},34261:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Button",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"Notice",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"Placeholder",{enumerable:!0,get:function(){return r.default}});var a=o(n(59278)),r=o(n(47306)),l=o(n(40996));function o(e){return e&&e.__esModule?e:{default:e}}},66635:function(e,t,n){var a=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(67294)),l=a(n(19845)),o=a(n(63190)),i=l.default.bind(o.default);t.default=function(e){var t=e.children;return r.default.createElement("div",{className:i("main-content")},t)}},45664:function(e,t,n){var a=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(67294)),l=a(n(19845)),o=n(34261),i=a(n(1756)),u=l.default.bind(i.default);t.default=function(){return r.default.createElement("div",{className:u("indicator")},r.default.createElement(o.Placeholder,{title:"I'm Loading"}))}},30111:function(e,t,n){var a=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(67294)),l=a(n(19845)),o=n(34261),i=a(n(79337)),u=l.default.bind(i.default);t.default=function(){return r.default.createElement("div",{className:u("indicator")},r.default.createElement(o.Placeholder,{title:"I'm Loading More"}))}},91048:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=function(e){return new Promise((function(t){return setTimeout((function(){t(function(e){var t=!1,n=(e>=0?e:0)+1;n>9&&(t=!0);for(var a=[],r=0;r<10;r+=1)a.push({title:"Item ".concat(10*e+r),key:"unique-".concat(10*e+r)});return{nextPageKey:n,items:a,isFinalPage:t}}(e))}),2e3)}))}},68341:function(e,t,n){var a=n(64836),r=n(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=a(n(56690)),o=a(n(89728)),i=a(n(94993)),u=a(n(73808)),c=a(n(66115)),d=a(n(61655)),f=a(n(67294)),s=a(n(19845)),_=n(34261),m=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=r(e)&&"function"!=typeof e)return{default:e};var n=b(t);if(n&&n.has(e))return n.get(e);var a={__proto__:null},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=l?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(a,o,i):a[o]=e[o]}return a.default=e,n&&n.set(e,a),a}(n(45186)),p=a(n(9144)),v=a(n(45664)),h=a(n(30111)),y=a(n(66635)),g=a(n(91048));function b(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(b=function(e){return e?n:t})(e)}function O(e,t,n){return t=(0,u.default)(t),(0,i.default)(e,P()?Reflect.construct(t,n||[],(0,u.default)(e).constructor):t.apply(e,n))}function P(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(P=function(){return!!e})()}var N=s.default.bind(p.default),j=function(e){function t(e){var n;return(0,l.default)(this,t),(n=O(this,t,[e])).requestData=n.requestData.bind((0,c.default)(n)),n.state={isFinishedLoading:!1,currentPageKey:null,items:[]},n}return(0,d.default)(t,e),(0,o.default)(t,[{key:"requestData",value:function(){var e=this;(0,g.default)(this.state.currentPageKey).then((function(t){return e.setState((function(e){return{isFinishedLoading:t.isFinalPage,currentPageKey:t.nextPageKey,items:e.items.concat(t.items)}}))}))}},{key:"createItems",value:function(){return this.state.items.map((function(e){return f.default.createElement(m.Item,{key:e.key},f.default.createElement(_.Placeholder,{title:e.title,className:N("item-placeholder")}))}))}},{key:"render",value:function(){return f.default.createElement(y.default,null,f.default.createElement(m.default,{dividerStyle:"standard",isFinishedLoading:this.state.isFinishedLoading,onRequestItems:this.requestData,initialLoadingIndicator:f.default.createElement(v.default,null),progressiveLoadingIndicator:f.default.createElement(h.default,null),progressiveLoadingMessage:"Loading allergies...",ariaLabel:"Progressive Loading List"},this.createItems()))}}]),t}(f.default.Component);t.default=j},66983:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Button-module__clinical-lowlight-theme___TyZWB","orion-fusion-theme":"Button-module__orion-fusion-theme___q-FcQ",button:"Button-module__button___QuCn2","is-active":"Button-module__is-active___Z8AuK"}},30866:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Notice-module__clinical-lowlight-theme___aa5xV","orion-fusion-theme":"Notice-module__orion-fusion-theme___QAE-T",notice:"Notice-module__notice___GWkPA",children:"Notice-module__children___lDYsm",accessory:"Notice-module__accessory___wkLOG",title:"Notice-module__title___6H5tc","ux-recommendation":"Notice-module__ux-recommendation___N8BuK",caution:"Notice-module__caution___hPrVl",deprecation:"Notice-module__deprecation___g1drA",maintenance:"Notice-module__maintenance___kWLIZ",important:"Notice-module__important___p5DiF","not-supported":"Notice-module__not-supported___34bHd",paragraph:"Notice-module__paragraph___5h-w1",list:"Notice-module__list___M2Kxj"}},42620:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Placeholder-module__clinical-lowlight-theme___Obm9K","orion-fusion-theme":"Placeholder-module__orion-fusion-theme___svHY+",placeholder:"Placeholder-module__placeholder___ZZDXd",inner:"Placeholder-module__inner___fJq9o",title:"Placeholder-module__title___teBSo"}},1756:function(e,t,n){n.r(t),t.default={indicator:"MyInitialLoadingIndicator-module__indicator___YCO1r"}},79337:function(e,t,n){n.r(t),t.default={indicator:"MyProgressiveLoadingIndicator-module__indicator___guoIM"}},63190:function(e,t,n){n.r(t),t.default={placeholder:"InfiniteListDocExampleCommon-module__placeholder___+p5qG","item-content":"InfiniteListDocExampleCommon-module__item-content___wVR4Q","main-content":"InfiniteListDocExampleCommon-module__main-content___b5X2e"}},9144:function(e,t,n){n.r(t),t.default={"item-type1":"InfiniteListTestCommon-module__item-type1___i4b17","item-type2":"InfiniteListTestCommon-module__item-type2___CQpeo","item-type3":"InfiniteListTestCommon-module__item-type3___MJCOQ","item-type4":"InfiniteListTestCommon-module__item-type4___qej9q","progressive-loading-indicator":"InfiniteListTestCommon-module__progressive-loading-indicator___X24uj","item-content":"InfiniteListTestCommon-module__item-content___jBrVy","content-wrapper":"InfiniteListTestCommon-module__content-wrapper___9gVdS","infinite-list-wrapper":"InfiniteListTestCommon-module__infinite-list-wrapper___pM5U8","item-placeholder":"InfiniteListTestCommon-module__item-placeholder___ph1-s"}}}]);