"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[53903],{80769:function(e,t,n){var u=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=u(n(56690)),r=u(n(89728)),l=u(n(66115)),f=u(n(61655)),i=u(n(94993)),c=u(n(73808)),o=u(n(67294)),d=u(n(43671)),s=u(n(90592));function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,u=(0,c.default)(e);if(t){var a=(0,c.default)(this).constructor;n=Reflect.construct(u,arguments,a)}else n=u.apply(this,arguments);return(0,i.default)(this,n)}}var p=function(e){(0,f.default)(n,e);var t=h(n);function n(e){var u;return(0,a.default)(this,n),(u=t.call(this,e)).state={input:null},u.handleOnChange=u.handleOnChange.bind((0,l.default)(u)),u}return(0,r.default)(n,[{key:"handleOnChange",value:function(e,t){this.setState({input:t})}},{key:"render",value:function(){return o.default.createElement("div",null,o.default.createElement("div",{id:"time-input-value"},o.default.createElement("h3",null,"Time Input:",this.state.input)),o.default.createElement(d.default,{id:"timeInput",name:"time-input",onChange:this.handleOnChange,variant:s.default.FORMAT_12_HOUR,showSeconds:!0}))}}]),n}(o.default.Component);t.default=p}}]);