"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[69756],{69756:function(t,e,o){var n=o(64836);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(o(56690)),l=n(o(89728)),r=n(o(66115)),u=n(o(61655)),h=n(o(94993)),c=n(o(73808)),s=n(o(67294)),d=n(o(42285));function i(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var o,n=(0,c.default)(t);if(e){var a=(0,c.default)(this).constructor;o=Reflect.construct(n,arguments,a)}else o=n.apply(this,arguments);return(0,h.default)(this,o)}}var m=function(t){(0,u.default)(o,t);var e=i(o);function o(t){var n;return(0,a.default)(this,o),(n=e.call(this,t)).handleTargetAttachment=n.handleTargetAttachment.bind((0,r.default)(n)),n.state={attachment:"top start"},n}return(0,l.default)(o,[{key:"handleTargetAttachment",value:function(t){this.setState({attachment:t.target.value})}},{key:"render",value:function(){return s.default.createElement("div",null,s.default.createElement(d.default,{id:"attachment",hookshotContentProps:{closeOnEsc:!1,closeOnOutsideClick:!1,closeOnResize:!1},contentAttachment:"top center",type:"primary",targetAttachment:this.state.attachment,isOpen:!0}),s.default.createElement("p",null," Content attachement: top center "),s.default.createElement("p",null," Choose the target attachement: "),s.default.createElement("button",{type:"button",id:"attach-TS",value:"top start",onClick:this.handleTargetAttachment},"TOP START"),s.default.createElement("button",{type:"button",id:"attach-TC",value:"top center",onClick:this.handleTargetAttachment},"TOP CENTER"),s.default.createElement("button",{type:"button",id:"attach-TE",value:"top end",onClick:this.handleTargetAttachment},"TOP END"),s.default.createElement("button",{type:"button",id:"attach-MS",value:"middle start",onClick:this.handleTargetAttachment},"MIDDLE START"),s.default.createElement("button",{type:"button",id:"attach-MC",value:"middle center",onClick:this.handleTargetAttachment},"MIDDLE CENTER"),s.default.createElement("button",{type:"button",id:"attach-ME",value:"middle end",onClick:this.handleTargetAttachment},"MIDDLE END"),s.default.createElement("button",{type:"button",id:"attach-BS",value:"bottom start",onClick:this.handleTargetAttachment},"BOTTOM START"),s.default.createElement("button",{type:"button",id:"attach-BC",value:"bottom center",onClick:this.handleTargetAttachment},"BOTTOM CENTER"),s.default.createElement("button",{type:"button",id:"attach-BE",value:"bottom end",onClick:this.handleTargetAttachment},"BOTTOM END"))}}]),o}(s.default.Component);e.default=m},83778:function(t,e,o){var n=o(64836);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(o(67294)),l=n(o(47166)),r=n(o(29121)),u=n(o(24542)),h=l.default.bind(u.default);e.default=function(t){return a.default.createElement(r.default.Content,t,a.default.createElement("div",{className:h("hookshot-content-wrapper")},"Hookshot"))}},42285:function(t,e,o){var n=o(64836);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(o(10434)),l=n(o(70215)),r=n(o(56690)),u=n(o(89728)),h=n(o(66115)),c=n(o(61655)),s=n(o(94993)),d=n(o(73808)),i=n(o(67294)),m=n(o(47166)),f=n(o(45697)),p=n(o(29121)),_=n(o(83778)),k=n(o(24542)),v=["hookshotContentProps","id","isOpen","contentAttachment","targetAttachment","attachmentMargin","includeSvgs","type"];function g(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var o,n=(0,d.default)(t);if(e){var a=(0,d.default)(this).constructor;o=Reflect.construct(n,arguments,a)}else o=n.apply(this,arguments);return(0,s.default)(this,o)}}var C=m.default.bind(k.default),T={hookshotContentProps:f.default.any,id:f.default.string,isOpen:f.default.bool,includeSvgs:f.default.bool,contentAttachment:f.default.string,targetAttachment:f.default.string,type:f.default.string,attachmentMargin:f.default.number},b=function(t){return"middle start"===t?{vertical:"middle",horizontal:"start"}:"middle end"===t?{vertical:"middle",horizontal:"end"}:"middle center"===t?{vertical:"middle",horizontal:"center"}:"top start"===t?{vertical:"top",horizontal:"start"}:"top end"===t?{vertical:"top",horizontal:"end"}:"top center"===t?{vertical:"top",horizontal:"center"}:"bottom start"===t?{vertical:"bottom",horizontal:"start"}:"bottom end"===t?{vertical:"bottom",horizontal:"end"}:{vertical:"bottom",horizontal:"center"}},E=function(t){(0,c.default)(o,t);var e=g(o);function o(t){var n;return(0,r.default)(this,o),(n=e.call(this,t)).triggerHookshot=n.triggerHookshot.bind((0,h.default)(n)),n.handleRequestClose=n.handleRequestClose.bind((0,h.default)(n)),n.state={open:t.isOpen},n}return(0,u.default)(o,[{key:"handleRequestClose",value:function(){this.setState({open:!1})}},{key:"triggerHookshot",value:function(){this.setState({open:!0})}},{key:"render",value:function(){var t=this.props,e=t.hookshotContentProps,o=t.id,n=(t.isOpen,t.contentAttachment),r=t.targetAttachment,u=t.attachmentMargin,h=t.includeSvgs,c=t.type,s=(0,l.default)(t,v),d=i.default.createElement("div",null,i.default.createElement("svg",{id:"svg1",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",height:"2em",width:"2em"},i.default.createElement("path",{fill:"#78C346",d:"M24 0c13.3 0 24 10.7 24 24S37.3 48 24 48 0 37.3 0 24C0 10.8 10.7 0 23.9 0h.1z"}),i.default.createElement("path",{fill:"#FFF",d:"M20 36.4L6.7 23.1l3.6-3.6 9.7 9.9 17.7-17.9 3.6 3.6L20 36.4z"})),i.default.createElement("svg",{id:"svg2",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",height:"2em",width:"2em"},i.default.createElement("path",{fill:"#B1B5B6",d:"M24 0C10.7 0 0 10.7 0 24s10.7 24 24 24 24-10.7 24-24S37.3 0 24 0zm13.9 33.8l-2.1 2.1-1.2 1.2-1 .9-9.6-9.7-9.6 9.7-2.2-2.1-1.1-1.1-1-1 9.7-9.8-9.7-9.8 1-1 1.1-1.1 2.2-2.1 9.6 9.7 9.6-9.7 1 .9 1.2 1.2 2.1 2.1-9.7 9.8 9.7 9.8z"})));return i.default.createElement("div",{id:"".concat(o,"-bounds"),className:C(["wrapper","hookshot-wrapper-".concat(c)])},i.default.createElement(p.default,(0,a.default)({id:o,contentAttachment:b(n),targetAttachment:b(r),attachmentMargin:u,isEnabled:!0,isOpen:this.state.open,targetRef:function(){return document.getElementById("trigger-".concat(o))},boundingRef:function(){return document.getElementById("".concat(o,"-bounds"))}},s),i.default.createElement(_.default,{id:"".concat(o,"-content"),onEsc:e.closeOnEsc?this.handleRequestClose:void 0,onOutsideClick:e.closeOnOutsideClick?this.handleRequestClose:void 0,onResize:e.closeOnResize?this.handleRequestClose:void 0})),i.default.createElement("button",{type:"button",id:"trigger-".concat(o),className:C(["content","hookshot-".concat(c)]),onClick:this.triggerHookshot},"Trigger Hookshot"),h&&d)}}]),o}(i.default.Component);E.propTypes=T,E.defaultProps={hookshotContentProps:{},id:"hookshot",isOpen:!1,includeSvgs:!1,contentAttachment:"middle end",targetAttachment:"middle start"};e.default=E},24542:function(t,e,o){o.r(e),e.default={wrapper:"HookshotTestDocCommon-module__wrapper___4fVuR",content:"HookshotTestDocCommon-module__content___nnbLT","default-hookshot-wrapper":"HookshotTestDocCommon-module__default-hookshot-wrapper___rcvev","content-wrapper":"HookshotTestDocCommon-module__content-wrapper___uu2O7","hookshot-wrapper":"HookshotTestDocCommon-module__hookshot-wrapper___42aIJ","hookshot-content-wrapper":"HookshotTestDocCommon-module__hookshot-content-wrapper___UEwHf","hookshot-auto-flipped":"HookshotTestDocCommon-module__hookshot-auto-flipped___-y7Or","hookshot-auto-90":"HookshotTestDocCommon-module__hookshot-auto-90___sVf13","hookshot-flip-pushed":"HookshotTestDocCommon-module__hookshot-flip-pushed___n6qar","hookshot-auto-neg-90":"HookshotTestDocCommon-module__hookshot-auto-neg-90___6nGRm","hookshot-auto-pushed":"HookshotTestDocCommon-module__hookshot-auto-pushed___LMUqc","hookshot-wrapper-auto-90":"HookshotTestDocCommon-module__hookshot-wrapper-auto-90___A10vz","hookshot-wrapper-auto-neg-90":"HookshotTestDocCommon-module__hookshot-wrapper-auto-neg-90___ScRVv","hookshot-wrapper-auto-pushed":"HookshotTestDocCommon-module__hookshot-wrapper-auto-pushed___BoMtb","hookshot-wrapper-flip-pushed":"HookshotTestDocCommon-module__hookshot-wrapper-flip-pushed___xbRkR","hookshot-flip-flipped":"HookshotTestDocCommon-module__hookshot-flip-flipped___F4w-b","hookshot-none-offset":"HookshotTestDocCommon-module__hookshot-none-offset___dC460","hookshot-push-pushed":"HookshotTestDocCommon-module__hookshot-push-pushed___zVaYL","hookshot-container-right":"HookshotTestDocCommon-module__hookshot-container-right___nCSPo","hookshot-container-up":"HookshotTestDocCommon-module__hookshot-container-up___nHMGI","hookshot-container-down":"HookshotTestDocCommon-module__hookshot-container-down___4IQba","hookshot-container-left":"HookshotTestDocCommon-module__hookshot-container-left___u3+7E"}}}]);