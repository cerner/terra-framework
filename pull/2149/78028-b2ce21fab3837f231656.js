"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[78028],{78028:function(e,t,n){var o=n(24994);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=o(n(17383)),a=o(n(34579)),r=o(n(28452)),l=o(n(63072)),d=o(n(29511)),s=o(n(96540)),i=o(n(67967)),c=o(n(31056)),f=o(n(66325)),p=o(n(75534));function h(e,t,n){return t=(0,l.default)(t),(0,r.default)(e,v()?Reflect.construct(t,n||[],(0,l.default)(e).constructor):t.apply(e,n))}function v(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(v=function(){return!!e})()}var B=i.default.bind(p.default),N=function(e){function t(e){var n;return(0,u.default)(this,t),(n=h(this,t,[e])).handleButtonClick=n.handleButtonClick.bind(n),n.handleRequestClose=n.handleRequestClose.bind(n),n.setButtonNode=n.setButtonNode.bind(n),n.getButtonNode=n.getButtonNode.bind(n),n.setParentNode=n.setParentNode.bind(n),n.getParentNode=n.getParentNode.bind(n),n.state={open:!0},n}return(0,d.default)(t,e),(0,a.default)(t,[{key:"componentDidMount",value:function(){this.forceUpdate()}},{key:"handleButtonClick",value:function(){this.setState({open:!0})}},{key:"handleRequestClose",value:function(){this.setState({open:!1})}},{key:"setButtonNode",value:function(e){this.buttonNode=e}},{key:"getButtonNode",value:function(){return this.buttonNode}},{key:"setParentNode",value:function(e){this.parentNode=e}},{key:"getParentNode",value:function(){return this.parentNode}},{key:"render",value:function(){return s.default.createElement("div",{id:"test-popup-area",className:B("test-popup-area"),ref:this.setParentNode},s.default.createElement(c.default,{boundingRef:this.getParentNode,classNameArrow:"test-arrow",classNameContent:"test-content",contentHeight:"240",contentWidth:"320",isOpen:this.state.open,onRequestClose:this.handleRequestClose,targetRef:this.getButtonNode,isHeaderDisabled:!0},s.default.createElement(f.default,null)),s.default.createElement("button",{type:"button",id:"bounded-button",onClick:this.handleButtonClick,ref:this.setButtonNode},"Bounded Popup"))}}])}(s.default.Component);t.default=N},66325:function(e,t,n){var o=n(24994);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=o(n(17383)),a=o(n(34579)),r=o(n(28452)),l=o(n(63072)),d=o(n(29511)),s=o(n(96540)),i=o(n(5556));function c(e,t,n){return t=(0,l.default)(t),(0,r.default)(e,f()?Reflect.construct(t,n||[],(0,l.default)(e).constructor):t.apply(e,n))}function f(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(f=function(){return!!e})()}var p=function(e){function t(){return(0,u.default)(this,t),c(this,t,arguments)}return(0,d.default)(t,e),(0,a.default)(t,[{key:"render",value:function(){return this.props.closeButtonRequired?s.default.createElement("p",null,"There is no Header and popup is Bounded"):s.default.createElement("p",null,"This is the content of the popup")}}])}(s.default.Component);p.propTypes={closeButtonRequired:i.default.bool},p.defaultProps={closeButtonRequired:!1};t.default=p},75534:function(e,t,n){n.r(t),t.default={"test-popup-area":"BoundedPopupCommon-test-module__test-popup-area___5X3J8","popup-text":"BoundedPopupCommon-test-module__popup-text___LcKqR"}}}]);