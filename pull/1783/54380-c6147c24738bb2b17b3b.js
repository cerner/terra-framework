"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[54380],{67157:function(e,t,r){var n=r(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(r(70215)),u=n(r(10434)),i=n(r(38416)),a=n(r(56690)),s=n(r(89728)),c=n(r(61655)),f=n(r(94993)),d=n(r(73808)),l=n(r(67294)),p=n(r(45697)),v=r(19100),h=["src","onMount","onLaunch","onAuthorize","options","eventHandlers"];function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,d.default)(e);if(t){var o=(0,d.default)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return(0,f.default)(this,r)}}var b={src:p.default.string.isRequired,onMount:p.default.func,onLaunch:p.default.func,onAuthorize:p.default.func,options:p.default.object,eventHandlers:p.default.arrayOf(p.default.shape({key:p.default.string,handler:p.default.func}))},O=function(e){(0,c.default)(r,e);var t=y(r);function r(){return(0,a.default)(this,r),t.apply(this,arguments)}return(0,s.default)(r,[{key:"componentDidMount",value:function(){var e,t,r,n=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){(0,i.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},this.props.options);n.iframeAttrs=n.iframeAttrs?n.iframeAttrs:{},null===(e=Object.keys(n.iframeAttrs))||void 0===e||!e.includes("srcdoc")||null!==(t=Object.keys(n.iframeAttrs))&&void 0!==t&&t.includes("scrolling")||(0,u.default)(n.iframeAttrs,{scrolling:"yes"}),n.resizeConfig=n.resizeConfig?n.resizeConfig:{},null!==(r=Object.keys(n.resizeConfig))&&void 0!==r&&r.includes("scrolling")||(0,u.default)(n.resizeConfig,{scrolling:!0}),this.xfcFrame=v.Consumer.mount(this.embeddedContentWrapper,this.props.src,n),this.props.onMount&&this.props.onMount(this.xfcFrame),this.addEventListener("xfc.launched",this.props.onLaunch),this.addEventListener("xfc.authorized",this.props.onAuthorize),this.addEventListeners(this.props.eventHandlers)}},{key:"addEventListener",value:function(e,t){e&&t&&this.xfcFrame.on(e,t)}},{key:"addEventListeners",value:function(e){var t=this;(e||[]).forEach((function(e){return t.addEventListener(e.key,e.handler)}))}},{key:"render",value:function(){var e=this,t=this.props,r=(t.src,t.onMount,t.onLaunch,t.onAuthorize,t.options,t.eventHandlers,(0,o.default)(t,h));return l.default.createElement("div",(0,u.default)({},r,{ref:function(t){e.embeddedContentWrapper=t}}))}}]),r}(l.default.Component);O.propTypes=b;var g=O;t.default=g},54380:function(e,t,r){var n=r(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(r(67294)),u=r(19100),i=n(r(47166)),a=n(r(67157)),s=n(r(33597)),c=i.default.bind(s.default);u.Consumer.init();var f=[{key:"EventA",handler:function(){document.getElementById("CustomEvent").style.border="thick dashed #0000FF"}}],d=function(){return o.default.createElement("div",{id:"CustomEvent"},o.default.createElement(a.default,{className:c("iframe"),src:"/raw/provider/cerner-terra-framework-docs/embedded-content-consumer/providers/custom-event-provider",eventHandlers:f,options:{iframeAttrs:{title:"Basic Consumer"}}}))};t.default=d},33597:function(e,t,r){r.r(t),t.default={iframe:"Consumer-module__iframe___V+e+s"}}}]);