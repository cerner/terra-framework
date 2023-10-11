"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[91016],{67157:function(e,t,n){var r=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(70215)),o=r(n(10434)),d=r(n(38416)),i=r(n(56690)),u=r(n(89728)),s=r(n(61655)),l=r(n(94993)),f=r(n(73808)),c=r(n(67294)),p=n(25387),m=r(n(45697)),h=r(n(47166)),v=n(19100),b=r(n(29270)),y=r(n(43526)),_=["src","title","onMount","onLaunch","onAuthorize","options","eventHandlers","intl"];function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function C(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,f.default)(e);if(t){var a=(0,f.default)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return(0,l.default)(this,n)}}var E=h.default.bind(y.default),w={src:m.default.string.isRequired,title:m.default.string,onMount:m.default.func,onLaunch:m.default.func,onAuthorize:m.default.func,options:m.default.object,eventHandlers:m.default.arrayOf(m.default.shape({key:m.default.string,handler:m.default.func})),intl:m.default.shape({formatMessage:m.default.func}).isRequired},j=function(e){(0,s.default)(n,e);var t=C(n);function n(){return(0,i.default)(this,n),t.apply(this,arguments)}return(0,u.default)(n,[{key:"componentDidMount",value:function(){var e=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){(0,d.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},this.props.options);e.iframeAttrs=e.iframeAttrs?e.iframeAttrs:{},e.iframeAttrs.title&&console.warn("The title attribute within `iframeAttrs` object in the `options` prop is deprecated. Please start using the new `title` prop instead."),this.props.title&&(0,o.default)(e.iframeAttrs,{title:this.props.title}),this.xfcFrame=v.Consumer.mount(this.embeddedContentWrapper,this.props.src,e),this.props.onMount&&this.props.onMount(this.xfcFrame),this.addEventListener("xfc.launched",this.props.onLaunch),this.addEventListener("xfc.authorized",this.props.onAuthorize),this.addEventListeners(this.props.eventHandlers)}},{key:"addEventListener",value:function(e,t){e&&t&&this.xfcFrame.on(e,t)}},{key:"addEventListeners",value:function(e){var t=this;(e||[]).forEach((function(e){return t.addEventListener(e.key,e.handler)}))}},{key:"render",value:function(){var e=this,t=this.props,n=(t.src,t.title),r=(t.onMount,t.onLaunch,t.onAuthorize,t.options,t.eventHandlers,t.intl),d=(0,a.default)(t,_);return c.default.createElement("div",{className:E("embedded-content-container")},c.default.createElement(b.default,{className:E("visually-hidden-text"),text:r.formatMessage({id:"Terra.embeddedContentConsumer.beginEmbeddedContent"},{name:n})}),c.default.createElement("div",(0,o.default)({},d,{className:E("embedded-content-wrapper"),ref:function(t){e.embeddedContentWrapper=t}})),c.default.createElement(b.default,{className:E("visually-hidden-text"),text:r.formatMessage({id:"Terra.embeddedContentConsumer.endEmbeddedContent"},{name:n})}))}}]),n}(c.default.Component);j.propTypes=w;t.default=(0,p.injectIntl)(j)},91016:function(e,t,n){var r=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(67294)),o=n(19100),d=r(n(47166)),i=r(n(67157)),u=r(n(33597)),s=d.default.bind(u.default);o.Consumer.init();t.default=function(){return a.default.createElement(i.default,{className:s("iframe"),options:{},title:"Basic Consumer",src:"/raw/provider/cerner-terra-framework-docs/embedded-content-consumer/providers/basic-provider"})}},43526:function(e,t,n){n.r(t),t.default={"embedded-content-container":"EmbeddedContentConsumer-module__embedded-content-container___l7sNS","visually-hidden-text":"EmbeddedContentConsumer-module__visually-hidden-text___yOT75","embedded-content-wrapper":"EmbeddedContentConsumer-module__embedded-content-wrapper___as60P"}},33597:function(e,t,n){n.r(t),t.default={iframe:"Consumer-module__iframe___V+e+s"}}}]);