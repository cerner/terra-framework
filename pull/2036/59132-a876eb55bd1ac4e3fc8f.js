"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[59132],{59132:function(t,e,n){var o=n(22411);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=o(n(94064)),a=o(n(66024)),l=o(n(96284)),d=o(n(63532)),i=o(n(71559)),s=o(n(54216)),r=o(n(11504)),c=o(n(74824)),p=o(n(51520)),f=o(n(13840));function h(t,e,n){return e=(0,d.default)(e),(0,l.default)(t,m()?Reflect.construct(e,n||[],(0,d.default)(t).constructor):e.apply(t,n))}function m(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(m=function(){return!!t})()}var C=c.default.bind(f.default),_=function(t){function e(t){var n;return(0,u.default)(this,e),(n=h(this,e,[t])).handleButtonClick=n.handleButtonClick.bind((0,i.default)(n)),n.handleRequestClose=n.handleRequestClose.bind((0,i.default)(n)),n.setButtonNode=n.setButtonNode.bind((0,i.default)(n)),n.getButtonNode=n.getButtonNode.bind((0,i.default)(n)),n.state={open:!0},n}return(0,s.default)(e,t),(0,a.default)(e,[{key:"componentDidMount",value:function(){this.forceUpdate()}},{key:"handleButtonClick",value:function(){this.setState({open:!0})}},{key:"handleRequestClose",value:function(){this.setState({open:!1})}},{key:"setButtonNode",value:function(t){this.buttonNode=t}},{key:"getButtonNode",value:function(){return this.buttonNode}},{key:"render",value:function(){return r.default.createElement("div",{id:"test-popup-area",className:C("test-popup-area")},r.default.createElement(p.default,{classNameArrow:"test-arrow",classNameContent:"test-content",contentHeight:"auto",isOpen:this.state.open,targetRef:this.getButtonNode,onRequestClose:this.handleRequestClose},r.default.createElement("p",{className:C("popup-text")},"This is popup content with a automatic height of 400px.")),r.default.createElement("button",{type:"button",id:"default-button",onClick:this.handleButtonClick,ref:this.setButtonNode},"Default Popup"))}}]),e}(r.default.Component);e.default=_},13840:function(t,e,n){n.r(e),e.default={"test-popup-area":"AutomaticHeightAndResizedContentCommon-module__test-popup-area___rt+22","popup-text":"AutomaticHeightAndResizedContentCommon-module__popup-text___nezmL","popup-button":"AutomaticHeightAndResizedContentCommon-module__popup-button___A7jTk"}}}]);