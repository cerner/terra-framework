"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[46820],{46820:function(t,e,u){var n=u(22411);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n(u(94064)),a=n(u(66024)),l=n(u(96284)),d=n(u(63532)),s=n(u(71559)),i=n(u(54216)),r=n(u(11504)),c=n(u(74824)),f=n(u(51520)),p=n(u(3412));function h(t,e,u){return e=(0,d.default)(e),(0,l.default)(t,k()?Reflect.construct(e,u||[],(0,d.default)(t).constructor):e.apply(t,u))}function k(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(k=function(){return!!t})()}var m=c.default.bind(p.default),v=function(t){function e(t){var u;return(0,o.default)(this,e),(u=h(this,e,[t])).handleButtonClick=u.handleButtonClick.bind((0,s.default)(u)),u.handleRequestClose=u.handleRequestClose.bind((0,s.default)(u)),u.setButtonNode=u.setButtonNode.bind((0,s.default)(u)),u.getButtonNode=u.getButtonNode.bind((0,s.default)(u)),u.state={open:!0},u}return(0,i.default)(e,t),(0,a.default)(e,[{key:"componentDidMount",value:function(){this.forceUpdate()}},{key:"handleButtonClick",value:function(){this.setState({open:!0})}},{key:"handleRequestClose",value:function(){this.setState({open:!1})}},{key:"setButtonNode",value:function(t){this.buttonNode=t}},{key:"getButtonNode",value:function(){return this.buttonNode}},{key:"render",value:function(){return r.default.createElement("div",{id:"test-popup-area",className:m("test-popup-area")},r.default.createElement(f.default,{classNameArrow:"test-arrow",classNameContent:"test-content",contentWidth:"auto",isOpen:this.state.open,targetRef:this.getButtonNode,onRequestClose:this.handleRequestClose},r.default.createElement("p",{className:m("popup-text")},"This is popup content with a automatic width of 400px.")),r.default.createElement("button",{type:"button",id:"default-button",onClick:this.handleButtonClick,ref:this.setButtonNode},"Default Popup"))}}]),e}(r.default.Component);e.default=v},3412:function(t,e,u){u.r(e),e.default={"test-popup-area":"AutomaticWidthPopup-test-module__test-popup-area___S+6x3","popup-text":"AutomaticWidthPopup-test-module__popup-text___nKTdk"}}}]);