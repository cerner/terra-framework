"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[285],{285:function(e,t,n){var o=n(24994);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=o(n(17383)),a=o(n(34579)),d=o(n(28452)),r=o(n(63072)),s=o(n(29511)),l=o(n(96540)),i=o(n(67967)),p=o(n(31056)),c=o(n(23478));function f(e,t,n){return t=(0,r.default)(t),(0,d.default)(e,h()?Reflect.construct(t,n||[],(0,r.default)(e).constructor):t.apply(e,n))}function h(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(h=function(){return!!e})()}var N=i.default.bind(c.default),b=function(e){function t(e){var n;return(0,u.default)(this,t),(n=f(this,t,[e])).handleButtonClick=n.handleButtonClick.bind(n),n.handleRequestClose=n.handleRequestClose.bind(n),n.setButtonNode=n.setButtonNode.bind(n),n.getButtonNode=n.getButtonNode.bind(n),n.setParentNode=n.setParentNode.bind(n),n.getParentNode=n.getParentNode.bind(n),n.state={open:!0},n}return(0,s.default)(t,e),(0,a.default)(t,[{key:"componentDidMount",value:function(){this.forceUpdate()}},{key:"handleButtonClick",value:function(){this.setState({open:!0})}},{key:"handleRequestClose",value:function(){this.setState({open:!1})}},{key:"setButtonNode",value:function(e){this.buttonNode=e}},{key:"getButtonNode",value:function(){return this.buttonNode}},{key:"setParentNode",value:function(e){this.parentNode=e}},{key:"getParentNode",value:function(){return this.parentNode}},{key:"render",value:function(){return l.default.createElement("div",{id:"test-popup-area",className:N("test-popup-area"),ref:this.setParentNode},l.default.createElement(p.default,{boundingRef:this.getParentNode,contentHeight:"480",classNameArrow:"test-arrow",classNameContent:"test-content",isOpen:this.state.open,onRequestClose:this.handleRequestClose,targetRef:this.getButtonNode,isHeaderDisabled:!1},l.default.createElement("p",{className:N("popup-text")},"This popup is bounded by height.")),l.default.createElement("button",{type:"button",id:"bounded-button",onClick:this.handleButtonClick,ref:this.setButtonNode},"Bounded Height"))}}])}(l.default.Component);t.default=b},23478:function(e,t,n){n.r(t),t.default={"test-popup-area":"BoundedHeightPopup-test-module__test-popup-area___H8Lp5","popup-text":"BoundedHeightPopup-test-module__popup-text___iZY8V"}}}]);