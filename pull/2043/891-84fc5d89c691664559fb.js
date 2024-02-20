"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[891],{891:function(t,o,e){var n=e(22411);Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var a=n(e(94064)),l=n(e(66024)),s=n(e(96284)),u=n(e(63532)),r=n(e(71559)),h=n(e(54216)),i=n(e(11504)),d=n(e(16060));function c(t,o,e){return o=(0,u.default)(o),(0,s.default)(t,p()?Reflect.construct(o,e||[],(0,u.default)(t).constructor):o.apply(t,e))}function p(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(p=function(){return!!t})()}var m=function(t){function o(t){var e;return(0,a.default)(this,o),(e=c(this,o,[t])).handlePositionClick=e.handlePositionClick.bind((0,r.default)(e)),e.state={position:"up"},e}return(0,h.default)(o,t),(0,l.default)(o,[{key:"handlePositionClick",value:function(t){this.setState({position:t.target.value})}},{key:"render",value:function(){var t,o,e="up";return"up"===this.state.position?e="container-up":"down"===this.state.position?e="container-down":"left"===this.state.position?(e="container-left",t="middle end",o="middle start"):"right"===this.state.position&&(e="container-right"),i.default.createElement("div",null,i.default.createElement(d.default,{isOpen:!1,type:e,targetAttachment:t,contentAttachment:o,id:"bounding-container"}),i.default.createElement("p",null," Position should be pushed by bounding container "),i.default.createElement("p",null," Choose position behavior "),i.default.createElement("button",{type:"button",id:"push-up",value:"up",onClick:this.handlePositionClick},"Pushed Up"),i.default.createElement("button",{type:"button",id:"push-down",value:"down",onClick:this.handlePositionClick},"Pushed Down"),i.default.createElement("button",{type:"button",id:"push-left",value:"left",onClick:this.handlePositionClick},"Pushed Left"),i.default.createElement("button",{type:"button",id:"push-right",value:"right",onClick:this.handlePositionClick},"Pushed Right"))}}]),o}(i.default.Component);o.default=m},29208:function(t,o,e){var n=e(22411);Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var a=n(e(11504)),l=n(e(74824)),s=n(e(20392)),u=n(e(3488)),r=l.default.bind(u.default);o.default=function(t){return a.default.createElement(s.default.Content,t,a.default.createElement("div",{className:r("hookshot-content-wrapper")},"Hookshot"))}},16060:function(t,o,e){var n=e(22411);Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var a=n(e(82048)),l=n(e(97676)),s=n(e(94064)),u=n(e(66024)),r=n(e(96284)),h=n(e(63532)),i=n(e(71559)),d=n(e(54216)),c=n(e(11504)),p=n(e(74824)),m=n(e(3268)),f=n(e(20392)),_=n(e(29208)),k=n(e(3488)),v=["hookshotContentProps","id","isOpen","contentAttachment","targetAttachment","attachmentMargin","includeSvgs","type"];function g(t,o,e){return o=(0,h.default)(o),(0,r.default)(t,C()?Reflect.construct(o,e||[],(0,h.default)(t).constructor):o.apply(t,e))}function C(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(C=function(){return!!t})()}var w=p.default.bind(k.default),b={hookshotContentProps:m.default.any,id:m.default.string,isOpen:m.default.bool,includeSvgs:m.default.bool,contentAttachment:m.default.string,targetAttachment:m.default.string,type:m.default.string,attachmentMargin:m.default.number},H=function(t){return"middle start"===t?{vertical:"middle",horizontal:"start"}:"middle end"===t?{vertical:"middle",horizontal:"end"}:"middle center"===t?{vertical:"middle",horizontal:"center"}:"top start"===t?{vertical:"top",horizontal:"start"}:"top end"===t?{vertical:"top",horizontal:"end"}:"top center"===t?{vertical:"top",horizontal:"center"}:"bottom start"===t?{vertical:"bottom",horizontal:"start"}:"bottom end"===t?{vertical:"bottom",horizontal:"end"}:{vertical:"bottom",horizontal:"center"}},y=function(t){function o(t){var e;return(0,s.default)(this,o),(e=g(this,o,[t])).triggerHookshot=e.triggerHookshot.bind((0,i.default)(e)),e.handleRequestClose=e.handleRequestClose.bind((0,i.default)(e)),e.state={open:t.isOpen},e}return(0,d.default)(o,t),(0,u.default)(o,[{key:"handleRequestClose",value:function(){this.setState({open:!1})}},{key:"triggerHookshot",value:function(){this.setState({open:!0})}},{key:"render",value:function(){var t=this.props,o=t.hookshotContentProps,e=t.id,n=(t.isOpen,t.contentAttachment),s=t.targetAttachment,u=t.attachmentMargin,r=t.includeSvgs,h=t.type,i=(0,l.default)(t,v),d=c.default.createElement("div",null,c.default.createElement("svg",{id:"svg1",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",height:"2em",width:"2em"},c.default.createElement("path",{fill:"#78C346",d:"M24 0c13.3 0 24 10.7 24 24S37.3 48 24 48 0 37.3 0 24C0 10.8 10.7 0 23.9 0h.1z"}),c.default.createElement("path",{fill:"#FFF",d:"M20 36.4L6.7 23.1l3.6-3.6 9.7 9.9 17.7-17.9 3.6 3.6L20 36.4z"})),c.default.createElement("svg",{id:"svg2",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",height:"2em",width:"2em"},c.default.createElement("path",{fill:"#B1B5B6",d:"M24 0C10.7 0 0 10.7 0 24s10.7 24 24 24 24-10.7 24-24S37.3 0 24 0zm13.9 33.8l-2.1 2.1-1.2 1.2-1 .9-9.6-9.7-9.6 9.7-2.2-2.1-1.1-1.1-1-1 9.7-9.8-9.7-9.8 1-1 1.1-1.1 2.2-2.1 9.6 9.7 9.6-9.7 1 .9 1.2 1.2 2.1 2.1-9.7 9.8 9.7 9.8z"})));return c.default.createElement("div",{id:"".concat(e,"-bounds"),className:w(["wrapper","hookshot-wrapper-".concat(h)])},c.default.createElement(f.default,(0,a.default)({id:e,contentAttachment:H(n),targetAttachment:H(s),attachmentMargin:u,isEnabled:!0,isOpen:this.state.open,targetRef:function(){return document.getElementById("trigger-".concat(e))},boundingRef:function(){return document.getElementById("".concat(e,"-bounds"))}},i),c.default.createElement(_.default,{id:"".concat(e,"-content"),onEsc:o.closeOnEsc?this.handleRequestClose:void 0,onOutsideClick:o.closeOnOutsideClick?this.handleRequestClose:void 0,onResize:o.closeOnResize?this.handleRequestClose:void 0})),c.default.createElement("button",{type:"button",id:"trigger-".concat(e),className:w(["content","hookshot-".concat(h)]),onClick:this.triggerHookshot},"Trigger Hookshot"),r&&d)}}]),o}(c.default.Component);y.propTypes=b,y.defaultProps={hookshotContentProps:{},id:"hookshot",isOpen:!1,includeSvgs:!1,contentAttachment:"middle end",targetAttachment:"middle start"};o.default=y},3488:function(t,o,e){e.r(o),o.default={wrapper:"HookshotTestDocCommon-module__wrapper___4fVuR",content:"HookshotTestDocCommon-module__content___nnbLT","default-hookshot-wrapper":"HookshotTestDocCommon-module__default-hookshot-wrapper___rcvev","content-wrapper":"HookshotTestDocCommon-module__content-wrapper___uu2O7","hookshot-wrapper":"HookshotTestDocCommon-module__hookshot-wrapper___42aIJ","hookshot-content-wrapper":"HookshotTestDocCommon-module__hookshot-content-wrapper___UEwHf","hookshot-auto-flipped":"HookshotTestDocCommon-module__hookshot-auto-flipped___-y7Or","hookshot-auto-90":"HookshotTestDocCommon-module__hookshot-auto-90___sVf13","hookshot-flip-pushed":"HookshotTestDocCommon-module__hookshot-flip-pushed___n6qar","hookshot-auto-neg-90":"HookshotTestDocCommon-module__hookshot-auto-neg-90___6nGRm","hookshot-auto-pushed":"HookshotTestDocCommon-module__hookshot-auto-pushed___LMUqc","hookshot-wrapper-auto-90":"HookshotTestDocCommon-module__hookshot-wrapper-auto-90___A10vz","hookshot-wrapper-auto-neg-90":"HookshotTestDocCommon-module__hookshot-wrapper-auto-neg-90___ScRVv","hookshot-wrapper-auto-pushed":"HookshotTestDocCommon-module__hookshot-wrapper-auto-pushed___BoMtb","hookshot-wrapper-flip-pushed":"HookshotTestDocCommon-module__hookshot-wrapper-flip-pushed___xbRkR","hookshot-flip-flipped":"HookshotTestDocCommon-module__hookshot-flip-flipped___F4w-b","hookshot-none-offset":"HookshotTestDocCommon-module__hookshot-none-offset___dC460","hookshot-push-pushed":"HookshotTestDocCommon-module__hookshot-push-pushed___zVaYL","hookshot-container-right":"HookshotTestDocCommon-module__hookshot-container-right___nCSPo","hookshot-container-up":"HookshotTestDocCommon-module__hookshot-container-up___nHMGI","hookshot-container-down":"HookshotTestDocCommon-module__hookshot-container-down___4IQba","hookshot-container-left":"HookshotTestDocCommon-module__hookshot-container-left___u3+7E"}}}]);