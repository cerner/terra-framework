"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[68598],{68598:function(t,o,e){var n=e(64836);Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var a=n(e(67294)),s=n(e(42285)),r=function(){return a.default.createElement(s.default,{id:"Enabled",isOpen:!0,type:"primary",isEnabled:!0})},l=function(){return a.default.createElement(s.default,{id:"NotEnabled",isOpen:!0,type:"primary",isEnabled:!1})},u=function(){return a.default.createElement("div",{id:"EnabledBehaviors-bounds"},a.default.createElement("p",null,"Content Positioning is enabled. Content is visible."),a.default.createElement(r,null),a.default.createElement("p",null,"Content Positioning is not enabled. Content is not visible."),a.default.createElement(l,null))};o.default=u},83778:function(t,o,e){var n=e(64836);Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var a=n(e(67294)),s=n(e(47166)),r=n(e(29121)),l=n(e(24542)),u=s.default.bind(l.default),h=function(t){return a.default.createElement(r.default.Content,t,a.default.createElement("div",{className:u("hookshot-content-wrapper")},"Hookshot"))};o.default=h},42285:function(t,o,e){var n=e(64836);Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var a=n(e(10434)),s=n(e(70215)),r=n(e(56690)),l=n(e(89728)),u=n(e(66115)),h=n(e(61655)),d=n(e(94993)),i=n(e(73808)),c=n(e(67294)),m=n(e(47166)),p=n(e(45697)),f=n(e(29121)),_=n(e(83778)),k=n(e(24542)),v=["hookshotContentProps","id","isOpen","contentAttachment","targetAttachment","attachmentMargin","includeSvgs","type"];function g(t){var o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,n=(0,i.default)(t);if(o){var a=(0,i.default)(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return(0,d.default)(this,e)}}var C=m.default.bind(k.default),w={hookshotContentProps:p.default.any,id:p.default.string,isOpen:p.default.bool,includeSvgs:p.default.bool,contentAttachment:p.default.string,targetAttachment:p.default.string,type:p.default.string,attachmentMargin:p.default.number},b=function(t){return"middle start"===t?{vertical:"middle",horizontal:"start"}:"middle end"===t?{vertical:"middle",horizontal:"end"}:"middle center"===t?{vertical:"middle",horizontal:"center"}:"top start"===t?{vertical:"top",horizontal:"start"}:"top end"===t?{vertical:"top",horizontal:"end"}:"top center"===t?{vertical:"top",horizontal:"center"}:"bottom start"===t?{vertical:"bottom",horizontal:"start"}:"bottom end"===t?{vertical:"bottom",horizontal:"end"}:{vertical:"bottom",horizontal:"center"}},E=function(t){(0,h.default)(e,t);var o=g(e);function e(t){var n;return(0,r.default)(this,e),(n=o.call(this,t)).triggerHookshot=n.triggerHookshot.bind((0,u.default)(n)),n.handleRequestClose=n.handleRequestClose.bind((0,u.default)(n)),n.state={open:t.isOpen},n}return(0,l.default)(e,[{key:"handleRequestClose",value:function(){this.setState({open:!1})}},{key:"triggerHookshot",value:function(){this.setState({open:!0})}},{key:"render",value:function(){var t=this.props,o=t.hookshotContentProps,e=t.id,n=(t.isOpen,t.contentAttachment),r=t.targetAttachment,l=t.attachmentMargin,u=t.includeSvgs,h=t.type,d=(0,s.default)(t,v),i=c.default.createElement("div",null,c.default.createElement("svg",{id:"svg1",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",height:"2em",width:"2em"},c.default.createElement("path",{fill:"#78C346",d:"M24 0c13.3 0 24 10.7 24 24S37.3 48 24 48 0 37.3 0 24C0 10.8 10.7 0 23.9 0h.1z"}),c.default.createElement("path",{fill:"#FFF",d:"M20 36.4L6.7 23.1l3.6-3.6 9.7 9.9 17.7-17.9 3.6 3.6L20 36.4z"})),c.default.createElement("svg",{id:"svg2",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",height:"2em",width:"2em"},c.default.createElement("path",{fill:"#B1B5B6",d:"M24 0C10.7 0 0 10.7 0 24s10.7 24 24 24 24-10.7 24-24S37.3 0 24 0zm13.9 33.8l-2.1 2.1-1.2 1.2-1 .9-9.6-9.7-9.6 9.7-2.2-2.1-1.1-1.1-1-1 9.7-9.8-9.7-9.8 1-1 1.1-1.1 2.2-2.1 9.6 9.7 9.6-9.7 1 .9 1.2 1.2 2.1 2.1-9.7 9.8 9.7 9.8z"})));return c.default.createElement("div",{id:"".concat(e,"-bounds"),className:C(["wrapper","hookshot-wrapper-".concat(h)])},c.default.createElement(f.default,(0,a.default)({id:e,contentAttachment:b(n),targetAttachment:b(r),attachmentMargin:l,isEnabled:!0,isOpen:this.state.open,targetRef:function(){return document.getElementById("trigger-".concat(e))},boundingRef:function(){return document.getElementById("".concat(e,"-bounds"))}},d),c.default.createElement(_.default,{id:"".concat(e,"-content"),onEsc:o.closeOnEsc?this.handleRequestClose:void 0,onOutsideClick:o.closeOnOutsideClick?this.handleRequestClose:void 0,onResize:o.closeOnResize?this.handleRequestClose:void 0})),c.default.createElement("button",{type:"button",id:"trigger-".concat(e),className:C(["content","hookshot-".concat(h)]),onClick:this.triggerHookshot},"Trigger Hookshot"),u&&i)}}]),e}(c.default.Component);E.propTypes=w,E.defaultProps={hookshotContentProps:{},id:"hookshot",isOpen:!1,includeSvgs:!1,contentAttachment:"middle end",targetAttachment:"middle start"};var H=E;o.default=H},24542:function(t,o,e){e.r(o),o.default={wrapper:"HookshotTestDocCommon-module__wrapper___4fVuR",content:"HookshotTestDocCommon-module__content___nnbLT","default-hookshot-wrapper":"HookshotTestDocCommon-module__default-hookshot-wrapper___rcvev","content-wrapper":"HookshotTestDocCommon-module__content-wrapper___uu2O7","hookshot-wrapper":"HookshotTestDocCommon-module__hookshot-wrapper___42aIJ","hookshot-content-wrapper":"HookshotTestDocCommon-module__hookshot-content-wrapper___UEwHf","hookshot-auto-flipped":"HookshotTestDocCommon-module__hookshot-auto-flipped___-y7Or","hookshot-auto-90":"HookshotTestDocCommon-module__hookshot-auto-90___sVf13","hookshot-flip-pushed":"HookshotTestDocCommon-module__hookshot-flip-pushed___n6qar","hookshot-auto-neg-90":"HookshotTestDocCommon-module__hookshot-auto-neg-90___6nGRm","hookshot-auto-pushed":"HookshotTestDocCommon-module__hookshot-auto-pushed___LMUqc","hookshot-wrapper-auto-90":"HookshotTestDocCommon-module__hookshot-wrapper-auto-90___A10vz","hookshot-wrapper-auto-neg-90":"HookshotTestDocCommon-module__hookshot-wrapper-auto-neg-90___ScRVv","hookshot-wrapper-auto-pushed":"HookshotTestDocCommon-module__hookshot-wrapper-auto-pushed___BoMtb","hookshot-wrapper-flip-pushed":"HookshotTestDocCommon-module__hookshot-wrapper-flip-pushed___xbRkR","hookshot-flip-flipped":"HookshotTestDocCommon-module__hookshot-flip-flipped___F4w-b","hookshot-none-offset":"HookshotTestDocCommon-module__hookshot-none-offset___dC460","hookshot-push-pushed":"HookshotTestDocCommon-module__hookshot-push-pushed___zVaYL","hookshot-container-right":"HookshotTestDocCommon-module__hookshot-container-right___nCSPo","hookshot-container-up":"HookshotTestDocCommon-module__hookshot-container-up___nHMGI","hookshot-container-down":"HookshotTestDocCommon-module__hookshot-container-down___4IQba","hookshot-container-left":"HookshotTestDocCommon-module__hookshot-container-left___u3+7E"}}}]);