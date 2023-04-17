"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[50943],{50943:function(e,t,n){var l=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(56690)),i=l(n(89728)),o=l(n(66115)),s=l(n(61655)),r=l(n(94993)),u=l(n(73808)),d=l(n(67294)),c=l(n(47166)),f=l(n(27662)),p=l(n(69967));function m(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,l=(0,u.default)(e);if(t){var a=(0,u.default)(this).constructor;n=Reflect.construct(l,arguments,a)}else n=l.apply(this,arguments);return(0,r.default)(this,n)}}var _=c.default.bind(p.default),h=function(e){(0,s.default)(n,e);var t=m(n);function n(e){var l;return(0,a.default)(this,n),(l=t.call(this,e)).state={panelIsOpen:!0},l.handlePanelToggle=l.handlePanelToggle.bind((0,o.default)(l)),l}return(0,i.default)(n,[{key:"handlePanelToggle",value:function(){this.setState((function(e){return{panelIsOpen:!e.panelIsOpen}}))}},{key:"render",value:function(){return d.default.createElement("div",{id:"main-div",className:_("content-wrapper-toggle")},d.default.createElement(f.default,{id:"test-slide",mainContent:d.default.createElement("div",{className:_("main-content")},d.default.createElement("button",{type:"button",id:"toggle-panel-button",className:_("button"),onClick:this.handlePanelToggle},"toggle")),panelContent:d.default.createElement("div",{id:"panel-content",className:_("panel-content")},d.default.createElement("button",{id:"close-panel-button",type:"button",className:_("button"),onClick:this.handlePanelToggle},"Close panel")),panelAriaLabel:"Panel content area",mainAriaLabel:"Main content area",panelSize:"small",panelBehavior:"overlay",isOpen:this.state.panelIsOpen,fill:!0}))}}]),n}(d.default.Component);t.default=h},27662:function(e,t,n){var l=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.SlidePanelPositions=void 0;var a=l(n(10434)),i=l(n(70215)),o=l(n(56690)),s=l(n(89728)),r=l(n(66115)),u=l(n(61655)),d=l(n(94993)),c=l(n(73808)),f=l(n(67294)),p=l(n(45697)),m=l(n(94184)),_=l(n(47166)),h=l(n(47341)),v=l(n(1034)),g=["panelAriaLabel","mainAriaLabel","mainContent","panelContent","panelBehavior","panelPosition","panelSize","isFullscreen","isOpen","fill"];function P(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,l=(0,c.default)(e);if(t){var a=(0,c.default)(this).constructor;n=Reflect.construct(l,arguments,a)}else n=l.apply(this,arguments);return(0,d.default)(this,n)}}var b=_.default.bind(v.default),y={START:"start",END:"end"};t.SlidePanelPositions=y;var N={panelAriaLabel:p.default.string,mainAriaLabel:p.default.string,mainContent:p.default.node,panelContent:p.default.node,panelBehavior:p.default.oneOf(["overlay","squish"]),panelPosition:p.default.oneOf(["start","end"]),panelSize:p.default.oneOf(["small","large"]),isFullscreen:p.default.bool,isOpen:p.default.bool,fill:p.default.bool},C={panelBehavior:"overlay",panelPosition:y.END,panelSize:"small"},S=function(e){(0,u.default)(n,e);var t=P(n);function n(e){var l;return(0,o.default)(this,n),(l=t.call(this,e)).setPanelNode=l.setPanelNode.bind((0,r.default)(l)),l.mainNode=f.default.createRef(),l.setLastClicked=l.setLastClicked.bind((0,r.default)(l)),l.setDisclosingNode=l.setDisclosingNode.bind((0,r.default)(l)),l}return(0,s.default)(n,[{key:"componentDidUpdate",value:function(e){if(this.props.isOpen&&this.props.isOpen!==e.isOpen)return this.setDisclosingNode(this.lastClicked),void this.panelNode.focus();if(!this.props.isOpen&&this.props.isOpen!==e.isOpen){if(this.disclosingNode)return void this.disclosingNode.focus();this.mainNode.current.focus()}}},{key:"setPanelNode",value:function(e){this.panelNode=e}},{key:"setLastClicked",value:function(e){this.lastClicked=e.target}},{key:"setDisclosingNode",value:function(e){this.disclosingNode=e}},{key:"render",value:function(){var e=this.props,t=e.panelAriaLabel,n=e.mainAriaLabel,l=e.mainContent,o=e.panelContent,s=e.panelBehavior,r=e.panelPosition,u=e.panelSize,d=e.isFullscreen,c=e.isOpen,p=e.fill,_=(0,i.default)(e,g),h=this.context,v=(0,m.default)(b("slide-panel",{"is-open":c},{"is-fullscreen":d},{fill:p},h.className),_.className),P=f.default.createElement("div",{className:b(["panel"]),key:"panel",tabIndex:"-1","aria-label":t,"aria-hidden":c?"false":"true",ref:this.setPanelNode},o),N=f.default.createElement("div",{className:b("main"),key:"main",tabIndex:"-1","aria-label":n,"aria-hidden":c&&d?"true":"false",ref:this.mainNode,onClick:this.setLastClicked,onKeyUp:this.setLastClicked},l),C=r===y.START?f.default.createElement(f.default.Fragment,null,P,N):f.default.createElement(f.default.Fragment,null,N,P);return f.default.createElement("div",(0,a.default)({},_,{className:v,"data-slide-panel-panel-behavior":s,"data-slide-panel-panel-position":r,"data-slide-panel-panel-size":u}),C)}}]),n}(f.default.Component);S.propTypes=N,S.defaultProps=C,S.contextType=h.default;var k=S;t.default=k},69967:function(e,t,n){n.r(t),t.default={"content-wrapper":"SlidePanelDocCommon-test-module__content-wrapper___+5Bqw","content-wrapper-large":"SlidePanelDocCommon-test-module__content-wrapper-large___4O5B9","main-content":"SlidePanelDocCommon-test-module__main-content___KgtfP","panel-content":"SlidePanelDocCommon-test-module__panel-content___mRK+i","content-wrapper-toggle":"SlidePanelDocCommon-test-module__content-wrapper-toggle___eOcKz",button:"SlidePanelDocCommon-test-module__button___hxSzl"}},1034:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"SlidePanel-module__clinical-lowlight-theme___NdNQF","orion-fusion-theme":"SlidePanel-module__orion-fusion-theme___aBPYu","slide-panel":"SlidePanel-module__slide-panel___5vKEK",main:"SlidePanel-module__main___Jq40y",panel:"SlidePanel-module__panel___N9gHx","is-open":"SlidePanel-module__is-open___SU3q3","is-fullscreen":"SlidePanel-module__is-fullscreen___0BQTN",fill:"SlidePanel-module__fill___vHC0f"}}}]);