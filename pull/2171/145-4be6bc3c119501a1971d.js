"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[145],{145:function(e,t,n){var o=n(24994);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=o(n(17383)),a=o(n(34579)),d=o(n(28452)),r=o(n(63072)),l=o(n(29511)),i=o(n(96540)),s=o(n(67967)),p=o(n(31056)),c=o(n(51236));function f(e,t,n){return t=(0,r.default)(t),(0,d.default)(e,m()?Reflect.construct(t,n||[],(0,r.default)(e).constructor):t.apply(e,n))}function m(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(m=function(){return!!e})()}var h=s.default.bind(c.default),N=function(e){function t(e){var n;return(0,u.default)(this,t),(n=f(this,t,[e])).handleButtonClick=n.handleButtonClick.bind(n),n.handleRequestClose=n.handleRequestClose.bind(n),n.setButtonNode=n.setButtonNode.bind(n),n.getButtonNode=n.getButtonNode.bind(n),n.setParentNode=n.setParentNode.bind(n),n.getParentNode=n.getParentNode.bind(n),n.state={open:!0},n}return(0,l.default)(t,e),(0,a.default)(t,[{key:"componentDidMount",value:function(){this.forceUpdate()}},{key:"handleButtonClick",value:function(){this.setState({open:!0})}},{key:"handleRequestClose",value:function(){this.setState({open:!1})}},{key:"setButtonNode",value:function(e){this.buttonNode=e}},{key:"getButtonNode",value:function(){return this.buttonNode}},{key:"setParentNode",value:function(e){this.parentNode=e}},{key:"getParentNode",value:function(){return this.parentNode}},{key:"render",value:function(){return i.default.createElement("div",{className:h("content-wrapper")},i.default.createElement("div",{id:"test-popup-area",className:h("popup-area-medium"),ref:this.setParentNode},i.default.createElement(p.default,{boundingRef:this.getParentNode,classNameArrow:"test-arrow",classNameContent:"test-content",contentHeight:"120",contentWidth:"320",isOpen:this.state.open,onRequestClose:this.handleRequestClose,targetRef:this.getButtonNode,isHeaderDisabled:!1},i.default.createElement("p",null,"This popup is 120h by 320w.")),i.default.createElement("button",{type:"button",id:"dimension-button",onClick:this.handleButtonClick,ref:this.setButtonNode},"Medium Popup")))}}])}(i.default.Component);t.default=N},51236:function(e,t,n){n.r(t),t.default={"content-wrapper":"SizePopupCommon-module__content-wrapper___phf+F","popup-area-small":"SizePopupCommon-module__popup-area-small___du4g5","popup-area-medium":"SizePopupCommon-module__popup-area-medium___VhA2D","popup-area-invalid":"SizePopupCommon-module__popup-area-invalid___bwGpY"}}}]);