"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[59407],{33317:function(e,t,n){var a=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=a(n(10434)),r=a(n(70215)),u=a(n(56690)),o=a(n(89728)),d=a(n(61655)),c=a(n(94993)),f=a(n(73808)),i=a(n(67294)),s=a(n(45697));n(57756),n(28633),n(56904);var p=["children"];function m(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=(0,f.default)(e);if(t){var l=(0,f.default)(this).constructor;n=Reflect.construct(a,arguments,l)}else n=a.apply(this,arguments);return(0,c.default)(this,n)}}var h={children:s.default.node.isRequired},v=function(e){(0,d.default)(n,e);var t=m(n);function n(){return(0,u.default)(this,n),t.apply(this,arguments)}return(0,o.default)(n,[{key:"componentDidMount",value:function(){document.body.classList.toggle("embedded-content-provider-test-template-body")}},{key:"componentWillUnmount",value:function(){document.body.classList.toggle("embedded-content-provider-test-template-body")}},{key:"render",value:function(){var e=this.props,t=e.children,n=(0,r.default)(e,p);return i.default.createElement("div",(0,l.default)({"data-embedded-content-consumer-provider-test-template":!0},n),t)}}]),n}(i.default.Component);v.propTypes=h;t.default=v},59407:function(e,t,n){var a=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=a(n(67294)),r=a(n(47166)),u=a(n(33317)),o=a(n(15653)),d=r.default.bind(o.default);t.default=function(){return l.default.createElement(u.default,null,l.default.createElement("div",{className:d("content-wrapper"),tabIndex:"0",style:{outline:"none"}},l.default.createElement("h1",null,"Embedded Application Lifecycle"),l.default.createElement("p",null,"The embedded container consumer will go through three lifecyle stages as it loads. These statuses are communicated via `data-status` attributes on the iframe wrapper and listeners can be add to listen for the lifecyle changes of the frame."),l.default.createElement("p",null,"In this example the consumer listens for each lifecyle stage and adds its status value below after a small delay (to help differentiate each lifecycle stages):"),l.default.createElement("ul",{id:"DataStatus-LifeCycleStatuses"})))}},28633:function(e,t,n){n.r(t),t.default={}},56904:function(e,t,n){n.r(t),t.default={}},15653:function(e,t,n){n.r(t),t.default={"content-wrapper":"EmbeddedContentConsumerCommon-module__content-wrapper___UX69F"}}}]);