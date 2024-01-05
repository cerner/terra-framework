"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[28905],{67157:function(e,t,n){var o=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(70215)),i=o(n(861)),a=o(n(10434)),l=o(n(38416)),d=o(n(56690)),u=o(n(89728)),s=o(n(61655)),c=o(n(94993)),f=o(n(73808)),m=o(n(67294)),h=n(25387),v=o(n(45697)),p=o(n(47166)),b=n(19100),y=o(n(29270)),_=o(n(43526)),E=["src","title","onMount","onLaunch","onAuthorize","options","eventHandlers","intl"];function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function w(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=(0,f.default)(e);if(t){var r=(0,f.default)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return(0,c.default)(this,n)}}var C=p.default.bind(_.default),x={src:v.default.string.isRequired,title:v.default.string,onMount:v.default.func,onLaunch:v.default.func,onAuthorize:v.default.func,options:v.default.object,eventHandlers:v.default.arrayOf(v.default.shape({key:v.default.string,handler:v.default.func})),intl:v.default.shape({formatMessage:v.default.func}).isRequired},F=function(e){(0,s.default)(n,e);var t=w(n);function n(){return(0,d.default)(this,n),t.apply(this,arguments)}return(0,u.default)(n,[{key:"componentDidMount",value:function(){var e=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){(0,l.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},this.props.options);e.iframeAttrs=e.iframeAttrs?e.iframeAttrs:{},e.iframeAttrs.title&&console.warn("The title attribute within `iframeAttrs` object in the `options` prop is deprecated. Please start using the new `title` prop instead."),this.props.title&&(0,a.default)(e.iframeAttrs,{title:this.props.title}),e.focusIndicator={classNameFocusStyle:C("iframe-focus-style")},this.xfcFrame=b.Consumer.mount(this.embeddedContentWrapper,this.props.src,e),this.xfcFrame.iframe.classList.add(C("iframe-style")),this.props.onMount&&this.props.onMount(this.xfcFrame),e.iframeAttrs.srcdoc&&this.handleFrameVisualFocusIndicator(),this.addEventListener("xfc.launched",this.props.onLaunch),this.addEventListener("xfc.authorized",this.props.onAuthorize),this.addEventListeners(this.props.eventHandlers)}},{key:"handleFrameVisualFocusIndicator",value:function(){var e,t,n,o,r,a=this;this.contentWindow=null===(e=this.xfcFrame)||void 0===e||null===(e=e.iframe)||void 0===e?void 0:e.contentWindow;var l=function(){var e,t,n=null===(e=a.contentWindow)||void 0===e?void 0:e.document;return"no"!==(null===(t=a.xfcFrame)||void 0===t||null===(t=t.iframe)||void 0===t?void 0:t.getAttribute("scrolling"))&&(n.documentElement.scrollHeight>n.documentElement.clientHeight||n.body.scrollHeight>n.body.clientHeight||n.documentElement.scrollWidth>n.documentElement.clientWidth||n.body.scrollWidth>n.body.clientWidth)};null===(t=this.contentWindow)||void 0===t||t.addEventListener("load",(function(){a.hasInteractableElement=(0,i.default)(a.contentWindow.document.body.querySelectorAll("".concat("a[href]:not([tabindex='-1']), area[href]:not([tabindex='-1']), input:not([disabled]):not([tabindex='-1']), select:not([disabled]):not([tabindex='-1']), textarea:not([disabled]):not([tabindex='-1']), button:not([disabled]):not([tabindex='-1']), [contentEditable=true]:not([tabindex='-1'])"))).some((function(e){return!e.hasAttribute("disabled")&&!e.getAttribute("aria-hidden")&&!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)&&"hidden"!==window.getComputedStyle(e).visibility&&null===e.closest("[inert]")})),a.originalTabIndexValue=a.contentWindow.document.body.getAttribute("tabIndex"),l()&&!a.hasInteractableElement&&(a.contentWindow.document.body.tabIndex=0)})),null===(n=this.contentWindow)||void 0===n||n.addEventListener("resize",(function(){l()&&!a.hasInteractableElement?a.contentWindow.document.body.tabIndex=0:null===a.originalTabIndexValue?a.contentWindow.document.body.removeAttribute("tabIndex"):a.contentWindow.document.body.tabIndex=a.originalTabIndexValue})),null===(o=this.contentWindow)||void 0===o||o.addEventListener("focus",(function(){a.hasInteractableElement||a.xfcFrame.iframe.classList.add(C("iframe-focus-style"))}),!0),null===(r=this.contentWindow)||void 0===r||r.addEventListener("blur",(function(){a.xfcFrame.iframe.classList.remove(C("iframe-focus-style"))}),!0)}},{key:"addEventListener",value:function(e,t){e&&t&&this.xfcFrame.on(e,t)}},{key:"addEventListeners",value:function(e){var t=this;(e||[]).forEach((function(e){return t.addEventListener(e.key,e.handler)}))}},{key:"render",value:function(){var e=this,t=this.props,n=(t.src,t.title),o=(t.onMount,t.onLaunch,t.onAuthorize,t.options,t.eventHandlers,t.intl),i=(0,r.default)(t,E);return m.default.createElement(m.default.Fragment,null,m.default.createElement(y.default,{className:C("visually-hidden-text"),text:o.formatMessage({id:"Terra.embeddedContentConsumer.beginEmbeddedContent"},{name:n})}),m.default.createElement("div",(0,a.default)({},i,{ref:function(t){e.embeddedContentWrapper=t}})),m.default.createElement(y.default,{className:C("visually-hidden-text"),text:o.formatMessage({id:"Terra.embeddedContentConsumer.endEmbeddedContent"},{name:n})}))}}]),n}(m.default.Component);F.propTypes=x;t.default=(0,h.injectIntl)(F)},28905:function(e,t,n){var o=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(56690)),i=o(n(89728)),a=o(n(66115)),l=o(n(61655)),d=o(n(94993)),u=o(n(73808)),s=o(n(67294)),c=o(n(47166)),f=n(19100),m=o(n(67157)),h=o(n(33597));function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=(0,u.default)(e);if(t){var r=(0,u.default)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return(0,d.default)(this,n)}}var p=c.default.bind(h.default);f.Consumer.init();var b=function(e){(0,l.default)(n,e);var t=v(n);function n(e){var o;return(0,r.default)(this,n),(o=t.call(this,e)).onMount=o.onMount.bind((0,a.default)(o)),o.handleEventA=o.handleEventA.bind((0,a.default)(o)),o.handleEventB=o.handleEventB.bind((0,a.default)(o)),o}return(0,i.default)(n,[{key:"handleEventA",value:function(){document.getElementById("CustomEvents").style.border="thick dashed #0000FF",this.frame.trigger("Event-Reply",{eventReply:"eventA",borderColor:"#0000FF"})}},{key:"handleEventB",value:function(){document.getElementById("CustomEvents").style.border="thick dashed #00FF00",this.frame.trigger("Event-Reply",{eventReply:"eventB",borderColor:"#00FF00"})}},{key:"onMount",value:function(e){this.frame=e}},{key:"render",value:function(){var e=[{key:"EventA",handler:this.handleEventA},{key:"EventB",handler:this.handleEventB}];return s.default.createElement("div",{className:p("consumer-content-wrapper")},s.default.createElement("h2",null,"Embedded Content"),s.default.createElement("p",null,"The following is an embedded content within an iframe."),s.default.createElement("div",{id:"CustomEvents"},s.default.createElement(m.default,{src:"/terra-framework/#/raw/provider/cerner-terra-framework-docs/embedded-content-consumer/providers/custom-events-provider",className:p("iframe"),title:"Custom events example",options:{iframeAttrs:{id:"custom-events-consumer-frame"},resizeConfig:{scrolling:!0}},onMount:this.onMount,eventHandlers:e})))}}]),n}(s.default.Component);t.default=b},43526:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"EmbeddedContentConsumer-module__clinical-lowlight-theme___d937s","orion-fusion-theme":"EmbeddedContentConsumer-module__orion-fusion-theme___j2+8Q","iframe-style":"EmbeddedContentConsumer-module__iframe-style___0jFDt","iframe-focus-style":"EmbeddedContentConsumer-module__iframe-focus-style___9iFop","visually-hidden-text":"EmbeddedContentConsumer-module__visually-hidden-text___yOT75"}},33597:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Consumer-module__clinical-lowlight-theme___rWob4","orion-fusion-theme":"Consumer-module__orion-fusion-theme___jIp00","iframe-style":"Consumer-module__iframe-style___SzioT","iframe-focus-style":"Consumer-module__iframe-focus-style___+PTDK","visually-hidden-text":"Consumer-module__visually-hidden-text___9vEs0",iframe:"Consumer-module__iframe___V+e+s","consumer-content-wrapper":"Consumer-module__consumer-content-wrapper___FwqzI"}}}]);