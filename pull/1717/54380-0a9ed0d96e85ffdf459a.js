"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[54380],{67157:function(e,t,r){var n=r(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(r(70215)),s=n(r(10434)),i=n(r(38416)),u=n(r(56690)),a=n(r(89728)),c=n(r(61655)),f=n(r(94993)),l=n(r(73808)),d=n(r(67294)),p=n(r(45697)),h=r(19100),v=["src","srcdoc","title","scrolling","onMount","onLaunch","onAuthorize","options","eventHandlers"];function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,l.default)(e);if(t){var o=(0,l.default)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return(0,f.default)(this,r)}}var b={src:p.default.string.isRequired,srcdoc:p.default.string,title:p.default.string,scrolling:p.default.bool,onMount:p.default.func,onLaunch:p.default.func,onAuthorize:p.default.func,options:p.default.object,eventHandlers:p.default.arrayOf(p.default.shape({key:p.default.string,handler:p.default.func}))},g=function(e){(0,c.default)(r,e);var t=y(r);function r(){return(0,u.default)(this,r),t.apply(this,arguments)}return(0,a.default)(r,[{key:"componentDidMount",value:function(){var e=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){(0,i.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},this.props.options);null==e.iframeAttrs&&(e.iframeAttrs={}),this.props.srcdoc&&(0,s.default)(e.iframeAttrs,{srcdoc:this.props.srcdoc}),this.props.title&&((0,s.default)(e.iframeAttrs,{title:this.props.title}),Object.keys(e.iframeAttrs).forEach((function(t){null==e.iframeAttrs[t]&&delete e.iframeAttrs[t]}))),null==e.resizeConfig&&(e.resizeConfig={}),!1===this.props.scrolling?((0,s.default)(e.resizeConfig,{scrolling:!1}),(0,s.default)(e.iframeAttrs,{scrolling:"no"})):((0,s.default)(e.resizeConfig,{scrolling:!0}),(0,s.default)(e.iframeAttrs,{scrolling:"yes"})),this.xfcFrame=h.Consumer.mount(this.embeddedContentWrapper,this.props.src,e),this.props.onMount&&this.props.onMount(this.xfcFrame),this.addEventListener("xfc.launched",this.props.onLaunch),this.addEventListener("xfc.authorized",this.props.onAuthorize),this.addEventListeners(this.props.eventHandlers)}},{key:"addEventListener",value:function(e,t){e&&t&&this.xfcFrame.on(e,t)}},{key:"addEventListeners",value:function(e){var t=this;(e||[]).forEach((function(e){return t.addEventListener(e.key,e.handler)}))}},{key:"render",value:function(){var e=this,t=this.props,r=(t.src,t.srcdoc,t.title,t.scrolling,t.onMount,t.onLaunch,t.onAuthorize,t.options,t.eventHandlers,(0,o.default)(t,v));return d.default.createElement("div",(0,s.default)({},r,{ref:function(t){e.embeddedContentWrapper=t}}))}}]),r}(d.default.Component);g.propTypes=b,g.defaultProps={scrolling:!0};var O=g;t.default=O},54380:function(e,t,r){var n=r(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(r(67294)),s=r(19100),i=n(r(47166)),u=n(r(67157)),a=n(r(33597)),c=i.default.bind(a.default);s.Consumer.init();var f=[{key:"EventA",handler:function(){document.getElementById("CustomEvent").style.border="thick dashed #0000FF"}}],l=function(){return o.default.createElement("div",{id:"CustomEvent"},o.default.createElement(u.default,{className:c("iframe"),src:"/raw/provider/cerner-terra-framework-docs/embedded-content-consumer/providers/custom-event-provider",eventHandlers:f,options:{iframeAttrs:{title:"Basic Consumer"}}}))};t.default=l},33597:function(e,t,r){r.r(t),t.default={iframe:"Consumer-module__iframe___V+e+s"}}}]);