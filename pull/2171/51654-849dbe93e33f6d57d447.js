"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[51654],{51654:function(t,e,n){var o=n(24994);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=o(n(17383)),a=o(n(34579)),l=o(n(28452)),s=o(n(63072)),d=o(n(29511)),i=o(n(96540)),r=o(n(67967)),c=o(n(31056)),p=o(n(35267));function f(t,e,n){return e=(0,s.default)(e),(0,l.default)(t,h()?Reflect.construct(e,n||[],(0,s.default)(t).constructor):e.apply(t,n))}function h(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(h=function(){return!!t})()}var k=r.default.bind(p.default),m=function(t){function e(t){var n;return(0,u.default)(this,e),(n=f(this,e,[t])).handleButtonClick=n.handleButtonClick.bind(n),n.handleRequestClose=n.handleRequestClose.bind(n),n.setButtonNode=n.setButtonNode.bind(n),n.getButtonNode=n.getButtonNode.bind(n),n.state={open:!0},n}return(0,d.default)(e,t),(0,a.default)(e,[{key:"componentDidMount",value:function(){this.forceUpdate()}},{key:"handleButtonClick",value:function(){this.setState({open:!0})}},{key:"handleRequestClose",value:function(){this.setState({open:!1})}},{key:"setButtonNode",value:function(t){this.buttonNode=t}},{key:"getButtonNode",value:function(){return this.buttonNode}},{key:"render",value:function(){return i.default.createElement("div",{id:"test-popup-area",className:k("test-popup-area")},i.default.createElement(c.default,{classNameArrow:"test-arrow",classNameContent:"test-content",contentWidth:"auto",isOpen:this.state.open,targetRef:this.getButtonNode,onRequestClose:this.handleRequestClose,isHeaderDisabled:!1},i.default.createElement("p",{className:k("popup-text")},"This is popup content with a automatic width of 400px.")),i.default.createElement("button",{type:"button",id:"default-button",onClick:this.handleButtonClick,ref:this.setButtonNode},"Default Popup"))}}])}(i.default.Component);e.default=m},35267:function(t,e,n){n.r(e),e.default={"test-popup-area":"AutomaticWidthPopup-test-module__test-popup-area___S+6x3","popup-text":"AutomaticWidthPopup-test-module__popup-text___nKTdk"}}}]);