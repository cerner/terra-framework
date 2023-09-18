"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[28905],{67157:function(e,t,n){var r=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(70215)),u=r(n(10434)),a=r(n(38416)),i=r(n(56690)),s=r(n(89728)),f=r(n(61655)),l=r(n(94993)),c=r(n(73808)),d=r(n(67294)),v=r(n(45697)),p=n(19100),h=["src","onMount","onLaunch","onAuthorize","options","eventHandlers"];function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,c.default)(e);if(t){var o=(0,c.default)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return(0,l.default)(this,n)}}var b={src:v.default.string.isRequired,onMount:v.default.func,onLaunch:v.default.func,onAuthorize:v.default.func,options:v.default.object,eventHandlers:v.default.arrayOf(v.default.shape({key:v.default.string,handler:v.default.func}))},E=function(e){(0,f.default)(n,e);var t=m(n);function n(){return(0,i.default)(this,n),t.apply(this,arguments)}return(0,s.default)(n,[{key:"componentDidMount",value:function(){var e,t,n,r=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){(0,a.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},this.props.options);r.iframeAttrs=r.iframeAttrs?r.iframeAttrs:{},null===(e=Object.keys(r.iframeAttrs))||void 0===e||!e.includes("srcdoc")||null!==(t=Object.keys(r.iframeAttrs))&&void 0!==t&&t.includes("scrolling")||(0,u.default)(r.iframeAttrs,{scrolling:"yes"}),r.resizeConfig=r.resizeConfig?r.resizeConfig:{},null!==(n=Object.keys(r.resizeConfig))&&void 0!==n&&n.includes("scrolling")||(0,u.default)(r.resizeConfig,{scrolling:!0}),this.xfcFrame=p.Consumer.mount(this.embeddedContentWrapper,this.props.src,r),this.props.onMount&&this.props.onMount(this.xfcFrame),this.addEventListener("xfc.launched",this.props.onLaunch),this.addEventListener("xfc.authorized",this.props.onAuthorize),this.addEventListeners(this.props.eventHandlers)}},{key:"addEventListener",value:function(e,t){e&&t&&this.xfcFrame.on(e,t)}},{key:"addEventListeners",value:function(e){var t=this;(e||[]).forEach((function(e){return t.addEventListener(e.key,e.handler)}))}},{key:"render",value:function(){var e=this,t=this.props,n=(t.src,t.onMount,t.onLaunch,t.onAuthorize,t.options,t.eventHandlers,(0,o.default)(t,h));return d.default.createElement("div",(0,u.default)({},n,{ref:function(t){e.embeddedContentWrapper=t}}))}}]),n}(d.default.Component);E.propTypes=b;var k=E;t.default=k},28905:function(e,t,n){var r=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(56690)),u=r(n(89728)),a=r(n(66115)),i=r(n(61655)),s=r(n(94993)),f=r(n(73808)),l=r(n(67294)),c=r(n(47166)),d=n(19100),v=r(n(67157)),p=r(n(33597));function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,f.default)(e);if(t){var o=(0,f.default)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return(0,s.default)(this,n)}}var y=c.default.bind(p.default);d.Consumer.init();var m=function(e){(0,i.default)(n,e);var t=h(n);function n(e){var r;return(0,o.default)(this,n),(r=t.call(this,e)).onMount=r.onMount.bind((0,a.default)(r)),r.handleEventA=r.handleEventA.bind((0,a.default)(r)),r.handleEventB=r.handleEventB.bind((0,a.default)(r)),r}return(0,u.default)(n,[{key:"handleEventA",value:function(){document.getElementById("CustomEvents").style.border="thick dashed #0000FF",this.frame.trigger("Event-Reply",{eventReply:"eventA",borderColor:"#0000FF"})}},{key:"handleEventB",value:function(){document.getElementById("CustomEvents").style.border="thick dashed #00FF00",this.frame.trigger("Event-Reply",{eventReply:"eventB",borderColor:"#00FF00"})}},{key:"onMount",value:function(e){this.frame=e}},{key:"render",value:function(){var e=[{key:"EventA",handler:this.handleEventA},{key:"EventB",handler:this.handleEventB}];return l.default.createElement("div",{id:"CustomEvents"},l.default.createElement(v.default,{className:y("iframe"),src:"/raw/provider/cerner-terra-framework-docs/embedded-content-consumer/providers/custom-events-provider",options:{iframeAttrs:{title:"Custom events example"}},onMount:this.onMount,eventHandlers:e}))}}]),n}(l.default.Component);t.default=m},33597:function(e,t,n){n.r(t),t.default={iframe:"Consumer-module__iframe___V+e+s"}}}]);