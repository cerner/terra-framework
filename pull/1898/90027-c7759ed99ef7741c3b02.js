"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[90027],{28616:function(e,t,l){var a=l(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(l(10434)),d=a(l(70215)),i=a(l(67294)),u=a(l(31501)),n=a(l(45697)),r=a(l(94184)),s=a(l(47166)),c=a(l(47341)),f=a(l(35167)),_=["header","footer","children","onRequestClose","isOpen","ariaLabel","width","closeOnOutsideClick","rootSelector"],h=s.default.bind(f.default),m={320:320,640:640,960:960,1120:1120,1280:1280,1600:1600},p={ariaLabel:n.default.string.isRequired,header:n.default.element.isRequired,footer:n.default.element.isRequired,children:n.default.node,onRequestClose:n.default.func.isRequired,isOpen:n.default.bool,width:n.default.oneOf(Object.keys(m)),closeOnOutsideClick:n.default.bool,rootSelector:n.default.string},g=function(e){var t=e.header,l=e.footer,a=e.children,n=e.onRequestClose,s=e.isOpen,f=e.ariaLabel,p=e.width,g=e.closeOnOutsideClick,v=e.rootSelector,w=(0,d.default)(e,_),M=i.default.useContext(c.default);if(!s)return null;var O=["dialog-modal-wrapper",M.className];return p in m?O.push("width-".concat(m[p])):O.push("width-1120"),i.default.createElement(u.default,{ariaLabel:f,role:"dialog",classNameModal:h(O),isOpen:s,onRequestClose:n,zIndex:"7000",closeOnOutsideClick:g,rootSelector:v},i.default.createElement("div",(0,o.default)({},w,{className:(0,r.default)(h("dialog-modal-inner-wrapper"),w.className)}),i.default.createElement("div",{className:h("dialog-modal-container")},i.default.createElement("div",null,t),i.default.createElement("div",{className:h("dialog-modal-body")},a),i.default.createElement("div",null,l))))};g.propTypes=p,g.defaultProps={children:null,isOpen:!1,width:"1120",closeOnOutsideClick:!1,rootSelector:"#root"};t.default=g},90027:function(e,t,l){var a=l(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(l(56690)),d=a(l(89728)),i=a(l(66115)),u=a(l(61655)),n=a(l(94993)),r=a(l(73808)),s=a(l(67294)),c=a(l(55281)),f=a(l(17092)),_=a(l(60377)),h=a(l(92306)),m=a(l(47166)),p=a(l(28616)),g=a(l(68457));function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var l,a=(0,r.default)(e);if(t){var o=(0,r.default)(this).constructor;l=Reflect.construct(a,arguments,o)}else l=a.apply(this,arguments);return(0,n.default)(this,l)}}var w=m.default.bind(g.default),M=function(e){(0,u.default)(l,e);var t=v(l);function l(){var e;return(0,o.default)(this,l),(e=t.call(this)).state={isOpen:!1,isPopupOpen:!1},e.handleOpenModal=e.handleOpenModal.bind((0,i.default)(e)),e.handleCloseModal=e.handleCloseModal.bind((0,i.default)(e)),e.handleButtonClick=e.handleButtonClick.bind((0,i.default)(e)),e.handleRequestClose=e.handleRequestClose.bind((0,i.default)(e)),e.setButtonNode=e.setButtonNode.bind((0,i.default)(e)),e.getButtonNode=e.getButtonNode.bind((0,i.default)(e)),e}return(0,d.default)(l,[{key:"handleOpenModal",value:function(){this.setState({isOpen:!0})}},{key:"handleCloseModal",value:function(){this.setState({isOpen:!1})}},{key:"handleButtonClick",value:function(){this.setState({isPopupOpen:!0})}},{key:"handleRequestClose",value:function(){this.setState({isPopupOpen:!1})}},{key:"setButtonNode",value:function(e){this.parentNode=e}},{key:"getButtonNode",value:function(){return this.parentNode}},{key:"render",value:function(){var e=["Lorem ipsum dolor sit amet, consectetur adipiscing elit. ","Maecenas molestie in lorem vel facilisis. Quisque ac enim nec lectus malesuada faucibus.","Integer congue feugiat ultricies."," Nunc non mauris sed tellus cursus vestibulum nec quis ipsum.","Vivamus ornare magna justo, et volutpat tortor congue ut. Nulla facilisi."," Cras in venenatis turpis. Nullam id odio justo. Etiam vehicula lectus vel purus consectetur cursus id sit amet diam.","Donec facilisis dui non orci hendrerit pharetra. Suspendisse blandit dictum turpis, in consectetur ipsum hendrerit eget.","Nam vehicula, arcu vitae egestas porttitor,","turpis nisi pulvinar neque, ut lacinia urna purus sit amet elit."];return s.default.createElement("div",null,s.default.createElement(p.default,{ariaLabel:"Dialog Modal",isOpen:this.state.isOpen,onRequestClose:this.handleCloseModal,header:s.default.createElement(f.default,{title:"Action Header used here",onClose:this.handleCloseModal}),footer:s.default.createElement(_.default,{start:"Footer Goes here"})},s.default.createElement("p",null,e),s.default.createElement(h.default,{isOpen:this.state.isPopupOpen,targetRef:this.getButtonNode,onRequestClose:this.handleRequestClose},s.default.createElement("div",{className:w("popup-content")},s.default.createElement("p",null,e),s.default.createElement("button",{type:"button"},"Test Button"),s.default.createElement("p",null,e))),s.default.createElement(c.default,{text:"Toggle popup",onClick:this.handleButtonClick,refCallback:this.setButtonNode}),s.default.createElement("p",null,e)),s.default.createElement(c.default,{id:"trigger-dialog-modal",text:"Trigger Dialog Modal",onClick:this.handleOpenModal}))}}]),l}(s.default.Component);t.default=M},35167:function(e,t,l){l.r(t),t.default={"clinical-lowlight-theme":"DialogModal-module__clinical-lowlight-theme___31DwG","orion-fusion-theme":"DialogModal-module__orion-fusion-theme___YBuu1","dialog-modal-wrapper":"DialogModal-module__dialog-modal-wrapper___R77-C","width-320":"DialogModal-module__width-320___l19d7","width-480":"DialogModal-module__width-480___SOAMl","width-560":"DialogModal-module__width-560___nY+us","width-640":"DialogModal-module__width-640___L7vK3","width-800":"DialogModal-module__width-800___txGZ4","width-960":"DialogModal-module__width-960___9FyAv","width-1120":"DialogModal-module__width-1120___9yYPn","width-1280":"DialogModal-module__width-1280___r1qux","width-1440":"DialogModal-module__width-1440___SsgFL","width-1600":"DialogModal-module__width-1600___1jMR1","width-1760":"DialogModal-module__width-1760___3X0JY","width-1920":"DialogModal-module__width-1920___qAoIQ","dialog-modal-inner-wrapper":"DialogModal-module__dialog-modal-inner-wrapper___xIeq4","dialog-modal-container":"DialogModal-module__dialog-modal-container___lDtDv","dialog-modal-header":"DialogModal-module__dialog-modal-header___TpTo4","dialog-modal-footer":"DialogModal-module__dialog-modal-footer___H1FtR","dialog-modal-body":"DialogModal-module__dialog-modal-body___rr9ng"}},68457:function(e,t,l){l.r(t),t.default={"popup-content":"DialogModalWithPopup-test-module__popup-content___JGh4I"}}}]);