"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[76018],{67157:function(e,t,n){var r=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(10434)),u=r(n(70215)),a=r(n(56690)),i=r(n(89728)),f=r(n(61655)),s=r(n(94993)),d=r(n(73808)),c=r(n(67294)),l=r(n(45697)),h=n(19100),p=["src","onMount","onLaunch","onAuthorize","options","eventHandlers"];function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,d.default)(e);if(t){var o=(0,d.default)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return(0,s.default)(this,n)}}var m={src:l.default.string.isRequired,onMount:l.default.func,onLaunch:l.default.func,onAuthorize:l.default.func,options:l.default.object,eventHandlers:l.default.arrayOf(l.default.shape({key:l.default.string,handler:l.default.func}))},y=function(e){(0,f.default)(n,e);var t=v(n);function n(){return(0,a.default)(this,n),t.apply(this,arguments)}return(0,i.default)(n,[{key:"componentDidMount",value:function(){this.xfcFrame=h.Consumer.mount(this.embeddedContentWrapper,this.props.src,this.props.options),this.props.onMount&&this.props.onMount(this.xfcFrame),this.addEventListener("xfc.launched",this.props.onLaunch),this.addEventListener("xfc.authorized",this.props.onAuthorize),this.addEventListeners(this.props.eventHandlers)}},{key:"addEventListener",value:function(e,t){e&&t&&this.xfcFrame.on(e,t)}},{key:"addEventListeners",value:function(e){var t=this;(e||[]).forEach((function(e){return t.addEventListener(e.key,e.handler)}))}},{key:"render",value:function(){var e=this,t=this.props,n=(t.src,t.onMount,t.onLaunch,t.onAuthorize,t.options,t.eventHandlers,(0,u.default)(t,p));return c.default.createElement("div",(0,o.default)({},n,{ref:function(t){e.embeddedContentWrapper=t}}))}}]),n}(c.default.Component);y.propTypes=m;var L=y;t.default=L},76018:function(e,t,n){var r=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(67294)),u=n(19100),a=r(n(47166)),i=r(n(67157)),f=r(n(33597)),s=a.default.bind(f.default);u.Consumer.init();var d=function(){return o.default.createElement(i.default,{className:s("iframe"),srcdoc:"<h2>Inline HTML with srcdoc</h2><p>Inline HTML content can be used to render the view in the iframe.</p>",options:{iframeAttrs:{id:"iframe-with-srcdoc",title:"Inline HTML Content",width:"100%",height:"100px"}}})};t.default=d},33597:function(e,t,n){n.r(t),t.default={iframe:"Consumer-module__iframe___V+e+s"}}}]);