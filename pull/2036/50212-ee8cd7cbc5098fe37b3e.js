"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[50212],{50212:function(t,e,o){var n=o(22411);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(o(94064)),l=n(o(66024)),r=n(o(96284)),h=n(o(63532)),u=n(o(71559)),s=n(o(54216)),c=n(o(11504)),d=n(o(16060));function i(t,e,o){return e=(0,h.default)(e),(0,r.default)(t,m()?Reflect.construct(e,o||[],(0,h.default)(t).constructor):e.apply(t,o))}function m(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(m=function(){return!!t})()}var p=function(t){function e(t){var o;return(0,a.default)(this,e),(o=i(this,e,[t])).handleTargetAttachment=o.handleTargetAttachment.bind((0,u.default)(o)),o.state={attachment:"top start"},o}return(0,s.default)(e,t),(0,l.default)(e,[{key:"handleTargetAttachment",value:function(t){this.setState({attachment:t.target.value})}},{key:"render",value:function(){return c.default.createElement("div",null,c.default.createElement(d.default,{id:"attachment",hookshotContentProps:{closeOnEsc:!1,closeOnOutsideClick:!1,closeOnResize:!1},contentAttachment:"bottom start",type:"primary",targetAttachment:this.state.attachment,isOpen:!0}),c.default.createElement("p",null," Content attachement: bottom start "),c.default.createElement("p",null," Choose the target attachement: "),c.default.createElement("button",{type:"button",id:"attach-TS",value:"top start",onClick:this.handleTargetAttachment},"TOP START"),c.default.createElement("button",{type:"button",id:"attach-TC",value:"top center",onClick:this.handleTargetAttachment},"TOP CENTER"),c.default.createElement("button",{type:"button",id:"attach-TE",value:"top end",onClick:this.handleTargetAttachment},"TOP END"),c.default.createElement("button",{type:"button",id:"attach-MS",value:"middle start",onClick:this.handleTargetAttachment},"MIDDLE START"),c.default.createElement("button",{type:"button",id:"attach-MC",value:"middle center",onClick:this.handleTargetAttachment},"MIDDLE CENTER"),c.default.createElement("button",{type:"button",id:"attach-ME",value:"middle end",onClick:this.handleTargetAttachment},"MIDDLE END"),c.default.createElement("button",{type:"button",id:"attach-BS",value:"bottom start",onClick:this.handleTargetAttachment},"BOTTOM START"),c.default.createElement("button",{type:"button",id:"attach-BC",value:"bottom center",onClick:this.handleTargetAttachment},"BOTTOM CENTER"),c.default.createElement("button",{type:"button",id:"attach-BE",value:"bottom end",onClick:this.handleTargetAttachment},"BOTTOM END"))}}]),e}(c.default.Component);e.default=p},29208:function(t,e,o){var n=o(22411);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(o(11504)),l=n(o(74824)),r=n(o(20392)),h=n(o(3488)),u=l.default.bind(h.default);e.default=function(t){return a.default.createElement(r.default.Content,t,a.default.createElement("div",{className:u("hookshot-content-wrapper")},"Hookshot"))}},16060:function(t,e,o){var n=o(22411);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(o(82048)),l=n(o(97676)),r=n(o(94064)),h=n(o(66024)),u=n(o(96284)),s=n(o(63532)),c=n(o(71559)),d=n(o(54216)),i=n(o(11504)),m=n(o(74824)),p=n(o(3268)),f=n(o(20392)),_=n(o(29208)),k=n(o(3488)),v=["hookshotContentProps","id","isOpen","contentAttachment","targetAttachment","attachmentMargin","includeSvgs","type"];function g(t,e,o){return e=(0,s.default)(e),(0,u.default)(t,C()?Reflect.construct(e,o||[],(0,s.default)(t).constructor):e.apply(t,o))}function C(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(C=function(){return!!t})()}var T=m.default.bind(k.default),b={hookshotContentProps:p.default.any,id:p.default.string,isOpen:p.default.bool,includeSvgs:p.default.bool,contentAttachment:p.default.string,targetAttachment:p.default.string,type:p.default.string,attachmentMargin:p.default.number},E=function(t){return"middle start"===t?{vertical:"middle",horizontal:"start"}:"middle end"===t?{vertical:"middle",horizontal:"end"}:"middle center"===t?{vertical:"middle",horizontal:"center"}:"top start"===t?{vertical:"top",horizontal:"start"}:"top end"===t?{vertical:"top",horizontal:"end"}:"top center"===t?{vertical:"top",horizontal:"center"}:"bottom start"===t?{vertical:"bottom",horizontal:"start"}:"bottom end"===t?{vertical:"bottom",horizontal:"end"}:{vertical:"bottom",horizontal:"center"}},w=function(t){function e(t){var o;return(0,r.default)(this,e),(o=g(this,e,[t])).triggerHookshot=o.triggerHookshot.bind((0,c.default)(o)),o.handleRequestClose=o.handleRequestClose.bind((0,c.default)(o)),o.state={open:t.isOpen},o}return(0,d.default)(e,t),(0,h.default)(e,[{key:"handleRequestClose",value:function(){this.setState({open:!1})}},{key:"triggerHookshot",value:function(){this.setState({open:!0})}},{key:"render",value:function(){var t=this.props,e=t.hookshotContentProps,o=t.id,n=(t.isOpen,t.contentAttachment),r=t.targetAttachment,h=t.attachmentMargin,u=t.includeSvgs,s=t.type,c=(0,l.default)(t,v),d=i.default.createElement("div",null,i.default.createElement("svg",{id:"svg1",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",height:"2em",width:"2em"},i.default.createElement("path",{fill:"#78C346",d:"M24 0c13.3 0 24 10.7 24 24S37.3 48 24 48 0 37.3 0 24C0 10.8 10.7 0 23.9 0h.1z"}),i.default.createElement("path",{fill:"#FFF",d:"M20 36.4L6.7 23.1l3.6-3.6 9.7 9.9 17.7-17.9 3.6 3.6L20 36.4z"})),i.default.createElement("svg",{id:"svg2",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",height:"2em",width:"2em"},i.default.createElement("path",{fill:"#B1B5B6",d:"M24 0C10.7 0 0 10.7 0 24s10.7 24 24 24 24-10.7 24-24S37.3 0 24 0zm13.9 33.8l-2.1 2.1-1.2 1.2-1 .9-9.6-9.7-9.6 9.7-2.2-2.1-1.1-1.1-1-1 9.7-9.8-9.7-9.8 1-1 1.1-1.1 2.2-2.1 9.6 9.7 9.6-9.7 1 .9 1.2 1.2 2.1 2.1-9.7 9.8 9.7 9.8z"})));return i.default.createElement("div",{id:"".concat(o,"-bounds"),className:T(["wrapper","hookshot-wrapper-".concat(s)])},i.default.createElement(f.default,(0,a.default)({id:o,contentAttachment:E(n),targetAttachment:E(r),attachmentMargin:h,isEnabled:!0,isOpen:this.state.open,targetRef:function(){return document.getElementById("trigger-".concat(o))},boundingRef:function(){return document.getElementById("".concat(o,"-bounds"))}},c),i.default.createElement(_.default,{id:"".concat(o,"-content"),onEsc:e.closeOnEsc?this.handleRequestClose:void 0,onOutsideClick:e.closeOnOutsideClick?this.handleRequestClose:void 0,onResize:e.closeOnResize?this.handleRequestClose:void 0})),i.default.createElement("button",{type:"button",id:"trigger-".concat(o),className:T(["content","hookshot-".concat(s)]),onClick:this.triggerHookshot},"Trigger Hookshot"),u&&d)}}]),e}(i.default.Component);w.propTypes=b,w.defaultProps={hookshotContentProps:{},id:"hookshot",isOpen:!1,includeSvgs:!1,contentAttachment:"middle end",targetAttachment:"middle start"};e.default=w},3488:function(t,e,o){o.r(e),e.default={wrapper:"HookshotTestDocCommon-module__wrapper___4fVuR",content:"HookshotTestDocCommon-module__content___nnbLT","default-hookshot-wrapper":"HookshotTestDocCommon-module__default-hookshot-wrapper___rcvev","content-wrapper":"HookshotTestDocCommon-module__content-wrapper___uu2O7","hookshot-wrapper":"HookshotTestDocCommon-module__hookshot-wrapper___42aIJ","hookshot-content-wrapper":"HookshotTestDocCommon-module__hookshot-content-wrapper___UEwHf","hookshot-auto-flipped":"HookshotTestDocCommon-module__hookshot-auto-flipped___-y7Or","hookshot-auto-90":"HookshotTestDocCommon-module__hookshot-auto-90___sVf13","hookshot-flip-pushed":"HookshotTestDocCommon-module__hookshot-flip-pushed___n6qar","hookshot-auto-neg-90":"HookshotTestDocCommon-module__hookshot-auto-neg-90___6nGRm","hookshot-auto-pushed":"HookshotTestDocCommon-module__hookshot-auto-pushed___LMUqc","hookshot-wrapper-auto-90":"HookshotTestDocCommon-module__hookshot-wrapper-auto-90___A10vz","hookshot-wrapper-auto-neg-90":"HookshotTestDocCommon-module__hookshot-wrapper-auto-neg-90___ScRVv","hookshot-wrapper-auto-pushed":"HookshotTestDocCommon-module__hookshot-wrapper-auto-pushed___BoMtb","hookshot-wrapper-flip-pushed":"HookshotTestDocCommon-module__hookshot-wrapper-flip-pushed___xbRkR","hookshot-flip-flipped":"HookshotTestDocCommon-module__hookshot-flip-flipped___F4w-b","hookshot-none-offset":"HookshotTestDocCommon-module__hookshot-none-offset___dC460","hookshot-push-pushed":"HookshotTestDocCommon-module__hookshot-push-pushed___zVaYL","hookshot-container-right":"HookshotTestDocCommon-module__hookshot-container-right___nCSPo","hookshot-container-up":"HookshotTestDocCommon-module__hookshot-container-up___nHMGI","hookshot-container-down":"HookshotTestDocCommon-module__hookshot-container-down___4IQba","hookshot-container-left":"HookshotTestDocCommon-module__hookshot-container-left___u3+7E"}}}]);