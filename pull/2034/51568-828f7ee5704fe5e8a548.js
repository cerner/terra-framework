"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[51568],{51568:function(e,t,n){var o=n(22411);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=o(n(94064)),a=o(n(66024)),d=o(n(96284)),l=o(n(63532)),r=o(n(71559)),i=o(n(54216)),p=o(n(11504)),s=o(n(74824)),f=o(n(51520)),c=o(n(27808));function m(e,t,n){return t=(0,l.default)(t),(0,d.default)(e,h()?Reflect.construct(t,n||[],(0,l.default)(e).constructor):t.apply(e,n))}function h(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(h=function(){return!!e})()}var N=s.default.bind(c.default),_=function(e){function t(e){var n;return(0,u.default)(this,t),(n=m(this,t,[e])).handleButtonClick=n.handleButtonClick.bind((0,r.default)(n)),n.handleRequestClose=n.handleRequestClose.bind((0,r.default)(n)),n.setButtonNode=n.setButtonNode.bind((0,r.default)(n)),n.getButtonNode=n.getButtonNode.bind((0,r.default)(n)),n.setParentNode=n.setParentNode.bind((0,r.default)(n)),n.getParentNode=n.getParentNode.bind((0,r.default)(n)),n.state={open:!0},n}return(0,i.default)(t,e),(0,a.default)(t,[{key:"componentDidMount",value:function(){this.forceUpdate()}},{key:"handleButtonClick",value:function(){this.setState({open:!0})}},{key:"handleRequestClose",value:function(){this.setState({open:!1})}},{key:"setButtonNode",value:function(e){this.buttonNode=e}},{key:"getButtonNode",value:function(){return this.buttonNode}},{key:"setParentNode",value:function(e){this.parentNode=e}},{key:"getParentNode",value:function(){return this.parentNode}},{key:"render",value:function(){return p.default.createElement("div",{className:N("content-wrapper")},p.default.createElement("div",{id:"test-popup-area",className:N("popup-area-medium"),ref:this.setParentNode},p.default.createElement(f.default,{boundingRef:this.getParentNode,classNameArrow:"test-arrow",classNameContent:"test-content",contentHeight:"120",contentWidth:"320",isOpen:this.state.open,onRequestClose:this.handleRequestClose,targetRef:this.getButtonNode},p.default.createElement("p",null,"This popup is 120h by 320w.")),p.default.createElement("button",{type:"button",id:"dimension-button",onClick:this.handleButtonClick,ref:this.setButtonNode},"Medium Popup")))}}]),t}(p.default.Component);t.default=_},27808:function(e,t,n){n.r(t),t.default={"content-wrapper":"SizePopupCommon-module__content-wrapper___phf+F","popup-area-small":"SizePopupCommon-module__popup-area-small___du4g5","popup-area-medium":"SizePopupCommon-module__popup-area-medium___VhA2D","popup-area-invalid":"SizePopupCommon-module__popup-area-invalid___bwGpY"}}}]);