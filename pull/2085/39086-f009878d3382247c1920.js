"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[39086],{39086:function(t,e,n){var o=n(24994);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=o(n(17383)),a=o(n(34579)),l=o(n(28452)),d=o(n(63072)),s=o(n(12475)),i=o(n(29511)),r=o(n(96540)),p=o(n(67967)),c=o(n(31056)),f=o(n(40322)),m=o(n(62987));function h(t,e,n){return e=(0,d.default)(e),(0,l.default)(t,_()?Reflect.construct(e,n||[],(0,d.default)(t).constructor):e.apply(t,n))}function _(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(_=function(){return!!t})()}var C=p.default.bind(m.default),k=function(t){function e(t){var n;return(0,u.default)(this,e),(n=h(this,e,[t])).handleButtonClick=n.handleButtonClick.bind((0,s.default)(n)),n.handleRequestClose=n.handleRequestClose.bind((0,s.default)(n)),n.setButtonNode=n.setButtonNode.bind((0,s.default)(n)),n.getButtonNode=n.getButtonNode.bind((0,s.default)(n)),n.state={open:!0,size:"small"},n}return(0,i.default)(e,t),(0,a.default)(e,[{key:"componentDidMount",value:function(){this.forceUpdate()}},{key:"handleButtonClick",value:function(){this.setState({open:!0})}},{key:"handleRequestClose",value:function(){this.setState({open:!1})}},{key:"setButtonNode",value:function(t){this.buttonNode=t}},{key:"getButtonNode",value:function(){return this.buttonNode}},{key:"render",value:function(){var t=this;return r.default.createElement("div",{id:"test-popup-area",className:C("test-popup-area")},r.default.createElement(c.default,{classNameArrow:"test-arrow",classNameContent:"test-content",contentHeight:"auto",contentWidth:"auto",isArrowDisplayed:!0,isOpen:this.state.open,targetRef:this.getButtonNode,onRequestClose:this.handleRequestClose},r.default.createElement(f.default,{size:this.state.size,onClick:function(){return t.setState({size:"large"})}})),r.default.createElement("button",{type:"button",className:C("popup-button"),id:"default-button",onClick:this.handleButtonClick,ref:this.setButtonNode},"Default Popup"))}}]),e}(r.default.Component);e.default=k},40322:function(t,e,n){var o=n(24994);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=o(n(96540)),a=o(n(5556)),l=o(n(67967)),d=o(n(62383)),s=l.default.bind(d.default),i={onClick:a.default.func,size:a.default.oneOf(["small","large"])},r=function(t){var e=t.onClick,n=t.size;return u.default.createElement("div",{className:s("popup-content-".concat(n))},u.default.createElement("button",{type:"button",id:"resize-content",onClick:e},"Resize"))};r.propTypes=i;e.default=r},62987:function(t,e,n){n.r(e),e.default={"test-popup-area":"AutomaticHeightAndResizedContentCommon-module__test-popup-area___rt+22","popup-text":"AutomaticHeightAndResizedContentCommon-module__popup-text___nezmL","popup-button":"AutomaticHeightAndResizedContentCommon-module__popup-button___A7jTk"}},62383:function(t,e,n){n.r(e),e.default={"popup-content-small":"TestPopupContent-module__popup-content-small___fpyta","popup-content-large":"TestPopupContent-module__popup-content-large___-PfsO"}}}]);