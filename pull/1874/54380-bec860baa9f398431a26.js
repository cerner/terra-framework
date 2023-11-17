"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[54380],{67157:function(e,t,n){var o=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(70215)),i=o(n(861)),a=o(n(10434)),d=o(n(38416)),l=o(n(56690)),u=o(n(89728)),s=o(n(61655)),c=o(n(94993)),f=o(n(73808)),m=o(n(67294)),h=n(25387),p=o(n(45697)),b=o(n(47166)),v=n(19100),_=o(n(29270)),y=o(n(43526)),E=["src","title","onMount","onLaunch","onAuthorize","options","eventHandlers","intl"];function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function g(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=(0,f.default)(e);if(t){var r=(0,f.default)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return(0,c.default)(this,n)}}var C=b.default.bind(y.default),x={src:p.default.string.isRequired,title:p.default.string,onMount:p.default.func,onLaunch:p.default.func,onAuthorize:p.default.func,options:p.default.object,eventHandlers:p.default.arrayOf(p.default.shape({key:p.default.string,handler:p.default.func})),intl:p.default.shape({formatMessage:p.default.func}).isRequired},O=function(e){(0,s.default)(n,e);var t=g(n);function n(){return(0,l.default)(this,n),t.apply(this,arguments)}return(0,u.default)(n,[{key:"componentDidMount",value:function(){var e=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach((function(t){(0,d.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},this.props.options);e.iframeAttrs=e.iframeAttrs?e.iframeAttrs:{},e.iframeAttrs.title&&console.warn("The title attribute within `iframeAttrs` object in the `options` prop is deprecated. Please start using the new `title` prop instead."),this.props.title&&(0,a.default)(e.iframeAttrs,{title:this.props.title}),e.focusIndicator={classNameFocusStyle:C("iframe-focus-style")},this.xfcFrame=v.Consumer.mount(this.embeddedContentWrapper,this.props.src,e),this.xfcFrame.iframe.classList.add(C("iframe-style")),this.props.onMount&&this.props.onMount(this.xfcFrame),e.iframeAttrs.srcdoc&&this.handleFrameVisualFocusIndicator(),this.addEventListener("xfc.launched",this.props.onLaunch),this.addEventListener("xfc.authorized",this.props.onAuthorize),this.addEventListeners(this.props.eventHandlers)}},{key:"handleFrameVisualFocusIndicator",value:function(){var e,t,n,o,r,a=this;this.contentWindow=null===(e=this.xfcFrame)||void 0===e||null===(e=e.iframe)||void 0===e?void 0:e.contentWindow;var d=function(){var e,t,n=null===(e=a.contentWindow)||void 0===e?void 0:e.document;return"no"!==(null===(t=a.xfcFrame)||void 0===t||null===(t=t.iframe)||void 0===t?void 0:t.getAttribute("scrolling"))&&(n.documentElement.scrollHeight>n.documentElement.clientHeight||n.body.scrollHeight>n.body.clientHeight||n.documentElement.scrollWidth>n.documentElement.clientWidth||n.body.scrollWidth>n.body.clientWidth)};null===(t=this.contentWindow)||void 0===t||t.addEventListener("load",(function(){a.hasInteractableElement=(0,i.default)(a.contentWindow.document.body.querySelectorAll("".concat("a[href]:not([tabindex='-1']), area[href]:not([tabindex='-1']), input:not([disabled]):not([tabindex='-1']), select:not([disabled]):not([tabindex='-1']), textarea:not([disabled]):not([tabindex='-1']), button:not([disabled]):not([tabindex='-1']), [contentEditable=true]:not([tabindex='-1'])"))).some((function(e){return!e.hasAttribute("disabled")&&!e.getAttribute("aria-hidden")&&!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)&&"hidden"!==window.getComputedStyle(e).visibility&&null===e.closest("[inert]")})),a.originalTabIndexValue=a.contentWindow.document.body.getAttribute("tabIndex"),d()&&!a.hasInteractableElement&&(a.contentWindow.document.body.tabIndex=0)})),null===(n=this.contentWindow)||void 0===n||n.addEventListener("resize",(function(){d()&&!a.hasInteractableElement?a.contentWindow.document.body.tabIndex=0:null===a.originalTabIndexValue?a.contentWindow.document.body.removeAttribute("tabIndex"):a.contentWindow.document.body.tabIndex=a.originalTabIndexValue})),null===(o=this.contentWindow)||void 0===o||o.addEventListener("focus",(function(){a.hasInteractableElement||a.xfcFrame.iframe.classList.add(C("iframe-focus-style"))}),!0),null===(r=this.contentWindow)||void 0===r||r.addEventListener("blur",(function(){a.xfcFrame.iframe.classList.remove(C("iframe-focus-style"))}),!0)}},{key:"addEventListener",value:function(e,t){e&&t&&this.xfcFrame.on(e,t)}},{key:"addEventListeners",value:function(e){var t=this;(e||[]).forEach((function(e){return t.addEventListener(e.key,e.handler)}))}},{key:"render",value:function(){var e=this,t=this.props,n=(t.src,t.title),o=(t.onMount,t.onLaunch,t.onAuthorize,t.options,t.eventHandlers,t.intl),i=(0,r.default)(t,E);return m.default.createElement(m.default.Fragment,null,m.default.createElement(_.default,{className:C("visually-hidden-text"),text:o.formatMessage({id:"Terra.embeddedContentConsumer.beginEmbeddedContent"},{name:n})}),m.default.createElement("div",(0,a.default)({},i,{ref:function(t){e.embeddedContentWrapper=t}})),m.default.createElement(_.default,{className:C("visually-hidden-text"),text:o.formatMessage({id:"Terra.embeddedContentConsumer.endEmbeddedContent"},{name:n})}))}}]),n}(m.default.Component);O.propTypes=x;t.default=(0,h.injectIntl)(O)},54380:function(e,t,n){var o=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(67294)),i=n(19100),a=o(n(47166)),d=o(n(67157)),l=o(n(33597)),u=a.default.bind(l.default);i.Consumer.init();var s=[{key:"EventA",handler:function(){document.getElementById("CustomEvent").style.border="thick dashed #0000FF"}}];t.default=function(){return r.default.createElement("div",{className:u("consumer-content-wrapper")},r.default.createElement("h2",null,"Embedded Content"),r.default.createElement("p",null,"The following is an embedded content within an iframe."),r.default.createElement("div",{id:"CustomEvent"},r.default.createElement(d.default,{className:u("iframe"),src:"/terra-framework/#/raw/provider/cerner-terra-framework-docs/embedded-content-consumer/providers/custom-event-provider",eventHandlers:s,title:"Basic Consumer",options:{iframeAttrs:{id:"custom-event-consumer-frame"}}})))}},43526:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"EmbeddedContentConsumer-module__clinical-lowlight-theme___d937s","orion-fusion-theme":"EmbeddedContentConsumer-module__orion-fusion-theme___j2+8Q","iframe-style":"EmbeddedContentConsumer-module__iframe-style___0jFDt","iframe-focus-style":"EmbeddedContentConsumer-module__iframe-focus-style___9iFop","visually-hidden-text":"EmbeddedContentConsumer-module__visually-hidden-text___yOT75"}},33597:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Consumer-module__clinical-lowlight-theme___rWob4","orion-fusion-theme":"Consumer-module__orion-fusion-theme___jIp00","iframe-style":"Consumer-module__iframe-style___SzioT","iframe-focus-style":"Consumer-module__iframe-focus-style___+PTDK","visually-hidden-text":"Consumer-module__visually-hidden-text___9vEs0",iframe:"Consumer-module__iframe___V+e+s","consumer-content-wrapper":"Consumer-module__consumer-content-wrapper___FwqzI"}}}]);