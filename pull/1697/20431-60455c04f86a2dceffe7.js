"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[20431],{68341:function(e,t,n){var i=n(64836),r=n(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n(56690)),o=i(n(89728)),u=i(n(66115)),l=i(n(61655)),s=i(n(94993)),f=i(n(73808)),c=i(n(67294)),d=i(n(47166)),m=n(75983),p=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var n=L(t);if(n&&n.has(e))return n.get(e);var i={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=a?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(i,o,u):i[o]=e[o]}i.default=e,n&&n.set(e,i);return i}(n(45186)),_=i(n(46140)),y=i(n(45664)),g=i(n(30111)),h=i(n(66635)),v=i(n(91048));function L(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(L=function(e){return e?n:t})(e)}function I(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=(0,f.default)(e);if(t){var r=(0,f.default)(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return(0,s.default)(this,n)}}var k=d.default.bind(_.default),C=function(e){(0,l.default)(n,e);var t=I(n);function n(e){var i;return(0,a.default)(this,n),(i=t.call(this,e)).requestData=i.requestData.bind((0,u.default)(i)),i.state={isFinishedLoading:!1,currentPageKey:null,items:[]},i}return(0,o.default)(n,[{key:"requestData",value:function(){var e=this;(0,v.default)(this.state.currentPageKey).then((function(t){return e.setState((function(e){return{isFinishedLoading:t.isFinalPage,currentPageKey:t.nextPageKey,items:e.items.concat(t.items)}}))}))}},{key:"createItems",value:function(){return this.state.items.map((function(e){return c.default.createElement(p.Item,{key:e.key},c.default.createElement(m.Placeholder,{title:e.title,className:k("item-placeholder")}))}))}},{key:"render",value:function(){return c.default.createElement(h.default,null,c.default.createElement(p.default,{dividerStyle:"standard",isFinishedLoading:this.state.isFinishedLoading,onRequestItems:this.requestData,initialLoadingIndicator:c.default.createElement(y.default,null),progressiveLoadingIndicator:c.default.createElement(g.default,null),progressiveLoadingMessage:"Loading allergies...",ariaLabel:"Progressive Loading List"},this.createItems()))}}]),n}(c.default.Component);t.default=C},46140:function(e,t,n){n.r(t),t.default={"item-type1":"InfiniteListTestCommon-module__item-type1___i4b17","item-type2":"InfiniteListTestCommon-module__item-type2___CQpeo","item-type3":"InfiniteListTestCommon-module__item-type3___MJCOQ","item-type4":"InfiniteListTestCommon-module__item-type4___qej9q","progressive-loading-indicator":"InfiniteListTestCommon-module__progressive-loading-indicator___X24uj","item-content":"InfiniteListTestCommon-module__item-content___jBrVy","content-wrapper":"InfiniteListTestCommon-module__content-wrapper___9gVdS","infinite-list-wrapper":"InfiniteListTestCommon-module__infinite-list-wrapper___pM5U8","item-placeholder":"InfiniteListTestCommon-module__item-placeholder___ph1-s"}}}]);