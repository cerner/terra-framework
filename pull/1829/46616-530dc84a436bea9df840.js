"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[46616],{46616:function(t,e,n){var o=n(64836);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=o(n(56690)),a=o(n(89728)),r=o(n(66115)),l=o(n(61655)),s=o(n(94993)),d=o(n(73808)),i=o(n(67294)),f=o(n(47166)),c=o(n(92306)),p=o(n(49680));function h(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=(0,d.default)(t);if(e){var u=(0,d.default)(this).constructor;n=Reflect.construct(o,arguments,u)}else n=o.apply(this,arguments);return(0,s.default)(this,n)}}var N=f.default.bind(p.default),m=function(t){(0,l.default)(n,t);var e=h(n);function n(t){var o;return(0,u.default)(this,n),(o=e.call(this,t)).handleButtonClick=o.handleButtonClick.bind((0,r.default)(o)),o.handleRequestClose=o.handleRequestClose.bind((0,r.default)(o)),o.setButtonNode=o.setButtonNode.bind((0,r.default)(o)),o.getButtonNode=o.getButtonNode.bind((0,r.default)(o)),o.setParentNode=o.setParentNode.bind((0,r.default)(o)),o.getParentNode=o.getParentNode.bind((0,r.default)(o)),o.state={open:!0},o}return(0,a.default)(n,[{key:"componentDidMount",value:function(){this.forceUpdate()}},{key:"handleButtonClick",value:function(){this.setState({open:!0})}},{key:"handleRequestClose",value:function(){this.setState({open:!1})}},{key:"setButtonNode",value:function(t){this.buttonNode=t}},{key:"getButtonNode",value:function(){return this.buttonNode}},{key:"setParentNode",value:function(t){this.parentNode=t}},{key:"getParentNode",value:function(){return this.parentNode}},{key:"render",value:function(){return i.default.createElement("div",{id:"test-popup-area",className:N("test-popup-area"),ref:this.setParentNode},i.default.createElement(c.default,{boundingRef:this.getParentNode,classNameArrow:"test-arrow",classNameContent:"test-content",contentAttachment:"top left",contentHeight:"120",contentWidth:"160",isArrowDisplayed:!0,isOpen:this.state.open,onRequestClose:this.handleRequestClose,targetRef:this.getButtonNode},i.default.createElement("p",{className:N("popup-text")},"This popup arrow has verital-left attachment, but was adjusted to be on the screen.")),i.default.createElement("button",{type:"button",id:"alignment-button",className:N("popup-button"),onClick:this.handleButtonClick,ref:this.setButtonNode,"aria-label":"Alignment button"},""))}}]),n}(i.default.Component);e.default=m},49680:function(t,e,n){n.r(e),e.default={"test-popup-area":"ArrowVerticalLeftAdjustmentPopup-test-module__test-popup-area___RPBiX","popup-text":"ArrowVerticalLeftAdjustmentPopup-test-module__popup-text___fE7eO","popup-button":"ArrowVerticalLeftAdjustmentPopup-test-module__popup-button___WVGn1"}}}]);