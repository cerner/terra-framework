"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[89705],{89705:function(e,t,l){var a=l(24994);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(l(17383)),o=a(l(34579)),u=a(l(28452)),d=a(l(63072)),r=a(l(29511)),s=a(l(96540)),c=a(l(20605));function i(e,t,l){return t=(0,d.default)(t),(0,u.default)(e,f()?Reflect.construct(t,l||[],(0,d.default)(e).constructor):t.apply(e,l))}function f(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(f=function(){return!!e})()}l(27639);var p=function(e){function t(){var e;return(0,n.default)(this,t),(e=i(this,t)).state={isOpen:!1},e.handleOpenModal=e.handleOpenModal.bind(e),e.handleCloseModal=e.handleCloseModal.bind(e),e}return(0,r.default)(t,e),(0,o.default)(t,[{key:"handleOpenModal",value:function(){this.setState({isOpen:!0})}},{key:"handleCloseModal",value:function(){this.setState({isOpen:!1})}},{key:"render",value:function(){return s.default.createElement("div",null,s.default.createElement(c.default,{ariaLabel:"Terra Modal",isOpen:this.state.isOpen,isFullscreen:!0,onRequestClose:this.handleCloseModal,classNameModal:"test-background-class"},s.default.createElement("div",null,s.default.createElement("h1",null,"Terra Modal"),s.default.createElement("h2",null,"Subtitle"),s.default.createElement("hr",null),s.default.createElement("p",null,"The Terra Modal is appended to the document body."),s.default.createElement("p",null,"Modal is assigned a role of 'document' for accessibility."),s.default.createElement("button",{type:"button",id:"modal-button",onClick:this.handleCloseModal},"Close Modal"))),s.default.createElement("button",{type:"button",id:"modal-open-button",onClick:this.handleOpenModal},"Open isOpen modal"))}}])}(s.default.Component);t.default=p},27639:function(e,t,l){l.r(t),t.default={}}}]);