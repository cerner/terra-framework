"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[67102],{67102:function(e,t,n){var a=n(24994),u=n(73738);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(94634)),l=a(n(17383)),r=a(n(34579)),i=a(n(28452)),p=a(n(63072)),d=a(n(29511)),c=a(n(43693)),s=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=u(e)&&"function"!=typeof e)return{default:e};var n=g(t);if(n&&n.has(e))return n.get(e);var a={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&{}.hasOwnProperty.call(e,l)){var r=o?Object.getOwnPropertyDescriptor(e,l):null;r&&(r.get||r.set)?Object.defineProperty(a,l,r):a[l]=e[l]}return a.default=e,n&&n.set(e,a),a}(n(96540)),f=a(n(67967)),h=a(n(31056)),C=a(n(40041));function g(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(g=function(e){return e?n:t})(e)}function m(e,t,n){return t=(0,p.default)(t),(0,i.default)(e,v()?Reflect.construct(t,n||[],(0,p.default)(e).constructor):t.apply(e,n))}function v(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(v=function(){return!!e})()}var b=f.default.bind(C.default),k=Object.keys(h.default.Opts.heights),y=Object.keys(h.default.Opts.widths),_=function(e){function t(e){var n;return(0,l.default)(this,t),n=m(this,t,[e]),(0,c.default)(n,"generateOptions",(function(e){return e.map((function(e,t){var n=t;return s.default.createElement("option",{key:n,value:e},e)}))})),n.handleButtonClick=n.handleButtonClick.bind(n),n.handleRequestClose=n.handleRequestClose.bind(n),n.setButtonNode=n.setButtonNode.bind(n),n.getButtonNode=n.getButtonNode.bind(n),n.handleSelectHeightChange=n.handleSelectHeightChange.bind(n),n.handleSelectWidthChange=n.handleSelectWidthChange.bind(n),n.state={open:!1,popupContentHeight:"Default",popupContentWidth:"Default"},n}return(0,d.default)(t,e),(0,r.default)(t,[{key:"handleButtonClick",value:function(){this.setState({open:!0})}},{key:"handleRequestClose",value:function(){this.setState({open:!1})}},{key:"handleSelectHeightChange",value:function(e){this.setState({popupContentHeight:e.target.value})}},{key:"handleSelectWidthChange",value:function(e){this.setState({popupContentWidth:e.target.value})}},{key:"getButtonNode",value:function(){return this.buttonNode}},{key:"setButtonNode",value:function(e){this.buttonNode=e}},{key:"render",value:function(){var e=this.state,t=e.open,n=e.popupContentHeight,a=e.popupContentWidth,u={};"Default"!==n&&(u.contentHeight=n),"Default"!==a&&(u.contentWidth=a);var l={};return"auto"===n&&(l.height="500px"),"auto"===a&&(l.width="500px"),s.default.createElement("div",{id:"test-popup-area",className:b("test-popup-area")},s.default.createElement("label",{htmlFor:"popupContentHeight"},"Pop Content Height"),s.default.createElement("select",{id:"popupContentHeight",name:"popupContentHeight",value:n,onChange:this.handleSelectHeightChange},s.default.createElement("option",{value:"Default"},"Default"),this.generateOptions(k)),s.default.createElement("br",null),s.default.createElement("br",null),s.default.createElement("label",{htmlFor:"popupContentWidth"},"Pop Content Width"),s.default.createElement("select",{id:"popupContentWidth",name:"popupContentWidth",value:a,onChange:this.handleSelectWidthChange},s.default.createElement("option",{value:"Default"},"Default"),this.generateOptions(y)),s.default.createElement("br",null),s.default.createElement("br",null),s.default.createElement("div",null,s.default.createElement(h.default,(0,o.default)({},u,{classNameContent:"test-content",isOpen:t,targetRef:this.getButtonNode,onRequestClose:this.handleRequestClose}),s.default.createElement("p",null,"This is a popup with custom contentWidth and contentHeight"))),s.default.createElement("button",{type:"button",id:"popup-dimensions",className:b("popup-button"),onClick:this.handleButtonClick,ref:this.setButtonNode},"Popup Dimensions"))}}])}(s.Component);t.default=_},40041:function(e,t,n){n.r(t),t.default={"test-popup-area":"PopupTypeCommon-test-module__test-popup-area___sbrcM","popup-button":"PopupTypeCommon-test-module__popup-button___-NCYt"}}}]);