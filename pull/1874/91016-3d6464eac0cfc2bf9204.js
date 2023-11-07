"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[91016],{67157:function(e,t,n){var r=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(70215)),i=r(n(861)),a=r(n(10434)),l=r(n(38416)),d=r(n(56690)),u=r(n(89728)),s=r(n(61655)),c=r(n(94993)),f=r(n(73808)),m=r(n(67294)),h=n(25387),p=r(n(45697)),v=r(n(47166)),b=n(19100),_=r(n(29270)),y=r(n(43526)),w=["src","title","onMount","onLaunch","onAuthorize","options","eventHandlers","intl"];function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function E(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,f.default)(e);if(t){var o=(0,f.default)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return(0,c.default)(this,n)}}var g=v.default.bind(y.default),C={src:p.default.string.isRequired,title:p.default.string,onMount:p.default.func,onLaunch:p.default.func,onAuthorize:p.default.func,options:p.default.object,eventHandlers:p.default.arrayOf(p.default.shape({key:p.default.string,handler:p.default.func})),intl:p.default.shape({formatMessage:p.default.func}).isRequired},F=function(e){(0,s.default)(n,e);var t=E(n);function n(){return(0,d.default)(this,n),t.apply(this,arguments)}return(0,u.default)(n,[{key:"componentDidMount",value:function(){var e=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(Object(n),!0).forEach((function(t){(0,l.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},this.props.options);e.iframeAttrs=e.iframeAttrs?e.iframeAttrs:{},e.iframeAttrs.title&&console.warn("The title attribute within `iframeAttrs` object in the `options` prop is deprecated. Please start using the new `title` prop instead."),this.props.title&&(0,a.default)(e.iframeAttrs,{title:this.props.title}),e.focusIndicator={classNameFocusStyle:g("iframe-focus-style")},this.xfcFrame=b.Consumer.mount(this.embeddedContentWrapper,this.props.src,e),this.props.onMount&&this.props.onMount(this.xfcFrame),this.setupEventListenersForFrameSrcDoc(),this.addEventListener("xfc.launched",this.props.onLaunch),this.addEventListener("xfc.authorized",this.props.onAuthorize),this.addEventListeners(this.props.eventHandlers)}},{key:"setupEventListenersForFrameSrcDoc",value:function(){var e,t,n=this,r=function(){var e,t=null===(e=n.xfcFrame)||void 0===e||null===(e=e.iframe)||void 0===e||null===(e=e.contentWindow)||void 0===e?void 0:e.document;return t.documentElement.scrollHeight>t.documentElement.clientHeight||t.body.scrollHeight>t.body.clientHeight||t.documentElement.scrollWidth>t.documentElement.clientWidth||t.body.scrollWidth>t.body.clientWidth},o=function(){var e;return"no"!==(null===(e=n.xfcFrame)||void 0===e||null===(e=e.iframe)||void 0===e?void 0:e.getAttribute("scrolling"))};window.onload=function(){var e;this.hasInteractableElement=(0,i.default)(null===(e=this.xfcFrame)||void 0===e||null===(e=e.iframe)||void 0===e||null===(e=e.contentWindow)||void 0===e?void 0:e.document.body.querySelectorAll("".concat("a[href]:not([tabindex='-1']), area[href]:not([tabindex='-1']), input:not([disabled]):not([tabindex='-1']), select:not([disabled]):not([tabindex='-1']), textarea:not([disabled]):not([tabindex='-1']), button:not([disabled]):not([tabindex='-1']), [contentEditable=true]:not([tabindex='-1'])"))).some((function(e){return!e.hasAttribute("disabled")&&!e.getAttribute("aria-hidden")&&!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)&&"hidden"!==window.getComputedStyle(e).visibility&&null===e.closest("[inert]")})),o()&&r()&&!this.hasInteractableElement&&(this.xfcFrame.iframe.contentWindow.document.body.tabIndex=0)},window.onresize=function(){var e;o()&&r()&&!this.hasInteractableElement?this.xfcFrame.iframe.contentWindow.document.body.tabIndex=0:"0"===(null===(e=this.xfcFrame)||void 0===e||null===(e=e.iframe)||void 0===e||null===(e=e.contentWindow)||void 0===e?void 0:e.document.body.getAttribute("tabIndex"))&&this.xfcFrame.iframe.contentWindow.document.body.removeAttribute("tabIndex")},null===(e=this.xfcFrame)||void 0===e||null===(e=e.iframe)||void 0===e||null===(e=e.contentWindow)||void 0===e||e.addEventListener("focus",(function(){!n.hasInteractableElement&&r()&&o()&&r()&&!n.hasInteractableElement&&(n.xfcFrame.iframe.className=g("iframe-focus-style"))}),!0),null===(t=this.xfcFrame)||void 0===t||null===(t=t.iframe)||void 0===t||null===(t=t.contentWindow)||void 0===t||t.addEventListener("blur",(function(){n.xfcFrame.iframe.removeAttribute("class")}),!0)}},{key:"addEventListener",value:function(e,t){e&&t&&this.xfcFrame.on(e,t)}},{key:"addEventListeners",value:function(e){var t=this;(e||[]).forEach((function(e){return t.addEventListener(e.key,e.handler)}))}},{key:"render",value:function(){var e=this,t=this.props,n=(t.src,t.title),r=(t.onMount,t.onLaunch,t.onAuthorize,t.options,t.eventHandlers,t.intl),i=(0,o.default)(t,w);return m.default.createElement(m.default.Fragment,null,m.default.createElement(_.default,{className:g("visually-hidden-text"),text:r.formatMessage({id:"Terra.embeddedContentConsumer.beginEmbeddedContent"},{name:n})}),m.default.createElement("div",(0,a.default)({},i,{ref:function(t){e.embeddedContentWrapper=t}})),m.default.createElement(_.default,{className:g("visually-hidden-text"),text:r.formatMessage({id:"Terra.embeddedContentConsumer.endEmbeddedContent"},{name:n})}))}}]),n}(m.default.Component);F.propTypes=C;t.default=(0,h.injectIntl)(F)},91016:function(e,t,n){var r=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(67294)),i=n(19100),a=r(n(47166)),l=r(n(67157)),d=r(n(33597)),u=a.default.bind(d.default);i.Consumer.init();t.default=function(){return o.default.createElement("div",{className:u("consumer-content-wrapper")},o.default.createElement("h2",null,"Embedded Content"),o.default.createElement("p",null,"The following is an embedded content within an iframe."),o.default.createElement(l.default,{className:u("iframe"),options:{iframeAttrs:{id:"basic-consumer-frame"},resizeConfig:{scrolling:!0,fixedWidth:"100%",fixedHeight:"200px"}},title:"Basic Consumer",src:"/terra-framework/#/raw/provider/cerner-terra-framework-docs/embedded-content-consumer/providers/basic-provider"}))}},43526:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"EmbeddedContentConsumer-module__clinical-lowlight-theme___d937s","orion-fusion-theme":"EmbeddedContentConsumer-module__orion-fusion-theme___j2+8Q","visually-hidden-text":"EmbeddedContentConsumer-module__visually-hidden-text___yOT75","iframe-focus-style":"EmbeddedContentConsumer-module__iframe-focus-style___9iFop"}},33597:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Consumer-module__clinical-lowlight-theme___rWob4","orion-fusion-theme":"Consumer-module__orion-fusion-theme___jIp00","visually-hidden-text":"Consumer-module__visually-hidden-text___9vEs0","iframe-focus-style":"Consumer-module__iframe-focus-style___+PTDK",iframe:"Consumer-module__iframe___V+e+s","consumer-content-wrapper":"Consumer-module__consumer-content-wrapper___FwqzI"}}}]);