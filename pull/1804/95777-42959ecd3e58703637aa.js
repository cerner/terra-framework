"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[95777],{67157:function(e,t,n){var r=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(10434)),u=r(n(70215)),o=r(n(56690)),d=r(n(89728)),i=r(n(61655)),l=r(n(94993)),s=r(n(73808)),f=r(n(67294)),c=r(n(45697)),m=r(n(29270)),p=n(25387),h=n(19100),v=r(n(47166)),_=r(n(28633)),y=["src","onMount","onLaunch","onAuthorize","options","eventHandlers","intl"];function b(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,s.default)(e);if(t){var a=(0,s.default)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return(0,l.default)(this,n)}}var C=v.default.bind(_.default),E={src:c.default.string.isRequired,onMount:c.default.func,onLaunch:c.default.func,onAuthorize:c.default.func,options:c.default.object,eventHandlers:c.default.arrayOf(c.default.shape({key:c.default.string,handler:c.default.func})),intl:c.default.shape({formatMessage:c.default.func}).isRequired},k=function(e){(0,i.default)(n,e);var t=b(n);function n(){return(0,o.default)(this,n),t.apply(this,arguments)}return(0,d.default)(n,[{key:"componentDidMount",value:function(){this.xfcFrame=h.Consumer.mount(this.embeddedContentWrapper,this.props.src,this.props.options),this.props.onMount&&this.props.onMount(this.xfcFrame),this.addEventListener("xfc.launched",this.props.onLaunch),this.addEventListener("xfc.authorized",this.props.onAuthorize),this.addEventListeners(this.props.eventHandlers)}},{key:"addEventListener",value:function(e,t){e&&t&&this.xfcFrame.on(e,t)}},{key:"addEventListeners",value:function(e){var t=this;(e||[]).forEach((function(e){return t.addEventListener(e.key,e.handler)}))}},{key:"render",value:function(){var e,t,n=this,r=this.props,o=(r.src,r.onMount,r.onLaunch,r.onAuthorize,r.options),d=(r.eventHandlers,r.intl),i=(0,u.default)(r,y);return f.default.createElement("div",{className:C("container")},f.default.createElement(m.default,{className:C("visually-hidden-text"),text:d.formatMessage({id:"Terra.embeddedContentConsumer.beginEmbeddedContent"},{name:null==o||null===(e=o.iframeAttrs)||void 0===e?void 0:e.title})}),f.default.createElement("div",(0,a.default)({},i,{className:C("embedded-content-wrapper"),ref:function(e){n.embeddedContentWrapper=e}})),f.default.createElement(m.default,{className:C("visually-hidden-text"),text:d.formatMessage({id:"Terra.embeddedContentConsumer.endEmbeddedContent"},{name:null==o||null===(t=o.iframeAttrs)||void 0===t?void 0:t.title})}))}}]),n}(f.default.Component);k.propTypes=E;t.default=(0,p.injectIntl)(k)},95777:function(e,t,n){var r=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(67294)),u=n(19100),o=r(n(47166)),d=r(n(67157)),i=r(n(33597)),l=o.default.bind(i.default);u.Consumer.init();t.default=function(){return a.default.createElement(d.default,{className:l("iframe"),options:{iframeAttrs:{title:"Error Consumer"}},src:"https://www.google.com"})}},28633:function(e,t,n){n.r(t),t.default={container:"ProviderIframe-module__container___-QtkQ","visually-hidden-text":"ProviderIframe-module__visually-hidden-text___pjGbJ","embedded-content-wrapper":"ProviderIframe-module__embedded-content-wrapper___BSPvB"}},33597:function(e,t,n){n.r(t),t.default={iframe:"Consumer-module__iframe___V+e+s"}}}]);