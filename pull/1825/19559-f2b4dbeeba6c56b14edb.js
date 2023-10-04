"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[19559],{28616:function(e,l,t){var a=t(64836);Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var o=a(t(10434)),d=a(t(70215)),i=a(t(67294)),u=a(t(31501)),n=a(t(45697)),r=a(t(94184)),s=a(t(47166)),c=a(t(47341)),_=a(t(35167)),f=["header","footer","children","onRequestClose","isOpen","ariaLabel","width","closeOnOutsideClick","rootSelector"],m=s.default.bind(_.default),h={320:320,640:640,960:960,1120:1120,1280:1280,1600:1600},g={ariaLabel:n.default.string.isRequired,header:n.default.element.isRequired,footer:n.default.element.isRequired,children:n.default.node,onRequestClose:n.default.func.isRequired,isOpen:n.default.bool,width:n.default.oneOf(Object.keys(h)),closeOnOutsideClick:n.default.bool,rootSelector:n.default.string},p=function(e){var l=e.header,t=e.footer,a=e.children,n=e.onRequestClose,s=e.isOpen,_=e.ariaLabel,g=e.width,p=e.closeOnOutsideClick,w=e.rootSelector,v=(0,d.default)(e,f),M=i.default.useContext(c.default);if(!s)return null;var C=["dialog-modal-wrapper",M.className];return g in h?C.push("width-".concat(h[g])):C.push("width-1120"),i.default.createElement(u.default,{ariaLabel:_,role:"dialog",classNameModal:m(C),isOpen:s,onRequestClose:n,zIndex:"7000",closeOnOutsideClick:p,rootSelector:w},i.default.createElement("div",(0,o.default)({},v,{className:(0,r.default)(m("dialog-modal-inner-wrapper"),v.className)}),i.default.createElement("div",{className:m("dialog-modal-container")},i.default.createElement("div",null,l),i.default.createElement("div",{className:m("dialog-modal-body")},a),i.default.createElement("div",null,t))))};p.propTypes=g,p.defaultProps={children:null,isOpen:!1,width:"1120",closeOnOutsideClick:!1,rootSelector:"#root"};l.default=p},19559:function(e,l,t){var a=t(64836);Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var o=a(t(56690)),d=a(t(89728)),i=a(t(66115)),u=a(t(61655)),n=a(t(94993)),r=a(t(73808)),s=a(t(67294)),c=a(t(55281)),_=a(t(47166)),f=a(t(28616)),m=a(t(16918));function h(e){var l=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,a=(0,r.default)(e);if(l){var o=(0,r.default)(this).constructor;t=Reflect.construct(a,arguments,o)}else t=a.apply(this,arguments);return(0,n.default)(this,t)}}var g=_.default.bind(m.default),p=function(e){(0,u.default)(t,e);var l=h(t);function t(){var e;return(0,o.default)(this,t),(e=l.call(this)).state={isOpen:!1},e.handleOpenModal=e.handleOpenModal.bind((0,i.default)(e)),e.handleCloseModal=e.handleCloseModal.bind((0,i.default)(e)),e}return(0,d.default)(t,[{key:"handleOpenModal",value:function(){this.setState({isOpen:!0})}},{key:"handleCloseModal",value:function(){this.setState({isOpen:!1})}},{key:"render",value:function(){var e=["Lorem ipsum dolor sit amet, consectetur adipiscing elit. ","Maecenas molestie in lorem vel facilisis. Quisque ac enim nec lectus malesuada faucibus.","Integer congue feugiat ultricies."," Nunc non mauris sed tellus cursus vestibulum nec quis ipsum.","Vivamus ornare magna justo, et volutpat tortor congue ut. Nulla facilisi."," Cras in venenatis turpis. Nullam id odio justo. Etiam vehicula lectus vel purus consectetur cursus id sit amet diam.","Donec facilisis dui non orci hendrerit pharetra. Suspendisse blandit dictum turpis, in consectetur ipsum hendrerit eget.","Nam vehicula, arcu vitae egestas porttitor,","turpis nisi pulvinar neque, ut lacinia urna purus sit amet elit."];return s.default.createElement("div",null,s.default.createElement(f.default,{ariaLabel:"Dialog Modal",isOpen:this.state.isOpen,onRequestClose:this.handleCloseModal,header:s.default.createElement("div",{className:g("header")},"Custom Header",s.default.createElement(c.default,{id:"close-dialog-modal",text:"Close",className:g("close-button"),onClick:this.handleCloseModal})),footer:s.default.createElement("div",{className:g("footer")},"Custom Footer")},s.default.createElement("p",null,e)),s.default.createElement(c.default,{id:"trigger-dialog-modal",text:"Trigger Dialog Modal",onClick:this.handleOpenModal}))}}]),t}(s.default.Component);l.default=p},35167:function(e,l,t){t.r(l),l.default={"clinical-lowlight-theme":"DialogModal-module__clinical-lowlight-theme___31DwG","orion-fusion-theme":"DialogModal-module__orion-fusion-theme___YBuu1","dialog-modal-wrapper":"DialogModal-module__dialog-modal-wrapper___R77-C","width-320":"DialogModal-module__width-320___l19d7","width-480":"DialogModal-module__width-480___SOAMl","width-560":"DialogModal-module__width-560___nY+us","width-640":"DialogModal-module__width-640___L7vK3","width-800":"DialogModal-module__width-800___txGZ4","width-960":"DialogModal-module__width-960___9FyAv","width-1120":"DialogModal-module__width-1120___9yYPn","width-1280":"DialogModal-module__width-1280___r1qux","width-1440":"DialogModal-module__width-1440___SsgFL","width-1600":"DialogModal-module__width-1600___1jMR1","width-1760":"DialogModal-module__width-1760___3X0JY","width-1920":"DialogModal-module__width-1920___qAoIQ","dialog-modal-inner-wrapper":"DialogModal-module__dialog-modal-inner-wrapper___xIeq4","dialog-modal-container":"DialogModal-module__dialog-modal-container___lDtDv","dialog-modal-header":"DialogModal-module__dialog-modal-header___TpTo4","dialog-modal-footer":"DialogModal-module__dialog-modal-footer___H1FtR","dialog-modal-body":"DialogModal-module__dialog-modal-body___rr9ng"}},16918:function(e,l,t){t.r(l),l.default={header:"DialogModalWithCustomHeaderAndCustomFooter-test-module__header___NDaJB",footer:"DialogModalWithCustomHeaderAndCustomFooter-test-module__footer___Ex7jz","close-button":"DialogModalWithCustomHeaderAndCustomFooter-test-module__close-button___XSF3E"}}}]);