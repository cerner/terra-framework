"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[62050],{62050:function(e,t,n){var u=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(n(56690)),l=u(n(89728)),o=u(n(94993)),c=u(n(73808)),a=u(n(66115)),d=u(n(61655)),i=u(n(67294)),f=u(n(19845)),m=u(n(46829)),s=u(n(71534));function _(e,t,n){return t=(0,c.default)(t),(0,o.default)(e,p()?Reflect.construct(t,n||[],(0,c.default)(e).constructor):t.apply(e,n))}function p(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(p=function(){return!!e})()}var b=f.default.bind(s.default),v=function(e){function t(e){var n;return(0,r.default)(this,t),(n=_(this,t,[e])).state={counter:1},n.increment=n.increment.bind((0,a.default)(n)),n.decrement=n.decrement.bind((0,a.default)(n)),n}return(0,d.default)(t,e),(0,l.default)(t,[{key:"increment",value:function(){this.setState((function(e){return{counter:e.counter+1}}))}},{key:"decrement",value:function(){this.setState((function(e){return{counter:e.counter-1}}))}},{key:"render",value:function(){for(var e=[],t=1;t<=this.state.counter;t+=1)e.push(i.default.createElement("div",{key:t},i.default.createElement("h2",null,"Slide"," ",t),i.default.createElement("br",null),4!==t?i.default.createElement("button",{type:"button",id:"increment-".concat(t),className:b("button"),onClick:this.increment},"Increment"):null,1!==t?i.default.createElement("button",{type:"button",id:"decrement-".concat(t),className:b("button"),onClick:this.decrement},"Decrement"):null));return i.default.createElement("div",{className:b("content-wrapper")},i.default.createElement(m.default,{items:e,id:"SlideGroup"}))}}]),t}(i.default.Component);t.default=v},71534:function(e,t,n){n.r(t),t.default={container:"SlideGroupDemo-module__container___ex4X+",slide:"SlideGroupDemo-module__slide___t5xgp","content-wrapper":"SlideGroupDemo-module__content-wrapper___QFHG8",button:"SlideGroupDemo-module__button___mNrAz","custom-slide":"SlideGroupDemo-module__custom-slide___zwZof"}}}]);