(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[54380],{67157:function(e,t,n){"use strict";var r=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(70215)),u=r(n(27424)),i=r(n(10434)),l=r(n(38416)),a=r(n(56690)),s=r(n(89728)),c=r(n(61655)),d=r(n(94993)),f=r(n(73808)),m=r(n(67294)),p=r(n(45697)),h=n(19100),v=r(n(93671)),_=r(n(43526)),b=["src","title","onMount","onLaunch","onAuthorize","options","eventHandlers"];function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function O(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,f.default)(e);if(t){var o=(0,f.default)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return(0,d.default)(this,n)}}var E={src:p.default.string.isRequired,title:p.default.string,onMount:p.default.func,onLaunch:p.default.func,onAuthorize:p.default.func,options:p.default.object,eventHandlers:p.default.arrayOf(p.default.shape({key:p.default.string,handler:p.default.func}))},w=function(e){(0,c.default)(n,e);var t=O(n);function n(){return(0,a.default)(this,n),t.apply(this,arguments)}return(0,s.default)(n,[{key:"componentDidMount",value:function(){var e,t,n=this,r=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){(0,l.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},this.props.options);r.iframeAttrs=r.iframeAttrs?r.iframeAttrs:{},r.iframeAttrs.title&&console.warn("The title attribute within `iframeAttrs` object in the `options` prop is deprecated. Please start using the new `title` prop instead."),this.props.title&&(0,i.default)(r.iframeAttrs,{title:this.props.title});var o="outline: ".concat(_.default.focusOutline),a="outline: ".concat(_.default.blurOutline);r.focusIndicator={focusStyleStr:o,blurStyleStr:a},this.xfcFrame=h.Consumer.mount(this.embeddedContentWrapper,this.props.src,r),this.props.onMount&&this.props.onMount(this.xfcFrame),null===(e=this.xfcFrame)||void 0===e||null===(e=e.iframe)||void 0===e||null===(e=e.contentWindow)||void 0===e||e.addEventListener("focus",(function(){var e=(0,v.default)(o);Object.entries(e).forEach((function(e){var t=(0,u.default)(e,2),r=t[0],o=t[1];n.xfcFrame.iframe.style[r]=o}))}),!0),null===(t=this.xfcFrame)||void 0===t||null===(t=t.iframe)||void 0===t||null===(t=t.contentWindow)||void 0===t||t.addEventListener("blur",(function(){var e=(0,v.default)(a);Object.entries(e).forEach((function(e){var t=(0,u.default)(e,2),r=t[0],o=t[1];n.xfcFrame.iframe.style[r]=o}))}),!0),this.addEventListener("xfc.launched",this.props.onLaunch),this.addEventListener("xfc.authorized",this.props.onAuthorize),this.addEventListeners(this.props.eventHandlers)}},{key:"addEventListener",value:function(e,t){e&&t&&this.xfcFrame.on(e,t)}},{key:"addEventListeners",value:function(e){var t=this;(e||[]).forEach((function(e){return t.addEventListener(e.key,e.handler)}))}},{key:"render",value:function(){var e=this,t=this.props,n=(t.src,t.title,t.onMount,t.onLaunch,t.onAuthorize,t.options,t.eventHandlers,(0,o.default)(t,b));return m.default.createElement("div",(0,i.default)({},n,{ref:function(t){e.embeddedContentWrapper=t}}))}}]),n}(m.default.Component);w.propTypes=E;t.default=w},54380:function(e,t,n){"use strict";var r=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(67294)),u=n(19100),i=r(n(47166)),l=r(n(67157)),a=r(n(33597)),s=i.default.bind(a.default);u.Consumer.init();var c=[{key:"EventA",handler:function(){document.getElementById("CustomEvent").style.border="thick dashed #0000FF"}}];t.default=function(){return o.default.createElement("div",{className:s("consumer-content-wrapper")},o.default.createElement("h2",null,"Embedded Content"),o.default.createElement("p",null,"The following is an embedded content within an iframe."),o.default.createElement("div",{id:"CustomEvent"},o.default.createElement(l.default,{className:s("iframe"),src:"/raw/provider/cerner-terra-framework-docs/embedded-content-consumer/providers/custom-event-provider",eventHandlers:c,title:"Basic Consumer",options:{}})))}},43526:function(e,t,n){"use strict";n.r(t),t.default={focusOutline:"var(--terra-embedded-content-consumer-focus-outline, 2px dashed blue)",blurOutline:"var(--terra-embedded-content-consumer-blur-outline, none)","clinical-lowlight-theme":"EmbeddedContentConsumer-module__clinical-lowlight-theme___d937s","orion-fusion-theme":"EmbeddedContentConsumer-module__orion-fusion-theme___j2+8Q","focus-outline":"EmbeddedContentConsumer-module__focus-outline___pMTR5","blur-outline":"EmbeddedContentConsumer-module__blur-outline___4kxcP"}},33597:function(e,t,n){"use strict";n.r(t),t.default={focusOutline:"var(--terra-embedded-content-consumer-focus-outline, 2px dashed blue)",blurOutline:"var(--terra-embedded-content-consumer-blur-outline, none)","clinical-lowlight-theme":"Consumer-module__clinical-lowlight-theme___rWob4","orion-fusion-theme":"Consumer-module__orion-fusion-theme___jIp00","focus-outline":"Consumer-module__focus-outline___YQJT9","blur-outline":"Consumer-module__blur-outline___9WozF",iframe:"Consumer-module__iframe___V+e+s","consumer-content-wrapper":"Consumer-module__consumer-content-wrapper___FwqzI"}},93671:function(e,t,n){var r=n(18139);function o(e,t){var n,o=null;if(!e||"string"!=typeof e)return o;for(var u,i,l=r(e),a="function"==typeof t,s=0,c=l.length;s<c;s++)u=(n=l[s]).property,i=n.value,a?t(u,i,n):i&&(o||(o={}),o[u]=i);return o}e.exports=o,e.exports.default=o}}]);