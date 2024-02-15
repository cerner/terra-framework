"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[25988],{25988:function(t,e,o){var n=o(22411);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(o(94064)),l=n(o(66024)),h=n(o(96284)),r=n(o(63532)),s=n(o(71559)),c=n(o(54216)),d=n(o(11504)),u=n(o(16060));function i(t,e,o){return e=(0,r.default)(e),(0,h.default)(t,m()?Reflect.construct(e,o||[],(0,r.default)(t).constructor):e.apply(t,o))}function m(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(m=function(){return!!t})()}var p=function(t){function e(t){var o;return(0,a.default)(this,e),(o=i(this,e,[t])).handleTargetAttachment=o.handleTargetAttachment.bind((0,s.default)(o)),o.state={attachment:"middle start"},o}return(0,c.default)(e,t),(0,l.default)(e,[{key:"handleTargetAttachment",value:function(t){this.setState({attachment:t.target.value})}},{key:"render",value:function(){var t;return"middle start"===this.state.attachment?t="middle end":"middle end"===this.state.attachment?t="middle start":"middle center"===this.state.attachment?t="middle center":"top start"===this.state.attachment?t="bottom end":"top end"===this.state.attachment?t="bottom start":"top center"===this.state.attachment?t="bottom center":"bottom start"===this.state.attachment?t="top end":"bottom end"===this.state.attachment?t="top start":"bottom center"===this.state.attachment&&(t="top center"),d.default.createElement("div",null,d.default.createElement(u.default,{id:"attachment-margin",attachmentMargin:10,targetAttachment:t,contentAttachment:this.state.attachment,type:"primary",isOpen:!0}),d.default.createElement("p",null," Shoulp apply attachment margin appropriately for all attachment points "),d.default.createElement("p",null," Choose the content attachement: "),d.default.createElement("button",{type:"button",id:"attach-TS",value:"top start",onClick:this.handleTargetAttachment},"TOP START"),d.default.createElement("button",{type:"button",id:"attach-TC",value:"top center",onClick:this.handleTargetAttachment},"TOP CENTER"),d.default.createElement("button",{type:"button",id:"attach-TE",value:"top end",onClick:this.handleTargetAttachment},"TOP END"),d.default.createElement("button",{type:"button",id:"attach-MS",value:"middle start",onClick:this.handleTargetAttachment},"MIDDLE START"),d.default.createElement("button",{type:"button",id:"attach-MC",value:"middle center",onClick:this.handleTargetAttachment},"MIDDLE CENTER"),d.default.createElement("button",{type:"button",id:"attach-ME",value:"middle end",onClick:this.handleTargetAttachment},"MIDDLE END"),d.default.createElement("button",{type:"button",id:"attach-BS",value:"bottom start",onClick:this.handleTargetAttachment},"BOTTOM START"),d.default.createElement("button",{type:"button",id:"attach-BC",value:"bottom center",onClick:this.handleTargetAttachment},"BOTTOM CENTER"),d.default.createElement("button",{type:"button",id:"attach-BE",value:"bottom end",onClick:this.handleTargetAttachment},"BOTTOM END"))}}]),e}(d.default.Component);e.default=p},29208:function(t,e,o){var n=o(22411);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(o(11504)),l=n(o(74824)),h=n(o(20392)),r=n(o(3488)),s=l.default.bind(r.default);e.default=function(t){return a.default.createElement(h.default.Content,t,a.default.createElement("div",{className:s("hookshot-content-wrapper")},"Hookshot"))}},16060:function(t,e,o){var n=o(22411);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(o(82048)),l=n(o(97676)),h=n(o(94064)),r=n(o(66024)),s=n(o(96284)),c=n(o(63532)),d=n(o(71559)),u=n(o(54216)),i=n(o(11504)),m=n(o(74824)),p=n(o(3268)),f=n(o(20392)),_=n(o(29208)),k=n(o(3488)),v=["hookshotContentProps","id","isOpen","contentAttachment","targetAttachment","attachmentMargin","includeSvgs","type"];function g(t,e,o){return e=(0,c.default)(e),(0,s.default)(t,C()?Reflect.construct(e,o||[],(0,c.default)(t).constructor):e.apply(t,o))}function C(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(C=function(){return!!t})()}var T=m.default.bind(k.default),b={hookshotContentProps:p.default.any,id:p.default.string,isOpen:p.default.bool,includeSvgs:p.default.bool,contentAttachment:p.default.string,targetAttachment:p.default.string,type:p.default.string,attachmentMargin:p.default.number},E=function(t){return"middle start"===t?{vertical:"middle",horizontal:"start"}:"middle end"===t?{vertical:"middle",horizontal:"end"}:"middle center"===t?{vertical:"middle",horizontal:"center"}:"top start"===t?{vertical:"top",horizontal:"start"}:"top end"===t?{vertical:"top",horizontal:"end"}:"top center"===t?{vertical:"top",horizontal:"center"}:"bottom start"===t?{vertical:"bottom",horizontal:"start"}:"bottom end"===t?{vertical:"bottom",horizontal:"end"}:{vertical:"bottom",horizontal:"center"}},w=function(t){function e(t){var o;return(0,h.default)(this,e),(o=g(this,e,[t])).triggerHookshot=o.triggerHookshot.bind((0,d.default)(o)),o.handleRequestClose=o.handleRequestClose.bind((0,d.default)(o)),o.state={open:t.isOpen},o}return(0,u.default)(e,t),(0,r.default)(e,[{key:"handleRequestClose",value:function(){this.setState({open:!1})}},{key:"triggerHookshot",value:function(){this.setState({open:!0})}},{key:"render",value:function(){var t=this.props,e=t.hookshotContentProps,o=t.id,n=(t.isOpen,t.contentAttachment),h=t.targetAttachment,r=t.attachmentMargin,s=t.includeSvgs,c=t.type,d=(0,l.default)(t,v),u=i.default.createElement("div",null,i.default.createElement("svg",{id:"svg1",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",height:"2em",width:"2em"},i.default.createElement("path",{fill:"#78C346",d:"M24 0c13.3 0 24 10.7 24 24S37.3 48 24 48 0 37.3 0 24C0 10.8 10.7 0 23.9 0h.1z"}),i.default.createElement("path",{fill:"#FFF",d:"M20 36.4L6.7 23.1l3.6-3.6 9.7 9.9 17.7-17.9 3.6 3.6L20 36.4z"})),i.default.createElement("svg",{id:"svg2",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",height:"2em",width:"2em"},i.default.createElement("path",{fill:"#B1B5B6",d:"M24 0C10.7 0 0 10.7 0 24s10.7 24 24 24 24-10.7 24-24S37.3 0 24 0zm13.9 33.8l-2.1 2.1-1.2 1.2-1 .9-9.6-9.7-9.6 9.7-2.2-2.1-1.1-1.1-1-1 9.7-9.8-9.7-9.8 1-1 1.1-1.1 2.2-2.1 9.6 9.7 9.6-9.7 1 .9 1.2 1.2 2.1 2.1-9.7 9.8 9.7 9.8z"})));return i.default.createElement("div",{id:"".concat(o,"-bounds"),className:T(["wrapper","hookshot-wrapper-".concat(c)])},i.default.createElement(f.default,(0,a.default)({id:o,contentAttachment:E(n),targetAttachment:E(h),attachmentMargin:r,isEnabled:!0,isOpen:this.state.open,targetRef:function(){return document.getElementById("trigger-".concat(o))},boundingRef:function(){return document.getElementById("".concat(o,"-bounds"))}},d),i.default.createElement(_.default,{id:"".concat(o,"-content"),onEsc:e.closeOnEsc?this.handleRequestClose:void 0,onOutsideClick:e.closeOnOutsideClick?this.handleRequestClose:void 0,onResize:e.closeOnResize?this.handleRequestClose:void 0})),i.default.createElement("button",{type:"button",id:"trigger-".concat(o),className:T(["content","hookshot-".concat(c)]),onClick:this.triggerHookshot},"Trigger Hookshot"),s&&u)}}]),e}(i.default.Component);w.propTypes=b,w.defaultProps={hookshotContentProps:{},id:"hookshot",isOpen:!1,includeSvgs:!1,contentAttachment:"middle end",targetAttachment:"middle start"};e.default=w},3488:function(t,e,o){o.r(e),e.default={wrapper:"HookshotTestDocCommon-module__wrapper___4fVuR",content:"HookshotTestDocCommon-module__content___nnbLT","default-hookshot-wrapper":"HookshotTestDocCommon-module__default-hookshot-wrapper___rcvev","content-wrapper":"HookshotTestDocCommon-module__content-wrapper___uu2O7","hookshot-wrapper":"HookshotTestDocCommon-module__hookshot-wrapper___42aIJ","hookshot-content-wrapper":"HookshotTestDocCommon-module__hookshot-content-wrapper___UEwHf","hookshot-auto-flipped":"HookshotTestDocCommon-module__hookshot-auto-flipped___-y7Or","hookshot-auto-90":"HookshotTestDocCommon-module__hookshot-auto-90___sVf13","hookshot-flip-pushed":"HookshotTestDocCommon-module__hookshot-flip-pushed___n6qar","hookshot-auto-neg-90":"HookshotTestDocCommon-module__hookshot-auto-neg-90___6nGRm","hookshot-auto-pushed":"HookshotTestDocCommon-module__hookshot-auto-pushed___LMUqc","hookshot-wrapper-auto-90":"HookshotTestDocCommon-module__hookshot-wrapper-auto-90___A10vz","hookshot-wrapper-auto-neg-90":"HookshotTestDocCommon-module__hookshot-wrapper-auto-neg-90___ScRVv","hookshot-wrapper-auto-pushed":"HookshotTestDocCommon-module__hookshot-wrapper-auto-pushed___BoMtb","hookshot-wrapper-flip-pushed":"HookshotTestDocCommon-module__hookshot-wrapper-flip-pushed___xbRkR","hookshot-flip-flipped":"HookshotTestDocCommon-module__hookshot-flip-flipped___F4w-b","hookshot-none-offset":"HookshotTestDocCommon-module__hookshot-none-offset___dC460","hookshot-push-pushed":"HookshotTestDocCommon-module__hookshot-push-pushed___zVaYL","hookshot-container-right":"HookshotTestDocCommon-module__hookshot-container-right___nCSPo","hookshot-container-up":"HookshotTestDocCommon-module__hookshot-container-up___nHMGI","hookshot-container-down":"HookshotTestDocCommon-module__hookshot-container-down___4IQba","hookshot-container-left":"HookshotTestDocCommon-module__hookshot-container-left___u3+7E"}}}]);