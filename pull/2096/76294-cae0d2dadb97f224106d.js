"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[76294],{76294:function(t,e,n){var o=n(24994);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=o(n(17383)),a=o(n(34579)),r=o(n(28452)),l=o(n(63072)),s=o(n(29511)),d=o(n(96540)),i=o(n(67967)),c=o(n(31056)),f=o(n(49147));function p(t,e,n){return e=(0,l.default)(e),(0,r.default)(t,h()?Reflect.construct(e,n||[],(0,l.default)(t).constructor):e.apply(t,n))}function h(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(h=function(){return!!t})()}var m=i.default.bind(f.default),b=function(t){function e(t){var n;return(0,u.default)(this,e),(n=p(this,e,[t])).handleButtonClick=n.handleButtonClick.bind(n),n.handleRequestClose=n.handleRequestClose.bind(n),n.setButtonNode=n.setButtonNode.bind(n),n.getButtonNode=n.getButtonNode.bind(n),n.state={open:!0},n}return(0,s.default)(e,t),(0,a.default)(e,[{key:"componentDidMount",value:function(){this.forceUpdate()}},{key:"handleButtonClick",value:function(){this.setState({open:!0})}},{key:"handleRequestClose",value:function(){this.setState({open:!1})}},{key:"setButtonNode",value:function(t){this.buttonNode=t}},{key:"getButtonNode",value:function(){return this.buttonNode}},{key:"render",value:function(){return d.default.createElement("div",{id:"test-popup-area",className:m("test-popup-area")},d.default.createElement(c.default,{classNameArrow:"test-arrow",classNameContent:"test-content",contentAttachment:"middle right",isArrowDisplayed:!0,isOpen:this.state.open,onRequestClose:this.handleRequestClose,targetRef:this.getButtonNode},d.default.createElement("p",null,"this is popup content")),d.default.createElement("button",{type:"button",id:"arrow-button",className:m("arrow-button"),onClick:this.handleButtonClick,ref:this.setButtonNode},"Arrow Popup"))}}])}(d.default.Component);e.default=b},49147:function(t,e,n){n.r(e),e.default={"test-popup-area":"ArrowPopup-test-module__test-popup-area___DbfAI","arrow-button":"ArrowPopup-test-module__arrow-button___mrmAC"}}}]);