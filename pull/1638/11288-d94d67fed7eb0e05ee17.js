"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[11288],{11288:function(e,l,t){var n=t(64836);Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var a=n(t(67294)),i=n(t(47166)),o=n(t(27662)),s=n(t(69967)),d=i.default.bind(s.default),r=function(){return a.default.createElement("div",{className:d("content-wrapper-large")},a.default.createElement(o.default,{mainContent:a.default.createElement("div",{className:d("main-content")}),panelContent:a.default.createElement("div",{className:d("panel-content")}),panelBehavior:"squish",panelSize:"large",isOpen:!0,fill:!0}))};l.default=r},27662:function(e,l,t){var n=t(64836);Object.defineProperty(l,"__esModule",{value:!0}),l.default=l.SlidePanelPositions=void 0;var a=n(t(10434)),i=n(t(70215)),o=n(t(56690)),s=n(t(89728)),d=n(t(66115)),r=n(t(61655)),u=n(t(94993)),f=n(t(73808)),c=n(t(67294)),p=n(t(45697)),_=n(t(94184)),m=n(t(47166)),h=n(t(47341)),v=n(t(1034)),P=["panelAriaLabel","mainAriaLabel","mainContent","panelContent","panelBehavior","panelPosition","panelSize","isFullscreen","isOpen","fill"];function N(e){var l=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,n=(0,f.default)(e);if(l){var a=(0,f.default)(this).constructor;t=Reflect.construct(n,arguments,a)}else t=n.apply(this,arguments);return(0,u.default)(this,t)}}var C=m.default.bind(v.default),b={START:"start",END:"end"};l.SlidePanelPositions=b;var g={panelAriaLabel:p.default.string,mainAriaLabel:p.default.string,mainContent:p.default.node,panelContent:p.default.node,panelBehavior:p.default.oneOf(["overlay","squish"]),panelPosition:p.default.oneOf(["start","end"]),panelSize:p.default.oneOf(["small","large"]),isFullscreen:p.default.bool,isOpen:p.default.bool,fill:p.default.bool},S={panelBehavior:"overlay",panelPosition:b.END,panelSize:"small"},k=function(e){(0,r.default)(t,e);var l=N(t);function t(e){var n;return(0,o.default)(this,t),(n=l.call(this,e)).setPanelNode=n.setPanelNode.bind((0,d.default)(n)),n.mainNode=c.default.createRef(),n.setLastClicked=n.setLastClicked.bind((0,d.default)(n)),n.setDisclosingNode=n.setDisclosingNode.bind((0,d.default)(n)),n}return(0,s.default)(t,[{key:"componentDidUpdate",value:function(e){if(this.props.isOpen&&this.props.isOpen!==e.isOpen)return this.setDisclosingNode(this.lastClicked),void this.panelNode.focus();if(!this.props.isOpen&&this.props.isOpen!==e.isOpen){if(this.disclosingNode)return void this.disclosingNode.focus();this.mainNode.current.focus()}}},{key:"setPanelNode",value:function(e){this.panelNode=e}},{key:"setLastClicked",value:function(e){this.lastClicked=e.target}},{key:"setDisclosingNode",value:function(e){this.disclosingNode=e}},{key:"render",value:function(){var e=this.props,l=e.panelAriaLabel,t=e.mainAriaLabel,n=e.mainContent,o=e.panelContent,s=e.panelBehavior,d=e.panelPosition,r=e.panelSize,u=e.isFullscreen,f=e.isOpen,p=e.fill,m=(0,i.default)(e,P),h=this.context,v=(0,_.default)(C("slide-panel",{"is-open":f},{"is-fullscreen":u},{fill:p},h.className),m.className),N=c.default.createElement("div",{className:C(["panel"]),key:"panel",tabIndex:"-1","aria-label":l,"aria-hidden":f?"false":"true",ref:this.setPanelNode},o),g=c.default.createElement("div",{className:C("main"),key:"main",tabIndex:"-1","aria-label":t,"aria-hidden":f&&u?"true":"false",ref:this.mainNode,onClick:this.setLastClicked,onKeyUp:this.setLastClicked},n),S=d===b.START?c.default.createElement(c.default.Fragment,null,N,g):c.default.createElement(c.default.Fragment,null,g,N);return c.default.createElement("div",(0,a.default)({},m,{className:v,"data-slide-panel-panel-behavior":s,"data-slide-panel-panel-position":d,"data-slide-panel-panel-size":r}),S)}}]),t}(c.default.Component);k.propTypes=g,k.defaultProps=S,k.contextType=h.default;var y=k;l.default=y},69967:function(e,l,t){t.r(l),l.default={"content-wrapper":"SlidePanelDocCommon-test-module__content-wrapper___+5Bqw","content-wrapper-large":"SlidePanelDocCommon-test-module__content-wrapper-large___4O5B9","main-content":"SlidePanelDocCommon-test-module__main-content___KgtfP","panel-content":"SlidePanelDocCommon-test-module__panel-content___mRK+i","content-wrapper-toggle":"SlidePanelDocCommon-test-module__content-wrapper-toggle___eOcKz",button:"SlidePanelDocCommon-test-module__button___hxSzl"}},1034:function(e,l,t){t.r(l),l.default={"clinical-lowlight-theme":"SlidePanel-module__clinical-lowlight-theme___NdNQF","orion-fusion-theme":"SlidePanel-module__orion-fusion-theme___aBPYu","slide-panel":"SlidePanel-module__slide-panel___5vKEK",main:"SlidePanel-module__main___Jq40y",panel:"SlidePanel-module__panel___N9gHx","is-open":"SlidePanel-module__is-open___SU3q3","is-fullscreen":"SlidePanel-module__is-fullscreen___0BQTN",fill:"SlidePanel-module__fill___vHC0f"}}}]);