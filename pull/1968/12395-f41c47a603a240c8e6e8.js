"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[12395],{12395:function(e,t,n){var u=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=u(n(67294)),a=u(n(22266)),o=u(n(50637));t.default=function(){return l.default.createElement(a.default,null,l.default.createElement(o.default,null))}},50637:function(e,t,n){var u=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=u(n(56690)),a=u(n(89728)),o=u(n(66115)),r=u(n(61655)),c=u(n(94993)),s=u(n(73808)),d=u(n(67294)),f=u(n(55281)),i=n(56019),p=u(n(23678));function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,u=(0,s.default)(e);if(t){var l=(0,s.default)(this).constructor;n=Reflect.construct(u,arguments,l)}else n=u.apply(this,arguments);return(0,c.default)(this,n)}}var v=function(e){(0,r.default)(n,e);var t=h(n);function n(e){var u;return(0,l.default)(this,n),(u=t.call(this,e)).disclose=u.disclose.bind((0,o.default)(u)),u}return(0,a.default)(n,[{key:"disclose",value:function(){this.props.disclosureManager.disclose({preferredType:"modal",size:"",content:{key:"PopupModalContent",component:d.default.createElement(p.default,null)}})}},{key:"render",value:function(){return d.default.createElement(f.default,{className:"disclose",text:"Disclose Modal",onClick:this.disclose})}}]),n}(d.default.Component);v.propTypes={disclosureManager:i.disclosureManagerShape};t.default=(0,i.withDisclosureManager)(v)},23678:function(e,t,n){var u=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=u(n(56690)),a=u(n(89728)),o=u(n(66115)),r=u(n(61655)),c=u(n(94993)),s=u(n(73808)),d=u(n(67294)),f=u(n(55281)),i=u(n(47166)),p=n(56019),h=u(n(92306)),v=u(n(2934));function m(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,u=(0,s.default)(e);if(t){var l=(0,s.default)(this).constructor;n=Reflect.construct(u,arguments,l)}else n=u.apply(this,arguments);return(0,c.default)(this,n)}}var y=i.default.bind(v.default),C=function(e){(0,r.default)(n,e);var t=m(n);function n(e){var u;return(0,l.default)(this,n),(u=t.call(this,e)).handlePopupButtonClick=u.handlePopupButtonClick.bind((0,o.default)(u)),u.handlePopupRequestClose=u.handlePopupRequestClose.bind((0,o.default)(u)),u.handlePopupOnChange=u.handlePopupOnChange.bind((0,o.default)(u)),u.state={open:!1},u}return(0,a.default)(n,[{key:"handlePopupButtonClick",value:function(){this.setState({open:!0})}},{key:"handlePopupRequestClose",value:function(){this.setState({open:!1})}},{key:"handlePopupOnChange",value:function(){this.setState({open:!1})}},{key:"render",value:function(){var e=this.props.disclosureManager;return d.default.createElement("div",{id:"test-popup-area",className:y("content-container")},d.default.createElement(h.default,{isArrowDisplayed:!0,classNameContent:"test-content",isOpen:this.state.open,onRequestClose:this.handlePopupRequestClose,targetRef:function(){return document.getElementById("popup-in-modal")}},d.default.createElement("p",null,"This is popup content"),d.default.createElement("button",{type:"button"},"Test button 1"),d.default.createElement("button",{type:"button"},"Test button 2")),d.default.createElement(f.default,{id:"popup-in-modal",className:y("popup-button"),text:"Popup In Modal",onClick:this.handlePopupButtonClick}),d.default.createElement("br",null),d.default.createElement("br",null),d.default.createElement(f.default,{className:"close-disclosure",text:"Close Disclosure",onClick:e.closeDisclosure}))}}]),n}(d.default.Component);C.propTypes={disclosureManager:p.disclosureManagerShape};t.default=(0,p.withDisclosureManager)(C)},2934:function(e,t,n){n.r(t),t.default={"content-container":"PopupModalContent-module__content-container___MPCZc","popup-button":"PopupModalContent-module__popup-button___JQjnZ"}}}]);