"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[76018],{67157:function(e,t,n){var o=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(70215)),i=o(n(861)),a=o(n(10434)),l=o(n(38416)),d=o(n(56690)),u=o(n(89728)),s=o(n(61655)),c=o(n(94993)),f=o(n(73808)),m=o(n(67294)),h=n(25387),p=o(n(45697)),b=o(n(47166)),v=n(19100),y=o(n(29270)),_=o(n(43526)),g=["src","title","onMount","onLaunch","onAuthorize","options","eventHandlers","intl"];function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function E(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=(0,f.default)(e);if(t){var r=(0,f.default)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return(0,c.default)(this,n)}}var x=b.default.bind(_.default),q={src:p.default.string.isRequired,title:p.default.string,onMount:p.default.func,onLaunch:p.default.func,onAuthorize:p.default.func,options:p.default.object,eventHandlers:p.default.arrayOf(p.default.shape({key:p.default.string,handler:p.default.func})),intl:p.default.shape({formatMessage:p.default.func}).isRequired},C=function(e){(0,s.default)(n,e);var t=E(n);function n(){return(0,d.default)(this,n),t.apply(this,arguments)}return(0,u.default)(n,[{key:"componentDidMount",value:function(){var e=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach((function(t){(0,l.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},this.props.options);e.iframeAttrs=e.iframeAttrs?e.iframeAttrs:{},e.iframeAttrs.title&&console.warn("The title attribute within `iframeAttrs` object in the `options` prop is deprecated. Please start using the new `title` prop instead."),this.props.title&&(0,a.default)(e.iframeAttrs,{title:this.props.title}),e.focusIndicator={classNameFocusStyle:x("iframe-focus-style")},this.xfcFrame=v.Consumer.mount(this.embeddedContentWrapper,this.props.src,e),this.props.onMount&&this.props.onMount(this.xfcFrame),e.iframeAttrs.srcdoc&&this.setupEventListenersForFrameSrcDoc(),this.addEventListener("xfc.launched",this.props.onLaunch),this.addEventListener("xfc.authorized",this.props.onAuthorize),this.addEventListeners(this.props.eventHandlers)}},{key:"setupEventListenersForFrameSrcDoc",value:function(){var e,t,n=this,o=function(){var e,t=null===(e=n.xfcFrame)||void 0===e||null===(e=e.iframe)||void 0===e||null===(e=e.contentWindow)||void 0===e?void 0:e.document;return t.documentElement.scrollHeight>t.documentElement.clientHeight||t.body.scrollHeight>t.body.clientHeight||t.documentElement.scrollWidth>t.documentElement.clientWidth||t.body.scrollWidth>t.body.clientWidth},r=function(){var e;return"no"!==(null===(e=n.xfcFrame)||void 0===e||null===(e=e.iframe)||void 0===e?void 0:e.getAttribute("scrolling"))};window.onload=function(){var e;n.hasFocusableElement=(0,i.default)(null===(e=n.xfcFrame)||void 0===e||null===(e=e.iframe)||void 0===e||null===(e=e.contentWindow)||void 0===e?void 0:e.document.body.querySelectorAll("".concat("a[href]:not([tabindex='-1']), area[href]:not([tabindex='-1']), input:not([disabled]):not([tabindex='-1']), select:not([disabled]):not([tabindex='-1']), textarea:not([disabled]):not([tabindex='-1']), button:not([disabled]):not([tabindex='-1']), [contentEditable=true]:not([tabindex='-1'])"))).some((function(e){return!e.hasAttribute("disabled")&&!e.getAttribute("aria-hidden")&&!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)&&"hidden"!==window.getComputedStyle(e).visibility&&null===e.closest("[inert]")})),r()&&o()&&!1===n.hasFocusableElement&&(n.xfcFrame.iframe.contentWindow.document.body.tabIndex=0)},window.onresize=function(){var e;r()&&o()&&!1===n.hasFocusableElement?n.xfcFrame.iframe.contentWindow.document.body.tabIndex=0:"0"===(null===(e=n.xfcFrame)||void 0===e||null===(e=e.iframe)||void 0===e||null===(e=e.contentWindow)||void 0===e?void 0:e.document.body.getAttribute("tabIndex"))&&n.xfcFrame.iframe.contentWindow.document.body.removeAttribute("tabIndex")},null===(e=this.xfcFrame)||void 0===e||null===(e=e.iframe)||void 0===e||null===(e=e.contentWindow)||void 0===e||e.addEventListener("focus",(function(){!0!==n.hasFocusableElement&&o()&&r()&&o()&&!1===n.hasFocusableElement&&(n.xfcFrame.iframe.className=x("iframe-focus-style"))}),!0),null===(t=this.xfcFrame)||void 0===t||null===(t=t.iframe)||void 0===t||null===(t=t.contentWindow)||void 0===t||t.addEventListener("blur",(function(){n.xfcFrame.iframe.removeAttribute("class")}),!0)}},{key:"addEventListener",value:function(e,t){e&&t&&this.xfcFrame.on(e,t)}},{key:"addEventListeners",value:function(e){var t=this;(e||[]).forEach((function(e){return t.addEventListener(e.key,e.handler)}))}},{key:"render",value:function(){var e=this,t=this.props,n=(t.src,t.title),o=(t.onMount,t.onLaunch,t.onAuthorize,t.options,t.eventHandlers,t.intl),i=(0,r.default)(t,g);return m.default.createElement(m.default.Fragment,null,m.default.createElement(y.default,{className:x("visually-hidden-text"),text:o.formatMessage({id:"Terra.embeddedContentConsumer.beginEmbeddedContent"},{name:n})}),m.default.createElement("div",(0,a.default)({},i,{ref:function(t){e.embeddedContentWrapper=t}})),m.default.createElement(y.default,{className:x("visually-hidden-text"),text:o.formatMessage({id:"Terra.embeddedContentConsumer.endEmbeddedContent"},{name:n})}))}}]),n}(m.default.Component);C.propTypes=q;t.default=(0,h.injectIntl)(C)},76018:function(e,t,n){var o=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(67294)),i=n(19100),a=o(n(47166)),l=o(n(67157)),d=o(n(33597)),u=a.default.bind(d.default);i.Consumer.init();t.default=function(){return r.default.createElement("div",{className:u("consumer-content-wrapper")},r.default.createElement("h2",null,"Embedded Content"),r.default.createElement("p",null,"The following is an embedded content within an iframe."),r.default.createElement(l.default,{className:u("iframe"),title:"Inline HTML Content",options:{iframeAttrs:{id:"iframe-with-srcdoc",srcdoc:"\n    <!DOCTYPE html>\n    <html>\n    <head>\n      <title>\n        Example of iframe srcdoc for inline html\n      </title>\n    </head>\n\n    <body>\n    <p><span class=&quot;seoSummary&quot;>The <strong>HTML Inline Frame element (<code>&lt;iframe&gt;</code>)</strong> represents a nested, embedding another HTML page into the current one.</span></p><p><span id=&quot;iframe&quot;></span><span id=&quot;iframe_tag&quot;></span><code class=&quot;html&quot; title=&quot;Inline Frame&quot; style=&quot;font-size:116%;&quot;><b style=&quot;color:#006633&quot;>&lt;iframe</b><b style=&quot;color:#006633&quot;>&gt;</b>...<b style=&quot;color:#006633&quot;>&lt;/iframe&gt;</b></code></p><dl><dd>An inline frame places another HTML document in a frame. Unlike an <code class=&quot;nowrap&quot; style=&quot;&quot;>&lt;object /&gt;</code> element, an <code class=&quot;nowrap&quot; style=&quot;&quot;>&lt;iframe&gt;</code> can be the &quot;target&quot; frame for links defined by other elements, and it can be selected by the user agent as the focus for printing, viewing its source, and so on.</dd><dd>The content of the element is used as alternative text to be displayed if the browser does not support inline frames.</dd><dd>First introduced by Microsoft Internet Explorer in 1997, <b>standardized</b> in HTML 4.0 Transitional, <b>allowed</b> in HTML5.</dd></dl>\n    </body>\n    </html>",width:"100%",height:"100px",scrolling:"yes"}}}))}},43526:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"EmbeddedContentConsumer-module__clinical-lowlight-theme___d937s","orion-fusion-theme":"EmbeddedContentConsumer-module__orion-fusion-theme___j2+8Q","visually-hidden-text":"EmbeddedContentConsumer-module__visually-hidden-text___yOT75","iframe-focus-style":"EmbeddedContentConsumer-module__iframe-focus-style___9iFop"}},33597:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Consumer-module__clinical-lowlight-theme___rWob4","orion-fusion-theme":"Consumer-module__orion-fusion-theme___jIp00","visually-hidden-text":"Consumer-module__visually-hidden-text___9vEs0","iframe-focus-style":"Consumer-module__iframe-focus-style___+PTDK",iframe:"Consumer-module__iframe___V+e+s","consumer-content-wrapper":"Consumer-module__consumer-content-wrapper___FwqzI"}}}]);