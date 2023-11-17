"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[90445],{67157:function(e,t,n){var r=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(70215)),i=r(n(10434)),o=r(n(38416)),u=r(n(56690)),s=r(n(89728)),d=r(n(61655)),l=r(n(94993)),f=r(n(73808)),c=r(n(67294)),p=n(25387),h=r(n(45697)),m=r(n(47166)),v=n(19100),b=r(n(29270)),y=r(n(43526)),O=["src","title","onMount","onLaunch","onAuthorize","options","eventHandlers","intl"];function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function C(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,f.default)(e);if(t){var a=(0,f.default)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return(0,l.default)(this,n)}}var w=m.default.bind(y.default),E={src:h.default.string.isRequired,title:h.default.string,onMount:h.default.func,onLaunch:h.default.func,onAuthorize:h.default.func,options:h.default.object,eventHandlers:h.default.arrayOf(h.default.shape({key:h.default.string,handler:h.default.func})),intl:h.default.shape({formatMessage:h.default.func}).isRequired},j=function(e){(0,d.default)(n,e);var t=C(n);function n(){return(0,u.default)(this,n),t.apply(this,arguments)}return(0,s.default)(n,[{key:"componentDidMount",value:function(){var e=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){(0,o.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},this.props.options);e.iframeAttrs=e.iframeAttrs?e.iframeAttrs:{},e.iframeAttrs.title&&console.warn("The title attribute within `iframeAttrs` object in the `options` prop is deprecated. Please start using the new `title` prop instead."),this.props.title&&(0,i.default)(e.iframeAttrs,{title:this.props.title}),this.xfcFrame=v.Consumer.mount(this.embeddedContentWrapper,this.props.src,e),this.props.onMount&&this.props.onMount(this.xfcFrame),this.addEventListener("xfc.launched",this.props.onLaunch),this.addEventListener("xfc.authorized",this.props.onAuthorize),this.addEventListeners(this.props.eventHandlers)}},{key:"addEventListener",value:function(e,t){e&&t&&this.xfcFrame.on(e,t)}},{key:"addEventListeners",value:function(e){var t=this;(e||[]).forEach((function(e){return t.addEventListener(e.key,e.handler)}))}},{key:"render",value:function(){var e=this,t=this.props,n=(t.src,t.title),r=(t.onMount,t.onLaunch,t.onAuthorize,t.options,t.eventHandlers,t.intl),o=(0,a.default)(t,O);return c.default.createElement(c.default.Fragment,null,c.default.createElement(b.default,{className:w("visually-hidden-text"),text:r.formatMessage({id:"Terra.embeddedContentConsumer.beginEmbeddedContent"},{name:n})}),c.default.createElement("div",(0,i.default)({},o,{ref:function(t){e.embeddedContentWrapper=t}})),c.default.createElement(b.default,{className:w("visually-hidden-text"),text:r.formatMessage({id:"Terra.embeddedContentConsumer.endEmbeddedContent"},{name:n})}))}}]),n}(c.default.Component);j.propTypes=E;t.default=(0,p.injectIntl)(j)},90445:function(e,t,n){var r=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(67294)),i=n(19100),o=r(n(47166)),u=r(n(67157)),s=r(n(33597)),d=o.default.bind(s.default);i.Consumer.init();t.default=function(){return a.default.createElement(u.default,{className:d("iframe"),src:"/raw/provider/cerner-terra-framework-docs/embedded-content-consumer/providers/custom-events-provider",title:"Basic Consumer with Scrolling",options:{iframeAttrs:{id:"basic-consumer-with-scrolling"},resizeConfig:{fixedHeight:"50px",fixedWidth:"100%",scrolling:!0}}})}},43526:function(e,t,n){n.r(t),t.default={"visually-hidden-text":"EmbeddedContentConsumer-module__visually-hidden-text___yOT75"}},33597:function(e,t,n){n.r(t),t.default={iframe:"Consumer-module__iframe___V+e+s"}}}]);