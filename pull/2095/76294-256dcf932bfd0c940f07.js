"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[76294],{76294:function(t,e,n){var o=n(24994);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=o(n(17383)),a=o(n(34579)),r=o(n(28452)),l=o(n(63072)),s=o(n(12475)),d=o(n(29511)),i=o(n(96540)),c=o(n(67967)),f=o(n(31056)),p=o(n(49147));function h(t,e,n){return e=(0,l.default)(e),(0,r.default)(t,m()?Reflect.construct(e,n||[],(0,l.default)(t).constructor):e.apply(t,n))}function m(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(m=function(){return!!t})()}var b=c.default.bind(p.default),k=function(t){function e(t){var n;return(0,u.default)(this,e),(n=h(this,e,[t])).handleButtonClick=n.handleButtonClick.bind((0,s.default)(n)),n.handleRequestClose=n.handleRequestClose.bind((0,s.default)(n)),n.setButtonNode=n.setButtonNode.bind((0,s.default)(n)),n.getButtonNode=n.getButtonNode.bind((0,s.default)(n)),n.state={open:!0},n}return(0,d.default)(e,t),(0,a.default)(e,[{key:"componentDidMount",value:function(){this.forceUpdate()}},{key:"handleButtonClick",value:function(){this.setState({open:!0})}},{key:"handleRequestClose",value:function(){this.setState({open:!1})}},{key:"setButtonNode",value:function(t){this.buttonNode=t}},{key:"getButtonNode",value:function(){return this.buttonNode}},{key:"render",value:function(){return i.default.createElement("div",{id:"test-popup-area",className:b("test-popup-area")},i.default.createElement(f.default,{classNameArrow:"test-arrow",classNameContent:"test-content",contentAttachment:"middle right",isArrowDisplayed:!0,isOpen:this.state.open,onRequestClose:this.handleRequestClose,targetRef:this.getButtonNode},i.default.createElement("p",null,"this is popup content")),i.default.createElement("button",{type:"button",id:"arrow-button",className:b("arrow-button"),onClick:this.handleButtonClick,ref:this.setButtonNode},"Arrow Popup"))}}]),e}(i.default.Component);e.default=k},49147:function(t,e,n){n.r(e),e.default={"test-popup-area":"ArrowPopup-test-module__test-popup-area___DbfAI","arrow-button":"ArrowPopup-test-module__arrow-button___mrmAC"}}}]);